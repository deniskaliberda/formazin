# Task

- objective: Incorporate Frauke's detailed service-page feedback into the existing KERN preview, preserving the familiar service selection and corporate design.
- status: implementation verified; publishing compact preview
- updated: 2026-09-06
- repo: deniskaliberda/formazin; worktree formazin-site-kern; branch feat/kern-leistungen
- accepted_commit: bfe0954 (verified preview implementation; production unchanged)

## Constraints

Preview only; no main merge or production deploy. Preserve KERN_PREVIEW/noindex, other worktrees and user localhost:3045. DESIGN.md records the authorized design. No invented credentials, project assignments or business capabilities. Retain invisible editorial review notes.

## Decisions

Five selectors: architecture, fire safety, structural planning, general planning and direct link to separate energy hub. No thermal label. One introductory image; slim project text links. Larger typography, full-width section container with readable text widths, compact step grids, phone beside initial description, larger uncropped existing Oda portrait. Remove the extra scroll link and service-page Ratgeber blocks. Region consistently Berlin und Brandenburg; Ahrensfelde remains office location and broader projects can be discussed. Consolidated, source-checked FAQ; see CONTENT-REVIEW-2026-09-06.md. Business-specific scope and project assignments still need the firm's review.

## Failed approaches

Image-heavy service cards and inconsistent hero treatments rejected as hard to scan. Narrow lower content column, tiny labels, repetitive FAQ and generic regional/legal claims rejected in subsequent review.

## Verification

Lint, TypeScript and production build pass (55 generated routes). Browser desktop 1280 and mobile 390: no horizontal overflow, five selectors navigate correctly including energy hub, 48px mobile targets, current service matches URL, FAQ expands, phone uses existing tel link. Four-column fire-safety process at desktop, portrait 192x240 object-contain, architecture shows overall school building. No service Ratgeber block or extra scroll link; preview noindex/nofollow preserved.

## Next

Frauke/Oda/Karsten review detailed business-specific content before production adoption. Published preview: dpl_F98wDDHxfsc5FKY21ehGajLdYgRv, Ready, target preview; https://formazin-git-feat-kern-leistungen-denis24.vercel.app/leistungen/brandschutz. Hosted browser confirms five selectors, prominent phone, compact steps, removed Ratgeber/jump link and noindex. Temporary port3046 server stopped after checking the hosted page; user port3045 preserved. Hosted deliverable remains open; additional existing tabs preserved because ownership is unclear.

## Current refinement

Duplicate intro removed from presentation; audience/why-us hidden, process gray, compact references/author/contact before final FAQ. Existing Markdown and researched FAQ retained. Build with lint/types passes. Browser desktop: white two-column concept section, gray process, final FAQ opens. Mobile architecture: one-column process, no overflow at 390px, noindex. Publish preview only.
