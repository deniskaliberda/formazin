# Task

- objective: Apply Frauke's consistent visual layout to all core service pages in the KERN preview.
- status: in progress; apply Frauke prose rule
- updated: 2026-09-06
- repo: deniskaliberda/formazin; worktree formazin-site-kern; branch feat/kern-leistungen
- accepted_commit: 92268cb (verified current preview)

## Constraints

Preview only; no main merge or production deployment. Preserve KERN_PREVIEW/noindex, existing user localhost:3045, other worktrees and editorial review notes. DESIGN.md contains authorized decisions. Do not invent project assignments, credentials or photographs. Energy hub remains independently linked.

## Decisions

Common rhythm on architecture/fire safety/structural/general planning: gray hero, white visual explanation, gray full-width process, white projects/author/contact, gray final FAQ. No duplicate introductory block, audience, why-us, Ratgeber or jump-link block. Three/four/five process steps use available desktop width. Architecture relationship diagram and general-planning coordination diagram; four material icons for structural planning and two grouped document icons for fire safety. Existing TeamHeroSection assignments support portraits of Frauke and Karsten; Frauke also shown for general-planning coordination, Oda remains on fire safety. Source-checked FAQ retained; business scope and project attribution remain for firm review per CONTENT-REVIEW-2026-09-06.md.

## Failed approaches

Image-heavy service cards, narrow left-only detail text, excessive whitespace, repeating introductions, generic claims and ungrouped vertical steps rejected during review.

## Verification

Production build including lint/types passes, 55 routes. Desktop1280: four core routes plus legacy thermal page alternate white/gray consistently, 3/4/5 process columns span full width, final heading FAQ, no overflow. Four core pages mobile390: no overflow and single-column steps. Structural icons and general-planning diagram visually inspected on desktop; mobile coordination diagram visually inspected. New photos inspected locally and matched to existing TeamHeroSection references.

## Next

Firm reviews exact business scope before production adoption. Preview dpl_2Kn89h4jAfXzGYWFZ3A7LgoTTZZx Ready, target preview, stable branch alias. Hosted Tragwerksplanung confirms alternating bands, four icons, Karsten portrait and five process columns. Existing user tab refreshed; hosted deliverables retained. QA3046 stopped, original3045 preserved.

## Language refinement

No prose dashes or semicolons, no filler or generic phrasing. Preserve required compound spelling, numeric ranges, code and sources. Rule persisted in customer AGENTS.md; service Markdown and shared prose manually edited. Validate rendered prose, publish preview only.
