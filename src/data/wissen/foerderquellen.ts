/**
 * Quellenatlas Förderung und Energieberatung (DESIGN.md, 13.09.2026).
 *
 * Eine strukturierte Datei treibt die sichtbare Seite unter
 * /wissen/foerderung-energieberatung-quellen, den CSV-Download, die
 * SVG-Grafik und das JSON-LD. Alle URLs führen zur ausgebenden Stelle,
 * nichts wird gespiegelt.
 *
 * Prüfstand 13.09.2026 (Abruf per HTTP, Titel und Kerninhalt gelesen):
 *  - bafa.de: alle fünf Seiten und beide verlinkten PDFs mit Status 200.
 *  - kfw.de: Produktseiten 458 und 261 sowie beide Dokumentenverzeichnisse
 *    mit Status 200; die Seite 458 nennt die Anpassung zum 21.07.2026.
 *  - gesetze-im-internet.de: /geg/ zeigt das Gesetz seit der Novelle 2026
 *    unter dem Namen Gebäudemodernisierungsgesetz (GModG) mit der Zeile
 *    „Zuletzt geändert durch Art. 1 G v. 23.7.2026 I Nr. 226“.
 *  - energie-effizienz-experten.de: Status 200, Träger auf der Seite genannt.
 *  - energiewechsel.de (BMWE): liefert hinter einem Bot-Schutz für jede URL
 *    Status 200. Existenz und Titel der beiden Seiten sind über den
 *    Suchindex belegt („BMWE | Bundesförderung für effiziente Gebäude (BEG)“).
 *    bmwe.bund.de war beim Prüflauf nicht erreichbar und wird nicht verlinkt.
 * Versionsdaten stehen nur dort, wo sie im Projekt oder auf der amtlichen
 * Seite belegt sind. Sonst wird der Stand ohne Datum beschrieben.
 */

export type DocumentFormat = "pdf" | "html";

export interface QuellenDokument {
  /** Sichtbare Bezeichnung des direkten Dokuments */
  label: string;
  url: string;
  format: DocumentFormat;
}

export interface Themenfeld {
  id: string;
  /** Kapitelnummer, z. B. "01" */
  nummer: string;
  titel: string;
  /** Ein Satz, der das Feld einordnet */
  einleitung: string;
}

export interface Quelle {
  /** Stabile ID für Anker und CSV */
  id: string;
  /** Folionummer, z. B. "Q-01" */
  folio: string;
  themenfeld: string;
  /** Kurze Kennung der ausgebenden Stelle */
  herausgeberKurz: string;
  /** Vollständiger Name der ausgebenden Stelle */
  herausgeber: string;
  /** Offizieller Titel der Seite */
  titel: string;
  url: string;
  dokumentart: string;
  zielgruppe: string;
  thema: string;
  /** Versionsstand, nur mit Datum, wenn belegt */
  stand: string;
  /** Praxishinweis aus dem Büro, ein bis drei kurze Sätze */
  praxishinweis: string;
  dokument?: QuellenDokument;
}

export interface PfadStation {
  nummer: string;
  titel: string;
  text: string;
}

export interface VorhabenZeile {
  anliegen: string;
  /** Folionummern, z. B. ["Q-03", "Q-05"] */
  folios: string[];
  seiteLabel: string;
  seiteHref: string;
}

export interface Dokumentart {
  name: string;
  beschreibung: string;
}

