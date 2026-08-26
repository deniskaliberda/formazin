import type { Metadata } from "next";
import { LandingFunnelTemplate } from "@/components/energie/LandingFunnelTemplate";
import { foerderstrategieBestandLanding } from "@/data/energie/landing-funnels";

export const metadata: Metadata = {
  title: "Förderstrategie für Ihren Immobilienbestand anfragen",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function FoerderstrategieBestandPage() {
  return <LandingFunnelTemplate content={foerderstrategieBestandLanding} />;
}
