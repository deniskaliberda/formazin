import { createHash } from "node:crypto";
import { setTimeout as retryDelay } from "node:timers/promises";
import type { Resend, CreateEmailOptions } from "resend";

export const OFFICE_EMAIL = "kontakt@formazin-partner.de";
export const CONFIRMATION_SUBJECT = "Vielen Dank für Ihre Anfrage";
export const CONFIRMATION_TEXT = `Guten Tag,

vielen Dank für Ihre Anfrage. Wir bearbeiten Ihr Anliegen. Unser Büro wird sich bei Ihnen melden.

Mit freundlichen Grüßen
Dr.-Ing. Formazin & Partner mbB
Dorfstraße 1A
16356 Ahrensfelde
kontakt@formazin-partner.de
https://www.formazin-partner.de`;

/** Existing website identity; inline styles and presentation tables work without webfonts. */
export const CONFIRMATION_HTML = `<!doctype html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Vielen Dank für Ihre Anfrage</title></head>
<body style="margin:0;padding:0;background-color:#f3f4f6;color:#1e293b;font-family:Archivo,Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f4f6;">
<tr><td align="center" style="padding:24px 12px;">
<!--[if mso]><table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background-color:#ffffff;border-top:4px solid #2d4196;">
<tr><td style="padding:24px 24px 12px;">
<img src="https://www.formazin-partner.de/images/FuP-Logo2025-quer-RGB.png" width="400" alt="Dr.-Ing. Formazin &amp; Partner mbB" style="display:block;width:100%;max-width:400px;height:auto;border:0;color:#2d4196;font-family:Arial,Helvetica,sans-serif;font-size:16px;">
</td></tr>
<tr><td style="padding:12px 24px 32px;font-size:16px;line-height:26px;color:#1e293b;">
<p style="margin:0 0 20px;">Guten Tag,</p>
<p style="margin:0 0 20px;">vielen Dank für Ihre Anfrage. Wir bearbeiten Ihr Anliegen. Unser Büro wird sich bei Ihnen melden.</p>
<p style="margin:0;">Mit freundlichen Grüßen<br><strong style="color:#2d4196;">Dr.-Ing. Formazin &amp; Partner mbB</strong></p>
</td></tr>
<tr><td style="padding:20px 24px;background-color:#f3f4f6;border-top:1px solid #e5e7eb;font-size:14px;line-height:23px;color:#1e293b;">
Dorfstraße 1A<br>16356 Ahrensfelde<br>
<a href="mailto:kontakt@formazin-partner.de" style="color:#2d4196;text-decoration:underline;">kontakt@formazin-partner.de</a><br>
<a href="https://www.formazin-partner.de" style="color:#2d4196;text-decoration:underline;">www.formazin-partner.de</a>
</td></tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr></table>
</body></html>`;

export class InquiryInputError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

/** Accept our browser forms only. Origin is a first barrier, not bot authentication. */
export async function readInquiry(request: Request): Promise<Record<string, unknown>> {
  const origin = request.headers.get("origin");
  const allowed = new Set(["https://www.formazin-partner.de", "https://formazin-partner.de"]);
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV !== "production") allowed.add(new URL(request.url).origin);
  if (!origin || !allowed.has(origin)) throw new InquiryInputError(403, "Anfrage nicht zulässig.");
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    throw new InquiryInputError(415, "Ungültiges Anfrageformat.");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new InquiryInputError(400, "Anfrage fehlt.");
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 32_768) {
      await reader.cancel();
      throw new InquiryInputError(413, "Anfrage zu lang.");
    }
    chunks.push(value);
  }
  let body: unknown;
  try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
  catch { throw new InquiryInputError(400, "Ungültige Anfrage."); }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new InquiryInputError(400, "Ungültige Anfrage.");
  }
  const fields = body as Record<string, unknown>;
  for (const [key, value] of Object.entries(fields)) {
    if (value == null) continue;
    if ((key === "consent" || key === "im_servicegebiet") && typeof value === "boolean") continue;
    if (typeof value !== "string" || value.length > (key === "nachricht" ? 10_000 : 500)) {
      throw new InquiryInputError(400, "Bitte prüfen Sie Ihre Angaben.");
    }
  }
  return fields;
}

