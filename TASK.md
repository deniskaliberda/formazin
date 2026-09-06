# Task

- objective: Complete Frauke review tickets 2–6 and publish the verified changes. Ticket 1 withdrawn after reload, closed without change.
- status: Implementation and local validation complete. Release pending.
- accepted_commit: 4cc72eb
- updated: 2026-09-06

## Constraints and decisions

Live repo is formazin-site, not legacy Formazin-und-Partner. Preserve unrelated untracked landing-funnel plans and user review/game tabs. Existing publication authorization applies. No forms submitted, no changes to contact details or technical service scope.

Ticket 2: Zu den Leistungen below the full homepage services section, /leistungen.
Ticket 3: Combined energy labels now Energieberatung, technical Wärmeschutz content and URLs preserved.
Ticket 4: Right company row blank, phone and fax on street row, email on locality row. Mobile stacks when necessary.
Ticket 5: Blue underlined active header link on own routes and descendants. Actual header uses pages, not homepage section anchors except contact. Energy descendants and energy inquiry paths exclusively mapped to Energieberatung. Sticky/scroll behavior preserved.
Ticket 6: Architecture four existing step groups labelled HOAI LPH 1–2, 3–4, 5, 6–8. Mapping by title, never index. Source: https://www.gesetze-im-internet.de/hoai_2013/anlage_10.html. No LPH 9 added to a description ending at acceptance.

## Evidence and next

Final production build including lint/types passed, 55 static pages. 26 browser checks across six widths and ten main/detail routes passed, no runtime errors or overflow. Contact rows exact at all checked desktop/tablet widths. Real CTA, menu, history and contact-anchor navigation passed. Architecture phase labels accessible and other service numbering preserved. Evidence: ../Energieberatung-Cluster/tickets-review-2026-09-06/.

Publish reviewed changes under existing authorization, verify public production, then report all ticket states to originating task 01a0775e-9c26-7f53-aed2-ca3d31ad7d2d. No unresolved user decision.
