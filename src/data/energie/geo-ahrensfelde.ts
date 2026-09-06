import type { EnergiePageContent } from "./types";
import { energieTeam } from "./team";

/**
 * Geo-Seite /leistungen/energieberatung/ahrensfelde — die "eigene Haustür"
 * (Gap aus dem Keyword-/Ads-Plan 2026-08-18, Bau beauftragt von Denis am
 * 26.08.2026: "lokale Seiten für das ganze Gebiet um Ahrensfelde").
 *
 * Alle Fakten aus belegten Quellen:
 * - Projekte 1:1 aus src/data/projekte.ts (Ortsteilzentrum Ahrensfelde,
 *   Grundschule Lindenberg, Sanierung Wohnhaus Mehrow — alle mit eigener
 *   Projektseite als Beleg).
 * - Festpreise, iSFP-Deckel (650/850 €), KfW-458-Werte (BEG-Stand 21.07.2026)
 *   1:1 aus dem verifizierten Kanon der übrigen Energie-Seiten.
 * - Ortsteile der Gemeinde Ahrensfelde: Ahrensfelde, Blumberg, Eiche,
 *   Lindenberg, Mehrow (amtliche Gliederung).
 * - KEINE Einwohnerzahlen, keine lokalen Förderprogramme behauptet
 *   (konditional formuliert wie auf den anderen Geo-Seiten).
 */
