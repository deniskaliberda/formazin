/**
 * Zentraler Vorschau-Schalter für den KERN-Ausbau (Leistungsseiten, /wissen,
 * Über-uns-Team). Solange `true`:
 *  - alle NEUEN KERN-Routen tragen robots noindex,nofollow
 *  - die KERN-Routen fehlen in der Sitemap
 *  - die Seiten zeigen ein ENTWURF-Band
 *
 * Go-Live = diesen einen Wert auf `false` stellen (nach Frauke-Freigabe),
 * nichts weiter. Bestehende, bereits indexierte Routen (/leistungen,
 * /ueber-uns) bleiben unabhängig davon indexierbar.
 */
export const KERN_PREVIEW = true;

/** robots-Objekt für die Metadata neuer KERN-Routen. */
export const kernRobots = KERN_PREVIEW
  ? { index: false, follow: false }
  : undefined;
