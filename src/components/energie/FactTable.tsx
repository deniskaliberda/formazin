import type { FactTableData } from "@/data/energie/types";

/**
 * Technisch-nüchterne Preistabelle. Scharfe Ecken, klarer Raster-Look,
 * auf Mobil horizontal scrollbar (overflow-x). Optional wird eine Spalte
 * (z. B. „Ihr Eigenanteil“) hervorgehoben.
 */
export function FactTable({ table }: { table: FactTableData }) {
  return (
    <figure className="overflow-hidden rounded-[2px] border border-[#1e293b]/12">
      <figcaption className="border-b border-[#1e293b]/12 bg-[#f3f4f6] px-4 py-3 font-heading text-sm font-bold text-[#1e293b] md:px-5 md:text-base">
        {table.caption}
      </figcaption>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#1e293b]/12">
              {table.columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={`whitespace-nowrap px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wide text-[#1e293b]/55 md:px-5 ${
                    col.align === "right" ? "text-right" : "text-left"
                  } ${col.key === table.highlightColumn ? "text-[#2d4196]" : ""}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-[#1e293b]/8 last:border-b-0 even:bg-[#f3f4f6]/40"
              >
                {table.columns.map((col, j) => {
                  const isHighlight = col.key === table.highlightColumn;
                  const isFirst = j === 0;
                  return (
                    <td
                      key={col.key}
                      className={`px-4 py-3 align-top font-sans text-sm md:px-5 md:text-base ${
                        col.align === "right" ? "text-right" : "text-left"
                      } ${
                        isHighlight
                          ? "font-semibold text-[#2d4196]"
                          : isFirst
                            ? "font-semibold text-[#1e293b]"
                            : "text-[#1e293b]/75"
                      }`}
                    >
                      {row[col.key]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && (
        <p className="border-t border-[#1e293b]/12 bg-white px-4 py-3 font-sans text-xs text-[#1e293b]/55 md:px-5">
          {table.note}
        </p>
      )}
    </figure>
  );
}
