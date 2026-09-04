# Task

Shared Claude/Codex contract for the current coding job in this repo.
Not a chat dump. Not the workspace claim board (`AI-HANDOFF.md`).

Update this file at a phase boundary, then switch. Keep it short. No secrets, no client prices, no credentials.

| Field | Value |
|---|---|
| status | active |
| phase | review (Phases 1, 2, 3a, 4 built and pushed; 3b Banana images blocked on Gemini key) |
| updated | 2026-09-04 |
| agent | Claude |
| repo | deniskaliberda/formazin · branch `feat/energie-redesign` · worktree `02_delivery/formazin-site-redesign/` |
| accepted_commit | f88f599 (Phase 3a + 4, pushed) |

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

- Denis 04.09. (after Phase 2): diagrams must never stand alone. Every infographic lives in a text section (question, heading, paragraphs, diagram beside it, anchored). Default copy in `src/data/energie/antworten-texte.ts`, overridable per page via `AntwortItem`.

- D1 Split-Hero (Denis 04.09.). D2 brighten existing images now, regenerate with Banana later (Gemini key missing). D3 funnel step 1 in hero. D4 homepage additions as separate Frauke step. D5 Banana, Higgsfield fallback. D6 within retainer.
- Phase 1 renders the full `EnergieFunnel` (compact mode) in the hero instead of a separate hero step that syncs state, to avoid touching funnel state logic.

## Failed approaches

- (none)

## Next

1. Denis: `/banana setup` (Gemini key), then generate B1–B12 per spec §5.3 and swap `public/images/energie/*.jpg` (keep alt texts, ≤ 300 KB, WebP export).
2. Feith review of Energie pages + Frauke review of homepage via the Vercel branch preview; collect feedback, then Phase 5 (Lighthouse/LCP, merge, live).

## Evidence

- `f52f355` Phase 1, `bc40f80` Phase 2, `f88f599` Phase 3a+4 on `feat/energie-redesign` (pushed): tsc + lint + `npm run build` green (49 static pages).
- Phase 2 screenshots: `../Energieberatung-Cluster/bild-proofs/redesign-phase2-2026-09-04/`.
- Screenshots: `../Energieberatung-Cluster/bild-proofs/redesign-phase1-2026-09-04/`.
- Vercel branch preview: `formazin-git-feat-energie-redesign-denis24.vercel.app` (pattern as for feat/energie-funnel).
