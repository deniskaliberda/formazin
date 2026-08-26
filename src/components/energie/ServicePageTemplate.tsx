import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { EnergiePageContent } from "@/data/energie/types";
import {
  JsonLd,
  buildServiceSchema,
  buildPersonSchema,
  buildOdaPersonSchema,
  buildBreadcrumbSchema,
} from "./JsonLd";
import { HeroWithImage } from "./HeroWithImage";
import { AnswerBox } from "./AnswerBox";
import { AvatarSplit } from "./AvatarSplit";
import { ExpertProof } from "./ExpertProof";
import { TeamBlock } from "./TeamBlock";
import { ImageTextSplit } from "./ImageTextSplit";
import { FeatureGrid } from "./FeatureGrid";
import { BodySections } from "./BodySections";
import { FactTable } from "./FactTable";
import { ServiceSplit } from "./ServiceSplit";
import { TrustBar } from "./TrustBar";
import { ProcessSteps } from "./ProcessSteps";
import { CaseCards } from "./CaseCards";
import { FaqAccordion } from "./FaqAccordion";
import { RelatedLinks } from "./RelatedLinks";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

/**
 * Section-Wrapper im Haus-Stil: einheitliches Padding + Container, mit
 * abwechselndem Hintergrund (weiß / grau) und optionaler Trennlinie oben.
 */
function Section({
  tone = "white",
  border = false,
  children,
}: {
  tone?: "white" | "gray";
  border?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${tone === "gray" ? "bg-[#f3f4f6]" : "bg-white"} ${
        border ? "border-t border-[#1e293b]/10" : ""
      } py-16 md:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        {children}
      </div>
    </section>
  );
}

/**
 * Template für eine Energie-Service-Seite. Server Component. Nimmt ein
 * typisiertes Content-Objekt entgegen und baut ein bild-forward, scannbares
 * Layout: Bild-Hero → Direkt-Antwort (AEO) → Intro-Bild-Text-Split →
 * Leistungs-Kacheln → Kosten (Prosa + Tabellen) → Positionierung → „Wer wir
 * sind“ (mit Kontext-Bild) → Ablauf-Stepper → Cases (ohne Bild) → FAQ →
 * Cluster-Links → CTA. Injiziert Service-, Person- und BreadcrumbList-JSON-LD;
 * das FAQPage-Schema erzeugt das FaqAccordion selbst (Sichttext == Schema).
 * Genau ein <h1> pro Seite (im Hero), semantisches HTML.
 */
