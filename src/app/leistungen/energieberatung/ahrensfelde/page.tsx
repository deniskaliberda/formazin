import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/energie/ServicePageTemplate";
import { geoAhrensfeldeContent } from "@/data/energie/geo-ahrensfelde";

const content = geoAhrensfeldeContent;

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

export default function EnergieberatungAhrensfeldePage() {
  return <ServicePageTemplate content={content} />;
}
