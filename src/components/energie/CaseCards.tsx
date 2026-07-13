import { Landmark } from "lucide-react";
import type { CaseSection } from "@/data/energie/types";

/**
 * Echte Referenz-Cases (aus dem Content-Objekt, NICHT aus projekte.ts).
 * Denkmal-Fälle werden dezent mit einem Line-Icon markiert. Keine Fotos —
 * technisch-nüchterne Karten im Haus-Stil.
 */
export function CaseCards({ data }: { data: CaseSection }) {
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

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {data.items.map((c) => (
          <article
            key={c.name}
            className="flex flex-col rounded-[2px] border border-[#1e293b]/10 bg-white p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-sans text-sm font-semibold text-[#2d4196]">
                {c.jahr}
              </span>
              {c.denkmal && (
                <span className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#1e293b]/12 px-2 py-1 font-sans text-xs font-medium text-[#1e293b]/60">
                  <Landmark size={13} strokeWidth={1.8} aria-hidden="true" />
                  Denkmalschutz
                </span>
              )}
            </div>
            <h3 className="mt-3 font-heading text-lg font-bold leading-tight text-[#1e293b]">
              {c.name}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#1e293b]/70">
              {c.umfang}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
