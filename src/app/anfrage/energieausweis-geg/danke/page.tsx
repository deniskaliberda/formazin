import type { Metadata } from "next";
import { LandingDankeTemplate } from "@/components/energie/LandingFunnelTemplate";
import { energieausweisGegLanding } from "@/data/energie/landing-funnels";

export const metadata: Metadata = {
  title: "Vielen Dank — Ihre Anfrage ist eingegangen.",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function EnergieausweisGegDankePage() {
  return <LandingDankeTemplate content={energieausweisGegLanding} />;
}
