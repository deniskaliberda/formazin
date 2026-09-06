import type { EnergiePageContent } from "./types";
import { energieTeam } from "./team";

/**
 * Geo-Seite /leistungen/energieberatung/werneuchen (Umland-Ausbau,
 * Denis-Freigabe 27.08.2026 — "ja mehr").
 *
 * Fakten aus belegten Quellen:
 * - Anfahrt "ca. 18 min" + Themen "EFH-Neubau, Bestands-Sanierung" 1:1 aus
 *   der Orte-Tabelle der Bernau-Seite (konsistente Werte).
 * - Werneuchen als reguläres Arbeitsgebiet: Pillar-Cases-Intro nennt
 *   Werneuchen seit dem Feith-freigegebenen Cluster-Stand.
 * - Referenzen aus dem Umland 1:1 aus src/data/projekte.ts (kein eigenes
 *   Werneuchen-Projekt — deshalb ehrliche Rahmung "aus dem direkten Umland").
 * - Festpreise + KfW-458 (BEG-Stand 21.07.2026) aus dem verifizierten Kanon.
 * - KEINE Einwohnerzahlen, keine Ortsteil-Aufzählung (unverifiziert),
 *   lokale Förderprogramme nur konditional.
 */
export const geoWerneuchenContent: EnergiePageContent = {
  kind: "geo",
  meta: {
    slug: "/leistungen/energieberatung/werneuchen",
    canonical: "/leistungen/energieberatung/werneuchen",
    ogImage: "/images/energie/geo-strasse-1-v2.jpg",
    title: "Energieberatung Werneuchen",
    metaDescription:
      "Energieberatung in Werneuchen: iSFP, Energieausweis, KfW-Baubegleitung und Förderberatung zu Festpreisen — 18 Minuten von Ahrensfelde, Anfahrt inklusive.",
    primaryKeyword: "energieberater werneuchen",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Werneuchen",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/werneuchen",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Energieberatung in Werneuchen",
  intro:
    "Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis und Förderberatung für Werneuchen und die umliegenden Dörfer — aus einem Architektur- und Ingenieurbüro in Ahrensfelde, rund 18 Autominuten entfernt. Die Anfahrt ist im Honorar enthalten.",
  heroTrustLine:
    "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg und angrenzenden Regionen.",

  heroImage: {
    src: "/images/energie/geo-strasse-1-v2.jpg",
    alt: "Kleinstadtstraße in Brandenburg mit teils sanierten Altbauten",
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
    heading: "Nah dran: Energieberatung in Werneuchen",
    items: [
      {
        name: "region",
        highlight: "Werneuchen",
        caption: "Vor-Ort-Termin in Werneuchen in 7–14 Tagen, ein Ansprechpartner bis zum Verwendungsnachweis.",
      },
      {
        image: { src: "/images/energie/vor-ort-termin.jpg", alt: "Laser-Entfernungsmesser, Klemmbrett und Wärmebildkamera auf der Fensterbank beim Vor-Ort-Termin" },
        frage: "Wie läuft der Vor-Ort-Termin ab?",
        heading: "Ein bis zwei Stunden bei Ihnen in Werneuchen, Einschätzung noch am selben Tag",
        body: [
          "Nach einem kostenlosen Erstgespräch von 20 Minuten kommen wir typischerweise in **7 bis 14 Tagen** zu Ihnen: Aufmaß, Bauteile, Anlagentechnik, Foto-Dokumentation. Eine erste Einschätzung bekommen Sie noch am gleichen Tag.",
          "Danach erstellen wir den Sanierungsfahrplan in **zwei bis vier Wochen** im offiziellen BAFA-Format und gehen ihn in einem einstündigen Gespräch mit Ihnen durch. Wer saniert, hängt Antrag, Bauleitung und Verwendungsnachweis direkt an.",
        ],
        caption: "Werkzeug statt Ferndiagnose: Der Vor-Ort-Termin ist die Grundlage jedes Fahrplans.",
      },
    ],
  },
  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Wir bieten Energieberatung in Werneuchen und den umliegenden Dörfern: individueller Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und Förderberatung. Unser Büro liegt in Ahrensfelde, rund 18 Autominuten entfernt — die Anfahrt ist im Honorar enthalten. Heizungen planen wir nicht — wir sichern Ihnen die passende Förderung und begleiten den Antrag bis zum Nachweis.",
  },

  team: energieTeam,

  introSplit: {
    eyebrow: "Vor Ort im Barnim",
    heading: "Werneuchen liegt auf unserer Hausstrecke",
    body: [
      "Die B158 verbindet unser Büro in Ahrensfelde direkt mit Werneuchen — wir arbeiten regelmäßig entlang dieser Achse. Typische Aufgaben in Werneuchen und Umgebung:",
    ],
    bullets: [
      "Einfamilienhaus-Neubau — hier sind GEG-Nachweis im Bauantrag und die KfW-Förderung für klimafreundlichen Neubau die häufigsten Themen",
      "Bestands-Sanierung älterer Wohnhäuser — Heizungstausch und Hüllen-Maßnahmen mit BAFA-/KfW-Förderung",
      "Dorflagen rund um die Kernstadt — für Vor-Ort-Termine bündeln wir Strecken, oft mehrere Nachbarn am selben Tag",
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
    heading: "Was wir in Werneuchen leisten",
    intro:
      "Unser Schwerpunkt ist die Förder- und Nachweisseite der energetischen Sanierung — nicht die Anlagenplanung. Beim Neubau übernehmen wir den GEG-Nachweis als Teil des Bauantrags.",
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

    { kind: "subheading", text: "Lokale Hinweise für Werneuchen" },
    {
      kind: "list",
      items: [
        "Neubau: Beim Einfamilienhaus-Neubau gehört der GEG-Nachweis in den Bauantrag — wir liefern Wärmeschutz, sommerlichen Wärmeschutz und Lüftungskonzept aus einer Hand.",
        "Bestand: Für ältere Wohnhäuser lohnt der iSFP fast immer — er hebt den iSFP-Bonus späterer BAFA-Maßnahmen und verdoppelt deren förderfähigen Höchstbetrag je Wohneinheit.",
        "Lokale Förderprogramme: Falls Stadt Werneuchen oder Landkreis Barnim eigene Programme anbieten, prüfen wir die Kombinierbarkeit mit den Bundes-Förderungen — den aktuellen Stand klären wir vor jeder Beauftragung.",
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
      caption: "Kurze Wege rund um Werneuchen",
      columns: [
        { key: "ort", label: "Ort" },
        { key: "anfahrt", label: "Anfahrt vom Büro", align: "right" },
        { key: "themen", label: "Typische Sanierungs-Themen" },
      ],
      rows: [
        {
          ort: "Werneuchen",
          anfahrt: "ca. 18 min",
          themen: "EFH-Neubau, Bestands-Sanierung, Dorflagen",
        },
        {
          ort: "Ahrensfelde (Büro-Standort)",
          anfahrt: "0 min",
          themen: "Siehe eigene Seite „Energieberatung Ahrensfelde“",
        },
        {
          ort: "Altlandsberg",
          anfahrt: "ca. 18 min",
          themen: "Siehe eigene Seite „Energieberatung Altlandsberg“",
        },
        {
          ort: "Bernau bei Berlin",
          anfahrt: "ca. 15 min",
          themen: "Siehe eigene Seite „Energieberatung Bernau bei Berlin“",
        },
        {
          ort: "Strausberg",
          anfahrt: "ca. 25 min",
          themen: "Siehe eigene Seite „Energieberatung Strausberg“",
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
    heading: "Referenzen aus dem direkten Umland",
    intro:
      "Ehrlich eingeordnet: Ein eigenes Werneuchener Projekt können wir noch nicht zeigen. Diese Referenzen liegen wenige Autominuten entfernt und zeigen unseren Schwerpunkt — energetische Sanierung im Bestand, auch unter Denkmal-Auflagen.",
    items: [
      {
        name: "Sanierung Wohnhaus Mehrow",
        jahr: "2014 – 2016",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben — in der Nachbargemeinde Ahrensfelde.",
        denkmal: true,
        href: "/projekte/sanierung-wohnhaus-mehrow",
      },
      {
        name: "Mehrfamilienhaus Strausberger Straße, Altlandsberg",
        jahr: "2005 – 2007",
        umfang:
          "Kernsanierung mit energetischer Sanierung der Gebäudehülle — inklusive Rekonstruktion des historischen Turms. Objektplanung LP 1–9.",
        denkmal: false,
        href: "/projekte/mfh-strausberger-altlandsberg",
      },
      {
        name: "Grundschule Lindenberg",
        jahr: "2018 – 2022",
        umfang:
          "Schulbau für die Gemeinde Ahrensfelde — öffentlicher Auftraggeber, Planung aus unserem Büro an der B158.",
        denkmal: false,
        href: "/projekte/grundschule-lindenberg",
      },
    ],
  },

  faq: [
    {
      q: "Wer macht Energieberatung in Werneuchen?",
      a: "Dr.-Ing. Formazin & Partner kommt aus Ahrensfelde, rund 18 Autominuten über die B158. Wir sind mit gelistetem Energie-Effizienz-Experten (KfW und BAFA) vor Ort und übernehmen iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis und Förderberatung — die Anfahrt ist im Honorar enthalten. Heizungsplanung übernehmen wir nicht, die bleibt beim Fachbetrieb.",
    },
    {
      q: "Was kostet ein Energieberater in Werneuchen?",
      a: "Ein iSFP kostet bei uns 1.500 € (Einfamilienhaus) · 1.700 € (Zweifamilienhaus) · 2.000 € (ab drei Wohneinheiten) brutto; Nichtwohngebäude individuell nach Aufwand. Die BAFA-Förderung beträgt 50 % des förderfähigen Beratungshonorars, gedeckelt auf max. 650 € (Ein-/Zweifamilienhaus) bzw. max. 850 € (Wohngebäude ab 3 Wohneinheiten). Beim Einfamilienhaus bleibt damit ein Eigenanteil von rund 850 €.",
    },
    {
      q: "Machen Sie auch den GEG-Nachweis für einen Neubau in Werneuchen?",
      a: "Ja. Beim Neubau gehört der energetische Nachweis nach GEG in den Bauantrag — Wärmeschutz, sommerlicher Wärmeschutz und Lüftungskonzept. Wir erstellen ihn zum Festpreis (900 € EFH · 1.100 € ZFH · 2.300 € MFH) und stimmen ihn mit Ihrem Entwurfsverfasser ab. Als Architektur- und Ingenieurbüro können wir auf Wunsch auch die weitere Planung übernehmen.",
    },
    {
      q: "Wie hoch ist die Förderung beim Wechsel auf eine Wärmepumpe?",
      a: "Beim Heizungstausch (KfW 458) sind 30 % Grundförderung der Ausgangspunkt (Stand: 21.07.2026). Dazu kommen ggf. +16 % Klimageschwindigkeitsbonus (selbstnutzende Eigentümer; in dieser Höhe bei Antrag bis 31.01.2027, danach halbjährlich sinkend) und ein gestaffelter Einkommensbonus (+40 % bis 30.000 €, +30 % bis 40.000 €, +10 % bis 50.000 € zu versteuerndem Haushaltseinkommen). Der frühere Effizienzbonus ist entfallen. Die Gesamtförderung ist auf 70 % gedeckelt, für bestimmte Selbstnutzer mit Einkommensbonus auf 80 %; die förderfähigen Kosten sind beim Einfamilienhaus auf 28.000 € begrenzt.",
    },
    {
      q: "Plant Formazin & Partner auch die Heizung?",
      a: "Nein. Wir legen keine Heizung aus und empfehlen kein konkretes Fabrikat. Unsere Leistung ist die Förder- und Nachweisseite: iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und die Förderberatung. Die Heiztechnik plant und installiert Ihr Fachbetrieb — wir sorgen dafür, dass die Förderung sauber beantragt ist.",
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
        href: "/leistungen/energieberatung/gegnachweis",
        label: "GEG-Nachweis im Bauantrag",
        description: "Wärmeschutz, sommerlicher Wärmeschutz, Lüftungskonzept.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/ahrensfelde",
        label: "Energieberatung Ahrensfelde",
        description: "Unser Büro-Standort — Energieberatung direkt im Ort.",
        kind: "geo",
      },
      {
        href: "/leistungen/energieberatung/altlandsberg",
        label: "Energieberatung Altlandsberg",
        description: "Die Nachbarstadt in Märkisch-Oderland.",
        kind: "geo",
      },
    ],
  },

  cta: {
    heading: "Kostenloses Erstgespräch anfragen",
    text: "Das Erstgespräch dauert rund 20 Minuten am Telefon und ist kostenlos. Wir klären, ob ein iSFP für Sie sinnvoll ist und welche Förderungen für Ihr Haus konkret in Frage kommen. Ein Vor-Ort-Termin in Werneuchen ist in der Regel innerhalb von 7 bis 14 Tagen möglich.",
    buttonLabel: "Förderung & Sanierung anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
  areaServed: [
    "Werneuchen",
    "Barnim",
    "Ahrensfelde",
    "Altlandsberg",
    "Bernau bei Berlin",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "5",
  },
};
