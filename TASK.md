# Task

| Field | Value |
|---|---|
| status | verified locally; publishing preview |
| phase | Frauke service preview rework |
| updated | 2026-09-06 |
| agent | Codex |
| repo | deniskaliberda/formazin; worktree formazin-site-kern; branch feat/kern-leistungen |
| accepted_commit | a827186 (previous preview) |

## Objective

Adapt the previously prepared detailed service pages to the clean live service-page design requested by Frauke. Four top service selectors, familiar split introduction, extended existing descriptions on scroll. Update the preview only.

## Constraints

- DESIGN.md records the user-authorized implementation; preserve established fonts/colors/corners.
- No production merge/deployment; preserve KERN_PREVIEW and noindex. Preserve other worktrees and existing localhost:3045 preview.
- Keep all existing substantive markdown copy and editorial guardrails. Do not invent project/service attribution.
- Energy/thermal removed from the four service selectors; energy remains a separate main navigation entry. Existing thermal URL remains accessible.

## Decisions

- Shared service presentation on /leistungen and the individual detail URLs; real selector links with active states.
- One introductory project image, lower references as text links. Existing longform text and FAQ retained.
- Legacy hashes map to detail URLs, including tragwerk -> tragwerksplanung.

## Failed approaches

- Prior differing hero layouts and image cards rejected by Frauke as visually difficult to scan.

## Next

Publish the approved branch preview, verify the deployed service page and show it for review.

## Evidence

- TypeScript, ESLint and production build passed: 55 static pages.
- Existing Markdown content compared with rendered HTML on all five detail URLs: 180 text/headline entries preserved, no editorial comments exposed; one H1, noindex and one main image per page. Source content unchanged. Proof: `../Energieberatung-Cluster/bild-proofs/kern-clean-preview-2026-09-06/content-check.json`.
- Browser: all four service selectors update active label, heading and page URL correctly; extended-description anchor scrolls to visible content; FAQ opens; legacy /leistungen#tragwerk resolves to /leistungen/tragwerksplanung; browser back restores prior selection.
- Desktop and mobile 390 visually checked; mobile page width 390 with 48px selection targets.
- Temporary verification server on port 3046, session 70010; stop after hosted preview is ready. Existing port 3045 stays available.
