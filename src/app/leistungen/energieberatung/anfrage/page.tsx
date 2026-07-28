import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnergieFunnel } from "@/components/funnel/EnergieFunnel";

export const metadata: Metadata = {
  title: "Sanierungs- und Förderstrategie anfragen",
  description:
    "Energetisches Sanierungsvorhaben prüfen lassen: Unternehmen mit Immobilienbestand, Wohnungsunternehmen, Mehrfamilienhäuser, Nichtwohngebäude, öffentliche Gebäude, WEGs und private Wohngebäude in Berlin & Brandenburg — Anfrage in wenigen Schritten.",
  alternates: { canonical: "/leistungen/energieberatung/anfrage" },
};

export default function AnfragePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f3f4f6]">
        <section className="mx-auto max-w-screen-2xl px-6 pt-28 pb-4 text-center md:pt-32 md:pb-6">
          <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#2d4196]">
            Energieberatung
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
            Sanierungs- und Förderstrategie anfragen
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg leading-relaxed text-[#1e293b]/70 md:text-xl">
            Für Unternehmen mit Immobilienbestand, Wohnungsunternehmen, Mehrfamilienhäuser,
            Nichtwohngebäude, öffentliche Gebäude, WEGs, Hausverwaltungen und private
            Wohngebäude — in wenigen Schritten zur konkreten Einschätzung statt eines
            anonymen Formulars.
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
