# Task

- objective: Publish approved service and energy website to production following explicit user go-live request.
- status: release verified; publishing main
- accepted_commit: 246edb4
- updated: 2026-09-06

## Constraints

Explicit go-live authorization. Preserve unrelated main worktree files and drafts. Previously deferred knowledge articles remain disabled. No form submissions. Keep rollback base0f6b4d8.

## Decisions

KERN_PREVIEW false removes service draft bands and indexing restrictions. Separate WISSEN_ENABLED false keeps deferred articles out of navigation and sitemap and returns404. Fast-forward main to reviewed branch after build and release checks.

## Next

Build, verify release metadata and routes, publish main, inspect production deployment and live domain, refresh user tab.

## Verification

Build lint/types passed55 routes.14 release HTTP checks passed:12 public routes200 with singleH1, no service noindex/draft/wissen links;2 deferred knowledge routes404. Sitemap includes core services and omits knowledge. Inquiry landing pages intentionally retain existingnoindex; initial generic assertion adjusted for that established behavior.
