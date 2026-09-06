"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROJEKTE } from "@/data/projekte";

/**
 * Startseite, Sektion „Projekte" (Energie-Redesign 04.09.2026, Konzept §4.8):
 * vier echte Referenzen mit echten Fotos aus src/data/projekte.ts, dazu der
 * Link auf die Projektübersicht. Nur echte Fotografie (Haus-Regel).
 */
const AUSWAHL = [
  "ernst-reuter-siedlung",
  "grundschule-lindenberg",
  "fassadensanierung-frankfurter-allee",
  "sanierung-wohnhaus-mehrow",
];

export function ProjekteSection() {
  const projekte = AUSWAHL.map((slug) => PROJEKTE.find((p) => p.slug === slug)).filter(
    (p): p is (typeof PROJEKTE)[number] => Boolean(p)
  );

  return (
    <section
      className="border-t border-[#1e293b]/10 bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="projekte-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="projekte-heading"
              className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl"
            >
              Projekte
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
              Gebaut und saniert in Berlin und Brandenburg, von der Schule bis zur denkmalgeschützten Wohnanlage.
            </p>
          </div>
          <Link
            href="/projekte"
            className="inline-flex items-center gap-2 font-sans text-base font-semibold text-[#2d4196] hover:text-[#243a7a]"
          >
            Alle Projekte
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projekte.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Link
                href={`/projekte/${p.slug}`}
                className="group block overflow-hidden rounded-[2px] border border-[#1e293b]/10 bg-white transition-colors hover:border-[#2d4196]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={`${p.name}, ${p.ort}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#2d4196]">
                    {p.typ} · {p.jahr}
                  </p>
                  <h3 className="mt-1.5 font-heading text-lg font-bold leading-tight text-[#1e293b] transition-colors group-hover:text-[#2d4196]">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-[#1e293b]/60">{p.ort}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
