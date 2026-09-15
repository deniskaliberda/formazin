# Task

- objective: Automatic acknowledgment for both website inquiry forms from the verified official mailbox.
- status: Complete. Authorized automatic flow published and verified.
- accepted_commit: 899fc14
- updated: 2026-09-15

## Constraints and decisions
Use Büro, no response deadline or case acceptance promise. Existing first inquiry has a private unsent draft and requires separate manual-send approval. No real-recipient test sends. Existing checkouts preserved. Resend recipient key limits acknowledgment to one per address per 24 hours across both routes. No input reflected into confirmation. Provider errors checked. Confirmation failure does not invalidate an accepted inquiry.

## Evidence
Eight offline route suites passed; lint, types and build58 passed. Real provider simulation delivered once, repeated call returned identical ID with idempotent-replayed=true. Main 899fc14, production dpl_Ao4mQj5voCPthkHkeTSxVX6w1acW READY and aliased to public domain. Live both endpoints: foreign origin403, bot field200 without delivery, invalid input400. Both page routes200 with hidden bot field. Database count after tests: zero new leads. See INQUIRY-CONFIRMATION.md.

## Next
No further implementation outstanding. Optional historical one-time send only on explicit approval with fresh duplicate check, using private client-docs/2026-09-15_Eingangsbestaetigung/Nachsendeentwurf.md. No task-owned tabs/apps/processes remain. Existing user Resend tab returned to overview and preserved. Pulled production secrets removed. This local documentation checkpoint follows the published implementation.
