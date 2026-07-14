"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";

export function Footer() {
  const { brand, contact, serviceAreas } = cleaningConfig;

  return (
    <footer className="bg-text text-white">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-xl font-bold font-[family-name:var(--font-heading)]">
              {brand.name}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-300">
              {brand.tagline} Austin&apos;s most trusted professional cleaning
              service, delivering spotless homes since 2019.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-primary/30"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white tap-target"
              >
                <Phone className="h-4 w-4 text-primary" />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white tap-target"
              >
                <Mail className="h-4 w-4 text-primary" />
                {contact.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                {contact.dispatchAddress}
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                {contact.hours}
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {serviceAreas.map((area) => (
                <span
                  key={area.zipCode}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {area.neighborhood}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {serviceAreas.length} neighborhoods & counting
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "Get Instant Quote", href: "#quote-estimator" },
                { label: "Our Services", href: "#services" },
                { label: "Meet the Team", href: "#team" },
                { label: "Reviews", href: "#testimonials" },
                { label: "Careers — Join Our Team", href: "#" },
                { label: "Commercial Cleaning", href: "#services" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-white tap-target"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {brand.name} All rights reserved.
            Licensed & Insured — {brand.licenseKey}
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            Made with <Heart className="h-3 w-3 text-red-400 fill-current" /> in
            {brand.city}, {brand.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
