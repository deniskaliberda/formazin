import type { EnergiePageContent } from "./types";

/**
 * Spoke-Seite /leistungen/energieberatung/foerderberatung-bafa-kfw.
 *
 * Portiert aus content-rework/10-foerderberatung-bafa-kfw.md (Stand 2026-07-08,
 * Feith-Daten integriert). Zahlen, Preise (300/400/1.000 € Förderberatung,
 * WEG-Erläuterung 350–450 / 550–850 €), Fördersätze (50 %, 650/850 € Deckel,
 * KfW-458-Bausteine 30/20/5/30, Kappung 70 %, iSFP-Bonus 15→20 %, 30k→60k)
 * und FAQ-Texte sind 1:1 übernommen. Der sichtbare FAQ-Text ist zugleich der
 * FAQPage-Schema-Text.
 *
 * WEGGELASSENE / NEUTRALISIERTE MARKER aus dem MD (nichts erfunden):
 * - "[bitte prüfen: keine pauschalen Beträge ...]" (kommunale Programme):
 *   Höhe-Spalte neutral als "regional unterschiedlich — wird im Einzelfall
 *   geprüft", keine Beträge genannt.
 * - "[bitte prüfen: aktuelle BAFA-Fördersätze/-Deckel für die NWG-Energie-
 *   beratung]": NWG-Beratung nur als Angebot mit individuellem Honorar
 *   genannt, keine Prozentsätze/Beträge.
 * - "[bitte prüfen: ob im konkreten Programm eine Antragsbegleitung anteilig
 *   förderfähig ist]": Anspruch weggelassen; nur die neutrale Aussage
 *   "in der Regel kein eigener Fördertatbestand" übernommen.
 * - Review-Note zur 5-WE-Grenze inkl. Staffelbeträge (30.000/15.000/8.000 €
 *   je WE): nicht übernommen (stand nur innerhalb des Prüf-Blocks).
 * - "[PLATZHALTER: Foto-Freigabe Energieberater]": durch Denis-Vorgabe
 *   expertPhoto /images/feith-funnel.jpg ersetzt.
 * - "[Telefonnummer / E-Mail]": Kontaktweg ist der Funnel-CTA; keine
 *   Platzhalter-Kontaktdaten gerendert.
 * - "/wissen/"-Link (Sanierungsfahrplan Kosten 2026): weggelassen, Bereich
 *   existiert erst in Phase 4.
 */
