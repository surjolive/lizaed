# LIZAED

Local Intelligent Zonal AI Execution & Desktop Assistant for Windows.

## Phase 1 status

This is the foundation phase of a real, modular agent. It includes:

- Electron main/preload boundaries with context isolation
- React + TypeScript command-center shell
- Offline-ready provider status and an emergency stop control
- Explicit tool and permission contracts
- Optional Python stdlib health service at `GET /health`
- Architecture, security, and development documentation

The UI intentionally reports unavailable system metrics instead of fabricating them. Computer control, browser automation, voice, vision, persistence, and AI execution are subsequent phases and are not silently implied by this shell.

## Requirements

- Windows 10/11
- Node.js 20+
- npm 10+
- Python 3.11+ is optional for the backend bridge
- Git

## Setup

```powershell
npm.cmd install
npm.cmd run build
```

Run the renderer during development:

```powershell
npm.cmd run dev
```

The Electron main process expects the Vite server at `http://127.0.0.1:5173`. Start the Python bridge separately when Python is installed:

```powershell
python -m backend.service
```

## Planned commands

- `npm run typecheck` - check renderer and Electron TypeScript
- `npm test` - run permission contract tests
- `npm run backend:check` - compile-check Python modules
- `npm run package` - create a Windows installer after Electron dependencies are available

## Architecture

See [docs/architecture.md](docs/architecture.md), [docs/security.md](docs/security.md), and [docs/development.md](docs/development.md). Optional providers such as Ollama must be configured by the user; no paid API or key is required.
