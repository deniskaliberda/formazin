# Task

- objective: Branded automatic acknowledgments for both forms and authorized one-time acknowledgment of the first inquiry.
- status: Scheduling verified, publishing authorized25-minute delay; approved template preserved.
- accepted_commit: 88f92b2
- updated: 2026-09-15

## Decisions
Verified original website PNG logo, Formazin blue/white/gray, inline email table layout, mobile fluid width. Existing concise wording and plain text retained. No customer input reflected. Same recipient idempotency key for manual and automatic sending; no reset on style change. Previous draft approval boundary superseded by explicit user send authorization.

## Evidence
Eight offline suites, lint, types, build58 passed. Actual branded template inspected on desktop and320px mobile. Resend reserved test address Delivered. Fresh real-recipient search before send: no results. Exactly one approved real send; Resend Sent/Delivered at18:16 MESZ, ID b5221150-146d-4a19-998b-fed34a57c7ea. Sender, reply-to and branded preview verified. Private payload and receipt in customer client-docs/2026-09-15_Eingangsbestaetigung/. Main88f92b2, production dpl_EsPWuN1tkLAnBGYXJ2DVN7DFsgmf READY on public domains. See INQUIRY-CONFIRMATION.md.

## Next
Verify durable Resend scheduling and publish. Do not resend historical acknowledgment. Task-owned preview tab closed, viewport reset, server3157 stopped and checked. User Resend tab preserved on overview. Production secret file removed. This documentation checkpoint follows the published implementation.
