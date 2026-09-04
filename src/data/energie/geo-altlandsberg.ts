import type { EnergiePageContent } from "./types";
import { energieTeam } from "./team";

/**
 * Geo-Seite /leistungen/energieberatung/altlandsberg (Umland-Ausbau,
 * Denis-Freigabe 27.08.2026 — "ja mehr").
 *
 * Fakten aus belegten Quellen:
 * - MFH Strausberger Straße (Altlandsberg) 1:1 aus src/data/projekte.ts:
 *   Kernsanierung 2005–2007, LP 1-9, 978 m² NUF, Rekonstruktion des
 *   historischen Turms; energetische Sanierung der Gebäudehülle laut
 *   Feith-freigegebenem Case (FEITH-FREIGABE-2026-07-08).
 * - Anfahrt 18 min + Themen "EFH, Reihenhäuser, kleinere MFH" 1:1 aus der
 *   Orte-Tabelle der Strausberg-Seite (konsistente Werte).
 * - Festpreise + KfW-458 (BEG-Stand 21.07.2026) aus dem verifizierten Kanon.
 * - KEINE Einwohnerzahlen, keine Ortsteil-Aufzählung (unverifiziert),
 *   lokale Förderprogramme nur konditional.
 */
export const geoAltlandsbergContent: EnergiePageContent = {
  kind: "geo",
  meta: {
    slug: "/leistungen/energieberatung/altlandsberg",
    canonical: "/leistungen/energieberatung/altlandsberg",
    ogImage: "/images/energie/geo-strasse-2-v2.jpg",
    title: "Energieberatung Altlandsberg",
    metaDescription:
      "Energieberatung in Altlandsberg: iSFP, Energieausweis, KfW-Baubegleitung und Förderberatung — mit sanierter Referenz direkt in der Stadt. Anfahrt im Honorar.",
    primaryKeyword: "energieberater altlandsberg",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Altlandsberg",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/altlandsberg",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Energieberatung in Altlandsberg",
  intro:
    "Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis und Förderberatung für Altlandsberg und Umgebung — aus einem Architektur- und Ingenieurbüro in Ahrensfelde, rund 18 Autominuten entfernt. Die Anfahrt ist im Honorar enthalten.",
  heroTrustLine:
    "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg und angrenzenden Regionen.",

  heroImage: {
    src: "/images/energie/geo-strasse-2-v2.jpg",
    alt: "Berliner Gründerzeitstraße mit hellen sanierten Fassaden",
  },

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

  // Redesign 04.09.2026: Band „Ihre Antworten" (Infografiken, Konzept §3)
  vierAntworten: {
    heading: "Nah dran: Energieberatung in Altlandsberg",
    items: [
      {
        name: "region",
        highlight: "Altlandsberg",
        caption: "Vor-Ort-Termin in Altlandsberg in 7–14 Tagen, ein Ansprechpartner bis zum Verwendungsnachweis.",
      },
      {
        name: "zeitstrahl",
        caption: "Typischer Ablauf vom Erstgespräch bis zum fertigen Sanierungsfahrplan.",
      },
    ],
  },
  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Wir bieten Energieberatung in Altlandsberg und im Umland: individueller Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und Förderberatung. Unser Büro liegt in Ahrensfelde, rund 18 Autominuten entfernt — die Anfahrt ist im Honorar enthalten. In Altlandsberg haben wir selbst saniert: ein Mehrfamilienhaus an der Strausberger Straße, mitsamt Rekonstruktion des historischen Turms. Heizungen planen wir nicht — wir sichern Ihnen die passende Förderung und begleiten den Antrag.",
  },

  team: energieTeam,

  introSplit: {
    eyebrow: "Vor Ort in Märkisch-Oderland",
    heading: "Altlandsberg kennen wir nicht aus dem Kartendienst",
    body: [
      "Zwischen unserem Büro in Ahrensfelde und Altlandsberg liegen 18 Autominuten — und ein Projekt, auf das wir stolz sind: die Kernsanierung des Mehrfamilienhauses an der Strausberger Straße mit energetischer Sanierung der Gebäudehülle. Typische Aufgaben in Altlandsberg und Umgebung:",
    ],
    bullets: [
      "Einfamilien- und Reihenhäuser — viele Baujahre, bei denen Heizungstausch und Hüllen-Sanierung jetzt anstehen",
      "Kleinere Mehrfamilienhäuser im Bestand — hier lohnt der iSFP je Objekt besonders",
      "Historischer Altbestand im Stadtkern — Sanierung in ursprünglicher Formensprache haben wir an der Strausberger Straße selbst umgesetzt",
    ],
    image: {
      src: "/images/energie/planung-beratung-v2.jpg",
      alt: "Heller Schreibtisch mit Grundriss, Unterlagenmappe und Hausschlüsseln bei der Energieberatung",
    },
    imageSide: "right",
    imageAspect: "portrait",
    cta: {
      label: "Zur Übersicht Energieberatung",
      href: "/leistungen/energieberatung",
    },
  },

  featureGrid: {
    heading: "Was wir in Altlandsberg leisten",
    intro:
      "Unser Schwerpunkt ist die Förder- und Nachweisseite der energetischen Sanierung — nicht die Anlagenplanung. Termine in Altlandsberg bündeln wir gern, sodass mehrere Eigentümer am gleichen Tag besucht werden.",
    items: [
      {
        icon: "FileText",
        title: "Sanierungsfahrplan (iSFP)",
        text: "Die geförderte Energieberatung als Fahrplan für Ihr Gebäude.",
        price: "1.500 € (EFH) · 1.700 € (ZFH) · 2.000 € (MFH)",
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
      },
      {
        icon: "Gauge",
        title: "Energieausweis",
        text: "Bedarfs- oder Verbrauchsausweis für Verkauf, Vermietung oder Eigenbedarf.",
        price: "Verbrauch 100 € · Bedarf 900–2.300 €",
        href: "/leistungen/energieberatung/energieausweis",
      },
      {
        icon: "ClipboardCheck",
        title: "KfW-Baubegleitung",
        text: "Als gelisteter Energie-Effizienz-Experte für KfW-geförderte Vorhaben.",
        price: "3.500 € (EFH) · 4.500 € (ZFH) · 6.500 € (MFH)",
        href: "/leistungen/energieberatung/kfw-baubegleitung",
      },
      {
        icon: "FileCheck",
        title: "GEG-Nachweis im Bauantrag",
        text: "Der energetische Nachweis als Teil der Bauantrags-Unterlagen.",
        price: "900 € (EFH) · 1.100 € (ZFH) · 2.300 € (MFH)",
        href: "/leistungen/energieberatung/gegnachweis",
      },
      {
        icon: "HandCoins",
        title: "Förderberatung",
        text: "BAFA- und KfW-Förderung beantragen, kombinieren und absichern.",
        price: "300 € (EFH) · 400 € (ZFH) · 1.000 € (MFH)",
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
      },
    ],
    note: "Heizungen legen wir nicht aus und empfehlen kein konkretes Fabrikat. In der Praxis kommen Heizungsbauer zu uns, damit wir die Förderung übernehmen — die Anlage selbst planen und installieren sie.",
  },

  bodySections: [
    { kind: "heading", text: "Förderung für Ihren Heizungstausch — kurz eingeordnet" },
    {
      kind: "paragraph",
      text: "Beim Heizungstausch (KfW 458) sind **30 % Grundförderung** der Ausgangspunkt (Stand: 21.07.2026). Selbstnutzende Eigentümer erhalten bis 31.01.2027 zusätzlich **16 % Klimageschwindigkeitsbonus**; je nach Haushaltseinkommen kommt ein gestaffelter Einkommensbonus hinzu — in bestimmten Fällen sind **bis zu 80 % Zuschuss** erreichbar. Die förderfähigen Kosten sind beim Einfamilienhaus auf **28.000 €** für die erste Wohneinheit gedeckelt. Der frühere Effizienzbonus und der Emissionsminderungszuschlag sind entfallen. Die vollständige Rechnung mit allen Bausteinen finden Sie auf unserer Seite zur BAFA-/KfW-Förderberatung (unten verlinkt).",
    },
    {
      kind: "diagram",
      name: "foerder-schienen",
      caption: "Heizungstausch (KfW 458) und Hüllen-Maßnahmen (BAFA) laufen auf getrennten Schienen — der iSFP-Bonus wirkt nur auf die BAFA-Seite.",
    },

    { kind: "subheading", text: "Lokale Hinweise für Altlandsberg" },
    {
      kind: "list",
      items: [
        "Altbestand im Stadtkern: Bei historischer Bausubstanz stimmen wir Sanierungsmaßnahmen mit den geltenden Auflagen ab — wie am Mehrfamilienhaus Strausberger Straße, dessen historischer Turm im Zuge der Sanierung rekonstruiert wurde.",
        "Kleinere Mehrfamilienhäuser: Ab drei Wohneinheiten gelten eigene iSFP- und Ausweis-Konditionen; für Vermieter rechnet sich der iSFP über den erhöhten BAFA-Höchstbetrag späterer Maßnahmen.",
        "Lokale Förderprogramme: Falls Stadt Altlandsberg oder Landkreis Märkisch-Oderland eigene Programme anbieten, prüfen wir die Kombinierbarkeit mit den Bundes-Förderungen — den aktuellen Stand klären wir vor jeder Beauftragung.",
      ],
    },

    { kind: "subheading", text: "Hinweis zum Heizungsgesetz (GEG)" },
    {
      kind: "paragraph",
      text: "Das Gebäudeenergiegesetz (GEG / „Heizungsgesetz“) wird 2026 reformiert. Eine Novelle (Gebäudemodernisierungsgesetz, GModG) befindet sich im Gesetzgebungsverfahren und ist noch nicht verabschiedet. Konkrete Pflichten, Prozentsätze und Stichtage können sich dadurch ändern. Wir beraten Sie zum **jeweils aktuell geltenden Stand** und sichern die für Ihr Vorhaben passende Förderung — unabhängig davon, welche Heiztechnik Ihr Fachbetrieb am Ende einbaut.",
    },
  ],

  priceTables: [
    {
      caption: "Unsere Honorare (Festpreise, brutto)",
      columns: [
        { key: "leistung", label: "Leistung" },
        { key: "efh", label: "EFH", align: "right" },
        { key: "zfh", label: "ZFH", align: "right" },
        { key: "mfh", label: "MFH (ab 3 WE)", align: "right" },
      ],
      rows: [
        {
          leistung: "Sanierungsfahrplan iSFP",
          efh: "1.500 €",
          zfh: "1.700 €",
          mfh: "2.000 €",
        },
        {
          leistung: "Energieausweis — Verbrauch",
          efh: "100 €",
          zfh: "100 €",
          mfh: "100 €",
        },
        {
          leistung: "Energieausweis — Bedarf",
          efh: "900 €",
          zfh: "1.100 €",
          mfh: "2.300 €",
        },
        {
          leistung: "KfW-Baubegleitung",
          efh: "3.500 €",
          zfh: "4.500 €",
          mfh: "6.500 €",
        },
        {
          leistung: "GEG-Nachweis (im Bauantrag)",
          efh: "900 €",
          zfh: "1.100 €",
          mfh: "2.300 €",
        },
        {
          leistung: "Förderberatung (eigenes Paket)",
          efh: "300 €",
          zfh: "400 €",
          mfh: "1.000 €",
        },
      ],
      note: "Nichtwohngebäude: Honorar individuell nach Aufwand. Alle Preise brutto. Bearbeitungszeit Energieausweis: Verbrauchsausweis rund 3 Werktage, Bedarfsausweis 5–10 Werktage.",
    },
    {
      caption: "Kurze Wege rund um Altlandsberg",
      columns: [
        { key: "ort", label: "Ort" },
        { key: "anfahrt", label: "Anfahrt vom Büro", align: "right" },
        { key: "themen", label: "Typische Sanierungs-Themen" },
      ],
      rows: [
        {
          ort: "Altlandsberg",
          anfahrt: "ca. 18 min",
          themen: "EFH, Reihenhäuser, kleinere MFH, historischer Stadtkern",
        },
        {
          ort: "Ahrensfelde (Büro-Standort)",
          anfahrt: "0 min",
          themen: "Siehe eigene Seite „Energieberatung Ahrensfelde“",
        },
        {
          ort: "Werneuchen",
          anfahrt: "ca. 18 min",
          themen: "Siehe eigene Seite „Energieberatung Werneuchen“",
        },
        {
          ort: "Strausberg",
          anfahrt: "ca. 25 min",
          themen: "Siehe eigene Seite „Energieberatung Strausberg“",
        },
        {
          ort: "Fredersdorf-Vogelsdorf",
          anfahrt: "ca. 22 min",
          themen: "EFH-Neubau, Sanierungen",
        },
      ],
      note: "Die Anfahrt ist im Honorar enthalten. Bei mehreren Terminen am gleichen Tag bündeln wir die Strecken.",
    },
  ],

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

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
    src: "/images/energie/gebaeudehuelle-v2.jpg",
    alt: "Eingerüstetes Wohnhaus mit frisch montierten Dämmplatten während der energetischen Sanierung",
  },

  cases: {
    heading: "Unsere Referenz direkt in Altlandsberg — und aus dem Umland",
    intro:
      "Bauen im Bestand ist unsere Kernkompetenz. In Altlandsberg selbst haben wir saniert; die weiteren Beispiele zeigen unseren Schwerpunkt auf energetischer Gebäudehülle und Bestand.",
    items: [
      {
        name: "Mehrfamilienhaus Strausberger Straße, Altlandsberg",
        jahr: "2005 – 2007",
        umfang:
          "Kernsanierung mit energetischer Sanierung der Gebäudehülle — inklusive Rekonstruktion des historischen Turms und Umwandlung des Wirtschaftshauses in Wohnraum. Objektplanung LP 1–9.",
        denkmal: false,
        href: "/projekte/mfh-strausberger-altlandsberg",
      },
      {
        name: "Sanierung Wohnhaus Mehrow",
        jahr: "2014 – 2016",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben — wenige Minuten von Altlandsberg.",
        denkmal: true,
        href: "/projekte/sanierung-wohnhaus-mehrow",
      },
      {
        name: "Ernst-Reuter-Siedlung, Berlin-Mitte",
        jahr: "seit 2021",
        umfang:
          "Sanierung einer denkmalgeschützten Wohnanlage in 6 Bauabschnitten — Fassaden, Dächer und Treppenhäuser im bewohnten Zustand.",
        denkmal: true,
        href: "/projekte/ernst-reuter-siedlung",
      },
    ],
  },

  faq: [
    {
      q: "Wer macht Energieberatung in Altlandsberg?",
      a: "Dr.-Ing. Formazin & Partner kommt aus Ahrensfelde, rund 18 Autominuten von Altlandsberg. Wir sind mit gelistetem Energie-Effizienz-Experten (KfW und BAFA) vor Ort und haben in Altlandsberg selbst saniert — das Mehrfamilienhaus an der Strausberger Straße. Unser Schwerpunkt ist die Förder- und Nachweisseite (iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis, Förderberatung), nicht die Heizungsplanung.",
    },
    {
      q: "Was kostet ein Energieberater in Altlandsberg?",
      a: "Ein iSFP kostet bei uns 1.500 € (Einfamilienhaus) · 1.700 € (Zweifamilienhaus) · 2.000 € (ab drei Wohneinheiten) brutto; Nichtwohngebäude individuell nach Aufwand. Die BAFA-Förderung beträgt 50 % des förderfähigen Beratungshonorars, gedeckelt auf max. 650 € (Ein-/Zweifamilienhaus) bzw. max. 850 € (Wohngebäude ab 3 Wohneinheiten). Beim Einfamilienhaus bleibt damit ein Eigenanteil von rund 850 €. Die Anfahrt nach Altlandsberg ist im Honorar enthalten.",
    },
    {
      q: "Wie hoch ist die Förderung beim Wechsel auf eine Wärmepumpe?",
      a: "Beim Heizungstausch (KfW 458) sind 30 % Grundförderung der Ausgangspunkt (Stand: 21.07.2026). Dazu kommen ggf. +16 % Klimageschwindigkeitsbonus (selbstnutzende Eigentümer; in dieser Höhe bei Antrag bis 31.01.2027, danach halbjährlich sinkend) und ein gestaffelter Einkommensbonus (+40 % bis 30.000 €, +30 % bis 40.000 €, +10 % bis 50.000 € zu versteuerndem Haushaltseinkommen). Der frühere Effizienzbonus ist entfallen. Die Gesamtförderung ist auf 70 % gedeckelt, für bestimmte Selbstnutzer mit Einkommensbonus auf 80 %; die förderfähigen Kosten sind beim Einfamilienhaus auf 28.000 € begrenzt.",
    },
    {
      q: "Plant Formazin & Partner auch die Heizung?",
      a: "Nein. Wir legen keine Heizung aus und empfehlen kein konkretes Fabrikat. Unsere Leistung ist die Förder- und Nachweisseite: iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und die Förderberatung. Die Heiztechnik plant und installiert Ihr Fachbetrieb — wir sorgen dafür, dass die Förderung sauber beantragt ist.",
    },
    {
      q: "Wie schnell bekomme ich einen Vor-Ort-Termin in Altlandsberg?",
      a: "In der Regel innerhalb von 7 bis 14 Tagen ab Anfrage. Wir bündeln Termine in Altlandsberg und Umgebung, sodass mehrere Eigentümer am gleichen Tag besucht werden können — praktisch für Nachbarschaften oder kleinere Wohnungseigentümergemeinschaften.",
    },
  ],

  related: {
    heading: "Weiterführende Seiten",
    intro:
      "Zur Übersicht der Energieberatung — oder direkt in die Leistungen und Nachbar-Regionen.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung — Übersicht",
        description:
          "Alle fünf Energie-Leistungen für Berlin und Brandenburg im Überblick.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description: "Schritt-für-Schritt-Plan mit BAFA-Förderung.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/strausberg",
        label: "Energieberatung Strausberg",
        description: "Unsere Energieberatung in Märkisch-Oderland.",
        kind: "geo",
      },
      {
        href: "/leistungen/energieberatung/werneuchen",
        label: "Energieberatung Werneuchen",
        description: "Die Nachbarstadt im Barnim — ebenfalls 18 Minuten entfernt.",
        kind: "geo",
      },
    ],
  },

  cta: {
    heading: "Kostenloses Erstgespräch anfragen",
    text: "Das Erstgespräch dauert rund 20 Minuten am Telefon und ist kostenlos. Wir klären, ob ein iSFP für Sie sinnvoll ist und welche Förderungen für Ihr Haus konkret in Frage kommen. Ein Vor-Ort-Termin in Altlandsberg ist in der Regel innerhalb von 7 bis 14 Tagen möglich.",
    buttonLabel: "Förderung & Sanierung anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
  areaServed: [
    "Altlandsberg",
    "Märkisch-Oderland",
    "Fredersdorf-Vogelsdorf",
    "Ahrensfelde",
    "Werneuchen",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "5",
  },
};