export const geoAhrensfeldeContent: EnergiePageContent = {
  kind: "geo",
  meta: {
    slug: "/leistungen/energieberatung/ahrensfelde",
    canonical: "/leistungen/energieberatung/ahrensfelde",
    ogImage: "/images/energie/geo-strasse-1-v2.jpg",
    title: "Energieberatung Ahrensfelde",
    metaDescription:
      "Energieberatung in Ahrensfelde, Blumberg, Eiche, Lindenberg und Mehrow: iSFP, Energieausweis, KfW-Baubegleitung und Förderberatung — vom Ingenieurbüro im Ort.",
    primaryKeyword: "energieberater ahrensfelde",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Ahrensfelde",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/ahrensfelde",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Energieberatung in Ahrensfelde",
  intro:
    "Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis und Förderberatung für Ahrensfelde, Blumberg, Eiche, Lindenberg und Mehrow — vom Architektur- und Ingenieurbüro an der Dorfstraße. Keine Anfahrt, kurze Wege, seit 1990 im Ort.",
  heroTrustLine:
    "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg und angrenzenden Regionen.",

  heroImage: {
    src: "/images/energie/geo-strasse-1-v2.jpg",
    alt: "Kleinstadtstraße in Brandenburg mit teils sanierten Altbauten",
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
    heading: "Nah dran: Energieberatung in Ahrensfelde",
    items: [
      {
        name: "region",
        highlight: "Ahrensfelde",
        caption: "Vor-Ort-Termin in Ahrensfelde in 7–14 Tagen, ein Ansprechpartner bis zum Verwendungsnachweis.",
      },
      {
        image: { src: "/images/energie/vor-ort-termin.jpg", alt: "Laser-Entfernungsmesser, Klemmbrett und Wärmebildkamera auf der Fensterbank beim Vor-Ort-Termin" },
        frage: "Wie läuft der Vor-Ort-Termin ab?",
        heading: "Ein bis zwei Stunden bei Ihnen in Ahrensfelde, Einschätzung noch am selben Tag",
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
    text: "Dr.-Ing. Formazin & Partner sitzt seit 1990 in Ahrensfelde und bietet Energieberatung direkt im Ort: individueller Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und Förderberatung — für alle fünf Ortsteile der Gemeinde. Heizungen planen wir nicht; wir sichern Ihnen die passende Förderung und begleiten den Antrag bis zum Nachweis.",
  },

  // Team-/Kompetenzblock (Briefing v2) — ersetzt den Einzel-ExpertProof
  team: energieTeam,

  introSplit: {
    eyebrow: "Unsere eigene Haustür",
    heading: "Warum Ahrensfelde für uns keine Region ist, sondern Zuhause",
    body: [
      "Unser Büro steht an der Dorfstraße in Ahrensfelde — wir planen und bauen hier seit 1990. Das Ortsteilzentrum, die Grundschule in Lindenberg und die Kindertagesstätte tragen unsere Handschrift. Für die energetische Sanierung heißt das: Wir kennen die Gebäude der Gemeinde aus der Praxis.",
    ],
    bullets: [
      "Einfamilienhaus-Gebiete in Ahrensfelde, Lindenberg und Eiche — viele Häuser aus den 1990er- und 2000er-Jahren erreichen jetzt das Alter für Heizungstausch und erste Sanierungen",
      "Dorfkerne und Altbestand in Blumberg und Mehrow — teils denkmalgeschützt, wie unser saniertes Wohnhaus in Mehrow zeigt",
      "Direkt an der Berliner Stadtgrenze — für Bestand auf Berliner Seite siehe unsere Seite „Energieberatung Berlin“",
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
    heading: "Was wir in Ahrensfelde leisten",
    intro:
      "Unser Schwerpunkt ist die Förder- und Nachweisseite der energetischen Sanierung — nicht die Anlagenplanung. Vor-Ort-Termine sind bei uns im Ort kurzfristig möglich, ohne Anfahrtskosten.",
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

    { kind: "subheading", text: "Lokale Hinweise für die Gemeinde Ahrensfelde" },
    {
      kind: "list",
      items: [
        "Ortsteile: Wir arbeiten in allen fünf Ortsteilen — Ahrensfelde, Blumberg, Eiche, Lindenberg und Mehrow. Vor-Ort-Termine lassen sich kurzfristig einrichten, oft am selben Tag mit mehreren Nachbarn.",
        "Denkmal und Altbestand: In den Dorfkernen gelten teils denkmalrechtliche Vorgaben. Wie sich energetische Sanierung und Denkmalschutz vereinbaren lassen, haben wir am Wohnhaus in Mehrow selbst umgesetzt.",
        "Lokale Förderprogramme: Falls Gemeinde oder Landkreis Barnim eigene Programme anbieten, prüfen wir die Kombinierbarkeit mit den Bundes-Förderungen — den aktuellen Stand klären wir vor jeder Beauftragung.",
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
      caption: "Kurze Wege in der Gemeinde und zu den Nachbarn",
      columns: [
        { key: "ort", label: "Ort" },
        { key: "anfahrt", label: "Anfahrt vom Büro", align: "right" },
        { key: "themen", label: "Typische Sanierungs-Themen" },
      ],
      rows: [
        {
          ort: "Ahrensfelde (Büro-Standort)",
          anfahrt: "0 min",
          themen: "EFH-Gebiete, Dorfkern, Gewerbe",
        },
        {
          ort: "Lindenberg",
          anfahrt: "ca. 5 min",
          themen: "Einfamilienhäuser, Neubaugebiete der 1990er/2000er",
        },
        {
          ort: "Eiche",
          anfahrt: "ca. 5 min",
          themen: "Einfamilienhäuser, Reihenhäuser",
        },
        {
          ort: "Blumberg",
          anfahrt: "ca. 7 min",
          themen: "Dorfkern, Altbestand, Gewerbegebiet",
        },
        {
          ort: "Mehrow",
          anfahrt: "ca. 7 min",
          themen: "Dorflage, teils Denkmal — siehe unsere Referenz",
        },
        {
          ort: "Panketal / Bernau",
          anfahrt: "ca. 12–15 min",
          themen: "Siehe eigene Seite „Energieberatung Bernau bei Berlin“",
        },
        {
          ort: "Berlin (Marzahn-Hellersdorf u. a.)",
          anfahrt: "ca. 10 min",
          themen: "Siehe eigene Seite „Energieberatung Berlin“",
        },
      ],
      note: "Innerhalb der Gemeinde Ahrensfelde fallen keine Anfahrtskosten an.",
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

  // Referenzen aus der Gemeinde selbst — Fakten 1:1 aus projekte.ts, jede
  // Karte verlinkt auf die Projektseite als Beleg.
  cases: {
    heading: "Wir bauen hier seit 1990 — Referenzen aus der Gemeinde",
    intro:
      "Nicht jedes dieser Projekte war eine Energieberatung — aber alle zeigen, dass wir die Gebäude dieser Gemeinde kennen: vom denkmalgeschützten Wohnhaus bis zum öffentlichen Neubau.",
    items: [
      {
        name: "Sanierung Wohnhaus Mehrow",
        jahr: "2014 – 2016",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben — im Ortsteil Mehrow, wenige Minuten vom Büro.",
        denkmal: true,
        href: "/projekte/sanierung-wohnhaus-mehrow",
      },
      {
        name: "Grundschule Lindenberg",
        jahr: "2018 – 2022",
        umfang:
          "Schulbau für die Gemeinde Ahrensfelde im Ortsteil Lindenberg — öffentlicher Auftraggeber, Planung aus unserem Büro.",
        denkmal: false,
        href: "/projekte/grundschule-lindenberg",
      },
      {
        name: "Ortsteilzentrum Ahrensfelde",
        jahr: "2011 – 2013",
        umfang:
          "Multifunktionsgebäude im Dorfkern mit Veranstaltungssaal, Bibliothek und Vereinsräumen — geplant für die Gemeinde Ahrensfelde.",
        denkmal: false,
        href: "/projekte/ortsteilzentrum-ahrensfelde",
      },
    ],
  },

  faq: [
    {
      q: "Wer macht Energieberatung in Ahrensfelde?",
      a: "Dr.-Ing. Formazin & Partner sitzt seit 1990 direkt in Ahrensfelde an der Dorfstraße. Wir sind mit gelistetem Energie-Effizienz-Experten (KfW und BAFA) vor Ort und übernehmen iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis und Förderberatung — für alle fünf Ortsteile der Gemeinde, ohne Anfahrtskosten. Heizungsplanung übernehmen wir nicht, die bleibt beim Fachbetrieb.",
    },
    {
      q: "Was kostet ein Energieberater in Ahrensfelde?",
      a: "Ein iSFP kostet bei uns 1.500 € (Einfamilienhaus) · 1.700 € (Zweifamilienhaus) · 2.000 € (ab drei Wohneinheiten) brutto; Nichtwohngebäude individuell nach Aufwand. Die BAFA-Förderung beträgt 50 % des förderfähigen Beratungshonorars, gedeckelt auf max. 650 € (Ein-/Zweifamilienhaus) bzw. max. 850 € (Wohngebäude ab 3 Wohneinheiten). Beim Einfamilienhaus bleibt damit ein Eigenanteil von rund 850 €.",
    },
    {
      q: "Arbeiten Sie auch in Blumberg, Eiche, Lindenberg und Mehrow?",
      a: "Ja — die Gemeinde Ahrensfelde mit ihren fünf Ortsteilen ist unser direktes Zuhause. In Lindenberg haben wir die Grundschule geplant, in Mehrow ein denkmalgeschütztes Wohnhaus energetisch saniert. Vor-Ort-Termine sind in allen Ortsteilen kurzfristig möglich, oft gebündelt mit Nachbarterminen.",
    },
    {
      q: "Wie schnell bekomme ich einen Vor-Ort-Termin?",
      a: "In Ahrensfelde meist schneller als anderswo — das Büro ist im Ort, es gibt keine Anfahrtswege. In der Regel ist ein Vor-Ort-Termin innerhalb von 7 bis 14 Tagen ab Anfrage möglich, innerhalb der Gemeinde oft früher.",
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
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description: "Schritt-für-Schritt-Plan mit BAFA-Förderung.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/berlin",
        label: "Energieberatung Berlin",
        description: "Direkt hinter der Stadtgrenze — unsere Berlin-Seite.",
        kind: "geo",
      },
      {
        href: "/leistungen/energieberatung/bernau-bei-berlin",
        label: "Energieberatung Bernau bei Berlin",
        description: "Unsere Energieberatung im Landkreis Barnim.",
        kind: "geo",
      },
      {
        href: "/leistungen/energieberatung/werneuchen",
        label: "Energieberatung Werneuchen",
        description: "Über die B158 direkt vor der Haustür.",
        kind: "geo",
      },
      {
        href: "/leistungen/energieberatung/altlandsberg",
        label: "Energieberatung Altlandsberg",
        description: "Mit sanierter Referenz direkt in der Stadt.",
        kind: "geo",
      },
    ],
  },

  cta: {
    heading: "Kostenloses Erstgespräch anfragen",
    text: "Das Erstgespräch dauert rund 20 Minuten am Telefon und ist kostenlos. Wir klären, ob ein iSFP für Sie sinnvoll ist und welche Förderungen für Ihr Haus konkret in Frage kommen — und in Ahrensfelde ist der Vor-Ort-Termin besonders schnell möglich.",
    buttonLabel: "Förderung & Sanierung anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
  areaServed: [
    "Ahrensfelde",
    "Blumberg",
    "Eiche",
    "Lindenberg",
    "Mehrow",
    "Barnim",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "5",
  },
};
