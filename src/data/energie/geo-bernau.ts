import type { EnergiePageContent } from "./types";
import { energieTeam } from "./team";

/**
 * Geo-Seite /leistungen/energieberatung/bernau-bei-berlin.
 *
 * Portiert aus content-rework/16-geo-bernau-bei-berlin.md (Stand 2026-07-08,
 * Feith-Daten integriert). Festpreise, iSFP-Deckel (650/850 €) und FAQ-Texte
 * 1:1 übernommen. KfW-458-Werte am 2026-07-27 auf BEG-Stand 21.07.2026
 * aktualisiert (30 % Grund, +16 % KGB bis 31.01.2027, Einkommensbonus-Staffel
 * 40/30/10 %, Deckel 28.000 €, Kappung 70/80 %; Effizienzbonus entfallen;
 * Beispielrechnung 28.000 × 0,46 = 12.880 €). Der sichtbare FAQ-Text ist
 * zugleich der FAQPage-Schema-Text.
 *
 * Ausgelassene/neutralisierte "[bitte prüfen]"-Marker aus dem MD:
 * - Anzahl gelisteter EE-Experten im Landkreis Barnim ("etwa 80" war
 *   unbelegt) → neutral "mehrere gelistete Energie-Effizienz-Experten".
 * - Wärmenetz-Planung der Stadt Bernau (Stand kommunale Wärmeplanung
 *   unverifiziert) → nur die neutrale, konditionale Aussage übernommen.
 * - Lokale Förderprogramme Landkreis Barnim / Stadt Bernau (Existenz und
 *   Konditionen unverifiziert) → konditional formuliert ("falls solche
 *   Programme bestehen, prüfen wir …"), keine Programme/Beträge behauptet.
 * - [PLATZHALTER: Foto-Freigabe Energieberater] → durch Denis-Vorgabe
 *   ersetzt: expertPhoto = /images/feith-funnel.jpg wird immer gesetzt.
 * - [Formazin] Telefon/E-Mail → kein Kontakt-Block; Kontaktweg ist der
 *   Funnel-CTA (/leistungen/energieberatung/anfrage), Footer hat echte Daten.
 */
