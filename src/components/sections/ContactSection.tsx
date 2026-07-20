"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, Mail, Calculator, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cleaningConfig } from "@/data/cleaning";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease:"easeOut" } },
};

export function ContactSection() {
  const { contact, promo, brand } = cleaningConfig;
  const tel = `tel:${contact.phone.replace(/[^\d]/g, "")}`;

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary via-primary-dark to-[#0E3A30] text-white"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.div variants={item} className="eyebrow eyebrow-center mx-auto mb-4 text-white/80">
          <ShieldCheck className="h-4 w-4 text-secondary-light" />
          Ready When You Are
        </motion.div>

        <motion.h2
          variants={item}
          className="text-h2 font-bold text-balance"
        >
          Book Your <span className="text-secondary-light">Spotless</span> Clean
        </motion.h2>

        <motion.p variants={item} className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
          Tell us about your home and we&apos;ll handle the rest. Most
          recurring clients save with code{" "}
          <span className="font-semibold text-white">{promo.promoCode}</span>{" "}
          — {promo.discountPercent}% off your first recurring clean.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="xl"
            variant="accent"
            className="w-full bg-secondary text-white hover:bg-secondary-light sm:w-auto"
            asChild
          >
            <a href={tel}>
              <Phone className="h-5 w-5" />
              {contact.phone}
            </a>
          </Button>

          <Button
            size="xl"
            className="w-full border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
            asChild
          >
            <a href={`mailto:${contact.email}`}>
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </Button>

          <Button
            size="xl"
            className="w-full bg-white text-white hover:bg-white/90 sm:w-auto"
            asChild
          >
            <a href="#quote-estimator">
              <Calculator className="h-5 w-5" />
              Get Instant Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 text-sm text-white/55"
        >
          {brand.name} · {contact.hours}
        </motion.p>
      </motion.div>
    </section>
  );
}
