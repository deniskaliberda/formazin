"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const PROJEKTE = [
  {
    slug: "grundschule-lindenberg",
    name: "Grundschule Lindenberg",
    kategorie: "Öffentliche Hand",
    typ: "Neubau",
    image: "/images/projekte/grundschule-lindenberg/hero.jpg",
    ort: "Ahrensfelde OT Lindenberg",
    jahr: "2018 – 2022",
    beschreibung: "Neubau einer Grundschule als Compartmentschule mit Mensa, Hort und Sporthalle. Großzügige Bereiche gliedern sich um Gemeinschaftsbereiche.",
    leistungen: ["Objektplanung LP 1-8", "Tragwerksplanung LP 1-6", "Brandschutzkonzept"],
    bgf: "10.056 m²",
  },
  {
    slug: "vereinsheim-ahrensfelde",
    name: "Vereinsheim Sport- und Schützenverein",
    kategorie: "Sonderbau",
    typ: "Sanierung",
    image: "/images/projekte/vereinsheim-ahrensfelde/hero.jpg",
    ort: "Ahrensfelde",
    jahr: "2010",
    beschreibung: "Umbau, Sanierung und Dachaufstockung eines Vereinsheims. Durch eine einfache und wirtschaftliche Bauweise wurde das Gebäude um 50 % erweitert.",
    leistungen: ["Objektplanung LP 1-9", "Tragwerksplanung", "Bauüberwachung"],
    bgf: "751 m²",
  },
];

export default function ProjektePage() {
  return (
    <>
      <Navigation />

      <section className="bg-white py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="space-y-20 md:space-y-28 lg:space-y-32">
            {PROJEKTE.map((projekt, index) => (
              <article key={projekt.slug}>
                <Link
                  href={`/projekte/${projekt.slug}`}
                  className="group block"
                >
                  {/* Großes Bild */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[2px]">
                    <Image
                      src={projekt.image}
                      alt={projekt.name}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="100vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Infos unter dem Bild */}
                  <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 lg:grid-cols-[1fr_auto] lg:gap-12">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-sans text-xs font-medium uppercase tracking-wider text-[#2d4196]">
                          {projekt.kategorie}
                        </span>
                        <span className="text-[#1e293b]/30">·</span>
                        <span className="font-sans text-xs font-medium uppercase tracking-wider text-[#1e293b]/50">
                          {projekt.typ}
                        </span>
                      </div>
                      <h2 className="mt-3 font-heading text-2xl font-bold text-[#1e293b] md:text-3xl lg:text-4xl">
                        {projekt.name}
                      </h2>
                      <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-[#1e293b]/70 md:text-lg">
                        {projekt.beschreibung}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#2d4196] transition-all group-hover:gap-3">
                        Projekt ansehen
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Eckdaten rechts */}
                    <div className="flex flex-wrap gap-8 lg:flex-col lg:gap-4 lg:border-l lg:border-[#1e293b]/10 lg:pl-8">
                      <div>
                        <dt className="font-sans text-xs uppercase tracking-wider text-[#1e293b]/40">
                          Ort
                        </dt>
                        <dd className="mt-1 font-sans text-sm font-medium text-[#1e293b]">
                          {projekt.ort}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-sans text-xs uppercase tracking-wider text-[#1e293b]/40">
                          Zeitraum
                        </dt>
                        <dd className="mt-1 font-sans text-sm font-medium text-[#1e293b]">
                          {projekt.jahr}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-sans text-xs uppercase tracking-wider text-[#1e293b]/40">
                          Nutzfläche
                        </dt>
                        <dd className="mt-1 font-sans text-sm font-medium text-[#1e293b]">
                          {projekt.bgf}
                        </dd>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Trennlinie zwischen Projekten */}
                {index < PROJEKTE.length - 1 && (
                  <div className="mt-20 border-b border-[#1e293b]/10 md:mt-28 lg:mt-32" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
