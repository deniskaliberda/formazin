import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnergieFunnel } from "@/components/funnel/EnergieFunnel";

export const metadata: Metadata = {
  title: "Förderung & Nachweise anfragen",
  description:
    "Energieberatung, Sanierungsfahrplan, Energieausweis, GEG-Nachweis oder KfW-Baubegleitung in Berlin & Brandenburg – Anfrage in wenigen Schritten.",
  alternates: { canonical: "/leistungen/energieberatung/anfrage" },
};

export default function AnfragePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f3f4f6]">
        <section className="mx-auto max-w-screen-2xl px-6 pt-28 pb-4 text-center md:pt-32 md:pb-6">
          <p className="font-sans text-sm font-medium uppercase tracking-wider text-[#2d4196]">
            Energieberatung
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
            Förderung & Nachweise anfragen
          </h1>
          <p className="mx-auto mt-3 max-w-xl font-sans text-base text-[#1e293b]/70 md:text-lg">
            In wenigen Schritten klären wir Ihr Anliegen — Sie bekommen eine konkrete
            Einschätzung statt eines anonymen Formulars.
          </p>
        </section>

        <section className="pb-20 md:pb-24">
          <EnergieFunnel />
        </section>
      </main>
      <Footer />
    </>
  );
}
