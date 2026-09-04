import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Home, type LucideIcon } from "lucide-react";
import type { AvatarSplitData } from "@/data/energie/types";

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  building: Building2,
};

/**
 * Avatar-Einstieg (Feith/Denis 26.08.2026): Privat und Gewerbe früh trennen.
 * Gleiche Kartensprache wie die Weiche auf der Anfrage-Seite — border-Karten,
 * rounded-[2px], "+"-blaues Icon-Feld, Pfeil-CTA.
 */
export function AvatarSplit({ data }: { data: AvatarSplitData }) {
  return (
    <div>
      <h2 className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
        {data.heading}
      </h2>
      {data.intro && (
        <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
          {data.intro}
        </p>
      )}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {data.items.map((e) => {
          const Icon = ICONS[e.icon] ?? Home;
          return (
            <Link
              key={e.href}
              href={e.href}
              className="group flex flex-col overflow-hidden rounded-[2px] border border-[#1e293b]/10 bg-white transition-colors hover:border-[#2d4196]"
            >
              {/* Bildkachel (Redesign 04.09.2026): Avatar bildlich, Icon nur als Fallback */}
              {e.image ? (
                <span className="relative block aspect-[16/9]">
                  <Image
                    src={e.image.src}
                    alt={e.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </span>
              ) : null}
              <span className="flex flex-1 flex-col p-6 md:p-8">
              {!e.image && (
                <span className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-[#2d4196]/8 text-[#2d4196]">
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
              )}
              <span className="mt-4 font-heading text-xl font-bold text-[#1e293b] md:text-2xl">
                {e.title}
              </span>
              <span className="mt-2 font-sans text-base leading-relaxed text-[#1e293b]/70">
                {e.text}
              </span>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 font-sans text-base font-semibold text-[#2d4196]">
                {e.cta}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
              </span>
            </Link>
          );
        })}
      </div>
      {data.fallback && (
        <p className="mt-5 font-sans text-base text-[#1e293b]/70">
          {data.fallback.text}{" "}
          <Link
            href={data.fallback.href}
            className="font-semibold text-[#2d4196] underline underline-offset-2 hover:text-[#243a7a]"
          >
            {data.fallback.linkLabel}
          </Link>
        </p>
      )}
    </div>
  );
}
