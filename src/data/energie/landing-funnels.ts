import type { FunnelPreset } from "@/components/funnel/EnergieFunnel";
import { energieausweisContent } from "./energieausweis";
import { energieberatungContent } from "./energieberatung";
import { gegnachweisContent } from "./gegnachweis";
import { sanierungsfahrplanContent } from "./sanierungsfahrplan-isfp";
import { energieTeam } from "./team";
import type {
  CaseSection,
  DiagramName,
  FactTableData,
  ProcessStepsData,
  RelatedLink,
  RelatedLinksData,
  TeamSection,
  TrustData,
} from "./types";

export type LandingFunnelConfig = {
  slug: string;
  title: string;
  h1: string;
  subline: string;
  heroTrustLine: string;
  benefits: [string, string, string];
  ctaText: string;
  trust: TrustData;
  team: TeamSection;
  visual:
    | { kind: "diagram"; name: DiagramName; caption?: string }
    | { kind: "facts"; tables: FactTableData[] };
  cases: CaseSection;
  process: ProcessStepsData;
  preset: FunnelPreset;
  related: RelatedLinksData;
  dankeHub: RelatedLink;
};

const trust = energieberatungContent.trust!;
const bestandCases = energieberatungContent.cases!;
const isfpCases = sanierungsfahrplanContent.cases!;
const gegCases = gegnachweisContent.cases!;

const energieHubLink = sanierungsfahrplanContent.related.links.find(
  (link) => link.href === "/leistungen/energieberatung"
)!;
const isfpLink = energieberatungContent.related.links.find(
  (link) => link.href === "/leistungen/energieberatung/sanierungsfahrplan-isfp"
)!;
const foerderberatungLink = energieberatungContent.related.links.find(
  (link) => link.href === "/leistungen/energieberatung/foerderberatung-bafa-kfw"
)!;
const energieausweisLink = gegnachweisContent.related.links.find(
  (link) => link.href === "/leistungen/energieberatung/energieausweis"
)!;
const gegnachweisLink = energieausweisContent.related.links.find(
  (link) => link.href === "/leistungen/energieberatung/gegnachweis"
)!;

export const foerderstrategieBestandLanding: LandingFunnelConfig = {
  slug: "foerderstrategie-bestand",
  title: "Förderstrategie für Ihren Immobilienbestand anfragen",
  h1: "Förderstrategie für Ihren Immobilienbestand",
  subline:
    "Bestandsanalyse über den gesamten Bestand, iSFP je Objekt, Beratung für Nichtwohngebäude, Sanierungspfade mit Priorisierung — und die Nachweise aus einer Hand.",
  heroTrustLine: energieberatungContent.heroTrustLine!,
  benefits: [
    "Energetische Bestandsanalyse über einzelne Gebäude oder den gesamten Bestand",
    "Förderfähige Sanierungspfade mit Priorisierung",
    "Anträge, technische Nachweise und Verwendungsnachweise aus einer Hand",
  ],
  ctaText: "Förderstrategie anfragen",
  trust,
  team: energieTeam,
  visual: {
    kind: "diagram",
    name: "bestand-strategie",
    caption:
      "Unser Weg für Bestandshalter: von der Analyse über priorisierte Sanierungspfade bis zur baulichen Umsetzung — Förderung und Nachweise laufen durchgängig mit.",
  },
  // Feith-Feedback 12.08.2026: die zwei stärksten Bestand-Referenzen
  // (Ernst-Reuter-Siedlung + Fassadensanierung Frankfurter Allee) — identisch
  // mit der Beweisführung auf der Energieberatungs-Hauptseite.
  cases: {
    heading: bestandCases.heading,
    items: bestandCases.items,
  },
  process: {
    heading: "So geht es weiter",
    steps: [
      {
        title: "Anfrage",
        text: "Sie senden uns Ihr Vorhaben über den vorkonfigurierten Anfragebogen.",
      },
      {
        title: "Ersteinschätzung",
        text: "Wir melden uns werktags innerhalb von 1–2 Tagen mit einer ersten Einschätzung.",
      },
      {
        title: "Fahrplan / Termin",
        text: "Wir priorisieren die Gebäude und klären die nächsten Schritte für Ihre Förderstrategie.",
      },
    ],
  },
  preset: {
    entryLp: "foerderstrategie-bestand",
    kundentyp: "gewerblich",
    intent: "foerderstrategie_bestand",
    // Schlanke Gebäudeart-Weiche (Feith-Feedback 12.08.2026) — Teilmenge der
    // zentralen GEBAEUDE-Liste; WEG läuft unter „mfh", öffentliche AG über
    // die Rolle im Kontakt-Schritt.
    gebaeudeChoices: ["mfh", "gewerbe_nwg", "bestandshalter"],
    skipKontext: true,
    dankePath: "/anfrage/foerderstrategie-bestand/danke",
    kontaktHinweis: "Für Portfolios: Anzahl Objekte gern in die Nachricht.",
  },
  related: {
    heading: "Verwandte Leistungen",
    links: [energieHubLink, foerderberatungLink, isfpLink],
  },
  dankeHub: energieHubLink,
};

