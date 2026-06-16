"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Flame,
  HardHat,
  HelpCircle,
  Map as MapIcon,
  Loader2,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Datenmodell                                                        */
/* ------------------------------------------------------------------ */

type Intent =
  | "sanierungsfahrplan_isfp"
  | "energieausweis"
  | "gegnachweis"
  | "kfw_baubegleitung"
  | "foerderung_heizung"
  | "unsicher";

type Choice = { key: string; label: string; hint?: string; icon?: LucideIcon };

const ANLIEGEN: (Choice & { key: Intent | "heizung_planen" })[] = [
  { key: "sanierungsfahrplan_isfp", label: "Sanierungsfahrplan & Förderung", hint: "iSFP — geförderte Energieberatung", icon: MapIcon },
  { key: "energieausweis", label: "Energieausweis", hint: "Bedarf oder Verbrauch", icon: FileText },
  { key: "gegnachweis", label: "GEG-Nachweis", hint: "für den Bauantrag", icon: ClipboardCheck },
  { key: "kfw_baubegleitung", label: "KfW-Baubegleitung", hint: "gelisteter Energie-Effizienz-Experte", icon: HardHat },
  { key: "heizung_planen", label: "Heizung tauschen / planen", hint: "Förderung & Antrag", icon: Flame },
  { key: "unsicher", label: "Bin mir noch nicht sicher", hint: "Wir ordnen es gemeinsam ein", icon: HelpCircle },
];

const GEBAEUDE: Choice[] = [
  { key: "efh", label: "Einfamilienhaus" },
  { key: "zfh", label: "Zweifamilienhaus" },
  { key: "mfh", label: "Mehrfamilienhaus" },
  { key: "gewerbe_nwg", label: "Gewerbe / Nichtwohngebäude" },
  { key: "denkmal", label: "Denkmal / Bestand mit Auflagen" },
];

const BAUJAHR: Choice[] = [
  { key: "vor_1977", label: "vor 1977" },
  { key: "1977_1994", label: "1977 – 1994" },
  { key: "1995_2009", label: "1995 – 2009" },
  { key: "ab_2010", label: "ab 2010" },
  { key: "neubau", label: "Neubau geplant" },
];

const ZEITRAHMEN: Choice[] = [
  { key: "konkret_geplant", label: "Konkret geplant", hint: "Es soll bald losgehen" },
  { key: "in_planung", label: "In Planung", hint: "In den nächsten Monaten" },
  { key: "nur_information", label: "Erstmal Information", hint: "Ich sammle Möglichkeiten" },
];

// Kontextfrage je Anliegen (Schritt 3)
const KONTEXT: Record<string, { frage: string; optionen: Choice[] }> = {
  energieausweis: {
    frage: "Welche Art Energieausweis brauchen Sie?",
    optionen: [
      { key: "bedarf", label: "Bedarfsausweis" },
      { key: "verbrauch", label: "Verbrauchsausweis" },
      { key: "weiss_nicht", label: "Weiß ich nicht", hint: "Wir klären das für Sie" },
    ],
  },
  gegnachweis: {
    frage: "Worum geht es bei Ihrem Bauvorhaben?",
    optionen: [
      { key: "neubau", label: "Neubau" },
      { key: "sanierung", label: "Größere Sanierung" },
      { key: "anbau", label: "Anbau / Erweiterung" },
    ],
  },
  sanierungsfahrplan_isfp: {
    frage: "Was haben Sie ungefähr vor?",
    optionen: [
      { key: "huelle", label: "Dämmung / Fenster" },
      { key: "heizung", label: "Heizungstausch (Förderung)" },
      { key: "komplett", label: "Komplettsanierung" },
      { key: "offen", label: "Noch offen" },
    ],
  },
  kfw_baubegleitung: {
    frage: "Welches Vorhaben begleiten wir?",
    optionen: [
      { key: "eh_neubau", label: "Effizienzhaus-Neubau" },
      { key: "eh_sanierung", label: "Sanierung zum Effizienzhaus" },
      { key: "einzel", label: "Einzelmaßnahmen (BEG)" },
    ],
  },
  foerderung_heizung: {
    frage: "Welche Heizung ist geplant?",
    optionen: [
      { key: "waermepumpe", label: "Wärmepumpe" },
      { key: "fernwaerme", label: "Anschluss Fernwärme" },
      { key: "andere", label: "Andere / unklar" },
      { key: "offen", label: "Noch offen" },
    ],
  },
};

