"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cleaningConfig } from "@/data/cleaning";

export function Hero() {
  const { brand } = cleaningConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bg via-white to-primary/3">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Home className="h-3.5 w-3.5" />
              Austin's Most Trusted Cleaning Service
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
              Come Home to{" "}
              <span className="gradient-mint-text">Fresh.</span>
              <br />
              We'll Handle the Rest.
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted">
              Professional, bonded, and insured cleaning teams that transform
              your space with meticulous care. Background-checked specialists
              delivering spotless results — guaranteed.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
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
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-secondary" />
                <span>$2M Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4 text-accent" />
                <span>4.97 Google Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <img
                src="/hero.jpeg"
                alt="A beautifully clean, sunlit living room with pristine surfaces and fresh flowers"
                className="h-full w-full object-cover"
                width={800}
                height={800}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface p-4 shadow-lg sm:-bottom-6 sm:-left-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Home className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">12,400+</div>
                  <div className="text-xs text-muted">Homes Cleaned</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -right-4 top-4 rounded-2xl border border-border bg-surface p-4 shadow-lg sm:-right-6 sm:top-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">200%</div>
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