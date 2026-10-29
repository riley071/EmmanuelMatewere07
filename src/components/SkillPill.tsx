import React from "react";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import { OrbitSkill } from "./orbitSkills";

type Props = {
  skill: OrbitSkill;
  index: number;
  selected: boolean;
  reduced: boolean;
  mobile: boolean;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  phase: MotionValue<number>;
  tooltipId: string;
  onSelect: () => void;
};

export default function SkillPill({ skill, index, selected, reduced, mobile, pointerX, pointerY, phase, tooltipId, onSelect }: Props) {
  // Pointer coordinates are percentages. Only nearby pills respond magnetically;
  // the shared motion values avoid setState on pointer movement or animation frames.
  const magnetic = (axis: "x" | "y", px: number, py: number) => {
    if (mobile || reduced || selected || Math.abs(px) > 100) return 0;
    const dx = px - skill.x, dy = py - skill.y;
    const influence = Math.max(0, 1 - Math.hypot(dx, dy) / 26);
    return (axis === "x" ? dx : dy) * influence * .5;
  };
  const pullX = useTransform([pointerX, pointerY], ([px, py]: number[]) => magnetic("x", px, py));
  const pullY = useTransform([pointerX, pointerY], ([px, py]: number[]) => magnetic("y", px, py));
  const x = useSpring(pullX, { stiffness: 120, damping: 20 });
  const magnetY = useSpring(pullY, { stiffness: 120, damping: 20 });
  const y = useTransform([magnetY, phase], ([pull, time]: number[]) =>
    pull + (reduced ? 0 : Math.sin(time + index * .85) * (mobile ? 1.5 : 3)));

  return <div className="hybrid-skill-slot" style={{ left: `${skill.x}%`, top: `${skill.y}%`, zIndex: selected ? 20 : 3 }}>
    <motion.div style={{ x, y, transformStyle: "preserve-3d" }}>
      <motion.button
        type="button"
        className={`hybrid-skill-pill${selected ? " is-selected" : ""}`}
        style={{ "--skill-color": skill.color } as React.CSSProperties}
        initial={reduced ? false : { opacity: 0, x: (skill.x - 50) * 3, y: (skill.y - 50) * 3, scale: .6, z: -80 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: reduced ? 1 : selected ? 1.07 : 1, z: reduced ? 0 : selected ? 75 : mobile ? 0 : skill.depth }}
        transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 105, damping: 18, delay: selected ? 0 : index * .035 }}
        whileHover={reduced ? undefined : { scale: 1.1, z: 60, transition: { delay: 0, duration: .2 } }}
        whileTap={reduced ? undefined : { scale: .98 }}
        aria-pressed={selected}
        aria-describedby={selected ? tooltipId : undefined}
        onClick={event => { event.stopPropagation(); onSelect(); }}
      >{skill.label}</motion.button>
    </motion.div>
  </div>;
}
