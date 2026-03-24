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

  // Keep title under 60 chars total (with template " | Formazin & Partner" = 21 chars)
  const titleBase =
    projekt.name.length + projekt.ort.length + 3 + 21 > 60
      ? projekt.name
      : `${projekt.name} – ${projekt.ort}`;

  const desc = projekt.beschreibung.length > 150
    ? projekt.beschreibung.slice(0, 147) + "..."
    : projekt.beschreibung;

  return {
    title: titleBase,
    description: desc,
    alternates: { canonical: `/projekte/${projekt.slug}` },
    openGraph: {
      title: `${projekt.name} – Formazin & Partner`,
      description: desc,
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
