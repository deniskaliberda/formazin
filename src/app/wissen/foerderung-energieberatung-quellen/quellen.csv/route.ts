import { FOERDERQUELLEN } from "@/data/wissen/foerderquellen";
import { csvResponse, csvZeilen } from "@/lib/foerderquellen";

/**
 * Quellenverzeichnis als CSV. Gleiche Datenquelle wie die HTML-Seite.
 * UTF-8-BOM, Semikolon, Formelschutz, Anhang, noindex.
 */
export const dynamic = "force-static";

export function GET() {
  return csvResponse(csvZeilen(), FOERDERQUELLEN.csvDatei);
}
