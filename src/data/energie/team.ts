import type { TeamSection } from "./types";

/**
 * Team-/Kompetenzblock der Energie-Linie — SINGLE SOURCE für alle 10 Seiten
 * (Briefing v2, 24.07.2026; Rollenlogik + Formulierung vom Kunden vorgegeben,
 * "Oda seit 2015" von Denis am 27.07.2026 bestätigt).
 *
 * Rollen: Oda Formazin = Senior Lead / fachliche Leitung Energieberatung
 * (Seniorität, Förderstrategie, Qualitätssicherung) · Feith Formazin =
 * gelisteter Energie-Effizienz-Experte, operativer Ansprechpartner (Nachweise,
 * Förderkoordination, Projektbearbeitung im Büro-Team).
 * "Energieberatung seit 2024" wird bewusst NICHT prominent geführt — die
 * Seniorität tragen Oda und das Büro (Briefing v2).
 *
 * Fotos: echte Porträts (Kunden-Lieferung 27.07.2026) — Guardrail: echte
 * Personen = echte Fotos, KI-Bilder nur dekorativ.
 */
export const energieTeam: TeamSection = {
  eyebrow: "Team & Kompetenz",
  heading: "Ein Büro-Team für Ihre energetische Sanierung",
  intro:
    "**Senior Lead Energieberatung: Oda Formazin, Energieberaterin seit 2015.** Gemeinsam mit Feith Formazin, gelistetem Energie-Effizienz-Experten, betreut sie energetische Sanierungsstrategien, Förderlogik und Nachweise im Architektur- und Ingenieurbüro Dr.-Ing. Formazin & Partner mbB — für Wohn- und Nichtwohngebäude, mit langjähriger Erfahrung im Bestand.",
  members: [
    {
      name: "Oda Formazin",
      role: "Senior Lead Energieberatung · fachliche Leitung",
      photo: {
        src: "/images/energie/team/oda-formazin.jpg",
        alt: "Oda Formazin, Senior Lead Energieberatung bei Dr.-Ing. Formazin & Partner",
      },
      credentials: [
        "Energieberaterin seit 2015",
        "Förderstrategie & Qualitätssicherung",
        "Erfahrung im Bestand — Wohn- & Nichtwohngebäude",
      ],
      bio: "Oda Formazin verantwortet die energetischen Sanierungsstrategien des Büros — von der Bestandsanalyse über die Förderlogik bis zur Qualitätssicherung der Nachweise.",
    },
    {
      name: "Feith Formazin",
      role: "Energie-Effizienz-Experte · operativer Ansprechpartner",
      photo: {
        src: "/images/energie/team/feith-formazin.jpg",
        alt: "Feith Formazin, gelisteter Energie-Effizienz-Experte bei Dr.-Ing. Formazin & Partner",
      },
      credentials: [
        "Gelisteter EE-Experte (KfW + BAFA)",
        "M.Sc. Bauingenieurwesen, HTWK Leipzig",
        "Nachweise & Förderkoordination",
      ],
      bio: "Feith Formazin ist Ihr operativer Ansprechpartner: Er führt die Nachweise, koordiniert die Förderanträge gegenüber BAFA und KfW und bearbeitet Ihr Projekt im Büro-Team.",
    },
  ],
};
