# Security baseline

- No credentials, API keys, or private keys are stored in source.
- Renderer Node integration is disabled and context isolation is enabled.
- High-risk actions require explicit confirmation.
- Permanent deletion, administrator actions, shutdown/restart, registry changes, uploads, and unknown programs must be gated.
- Every future tool must return an observed result and support verification where possible.
- The stop control is a first-class UI requirement; automation loops must accept cancellation.
- Logs must redact secrets and sensitive input before persistence.

Before adding computer control, implement a central policy engine, audit events, path validation, process validation, and cancellation propagation.
