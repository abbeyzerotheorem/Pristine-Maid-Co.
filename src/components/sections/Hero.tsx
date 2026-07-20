"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Building2, Home, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cleaningConfig } from "@/data/cleaning";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease:"easeOut" } },
};

export function Hero() {
  const { brand } = cleaningConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bg via-white to-brand-tint/40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl pt-12 sm:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <span className="eyebrow-pill">
                <Home className="h-3.5 w-3.5" />
                Austin&apos;s Most Trusted Cleaning Service
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-display mt-5 mb-6 font-bold text-ink text-balance"
            >
              Come Home to{" "}
              <span className="gradient-mint-text">Fresh.</span>
              <br />
              We&apos;ll Handle the Rest.
            </motion.h1>

            <motion.p
              variants={item}
              className="mb-8 max-w-lg text-lg leading-relaxed text-muted"
            >
              Professional, bonded, and insured cleaning teams that transform
              your space with meticulous care. Background-checked specialists
              delivering spotless results — guaranteed.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="xl" asChild>
                <a href="#quote-estimator">
                  Get Instant Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <a href="#services">
                  <Building2 className="h-5 w-5" />
                  Commercial Services
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted"
            >
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary" />
                <span>$2M Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span>4.97 Google Rating</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease:"easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-float ring-1 ring-ink/5 lg:aspect-square">
              <Image
                src="/hero.jpeg"
                alt="A beautifully clean, sunlit living room with pristine surfaces and fresh flowers"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface p-4 shadow-float sm:-bottom-6 sm:-left-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Home className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">12,400+</div>
                  <div className="text-xs text-muted">Homes Cleaned</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -right-4 top-4 rounded-2xl border border-border bg-surface p-4 shadow-float sm:-right-6 sm:top-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">200%</div>
                  <div className="text-xs text-muted">Spotless Guarantee</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