export const foerderberatungContent: EnergiePageContent = {
  kind: "service",
  meta: {
    slug: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
    canonical: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
    title: "BAFA & KfW-Förderung 2026 — Sanierung gefördert",
    metaDescription:
      "Förder-Überblick für Hausbesitzer 2026: BAFA-Energieberatung 50 %, BEG-Einzelmaßnahmen, iSFP-Bonus, KfW-Tilgungszuschuss. Wir sichern Ihre Förderung mit Antragstellung und Verwendungsnachweis.",
    primaryKeyword: "kfw förderung energieberater",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "Förderberatung BAFA & KfW",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/foerderberatung-bafa-kfw",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "Förderberatung BAFA & KfW 2026 — wir sichern Ihre Förderung",
  intro:
    "Antragstellung vor Beauftragung, Begleitung der Auszahlung und Verwendungsnachweis gegenüber BAFA und KfW — als eigenes Paket zum Festpreis oder im Rahmen der Baubegleitung bereits enthalten.",

  heroImage: {
    src: "/images/energie/svc-foerderberatung.jpg",
    alt: "Ordnerstapel mit Antragsunterlagen und Füllfederhalter auf einem Schreibtisch",
  },

  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Für energetische Sanierungen gibt es 2026 zwei Hauptwege: Die BAFA fördert die Energieberatung inklusive Sanierungsfahrplan (iSFP) mit 50 Prozent, gedeckelt bei 650 bis 850 Euro. Über BEG-Einzelmaßnahmen und KfW-Programme werden die Sanierungsschritte selbst gefördert. Wir prüfen die Förderfähigkeit, stellen den Antrag vor Beauftragung und sichern den Verwendungsnachweis. Unsere Förderberatung als eigenes Paket kostet 300 bis 1.000 Euro brutto.",
  },

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

  introSplit: {
    eyebrow: "Klare Rollenverteilung",
    heading: "Was wir tun — und was nicht",
    body: [
      "Wir sind Energie-Effizienz-Experten für die Förderprogramme des Bundes (KfW und BAFA) und bringen Ihre Förderung sauber durch Antragstellung und Nachweis.",
      "Wir planen **keine** Heizung — keine Heizlastberechnung, keine Geräteempfehlung, keine Wirtschaftlichkeitsurteile zu einzelnen Anlagen. Wenn Ihre Heizungsfirma die Förderung braucht, binden wir diese Förderung ein. Die anlagentechnische Planung bleibt bei Ihrem Fachbetrieb.",
    ],
    image: {
      src: "/images/energie/planung-beratung.jpg",
      alt: "Schreibtisch mit Bauzeichnungen und Plänen während einer Förderberatung",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  bodySections: [
    { kind: "heading", text: "Welche Förderungen es 2026 gibt — der Überblick" },
    {
      kind: "paragraph",
      text: "Die Bundesprogramme (BAFA + KfW) lassen sich über das BEG-System koordinieren. Welche Reihenfolge und Kombination für Ihr Vorhaben passt, prüfen wir im Einzelfall. Kommunale Förderungen sind teils zusätzlich möglich — diese hängen vom Standort ab und werden konkret geprüft, nicht pauschal versprochen.",
    },
    {
      kind: "note",
      tone: "info",
      text: "Nichtwohngebäude-Energieberatung bieten wir ebenfalls an — das Honorar richtet sich individuell nach Aufwand.",
    },

    { kind: "heading", text: "Wie die Förderhöhe beim Heizungstausch zustande kommt" },
    {
      kind: "paragraph",
      text: "Die Förderung für den Heizungstausch (KfW 458) setzt sich aus Bausteinen zusammen: 30 Prozent Grundförderung, plus möglicher Klimageschwindigkeitsbonus, plus Effizienzbonus, plus Einkommensbonus. Die Summe ist auf maximal 70 Prozent der förderfähigen Kosten gedeckelt. Der iSFP-Bonus zählt hier **nicht** mit — er gilt nur für BAFA-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik, nicht für den Heizungstausch.",
    },
    {
      kind: "paragraph",
      text: "**Wichtig:** Die Bausteine 30/20/5/30 sind keine fixen Stufen, sondern Voraussetzungen, die im Einzelfall erfüllt sein müssen oder nicht. Klimageschwindigkeits- und Einkommensbonus gelten nur für **selbstnutzende** Eigentümer; bei Vermietung entfallen sie. Der Klimageschwindigkeitsbonus ist bis zum 31.12.2028 befristet, danach sinkt er schrittweise — das ist ein realer Grund, einen geplanten Tausch nicht endlos aufzuschieben, aber kein gesetzlicher Zwang zu einem bestimmten Stichtag.",
    },
    {
      kind: "note",
      tone: "info",
      text: "**Der iSFP-Bonus gehört in die andere Förderschiene.** Bei **BAFA-Einzelmaßnahmen** (Dämmung, Fenster, Lüftung, Heizungsoptimierung) hebt ein gültiger iSFP den Fördersatz um 5 Prozentpunkte (von 15 auf 20 Prozent) — **und** den förderfähigen Höchstbetrag von 30.000 auf 60.000 Euro pro Wohneinheit und Jahr. Beim Heizungstausch über KfW 458 gibt es diesen Bonus nicht.",
    },

    { kind: "heading", text: "Was die geförderte Energieberatung kostet" },
    {
      kind: "paragraph",
      text: "Die geförderte Energieberatung für Wohngebäude (EBW) gibt es nur **inklusive Sanierungsfahrplan (iSFP)** — einen separaten Fördertopf für eine isolierte Beratung gibt es seit dem 07.08.2024 nicht mehr. Die Förderung beträgt 50 Prozent des Beratungshonorars, gedeckelt bei 650 Euro (Ein- und Zweifamilienhaus) bzw. 850 Euro (ab drei Wohneinheiten). Bei einer Wohnungseigentümergemeinschaft kommt einmalig ein Zuschuss von bis zu 250 Euro hinzu, wenn der iSFP in der Eigentümerversammlung erläutert wird — diese Erläuterung übernehmen wir auf Wunsch mit.",
    },

    { kind: "heading", text: "Unser Honorar für die Förderberatung" },
    {
      kind: "paragraph",
      text: "Die Förderberatung bieten wir als **eigenes Paket** an: Wir wählen die passenden Programme aus, stellen die Anträge bei BAFA und KfW vor Beauftragung, begleiten die Auszahlung und erstellen den Verwendungsnachweis.",
    },
    {
      kind: "note",
      tone: "info",
      text: "**Hinweis zur Förderfähigkeit.** Gefördert wird die Energieberatung inklusive iSFP (BAFA, 50 %), nicht die reine Förder-Antragstellung. Das Honorar für die Förderberatung selbst ist daher in der Regel kein eigener Fördertatbestand.",
    },

    { kind: "heading", text: "Wer welche Förderung erhält" },
    {
      kind: "paragraph",
      text: "Antragsberechtigt für BEG-Förderung sind private und vermietende Eigentümer von Wohngebäuden, Wohnungseigentümergemeinschaften, Erbengemeinschaften und Unternehmen. Klimageschwindigkeits- und Einkommensbonus beim Heizungstausch gelten nur für selbstnutzende Eigentümer. Die BAFA-Energieberatung kann jeder Eigentümer beantragen; Mieter beantragen nicht selbst, können aber den Eigentümer beauftragen.",
    },
    { kind: "subheading", text: "Antragsberechtigt für BEG-Sanierungsförderung" },
    {
      kind: "list",
      items: [
        "Eigentümer von selbstgenutzten Ein- und Zweifamilienhäusern",
        "vermietende Eigentümer von Wohngebäuden",
        "Wohnungseigentümergemeinschaften (WEG)",
        "Erbengemeinschaften und Eigentümergemeinschaften",
        "Unternehmen für vermietete Wohngebäude",
      ],
    },
    { kind: "subheading", text: "Antragsberechtigt für BAFA-Energieberatung" },
    {
      kind: "list",
      items: [
        "jeder Eigentümer",
        "WEGs sind möglich",
        "Mieter beantragen nicht direkt, können aber den Eigentümer beauftragen",
      ],
    },

    { kind: "heading", text: "Was die meisten Hausbesitzer falsch machen" },
    { kind: "paragraph", text: "Aus der Praxis fünf häufige Fehler:" },
    {
      kind: "list",
      ordered: true,
      items: [
        "**Antrag erst nach Sanierungsbeginn stellen** — entzieht den Förderanspruch. Der Antrag muss vor Beauftragung stehen.",
        "**Handwerker beauftragen vor Förderzusage** — gleiches Problem.",
        "**iSFP nicht vor der BEG-Einzelmaßnahme erstellen** — Sie verlieren den iSFP-Bonus und die Anhebung des Höchstbetrags.",
        "**Falsche Förderschiene wählen** — Heizungstausch läuft über die KfW-Heizungsförderung, Einzelmaßnahmen an der Hülle über BAFA-BEG-EM. Der falsche Antrag führt zur Ablehnung.",
        "**Verwendungsnachweis lückenhaft** — fehlen Belege, wird die Förderung zurückgefordert.",
      ],
    },
    {
      kind: "paragraph",
      text: "Eine saubere Förderbegleitung verhindert diese Fehler. Wir versprechen keine bestimmte Förderhöhe — was möglich ist, hängt von Ihrem Vorhaben, Ihrem Status (Selbstnutzer/Vermieter) und dem jeweils aktuellen Förderstand ab.",
    },
    {
      kind: "note",
      tone: "warn",
      text: "**Hinweis Heizungsgesetz/GEG.** Das Gebäudeenergiegesetz wird 2026 reformiert (Novellierungsverfahren läuft, Stand Juni 2026 nicht abgeschlossen). Wir beraten zum jeweils aktuellen Stand und nennen keine veralteten Stichtage. Die anlagentechnische Heizungsplanung selbst übernehmen wir nicht — wir sorgen dafür, dass die Förderung passt.",
    },
  ],

  priceTables: [
    {
      caption: "Förderprogramme 2026 im Überblick",
      columns: [
        { key: "programm", label: "Programm" },
        { key: "wer", label: "Wer fördert?" },
        { key: "was", label: "Was wird gefördert?" },
        { key: "hoehe", label: "Höhe" },
      ],
      rows: [
        {
          programm: "BAFA Energieberatung Wohngebäude (EBW)",
          wer: "BAFA",
          was: "Energieberatung inkl. iSFP",
          hoehe:
            "50 % des Honorars, max. 650 € (EFH/ZFH) bzw. 850 € (ab 3 WE); + einmalig max. 250 € WEG-Zuschuss",
        },
        {
          programm: "BEG-EM (Bundesförderung effiziente Gebäude — Einzelmaßnahmen)",
          wer: "BAFA",
          was: "Dämmung, Fenster, Lüftung, Heizungsoptimierung",
          hoehe: "Grundförderung 15 %, mit iSFP +5 Prozentpunkte",
        },
        {
          programm: "Heizungsförderung (KfW 458)",
          wer: "KfW",
          was: "Tausch auf förderfähige Heizung",
          hoehe: "30 % Grundförderung + mögliche Boni, gedeckelt 70 %",
        },
        {
          programm: "BEG-WG / KfW 261",
          wer: "KfW",
          was: "Effizienzhaus-Sanierung",
          hoehe: "Tilgungszuschuss + Kredit",
        },
        {
          programm: "KfW 297/298",
          wer: "KfW",
          was: "Klimafreundlicher Neubau",
          hoehe: "Kredit zu vergünstigtem Zins",
        },
        {
          programm: "KfW 300",
          wer: "KfW",
          was: "Wohneigentum für Familien",
          hoehe: "zinsverbilligter Kredit",
        },
        {
          programm: "Kommunale Förderprogramme",
          wer: "Stadt/Landkreis",
          was: "regional unterschiedlich",
          hoehe: "wird im Einzelfall geprüft",
        },
      ],
      note: "Kommunale Förderungen hängen vom Standort ab und werden konkret geprüft, nicht pauschal versprochen.",
    },
    {
      caption: "Heizungstausch (KfW 458) — die Förder-Bausteine",
      columns: [
        { key: "baustein", label: "Baustein" },
        { key: "hoehe", label: "Höhe", align: "right" },
        { key: "voraussetzung", label: "Voraussetzung" },
      ],
      rows: [
        {
          baustein: "Grundförderung",
          hoehe: "30 %",
          voraussetzung: "förderfähiger Heizungstausch",
        },
        {
          baustein: "Klimageschwindigkeitsbonus",
          hoehe: "+ 20 %",
          voraussetzung:
            "nur selbstnutzende Eigentümer; nur bei Antrag bis 31.12.2028 (danach Degression); Austausch einer alten, fossilen Heizung",
        },
        {
          baustein: "Effizienzbonus",
          hoehe: "+ 5 %",
          voraussetzung:
            "Wärmepumpe mit natürlichem Kältemittel oder Wärmequelle Wasser, Erdreich bzw. Abwasser",
        },
        {
          baustein: "Einkommensbonus",
          hoehe: "+ 30 %",
          voraussetzung:
            "selbstnutzende Eigentümer; zu versteuerndes Haushaltsjahreseinkommen ≤ 40.000 € (Durchschnitt der letzten zwei Steuerjahre)",
        },
        {
          baustein: "Kappung",
          hoehe: "max. 70 %",
          voraussetzung: "Boni addieren sich, die Gesamtförderung ist bei 70 % gedeckelt",
        },
      ],
      highlightColumn: "hoehe",
      note: "Klimageschwindigkeits- und Einkommensbonus gelten nur für selbstnutzende Eigentümer; bei Vermietung entfallen sie.",
    },
    {
      caption: "Unser Honorar für die Förderberatung",
      columns: [
        { key: "leistung", label: "Leistung" },
        { key: "inhalt", label: "Inhalt" },
        { key: "honorar", label: "Honorar (brutto)", align: "right" },
      ],
      rows: [
        {
          leistung: "Förderberatung (eigenes Paket)",
          inhalt:
            "Programm-Auswahl, Antragstellung, Auszahlung und Verwendungsnachweis gegenüber BAFA und KfW",
          honorar: "300 € (EFH) · 400 € (ZFH) · 1.000 € (MFH)",
        },
        {
          leistung: "Nichtwohngebäude",
          inhalt: "individuell nach Aufwand",
          honorar: "individuell",
        },
        {
          leistung: "WEG-Erläuterung in der Eigentümerversammlung",
          inhalt:
            "Vorstellung des iSFP in der Versammlung — bringt der Gemeinschaft einmalig +250 € BAFA-Zuschuss",
          honorar: "350–450 € online/kurz · 550–850 € vor Ort zzgl. Fahrtkosten",
        },
      ],
      highlightColumn: "honorar",
      note: "Alle Preise brutto. Im Rahmen einer KfW-Baubegleitung ist die Förderberatung bereits enthalten — dann zahlen Sie sie nicht zusätzlich.",
    },
    {
      caption: "Welche Förderung passt wann?",
      columns: [
        { key: "vorhaben", label: "Ihr Vorhaben" },
        { key: "schiene", label: "Förderschiene" },
        { key: "warum", label: "Warum" },
      ],
      rows: [
        {
          vorhaben: "Komplette Effizienzhaus-Sanierung",
          schiene: "KfW 261 (BEG-WG)",
          warum: "Tilgungszuschuss + Kredit",
        },
        {
          vorhaben: "Einzelmaßnahme an der Hülle (Dach, Fenster, Dämmung)",
          schiene: "BEG-EM (BAFA)",
          warum: "direkter Zuschuss, mit iSFP höherer Satz und Höchstbetrag",
        },
        {
          vorhaben: "Heizungstausch",
          schiene: "KfW 458 (Heizungsförderung)",
          warum: "Grundförderung + mögliche Boni, gedeckelt 70 %",
        },
        {
          vorhaben: "Energieberatung mit iSFP",
          schiene: "BAFA Energieberatung Wohngebäude",
          warum:
            "50 % des Honorars; iSFP ist Voraussetzung für den iSFP-Bonus späterer BEG-EM-Maßnahmen",
        },
        {
          vorhaben: "Klimafreundlicher Neubau",
          schiene: "KfW 297/298",
          warum: "zinsverbilligter Kredit, kein direkter Zuschuss",
        },
        {
          vorhaben: "Familien-Erstwohneigentum",
          schiene: "KfW 300",
          warum: "zinsverbilligter Kredit",
        },
      ],
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

  processSteps: {
    heading: "So sichern wir Ihre Förderung",
    steps: [
      {
        title: "Förder-Erstgespräch (telefonisch)",
        text: "Wir klären Ihr Vorhaben, Ihren Status (Selbstnutzer/Vermieter) und welche Förderschiene in Frage kommt.",
      },
      {
        title: "Programm-Auswahl und Reihenfolge",
        text: "Wir wählen die passenden Programme bei BAFA und KfW aus und legen die Antrags-Reihenfolge fest — denn die Reihenfolge entscheidet darüber, ob die Förderung erhalten bleibt.",
      },
      {
        title: "Antragstellung vor Beauftragung",
        text: "Wir stellen die Anträge bei BAFA und KfW — immer vor der Beauftragung, sonst entfällt der Förderanspruch.",
      },
      {
        title: "Auszahlung und Verwendungsnachweis",
        text: "Wir begleiten die Auszahlung und erstellen den Verwendungsnachweis — lückenlose Belege verhindern eine Rückforderung.",
      },
    ],
  },

  cases: {
    heading: "Referenzen aus der geförderten Bestandssanierung",
    intro:
      "Das Büro Dr.-Ing. Formazin & Partner ist seit über 30 Jahren im Bauwesen tätig — diese Bürohistorie betrifft das Ingenieurbüro insgesamt, nicht die Tätigkeit als Energieberater.",
    items: [
      {
        name: "Wohnhaus Mehrow",
        jahr: "2014",
        umfang:
          "Umfassende energetische Sanierung der Gebäudehülle unter Beachtung denkmalrechtlicher Vorgaben.",
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
      q: "Welche Förderung gibt es für die Energieberatung 2026?",
      a: "Die BAFA fördert die Energieberatung für Wohngebäude (inklusive Sanierungsfahrplan iSFP) mit 50 Prozent des Beratungshonorars. Der Zuschuss ist gedeckelt: maximal 650 Euro für Ein- und Zweifamilienhäuser, maximal 850 Euro ab drei Wohneinheiten. Bei Wohnungseigentümergemeinschaften kommt einmalig ein Zuschuss von bis zu 250 Euro hinzu, wenn der iSFP in der Eigentümerversammlung erläutert wird. Der Antrag muss vor Beauftragung gestellt werden.",
    },
    {
      q: "Stimmt es, dass die BAFA-Beratungsförderung gesenkt wurde?",
      a: "Ja. Zum 07.08.2024 wurde der Fördersatz für die Energieberatung Wohngebäude von 80 auf 50 Prozent gesenkt. Gleichzeitig wurden die früheren Höchstbeträge (1.300 / 1.700 / 5.000 Euro) abgeschafft und durch die Deckel von 650 bzw. 850 Euro (plus 250 Euro WEG-Zuschuss) ersetzt.",
    },
    {
      q: "Was ist der iSFP-Bonus und für welche Maßnahmen gilt er?",
      a: "Der iSFP-Bonus ist ein Zusatz von 5 Prozentpunkten auf BAFA-Einzelmaßnahmen (BEG-EM) an Gebäudehülle, Anlagentechnik und Heizungsoptimierung, wenn die Maßnahme aus einem gültigen Sanierungsfahrplan stammt — der Fördersatz steigt damit von 15 auf 20 Prozent. Zusätzlich hebt der iSFP den förderfähigen Höchstbetrag von 30.000 auf 60.000 Euro pro Wohneinheit und Jahr. Für den Heizungstausch (KfW 458) gibt es diesen Bonus nicht. Voraussetzung: Der iSFP muss vor dem BEG-Antrag erstellt sein.",
    },
    {
      q: "Wie hoch ist der maximale Zuschuss beim Heizungstausch?",
      a: "Der maximale Fördersatz beim Heizungstausch (KfW 458) liegt bei 70 Prozent der förderfähigen Kosten. Er setzt sich aus 30 Prozent Grundförderung plus möglichen Boni zusammen: Klimageschwindigkeitsbonus (+20 %, nur für selbstnutzende Eigentümer und nur bei Antrag bis 31.12.2028), Effizienzbonus (+5 % bei natürlichem Kältemittel oder Wärmequelle Wasser/Erdreich/Abwasser) und Einkommensbonus (+30 % bei zu versteuerndem Haushaltsjahreseinkommen bis 40.000 Euro, nur Selbstnutzer). Die Summe ist bei 70 Prozent gedeckelt.",
    },
    {
      q: "Wer bekommt BAFA-Förderung 2026?",
      a: "Antragsberechtigt für die BAFA-Energieberatung sind alle Eigentümer, auch Wohnungseigentümergemeinschaften und Erbengemeinschaften; Selbstnutzung ist nicht erforderlich. Mieter beantragen nicht direkt, können aber den Eigentümer beauftragen. Wichtig: Der Antrag muss vor Beauftragung des Energieberaters gestellt werden — nachträglich gibt es keine Förderung.",
    },
    {
      q: "Wie wird der Förderantrag gestellt?",
      a: "Bei der BAFA online über das BAFA-Portal, bei der KfW über das KfW-Portal mit Bestätigung durch einen gelisteten Energie-Effizienz-Experten. Die Auszahlung erfolgt erst nach dem Verwendungsnachweis, also nach Abschluss der Maßnahme. Genaue Bearbeitungszeiten hängen vom jeweiligen Programm und der Antragslage ab.",
    },
    {
      q: "Welche Förderungen lassen sich kombinieren?",
      a: "BAFA-Beratungsförderung, BAFA-BEG-Einzelmaßnahmen (mit iSFP-Bonus) und die KfW-Heizungsförderung adressieren unterschiedliche Maßnahmen und lassen sich im Sanierungsverlauf koordinieren. Innerhalb der Heizungsförderung addieren sich Grundförderung und Boni bis zur Kappung bei 70 Prozent. Nicht möglich ist die doppelte Förderung derselben Maßnahme. Kommunale Programme sind teils zusätzlich möglich und werden im Einzelfall geprüft.",
    },
  ],

  related: {
    heading: "Verwandte Leistungen",
    intro:
      "Die Förderberatung ist eine unserer fünf Energie-Leistungen — hier geht es weiter im Cluster.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung — die Übersicht",
        description: "Alle fünf Energie-Leistungen aus einem Büro.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/sanierungsfahrplan-isfp",
        label: "Sanierungsfahrplan (iSFP)",
        description: "Voraussetzung für den iSFP-Bonus bei BEG-Einzelmaßnahmen.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/kfw-baubegleitung",
        label: "KfW-Baubegleitung",
        description: "Antrag, technischer Nachweis, Verwendungsnachweis — Förderberatung bereits enthalten.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/energieausweis",
        label: "Energieausweis",
        description: "Bedarfs- oder Verbrauchsausweis für Wohn- und Gewerbeimmobilien.",
        kind: "service",
      },
    ],
  },

  cta: {
    heading: "Förder-Erstgespräch anfragen",
    text: "In einem kurzen telefonischen Erstgespräch klären wir, welche Förderschiene für Ihr Vorhaben in Frage kommt und in welcher Reihenfolge die Anträge gestellt werden müssen — denn die Reihenfolge entscheidet darüber, ob die Förderung erhalten bleibt. Eine bestimmte Förderhöhe sagen wir vorab nicht zu; was möglich ist, hängt vom konkreten Fall ab.",
    buttonLabel: "Förder-Erstgespräch anfragen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "Förderberatung BAFA & KfW",
  areaServed: [
    "Berlin",
    "Brandenburg",
    "Bernau bei Berlin",
    "Eberswalde",
    "Werneuchen",
    "Strausberg",
    "Altlandsberg",
    "Ahrensfelde",
  ],
  offers: {
    priceCurrency: "EUR",
    lowPrice: "300",
    highPrice: "1000",
    offerCount: "3",
  },
};
