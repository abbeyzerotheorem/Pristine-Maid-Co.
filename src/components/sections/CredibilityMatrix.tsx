"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons";
import { cleaningConfig } from "@/data/cleaning";
import type { Tone } from "@/types";

const toneStyles: Record<Tone, string> = {
  brand: "bg-primary/10 text-primary",
  amber: "bg-secondary/10 text-secondary",
  green: "bg-primary-light/10 text-primary-light",
};

export function CredibilityMatrix() {
  const { credibilityStats } = cleaningConfig;

  return (
    <section className="section-padding border-y border-border bg-surface/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {credibilityStats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-50px" }}
                transition={{ duration:0.45, delay: index * 0.08, ease:"easeOut" }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${toneStyles[stat.tone]}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <div className="text-xl font-bold text-ink sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-muted sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
