"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PROJEKTE } from "@/data/projekte";

const FILTERS = [
  { label: "Alle", filter: () => true },
  { label: "Neubau", filter: (p: (typeof PROJEKTE)[number]) => p.typ === "Neubau" },
  { label: "Sanierung", filter: (p: (typeof PROJEKTE)[number]) => p.typ === "Sanierung" },
  { label: "Öffentlich", filter: (p: (typeof PROJEKTE)[number]) => p.kategorie === "Öffentliche Hand" },
  { label: "Privat", filter: (p: (typeof PROJEKTE)[number]) => p.kategorie === "Privat" },
] as const;

export default function ProjektePage() {
  const [activeFilter, setActiveFilter] = useState(0);

  const filtered = PROJEKTE.filter(FILTERS[activeFilter].filter);

  return (
    <>
      <Navigation />

      <section className="bg-white py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl lg:text-4xl">
            Projekte
          </h1>

          {/* Filter-Tabs */}
          <div className="mt-8 flex justify-center gap-8 md:gap-10">
            {FILTERS.map((f, index) => (
              <button
                key={f.label}
                type="button"
                onClick={() => setActiveFilter(index)}
                className={`relative pb-2 font-sans text-sm tracking-wide transition-colors md:text-base ${
                  activeFilter === index
                    ? "text-[#1e293b]"
                    : "text-[#1e293b]/40 hover:text-[#1e293b]/70"
                }`}
                aria-pressed={activeFilter === index}
              >
                {f.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px transition-all ${
                    activeFilter === index
                      ? "bg-[#1e293b]"
                      : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Projekt-Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((projekt, index) => (
                <motion.article
                  key={projekt.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`/projekte/${projekt.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                      <Image
                        src={projekt.image}
                        alt={projekt.name}
                        fill
                        priority={index < 3}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-4">
                      <h2 className="font-heading text-lg font-bold text-[#1e293b] group-hover:text-[#2d4196] transition-colors md:text-xl">
                        {projekt.name}
                      </h2>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
