# Task

- objective: Replace energy hub section04 schematic with requested existing Strausberger Straße building photo.
- status: verified locally; publishing
- accepted_commit: 9c086e1
- updated: 2026-09-06

## Constraints

Preview only. Preserve region copy, compact section, anchor, other pages and user3045. No new project service attribution.

## Decisions

Existing mfh-strausberger-altlandsberg/hero.jpg. Explicit section image overrides its diagram while name still supplies region text and stable anchor.

## Next

Build, visually verify requested image and unchanged copy, publish preview, refresh user tab, stop helper.

## Verification

Build lint/types passed58 routes. Desktop1280 photo shows full building, mobile390 no overflow. Exactly one loaded requested image and zero diagrams in region section. Copy and anchor unchanged.
