/**
 * Infografik-Varianten (Denis-Feedback 04.09.2026: „nicht dieselbe Grafik auf
 * zwölf Seiten“). Gleiche freigegebene Daten, andere Form je Seite:
 *
 *   foerder-hebel        Slope-Chart iSFP-Bonus (LP privat)
 *   dauer-kalender       Wochen-Kalenderstreifen (LP privat)
 *   rollen-drei-saeulen  Sie / Büro / Fachbetrieb als drei Säulen (LP privat)
 *   foerder-rechnung     Kassenzettel EFH/ZFH/MFH (iSFP-Seite)
 *   dauer-aufwand        Ihr Zeitaufwand vs. unsere Bearbeitung (iSFP-Seite)
 *   baubegleitung-ablauf 5 Schritte der KfW-Baubegleitung (KfW-Seite)
 *   nachweis-kette       Antrag → Nachweis → Auszahlung mit Zeitpunkt (KfW, Förderberatung)
 *   geg-bauantrag        GEG-Nachweis im Bauantrag (GEG-Seite)
 *   foerder-programme    Drei Programm-Karten BAFA / BEG-EM / KfW 458 (Förderberatung)
 *   ausweis-vergleich    Bedarf vs. Verbrauch als Gegenüberstellung (Ausweis-Seite)
 *   portfolio-prioritaet Priorisierung im Bestand, schematisch (LP gewerblich)
 *
 * Alle Zahlen = Content-Stand 21.07.2026 (src/data/energie/*.ts). Keine neuen Werte.
 */

const BLAU = "#2d4196";
const BLAU_HELL = "#aeb8dd";
const BLAU_TINT = "#e9ecf6";
const TINTE = "#1e293b";
const TINTE_60 = "rgba(30,41,59,0.6)";
const HAIR = "rgba(30,41,59,0.18)";
const HEAD = "var(--font-archivo)";
const BODY = "var(--font-archivo-narrow)";

/* ---------------- foerder-hebel: Slope-Chart ---------------- */
export function FoerderHebel() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Der iSFP-Bonus als Hebel: Fördersatz für BAFA-Einzelmaßnahmen steigt von 15 auf 20 Prozent, der förderfähige Höchstbetrag von 30.000 auf 60.000 Euro je Wohneinheit und Jahr." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Was ein Sanierungsfahrplan später bringt</text>
        <g fontSize="11" fontWeight="700" fill={TINTE_60} textAnchor="middle" letterSpacing="0.08em">
          <text x="150" y="52">OHNE iSFP</text>
          <text x="490" y="52">MIT iSFP</text>
        </g>
        <line x1="150" y1="60" x2="150" y2="250" stroke={HAIR} />
        <line x1="490" y1="60" x2="490" y2="250" stroke={HAIR} />
        {/* Fördersatz */}
        <line x1="150" y1="200" x2="490" y2="150" stroke={BLAU} strokeWidth="3" />
        <circle cx="150" cy="200" r="8" fill="#fff" stroke={BLAU} strokeWidth="2.5" />
        <circle cx="490" cy="150" r="8" fill={BLAU} />
        <text x="130" y="205" textAnchor="end" fontWeight="700" fontSize="16">15 %</text>
        <text x="510" y="155" fontWeight="700" fontSize="16" fill={BLAU}>20 %</text>
        <text x="320" y="165" textAnchor="middle" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Fördersatz BAFA-Einzelmaßnahme</text>
        {/* Höchstbetrag */}
        <line x1="150" y1="240" x2="490" y2="90" stroke={BLAU} strokeWidth="3" strokeDasharray="7 4" />
        <circle cx="150" cy="240" r="8" fill="#fff" stroke={BLAU} strokeWidth="2.5" />
        <circle cx="490" cy="90" r="8" fill={BLAU} />
        <text x="130" y="245" textAnchor="end" fontWeight="700" fontSize="16">30.000 €</text>
        <text x="510" y="95" fontWeight="700" fontSize="16" fill={BLAU}>60.000 €</text>
        <text x="320" y="240" textAnchor="middle" fontSize="11" fill={TINTE_60} fontFamily={BODY}>förderfähiger Höchstbetrag je Wohneinheit und Jahr</text>
        <text x="0" y="284" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Gilt für BAFA-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik, nicht für den Heizungstausch (KfW 458).</text>
      </g>
    </svg>
  );
}

