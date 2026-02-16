export interface ProjektDetails {
  bauherr: string;
  leistungen: string[];
  bgf: string;
  baukosten?: string;
  fertigstellung: string;
}

export interface Projekt {
  slug: string;
  name: string;
  kategorie: string;
  typ: string;
  bauherr: string;
  image: string;
  ort: string;
  jahr: string;
  beschreibung: string;
  details: ProjektDetails;
  galerie: string[];
}

export const PROJEKTE: Projekt[] = [
  {
    slug: "grundschule-lindenberg",
    name: "Grundschule Lindenberg",
    kategorie: "Öffentliche Hand",
    typ: "Neubau",
    bauherr: "Öffentlich",
    image: "/images/projekte/grundschule-lindenberg/hero.jpg",
    ort: "Ahrensfelde OT Lindenberg",
    jahr: "2018 – 2022",
    beschreibung:
      "Im Rahmen dieses Projekts wurde eine moderne Grundschule mit integrierter Mensa, Hortbereich und Sporthalle geplant. Das pädagogische Konzept spiegelt sich in der Architektur wider: Großzügige Compartments bilden jeweils einen gemeinschaftlichen Mittelpunkt, um den sich die Klassenräume anordnen. So entstehen offene, flexible Lernlandschaften, die sowohl individuelles Arbeiten als auch Austausch und Gemeinschaft fördern.",
    details: {
      bauherr: "Gemeinde Ahrensfelde",
      leistungen: [
        "Objektplanung LP 1-8",
        "Tragwerksplanung LP 1-6",
        "Brandschutzkonzept LP 1-5, 6",
      ],
      bgf: "10.056 m²",
      fertigstellung: "2018 – 2022",
    },
    galerie: [
      "/images/projekte/grundschule-lindenberg/hero.jpg",
      "/images/projekte/grundschule-lindenberg/galerie-1.jpg",
      "/images/projekte/grundschule-lindenberg/galerie-2.jpg",
      "/images/projekte/grundschule-lindenberg/galerie-3.jpg",
      "/images/projekte/grundschule-lindenberg/galerie-4.jpg",
      "/images/projekte/grundschule-lindenberg/galerie-5.jpg",
      "/images/projekte/grundschule-lindenberg/galerie-6.jpg",
    ],
  },
  {
    slug: "kreisarchiv-eberswalde",
    name: "Kreisarchiv Eberswalde",
    kategorie: "Öffentliche Hand",
    typ: "Neubau",
    bauherr: "Öffentlich",
    image: "/images/projekte/kreisarchiv-eberswalde/hero.jpg",
    ort: "Eberswalde",
    jahr: "2018 – 2022",
    beschreibung:
      "Im Rahmen der Maßnahme wurde ein ehemaliges Autohaus umgebaut, um darin neue Archivflächen unterzubringen. Ergänzend entstanden Anbauten, in denen neben Büroräumen auch ein moderner Lesesaal integriert wurde.",
    details: {
      bauherr: "Landkreis Barnim",
      leistungen: [
        "Objektplanung LP 1-8",
        "Tragwerksplanung LP 1-6",
        "Brandschutzkonzept LP 1-5, 6",
      ],
      bgf: "3.137 m²",
      fertigstellung: "2018 – 2022",
    },
    galerie: [
      "/images/projekte/kreisarchiv-eberswalde/hero.jpg",
      "/images/projekte/kreisarchiv-eberswalde/galerie-1.jpg",
      "/images/projekte/kreisarchiv-eberswalde/galerie-2.jpg",
    ],
  },
  {
    slug: "ernst-reuter-siedlung",
    name: "Ernst-Reuter-Siedlung",
    kategorie: "Privat",
    typ: "Sanierung",
    bauherr: "Privat",
    image: "/images/projekte/ernst-reuter-siedlung/hero.jpg",
    ort: "Berlin-Reinickendorf",
    jahr: "2021 – 2027",
    beschreibung:
      "Die Ernst-Reuter-Siedlung ist eine denkmalgeschützte Wohnanlage im Berliner Bezirk Reinickendorf aus den 1950er-Jahren. Seit 2021 ist die Dr.-Ing. Formazin & Partner mbB mit der Planung der Sanierung einzelner Gebäude beauftragt. Die Sanierung wird auf 6 Bauabschnitte aufgeteilt und umfasst die Erneuerung der Außenfassaden, der Dächer sowie der Treppenhäuser – jeweils im bewohnten Zustand.",
    details: {
      bauherr: "BWV",
      leistungen: [
        "Objektplanung LP 1-9",
        "Brandschutzkonzept",
        "Energieberatung",
      ],
      bgf: "16.000 m²",
      fertigstellung: "2021 – 2027",
    },
    galerie: [
      "/images/projekte/ernst-reuter-siedlung/hero.jpg",
      "/images/projekte/ernst-reuter-siedlung/galerie-1.jpg",
      "/images/projekte/ernst-reuter-siedlung/galerie-2.jpg",
    ],
  },
  {
    slug: "getreidemuehle-mehrow",
    name: "Getreidemühle Mehrow",
    kategorie: "Privat",
    typ: "Neubau",
    bauherr: "Privat",
    image: "/images/projekte/getreidemuehle-mehrow/hero.jpg",
    ort: "Ahrensfelde OT Mehrow",
    jahr: "2018 – 2021",
    beschreibung:
      "Im Rahmen einer anspruchsvollen Umnutzung wurde eine ehemalige Getreidemühle in ein modernes Wohnhaus mit 16 Wohneinheiten umgewandelt. Der industrielle Charakter des Bestandsgebäudes blieb dabei bewusst erhalten und wurde mit zeitgemäßem Wohnkomfort kombiniert. Zusätzlich wurde das angrenzende Wohnhaus umgebaut und in das Gesamtkonzept integriert.",
    details: {
      bauherr: "Privat",
      leistungen: ["Objektplanung LP 1-8"],
      bgf: "1.520 m²",
      fertigstellung: "2018 – 2021",
    },
    galerie: [
      "/images/projekte/getreidemuehle-mehrow/hero.jpg",
      "/images/projekte/getreidemuehle-mehrow/galerie-1.jpg",
      "/images/projekte/getreidemuehle-mehrow/galerie-2.jpg",
    ],
  },
  {
    slug: "aufzugsanbau-feldberger-ring",
    name: "Aufzugsanbau Feldberger Ring",
    kategorie: "Privat",
    typ: "Sanierung",
    bauherr: "Privat",
    image: "/images/projekte/aufzugsanbau-feldberger-ring/hero.jpg",
    ort: "Berlin-Marzahn",
    jahr: "2015 – 2016",
    beschreibung:
      "Im Rahmen eines umfassenden Sanierungsprojekts wurden acht 5- bis 6-geschossige Wohngebäude aus den 1980er Jahren instandgesetzt. Die in typischer WBS-70-Plattenbauweise errichteten Gebäude erhielten eine neue Fassadengestaltung. Ein zentrales Element der Maßnahme war die Nachrüstung von insgesamt 29 Aufzugsanlagen für barrierefreien Zugang zu allen Wohneinheiten.",
    details: {
      bauherr: "WG Wuhletal",
      leistungen: ["Objektplanung LP 1-8"],
      bgf: "4.641 m²",
      fertigstellung: "2015 – 2016",
    },
    galerie: [
      "/images/projekte/aufzugsanbau-feldberger-ring/hero.jpg",
      "/images/projekte/aufzugsanbau-feldberger-ring/galerie-1.jpg",
      "/images/projekte/aufzugsanbau-feldberger-ring/galerie-2.jpg",
    ],
  },
  {
    slug: "fassadensanierung-frankfurter-allee",
    name: "Fassadensanierung Frankfurter Allee",
    kategorie: "Öffentliche Hand",
    typ: "Sanierung",
    bauherr: "Öffentlich",
    image: "/images/projekte/fassadensanierung-frankfurter-allee/hero.jpg",
    ort: "Berlin-Lichtenberg",
    jahr: "2013 – 2014",
    beschreibung:
      "Bei dem Projekt handelt es sich um die energetische Sanierung der Fassade eines bestehenden Mehrfamilienhauses in Plattenbauweise. Ziel der Maßnahme war es, die energetische Effizienz des Gebäudes zu verbessern, den Wohnkomfort zu erhöhen und den langfristigen Erhalt der Bausubstanz zu sichern.",
    details: {
      bauherr: "HOWOGE",
      leistungen: ["Objektplanung LP 1-9"],
      bgf: "4.413 m²",
      fertigstellung: "2013 – 2014",
    },
    galerie: [
      "/images/projekte/fassadensanierung-frankfurter-allee/hero.jpg",
      "/images/projekte/fassadensanierung-frankfurter-allee/galerie-1.jpg",
      "/images/projekte/fassadensanierung-frankfurter-allee/galerie-2.jpg",
    ],
  },
  {
    slug: "ortsteilzentrum-ahrensfelde",
    name: "Ortsteilzentrum Ahrensfelde",
    kategorie: "Öffentliche Hand",
    typ: "Neubau",
    bauherr: "Öffentlich",
    image: "/images/projekte/ortsteilzentrum-ahrensfelde/hero.jpg",
    ort: "Ahrensfelde",
    jahr: "2011 – 2013",
    beschreibung:
      "Für die Gemeinde Ahrensfelde plante F&P ein zukunftsorientiertes Multifunktionsgebäude im Herzen des Dorfkerns. Das Gebäude beherbergt einen Veranstaltungssaal, eine Bibliothek, eine Seniorenbegegnungsstätte, Vereinsräume sowie Büroräume. Durch die intelligente Kombination unterschiedlichster Nutzungen entstand ein identitätsstiftender Ort.",
    details: {
      bauherr: "Gemeinde Ahrensfelde",
      leistungen: ["Objektplanung LP 1-8"],
      bgf: "2.072 m²",
      fertigstellung: "2011 – 2013",
    },
    galerie: [
      "/images/projekte/ortsteilzentrum-ahrensfelde/hero.jpg",
      "/images/projekte/ortsteilzentrum-ahrensfelde/galerie-1.jpg",
    ],
  },
  {
    slug: "grundschule-schwanenteich",
    name: "Grundschule Schwanenteich",
    kategorie: "Öffentliche Hand",
    typ: "Sanierung",
    bauherr: "Öffentlich",
    image: "/images/projekte/grundschule-schwanenteich/hero.jpg",
    ort: "Neuenhagen",
    jahr: "2001 – 2011",
    beschreibung:
      "Das denkmalgeschützte Gutshaus, das seit 1951 als Grundschule genutzt wird, wurde umfassend saniert. Im Fokus standen energetische Verbesserungen sowie bauliche Instandsetzungen, die die Funktionalität, Sicherheit und Nutzbarkeit des Gebäudes gewährleisten. Mit großem Respekt vor der historischen Substanz wurde das Gutshaus als Bildungsstandort erhalten.",
    details: {
      bauherr: "Gemeinde Neuenhagen",
      leistungen: ["Objektplanung LP 1-9"],
      bgf: "1.436 m²",
      fertigstellung: "2001 – 2011",
    },
    galerie: [
      "/images/projekte/grundschule-schwanenteich/hero.jpg",
      "/images/projekte/grundschule-schwanenteich/galerie-1.jpg",
    ],
  },
  {
    slug: "balkonsanierung-oderberger",
    name: "Balkonsanierung Oderberger Straße",
    kategorie: "Privat",
    typ: "Sanierung",
    bauherr: "Privat",
    image: "/images/projekte/balkonsanierung-oderberger/hero.jpg",
    ort: "Berlin-Prenzlauer Berg",
    jahr: "2008 – 2010",
    beschreibung:
      "Bei dem Bestandsgebäude handelt es sich um ein Mehrfamilienhaus mit integrierter Gastronomienutzung im Erdgeschoss. Im Zuge der Baumaßnahme wurde die Fassade umfassend instandgesetzt und die bestehenden Balkone saniert. Darüber hinaus konnten drei neue, straßenseitige Balkone ergänzt sowie eine großzügige Dachterrasse auf der Hofseite realisiert werden.",
    details: {
      bauherr: "Privat",
      leistungen: ["Objektplanung LP 1-9"],
      bgf: "2.581 m²",
      fertigstellung: "2008 – 2010",
    },
    galerie: [
      "/images/projekte/balkonsanierung-oderberger/hero.jpg",
      "/images/projekte/balkonsanierung-oderberger/galerie-1.jpg",
      "/images/projekte/balkonsanierung-oderberger/galerie-2.jpg",
    ],
  },
  {
    slug: "vereinsheim-ahrensfelde",
    name: "Vereinsheim Sport- und Schützenverein",
    kategorie: "Sonderbau",
    typ: "Sanierung",
    bauherr: "Privat",
    image: "/images/projekte/vereinsheim-ahrensfelde/hero.jpg",
    ort: "Ahrensfelde",
    jahr: "2010",
    beschreibung:
      "Das bestehende Vereinsheim, genutzt vom lokalen Sport- und Schützenverein, wurde umfassend saniert und erweitert. Im Fokus der Planung stand eine wirtschaftliche und konstruktiv einfache Lösung zur Schaffung zusätzlicher Nutzfläche. Durch eine gezielte Dachaufstockung konnte das Gebäudevolumen um rund 50 % vergrößert werden – ohne die vorhandene Bausubstanz grundlegend zu verändern.",
    details: {
      bauherr: "Sport- und Schützenverein Ahrensfelde",
      leistungen: [
        "Objektplanung LP 1-9",
        "Tragwerksplanung",
        "Bauüberwachung",
      ],
      bgf: "751 m²",
      fertigstellung: "2010",
    },
    galerie: [
      "/images/projekte/vereinsheim-ahrensfelde/hero.jpg",
      "/images/projekte/vereinsheim-ahrensfelde/galerie-1.jpg",
      "/images/projekte/vereinsheim-ahrensfelde/galerie-2.jpg",
    ],
  },
  {
    slug: "mfh-strausberger-altlandsberg",
    name: "Mehrfamilienhaus Strausberger Straße",
    kategorie: "Privat",
    typ: "Sanierung",
    bauherr: "Privat",
    image: "/images/projekte/mfh-strausberger-altlandsberg/hero.jpg",
    ort: "Altlandsberg",
    jahr: "2005 – 2007",
    beschreibung:
      "Das Mehrfamilienhaus in Altlandsberg wurde im Rahmen einer umfassenden Kernsanierung modernisiert und dabei in seiner ursprünglichen Formensprache gestärkt. Ein zentrales Anliegen war die Rekonstruktion des historischen Turms, der einst das Gebäude prägte. Im rückwärtigen Bereich konnte ein ehemaliges Wirtschaftshaus in hochwertigen Wohnraum umgewandelt werden.",
    details: {
      bauherr: "Privat",
      leistungen: ["Objektplanung LP 1-9"],
      bgf: "978 m²",
      fertigstellung: "2005 – 2007",
    },
    galerie: [
      "/images/projekte/mfh-strausberger-altlandsberg/hero.jpg",
      "/images/projekte/mfh-strausberger-altlandsberg/galerie-1.jpg",
      "/images/projekte/mfh-strausberger-altlandsberg/galerie-2.jpg",
    ],
  },
  {
    slug: "kindergarten-ahrensfelde",
    name: "Kindertagesstätte Ahrensfelde",
    kategorie: "Öffentliche Hand",
    typ: "Neubau",
    bauherr: "Öffentlich",
    image: "/images/projekte/kindergarten-ahrensfelde/hero.jpg",
    ort: "Ahrensfelde",
    jahr: "1999",
    beschreibung:
      "Da die bestehende Kindertagesstätte den steigenden Anforderungen nicht mehr gerecht wurde, wurde ein moderner Neubau realisiert. Die neue Einrichtung bietet ein großzügiges Raumangebot und wurde für 80 Kinder konzipiert – durch die flexible Planung ist die Betreuung von bis zu 134 Kindern möglich. Ein besonderer Fokus lag auf vielfältigen Differenzierungsräumen für Musik, Bewegung und Rückzug.",
    details: {
      bauherr: "Gemeinde Ahrensfelde",
      leistungen: ["Objektplanung LP 1-9"],
      bgf: "879 m²",
      fertigstellung: "1999",
    },
    galerie: [
      "/images/projekte/kindergarten-ahrensfelde/hero.jpg",
      "/images/projekte/kindergarten-ahrensfelde/galerie-1.jpg",
    ],
  },
];

export function getProjektBySlug(slug: string): Projekt | undefined {
  return PROJEKTE.find((p) => p.slug === slug);
}
