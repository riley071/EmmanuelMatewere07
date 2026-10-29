import React, { Component, lazy, Suspense, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import SkillPill from "./SkillPill";
import { ORBIT_SKILLS } from "./orbitSkills";
import "../assets/styles/SkillOrbit.scss";

const SkillOrbitScene = lazy(() => import("./SkillOrbitScene"));
class OrbitBoundary extends Component<React.PropsWithChildren<{}>, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function SkillOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { margin: "80px" });
  const reduced = Boolean(useReducedMotion());
  const [mobile, setMobile] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [selected, setSelected] = useState<number | null>(null);
  const tooltipId = useId();
  // A sentinel outside the orbit turns magnetism off on pointer leave.
  const pointerX = useMotionValue(1000), pointerY = useMotionValue(1000);
  const pitch = useMotionValue(0), yaw = useMotionValue(0);
  const rotateX = useSpring(pitch, { stiffness: 85, damping: 22 });
  const rotateY = useSpring(yaw, { stiffness: 85, damping: 22 });
  const phase = useMotionValue(0);
  const speed = useRef(1);
  const coreScale = useTransform(phase, value => reduced ? 1 : 1 + Math.sin(value * .9) * .035);
  const running = visible && pageVisible && !reduced;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 600px), (pointer: coarse)");
    const sync = () => setMobile(media.matches);
    const visibility = () => setPageVisible(!document.hidden);
    sync(); media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", visibility);
    return () => { media.removeEventListener("change", sync); document.removeEventListener("visibilitychange", visibility); };
  }, []);

  useEffect(() => {
    if (mobile || reduced) { pointerX.set(1000); pointerY.set(1000); pitch.set(0); yaw.set(0); }
  }, [mobile, reduced, pointerX, pointerY, pitch, yaw]);

  useEffect(() => {
    if (selected === null) return;
    const dismiss = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setSelected(null);
    };
    const keyboard = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", keyboard);
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", keyboard); };
  }, [selected]);

  useAnimationFrame((_, delta) => {
    if (!running) return;
    const dt = Math.min(delta / 1000, .05);
    speed.current += ((selected === null ? 1 : .15) - speed.current) * Math.min(1, dt * 3);
    phase.set(phase.get() + dt * speed.current * (mobile ? .5 : 1));
  });

  return <div ref={ref} className={`hybrid-orbit${selected !== null ? " is-focused" : ""}`}
    role="group" aria-label="Interactive core skills"
    onClick={() => setSelected(null)}
    onPointerMove={event => {
      if (mobile || reduced || event.pointerType !== "mouse") return;
      const box = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width * 100;
      const y = (event.clientY - box.top) / box.height * 100;
      pointerX.set(x); pointerY.set(y); pitch.set((50 - y) * .06); yaw.set((x - 50) * .08);
    }}
    onPointerLeave={() => { pointerX.set(1000); pointerY.set(1000); pitch.set(0); yaw.set(0); }}>
    <div className="hybrid-orbit-art" aria-hidden="true">
      <i className="hybrid-orbit-halo" />
      <i className="hybrid-fallback-ring ring-one" /><i className="hybrid-fallback-ring ring-two" /><i className="hybrid-fallback-ring ring-three" />
      {!reduced && <div className="hybrid-orbit-canvas"><OrbitBoundary><Suspense fallback={null}>
        <SkillOrbitScene mobile={mobile} running={running} selected={selected !== null} pointerX={pointerX} pointerY={pointerY} />
      </Suspense></OrbitBoundary></div>}
    </div>
    <motion.div className="hybrid-orbit-overlay" style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}>
      <motion.div className="hybrid-orbit-core" style={{ scale: coreScale }} aria-hidden="true">
        <span>BUILD</span><strong>better</strong>
      </motion.div>
      {ORBIT_SKILLS.map((skill, index) => <SkillPill key={skill.label} skill={skill} index={index}
        mobile={mobile} reduced={reduced} selected={selected === index} phase={phase}
        pointerX={pointerX} pointerY={pointerY} tooltipId={tooltipId}
        onSelect={() => setSelected(current => current === index ? null : index)} />)}
    </motion.div>
    <p className="hybrid-orbit-hint">Select a skill to explore</p>
    <div className="hybrid-tooltip-region" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait">
        {selected !== null && <motion.div key={selected} className="hybrid-orbit-tooltip" role="tooltip" id={tooltipId}
          initial={reduced ? false : { opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : .15 }} onClick={event => event.stopPropagation()}>
          <strong>{ORBIT_SKILLS[selected].label}</strong>
          <p>{ORBIT_SKILLS[selected].description}</p>
          <span>Select again or press Escape to reset</span>
        </motion.div>}
      </AnimatePresence>
    </div>
  </div>;
}
