import Image from "next/image";
import type { BodyBlock } from "@/data/energie/types";
import { Diagramm } from "./Diagramme";
import { renderInline } from "./richText";

/**
 * Fließtext-Region der Seite. Rendert die typisierten BodyBlocks als
 * semantisches HTML im Haus-Stil (Archivo-Headings, Archivo-Narrow-Body).
 */
export function BodySections({ blocks, wide = false }: { blocks: BodyBlock[]; wide?: boolean }) {
  if (wide) {
    const groups: BodyBlock[][] = [];
    for (const block of blocks) {
      if (!groups.length || block.kind === "heading" || block.kind === "subheading") groups.push([]);
      groups[groups.length - 1].push(block);
    }
    return (
      <div className="energy-body-wide grid gap-8 lg:grid-cols-2 lg:gap-x-12">
        {groups.map((group, i) => {
          const isSection = group[0].kind === "heading";
          const visuals = isSection ? group.filter((block) => block.kind === "diagram" || block.kind === "image") : [];
          const text = isSection ? group.slice(1).filter((block) => block.kind !== "diagram" && block.kind !== "image") : group;
          return (
            <section key={i} className={isSection ? "min-w-0 lg:col-span-2" : "min-w-0 border-t border-[#1e293b]/15 pt-6"}>
              {isSection && <BodySections blocks={[group[0]]} />}
              <div className={visuals.length ? "mt-6 grid items-start gap-8 lg:grid-cols-2 lg:gap-12" : ""}>
                <BodySections blocks={text} />
                {visuals.length > 0 && <BodySections blocks={visuals} />}
              </div>
            </section>
          );
        })}
      </div>
    );
  }
  return (
    <div className="energy-body max-w-3xl">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "heading":
            return (
              <h2
                key={i}
                id={block.id}
                className="mt-12 font-heading text-3xl font-bold text-[#1e293b] first:mt-0 md:text-4xl lg:text-5xl"
              >
                {block.text}
              </h2>
            );
          case "subheading":
            return (
              <h3
                key={i}
                id={block.id}
                className="mt-10 font-heading text-xl font-bold text-[#2d4196] md:text-2xl"
              >
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p
                key={i}
                className="mt-5 font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl"
              >
                {renderInline(block.text)}
              </p>
            );
          case "list":
            return block.ordered ? (
              <ol key={i} className="mt-5 space-y-3" role="list">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-[2px] bg-[#2d4196]/8 font-sans text-sm font-semibold text-[#2d4196]">
                      {j + 1}
                    </span>
                    <span className="font-sans text-lg text-[#1e293b]/80 md:text-xl">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="mt-5 space-y-3" role="list">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4">
                    {/* Blaues „+" — Listen-Marker-Idiom der Startseite */}
                    <span
                      className="font-heading text-xl font-bold text-[#2d4196] md:text-2xl"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="font-sans text-lg text-[#1e293b]/80 md:text-xl">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol key={i} className="mt-6 space-y-4" role="list">
                {block.items.map((step, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[2px] bg-[#2d4196] font-heading text-base font-bold text-white">
                      {j + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-heading text-base font-semibold text-[#1e293b] md:text-lg">
                        {step.title}
                      </p>
                      <p className="mt-1 font-sans text-base leading-relaxed text-[#1e293b]/70">
                        {renderInline(step.text)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <div
                key={i}
                className={`mt-6 rounded-[2px] border border-l-4 p-4 md:p-5 ${
                  block.tone === "warn"
                    ? "border-[#1e293b]/10 border-l-[#1e293b] bg-white"
                    : "border-[#2d4196]/15 border-l-[#2d4196] bg-[#2d4196]/[0.04]"
                }`}
              >
                <p className="font-sans text-sm leading-relaxed text-[#1e293b]/80 md:text-base">
                  {renderInline(block.text)}
                </p>
              </div>
            );
          case "diagram":
            return <Diagramm key={i} name={block.name} caption={block.caption} />;
          case "image":
            return (
              <figure key={i} className="mt-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-[#1e293b]/5">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-2 font-sans text-sm text-[#1e293b]/60">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
