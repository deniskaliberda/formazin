import type { EnergiePageContent } from "./types";
import { energieTeam } from "./team";

/**
 * Geo-Seite /leistungen/energieberatung/berlin.
 *
 * Portiert aus content-rework/15-geo-berlin.md (Stand 2026-07-08,
 * Feith-Daten integriert). Festpreise, Bezirks-Tabelle und FAQ-Texte 1:1
 * übernommen. KfW-458-Werte am 2026-07-27 auf BEG-Stand 21.07.2026
 * aktualisiert (KGB 16 % bis 31.01.2027, Einkommensbonus-Staffel, Kappung
 * 70/80 %, WE-Staffel 28.000/15.000/8.000 € — jetzt KfW-verifiziert;
 * Effizienzbonus + Emissionsminderungszuschlag entfallen). Der sichtbare
 * FAQ-Text ist zugleich der FAQPage-Schema-Text (siehe FaqAccordion).
 *
 * Aus dem MD NICHT übernommene, marker-behaftete Ansprüche
 * ([bitte prüfen] / [PLATZHALTER] — nichts erfinden):
 * - "Anfahrt im Honorar enthalten (auch Westbezirke)" — ungeklärt, weggelassen;
 *   nur die neutrale Aussage "Anfahrt ins Zentrum rund 30 Minuten" bleibt.
 * - Konkrete Berliner IBB-/Landesförderprogramme (Namen/Beträge/Kombinierbarkeit)
 *   — nicht verifiziert, nur neutraler Hinweis auf IBB-Landesförderung.
 * - Belegte Anzahl gelisteter Energieberater in Berlin (Draft-Zahl 1.400 war
 *   unbelegt) — neutral "zahlreiche Berater".
 * - Telefon/E-Mail/Adresse für Kontakt-Block — Kontaktweg ist der Funnel-CTA.
 * - [PLATZHALTER: Foto-Freigabe Energieberater] — expertPhoto per
 *   Denis-Vorgabe dennoch gesetzt (feith-funnel.jpg, früher Social Proof).
 */
