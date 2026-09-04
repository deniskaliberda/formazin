import type { EnergiePageContent } from "./types";
import { energieTeam } from "./team";

/**
 * Spoke-Seite /leistungen/energieberatung/gegnachweis.
 *
 * Portiert aus content-rework/11-gegnachweis.md (Stand 2026-07-08, Feith-Daten
 * integriert). Festpreise (900 / 1.100 / 2.300 €, NWG individuell) und
 * FAQ-Texte sind 1:1 übernommen. Der sichtbare FAQ-Text ist zugleich der
 * FAQPage-Schema-Text (siehe FaqAccordion). Kern-Positionierung: Der
 * GEG-Nachweis ist Bestandteil des Bauantrags, KEIN Standalone-Produkt —
 * und Formazin macht KEINE Heizungsplanung.
 *
 * Aus dem MD NICHT übernommene Marker ([PLATZHALTER]/[bitte prüfen] dürfen
 * nie im sichtbaren Content landen — betroffener Einzel-Anspruch weggelassen
 * bzw. neutral formuliert, nichts erfunden):
 *   - "[bitte prüfen: nach DIN V 18599]" (Wärmebedarfs-/Endenergie-Berechnung,
 *     2×: Direkt-Antwort + Lieferumfang) → DIN-Fundstelle weggelassen,
 *     Leistung neutral benannt.
 *   - "[bitte prüfen: nach DIN 4108-Beiblatt 2]" (Wärmebrücken) → Fundstelle
 *     weggelassen; "pauschal oder genauer Nachweis" (ungemarkert) behalten.
 *   - "[bitte prüfen: nach DIN 4108-2]" / "[… oder Simulation]" (sommerlicher
 *     Wärmeschutz) → Fundstelle weggelassen.
 *   - "[bitte prüfen: nach DIN 1946-6]" (Lüftungskonzept) → Fundstelle
 *     weggelassen.
 *   - "[bitte prüfen: Nach § 14 GEG]" (Pflicht sommerlicher Wärmeschutz) →
 *     §-Fundstelle weggelassen, Inhalt neutral formuliert.
 *   - "[bitte prüfen: pauschal nach DIN 4108-2]" (Prüfverfahren) → Verfahren/
 *     Norm weggelassen ("im Rahmen des Nachweises").
 *   - "[bitte prüfen: Gesetzgebungsstand vor Live-Gang]" (GModG-Hinweis) →
 *     interner Prüfauftrag, nicht gerendert; Hinweistext bleibt zeitlos.
 *   - "[PLATZHALTER: Foto-Freigabe Energieberater]" → gelöst per expertPhoto
 *     /images/feith-funnel.jpg (Denis-Vorgabe, früher Social Proof).
 *   - "[bitte prüfen: Telefon / E-Mail / Adresse]" (Kontakt-Block/Schema) →
 *     kein Kontaktblock gerendert; Kontaktweg = Funnel-CTA, Footer trägt die
 *     echten Daten. Adress-Platzhalter des MD-Schemas nicht übernommen.
 *   - MD-Review-Note "Lieferumfang/Seitenzahl/DIN-Normen noch zu bestätigen"
 *     → interne Notiz, nicht gerendert.
 *
 * NOCH OFFEN vor Live (aus dem MD, nicht hier auflösbar): [Feith] Festpreise
 * öffentlich freigeben · [GEG-Jurist] §-Zuordnungen (§ 47, § 2, § 80,
 * Anlage 7) final gegenprüfen — die §-Aussagen stehen im MD ohne Inline-Marker
 * (Rework-Stand) und sind 1:1 portiert; FAQ-Fragen sind §-spezifisch.
 */
