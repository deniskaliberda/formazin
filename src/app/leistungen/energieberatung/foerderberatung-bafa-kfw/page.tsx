import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/energie/ServicePageTemplate";
import { foerderberatungContent } from "@/data/energie/foerderberatung-bafa-kfw";

const content = foerderberatungContent;

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

export default function FoerderberatungPage() {
  return <ServicePageTemplate content={content} />;
}
