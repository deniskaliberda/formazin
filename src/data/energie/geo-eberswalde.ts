import type { EnergiePageContent } from "./types";

/**
 * Geo-Seite /leistungen/energieberatung/eberswalde.
 *
 * Portiert aus content-rework/17-geo-eberswalde.md (Stand 2026-07-08,
 * Feith-Daten integriert). Preise, iSFP-Eigenanteile (850/1.050/1.150),
 * Anfahrtszeiten und FAQ-Texte sind 1:1 übernommen. Der sichtbare FAQ-Text
 * ist zugleich der FAQPage-Schema-Text (siehe FaqAccordion).
 *
 * Ausgelassene [bitte prüfen]-/[PLATZHALTER]-Ansprüche aus der Content-Quelle
 * (bewusst NICHT gerendert, nichts erfunden):
 * - Denkmal-Quote Eberswalde ("18 %" war erfunden) → nur qualitative
 *   Formulierung "überdurchschnittlich hoher Anteil", keine Prozentzahl.
 * - Anzahl gelisteter EE-Experten im Barnim ("etwa 50" unbelegt) → FAQ sagt
 *   qualitativ "mehrere".
 * - Stadtwerke-Fernwärme-Konditionen → nicht genannt; nur der allgemeine
 *   Hinweis, dass wir eine Anschluss-Möglichkeit gegen die GEG-Anforderungen
 *   prüfen.
 * - Reale Barnim-/Eberswalde-Förderprogramme (unverifiziert) → keine lokalen
 *   Programme behauptet; FAQ nennt nur die Bundesprogramme (BEG-EM, KfW 458).
 * - Telefon/E-Mail/Adresse-Platzhalter → kein Kontakt-Block gerendert;
 *   Kontaktweg ist der Funnel-CTA, echte Daten stehen im Footer/LocalBusiness.
 * - Kreisarchiv-Eberswalde-Case war erfunden und bleibt draußen; Cases sind
 *   die drei echten Referenzen (nicht in Eberswalde selbst — ehrlich benannt).
 */
