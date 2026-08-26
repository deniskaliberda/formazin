import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/energie/JsonLd";
import {
  BlockHeading,
  CtaBlock,
  DirektAntwort,
  EntwurfBand,
  FaqSection,
  PunktListe,
  TextParas,
} from "@/components/kern/KernBlocks";
import { KERN_AUTOREN } from "@/data/kern/autoren";
import { findSection, getLeistung, getWissen, getWissenArtikel } from "@/lib/content";
import { kernRobots } from "@/lib/kernPreview";

const SITE = "https://www.formazin-partner.de";
const ORG_ID = `${SITE}/#localbusiness`;

/**
 * Wissen-Artikel (`/wissen/[slug]`) — Antwort-zuerst-Template mit Article-,
 * FAQPage- und BreadcrumbList-Schema. Inhalte aus content/wissen/.
 */

export function generateStaticParams() {
  return getWissenArtikel().map((doc) => ({ slug: doc.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getWissen(slug);
  if (!doc) return {};
  return {
    title: doc.meta.seo_titel ?? doc.meta.titel,
    description: doc.meta.beschreibung,
    alternates: { canonical: `/wissen/${slug}` },
    robots: kernRobots,
  };
}

export default async function WissenArtikelPage({ params }: Props) {
  const { slug } = await params;
  const doc = getWissen(slug);
  if (!doc) notFound();

  const autor = KERN_AUTOREN[doc.meta.autor];
  const faq = findSection(doc, "Häufige Fragen");
  const leistung = doc.meta.leistung ? getLeistung(doc.meta.leistung) : null;
  const sonstige = doc.sections.filter((s) => s.heading !== "Häufige Fragen");
  const url = `${SITE}/wissen/${slug}`;

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: doc.meta.titel,
      description: doc.meta.beschreibung,
      url,
      datePublished: doc.meta.datum,
      inLanguage: "de",
      author: autor?.personId ? { "@id": autor.personId } : { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE },
        { "@type": "ListItem", position: 2, name: "Wissen", item: `${SITE}/wissen` },
        { "@type": "ListItem", position: 3, name: doc.meta.titel, item: url },
      ],
    },
  ];
  if (faq && faq.subs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.subs.map((f) => ({
        "@type": "Question",
        name: f.title,
        acceptedAnswer: { "@type": "Answer", text: f.body.join(" ") },
      })),
    });
  }
  if (autor?.personId) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": autor.personId,
      name: autor.name,
      jobTitle: autor.jobTitle,
      worksFor: { "@id": ORG_ID },
      knowsAbout: autor.knowsAbout,
    });
  }

  return (
    <>
      <Navigation />
      <main>
        <article className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
          <EntwurfBand />
          <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16">
            <p className="mt-8 font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
              Wissen · Brandschutz
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
              {doc.meta.titel}
            </h1>
            {autor && (
              <p className="mt-4 font-sans text-sm text-[#1e293b]/60">
                Von {autor.name} · {autor.rolle}
              </p>
            )}
            <DirektAntwort paras={doc.intro} />

            {sonstige.map((sektion) => (
              <section key={sektion.heading}>
                <BlockHeading>{sektion.heading}</BlockHeading>
                <TextParas paras={sektion.paras} />
                {sektion.items.length > 0 && <PunktListe items={sektion.items} />}
              </section>
            ))}

            {faq && faq.subs.length > 0 && (
              <section>
                <BlockHeading>Häufige Fragen</BlockHeading>
                <FaqSection fragen={faq.subs} />
              </section>
            )}

            {leistung && (
              <p className="mt-12 max-w-3xl border-t border-[#e2e8f0] pt-6 font-sans text-base text-[#1e293b]/80">
                Sie brauchen das nicht nur erklärt, sondern erledigt?{" "}
                <Link
                  href={`/leistungen/${leistung.slug}`}
                  className="font-semibold text-[#2d4196] hover:underline"
                >
                  Zur Leistung {leistung.meta.kurz_titel ?? leistung.meta.titel} →
                </Link>
              </p>
            )}

            <CtaBlock
              titel="Ihr Vorhaben einordnen lassen?"
              text="Schildern Sie uns kurz Ihr Projekt — wir sagen Ihnen, was Ihr Bau wirklich braucht."
            />
          </div>
        </article>
      </main>
      {schemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <Footer />
    </>
  );
}
