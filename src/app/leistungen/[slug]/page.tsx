import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/energie/JsonLd";
import {
  AblaufSteps,
  AutorBox,
  BlockHeading,
  CtaBlock,
  DirektAntwort,
  EnergieBruecke,
  EntwurfBand,
  FaqSection,
  ProjektKarten,
  PunktListe,
  RatgeberLinks,
  TextParas,
  ZielTags,
} from "@/components/kern/KernBlocks";
import { KERN_AUTOREN } from "@/data/kern/autoren";
import {
  findSection,
  getLeistung,
  getLeistungen,
  getWissen,
  metaList,
} from "@/lib/content";
import { kernRobots } from "@/lib/kernPreview";

const SITE = "https://www.formazin-partner.de";
const ORG_ID = `${SITE}/#localbusiness`;
const AREA_SERVED = ["Ahrensfelde", "Barnim", "Bernau bei Berlin", "Berlin", "Brandenburg"];

/**
 * KERN-Leistungsseiten (Tragwerksplanung, Brandschutz, Architektur,
 * Generalplanung, Wärmeschutz) — Server-Components aus dem Markdown-Layer
 * unter content/leistungen/. /leistungen/energieberatung bleibt als
 * statische Route der Energie-Linie unberührt (statisch schlägt dynamisch).
 */

export function generateStaticParams() {
  return getLeistungen().map((doc) => ({ slug: doc.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLeistung(slug);
  if (!doc) return {};
  return {
    title: doc.meta.seo_titel ?? doc.meta.titel,
    description: doc.meta.beschreibung,
    alternates: { canonical: `/leistungen/${slug}` },
    robots: kernRobots,
  };
}

export default async function KernLeistungPage({ params }: Props) {
  const { slug } = await params;
  const doc = getLeistung(slug);
  if (!doc) notFound();

  const autor = KERN_AUTOREN[doc.meta.autor] ?? KERN_AUTOREN.buero;
  const faq = findSection(doc, "Häufige Fragen");
  const ablauf = findSection(doc, "Ablauf");
  const zielgruppen = findSection(doc, "Für wen");
  const projektSlugs = metaList(doc, "projekte");
  const ratgeber = metaList(doc, "ratgeber")
    .map((s) => getWissen(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({ slug: a.slug, titel: a.meta.titel, teaser: a.meta.teaser ?? "" }));

  // freie Sektionen = alles außer den fest platzierten Blöcken
  const fixed = new Set(["Häufige Fragen", "Ablauf", "Für wen"]);
  const freieSektionen = doc.sections.filter((s) => !fixed.has(s.heading));

  const url = `${SITE}/leistungen/${slug}`;
  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: doc.meta.kurz_titel ?? doc.meta.titel,
      serviceType: doc.meta.kurz_titel ?? doc.meta.titel,
      description: doc.meta.beschreibung,
      url,
      provider: { "@id": ORG_ID },
      areaServed: AREA_SERVED,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE}/leistungen` },
        { "@type": "ListItem", position: 3, name: doc.meta.kurz_titel ?? doc.meta.titel, item: url },
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
  if (autor.personId) {
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
              Leistungen
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
              {doc.meta.titel}
            </h1>
            <DirektAntwort paras={doc.intro} />

            {freieSektionen.map((sektion) => (
              <section key={sektion.heading}>
                <BlockHeading>{sektion.heading}</BlockHeading>
                <TextParas paras={sektion.paras} />
                {sektion.items.length > 0 && <PunktListe items={sektion.items} />}
              </section>
            ))}

            {ablauf && (
              <section>
                <BlockHeading>Ablauf</BlockHeading>
                <TextParas paras={ablauf.paras} />
                <AblaufSteps steps={ablauf.subs} />
              </section>
            )}

            {zielgruppen && (
              <section>
                <BlockHeading>Für wen</BlockHeading>
                <TextParas paras={zielgruppen.paras} />
                <ZielTags items={zielgruppen.items} />
              </section>
            )}

            {doc.meta.energie_bruecke === "ja" && (
              <section>
                <BlockHeading>Brücke zu Energieberatung &amp; Förderung</BlockHeading>
                <EnergieBruecke />
              </section>
            )}

            {projektSlugs.length > 0 && (
              <section>
                <BlockHeading>Referenzprojekte</BlockHeading>
                <p className="mt-3 max-w-3xl font-sans text-base text-[#1e293b]/75">
                  Echte Projekte aus Ahrensfelde, dem Barnim und Berlin — keine Stockfotos.
                </p>
                <ProjektKarten slugs={projektSlugs} />
              </section>
            )}

            <AutorBox autor={autor} />

            {ratgeber.length > 0 && (
              <section>
                <BlockHeading>Ratgeber zum Thema</BlockHeading>
                <RatgeberLinks artikel={ratgeber} />
              </section>
            )}

            {faq && faq.subs.length > 0 && (
              <section>
                <BlockHeading>Häufige Fragen</BlockHeading>
                <FaqSection fragen={faq.subs} />
              </section>
            )}

            <CtaBlock
              titel={doc.meta.cta_titel ?? "Ihr Vorhaben besprechen?"}
              text={doc.meta.cta_text ?? "Schildern Sie uns kurz Ihr Projekt — wir melden uns mit einer ersten Einschätzung."}
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
