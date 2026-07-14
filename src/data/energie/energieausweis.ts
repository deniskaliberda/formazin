import type { EnergiePageContent } from "./types";

/**
 * Spoke-Seite /leistungen/energieberatung/energieausweis.
 *
 * Portiert aus content-rework/02-energieausweis.md (Stand 2026-07-08,
 * Feith-Daten integriert). Preise (Verbrauchsausweis 100 € flat, Bedarfsausweis
 * 900 / 1.100 / 2.300 €), Bearbeitungszeiten (~3 bzw. 5–10 Werktage), Bußgeld
 * („bis 10.000 €", § 108 GEG), DIBt-Registrierung und FAQ-Texte sind 1:1
 * übernommen. Der sichtbare FAQ-Text ist zugleich der FAQPage-Schema-Text
 * (siehe FaqAccordion).
 *
 * BEWUSST WEGGELASSEN / NEUTRALISIERT (Marker aus dem MD — nie sichtbar rendern):
 * - "[bitte prüfen: 50 km ab Ahrensfelde — Radius/Standort gegen
 *   business-context.json]": der komplette Anfahrt-Anspruch („Anfahrt innerhalb
 *   … enthalten" inkl. „0,55 €/km bei längerer Anfahrt") ist weggelassen, bis
 *   Radius/Standort geprüft sind.
 * - "[PLATZHALTER: Foto-Freigabe Aussteller — kommt laut Feith per Mail]":
 *   durch Denis-Vorgabe ersetzt — expertPhoto (/images/feith-funnel.jpg) wird
 *   immer gesetzt.
 * - /wissen/-Links aus dem MD (bedarfs-oder-verbrauchsausweis,
 *   energieausweis-vermietung-verkauf, energieausweis-denkmal-und-gewerbe):
 *   der Bereich existiert erst in Phase 4 — Links samt Verweis-Sätzen entfernt.
 * - Cases: laut MD auf dieser Seite thematisch nicht passend — nicht eingesetzt.
 */
