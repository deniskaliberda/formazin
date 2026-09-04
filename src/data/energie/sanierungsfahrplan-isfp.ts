import type { EnergiePageContent } from "./types";
import { energieTeam } from "./team";

/**
 * Spoke-Seite /leistungen/energieberatung/sanierungsfahrplan-isfp.
 *
 * Portiert aus content-rework/05-sanierungsfahrplan-isfp.md (Stand 2026-07-08,
 * Feith-Daten integriert). Honorare (1.500/1.700/2.000 €), BAFA-Deckel
 * (650/650/850 € + 250 € WEG), Eigenanteile (850/1.050/1.150 €) und FAQ-Texte
 * sind 1:1 übernommen. Der sichtbare FAQ-Text ist zugleich der
 * FAQPage-Schema-Text (siehe FaqAccordion).
 *
 * Weggelassene Marker aus dem MD (nie sichtbar gerendert):
 * - author_schema.image "[PLATZHALTER: Foto-Freigabe Energieberater]" —
 *   ersetzt durch das freigegebene Funnel-Foto /images/feith-funnel.jpg
 *   (Denis-Vorgabe expertPhoto).
 * - "[bitte prüfen: 301-Redirect-Ziel der alten /heizungsplanung-65-prozent-URL]"
 *   (HTML-Kommentar im MD) — reines Redirect-Thema, kein Seiteninhalt.
 * - /wissen/-Link "Sanierungsfahrplan Kosten 2026" aus dem Verwandt-Block —
 *   der /wissen/-Bereich existiert erst in Phase 4.
 * - FAQ "Brauche ich für die KfW-Förderung einen iSFP?": Markdown-Link auf
 *   die KfW-Baubegleitung als Fließtext übernommen (FaqAccordion rendert
 *   Antworten als Plain-Text; der Link liegt im related-Block).
 */
