import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/energie/ServicePageTemplate";
import { gegnachweisContent } from "@/data/energie/gegnachweis";

const content = gegnachweisContent;

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

export default function GegNachweisPage() {
  return <ServicePageTemplate content={content} />;
}
