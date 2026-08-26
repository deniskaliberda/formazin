import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getLeistungen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leistungen: Tragwerksplanung, Brandschutz, Architektur & Energie",
  description:
    "Fünf Leistungsfelder, ein Büro: Tragwerksplanung, Brandschutz, Architektur, Generalplanung und Wärmeschutz — plus Energieberatung mit Förderung. Seit 1990 in Ahrensfelde für Berlin und Brandenburg.",
  alternates: { canonical: "/leistungen" },
};

/**
 * Leistungs-Übersicht — Server-Component statt Client-Tabs, damit alle
 * Leistungen crawlbar sind (SEO-Snapshot: 4/5 Leistungen waren unsichtbar).
 * Die 5 KERN-Leistungen kommen aus content/leistungen/, die Energieberatung
 * verlinkt auf ihren bestehenden Cluster.
 */
export default function LeistungenPage() {
  const kernLeistungen = getLeistungen();

  const karten = [
    ...kernLeistungen.map((doc) => ({
      href: `/leistungen/${doc.slug}`,
      titel: doc.meta.kurz_titel ?? doc.meta.titel,
      kurz: doc.meta.kurz ?? "",
      bild: doc.meta.bild ?? "/images/leistungen/tragwerk.png",
    })),
    {
      href: "/leistungen/energieberatung",
      titel: "Energieberatung",
      kurz: "Energetische Sanierung planen, fördern und sicher umsetzen — iSFP, Energieausweis, KfW-Baubegleitung und Förderberatung.",
      bild: "/images/energie/hero-energieberatung.jpg",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
            <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#2d4196]">
              Leistungen
            </p>
            <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
              Sechs Leistungsfelder — ein Büro, ein Ansprechpartner
            </h1>
            <p className="mt-5 max-w-3xl font-sans text-lg text-[#1e293b]/80">
              Tragwerk, Brandschutz, Architektur, Generalplanung, Bauphysik und
              Energieberatung kommen bei uns aus einem Haus. Das verkürzt
              Abstimmungen — und Sie haben für alles einen Ansprechpartner.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {karten.map((karte) => (
                <Link
                  key={karte.href}
                  href={karte.href}
                  className="group flex flex-col overflow-hidden rounded-[2px] border border-[#e2e8f0] bg-white transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={karte.bild}
                      alt={`${karte.titel} — Dr.-Ing. Formazin & Partner`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-xl font-bold text-[#1e293b] group-hover:text-[#2d4196]">
                      {karte.titel}
                    </h2>
                    <p className="mt-2.5 flex-1 font-sans text-[0.95rem] leading-relaxed text-[#1e293b]/75">
                      {karte.kurz}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-[#2d4196]">
                      Mehr erfahren
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
