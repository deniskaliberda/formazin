import type { AntwortenBand as AntwortenBandData, DiagramName } from "@/data/energie/types";
import {
  AusweisEntscheidung,
  FoerderRechenbild,
  RegionKarte,
  WerMachtWas,
  Zeitstrahl,
  ZeitstrahlAusweis,
} from "./Infografiken";

/**
 * Bespoke-Erklärgrafiken als Inline-SVG (Denis-Feedback 28.07.2026: mehr
 * Diagramme statt Textwüste). Ingenieur-Stil: Haus-Farben (#2d4196 / #1e293b /
 * #f3f4f6), scharfe Ecken, beschriftete Achsen/Marker, keine Verläufe außer
 * dem Blau-Ton-Raster. Alle Zahlen = BEG-Stand 21.07.2026 (verifiziert) —
 * KEINE erfundenen Werte.
 *
 * SVGs sind responsive (viewBox + w-full h-auto) und tragen role="img" +
 * aria-label mit dem vollständigen Aussagesatz.
 */

const BLAU = "#2d4196";
const BLAU_HELL = "#aeb8dd";
const TINTE = "#1e293b";
const GRAU = "#f3f4f6";
const LINIE = "rgba(30,41,59,0.25)";

/* ------------------------------------------------------------------ */
/*  1) KfW-458-Bausteine: gestapelter Balken auf 0–100-%-Skala         */
/* ------------------------------------------------------------------ */

function KfwBausteineDiagramm() {
  // Skala: 0–100 % auf 720px Zeichenbreite (x = 40 + p * 7.2)
  const x = (p: number) => 40 + p * 7.2;
  return (
    <svg
      viewBox="0 0 800 320"
      role="img"
      aria-label="Förder-Bausteine beim Heizungstausch KfW 458, Stand 21. Juli 2026: 30 Prozent Grundförderung plus 16 Prozent Klimageschwindigkeitsbonus plus je nach Einkommen 10 bis 40 Prozent Einkommensbonus. Die Summe ist bei 70 Prozent gedeckelt, für bestimmte Selbstnutzer mit Einkommensbonus bei 80 Prozent. Effizienzbonus und Emissionsminderungszuschlag sind entfallen."
      className="h-auto w-full"
    >
      <text x="40" y="26" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="17" fill={TINTE}>
        Wie sich die Heizungstausch-Förderung zusammensetzt (KfW 458)
      </text>
      <text x="40" y="46" fontFamily="var(--font-archivo-narrow)" fontSize="13" fill="rgba(30,41,59,0.6)">
        Stand: 21.07.2026 · nur selbstnutzende Eigentümer erreichen die Boni
      </text>

      {/* Skala */}
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((p) => (
        <g key={p}>
          <line x1={x(p)} y1={70} x2={x(p)} y2={190} stroke={p % 20 === 0 ? LINIE : "rgba(30,41,59,0.1)"} strokeWidth="1" />
          <text x={x(p)} y={208} textAnchor="middle" fontFamily="var(--font-archivo-narrow)" fontSize="12" fill="rgba(30,41,59,0.55)">
            {p} %
          </text>
        </g>
      ))}

      {/* Segmente */}
      <rect x={x(0)} y={92} width={x(30) - x(0)} height={56} fill={BLAU} />
      <text x={(x(0) + x(30)) / 2} y={116} textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="15" fill="#fff">
        Grundförderung
      </text>
      <text x={(x(0) + x(30)) / 2} y={136} textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="16" fill="#fff">
        30 %
      </text>

      <rect x={x(30)} y={92} width={x(46) - x(30)} height={56} fill={BLAU_HELL} />
      <text x={(x(30) + x(46)) / 2} y={112} textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="12.5" fill={TINTE}>
        Klimageschw.-
      </text>
      <text x={(x(30) + x(46)) / 2} y={126} textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="12.5" fill={TINTE}>
        Bonus
      </text>
      <text x={(x(30) + x(46)) / 2} y={142} textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="14" fill={TINTE}>
        +16 %
      </text>

      <rect x={x(46)} y={92} width={x(86) - x(46)} height={56} fill="none" stroke={BLAU} strokeWidth="1.5" strokeDasharray="6 4" />
      <text x={(x(46) + x(86)) / 2} y={112} textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="13" fill={BLAU}>
        Einkommensbonus (je nach zvE)
      </text>
      <text x={(x(46) + x(86)) / 2} y={132} textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="14" fill={BLAU}>
        +10 / +30 / +40 %
      </text>

      {/* Kappungs-Marker */}
      <line x1={x(70)} y1={70} x2={x(70)} y2={190} stroke={TINTE} strokeWidth="2" />
      <text x={x(70) - 6} y={64} textAnchor="end" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="12.5" fill={TINTE}>
        Kappung 70 %
      </text>
      <line x1={x(80)} y1={70} x2={x(80)} y2={190} stroke={BLAU} strokeWidth="2" strokeDasharray="4 3" />
      <text x={x(80) + 6} y={64} textAnchor="start" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="12.5" fill={BLAU}>
        bis 80 % (Einkommensbonus)
      </text>

      {/* Zeitachse KGB */}
      <text x="40" y={238} fontFamily="var(--font-archivo-narrow)" fontSize="13.5" fill={TINTE}>
        Klimageschwindigkeitsbonus: 16 % bei Antrag bis 31.01.2027 → danach −4 Prozentpunkte je Halbjahr → ab 01.08.2028 entfallen
      </text>

      {/* Entfallen-Zeile */}
      <line x1="40" y1={254} x2="760" y2={254} stroke="rgba(30,41,59,0.12)" strokeWidth="1" />
      <text x="40" y={278} fontFamily="var(--font-archivo-narrow)" fontSize="13.5" fill="rgba(30,41,59,0.55)">
        <tspan textDecoration="line-through">Effizienzbonus +5 %</tspan>
        <tspan dx="14" textDecoration="line-through">Emissionsminderungszuschlag 2.500 €</tspan>
        <tspan dx="14" fill={TINTE} fontWeight="700">— beide entfallen seit 21.07.2026</tspan>
      </text>
      <text x="40" y={302} fontFamily="var(--font-archivo-narrow)" fontSize="13.5" fill={TINTE}>
        Förderfähige Kosten: max. 28.000 € (1. Wohneinheit) · 15.000 € je WE 2–6 · 8.000 € ab der 7. WE
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  2) Zwei Förderschienen: BAFA-EM vs. KfW 458 (iSFP-Bonus-Logik)     */
/* ------------------------------------------------------------------ */

