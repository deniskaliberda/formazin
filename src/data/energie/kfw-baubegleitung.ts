import type { EnergiePageContent } from "./types";

/**
 * Spoke-Seite /leistungen/energieberatung/kfw-baubegleitung.
 *
 * Portiert aus content-rework/07-kfw-baubegleitung.md (Stand 2026-07-08,
 * Feith-Daten integriert). Honorare (3.500/4.500/6.500 € brutto, NWG
 * individuell), KfW-458-Boni und FAQ-Texte sind 1:1 übernommen. Der sichtbare
 * FAQ-Text ist zugleich der FAQPage-Schema-Text (siehe FaqAccordion).
 *
 * KRITISCH: Die KfW-Baubegleitung ist NICHT „50 % BAFA“-gefördert — die
 * 50-%-Deckelung (650/850 €) gilt nur für die BAFA-Energieberatung (EBW/iSFP).
 * Die Baubegleitung ist über BEG/KfW 261 förderfähig; ein konkreter Fördersatz
 * wird bewusst NICHT genannt (Klärung im Erstgespräch).
 *
 * Aus dem MD weggelassene / neutralisierte Platzhalter (nichts erfunden):
 * - "[bitte prüfen: aktueller BEG-Stand — konkreter Fördersatz/Deckel der
 *   KfW-Baubegleitung 2026]" (Honorar-Abschnitt + FAQ 1) → neutral:
 *   „Förderfähigkeit und aktuellen Satz klären wir im Erstgespräch.“
 * - "[PLATZHALTER: konservativ nachgerechnetes Beispielprojekt]" → die
 *   Beispielrechnung entfällt komplett (inkl. Ankündigungssatz).
 * - "[bitte prüfen: … Stand 2026]" in der Programm-Tabelle (BEG-EM, BEG-WG,
 *   KfW 261) → Spalte „Förderhöhe“ ersetzt durch faktenbasierte „Förderart“
 *   (Zuschuss/Tilgungszuschuss/Kredit, aus dem MD selbst) + Hinweis, dass
 *   Konditionen vor jeder Beauftragung aktuell geprüft werden.
 * - "[bitte prüfen: aktuelle Förderquoten 2026 …]" in FAQ „Wie hoch ist die
 *   KfW-Förderung?" → neutral: „den aktuellen Stand der Förderquoten klären
 *   wir im Erstgespräch“.
 */
