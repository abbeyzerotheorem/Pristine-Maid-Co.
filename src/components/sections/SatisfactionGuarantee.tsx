"use client";

import { motion } from "framer-motion";
import { Shield, RotateCcw, BadgeCheck, Home } from "lucide-react";

export function SatisfactionGuarantee() {
  return (
    <section className="section-padding bg-gradient-to-br from-text via-slate-800 to-text overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            <Shield className="h-4 w-4 text-secondary" />
            Our Ironclad Promise
          </div>

          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            The 200%{" "}
            <span className="text-secondary-light">
              &ldquo;Spotless&rdquo;
            </span>{" "}
            Satisfaction Guarantee
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300">
            We stand behind every clean with an industry-leading guarantee that
            puts your peace of mind first. Zero risk. Total satisfaction.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: RotateCcw,
                title: "Free Re-Clean in 24 Hours",
                description:
                  "If you aren't completely satisfied, we return within 24 hours to re-clean the areas of concern — completely free.",
              },
              {
                icon: BadgeCheck,
                title: "Full Refund if Still Unhappy",
                description:
                  "If you're still not satisfied after the re-clean, we refund your payment in full. No questions, no hassle.",
              },
              {
                icon: Home,
                title: "Zero-Risk Booking",
                description:
                  "Every booking is backed by our guarantee. You never pay for a clean that doesn't meet our 200% Spotless standard.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20">
                  <item.icon className="h-7 w-7 text-secondary-light" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm"
          >
            <Shield className="h-5 w-5 text-secondary-light" />
            <span className="text-sm font-semibold text-white">
              Backed by $2,000,000 in liability insurance & full bonding
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
