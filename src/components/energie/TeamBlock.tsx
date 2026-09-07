import Image from "next/image";
import type { TeamSection } from "@/data/energie/types";
import { renderInline } from "./richText";

/** Shared compact Oda/Feith profiles for every energy and inquiry page. */
export function TeamBlock({ data }: { data: TeamSection }) {
  return (
    <aside className="energy-team">
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

      {/* Fixed portrait widths retain the 3:4 crop with faces aligned to the top. */}
      <div className="energy-team-members mt-7 grid gap-8 sm:grid-cols-2 md:gap-10">
        {data.members.map((member) => (
          <article key={member.name}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-[#1e293b]/5">
              <Image
                src={member.photo.src}
                alt={member.photo.alt}
                fill
                sizes="(min-width: 1024px) 120px, 96px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-heading text-2xl font-bold leading-tight text-[#1e293b]">
                {member.name}
              </h3>
              <p className="mt-1 font-sans text-base font-medium text-[#2d4196]">
                {member.role}
              </p>
              {member.bio && (
                <p className="mt-3 font-sans text-base leading-relaxed text-[#1e293b]/70">
                  {renderInline(member.bio)}
                </p>
              )}
              {member.credentials.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" role="list">
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
