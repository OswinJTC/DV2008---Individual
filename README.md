# Warranty, understood

An individual DV2008 portfolio case study for Oswin / Chen Jui Tai.

## Run

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. Production build: `npm run build`; preview the build with `npm run preview`.

## Stack

React + TypeScript + Vite, Tailwind CSS v4, Framer Motion, Lucide icons. Static frontend; no backend, accounts, database or AI service. Locally hosted Google Fonts with OFL licenses in `public/fonts`.

## Editing

- `src/App.tsx`: narrative, reusable components, concept tabs, scripted assistant and six-stage journey.
- `src/styles.css`: design system, desktop/tablet/mobile styles and reduced-motion support.
- `public/images`: original extracted PDF images, WebP compressed.
- `DESIGN_PLAN.md`: pre-implementation structure, hierarchy, components, visual system and evidence map.
- `tests/interactions.test.tsx`: functional scenario and navigation checks. Run `npx vitest run`.

## Content integrity

Research, directions, testing and final system are team work. Individual focus and earlier contributions follow Oswin’s supplied brief. Source references appear in the page. Assistant scenario dialogue is illustrative; original source screens are labelled separately. No live AI or merchant integration is claimed. The test sample was four; assistant use was prompted, and no post-iteration retest is reported.

All project assets are extracted from the three supplied DV2008 PDFs. Embedded sample product and purchase details belong to the prototype, not verified merchant policy. The local `research` folder contains extraction intermediates and is excluded from deployment/source sync.

## Verification

TypeScript and production build; DOM interaction tests for concept selection, three complete assistant scenarios with reset, original-screen disclosure, six journey stages, anchors and image accessibility. Browser screenshot QA was unavailable because the computer-use browser host could not connect; responsive rendering still requires visual review.
