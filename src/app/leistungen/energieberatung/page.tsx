import { kernRobots } from "@/lib/kernPreview";
import type { Metadata } from "next";
import { EnergyHubPage } from "@/components/energie/EnergyHubPage";
import { energieberatungContent } from "@/data/energie/energieberatung";

const content = energieberatungContent;

export function generateMetadata(): Metadata {
  return {
    robots: kernRobots,
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

export default function EnergieberatungPage() {
  return <EnergyHubPage content={content} />;
}