export const FOERDERQUELLEN = {
  path: "/wissen/foerderung-energieberatung-quellen",
  titel: "Quellenatlas Förderung und Energieberatung",
  kennzeile: "Wissen · Energieberatung",
  /** Prüfdatum der Links und Inhalte (ISO) */
  geprueft: "2026-09-13",
  version: "2026-09-13.1",
  csvDatei: "formazin-foerderquellen-energieberatung.csv",
  svgDatei: "formazin-quellenpfad-foerderung.svg",

  pfad: [
    {
      nummer: "1",
      titel: "Frage zum Vorhaben",
      text: "Welches Gebäude, welche Maßnahme, wer ist Eigentümer.",
    },
    {
      nummer: "2",
      titel: "Amtliche Quelle",
      text: "Richtlinie, Programmseite oder Gesetz bei der ausgebenden Stelle.",
    },
    {
      nummer: "3",
      titel: "Fachliche Einordnung",
      text: "Wir ordnen ein, was zu Ihrem Gebäude passt. Die Entscheidung trifft die Stelle, die fördert.",
    },
  ] satisfies PfadStation[],

  dokumentarten: [
    {
      name: "Themendossier",
      beschreibung: "Übersicht des Ministeriums über ein Förderprogramm und seine Teile.",
    },
    {
      name: "Programmseite",
      beschreibung: "Seite der Bewilligungsstelle mit Bedingungen, Merkblättern und Antragsweg.",
    },
    {
      name: "Produktseite",
      beschreibung: "Seite der Förderbank zu einem Kredit oder Zuschuss mit Nummer.",
    },
    {
      name: "Gesetzestext",
      beschreibung: "Konsolidierte Fassung auf Gesetze im Internet mit Änderungsstand.",
    },
    {
      name: "Expertenliste",
      beschreibung: "Amtlich anerkannte Datenbank der gelisteten Energieeffizienz-Experten.",
    },
    {
      name: "Merkblatt (PDF)",
      beschreibung: "Direktes Dokument der ausgebenden Stelle, als PDF gekennzeichnet.",
    },
  ] satisfies Dokumentart[],

  themenfelder: [
    {
      id: "foerderrahmen",
      nummer: "01",
      titel: "Förderrahmen des Bundes",
      einleitung:
        "Die Bundesförderung für effiziente Gebäude (BEG) ist das Dach. Das Ministerium erklärt den Aufbau, BAFA und KfW setzen die Teile um.",
    },
    {
      id: "energieberatung",
      nummer: "02",
      titel: "Energieberatung und Sanierungsfahrplan",
      einleitung:
        "Die geförderte Beratung steht am Anfang. Für Wohngebäude gehört der individuelle Sanierungsfahrplan dazu, für Nichtwohngebäude gibt es ein eigenes Programm.",
    },
    {
      id: "einzelmassnahmen",
      nummer: "03",
      titel: "Einzelmaßnahmen an Hülle und Technik",
      einleitung:
        "Dämmung, Fenster, Anlagentechnik und Heizungsoptimierung laufen beim BAFA als Einzelmaßnahmen. Wohn- und Nichtwohngebäude haben getrennte Seiten.",
    },
    {
      id: "kfw",
      nummer: "04",
      titel: "Heizung und Effizienzhaus bei der KfW",
      einleitung:
        "Der Heizungstausch und die Sanierung zum Effizienzhaus laufen über die KfW. Beim Effizienzhaus ist ein gelisteter Energieeffizienz-Experte Pflicht. Beim Heizungstausch kann auch ein Fachunternehmen die Bestätigungen erstellen.",
    },
    {
      id: "gesetz",
      nummer: "05",
      titel: "Gesetz und Energieausweis",
      einleitung:
        "Das Gebäudegesetz des Bundes regelt Anforderungen an Neubau, Bestand, Heizung und Energieausweis. Die geltende Fassung steht bei Gesetze im Internet.",
    },
    {
      id: "expertenliste",
      nummer: "06",
      titel: "Expertenliste des Bundes",
      einleitung:
        "Viele Programme setzen eine gelistete Person voraus. Die Liste zeigt, wer für welche Gebäudeart eingetragen ist.",
    },
  ] satisfies Themenfeld[],

  quellen: [
    {
      id: "beg-dossier",
      folio: "Q-01",
      themenfeld: "foerderrahmen",
      herausgeberKurz: "BMWE",
      herausgeber: "Bundesministerium für Wirtschaft und Energie, Portal Energiewechsel",
      titel: "Bundesförderung für effiziente Gebäude (BEG)",
      url: "https://www.energiewechsel.de/KAENEF/Redaktion/DE/Dossier/beg.html",
      dokumentart: "Themendossier",
      zielgruppe: "Private Eigentümer, Unternehmen, Kommunen",
      thema: "Aufbau der BEG mit ihren Teilprogrammen",
      stand: "Laufend gepflegte Übersichtsseite ohne festes Versionsdatum",
      praxishinweis:
        "Guter Einstieg, wenn Sie den Zusammenhang zwischen BAFA und KfW verstehen wollen. Die verbindlichen Details stehen in den Richtlinien und bei der Stelle, die den Antrag bearbeitet.",
      dokument: {
        label: "Richtlinien zur BEG (Übersichtsseite)",
        url: "https://www.energiewechsel.de/KAENEF/Redaktion/DE/FAQ/FAQ-Uebersicht/Richtlinien/bundesfoerderung-fuer-effiziente-gebaeude-beg.html",
        format: "html",
      },
    },
    {
      id: "bafa-beg",
      folio: "Q-02",
      themenfeld: "foerderrahmen",
      herausgeberKurz: "BAFA",
      herausgeber: "Bundesamt für Wirtschaft und Ausfuhrkontrolle",
      titel: "Bundesförderung für effiziente Gebäude (BEG) beim BAFA",
      url: "https://www.bafa.de/DE/Energie/Effiziente_Gebaeude/effiziente_gebaeude_node.html",
      dokumentart: "Programmseite",
      zielgruppe: "Alle, die Einzelmaßnahmen beantragen",
      thema: "Zuständigkeit des BAFA innerhalb der BEG",
      stand: "Übersichtsseite ohne festes Versionsdatum",
      praxishinweis:
        "Von hier führen die Wege zu den Einzelmaßnahmen an Wohn- und Nichtwohngebäuden und zur Liste der förderfähigen Wärmeerzeuger.",
    },
    {
      id: "bafa-ebw",
      folio: "Q-03",
      themenfeld: "energieberatung",
      herausgeberKurz: "BAFA",
      herausgeber: "Bundesamt für Wirtschaft und Ausfuhrkontrolle",
      titel: "Bundesförderung der Energieberatung für Wohngebäude (EBW)",
      url: "https://www.bafa.de/DE/Energie/Energieberatung/Energieberatung_Wohngebaeude/energieberatung_wohngebaeude_node.html",
      dokumentart: "Programmseite",
      zielgruppe: "Eigentümer, Mieter mit Zustimmung, Wohnungseigentümergemeinschaften",
      thema: "Geförderte Energieberatung mit individuellem Sanierungsfahrplan (iSFP)",
      stand: "Förderkonditionen in der seit 07.08.2024 geltenden Fassung",
      praxishinweis:
        "Gefördert wird ein Anteil des Beratungshonorars, und zwar nur zusammen mit dem iSFP. Die Seite nennt Fördersatz, Höchstbeträge und den Antragsweg über das BAFA-Portal.",
      dokument: {
        label: "Merkblatt zur Antragstellung im BAFA-Portal",
        url: "https://www.bafa.de/SharedDocs/Downloads/DE/Energie/ebw_merkblatt_antragstellung_bafa-portal.pdf?__blob=publicationFile&v=7",
        format: "pdf",
      },
    },
    {
      id: "bafa-ebn",
      folio: "Q-04",
      themenfeld: "energieberatung",
      herausgeberKurz: "BAFA",
      herausgeber: "Bundesamt für Wirtschaft und Ausfuhrkontrolle",
      titel: "Bundesförderung für Energieberatung für Nichtwohngebäude, Anlagen und Systeme",
      url: "https://www.bafa.de/DE/Energie/Energieberatung/Nichtwohngebaeude_Anlagen_Systeme/nichtwohngebaeude_anlagen_systeme_node.html",
      dokumentart: "Programmseite",
      zielgruppe: "Unternehmen, Kommunen, Freiberufler, gemeinnützige Organisationen",
      thema: "Energieberatung für Nichtwohngebäude, Anlagen und Systeme",
      stand: "Programmseite ohne festes Versionsdatum",
      praxishinweis:
        "Das Programm bündelt laut BAFA frühere Beratungsrichtlinien für Nichtwohngebäude. Für Bestandshalter mit mehreren Gebäuden ist es der Einstieg vor einer Förderstrategie.",
    },
    {
      id: "bafa-sanierung-wg",
      folio: "Q-05",
      themenfeld: "einzelmassnahmen",
      herausgeberKurz: "BAFA",
      herausgeber: "Bundesamt für Wirtschaft und Ausfuhrkontrolle",
      titel: "Sanierung Wohngebäude (BEG Einzelmaßnahmen)",
      url: "https://www.bafa.de/DE/Energie/Effiziente_Gebaeude/Sanierung_Wohngebaeude/sanierung_wohngebaeude_node.html",
      dokumentart: "Programmseite",
      zielgruppe: "Eigentümer von Wohngebäuden im Bestand",
      thema: "Einzelmaßnahmen an Gebäudehülle, Anlagentechnik und Heizungsoptimierung",
      stand: "Programmseite ohne festes Versionsdatum",
      praxishinweis:
        "Hier stehen die Maßnahmengruppen, die technischen Mindestanforderungen und die Fachplanung als förderfähige Leistung. Der iSFP-Bonus knüpft an diese Einzelmaßnahmen an.",
      dokument: {
        label: "Infoblatt zu den förderfähigen Maßnahmen und Leistungen, Version 10.0",
        url: "https://www.bafa.de/SharedDocs/Downloads/DE/Energie/beg_infoblatt_foerderfaehige_kosten.pdf?__blob=publicationFile&v=30",
        format: "pdf",
      },
    },
    {
      id: "bafa-sanierung-nwg",
      folio: "Q-06",
      themenfeld: "einzelmassnahmen",
      herausgeberKurz: "BAFA",
      herausgeber: "Bundesamt für Wirtschaft und Ausfuhrkontrolle",
      titel: "Sanierung Nichtwohngebäude (BEG Einzelmaßnahmen)",
      url: "https://www.bafa.de/DE/Energie/Effiziente_Gebaeude/Sanierung_Nichtwohngebaeude/sanierung_nichtwohngebaeude_node.html",
      dokumentart: "Programmseite",
      zielgruppe: "Unternehmen, Kommunen und andere Eigentümer von Nichtwohngebäuden",
      thema: "Einzelmaßnahmen an Nichtwohngebäuden",
      stand: "Programmseite ohne festes Versionsdatum",
      praxishinweis:
        "Für Nichtwohngebäude führt das BAFA eine eigene Seite mit eigenen Maßnahmengruppen. Bei gemischt genutzten Beständen lohnt der Vergleich mit der Seite für Wohngebäude.",
      dokument: {
        label: "Infoblatt zu den förderfähigen Maßnahmen und Leistungen, Version 10.0",
        url: "https://www.bafa.de/SharedDocs/Downloads/DE/Energie/beg_infoblatt_foerderfaehige_kosten.pdf?__blob=publicationFile&v=30",
        format: "pdf",
      },
    },
    {
      id: "kfw-458",
      folio: "Q-07",
      themenfeld: "kfw",
      herausgeberKurz: "KfW",
      herausgeber: "KfW Bankengruppe",
      titel: "Heizungsförderung für Privatpersonen – Wohngebäude (458)",
      url: "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-Wohngeb%C3%A4ude-(458)/",
      dokumentart: "Produktseite",
      zielgruppe: "Private Eigentümer bestehender Wohngebäude",
      thema: "Zuschuss für den Heizungstausch mit Grundförderung und Boni",
      stand: "Konditionen in der zum 21.07.2026 angepassten Fassung",
      praxishinweis:
        "Für die Bestätigung zum Antrag brauchen Sie einen gelisteten Energieeffizienz-Experten oder ein Fachunternehmen. Der Lieferungs- oder Leistungsvertrag muss die von der KfW verlangte aufschiebende oder auflösende Bedingung enthalten.",
      dokument: {
        label: "Produktunterlagen und Merkblätter zur Heizungsförderung 458",
        url: "https://www.kfw.de/partner/KfW-Partnerportal/Service/Dokumente-zum-Produkt/458/index.jsp",
        format: "html",
      },
    },
    {
      id: "kfw-261",
      folio: "Q-08",
      themenfeld: "kfw",
      herausgeberKurz: "KfW",
      herausgeber: "KfW Bankengruppe",
      titel: "Wohngebäude – Kredit (261)",
      url: "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Bundesf%C3%B6rderung-f%C3%BCr-effiziente-Geb%C3%A4ude-Wohngeb%C3%A4ude-Kredit-(261-262)/",
      dokumentart: "Produktseite",
      zielgruppe: "Private Eigentümer, Unternehmen und gemeinnützige Organisationen",
      thema: "Kredit mit Tilgungszuschuss für die Sanierung zum Effizienzhaus",
      stand: "Konditionen in der zum 21.07.2026 angepassten Fassung",
      praxishinweis:
        "Ein Energieeffizienz-Experte aus der Expertenliste muss Planung und Umsetzung begleiten. Förderfähige Kosten für Fachplanung und Baubegleitung werden nach den Produktregeln berücksichtigt. Das ist der Rahmen unserer KfW-Baubegleitung.",
      dokument: {
        label: "Produktunterlagen und Merkblätter zum Wohngebäude-Kredit 261",
        url: "https://www.kfw.de/partner/KfW-Partnerportal/Service/Dokumente-zum-Produkt/261-262-461/index.jsp",
        format: "html",
      },
    },
    {
      id: "gesetz-gebaeude",
      folio: "Q-09",
      themenfeld: "gesetz",
      herausgeberKurz: "Gesetze im Internet",
      herausgeber: "Bundesministerium der Justiz und für Verbraucherschutz, Gesetze im Internet",
      titel: "Gesetz zur Einsparung von Energie und zur Modernisierung der Wärmeversorgung in Gebäuden (GModG)",
      url: "https://www.gesetze-im-internet.de/geg/",
      dokumentart: "Gesetzestext",
      zielgruppe: "Bauherren, Eigentümer, Planer, Behörden",
      thema: "Gesetzliche Anforderungen an Gebäude, Heizung und Energieausweis",
      stand: "Änderungsstand laut Seite: zuletzt geändert durch Gesetz vom 23.07.2026",
      praxishinweis:
        "Das frühere Gebäudeenergiegesetz (GEG) erscheint auf Gesetze im Internet inzwischen unter dem Namen Gebäudemodernisierungsgesetz. Welche Fassung für Ihr Vorhaben gilt, klären wir im Einzelfall.",
      dokument: {
        label: "§ 80 Ausstellung und Verwendung von Energieausweisen",
        url: "https://www.gesetze-im-internet.de/geg/__80.html",
        format: "html",
      },
    },
    {
      id: "eee-liste",
      folio: "Q-10",
      themenfeld: "expertenliste",
      herausgeberKurz: "EEE",
      herausgeber: "Deutsche Energie-Agentur (dena) für BMWE, BMWSB, BAFA und KfW",
      titel: "Energie-Effizienz-Experten (EEE)",
      url: "https://www.energie-effizienz-experten.de/",
      dokumentart: "Expertenliste",
      zielgruppe: "Alle, die für BAFA oder KfW eine gelistete Person brauchen",
      thema: "Expertenliste für Förderprogramme des Bundes",
      stand: "Laufend gepflegte Datenbank ohne Versionsdatum",
      praxishinweis:
        "Für viele Programme muss die beratende Person hier eingetragen sein. Feith Formazin ist mit der Nummer EB163129 für Wohn- und Nichtwohngebäude gelistet.",
    },
  ] satisfies Quelle[],

  vorhaben: [
    {
      anliegen: "Ich will mein Haus Schritt für Schritt sanieren und brauche einen Plan.",
      folios: ["Q-03", "Q-05"],
      seiteLabel: "Sanierungsfahrplan (iSFP)",
      seiteHref: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
    },
    {
      anliegen: "Ich will die Heizung tauschen und die Förderung sichern.",
      folios: ["Q-07", "Q-01"],
      seiteLabel: "Förderberatung BAFA und KfW",
      seiteHref: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
    },
    {
      anliegen: "Ich saniere zum Effizienzhaus und brauche die Begleitung für die KfW.",
      folios: ["Q-08", "Q-10"],
      seiteLabel: "KfW-Baubegleitung",
      seiteHref: "/leistungen/energieberatung/kfw-baubegleitung",
    },
    {
      anliegen: "Ich verkaufe oder vermiete und brauche einen Energieausweis.",
      folios: ["Q-09"],
      seiteLabel: "Energieausweis",
      seiteHref: "/leistungen/energieberatung/energieausweis",
    },
    {
      anliegen: "Ich baue oder baue um und brauche den Nachweis für den Bauantrag.",
      folios: ["Q-09"],
      seiteLabel: "GEG-Nachweis",
      seiteHref: "/leistungen/energieberatung/gegnachweis",
    },
    {
      anliegen: "Ich verwalte mehrere Gebäude oder ein Nichtwohngebäude.",
      folios: ["Q-04", "Q-06"],
      seiteLabel: "Anfrage für Unternehmen und Bestand",
      seiteHref: "/anfrage/foerderstrategie-bestand",
    },
  ] satisfies VorhabenZeile[],
};

export type Foerderquellen = typeof FOERDERQUELLEN;
