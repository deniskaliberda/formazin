import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeistungenSection } from "@/components/LeistungenSection";
import { BueroSection } from "@/components/BueroSection";
import { KontaktSection } from "@/components/KontaktSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Architekten & Ingenieure Ahrensfelde | Formazin & Partner",
  description:
    "Architekturbüro seit 1990: Bauplanung, Tragwerksplanung, Brandschutz und Generalplanung in Berlin und Brandenburg. Jetzt Kontakt aufnehmen.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <BueroSection />
        <LeistungenSection />
        <KontaktSection />
      </main>
      <Footer />
    </>
  );
}