/* ---------------- dauer-kalender: Wochenstreifen ---------------- */
export function DauerKalender() {
  const weeks = 7;
  const x0 = 20, w = 85, y0 = 60, h = 150;
  const cells = Array.from({ length: weeks }, (_, i) => i);
  return (
    <svg viewBox="0 0 640 260" role="img" aria-label="Sieben Wochen im Kalender: Woche 1 Erstgespräch, Woche 2 bis 3 Vor-Ort-Termin, Woche 3 bis 6 iSFP-Erstellung, Woche 6 bis 7 Beratungsgespräch und fertiger Fahrplan." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Ihr Kalender bis zum Sanierungsfahrplan</text>
        {cells.map((i) => (
          <g key={i}>
            <rect x={x0 + i * w} y={y0} width={w - 4} height={h} fill={i % 2 ? BLAU_TINT : "#fff"} stroke={HAIR} />
            <text x={x0 + i * w + 8} y={y0 + 18} fontSize="11" fontWeight="700" fill={TINTE_60}>Woche {i + 1}</text>
          </g>
        ))}
        {/* Ereignisse */}
        <rect x={x0 + 6} y={y0 + 32} width={w - 16} height="26" fill={BLAU} />
        <text x={x0 + 12} y={y0 + 49} fontSize="10.5" fill="#fff" fontWeight="700">Erstgespräch 20 min</text>
        <rect x={x0 + w + 6} y={y0 + 66} width={2 * w - 16} height="26" fill={BLAU_HELL} />
        <text x={x0 + w + 12} y={y0 + 83} fontSize="10.5" fontWeight="700">Vor-Ort-Termin 1–2 h (nach 7–14 Tagen)</text>
        <rect x={x0 + 2 * w + 6} y={y0 + 100} width={4 * w - 16} height="26" fill={BLAU} />
        <text x={x0 + 2 * w + 12} y={y0 + 117} fontSize="10.5" fill="#fff" fontWeight="700">iSFP-Erstellung 2–4 Wochen</text>
        <rect x={x0 + 6 * w + 6} y={y0 + 100} width={w - 16} height="26" fill={TINTE} />
        <text x={x0 + 6 * w + 12} y={y0 + 117} fontSize="10.5" fill="#fff" fontWeight="700">Gespräch 1 h</text>
        <text x="0" y="244" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Typischer Verlauf. Wer danach saniert, hängt Antrag, Bauleitung und Verwendungsnachweis direkt an.</text>
      </g>
    </svg>
  );
}

