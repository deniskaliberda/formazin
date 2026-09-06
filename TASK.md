# Task

| Field | Value |
|---|---|
| status | approved for production; publishing |
| phase | Frauke design release |
| updated | 2026-09-06 |
| agent | Codex |
| repo | deniskaliberda/formazin; checkout `02_delivery/formazin-site/` |
| branch | `review/frauke-design-2026-09-05` |
| accepted_commit | 4469db0 (previous accepted live design); local branch base a2c2f0963c99367b9947c414538b99314dec1267 |

## Objective

Implement Frauke's collected feedback as a coherent, reviewable local draft. Denis explicitly authorized implementation: “Setz es mal so gut wie möglich um, wie Fraukes gesagt hat.” The earlier collection-only restriction is superseded. Keep the preview available.

## Constraints

- Denis authorized publication on 2026-09-06: “ja online stellen”. Targeted commit, main integration and existing Vercel production workflow authorized. Preserve untracked planning files and other worktrees/processes; exclude separate Ads work.
- Keep established colors, fonts and sharp corners; preserve substantive copy, figures, FAQ, funnel logic, APIs and backend.
- No rigid full-screen section heights. Use actual portfolio photos with accurate project names; unclear Mehrow image attribution avoided.
- Master `/Users/myhiwi/Projekte/AGENTS.md` is missing; existing master CLAUDE.md, customer AGENTS.md, repo CLAUDE.md and cluster DESIGN.md read. Local approved implementation scope: `DESIGN.md`.

## Decisions and result

- General visual service overview replaces homepage “Zwei Wege”. Shared service catalogue for homepage and service overview; real clickable cards/plus links.
- “Energieberatung & Wärmeschutz” is the draft's shared category. Thermal content and old /leistungen#waermeschutz entry preserved; no definitive client acceptance implied.
- Hub: unchanged H1 in wider text column, smaller real project hero, early five-service overview, centered introductions, smaller staff portraits, clear answers heading, request choices later.
- Real portfolio photos in hub, five service pages and target-group request imagery. Geo images and one landing-page regional illustration are outside this draft; retain AI image notice.
- Detailed feedback, choices and verification: `DESIGN-REVIEW-2026-09-05.md`.

## Evidence

- TypeScript, ESLint and isolated Next production build passed; 49 static pages generated.
- Eleven relevant routes HTTP 200, one H1 each. Desktop/laptop 1366/1024 and mobile 390 checked; mobile navigation, service links, hub anchor and legacy thermal hash work.
- Original substantive hub content compared programmatically; unchanged apart from approved headings/image metadata and presentation. Forms not submitted.
- Screenshots: `../Energieberatung-Cluster/bild-proofs/frauke-review-2026-09-05/`.

## Local preview

- http://localhost:3045/leistungen/energieberatung
- http://localhost:3045/#leistungen
- http://localhost:3045/leistungen
- Start: `npm run dev -- --hostname 127.0.0.1 --port 3045` in this checkout.
- Requested running deliverable: Next server PID 4506, terminal session 77423; preserve. In-app tab 1 preserved as deliverable.
- Vercel project formazin / denis24; production dpl_3qDQukSyrRQe4PU8uWoyAY2JLoM7, www.formazin-partner.de. Production unchanged.

## Failed approaches

- Port 3000 initially loaded stale foreign browser chunks; dedicated port 3045 resolved without code changes. Task-owned port-3000 process stopped.
- Small mobile width exposed intrinsic overflow in the funding diagram; allow grid children to shrink and tabs to wrap. Verified page width 390 at viewport 390.

## Next

Publish the approved draft through main, verify production aliases and representative routes, then record the release commit and deployment.
