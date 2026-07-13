import Image from "next/image";
import type { TrustData } from "@/data/energie/types";
import { renderInline } from "./richText";

/**
 * Autor-/Experten-Block (E-E-A-T). Foto ist optional: fehlt es, rendert der
 * Block sauber ohne Bild (Name + Rolle + Qualifikations-Pills). Abgeleitet aus
 * dem ExpertTrustPanel des Funnels. Kein Gradient, scharfe Ecken.
 */
export function TrustBar({ data }: { data: TrustData }) {
  const hasPhoto = Boolean(data.photo);

  return (
    <aside className="rounded-[2px] border border-[#1e293b]/10 bg-white p-6 md:p-8">
      <div
        className={`grid gap-6 ${hasPhoto ? "md:grid-cols-[180px_minmax(0,1fr)] md:items-start" : ""}`}
      >
        {data.photo && (
          <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-[2px] bg-[#1e293b]/5 md:w-full">
            <Image
              src={data.photo.src}
              alt={data.photo.alt}
              fill
              sizes="(min-width: 768px) 180px, 160px"
              className="object-cover"
            />
          </div>
        )}

        <div className="min-w-0">
          {data.eyebrow && (
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#2d4196]">
              {data.eyebrow}
            </p>
          )}
          <h2 className="mt-1 font-heading text-2xl font-bold leading-tight text-[#1e293b] md:text-3xl">
            {data.name}
          </h2>
          {data.role && (
            <p className="mt-1 font-sans text-sm font-medium text-[#1e293b]/60 md:text-base">
              {data.role}
            </p>
          )}
          {data.intro && (
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#1e293b]/80 md:text-lg">
              {renderInline(data.intro)}
            </p>
          )}

          {data.credentials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" role="list">
              {data.credentials.map((item) => (
                <li
                  key={item}
                  className="rounded-[2px] border border-[#2d4196]/20 bg-[#2d4196]/[0.06] px-2.5 py-1.5 font-sans text-xs font-medium text-[#243a7a]"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {data.footnote && (
            <p className="mt-5 border-t border-[#1e293b]/10 pt-4 font-sans text-xs leading-relaxed text-[#1e293b]/45">
              {data.footnote}
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
