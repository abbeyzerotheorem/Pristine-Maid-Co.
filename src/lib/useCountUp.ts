"use client";

import { useEffect, useRef, useState } from "react";

// Smoothly animates a displayed number toward `target` using rAF +
// easeOutCubic. Starts from the last displayed value so repeated
// recalculations feel continuous. Respects reduced-motion.
export function useCountUp(target: number, duration = 500): number {
  const [value, setValue] = useState(0);
  const displayed = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const from = displayed.current;
    const delta = target - from;

    if (reduced || delta === 0) {
      displayed.current = target;
      setValue(target);
      return;
    }

    let start: number | undefined;
    const tick = (ts: number) => {
      if (start === undefined) start = ts;
      const t = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(from + delta * eased);
      displayed.current = v;
      setValue(v);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration]);

  return value;
}
