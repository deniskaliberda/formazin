import Link from "next/link";
import { ArrowDown, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { EnergieFunnel } from "@/components/funnel/EnergieFunnel";
import type { LandingFunnelConfig } from "@/data/energie/landing-funnels";
import { CaseCards } from "./CaseCards";
import { Diagramm } from "./Diagramme";
import { FactTable } from "./FactTable";
import { ProcessSteps } from "./ProcessSteps";
import { RelatedLinks } from "./RelatedLinks";
import { Reveal } from "./Reveal";
import { TeamBlock } from "./TeamBlock";
import { TrustBar } from "./TrustBar";

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
      <header>
        <Navigation />
        <section className="bg-[#f3f4f6] pt-28 md:pt-32">
          <div className="mx-auto grid max-w-screen-2xl gap-10 px-6 pb-16 md:px-12 md:pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-center lg:gap-16 lg:px-16 lg:pb-24 xl:px-20">
            <Reveal>
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#2d4196]">
                Energieberatung
              </p>
              <h1 className="mt-2 max-w-4xl font-heading text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
                {content.h1}
              </h1>
              <p className="mt-5 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/75 md:text-xl">
                {content.subline}
              </p>
              <p className="mt-5 font-sans text-sm leading-relaxed text-[#1e293b]/60">
                {content.heroTrustLine}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <aside className="rounded-[2px] border border-[#1e293b]/12 bg-white p-6 md:p-8">
                <ul className="space-y-4" role="list">
                  {content.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 font-sans text-base leading-relaxed text-[#1e293b]"
                    >
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-[2px] bg-[#2d4196] text-white">
                        <Check size={15} strokeWidth={2} aria-hidden="true" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#anfrage"
                  aria-label={`${content.ctaText} – zum Anfrageformular`}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#2d4196] px-6 py-4 font-sans text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {content.ctaText}
                  <ArrowDown size={18} aria-hidden="true" />
                </Link>
              </aside>
            </Reveal>
          </div>
        </section>
      </header>

      <main>
        <Section>
          <div className="space-y-8">
            <Reveal>
              <TrustBar data={content.trust} />
            </Reveal>
            <Reveal delay={0.2}>
              <TeamBlock data={content.team} />
            </Reveal>
          </div>
        </Section>

        <Section tone="gray">
          <Reveal>
            {content.visual.kind === "diagram" ? (
              <Diagramm name={content.visual.name} caption={content.visual.caption} />
            ) : (
              <div className="grid gap-8">
                {content.visual.tables.map((table) => (
                  <FactTable key={table.caption} table={table} />
                ))}
              </div>
            )}
          </Reveal>
        </Section>

        <Section>
          <Reveal>
            <CaseCards data={content.cases} />
          </Reveal>
        </Section>

        <Section tone="gray">
          <ProcessSteps data={content.process} />
        </Section>

        <section
          id="anfrage"
          aria-label="Anfrage"
          className="scroll-mt-20 border-t border-[#1e293b]/10 bg-white py-16 md:py-20 lg:py-24"
        >
          <EnergieFunnel preset={content.preset} />
        </section>

        <Section tone="gray">
          <Reveal>
            <RelatedLinks data={content.related} />
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
                  <a
                    href="tel:+49309369170"
                    aria-label="Formazin und Partner unter +49 30 9369170 anrufen"
                    className="transition-colors hover:text-[#2d4196]"
                  >
                    +49 30 9369170
                  </a>
                  <a
                    href="mailto:kontakt@formazin-partner.de"
                    aria-label="E-Mail an kontakt@formazin-partner.de schreiben"
                    className="transition-colors hover:text-[#2d4196]"
                  >
                    kontakt@formazin-partner.de
                  </a>
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
