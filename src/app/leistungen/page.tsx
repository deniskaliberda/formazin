import type { Metadata } from "next";
import { LeistungAnsicht } from "@/components/kern/LeistungAnsicht";
import { getLeistung } from "@/lib/content";
import { kernRobots } from "@/lib/kernPreview";

export const metadata: Metadata = {
  title: "Leistungen – Architektur, Brandschutz, Tragwerksplanung & Generalplanung",
  description: "Architektur, Brandschutz, Tragwerksplanung und Generalplanung aus Ahrensfelde. Unsere Leistungen, Abläufe und Antworten für Ihr Bauvorhaben in Berlin und Brandenburg.",
  alternates: { canonical: "/leistungen" },
  robots: kernRobots,
};

export default function LeistungenPage() {
  const doc = getLeistung("architektur");
  if (!doc) throw new Error("Architektur-Leistungstext fehlt");
  return <LeistungAnsicht doc={doc} />;
}
