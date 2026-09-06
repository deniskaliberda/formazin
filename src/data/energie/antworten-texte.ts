import type { DiagramName } from "./types";

/**
 * Standard-Texte zu den Infografiken (Redesign, Denis-Feedback 04.09.2026:
 * „Diagramme ohne Text sind keine Seitenstruktur"). Jede Grafik steht in einer
 * eigenen Textsektion: Frage als Eyebrow, Überschrift, erklärende Absätze,
 * Grafik daneben. Die Seiten-Datenfiles können heading/body je Seite
 * überschreiben (AntwortItem); fehlt etwas, greifen diese Defaults.
 *
 * Alle Aussagen = freigegebener Content-Stand (Hub, iSFP-, Ausweis-Seite,
 * serviceSplit, processSteps; BEG-Stand 21.07.2026). Keine neuen Zahlen.
 */
export interface AntwortText {
  /** Kundenfrage (Eyebrow) */
  frage: string;
  heading: string;
  /** Absätze (unterstützen **fett** inline) */
  body: string[];
}

export const ANTWORTEN_TEXTE: Record<DiagramName, AntwortText> = {
  "foerder-rechenbild": {
    frage: "Wie viel Förderung bekomme ich?",
    heading: "Die BAFA zahlt die Hälfte der Beratung, der iSFP hebt danach jede Maßnahme",
    body: [
      "Der Sanierungsfahrplan (iSFP) wird über das BAFA-Programm „Energieberatung für Wohngebäude“ gefördert: **50 % des Beratungshonorars**, gedeckelt auf **650 €** bei Ein- und Zweifamilienhäusern bzw. **850 €** ab drei Wohneinheiten. Beim Einfamilienhaus bleiben von 1.500 € Honorar damit 850 € Eigenanteil.",
      "Der eigentliche Hebel kommt danach: Liegt ein iSFP vor, steigt der Fördersatz für BAFA-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik von **15 auf 20 %**, und der förderfähige Höchstbetrag verdoppelt sich von **30.000 auf 60.000 €** je Wohneinheit und Jahr. Für den Heizungstausch (KfW 458) gelten eigene Regeln.",
    ],
  },
  zeitstrahl: {
    frage: "Wie lange dauert das?",
    heading: "Vom Erstgespräch zum fertigen Fahrplan in vier bis sieben Wochen",
    body: [
      "Ein **kostenloses Erstgespräch von 20 Minuten**, telefonisch oder per Video, klärt Ihr Anliegen, den Aufwand und die mögliche Förderung. Der Vor-Ort-Termin folgt typischerweise in **7 bis 14 Tagen**: Aufmaß, Bauteile, Anlagentechnik, Foto-Dokumentation, erste Einschätzung noch am gleichen Tag.",
      "Die iSFP-Erstellung dauert **zwei bis vier Wochen**. Danach gehen wir den Fahrplan in einem einstündigen Gespräch gemeinsam durch und priorisieren die Maßnahmen. Wer saniert, kann die Begleitung mit Antrag, Bauleitung und Verwendungsnachweis direkt anschließen.",
    ],
  },
  "zeitstrahl-ausweis": {
    frage: "Wie schnell ist der Ausweis da?",
    heading: "Verbrauchsausweis in drei Werktagen, Bedarfsausweis in fünf bis zehn",
    body: [
      "Nach Ihrer Anfrage klären wir zuerst, welche Variante für Ihr Gebäude Pflicht ist. Den **Verbrauchsausweis** stellen wir in rund **drei Werktagen** aus, er basiert auf den Verbrauchsdaten der letzten drei Jahre. Der **Bedarfsausweis** braucht einen Vor-Ort-Termin und **fünf bis zehn Werktage**.",
      "Beide Ausweise sind zehn Jahre gültig und Pflicht bei Verkauf, Vermietung und Neubau. Sie erhalten den fertigen Ausweis als PDF und gedruckt.",
    ],
  },
  "wer-macht-was": {
    frage: "Was nimmt mir Formazin & Partner ab?",
    heading: "Wir führen Strategie, Anträge und Nachweise, Ihr Fachbetrieb baut die Heizung",
    body: [
      "Wir planen Ihre Heizungsanlage **nicht** selbst: keine Heizlastberechnung, keine Technologie-Empfehlung. Das macht Ihr Fachbetrieb, der dafür häufig mit uns zusammenarbeitet, weil wir die Förderung einbinden und nachweisen.",
      "Alles andere läuft bei uns: Bestandsanalyse und Sanierungsfahrplan, Förderberatung und Anträge bei BAFA und KfW, Planung, Bauantrag und Bauüberwachung, Energieausweis und GEG-Nachweis. Und wir führen die Nachweis-Kette vom **Antrag** über den **technischen Nachweis** bis zum **Verwendungsnachweis**, damit die Förderung am Ende auch ausgezahlt wird.",
    ],
  },
  region: {
    frage: "Warum ein Büro aus der Region?",
    heading: "Ahrensfelde, rund 50 Kilometer Umkreis, ein Ansprechpartner",
    body: [
      "Wir sitzen in **Ahrensfelde** am östlichen Berliner Stadtrand und arbeiten regelmäßig in Berlin, Bernau, Eberswalde, Werneuchen, Strausberg und Altlandsberg, im Umkreis von rund 50 Kilometern.",
      "Das heißt konkret: ein **Vor-Ort-Termin in 7 bis 14 Tagen** statt Ferndiagnose, ein Ansprechpartner vom Antrag bis zum Verwendungsnachweis, und ein Architektur- und Ingenieurbüro, das **seit 1990** im Bestand plant und baut, von der Wohnanlage bis zum Denkmal.",
    ],
  },
  "ausweis-entscheidung": {
    frage: "Bedarfs- oder Verbrauchsausweis?",
    heading: "Das Gebäude entscheidet, nicht der Preis",
    body: [
      "Der **Bedarfsausweis** basiert auf einer Berechnung von Gebäudehülle und Anlagentechnik, er ist objektiv und nutzerunabhängig. Der **Verbrauchsausweis** basiert auf den tatsächlichen Heiz- und Energiekosten der letzten drei Jahre, er ist günstiger, aber stark vom Nutzerverhalten abhängig.",
      "Faustregel: Wohngebäude mit weniger als fünf Wohnungen und Bauantrag vor dem 1.11.1977, die seither nicht auf das Niveau der Wärmeschutzverordnung 1977 nachgerüstet wurden, brauchen zwingend einen Bedarfsausweis. In allen anderen Fällen haben Sie die Wahl. Bei Verkauf empfehlen wir den Bedarfsausweis, er ist genauer und wirkt seriöser.",
    ],
  },
  "kfw-bausteine": {
    frage: "Was ist beim Heizungstausch drin?",
    heading: "KfW 458: Grundförderung plus Boni, gedeckelt bei 70 bzw. 80 Prozent",
    body: [
      "Für den Heizungstausch gelten eigene KfW-Regeln, unabhängig vom iSFP. Die förderfähigen Kosten sind auf **28.000 € für die erste Wohneinheit** gedeckelt. Auf die Grundförderung von 30 % kommt bis zum 31.01.2027 der **Klimageschwindigkeitsbonus von 16 %**, danach sinkt er halbjährlich um vier Prozentpunkte.",
      "Je nach Haushaltseinkommen kommt ein gestaffelter **Einkommensbonus** hinzu, in bestimmten Fällen sind bis zu 80 % Zuschuss erreichbar. Der frühere Effizienzbonus und der Emissionsminderungszuschlag sind seit dem 21.07.2026 entfallen. Welche Bausteine bei Ihnen greifen, rechnen wir in der Förderberatung konkret durch.",
    ],
  },
  "foerder-schienen": {
    frage: "Wo wirkt der iSFP-Bonus, wo nicht?",
    heading: "Zwei Förderschienen, die oft verwechselt werden",
    body: [
      "Der iSFP-Bonus wirkt ausschließlich auf die **BAFA-Schiene**: Einzelmaßnahmen an Gebäudehülle und Anlagentechnik bekommen mit Sanierungsfahrplan 20 statt 15 % Zuschuss und den doppelten förderfähigen Höchstbetrag.",
      "Der **Heizungstausch über KfW 458** hat eine eigene Bonus-Logik ohne iSFP-Bonus. Wer beides plant, braucht beide Rechnungen, und genau die machen wir in der Förderberatung.",
    ],
  },
  "bestand-strategie": {
    frage: "Wie gehen wir bei mehreren Gebäuden vor?",
    heading: "Vom Bestand zum geförderten Sanierungsprogramm in fünf Schritten",
    body: [
      "Wer Immobilien hält, braucht keine Einzelfall-Beratung, sondern eine **belastbare Förderstrategie**: Welche Gebäude zuerst, welche Maßnahmen in welcher Reihenfolge, welche Programme tragen, und wie Anträge und Nachweise sauber geführt werden, damit die Förderung am Ende auch ausgezahlt wird.",
      "Wir starten mit der energetischen Bestandsanalyse über einzelne Gebäude oder den gesamten Bestand, priorisieren, erstellen je Wohngebäude den iSFP bzw. die Nichtwohngebäude-Beratung, bündeln Anträge und Nachweise und begleiten bis zur baulichen Umsetzung. Nach einer Erstprüfung Ihrer Unterlagen erhalten Sie ein verbindliches, projektspezifisches Angebot.",
    ],
  },
  /* ---- Varianten (Infografiken2.tsx) ---- */
  "foerder-hebel": {
    frage: "Was bringt der Fahrplan später?",
    heading: "Ein Sanierungsfahrplan hebt jede spätere Maßnahme",
    body: [
      "Der Fahrplan kostet Sie beim Einfamilienhaus 850 € Eigenanteil. Danach wirkt er als Hebel: Für BAFA-Einzelmaßnahmen an Gebäudehülle und Anlagentechnik steigt der Fördersatz von **15 auf 20 %**, und der förderfähige Höchstbetrag verdoppelt sich von **30.000 auf 60.000 €** je Wohneinheit und Jahr.",
      "Sie sanieren dann in Etappen, wann es zu Ihrem Budget passt, und nehmen den Bonus jedes Mal mit. Für den Heizungstausch über KfW 458 gelten eigene Regeln, die rechnen wir separat.",
    ],
  },
  "dauer-kalender": {
    frage: "Wie lange dauert das?",
    heading: "Sieben Wochen im Kalender, drei bis vier Stunden Ihrer Zeit",
    body: [
      "In der ersten Woche telefonieren wir 20 Minuten, kostenlos. Den Vor-Ort-Termin legen wir typischerweise in **7 bis 14 Tagen**: ein bis zwei Stunden für Aufmaß, Bauteile und Anlagentechnik, erste Einschätzung noch am selben Tag.",
      "Dann arbeiten wir **zwei bis vier Wochen** am Fahrplan im BAFA-Format. Zum Schluss ein einstündiges Gespräch, in dem wir die Maßnahmen gemeinsam priorisieren.",
    ],
  },
  "rollen-drei-saeulen": {
    frage: "Was nehmen wir Ihnen ab?",
    heading: "Sie entscheiden, wir führen, Ihr Fachbetrieb baut",
    body: [
      "Von Ihnen brauchen wir Unterlagen, ein Ziel und am Ende die Entscheidung. Alles dazwischen läuft bei uns: Bestandsanalyse und Sanierungsfahrplan, Förderberatung und Anträge, Planung, Bauantrag und Bauüberwachung, Energieausweis und GEG-Nachweis, technischer Nachweis und Verwendungsnachweis.",
      "Die Heizung selbst planen wir **nicht**: Heizlast, Technologie-Auswahl und Einbau übernimmt Ihr Fachbetrieb, der dafür häufig mit uns zusammenarbeitet, weil wir die Förderung einbinden und nachweisen.",
    ],
  },
  "foerder-rechnung": {
    frage: "Was kostet mich der iSFP wirklich?",
    heading: "Feste Preise, die Hälfte übernimmt die BAFA",
    body: [
      "Unsere Honorare sind Festpreise brutto: **1.500 €** Einfamilienhaus, **1.700 €** Zweifamilienhaus, **2.000 €** ab drei Wohneinheiten. Die BAFA fördert 50 % des Honorars, gedeckelt auf 650 € bzw. 850 €.",
      "Bleiben **850 €, 1.050 € oder 1.150 €** Eigenanteil. Bei Wohnungseigentümergemeinschaften kommen einmalig bis zu 250 € BAFA hinzu, wenn wir den Fahrplan in der Eigentümerversammlung erläutern. Der Antrag muss vor Beauftragung gestellt werden, das übernehmen wir.",
    ],
  },
  "dauer-aufwand": {
    frage: "Wie viel Zeit kostet mich das?",
    heading: "Drei bis vier Stunden von Ihnen, vier bis sieben Wochen von uns",
    body: [
      "Ihr Anteil ist überschaubar: 20 Minuten Erstgespräch, ein bis zwei Stunden Vor-Ort-Termin, eine Stunde Beratungsgespräch. Mehr müssen Sie nicht einplanen, Unterlagen wie Pläne und Heizkostenabrechnungen helfen, sind aber kein Muss.",
      "Unser Anteil: Termin in 7 bis 14 Tagen, iSFP-Erstellung in zwei bis vier Wochen. Nach vier bis sieben Wochen liegt der Fahrplan im offiziellen BAFA-Format vor, 20 bis 35 Seiten, in Etappen gerechnet.",
    ],
  },
  "baubegleitung-ablauf": {
    frage: "Wie läuft die Baubegleitung ab?",
    heading: "Fünf Schritte von der Aufnahme bis zum Verwendungsnachweis",
    body: [
      "Wir nehmen Gebäude und Vorhaben auf, nutzen Ihren vorhandenen Sanierungsfahrplan oder erstellen ihn, und stellen den KfW-Antrag mit der Bestätigung als gelisteter Energie-Effizienz-Experte, immer vor der Beauftragung.",
      "Dann vergleichen wir je Gewerk drei Angebote, koordinieren die Handwerker und leiten den Bau mit Stichproben-Abnahme der Bauteile. Am Ende führen wir technischen Nachweis und Verwendungsnachweis, damit die KfW auszahlt. Honorar **3.500 / 4.500 / 6.500 €** je nach Gebäudetyp, selbst förderfähig.",
    ],
  },
  "nachweis-kette": {
    frage: "Warum die Reihenfolge entscheidet",
    heading: "Erst der Antrag, dann die Beauftragung, sonst ist die Förderung weg",
    body: [
      "Der häufigste Fehler in der Praxis: Der Handwerker wird beauftragt, bevor der Antrag gestellt ist. Dann entfällt der Förderanspruch, unabhängig davon, wie gut die Maßnahme ist.",
      "Wir stellen die Anträge bei BAFA und KfW, bevor Sie unterschreiben, begleiten die Umsetzung, führen den technischen Nachweis nach Fertigstellung und den Verwendungsnachweis mit lückenlosen Belegen. Erst dann wird ausgezahlt.",
    ],
  },
  "geg-bauantrag": {
    frage: "Was gehört in den Bauantrag?",
    heading: "Drei Nachweise, aus dem Büro, das auch den Bauantrag plant",
    body: [
      "Der GEG-Nachweis besteht aus dem **Wärmeschutznachweis** für Gebäudehülle und Primärenergie, dem **sommerlichen Wärmeschutz** gegen Überhitzung und dem **Lüftungskonzept** für Feuchteschutz und Luftwechsel. Alle drei sitzen zwischen Entwurfsplanung und Einreichung.",
      "Festpreise **900 / 1.100 / 2.300 €** für Ein-, Zwei- und Mehrfamilienhaus, Nichtwohngebäude nach Aufwand. Weil wir den Bauantrag selbst planen, gibt es keine Schnittstelle zwischen Architekt und Nachweis-Ersteller.",
    ],
  },
  "foerder-programme": {
    frage: "Welche Förderung passt zu meinem Vorhaben?",
    heading: "Drei Programme, drei Logiken, eine Reihenfolge",
    body: [
      "Die **BAFA-Energieberatung** zahlt 50 % des Beratungshonorars für den Sanierungsfahrplan, gedeckelt auf 650 bzw. 850 €. **BEG-Einzelmaßnahmen** an Hülle und Anlagentechnik bekommen 15 %, mit iSFP 20 % und den doppelten Höchstbetrag.",
      "Der **Heizungstausch (KfW 458)** hat eine eigene Logik: 30 % Grundförderung plus 16 % Klimageschwindigkeitsbonus bis 31.01.2027 plus gestaffelter Einkommensbonus, gekappt bei 70 bzw. 80 %, auf maximal 28.000 € förderfähige Kosten für die erste Wohneinheit. Welche Kombination trägt und in welcher Reihenfolge beantragt wird, klären wir im Erstgespräch.",
    ],
  },
  "ausweis-vergleich": {
    frage: "Bedarf oder Verbrauch?",
    heading: "Zwei Ausweise, zwei Grundlagen, ein Gebäude entscheidet",
    body: [
      "Der **Bedarfsausweis** rechnet Gebäudehülle und Anlagentechnik durch, er ist objektiv, nutzerunabhängig und bei Verkauf die seriösere Wahl. Der **Verbrauchsausweis** nimmt die Heiz- und Energiekosten der letzten drei Jahre, er ist günstiger und schneller, aber vom Nutzerverhalten abhängig.",
      "Pflicht ist der Bedarfsausweis bei Wohngebäuden mit weniger als fünf Wohnungen und Bauantrag vor dem 1.11.1977, die nicht auf das Niveau der Wärmeschutzverordnung 1977 nachgerüstet wurden. Sonst haben Sie die Wahl. Welche Variante bei Ihnen greift, prüfen wir direkt bei der Anfrage.",
    ],
  },
  "portfolio-prioritaet": {
    frage: "Welche Gebäude zuerst?",
    heading: "Eine Reihenfolge für den Bestand statt zwanzig Einzelfälle",
    body: [
      "Wer mehrere Gebäude hält, braucht keine Einzelberatung je Objekt, sondern eine Reihenfolge: Welche Gebäude zuerst, welche Maßnahmen in welcher Folge, welche Programme tragen. Kriterien sind der Zustand von Hülle und Anlagentechnik, die erreichbare Förderquote, Belegung und Bauablauf.",
      "Daraus entstehen förderfähige Sanierungspfade mit Priorisierung, je Wohngebäude ein Sanierungsfahrplan, für Nichtwohngebäude eine eigene Beratung, und gebündelte Anträge und Nachweise. Nach Erstprüfung Ihrer Unterlagen erhalten Sie ein verbindliches, projektspezifisches Angebot.",
    ],
  },
};
