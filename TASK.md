# Task

- objective: Incorporate Frauke's detailed service-page feedback into the existing KERN preview, preserving the familiar service selection and corporate design.
- status: implementation and local verification complete; preview publication next
- updated: 2026-09-06
- repo: deniskaliberda/formazin; worktree formazin-site-kern; branch feat/kern-leistungen
- accepted_commit: b6740a6b26aca673fae74a09cfd7a6db893cacf3 (previous preview baseline)

## Constraints

Preview only; no main merge or production deploy. Preserve KERN_PREVIEW/noindex, other worktrees and user localhost:3045. DESIGN.md records the authorized design. No invented credentials, project assignments or business capabilities. Retain invisible editorial review notes.

## Decisions

Five selectors: architecture, fire safety, structural planning, general planning and direct link to separate energy hub. No thermal label. One introductory image; slim project text links. Larger typography, full-width section container with readable text widths, compact step grids, phone beside initial description, larger uncropped existing Oda portrait. Remove the extra scroll link and service-page Ratgeber blocks. Region consistently Berlin und Brandenburg; Ahrensfelde remains office location and broader projects can be discussed. Consolidated, source-checked FAQ; see CONTENT-REVIEW-2026-09-06.md. Business-specific scope and project assignments still need the firm's review.

## Failed approaches

Image-heavy service cards and inconsistent hero treatments rejected as hard to scan. Narrow lower content column, tiny labels, repetitive FAQ and generic regional/legal claims rejected in subsequent review.

## Verification

Lint, TypeScript and production build pass (55 generated routes). Browser desktop 1280 and mobile 390: no horizontal overflow, five selectors navigate correctly including energy hub, 48px mobile targets, current service matches URL, FAQ expands, phone uses existing tel link. Four-column fire-safety process at desktop, portrait 192x240 object-contain, architecture shows overall school building. No service Ratgeber block or extra scroll link; preview noindex/nofollow preserved.

## Next

Publish verified branch preview and confirm hosted result. Stop temporary localhost:3046 server, preserve user preview and open hosted deliverable. Frauke/Oda/Karsten review detailed business-specific content before production adoption.