type Answers = {
  intent?: Intent;
  gebaeudetyp?: string;
  baujahr_spanne?: string;
  plz?: string;
  ort?: string;
  im_servicegebiet?: boolean;
  massnahme?: string;
  zeitrahmen?: string;
  name?: string;
  email?: string;
  telefon?: string;
  nachricht?: string;
  consent?: boolean;
};

type Screen =
  | "anliegen"
  | "heizung_prequal"
  | "heizung_exit"
  | "gebaeude"
  | "kontext"
  | "zeitrahmen"
  | "kontakt"
  | "summary"
  | "success";

// PLZ Berlin (10–14) + Brandenburg (14–16, 03) als grobe Servicegebiet-Heuristik
function imServicegebiet(plz: string): boolean {
  const p = plz.trim();
  if (!/^\d{5}$/.test(p)) return false;
  const n = parseInt(p.slice(0, 2), 10);
  return (n >= 10 && n <= 16) || p.startsWith("03");
}

const STEP_ORDER: Screen[] = ["anliegen", "gebaeude", "kontext", "zeitrahmen", "kontakt"];

/* ------------------------------------------------------------------ */
/*  UI-Bausteine                                                       */
/* ------------------------------------------------------------------ */

function ChoiceCard({
  label,
  hint,
  icon: Icon,
  selected,
  onClick,
}: { label: string; hint?: string; icon?: LucideIcon; selected?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-4 rounded-[2px] border bg-white px-5 py-4 text-left transition-all hover:border-[#2d4196] hover:shadow-sm ${
        selected ? "border-[#2d4196] ring-2 ring-[#2d4196]/20" : "border-[#1e293b]/15"
      }`}
    >
      {Icon && (
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[2px] bg-[#2d4196]/8 text-[#2d4196]">
          <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-heading text-base font-semibold text-[#1e293b] md:text-lg">{label}</span>
        {hint && <span className="mt-0.5 block font-sans text-sm text-[#1e293b]/55">{hint}</span>}
      </span>
      <ArrowRight
        size={18}
        className="flex-none text-[#1e293b]/25 transition-colors group-hover:text-[#2d4196]"
        aria-hidden="true"
      />
    </button>
  );
}

function StepShell({
  step,
  total,
  title,
  subtitle,
  onBack,
  children,
}: {
  step: number;
  total: number;
  title: string;
  subtitle?: string;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 font-sans text-sm text-[#1e293b]/60 transition-colors hover:text-[#2d4196]"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Zurück
            </button>
          ) : (
            <span />
          )}
          <span className="font-sans text-xs font-medium uppercase tracking-wider text-[#1e293b]/40">
            Schritt {step} / {total}
          </span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[#1e293b]/10">
          <motion.div
            className="h-full rounded-full bg-[#2d4196]"
            initial={false}
            animate={{ width: `${(step / total) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>
      <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 font-sans text-base text-[#1e293b]/70">{subtitle}</p>}
      <div className="mt-7">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Funnel                                                             */
/* ------------------------------------------------------------------ */

export function EnergieFunnel() {
  const [screen, setScreen] = useState<Screen>("anliegen");
  const [history, setHistory] = useState<Screen[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const sessionId = useRef<string>("");

  useEffect(() => {
    sessionId.current =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `s_${Date.now()}_${Math.round(Math.random() * 1e6)}`;
    track("start");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function track(step: string, extra?: Record<string, unknown>) {
    try {
      const payload = JSON.stringify({
        session_id: sessionId.current,
        step,
        intent: answers.intent ?? null,
        payload: extra ?? null,
        page_path: typeof window !== "undefined" ? window.location.pathname : null,
      });
      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        navigator.sendBeacon("/api/funnel-event", new Blob([payload], { type: "application/json" }));
      } else {
        fetch("/api/funnel-event", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true });
      }
    } catch {
      /* Telemetrie darf nie stoeren */
    }
  }

  function go(next: Screen) {
    setHistory((h) => [...h, screen]);
    setScreen(next);
    track(next);
  }

  function back() {
    setHistory((h) => {
      const copy = [...h];
      const prev = copy.pop();
      if (prev) setScreen(prev);
      return copy;
    });
  }

  function reset() {
    setAnswers({});
    setHistory([]);
    setErrorMsg("");
    setScreen("anliegen");
  }

  // Schritt-Index fuer die Fortschrittsanzeige
  const stepIndex = useMemo(() => {
    const i = STEP_ORDER.indexOf(screen);
    return i >= 0 ? i + 1 : 1;
  }, [screen]);
  const TOTAL = STEP_ORDER.length;

  async function submit() {
    setSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          page_path: typeof window !== "undefined" ? window.location.pathname : null,
          session_id: sessionId.current,
        }),
      });
      if (res.ok) {
        track("submit");
        go("success");
      } else {
        const j = await res.json().catch(() => ({}));
        setErrorMsg(j.error || "Ein Fehler ist aufgetreten.");
      }
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  const kontaktValid =
    !!answers.name?.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email ?? "") && answers.consent === true;

  return (
    <div className="mx-auto w-full max-w-2xl px-6">
      <div className="rounded-[2px] border border-[#1e293b]/10 bg-white p-6 shadow-sm md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* 1 — Anliegen */}
            {screen === "anliegen" && (
              <StepShell step={1} total={TOTAL} title="Worum geht es bei Ihnen?" subtitle="Wählen Sie Ihr Anliegen — wir führen Sie in wenigen Schritten durch.">
                <div className="grid gap-3">
                  {ANLIEGEN.map((c) => (
                    <ChoiceCard
                      key={c.key}
                      label={c.label}
                      hint={c.hint}
                      icon={c.icon}
                      onClick={() => {
                        if (c.key === "heizung_planen") {
                          go("heizung_prequal");
                        } else {
                          setAnswers((a) => ({ ...a, intent: c.key as Intent }));
                          go("gebaeude");
                        }
                      }}
                    />
                  ))}
                </div>
              </StepShell>
            )}

            {/* 1b — Vorqualifizierung Heizung */}
            {screen === "heizung_prequal" && (
              <div>
                <button type="button" onClick={back} className="mb-6 inline-flex items-center gap-1.5 font-sans text-sm text-[#1e293b]/60 transition-colors hover:text-[#2d4196]">
                  <ArrowLeft size={16} aria-hidden="true" /> Zurück
                </button>
                <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">Kurz vorweg — ehrlich gesagt</h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#1e293b]/75">
                  Die Heizungsanlage selbst plant und baut Ihr <strong>Heizungs-Fachbetrieb</strong>. Wir sind Ihr Partner für die{" "}
                  <strong className="text-[#2d4196]">Förderung</strong> dazu: Wir holen für Ihren Heizungstausch das Maximum an Fördermitteln heraus und übernehmen Anträge und Nachweise.
                </p>
                <div className="mt-8 grid gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setAnswers((a) => ({ ...a, intent: "foerderung_heizung" }));
                      go("gebaeude");
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#2d4196] px-6 py-4 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a]"
                  >
                    Ja, zur Förderung beraten <ArrowRight size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go("heizung_exit")}
                    className="rounded-[2px] border border-[#1e293b]/15 px-6 py-4 font-sans text-base font-medium text-[#1e293b]/80 transition-colors hover:border-[#1e293b]/40"
                  >
                    Nein, mir geht es nur um die Anlage selbst
                  </button>
                </div>
              </div>
            )}

            {/* 1c — Exit Heizung */}
            {screen === "heizung_exit" && (
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#2d4196]/8 text-[#2d4196]">
                  <HelpCircle size={28} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">Dann ist Ihr Fachbetrieb die richtige Adresse</h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#1e293b]/75">
                  Für die reine Heizungsplanung und den Einbau wenden Sie sich am besten direkt an einen Heizungs-Fachbetrieb. Sobald es um <strong>Förderung</strong>, einen{" "}
                  <strong>Energieausweis</strong> oder einen <strong>Sanierungsfahrplan</strong> geht, sind wir gern für Sie da.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <button type="button" onClick={reset} className="rounded-[2px] bg-[#2d4196] px-6 py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a]">
                    Zurück zum Anfang
                  </button>
                  <Link href="/" className="font-sans text-sm text-[#1e293b]/60 transition-colors hover:text-[#2d4196]">
                    Zur Startseite
                  </Link>
                </div>
              </div>
            )}

            {/* 2 — Gebaeude */}
            {screen === "gebaeude" && (
              <StepShell step={2} total={TOTAL} title="Um welches Gebäude geht es?" onBack={back}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {GEBAEUDE.map((c) => (
                    <ChoiceCard
                      key={c.key}
                      label={c.label}
                      hint={c.hint}
                      icon={c.icon}
                      selected={answers.gebaeudetyp === c.key}
                      onClick={() => setAnswers((a) => ({ ...a, gebaeudetyp: c.key }))}
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <p className="mb-2 font-sans text-sm font-medium text-[#1e293b]">Baujahr</p>
                  <div className="flex flex-wrap gap-2">
                    {BAUJAHR.map((c) => (
                      <button
                        key={c.key}
                        type="button"
                        onClick={() => setAnswers((a) => ({ ...a, baujahr_spanne: c.label }))}
                        className={`rounded-[2px] border px-3 py-2 font-sans text-sm transition-colors ${
                          answers.baujahr_spanne === c.label
                            ? "border-[#2d4196] bg-[#2d4196]/8 text-[#2d4196]"
                            : "border-[#1e293b]/15 text-[#1e293b]/70 hover:border-[#2d4196]/50"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <input
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="PLZ"
                    value={answers.plz ?? ""}
                    onChange={(e) => {
                      const plz = e.target.value.replace(/\D/g, "").slice(0, 5);
                      setAnswers((a) => ({ ...a, plz, im_servicegebiet: plz.length === 5 ? imServicegebiet(plz) : undefined }));
                    }}
                    className="w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20"
                  />
                  <input
                    placeholder="Ort"
                    value={answers.ort ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, ort: e.target.value }))}
                    className="w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20"
                  />
                </div>
                {answers.im_servicegebiet === false && (
                  <p className="mt-3 font-sans text-sm text-[#1e293b]/60">
                    Hinweis: Wir arbeiten vor allem in Berlin & Brandenburg. Schreiben Sie uns trotzdem — wir prüfen, ob wir Ihr Vorhaben übernehmen können.
                  </p>
                )}

                <button
                  type="button"
                  disabled={!answers.gebaeudetyp}
                  onClick={() => go("kontext")}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#2d4196] px-6 py-4 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Weiter <ArrowRight size={18} aria-hidden="true" />
                </button>
              </StepShell>
            )}

            {/* 3 — Kontext (verzweigt) */}
            {screen === "kontext" && (
              <StepShell
                step={3}
                total={TOTAL}
                title={answers.intent && KONTEXT[answers.intent] ? KONTEXT[answers.intent].frage : "Erzählen Sie uns mehr"}
                onBack={back}
              >
                {answers.intent && KONTEXT[answers.intent] ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {KONTEXT[answers.intent].optionen.map((c) => (
                      <ChoiceCard
                        key={c.key}
                        label={c.label}
                      hint={c.hint}
                      icon={c.icon}
                        selected={answers.massnahme === c.label}
                        onClick={() => {
                          setAnswers((a) => ({ ...a, massnahme: c.label }));
                          go("zeitrahmen");
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-3">
                    <ChoiceCard label="Weiter" onClick={() => go("zeitrahmen")} />
                  </div>
                )}
              </StepShell>
            )}

            {/* 4 — Zeitrahmen */}
            {screen === "zeitrahmen" && (
              <StepShell step={4} total={TOTAL} title="Wie konkret ist Ihr Vorhaben?" onBack={back}>
                <div className="grid gap-3">
                  {ZEITRAHMEN.map((c) => (
                    <ChoiceCard
                      key={c.key}
                      label={c.label}
                      hint={c.hint}
                      icon={c.icon}
                      selected={answers.zeitrahmen === c.key}
                      onClick={() => {
                        setAnswers((a) => ({ ...a, zeitrahmen: c.key }));
                        go("kontakt");
                      }}
                    />
                  ))}
                </div>
              </StepShell>
            )}

            {/* 5 — Kontakt */}
            {screen === "kontakt" && (
              <StepShell step={5} total={TOTAL} title="Wohin dürfen wir uns melden?" subtitle="Wir melden uns innerhalb von 1–2 Werktagen mit einer konkreten Einschätzung." onBack={back}>
                <div className="grid gap-4">
                  <input
                    placeholder="Name"
                    value={answers.name ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, name: e.target.value }))}
                    className="w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20"
                  />
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={answers.email ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, email: e.target.value }))}
                    className="w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20"
                  />
                  <input
                    placeholder="Telefon (optional)"
                    value={answers.telefon ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, telefon: e.target.value }))}
                    className="w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20"
                  />
                  <textarea
                    placeholder="Ihre Nachricht (optional)"
                    rows={3}
                    value={answers.nachricht ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, nachricht: e.target.value }))}
                    className="w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20"
                  />
                  <label className="flex items-start gap-3 font-sans text-sm text-[#1e293b]/70">
                    <input
                      type="checkbox"
                      checked={answers.consent ?? false}
                      onChange={(e) => setAnswers((a) => ({ ...a, consent: e.target.checked }))}
                      className="mt-0.5 h-4 w-4 flex-none accent-[#2d4196]"
                    />
                    <span>
                      Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage gespeichert und verwendet werden.{" "}
                      <Link href="/datenschutz" className="text-[#2d4196] underline">Datenschutz</Link>.
                    </span>
                  </label>
                </div>

                <button
                  type="button"
                  disabled={!kontaktValid}
                  onClick={() => go("summary")}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#2d4196] px-6 py-4 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Anfrage prüfen <ArrowRight size={18} aria-hidden="true" />
                </button>
              </StepShell>
            )}

            {/* 6 — Zusammenfassung */}
            {screen === "summary" && (
              <div>
                <button type="button" onClick={back} className="mb-6 inline-flex items-center gap-1.5 font-sans text-sm text-[#1e293b]/60 transition-colors hover:text-[#2d4196]">
                  <ArrowLeft size={16} aria-hidden="true" /> Zurück
                </button>
                <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">Passt das so?</h2>
                <dl className="mt-6 divide-y divide-[#1e293b]/10 rounded-[2px] border border-[#1e293b]/10">
                  {[
                    ["Anliegen", ANLIEGEN.find((a) => a.key === answers.intent)?.label ?? answers.intent],
                    ["Gebäude", GEBAEUDE.find((g) => g.key === answers.gebaeudetyp)?.label],
                    ["Baujahr", answers.baujahr_spanne],
                    ["Ort", [answers.plz, answers.ort].filter(Boolean).join(" ")],
                    ["Details", answers.massnahme],
                    ["Zeitrahmen", ZEITRAHMEN.find((z) => z.key === answers.zeitrahmen)?.label],
                    ["Name", answers.name],
                    ["E-Mail", answers.email],
                    ["Telefon", answers.telefon],
                  ]
                    .filter(([, v]) => v)
                    .map(([k, v]) => (
                      <div key={k as string} className="flex gap-4 px-4 py-3">
                        <dt className="w-28 flex-none font-sans text-sm text-[#1e293b]/50">{k}</dt>
                        <dd className="font-sans text-sm font-medium text-[#1e293b]">{v as string}</dd>
                      </div>
                    ))}
                </dl>

                {errorMsg && <p className="mt-4 rounded-[2px] border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-800">{errorMsg}</p>}

                <button
                  type="button"
                  disabled={submitting}
                  onClick={submit}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#2d4196] px-6 py-4 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Wird gesendet…
                    </>
                  ) : (
                    <>
                      Anfrage absenden <Check size={18} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            )}

            {/* 7 — Erfolg */}
            {screen === "success" && (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#2d4196]/10 text-[#2d4196]"
                >
                  <CheckCircle2 size={34} strokeWidth={1.6} aria-hidden="true" />
                </motion.div>
                <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">Vielen Dank, {answers.name?.split(" ")[0] || "Ihre Anfrage ist da"}!</h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#1e293b]/75">
                  Ihre Anfrage liegt bei uns. Wir melden uns innerhalb von <strong>1–2 Werktagen</strong> mit einer konkreten Einschätzung — telefonisch oder per E-Mail.
                </p>
                <Link href="/" className="mt-8 inline-block rounded-[2px] bg-[#2d4196] px-6 py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a]">
                  Zur Startseite
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-4 text-center font-sans text-xs text-[#1e293b]/45">
        Ihre Anfrage geht direkt an das Büro Formazin & Partner. Keine automatisierte Weitergabe an Dritte.
      </p>
    </div>
  );
}
