"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const REFERENZEN = [
  {
    slug: "grundschule-lindenberg",
    title: "Grundschule Lindenberg",
    tag: "Öffentliche Hand · Neubau",
    image: "/images/projekte/grundschule-lindenberg/hero.jpg",
    alt: "Grundschule Lindenberg – Neubau Compartmentschule",
  },
  {
    slug: "vereinsheim-ahrensfelde",
    title: "Vereinsheim Sport- und Schützenverein",
    tag: "Sonderbau · Sanierung",
    image: "/images/projekte/vereinsheim-ahrensfelde/hero.jpg",
    alt: "Vereinsheim Sport- und Schützenverein – Sanierung und Dachaufstockung",
  },
];

export function ReferenzenSection() {
  return (
    <section
      className="bg-[#f3f4f6] py-16 md:py-24 lg:py-28"
      aria-labelledby="referenzen-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2
          id="referenzen-heading"
          className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl"
        >
          Ausgewählte Referenzen
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {REFERENZEN.map((ref) => (
            <motion.div
              key={ref.slug}
              className="group relative overflow-hidden rounded-[2px]"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/projekte/${ref.slug}`}
                className="block aspect-[4/3]"
                aria-label={`${ref.title} – Projekt ansehen`}
              >
                <Image
                  src={ref.image}
                  alt={ref.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                  <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-wider text-white/90">
                    {ref.tag}
                  </span>
                  <span className="font-heading text-lg font-bold text-white md:text-xl">
                    {ref.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-16">
          <Link
            href="/projekte"
            className="inline-flex items-center rounded-[2px] border-2 border-[#2d4196] bg-transparent px-8 py-3 font-sans text-sm font-semibold text-[#2d4196] transition-colors hover:bg-[#2d4196] hover:text-white"
            aria-label="Alle Projekte ansehen"
          >
            Alle Projekte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
