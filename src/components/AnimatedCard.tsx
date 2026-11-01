import React from "react";
import {
  motion,
  HTMLMotionProps,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import "../assets/styles/AnimatedCard.scss";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  tilt?: boolean;
  /** Cursor-following glow. Defaults to the same value as `tilt`. */
  spotlight?: boolean;
  direction?: "up" | "left";
  /** Max tilt in degrees. */
  maxTilt?: number;
};

/** Motion values keep pointer movement out of React's render cycle. */
export default function AnimatedCard({
  children,
  delay = 0,
  tilt = true,
  spotlight,
  direction = "up",
  maxTilt = 6,
  style,
  className,
  onPointerMove,
  onPointerLeave,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const showTilt = tilt && !reduced;
  const showSpotlight = (spotlight ?? tilt) && !reduced;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 170, damping: 20, mass: 0.6 };
  const rotateX = useSpring(x, spring);
  const rotateY = useSpring(y, spring);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerMove?.(e); // keep any handler passed in by the parent
    if (reduced || e.pointerType !== "mouse") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    if (showTilt) {
      x.set(-(py - 0.5) * maxTilt * 2);
      y.set((px - 0.5) * maxTilt * 2);
    }
    if (showSpotlight) {
      e.currentTarget.style.setProperty("--mx", `${px * 100}%`);
      e.currentTarget.style.setProperty("--my", `${py * 100}%`);
    }
  };

  const handleLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerLeave?.(e);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      {...props}
      className={className}
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: direction === "up" ? 24 : 0,
              x: direction === "left" ? -24 : 0,
            }
      }
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      whileHover={showTilt ? { y: -8, scale: 1.015 } : undefined}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        ...style,
        ...(showTilt ? { rotateX, rotateY, transformPerspective: 1100 } : {}),
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <>
        {showSpotlight && <span className="ac-spotlight" aria-hidden />}
        {children as React.ReactNode}
      </>
    </motion.div>
  );
}
