import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const target = parseInt(value, 10);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible || reduced) return;
    const animation = animate(0, target, { duration: 1.5, ease: "easeOut", onUpdate: n => setCount(Math.round(n)) });
    return () => animation.stop();
  }, [visible, reduced, target]);
  return <span ref={ref} aria-label={value}><span aria-hidden="true">{reduced ? target : count}{value.replace(/^\d+/, "")}</span></span>;
}
