"use client";

import { useState } from "react";

/**
 * Infografiken des Energie-Redesigns (04.09.2026, Konzept §3): die vier
 * Kundenfragen als Inline-SVG im Haus-Stil, plus der Ausweis-Entscheidungsbaum.
 * Alle Zahlen = freigegebener Content-Stand (src/data/energie/*.ts,
 * BEG-Stand 21.07.2026). KEINE erfundenen Werte, keine KI-Grafik.
 *
 *   G1 FoerderRechenbild   „Wie viel Förderung bekomme ich?"   (client: Umschalter)
 *   G2 Zeitstrahl          „Wie lange dauert das?"            (+ Variante Ausweis)
 *   G3 WerMachtWas         „Was nimmt mir Formazin ab?"
 *   G4 RegionKarte         „Warum jemand aus der Region?"
 *   G8 AusweisEntscheidung „Bedarf oder Verbrauch?"
 *
 * SVGs sind responsive (viewBox + w-full h-auto), tragen role="img" +
 * aria-label mit dem vollständigen Aussagesatz; Farben nur Haus-Tokens.
 */

const BLAU = "#2d4196";
const BLAU_HELL = "#aeb8dd";
const BLAU_TINT = "#e9ecf6";
const TINTE = "#1e293b";
const TINTE_60 = "rgba(30,41,59,0.6)";
const HAIR = "rgba(30,41,59,0.18)";
const HEAD = "var(--font-archivo)";
const BODY = "var(--font-archivo-narrow)";

/* ------------------------------------------------------------------ */
/*  G1 — Förder-Rechenbild (iSFP)                                      */
/* ------------------------------------------------------------------ */

type Typ = "efh" | "zfh" | "mfh";

const ISFP: Record<Typ, { label: string; honorar: number; zuschuss: number; eigen: number; weg?: string }> = {
  efh: { label: "Einfamilienhaus", honorar: 1500, zuschuss: 650, eigen: 850 },
  zfh: { label: "Zweifamilienhaus", honorar: 1700, zuschuss: 650, eigen: 1050 },
  mfh: { label: "Mehrfamilienhaus ab 3 WE", honorar: 2000, zuschuss: 850, eigen: 1150, weg: "+ ggf. 250 € WEG" },
};

const eur = (n: number) => `${n.toLocaleString("de-DE")} €`;

