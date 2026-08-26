import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/energie/JsonLd";
import { EntwurfBand } from "@/components/kern/KernBlocks";
import { KERN_AUTOREN } from "@/data/kern/autoren";
import { getWissenArtikel } from "@/lib/content";
import { kernRobots } from "@/lib/kernPreview";

const SITE = "https://www.formazin-partner.de";

export const metadata: Metadata = {
  title: "Wissen: Brandschutz, Statik & Bauplanung verständlich erklärt",
  description:
    "Klare Antworten auf die Fragen, die Bauherren vor der Planung stellen — Brandschutznachweis, Gebäudeklassen, Bauordnung Brandenburg vs. Berlin. Vom Planungsbüro, nicht vom Portal.",
  alternates: { canonical: "/wissen" },
  robots: kernRobots,
};

/**
 * Wissen-Hub (`/wissen`) — Antwort-zuerst-Ratgeber aus content/wissen/.
 * Server-rendered, damit die Artikel-Liste crawlbar ist (SEO-Snapshot-Befund).
 */
export default function WissenHubPage() {
  const artikel = getWissenArtikel();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE },
      { "@type": "ListItem", position: 2, name: "Wissen", item: `${SITE}/wissen` },
    ],
  };

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
          <EntwurfBand />
          <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-16">
            <p className="mt-8 font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
              Wissen
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
              Wissen rund um Brandschutz, Statik und Bauplanung
            </h1>
            <p className="mt-5 max-w-3xl font-sans text-lg text-[#1e293b]/80">
              Klare Antworten auf die Fragen, die Bauherren vor und während der
              Planung stellen — Antwort zuerst, dann die Details. Geschrieben von
              den Menschen, die diese Nachweise täglich erstellen.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {artikel.map((a) => {
                const autor = KERN_AUTOREN[a.meta.autor];
                return (
                  <Link
                    key={a.slug}
                    href={`/wissen/${a.slug}`}
                    className="group flex flex-col rounded-[2px] border border-[#e2e8f0] bg-white p-6 transition-shadow hover:shadow-lg"
                  >
                    <p className="font-heading text-[0.65rem] font-bold uppercase tracking-widest text-[#2d4196]">
                      Brandschutz
                    </p>
                    <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-[#1e293b] group-hover:text-[#2d4196]">
                      {a.meta.titel}
                    </h2>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#1e293b]/70">
                      {a.meta.teaser}
                    </p>
                    <p className="mt-4 font-sans text-xs text-[#1e293b]/55">
                      Von {autor?.name ?? "Dr.-Ing. Formazin & Partner"}
                    </p>
                    <p className="mt-2 font-heading text-sm font-bold text-[#2d4196]">
                      Artikel lesen →
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={breadcrumb} />
      <Footer />
    </>
  );
}
