import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CtaData } from "@/data/energie/types";

/**
 * Abschluss-CTA. Verlinkt auf den Anfrage-Funnel. Solider Akzentbalken
 * (#2d4196), kein Gradient, kein Emoji — Button mit lucide-Pfeil.
 */
export function Cta({ data }: { data: CtaData }) {
  return (
    <div className="rounded-[2px] bg-[#2d4196] px-6 py-12 text-center md:px-12 md:py-16">
      <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-white md:text-4xl">
        {data.heading}
      </h2>
      {data.text && (
        <p className="mx-auto mt-4 max-w-2xl font-sans text-lg leading-relaxed text-white/85 md:text-xl">
          {data.text}
        </p>
      )}
      <Link
        href={data.href}
        className="mt-8 inline-flex items-center gap-2 rounded-[2px] bg-white px-8 py-3.5 font-sans text-base font-semibold text-[#2d4196] transition-colors hover:bg-[#f3f4f6]"
      >
        {data.buttonLabel}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}
