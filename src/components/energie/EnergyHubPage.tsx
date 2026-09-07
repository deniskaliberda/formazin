import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { EnergiePageContent } from "@/data/energie/types";
import { HeroSplit } from "./HeroSplit";
import { FeatureGrid } from "./FeatureGrid";
import { TeamBlock } from "./TeamBlock";
import { ProcessSteps } from "./ProcessSteps";
import { EnergyGuide } from "./EnergyGuide";
import { JsonLd, buildServiceSchema, buildPersonSchema, buildOdaPersonSchema, buildBreadcrumbSchema } from "./JsonLd";

const DETAIL = "/leistungen/energieberatung";
const ABLAUF = {
  heading: "So gehen wir gemeinsam vor",
  steps: [
    { title: "Vorhaben besprechen", text: "Sie schildern Ihr Gebäude, Ihre Ziele und offene Fragen. Gemeinsam klären wir die passende Leistung." },
    { title: "Grundlagen prüfen", text: "Wir sichten die Unterlagen und erfassen je nach Auftrag den Zustand Ihres Gebäudes vor Ort." },
    { title: "Maßnahmen abstimmen", text: "Wir erläutern die Ergebnisse, mögliche Maßnahmen und den weiteren Weg der Förderung." },
    { title: "Umsetzung begleiten", text: "Auf Wunsch übernehmen wir die vereinbarten Anträge, Nachweise und die fachliche Begleitung." },
  ],
};

function Band({ id, children }: { id?: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-28 py-12 md:py-20"><div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">{children}</div></section>;
}

/** Short service overview. Detailed guidance stays on the linked service pages. */
export function EnergyHubPage({ content }: { content: EnergiePageContent }) {
  return <>
    <JsonLd data={buildServiceSchema(content)} />
    <JsonLd data={buildPersonSchema()} />
    <JsonLd data={buildOdaPersonSchema()} />
    <JsonLd data={buildBreadcrumbSchema(content)} />
    <HeroSplit compact aside={<EnergyGuide />} eyebrow={content.eyebrow} h1={content.h1} subline={content.intro}
      cta={{ label: "Privates Wohnhaus", href: content.cta.href }}
      secondaryCta={content.cta.secondaryHref ? { label: "Unternehmen & größere Projekte", href: content.cta.secondaryHref } : undefined}
      trustLine={content.heroTrustLine} />
    <main className="energy-review energy-overview-page">
      <Band id="energie-leistungen">
        {content.featureGrid && <FeatureGrid data={content.featureGrid} />}
        <p className="mt-8 border-t border-[#1e293b]/15 pt-6 font-sans text-lg text-[#1e293b]/80">
          Ergänzende Nachweise zum Wärmeschutz und Schallschutz: <Link href="/leistungen/waermeschutz" className="font-semibold text-[#2d4196] underline underline-offset-4">Bauphysikalische Leistungen</Link>
        </p>
      </Band>
      <Band id="energie-ansprechpartner">
        {content.team && <TeamBlock data={content.team} />}
        <p id="antwort-wer-macht-was" className="mt-8 scroll-mt-28 font-sans text-base leading-relaxed text-[#1e293b]/70">Die technische Planung und den Einbau einer Heizungsanlage übernimmt Ihr Fachbetrieb. Wir begleiten die vereinbarten Förderanträge und Nachweise.</p>
      </Band>
      <Band id="antwort-zeitstrahl">
        <ProcessSteps data={ABLAUF} />
        <p id="antwort-foerder-rechenbild" className="mt-10 scroll-mt-28 border-t border-[#1e293b]/15 pt-6 font-sans text-lg text-[#1e293b]/80">Kosten und Förderbedingungen finden Sie direkt bei den Leistungen: <Link href={`${DETAIL}/sanierungsfahrplan-isfp`} className="text-[#2d4196] underline underline-offset-4">iSFP und Eigenanteil</Link> sowie <Link href={`${DETAIL}/foerderberatung-bafa-kfw`} className="text-[#2d4196] underline underline-offset-4">Förderprogramme und Anträge</Link>.</p>
      </Band>
      <Band id="antwort-region">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-[#1e293b]">Ihr Ansprechpartner in Berlin und Brandenburg</h2>
            <p className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80">Von Ahrensfelde aus betreuen wir Vorhaben in Berlin und Brandenburg und arbeiten mit Partnern in der Region zusammen. Auch für überregionale Projekte können Sie uns ansprechen.</p>
            <p className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80">Für mehrere Gebäude oder einen größeren Bestand entwickeln wir eine abgestimmte Sanierungsstrategie. <Link href={`${DETAIL}/foerderberatung-bafa-kfw#immobilienbestand`} className="font-semibold text-[#2d4196] underline underline-offset-4">Mehr zur Förderstrategie für Unternehmen</Link></p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={content.cta.href} className="inline-flex min-h-12 items-center rounded-[2px] bg-[#2d4196] px-6 py-3 font-heading font-semibold text-white hover:bg-[#243a7a]">Privates Wohnhaus anfragen</Link>
              {content.cta.secondaryHref && <Link href={content.cta.secondaryHref} className="inline-flex min-h-12 items-center rounded-[2px] border border-[#2d4196] px-6 py-3 font-heading font-semibold text-[#2d4196] hover:bg-[#2d4196]/5">Unternehmen & größere Projekte</Link>}
            </div>
            <Link href={`${DETAIL}/anfrage`} className="mt-4 inline-flex min-h-11 items-center font-sans text-base text-[#2d4196] underline underline-offset-4">Zur allgemeinen Anfrage</Link>
          </div>
          <figure>
            <Link href="/projekte/mfh-strausberger-altlandsberg" className="block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]"><Image src="/images/projekte/mfh-strausberger-altlandsberg/hero.jpg" alt="Mehrfamilienhaus Strausberger Straße in Altlandsberg" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" /></div>
            </Link>
            <figcaption className="mt-3 font-sans text-sm text-[#1e293b]/65">Aus unserem Portfolio: Mehrfamilienhaus Strausberger Straße in Altlandsberg.</figcaption>
          </figure>
        </div>
      </Band>
    </main>
    <Footer />
  </>;
}