export function FoerderRechenbild() {
  const [typ, setTyp] = useState<Typ>("efh");
  const d = ISFP[typ];
  const x0 = 200;
  const wMax = 420;
  const w = (n: number) => Math.round((n / d.honorar) * wMax);

  return (
    <div>
      <div className="mb-3 inline-flex border border-[#1e293b]/15" role="tablist" aria-label="Gebäudetyp">
        {(Object.keys(ISFP) as Typ[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={typ === k}
            onClick={() => setTyp(k)}
            className={`px-3 py-1.5 font-heading text-xs font-bold transition-colors md:text-sm ${
              typ === k ? "bg-[#2d4196] text-white" : "text-[#1e293b] hover:text-[#2d4196]"
            }`}
          >
            {ISFP[k].label}
          </button>
        ))}
      </div>
      <svg
        viewBox="0 0 640 300"
        role="img"
        aria-label={`Sanierungsfahrplan ${d.label}: Honorar ${eur(d.honorar)}, BAFA-Zuschuss ${eur(d.zuschuss)}, Ihr Eigenanteil ${eur(d.eigen)}. Mit iSFP steigt der Fördersatz späterer BAFA-Einzelmaßnahmen von 15 auf 20 Prozent und der förderfähige Höchstbetrag von 30.000 auf 60.000 Euro je Wohneinheit und Jahr.`}
        className="h-auto w-full"
      >
        <g fontFamily={HEAD} fontSize="13" fill={TINTE}>
          <text x="0" y="20" fontWeight="700" fontSize="15">
            Sanierungsfahrplan (iSFP) · {d.label}
          </text>

          <text x="0" y="56">Honorar brutto</text>
          <rect x={x0} y="42" width={wMax} height="22" fill={BLAU_TINT} stroke={BLAU} strokeWidth="1" />
          <text x={x0 + wMax - 8} y="58" textAnchor="end" fontWeight="700">{eur(d.honorar)}</text>

          <text x="0" y="96">BAFA-Zuschuss (50 %, gedeckelt)</text>
          <rect x={x0} y="82" width={w(d.zuschuss)} height="22" fill={BLAU} />
          <text x={x0 + w(d.zuschuss) + 10} y="98" fontWeight="700" fill={BLAU}>
            {eur(d.zuschuss)}
            {d.weg ? ` ${d.weg}` : ""}
          </text>

          <text x="0" y="136" fontWeight="700">Ihr Eigenanteil</text>
          <rect x={x0} y="122" width={w(d.eigen)} height="22" fill={TINTE} />
          <text x={x0 + w(d.eigen) + 10} y="138" fontWeight="700" fontSize="16">{eur(d.eigen)}</text>

          <line x1={x0} y1="160" x2={x0 + wMax} y2="160" stroke={HAIR} />

          <text x="0" y="198" fontWeight="700" fontSize="14">Und danach: der iSFP-Bonus</text>
          <text x="0" y="218" fontFamily={BODY} fontSize="12" fill={TINTE_60}>
            gilt für BAFA-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik, nicht für KfW 458
          </text>

          <text x="0" y="254">Fördersatz</text>
          <line x1="250" y1="250" x2="410" y2="250" stroke={BLAU} strokeWidth="3" />
          <circle cx="250" cy="250" r="7" fill="#fff" stroke={BLAU} strokeWidth="2" />
          <circle cx="410" cy="250" r="7" fill={BLAU} />
          <text x="230" y="254" textAnchor="end" fontSize="12">15 %</text>
          <text x="425" y="254" fontWeight="700" fontSize="12">20 %</text>

          <text x="0" y="288">Höchstbetrag je WE und Jahr</text>
          <line x1="250" y1="284" x2="550" y2="284" stroke={BLAU} strokeWidth="3" />
          <circle cx="250" cy="284" r="7" fill="#fff" stroke={BLAU} strokeWidth="2" />
          <circle cx="550" cy="284" r="7" fill={BLAU} />
          <text x="230" y="288" textAnchor="end" fontSize="12">30.000 €</text>
          <text x="565" y="288" fontWeight="700" fontSize="12">60.000 €</text>
        </g>
      </svg>
      <p className="mt-2 font-sans text-xs text-[#1e293b]/55">
        Alle Preise brutto. Der BAFA-Antrag muss vor Beauftragung gestellt werden.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  G2 — Zeitstrahl                                                    */
/* ------------------------------------------------------------------ */

export function Zeitstrahl() {
  // Achse: Woche 0..8 auf x 170..650 (60 px je Woche)
  const wk = (n: number) => 170 + n * 60;
  return (
    <svg
      viewBox="0 0 720 250"
      role="img"
      aria-label="Zeitstrahl einer Energieberatung: kostenloses Erstgespräch von 20 Minuten sofort, Vor-Ort-Termin von 1 bis 2 Stunden typischerweise nach 7 bis 14 Tagen, iSFP-Erstellung 2 bis 4 Wochen, dann ein einstündiges Beratungsgespräch, danach optional die Sanierungsbegleitung. Energieausweis separat: Verbrauchsausweis rund 3 Werktage, Bedarfsausweis 5 bis 10 Werktage."
      className="h-auto w-full"
    >
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Vom ersten Anruf zum fertigen Sanierungsfahrplan</text>
        <g stroke="rgba(30,41,59,0.14)">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <line key={n} x1={wk(n)} y1="40" x2={wk(n)} y2="200" />
          ))}
        </g>
        <g fill={TINTE_60} fontSize="11" textAnchor="middle" fontFamily={BODY}>
          <text x={wk(0)} y="216">Woche 0</text>
          <text x={wk(2)} y="216">2</text>
          <text x={wk(4)} y="216">4</text>
          <text x={wk(6)} y="216">6</text>
          <text x={wk(8)} y="216">8</text>
        </g>

        <text x="0" y="60">Erstgespräch, 20 min</text>
        <rect x={wk(0)} y="48" width="6" height="16" fill={BLAU} />
        <text x={wk(0) + 12} y="60" fontSize="11" fill={BLAU} fontWeight="700">kostenlos, Telefon oder Video</text>

        <text x="0" y="92">Vor-Ort-Termin, 1–2 h</text>
        <rect x={wk(1)} y="80" width="60" height="16" fill={BLAU_HELL} />
        <text x={wk(2) + 6} y="92" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Termin in 7–14 Tagen · Einschätzung am selben Tag</text>

        <text x="0" y="124">iSFP-Erstellung</text>
        <rect x={wk(2)} y="112" width="120" height="16" fill={BLAU} />
        <rect x={wk(4)} y="112" width="120" height="16" fill={BLAU} opacity="0.35" />
        <text x={wk(6) + 6} y="124" fontSize="11" fill={TINTE_60} fontFamily={BODY}>2–4 Wochen, BAFA-iSFP-Format</text>

        <text x="0" y="156">Beratungsgespräch, 1 h</text>
        <rect x={wk(5.6)} y="144" width="6" height="16" fill={BLAU} />
        <text x={wk(5.6) + 12} y="156" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Maßnahmen priorisieren</text>

        <text x="0" y="188">Optional: Begleitung</text>
        <rect x={wk(5.7)} y="176" width={wk(8) - wk(5.7)} height="16" fill="none" stroke={BLAU} strokeDasharray="4 3" />
        <text x={wk(5.7) + 8} y="188" fontSize="11" fill={BLAU}>Antrag · Bauleitung · Nachweis</text>

        <text x="0" y="244" fontSize="11" fill={TINTE_60} fontFamily={BODY}>
          Energieausweis separat: Verbrauchsausweis rund 3 Werktage · Bedarfsausweis 5–10 Werktage.
        </text>
      </g>
    </svg>
  );
}

