# Task

- objective: Publish compact energy overview with linked hero infographic and equal homepage project cards.
- status: verified locally, ready to publish with existing user authorization
- accepted_commit: 6e6c0f8
- updated: 2026-09-06

## Decisions

Keep original five service cards and Oda/Feith team. Hero infographic links three questions to relevant service pages. Four short content bands, existing Strausberger regional image. Detail costs, funding conditions and documents remain on existing service pages; portfolio strategy completed there. Preserve public links, metadata and service schema. No external copy/media or unverified funding claims. Equal project cards with full names and immediate visibility. Lindenberg image failure not reproduced; correct image loads.

## Verification

Build, lint and types passed. New guide inspected at 1440 and 390 pixels without horizontal overflow. Three linked stations render clearly, funding link clicked. Main body is 513 words. All five card texts and team text match production exactly. Ten unique hub destinations return HTTP200. Portfolio anchor is H2 with paired diagram. Homepage cards all 395.25px at desktop and images loaded; prior mobile check all423px. No form submissions.

## Next

Commit and push intended files, confirm Vercel Ready and public domain rendering. Record live status, close claim, stop test server and reset viewport. Preserve unrelated plans.
