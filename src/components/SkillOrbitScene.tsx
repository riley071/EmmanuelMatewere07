import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei/core/Line";
import { Group, Mesh } from "three";
import { MotionValue } from "framer-motion";

type Props = { mobile: boolean; running: boolean; selected: boolean; pointerX: MotionValue<number>; pointerY: MotionValue<number> };

function OrbitGeometry({ mobile, selected, pointerX, pointerY }: Omit<Props, "running">) {
  const group = useRef<Group>(null);
  const rings = useRef<(Group | null)[]>([]);
  const core = useRef<Mesh>(null);
  const speed = useRef(1);
  const time = useRef(0);
  const paths = useMemo(() => [1.18, 1.8, 2.42].map(radius =>
    Array.from({ length: (mobile ? 64 : 96) + 1 }, (_, i) => {
      const angle = i / (mobile ? 64 : 96) * Math.PI * 2;
      return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as [number, number, number];
    })), [mobile]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, .05);
    speed.current += ((selected ? .15 : 1) - speed.current) * Math.min(1, dt * 3);
    time.current += dt * speed.current * (mobile ? .55 : 1);
    if (group.current) {
      const px = pointerX.get(), py = pointerY.get();
      group.current.rotation.y += ((px > 100 ? 0 : (px - 50) * .002) - group.current.rotation.y) * dt * 3;
      group.current.rotation.x += ((py > 100 ? 0 : (py - 50) * .002) - group.current.rotation.x) * dt * 3;
    }
    rings.current.forEach((ring, i) => {
      if (!ring) return;
      ring.rotation.z = time.current * (i % 2 ? -.045 : .035);
      ring.rotation.x = Math.sin(time.current * .18 + i) * .1 + (i - 1) * .12;
      ring.rotation.y = Math.cos(time.current * .15 + i) * .16;
    });
    if (core.current) core.current.scale.setScalar(1 + Math.sin(time.current * .9) * .035);
  });

  return <group ref={group}>
    {paths.map((points, i) => <group key={i} ref={node => { rings.current[i] = node; }}>
      <Line points={points} color={["#ff6b35", "#00d4aa", "#8b5cf6"][i]}
        lineWidth={1} dashed dashSize={.055} gapSize={.065}
        transparent opacity={.34} depthWrite={false} />
    </group>)}
    {/* Two inexpensive translucent shells create depth without a bloom pass. */}
    <mesh ref={core}>
      <sphereGeometry args={[.72, mobile ? 20 : 32, mobile ? 16 : 24]} />
      <meshBasicMaterial color="#00d4aa" transparent opacity={.09} depthWrite={false} />
      <mesh scale={1.12}>
        <sphereGeometry args={[.72, 20, 16]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={.035} depthWrite={false} />
      </mesh>
    </mesh>
  </group>;
}

/** CSS/HTML remains visible if WebGL is unavailable or initialization fails. */
export default function SkillOrbitScene({ running, ...props }: Props) {
  return <Canvas camera={{ position: [0, 0, 8], fov: 45 }}
    dpr={props.mobile ? 1 : [1, 1.25]} frameloop={running ? "always" : "never"}
    gl={{ alpha: true, antialias: false, powerPreference: "low-power" }} fallback={null}>
    <OrbitGeometry {...props} />
  </Canvas>;
}
