import React from "react";
import { motion, HTMLMotionProps, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type Props = HTMLMotionProps<"div"> & { delay?: number; tilt?: boolean; direction?: "up" | "left" };
/** Motion values keep pointer movement out of React's render cycle. */
export default function AnimatedCard({ children, delay = 0, tilt = true, direction = "up", style, ...props }: Props) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 24 });
  return <motion.div {...props}
    initial={reduced ? false : { opacity: 0, y: direction === "up" ? 24 : 0, x: direction === "left" ? -24 : 0 }}
    whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, amount: 0.08 }}
    whileHover={tilt && !reduced ? { y: -6, scale: 1.01 } : undefined}
    transition={{ duration: 0.6, delay }}
    style={{ ...style, ...(tilt && !reduced ? { rotateX, rotateY, transformPerspective: 1100 } : {}) }}
    onPointerMove={event => {
      if (!tilt || reduced || event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 5);
      y.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
    }} onPointerLeave={() => { x.set(0); y.set(0); }}>
    {children}
  </motion.div>;
}
