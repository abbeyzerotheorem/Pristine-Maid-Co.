"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeDollarSign, Home, Star } from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-7 w-7" />,
  BadgeDollarSign: <BadgeDollarSign className="h-7 w-7" />,
  Home: <Home className="h-7 w-7" />,
  Star: <Star className="h-7 w-7" />,
};

const colorMap: Record<string, string> = {
  ShieldCheck: "bg-primary/10 text-primary",
  BadgeDollarSign: "bg-secondary/10 text-secondary",
  Home: "bg-accent/10 text-accent",
  Star: "bg-primary/10 text-primary",
};

export function CredibilityMatrix() {
  const { credibilityStats } = cleaningConfig;

  return (
    <section className="section-padding border-y border-border bg-white/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {credibilityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-5 text-center shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${colorMap[stat.icon] || "bg-primary/10 text-primary"}`}
              >
                {iconMap[stat.icon] || <ShieldCheck className="h-7 w-7" />}
              </div>
              <div className="text-xl font-bold text-text sm:text-2xl">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-muted sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
