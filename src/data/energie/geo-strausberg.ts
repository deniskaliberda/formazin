import type { EnergiePageContent } from "./types";

/**
 * Geo-Seite /leistungen/energieberatung/strausberg.
 *
 * Portiert aus content-rework/18-geo-strausberg.md (Stand 2026-07-08,
 * Feith-Daten integriert). Preise, Förder-Deckel, Rechenbeispiel-Zahlen und
 * FAQ-Texte sind 1:1 übernommen. Der sichtbare FAQ-Text ist zugleich der
 * FAQPage-Schema-Text (siehe FaqAccordion).
 *
 * Aus dem MD NICHT übernommen (offene "[bitte prüfen]"-Marker — nichts erfinden):
 * - Kommunale Förderprogramme MOL / Stadtwerke Strausberg: unverifiziert.
 *   Anspruch neutralisiert — wir "prüfen, ob weitere Zuschüsse in Frage kommen",
 *   ohne zu behaupten, dass regionale Programme existieren. Das
 *   PV-Speicher-Beispiel wurde entfernt (in "Lokale Besonderheiten" und in der
 *   FAQ "Welche Förderung gibt es in Märkisch-Oderland?").
 * - FAQ "Wer macht Energieberatung in Strausberg?": Satz zur Anzahl gelisteter
 *   EE-Experten in MOL entfernt (Anzahl/Quelle unbelegt).
 * - MFH "Strausberger Straße": genauer Standort unbestätigt — es wird bewusst
 *   kein Ort genannt; die ehrliche Einordnung Straßenname ≠ Stadt Strausberg
 *   ist übernommen.
 * - [PLATZHALTER: Foto-Freigabe Energieberater]: gelöst per Denis-Vorgabe
 *   (expertPhoto = /images/feith-funnel.jpg).
 * - Schema-Adresse ([bitte prüfen: Dorfstraße 1A / 16356]): nicht Teil dieses
 *   Content-Objekts — das LocalBusiness-Schema liegt im Root-Layout.
 * - Der "Hoppegarten-Block" war bereits im MD entfernt (erfundene Ortszuordnung).
 */