export function ZeitstrahlAusweis() {
  const d = (n: number) => 170 + n * 40; // 40 px je Werktag, 0..12
  return (
    <svg
      viewBox="0 0 720 200"
      role="img"
      aria-label="Zeitstrahl Energieausweis: Anfrage und Klärung der Pflicht-Variante am ersten Tag, Verbrauchsausweis in rund 3 Werktagen, Bedarfsausweis nach Vor-Ort-Termin in 5 bis 10 Werktagen. Der Ausweis ist 10 Jahre gültig."
      className="h-auto w-full"
    >
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Wie schnell Ihr Energieausweis da ist</text>
        <g stroke="rgba(30,41,59,0.14)">
          {[0, 2, 4, 6, 8, 10, 12].map((n) => (
            <line key={n} x1={d(n)} y1="40" x2={d(n)} y2="150" />
          ))}
        </g>
        <g fill={TINTE_60} fontSize="11" textAnchor="middle" fontFamily={BODY}>
          <text x={d(0)} y="168">Tag 0</text>
          <text x={d(4)} y="168">4</text>
          <text x={d(8)} y="168">8</text>
          <text x={d(12)} y="168">12 Werktage</text>
        </g>

        <text x="0" y="60">Anfrage + Variante klären</text>
        <rect x={d(0)} y="48" width="6" height="16" fill={BLAU} />
        <text x={d(0) + 12} y="60" fontSize="11" fill={BLAU} fontWeight="700">Telefon oder Formular</text>

        <text x="0" y="96">Verbrauchsausweis · 100 €</text>
        <rect x={d(0)} y="84" width={d(3) - d(0)} height="16" fill={BLAU} />
        <text x={d(3) + 8} y="96" fontSize="11" fill={TINTE_60} fontFamily={BODY}>rund 3 Werktage · Verbrauchsdaten 3 Jahre</text>

        <text x="0" y="132">Bedarfsausweis · ab 900 €</text>
        <rect x={d(0)} y="120" width={d(5) - d(0)} height="16" fill={BLAU} />
        <rect x={d(5)} y="120" width={d(10) - d(5)} height="16" fill={BLAU} opacity="0.35" />
        <text x={d(10) + 8} y="132" fontSize="11" fill={TINTE_60} fontFamily={BODY}>5–10 Werktage · mit Vor-Ort-Termin</text>

        <text x="0" y="194" fontSize="11" fill={TINTE_60} fontFamily={BODY}>
          Gültig 10 Jahre. Pflicht bei Verkauf, Vermietung und Neubau.
        </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  G3 — Wer macht was + Nachweis-Kette                                */
/* ------------------------------------------------------------------ */

type Rolle = "voll" | "mit" | "";
const ROWS: { step: string; sie: Rolle; wir: Rolle; fach: Rolle }[] = [
  { step: "Unterlagen, Ziel, Entscheidung", sie: "voll", wir: "mit", fach: "" },
  { step: "Bestandsanalyse, Sanierungsfahrplan (iSFP)", sie: "", wir: "voll", fach: "" },
  { step: "Förderberatung, Antrag bei BAFA / KfW", sie: "mit", wir: "voll", fach: "" },
  { step: "Heizlast, Technologie-Auswahl, Einbau", sie: "", wir: "", fach: "voll" },
  { step: "Planung, Bauantrag, Bauüberwachung", sie: "", wir: "voll", fach: "mit" },
  { step: "Energieausweis, GEG-Nachweis", sie: "", wir: "voll", fach: "" },
  { step: "Technischer Nachweis, Verwendungsnachweis", sie: "", wir: "voll", fach: "" },
];

function Marker({ r, x, y }: { r: Rolle; x: number; y: number }) {
  if (r === "voll") return <rect x={x - 7} y={y - 7} width="14" height="14" fill={BLAU} />;
  if (r === "mit") return <rect x={x - 5} y={y - 5} width="10" height="10" fill="none" stroke={BLAU_HELL} strokeWidth="2" />;
  return null;
}

export function WerMachtWas() {
  const cols = { sie: 410, wir: 515, fach: 640 };
  const rowH = 30;
  const y0 = 66;
  const H = y0 + ROWS.length * rowH + 96;
  return (
    <svg
      viewBox={`0 0 700 ${H}`}
      role="img"
      aria-label="Wer macht was: Sie liefern Unterlagen und entscheiden. Formazin & Partner übernimmt Bestandsanalyse und Sanierungsfahrplan, Förderberatung und Anträge bei BAFA und KfW, Planung, Bauantrag und Bauüberwachung, Energieausweis und GEG-Nachweis sowie technischen Nachweis und Verwendungsnachweis. Ihr Fachbetrieb übernimmt Heizlast, Technologie-Auswahl und Einbau der Heizung. Die Nachweis-Kette Antrag, technischer Nachweis, Verwendungsnachweis führt Formazin & Partner bis zur Auszahlung."
      className="h-auto w-full"
    >
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Wer macht was?</text>
        <g fontSize="10.5" fontWeight="700" textAnchor="middle" letterSpacing="0.06em">
          <text x={cols.sie} y="46">SIE</text>
          <text x={cols.wir} y="38">FORMAZIN</text>
          <text x={cols.wir} y="50">&amp; PARTNER</text>
          <text x={cols.fach} y="46">FACHBETRIEB</text>
        </g>
        <line x1="0" y1="54" x2="700" y2="54" stroke={TINTE} strokeWidth="1.5" />
        {ROWS.map((r, i) => {
          const y = y0 + i * rowH;
          return (
            <g key={r.step}>
              <text x="0" y={y + 4} fontFamily={BODY} fontSize="12.5">{r.step}</text>
              <Marker r={r.sie} x={cols.sie} y={y} />
              <Marker r={r.wir} x={cols.wir} y={y} />
              <Marker r={r.fach} x={cols.fach} y={y} />
              <line x1="0" y1={y + 15} x2="700" y2={y + 15} stroke={HAIR} />
            </g>
          );
        })}
        {(() => {
          const y = y0 + ROWS.length * rowH + 14;
          const seg = [
            { t: "Antrag", w: 150, fill: BLAU, tf: "#fff" },
            { t: "Techn. Nachweis", w: 160, fill: BLAU, tf: "#fff" },
            { t: "Verwendungsnachweis", w: 190, fill: BLAU, tf: "#fff" },
            { t: "Auszahlung", w: 150, fill: BLAU_TINT, tf: TINTE },
          ];
          let x = 0;
          return (
            <g fontWeight="700">
              {seg.map((s, i) => {
                const el = (
                  <g key={s.t}>
                    <rect x={x} y={y} width={s.w} height="32" fill={s.fill} stroke={i === 3 ? BLAU : "none"} />
                    <text x={x + s.w / 2} y={y + 20} textAnchor="middle" fill={s.tf}>{s.t}</text>
                  </g>
                );
                x += s.w + 10;
                return el;
              })}
              <text x="0" y={y + 56} fontFamily={BODY} fontSize="11" fontWeight="400" fill={TINTE_60}>
                Voll = verantwortlich · Rahmen = wirkt mit · Die Nachweis-Kette führt Formazin & Partner bis zur Auszahlung.
              </text>
            </g>
          );
        })()}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  G4 — Radius-Karte                                                  */
/* ------------------------------------------------------------------ */

// schematische Positionen (kein Kartenmaterial), Mittelpunkt Ahrensfelde
const ORTE: { name: string; x: number; y: number; tx?: number; ty?: number; anchor?: "start" | "end" }[] = [
  { name: "Berlin", x: 165, y: 200, tx: 150, ty: 222, anchor: "end" },
  { name: "Bernau bei Berlin", x: 190, y: 125, tx: 180, ty: 116, anchor: "end" },
  { name: "Werneuchen", x: 240, y: 150, tx: 248, ty: 146 },
  { name: "Altlandsberg", x: 228, y: 188, tx: 236, ty: 203 },
  { name: "Strausberg", x: 262, y: 210, tx: 270, ty: 226 },
  { name: "Eberswalde", x: 222, y: 68, tx: 230, ty: 64 },
];

export function RegionKarte({ highlight }: { highlight?: string } = {}) {
  return (
    <svg
      viewBox="0 0 640 330"
      role="img"
      aria-label="Schematische Karte: Sitz in Ahrensfelde bei Berlin, tätig im Umkreis von rund 50 Kilometern, darunter Berlin, Bernau bei Berlin, Werneuchen, Altlandsberg, Strausberg und Eberswalde. Vor-Ort-Termin in 7 bis 14 Tagen, ein Ansprechpartner bis zum Verwendungsnachweis, Büro seit 1990 im Bestand tätig."
      className="h-auto w-full"
    >
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <circle cx="200" cy="165" r="140" fill={BLAU_TINT} stroke={BLAU} strokeWidth="1" strokeDasharray="5 4" />
        <circle cx="200" cy="165" r="70" fill="none" stroke="rgba(45,65,150,0.35)" strokeWidth="1" strokeDasharray="3 4" />
        <text x="200" y="318" textAnchor="middle" fontSize="11" fill={TINTE_60} fontFamily={BODY}>
          rund 50 km Umkreis · schematisch, nicht maßstäblich
        </text>

        <circle cx="200" cy="165" r="7" fill="#fff" stroke={TINTE} strokeWidth="2.5" />
        <text x="212" y="161" fontWeight="700">Ahrensfelde</text>
        <text x="212" y="175" fontSize="10" fill={TINTE_60} fontFamily={BODY}>Sitz · Dorfstraße 1A</text>

        {ORTE.map((o) => {
          const hl = highlight && o.name.toLowerCase().startsWith(highlight.toLowerCase());
          return (
            <g key={o.name}>
              <circle cx={o.x} cy={o.y} r={hl ? 8 : 5} fill={hl ? TINTE : BLAU} />
              <text x={o.tx ?? o.x + 8} y={o.ty ?? o.y + 4} textAnchor={o.anchor ?? "start"} fontWeight={hl ? "700" : "400"} fontSize={hl ? 13 : 12}>
                {o.name}
              </text>
            </g>
          );
        })}

        <g transform="translate(390,40)">
          <text x="0" y="0" fontWeight="700" fontSize="14">Was Nähe konkret heißt</text>
          <rect x="0" y="12" width="34" height="3" fill={BLAU} />
          <text x="0" y="46" fontWeight="700">Vor-Ort-Termin in 7–14 Tagen</text>
          <text x="0" y="64" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>Aufmaß, Bauteile, Anlagentechnik,</text>
          <text x="0" y="79" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>erste Einschätzung am gleichen Tag.</text>
          <text x="0" y="114" fontWeight="700">Ein Ansprechpartner</text>
          <text x="0" y="132" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>vom Antrag bis zum Verwendungs-</text>
          <text x="0" y="147" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>nachweis, statt fünf Stellen.</text>
          <text x="0" y="182" fontWeight="700">Seit 1990 im Bestand</text>
          <text x="0" y="200" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>Architektur- und Ingenieurbüro,</text>
          <text x="0" y="215" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>Wohnanlagen, MFH, Denkmal.</text>
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  G8 — Bedarf oder Verbrauch?                                        */
/* ------------------------------------------------------------------ */

export function AusweisEntscheidung() {
  return (
    <svg
      viewBox="0 0 700 330"
      role="img"
      aria-label="Entscheidungsbaum Energieausweis: Wohngebäude mit weniger als 5 Wohnungen und Bauantrag vor dem 1. November 1977, das nicht auf das Niveau der Wärmeschutzverordnung 1977 nachgerüstet wurde, braucht zwingend einen Bedarfsausweis (900 Euro Einfamilienhaus, 1.100 Euro Zweifamilienhaus, 2.300 Euro Mehrfamilienhaus, 5 bis 10 Werktage). In allen anderen Fällen haben Sie die Wahl: Bedarfsausweis, genauer und bei Verkauf empfohlen, oder Verbrauchsausweis für 100 Euro in rund 3 Werktagen."
      className="h-auto w-full"
    >
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Bedarfs- oder Verbrauchsausweis?</text>

        {/* Frage 1 */}
        <rect x="0" y="44" width="230" height="58" fill={BLAU_TINT} stroke={BLAU} />
        <text x="12" y="66" fontWeight="700">Wohngebäude, weniger als 5 Wohnungen,</text>
        <text x="12" y="84" fontWeight="700">Bauantrag vor dem 1.11.1977?</text>

        {/* ja → Frage 2 */}
        <path d="M 230 73 L 270 73" stroke={BLAU} strokeWidth="2" />
        <text x="238" y="66" fontSize="10.5" fill={BLAU} fontWeight="700">ja</text>
        <rect x="270" y="44" width="230" height="58" fill={BLAU_TINT} stroke={BLAU} />
        <text x="282" y="66" fontWeight="700">Seither auf das Niveau der</text>
        <text x="282" y="84" fontWeight="700">WärmeschutzV 1977 nachgerüstet?</text>

        {/* nein → Bedarf Pflicht */}
        <path d="M 500 73 L 540 73" stroke={BLAU} strokeWidth="2" />
        <text x="508" y="66" fontSize="10.5" fill={BLAU} fontWeight="700">nein</text>
        <rect x="540" y="44" width="160" height="58" fill={BLAU} />
        <text x="552" y="66" fontWeight="700" fill="#fff">Bedarfsausweis</text>
        <text x="552" y="84" fontWeight="700" fill="#fff">ist Pflicht</text>

        {/* nein (Frage 1) und ja (Frage 2) → Wahl */}
        <path d="M 115 102 L 115 150 L 385 150" stroke={BLAU} strokeWidth="2" fill="none" />
        <text x="122" y="128" fontSize="10.5" fill={BLAU} fontWeight="700">nein</text>
        <path d="M 385 102 L 385 150" stroke={BLAU} strokeWidth="2" />
        <text x="392" y="128" fontSize="10.5" fill={BLAU} fontWeight="700">ja</text>
        <path d="M 385 150 L 385 170" stroke={BLAU} strokeWidth="2" />
        <rect x="270" y="170" width="230" height="40" fill="#fff" stroke={BLAU} />
        <text x="385" y="195" textAnchor="middle" fontWeight="700">Sie haben die Wahl</text>

        {/* Ergebnisse */}
        <path d="M 330 210 L 330 236" stroke={BLAU} strokeWidth="2" />
        <path d="M 440 210 L 440 236" stroke={BLAU} strokeWidth="2" />
        <rect x="180" y="236" width="230" height="78" fill={BLAU} />
        <text x="192" y="258" fontWeight="700" fill="#fff">Bedarfsausweis</text>
        <text x="192" y="276" fontSize="11.5" fill="rgba(255,255,255,0.9)" fontFamily={BODY}>900 € EFH · 1.100 € ZFH · 2.300 € MFH</text>
        <text x="192" y="292" fontSize="11.5" fill="rgba(255,255,255,0.9)" fontFamily={BODY}>5–10 Werktage · genauer, bei Verkauf empfohlen</text>
        <rect x="420" y="236" width="230" height="78" fill="#fff" stroke={BLAU} />
        <text x="432" y="258" fontWeight="700">Verbrauchsausweis</text>
        <text x="432" y="276" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>100 € · alle Wohngebäudetypen</text>
        <text x="432" y="292" fontSize="11.5" fill={TINTE_60} fontFamily={BODY}>rund 3 Werktage · Verbrauchsdaten der letzten 3 Jahre</text>

        <text x="0" y="326" fontSize="11" fill={TINTE_60} fontFamily={BODY}>
          Nichtwohngebäude: Preis individuell. Welche Variante Pflicht ist, prüfen wir direkt bei Ihrer Anfrage.
        </text>
      </g>
    </svg>
  );
}
