import Image from "next/image";
import type { TeamSection } from "@/data/energie/types";
import { renderInline } from "./richText";

/**
 * Team-/Kompetenzblock (Briefing v2): bettet die Personenprofile in einen
 * Büro-Kontext ein, damit das Büro größer wirkt als eine Einzelberatung.
 * Ersetzt den Einzel-ExpertProof früh auf der Seite. Gleiche Karten-/
 * Pill-Sprache wie TrustBar/ExpertProof: border-Karte ohne Schatten,
 * gerahmte 4:5-Fotos, scharfe Ecken, kein Gradient.
 */
export function TeamBlock({ data }: { data: TeamSection }) {
  return (
    <aside className="rounded-[2px] border border-[#1e293b]/10 bg-white p-6 md:p-8">
      {data.eyebrow && (
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#2d4196]">
          {data.eyebrow}
        </p>
      )}
      <h2 className="mt-1 font-heading text-2xl font-bold leading-tight text-[#1e293b] md:text-3xl">
        {data.heading}
      </h2>
      {data.intro && (
        <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-[#1e293b]/75">
          {renderInline(data.intro)}
        </p>
      )}

      <div className="mt-7 grid gap-6 sm:grid-cols-2 md:gap-8">
        {data.members.map((member) => (
          <article
            key={member.name}
            className="flex flex-col gap-5 border-t border-[#1e293b]/10 pt-6 sm:flex-row md:gap-6"
          >
            <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-[2px] bg-[#1e293b]/5 md:w-32">
              <Image
                src={member.photo.src}
                alt={member.photo.alt}
                fill
                sizes="(min-width: 768px) 128px, 112px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading text-xl font-bold leading-tight text-[#1e293b]">
                {member.name}
              </h3>
              <p className="mt-1 font-sans text-sm font-medium text-[#1e293b]/60">
                {member.role}
              </p>
              {member.bio && (
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#1e293b]/70">
                  {renderInline(member.bio)}
                </p>
              )}
              {member.credentials.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2" role="list">
                  {member.credentials.map((item) => (
                    <li
                      key={item}
                      className="rounded-[2px] border border-[#2d4196]/20 bg-[#2d4196]/[0.06] px-2.5 py-1.5 font-sans text-xs font-medium text-[#243a7a]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      {data.footnote && (
        <p className="mt-5 font-sans text-xs text-[#1e293b]/50">{data.footnote}</p>
      )}
    </aside>
  );
}
