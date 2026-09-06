"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { LEISTUNGEN } from "@/data/leistungen";

export default function LeistungenPage() {
  const [selectedLeistung, setSelectedLeistung] = useState(0);

  useEffect(() => {
    const selectFromHash = () => {
    const rawHash = window.location.hash.slice(1);
    const hash = rawHash === "waermeschutz" ? "energieberatung" : rawHash;
    if (hash) {
      const index = LEISTUNGEN.findIndex(l => l.id === hash);
      if (index !== -1) {
        setSelectedLeistung(index);
        // Smooth scroll zum Inhalt
        setTimeout(() => {
          const element = document.getElementById('leistungen-content');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  return (
    <>
      <Navigation />

      <main>
      {/* Thumbnail-Navigation */}
      <section className="bg-white pt-28 pb-8 md:pt-32 md:pb-10" id="leistungen-content" aria-label="Leistungsübersicht">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="mb-8 text-center font-heading text-3xl font-bold md:text-4xl lg:text-5xl">Leistungen</h1>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {LEISTUNGEN.map((leistung, index) => (
              <button
                key={leistung.id}
                onClick={() => { setSelectedLeistung(index); window.history.replaceState(null, "", `#${leistung.id}`); }}
                aria-pressed={selectedLeistung === index}
                className={`flex h-12 items-center text-center rounded-[2px] px-4 font-heading text-sm font-bold transition-all md:h-14 md:px-5 md:text-base ${
                  selectedLeistung === index
                    ? "bg-[#2d4196] text-white"
                    : "bg-white text-[#1e293b] hover:bg-[#f3f4f6] hover:text-[#2d4196]"
                }`}
              >
                {leistung.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail-Bereich – 50/50 Split */}
      <section className="bg-[#f3f4f6] py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Links: Großes Bild */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] lg:aspect-[4/3] lg:max-h-[460px]">
              <Image
                src={LEISTUNGEN[selectedLeistung].image}
                alt={LEISTUNGEN[selectedLeistung].imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Rechts: Text */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-2xl font-bold text-[#2d4196] md:text-3xl lg:text-4xl">
                {LEISTUNGEN[selectedLeistung].title}
              </h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
                {LEISTUNGEN[selectedLeistung].intro}
              </p>
              
              <ul className="mt-8 space-y-3" role="list">
                {LEISTUNGEN[selectedLeistung].leistungen.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2d4196]"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-base text-[#1e293b] md:text-lg">
                      {punkt}
                    </span>
                  </li>
                ))}
              </ul>

              {LEISTUNGEN[selectedLeistung].detailLink && (
                <div className="mt-10">
                  <Link
                    href={LEISTUNGEN[selectedLeistung].detailLink.href}
                    className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#2d4196] px-5 py-2.5 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a]"
                  >
                    {LEISTUNGEN[selectedLeistung].detailLink.label}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              )}

              {LEISTUNGEN[selectedLeistung].referenzProjekte.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#1e293b]/50">
                    Referenzprojekte
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {LEISTUNGEN[selectedLeistung].referenzProjekte.map((projekt) => (
                      <Link
                        key={projekt.slug}
                        href={`/projekte/${projekt.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#2d4196]/20 px-4 py-2 font-sans text-sm text-[#2d4196] transition-colors hover:bg-[#2d4196] hover:text-white"
                      >
                        {projekt.name}
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
}
