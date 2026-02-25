"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJEKTE, type Projekt } from "@/data/projekte";

export default async function ProjektDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projekt = PROJEKTE.find((p) => p.slug === slug);

  if (!projekt) {
    notFound();
  }

  return <ProjektContent projekt={projekt} />;
}

function ProjektContent({ projekt }: { projekt: Projekt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galerieImages = projekt.galerie.slice(1);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galerieImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galerieImages.length) % galerieImages.length);
  };

  return (
    <>
      <Navigation />

      {/* Hero-Bild */}
      <section className="bg-white pt-24 md:pt-28 lg:pt-32">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2px]">
            <Image
              src={projekt.image}
              alt={projekt.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Projekt-Details */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-12">
            {/* Links: Beschreibung */}
            <div>
              <p className="font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                {projekt.beschreibung}
              </p>
            </div>

            {/* Rechts: Eckdaten */}
            <div>
              <div className="sticky top-8">
                <dl className="space-y-4 border-l border-[#2d4196] pl-6">
                  <div className="flex">
                    <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                      Projekt
                    </dt>
                    <dd className="flex-1 font-sans text-sm font-medium text-[#1e293b]">
                      {projekt.name}
                    </dd>
                  </div>

                  <div className="flex">
                    <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                      Ort
                    </dt>
                    <dd className="flex-1 font-sans text-sm font-medium text-[#1e293b]">
                      {projekt.ort}
                    </dd>
                  </div>

                  <div className="flex">
                    <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                      Zeitraum
                    </dt>
                    <dd className="flex-1 font-sans text-sm font-medium text-[#1e293b]">
                      {projekt.details.fertigstellung}
                    </dd>
                  </div>

                  <div className="flex">
                    <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                      Auftraggeber
                    </dt>
                    <dd className="flex-1 font-sans text-sm font-medium text-[#1e293b]">
                      {projekt.details.bauherr}
                    </dd>
                  </div>

                  <div className="flex">
                    <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                      Leistungsumfang
                    </dt>
                    <dd className="flex-1 space-y-0.5 font-sans text-sm font-medium text-[#1e293b]">
                      {projekt.details.leistungen.map((leistung, index) => (
                        <p key={index}>{leistung}</p>
                      ))}
                    </dd>
                  </div>

                  <div className="flex">
                    <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                      Nutzfläche
                    </dt>
                    <dd className="flex-1 font-sans text-sm font-medium text-[#1e293b]">
                      {projekt.details.bgf}
                    </dd>
                  </div>

                  {projekt.details.baukosten && (
                    <div className="flex">
                      <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                        Baukosten
                      </dt>
                      <dd className="flex-1 font-sans text-sm font-medium text-[#1e293b]">
                        {projekt.details.baukosten}
                      </dd>
                    </div>
                  )}

                  <div className="flex">
                    <dt className="w-40 flex-shrink-0 font-sans text-sm text-[#1e293b]/60">
                      Kategorie/n
                    </dt>
                    <dd className="flex-1 font-sans text-sm font-medium text-[#1e293b]">
                      {projekt.kategorie}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projekt-Galerie */}
      {galerieImages.length > 0 && (
        <section className="border-t border-[#1e293b]/10 bg-[#f3f4f6] py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="relative">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2px]">
                <Image
                  src={galerieImages[currentImageIndex]}
                  alt={`${projekt.name} - Bild ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                
                {/* Navigation nur wenn mehr als 1 Bild */}
                {galerieImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
                      aria-label="Vorheriges Bild"
                    >
                      <ChevronLeft className="h-6 w-6 text-[#1e293b]" strokeWidth={2} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
                      aria-label="Nächstes Bild"
                    >
                      <ChevronRight className="h-6 w-6 text-[#1e293b]" strokeWidth={2} />
                    </button>

                    {/* Indikator-Punkte */}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {galerieImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/60"
                          }`}
                          aria-label={`Zu Bild ${index + 1} springen`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <p className="mt-3 text-center font-sans text-sm text-[#1e293b]/70">
                Bild {currentImageIndex + 1} von {galerieImages.length}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA zurück */}
      <section className="border-t border-[#1e293b]/10 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-screen-2xl px-6 text-center md:px-12 lg:px-16 xl:px-20">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-1 font-sans text-sm text-[#2d4196] transition-colors hover:text-[#243a7a] hover:underline"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Zurück zur Projektübersicht
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
