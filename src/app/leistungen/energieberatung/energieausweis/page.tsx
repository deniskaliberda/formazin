import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/energie/ServicePageTemplate";
import { energieausweisContent } from "@/data/energie/energieausweis";

const content = energieausweisContent;

export function generateMetadata(): Metadata {
  return {
    title: content.meta.title,
    description: content.meta.metaDescription,
    alternates: { canonical: content.meta.canonical },
    openGraph: {
      title: `${content.h1} – Formazin & Partner`,
      description: content.meta.metaDescription,
      url: content.meta.canonical,
      ...(content.meta.ogImage ? { images: [{ url: content.meta.ogImage }] } : {}),
    },
  };
}

export default function EnergieausweisPage() {
  return <ServicePageTemplate content={content} />;
}
