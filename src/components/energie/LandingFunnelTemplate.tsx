import Link from "next/link";
import { ArrowUp, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { EnergieFunnel } from "@/components/funnel/EnergieFunnel";
import { TrackedLink } from "@/components/TrackedLink";
import type { LandingFunnelConfig } from "@/data/energie/landing-funnels";
import { CaseCards } from "./CaseCards";
import { AntwortenBand } from "./Diagramme";
import { FactTable } from "./FactTable";
import { ProcessSteps } from "./ProcessSteps";
import { RelatedLinks } from "./RelatedLinks";
import { Reveal } from "./Reveal";
import { HeroSplit } from "./HeroSplit";
import { TeamBlock } from "./TeamBlock";

function Section({
  tone = "white",
  children,
}: {
  tone?: "white" | "gray";
  children: React.ReactNode;
}) {
  return (
    <section
      className={`border-t border-[#1e293b]/10 py-16 md:py-20 lg:py-24 ${
        tone === "gray" ? "bg-[#f3f4f6]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        {children}
      </div>
    </section>
  );
}

export function LandingFunnelTemplate({ content }: { content: LandingFunnelConfig }) {
  return (
    <>
      {/* Redesign 04.09.2026: Split-Hero, Funnel-Schritt 1 direkt im Hero
          (rechte Spalte), helles Avatar-Motiv unter dem Text. Der Funnel
          trägt den Anker #anfrage, damit bestehende Links weiter funktionieren. */}
      <HeroSplit
        image={content.heroImage}
        eyebrow="Energieberatung"
        h1={content.h1}
        subline={content.subline}
        trustLine={content.heroTrustLine}
        aside={
          <div id="anfrage" className="scroll-mt-24">
            <ul className="mb-4 flex flex-wrap gap-x-5 gap-y-1.5" role="list">
              {content.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="inline-flex items-center gap-2 font-sans text-sm text-[#1e293b]/75"
                >
                  <Check size={15} strokeWidth={2.2} className="text-[#2d4196]" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <EnergieFunnel preset={content.preset} compact />
          </div>
        }
      />

      <main>
        {/* „Ihre Antworten" direkt nach dem Hero (Redesign 04.09.2026, Konzept §4.2) */}
        <Section>
          <Reveal>
            <AntwortenBand data={content.antworten} />
          </Reveal>
        </Section>

        {/* Diagramm-„visual" ist seit 04.09. eine Text-Sektion in antworten; nur Preistabellen bleiben hier */}
        {content.visual.kind === "facts" && (
          <Section tone="gray">
            <Reveal>
              <div className="grid gap-8">
                {content.visual.tables.map((table) => (
                  <FactTable key={table.caption} table={table} />
                ))}
              </div>
            </Reveal>
          </Section>
        )}

        <Section>
          <ProcessSteps data={content.process} />
        </Section>

        <Section tone="gray">
          <Reveal>
            <CaseCards data={content.cases} />
          </Reveal>
        </Section>

        {/* Team genau einmal (TrustBar-Doppelung entfällt, Audit F4/F5) */}
        <Section>
          <Reveal>
            <TeamBlock data={content.team} />
          </Reveal>
        </Section>

        <Section tone="gray">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
              <RelatedLinks data={content.related} />
              <div className="rounded-[2px] border border-[#1e293b]/12 bg-white p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
                  {content.ctaText}
                </h2>
                <p className="mt-3 font-sans text-base leading-relaxed text-[#1e293b]/70">
                  Der Anfragebogen steht oben auf dieser Seite. In wenigen Schritten zur konkreten
                  Einschätzung, werktags innerhalb von 1–2 Tagen.
                </p>
                <Link
                  href="#anfrage"
                  aria-label={`${content.ctaText} – zum Anfrageformular`}
                  className="mt-6 inline-flex items-center gap-2 rounded-[2px] bg-[#2d4196] px-6 py-3.5 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a]"
                >
                  {content.ctaText}
                  <ArrowUp size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export function LandingDankeTemplate({ content }: { content: LandingFunnelConfig }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f3f4f6] pt-28 md:pt-32">
        <section className="mx-auto max-w-screen-2xl px-6 pb-16 md:px-12 md:pb-20 lg:px-16 xl:px-20">
          <Reveal>
            <div className="max-w-4xl">
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#2d4196]">
                Energieberatung
              </p>
              <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
                Vielen Dank — Ihre Anfrage ist eingegangen.
              </h1>
              <p className="mt-5 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/75 md:text-xl">
                Wir melden uns werktags innerhalb von 1–2 Tagen mit einer ersten Einschätzung.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-[#1e293b]/10 bg-white py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
            <ProcessSteps data={content.process} />

            <Reveal delay={0.2} className="mt-12">
              <div className="rounded-[2px] border border-[#1e293b]/12 bg-[#f3f4f6] p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
                  Direkter Kontakt
                </h2>
                <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-sans text-base text-[#1e293b]/75">
                  <TrackedLink
                    channel="tel"
                    placement="content"
                    href="tel:+49309369170"
                    aria-label="Formazin und Partner unter +49 30 9369170 anrufen"
                    className="transition-colors hover:text-[#2d4196]"
                  >
                    +49 30 9369170
                  </TrackedLink>
                  <TrackedLink
                    channel="mail"
                    placement="content"
                    href="mailto:kontakt@formazin-partner.de"
                    aria-label="E-Mail an kontakt@formazin-partner.de schreiben"
                    className="transition-colors hover:text-[#2d4196]"
                  >
                    kontakt@formazin-partner.de
                  </TrackedLink>
                </p>
                <Link
                  href={content.dankeHub.href}
                  aria-label={`Zurück zu ${content.dankeHub.label}`}
                  className="mt-7 inline-flex rounded-[2px] bg-[#2d4196] px-6 py-3 font-sans text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Zurück zu {content.dankeHub.label}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
