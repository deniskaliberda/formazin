import type { BodyBlock } from "@/data/energie/types";
import { renderInline } from "./richText";

/**
 * Fließtext-Region der Seite. Rendert die typisierten BodyBlocks als
 * semantisches HTML im Haus-Stil (Archivo-Headings, Archivo-Narrow-Body).
 */
export function BodySections({ blocks }: { blocks: BodyBlock[] }) {
  return (
    <div className="max-w-3xl">
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
          default:
            return null;
        }
      })}
    </div>
  );
}