function FoerderSchienenDiagramm() {
  return (
    <svg
      viewBox="0 0 800 360"
      role="img"
      aria-label="Zwei getrennte Förderschienen: Der individuelle Sanierungsfahrplan wirkt als iSFP-Bonus nur auf BAFA-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik — der Fördersatz steigt von 15 auf 20 Prozent und die förderfähigen Kosten von 30.000 auf 60.000 Euro je Wohneinheit und Jahr. Beim Heizungstausch über KfW 458 gibt es keinen iSFP-Bonus."
      className="h-auto w-full"
    >
      <text x="40" y="26" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="17" fill={TINTE}>
        Wo der iSFP-Bonus wirkt — und wo nicht
      </text>

      {/* iSFP-Quellbox */}
      <rect x="290" y="48" width="220" height="52" fill={BLAU} />
      <text x="400" y="70" textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="14.5" fill="#fff">
        Sanierungsfahrplan (iSFP)
      </text>
      <text x="400" y="89" textAnchor="middle" fontFamily="var(--font-archivo-narrow)" fontSize="12.5" fill="rgba(255,255,255,0.85)">
        geförderte Energieberatung
      </text>

      {/* Pfeil links (wirkt) */}
      <path d="M 340 100 L 210 148" stroke={BLAU} strokeWidth="2.5" fill="none" />
      <path d="M 210 148 l 12 -9 l -4 13 z" fill={BLAU} />
      <text x="240" y="118" textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="12.5" fill={BLAU}>
        iSFP-Bonus ✓
      </text>

      {/* Pfeil rechts (wirkt nicht) */}
      <path d="M 460 100 L 590 148" stroke="rgba(30,41,59,0.4)" strokeWidth="2" strokeDasharray="6 4" fill="none" />
      <text x="620" y="116" textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="12.5" fill="rgba(30,41,59,0.6)">
        kein iSFP-Bonus ✕
      </text>

      {/* Linke Schiene: BAFA-EM */}
      <rect x="40" y="152" width="340" height="168" fill={GRAU} />
      <rect x="40" y="152" width="340" height="34" fill={BLAU} />
      <text x="210" y="174" textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="14" fill="#fff">
        Schiene 1 · BAFA-Einzelmaßnahmen (BEG-EM)
      </text>
      <text x="58" y="210" fontFamily="var(--font-archivo-narrow)" fontSize="13.5" fill={TINTE}>
        Dämmung, Fenster, Lüftung, Heizungsoptimierung
      </text>
      <text x="58" y="240" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="14" fill={TINTE}>
        15 % <tspan dx="6" fill={BLAU}>→ 20 %</tspan> <tspan fontWeight="400" fontSize="12.5">mit iSFP-Bonus</tspan>
      </text>
      <text x="58" y="268" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="14" fill={TINTE}>
        30.000 € <tspan dx="6" fill={BLAU}>→ 60.000 €</tspan> <tspan fontWeight="400" fontSize="12.5">je WE·Jahr (iSFP)</tspan>
      </text>
      <text x="58" y="296" fontFamily="var(--font-archivo-narrow)" fontSize="12.5" fill="rgba(30,41,59,0.6)">
        Zuschuss über die BAFA
      </text>

      {/* Rechte Schiene: KfW 458 */}
      <rect x="420" y="152" width="340" height="168" fill={GRAU} />
      <rect x="420" y="152" width="340" height="34" fill={TINTE} />
      <text x="590" y="174" textAnchor="middle" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="14" fill="#fff">
        Schiene 2 · Heizungstausch (KfW 458)
      </text>
      <text x="438" y="210" fontFamily="var(--font-archivo-narrow)" fontSize="13.5" fill={TINTE}>
        Wärmepumpe, Fernwärme-Anschluss u. a.
      </text>
      <text x="438" y="240" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="15" fill={TINTE}>
        30 % <tspan fontWeight="400" fontSize="13">Grundförderung + eigene Boni</tspan>
      </text>
      <text x="438" y="268" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="15" fill={TINTE}>
        28.000 € <tspan fontWeight="400" fontSize="13">Deckel 1. WE (Stand 21.07.2026)</tspan>
      </text>
      <text x="438" y="296" fontFamily="var(--font-archivo-narrow)" fontSize="12.5" fill="rgba(30,41,59,0.6)">
        Zuschuss über die KfW · eigene Bonus-Logik (s. Bausteine)
      </text>

      <text x="40" y="348" fontFamily="var(--font-archivo-narrow)" fontSize="13" fill="rgba(30,41,59,0.6)">
        Beide Schienen laufen getrennt — Quoten werden nicht vermischt. Wir prüfen je Vorhaben, welche Kombination trägt.
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  3) Förderstrategie für den Bestand: 5-Schritte-Streifen            */
/* ------------------------------------------------------------------ */

function BestandStrategieDiagramm() {
  const schritte = [
    { nr: "01", t1: "Bestandsanalyse", t2: "Gebäude & Daten" },
    { nr: "02", t1: "Priorisierung", t2: "welche Objekte zuerst" },
    { nr: "03", t1: "iSFP / NWG-Beratung", t2: "je Objekt" },
    { nr: "04", t1: "Anträge & Nachweise", t2: "BAFA + KfW gebündelt" },
    { nr: "05", t1: "Bauliche Umsetzung", t2: "Planung + Begleitung" },
  ];
  const w = 140;
  const gap = 8;
  return (
    <svg
      viewBox="0 0 800 190"
      role="img"
      aria-label="Förderstrategie für den Immobilienbestand in fünf Schritten: Bestandsanalyse, Priorisierung der Objekte, Sanierungsfahrplan oder Nichtwohngebäude-Beratung je Objekt, Anträge und Nachweise gegenüber BAFA und KfW, bauliche Umsetzung mit Planung und Begleitung im Büro."
      className="h-auto w-full"
    >
      <text x="40" y="26" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="17" fill={TINTE}>
        Vom Bestand zum geförderten Sanierungsprogramm
      </text>
      {schritte.map((s, i) => {
        const x0 = 40 + i * (w + gap);
        const letzter = i === schritte.length - 1;
        return (
          <g key={s.nr}>
            <rect x={x0} y="52" width={w} height="96" fill={letzter ? BLAU : GRAU} />
            <text x={x0 + 12} y="78" fontFamily="var(--font-archivo)" fontWeight="900" fontSize="15" fill={letzter ? "rgba(255,255,255,0.85)" : BLAU}>
              {s.nr}
            </text>
            <text x={x0 + 12} y="102" fontFamily="var(--font-archivo)" fontWeight="700" fontSize="12" fill={letzter ? "#fff" : TINTE}>
              {s.t1}
            </text>
            <text x={x0 + 12} y="122" fontFamily="var(--font-archivo-narrow)" fontSize="11.5" fill={letzter ? "rgba(255,255,255,0.85)" : "rgba(30,41,59,0.65)"}>
              {s.t2}
            </text>
            {!letzter && (
              <path d={`M ${x0 + w} 100 l ${gap} 0`} stroke={BLAU} strokeWidth="2.5" />
            )}
          </g>
        );
      })}
      <text x="40" y="176" fontFamily="var(--font-archivo-narrow)" fontSize="13" fill="rgba(30,41,59,0.6)">
        Für Unternehmen, Wohnungsunternehmen, Bestandshalter, Hausverwaltungen und Träger — Wohn- und Nichtwohngebäude.
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

const DIAGRAMME: Record<DiagramName, (props: { highlight?: string }) => React.ReactElement> = {
  "kfw-bausteine": KfwBausteineDiagramm,
  "foerder-schienen": FoerderSchienenDiagramm,
  "bestand-strategie": BestandStrategieDiagramm,
  // Redesign 04.09.2026 — Infografiken.tsx
  "foerder-rechenbild": FoerderRechenbild,
  zeitstrahl: Zeitstrahl,
  "zeitstrahl-ausweis": ZeitstrahlAusweis,
  "wer-macht-was": WerMachtWas,
  region: RegionKarte,
  "ausweis-entscheidung": AusweisEntscheidung,
};

export function Diagramm({
  name,
  caption,
  highlight,
  flush = false,
}: {
  name: DiagramName;
  caption?: string;
  /** nur "region": hervorgehobener Ort */
  highlight?: string;
  /** ohne oberen Abstand (im Antworten-Band) */
  flush?: boolean;
}) {
  const Svg = DIAGRAMME[name];
  return (
    <figure
      className={`${flush ? "" : "mt-8 "}flex h-full flex-col rounded-[2px] border border-[#1e293b]/10 bg-white p-4 md:p-6`}
    >
      <Svg highlight={highlight} />
      {caption && (
        <figcaption className="mt-auto border-t border-[#1e293b]/10 pt-3 font-sans text-sm text-[#1e293b]/60">
          <span className="block pt-0">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Band „Ihre Antworten" (Redesign 04.09.2026): 1–4 Infografiken als Raster.
 * Ein Eintrag = volle Breite, zwei und mehr = zweispaltig ab md.
 */
export function AntwortenBand({ data }: { data: AntwortenBandData }) {
  const cols = data.items.length === 1 ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2";
  return (
    <div>
      {data.heading && (
        <h2 className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
          {data.heading}
        </h2>
      )}
      {data.intro && (
        <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
          {data.intro}
        </p>
      )}
      <div className={`${data.heading || data.intro ? "mt-10 " : ""}grid gap-5 ${cols}`}>
        {data.items.map((item) => (
          <Diagramm key={item.name} name={item.name} caption={item.caption} highlight={item.highlight} flush />
        ))}
      </div>
    </div>
  );
}
