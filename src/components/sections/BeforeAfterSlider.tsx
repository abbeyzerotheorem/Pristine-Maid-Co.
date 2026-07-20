"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

export function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId))
      e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 3));
  };

  // clip-path reveals the left `pos`% of the before layer — no width math,
  // no layout shift, no horizontal overflow on any viewport.
  const clip = `inset(0 ${100 - pos}% 0 0)`;

  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="mb-12 text-center"
        >
          <div className="eyebrow eyebrow-center mx-auto mb-4">
            See The Difference
          </div>
          <h2 className="text-h2 font-bold text-ink text-balance">
            The <span className="gradient-mint-text">Transformation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            See the dramatic difference our professional cleaning teams make.
            Drag the handle to reveal the transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.1 }}
        >
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl shadow-float"
          >
            {/* AFTER (base layer, full) */}
            <div className="absolute inset-0">
              <Image
                src="/after.jpeg"
                alt="After cleaning — a beautifully organized, sparkling clean living room"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                draggable={false}
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                AFTER
              </div>
            </div>

            {/* BEFORE (clipped to left `pos`%) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: clip }}
            >
              <Image
                src="/before.png"
                alt="Before cleaning — a lived-in living room needing attention"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                draggable={false}
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-accent/90 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                BEFORE
              </div>
            </div>

            {/* Handle */}
            <div
              className="absolute top-0 z-10 h-full w-0.5 bg-white shadow-float"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div
                role="slider"
                tabIndex={0}
                aria-label="Reveal before and after"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                onKeyDown={onKeyDown}
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-primary shadow-float outline-none ring-primary/40 transition-transform focus-visible:ring-4 hover:scale-110"
              >
                <ArrowLeftRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
