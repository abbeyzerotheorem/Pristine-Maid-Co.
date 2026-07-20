"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Phone, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { cleaningConfig } from "@/data/cleaning";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const { brand, contact } = cleaningConfig;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = `tel:${contact.phone.replace(/[^\d]/g, "")}`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-surface/85 shadow-card backdrop-blur-md"
          : "border-b border-transparent bg-surface/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-mint text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-ink">
              {brand.name}
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted">
              {brand.city} · Maid Service
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-brand-tint hover:text-primary tap-target"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={tel}
            className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-primary tap-target"
          >
            <Phone className="h-4 w-4 text-primary" />
            {contact.phone}
          </a>
          <Button size="sm" asChild>
            <a href="#quote-estimator">
              Get Instant Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile trigger */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-ink transition-colors hover:border-primary hover:text-primary tap-target lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </DialogTrigger>

          <DialogContent className="fixed inset-y-0 right-0 flex h-full w-[86%] max-w-sm flex-col p-0 sm:w-[22rem]">
            <DialogTitle className="sr-only">Site navigation</DialogTitle>

            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-ink">
                {brand.name}
              </span>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
              {NAV_LINKS.map((link) => (
                <DialogClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-xl px-4 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-brand-tint hover:text-primary"
                  >
                    {link.label}
                  </a>
                </DialogClose>
              ))}
            </nav>

            <div className="space-y-3 border-t border-border px-5 py-5">
              <Button size="lg" className="w-full" asChild>
                <a href="#quote-estimator" onClick={() => setOpen(false)}>
                  Get Instant Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <a
                href={tel}
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-border py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary tap-target"
              >
                <Phone className="h-4 w-4 text-primary" />
                {contact.phone}
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.header>
  );
}
