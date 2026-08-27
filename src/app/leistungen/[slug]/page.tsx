import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/energie/JsonLd";
import {
  AblaufSteps,
  AutorBox,
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
import {
  BauweisenGrid,
  ChecklisteSplit,
  HeroBackground,
  HeroBildreihe,
  HeroColumns,
  HeroKompakt,
  HeroSplit,
  ProjektShowcase,
  TimelineAblauf,
  VergleichKarten,
} from "@/components/kern/KernSections";
import { KERN_AUTOREN } from "@/data/kern/autoren";
import {
  findSection,
  getLeistung,
  getLeistungen,
  getWissen,
  metaList,
  type ContentSection,
} from "@/lib/content";
import { kernRobots } from "@/lib/kernPreview";

const SITE = "https://www.formazin-partner.de";
const ORG_ID = `${SITE}/#localbusiness`;
const AREA_SERVED = ["Ahrensfelde", "Barnim", "Bernau bei Berlin", "Berlin", "Brandenburg"];
const CONTAINER = "mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16";

/**
 * KERN-Leistungsseiten — Server-Components aus dem Markdown-Layer.
 * Jede Leistung hat per Frontmatter `variante` ein eigenes Gesicht (Hero +
 * Signature-Section), Struktur nach benannten Relume-Wireframes
 * (02_delivery/SECTION-PLAN-KERN-Leistungen-2026-08-27.md).
 * /leistungen/energieberatung bleibt als statische Route unberührt.
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

/** Vollbreite Sektion mit alternierendem Hintergrund. */
function Band({
  alt,
  heading,
  children,
}: {
  alt?: boolean;
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={alt ? "bg-[#f3f4f6] py-14 md:py-16" : "py-14 md:py-16"}>
      <div className={CONTAINER}>
        {heading && (
          <h2 className="font-heading text-xl font-bold text-[#1e293b] md:text-2xl">{heading}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

export default async function KernLeistungPage({ params }: Props) {
  const { slug } = await params;
  const doc = getLeistung(slug);
  if (!doc) notFound();

  const variante = doc.meta.variante ?? "standard";
  const autor = KERN_AUTOREN[doc.meta.autor] ?? KERN_AUTOREN.buero;
  const faq = findSection(doc, "Häufige Fragen");
  const ablauf = findSection(doc, "Ablauf");
  const zielgruppen = findSection(doc, "Für wen");
  const bauweisen = findSection(doc, "Bauweisen");
  const vergleich = findSection(doc, "Nachweis oder Konzept?");
  const checkliste = doc.sections.find((s) => s.heading.startsWith("Checkliste"));
  const projektSlugs = metaList(doc, "projekte");
  const ratgeber = metaList(doc, "ratgeber")
    .map((s) => getWissen(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({ slug: a.slug, titel: a.meta.titel, teaser: a.meta.teaser ?? "" }));

  const fixedHeadings = new Set(
    [
      "Häufige Fragen",
      "Ablauf",
      "Für wen",
      "Bauweisen",
      "Nachweis oder Konzept?",
      checkliste?.heading,
    ].filter(Boolean) as string[],
  );
  const freieSektionen = doc.sections.filter((s) => !fixedHeadings.has(s.heading));

  const heroProps = {
    eyebrow: "Leistungen",
    titel: doc.meta.titel,
    lead: doc.meta.kurz,
    bild: doc.meta.hero_bild,
    bilder: metaList(doc, "hero_bilder"),
    punkte: (doc.meta.hero_punkte ?? "")
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean),
    bildAlt: `${doc.meta.kurz_titel ?? doc.meta.titel} — Referenzprojekt von Dr.-Ing. Formazin & Partner`,
  };

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

  // Hero nach Variante (Relume-Wireframe-Namen im Section-Plan)
  const hero =
    variante === "ingenieur" ? (
      <HeroSplit {...heroProps} />
    ) : variante === "entscheidung" ? (
      <HeroBackground {...heroProps} />
    ) : variante === "portfolio" ? (
      <HeroBildreihe {...heroProps} />
    ) : variante === "timeline" ? (
      <HeroColumns {...heroProps} />
    ) : variante === "pflicht" ? (
      <HeroKompakt {...heroProps} />
    ) : (
      <div className={`${CONTAINER} mt-8`}>
        <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
          Leistungen
        </p>
        <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
          {doc.meta.titel}
        </h1>
      </div>
    );

  const renderFreieSektion = (sektion: ContentSection) => (
    <section key={sektion.heading} className={CONTAINER}>
      <h2 className="mt-14 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
        {sektion.heading}
      </h2>
      <TextParas paras={sektion.paras} />
      {sektion.items.length > 0 && <PunktListe items={sektion.items} />}
    </section>
  );

  return (
    <>
      <Navigation />
      <main>
        <article className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-30">
          <EntwurfBand />
          {hero}

          <div className={CONTAINER}>
            <DirektAntwort paras={doc.intro} />
          </div>

          {freieSektionen.map(renderFreieSektion)}

          {bauweisen && (
            <div className="mt-14">
              <Band alt heading={bauweisen.heading}>
                <TextParas paras={bauweisen.paras} />
                <BauweisenGrid subs={bauweisen.subs} />
              </Band>
            </div>
          )}

          {vergleich && (
            <div className="mt-14">
              <Band alt heading={vergleich.heading}>
                <TextParas paras={vergleich.paras} />
                <VergleichKarten subs={vergleich.subs} ratgeberSlug={metaList(doc, "ratgeber")[0]} />
              </Band>
            </div>
          )}

          {checkliste && (
            <div className="mt-14">
              <Band alt heading={checkliste.heading}>
                <ChecklisteSplit
                  paras={checkliste.paras}
                  items={checkliste.items}
                  bild={doc.meta.checkliste_bild}
                  bildAlt="Energetische Sanierung — Referenzprojekt von Dr.-Ing. Formazin & Partner"
                />
              </Band>
            </div>
          )}

          {ablauf && (
            <section className={CONTAINER}>
              <h2 className="mt-14 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Ablauf
              </h2>
              <TextParas paras={ablauf.paras} />
              {variante === "timeline" ? (
                <TimelineAblauf steps={ablauf.subs} />
              ) : (
                <AblaufSteps steps={ablauf.subs} />
              )}
            </section>
          )}

          {zielgruppen && (
            <section className={CONTAINER}>
              <h2 className="mt-14 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Für wen
              </h2>
              <TextParas paras={zielgruppen.paras} />
              <ZielTags items={zielgruppen.items} />
            </section>
          )}

          {doc.meta.energie_bruecke === "ja" && (
            <section className={CONTAINER}>
              <h2 className="mt-14 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Brücke zu Energieberatung &amp; Förderung
              </h2>
              <EnergieBruecke />
            </section>
          )}

          {projektSlugs.length > 0 && (
            <div className="mt-14">
              <Band alt heading="Referenzprojekte">
                <p className="mt-3 max-w-3xl font-sans text-base text-[#1e293b]/75">
                  Echte Projekte aus Ahrensfelde, dem Barnim und Berlin — keine Stockfotos.
                </p>
                {variante === "portfolio" ? (
                  <ProjektShowcase slugs={projektSlugs} />
                ) : (
                  <ProjektKarten slugs={projektSlugs} />
                )}
              </Band>
            </div>
          )}

          <div className={CONTAINER}>
            <AutorBox autor={autor} />
          </div>

          {ratgeber.length > 0 && (
            <section className={CONTAINER}>
              <h2 className="mt-14 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Ratgeber zum Thema
              </h2>
              <RatgeberLinks artikel={ratgeber} />
            </section>
          )}

          {faq && faq.subs.length > 0 && (
            <section className={CONTAINER}>
              <h2 className="mt-14 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                Häufige Fragen
              </h2>
              <FaqSection fragen={faq.subs} />
            </section>
          )}

          <div className={CONTAINER}>
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
