"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Phone, MessageCircle } from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";

export function MobileConversionRibbon() {
  const { contact } = cleaningConfig;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y:0 }}
          exit={{ y:100 }}
          transition={{ duration:0.3, ease:"easeOut" }}
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 px-4 pt-3 shadow-float backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
            <a
              href="#quote-estimator"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-mint px-4 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <DollarSign className="h-4 w-4" />
              Get Instant Price
            </a>

            <a
              href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-border bg-surface text-primary transition-all hover:border-primary hover:bg-primary/5 tap-target"
              aria-label="Call support"
            >
              <Phone className="h-5 w-5" />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-border bg-surface text-secondary transition-all hover:border-secondary hover:bg-secondary/5 tap-target"
              aria-label="Email us"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
