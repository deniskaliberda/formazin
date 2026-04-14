import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen – Architektur, Tragwerk, Brandschutz & Generalplanung",
  description:
    "Planungsbüro-Leistungen aus Ahrensfelde: Architektur, Tragwerksplanung, Brandschutz, Wärmeschutz und Generalplanung für Berlin und Brandenburg.",
  alternates: { canonical: "/leistungen" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [
      {
        url: "/images/leistungen/architektur.png",
        width: 1200,
        height: 630,
        alt: "Leistungen – Dr.-Ing. Formazin & Partner mbB",
      },
    ],
  },
};

export default function LeistungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
