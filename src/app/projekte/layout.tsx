import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte – Referenzen seit 1990",
  description:
    "Referenzprojekte: Schulen, Wohnungsbau, Sanierung und öffentliche Gebäude in Berlin und Brandenburg.",
  alternates: { canonical: "/projekte" },
};

export default function ProjekteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
