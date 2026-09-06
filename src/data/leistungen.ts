export type Leistung = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  leistungen: string[];
  referenzProjekte: { slug: string; name: string }[];
  detailLink?: { href: string; label: string };
};

export const LEISTUNGEN: Leistung[] = [
  {
    id: "architektur",
    title: "Architektur",
    image: "/images/projekte/grundschule-lindenberg/hero.jpg",
    imageAlt: "Grundschule Lindenberg – Projekt von Formazin & Partner",
    intro: "Architekturbüro für Neubau, Umbau und Sanierung in Berlin und Brandenburg.",
    leistungen: [
      "Objektplanung nach HOAI (Leistungsphasen 1-9)",
      "Entwurfsplanung und Genehmigungsplanung",
      "Bauen im Bestand und Denkmalschutz",
      "Ausführungsplanung und Detaillierung",
      "Bauüberwachung und Objektbetreuung",
      "Umbau, Sanierung und Erweiterung",
    ],
    referenzProjekte: [
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "ortsteilzentrum-ahrensfelde", name: "Ortsteilzentrum Ahrensfelde" },
      { slug: "kreisarchiv-eberswalde", name: "Kreisarchiv Eberswalde" },
    ],
  },
  {
    id: "brandschutz",
    title: "Brandschutz",
    image: "/images/projekte/kreisarchiv-eberswalde/hero.jpg",
    imageAlt: "Kreisarchiv Eberswalde – Projekt von Formazin & Partner",
    intro: "Brandschutzplanung und Brandschutzkonzepte für Gebäude in Berlin und Brandenburg.",
    leistungen: [
      "Brandschutznachweise nach Bauordnung",
      "Vorbeugender baulicher Brandschutz",
      "Flucht- und Rettungswegplanung",
      "Brandschutzkonzepte für Sonderbauten",
      "Behördenabstimmung und Genehmigung",
      "Bestandsaufnahme Brandschutz",
    ],
    referenzProjekte: [
      { slug: "kreisarchiv-eberswalde", name: "Kreisarchiv Eberswalde" },
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "grundschule-schwanenteich", name: "Grundschule Schwanenteich" },
    ],
  },
  {
    id: "tragwerk",
    title: "Tragwerksplanung",
    image: "/images/projekte/ernst-reuter-siedlung/hero.jpg",
    imageAlt: "Ernst-Reuter-Siedlung in Berlin-Mitte – Projekt von Formazin & Partner",
    intro: "Statik und Tragwerksplanung für Neubau und Bestand – Ingenieurbüro Berlin Brandenburg.",
    leistungen: [
      "Statische Berechnungen und Nachweise",
      "Standsicherheitsnachweise nach Bauordnung",
      "Konstruktiver Ingenieurbau (Stahlbeton, Stahl, Holz)",
      "Tragwerksplanung für Umbau und Sanierung",
      "Wirtschaftlichkeitsprüfung Tragwerk",
      "Beratung zu Tragwerksvarianten",
    ],
    referenzProjekte: [
      { slug: "ernst-reuter-siedlung", name: "Ernst-Reuter-Siedlung" },
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "mfh-strausberger-altlandsberg", name: "MFH Strausberger Altlandsberg" },
    ],
  },
  {
    id: "energieberatung",
    title: "Energieberatung",
    image: "/images/projekte/fassadensanierung-frankfurter-allee/hero.jpg",
    imageAlt: "Fassadensanierung Frankfurter Allee – Projekt von Formazin & Partner",
    intro: "Energieberatung in Berlin und Brandenburg — von der Analyse über den Sanierungsfahrplan bis zur gesicherten Förderung.",
    leistungen: [

      "Wärmeschutznachweise nach EnEV/GEG",
      "Energieberatung für Wohngebäude und Nichtwohngebäude",
      "Bauphysikalische Berechnungen",
      "Schallschutznachweis",
      "KfW-Förderung",
      "Individueller Sanierungsfahrplan (iSFP)",
      "KfW-Baubegleitung",
      "Energieausweis (Bedarf und Verbrauch)",
      "GEG-Nachweis für den Bauantrag",
      "Förderberatung BAFA & KfW",
    ],
    referenzProjekte: [
      { slug: "fassadensanierung-frankfurter-allee", name: "Fassadensanierung Frankfurter Allee" },
      { slug: "sanierung-wohnhaus-mehrow", name: "Wohnhaus Mehrow Dorfstraße 20" },
    ],
    detailLink: {
      href: "/leistungen/energieberatung",
      label: "Energieberatung im Detail",
    },
  },
  {
    id: "generalplanung",
    title: "Generalplanung",
    image: "/images/projekte/kreisarchiv-eberswalde/hero.jpg",
    imageAlt: "Kreisarchiv Eberswalde – Projekt von Formazin & Partner",
    intro: "Generalplaner für Bauprojekte – alle Gewerke aus einer Hand koordiniert.",
    leistungen: [
      "Koordination aller Fachplaner",
      "Termin- und Kostencontrolling",
      "Qualitätssicherung auf der Baustelle",
      "Bauherrenvertretung",
      "Vergabe und Ausschreibung",
      "Ein Ansprechpartner für Ihr gesamtes Projekt",
    ],
    referenzProjekte: [
      { slug: "grundschule-lindenberg", name: "Grundschule Lindenberg" },
      { slug: "kreisarchiv-eberswalde", name: "Kreisarchiv Eberswalde" },
      { slug: "kindergarten-ahrensfelde", name: "Kindergarten Ahrensfelde" },
    ],
  },
];
