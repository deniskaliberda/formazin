# Task

## Objective

Design, implement and publish a Formazin source hub for energy advice and building funding. The page must explain the official source landscape, link current original documents, offer useful first-party downloads, and create one strong indexable HTML source without publishing the deferred knowledge drafts.

## Completion criteria

- A Formazin-native responsive production page exists at `/wissen/foerderung-energieberatung-quellen`.
- The visual direction is designed through Claude Fable 5.1 and recorded in `DESIGN.md` before implementation.
- Source records, visible page content and downloads share one structured data source.
- Current official BMWE, BAFA, KfW and federal-law sources are dated, scoped and clearly attributed.
- Existing unpublished Brandschutz knowledge drafts remain unavailable and absent from navigation and sitemap.
- Build, lint, responsive browser review, download checks, metadata and structured-data checks pass.

## Constraints

Work in this separate checkout from `origin/main`. Preserve unrelated worktrees and existing site behaviour. Production publication and search-engine indexability were explicitly authorized by Denis on 13.09.2026. Do not submit forms, send messages, add tracking or create scheduled jobs. Follow the Formazin language rule for new website copy. Do not mirror official PDFs without an explicit legal and maintenance reason. Do not promise funding, eligibility, indexing or AI citation.

## Decisions

Stable route without a year in the slug. One curated pilot rather than an exhaustive document dump. The indexable HTML page is canonical. First-party CSV and graphic downloads are reusable supporting artifacts and should not compete with the HTML page in search. Existing `/wissen` global enablement remains off unless publication-state handling is introduced without exposing drafts.

Implementation decisions (Claude Fable 5.1, 2026-09-13):

- The static route `src/app/wissen/foerderung-energieberatung-quellen/page.tsx` takes precedence over `/wissen/[slug]`. `WISSEN_ENABLED` stays `false`, the hub and the three Brandschutz drafts still return 404 and stay out of navigation and sitemap.
- One data file (`src/data/wissen/foerderquellen.ts`) drives the page, the CSV, the SVG and the JSON-LD. Helpers for CSV, SVG and formatting live in `src/lib/foerderquellen.ts`.
- Ten sources (Q-01 to Q-10) in six topic fields. Version dates appear only where the project or the official page states them: BAFA EBW conditions since 07.08.2024 (already documented in `foerderberatung-bafa-kfw.ts`), KfW 458 adjustment of 21.07.2026 (documented in the project and confirmed on the KfW page), and the law text on Gesetze im Internet, whose page shows "Zuletzt geändert durch Art. 1 G v. 23.7.2026". All other entries describe the state without a date.
- The law on Gesetze im Internet now appears as "Gesetz zur Einsparung von Energie und zur Modernisierung der Wärmeversorgung in Gebäuden (Gebäudemodernisierungsgesetz, GModG)" under the unchanged path `/geg/`. The entry names the former GEG explicitly. Existing service pages keep their "GEG-Nachweis" wording untouched.
- The breadcrumb goes Start > Energieberatung > Quellenatlas, because `/wissen` is not reachable and must not be linked.
- Contextual links were added only to the `related` blocks of the iSFP, KfW-Baubegleitung and Förderberatung pages. No navigation entry.
- The Q-07 and Q-08 titles keep the official KfW en dash because they are quoted product names, not body copy.
- Codex corrected the KfW scope after the Fable build: product 261 requires a listed energy-efficiency expert, while product 458 also permits a qualified trade company to create BzA and BnD. The visible chapter introduction and Q-07 practical note now state that distinction.
- Direct official documents now include the BAFA EBW application leaflet, the BAFA eligible-costs leaflet (version 10.0), both KfW product-document indexes and the current HTML text of section 80 of the federal law. All remain external links at the issuing bodies.
- Release authorization: Denis said "ja schalt live und indexier das" on 13.09.2026. Publish exactly the locally verified page, sitemap entry, downloads and contextual links. Indexability means canonical plus `index, follow` and sitemap inclusion; it does not promise when search engines will crawl or rank the page.

## Evidence

MyHiwi production pattern: structured data, contextual statistics, sources, CSV and graphics. Manni preview pattern: one narrow knowledge page, shared editorial JSON, external original publications and noindex downloads. Formazin currently has `WISSEN_ENABLED = false` and three deferred Brandschutz drafts.

Source verification on 2026-09-13 (HTTP status, title and key content read):

- bafa.de: BEG overview, EBW, EBN, Sanierung Wohngebäude, Sanierung Nichtwohngebäude and the EBW leaflet PDF all returned 200 with matching titles.
- kfw.de: product pages 458 and 261 and both product-document indexes returned 200. Page 458 states the 21.07.2026 adjustment and explicitly allows either a listed energy-efficiency expert or a qualified trade company for its confirmations. Product 261 requires the listed expert. The KfW non-residential product (263) could not be located under any tried URL and was left out.
- gesetze-im-internet.de: `/geg/` and `/geg/__80.html` returned 200 with the titles used on the page.
- energie-effizienz-experten.de: 200, operators (dena for BMWE, BMWSB, BAFA, KfW) named on the page.
- energiewechsel.de: the site sits behind a Radware bot shield that answers 200 for every path, including a deliberately wrong one. Existence and titles of the two linked pages were confirmed through the search index ("BMWE | Bundesförderung für effiziente Gebäude (BEG)" and the BEG-Richtlinien overview). bmwe.bund.de refused connections during the check and is not linked.

