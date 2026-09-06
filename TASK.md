# Task

- objective: Implement Frauke ticket 7 on the actual About page directly after the blue trust band and present the complete site locally in Chrome.
- status: Complete local website ready for user review. Build and browser checks passed. User approved publication after local review. Release in progress.
- accepted_commit: 890b6f4
- updated: 2026-09-06

## Constraints and decisions

Four original logo links: Brandenburgische Architektenkammer, Brandenburgische Ingenieurkammer, Energieeffizienz-Expertenliste, Unternehmen 16356 e.V. The fourth is explicitly requested, no board-role assertion. Official general homepages, no person attribution. No visible headings, explanatory text, additional labels, separate regional partner sections or placeholders. Accessible link and image names retained. Preserve existing content and tickets 2–6. Publication explicitly authorized after local review. Preserve unrelated landing-funnel plans and user tabs.

## Verification and preview

Production build, lint and type checks passed, 55 static pages. Browser checks on 1440/768/390/320 widths: complete About page, row directly below existing blue section, no visible row text or placeholders, original assets load, no horizontal overflow or runtime errors. All four official links actually opened; keyboard navigation checked. Source diff only adds the row and four local original assets, preserving tickets 2–6 on 890b6f4.

Full local website: http://127.0.0.1:3051/ueber-uns . Chrome tab 788589551 reused, replacing standalone draft. Next production preview session 42524 remains running as requested. Old standalone preview server 55869 retired. Other user tabs and Padel server preserved. Screenshots: ../Energieberatung-Cluster/tickets-review-2026-09-06/ticket-7-website-final-1440.png and ticket-7-website-final-390.png, detail images ticket-7-website-final-logozeile-1440.png and ticket-7-website-final-logozeile-390.png. Original sources in logo-assets/quellen.json in the review directory.

## Next

Commit and publish the exact checked implementation, then verify the public About page, switch the Chrome preview tab to production and stop the local preview server.
