"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";

export function Testimonials() {
  const { testimonials } = cleaningConfig;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="section-padding bg-bg">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="mb-10 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"
        >
          <div>
            <div className="eyebrow mb-4 sm:mx-0">
              Real Reviews
            </div>
            <h2 className="text-h2 font-bold text-ink text-balance sm:text-left">
              What Austin <span className="gradient-mint-text">Homeowners</span> Say
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Previous review"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary hover:text-primary tap-target"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next review"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary hover:text-primary tap-target"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:sparkle-glow">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-primary/20" />
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-ink">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="mb-3 inline-flex w-fit rounded-lg bg-primary/5 px-3 py-1">
                    <span className="text-xs font-semibold text-primary">
                      {t.highlight}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">{t.name}</div>
                      <div className="text-xs text-muted">{t.location}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selected
                  ? "w-7 bg-primary"
                  : "w-2 bg-border hover:bg-muted-light"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
