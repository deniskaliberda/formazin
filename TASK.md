# Task

- objective: Reuse compact energy-team portraits on /anfrage/sanierung-foerderung and prepare a visually verified preview.
- accepted_commit: 89544ee (verified fix; production baseline e3a3a12)

## Constraints and decisions

Isolated worktree `formazin-site-contact-portraits`, branch `fix/sanierung-contact-portraits`; other worktrees and their uncommitted plans preserved. TeamBlock compact CSS no longer depends on the energy-review wrapper. Fixed portrait sizes96×128px and120×160px from1024px, existing3:4 top crop. Explicit compactTeam opt-in only on requested route; other inquiry routes retain existing appearance. No copy, contact or funnel changes. No form submission, customer message or production publication. Referenced master ~/Projekte/AGENTS.md absent; supplied global and customer instructions apply.

## Verified result

Production build, ESLint, TypeScript and diff checks passed. Browser checks at1440/768/390/320px: both portraits loaded, correct dimensions, no horizontal overflow. Visually inspected desktop, tablet and mobile screenshots. Target main text and every link label/target match production. Energy hub, iSFP and both other inquiry routes compared at1440/390px: text, links, portrait dimensions and crops unchanged. Local contact CTA scrolls to #anfrage; first funnel step forward/back passed, no submission and no service credentials loaded locally. No browser runtime errors.

Preview https://formazin-p47wsvig6-denis24.vercel.app/anfrage/sanierung-foerderung , deployment dpl_EJottPtmbKwKfryZicdC7E2GjGJH READY, source89544ee. Hosted desktop1440 and mobile390 verified with loaded portraits/no overflow. Evidence in ../Energieberatung-Cluster/portraits-review-2026-09-07/.

## Next

Requested preview complete. Await explicit production approval before merge/publish. Production remains dpl_FwzoxgJZRbFXWSdvbGFb2e3ysi7g and main e3a3a12. Local server3053 stopped, dedicated test browser closed; preview queued as requested deliverable in Codex.