export const gegnachweisContent: EnergiePageContent = {
  kind: "service",
  meta: {
    slug: "/leistungen/energieberatung/gegnachweis",
    canonical: "/leistungen/energieberatung/gegnachweis",
    ogImage: "/images/energie/svc-gegnachweis-v2.jpg",
    title: "GEG-Nachweis Berlin Brandenburg — Bauphysik & Wärmeschutz",
    metaDescription:
      "GEG-Nachweis für Ihren Bauantrag in Berlin & Brandenburg: Wärmeschutz, sommerlicher Wärmeschutz und Lüftungskonzept — vom Ingenieurbüro zu Festpreisen.",
    primaryKeyword: "gebäudeenergieberater",
  },
  breadcrumbs: [
    { name: "Startseite", item: "https://www.formazin-partner.de" },
    { name: "Leistungen", item: "https://www.formazin-partner.de/leistungen" },
    {
      name: "Energieberatung",
      item: "https://www.formazin-partner.de/leistungen/energieberatung",
    },
    {
      name: "GEG-Nachweis",
      item: "https://www.formazin-partner.de/leistungen/energieberatung/gegnachweis",
    },
  ],

  eyebrow: "Energieberatung",
  h1: "GEG-Nachweis Berlin & Brandenburg — Wärmeschutz und Anlagentechnik",
  intro:
    "Der energetische Nachweis nach Gebäudeenergiegesetz — Wärmeschutz, sommerlicher Wärmeschutz und Lüftungskonzept als Teil Ihres Bauantrags für Neubau, Sanierung und Anbau, direkt aus dem Architektur- und Ingenieurbüro, das Ihren Bauantrag kennt.",
  heroTrustLine:
    "Sitz in Ahrensfelde bei Berlin · tätig in Berlin, Brandenburg und angrenzenden Regionen.",

  heroImage: {
    src: "/images/energie/svc-gegnachweis-v2.jpg",
    alt: "Rohbau eines Einfamilienhauses mit beginnender Außendämmung",
  },

  expertPhoto: {
    src: "/images/feith-funnel.jpg",
    alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
  },

  // Redesign 04.09.2026: Band „Ihre Antworten" (Infografiken, Konzept §3)
  vierAntworten: {
    heading: "Der GEG-Nachweis im Bauantrag",
    items: [
      {
        name: "geg-bauantrag",
        caption: "Wärmeschutz, sommerlicher Wärmeschutz und Lüftungskonzept als Teil des Bauantrags.",
      },
    ],
  },
  answerBox: {
    eyebrow: "Kurz erklärt",
    text: "Der GEG-Nachweis dokumentiert, dass ein Gebäude die Anforderungen des Gebäudeenergiegesetzes (GEG) erfüllt — insbesondere Wärmeschutz, sommerlichen Wärmeschutz und Anlagentechnik. Er ist Bestandteil des Bauantrags für Neubauten und größere Umbauten, kein eigenständig bestellbarer Service. Wir erstellen den energetischen Nachweis im Rahmen Ihres Bauvorhabens, inklusive Wärmebrücken-Berechnung und Lüftungskonzept.",
  },

  // Team-/Kompetenzblock (Briefing v2) — ersetzt den Einzel-ExpertProof
  team: energieTeam,

  introSplit: {
    eyebrow: "Teil des Bauantrags",
    heading: "Wann der GEG-Nachweis Pflicht ist",
    body: [
      "Der GEG-Nachweis ist Teil des Bauantrags-Prozesses — wir erstellen ihn nicht als separaten Bestellservice, sondern im Zuge Ihres Bauvorhabens. Die Bauordnungsbehörden in Berlin und Brandenburg prüfen den Nachweis als Teil der Baugenehmigung.",
      "Bei kleineren Maßnahmen — etwa Tausch einzelner Fenster oder Heizkörper — ist der Nachweis nicht erforderlich. Drei Auslöser, in denen Sie den Nachweis brauchen:",
    ],
    bullets: [
      "**Neubau** — bei jedem Bauantrag für ein Wohngebäude oder Nichtwohngebäude",
      "**Größere Sanierungen** — wenn mehr als 10 Prozent eines Bauteils erneuert wird (z.B. Fassaden-Dämmung, Dach-Erneuerung)",
      "**Anbau und Erweiterung** — wenn die neu hinzukommende Fläche eigene Heizung oder Klima-Anlage hat",
    ],
    image: {
      src: "/images/energie/planung-beratung-v2.jpg",
      alt: "Heller Schreibtisch mit Grundriss, Unterlagenmappe und Hausschlüsseln bei der Energieberatung",
    },
    imageSide: "right",
    imageAspect: "portrait",
  },

  bodySections: [
    { kind: "heading", text: "Was Sie als Nachweis bekommen" },
    {
      kind: "paragraph",
      text: "Der GEG-Nachweis ist ein mehrseitiges Dokument mit Wärmebedarfs-Berechnung, Wärmebrücken-Nachweis, sommerlichem Wärmeschutz und Lüftungskonzept. Er enthält Bauteildaten, U-Werte, Anlageneffizienz-Werte und die Übereinstimmungs-Erklärung. Aussteller ist ein qualifizierter Energieberater, Bauingenieur oder Architekt. Der Nachweis wird mit dem Bauantrag eingereicht.",
    },
    {
      kind: "list",
      items: [
        "**Bauteilaufstellung** — alle Außenwände, Dach, Fenster, Bodenplatte, Türen mit U-Werten",
        "**Anlagen-Beschreibung** — Heizung, Warmwasser, Lüftung, Klima, jeweils mit Effizienzwerten",
        "**Berechnung des Endenergiebedarfs**",
        "**Wärmebrücken-Nachweis** — pauschal oder genauer Nachweis",
        "**Sommerlicher Wärmeschutz** — Schutz gegen Überhitzung im Sommer",
        "**Lüftungskonzept** — wer braucht zentrale Lüftung, wer nicht",
        "**Übereinstimmungs-Erklärung** — unterschriebene Zusicherung gegenüber dem Bauamt",
      ],
    },

    {
      kind: "image",
      src: "/images/energie/gebaeudehuelle-v2.jpg",
      alt: "Eingerüstetes Wohnhaus mit frisch montierten Dämmplatten während der energetischen Sanierung — ab zehn Prozent Bauteilerneuerung greift die Nachweispflicht",
      caption: "Sobald mehr als 10 % eines Bauteils erneuert werden — etwa bei einer Fassadendämmung — gehört der energetische Nachweis in den Bauantrag.",
    },
    { kind: "heading", text: "Wichtige GEG-Paragraphen erklärt" },
    {
      kind: "paragraph",
      text: "Vier Themen aus der Praxis — hier die zitierbaren Antworten. Bei den Heizungs-Paragraphen ist die Rechtslage 2026 in Bewegung (siehe Hinweis unten), deshalb halten wir sie bewusst zeitlos.",
    },

    { kind: "subheading", text: "§ 47 GEG — Nachrüstpflichten im Bestand" },
    {
      kind: "paragraph",
      text: "§ 47 GEG trägt den Titel „Nachrüstung eines bestehenden Gebäudes“ und regelt Nachrüstpflichten — etwa die Dämmung der obersten zugänglichen Geschossdecke auf höchstens 0,24 W/(m²·K) oder ersatzweise des darüberliegenden Dachs. § 47 ist **nicht** die Quelle der allgemeinen Bauteil-U-Werte bei Sanierung — diese stehen in Anlage 7 (zu § 48 GEG).",
    },

    { kind: "subheading", text: "§ 2 GEG — Anwendungsbereich und Ausnahmen" },
    {
      kind: "paragraph",
      text: "Welche Gebäude vom GEG ausgenommen sind, regelt § 2 GEG (Anwendungsbereich) — **nicht** § 80. Ausgenommen sind unter anderem Betriebsgebäude, die überwiegend offen gehalten werden, Gebäude mit Innentemperatur unter 12 °C oder weniger als vier Monaten Beheizung pro Jahr sowie bestimmte Unterglas- und Folienkonstruktionen. Eine pauschale „unter 50 m² befreit“-Regel gibt es nicht.",
    },
    {
      kind: "paragraph",
      text: "Kleine Gebäude bis 50 m² Nutzfläche sind also **nicht generell** vom GEG ausgenommen — beim Neubau gelten für sie nur vereinfachte Anforderungen (Bauteil-Anforderungen nach Anlage 7 statt voller Bilanz). Eine echte Befreiung ergibt sich erst aus den konkreten Tatbeständen des § 2.",
    },

    {
      kind: "subheading",
      text: "§ 80 GEG — Energieausweis: Ausstellung und Pflichten",
    },
    {
      kind: "paragraph",
      text: "§ 80 GEG regelt **nicht** die Befreiung von Sondergebäuden, sondern die Pflichten rund um den Energieausweis — wann ein Ausweis auszustellen ist, wann ein Bedarfsausweis verpflichtend ist und wann ein vorhandener Ausweis weiter genutzt werden darf. So ist etwa für Wohngebäude mit weniger als fünf Wohnungen und Bauantrag vor dem 1. November 1977 (unsaniert) ein Bedarfsausweis vorgeschrieben.",
    },

    {
      kind: "subheading",
      text: "Anlage 7 GEG — Höchstwerte bei Änderung im Bestand",
    },
    {
      kind: "paragraph",
      text: "Anlage 7 GEG (Bezug: § 48) enthält **ausschließlich** die Höchstwerte der Wärmedurchgangs-Koeffizienten bei Änderung bestehender Gebäude — also Sanierungs-/Änderungswerte, keine Neubau-Tabelle. Bei Sanierung gilt: Außenwand höchstens 0,24 W/(m²·K), Dach und oberste Geschossdecke 0,24, Bodenplatte 0,30, Fenster 1,30, Dachflächenfenster 1,40, Außentüren 1,80. Neubau-Anforderungen ergeben sich dagegen über das Referenzgebäude (Anlage 1) und das Bilanzverfahren nach § 10 ff.",
    },
    {
      kind: "note",
      tone: "info",
      text: "**Hinweis zur Heizungs-Rechtslage 2026:** Das GEG (Heizungsgesetz) wird 2026 grundlegend reformiert — das Gebäudemodernisierungsgesetz (GModG) ist im Gesetzgebungsverfahren und sieht einen technologieoffeneren Ansatz vor; mehrere Paragraphen zu Heizungs- und Erneuerbaren-Pflichten sollen sich ändern. Konkrete Stichtage und feste Quoten sind derzeit beweglich. Wir beraten Sie zum jeweils aktuellen Stand.",
    },

    {
      kind: "heading",
      text: "Sommerlicher Wärmeschutz — was viele übersehen",
    },
    {
      kind: "paragraph",
      text: "Beim Bauantrag wird oft nur der winterliche Wärmeschutz geprüft. Dokumentiert werden muss aber auch der **sommerliche Wärmeschutz** — also der Schutz gegen Überhitzung im Sommer. Bei großen Glasflächen, dunklen Dachflächen oder ungünstiger Ausrichtung kann hier Nachbesserung gefordert werden.",
    },
    { kind: "paragraph", text: "**Lösungs-Optionen:**" },
    {
      kind: "list",
      items: [
        "außenliegender Sonnenschutz (Rollläden, Markisen)",
        "helle Dachfarbe / Dachbegrünung",
        "Beschattung durch Bäume oder Nachbarbau",
        "bauliche Auskragungen / Loggien",
        "in Ausnahmefällen: aktive Klimatisierung",
      ],
    },
    {
      kind: "paragraph",
      text: "Wir prüfen den sommerlichen Wärmeschutz im Rahmen des Nachweises; bei kritischen Fällen mit thermischer Simulation.",
    },

    { kind: "heading", text: "Honorar 2026" },
    {
      kind: "paragraph",
      text: "Der GEG-Nachweis ist Bestandteil des Bauantrags und keine eigenständige Bestellleistung — wir erstellen ihn als Teil Ihrer Bauantragsplanung, nicht als separaten Bestellservice. Für den energetischen Nachweis gelten die Festpreise in der folgenden Tabelle.",
    },
    {
      kind: "paragraph",
      text: "Der GEG-Nachweis ist nicht separat über BEG förderfähig — er ist Teil des Bauantrags und wird über die Bauantrags-Honorare abgedeckt. **Förderfähig sind die Sanierungs-Maßnahmen selbst über BEG** (Gebäudehülle, Anlagentechnik). Genau hier liegt unsere Stärke: Wir sichern Ihnen für die geplanten Maßnahmen die passende Förderung — von BAFA-Zuschüssen über die KfW-Heizungsförderung bis zum individuellen Sanierungsfahrplan (iSFP). Heizungsfirmen kommen zu uns, damit wir die Förderung übernehmen.",
    },
  ],

  priceTables: [
    {
      caption: "GEG-Nachweis im Bauantrag — Festpreise 2026",
      columns: [
        { key: "typ", label: "Gebäudetyp" },
        { key: "preis", label: "GEG-Nachweis (brutto)", align: "right" },
      ],
      rows: [
        { typ: "Einfamilienhaus", preis: "900 €" },
        { typ: "Zweifamilienhaus", preis: "1.100 €" },
        { typ: "Mehrfamilienhaus", preis: "2.300 €" },
        {
          typ: "Gewerbeimmobilie / Nichtwohngebäude",
          preis: "individuell nach Aufwand",
        },
      ],
      highlightColumn: "preis",
      note: "Alle Preise brutto. Nichtwohngebäude: Honorar individuell nach Aufwand.",
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
    heading: "Bestand und Bauphysik seit den 1990er-Jahren",
    intro:
      "Das Büro arbeitet seit den 1990er-Jahren im Bestand und in der Bauphysik — von der denkmalgerechten Sanierung der Gebäudehülle über die Kernsanierung eines Mehrfamilienhauses bis zur laufenden energetischen Sanierung von Fassade und Dach in einer denkmalgeschützten Siedlung.",
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
      q: "Was ist ein GEG-Nachweis?",
      a: "Ein GEG-Nachweis dokumentiert, dass ein Gebäude die Anforderungen des Gebäudeenergiegesetzes (GEG) erfüllt — insbesondere Wärmeschutz, sommerlichen Wärmeschutz, Anlagentechnik und Lüftung. Er ist Bestandteil des Bauantrags für Neubauten und größere Umbauten und wird beim Bauamt eingereicht. Aussteller ist ein qualifizierter Energieberater, Bauingenieur oder Architekt — ein eigenständig bestellbarer Service ist der Nachweis in der Regel nicht.",
    },
    {
      q: "Was regelt § 47 GEG?",
      a: "§ 47 GEG trägt den Titel „Nachrüstung eines bestehenden Gebäudes“ und regelt Nachrüstpflichten, etwa die Dämmung der obersten zugänglichen Geschossdecke auf höchstens 0,24 W/(m²·K). Die allgemeinen U-Wert-Höchstwerte bei Sanierung von Bestandsbauteilen stehen dagegen nicht in § 47, sondern in Anlage 7 GEG, die sich auf § 48 GEG bezieht.",
    },
    {
      q: "Welche U-Werte gelten bei Sanierung im Bestand?",
      a: "Bei Änderung bestehender Bauteile gelten nach Anlage 7 GEG (zu § 48): Außenwand höchstens 0,24 W/(m²·K), Dach und oberste Geschossdecke 0,24, Bodenplatte 0,30, Fenster 1,30, Dachflächenfenster 1,40, Außentüren 1,80. Diese Werte gelten ab dem Zeitpunkt der jeweiligen Maßnahme — Bestand ohne Sanierung muss nicht nachgerüstet werden (Ausnahme: die Nachrüstpflichten nach § 47).",
    },
    {
      q: "Welche Gebäude sind vom GEG ausgenommen?",
      a: "Die Ausnahmen vom Anwendungsbereich stehen in § 2 GEG, nicht in § 80. Ausgenommen sind unter anderem überwiegend offen gehaltene Betriebsgebäude, Gebäude mit Innentemperatur unter 12 °C oder weniger als vier Monaten Beheizung pro Jahr sowie bestimmte Unterglas- und Folienkonstruktionen. Eine pauschale Befreiung „unter 50 m²“ gibt es nicht — kleine Gebäude haben beim Neubau lediglich vereinfachte Anforderungen.",
    },
    {
      q: "Wann brauche ich einen GEG-Nachweis?",
      a: "Sie brauchen einen GEG-Nachweis bei jedem Neubau-Bauantrag, bei größeren Sanierungen mit mehr als 10 Prozent Bauteil-Erneuerung und bei Anbauten mit eigener Heiz- oder Klimaanlage. Bei kleineren Maßnahmen — etwa Tausch einzelner Fenster oder einer Heizung — ist der Nachweis nicht erforderlich. Die Bauordnungsbehörde prüft den Nachweis als Teil der Baugenehmigung.",
    },
    {
      q: "Was kostet ein GEG-Nachweis?",
      a: "Bei Dr.-Ing. Formazin & Partner kostet der GEG-Nachweis als Teil des Bauantrags 900 Euro für ein Einfamilienhaus, 1.100 Euro für ein Zweifamilienhaus und 2.300 Euro für ein Mehrfamilienhaus (brutto); bei Nichtwohngebäuden nach Aufwand. Anders als der Sanierungsfahrplan (iSFP) ist der GEG-Nachweis nicht separat über BEG förderfähig — förderfähig sind die Sanierungs-Maßnahmen selbst.",
    },
    {
      q: "Wer darf den GEG-Nachweis erstellen?",
      a: "Den GEG-Nachweis darf erstellen, wer in der Energie-Effizienz-Experten-Liste des Bundes gelistet ist oder die formale Qualifikation eines Energieberaters, Architekten oder Bauingenieurs mit entsprechender Spezialisierung hat. Bei Dr.-Ing. Formazin & Partner begleitet Feith Formazin den Nachweis als gelisteter Energie-Effizienz-Experte des Bundes (KfW und BAFA, für Wohn- und Nichtwohngebäude).",
    },
  ],

  related: {
    heading: "Verwandte Leistungen",
    intro:
      "Der GEG-Nachweis ist eine von fünf Energie-Leistungen — hier die thematisch nächsten Schritte.",
    links: [
      {
        href: "/leistungen/energieberatung",
        label: "Energieberatung — die Übersicht",
        description:
          "Alle fünf Energie-Leistungen von Dr.-Ing. Formazin & Partner im Überblick.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/energieausweis",
        label: "Energieausweis",
        description:
          "Bedarfs- oder Verbrauchsausweis für Wohn- und Gewerbeimmobilien.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/kfw-baubegleitung",
        label: "KfW-Baubegleitung",
        description: "Antrag, technischer Nachweis, Verwendungsnachweis.",
        kind: "service",
      },
      {
        href: "/leistungen/energieberatung/foerderberatung-bafa-kfw",
        label: "BAFA-/KfW-Förderberatung",
        description: "Antragsstellung, Auszahlung, Verwendungsnachweis.",
        kind: "service",
      },
    ],
  },

  cta: {
    heading: "Energetischen Nachweis für Ihr Bauvorhaben klären",
    text: "Wir erstellen den energetischen GEG-Nachweis im Rahmen von Bauanträgen für Neubauten, Sanierungen und Anbauten in Berlin und Brandenburg — und sichern Ihnen für die geplanten Maßnahmen die passende Förderung. Klärung Ihres Bauvorhabens in 15 Minuten am Telefon, dann konkrete Einordnung.",
    buttonLabel: "Bauantrag / GEG-Nachweis besprechen",
    href: "/leistungen/energieberatung/anfrage",
  },

  serviceType: "GEG-Nachweis / Energetischer Nachweis",
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
    lowPrice: "900",
    highPrice: "2300",
    offerCount: "3",
  },
};
