import { FOERDERQUELLEN } from "@/data/wissen/foerderquellen";
import { quellenpfadSvg, svgResponse } from "@/lib/foerderquellen";

/**
 * Quellenpfad-Grafik als SVG. Gleiche Stationen wie die HTML-Fassung
 * im Seiteneinstieg. Anhang, noindex.
 */
export const dynamic = "force-static";

export function GET() {
  return svgResponse(quellenpfadSvg(FOERDERQUELLEN.pfad), FOERDERQUELLEN.svgDatei);
}
