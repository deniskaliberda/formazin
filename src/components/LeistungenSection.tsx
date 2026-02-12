"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LEISTUNGEN = [
  { title: "Architektur", href: "/leistungen#architektur" },
  { title: "Brandschutz", href: "/leistungen#brandschutz" },
  { title: "Tragwerksplanung", href: "/leistungen#tragwerk" },
  { title: "Wärmeschutz", href: "/leistungen#waermeschutz" },
  { title: "Generalplanung", href: "/leistungen#generalplanung" },
];

export function LeistungenSection() {
  return (
    <section
      className="border-t border-[#1e293b]/10 bg-[#f3f4f6] py-16 md:py-20 lg:py-24"
      aria-labelledby="leistungen-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        <h2
          id="leistungen-heading"
          className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl"
        >
          Leistungen
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
          {/* Links: Fließtext (linksbündig) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-lg space-y-6 text-justify lg:max-w-xl"
          >
            <p className="font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Gebäude sind für uns mehr als Hüllen – sie sind Lebens- und
              Arbeitsräume. Deshalb verbinden wir Architektur und Ingenieurwesen
              zu ganzheitlichen Lösungen, die Gestaltung, Funktion und Technik
              vereinen.
            </p>

            <p className="font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Wir planen Räume strukturell, energetisch und wirtschaftlich – mit
              Blick auf Nachhaltigkeit, Effizienz und Qualität.
            </p>

            <p className="font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl lg:text-2xl">
              Als interdisziplinäres Team entwickeln wir durchdachte Konzepte von
              der Idee bis zur Umsetzung. So entstehen langlebige, zukunftsfähige
              Gebäude, die den Menschen in den Mittelpunkt stellen.
            </p>
            </div>
          </motion.div>

          {/* Rechts: Leistungen-Namen (rechtsbündig) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:min-w-[380px]"
          >
            <ul className="space-y-6 text-right" role="list">
              {LEISTUNGEN.map((leistung) => (
                <li key={leistung.title}>
                  <Link
                    href={leistung.href}
                    className="group inline-flex items-center gap-4"
                  >
                    <span className="font-sans text-lg font-medium text-[#1e293b] transition-colors group-hover:text-[#2d4196] md:text-xl lg:text-2xl">
                      {leistung.title}
                    </span>
                    <span
                      className="font-heading text-2xl font-bold text-[#2d4196] transition-all md:text-3xl"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
