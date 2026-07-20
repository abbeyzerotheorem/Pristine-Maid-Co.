"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { iconMap } from "@/lib/icons";
import { cleaningConfig } from "@/data/cleaning";

export function Footer() {
  const { brand, contact, serviceAreas, footerLinks, socials } = cleaningConfig;

  return (
    <footer className="bg-ink text-white">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-xl font-bold font-[family-name:var(--font-heading)]">
              {brand.name}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-white/60">
              {brand.tagline} {brand.city}&apos;s most trusted professional cleaning
              service, delivering spotless homes since 2019.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-primary/30"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white tap-target"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-light" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white tap-target"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-light" />
                {contact.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-light" />
                {contact.dispatchAddress}
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-light" />
                {contact.hours}
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {serviceAreas.map((area) => (
                <span
                  key={area.zipCode}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {area.neighborhood}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/40">
              {serviceAreas.length} neighborhoods &amp; counting
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white tap-target"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {brand.name} All rights reserved.
            Licenced &amp; Insured — {brand.licenseKey}
          </p>
          <p className="flex items-center gap-1 text-xs text-white/40">
            Made with <Heart className="h-3 w-3 text-accent fill-current" /> in
            {brand.city}, {brand.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
