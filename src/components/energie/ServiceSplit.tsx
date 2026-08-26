import type { ServiceSplitData } from "@/data/energie/types";

/**
 * „Das übernehmen wir / Das macht Ihr Fachbetrieb“ — Positionierung und
 * Vorqualifizierung in zwei Spalten. Listen-Marker im „+"-Idiom der
 * Startseite: blau bei den eigenen Leistungen, gedämpft (Slate) bei der
 * Fachbetriebs-Spalte.
 */
export function ServiceSplit({ data }: { data: ServiceSplitData }) {
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

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Das übernehmen wir */}
        <div className="rounded-[2px] border border-[#2d4196]/25 bg-white p-6 md:p-8">
          <h3 className="font-heading text-lg font-bold text-[#2d4196] md:text-xl">
            {data.wirMachen.title}
          </h3>
          <ul className="mt-5 space-y-3" role="list">
            {data.wirMachen.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="font-heading text-lg font-bold leading-normal text-[#2d4196] md:text-xl"
                  aria-hidden="true"
                >
                  +
                </span>
                <span className="font-sans text-base text-[#1e293b]/85 md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Das macht Ihr Fachbetrieb */}
        <div className="rounded-[2px] border border-[#1e293b]/12 bg-white p-6 md:p-8">
          <h3 className="font-heading text-lg font-bold text-[#1e293b]/70 md:text-xl">
            {data.fachbetriebMacht.title}
          </h3>
          <ul className="mt-5 space-y-3" role="list">
            {data.fachbetriebMacht.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="font-heading text-lg font-bold leading-normal text-[#1e293b]/30 md:text-xl"
                  aria-hidden="true"
                >
                  +
                </span>
                <span className="font-sans text-base text-[#1e293b]/70 md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
