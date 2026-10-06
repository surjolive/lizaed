# Development

Use `npm.cmd` on Windows if PowerShell blocks the `npm.ps1` shim.

1. Install Node dependencies with `npm.cmd install`.
2. Run `npm.cmd run typecheck`.
3. Run `npm.cmd test`.
4. Run `npm.cmd run build`.
5. Start the renderer with `npm.cmd run dev`.

Python is optional in Phase 1. When available, `python -m backend.service` exposes a localhost-only health endpoint. The service intentionally uses the standard library so offline setup does not require downloading packages.
