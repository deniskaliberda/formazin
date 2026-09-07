import type { Metadata } from "next";
import { LandingFunnelTemplate } from "@/components/energie/LandingFunnelTemplate";
import { sanierungFoerderungLanding } from "@/data/energie/landing-funnels";

export const metadata: Metadata = {
  title: "Sanierung planen, Förderung sichern — Anfrage",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function SanierungFoerderungPage() {
  return <LandingFunnelTemplate content={sanierungFoerderungLanding} />;
}
