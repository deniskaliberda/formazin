import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/energie/JsonLd";
import { LeistungAnsicht } from "@/components/kern/LeistungAnsicht";
import { KERN_AUTOREN } from "@/data/kern/autoren";
import { findSection, getLeistung, getLeistungen, metaList } from "@/lib/content";
import { kernRobots } from "@/lib/kernPreview";

const SITE = "https://www.formazin-partner.de";
const ORG_ID = `${SITE}/#localbusiness`;
const AREA_SERVED = ["Ahrensfelde", "Barnim", "Bernau bei Berlin", "Berlin", "Brandenburg"];

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
  const autoren = metaList(doc, "autor").map((key) => KERN_AUTOREN[key] ?? KERN_AUTOREN.buero);
  const faq = findSection(doc, "Häufige Fragen");

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
  for (const autor of autoren) {
    if (!autor.personId) continue;
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

  return <>
    <LeistungAnsicht doc={doc} />
    {schemas.map((schema, i) => <JsonLd key={i} data={schema} />)}
  </>;
}