/* ---------------- rollen-drei-saeulen ---------------- */
const SAEULEN = [
  { t: "Sie", items: ["Unterlagen und Ziel", "Entscheidung über Maßnahmen", "Beauftragung"], fill: "#fff", tf: TINTE },
  { t: "Formazin & Partner", items: ["Bestandsanalyse, iSFP", "Förderberatung, Anträge", "Planung, Bauantrag, Bauüberwachung", "Energieausweis, GEG-Nachweis", "Technischer Nachweis, Verwendungsnachweis"], fill: BLAU, tf: "#fff" },
  { t: "Ihr Fachbetrieb", items: ["Heizlastberechnung", "Technologie-Auswahl", "Einbau der Anlage"], fill: BLAU_TINT, tf: TINTE },
];
export function RollenDreiSaeulen() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Drei Rollen: Sie liefern Unterlagen, entscheiden und beauftragen. Formazin & Partner übernimmt Bestandsanalyse, Sanierungsfahrplan, Förderberatung, Anträge, Planung, Bauantrag, Bauüberwachung, Energieausweis, GEG-Nachweis, technischen Nachweis und Verwendungsnachweis. Ihr Fachbetrieb übernimmt Heizlast, Technologie-Auswahl und Einbau." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Drei Rollen, klar verteilt</text>
        {SAEULEN.map((s, i) => {
          const x = i * 213, W = 200;
          return (
            <g key={s.t}>
              <rect x={x} y="40" width={W} height="238" fill={s.fill} stroke={i === 1 ? BLAU : HAIR} />
              <text x={x + 14} y="66" fontWeight="700" fontSize="14" fill={s.tf}>{s.t}</text>
              <line x1={x + 14} y1="76" x2={x + W - 14} y2="76" stroke={i === 1 ? "rgba(255,255,255,0.35)" : HAIR} />
              {s.items.map((it, j) => (
                <g key={it}>
                  <text x={x + 14} y={98 + j * 34} fontSize="12" fontWeight="700" fill={i === 1 ? "#fff" : BLAU}>+</text>
                  <text x={x + 28} y={98 + j * 34} fontSize="11.5" fontFamily={BODY} fill={s.tf}>{it}</text>
                </g>
              ))}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ---------------- foerder-rechnung: Kassenzettel ---------------- */
const RECHNUNG = [
  { t: "Einfamilienhaus", h: "1.500 €", z: "− 650 €", e: "850 €" },
  { t: "Zweifamilienhaus", h: "1.700 €", z: "− 650 €", e: "1.050 €" },
  { t: "Mehrfamilienhaus ab 3 WE", h: "2.000 €", z: "− 850 €", e: "1.150 €", n: "+ ggf. 250 € WEG" },
];
export function FoerderRechnung() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Rechnung Sanierungsfahrplan: Einfamilienhaus 1.500 Euro Honorar minus 650 Euro BAFA gleich 850 Euro Eigenanteil; Zweifamilienhaus 1.700 minus 650 gleich 1.050 Euro; Mehrfamilienhaus ab drei Wohneinheiten 2.000 minus 850 gleich 1.150 Euro, bei WEG bis zu 250 Euro zusätzlich." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Was am Ende auf Ihrer Rechnung steht</text>
        {RECHNUNG.map((r, i) => {
          const x = i * 213, W = 200;
          return (
            <g key={r.t}>
              <rect x={x} y="40" width={W} height="240" fill="#fff" stroke={HAIR} />
              <text x={x + 14} y="64" fontWeight="700" fontSize="12.5">{r.t}</text>
              <line x1={x + 14} y1="76" x2={x + W - 14} y2="76" stroke={HAIR} />
              <text x={x + 14} y="104" fontSize="12" fontFamily={BODY}>Honorar brutto</text>
              <text x={x + W - 14} y="104" textAnchor="end" fontWeight="700">{r.h}</text>
              <text x={x + 14} y="134" fontSize="12" fontFamily={BODY}>BAFA-Zuschuss</text>
              <text x={x + W - 14} y="134" textAnchor="end" fontWeight="700" fill={BLAU}>{r.z}</text>
              {r.n && <text x={x + 14} y="152" fontSize="10.5" fontFamily={BODY} fill={TINTE_60}>{r.n}</text>}
              <line x1={x + 14} y1="168" x2={x + W - 14} y2="168" stroke={TINTE} strokeWidth="2" />
              <text x={x + 14} y="200" fontWeight="700" fontSize="12.5">Ihr Eigenanteil</text>
              <text x={x + W - 14} y="204" textAnchor="end" fontWeight="700" fontSize="22">{r.e}</text>
              <text x={x + 14} y="240" fontSize="10.5" fontFamily={BODY} fill={TINTE_60}>50 % Zuschuss, gedeckelt.</text>
              <text x={x + 14} y="256" fontSize="10.5" fontFamily={BODY} fill={TINTE_60}>Antrag vor Beauftragung.</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ---------------- dauer-aufwand ---------------- */
export function DauerAufwand() {
  return (
    <svg viewBox="0 0 640 260" role="img" aria-label="Ihr Zeitaufwand für einen Sanierungsfahrplan: 20 Minuten Erstgespräch, 1 bis 2 Stunden Vor-Ort-Termin, 1 Stunde Beratungsgespräch, zusammen rund drei bis vier Stunden. Unsere Bearbeitung: Vor-Ort-Termin in 7 bis 14 Tagen, iSFP-Erstellung 2 bis 4 Wochen." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Was Sie an Zeit investieren, und was wir</text>
        <text x="0" y="56" fontSize="11" fontWeight="700" fill={TINTE_60} letterSpacing="0.08em">IHR AUFWAND</text>
        <rect x="0" y="66" width="30" height="28" fill={BLAU} /><text x="40" y="85" fontFamily={BODY}>Erstgespräch · 20 min</text>
        <rect x="0" y="102" width="150" height="28" fill={BLAU} /><text x="160" y="121" fontFamily={BODY}>Vor-Ort-Termin · 1–2 h</text>
        <rect x="0" y="138" width="90" height="28" fill={BLAU} /><text x="100" y="157" fontFamily={BODY}>Beratungsgespräch · 1 h</text>
        <text x="0" y="192" fontWeight="700" fontSize="18">rund 3–4 Stunden</text>
        <text x="0" y="210" fontSize="11" fill={TINTE_60} fontFamily={BODY}>mehr müssen Sie nicht einplanen</text>
        <line x1="330" y1="46" x2="330" y2="220" stroke={HAIR} />
        <text x="350" y="56" fontSize="11" fontWeight="700" fill={TINTE_60} letterSpacing="0.08em">UNSERE BEARBEITUNG</text>
        <rect x="350" y="66" width="120" height="28" fill={BLAU_HELL} /><text x="480" y="85" fontFamily={BODY}>Termin in 7–14 Tagen</text>
        <rect x="350" y="102" width="270" height="28" fill={BLAU_HELL} /><text x="360" y="121" fontWeight="700">iSFP-Erstellung 2–4 Wochen</text>
        <text x="350" y="192" fontWeight="700" fontSize="18">4–7 Wochen gesamt</text>
        <text x="350" y="210" fontSize="11" fill={TINTE_60} fontFamily={BODY}>bis der Fahrplan im BAFA-Format vorliegt</text>
        <text x="0" y="248" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Erstgespräch kostenlos, telefonisch oder per Video.</text>
      </g>
    </svg>
  );
}

/* ---------------- baubegleitung-ablauf ---------------- */
const BB = [
  ["Erstgespräch +", "Bestands-Aufnahme"],
  ["Sanierungsplan", "(iSFP)"],
  ["KfW-Antrag", "mit EE-Bestätigung"],
  ["Handwerker-", "Vergleich, 3 Angebote"],
  ["Bauleitung +", "Verwendungsnachweis"],
];
export function BaubegleitungAblauf() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="KfW-Baubegleitung in fünf Schritten: Erstgespräch und Bestandsaufnahme, Sanierungsplan iSFP, KfW-Antrag mit Energieeffizienz-Experten-Bestätigung, Handwerker-Vergleich mit drei Angeboten pro Gewerk, Bauleitung mit Stichproben-Abnahme und Verwendungsnachweis. Honorar 3.500 Euro Einfamilienhaus, 4.500 Zweifamilienhaus, 6.500 Mehrfamilienhaus, förderfähig im Rahmen der BEG." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Fünf Schritte, ein Ansprechpartner</text>
        <line x1="20" y1="90" x2="620" y2="90" stroke={BLAU} strokeWidth="2" />
        {BB.map((s, i) => {
          const x = 20 + i * 150;
          return (
            <g key={s[0]}>
              <circle cx={x} cy="90" r="16" fill={i === 4 ? TINTE : BLAU} />
              <text x={x} y="95" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="13">{i + 1}</text>
              <text x={x - 14} y="130" fontSize="11.5" fontWeight="700">{s[0]}</text>
              <text x={x - 14} y="146" fontSize="11" fontFamily={BODY} fill={TINTE_60}>{s[1]}</text>
            </g>
          );
        })}
        <rect x="0" y="180" width="640" height="1" fill={HAIR} />
        <text x="0" y="210" fontWeight="700">Honorar Baubegleitung</text>
        <text x="0" y="232" fontFamily={BODY} fontSize="12.5">3.500 € Einfamilienhaus · 4.500 € Zweifamilienhaus · 6.500 € Mehrfamilienhaus · Nichtwohngebäude individuell</text>
        <text x="0" y="256" fontFamily={BODY} fontSize="11" fill={TINTE_60}>Die Baubegleitung ist im Rahmen der BEG-Programme selbst förderfähig. Antrag immer vor Beauftragung.</text>
      </g>
    </svg>
  );
}

/* ---------------- nachweis-kette ---------------- */
export function NachweisKette() {
  const steps = [
    { t: "Antrag", w: "vor der Beauftragung", fill: BLAU, tf: "#fff" },
    { t: "Umsetzung", w: "Fachbetrieb baut, wir begleiten", fill: BLAU_TINT, tf: TINTE },
    { t: "Techn. Nachweis", w: "nach Fertigstellung", fill: BLAU, tf: "#fff" },
    { t: "Verwendungsnachweis", w: "lückenlose Belege", fill: BLAU, tf: "#fff" },
    { t: "Auszahlung", w: "Ihr Ergebnis", fill: TINTE, tf: "#fff" },
  ];
  return (
    <svg viewBox="0 0 640 220" role="img" aria-label="Die Nachweis-Kette: Antrag vor der Beauftragung, Umsetzung durch den Fachbetrieb mit unserer Begleitung, technischer Nachweis nach Fertigstellung, Verwendungsnachweis mit lückenlosen Belegen, dann die Auszahlung. Ohne Antrag vor Beauftragung entfällt der Förderanspruch." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Vom Antrag bis zur Auszahlung: die Reihenfolge entscheidet</text>
        {steps.map((s, i) => {
          const x = i * 128;
          return (
            <g key={s.t}>
              <path d={`M ${x} 50 h 110 l 12 22 l -12 22 h -110 z`} fill={s.fill} stroke={i === 1 ? BLAU : "none"} />
              <text x={x + 10} y="77" fontSize="11" fontWeight="700" fill={s.tf}>{s.t}</text>
              <text x={x + 2} y="118" fontSize="10.5" fontFamily={BODY} fill={TINTE_60}>{s.w}</text>
            </g>
          );
        })}
        <rect x="0" y="146" width="640" height="1" fill={HAIR} />
        <text x="0" y="176" fontWeight="700" fill={BLAU}>Der häufigste Fehler:</text>
        <text x="0" y="196" fontFamily={BODY} fontSize="12.5">Erst beauftragen, dann beantragen. Dann ist die Förderung weg. Wir stellen die Anträge, bevor Sie unterschreiben.</text>
      </g>
    </svg>
  );
}

/* ---------------- geg-bauantrag ---------------- */
export function GegBauantrag() {
  return (
    <svg viewBox="0 0 640 280" role="img" aria-label="GEG-Nachweis im Bauantrag: Entwurfsplanung, dann der GEG-Nachweis mit Wärmeschutznachweis, sommerlichem Wärmeschutz und Lüftungskonzept, dann Einreichung des Bauantrags und Genehmigung. Festpreise 900 Euro Einfamilienhaus, 1.100 Zweifamilienhaus, 2.300 Mehrfamilienhaus." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Wo der GEG-Nachweis im Bauantrag sitzt</text>
        <rect x="0" y="44" width="150" height="46" fill="#fff" stroke={HAIR} /><text x="12" y="72" fontWeight="700">Entwurfsplanung</text>
        <path d="M 150 67 h 26" stroke={BLAU} strokeWidth="2" />
        <rect x="176" y="44" width="200" height="46" fill={BLAU} /><text x="188" y="72" fontWeight="700" fill="#fff">GEG-Nachweis (wir)</text>
        <path d="M 376 67 h 26" stroke={BLAU} strokeWidth="2" />
        <rect x="402" y="44" width="120" height="46" fill="#fff" stroke={HAIR} /><text x="414" y="72" fontWeight="700">Bauantrag</text>
        <path d="M 522 67 h 26" stroke={BLAU} strokeWidth="2" />
        <rect x="548" y="44" width="92" height="46" fill={TINTE} /><text x="560" y="72" fontWeight="700" fill="#fff">Freigabe</text>
        {/* drei Teile */}
        <path d="M 276 90 v 24" stroke={BLAU} strokeWidth="2" />
        {[["Wärmeschutznachweis", "Gebäudehülle, U-Werte, Primärenergie"], ["Sommerlicher Wärmeschutz", "Überhitzung vermeiden, Verschattung"], ["Lüftungskonzept", "Feuchteschutz, Luftwechsel"]].map((p, i) => {
          const x = 60 + i * 190;
          return (
            <g key={p[0]}>
              <rect x={x} y="114" width="176" height="60" fill={BLAU_TINT} stroke={BLAU} />
              <text x={x + 10} y="138" fontSize="11.5" fontWeight="700">{p[0]}</text>
              <text x={x + 10} y="158" fontSize="10.5" fontFamily={BODY} fill={TINTE_60}>{p[1]}</text>
            </g>
          );
        })}
        <path d="M 148 114 h 380" stroke={BLAU} strokeWidth="1" fill="none" />
        <rect x="0" y="200" width="640" height="1" fill={HAIR} />
        <text x="0" y="230" fontWeight="700">Festpreise GEG-Nachweis</text>
        <text x="0" y="252" fontFamily={BODY} fontSize="12.5">900 € Einfamilienhaus · 1.100 € Zweifamilienhaus · 2.300 € Mehrfamilienhaus · Nichtwohngebäude nach Aufwand</text>
        <text x="0" y="272" fontFamily={BODY} fontSize="11" fill={TINTE_60}>Aus dem Büro, das auch den Bauantrag plant. Nachweispflicht ab zehn Prozent Bauteilerneuerung.</text>
      </g>
    </svg>
  );
}

/* ---------------- foerder-programme ---------------- */
const PROG = [
  { t: "BAFA Energieberatung", s: "Sanierungsfahrplan (iSFP)", big: "50 %", l: ["des Beratungshonorars", "gedeckelt 650 € (EFH/ZFH)", "bzw. 850 € (ab 3 WE)", "Antrag vor Beauftragung"] },
  { t: "BEG-Einzelmaßnahmen", s: "Hülle, Fenster, Anlagentechnik", big: "15 → 20 %", l: ["mit iSFP-Bonus", "Höchstbetrag 30.000 →", "60.000 € je WE und Jahr", "über BAFA"] },
  { t: "KfW 458 Heizungstausch", s: "Stand 21.07.2026", big: "30 % + Boni", l: ["+16 % Klimageschw.-Bonus", "+ Einkommensbonus (Staffel)", "Kappung 70 %, bis 80 %", "max. 28.000 € förderf. Kosten"] },
];
export function FoerderProgramme() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Drei Förderprogramme: BAFA-Energieberatung mit 50 Prozent Zuschuss auf das Honorar, gedeckelt auf 650 bzw. 850 Euro; BEG-Einzelmaßnahmen mit 15 Prozent, mit iSFP 20 Prozent und doppeltem Höchstbetrag; KfW 458 Heizungstausch mit 30 Prozent Grundförderung plus 16 Prozent Klimageschwindigkeitsbonus und gestaffeltem Einkommensbonus, gekappt bei 70 bzw. 80 Prozent, maximal 28.000 Euro förderfähige Kosten." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Drei Programme, drei Logiken</text>
        {PROG.map((p, i) => {
          const x = i * 213, W = 200;
          return (
            <g key={p.t}>
              <rect x={x} y="40" width={W} height="250" fill={i === 1 ? BLAU_TINT : "#fff"} stroke={i === 1 ? BLAU : HAIR} />
              <text x={x + 14} y="64" fontWeight="700" fontSize="12.5">{p.t}</text>
              <text x={x + 14} y="80" fontSize="10.5" fontFamily={BODY} fill={TINTE_60}>{p.s}</text>
              <text x={x + 14} y="128" fontWeight="700" fontSize="28" fill={BLAU}>{p.big}</text>
              {p.l.map((l, j) => (
                <text key={l} x={x + 14} y={160 + j * 22} fontSize="11.5" fontFamily={BODY}>{l}</text>
              ))}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ---------------- ausweis-vergleich ---------------- */
const VGL = [
  ["Grundlage", "Berechnung von Hülle und Anlagentechnik", "Verbrauchsdaten der letzten 3 Jahre"],
  ["Aussage", "objektiv, nutzerunabhängig", "vom Nutzerverhalten abhängig"],
  ["Preis", "900 / 1.100 / 2.300 € (EFH/ZFH/MFH)", "100 € (alle Wohngebäude)"],
  ["Dauer", "5–10 Werktage, mit Vor-Ort-Termin", "rund 3 Werktage"],
  ["Pflicht", "Bauantrag vor 1.11.1977, < 5 WE, nicht nachgerüstet", "wenn keine Pflicht, freie Wahl"],
  ["Empfehlung", "bei Verkauf: genauer, seriöser", "wenn es schnell und günstig sein soll"],
];
export function AusweisVergleich() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Bedarfsausweis gegenüber Verbrauchsausweis: Grundlage Berechnung versus Verbrauchsdaten, objektiv versus nutzerabhängig, Preis 900 bis 2.300 Euro versus 100 Euro, Dauer 5 bis 10 Werktage versus rund 3 Werktage, Pflicht bei Bauantrag vor 1.11.1977 mit weniger als 5 Wohnungen ohne Nachrüstung, Empfehlung Bedarfsausweis bei Verkauf." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Bedarfs- und Verbrauchsausweis im Vergleich</text>
        <rect x="130" y="34" width="250" height="26" fill={BLAU} /><text x="255" y="52" textAnchor="middle" fill="#fff" fontWeight="700">Bedarfsausweis</text>
        <rect x="390" y="34" width="250" height="26" fill={BLAU_TINT} stroke={BLAU} /><text x="515" y="52" textAnchor="middle" fontWeight="700">Verbrauchsausweis</text>
        {VGL.map((r, i) => {
          const y = 84 + i * 36;
          return (
            <g key={r[0]}>
              <text x="0" y={y} fontWeight="700" fontSize="11.5">{r[0]}</text>
              <text x="138" y={y} fontSize="10.5" fontFamily={BODY}>{r[1]}</text>
              <text x="398" y={y} fontSize="10.5" fontFamily={BODY}>{r[2]}</text>
              <line x1="0" y1={y + 12} x2="640" y2={y + 12} stroke={HAIR} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ---------------- portfolio-prioritaet ---------------- */
export function PortfolioPrioritaet() {
  const b = [
    { p: 1, h: 120, t: "Gebäude A", s: "unsanierte Hülle, alte Heizung" },
    { p: 2, h: 96, t: "Gebäude B", s: "Fenster erneuert, Dach offen" },
    { p: 3, h: 74, t: "Gebäude C", s: "teilsaniert, Heizung 2015" },
    { p: 4, h: 52, t: "Gebäude D", s: "saniert, nur Nachweise" },
  ];
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Priorisierung im Bestand, schematisch: Gebäude werden nach Zustand von Hülle und Anlagentechnik, Förderquote und Belegung in eine Reihenfolge gebracht, unsanierte Gebäude mit alter Heizung zuerst, bereits sanierte zuletzt." className="h-auto w-full">
      <g fontFamily={HEAD} fontSize="12" fill={TINTE}>
        <text x="0" y="20" fontWeight="700" fontSize="15">Welche Gebäude zuerst? Eine Reihenfolge statt Einzelfälle</text>
        <line x1="20" y1="200" x2="620" y2="200" stroke={TINTE} strokeWidth="1.5" />
        {b.map((g, i) => {
          const x = 40 + i * 150;
          return (
            <g key={g.t}>
              <path d={`M ${x} ${200 - g.h} l 40 -24 l 40 24 v ${g.h} h -80 z`} fill={i === 0 ? BLAU : i === 3 ? "#fff" : BLAU_HELL} stroke={BLAU} />
              <circle cx={x + 40} cy={200 - g.h - 40} r="14" fill={TINTE} />
              <text x={x + 40} y={200 - g.h - 35} textAnchor="middle" fill="#fff" fontWeight="700" fontSize="12">{g.p}</text>
              <text x={x + 40} y="222" textAnchor="middle" fontWeight="700" fontSize="11.5">{g.t}</text>
              <text x={x + 40} y="238" textAnchor="middle" fontSize="10.5" fontFamily={BODY} fill={TINTE_60}>{g.s}</text>
            </g>
          );
        })}
        <text x="0" y="272" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Kriterien: Zustand von Hülle und Anlagentechnik · erreichbare Förderquote · Belegung und Bauablauf · Nachweise je Objekt. Schematisch.</text>
        <text x="0" y="290" fontSize="11" fill={TINTE_60} fontFamily={BODY}>Ergebnis: förderfähige Sanierungspfade mit Reihenfolge, Anträge und Nachweise gebündelt, verbindliches Angebot nach Erstprüfung.</text>
      </g>
    </svg>
  );
}