export const geoBerlinContent: EnergiePageContent = {
  kind: "geo",
  meta: {
    slug: "/leistungen/energieberatung/berlin",
    canonical: "/leistungen/energieberatung/berlin",
    ogImage: "/images/energie/hero-energieberatung-v2.jpg",
    title: "Energieberatung Berlin",
    metaDescription:
      "Energieberatung in Berlin vom gelisteten Energie-Effizienz-Experten (KfW + BAFA): iSFP, KfW-Baubegleitung, Energieausweis und Förderberatung zu Festpreisen.",
    primaryKeyword: "energieberater berlin",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Berlin",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/berlin",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Energieberatung in Berlin",
  intro:
    "iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis und Förderberatung zu Festpreisen — vom Architektur- und Ingenieurbüro in Ahrensfelde, direkt am östlichen Stadtrand Berlins.",
  heroTrustLine:
    "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg und angrenzenden Regionen.",

  heroImage: {
    src: "/images/energie/hero-energieberatung-v2.jpg",
    alt: "Frisch saniertes Zweifamilienhaus mit heller Fassade und Photovoltaik in einer Dorfstraße bei Berlin",
  },

  // Leistungs-Zeile im Hero-Bild (LEISTUNGEN-Idiom der Startseite) — 1:1 wie im Pillar
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
    heading: "Nah dran: Energieberatung in Berlin",
    items: [
      {
        name: "region",
        highlight: "Berlin",
        caption: "Vor-Ort-Termin in Berlin in 7–14 Tagen, ein Ansprechpartner bis zum Verwendungsnachweis.",
      },
      {
        name: "zeitstrahl",
        caption: "Typischer Ablauf vom Erstgespräch bis zum fertigen Sanierungsfahrplan.",
      },
    ],
  },
  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Wir bieten Energieberatung in Berlin — Schwerpunkte iSFP (ab 1.500 €), Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und Förderberatung, alles zu Festpreisen. Die Energieberatung übernimmt Feith Formazin, gelisteter Energie-Effizienz-Experte des Bundes (KfW und BAFA, Wohn- und Nichtwohngebäude). Unser Büro liegt in Ahrensfelde am östlichen Stadtrand. Vor-Ort-Termin in 7 bis 14 Tagen.",
  },

  // Team-/Kompetenzblock (Briefing v2) — ersetzt den Einzel-ExpertProof
  team: energieTeam,

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

  introSplit: {
    eyebrow: "Aus Ahrensfelde für ganz Berlin",
    heading: "Wer wir sind und woher wir kommen",
    body: [
      "Dr.-Ing. Formazin & Partner mbB ist ein Architektur- und Ingenieurbüro mit Sitz in Ahrensfelde — direkt am östlichen Stadtrand Berlins. Wir kombinieren Architektur, Tragwerksplanung, Brandschutz und Energieberatung in einem Büro. Was uns von Solo-Energieberatern unterscheidet:",
    ],
    bullets: [
      "**Wir sichern Ihnen die Förderung.** Unser Kern ist die Förder-Seite: iSFP, Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und die Förderberatung selbst. Heizungsfirmen kommen zu uns, damit wir die Förderung für ihre Anlage übernehmen — die Anlage selbst planen wir nicht.",
      "**Wir können die Sanierung mitbegleiten.** Aus dem iSFP wird bei uns die Bauantragsplanung, die Baubegleitung, der Verwendungsnachweis. Ein Ansprechpartner über das gesamte Projekt.",
      "**Büro mit über 30 Jahren Erfahrung an Berliner Bestandsbauten** — Mehrfamilienhäuser, Schulen, Denkmäler. Die fachliche Leitung der Energieberatung liegt bei Oda Formazin, Energieberaterin seit 2015; die Nachweise führt ein gelisteter Energie-Effizienz-Experte (KfW + BAFA).",
      "**Anfahrt** ins Zentrum rund 30 Minuten.",
    ],
    image: {
      src: "/images/energie/planung-beratung-v2.jpg",
      alt: "Heller Schreibtisch mit Grundriss, Unterlagenmappe und Hausschlüsseln bei der Energieberatung",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  featureGrid: {
    heading: "Unsere Energie-Leistungen in Berlin",
    intro:
      "Einzeln buchbar oder als durchgängige Begleitung — von der Beratung bis zum Verwendungsnachweis, alles zu Festpreisen.",
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
    { kind: "heading", text: "Leistungen und Festpreise" },
    {
      kind: "paragraph",
      text: "Unsere Energie-Leistungen bieten wir zu festen Brutto-Preisen an — je nach Gebäudetyp (siehe Tabelle unten). Verbrauchsausweis in rund 3 Werktagen, Bedarfsausweis in 5–10 Werktagen.",
    },
    {
      kind: "paragraph",
      text: "Erläutern wir Ihren iSFP zusätzlich in der Eigentümerversammlung (das bringt der WEG einmalig **bis zu 250 € BAFA-Zuschuss**), berechnen wir dafür **350–450 €** (online/kurz) bzw. **550–850 €** (vor Ort, zzgl. Fahrtkosten).",
    },

    { kind: "heading", text: "Welche Berliner Bezirke wir bedienen" },
    {
      kind: "paragraph",
      text: "Wir arbeiten in **allen Berliner Bezirken**. Geografisch am nächsten liegt der Berliner Nord-Osten (Pankow, Lichtenberg, Marzahn-Hellersdorf); für Aufträge in den West- und Südbezirken gelten dieselben Leistungen — wir machen hier keine Einschränkung auf Großprojekte. Die Anfahrtszeiten je Bezirk finden Sie in der Tabelle unten.",
    },

    { kind: "heading", text: "Was Berliner Hausbesitzer typischerweise fragen" },
    {
      kind: "paragraph",
      text: "Berliner Hausbesitzer fragen uns vor allem nach iSFP-Erstellung für Mehrfamilienhäuser, Energieausweisen für WEG-Eigentum, KfW-Baubegleitung bei Effizienzhaus-Sanierungen und nach der Förderung für einen Heizungstausch in Plattenbauten der 1960er–1980er Jahre. Häufiger Sonderfall: Denkmal-Energieausweis bei Gründerzeit-Mietshäusern, wo Außendämmung wegen der Stuck-Fassade nicht möglich ist und Innendämmung sorgfältig geplant werden muss.",
    },
    {
      kind: "paragraph",
      text: "Drei typische Berliner Sanierungs-Konstellationen, bei denen wir die Förderung und die Begleitung übernehmen:",
    },

    { kind: "subheading", text: "1. Gründerzeit-Mietshaus in Pankow oder Friedrichshain" },
    {
      kind: "list",
      items: [
        "Eigentümer-Gemeinschaft mit 8–24 Wohnungen",
        "Stuck-Fassade verhindert Außendämmung",
        "Wir liefern: iSFP, Förderberatung, Begleitung von Innendämmung und Heizungstausch",
        "Förderung (getrennte Töpfe, keine Addition): BAFA-Energieberatung 50 % des Honorars (gedeckelt 850 € ab 3 WE, +250 € WEG-Zusatz) · für Hüllenmaßnahmen die BEG-EM-Förderung über BAFA (15 %, mit iSFP-Bonus 20 %) · für den Heizungstausch die KfW-458-Grundförderung 30 %",
      ],
    },

    { kind: "subheading", text: "2. Plattenbau-Sanierung in Lichtenberg oder Marzahn" },
    {
      kind: "list",
      items: [
        "WBM- oder HoWoGe-Bestand oder eigentümerseitig",
        "Bauteil-Standardisierung erleichtert die Berechnung",
        "Wir liefern: Energiebilanz, KfW-Baubegleitung, Förder- und Verwendungsnachweis",
        "Förderung: KfW-261-Effizienzhaus-Programm (Sanierung zum Effizienzhaus), Förderhöhe abhängig vom erreichten Niveau",
      ],
    },

    { kind: "subheading", text: "3. Einfamilienhaus in Treptow-Köpenick oder Reinickendorf" },
    {
      kind: "list",
      items: [
        "Baujahr 1960er–1980er, alte Öl- oder Gasheizung",
        "Heizungsfirma plant und baut die neue Anlage — wir binden die Förderung ein und begleiten die Maßnahme",
        "Förderung Heizungstausch (KfW 458): 30 % Grundförderung, dazu mögliche Boni; die Gesamtförderquote ist auf 70 % gedeckelt (bestimmte Selbstnutzer mit Einkommensbonus: bis 80 %)",
      ],
    },

    {
      kind: "note",
      tone: "info",
      text: "**Wichtig zur Förderung beim Heizungstausch (Stand: 21.07.2026):** Die Quote setzt sich aus 30 % Grundförderung + bis zu 16 % Klimageschwindigkeitsbonus + gestaffeltem Einkommensbonus (bis zu 40 %) zusammen, gedeckelt auf insgesamt 70 % — für bestimmte selbstnutzende Eigentümer mit Einkommensbonus auf 80 %. Der **Klimageschwindigkeitsbonus (16 %)** gilt in dieser Höhe nur bei Antrag bis 31.01.2027 (danach halbjährlich −4 Prozentpunkte) und nur für selbstnutzende Eigentümer. Der frühere **Effizienzbonus (5 %)** und der Emissionsminderungszuschlag sind zum 21.07.2026 **entfallen**. Einen iSFP-Bonus gibt es beim Heizungstausch nicht — er gilt nur für BAFA-BEG-EM-Maßnahmen an Hülle und Anlagentechnik.",
    },

    { kind: "heading", text: "Förderung in Berlin" },
    {
      kind: "paragraph",
      text: "Über die bundesweiten Programme hinaus bietet das Land Berlin über die Investitionsbank Berlin (IBB) ergänzende Landesförderungen für energetische Sanierung und Photovoltaik. Programme und Konditionen ändern sich regelmäßig — wir prüfen vor jeder Beauftragung den aktuellen Stand und ob sich eine Landesförderung mit den Bundesmitteln (BAFA/KfW) kombinieren lässt.",
    },
    {
      kind: "paragraph",
      text: "Das Rechenbeispiel unten ist ein **illustratives Muster** (kein realer Auftrag). Es zeigt, wie sich die Förderung bei einer Mehrfamilienhaus-Sanierung aus **getrennten Töpfen** zusammensetzt — die Prozentwerte gehören zu verschiedenen Programmen und dürfen **nicht zu einer Gesamtquote addiert** werden. Die konkreten Beträge, Effizienzklassen und Einsparungen eines Projekts nennen wir im persönlichen Gespräch anhand Ihrer Zahlen — hier veröffentlichen wir keine erfundenen Kennzahlen.",
    },
    {
      kind: "note",
      tone: "warn",
      text: "**Hinweis zur Gesetzeslage:** Das GEG/„Heizungsgesetz“ wird 2026 reformiert. Wir nennen hier bewusst keine festen Stichtage oder Pflicht-Prozentsätze, weil sich die Rechtslage gerade ändert — wir beraten zum jeweils aktuellen Stand.",
    },
  ],

  priceTables: [
    {
      caption: "Leistungen und Festpreise — brutto, je Gebäudetyp",
      columns: [
        { key: "leistung", label: "Leistung" },
        { key: "efh", label: "EFH", align: "right" },
        { key: "zfh", label: "ZFH", align: "right" },
        { key: "mfh", label: "MFH (ab 3 WE)", align: "right" },
      ],
      rows: [
        { leistung: "Sanierungsfahrplan iSFP", efh: "1.500 €", zfh: "1.700 €", mfh: "2.000 €" },
        { leistung: "Energieausweis — Verbrauch", efh: "100 €", zfh: "100 €", mfh: "100 €" },
        { leistung: "Energieausweis — Bedarf", efh: "900 €", zfh: "1.100 €", mfh: "2.300 €" },
        { leistung: "KfW-Baubegleitung (KfW 261)", efh: "3.500 €", zfh: "4.500 €", mfh: "6.500 €" },
        { leistung: "GEG-Nachweis (im Bauantrag)", efh: "900 €", zfh: "1.100 €", mfh: "2.300 €" },
        { leistung: "Förderberatung (eigenes Paket)", efh: "300 €", zfh: "400 €", mfh: "1.000 €" },
      ],
      note: "Nichtwohngebäude: Honorar individuell nach Aufwand. Alle Preise brutto.",
    },
    {
      caption: "Berliner Bezirke — Anfahrt vom Büro und Schwerpunkt-Gebäude",
      columns: [
        { key: "bezirk", label: "Bezirk" },
        { key: "anfahrt", label: "Anfahrt vom Büro" },
        { key: "schwerpunkt", label: "Schwerpunkt-Gebäude" },
      ],
      rows: [
        {
          bezirk: "Berlin Pankow",
          anfahrt: "25 min",
          schwerpunkt: "Altbauten Gründerzeit, sanierungsbedürftige Mehrfamilienhäuser",
        },
        {
          bezirk: "Berlin Lichtenberg",
          anfahrt: "20 min",
          schwerpunkt: "Plattenbauten, sanierte Bestände, WBM/HoWoGe-Wohnungen",
        },
        {
          bezirk: "Berlin Marzahn-Hellersdorf",
          anfahrt: "15 min",
          schwerpunkt: "Plattenbauten, KfW-Effizienzhaus-Sanierungen, Einfamilienhäuser",
        },
        {
          bezirk: "Berlin Mitte",
          anfahrt: "35 min",
          schwerpunkt: "Innenstadt-Altbauten, Denkmal-Quartiere",
        },
        {
          bezirk: "Berlin Friedrichshain-Kreuzberg",
          anfahrt: "30 min",
          schwerpunkt: "Gründerzeit, Mietshäuser mit WEG-Strukturen",
        },
        {
          bezirk: "Berlin Treptow-Köpenick",
          anfahrt: "25 min",
          schwerpunkt: "Gründerzeit, Einfamilienhäuser, Wassergrundstücke",
        },
        {
          bezirk: "Berlin Reinickendorf",
          anfahrt: "40 min",
          schwerpunkt: "gemischte Strukturen, KfW-Sanierungen",
        },
        {
          bezirk: "Charlottenburg-Wilmersdorf / Steglitz-Zehlendorf / Spandau / Tempelhof-Schöneberg / Neukölln",
          anfahrt: "je nach Lage",
          schwerpunkt: "gemischte Strukturen, Bestand und WEG",
        },
      ],
      note: "Für Aufträge in den West- und Südbezirken arbeiten wir genauso — wir machen hier keine Einschränkung auf Großprojekte.",
    },
    {
      caption: "Rechenbeispiel Mehrfamilienhaus — Förderbausteine aus getrennten Töpfen (illustratives Muster)",
      columns: [
        { key: "baustein", label: "Förderbaustein" },
        { key: "programm", label: "Programm" },
        { key: "hoehe", label: "Förderhöhe" },
        { key: "bezug", label: "Bezug" },
      ],
      rows: [
        {
          baustein: "Energieberatung / iSFP",
          programm: "BAFA (EBW)",
          hoehe:
            "50 % des Beratungshonorars, gedeckelt 850 € (ab 3 WE) + einmalig max. 250 € WEG-Zuschuss bei Erläuterung in der Eigentümerversammlung",
          bezug: "aufs Beratungshonorar",
        },
        {
          baustein: "Hüllenmaßnahmen (z. B. Dämmung, Fenster)",
          programm: "BAFA BEG-EM",
          hoehe: "15 %, mit iSFP-Bonus 20 %",
          bezug: "förderfähige Kosten bis 30.000 €/WE·Jahr, mit iSFP bis 60.000 €/WE·Jahr",
        },
        {
          baustein: "Heizungstausch",
          programm: "KfW 458",
          hoehe: "30 % Grundförderung (+ mögliche Boni, Kappung 70 %, bestimmte Selbstnutzer bis 80 %)",
          // WE-Staffel am 2026-07-27 gegen die KfW-Quelle verifiziert (BEG-Stand 21.07.2026).
          bezug:
            "förderfähige Kosten je Wohneinheit gestaffelt (Stand 21.07.2026): 28.000 € für die 1. WE, 15.000 € je WE 2–6, 8.000 € ab der 7. WE",
        },
      ],
      note: "Illustratives Muster, kein realer Auftrag. Die Prozentwerte gehören zu verschiedenen Programmen und dürfen nicht zu einer Gesamtquote addiert werden.",
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
    src: "/images/energie/gebaeudehuelle-v2.jpg",
    alt: "Eingerüstetes Wohnhaus mit frisch montierten Dämmplatten während der energetischen Sanierung",
  },

  cases: {
    heading: "Referenzen aus dem Bestand",
    intro: "Aus unserer Praxis im Bestand — jeweils mit Freigabe der Bauherren.",
    items: [
      {
        name: "Wohnhaus Mehrow",
        jahr: "2014",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben — im Berliner Umland (Ahrensfelde-Nähe).",
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
      q: "Wer macht Energieberatung in Berlin?",
      a: "In Berlin gibt es zahlreiche Berater in der Energie-Effizienz-Experten-Liste des Bundes. Bei Dr.-Ing. Formazin & Partner übernimmt die Energieberatung Feith Formazin — gelisteter Energie-Effizienz-Experte des Bundes (KfW und BAFA, für Wohn- und Nichtwohngebäude), M.Sc. Bauingenieurwesen (HTWK Leipzig). Unser Büro sitzt in Ahrensfelde am östlichen Stadtrand und arbeitet in Berlin Nord-Ost sowie den übrigen Bezirken.",
    },
    {
      q: "Was kostet ein Energieberater in Berlin?",
      a: "Bei uns kostet ein Sanierungsfahrplan (iSFP) 1.500 € für ein Einfamilienhaus, 1.700 € für ein Zweifamilienhaus und 2.000 € ab drei Wohneinheiten (brutto, Festpreis). Die BAFA fördert davon 50 % des Beratungshonorars, gedeckelt auf 650 € (Ein-/Zweifamilienhaus) bzw. 850 € (ab 3 Wohneinheiten); bei Wohnungseigentümergemeinschaften kommen einmalig bis zu 250 € hinzu, wenn der iSFP in der Eigentümerversammlung erläutert wird. Ihr Eigenanteil beim Einfamilienhaus liegt damit bei 850 €. Weitere Festpreise: Verbrauchsausweis 100 €, Bedarfsausweis ab 900 €, KfW-Baubegleitung ab 3.500 €, Förderberatung ab 300 €.",
    },
    {
      q: "Welche Förderung gibt es in Berlin zusätzlich?",
      a: "Über die Bundesprogramme (BAFA/KfW) hinaus bietet das Land Berlin über die IBB ergänzende Landesförderungen, die sich teils mit den Bundesmitteln kombinieren lassen. Programme und Konditionen ändern sich regelmäßig — wir prüfen den aktuellen Stand im Einzelfall.",
    },
    {
      q: "Wie schnell bekomme ich einen Energieberatungs-Termin in Berlin?",
      a: "Bei Formazin & Partner erhalten Sie einen Vor-Ort-Termin innerhalb 7 bis 14 Tagen ab Anfrage — wir sind ein kleines Büro mit konzentrierter Auftrags-Bearbeitung. Die iSFP-Erstellung dauert anschließend einige Wochen, dazu kommt die Bearbeitungszeit der BAFA für die Antragsbestätigung.",
    },
    {
      q: "Mache ich besser einen unabhängigen Energieberater oder einen vom Heizungsbauer?",
      a: "Wir empfehlen einen unabhängigen, nicht herstellergebundenen Energieberater. Wir selbst sind auf die Förder- und Nachweisseite spezialisiert und nicht an Heizungshersteller gebunden — die Anlage plant Ihre Heizungsfirma, wir sichern die Förderung und liefern die Nachweise. Achten Sie auf den Eintrag „nicht herstellergebunden“ in der Energie-Effizienz-Experten-Liste.",
    },
    {
      q: "Welche Berliner Bezirke bedient Formazin & Partner?",
      a: "Wir arbeiten in allen Berliner Bezirken. Geografisch am nächsten liegt der Berliner Nord-Osten (Pankow, Lichtenberg, Marzahn-Hellersdorf), aber wir übernehmen Aufträge auch in den West- und Südbezirken (Spandau, Steglitz-Zehlendorf, Charlottenburg-Wilmersdorf u. a.) — ohne Einschränkung auf Großprojekte.",
    },
    {
      q: "Plant Formazin auch die neue Heizung?",
      a: "Nein. Wir machen keine Heizungsplanung — keine Heizlastberechnung, keine Anlagen-Auslegung, keine Technologie-Empfehlung. Das übernimmt Ihre Heizungsfirma. Unsere Aufgabe ist die Förderung: Wir binden die Förderung für die Maßnahme ein, erstellen die Nachweise und begleiten das Projekt. Heizungsfirmen kommen häufig zu uns, damit wir die Förderung für ihre Anlage übernehmen.",
    },
  ],

  related: {
    heading: "Weiter im Energie-Cluster",
    intro:
      "Zurück zur Übersicht — oder direkt in die Leistung, die zu Ihrem Vorhaben passt.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung — Übersicht",
        description: "Alle fünf Energie-Leistungen, Preise und Förderung im Überblick.",
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
        href: "/leistungen/energieberatung/bernau-bei-berlin",
        label: "Energieberatung Bernau bei Berlin",
        description: "Unsere Energie-Leistungen im Nordosten des Berliner Umlands.",
        kind: "geo",
      },
      {
        href: "/leistungen/energieberatung/ahrensfelde",
        label: "Energieberatung Ahrensfelde",
        description: "Unser Büro-Standort direkt hinter der Stadtgrenze.",
        kind: "geo",
      },
    ],
  },

  cta: {
    heading: "Kostenloses Erstgespräch anfragen",
    text: "Wir nehmen uns 20 Minuten Zeit für ein kostenloses Telefon-Erstgespräch — Sie wissen danach, ob ein iSFP für Sie sinnvoll ist und welche Förderung für Ihr Vorhaben in Frage kommt.",
    buttonLabel: "Erstgespräch anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
  areaServed: [
    "Berlin",
    "Berlin Pankow",
    "Berlin Lichtenberg",
    "Berlin Marzahn-Hellersdorf",
    "Berlin Treptow-Köpenick",
    "Berlin Mitte",
    "Berlin Friedrichshain-Kreuzberg",
    "Ahrensfelde",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "6",
  },
};
