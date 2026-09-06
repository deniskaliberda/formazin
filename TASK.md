# Task

- objective: Research Bothur's energy website and SEO, then apply suitable structure to Formazin's energy preview with original service graphics.
- status: implementation and local verification complete; publishing preview
- updated: 2026-09-06
- repo: deniskaliberda/formazin; worktree formazin-site-kern; branch feat/kern-leistungen
- accepted_commit: 4b662d5 (previous verified preview)

## Constraints

Preview only. Main/production unchanged. Keep approved core service layout, noindex, customer language rule, exact existing prices and service destinations. No copied third-party media, reviews, promises or unsupported additional services. Preserve original user3045 server and tabs. No forms submitted.

## Decisions

Merged main0f6b4d8 into preview as01267a6 because energy content/components had fallen behind current live state. Kept preview DESIGN/TASK and reviewed /leistungen page in three conflicts. Retained current main accessibility improvements but restored the agreed Energieberatung navigation label.

Five energy service photos replaced with original SVG schematics: renovation steps, supervision checklist, energy certificate, building envelope and funding path. Clear own short copy, full-card internal links and accessible graphic/link labels. Current live prices and detail pages remain. Hub has preview band and noindex. Research and provider results: ../SEO-GEO-Strategie/2026-09-06-bothur/BEFUND.md and seranking-auszug.json.

## Findings / failed approaches

Bothur: usable service-specific URLs, explanation/process/FAQ structure and direct contacts. Browser sample homepage and iSFP page lack meta descriptions and JSON-LD. SE Ranking German organic comparison reports11 gap terms and0 common terms; selected ranks11/22/52/68 are database snapshots, not live local rankings or measured visitors. DataForSEO blocked by IP allowlist with zero charge. SE Ranking sort parameter rejected; retry without sorting succeeded. No account settings changed. Funding specifics checked against current official KfW source rather than copied.

Build initially lacked dependencies added by current main, resolved with lockfile npm ci. Internal thermal link corrected to actual service URL and Next Link. First browser retest retained same-path old document; fresh query forced reload and confirmed current markup.

## Verification

Production build including lint/types passes,58 static routes. Browser desktop1280/mobile390: five graphics, zero photos inside energy service grid, no horizontal overflow. All five full-card links reach the corresponding own detail page, each one H1 and existing inquiry links. Core Brandschutz still has reviewed compact section order, finalFAQ and noindex. Current main pointer remains0f6b4d8. Bothur task-owned research tab closed and verified.

## Next

Publish and verify hosted hub, refresh user tab to energy service section, stop QA3046 while preserving original3045. Firm's previously noted factual content review remains separate.
