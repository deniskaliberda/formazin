import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import type { HeroLink, ImageRef } from "@/data/energie/types";

/**
 * Split-Hero der Energie-Linie (Redesign 04.09.2026, DESIGN.md-Addendum):
 * Text links, Bild oder Funnel rechts, kein Vollbild, kein Gradient, Text
 * liegt nie auf dem Bild. Solide Navigation (fixed, daher pt-24/28).
 *
 * - `image`   → rechte Spalte zeigt das Bild (Service-/Geo-Seiten).
 * - `aside`   → rechte Spalte zeigt z. B. den Funnel; das Bild wandert dann
 *               unter den Text der linken Spalte (Avatar-Landingpages).
 * Genau ein <h1>.
 */
export function HeroSplit({
  image,
  eyebrow,
  h1,
  subline,
  cta,
  secondaryCta,
  links,
  trustLine,
  aside,
}: {
  image?: ImageRef;
  eyebrow?: string;
  h1: string;
  subline?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  links?: HeroLink[];
  trustLine?: string;
  aside?: React.ReactNode;
}) {
  const imageInText = Boolean(aside && image);

  return (
    <header>
      <Navigation />
      <section className="bg-[#f3f4f6] pt-24 md:pt-28">
        <div className="mx-auto grid max-w-screen-2xl items-center gap-10 px-6 pb-12 md:px-12 md:pb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:px-16 lg:pb-20 xl:px-20">
          <div>
            {eyebrow && (
              <p className="font-sans text-sm font-semibold uppercase tracking-wider text-[#2d4196]">
                {eyebrow}
              </p>
            )}
            <h1 className="mt-2 max-w-3xl font-heading text-3xl font-bold leading-tight text-[#1e293b] md:text-4xl lg:text-5xl">
              {h1}
            </h1>
            {subline && (
              <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-[#1e293b]/75 md:text-xl">
                {subline}
              </p>
            )}
            {(cta || secondaryCta) && (
              <div className="mt-7 flex flex-wrap items-center gap-3 md:gap-4">
                {cta && (
                  <Link
                    href={cta.href}
                    className="inline-flex items-center gap-2 rounded-[2px] bg-[#2d4196] px-7 py-3.5 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a]"
                  >
                    {cta.label}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-[2px] border border-[#1e293b]/25 bg-white px-7 py-3.5 font-sans text-base font-semibold text-[#1e293b] transition-colors hover:border-[#2d4196] hover:text-[#2d4196]"
                  >
                    {secondaryCta.label}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                )}
              </div>
            )}
            {trustLine && (
              <p className="mt-4 font-sans text-sm leading-relaxed text-[#1e293b]/60">
                {trustLine}
              </p>
            )}
            {links && links.length > 0 && (
              <nav aria-label="Energie-Leistungen" className="mt-8 border-t border-[#1e293b]/10 pt-5">
                <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-base text-[#1e293b]/70" role="list">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition-colors hover:text-[#2d4196]">
                        <span className="mr-1.5 font-heading font-bold text-[#2d4196]" aria-hidden="true">
                          +
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            {imageInText && image && (
              <div className="relative mt-8 hidden overflow-hidden rounded-[2px] lg:block">
                <div className="aspect-[16/9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            )}
          </div>

          {aside ? (
            <div>{aside}</div>
          ) : (
            image && (
              <div className="relative overflow-hidden rounded-[2px]">
                <div className="aspect-[4/3] lg:aspect-[5/4] lg:max-h-[min(60vh,640px)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            )
          )}

          {/* Mobil: Bild unter dem Funnel, damit der erste Klick oben bleibt */}
          {imageInText && image && (
            <div className="relative overflow-hidden rounded-[2px] lg:hidden">
              <div className="aspect-[16/9]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={75}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </header>
  );
}
