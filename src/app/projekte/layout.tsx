import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte – Referenzen aus über 30 Jahren",
  description:
    "Referenzprojekte von Dr.-Ing. Formazin & Partner: Schulen, Wohnungsbau, Sanierung und öffentliche Gebäude in Berlin und Brandenburg.",
  alternates: { canonical: "/projekte" },
};

export default function ProjekteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
