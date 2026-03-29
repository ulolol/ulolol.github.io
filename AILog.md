# AI Development Log

## Findings
- The project is a Vite + React application where the root directory was being used for both source files and production build outputs.
- `index.html` at the root was pointing to static build assets (`/assets/index-*.js`), which prevented Vite's development server from serving live source changes (HMR).
- This led to a "stale data" situation where manual build hash updates were required to see changes.

## Steps
- Kille existing stale dev server process.
- Created `implementation_plan.md` and `task.md`.
- Restored `index.html` to a proper source template pointing to `/src/main.tsx`.

## Issues
- `package.json` deploy script is destructive to the source root (`rm -rf index.html`).

## Fixes
- Restored source entry point in `index.html`.

## Progress
- [x] Kill stale dev server.
- [x] Restore `index.html` source template.
- [x] Initialize documentation.
- [x] Update README.md.
- [x] Restart dev server and verify.
