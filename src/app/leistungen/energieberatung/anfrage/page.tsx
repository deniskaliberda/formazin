import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, FileText, Home } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EnergieFunnel } from "@/components/funnel/EnergieFunnel";

export const metadata: Metadata = {
  title: "Sanierungs- und Förderstrategie anfragen",
  description:
    "Sanierungs- und Fördervorhaben fachlich prüfen lassen: Das Büro Formazin & Partner bündelt Energieberatung, Förderkoordination, Nachweise und Planung — für private Eigentümer, WEGs, Hausverwaltungen, Bestandshalter und Unternehmen in Berlin & Brandenburg.",
  alternates: { canonical: "/leistungen/energieberatung/anfrage" },
};

/* Avatar-Weiche (Feith-Wunsch 26.08.2026): Privat und Gewerbe sofort
   separieren — zwei klare Einstiege in die passenden Landing-Funnels,
   darunter der zentrale Funnel für alle, die direkt anfragen wollen. */
const EINSTIEGE = [
  {
    href: "/anfrage/sanierung-foerderung",
    icon: Home,
    title: "Privates Wohnhaus",
    text: "Sanierung, Heizung, Förderung — für Ihr Ein- oder Zweifamilienhaus.",
    cta: "Zur privaten Anfrage",
  },
  {
    href: "/anfrage/foerderstrategie-bestand",
    icon: Building2,
    title: "Unternehmen & größere Projekte",
    text: "Bestand, Wohnanlagen, WEG und Verwaltung, Nichtwohngebäude — Förderstrategie statt Einzelfall.",
    cta: "Zur Projekt-Anfrage",
  },
] as const;

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
            Wählen Sie Ihren Einstieg — wir holen Sie dort ab, wo Ihr Vorhaben
            steht.
          </p>
        </section>

        {/* Avatar-Weiche */}
        <section className="mx-auto max-w-4xl px-6 pb-4 md:pb-6">
          <div className="grid gap-4 md:grid-cols-2">
            {EINSTIEGE.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group flex flex-col rounded-[2px] border border-[#1e293b]/10 bg-white p-6 transition-colors hover:border-[#2d4196] md:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-[#2d4196]/8 text-[#2d4196]">
                  <e.icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="mt-4 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                  {e.title}
                </span>
                <span className="mt-2 font-sans text-base leading-relaxed text-[#1e293b]/70">
                  {e.text}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 pt-1 font-sans text-base font-semibold text-[#2d4196]">
                  {e.cta}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center font-sans text-base text-[#1e293b]/70">
            <FileText
              size={16}
              className="mr-1.5 inline-block align-[-2px] text-[#2d4196]"
              aria-hidden="true"
            />
            Nur Energieausweis oder GEG-Nachweis?{" "}
            <Link
              href="/anfrage/energieausweis-geg"
              className="font-semibold text-[#2d4196] underline underline-offset-2 hover:text-[#243a7a]"
            >
              Direkt hier anfragen
            </Link>
          </p>
        </section>

        {/* Zentraler Funnel für alle, die nicht springen wollen */}
        <section className="pb-20 md:pb-24">
          <div className="mx-auto max-w-4xl px-6 pt-8 pb-6 text-center md:pt-10">
            <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
              Oder direkt hier anfragen
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-sans text-base leading-relaxed text-[#1e293b]/70 md:text-lg">
              In wenigen Schritten zur konkreten Einschätzung statt eines
              anonymen Formulars — für private Eigentümer, WEGs,
              Hausverwaltungen, Bestandshalter und Unternehmen.
            </p>
          </div>
          <EnergieFunnel />
        </section>
      </main>
      <Footer />
    </>
  );
}