export const sanierungFoerderungLanding: LandingFunnelConfig = {
  slug: "sanierung-foerderung",
  title: "Sanierung planen, Förderung sichern — Anfrage",
  h1: "Energetische Sanierung planen und maximale Förderung sichern",
  subline:
    "Für Ein- und Zweifamilienhäuser: iSFP und KfW-458-Förderung mit maximal 28.000 € förderfähigen Kosten für die erste Wohneinheit, 16 % Klimageschwindigkeitsbonus und gestaffeltem Einkommensbonus von 40 / 30 / 10 % — Stand 21.07.2026.",
  heroTrustLine: sanierungsfahrplanContent.heroTrustLine!,
  benefits: [
    "iSFP-Festpreis ab 1.500 €",
    "Förderüberblick für BAFA und KfW",
    "Gelisteter Energie-Effizienz-Experte (KfW + BAFA)",
  ],
  ctaText: "Förderung & Sanierung anfragen",
  trust,
  team: energieTeam,
  visual: {
    kind: "diagram",
    name: "kfw-bausteine",
    caption:
      "Die Bausteine der Heizungstausch-Förderung auf einen Blick — inklusive Kappung und der seit 21.07.2026 entfallenen Boni.",
  },
  cases: {
    heading: isfpCases.heading,
    items: isfpCases.items.filter((item) => item.name === "Wohnhaus Mehrow"),
  },
  process: {
    heading: "So geht es weiter",
    steps: [
      {
        title: "Anfrage",
        text: "Sie senden uns Ihr Vorhaben über den vorkonfigurierten Anfragebogen.",
      },
      {
        title: "Ersteinschätzung",
        text: "Wir melden uns werktags innerhalb von 1–2 Tagen mit einer ersten Einschätzung.",
      },
      {
        title: "Fahrplan / Termin",
        text: "Wir klären Aufwand, Honorar und Förderfähigkeit und stimmen den passenden Fahrplan oder Termin ab.",
      },
    ],
  },
  preset: {
    entryLp: "sanierung-foerderung",
    kundentyp: "privat",
    intent: "sanierungsfahrplan_isfp",
    gebaeudetyp: "efh_zfh",
    dankePath: "/anfrage/sanierung-foerderung/danke",
  },
  related: {
    heading: "Verwandte Leistungen",
    links: [isfpLink, foerderberatungLink, energieHubLink],
  },
  dankeHub: isfpLink,
};

export const energieausweisGegLanding: LandingFunnelConfig = {
  slug: "energieausweis-geg",
  title: "Energieausweis oder GEG-Nachweis anfragen",
  h1: "Energieausweis oder GEG-Nachweis vom Ingenieurbüro",
  subline:
    "Für Verkauf, Vermietung oder Bauantrag — vom Büro, das seit den 1990er-Jahren im Bestand plant.",
  heroTrustLine: energieausweisContent.heroTrustLine!,
  benefits: [
    "Bedarfs- oder Verbrauchsausweis",
    "GEG-Nachweis für den Bauantrag",
    "Feste Bruttopreise für Berlin und Brandenburg",
  ],
  ctaText: "Ausweis oder Nachweis anfragen",
  trust,
  team: energieTeam,
  visual: {
    kind: "facts",
    tables: [energieausweisContent.priceTables[1], gegnachweisContent.priceTables[0]],
  },
  cases: {
    heading: gegCases.heading,
    items: gegCases.items.filter((item) => item.name === "Wohnhaus Mehrow"),
  },
  process: {
    heading: "So geht es weiter",
    steps: [
      {
        title: "Anfrage",
        text: "Sie senden uns Ihr Vorhaben über den vorkonfigurierten Anfragebogen.",
      },
      {
        title: "Ersteinschätzung",
        text: "Wir melden uns werktags innerhalb von 1–2 Tagen mit einer ersten Einschätzung.",
      },
      {
        title: "Fahrplan / Termin",
        text: "Wir prüfen, welche Variante für Ihr Gebäude Pflicht ist, und stimmen den Termin ab.",
      },
    ],
  },
  preset: {
    entryLp: "energieausweis-geg",
    anliegenChoices: ["energieausweis", "gegnachweis"],
    skipZeitrahmen: true,
    dankePath: "/anfrage/energieausweis-geg/danke",
  },
  related: {
    heading: "Verwandte Leistungen",
    links: [energieausweisLink, gegnachweisLink, energieHubLink],
  },
  dankeHub: energieausweisLink,
};
