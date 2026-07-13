import Link from "next/link";
import type { RelatedLinksData } from "@/data/energie/types";

/**
 * Interne Cluster-Verlinkung (Pillar ↔ Service/Wissen/Geo). Karten-Raster im
 * Haus-Stil; Marker ist das blaue „+" der Startseite (LeistungenSection-Idiom)
 * statt eines Pfeils.
 */
export function RelatedLinks({ data }: { data: RelatedLinksData }) {
  if (!data.links.length) return null;

  return (
    <div>
      {data.heading && (
        <h2 className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl">
          {data.heading}
        </h2>
      )}
      {data.intro && (
        <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
          {data.intro}
        </p>
      )}

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start justify-between gap-3 rounded-[2px] border border-[#1e293b]/12 bg-white p-5 transition-colors hover:border-[#2d4196]"
          >
            <span className="min-w-0">
              <span className="block font-heading text-base font-semibold text-[#1e293b] transition-colors group-hover:text-[#2d4196] md:text-lg">
                {link.label}
              </span>
              {link.description && (
                <span className="mt-1 block font-sans text-sm text-[#1e293b]/60">
                  {link.description}
                </span>
              )}
            </span>
            <span
              className="font-heading text-2xl font-bold leading-none text-[#2d4196]"
              aria-hidden="true"
            >
              +
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
