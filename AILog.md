# AI Development Log

## Findings
- The project is a Vite + React application where the root directory was being used for both source files and production build outputs.
- `index.html` at the root was pointing to static build assets (`/assets/index-*.js`), which prevented Vite's development server from serving live source changes (HMR).
- This led to a "stale data" situation where manual build hash updates were required to see changes.
- **Mobile Layout Issue**: Headers in `MapsView`, `TalentsView`, and `QuestsView` had fixed `text-6xl` sizes and non-responsive flex layouts, causing horizontal overflow on mobile.

## Steps
- Kille existing stale dev server process.
- Created `implementation_plan.md` and `task.md`.
- Restored `index.html` to a proper source template pointing to `/src/main.tsx`.
- Updated `MapsView.tsx`, `TalentsView.tsx`, and `QuestsView.tsx` with responsive headers.

## Issues
- `package.json` deploy script is destructive to the source root (`rm -rf index.html`).

## Fixes
- Restored source entry point in `index.html`.
- Implemented `flex-col sm:flex-row` and responsive font sizes in view headers.

## Progress
- [x] Kill stale dev server.
- [x] Restore `index.html` source template.
- [x] Initialize documentation.
- [x] Update README.md.
- [x] Upgrade `deploy` script to use `gh-pages` branch.
- [x] Restart dev server and verify.
- [x] Fix mobile layout headers in all views.
- [ ] Verify fixed layouts on multiple viewports.
