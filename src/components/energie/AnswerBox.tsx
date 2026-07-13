import type { AnswerBoxData } from "@/data/energie/types";

/**
 * AEO-Direkt-Antwort: zitierfähiger Kurzabsatz. Dezent hervorgehoben über
 * einen linken Akzentbalken (#2d4196) auf grauem Grund — kein Gradient,
 * scharfe Ecken.
 */
export function AnswerBox({ data }: { data: AnswerBoxData }) {
  return (
    <div className="rounded-[2px] border border-[#1e293b]/10 border-l-4 border-l-[#2d4196] bg-[#f3f4f6] p-5 md:p-6">
      {data.eyebrow && (
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#2d4196]">
          {data.eyebrow}
        </p>
      )}
      <p className="mt-2 font-sans text-lg leading-relaxed text-[#1e293b] md:text-xl">
        {data.text}
      </p>
    </div>
  );
}
