# Task

- objective: Automatic acknowledgment for both website inquiry forms from the verified official mailbox.
- status: Updating to explicitly requested Formazin email style and sending the expressly approved historical acknowledgment.
- accepted_commit: 899fc14
- updated: 2026-09-15

## Constraints and decisions
Use Büro, no response deadline or case acceptance promise. User explicitly approved sending the first inquiry acknowledgment, with Formazin styling and a fresh duplicate check. No real-recipient test sends. Existing checkouts preserved. Resend recipient key limits acknowledgment to one per address per 24 hours across both routes. No input reflected into confirmation. Provider errors checked. Confirmation failure does not invalidate an accepted inquiry.

## Evidence
Eight offline route suites passed; lint, types and build58 passed. Real provider simulation delivered once, repeated call returned identical ID with idempotent-replayed=true. Main 899fc14, production dpl_Ao4mQj5voCPthkHkeTSxVX6w1acW READY and aliased to public domain. Live both endpoints: foreign origin403, bot field200 without delivery, invalid input400. Both page routes200 with hidden bot field. Database count after tests: zero new leads. See INQUIRY-CONFIRMATION.md.

## Next
No further implementation outstanding. Historical one-time send now explicitly authorized, after fresh duplicate check, using private client-docs/2026-09-15_Eingangsbestaetigung/Nachsendeentwurf.md. No task-owned tabs/apps/processes remain. Existing user Resend tab returned to overview and preserved. Pulled production secrets removed. This local documentation checkpoint follows the published implementation.
