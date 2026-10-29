# Hybrid skill orbit

Integrated into the existing React 18 hero. All 14 requested labels are preserved exactly, including `tawilndcss`, `pyhton`, and `farmer motion`. Edit labels and descriptions in `src/components/orbitSkills.ts` if desired.

## Dependencies

Already present in this checkout. For another React 18 checkout:

```sh
npm install three@^0.170.0 @react-three/fiber@^8.18.0 @react-three/drei@^9.122.0 framer-motion@^12.5.0 @types/three@^0.170.0 --legacy-peer-deps
```

Fiber 8 matches React 18. This web-only CRA project uses the legacy peer flag to avoid unrelated optional native-platform peers.

## Full source

- `src/components/SkillOrbit.tsx`: interaction state, HTML overlay, parallax, live tooltip, visibility/motion preferences, lazy graphics boundary.
- `src/components/SkillPill.tsx`: sharp native buttons, magnetic springs, flying entrance and selected/hover depth.
- `src/components/SkillOrbitScene.tsx`: three dashed 3D rings using Drei Line, two translucent sphere shells, pulse and smoothed orbit slowdown. No postprocessing, texture downloads or models.
- `src/components/orbitSkills.ts`: all labels, positions, depth, colors and short descriptions.
- `src/assets/styles/SkillOrbit.scss`: all required responsive styling; imported directly by SkillOrbit.

No CSS framework is required. The existing hero starfield continues behind this orbit, so no additional particle system is created. Existing palette variables and skill-specific colors are retained.

## Replace the existing graphic

Already done in `src/components/Main.tsx`. Import:

```tsx
import SkillOrbit from "./SkillOrbit";
```

Replace the old `skill-orbit` markup and its three `float-card` siblings with:

```tsx
<div className="hero-visual hero-visual-hybrid">
  <SkillOrbit />
</div>
```

The old SCSS can remain: new styles use a separate `hybrid-` namespace. The extra hero class overrides the old fixed visual height so the full orbit and tooltip fit on small screens.

## Interaction

Move a mouse nearby to attract pills gently. Hover lifts and highlights them. Select a pill to bring it forward, slow ring rotation and floating by about 85%, and reveal its description. Select it again, click empty orbit space or elsewhere, or press Escape to reset. Native buttons support Tab, Enter and Space; the selected button exposes its tooltip through aria-describedby and aria-pressed.

The tooltip sits above the orbit. Space is reserved above the rings so it clears the navigation and stays away from the stats bar.

## Performance and fallback

- Mobile/coarse pointers: no magnetic pull or parallax, smaller float amplitude, slower rotation, 64 rather than 96 ring segments, fewer sphere segments, pixel ratio 1.
- Desktop: pixel ratio capped at 1.25; pointer/frame updates use motion values and refs without React renders.
- Offscreen/hidden tab: animation progression and WebGL rendering pause.
- Reduced motion: no WebGL scene, entrances, floating or parallax. Static tracks and core preserve the graphic; buttons and descriptions remain usable.
- WebGL unavailable: the CSS tracks, core, and HTML skills remain usable behind a local error boundary.
- Both canvas and decorative layers use pointer-events: none; only the HTML pills and visible tooltip accept pointer input. Native touch scrolling is retained.

## Tooltip descriptions

- **Frontend systems**: Responsive, accessible interfaces built from reusable components.
- **React**: Component-driven web applications with clear state and data flows.
- **tawilndcss**: Utility-first styling for consistent, responsive interfaces.
- **next js**: React experiences with routing, rendering, and performance in mind.
- **pyhton**: Automation, reporting, and practical data-processing tools.
- **farmer motion**: Smooth interface transitions and thoughtful micro-interactions.
- **SEO**: Search-friendly structure, metadata, and performance fundamentals.
- **CMS**: Manageable content workflows for everyday publishing.
- **WordPress**: Flexible websites and content-management experiences.
- **CMS platforms**: Content platforms tailored to business and editorial needs.
- **UI / UX**: Clear user journeys, usable layouts, and intuitive interactions.
- **PHP**: Server-side business logic, APIs, and database-backed applications.
- **Figma**: Wireframes, prototypes, and visual systems for digital products.
- **Visual problem solving**: Turning complex ideas into purposeful, clear visual communication.

## Checks

```sh
npx tsc --noEmit
npm test -- --watch=false --runInBand src/components/SkillOrbit.test.tsx
npm run build
```

The targeted tests cover all 14 labels, accessible selection/descriptions, click toggling, Escape, empty-space reset and outside-click reset. They use reduced motion and mock WebGL; visual WebGL verification is separate.

Technical references: [Drei Line](https://drei.docs.pmnd.rs/shapes/line), [Fiber render loop hooks](https://r3f.docs.pmnd.rs/api/hooks).

## Verified results

- TypeScript: passed.
- Targeted interaction tests: 2 passed. The existing test stack emits an act deprecation warning.
- Production build: passed with the existing third-party MediaPipe missing-source-map warning.
- Headless Chrome visual/hit-target checks: 1440px desktop, 390px mobile and 320px mobile all rendered 14 skills with no label overlaps, no horizontal overflow, and 14/14 clickable button centers. Real browser mouse input selected React and displayed its description.
- Reduced motion at 390px: all 14 skills and tooltips remained usable; zero WebGL canvases were created.
- Browser runtime exceptions: none reported.
- Nothing has been deployed.
