import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJEKTE } from "@/data/projekte";
import { ProjektContent } from "./projekt-content";

export function generateStaticParams() {
  return PROJEKTE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projekt = PROJEKTE.find((p) => p.slug === slug);
  if (!projekt) return {};

  return {
    title: `${projekt.name} – ${projekt.ort}`,
    description: projekt.beschreibung.slice(0, 160),
    alternates: { canonical: `/projekte/${projekt.slug}` },
    openGraph: {
      title: `${projekt.name} – Dr.-Ing. Formazin & Partner`,
      description: projekt.beschreibung.slice(0, 160),
      images: [{ url: projekt.image }],
    },
  };
}

export default async function ProjektDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projekt = PROJEKTE.find((p) => p.slug === slug);

  if (!projekt) {
    notFound();
  }

  return <ProjektContent projekt={projekt} />;
}