export const kfwBaubegleitungContent: EnergiePageContent = {
  kind: "service",
  meta: {
    slug: "/leistungen/energieberatung/kfw-baubegleitung",
    canonical: "/leistungen/energieberatung/kfw-baubegleitung",
    title: "KfW-Baubegleitung Berlin Brandenburg — gelisteter Energieeffizienz-Experte",
    metaDescription:
      "Baubegleitende Energieberatung nach BEG für die KfW-Förderung: Antragstellung, Bauleitung, technischer Projektnachweis, Verwendungsnachweis. Durch einen gelisteten Energieeffizienz-Experten (KfW + BAFA).",
    primaryKeyword: "kfw berater",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "KfW-Baubegleitung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/kfw-baubegleitung",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "KfW-Baubegleitung Berlin & Brandenburg",
  intro:
    "Antragstellung, Bauleitung, technischer Projektnachweis und Verwendungsnachweis — für die KfW-Effizienzhaus-Programme durch einen gelisteten Energie-Effizienz-Experten (KfW + BAFA) aus Ahrensfelde bei Berlin.",

  heroImage: {
    src: "/images/energie/svc-kfw-baubegleitung.jpg",
    alt: "Gerüst mit frisch angebrachten Dämmplatten an der Fassade eines Altbaus während der energetischen Sanierung",
  },

  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Die KfW-Baubegleitung ist die fachliche Begleitung Ihrer energetischen Sanierung durch einen in der Energie-Effizienz-Experten-Liste des Bundes gelisteten Berater; für die KfW-Effizienzhaus-Programme ist sie Voraussetzung. Bei Formazin & Partner kostet sie 3.500 € (Einfamilienhaus), 4.500 € (Zweifamilienhaus) und 6.500 € (Mehrfamilienhaus) brutto, Nichtwohngebäude individuell — mit Antragstellung, Bauleitung und Verwendungsnachweis, im Rahmen der KfW-Förderung bezuschussbar.",
  },

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

  introSplit: {
    eyebrow: "Pflicht bei Effizienzhaus-Programmen",
    heading: "Wann Sie eine KfW-Baubegleitung brauchen",
    body: [
      "Für die Effizienzhaus-Programme der KfW gibt es ohne fachliche Begleitung keine Förderung: Die KfW verlangt einen unabhängigen Energieeffizienz-Experten, der die fachgerechte Umsetzung dokumentiert.",
      "**Zur Abgrenzung:** Nicht jede geförderte Maßnahme braucht eine KfW-Baubegleitung. Einzelmaßnahmen über die **BAFA (BEG-EM)** — etwa Dämmung oder Fenstertausch — sind auch ohne KfW-Baubegleitung förderfähig. Die Pflicht greift bei den folgenden KfW-Effizienzhaus-Programmen:",
    ],
    bullets: [
      "KfW-Förderung BEG WG (Bundesförderung effiziente Gebäude — Wohngebäude): Förderung nur mit Energieeffizienz-Experten",
      "KfW 261/262 (Effizienzhaus-Sanierung): verpflichtende Baubegleitung",
      "KfW 297 (Klimafreundlicher Neubau): Energieeffizienz-Experte muss das Vorhaben begleiten",
    ],
    image: {
      src: "/images/energie/planung-beratung.jpg",
      alt: "Schreibtisch mit Bauzeichnungen und Plänen während der Planung einer geförderten Sanierung",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  bodySections: [
    { kind: "heading", text: "Was die Baubegleitung praktisch leistet" },
    {
      kind: "paragraph",
      text: "Eine KfW-Baubegleitung umfasst die Antragstellung, die Prüfung der Bauausführung gegen die KfW-Vorgaben, den technischen Projektnachweis nach Fertigstellung und die Begleitung beim Verwendungsnachweis. Der Berater dokumentiert jede förderrelevante Maßnahme schriftlich, prüft die Handwerker-Rechnungen und stellt sicher, dass die KfW die Förderung am Ende auch wirklich auszahlt.",
    },

    { kind: "subheading", text: "Phase 1 — Vor der Sanierung" },
    {
      kind: "list",
      items: [
        "Bestands-Analyse, Sanierungs-Planung",
        "Berechnung der erwarteten Energie-Einsparung",
        "Auswahl Förder-Programm (BEG-WG, BEG-EM, KfW 261, KfW 297)",
        "Antragstellung KfW + BAFA, Einbindung der Förderung für alle Gewerke",
        "Energetischer Nachweis für das Förderprogramm",
      ],
    },

    { kind: "subheading", text: "Phase 2 — Während der Sanierung" },
    {
      kind: "list",
      items: [
        "Koordination und Vergleich der Handwerker-Angebote (Förderfähigkeit im Blick)",
        "Stichproben-Abnahme der Bauteile (Dämmung, Fenster)",
        "Prüfung der Handwerker-Rechnungen gegen die Förderfähigkeit",
        "Beratung bei Abweichungen vom Plan",
      ],
    },

    { kind: "subheading", text: "Phase 3 — Nach der Sanierung" },
    {
      kind: "list",
      items: [
        "Technischer Projektnachweis (TPN) — verbindliches Dokument für die KfW",
        "Verwendungsnachweis-Erstellung mit allen Rechnungen",
        "Begleitung der KfW-Auszahlung",
        "Abschluss-Dokumentation für Eigentümer",
      ],
    },

    { kind: "heading", text: "Was die KfW-Baubegleitung kostet" },
    {
      kind: "paragraph",
      text: "Wir arbeiten mit festen Honoraren für die KfW-Baubegleitung (KfW 261) — kein Stundensatz, keine Überraschung am Ende: **3.500 € (Einfamilienhaus) · 4.500 € (Zweifamilienhaus) · 6.500 € (Mehrfamilienhaus)** brutto, Nichtwohngebäude individuell nach Projektumfang.",
    },
    {
      kind: "paragraph",
      text: "Die KfW-Baubegleitung selbst ist im Rahmen der **BEG-/KfW-261-Programme förderfähig** — Förderfähigkeit und aktuellen Satz klären wir im Erstgespräch. Sie wird **nicht** über die 50-%-BAFA-Deckelung gefördert; die betrifft ausschließlich die Energieberatung (iSFP).",
    },
    {
      kind: "note",
      tone: "warn",
      text: "**Wichtig zur Abgrenzung der Förderungen:** Die **50-Prozent-Förderung mit Deckel 650 € (Ein-/Zweifamilienhaus) bzw. 850 € (ab drei Wohneinheiten)** gehört zur **BAFA-Energieberatung für Wohngebäude (EBW / iSFP)** — sie betrifft das Honorar der Energieberatung, nicht das Honorar der KfW-Baubegleitung. Beide Leistungen sind getrennt zu betrachten.",
    },

    { kind: "subheading", text: "Eine ehrliche Einordnung" },
    {
      kind: "paragraph",
      text: "Der entscheidende Punkt bei einer Effizienzhaus-Sanierung über die KfW ist nicht das Honorar der Baubegleitung, sondern dass diese Begleitung **Voraussetzung für die KfW-Förderung** dieser Programme ist: Ohne gelisteten Energieeffizienz-Experten gibt es für die Effizienzhaus-Programme der KfW keine Förderung.",
    },
    {
      kind: "paragraph",
      text: "Damit Förder-Rechnungen korrekt bleiben, drei Punkte zur Bonus-Logik:",
    },
    {
      kind: "list",
      items: [
        "Der iSFP-Bonus (+5 Prozentpunkte, von 15 % auf 20 %) gilt nur für BAFA-BEG-EM-Maßnahmen an Gebäudehülle, Anlagentechnik und Heizungsoptimierung — nicht für den Heizungstausch (KfW 458) und nicht pauschal auf das Gesamtprojekt. Mit iSFP steigt bei diesen BAFA-Maßnahmen der förderfähige Höchstbetrag von 30.000 auf 60.000 Euro pro Wohneinheit und Jahr.",
        "Die maximale Förderquote von 70 % gilt belegt nur im Kontext der KfW-458-Heizungsförderung (Heizungstausch) — nicht pauschal für eine Effizienzhaus-Sanierung.",
        "Förderfähige Kosten sind je Programm gedeckelt; die ausgezahlte Förderung berechnet sich auf den gedeckelten Betrag, nicht auf die Brutto-Baukosten.",
      ],
    },

    { kind: "heading", text: "Welche KfW-Programme wir begleiten" },
    {
      kind: "paragraph",
      text: "Wir begleiten die gängigen Förderprogramme — von BEG-EM-Einzelmaßnahmen über die Effizienzhaus-Sanierung (KfW 261) bis zum klimafreundlichen Neubau (KfW 297). KfW-Programme ändern sich regelmäßig; die konkreten Förderhöhen und Konditionen prüfen wir vor jeder Beauftragung zum aktuellen Stand.",
    },

    { kind: "subheading", text: "Heizungsförderung (KfW 458)" },
    {
      kind: "paragraph",
      text: "Wo eine neue Heizung Teil der Sanierung ist, binden wir die Förderung ein. Die einzelnen Boni unterliegen Bedingungen:",
    },
    {
      kind: "list",
      items: [
        "Klimageschwindigkeitsbonus +20 %: nur bei Antrag bis 31.12.2028 (danach Degression: ab 2029 17 %, anschließend alle zwei Jahre um weitere 3 Prozentpunkte sinkend) und nur für selbstnutzende Eigentümer.",
        "Effizienzbonus +5 %: für elektrisch angetriebene Wärmepumpen mit natürlichem Kältemittel oder mit der Wärmequelle Wasser, Erdreich oder Abwasser.",
        "Einkommensbonus +30 %: für selbstnutzende Eigentümer mit einem zu versteuernden Haushaltsjahreseinkommen von höchstens 40.000 Euro.",
        "Die Boni sind in Summe auf 70 % der förderfähigen Kosten gedeckelt; förderfähig sind beim Einfamilienhaus max. 30.000 Euro.",
      ],
    },
    {
      kind: "note",
      tone: "info",
      text: "Das **GEG/Heizungsgesetz wird 2026 reformiert** — wir beraten zum jeweils aktuellen Stand der Programme und Pflichten. Die Anlagen-/Heizungsplanung übernehmen die ausführenden Fachfirmen.",
    },

    { kind: "heading", text: "Wer ist Energieeffizienz-Experte?" },
    {
      kind: "paragraph",
      text: "Energieeffizienz-Experten sind in der **Energie-Effizienz-Experten-Liste für die Förderprogramme des Bundes** geführt — auf energie-effizienz-experten.de. Voraussetzung sind in der Regel:",
    },
    {
      kind: "list",
      items: [
        "abgeschlossenes Studium in Architektur, Bauingenieurwesen, Maschinenbau oder vergleichbar",
        "einschlägige Berufserfahrung",
        "Weiterbildung zum Energieeffizienz-Experten",
        "regelmäßige Pflicht-Fortbildung",
      ],
    },
  ],

  priceTables: [
    {
      caption: "KfW-Baubegleitung (KfW 261) — feste Honorare",
      columns: [
        { key: "typ", label: "Gebäudetyp" },
        { key: "honorar", label: "Pauschal-Honorar (brutto)", align: "right" },
      ],
      rows: [
        { typ: "Einfamilienhaus", honorar: "3.500 €" },
        { typ: "Zweifamilienhaus", honorar: "4.500 €" },
        { typ: "Mehrfamilienhaus", honorar: "6.500 €" },
        { typ: "Nichtwohngebäude", honorar: "individuell nach Projektumfang" },
      ],
      highlightColumn: "honorar",
      note: "Alle Honorare brutto. Die Baubegleitung selbst ist im Rahmen der BEG-/KfW-261-Programme förderfähig — Förderfähigkeit und aktuellen Satz klären wir im Erstgespräch.",
    },
    {
      caption: "KfW-/BEG-Programme, die wir begleiten",
      columns: [
        { key: "programm", label: "Programm" },
        { key: "inhalt", label: "Was gefördert wird" },
        { key: "art", label: "Förderart" },
      ],
      rows: [
        {
          programm: "BEG-EM (Einzelmaßnahmen, über BAFA)",
          inhalt: "einzelne Sanierungs-Maßnahmen wie Dämmung, Fenster",
          art: "Zuschuss (ohne Kredit)",
        },
        {
          programm: "BEG-WG (Wohngebäude, über KfW)",
          inhalt: "komplette Effizienzhaus-Sanierung",
          art: "Tilgungszuschuss + zinsverbilligter Kredit",
        },
        {
          programm: "KfW 261 (Effizienzhaus-Sanierung)",
          inhalt: "klimafreundliche Sanierung",
          art: "Tilgungszuschuss",
        },
        {
          programm: "KfW 297 (Klimafreundlicher Neubau)",
          inhalt: "EH 40 / klimafreundlich",
          art: "Kredit zu vergünstigtem Zins",
        },
        {
          programm: "KfW 308 (Wohneigentum für Familien)",
          inhalt: "Familien-Förderung Erstwohneigentum",
          art: "Kredit",
        },
      ],
      note: "KfW-Programme ändern sich regelmäßig. Konkrete Förderhöhen und Konditionen prüfen wir vor jeder Beauftragung zum aktuellen Stand.",
    },
  ],

  serviceSplit: {
    heading: "Das übernehmen wir — das macht Ihr Fachbetrieb",
    intro:
      "Wir sichern die Förderung und führen die Nachweise — von der Antragstellung über die Bauleitung bis zum Verwendungsnachweis. Die Anlagen-/Heizungsplanung selbst übernehmen die ausführenden Fachfirmen; wir binden deren Maßnahmen in die Förderung ein und koordinieren die Umsetzung.",
    wirMachen: {
      title: "Das übernehmen wir",
      items: [
        "Antragstellung KfW + BAFA, Einbindung der Förderung für alle Gewerke",
        "Energetischer Nachweis für das Förderprogramm",
        "Koordination und Vergleich der Handwerker-Angebote (Förderfähigkeit im Blick)",
        "Stichproben-Abnahme der Bauteile und Prüfung der Handwerker-Rechnungen",
        "Technischer Projektnachweis (TPN) und Verwendungsnachweis",
        "Begleitung der KfW-Auszahlung",
      ],
    },
    fachbetriebMacht: {
      title: "Das macht Ihr Fachbetrieb",
      items: [
        "Anlagen- und Heizungsplanung",
        "Ausführung der Gewerke (Dämmung, Fenster, Anlagentechnik)",
        "Einbau der Heizungsanlage",
      ],
    },
  },

  trust: {
    eyebrow: "Verantwortlich für die Energieberatung",
    name: "Feith Formazin",
    role: "Energie-Effizienz-Experte · Bauingenieur (M.Sc.)",
    intro:
      "Feith Formazin ist **gelisteter Energie-Effizienz-Experte für die Förderprogramme des Bundes** (Energie-Effizienz-Experten-Liste, KfW **und** BAFA, für Wohn- und Nichtwohngebäude) und damit antragsberechtigt für BAFA-Beratungen und KfW-Förderprogramme. Studium: M.Sc. Bauingenieurwesen, HTWK Leipzig. Als Energieberater ist er seit 2024 tätig.",
    credentials: [
      "Gelisteter Energie-Effizienz-Experte (KfW + BAFA)",
      "Wohn- & Nichtwohngebäude",
      "M.Sc. Bauingenieurwesen, HTWK Leipzig",
      "Energieberatung seit 2024",
    ],
    footnote:
      "BAFA-Beraternummer EB163129. Maßgeblich ist die Listung in der Energie-Effizienz-Experten-Liste des Bundes.",
  },

  trustImage: {
    src: "/images/energie/gebaeudehuelle.jpg",
    alt: "Dämmung der Gebäudehülle im Bereich eines Fensters während einer energetischen Sanierung",
  },

  processSteps: {
    heading: "In 7 Schritten zur geförderten Sanierung",
    intro: "Gesamtdauer typisch 6–18 Monate, je nach Sanierungs-Umfang.",
    steps: [
      {
        title: "Erstgespräch + Bestands-Aufnahme",
        text: "Wir nehmen Ihr Gebäude und Ihr Sanierungsvorhaben auf.",
      },
      {
        title: "Sanierungsplan (iSFP)",
        text: "Ein iSFP — neu erstellt oder Ihr vorhandener — dient als Sanierungs-Plan.",
      },
      {
        title: "KfW-Antrag stellen",
        text: "Antragstellung mit Energieeffizienz-Experten-Bestätigung.",
      },
      {
        title: "Handwerker-Vergleich",
        text: "3 Angebote pro Gewerk, Koordination durch uns.",
      },
      {
        title: "Bauleitung",
        text: "Bauleitung mit Stichproben-Abnahme der Bauteile.",
      },
      {
        title: "Technischer Projektnachweis (TPN)",
        text: "Verbindliches Dokument für die KfW nach Fertigstellung.",
      },
      {
        title: "Verwendungsnachweis + Auszahlung",
        text: "Verwendungsnachweis-Erstellung mit allen Rechnungen; Auszahlung durch die KfW.",
      },
    ],
  },

  cases: {
    heading: "Bestandserfahrung aus unserer Arbeit",
    intro:
      "Der Energieberater ist seit 2024 als solcher tätig — die langjährige Erfahrung mit Sanierungen und Bestand bezieht sich auf das Ingenieurbüro. Wie tief diese Bestandserfahrung reicht, zeigen Projekte aus unserer Arbeit:",
    items: [
      {
        name: "Wohnhaus Mehrow",
        jahr: "2014",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben.",
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
          "Sanierung der Fassade und energetische Sanierung des Dachs, denkmalgeschützt.",
        denkmal: true,
      },
    ],
  },

  faq: [
    {
      q: "Was kostet ein KfW-Energieberater?",
      a: "Bei Formazin & Partner kostet die KfW-Baubegleitung 3.500 € (Einfamilienhaus), 4.500 € (Zweifamilienhaus) und 6.500 € (Mehrfamilienhaus) brutto, bei Nichtwohngebäuden individuell nach Projektumfang. Die Baubegleitung ist im Rahmen der KfW-Förderung (BEG/KfW 261) bezuschussbar — Förderfähigkeit und aktuellen Satz klären wir im Erstgespräch. Wichtig: Die separate, BAFA-geförderte Energieberatung für Wohngebäude (iSFP) ist eine andere Leistung; dort werden 50 % des Honorars gefördert, gedeckelt auf 650 Euro (Ein-/Zweifamilienhaus) bzw. 850 Euro (ab drei Wohneinheiten).",
    },
    {
      q: "Was kostet eine Energieberatung für KfW?",
      a: "Die KfW verlangt für ihre Effizienzhaus-Programme einen Energieeffizienz-Experten als Begleitung — nicht eine separate „Energieberatung“. Diese Baubegleitung kostet bei uns 3.500 € (EFH), 4.500 € (ZFH) bzw. 6.500 € (MFH) brutto (Nichtwohngebäude individuell) und ist im Rahmen der KfW-Förderung bezuschussbar. Eine reine BAFA-Energieberatung (iSFP) ohne KfW-Begleitung ist eine eigene, ebenfalls geförderte Leistung.",
    },
    {
      q: "Wie finde ich einen KfW-Energieberater in Brandenburg?",
      a: "Über die Energieeffizienz-Experten-Liste des Bundes unter energie-effizienz-experten.de. Sie können nach Postleitzahl, Spezialgebiet (Wohngebäude / Nichtwohngebäude / Neubau / Sanierung) und Programm filtern. Achten Sie auf den Eintrag „nicht herstellergebunden“ für eine unabhängige Beratung.",
    },
    {
      q: "Wie hoch ist die KfW-Förderung?",
      a: "Die Förderhöhe hängt vom Programm und vom Vorhaben ab und ändert sich regelmäßig; den aktuellen Stand der Förderquoten klären wir im Erstgespräch. Eine maximale Gesamtförderung von 70 % gilt belegt für die KfW-458-Heizungsförderung (Bausteine: 30 % Grundförderung, 20 % Klimageschwindigkeitsbonus bis 31.12.2028, 5 % Effizienzbonus, 30 % Einkommensbonus — Summe gedeckelt auf 70 %); diese Quote lässt sich nicht pauschal auf eine Effizienzhaus-Sanierung übertragen. Wir rechnen den realistischen Stand für Ihr Projekt vor der Beauftragung durch.",
    },
    {
      q: "Wann brauche ich einen KfW-Energieberater?",
      a: "Sie brauchen einen gelisteten Energieeffizienz-Experten, wenn Sie eine Förderung aus den Effizienzhaus-Programmen BEG-WG, KfW 261, KfW 297 oder KfW 308 beantragen wollen. Für reine BEG-EM-Einzelmaßnahmen über die BAFA (z. B. Dämmung, Fenster) ist keine KfW-Baubegleitung zwingend — die Begleitung verhindert dort aber teure Fehler bei der Umsetzung und sichert die Förderfähigkeit ab.",
    },
    {
      q: "Wie unterscheiden sich KfW- und BAFA-Förderung?",
      a: "Die BAFA fördert Einzelmaßnahmen (Dämmung, Fenster, Hülle, Anlagentechnik) im Programm BEG-EM mit Zuschüssen ohne Kredit; sie fördert außerdem die Energieberatung für Wohngebäude (iSFP). Die KfW fördert Komplett-Sanierungen zum Effizienzhaus-Standard im Programm BEG-WG mit Tilgungszuschuss und zinsverbilligtem Kredit sowie den Heizungstausch (KfW 458). Beide Förderwege lassen sich kombinieren: Bei einer großen Sanierung läuft der Bauteil-Tausch häufig über die BAFA, der Effizienzhaus-Bonus über die KfW.",
    },
  ],

  related: {
    heading: "Verwandte Leistungen im Energie-Cluster",
    intro:
      "Zurück zur Übersicht — oder direkt zu den Leistungen, die mit der KfW-Baubegleitung zusammenspielen.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung — die Übersicht",
        description: "Alle fünf Energie-Leistungen aus einem Büro.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description: "Grundlage für den BEG-EM-iSFP-Bonus.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
        label: "BAFA-/KfW-Förderberatung",
        description: "Antragsstellung, Auszahlung, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/gegnachweis",
        label: "GEG-Nachweis im Bauantrag",
        description: "Wärmeschutz, sommerlicher Wärmeschutz, Lüftungskonzept.",
        kind: "service",
      },
    ],
  },

  cta: {
    heading: "Erstgespräch zur KfW-Förderung anfragen",
    text: "Wir prüfen für Sie in einem Erstgespräch, welche KfW-Förderung für Ihr Projekt realistisch ist und wie hoch der Eigenanteil voraussichtlich wird. Ohne Verpflichtung.",
    buttonLabel: "KfW-Erstgespräch anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "KfW-Baubegleitung",
  areaServed: [
    "Berlin",
    "Brandenburg",
    "Bernau bei Berlin",
    "Eberswalde",
    "Werneuchen",
    "Strausberg",
    "Altlandsberg",
    "Ahrensfelde",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "3500",
    highPrice: "6500",
    offerCount: "3",
  },
};