export const geoEberswaldeContent: EnergiePageContent = {
  kind: "geo",
  meta: {
    slug: "/leistungen/energieberatung/eberswalde",
    canonical: "/leistungen/energieberatung/eberswalde",
    title: "Energieberatung Eberswalde",
    metaDescription:
      "Energieberatung in Eberswalde durch gelisteten Energie-Effizienz-Experten des Bundes (EE-Experten-Liste, KfW und BAFA). iSFP ab 1.500 €, KfW-Baubegleitung, Energieausweis, Förderberatung. Anfahrt rund 35 Minuten von Ahrensfelde.",
    primaryKeyword: "energieberater eberswalde",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Eberswalde",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/eberswalde",
    },
  ],

  eyebrow: "Energieberatung · Eberswalde",
  h1: "Energieberatung in Eberswalde",
  intro:
    "Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung und Förderberatung in der Kreisstadt des Barnim — rund 35 Minuten von unserem Büro in Ahrensfelde.",

  heroImage: {
    src: "/images/energie/geo-strasse-2.jpg",
    alt: "Ruhige Wohnstraße mit sanierten Mehrfamilienhäusern und Baumreihe",
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

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Wir bieten Energieberatung in Eberswalde — der Kreisstadt des Landkreises Barnim mit gut 40.000 Einwohnern. Die Anfahrt von unserem Büro in Ahrensfelde dauert rund 35 Minuten. Unser Schwerpunkt: individueller Sanierungsfahrplan (iSFP), Energieausweis, KfW-Baubegleitung und Förderberatung. Den Energieberatungs-Aufwand fördert die BAFA mit 50 % des Honorars (gedeckelt 650 € für Ein-/Zweifamilienhäuser).",
  },

  introSplit: {
    eyebrow: "Was wir leisten — und was nicht",
    heading: "Förder- und Nachweisseite statt Anlagentechnik",
    body: [
      "Unsere Stärke ist die **Förder- und Nachweisseite** der Sanierung, nicht die Anlagentechnik. Konkret begleiten wir Sie in Eberswalde bei fünf Leistungen — vom Sanierungsfahrplan bis zum Verwendungsnachweis gegenüber BAFA und KfW.",
      "**Heizungsplanung gehört nicht dazu.** Wir planen keine Heizungsanlage und empfehlen kein konkretes Heizgerät. In der Praxis ist es umgekehrt: Heizungsfirmen kommen zu uns, **damit wir die Förderung übernehmen**. Die Anlage selbst planen und installieren die Fachfirmen — wir sorgen dafür, dass die Förderung sauber beantragt und ausgeschöpft wird.",
    ],
    image: {
      src: "/images/energie/planung-beratung.jpg",
      alt: "Schreibtisch mit Bauzeichnungen und Plänen während einer Energieberatung",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  featureGrid: {
    heading: "Fünf Leistungen in Eberswalde",
    intro:
      "Einzeln buchbar oder als durchgängige Begleitung — von der Beratung bis zum Verwendungsnachweis.",
    items: [
      {
        icon: "FileText",
        title: "Individueller Sanierungsfahrplan (iSFP)",
        text: "Der geförderte Fahrplan, der Maßnahmen, Reihenfolge und Förderhebel zusammenführt.",
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
      },
      {
        icon: "Gauge",
        title: "Energieausweis",
        text: "Bedarfs- oder Verbrauchsausweis, je nach Gebäude und Pflicht.",
        href: "/leistungen/energieberatung/energieausweis",
      },
      {
        icon: "ClipboardCheck",
        title: "KfW-Baubegleitung",
        text: "Als gelisteter Energie-Effizienz-Experte für die KfW-Effizienzhaus-Programme.",
        href: "/leistungen/energieberatung/kfw-baubegleitung",
      },
      {
        icon: "FileCheck",
        title: "GEG-Nachweis im Bauantrag",
        text: "Der energetische Nachweis, der für die Genehmigung gebraucht wird.",
        href: "/leistungen/energieberatung/gegnachweis",
      },
      {
        icon: "HandCoins",
        title: "Förderberatung",
        text: "Wir sichern Ihnen die passende BAFA-/KfW-Förderung und binden sie in den Ablauf ein.",
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
      },
    ],
  },

  bodySections: [
    { kind: "heading", text: "Eberswalde — Stadt mit historischem Bestand" },
    {
      kind: "paragraph",
      text: "Eberswalde hat einen für seine Größe überdurchschnittlich hohen Anteil an Gründerzeit- und denkmalgeschützten Gebäuden. Die Stadt am Finowkanal war im 19. Jahrhundert Industriestandort und hat einen entsprechend reichen Altbau-Bestand. Sanierungsthemen, die uns hier regelmäßig begegnen:",
    },
    {
      kind: "list",
      items: [
        "**Gründerzeit-Mehrfamilienhäuser** mit Stuck-Fassade — Innendämmung statt Außendämmung",
        "**DDR-Großwohnsiedlungen** im Brandenburgischen Viertel — energetische Modernisierung im Bestand",
        "**Einfamilienhaus-Bestand** in Finow und Spechthausen",
        "**Industrie-Konversion** ehemaliger Gewerbeflächen in Wohnnutzung",
        "**Forst- und Hochschulstandort** — Nichtwohngebäude mit besonderen Anforderungen",
      ],
    },
    {
      kind: "paragraph",
      text: "Unser Büro bringt langjährige Erfahrung im **denkmalgeschützten Gründerzeit-Bestand** mit. Für die Energieberatung ist **Feith Formazin** verantwortlich — gelisteter Energie-Effizienz-Experte des Bundes (KfW und BAFA, Wohn- und Nichtwohngebäude).",
    },

    { kind: "heading", text: "Lokale Besonderheiten Eberswalde" },
    {
      kind: "paragraph",
      text: "Drei Punkte, die für Sanierungen in Eberswalde wichtig sind:",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Umfangreicher Denkmalbestand:** Viele Eberswalder Wohngebäude sind denkmalrechtlich geschützt — als Einzeldenkmal oder im Ensembleschutz. Wir prüfen bei jedem Vor-Ort-Termin den Denkmal-Status, weil er Bauteil-Optionen und steuerliche Behandlung verändert.",
        "**Fernwärme in Teilbereichen:** Die Eberswalder Stadtwerke versorgen einige Quartiere mit Fernwärme. Bei einer Anschluss-Möglichkeit prüfen wir, ob der Anschluss die **jeweils geltenden GEG-Anforderungen** an die Wärmeversorgung erfüllt. Hinweis: Das GEG (Heizungsgesetz) wird 2026 reformiert — wir beraten zum jeweils aktuellen Rechtsstand.",
        "**Hochschulstandort:** Die HNE Eberswalde forscht zu nachhaltigem Bauen. Wir verfolgen den fachlichen Austausch, insbesondere zu Holz-Konstruktionen und kapillaraktiven Innendämmungen.",
      ],
    },

    { kind: "heading", text: "Rechenbeispiel: Förderung beim iSFP" },
    {
      kind: "note",
      tone: "info",
      text: "Rechenbeispiel zur Logik der Energieberatungs-Förderung mit unseren Festpreisen — die konkreten Förderquoten für Ihr Gebäude rechnen wir im Erstgespräch nachvollziehbar durch.",
    },
    {
      kind: "paragraph",
      text: "So funktioniert die **Förderung der Energieberatung selbst** (nicht der Bau-Maßnahmen): Die BAFA fördert **50 % des förderfähigen Beratungshonorars**, gedeckelt auf **max. 650 €** (Ein-/Zweifamilienhaus) bzw. **max. 850 €** ab drei Wohneinheiten. Wird der iSFP in einer Eigentümerversammlung erläutert, kommt einmalig max. 250 € WEG-Zuschuss hinzu. Bei Nichtwohngebäuden rechnen wir das Honorar individuell nach Aufwand. Die Zahlen je Gebäudetyp stehen in der Tabelle unten.",
    },
    {
      kind: "paragraph",
      text: "Davon getrennt zu betrachten sind die **Förderungen für die eigentlichen Sanierungs-Maßnahmen** (BAFA-BEG-EM für Gebäudehülle/Anlagentechnik bzw. KfW 458 für den Heizungstausch). Ein wesentlicher Hebel: **Liegt ein iSFP vor**, steigt der iSFP-Bonus für BAFA-BEG-EM-Maßnahmen um 5 Prozentpunkte (von 15 % auf 20 %) — dieser Bonus gilt allerdings nur für die BAFA-Hüllen-/Anlagentechnik-Maßnahmen, nicht für den Heizungstausch. Außerdem hebt der iSFP den förderfähigen Höchstbetrag bei diesen BAFA-Maßnahmen von **30.000 € auf 60.000 € pro Wohneinheit und Jahr**.",
    },
    {
      kind: "paragraph",
      text: "Welche konkreten Förderquoten und Eigenanteile sich für Ihr Gebäude ergeben, rechnen wir im Erstgespräch nachvollziehbar aus realen Förderbausteinen durch.",
    },
  ],

  priceTables: [
    {
      caption: "Sanierungsfahrplan iSFP – Honorar, BAFA-Zuschuss und Ihr Eigenanteil",
      columns: [
        { key: "typ", label: "Gebäudetyp" },
        { key: "honorar", label: "iSFP-Honorar (brutto)", align: "right" },
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
    {
      caption: "Welche Orte wir um Eberswalde bedienen",
      columns: [
        { key: "ort", label: "Ort" },
        { key: "anfahrt", label: "Anfahrt vom Büro", align: "right" },
        { key: "themen", label: "Typische Themen" },
      ],
      rows: [
        {
          ort: "Eberswalde Innenstadt",
          anfahrt: "ca. 35 min",
          themen: "Gründerzeit, Denkmal-Bestand",
        },
        {
          ort: "Eberswalde Finow",
          anfahrt: "ca. 35 min",
          themen: "Großwohnsiedlung, EFH 1970er–1990er",
        },
        {
          ort: "Spechthausen",
          anfahrt: "ca. 35 min",
          themen: "EFH, einzelne Industrie-Konversion",
        },
        {
          ort: "Britz",
          anfahrt: "ca. 30 min",
          themen: "EFH, Reihenhäuser",
        },
        {
          ort: "Niederfinow / Hohenfinow",
          anfahrt: "ca. 40 min",
          themen: "EFH, Nichtwohngebäude (Wassersport, Schiffshebewerk-Region)",
        },
      ],
      note: "Die Anfahrt nach Eberswalde ist ohne Aufpreis — wir liegen im gleichen Landkreis und bündeln Termine. (Kfz-Anfahrt wird, soweit relevant, mit 0,55 €/km abgerechnet.)",
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

  cases: {
    heading: "Erfahrung im vergleichbaren Bestand",
    intro:
      "Reale Sanierungsprojekte aus unserer Arbeit. Diese Objekte liegen nicht in Eberswalde selbst, zeigen aber die Erfahrung im vergleichbaren Bestand — wenn Sie ein ähnliches Gebäude in Eberswalde besitzen, profitieren Sie davon.",
    items: [
      {
        name: "Wohnhaus Mehrow",
        jahr: "2014",
        umfang:
          "Umfassende Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben.",
        denkmal: true,
      },
      {
        name: "Mehrfamilienhaus Strausberger Straße",
        jahr: "2005",
        umfang: "Kernsanierung mit Sanierung der Gebäudehülle.",
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
      q: "Wer macht Energieberatung in Eberswalde?",
      a: "Im Landkreis Barnim sind mehrere als Energie-Effizienz-Experten gelistete Berater tätig. Wir bei Dr.-Ing. Formazin & Partner kommen aus Ahrensfelde und arbeiten regelmäßig in Eberswalde — mit Erfahrung im Denkmal- und Gründerzeit-Bestand. Anfahrt rund 35 Minuten. Vor-Ort-Termin in der Regel innerhalb von 7 bis 14 Tagen.",
    },
    {
      q: "Was kostet ein Energieberater in Eberswalde?",
      a: "Ein Sanierungsfahrplan (iSFP) kostet bei uns 1.500 € für ein Einfamilienhaus, 1.700 € für ein Zweifamilienhaus und 2.000 € ab drei Wohneinheiten (brutto); bei Nichtwohngebäuden rechnen wir individuell nach Aufwand. Die Energieberatung selbst fördert die BAFA mit 50 % des förderfähigen Honorars — gedeckelt auf max. 650 € für Ein-/Zweifamilienhäuser bzw. max. 850 € für Wohngebäude ab drei Wohneinheiten (einmalig +250 € WEG-Zuschuss bei Erläuterung in der Eigentümerversammlung). Beim Einfamilienhaus liegt Ihr Eigenanteil damit bei 850 €. Bei Denkmal-Sanierungen können zusätzlich steuerliche Abschreibungs-Möglichkeiten greifen, die wir abstrakt erläutern (siehe unten).",
    },
    {
      q: "Was ist bei Denkmal-Sanierungen in Eberswalde besonders?",
      a: "Bei denkmalgeschützten Gebäuden greifen Sonderregeln: Außendämmung ist bei Stuck-Fassaden meist nicht möglich, eine Innendämmung sollte kapillaraktiv ausgeführt werden, Fenster müssen denkmalrechtlich konform sein. Steuerlich gibt es erhöhte Absetzungen für Modernisierungsaufwand an Baudenkmälern. Dabei ist zu unterscheiden: Bei Selbstnutzung sind nach § 10f EStG bis zu 90 % der begünstigten Aufwendungen über 10 Jahre wie Sonderausgaben abziehbar; bei Vermietung sind nach § 7i EStG bis zu 100 % über 12 Jahre (8 × 9 % + 4 × 7 %) absetzbar. Voraussetzung ist u. a. eine Bescheinigung der zuständigen Denkmalbehörde und die Abstimmung der Maßnahmen mit der Behörde vor Baubeginn. Diese Angaben sind allgemeiner Natur und ersetzen keine steuerliche Beratung — die konkrete Anwendung im Einzelfall klären Sie bitte mit Ihrem Steuerberater.",
    },
    {
      q: "Welche Förderung gibt es in Eberswalde zusätzlich?",
      a: "Auf Bundesebene kombinieren wir für Sie die BAFA- und KfW-Programme (BEG-EM für Gebäudehülle/Anlagentechnik, KfW 458 für den Heizungstausch). Welche Programme für Ihr Eberswalder Gebäude in Frage kommen, prüfen wir im Einzelfall.",
    },
    {
      q: "Wie binden Sie meine neue Heizung in die Förderung ein?",
      a: "Wir planen die Heizung nicht selbst — das übernehmen Ihre Fachfirmen. Unsere Rolle: Wir prüfen, welche Förderbausteine für Ihren Fall in Frage kommen, und stellen die Förderung. Für den Heizungstausch läuft die Förderung über die KfW (Programm 458) mit einer Grundförderung von 30 % plus möglichen Bonus-Bausteinen, gedeckelt auf insgesamt max. 70 %. Da das GEG/Heizungsgesetz 2026 reformiert wird, beraten wir Sie immer zum jeweils aktuell geltenden Stand.",
    },
    {
      q: "Wie schnell bekomme ich einen Vor-Ort-Termin in Eberswalde?",
      a: "In der Regel innerhalb von 7 bis 14 Tagen ab Anfrage. Wir bündeln Termine in Eberswalde, sodass mehrere Aufträge im gleichen Quartier am selben Tag besucht werden können — praktisch für Eigentümergemeinschaften und Nachbar-Sanierungen.",
    },
  ],

  related: {
    heading: "Weiterlesen im Energie-Cluster",
    intro:
      "Zurück zur Übersicht — oder direkt in die Leistungen, die in Eberswalde am häufigsten gefragt sind.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung — die Übersicht",
        description: "Alle fünf Energie-Leistungen, Preise und Ablauf im Detail.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description: "Schritt-für-Schritt-Plan mit BAFA-Förderung.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/energieausweis",
        label: "Energieausweis",
        description: "Bedarfs- oder Verbrauchsausweis für Wohn- und Gewerbeimmobilien.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/bernau-bei-berlin",
        label: "Energieberatung Bernau bei Berlin",
        description: "Unser Einsatzgebiet im südlichen Barnim.",
        kind: "geo",
      },
    ],
  },

  cta: {
    heading: "Erstgespräch für Ihr Eberswalder Gebäude",
    text: "Wir nehmen uns 20 Minuten Zeit für ein kostenloses Telefon-Erstgespräch — Sie wissen danach, ob ein iSFP für Sie sinnvoll ist und welche Förder-Optionen für Ihr Eberswalder Gebäude in Frage kommen.",
    buttonLabel: "Erstgespräch anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Energieberatung",
  areaServed: [
    "Eberswalde",
    "Finow",
    "Spechthausen",
    "Britz",
    "Niederfinow",
    "Hohenfinow",
    "Landkreis Barnim",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "100",
    highPrice: "6500",
    offerCount: "5",
  },
};
