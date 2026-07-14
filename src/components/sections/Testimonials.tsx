"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";

export function Testimonials() {
  const { testimonials } = cleaningConfig;

  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            What Austin <span className="gradient-mint-text">Homeowners</span> Say
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Real reviews from real families. No scripts, no fakes — just
            genuine, spotless results.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:sparkle-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-primary/20" />
              </div>

              <p className="mb-4 text-sm leading-relaxed text-text">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mb-3 inline-flex rounded-lg bg-primary/5 px-3 py-1">
                <span className="text-xs font-semibold text-primary">
                  {testimonial.highlight}
                </span>
              </div>

              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-bold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-text">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