export const sanierungsfahrplanContent: EnergiePageContent = {
  kind: "service",
  meta: {
    slug: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
    canonical: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
    ogImage: "/images/energie/svc-sanierungsfahrplan-v2.jpg",
    title: "Sanierungsfahrplan iSFP 2026 — Kosten, Förderung, Ablauf",
    metaDescription:
      "Sanierungsfahrplan (iSFP) in Berlin & Brandenburg: Festpreis ab 1.500 €, 50 % BAFA-Zuschuss (Deckel 650/850 €), iSFP-Bonus für spätere BEG-Einzelmaßnahmen.",
    primaryKeyword: "sanierungsfahrplan kosten",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Sanierungsfahrplan (iSFP)",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/sanierungsfahrplan-isfp",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Sanierungsfahrplan iSFP — Förderung 2026 + ehrliche Kosten",
  intro:
    "Der staatlich genormte Sanierungsplan im offiziellen BAFA-Format — erstellt in einem Architektur- und Ingenieurbüro, mit 50 % Zuschuss auf das Beratungshonorar und dem iSFP-Bonus für spätere Einzelmaßnahmen an Gebäudehülle und Anlagentechnik.",
  heroTrustLine:
    "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg und angrenzenden Regionen.",

  heroImage: {
    src: "/images/energie/svc-sanierungsfahrplan-v2.jpg",
    alt: "Hausmodell, Wandaufbau-Schnitt, Dämmstoffprobe und Fensterprofil auf dem Planungstisch",
  },

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

  // Redesign 04.09.2026: Band „Ihre Antworten" (Infografiken, Konzept §3)
  vierAntworten: {
    heading: "Kosten, Zeit und was danach kommt",
    items: [
      {
        name: "foerder-rechnung",
        caption: "Festpreise brutto, BAFA-Zuschuss gedeckelt, Eigenanteil je Gebäudetyp.",
      },
      {
        image: { src: "/images/energie/vorher-nachher.jpg", alt: "Mehrfamilienhaus zur Hälfte energetisch saniert: neue Dämmfassade links, alter Putz rechts" },
        frage: "Und dann?",
        heading: "Sanieren in Etappen, wann es zu Ihnen passt",
        body: [
          "Der Fahrplan teilt Ihre Sanierung in **drei bis sieben Pakete**, jedes einzeln umsetzbar und einzeln gerechnet: Investition, Förderung, Eigenanteil, Energieeinsparung, Amortisation. Sie entscheiden, was zuerst kommt und wann.",
          "Wer einmal einen iSFP hat, hat einen langfristigen Plan in der Hand. Sie sanieren, wenn das Geld da ist, nicht unter Zeitdruck, und nehmen bei jeder BAFA-Einzelmaßnahme den iSFP-Bonus mit.",
        ],
        caption: "Sanierung im Bestand, Schritt für Schritt: Der Fahrplan legt die Reihenfolge fest.",
      },
      {
        name: "dauer-aufwand",
        caption: "Ihr Zeitaufwand bleibt bei drei bis vier Stunden, den Rest erledigen wir.",
      },
    ],
  },
  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Ein individueller Sanierungsfahrplan (iSFP) kostet 2026 bei Formazin & Partner 1.500 Euro brutto für ein Einfamilienhaus, 1.700 Euro für ein Zweifamilienhaus und 2.000 Euro ab drei Wohneinheiten. Die BAFA fördert 50 Prozent des Honorars, gedeckelt auf 650 Euro (Ein-/Zweifamilienhaus) bzw. 850 Euro (ab drei Wohneinheiten). Ihr Eigenanteil beim Einfamilienhaus liegt damit bei 850 Euro.",
  },

  // Team-/Kompetenzblock (Briefing v2) — ersetzt den Einzel-ExpertProof
  team: energieTeam,

  introSplit: {
    eyebrow: "Der iSFP",
    heading: "Was ein iSFP wirklich ist",
    body: [
      "Der iSFP ist ein staatlich genormter Sanierungsplan im offiziellen BAFA-Format. Anders als ein einfaches Beratungsgespräch ist er:",
    ],
    bullets: [
      "**Schriftlich dokumentiert** — Sie bekommen ein PDF mit 20–35 Seiten Bericht",
      "**Mehrjährig gestaffelt** — Maßnahmen werden in 3–7 Sanierungs-Pakete aufgeteilt, jedes Paket einzeln umsetzbar",
      "**Wirtschaftlich gerechnet** — pro Paket: Investition, Förderung, Eigenanteil, Energieeinsparung, Amortisation",
      "**Förder-relevant** — er hebt die BEG-Förderung für Einzelmaßnahmen an Gebäudehülle und Anlagentechnik um 5 Prozentpunkte (iSFP-Bonus) und verdoppelt bei diesen Maßnahmen den förderfähigen Höchstbetrag",
      "Wer einmal einen iSFP hat, hat einen langfristigen Plan in der Hand — Sie können sanieren, wann Ihnen das Geld zur Verfügung steht, und nicht unter Zeitdruck",
    ],
    image: {
      src: "/images/energie/gebaeudehuelle-v2.jpg",
      alt: "Eingerüstetes Wohnhaus mit frisch montierten Dämmplatten während der energetischen Sanierung",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  bodySections: [
    { kind: "heading", text: "Was ein iSFP kostet (2026)" },
    {
      kind: "paragraph",
      text: "Feste Brutto-Preise je Gebäudetyp — keine Spannen, kein Nachverhandeln: **1.500 € (Einfamilienhaus) · 1.700 € (Zweifamilienhaus) · 2.000 € (Mehrfamilienhaus ab drei Wohneinheiten)**. Die BAFA fördert 50 Prozent des Honorars; diese 50-Prozent-Förderung gilt seit dem 7. August 2024.",
    },
    {
      kind: "note",
      tone: "info",
      text: "**Wichtig zur Förderhöhe:** Der BAFA-Zuschuss beträgt 50 Prozent des Beratungshonorars, ist aber **auf 650 Euro (Ein-/Zweifamilienhaus) bzw. 850 Euro (ab drei Wohneinheiten) gedeckelt — egal, wie hoch das Honorar ist.** Liegt das Honorar über dem doppelten Deckel, zahlen Sie den Rest selbst. Die früher genannten iSFP-Maxima von 1.300/1.700/5.000 Euro gibt es seit dem 7. August 2024 nicht mehr.",
    },

    { kind: "subheading", text: "Beispielrechnung Eigenanteil" },
    {
      kind: "list",
      items: [
        "Einfamilienhaus, 1.500 € Honorar → 50 % = 750 €, aber Deckel 650 € → **650 € Zuschuss → 850 € Eigenanteil**",
        "Zweifamilienhaus, 1.700 € Honorar → 50 % = 850 €, aber Deckel 650 € → **650 € Zuschuss → 1.050 € Eigenanteil**",
        "Mehrfamilienhaus (ab 3 WE), 2.000 € Honorar → 50 % = 1.000 €, aber Deckel 850 € → **850 € Zuschuss → 1.150 € Eigenanteil**",
      ],
    },
    {
      kind: "paragraph",
      text: "Der Deckel greift bei allen drei Gebäudetypen — den Rest des Honorars tragen Sie selbst.",
    },
    {
      kind: "paragraph",
      text: "**WEG-Erläuterung in der Eigentümerversammlung:** Wird der fertige iSFP in einer Eigentümerversammlung vorgestellt, gewährt die BAFA einmalig bis zu 250 € pro Wohnungseigentümergemeinschaft zusätzlich. Diese Erläuterung bieten wir als eigene Leistung an: 350–450 € (online/kurz) bzw. 550–850 € (vor Ort, zzgl. Fahrtkosten), jeweils brutto.",
    },

    { kind: "subheading", text: "Wichtig zur Förderung" },
    {
      kind: "list",
      items: [
        "Der Förderantrag MUSS vor Beauftragung gestellt werden (spätestens vor Beratungsbeginn) — sonst keine Förderung",
        "Antragsteller ist der Eigentümer, nicht der Berater",
        "Auszahlung erfolgt nach Vorlage des fertigen iSFP, typisch 4–8 Wochen nach Einreichung",
        "Der gedeckelte Zuschuss kommt zurück; den Restbetrag des Honorars strecken Sie vor",
      ],
    },

    { kind: "heading", text: "Der iSFP-Bonus — der eigentliche Hebel" },
    {
      kind: "paragraph",
      text: "Der iSFP-Bonus von 5 Prozentpunkten wird auf BEG-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik (BAFA) draufgepackt, wenn sie aus einem zertifizierten Sanierungsfahrplan stammen. Die Grundförderung dieser Maßnahmen steigt damit von 15 auf 20 Prozent. Zusätzlich verdoppelt der iSFP bei diesen Maßnahmen den förderfähigen Höchstbetrag von 30.000 auf 60.000 Euro pro Wohneinheit und Jahr.",
    },
    {
      kind: "list",
      items: [
        "**Gilt:** BEG-Einzelmaßnahmen (BEG-EM) an **Gebäudehülle und Anlagentechnik** über die BAFA — also Wärmedämmung, Fenster, Türen, Anlagentechnik, Heizungsoptimierung. Hier sind es 15 Prozent Grundförderung, mit iSFP-Bonus **20 Prozent**.",
        "**Gilt NICHT:** der **Heizungstausch** (KfW 458). Dort gibt es keinen iSFP-Bonus — der iSFP wirkt beim Heizungstausch über andere Boni (z. B. Klimageschwindigkeits- und Einkommensbonus) und als Planungsgrundlage, aber nicht über die +5 Prozentpunkte.",
      ],
    },
    {
      kind: "note",
      tone: "info",
      text: "Rechenbeispiel Wärmedämmung Fassade (30.000 €, BEG-EM): Ohne iSFP-Bonus 15 % Grundförderung = 4.500 € Zuschuss, Eigenanteil 25.500 €. Mit iSFP-Bonus 15 % + 5 % = 20 % = 6.000 € Zuschuss, Eigenanteil 24.000 €. **Vorteil iSFP-Bonus: 1.500 €.**",
    },
    {
      kind: "paragraph",
      text: "Dazu kommt der zweite Hebel: **Mit iSFP steigt der förderfähige Höchstbetrag für BEG-EM-Hüllenmaßnahmen von 30.000 auf 60.000 Euro pro Wohneinheit und Jahr** — bei umfangreichen Sanierungen ist das oft der größere Effekt als die +5 Prozentpunkte selbst.",
    },
    {
      kind: "diagram",
      name: "foerder-schienen",
      caption: "Wo der iSFP-Bonus wirkt: nur auf BAFA-Einzelmaßnahmen — der Heizungstausch (KfW 458) hat eigene Regeln.",
    },

    { kind: "heading", text: "Was im iSFP konkret drinsteht" },
    { kind: "paragraph", text: "Ein typisches iSFP-Dokument von uns enthält:" },
    {
      kind: "list",
      items: [
        "**Bestand-Analyse**: U-Werte aller Bauteile, Anlageneffizienz, Energieverbrauch IST",
        "**Effizienz-Klasse vorher/nachher** im A+ bis H-Schema",
        "**3–7 Sanierungs-Pakete** mit Reihenfolge — zum Beispiel Dach dämmen, Fenster tauschen, Fassade dämmen, Lüftungsanlage und Heizungsoptimierung; dazu die Empfehlung des Heizungstyps und die Einordnung in die passenden Förderprogramme (die konkrete Heizungsplanung und Auslegung übernimmt Ihr Fachbetrieb)",
        "**Pro Paket**: Investition, Förderung, Eigenanteil, jährliche Einsparung, Amortisation in Jahren",
        "**Maßnahmen-Mix-Empfehlung**: was zuerst, was später, warum",
        "**Förder-Übersicht**: BEG-EM (BAFA), KfW-Heizungsförderung, weitere passende Programme",
      ],
    },
    {
      kind: "paragraph",
      text: "Sie bekommen das als druckfertiges PDF und als Word-Datei zur eigenen Bearbeitung. Wir bieten den iSFP als **eine Vollvariante** an — inklusive Vor-Ort-Aufnahme, Berechnung im offiziellen Format und Beratungsgespräch. Eine reduzierte „Light“-Variante gibt es nicht: Der Förderwert des iSFP entsteht erst durch das vollständige, zertifizierte Dokument.",
    },
    {
      kind: "note",
      tone: "info",
      text: "**Hinweis zur Heizung:** Wir planen Heizungsanlagen nicht selbst — keine Heizlast-Berechnung, keine Technologie-Festlegung. Unsere Rolle ist die **Förderung**: Wir ordnen die Heizung in die richtigen Programme ein und sichern Ihnen die Zuschüsse. Die technische Auslegung übernimmt Ihr Heizungs-Fachbetrieb; viele Fachbetriebe kommen genau dafür zu uns.",
    },

    { kind: "heading", text: "Wann sich ein iSFP NICHT lohnt" },
    { kind: "paragraph", text: "Ehrliche Antwort:" },
    {
      kind: "list",
      items: [
        "**Wenn Sie Ihr Haus in den nächsten 2 Jahren verkaufen wollen** und sicher nicht mehr sanieren — dann lieber direkt einen Energieausweis und keinen iSFP",
        "**Wenn Ihr Haus nach den Effizienzstandards der letzten Jahre gebaut wurde** — Sanierungs-Bedarf gering, iSFP-Bonus wenig wert",
        "**Wenn Sie nur eine einzelne Maßnahme planen** und dafür sicher keinen iSFP-Bonus brauchen — dann reicht eine punktuelle Beratung",
      ],
    },
    {
      kind: "paragraph",
      text: "In allen anderen Fällen rechnet sich der iSFP — auch wenn Sie nicht sofort sanieren.",
    },
  ],

  priceTables: [
    {
      caption: "Sanierungsfahrplan iSFP – Honorar, BAFA-Zuschuss und Ihr Eigenanteil (2026)",
      columns: [
        { key: "typ", label: "Gebäudetyp" },
        { key: "honorar", label: "Brutto-Honorar", align: "right" },
        { key: "zuschuss", label: "BAFA-Zuschuss (50 %, gedeckelt)", align: "right" },
        { key: "eigenanteil", label: "Ihr Eigenanteil", align: "right" },
      ],
      rows: [
        { typ: "Einfamilienhaus", honorar: "1.500 €", zuschuss: "650 €", eigenanteil: "850 €" },
        { typ: "Zweifamilienhaus", honorar: "1.700 €", zuschuss: "650 €", eigenanteil: "1.050 €" },
        {
          typ: "Mehrfamilienhaus (ab 3 WE)",
          honorar: "2.000 €",
          zuschuss: "850 € (+ ggf. 250 € WEG)",
          eigenanteil: "1.150 €",
        },
        {
          typ: "Nichtwohngebäude",
          honorar: "individuell",
          zuschuss: "nach Aufwand",
          eigenanteil: "individuell",
        },
      ],
      highlightColumn: "eigenanteil",
      note: "Alle Preise brutto. Nichtwohngebäude: Honorar individuell nach Aufwand. Der BAFA-Antrag muss vor Beauftragung gestellt werden.",
    },
  ],

  trust: {
    eyebrow: "Ihr operativer Ansprechpartner",
    name: "Feith Formazin",
    role: "Energie-Effizienz-Experte · Bauingenieur (M.Sc.)",
    intro:
      "Feith Formazin ist **gelisteter Energie-Effizienz-Experte für die Förderprogramme des Bundes** (Energie-Effizienz-Experten-Liste, KfW **und** BAFA, für Wohn- und Nichtwohngebäude) und damit antragsberechtigt für BAFA-Beratungen und KfW-Förderprogramme. Studium: M.Sc. Bauingenieurwesen, HTWK Leipzig. Die fachliche Leitung und Qualitätssicherung der Energieberatung im Büro liegt bei **Oda Formazin, Energieberaterin seit 2015**.",
    credentials: [
      "Gelisteter Energie-Effizienz-Experte (KfW + BAFA)",
      "Wohn- & Nichtwohngebäude",
      "M.Sc. Bauingenieurwesen, HTWK Leipzig",
    ],
    footnote:
      "BAFA-Beraternummer EB163129. Maßgeblich ist die Listung in der Energie-Effizienz-Experten-Liste des Bundes.",
  },

  trustImage: {
    src: "/images/energie/planung-beratung-v2.jpg",
    alt: "Heller Schreibtisch mit Grundriss, Unterlagenmappe und Hausschlüsseln bei der Energieberatung",
  },

  processSteps: {
    heading: "In 5 Schritten zum iSFP",
    intro:
      "Gesamtdauer ab Antragstellung bis zum fertigen iSFP: typisch 8–12 Wochen.",
    steps: [
      {
        title: "Telefon-Erstgespräch (kostenlos, 20 min)",
        text: "Wir klären Aufwand, Honorar und Förderfähigkeit.",
      },
      {
        title: "BAFA-Antrag stellen",
        text: "Sie persönlich, online über das BAFA-Portal. Die Antragsbestätigung kommt in 2–4 Wochen.",
      },
      {
        title: "Vor-Ort-Termin (2–3 Stunden)",
        text: "Aufmaß, Bauteil-Aufnahme, Heizung, Foto-Dokumentation aller Außenflächen.",
      },
      {
        title: "iSFP-Erstellung (2–4 Wochen)",
        text: "Wir rechnen mit BAFA-anerkannter Software und dokumentieren alle Sanierungs-Pakete im offiziellen iSFP-Format.",
      },
      {
        title: "Beratungs-Gespräch (1 Stunde)",
        text: "Wir gehen den iSFP gemeinsam durch, priorisieren Maßnahmen nach Wirtschaftlichkeit und klären die Folge-Schritte.",
      },
    ],
  },

  cases: {
    heading: "Bauen im Bestand — Beispiele aus unserer Arbeit",
    intro:
      "Die über 30 Jahre Erfahrung des Büros mit Bestandsgebäuden fließen in jeden iSFP mit ein. Wir erstellen iSFPs in Berlin und Brandenburg, vor allem im Nord-Osten des Berliner Umlands: Ahrensfelde, Bernau, Eberswalde, Werneuchen, Strausberg, Altlandsberg, Panketal. Anfahrt im Umkreis von rund 50 km enthalten.",
    items: [
      {
        name: "Wohnhaus Mehrow",
        jahr: "2014",
        umfang:
          "Denkmalgerechte energetische Sanierung der Gebäudehülle.",
        denkmal: true,
      },
      {
        name: "Mehrfamilienhaus Strausberger Straße",
        jahr: "2005",
        umfang: "Kernsanierung mit energetischer Sanierung der Gebäudehülle.",
        denkmal: false,
      },
      {
        name: "Ernst-Reuter-Siedlung",
        jahr: "im Bau",
        umfang:
          "Laufende Fassaden- und Dachsanierung, denkmalgeschützt.",
        denkmal: true,
      },
    ],
  },

  faq: [
    {
      q: "Was kostet ein iSFP?",
      a: "Ein iSFP kostet 2026 bei Formazin & Partner 1.500 Euro brutto für ein Einfamilienhaus, 1.700 Euro für ein Zweifamilienhaus und 2.000 Euro ab drei Wohneinheiten. Davon fördert die BAFA 50 Prozent des Honorars, gedeckelt auf 650 Euro (Ein-/Zweifamilienhaus) bzw. 850 Euro (ab drei Wohneinheiten). Beim Einfamilienhaus liegt Ihr Eigenanteil damit bei 850 Euro. Wichtig: Der Förderantrag muss vor Beauftragung gestellt werden.",
    },
    {
      q: "Was ist der Unterschied zwischen Sanierungsfahrplan und iSFP?",
      a: "Sanierungsfahrplan ist der Oberbegriff — jede strukturierte Sanierungs-Planung. Der iSFP ist der individuelle Sanierungsfahrplan im offiziellen BAFA-Format mit Förder-Berechtigung und 5-Prozentpunkte-Bonus auf BEG-Einzelmaßnahmen. Beratungen ohne BAFA-Format sind nicht förderfähig und qualifizieren nicht für den iSFP-Bonus. In der Praxis ist der iSFP fast immer die richtige Wahl.",
    },
    {
      q: "Wie hoch ist die BAFA-Förderung für den iSFP 2026?",
      a: "Die BAFA fördert seit dem 7. August 2024 50 Prozent des iSFP-Honorars (vorher 80 Prozent). Der Zuschuss ist auf 650 Euro für Ein- und Zweifamilienhäuser bzw. 850 Euro für Wohngebäude ab drei Wohneinheiten gedeckelt — unabhängig von der Honorarhöhe. Zusätzlich gibt es einmalig bis zu 250 Euro pro Wohnungseigentümergemeinschaft, wenn der iSFP in der Eigentümerversammlung erläutert wird. Die früheren Maxima von 1.300/1.700/5.000 Euro gelten nicht mehr.",
    },
    {
      q: "Wie funktioniert der iSFP-Bonus von 5 Prozentpunkten?",
      a: "Der iSFP-Bonus wird auf BEG-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik (BAFA) draufgepackt, die aus einem zertifizierten iSFP stammen. Die Grundförderung dieser Maßnahmen steigt damit von 15 auf 20 Prozent. Beim Heizungstausch (KfW 458) gibt es diesen Bonus nicht. Zusätzlich verdoppelt der iSFP bei den BAFA-Hüllenmaßnahmen den förderfähigen Höchstbetrag von 30.000 auf 60.000 Euro pro Wohneinheit und Jahr.",
    },
    {
      q: "Wie lange dauert die Erstellung eines iSFP?",
      a: "Von BAFA-Antragstellung bis fertigem iSFP-Dokument vergehen typisch 8 bis 12 Wochen. Davon entfallen 2–4 Wochen auf die Antragsbestätigung der BAFA, 1 Woche auf Vor-Ort-Termin und Datensammlung, 2–4 Wochen auf die Erstellung selbst und 1 Woche auf das Beratungsgespräch. In Eil-Fällen schaffen wir 6–8 Wochen.",
    },
    {
      q: "Brauche ich für die KfW-Förderung einen iSFP?",
      a: "Für die KfW-Effizienzhaus-Programme (z. B. KfW 261) ist ein gelisteter Energie-Effizienz-Experte vorgeschrieben. Den iSFP ersetzt das nicht — er ist eine gute Grundlage, aber keine KfW-Baubegleitung. Als gelistete Energie-Effizienz-Experten (KfW und BAFA, Wohn- und Nichtwohngebäude) bieten wir die KfW-Baubegleitung separat an. Bei BEG-Einzelmaßnahmen ist der iSFP nicht Pflicht, wirkt sich aber über den iSFP-Bonus aus.",
    },
  ],

  related: {
    heading: "Weiter im Energie-Cluster",
    intro:
      "Zurück zur Übersicht — oder direkt zur Leistung, die auf den iSFP folgt.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung (Übersicht)",
        description: "Alle fünf Energie-Leistungen im Überblick — Kosten, Ablauf, Förderung.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
        label: "BAFA-/KfW-Förderberatung",
        description: "Antragsstellung, Auszahlung, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/kfw-baubegleitung",
        label: "KfW-Baubegleitung",
        description: "Wenn die Sanierung folgt: Antrag, technischer Nachweis, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/energieausweis",
        label: "Energieausweis",
        description: "Wenn Sie nur den Pflicht-Ausweis brauchen.",
        kind: "service",
      },
    ],
  },

  cta: {
    heading: "iSFP-Erstgespräch anfragen",
    text: "Das Erstgespräch dauert 20 Minuten und ist kostenlos. Danach wissen Sie, ob ein iSFP für Sie wirtschaftlich Sinn macht — und in welcher Größenordnung Honorar und Förderung liegen.",
    buttonLabel: "iSFP-Erstgespräch anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Individueller Sanierungsfahrplan (iSFP)",
  areaServed: [
    "Berlin",
    "Brandenburg",
    "Ahrensfelde",
    "Bernau bei Berlin",
    "Eberswalde",
    "Werneuchen",
    "Strausberg",
    "Altlandsberg",
    "Panketal",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "1500",
    highPrice: "2000",
    offerCount: "3",
  },
};
