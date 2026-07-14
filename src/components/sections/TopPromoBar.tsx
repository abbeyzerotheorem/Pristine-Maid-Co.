"use client";

import { motion } from "framer-motion";
import { Tag, Phone } from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";

export function TopPromoBar() {
  const { promo, contact } = cleaningConfig;

  if (!promo.enabled) return null;

  return (
    <motion.div
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative z-50 bg-gradient-to-r from-primary-dark via-primary to-secondary text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Tag className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="font-medium">
            {promo.bannerText}
          </span>
        </div>
        <a
          href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
          className="hidden items-center gap-1.5 rounded-lg bg-white/15 px-3 py-1.5 font-semibold backdrop-blur-sm transition-colors hover:bg-white/25 sm:flex tap-target"
        >
          <Phone className="h-3.5 w-3.5" />
          {contact.phone}
        </a>
      </div>
    </motion.div>
  );
}
