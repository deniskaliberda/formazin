/**
 * Autoren-/Verantwortlichen-Daten der KERN-Leistungsseiten (E-E-A-T).
 * SINGLE SOURCE für Autor-Boxen + Person-Schema; die Texte der Seiten selbst
 * liegen als Markdown unter content/ und referenzieren Autoren nur per Key.
 *
 * Guardrails (Keyword-Map §4-H / Architektur-Brief §2):
 *  - Karsten: NUR "Statiker / Tragwerksplaner" — "Prüfingenieur/Prüfstatik"
 *    erst nach bestätigter Listung in Brandenburg.
 *  - Oda: Brandschutz-Nachweisberechtigung ab GK4 wird NICHT behauptet,
 *    solange unbestätigt. Kammer = Sachsen-Anhalt Nr. 1785 (nicht BB).
 *  - "30+ Jahre Erfahrung" = das BÜRO (gegr. 1990), nie einzelne Personen.
 */

const SITE = "https://www.formazin-partner.de";

export type KernAutor = {
  key: string;
  name: string;
  rolle: string;
  quali: string;
  foto?: { src: string; alt: string };
  /** stabile Schema-@id; undefined = Büro (LocalBusiness-Knoten) */
  personId?: string;
  jobTitle?: string;
  knowsAbout?: string[];
};

export const KERN_AUTOREN: Record<string, KernAutor> = {
  karsten: {
    key: "karsten",
    name: "Karsten Formazin",
    rolle: "Statik & Tragwerksplanung",
    quali:
      "Statiker und Tragwerksplaner im Büro Dr.-Ing. Formazin & Partner — mit Büro-Erfahrung seit Gründung 1990.",
    personId: `${SITE}/#karsten`,
    jobTitle: "Tragwerksplaner",
    knowsAbout: ["Tragwerksplanung", "Statik", "Standsicherheitsnachweis"],
  },
  oda: {
    key: "oda",
    name: "Oda Formazin",
    rolle: "Brandschutz & Architektur",
    quali:
      "Architektin, Architektenkammer Sachsen-Anhalt (Nr. 1785). Verantwortet Brandschutznachweise und -konzepte, wirkt an der Architektur mit.",
    foto: {
      src: "/images/energie/team/oda-formazin.jpg",
      alt: "Oda Formazin, Architektin bei Dr.-Ing. Formazin & Partner",
    },
    personId: `${SITE}/#oda`,
    jobTitle: "Architektin",
    knowsAbout: ["Brandschutz", "Brandschutzkonzept", "Architektur", "Energieberatung"],
  },
  frauke: {
    key: "frauke",
    name: "Frauke Formazin",
    rolle: "Architektin & Inhaberin",
    quali:
      "Architektin und Inhaberin des Büros. Verantwortet die Architektur-Leistungen und koordiniert die Generalplanung.",
    personId: `${SITE}/#frauke`,
    jobTitle: "Architektin",
    knowsAbout: ["Architektur", "Objektplanung", "Generalplanung"],
  },
  buero: {
    key: "buero",
    name: "Dr.-Ing. Formazin & Partner mbB",
    rolle: "Generalplanung — Koordination Frauke Formazin",
    quali:
      "Die Generalplanung wird vom Büro getragen; Frauke Formazin koordiniert als Inhaberin die beteiligten Fachdisziplinen.",
  },
  "buero-bauphysik": {
    key: "buero-bauphysik",
    name: "Dr.-Ing. Formazin & Partner mbB — Bauphysik",
    rolle: "Wärmeschutz & Bauphysik · Brücke zu Energie/GEG",
    quali:
      "Bauphysikalische Nachweise aus dem Büro; weiterführende Energieberatung und Förderung über die Energie-Linie des Hauses.",
  },
};