## Files

- `src/data/wissen/foerderquellen.ts` (new): sources, topic fields, path stations, document types, table rows, metadata.
- `src/lib/foerderquellen.ts` (new): formatting, CSV builder with BOM, semicolon, CRLF and formula protection, SVG builder, response helpers.
- `src/components/wissen/FoerderquellenBlocks.tsx` (new): key figures, download buttons, HTML source path, reading aid, source atlas with chapter rail, folio cards, request-to-source table. Server components only.
- `src/app/wissen/foerderung-energieberatung-quellen/page.tsx` (new): page, metadata, CollectionPage with ItemList and BreadcrumbList JSON-LD.
- `src/app/wissen/foerderung-energieberatung-quellen/quellen.csv/route.ts` (new): CSV, `force-static`, attachment, `X-Robots-Tag: noindex`.
- `src/app/wissen/foerderung-energieberatung-quellen/quellenpfad.svg/route.ts` (new): SVG, `force-static`, attachment, noindex.
- `src/app/sitemap.ts`: fixed entry with `lastModified` 2026-09-13, priority 0.6, outside the `WISSEN_ENABLED` block.
- `src/data/energie/sanierungsfahrplan-isfp.ts`, `kfw-baubegleitung.ts`, `foerderberatung-bafa-kfw.ts`: one related link each.
- `DESIGN.md`: design section from the previous phase, unchanged in this phase.

## Checks (2026-09-13, local, `next build` + `next start` on port 3111)

- `npx tsc --noEmit`: clean. `npm run lint`: clean. `npm run build`: passes, the three new routes are static.
- Page: 200, one H1, hierarchy H1 > H2 (4) > H3 (9) > H4 (10), ten `<article>` folios, canonical, `robots index, follow`, description, Open Graph, three JSON-LD blocks (LocalBusiness from layout, CollectionPage with ten list items, BreadcrumbList with three items), all parse as JSON.
- CSV: 200, `text/csv; charset=utf-8`, `attachment; filename="formazin-foerderquellen-energieberatung.csv"`, `x-robots-tag: noindex`, leading bytes EF BB BF, 11 CRLF lines, 14 semicolons in the header, no cell starting with a formula character.
- SVG: 200, `image/svg+xml; charset=utf-8`, attachment, noindex, well-formed per `xmllint`.
- `/wissen`, the three Brandschutz draft slugs and a random slug: 404. Sitemap contains exactly one `/wissen` URL (the new page, lastmod 2026-09-13) and no Brandschutz entries. The page links to `/wissen` only through its own downloads.
- Contextual link present once on each of the three energy pages.
- Responsive review with Playwright (Google Chrome channel) at 320, 390, 768, 1280 and 1440px: no horizontal overflow at any width after fixing the key-figures row. Screenshots reviewed at 1440, 768, 390 and 320. The request table scrolls inside its wrapper on small screens, the same behaviour as the existing FactTable.
- New German copy scanned for semicolons, dash asides and filler words: none in body copy.

## Production release (2026-09-13)

- Implementation commit `d8ae56d` was fast-forwarded from the dedicated worktree to `origin/main` after confirming that `origin/main` still matched the accepted base `0db7505`.
- Vercel production deployment `dpl_GoSQT2kmzEMrufEefhSJPd1aR1vd` reached READY.
- Public `www` route returns 200 with one H1, ten source folios, canonical to itself, `index, follow` and three JSON-LD blocks.
- Public CSV and SVG return 200 as attachments with the intended content types and `X-Robots-Tag: noindex`; the CSV retains its UTF-8 BOM.
- Public sitemap contains the atlas exactly once with `lastmod` 2026-09-13, `robots.txt` declares that sitemap, and no deferred Brandschutz route appears. `/wissen` and all three drafts still return 404.
- Google Search Console domain property `formazin-partner.de` initially reported the new URL as unknown. The explicit indexing request succeeded with the confirmation "Indexing requested" and added the URL to Google's priority crawl queue. The existing `https://www.formazin-partner.de/sitemap.xml` remains submitted with status Success. Actual crawl timing and index inclusion remain Google's decision.

## Failed approaches

- Headless Chrome via `--window-size` for 320 and 390px screenshots: Chrome clamps the window to roughly 500px, so the captures were clipped. Playwright viewport emulation was used instead.
- Guessed BAFA EBN URL (`Energieberatung_Nichtwohngebaeude_Anlagen_Systeme/...`) returned 404; the correct path was taken from the BAFA Energieberatung overview page.
- KfW 263 product URLs (two variants) returned 404 and were dropped.

## Limitations

- Energiewechsel pages could not be content-verified by direct fetch (bot shield). Reviewer should open Q-01 and its Richtlinien link in a browser once.
- No official PDF is mirrored. PDF links point directly to BAFA. KfW downloads stay behind the official product-document indexes so the current version remains visible. The law PDF was deliberately not linked because on 13.09.2026 it still stated that parts of the 23.07.2026 amendment had not yet been incorporated; the current HTML law text and section 80 are linked instead.
- OG image falls back to the site default from `layout.tsx`. No page-specific image was created.
- The implementation is committed and published. The separate worktree and other customer worktrees were preserved.

## Next

No remaining release work. Re-check the KfW 458 page for changes after 31.01.2027 and review the official source links during the normal content-maintenance cycle.

## accepted_commit

d8ae56d
