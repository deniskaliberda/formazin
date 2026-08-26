import type { Metadata } from "next";
import { LandingFunnelTemplate } from "@/components/energie/LandingFunnelTemplate";
import { energieausweisGegLanding } from "@/data/energie/landing-funnels";

export const metadata: Metadata = {
  title: "Energieausweis oder GEG-Nachweis anfragen",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function EnergieausweisGegPage() {
  return <LandingFunnelTemplate content={energieausweisGegLanding} />;
}
