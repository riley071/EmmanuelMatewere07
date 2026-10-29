import React, { Component, Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Color, Group } from "three";
import { useInView, useReducedMotion } from "framer-motion";

// A decorative WebGL failure must never take the portfolio down.
class SceneBoundary extends Component<React.PropsWithChildren<{}>, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}
function Particles({ mobile }: { mobile: boolean }) {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const data = useMemo(() => {
    const count = mobile ? 160 : 560;
    const positions = new Float32Array(count * 3), colors = new Float32Array(count * 3);
    const palette = [new Color("#8b5cf6"), new Color("#ff6b35"), new Color("#00d4aa")];
    // Deterministic distribution avoids random scene changes on remount.
    let seed = 47;
    const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < count; i++) {
      positions.set([(random() - .5) * 19, (random() - .5) * 12, (random() - .5) * 7], i * 3);
      palette[i % 3].toArray(colors, i * 3);
    }
    return { positions, colors };
  }, [mobile]);
  useEffect(() => {
    if (mobile) return;
    const move = (e: PointerEvent) => { pointer.current = { x: e.clientX / window.innerWidth - .5, y: e.clientY / window.innerHeight - .5 }; };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [mobile]);
  useFrame((_, delta) => {
    if (!group.current) return;
    const dt = Math.min(delta, .05);
    group.current.rotation.z += dt * .012;
    group.current.rotation.x += (pointer.current.y * .06 - group.current.rotation.x) * Math.min(dt * 2, 1);
    group.current.rotation.y += (pointer.current.x * .08 - group.current.rotation.y) * Math.min(dt * 2, 1);
  });
  return <group ref={group}><Points positions={data.positions} colors={data.colors} stride={3} frustumCulled={false}>
    <PointMaterial transparent vertexColors size={mobile ? .035 : .025} sizeAttenuation depthWrite={false} opacity={.65} />
  </Points></group>;
}
export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  const [mobile, setMobile] = useState(true);
  const [active, setActive] = useState(!document.hidden);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const resize = () => setMobile(query.matches);
    const visibility = () => setActive(!document.hidden);
    resize(); query.addEventListener("change", resize);
    document.addEventListener("visibilitychange", visibility);
    return () => { query.removeEventListener("change", resize); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  return <div className="hero-scene" ref={ref} aria-hidden="true">
    {!reduced && <SceneBoundary><Suspense fallback={null}>
      <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={mobile ? 1 : [1, 1.5]}
        frameloop={visible && active ? "always" : "never"} gl={{ alpha: true, antialias: false, powerPreference: "low-power" }} fallback={null}>
        <Particles mobile={mobile} />
      </Canvas>
    </Suspense></SceneBoundary>}
  </div>;
}
