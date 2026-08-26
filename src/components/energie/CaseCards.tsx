import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import type { CaseItem, CaseSection } from "@/data/energie/types";

/**
 * Echte Referenz-Cases (aus dem Content-Objekt, NICHT aus projekte.ts).
 * Denkmal-Fälle werden dezent mit einem Line-Icon markiert. Keine Fotos —
 * technisch-nüchterne Karten im Haus-Stil.
 *
 * Feith-Feedback 12.08.2026: Karten mit strukturierten Feldern (Gebäudetyp,
 * Aufgabe, energetischer Bezug, Nutzen) werden als Beweisführung gerendert;
 * Karten ohne diese Felder zeigen wie bisher den umfang-Einzeiler.
 */
function StructuredRows({ c }: { c: CaseItem }) {
  const rows: [string, string | undefined][] = [
    ["Gebäudetyp", c.gebaeudetyp],
    ["Aufgabe", c.aufgabe],
    ["Energetischer Bezug", c.energetischerBezug],
    ["Nutzen", c.nutzen],
  ];
  return (
    <dl className="mt-4 space-y-3">
      {rows
        .filter((row): row is [string, string] => Boolean(row[1]))
        .map(([label, text]) => (
          <div key={label}>
            <dt className="font-sans text-xs font-semibold uppercase tracking-wider text-[#2d4196]">
              {label}
            </dt>
            <dd className="mt-1 font-sans text-sm leading-relaxed text-[#1e293b]/70">
              {text}
            </dd>
          </div>
        ))}
    </dl>
  );
}

export function CaseCards({ data }: { data: CaseSection }) {
  const twoUp = data.items.length === 2;
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

      <div
        className={`mt-10 grid grid-cols-1 gap-5 ${
          twoUp ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {data.items.map((c) => {
          const structured = Boolean(
            c.gebaeudetyp || c.aufgabe || c.energetischerBezug || c.nutzen
          );
          return (
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
              {structured ? (
                <StructuredRows c={c} />
              ) : (
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#1e293b]/70">
                  {c.umfang}
                </p>
              )}
              {c.href && (
                <Link
                  href={c.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 font-sans text-sm font-semibold text-[#2d4196] transition-colors hover:text-[#243a7a]"
                >
                  Zum Projekt <ArrowRight size={15} aria-hidden="true" />
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