export const geoStrausbergContent: EnergiePageContent = {
  kind: "geo",
  meta: {
    slug: "/leistungen/energieberatung/strausberg",
    canonical: "/leistungen/energieberatung/strausberg",
    title: "Energieberatung Strausberg",
    metaDescription:
      "Energieberatung in Strausberg und Märkisch-Oderland: gelisteter EE-Experte (KfW & BAFA). iSFP, Energieausweis, KfW-Baubegleitung, Förderberatung. Anfahrt 25 Minuten von Ahrensfelde.",
    primaryKeyword: "energieberater strausberg",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://formazin-partner.de" },
    { name: "Leistungen", item: "https://formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Strausberg",
      item: "https://formazin-partner.de/leistungen/energieberatung/strausberg",
    },
  ],

  eyebrow: "Energieberatung · Märkisch-Oderland",
  h1: "Energieberatung in Strausberg",
  intro:
    "Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung und Förderberatung für Strausberg und den Landkreis Märkisch-Oderland — rund 25 Minuten von unserem Büro in Ahrensfelde.",

  heroImage: {
    src: "/images/energie/svc-kfw-baubegleitung.jpg",
    alt: "Energetische Sanierung: Gerüst mit Dämmplatten an einer Altbau-Fassade",
  },

  // Leistungs-Zeile im Hero-Bild (LEISTUNGEN-Idiom der Startseite) — 1:1 wie der Pillar
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
    text: "Wir bieten Energieberatung in Strausberg und im Landkreis Märkisch-Oderland: individueller Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung, GEG-Nachweis im Bauantrag und Förderberatung. Unser Berater ist gelisteter Energie-Effizienz-Experte (KfW und BAFA). Anfahrt von Ahrensfelde dauert rund 25 Minuten. Termin in der Regel innerhalb von 7 bis 14 Tagen.",
  },

  introSplit: {
    eyebrow: "Vor Ort in Märkisch-Oderland",
    heading: "Strausberg und Umgebung — sanierungs-aktive Region",
    body: [
      "Strausberg ist mit gut 26.000 Einwohnern Kreisstadt von Märkisch-Oderland. Die Region östlich von Berlin hat einen großen Bestand an Eigenheimen aus den 1970er bis 1990er Jahren — viele davon energetisch überholt.",
      "Die Region profitiert von der schnellen S-Bahn-Anbindung nach Berlin (Linie S5) — das macht sie attraktiv für Familien-Sanierungen mit Berliner Beruf.",
      "Themen, bei denen wir hier regelmäßig die Förderung und die Nachweise übernehmen:",
    ],
    bullets: [
      "**Einfamilienhaus-Bestand** der 1970er–1990er Jahre — Sanierungsfahrplan und Förderung für Dämmung und Heizungstausch",
      "**Reihenhaus-Siedlungen** in Strausberg-Süd und Petershagen",
      "**DDR-Plattenbauten** in Strausberg-Hegermühle und Altlandsberg — iSFP und Förderung über die Eigentümergemeinschaft",
      "**Einzelhof-Bestand** in den umliegenden Dörfern (Ruhlsdorf, Petershagen-Eggersdorf)",
      "**Neubau** in Fredersdorf und Umgebung — KfW-Baubegleitung und GEG-Nachweis im Bauantrag",
    ],
    image: {
      src: "/images/energie/geo-strasse-1.jpg",
      alt: "Straßenzug mit mehrgeschossigen Altbau-Wohnhäusern und Straßenbäumen",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  bodySections: [
    {
      kind: "note",
      tone: "info",
      text: "**Was wir machen — und was nicht:** Wir planen Ihre Heizungsanlage nicht selbst (keine Heizlastberechnung, keine Geräteauswahl). Unsere Stärke ist die Förder- und Nachweis-Seite: Wir erstellen den Sanierungsfahrplan, sichern die Förderung und begleiten den Bau. In der Regel kommen Heizungs- und Handwerksfirmen zu uns, damit wir die Förderung übernehmen und korrekt einreichen.",
    },

    {
      kind: "heading",
      text: "Illustratives Rechenbeispiel: Reihenhaus, Baujahr 1980er",
    },
    {
      kind: "note",
      tone: "warn",
      text: "**Hinweis: Dies ist ein illustratives Rechenbeispiel, kein realer Auftrag.** Die Zahlen zeigen die Förderlogik, ersetzen aber keine Einzelfallprüfung.",
    },
    {
      kind: "paragraph",
      text: "**Gebäude:** Reihenhaus, Baujahr Mitte 1980er, rund 110 m² Wohnfläche (Mittelhaus mit nur einer Außenwand-Front).",
    },
    {
      kind: "paragraph",
      text: "**Geplante Maßnahmen:** Tausch der alten Gasheizung gegen eine Wärmepumpe (Planung durch die ausführende Heizungsfirma; wir übernehmen die Förderung) sowie Dämmung der freistehenden Außenwand und der obersten Geschossdecke.",
    },
    { kind: "subheading", text: "So setzt sich die Förderung zusammen (Beispiel)" },
    {
      kind: "list",
      items: [
        "**Heizungstausch (KfW 458):** 30 % Grundförderung + 20 % Klimageschwindigkeitsbonus + 5 % Effizienzbonus = **55 %** — förderfähige Kosten gedeckelt auf max. 30.000 € (1. Wohneinheit)",
        "**Dämmung (BAFA BEG-EM, mit iSFP):** 15 % Grundförderung + 5 % iSFP-Bonus = **20 %** — förderfähige Kosten bis 60.000 €/WE·Jahr mit iSFP",
      ],
    },
    { kind: "paragraph", text: "Hinweise zur Logik:" },
    {
      kind: "list",
      items: [
        "Beim **Heizungstausch (KfW 458)** gibt es **keinen iSFP-Bonus**. Die 55 % ergeben sich aus Grundförderung, Klimageschwindigkeitsbonus und Effizienzbonus.",
        "Der **Klimageschwindigkeitsbonus (+20 %)** gilt nur bei Antrag bis 31.12.2028 (danach Degression, ab 2029 nur noch 17 %) und nur für selbstnutzende Eigentümer.",
        "Der **Effizienzbonus (+5 %)** gilt bei Wärmepumpen mit natürlichem Kältemittel oder mit Wärmequelle Wasser, Erdreich oder Abwasser.",
        "Der **iSFP-Bonus (+5 Prozentpunkte)** gilt ausschließlich für BAFA-BEG-EM-Maßnahmen an Gebäudehülle, Anlagentechnik und Heizungsoptimierung — nicht für den Heizungstausch.",
        "Die **Gesamtförderung beim Heizungstausch ist auf 70 %** der förderfähigen Kosten gedeckelt.",
      ],
    },
    {
      kind: "paragraph",
      text: "Welche Maßnahmen-Reihenfolge wirtschaftlich sinnvoll ist und wie viel sich konkret fördern lässt, klären wir im Erstgespräch und im Sanierungsfahrplan.",
    },

    { kind: "heading", text: "Lokale Besonderheiten Märkisch-Oderland" },
    { kind: "paragraph", text: "Zwei Punkte, die für Sanierungen hier relevant sind:" },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Zweischalige Mauerwerk-Konstruktion** ist in Strausberger Einfamilienhäusern häufig — sie eröffnet die Kerndämmung als oft wirtschaftliche Alternative zur Außendämmung. Die Förderung dafür sichern wir über die BAFA-BEG-EM.",
        "**Förderkonditionen ändern sich häufig:** Neben den bundesweiten BAFA- und KfW-Programmen prüfen wir für Ihr Vorhaben, ob weitere Zuschüsse in Frage kommen — jeweils zum aktuellen Stand bei Antragstellung.",
      ],
    },

    { kind: "heading", text: "Honorare für Strausberg und Umgebung" },
    {
      kind: "paragraph",
      text: "Wir arbeiten mit **festen Bruttopreisen** je Gebäudetyp — keine Überraschungen.",
    },
    {
      kind: "note",
      tone: "info",
      text: "**Zur BAFA-Förderung des iSFP:** Die BAFA fördert 50 % des förderfähigen Beratungshonorars, gedeckelt auf 650 € bei Ein- und Zweifamilienhäusern bzw. 850 € bei Wohngebäuden ab drei Wohneinheiten. Beim Einfamilienhaus bleibt so ein Eigenanteil von rund 850 €. Zusätzlich gibt es einmalig bis zu 250 € pro Wohnungseigentümergemeinschaft, wenn der iSFP in einer Eigentümerversammlung erläutert wird.",
    },
  ],

  priceTables: [
    {
      caption: "Honorare für Strausberg und Umgebung — feste Bruttopreise je Gebäudetyp",
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
        {
          leistung: "KfW-Baubegleitung (KfW 261)",
          efh: "3.500 €",
          zfh: "4.500 €",
          mfh: "6.500 €",
        },
        { leistung: "GEG-Nachweis (im Bauantrag)", efh: "900 €", zfh: "1.100 €", mfh: "2.300 €" },
        {
          leistung: "Förderberatung (eigenes Paket)",
          efh: "300 €",
          zfh: "400 €",
          mfh: "1.000 €",
        },
      ],
      note: "Nichtwohngebäude: Honorar individuell nach Aufwand. Alle Preise brutto. Bearbeitung Verbrauchsausweis ca. 3 Werktage, Bedarfsausweis 5–10 Werktage.",
    },
    {
      caption: "Welche Orte wir in Märkisch-Oderland bedienen",
      columns: [
        { key: "ort", label: "Ort" },
        { key: "anfahrt", label: "Anfahrt vom Büro", align: "right" },
        { key: "themen", label: "Typische Themen" },
      ],
      rows: [
        {
          ort: "Strausberg",
          anfahrt: "25 min",
          themen: "EFH 1970er–1990er, Plattenbau-Bestand, S-Bahn-Pendler-Region",
        },
        { ort: "Altlandsberg", anfahrt: "18 min", themen: "EFH, Reihenhäuser, kleinere MFH" },
        { ort: "Petershagen", anfahrt: "25 min", themen: "EFH, Reihenhäuser, S-Bahn-Pendler" },
        { ort: "Rüdersdorf", anfahrt: "30 min", themen: "EFH, Industrie-Konversion" },
        {
          ort: "Fredersdorf-Vogelsdorf",
          anfahrt: "22 min",
          themen: "EFH-Neubau, Sanierungen",
        },
      ],
      note: "Anfahrt ist im Honorar enthalten. Bei mehreren Terminen am gleichen Tag bündeln wir die Strecken. Wir kommen im Umkreis von rund 50 km um unser Büro in Ahrensfelde.",
    },
  ],

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
    heading: "Referenzen aus dem Bestand",
    intro:
      "Das Büro Dr.-Ing. Formazin & Partner arbeitet seit den 1990er Jahren im Bestand — diese über 30 Jahre Erfahrung gelten dem Büro und dem Bauen im Bestand, nicht der Person. Eine einschlägige Referenz aus unserem Bestandssegment ist ein Mehrfamilienhaus an der Strausberger Straße (2005). Zur sauberen Einordnung: „Strausberger Straße“ ist der Straßenname dieses Projekts — nicht zu verwechseln mit der Stadt Strausberg. Wir führen den Case als thematisch passende MFH-Bestandsreferenz, nicht als Objekt in Strausberg. Ehrlich eingeordnet: Unsere belastbaren Referenzen liegen überwiegend im Mehrfamilien- und Bestandssegment — für reine Einfamilienhaus-Cases haben wir aktuell kaum freigegebene Referenzen.",
    items: [
      {
        name: "Mehrfamilienhaus Strausberger Straße",
        jahr: "2005",
        umfang:
          "Kernsanierung mit energetischer Sanierung der Gebäudehülle, ohne denkmalrechtliche Auflagen — genau die Art von MFH-Sanierung im Bestand, wie sie auch in Strausberg und Umgebung regelmäßig ansteht.",
        denkmal: false,
      },
      {
        name: "Wohnhaus Mehrow",
        jahr: "2014",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben.",
        denkmal: true,
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
      q: "Wer macht Energieberatung in Strausberg?",
      a: "Dr.-Ing. Formazin & Partner kommt aus Ahrensfelde, rund 25 Autominuten vor Strausberg. Unser Energieberater Feith Formazin ist gelisteter EE-Experte (KfW und BAFA). Wir arbeiten regelmäßig in Strausberg, Altlandsberg, Petershagen und Rüdersdorf. Anfahrt im Honorar enthalten, Termin in der Regel in 7 bis 14 Tagen.",
    },
    {
      q: "Was kostet ein Energieberater in Strausberg?",
      a: "Der individuelle Sanierungsfahrplan (iSFP) kostet brutto 1.500 € für ein Einfamilienhaus, 1.700 € für ein Zweifamilienhaus und 2.000 € ab drei Wohneinheiten. Über die BAFA-Energieberatung werden 50 % des förderfähigen Beratungshonorars bezuschusst, gedeckelt auf max. 650 Euro bei Ein- und Zweifamilienhäusern bzw. max. 850 Euro bei Wohngebäuden ab drei Wohneinheiten. Bei Eigentümergemeinschaften kommt einmalig ein Zuschuss von max. 250 Euro pro WEG hinzu, wenn der Sanierungsfahrplan in einer Eigentümerversammlung erläutert wird. Eine separate Förder-Obergrenze von 5.000 Euro gibt es seit dem 7. August 2024 nicht mehr.",
    },
    {
      q: "Welche Förderung gibt es in Märkisch-Oderland?",
      a: "Im Vordergrund stehen die bundesweiten Programme: BAFA-Energieberatung (iSFP), BAFA-BEG-EM für Gebäudehülle und Anlagentechnik sowie die KfW-Heizungsförderung (Programm 458). Die Konditionen ändern sich häufig — wir prüfen den aktuellen Stand für Ihr Vorhaben und reichen die Anträge fristgerecht ein.",
    },
    {
      q: "Übernehmen Sie auch die Förderung beim Heizungstausch?",
      a: "Ja. Wir planen die Heizungsanlage nicht selbst — das übernimmt die ausführende Heizungsfirma. Unsere Aufgabe ist die Förderung: Wir prüfen, welche Bausteine (Grundförderung, Klimageschwindigkeitsbonus, Effizienzbonus, Einkommensbonus) für Ihr Vorhaben erreichbar sind, und reichen die Anträge bei der KfW ein. In der Regel kommen Heizungsfirmen genau dafür zu uns.",
    },
    {
      q: "Lohnt sich eine Sanierung jetzt im Bestand?",
      a: "Ob sich eine Sanierung lohnt, hängt vom Gebäude, den geplanten Maßnahmen und der erreichbaren Förderung ab. Ein konkretes zeitliches Argument: Der Klimageschwindigkeitsbonus von 20 % beim Heizungstausch gilt nur bei Antrag bis zum 31.12.2028 (danach sinkt er stufenweise) und nur für selbstnutzende Eigentümer. Das GEG/Heizungsgesetz wird 2026 reformiert — wir beraten zum jeweils aktuellen Stand und sichern Ihnen die Förderung, die zum Zeitpunkt Ihres Antrags gilt.",
    },
    {
      q: "Wie schnell bekomme ich einen Vor-Ort-Termin in Strausberg?",
      a: "In der Regel innerhalb von 7 bis 14 Tagen ab Anfrage. Wir bündeln Strausberger Termine in unserer Wochenplanung, sodass mehrere Aufträge im gleichen Quartier am gleichen Tag besucht werden können. Bei akuten Fällen — etwa einer defekten Heizung oder einem anstehenden Verkauf — ist auf Anfrage eine kürzere Reaktionszeit möglich.",
    },
  ],

  related: {
    heading: "Weiterlesen im Energie-Cluster",
    intro:
      "Vertiefen Sie die einzelnen Leistungen — oder lesen Sie, wie wir in den Nachbarregionen arbeiten.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Übersicht Energieberatung",
        description: "Alle fünf Energie-Leistungen, Preise und Förderlogik im Detail.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description: "Schritt-für-Schritt-Plan mit BAFA-Förderung.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
        label: "BAFA-/KfW-Förderberatung",
        description: "Antragsstellung, Auszahlung, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/bernau-bei-berlin",
        label: "Energieberatung Bernau bei Berlin",
        description: "Sanierungsfahrplan, Energieausweis und Förderung in Bernau und Umgebung.",
        kind: "geo",
      },
    ],
  },

  cta: {
    heading: "Kostenloses Erstgespräch anfragen",
    text: "Das Erstgespräch dauert rund 20 Minuten am Telefon und ist kostenlos. Wir klären, ob ein iSFP für Sie sinnvoll ist und welche Förderungen für Ihr Strausberger Gebäude konkret in Frage kommen.",
    buttonLabel: "Erstgespräch anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
  areaServed: [
    "Strausberg",
    "Märkisch-Oderland",
    "Altlandsberg",
    "Petershagen",
    "Rüdersdorf",
    "Fredersdorf-Vogelsdorf",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "5",
  },
};
