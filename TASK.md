# Task

Shared Claude/Codex contract for the current coding job in this repo.
Not a chat dump. Not the workspace claim board (`AI-HANDOFF.md`).

Update this file at a phase boundary, then switch. Keep it short. No secrets, no client prices, no credentials.

| Field | Value |
|---|---|
| status | done |
| phase | live (merged to main 2026-09-04) |
| updated | 2026-09-04 |
| agent | Claude |
| repo | deniskaliberda/formazin · branch `feat/energie-redesign` · worktree `02_delivery/formazin-site-redesign/` |
| accepted_commit | 4469db0 (variants + larger diagrams, fast-forwarded into main, live 2026-09-04) |

## Objective

Redesign the presentation of the Energieberatung cluster: bright, image-led, avatar-separated, infographic. Spec = `../Energieberatung-Cluster/REDESIGN-AUDIT-UND-KONZEPT-2026-09-04.md` + DESIGN.md addendum 2026-09-04 (approved by Denis 04.09., decisions D1–D6 as recommended). Content, prices, facts, funnel logic and Supabase stay untouched.

## Constraints

- No change to numbers/prices/FAQ texts in `src/data/energie/*.ts`; no change to `EnergieFunnel` step logic, `/api/lead`, Supabase schema.
- Design tokens only: `#2d4196` / `#1e293b` / `#f3f4f6`, Archivo + Archivo Narrow, `rounded-[2px]`, no emoji, no gradients over images.
- Energie pages: no full-screen hero (Split-Hero via `HeroSplit.tsx`). Full-screen hero stays on the homepage only.
- AI images decorative only (no people, no text, no real projects); infographics as inline SVG React components, never AI images.
- Home page changes (Phase 4) need Frauke review; Energie pages need Feith review via Vercel branch preview. No merge to `main` without Denis.

## Acceptance

- `npx tsc --noEmit && npm run lint && npm run build` green.
- No Energie route renders `HeroWithImage`; all render `HeroSplit`.
- `/anfrage/*` pages: `EnergieFunnel` inside the hero (`#anfrage` anchor present), `TrustBar` absent, `TeamBlock` exactly once.
- Images under `public/images/energie/` bright (no blue duotone), each ≤ 500 KB.

## Decisions

- Denis 04.09. (after variants): diagrams must be clearly visible. Answer sections use a 5/7 grid (diagram column wider), SVG type raised, labels shortened where needed. QA: build with NEXT_PUBLIC_NO_REVEAL=1 for static screenshots (framer Reveal otherwise hides sections in headless Chrome).
- Denis 04.09. (after live): one diagram form per page only. Same data, different form per page (Infografiken2.tsx); Hub keeps the four master graphics; geo pages share the region map (own town highlighted) and a photo section instead of a repeated timeline.
- Denis 04.09. (after Phase 2): diagrams must never stand alone. Every infographic lives in a text section (question, heading, paragraphs, diagram beside it, anchored). Default copy in `src/data/energie/antworten-texte.ts`, overridable per page via `AntwortItem`.

- D1 Split-Hero (Denis 04.09.). D2 brighten existing images now, regenerate with Banana later (Gemini key missing). D3 funnel step 1 in hero. D4 homepage additions as separate Frauke step. D5 Banana, Higgsfield fallback. D6 within retainer.
- Phase 1 renders the full `EnergieFunnel` (compact mode) in the hero instead of a separate hero step that syncs state, to avoid touching funnel state logic.

## Failed approaches

- Higgsfield free plan allows 1 concurrent job: a parallel batch of 10 fails 3 with rate_limit_reached. Run generations sequentially.
- Replacing image files under the same name: the Next image optimizer keeps serving the cached old rendition. Use a new filename (-v2) instead.
- Headless-Chrome screenshots of sections wrapped in framer-motion Reveal are flaky (opacity 0 until hydration/IntersectionObserver). Use the NO_REVEAL build for QA shots.

## Next

**Bildtausch-Plan (Denis 04.09.):** die KI-Symbolbilder unter `public/images/energie/` (hero-energieberatung-v2, avatar-privat, avatar-gewerbe, svc-*-v2, geo-strasse-*-v2, planung-beratung-v2, gebaeudehuelle-v2, region-luftbild, vor-ort-termin, vorher-nachher) sind Platzhalter und werden nach und nach durch echte Fotos ersetzt: gleicher Dateiname mit neuem Suffix (-v3), Alt-Text anpassen, Bildnachweis im Impressum erst entfernen, wenn kein KI-Bild mehr im Einsatz ist.

Branch is merged and live. Remaining: monthly Messpunkt vs. baseline, GSC check after 7 days, incorporate Feith/Frauke feedback as follow-up commits on main.

## Superseded next (before live)

1. Feith review of Energie pages + Frauke review of homepage via the Vercel branch preview; collect feedback, then Phase 5 (Lighthouse/LCP, merge, live).

## Evidence

- `f52f355` Phase 1, `bc40f80` Phase 2, `f88f599` Phase 3a+4, `8acd21b` text sections, `c8b1646` Phase 3b images on `feat/energie-redesign` (pushed): tsc + lint + `npm run build` green (49 static pages).
- Phase 2 screenshots: `../Energieberatung-Cluster/bild-proofs/redesign-phase2-2026-09-04/`.
- Screenshots: `../Energieberatung-Cluster/bild-proofs/redesign-phase1-2026-09-04/`.
- Vercel branch preview: `formazin-git-feat-energie-redesign-denis24.vercel.app` (pattern as for feat/energie-funnel).
