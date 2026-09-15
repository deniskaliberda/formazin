# Task

- objective: Automatic acknowledgment for both inquiry forms from the verified official mailbox.
- status: Implementation verified, publishing authorized automatic flow.
- accepted_commit: a50e8ce

## Constraints and decisions
Use Büro, no response deadline or acceptance promise. No real-recipient test sends. Existing inquiry requires separate manual-send approval. Preserve other checkouts. Resend stable recipient key limits acknowledgment to one per 24 hours across both routes. No free text in acknowledgment. Office errors checked, saved inquiries remain successful if acknowledgment fails. Production setup authorized by task instruction.

## Next
Eight offline route suites passed, lint/types/build58 passed. Real provider simulation delivered once; replay returned same ID. First inquiry stored, office notification delivered, no Resend confirmation found; private draft prepared and unsent. Publish implementation and verify public rejection/bot paths without sending customer mail.
