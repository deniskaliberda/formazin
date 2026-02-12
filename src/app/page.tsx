import { Hero } from "@/components/Hero";
import { LeistungenSection } from "@/components/LeistungenSection";
import { BueroSection } from "@/components/BueroSection";
import { KontaktSection } from "@/components/KontaktSection";
import { Footer } from "@/components/Footer";

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
