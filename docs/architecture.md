# Architecture

LIZAED is split into four boundaries:

1. `desktop/electron` owns the window and a narrow IPC surface.
2. `desktop/renderer` owns presentation and user intent.
3. `backend` will own planning, providers, memory, and event streaming.
4. `tools` and `plugins` own isolated capabilities behind permission-aware contracts.

The preload uses context isolation and does not expose Node.js to the renderer. The next integration step is a structured JSON event bridge between Electron and the Python service, with request IDs and cancellation.

## Delivery phases

Phase 1 establishes the shell and contracts. Later phases add the provider abstraction, conversations, voice, vision, applications, filesystem, terminal, browser, system adapters, coding workflows, memory, plugins, tests, and packaging incrementally.
