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
};
