"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Startseite, Sektion „Zwei Wege zu uns" (Energie-Redesign 04.09.2026, Konzept
 * §4.8): die beiden Linien des Büros bildlich trennen. Links Bauen & Planen mit
 * echtem Projektfoto, rechts energetische Sanierung mit dem Energie-Motiv.
 * Haus-Idiome: rounded-[2px], blaues „+", dezente Fades (once).
 */
const WEGE = [
  {
    href: "/leistungen",
    image: "/images/Hero-1.jpg",
    alt: "Neubau eines Schulgebäudes, geplant von Dr.-Ing. Formazin & Partner",
    eyebrow: "Architektur & Ingenieurbau",
    title: "Bauen & Planen",
    text: "Architektur, Brandschutz, Tragwerksplanung und Generalplanung nach HOAI, von der Idee bis zur Übergabe.",
    punkte: ["Wohn-, Büro-, Bildungs- und Sportbauten", "Neubau und Bauen im Bestand", "Alles aus einer Hand"],
    cta: "Zu den Leistungen",
  },
  {
    href: "/leistungen/energieberatung",
    image: "/images/energie/hero-energieberatung-v2.jpg",
    alt: "Frisch saniertes Zweifamilienhaus mit heller Fassade und Photovoltaik in einer Dorfstraße bei Berlin",
    eyebrow: "Energieberatung",
    title: "Energetisch sanieren & fördern",
    text: "Sanierungsfahrplan, Förderung, Nachweise und bauliche Umsetzung für Wohnhäuser, Wohnanlagen und Bestand.",
    punkte: ["Für private Eigentümer und Bestandshalter", "BAFA- und KfW-Förderung gesichert", "Vor-Ort in Berlin und Brandenburg"],
    cta: "Zur Energieberatung",
  },
] as const;

export function ZweiWegeSection() {
  return (
    <section
      className="border-t border-[#1e293b]/10 bg-[#f3f4f6] py-16 md:py-20 lg:py-24"
      aria-labelledby="zwei-wege-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        <h2
          id="zwei-wege-heading"
          className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl"
        >
          Zwei Wege zu uns
        </h2>
        <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
          Ob Sie bauen oder Ihr Gebäude energetisch fit machen wollen: Beides kommt aus einem Büro.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {WEGE.map((weg, i) => (
            <motion.div
              key={weg.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={weg.href}
                className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-[#1e293b]/10 bg-white transition-colors hover:border-[#2d4196]"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={weg.image}
                    alt={weg.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#2d4196]">
                    {weg.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-[#1e293b] md:text-3xl">
                    {weg.title}
                  </h3>
                  <p className="mt-3 font-sans text-base leading-relaxed text-[#1e293b]/75 md:text-lg">
                    {weg.text}
                  </p>
                  <ul className="mt-5 space-y-2" role="list">
                    {weg.punkte.map((p) => (
                      <li key={p} className="flex items-start gap-3 font-sans text-base text-[#1e293b]">
                        <span className="font-heading text-xl font-bold leading-none text-[#2d4196]" aria-hidden="true">
                          +
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-sans text-base font-semibold text-[#2d4196]">
                    {weg.cta}
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
