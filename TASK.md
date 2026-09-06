# Task

| Field | Value |
|---|---|
| status | publishing |
| phase | Frauke homepage correction release |
| updated | 2026-09-06 |
| agent | Codex |
| repo | deniskaliberda/formazin; checkout `02_delivery/formazin-site/`; branch `main` |
| accepted_commit | 99c8f7dae1fd84aeb0f62df23dd472bf3188bfe0 (previous live release) |

## Objective

Publish the restored homepage text-left / service-name-plus-right layout. Denis explicitly authorized this correction with “mach das live” on 2026-09-06.

## Constraints

- Preserve existing design tokens, substantive service content, forms and backend.
- Preserve unrelated untracked landing-funnel plans and other worktrees; no Ads or KERN-preview integration.
- Retain requested preview at http://localhost:3045/#leistungen (existing server PID 65402). Preserve user-owned browser sessions.
- No automatic messages or form submissions.

## Decisions

- Homepage service section has no project images, five accessible links with plus icons, and the earlier introduction/layout. No “Zwei Wege” section.
- Clicking Tragwerksplanung opens `/leistungen#tragwerk` with the matching selection. General service page retains top switches and its service/subservice content. Frauke prefers this cleaner interaction over the separate image-heavy KERN preview.
- Energy links directly to `/leistungen/energieberatung`, also remains reachable in the navigation. Exact energy/thermal naming and project-to-service assignments remain open, as do Frauke's promised service texts.
- DESIGN.md records the current authorized correction. Prior release report: `../Energieberatung-Cluster/RELEASE-FRAUKE-2026-09-06.md`.

## Evidence

- Previous turn: TypeScript, ESLint, isolated production build passed (49 static pages). Desktop 1366/mobile 390 visually checked; mobile width 390, five 48px link targets, zero images in #leistungen.
- Browser click selected Tragwerksplanung correctly; energy plus opened its hub directly.
- Pre-publication TypeScript, ESLint and whitespace checks rerun; production verification pending.

## Failed approaches

- Repeated project photos in the homepage service grid felt redundant and implied unsupported service assignments; replaced with the prior text layout.
- Keep production builds isolated from the running port-3045 development preview to avoid cache conflicts.

## Next

Commit and push only the approved correction, verify its production deployment and live navigation, then record release evidence and accepted_commit.
