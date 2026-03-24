import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen – Architektur & Tragwerk",
  description:
    "Architektur, Brandschutz, Tragwerksplanung, Wärmeschutz und Generalplanung aus Ahrensfelde bei Berlin.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
