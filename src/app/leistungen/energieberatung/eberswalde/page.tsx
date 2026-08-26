import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/energie/ServicePageTemplate";
import { geoEberswaldeContent } from "@/data/energie/geo-eberswalde";

const content = geoEberswaldeContent;

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

export default function EnergieberatungEberswaldePage() {
  return <ServicePageTemplate content={content} />;
}
