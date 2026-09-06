"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import type { HeroLink, ImageRef } from "@/data/energie/types";

/**
 * Vollbild-Hero im Signatur-Muster der Startseite (Hero.tsx): füllendes echtes
 * Foto, Gradient unten über die unteren 2/3 (schwarz → transparent, einziges
 * erlaubtes Gradient-Muster, dient der Lesbarkeit), H1 + Subline + CTA unten
 * links IM Bild, optional eine Leistungs-Link-Zeile wie die LEISTUNGEN-Zeile
 * der Startseite. Die Navigation ist der solide Unterseiten-Header (sofort da,
 * kein Fade, kein Transparenz-Blend — wie /projekte, /ueber-uns usw.). Genau ein <h1>.
 */
export function HeroWithImage({
  image,
  eyebrow,
  h1,
  subline,
  cta,
  secondaryCta,
  links,
  trustLine,
}: {
  image: ImageRef;
  eyebrow?: string;
  h1: string;
  subline?: string;
  cta?: { label: string; href: string };
  /** Zweiter Button (Avatar-Weiche: privat vs. gewerblich, 26.08.2026) */
  secondaryCta?: { label: string; href: string };
  links?: HeroLink[];
  /** Regionale Trust-Zeile direkt unter dem CTA (Briefing v2) */
  trustLine?: string;
}) {
  return (
    <header className="relative">
      <Navigation />

      <div className="relative h-[75vh] w-full md:h-screen">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Gradient-Overlay für Text-Lesbarkeit (Haus-Idiom, untere 2/3) */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/40 to-transparent"
          aria-hidden="true"
        />

        {/* Text integriert im Bild unten links */}
        <div className="absolute inset-x-0 bottom-0 z-10 pb-12 md:pb-16 lg:pb-20">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-4xl"
            >
              {eyebrow && (
                <p className="font-sans text-sm font-semibold uppercase tracking-wider text-white/85">
                  {eyebrow}
                </p>
              )}
              <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                {h1}
              </h1>
              {subline && (
                <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-white/85 md:text-xl">
                  {subline}
                </p>
              )}
              {links && links.length > 0 && (
                <nav aria-label="Energie-Leistungen">
                  <ul
                    className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-base text-white/80 md:text-lg"
                    role="list"
                  >
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              {cta && (
                <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
                  <Link
                    href={cta.href}
                    className="inline-flex items-center gap-2 rounded-[2px] bg-white px-7 py-3.5 font-sans text-base font-semibold text-[#2d4196] transition-colors hover:bg-[#f3f4f6]"
                  >
                    {cta.label}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 rounded-[2px] border border-white/70 px-7 py-3.5 font-sans text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                    >
                      {secondaryCta.label}
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )}
              {trustLine && (
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/75">
                  {trustLine}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
