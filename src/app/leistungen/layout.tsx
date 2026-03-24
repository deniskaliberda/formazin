import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen – Architektur, Brandschutz, Tragwerksplanung",
  description:
    "Unsere Leistungen: Architektur, Brandschutzplanung, Tragwerksplanung, Generalplanung und Energieberatung in Berlin und Brandenburg.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
