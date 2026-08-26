import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnergieFunnel } from "@/components/funnel/EnergieFunnel";

export const metadata: Metadata = {
  title: "Sanierungs- und Förderstrategie anfragen",
  description:
    "Sanierungs- und Fördervorhaben fachlich prüfen lassen: Das Büro Formazin & Partner bündelt Energieberatung, Förderkoordination, Nachweise und Planung — für private Eigentümer, WEGs, Hausverwaltungen, Bestandshalter und Unternehmen in Berlin & Brandenburg.",
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
          {/* Feith-Feedback 12.08.2026: Zielgruppen sichtbar oberhalb des
              Formulars, das Formular selbst bleibt schlank. */}
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg leading-relaxed text-[#1e293b]/70 md:text-xl">
            Für private Eigentümer, WEGs, Hausverwaltungen, Bestandshalter und
            Unternehmen mit Wohn- oder Nichtwohngebäuden — in wenigen Schritten
            zur konkreten Einschätzung statt eines anonymen Formulars.
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
