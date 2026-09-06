# Task

- objective: Consistent left-aligned wide desktop layout on energy hub and genuine portrait in Feith contact section.
- status: verified locally; publishing
- accepted_commit: 7e27920
- updated: 2026-09-06

## Constraints

Preview only. Preserve content, amounts, service destinations, region photo, noindex and other pages. Use verified existing Feith portrait. No fabricated imagery.

## Decisions

Hub-only wide body groups with complete text blocks and adjacent visuals, consistent left-aligned headings. Hub contact uses existing TrustBar portrait layout with expertPhoto and no building image.

## Next

Build, visually verify lower hub desktop/mobile and content preservation, publish preview and refresh user tab.

## Verification

Build lint/types passed58 routes. Desktop1280 has two536px body columns, all14 hub h2 headings left aligned, actual Feith portrait loaded. Mobile390 one342px column,200px portrait and no overflow. All30 text/list/caption nodes in body groups exactly match previous hosted content. Local navigation timeout still completed and DOM verification succeeded.
