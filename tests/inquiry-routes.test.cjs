/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS harness deliberately isolates route imports. */
// Offline route integration tests: a closed module loader allows only these mocks.
// No credentials loaded; fetch/network/provider/DB calls are never available to routes.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const crypto = require('node:crypto');
const path = require('node:path');

function harness({ db = false, dbError = false, officeError = false, confirmationError = false, confirmationThrow = false, apiKey = true, officeDelayMs = 0, initialTime = Date.parse("2026-09-15T16:00:00.000Z"), transientFailures = 0 } = {}) {
  let now = initialTime;
  let remainingFailures = transientFailures;
  class Clock extends Date {
    constructor(...args) { super(...(args.length ? args : [now])); }
    static now() { return now; }
  }
  const sent = [], calls = [], rows = [], events = [], logs = [], keys = new Map();
  const send = async (mail, options) => {
    calls.push({ mail, options });
    const confirmation = mail.subject === 'Vielen Dank für Ihre Anfrage';
    if (!confirmation) now += officeDelayMs;
    if (confirmation && remainingFailures-- > 0) return { data: null, error: { name: 'rate_limit_exceeded' } };
    if (confirmation && confirmationThrow) throw Error('network down');
    if ((confirmation && confirmationError) || (!confirmation && officeError)) return { data: null, error: { message: 'failed' } };
    const existed = keys.has(options.idempotencyKey);
    if (!existed) {
      keys.set(options.idempotencyKey, { id: String(keys.size + 1), body: JSON.stringify(mail) });
      sent.push(mail);
    }
    const result = keys.get(options.idempotencyKey);
    const fingerprint = value => { const parsed = JSON.parse(value); delete parsed.scheduledAt; return JSON.stringify(parsed); };
    if (fingerprint(result.body) !== fingerprint(JSON.stringify(mail))) return { data: null, error: { name: 'invalid_idempotent_request' } };
    return { data: { id: result.id }, error: null, headers: { 'idempotent-replayed': String(existed) } };
  };
  const mocks = {
    'node:crypto': crypto,
    'node:timers/promises': { setTimeout: async () => {} },
    'next/server': { NextResponse: { json: (body, init) => Response.json(body, init) } },
    'resend': { Resend: class { emails = { send }; } },
    '@vercel/analytics/server': { track: async (...args) => events.push(args) },
    '@/lib/supabaseClient': { getSupabase: () => db ? { from: () => ({ insert: async row => { rows.push(row); return { error: dbError ? { message: 'db unavailable' } : null }; } }) } : null },
  };
  const cache = {};
  function load(file) {
    if (cache[file]) return cache[file];
    const source = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
    const testModule = { exports: {} };
    vm.runInNewContext(code, { module: testModule, exports: testModule.exports, require: name => {
      if (name === '@/lib/inquiryMail') return load('src/lib/inquiryMail.ts');
      if (mocks[name]) return mocks[name];
      throw Error('Unexpected import: ' + name);
    }, process: { env: { NODE_ENV: 'production', ...(apiKey ? { RESEND_API_KEY: 'offline-fake' } : {}) } }, Buffer, URL, Date: Clock, console: { info: (...x) => logs.push(x), error: (...x) => logs.push(x), warn: (...x) => logs.push(x) } });
    return cache[file] = testModule.exports;
  }
  return { contact: load('src/app/api/kontakt/route.ts').POST, lead: load('src/app/api/lead/route.ts').POST, sent, calls, rows, events, logs, providerCache: keys, advance: ms => { now += ms; }, schedule: load("src/lib/inquiryMail.ts").scheduleInquiryConfirmation, sender: { emails: { send } } };
}
const contact = { name: 'Offline Test', email: 'TEST@example.test', betreff: 'Prüfung', nachricht: 'Nur fiktive Testdaten', website: '' };
const lead = { ...contact, intent: 'beratung', consent: true };
function request(body, { origin = 'https://www.formazin-partner.de', raw, contentType = 'application/json' } = {}) {
  return new Request('https://www.formazin-partner.de/api/kontakt', { method: 'POST', headers: { ...(origin ? { origin } : {}), 'content-type': contentType }, body: raw ?? JSON.stringify(body) });
}

