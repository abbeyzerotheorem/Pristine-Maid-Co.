"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            The <span className="gradient-mint-text">Transformation</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            See the dramatic difference our professional cleaning teams make.
            Slide to reveal the transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl shadow-2xl cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After image (full) */}
            <div className="absolute inset-0">
              <img
                src="after.jpeg"
                alt="After cleaning — a beautifully organized, sparkling clean living room"
                className="h-full w-full object-cover"
                width={1200}
                height={750}
                draggable={false}
              />
              <div className="absolute bottom-4 right-4 rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                AFTER
              </div>
            </div>

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="before.png"
                alt="Before cleaning — a cluttered living room needing attention"
                className="h-full w-full object-cover"
                style={{ width: `${containerRef.current?.offsetWidth || 1200}px`, maxWidth: "none" }}
                width={1200}
                height={750}
                draggable={false}
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-accent/90 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                BEFORE
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 z-10 h-full w-0.5 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-110">
                <ArrowLeftRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
