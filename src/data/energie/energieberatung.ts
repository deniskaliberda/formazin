import type { EnergiePageContent } from "./types";

/**
 * Pillar-Seite /leistungen/energieberatung.
 *
 * Portiert aus content-rework/01-pillar-energieberatung.md (Stand 2026-07-08,
 * Feith-Daten integriert). Preise, iSFP-Eigenanteile (850/1.050/1.150) und
 * FAQ-Texte sind 1:1 übernommen. Der sichtbare FAQ-Text ist zugleich der
 * FAQPage-Schema-Text (siehe FaqAccordion).
 */
export const energieberatungContent: EnergiePageContent = {
  kind: "service",
  meta: {
    slug: "/leistungen/energieberatung",
    canonical: "/leistungen/energieberatung",
    title: "Energieberatung Berlin & Brandenburg",
    metaDescription:
      "Energieberatung in Berlin und Brandenburg von gelisteten Energie-Effizienz-Experten (EE-Experten-Liste des Bundes). Sanierungsfahrplan (iSFP), KfW-Baubegleitung, Energieausweis, Förderberatung — aus einem Büro.",
    primaryKeyword: "energieberater kosten",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://formazin-partner.de" },
    { name: "Leistungen", item: "https://formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://formazin-partner.de/leistungen/energieberatung",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Energieberatung in Berlin & Brandenburg",
  intro:
    "Von der Analyse über den Sanierungsfahrplan bis zur gesicherten Förderung — aus einem Architektur- und Ingenieurbüro mit gelistetem Energie-Effizienz-Experten für Berlin und Brandenburg.",

  heroImage: {
    src: "/images/energie/hero-energieberatung.jpg",
    alt: "Sanierte Altbau-Fassade eines energetisch modernisierten Wohngebäudes",
  },

  // Leistungs-Zeile im Hero-Bild (LEISTUNGEN-Idiom der Startseite) — die fünf Energie-Leistungen
  heroLinks: [
    {
      label: "Sanierungsfahrplan (iSFP)",
      href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
    },
    {
      label: "KfW-Baubegleitung",
      href: "/leistungen/energieberatung/kfw-baubegleitung",
    },
    {
      label: "Energieausweis",
      href: "/leistungen/energieberatung/energieausweis",
    },
    {
      label: "GEG-Nachweis",
      href: "/leistungen/energieberatung/gegnachweis",
    },
    {
      label: "Förderberatung",
      href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
    },
  ],

  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Energieberatung umfasst die Analyse Ihres Gebäudes, einen individuellen Sanierungsfahrplan (iSFP), die Förderberatung für BAFA- und KfW-Programme sowie die Baubegleitung während der Sanierung. Bei Dr.-Ing. Formazin & Partner in Ahrensfelde liegt der Schwerpunkt auf dem Sichern der Förderung und der gesamten Bauplanung — als Architektur- und Ingenieurbüro mit gelistetem Energie-Effizienz-Experten für Berlin und Brandenburg.",
  },

  introSplit: {
    eyebrow: "Ein Büro, ein Ansprechpartner",
    heading: "Energieberatung als Teil der ganzen Bauplanung",
    body: [
      "Wir sind ein Architektur- und Ingenieurbüro mit Sitz in Ahrensfelde bei Berlin. Energieberatung ist eine unserer fünf Kern-Leistungen — und sie unterscheidet sich von einer Solo-Energieberatung in einem Punkt: Wird aus Ihrer Beratung eine Sanierung, planen, koordinieren und überwachen wir den ganzen Bau.",
      "Sie haben einen Ansprechpartner statt fünf. Unser Schwerpunkt liegt dabei auf dem, was die meisten Bauherren am stärksten beschäftigt: die Förderung zu sichern und sauber gegenüber BAFA und KfW nachzuweisen.",
    ],
    image: {
      src: "/images/energie/planung-beratung.jpg",
      alt: "Schreibtisch mit Bauzeichnungen und Plänen während einer Energieberatung",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  featureGrid: {
    heading: "Unsere fünf Energie-Leistungen",
    intro:
      "Einzeln buchbar oder als durchgängige Begleitung — von der Beratung bis zum Verwendungsnachweis.",
    items: [
      {
        icon: "FileText",
        title: "Sanierungsfahrplan (iSFP)",
        text: "Schritt-für-Schritt-Plan zur energetischen Sanierung Ihres Hauses.",
        price: "1.500 € (EFH) · 1.700 € (ZFH) · 2.000 € (MFH)",
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
      },
      {
        icon: "ClipboardCheck",
        title: "KfW-Baubegleitung",
        text: "Antrag, technischer Nachweis und Verwendungsnachweis während der Sanierung.",
        price: "3.500 € (EFH) · 4.500 € (ZFH) · 6.500 € (MFH)",
        href: "/leistungen/energieberatung/kfw-baubegleitung",
      },
      {
        icon: "Gauge",
        title: "Energieausweis",
        text: "Bedarfs- oder Verbrauchsausweis für Wohn- und Gewerbeimmobilien.",
        price: "Verbrauch 100 € · Bedarf 900–2.300 €",
        href: "/leistungen/energieberatung/energieausweis",
      },
      {
        icon: "FileCheck",
        title: "GEG-Nachweis im Bauantrag",
        text: "Wärmeschutz, sommerlicher Wärmeschutz und Lüftungskonzept als Teil Ihres Bauantrags.",
        price: "900 € (EFH) · 1.100 € (ZFH) · 2.300 € (MFH)",
        href: "/leistungen/energieberatung/gegnachweis",
      },
      {
        icon: "HandCoins",
        title: "BAFA-/KfW-Förderberatung",
        text: "Antragsstellung, Auszahlung und Verwendungsnachweis gegenüber BAFA und KfW.",
        price: "300 € (EFH) · 400 € (ZFH) · 1.000 € (MFH)",
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
      },
    ],
    note: "Nichtwohngebäude: Honorar individuell nach Aufwand. Alle Preise brutto.",
  },

  bodySections: [
    { kind: "heading", text: "Was Energieberatung 2026 wirklich kostet" },
    { kind: "paragraph", text: "Hier die ehrlichen Zahlen — nicht die Werbe-Versionen." },

    { kind: "subheading", text: "Sanierungsfahrplan iSFP" },
    {
      kind: "paragraph",
      text: "Der iSFP wird über das BAFA-Programm „Energieberatung für Wohngebäude“ gefördert: **50 % des förderfähigen Beratungshonorars**, gedeckelt auf **650 € bei Ein- und Zweifamilienhäusern** bzw. **850 € bei Wohngebäuden ab drei Wohneinheiten**. Zusätzlich gibt es einmalig **bis zu 250 € pro Wohnungseigentümergemeinschaft**, wenn der Sanierungsfahrplan in einer Eigentümerversammlung erläutert wird. (Hinweis: Die früher genannten Höchstbeträge von 1.300 / 1.700 / 5.000 € gibt es seit dem 07.08.2024 nicht mehr.)",
    },
    {
      kind: "note",
      tone: "info",
      text: "Rechenbeispiel Einfamilienhaus: Bei einem Beratungshonorar von 1.500 € übernimmt die BAFA 50 % — das wären 750 €, gedeckelt jedoch auf 650 €. Ihr Eigenanteil beträgt damit 850 €. Bei einem Mehrfamilienhaus mit mindestens drei Wohneinheiten liegt der Deckel bei 850 €; wird der iSFP zusätzlich in der Eigentümerversammlung erläutert, kommen einmalig bis zu 250 € BAFA hinzu.",
    },
    {
      kind: "paragraph",
      text: "**Warum sich der iSFP trotzdem lohnt:** Liegt ein iSFP vor, steigt der iSFP-Bonus bei anschließenden BAFA-Einzelmaßnahmen (Gebäudehülle, Anlagentechnik, Heizungsoptimierung) um **5 Prozentpunkte** (von 15 % auf 20 %). Außerdem erhöht sich der förderfähige Höchstbetrag für diese BAFA-Maßnahmen von **30.000 € auf 60.000 € pro Wohneinheit und Jahr**. Wichtig zur Abgrenzung: Dieser iSFP-Bonus gilt für die BAFA-Einzelmaßnahmen — nicht für den staatlichen Heizungstausch-Zuschuss (KfW 458), der eigene Regeln hat.",
    },

    { kind: "subheading", text: "Energieausweis" },
    {
      kind: "list",
      items: [
        "Verbrauchsausweis: 100 € (alle Wohngebäudetypen), Bearbeitung in rund 3 Werktagen",
        "Bedarfsausweis: 900 € (EFH) · 1.100 € (ZFH) · 2.300 € (MFH), Bearbeitung in 5–10 Werktagen",
        "Nichtwohngebäude: Preis individuell",
        "Pflicht bei jedem Verkauf, jeder Vermietung, jedem Neubau",
        "nicht förderfähig",
      ],
    },

    { kind: "subheading", text: "KfW-Baubegleitung (BEG)" },
    {
      kind: "paragraph",
      text: "Bei einer förderfähigen Sanierung übernehmen wir die fachliche Baubegleitung: Antrag, technischer Nachweis und Verwendungsnachweis. Unser Honorar: **3.500 € (Einfamilienhaus) · 4.500 € (Zweifamilienhaus) · 6.500 € (Mehrfamilienhaus)**, bei Nichtwohngebäuden individuell nach Projektumfang. Die KfW-Baubegleitung selbst ist im Rahmen der BEG-Programme förderfähig.",
    },

    { kind: "subheading", text: "Förderberatung" },
    {
      kind: "paragraph",
      text: "Als eigenes Paket — Antragsstellung, Auszahlung und Verwendungsnachweis gegenüber BAFA und KfW: **300 € (EFH) · 400 € (ZFH) · 1.000 € (MFH)**, Nichtwohngebäude individuell. Im Rahmen einer Baubegleitung ist die Förderberatung bereits enthalten.",
    },

  ],

  processSteps: {
    heading: "Wie eine Energieberatung bei uns abläuft",
    steps: [
      {
        title: "Erstgespräch (kostenlos, 20 min)",
        text: "Telefonisch oder per Video. Wir klären Ihr Anliegen, schätzen Aufwand und Förderung ab.",
      },
      {
        title: "Vor-Ort-Termin (1–2 h)",
        text: "Aufmaß, Bauteile, Anlagentechnik, Foto-Dokumentation. Sie erhalten am gleichen Tag eine erste Einschätzung.",
      },
      {
        title: "iSFP-Erstellung (2–4 Wochen)",
        text: "Wir analysieren, rechnen, dokumentieren. Sie bekommen einen Bericht im offiziellen BAFA-iSFP-Format.",
      },
      {
        title: "Beratungsgespräch (1 h)",
        text: "Wir gehen den iSFP gemeinsam durch und priorisieren die Maßnahmen.",
      },
      {
        title: "Optional: Sanierungsbegleitung",
        text: "Wenn Sie sanieren, übernehmen wir Antragsstellung, Bauleitung und KfW-Verwendungsnachweis.",
      },
    ],
  },

  priceTables: [
    {
      caption: "Sanierungsfahrplan iSFP – Honorar, BAFA-Zuschuss und Ihr Eigenanteil",
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
      ],
      highlightColumn: "eigenanteil",
      note: "Alle Preise brutto. Der BAFA-Antrag muss vor Beauftragung gestellt werden.",
    },
  ],

  serviceSplit: {
    heading: "Das übernehmen wir — das macht Ihr Fachbetrieb",
    intro:
      "Wir planen Ihre Heizungsanlage nicht selbst — keine Heizlastberechnung, keine Technologie-Empfehlung. Was wir machen: Wir binden die Förderung für Ihre neue Heizung ein und sichern sie ab. In der Praxis kommen Heizungsunternehmen zu uns, damit wir die Förderung übernehmen und nachweisen.",
    wirMachen: {
      title: "Das übernehmen wir",
      items: [
        "Sanierungsfahrplan (iSFP) und Förderberatung",
        "Förderung sichern und gegenüber BAFA und KfW nachweisen",
        "Energieausweis (Bedarf und Verbrauch)",
        "GEG-Nachweis im Bauantrag (Wärmeschutz, sommerlicher Wärmeschutz, Lüftungskonzept)",
        "KfW-Baubegleitung mit Verwendungsnachweis",
        "Komplette Sanierungsplanung, Bauantrag und Bauüberwachung",
      ],
    },
    fachbetriebMacht: {
      title: "Das macht Ihr Fachbetrieb",
      items: [
        "Heizlastberechnung",
        "Empfehlung und Auswahl der Heizungstechnologie",
        "Einbau der Heizungsanlage",
      ],
    },
  },

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
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

  cases: {
    heading: "Bauen im Bestand — unsere Kernkompetenz",
    intro:
      "Dr.-Ing. Formazin & Partner sind seit den 1990er Jahren als Architektur- und Ingenieurbüro tätig. Diese über 30 Jahre Erfahrung beziehen sich auf das Büro und das Bauen im Bestand — Schulen, Mehrfamilienhäuser, Denkmalgeschütztes. Wir kommen aus Ahrensfelde und arbeiten regelmäßig in Berlin, Bernau, Eberswalde, Werneuchen, Strausberg und Altlandsberg — im Umkreis von rund 50 km.",
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
      q: "Was macht ein Energieberater?",
      a: "Ein Energieberater untersucht Ihr Gebäude, identifiziert Schwachstellen an Gebäudehülle und Anlagentechnik, berechnet Einsparpotenziale und erstellt einen Sanierungsfahrplan. Er übernimmt die Förderberatung, stellt Anträge bei BAFA und KfW, dokumentiert die Umsetzung und weist die Förderung gegenüber dem Staat nach. Er berät neutral — nicht wie ein Heizungsverkäufer.",
    },
    {
      q: "Was kostet ein Energieberater 2026?",
      a: "Bei uns kostet ein Sanierungsfahrplan (iSFP) 1.500 € für ein Einfamilienhaus, 1.700 € für ein Zweifamilienhaus und 2.000 € ab drei Wohneinheiten (brutto). Die BAFA fördert 50 % des Beratungshonorars, gedeckelt auf 650 € bei Ein- und Zweifamilienhäusern bzw. 850 € ab drei Wohneinheiten. Ihr Eigenanteil beim Einfamilienhaus liegt damit bei 850 €.",
    },
    {
      q: "Wer fördert die Energieberatung 2026?",
      a: "Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) fördert die Energieberatung für Wohngebäude mit 50 % des förderfähigen Beratungshonorars. Der Zuschuss ist gedeckelt auf 650 € bei Ein- und Zweifamilienhäusern und 850 € bei Wohngebäuden ab drei Wohneinheiten. Der Antrag muss vor Beauftragung gestellt werden. (Die Absenkung von 80 % auf 50 % erfolgte zum 07.08.2024.)",
    },
    {
      q: "Wie finde ich einen unabhängigen Energieberater?",
      a: "Schauen Sie in die Energie-Effizienz-Experten-Liste des Bundes auf energie-effizienz-experten.de. Dort sind alle für BAFA- und KfW-Programme gelisteten Berater geführt — mit Region, Spezialgebiet und Kontakt. Achten Sie auf den Hinweis „nicht herstellergebunden“. Bei einem unabhängigen Berater verkauft Ihnen niemand am Ende eine bestimmte Heizung.",
    },
    {
      q: "Brauche ich gesetzlich eine Energieberatung?",
      a: "Nicht jede Energieberatung ist Pflicht. Verpflichtend kann sie in einzelnen Fällen sein — etwa als Voraussetzung für bestimmte KfW-Förderprogramme. Ein iSFP lohnt sich aber praktisch immer: Er hebt den iSFP-Bonus bei späteren BAFA-Einzelmaßnahmen um 5 Prozentpunkte und verdoppelt deren förderfähigen Höchstbetrag von 30.000 € auf 60.000 € pro Wohneinheit und Jahr.",
    },
    {
      q: "Plant Formazin & Partner auch meine Heizung?",
      a: "Nein. Wir führen keine Heizungsplanung durch — keine Heizlastberechnung, keine Technologie-Empfehlung. Unser Beitrag ist die Förderung: Wir binden den staatlichen Zuschuss für Ihre neue Heizung ein und weisen ihn nach. Die Anlage selbst plant und baut ein Fachbetrieb, der dafür häufig mit uns zusammenarbeitet.",
    },
    {
      q: "Was ist mit dem Heizungsgesetz / der 65-Prozent-Regel?",
      a: "Das Gebäudeenergiegesetz (GEG) und die Regeln zum Heizungseinbau werden 2026 reformiert; die Rechtslage ist in Bewegung. Wir beraten Sie deshalb immer zum jeweils aktuellen Stand und sorgen dafür, dass Ihre Maßnahme zu den dann geltenden Anforderungen passt und die mögliche Förderung gesichert ist.",
    },
    {
      q: "Wie läuft eine Energieberatung bei Formazin & Partner ab?",
      a: "Erstgespräch kostenlos, dann Vor-Ort-Termin mit Aufmaß und Foto-Dokumentation, danach iSFP-Erstellung in zwei bis vier Wochen, abschließendes Beratungsgespräch zur Priorisierung. Auf Wunsch übernehmen wir anschließend die komplette Sanierungs-Planung, den Bauantrag und die KfW-Baubegleitung mit Verwendungsnachweis.",
    },
  ],

  related: {
    heading: "Die fünf Energie-Leistungen im Detail",
    intro:
      "Vertiefen Sie einzelne Leistungen — oder lernen Sie das Büro und unsere Projekte kennen.",
    links: [
      {
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description: "Schritt-für-Schritt-Plan mit BAFA-Förderung.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/kfw-baubegleitung",
        label: "KfW-Baubegleitung",
        description: "Antrag, technischer Nachweis, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/energieausweis",
        label: "Energieausweis",
        description: "Bedarfs- oder Verbrauchsausweis für Wohn- und Gewerbeimmobilien.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/gegnachweis",
        label: "GEG-Nachweis im Bauantrag",
        description: "Wärmeschutz, sommerlicher Wärmeschutz, Lüftungskonzept.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
        label: "BAFA-/KfW-Förderberatung",
        description: "Antragsstellung, Auszahlung, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/ueber-uns",
        label: "Über das Büro",
        description: "Dr.-Ing. Formazin & Partner — Architektur und Ingenieurwesen aus Ahrensfelde.",
      },
    ],
  },

  cta: {
    heading: "Kostenloses Erstgespräch anfragen",
    text: "Wir sind ein kleines Büro und können nicht zwanzig Beratungen parallel laufen lassen. Eine Anfrage von heute bedeutet typischerweise einen Vor-Ort-Termin in 7 bis 14 Tagen.",
    buttonLabel: "Förderung & Nachweise anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
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
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "5",
  },
};