test('both forms acknowledge only after acceptance, from office, without reflected input', async () => {
  for (const route of ['contact', 'lead']) {
    const h = harness({ db: route === 'lead' });
    assert.equal((await h[route](request(route === 'lead' ? lead : contact))).status, 200);
    assert.equal(h.sent.length, 2);
    const mail = h.sent[1];
    assert.equal(mail.from, 'Dr.-Ing. Formazin & Partner mbB <kontakt@formazin-partner.de>');
    assert.equal(mail.replyTo, 'kontakt@formazin-partner.de');
    assert.deepEqual(Array.from(mail.to), ['test@example.test']);
    assert.match(mail.text, /Unser Büro wird sich bei Ihnen melden\./);
    assert.ok(!mail.text.includes(contact.nachricht));
    assert.ok(!mail.text.includes(contact.name));
    assert.match(mail.html, /FuP-Logo2025-quer-RGB\.png/);
    assert.match(mail.html, /#2d4196/);
    assert.match(mail.html, /max-width:600px/);
    assert.match(mail.html, /Unser Büro wird sich bei Ihnen melden\./);
    assert.ok(!mail.html.includes(contact.nachricht));
    assert.ok(!mail.html.includes(contact.name));
    assert.equal(mail.headers['Auto-Submitted'], 'auto-replied');
    assert.equal(h.events.length, 1);
  }
});
test('concurrent repeats and changed inquiries across forms share one recipient acknowledgment', async () => {
  const h = harness();
  await Promise.all([h.contact(request(contact)), h.contact(request(contact))]);
  h.advance(60_000);
  await h.lead(request({ ...lead, name: 'Different name', nachricht: 'Changed content' }));
  assert.equal(h.sent.filter(x => x.subject === 'Vielen Dank für Ihre Anfrage').length, 1);
  assert.equal(h.sent.filter(x => x.subject.startsWith('Kontaktanfrage')).length, 1);
  assert.equal(h.sent.at(1).scheduledAt, '2026-09-15T16:25:00.000Z');
  assert.ok(!JSON.stringify(h.logs).includes('schedule_failed'));
});
test('provider rejection prevents false success and confirmation if no database acceptance', async () => {
  for (const route of ['contact', 'lead']) {
    const h = harness({ officeError: true });
    assert.equal((await h[route](request(route === 'lead' ? lead : contact))).status, 500);
    assert.equal(h.calls.length, 1);
    assert.equal(h.events.length, 0);
  }
});
test('saved lead is acknowledged even if office mail fails, database failure can fall back to mail', async () => {
  for (const options of [{ db: true, officeError: true }, { db: true, dbError: true }]) {
    const h = harness(options);
    assert.equal((await h.lead(request(lead))).status, 200);
    assert.equal(h.rows.length, 1);
    assert.equal(h.sent.at(-1).subject, 'Vielen Dank für Ihre Anfrage');
  }
});
test('confirmation error or exception preserves accepted inquiry and emits redacted failure log', async () => {
  for (const opts of [{ confirmationError: true }, { confirmationThrow: true }]) {
    for (const route of ['contact', 'lead']) {
      const h = harness(opts);
      assert.equal((await h[route](request(route === 'lead' ? lead : contact))).status, 200);
      assert.equal(h.sent.length, 1);
      assert.match(JSON.stringify(h.logs), /inquiry_confirmation_schedule_failed/);
      assert.ok(!JSON.stringify(h.logs).includes('example.test'));
    }
  }
});
test('invalid inputs, cross-site requests and bots cause no mail or database writes', async () => {
  const cases = [
    [{ email: 'a@example.test,b@example.test' }, {}, 400],
    [{ email: 'a@example.test\r\nBcc:b@example.test' }, {}, 400],
    [{ name: true }, {}, 400], [{ name: {} }, {}, 400],
    [{ nachricht: 'a'.repeat(10001) }, {}, 400],
    [{ website: 'spam' }, {}, 200],
    [{}, { origin: 'https://attacker.test' }, 403], [{}, { origin: null }, 403],
    [{}, { raw: '{broken' }, 400], [{}, { raw: 'null' }, 400],
    [{}, { raw: 'a'.repeat(32769) }, 413], [{}, { contentType: 'text/plain' }, 415],
  ];
  for (const route of ['contact', 'lead']) for (const [patch, options, status] of cases) {
    const h = harness({ db: true });
    assert.equal((await h[route](request({ ...(route === 'lead' ? lead : contact), ...patch }, options))).status, status);
    assert.equal(h.sent.length, 0);
    assert.equal(h.rows.length, 0);
  }
});
test('missing consent, empty required fields and multiline subjects are rejected', async () => {
  const h = harness();
  assert.equal((await h.lead(request({ ...lead, consent: false }))).status, 400);
  assert.equal((await h.lead(request({ ...lead, intent: 'bad\r\nsubject' }))).status, 400);
  assert.equal((await h.contact(request({ ...contact, betreff: 'bad\r\nsubject' }))).status, 400);
  assert.equal((await h.contact(request({ ...contact, nachricht: '  ' }))).status, 400);
  assert.equal(h.sent.length, 0);
});
test('unconfigured destinations fail, database-only acceptance remains possible', async () => {
  const h = harness({ apiKey: false });
  assert.equal((await h.contact(request(contact))).status, 500);
  assert.equal((await h.lead(request(lead))).status, 500);
  const db = harness({ apiKey: false, db: true });
  assert.equal((await db.lead(request(lead))).status, 200);
  assert.equal(db.sent.length, 0);
});


test('both forms anchor 25 minutes to server receipt, not slow office delivery or client input', async () => {
  for (const route of ['contact', 'lead']) {
    const h = harness({ officeDelayMs: 90_000 });
    assert.equal((await h[route](request({ ...(route === 'lead' ? lead : contact), received_at: '2000-01-01', scheduledAt: 'in 1 second' }))).status, 200);
    assert.equal(h.sent[0].scheduledAt, undefined, 'office delivery remains immediate');
    assert.equal(h.sent[1].scheduledAt, '2026-09-15T16:25:00.000Z');
  }
});
test('UTC schedule remains exactly 25 minutes across midnight and daylight saving transitions', async () => {
  for (const time of ['2026-09-15T23:50:00Z', '2026-10-25T00:50:00Z']) {
    const h = harness({ initialTime: Date.parse(time) });
    await h.contact(request(contact));
    assert.equal(Date.parse(h.sent[1].scheduledAt) - Date.parse(time), 25 * 60 * 1000);
  }
});
test('transient schedule failures retry the same payload and key, without immediate fallback', async () => {
  const h = harness({ transientFailures: 2 });
  await h.contact(request(contact));
  const calls = h.calls.filter(x => x.mail.scheduledAt);
  assert.equal(calls.length, 3);
  assert.equal(new Set(calls.map(x => JSON.stringify(x))).size, 1);
  assert.equal(h.sent.length, 2);
});
test('schedule failures are bounded and a past deadline cannot turn into immediate delivery', async () => {
  const h = harness({ confirmationThrow: true });
  await h.contact(request(contact));
  assert.equal(h.calls.filter(x => x.mail.scheduledAt).length, 3);
  const past = harness();
  const result = await past.schedule(past.sender, 'test@example.test', Date.parse('2026-09-15T15:00:00Z'));
  assert.equal(result.status, 'failed');
  assert.equal(past.calls.length, 0);
});
test('an acknowledgment already sent before the change never gets a new schedule', async () => {
  const h = harness();
  await h.contact(request(contact));
  // Model the provider cache containing an immediate (pre-migration) payload.
  const previous = h.calls[1];
  assert.equal(previous.options.idempotencyKey.startsWith('inquiry-confirmation-v1/'), true);
  const oldPayload = { ...previous.mail };
  delete oldPayload.scheduledAt;
  h.providerCache.get(previous.options.idempotencyKey).body = JSON.stringify(oldPayload);
  h.advance(10_000);
  const result = await h.schedule(h.sender, 'test@example.test', Date.parse('2026-09-15T16:00:10Z'));
  assert.equal(result.status, 'already-requested');
  assert.equal(h.sent.length, 2);
});

test('provider replay reports the existing request, never a newly confirmed timestamp', async () => {
  const h = harness();
  const first = await h.schedule(h.sender, 'test@example.test', Date.parse('2026-09-15T16:00:00Z'));
  const repeat = await h.schedule(h.sender, 'test@example.test', Date.parse('2026-09-15T16:05:00Z'));
  assert.equal(first.status, 'scheduled');
  assert.equal(repeat.status, 'already-requested');
  assert.equal(repeat.scheduledAt, undefined);
  assert.equal(repeat.id, first.id);
  assert.equal(h.sent.length, 1);
  assert.equal(h.logs.filter(x => x[0] === 'inquiry_confirmation_scheduled').length, 1);
});
