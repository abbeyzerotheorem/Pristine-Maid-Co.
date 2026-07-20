"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { iconMap } from "@/lib/icons";
import { cleaningConfig } from "@/data/cleaning";

export function SatisfactionGuarantee() {
  const { guaranteeePillars, brand } = cleaningConfig;

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0E1A15] via-[#15201B] to-[#0E1A15]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="text-center"
        >
          <div className="eyebrow eyebrow-center mx-auto mb-6 text-white/80">
            <Shield className="h-4 w-4 text-secondary" />
            Our Ironclad Promise
          </div>

          <h2 className="text-h2 font-bold text-white text-balance">
            The 200%{" "}
            <span className="text-secondary-light">&ldquo;Spotless&rdquo;</span>{" "}
            Satisfaction Guarantee
          </h2>

          <p className="mx-auto mb-12 mt-6 max-w-2xl text-lg text-white/70">
            We stand behind every clean with an industry-leading guarantee that
            puts your peace of mind first. Zero risk. Total satisfaction.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {guaranteeePillars.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity:0, y:30 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ duration:0.45, delay: index * 0.12, ease:"easeOut" }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-float"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20">
                    <Icon className="h-7 w-7 text-secondary-light" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            transition={{ duration:0.5, delay:0.4 }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm"
          >
            <Shield className="h-5 w-5 text-secondary-light" />
            <span className="text-sm font-semibold text-white">
              Backed by {brand.insuranceCoverage} in liability insurance &amp; full bonding
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