export const geoBernauContent: EnergiePageContent = {
  kind: "geo",
  meta: {
    slug: "/leistungen/energieberatung/bernau-bei-berlin",
    canonical: "/leistungen/energieberatung/bernau-bei-berlin",
    ogImage: "/images/energie/geo-strasse-1.jpg",
    title: "Energieberatung Bernau bei Berlin",
    metaDescription:
      "Energieberatung in Bernau bei Berlin: iSFP, KfW-Baubegleitung, Energieausweis, Förderberatung. Gelisteter Energie-Effizienz-Experte (KfW/BAFA). Anfahrt aus Ahrensfelde, im Honorar enthalten.",
    primaryKeyword: "energieberater bernau",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Bernau bei Berlin",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/bernau-bei-berlin",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Energieberatung in Bernau bei Berlin",
  intro:
    "Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis und Förderberatung für Bernau und den Landkreis Barnim — aus einem Architektur- und Ingenieurbüro in Ahrensfelde, rund 15 Autominuten entfernt. Die Anfahrt ist im Honorar enthalten.",
  heroTrustLine:
    "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg und angrenzenden Regionen.",

  heroImage: {
    src: "/images/energie/geo-strasse-1.jpg",
    alt: "Sanierte Altbau-Wohnhäuser an einer baumgesäumten Wohnstraße",
  },

  // Leistungs-Zeile im Hero-Bild — die fünf Energie-Leistungen (1:1 wie Pillar)
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
    heading: "Nah dran: Energieberatung in Bernau",
    items: [
      {
        name: "region",
        highlight: "Bernau",
        caption: "Vor-Ort-Termin in Bernau in 7–14 Tagen, ein Ansprechpartner bis zum Verwendungsnachweis.",
      },
      {
        name: "zeitstrahl",
        caption: "Typischer Ablauf vom Erstgespräch bis zum fertigen Sanierungsfahrplan.",
      },
    ],
  },
  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Wir bieten Energieberatung in Bernau bei Berlin und im gesamten Landkreis Barnim: individueller Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und Förderberatung. Unser Büro liegt in Ahrensfelde, die Anfahrt ist im Honorar enthalten. Heizungen planen wir nicht — wir sichern Ihnen die passende Förderung und begleiten den Antrag.",
  },

  // Team-/Kompetenzblock (Briefing v2) — ersetzt den Einzel-ExpertProof
  team: energieTeam,

  introSplit: {
    eyebrow: "Vor Ort im Barnim",
    heading: "Warum Bernau und Barnim für uns nahe liegen",
    body: [
      "Bernau bei Berlin ist mit knapp 40.000 Einwohnern die größte Stadt im Landkreis Barnim — und liegt rund 15 Autominuten von unserem Büro in Ahrensfelde entfernt. Der Sanierungs-Bedarf in Bernau und Umgebung ist hoch:",
    ],
    bullets: [
      "Großer Bestand an Eigenheimen aus den 1960er bis 1990er Jahren — gute Kandidaten für eine geförderte Sanierung",
      "Mehrfamilienhäuser im DDR-Bestand — häufig mit Fernwärme-Anschluss oder älteren Gasheizungen",
      "Denkmal-Bestand in der Altstadt — Henkerhaus-Quartier, Stadtmauer-Bereich",
      "Neubau-Quartiere in Bernau-Süd und Friedenstal — hier ist die KfW-Förderung für klimafreundlichen Neubau (KfW 297/298) relevant",
    ],
    image: {
      src: "/images/energie/planung-beratung.jpg",
      alt: "Schreibtisch mit Bauzeichnungen und Plänen während einer Energieberatung",
    },
    imageSide: "right",
    imageAspect: "portrait",
    cta: {
      label: "Zur Übersicht Energieberatung",
      href: "/leistungen/energieberatung",
    },
  },

  featureGrid: {
    heading: "Was wir in Bernau und Barnim leisten",
    intro:
      "Unser Schwerpunkt ist die Förder- und Nachweisseite der energetischen Sanierung — nicht die Anlagenplanung. Wir kennen die typischen Bauteil-Konstellationen der Region und arbeiten regelmäßig mit den lokalen Heizungsbauern und Handwerkern zusammen.",
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
    {
      kind: "heading",
      text: "Beispiel-Rechnung: Heizungsförderung für ein Einfamilienhaus",
    },
    {
      kind: "note",
      tone: "info",
      text: "Illustrative Beispielrechnung, kein realer Auftrag. Die genannten Quoten und Beträge dienen nur der Veranschaulichung der Förderlogik. Reale Förderhöhe immer im Einzelfall prüfen. Echte Referenzen aus unserer Bestands-Arbeit finden Sie weiter unten.",
    },
    {
      kind: "paragraph",
      text: "Wer eine mindestens 20 Jahre alte fossile Heizung gegen eine Wärmepumpe tauscht, kann beim Heizungstausch (KfW 458) folgende Förderbausteine kombinieren:",
    },
    {
      kind: "list",
      items: [
        "Grundförderung: 30 %",
        "Klimageschwindigkeitsbonus: +16 % — nur für selbstnutzende Eigentümer; gilt in dieser Höhe bei Antrag bis 31.01.2027, danach halbjährlich −4 Prozentpunkte (ab 01.08.2028 entfallen)",
        "Einkommensbonus: gestaffelt +40 % / +30 % / +10 % — je nach zu versteuerndem Haushaltsjahreseinkommen (bis 30.000 / 40.000 / 50.000 €), nur Selbstnutzer; die Grenze erhöht sich um 10.000 € je Haushalt mit minderjährigem Kind",
      ],
    },
    {
      kind: "paragraph",
      text: "Für selbstnutzende Eigentümer mit Klimageschwindigkeitsbonus ergibt das **30 + 16 = 46 %** — ohne Einkommensbonus. Der frühere Effizienzbonus für Wärmepumpen (+5 %) ist zum 21.07.2026 entfallen. Ein iSFP-Bonus ist beim **Heizungstausch nicht möglich** — er gilt nur für Hüllen- und Anlagentechnik-Maßnahmen über die BAFA (siehe unten).",
    },
    {
      kind: "paragraph",
      text: "Beispiel (selbstnutzende Eigentümer, Klimageschwindigkeitsbonus, Antrag bis 31.01.2027 — Stand: 21.07.2026):",
    },
    {
      kind: "list",
      items: [
        "Förderfähige Kosten beim Einfamilienhaus: gedeckelt auf 28.000 € (1. Wohneinheit)",
        "Förderquote: 46 %",
        "Zuschuss: 28.000 € × 0,46 = 12.880 €",
      ],
    },
    {
      kind: "paragraph",
      text: "Liegen die tatsächlichen Investitionskosten höher als 28.000 €, wird nur bis zum Deckel gefördert; den Rest tragen Eigentümer selbst. Ein zusätzlicher Einkommensbonus (gestaffelt bis +40 %) kann die Quote weiter erhöhen; die Gesamtförderung ist bei **70 %** gedeckelt, für bestimmte selbstnutzende Eigentümer mit Einkommensbonus bei **80 %**.",
    },
    {
      kind: "diagram",
      name: "kfw-bausteine",
      caption: "So setzen sich die Bausteine der Beispielrechnung zusammen — Stand 21.07.2026.",
    },
    {
      kind: "note",
      tone: "info",
      text: "**Hüllen- und Anlagentechnik laufen getrennt (BAFA, BEG-EM):** Maßnahmen an Gebäudehülle, Lüftung oder Anlagentechnik werden über die BAFA gefördert — mit **15 %** (bzw. **20 %** mit iSFP-Bonus), nicht mit den Heizungs-Quoten oben. Der förderfähige Höchstbetrag liegt hier bei **30.000 € pro Wohneinheit und Jahr**, mit gültigem iSFP bei **60.000 €**. Heizungs- und Hüllen-Förderung werden also nicht in einer Quote vermischt.",
    },

    { kind: "subheading", text: "Lokale Hinweise für den Landkreis Barnim" },
    {
      kind: "list",
      items: [
        "Stromnetz-Kapazität: In einzelnen Wohngebieten kann die Anschlussleistung für Wärmepumpen begrenzt sein. Den konkreten Anschluss-Status klärt der Heizungsbauer mit dem Netzbetreiber; wir bringen die Förderseite ein.",
        "Wärmenetz: Wo ein Wärmenetz-Anschluss möglich ist, kann das eine Option sein — die technische Entscheidung trifft Ihr Fachbetrieb, wir prüfen die jeweils passende Förderung.",
        "Lokale Förderprogramme: Falls Landkreis Barnim oder Stadt Bernau eigene Programme anbieten, prüfen wir die Kombinierbarkeit mit den Bundes-Förderungen — den aktuellen Stand klären wir vor jeder Beauftragung.",
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
          leistung: "KfW-Baubegleitung (KfW 261)",
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
      caption: "Welche Orte wir im Barnim bedienen",
      columns: [
        { key: "ort", label: "Ort" },
        { key: "anfahrt", label: "Anfahrt vom Büro", align: "right" },
        { key: "themen", label: "Typische Sanierungs-Themen" },
      ],
      rows: [
        {
          ort: "Bernau bei Berlin",
          anfahrt: "ca. 15 min",
          themen: "EFH 1960er–1980er, MFH-/WEG-Bestand, Denkmal-Altstadt",
        },
        {
          ort: "Wandlitz",
          anfahrt: "ca. 25 min",
          themen: "Einfamilienhäuser, Wassergrundstücke",
        },
        {
          ort: "Panketal (Schwanebeck, Zepernick)",
          anfahrt: "ca. 12 min",
          themen: "Reihenhäuser, Einfamilienhäuser",
        },
        {
          ort: "Werneuchen",
          anfahrt: "ca. 18 min",
          themen: "Siehe eigene Seite „Energieberatung Werneuchen“",
        },
        {
          ort: "Ahrensfelde (Büro-Standort)",
          anfahrt: "0 min",
          themen: "Eigene Heimat — alle Konstellationen",
        },
        {
          ort: "Lobetal / Niederfinow",
          anfahrt: "ca. 30 min",
          themen: "Gemischte Bestände, gelegentlich Gewerbe",
        },
        {
          ort: "Eberswalde",
          anfahrt: "ca. 35 min",
          themen: "Siehe eigene Seite „Energieberatung Eberswalde“",
        },
      ],
      note: "Die Anfahrt innerhalb des Landkreises Barnim ist im Honorar enthalten.",
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
    src: "/images/energie/gebaeudehuelle.jpg",
    alt: "Dämmung der Gebäudehülle im Bereich eines Fensters während einer energetischen Sanierung",
  },

  cases: {
    heading: "Aus unserer Arbeit im Bestand",
    intro:
      "Bauen im Bestand ist unsere Kernkompetenz. Diese Beispiele — mit Freigabe der Bauherren — zeigen unseren Schwerpunkt: energetische Sanierung von Gebäudehülle und Dach im Bestand, oft unter denkmalrechtlichen Vorgaben.",
    items: [
      {
        name: "Wohnhaus Mehrow (Barnim)",
        jahr: "2014",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben — direkt im Landkreis Barnim, wenige Minuten von Bernau.",
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
      q: "Wer macht Energieberatung in Bernau bei Berlin?",
      a: "Im Landkreis Barnim sind mehrere gelistete Energie-Effizienz-Experten tätig. Dr.-Ing. Formazin & Partner kommt aus Ahrensfelde, rund 15 Autominuten vor Bernau. Wir arbeiten regelmäßig in Bernau, Wandlitz, Panketal und Werneuchen — die Anfahrt ist im Honorar enthalten. Unser Schwerpunkt ist die Förder- und Nachweisseite (iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis, Förderberatung), nicht die Heizungsplanung.",
    },
    {
      q: "Was kostet ein Energieberater in Bernau?",
      a: "Ein iSFP kostet bei uns 1.500 € (Einfamilienhaus) · 1.700 € (Zweifamilienhaus) · 2.000 € (ab drei Wohneinheiten) brutto; Nichtwohngebäude individuell nach Aufwand. Die BAFA-Förderung beträgt 50 % des förderfähigen Beratungshonorars, gedeckelt auf max. 650 € (Ein-/Zweifamilienhaus) bzw. max. 850 € (Wohngebäude ab 3 Wohneinheiten). Beim Einfamilienhaus bleibt damit ein Eigenanteil von rund 850 €. Bei einer Wohnungseigentümergemeinschaft kommen einmalig bis zu 250 € hinzu, wenn der iSFP in der Eigentümerversammlung erläutert wird. Diese Festpreise nennen wir Ihnen vorab konkret.",
    },
    {
      q: "Welche Förderung gibt es in Bernau zusätzlich zu BAFA und KfW?",
      a: "Eigene kommunale oder Landkreis-Programme wären zusätzlich zu den Bundes-Förderungen (BAFA/KfW) zu prüfen. Wir klären vor jeder Beauftragung den aktuellen Stand der für Ihr Gebäude in Frage kommenden Programme und kombinieren sie, soweit zulässig.",
    },
    {
      q: "Plant Formazin & Partner auch die Heizung?",
      a: "Nein. Wir legen keine Heizung aus und empfehlen kein konkretes Fabrikat. Unsere Leistung ist die Förder- und Nachweisseite: iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und die Förderberatung. Die Heiztechnik plant und installiert Ihr Fachbetrieb — wir sorgen dafür, dass die Förderung sauber beantragt ist.",
    },
    {
      q: "Wie hoch ist die Förderung beim Wechsel auf eine Wärmepumpe?",
      a: "Beim Heizungstausch (KfW 458) sind 30 % Grundförderung der Ausgangspunkt (Stand: 21.07.2026). Dazu kommen ggf. +16 % Klimageschwindigkeitsbonus (selbstnutzende Eigentümer; in dieser Höhe bei Antrag bis 31.01.2027, danach halbjährlich sinkend) und ein gestaffelter Einkommensbonus (+40 % bis 30.000 €, +30 % bis 40.000 €, +10 % bis 50.000 € zu versteuerndem Haushaltseinkommen; die Grenze erhöht sich um 10.000 € je Haushalt mit minderjährigem Kind). Der frühere Effizienzbonus ist entfallen. Die Gesamtförderung ist auf 70 % gedeckelt, für bestimmte Selbstnutzer mit Einkommensbonus auf 80 %; die förderfähigen Kosten sind beim Einfamilienhaus auf 28.000 € begrenzt. Den iSFP-Bonus gibt es beim Heizungstausch nicht — er gilt nur für Hüllen- und Anlagentechnik-Maßnahmen über die BAFA.",
    },
    {
      q: "Wie schnell bekomme ich einen Vor-Ort-Termin in Bernau?",
      a: "In der Regel innerhalb von 7 bis 14 Tagen ab Anfrage. Wir bündeln Termine im Barnim, sodass mehrere Eigentümer am gleichen Tag besucht werden können — praktisch für Wohnungseigentümergemeinschaften oder benachbarte Sanierungen.",
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
        href: "/leistungen/energieberatung/kfw-baubegleitung",
        label: "KfW-Baubegleitung",
        description: "Antrag, technischer Nachweis, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/eberswalde",
        label: "Energieberatung Eberswalde",
        description: "Unsere Energieberatung im nördlichen Barnim.",
        kind: "geo",
      },
      {
        href: "/leistungen/energieberatung/ahrensfelde",
        label: "Energieberatung Ahrensfelde",
        description: "Unser Büro-Standort — Energieberatung direkt im Ort.",
        kind: "geo",
      },
    ],
  },

  cta: {
    heading: "Kostenloses Erstgespräch anfragen",
    text: "Das Erstgespräch dauert rund 20 Minuten am Telefon und ist kostenlos. Wir klären, ob ein iSFP für Sie sinnvoll ist und welche Förderungen für Ihr Haus konkret in Frage kommen. Ein Vor-Ort-Termin in Bernau ist in der Regel innerhalb von 7 bis 14 Tagen möglich.",
    buttonLabel: "Förderung & Sanierung anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
  areaServed: [
    "Bernau bei Berlin",
    "Barnim",
    "Wandlitz",
    "Panketal",
    "Werneuchen",
    "Ahrensfelde",
    "Lobetal",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "5",
  },
};