export const energieausweisContent: EnergiePageContent = {
  kind: "service",
  meta: {
    slug: "/leistungen/energieberatung/energieausweis",
    canonical: "/leistungen/energieberatung/energieausweis",
    title: "Energieausweis Berlin & Brandenburg — ab 100 € erstellen",
    metaDescription:
      "Energieausweis (Bedarfs- oder Verbrauchsausweis) für Wohn- und Gewerbeimmobilien in Berlin und Brandenburg. Verbrauchsausweis in ca. 3 Werktagen, Bedarfsausweis in 5–10 Werktagen. Pflicht bei Verkauf und Vermietung.",
    primaryKeyword: "energieausweis haus kosten",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Energieausweis",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/energieausweis",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Energieausweis erstellen lassen — Berlin & Brandenburg",
  intro:
    "Bedarfs- oder Verbrauchsausweis für Wohn- und Gewerbeimmobilien — mit Vor-Ort-Termin in Berlin und Brandenburg. Verbrauchsausweis in rund 3 Werktagen, Bedarfsausweis in 5 bis 10 Werktagen.",

  heroImage: {
    src: "/images/energie/svc-energieausweis.jpg",
    alt: "Dokument mit Energieeffizienz-Farbskala neben Hausschlüsseln auf einem Schreibtisch",
  },

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Ein Energieausweis für Wohngebäude kostet bei Dr.-Ing. Formazin & Partner 100 Euro als Verbrauchsausweis und 900 bis 2.300 Euro als Bedarfsausweis — je nach Gebäudetyp. Er ist Pflicht bei Verkauf, Vermietung oder Neubau und 10 Jahre gültig. Den Verbrauchsausweis stellen wir in rund 3 Werktagen aus, den Bedarfsausweis in 5 bis 10 Werktagen — mit Vor-Ort-Termin in Berlin und Brandenburg.",
  },

  introSplit: {
    eyebrow: "Energieausweis vom EE-Experten",
    heading: "Fester Preis, Vor-Ort-Termin, amtliche Registriernummer",
    body: [
      "Energieausweise stellt bei Dr.-Ing. Formazin & Partner **Feith Formazin** aus. Er ist gelisteter Energie-Effizienz-Experte für die Förderprogramme des Bundes und damit ausstellungsberechtigt für Energieausweise von Wohn- und Nichtwohngebäuden.",
      "Sie bekommen feste Bruttopreise für Berlin und Brandenburg, inklusive Vor-Ort-Termin und Foto-Dokumentation. Den fertigen Ausweis erhalten Sie als PDF und ausgedruckt — mit Aussteller-Stempel, amtlicher Registriernummer (vergeben über das Deutsche Institut für Bautechnik, DIBt) und 10-Jahres-Gültigkeit.",
    ],
    image: {
      src: "/images/energie/planung-beratung.jpg",
      alt: "Schreibtisch mit Bauzeichnungen und Plänen bei der Vorbereitung eines Energieausweises",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  featureGrid: {
    heading: "Zwei Ausweis-Varianten",
    intro:
      "Welche Variante für Ihr Gebäude Pflicht ist, prüfen wir direkt bei Ihrer Anfrage.",
    items: [
      {
        icon: "Gauge",
        title: "Verbrauchsausweis",
        text: "Basiert auf den tatsächlichen Heiz- und Energiekosten der letzten drei Jahre — günstiger, aber stark vom Nutzerverhalten abhängig.",
        price: "100 € (alle Wohngebäudetypen) · rund 3 Werktage",
      },
      {
        icon: "FileCheck",
        title: "Bedarfsausweis",
        text: "Basiert auf einer Berechnung der Gebäudehülle und Anlagentechnik — objektiv und nutzerunabhängig.",
        price: "900 € (EFH) · 1.100 € (ZFH) · 2.300 € (MFH) · 5–10 Werktage",
      },
    ],
    note: "Nichtwohngebäude / Gewerbe: Preis individuell. Alle Preise brutto — Energieausweise sind nicht förderfähig.",
  },

  bodySections: [
    { kind: "heading", text: "Wann Sie einen Energieausweis brauchen" },
    {
      kind: "paragraph",
      text: "Drei klare Fälle machen den Energieausweis verpflichtend:",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Verkauf** einer Immobilie — Ausweis muss spätestens bei der Besichtigung vorgelegt werden.",
        "**Vermietung oder Neuvermietung** — Ausweis muss potenziellen Mietern unaufgefordert gezeigt werden.",
        "**Neubau** — Ausweis ist Teil des Bauantrags und muss bei Fertigstellung erstellt sein.",
      ],
    },
    {
      kind: "paragraph",
      text: "Ohne gültigen Energieausweis drohen Bußgelder bis 10.000 Euro nach § 108 GEG. In der Praxis wird das selten ausgereizt, aber bei Maklern und Notaren wird der Ausweis konsequent eingefordert — kein Notar beurkundet ohne.",
    },

    {
      kind: "heading",
      text: "Bedarfs- oder Verbrauchsausweis — was ist der Unterschied?",
    },
    {
      kind: "paragraph",
      text: "Der Bedarfsausweis basiert auf einer Berechnung der Gebäudehülle und Anlagentechnik — er ist objektiv und nutzerunabhängig. Der Verbrauchsausweis basiert auf den tatsächlichen Heiz- und Energiekosten der letzten drei Jahre — er ist günstiger, aber stark vom Nutzerverhalten abhängig. Welcher Pflicht ist, entscheidet das Gebäude und sein Baujahr.",
    },
    {
      kind: "paragraph",
      text: "**Faustregel:** Wenn Ihr Haus einen Bauantrag vor dem 1.11.1977 hat, weniger als fünf Wohnungen besitzt **und** seither **nicht** auf das energetische Niveau der Wärmeschutzverordnung 1977 nachgerüstet wurde, brauchen Sie zwingend einen Bedarfsausweis. Wurde das Gebäude bereits bei Fertigstellung nach der WärmeschutzV 1977 errichtet oder nachträglich darauf gebracht, haben Sie die Wahl. In allen anderen Fällen können Sie ebenfalls wählen — der Bedarfsausweis ist genauer und wirkt seriöser, der Verbrauchsausweis ist günstiger.",
    },

    { kind: "heading", text: "Wie lange ist ein Energieausweis gültig?" },
    {
      kind: "paragraph",
      text: "Ein Energieausweis ist **10 Jahre gültig** (§ 79 Abs. 3 GEG). Wenn Sie das Gebäude in dieser Zeit verkaufen oder vermieten, brauchen Sie keinen neuen. Bei umfangreichen Änderungen (z.B. Heizungstausch oder Wärmedämmung) und einer Neuberechnung **muss** der Ausweis aktualisiert werden — der alte verliert dann seine Gültigkeit.",
    },

    {
      kind: "heading",
      text: "Ausnahmen — wer braucht keinen Energieausweis?",
    },
    {
      kind: "paragraph",
      text: "Nicht alle Gebäude fallen unter die Ausweis-Pflicht. Die Ausnahmen vom Anwendungsbereich des GEG stehen in **§ 2 GEG** (nicht, wie oft behauptet, in § 80 — § 80 regelt die Ausstellung und Verwendung von Energieausweisen). Typische Sonderfälle:",
    },
    {
      kind: "list",
      items: [
        "**Denkmalgeschützte Gebäude** — in der Regel befreit, wenn eine wirtschaftlich vertretbare energetische Anforderung nicht erfüllt werden kann; kein pauschaler Automatismus, der Einzelfall ist zu prüfen.",
        "**Kleine Gebäude bis 50 m² Nutzfläche** — **keine** pauschale Befreiung. Für sie gelten beim Neubau vereinfachte Anforderungen; eine echte Ausweis-Befreiung greift nur bei Gebäuden, die unter einen konkreten § 2-Ausnahmetatbestand fallen.",
        "**Gebäude ohne nennenswerte Heiz-/Kühltechnik** sowie **kurzlebige Raumzellen / Gebäude mit begrenzter Nutzungsdauer** — unter den Voraussetzungen des § 2 GEG ausgenommen.",
        "**Betriebsgebäude wie Lager- oder Werkstatthallen** — nicht pauschal befreit; eine Ausnahme greift nur bei konkreten § 2-Tatbeständen (z.B. offen gehalten, planmäßig auf weniger als 12 °C beheizt oder weniger als vier Monate im Jahr beheizt).",
      ],
    },

    { kind: "heading", text: "Was ein Energieausweis bei Formazin kostet" },
    {
      kind: "paragraph",
      text: "Feste Bruttopreise für Berlin und Brandenburg, inklusive Vor-Ort-Termin und Foto-Dokumentation — im Überblick:",
    },
    {
      kind: "note",
      tone: "warn",
      text: "**Wichtig:** Energieausweise sind **nicht förderfähig**. Anders als der Sanierungsfahrplan (iSFP) gibt es vom Staat keinen Zuschuss. Wer einen kostenlosen Energieausweis im Internet sieht, sollte vorsichtig sein — typischerweise ist das ein Lockangebot mit nachgelagerten Sanierungsverkäufen.",
    },
  ],

  priceTables: [
    {
      caption: "Bedarfs- oder Verbrauchsausweis — der Vergleich",
      columns: [
        { key: "variante", label: "Variante" },
        { key: "basis", label: "Basis" },
        { key: "kosten", label: "Kosten 2026", align: "right" },
        { key: "genauigkeit", label: "Genauigkeit" },
        { key: "pflicht", label: "Pflicht für" },
      ],
      rows: [
        {
          variante: "Bedarfsausweis",
          basis: "Bauteilberechnung nach DIN",
          kosten: "900 € (EFH) · 1.100 € (ZFH) · 2.300 € (MFH)",
          genauigkeit: "hoch, objektiv",
          pflicht:
            "Wohngebäude < 5 WE, Bauantrag vor 1.11.1977, nicht auf 1977-Niveau nachgerüstet",
        },
        {
          variante: "Verbrauchsausweis",
          basis: "Verbrauchsdaten 3 Jahre",
          kosten: "100 € (alle Wohngebäudetypen)",
          genauigkeit: "niedrig, nutzerabhängig",
          pflicht: "alle anderen Fälle",
        },
      ],
    },
    {
      caption: "Energieausweis-Kosten nach Gebäudetyp",
      columns: [
        { key: "typ", label: "Gebäudetyp" },
        { key: "bedarf", label: "Bedarfsausweis", align: "right" },
        { key: "verbrauch", label: "Verbrauchsausweis", align: "right" },
      ],
      rows: [
        { typ: "Einfamilienhaus", bedarf: "900 €", verbrauch: "100 €" },
        { typ: "Zweifamilienhaus", bedarf: "1.100 €", verbrauch: "100 €" },
        { typ: "Mehrfamilienhaus", bedarf: "2.300 €", verbrauch: "100 €" },
        {
          typ: "Nichtwohngebäude / Gewerbe",
          bedarf: "individuell",
          verbrauch: "individuell",
        },
      ],
      note: "Alle Preise brutto. Der Verbrauchsausweis kostet einheitlich 100 € für alle Wohngebäudetypen.",
    },
  ],

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
    heading: "In 5 Schritten zum Energieausweis",
    steps: [
      {
        title: "Anfrage",
        text: "Per Telefon oder Formular. Wir prüfen, welche Variante für Ihr Gebäude Pflicht ist.",
      },
      {
        title: "Datensammlung",
        text: "Sie schicken uns vorhandene Pläne, Heizkostenabrechnungen der letzten 3 Jahre und Fotos.",
      },
      {
        title: "Vor-Ort-Termin (45–90 min)",
        text: "Wir nehmen Maße, dokumentieren Bauteile und Anlagentechnik.",
      },
      {
        title: "Berechnung und Erstellung",
        text: "Verbrauchsausweis in rund 3 Werktagen, Bedarfsausweis in 5–10 Werktagen nach dem Vor-Ort-Termin. Wir rechnen mit zugelassener Software und stellen den Ausweis aus.",
      },
      {
        title: "Übergabe",
        text: "Als PDF und ausgedruckt. Mit Aussteller-Stempel, amtlicher Registriernummer (vergeben über das Deutsche Institut für Bautechnik, DIBt) und 10-Jahres-Gültigkeit.",
      },
    ],
  },

  faq: [
    {
      q: "Was ist ein Energieausweis?",
      a: "Ein Energieausweis ist ein offizielles Dokument, das den energetischen Zustand eines Gebäudes bewertet — vergleichbar mit dem Effizienz-Label auf Haushaltsgeräten. Er enthält Energiebedarf oder -verbrauch, eine Effizienz-Klasse von A+ bis H und Modernisierungsempfehlungen. Ausgestellt wird er nach Vorgaben des Gebäudeenergiegesetzes (GEG) durch ausstellungsberechtigte Personen.",
    },
    {
      q: "Was kostet ein Energieausweis fürs Haus?",
      a: "Ein Verbrauchsausweis kostet bei uns 100 Euro für alle Wohngebäudetypen. Ein Bedarfsausweis kostet 900 Euro fürs Einfamilienhaus, 1.100 Euro fürs Zweifamilienhaus und 2.300 Euro fürs Mehrfamilienhaus; Nichtwohngebäude kalkulieren wir individuell. Anbieter im Internet werben oft mit 25-Euro-Ausweisen — das sind Verbrauchsausweise ohne Vor-Ort-Termin und mit fragwürdiger Genauigkeit. Bei Verkauf besser einen seriösen Ausweis nehmen.",
    },
    {
      q: "Wie lange ist ein Energieausweis gültig?",
      a: "Ein Energieausweis ist 10 Jahre ab Ausstellungsdatum gültig (§ 79 Abs. 3 GEG). Bei umfangreichen Änderungen am Gebäude — etwa Heizungstausch oder Dämmung — mit anschließender Neuberechnung verliert er seine Gültigkeit, weil sich die zugrundeliegenden Daten ändern. Sie brauchen dann einen neuen Ausweis. Bei reinem Bewohnen oder kleineren Reparaturen läuft der Ausweis die vollen 10 Jahre.",
    },
    {
      q: "Wer braucht einen Energieausweis?",
      a: "Sie brauchen einen Energieausweis, wenn Sie Ihre Immobilie verkaufen, vermieten oder neuvermieten. Auch beim Neubau wird er Pflicht. Ausgenommen sind bestimmte Sonderfälle nach § 2 GEG — etwa denkmalgeschützte Gebäude (im Einzelfall) oder Gebäude ohne nennenswerte Heiz- und Kühltechnik. Kleine Gebäude bis 50 m² sind nicht pauschal befreit. In allen anderen Fällen drohen ohne Ausweis Bußgelder bis 10.000 Euro.",
    },
    {
      q: "Wie bekomme ich einen Energieausweis?",
      a: "Sie beauftragen eine ausstellungsberechtigte Person — typischerweise einen Energieberater, Architekten oder Bauingenieur mit der entsprechenden Qualifikation. Sie liefern Pläne, Heizkostenabrechnungen und Daten zur Heizungsanlage. Nach einem Vor-Ort-Termin und der Berechnung erhalten Sie den fertigen Ausweis als PDF und gedruckt. Bei Formazin: Verbrauchsausweis in rund 3 Werktagen, Bedarfsausweis in 5–10 Werktagen ab Beauftragung.",
    },
    {
      q: "Wann brauche ich einen Bedarfs- und wann einen Verbrauchsausweis?",
      a: "Bei Wohngebäuden mit weniger als 5 Wohneinheiten und einem Bauantrag vor dem 1.11.1977 ist ein Bedarfsausweis Pflicht — es sei denn, das Gebäude entsprach bei Fertigstellung der Wärmeschutzverordnung 1977 oder wurde nachträglich darauf nachgerüstet; dann haben Sie die Wahl. In allen anderen Fällen können Sie zwischen Bedarfs- und Verbrauchsausweis wählen. Der Bedarfsausweis ist genauer, der Verbrauchsausweis günstiger. Bei Verkauf empfehlen wir den Bedarfsausweis — er wirkt seriöser.",
    },
  ],

  related: {
    heading: "Weiter im Energie-Cluster",
    intro:
      "Zurück zur Übersicht — oder direkt zur passenden Vertiefung.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung — die Übersicht",
        description:
          "Alle fünf Energie-Leistungen, Preise und Förderung im Überblick.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description:
          "Wenn Sie ohnehin sanieren — Schritt-für-Schritt-Plan mit BAFA-Förderung.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/gegnachweis",
        label: "GEG-Nachweis im Bauantrag",
        description:
          "Wärmeschutz, sommerlicher Wärmeschutz und Lüftungskonzept für den Neubau.",
        kind: "service",
      },
    ],
  },

  cta: {
    heading: "Energieausweis anfragen",
    text: "Wir erstellen Ausweise für Wohngebäude, Mehrfamilienhäuser und Gewerbeimmobilien. Bei Sondergebäuden (Denkmal, Industrie, Misch-Nutzung) klären wir vorab, was möglich ist.",
    buttonLabel: "Energieausweis anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieausweis",
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
    highPrice: "2300",
    offerCount: "4",
  },
};