export function ServicePageTemplate({ content }: { content: EnergiePageContent }) {
  const heroCta = { label: content.cta.buttonLabel, href: content.cta.href };

  return (
    <>
      {content.serviceType && <JsonLd data={buildServiceSchema(content)} />}
      {content.trust && <JsonLd data={buildPersonSchema()} />}
      {content.team && <JsonLd data={buildOdaPersonSchema()} />}
      <JsonLd data={buildBreadcrumbSchema(content)} />

      {/* Bild-Hero (mit transparenter Navigation) oder ruhiger Text-Hero */}
      {content.heroImage ? (
        <HeroWithImage
          image={content.heroImage}
          eyebrow={content.eyebrow}
          h1={content.h1}
          subline={content.intro}
          cta={heroCta}
          links={content.heroLinks}
          trustLine={content.heroTrustLine}
        />
      ) : (
        <header>
          <Navigation />
          <section className="bg-white pt-28 md:pt-32">
            <div className="mx-auto max-w-screen-2xl px-6 pb-14 md:px-12 md:pb-20 lg:px-16 xl:px-20">
              <div className="max-w-3xl">
                {content.eyebrow && (
                  <p className="font-sans text-sm font-medium uppercase tracking-wider text-[#2d4196]">
                    {content.eyebrow}
                  </p>
                )}
                <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
                  {content.h1}
                </h1>
                {content.intro && (
                  <p className="mt-4 font-sans text-lg leading-relaxed text-[#1e293b]/70 md:text-xl">
                    {content.intro}
                  </p>
                )}
              </div>
            </div>
          </section>
        </header>
      )}

      <main>
        {/* Direkt-Antwort (AEO) + früher Experten-Social-Proof direkt unter dem Hero */}
        <Section tone="gray">
          <div className="max-w-3xl space-y-8">
            <Reveal>
              <AnswerBox data={content.answerBox} />
            </Reveal>
            {content.team ? (
              <Reveal delay={0.2}>
                <TeamBlock data={content.team} />
              </Reveal>
            ) : (
              content.expertPhoto &&
              content.trust && (
                <Reveal delay={0.2}>
                  <ExpertProof photo={content.expertPhoto} trust={content.trust} />
                </Reveal>
              )
            )}
          </div>
        </Section>

        {/* Avatar-Einstieg: Privat vs. Unternehmen früh trennen (26.08.2026) */}
        {content.avatarSplit && (
          <Section tone="white" border>
            <Reveal>
              <AvatarSplit data={content.avatarSplit} />
            </Reveal>
          </Section>
        )}

        {/* Intro als Bild-Text-Split */}
        {content.introSplit && (
          <Section tone="white" border>
            <ImageTextSplit data={content.introSplit} />
          </Section>
        )}

        {/* Die fünf Leistungen als visuelle Kacheln */}
        {content.featureGrid && (
          <Section tone="gray" border>
            <FeatureGrid data={content.featureGrid} />
          </Section>
        )}

        {/* Kosten: erklärende Prosa + Preistabellen in einem ruhigen Band */}
        {(content.bodySections.length > 0 || content.priceTables.length > 0) && (
          <Section tone="white" border>
            {content.bodySections.length > 0 && (
              <Reveal>
                <BodySections blocks={content.bodySections} />
              </Reveal>
            )}
            {content.priceTables.length > 0 && (
              <Reveal
                delay={content.bodySections.length > 0 ? 0.2 : 0}
                className={`grid grid-cols-1 gap-8 ${
                  content.bodySections.length > 0 ? "mt-12" : ""
                }`}
              >
                {content.priceTables.map((table) => (
                  <FactTable key={table.caption} table={table} />
                ))}
              </Reveal>
            )}
          </Section>
        )}

        {/* Positionierung / Abgrenzung */}
        {content.serviceSplit && (
          <Section tone="gray" border>
            <Reveal>
              <ServiceSplit data={content.serviceSplit} />
            </Reveal>
          </Section>
        )}

        {/* Wer wir sind + TrustBar, mit begleitendem Kontext-Bild */}
        {content.trust && (
          <Section tone="white" border>
            {content.trustImage ? (
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className="relative overflow-hidden rounded-[2px]">
                  {/* Asymmetrisches Bild-Idiom der BueroSection */}
                  <div className="aspect-[4/3] lg:aspect-[3/4] lg:min-h-[560px]">
                    <Image
                      src={content.trustImage.src}
                      alt={content.trustImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <TrustBar data={content.trust} />
                </Reveal>
              </div>
            ) : (
              <Reveal>
                <TrustBar data={content.trust} />
              </Reveal>
            )}
          </Section>
        )}

        {/* Ablauf als visueller Stepper */}
        {content.processSteps && content.processSteps.steps.length > 0 && (
          <Section tone="gray" border>
            <ProcessSteps data={content.processSteps} />
          </Section>
        )}

        {/* Cases — bewusst ohne Bild (keine KI-Fotos als Projektbilder) */}
        {content.cases && content.cases.items.length > 0 && (
          <Section tone="white" border>
            <Reveal>
              <CaseCards data={content.cases} />
            </Reveal>
          </Section>
        )}

        {/* FAQ (erzeugt FAQPage-Schema) */}
        {content.faq.length > 0 && (
          <Section tone="gray" border>
            <Reveal>
              <FaqAccordion faq={content.faq} />
            </Reveal>
          </Section>
        )}

        {/* Cluster-Verlinkung */}
        {content.related.links.length > 0 && (
          <Section tone="white" border>
            <Reveal>
              <RelatedLinks data={content.related} />
            </Reveal>
          </Section>
        )}

        {/* Abschluss-CTA */}
        <Section tone="gray" border>
          <Reveal>
            <Cta data={content.cta} />
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  );
}
