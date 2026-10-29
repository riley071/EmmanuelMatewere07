# Portfolio motion upgrade

The changes are integrated into the existing React 18 / Create React App project. No section data or image assets need replacing.

## Install and run

```sh
npm install three@^0.170.0 @react-three/fiber@^8.18.0 @react-three/drei@^9.122.0 framer-motion@^12.5.0 @types/three@^0.170.0 @fortawesome/fontawesome-svg-core@6.5.2 --legacy-peer-deps
npm start
```

Fiber 8 matches React 18 (https://r3f.docs.pmnd.rs/getting-started/installation). Do not upgrade to Fiber 9 without upgrading React. The legacy peer flag avoids resolving optional React Native/Expo peers in this web-only CRA project. Font Awesome core is listed explicitly because the existing icon component requires it.

## Complete source files

- `src/components/HeroScene.tsx`: lazy-loaded, branded particle scene, desktop mouse parallax, 560 desktop / 160 mobile points, capped pixel ratio, no pointer interaction. Rendering pauses outside the viewport and in hidden tabs. Reduced motion skips WebGL entirely. A local error boundary preserves the page if graphics initialization fails.
- `src/components/AnimatedCard.tsx`: reusable viewport reveal, optional spring-based mouse tilt and hover lift. Pass `tilt={false}` for section wrappers. Touch input never tilts cards. Delays are in seconds and viewport reveals run once.
- `src/components/CountUp.tsx`: one-time viewport-triggered number animation with an accessible final value and cleanup.
- `src/assets/styles/Motion.scss`: shared interaction styles, canvas layering, focus rings, badge glow and reduced-motion overrides. Imported by `src/App.tsx`.

All files contain the full implementation, rather than replacement snippets.

## Updated sections

- `Main.tsx`: loads HeroScene, staggers text entrances and uses CountUp for all four existing statistics. Preserves the skill orbit. Reduced motion stops the typewriter and smooth section scrolling.
- `Expertise.tsx`: replaces the previous observer/CSS entrance with AnimatedCard reveals and tilt; retains every skill and tag.
- `Project.tsx`: card reveals and tilt, mockup hover depth and animated live badge; existing case-study toggles and links are retained.
- `About.tsx`: section reveal, portrait tilt and viewport-drawn accent.
- `DesignShowcase.tsx`: staggered native button reveals with hover lift, tilt and existing image zoom; preview behavior remains intact.
- `Timeline.tsx`: local TimelineTrack component uses Framer Motion useScroll for each line; entries reveal once and nodes glow.
- `Contact.tsx`: section reveal, focus glow, busy button and draft-ready state. There was no email service in the original form. Submission now opens a prefilled mailto draft; the visitor must send it in their email app. This is not server delivery. To use an email API, replace the mailto handoff with an awaited request, set success only after delivery is accepted, and add a visible error state.
- `App.tsx`: MotionConfig honors the OS motion preference; removes the redundant page-wide FadeIn wrapper.

## Verification

```sh
npx tsc --noEmit
npm run build
```

For visual review, check desktop and mobile widths, keyboard navigation, all case-study toggles, design previews, contact validation and email handoff. Toggle the OS reduced-motion preference and scroll the hero offscreen. The canvas must never intercept a click or scroll. Existing light mode continues using the original palette variables.

The existing App.test.tsx still contains the starter Learn React test and does not describe the portfolio.

## Verification results

- TypeScript (`npx tsc --noEmit`): passed.
- Production build (`npm run build`): passed with a third-party MediaPipe missing-source-map warning from Drei's dependency tree. Build output is ready in `build/`.
- Whitespace check (`git diff --check`): passed.
- Browser visual QA was not performed. The existing starter Jest test was not used for validation.
- Nothing has been deployed.