export function inquiryEmail(value: unknown): string {
  const email = typeof value === "string" ? value.trim().toLowerCase() : "";
  // Exactly one plain mailbox. No display names, lists, headers or control characters.
  if (email.length > 254 || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i.test(email)) {
    throw new InquiryInputError(400, "Bitte eine gültige E-Mail-Adresse angeben.");
  }
  return email;
}

function digest(value: string) { return createHash("sha256").update(value).digest("hex"); }

export async function sendOfficeInquiry(resend: Resend, mail: CreateEmailOptions) {
  const { data, error } = await resend.emails.send(mail, {
    idempotencyKey: `inquiry-office-v1/${digest(JSON.stringify(mail))}`,
  });
  if (error || !data?.id) throw new Error("Büro-Mail wurde vom Anbieter nicht bestätigt.");
}

export const CONFIRMATION_DELAY_MS = 25 * 60 * 1000;

/** Resend stores the absolute send time durably. The HTTP request never waits 25 minutes.
 * Keep the existing recipient key: the first accepted request wins for 24h, including
 * confirmations sent before scheduling was introduced. A retry must not move that time.
 */
export async function scheduleInquiryConfirmation(resend: Resend, email: string, receivedAt: number) {
  try {
    const dueAt = receivedAt + CONFIRMATION_DELAY_MS;
    if (!Number.isFinite(dueAt) || dueAt <= Date.now()) throw new Error("Invalid scheduling time");
    const scheduledAt = new Date(dueAt).toISOString();
    const mail: CreateEmailOptions = {
      from: `Dr.-Ing. Formazin & Partner mbB <${OFFICE_EMAIL}>`,
      to: [email],
      replyTo: OFFICE_EMAIL,
      subject: CONFIRMATION_SUBJECT,
      text: CONFIRMATION_TEXT,
      html: CONFIRMATION_HTML,
      scheduledAt,
      headers: { "Auto-Submitted": "auto-replied", "X-Auto-Response-Suppress": "All" },
    };
    const options = { idempotencyKey: `inquiry-confirmation-v1/${digest(email)}` };
    for (let attempt = 0; attempt < 3; attempt++) {
      // Only short transport retries, always with the same absolute time and key.
      let result;
      try { result = await resend.emails.send(mail, options); }
      catch (error) {
        if (attempt === 2) throw error;
        await retryDelay(250 * (attempt + 1));
        continue;
      }
      const { data, error } = result;
      if (error?.name === "invalid_idempotent_request") {
        // Resend already owns a request for this recipient. Never create another key,
        // update its schedule, or claim a new scheduled time/delivery for this attempt.
        return { status: "already-requested" as const };
      }
      if (error && ["concurrent_idempotent_requests", "rate_limit_exceeded", "internal_server_error", "application_error"].includes(error.name) && attempt < 2) {
        await retryDelay(250 * (attempt + 1));
        continue;
      }
      if (error || !data?.id) throw new Error("Provider rejected schedule");
      if (result.headers?.["idempotent-replayed"] === "true") {
        // The provider may replay the original ID even when scheduledAt differs.
        // Its original timestamp/state is authoritative, not this attempt's dueAt.
        return { status: "already-requested" as const, id: data.id };
      }
      // Timing and provider reference only, no names, addresses or inquiry content.
      console.info("inquiry_confirmation_scheduled", { id: data.id, receivedAt: new Date(receivedAt).toISOString(), scheduledAt });
      return { status: "scheduled" as const, id: data.id, scheduledAt };
    }
    throw new Error("Scheduling retries exhausted");
  } catch {
    // An accepted inquiry remains successful. Never fall back to an immediate email.
    console.error("inquiry_confirmation_schedule_failed");
    return { status: "failed" as const };
  }
}
