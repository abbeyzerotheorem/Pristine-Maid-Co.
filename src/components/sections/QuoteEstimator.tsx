"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bed,
  Bath,
  Calculator,
  Check,
  Plus,
  ArrowRight,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cleaningConfig } from "@/data/cleaning";
import { formatCurrency } from "@/lib/utils";
import { useCountUp } from "@/lib/useCountUp";
import type { CleanFrequency } from "@/types";

export function QuoteEstimator() {
  const { bookingRates } = cleaningConfig;

  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [frequency, setFrequency] = useState<CleanFrequency>("one-time");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = useCallback((id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }, []);

  const calculatedPrice = useMemo(() => {
    const baseMatch = bookingRates.baseRates.find(
      (r) => r.bedrooms === bedrooms && r.bathrooms === bathrooms
    );
    const fallback = bookingRates.baseRates.reduce((closest, r) => {
      const diff =
        Math.abs(r.bedrooms - bedrooms) + Math.abs(r.bathrooms - bathrooms);
      const closestDiff =
        Math.abs(closest.bedrooms - bedrooms) +
        Math.abs(closest.bathrooms - bathrooms);
      return diff < closestDiff ? r : closest;
    });
    const basePrice = baseMatch?.price ?? fallback.price;

    const freqOption = bookingRates.frequencies.find((f) => f.id === frequency);
    const discount = freqOption?.discount ?? 0;
    const discountedBase = basePrice * (1 - discount / 100);

    const addOnTotal = selectedAddOns.reduce((sum, id) => {
      const addOn = bookingRates.addOns.find((a) => a.id === id);
      return sum + (addOn?.price ?? 0);
    }, 0);

    return Math.round(discountedBase + addOnTotal);
  }, [bedrooms, bathrooms, frequency, selectedAddOns, bookingRates]);

  const animatedPrice = useCountUp(calculatedPrice);
  const currentFreq = bookingRates.frequencies.find((f) => f.id === frequency);

  return (
    <section
      id="quote-estimator"
      className="section-padding bg-gradient-to-br from-bg via-white to-brand-tint/30"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="mb-12 text-center"
        >
          <div className="eyebrow eyebrow-center mx-auto mb-4">
            <Calculator className="h-4 w-4" />
            Instant Quote Estimator
          </div>
          <h2 className="text-h2 font-bold text-ink text-balance">
            Your Price in <span className="gradient-mint-text">30 Seconds</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Select your home details below for an instant baseline estimate.
            Final pricing confirmed after a quick walkthrough.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.1 }}
          className="overflow-hidden rounded-2xl border border-border bg-surface shadow-float"
        >
          <div className="grid lg:grid-cols-3">
            <div className="divide-y divide-border p-6 lg:col-span-2 lg:p-8">
              {/* Bedrooms */}
              <div className="pb-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
                  <Bed className="h-4 w-4 text-primary" />
                  Number of Bedrooms
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setBedrooms(n)}
                      aria-pressed={bedrooms === n}
                      className={`flex h-12 min-w-[48px] items-center justify-center rounded-xl border-2 px-5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        bedrooms === n
                          ? "border-primary bg-primary/5 text-primary shadow-sm sparkle-glow"
                          : "border-border bg-surface text-muted hover:border-primary/40 hover:text-ink"
                      }`}
                    >
                      {n === 5 ? "5+" : n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div className="py-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
                  <Bath className="h-4 w-4 text-primary" />
                  Number of Bathrooms
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      onClick={() => setBathrooms(n)}
                      aria-pressed={bathrooms === n}
                      className={`flex h-12 min-w-[48px] items-center justify-center rounded-xl border-2 px-5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        bathrooms === n
                          ? "border-primary bg-primary/5 text-primary shadow-sm sparkle-glow"
                          : "border-border bg-surface text-muted hover:border-primary/40 hover:text-ink"
                      }`}
                    >
                      {n === 4 ? "4+" : n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div className="py-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
                  <Home className="h-4 w-4 text-primary" />
                  Cleaning Frequency
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {bookingRates.frequencies.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFrequency(f.id)}
                      aria-pressed={frequency === f.id}
                      className={`flex flex-col items-center rounded-xl border-2 px-3 py-3 text-center transition-all duration-200 cursor-pointer ${
                        frequency === f.id
                          ? "border-primary bg-primary/5 shadow-sm sparkle-glow"
                          : "border-border bg-surface hover:border-primary/40"
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          frequency === f.id ? "text-primary" : "text-ink"
                        }`}
                      >
                        {f.label}
                      </span>
                      {f.discount > 0 && (
                        <span className="mt-1 rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-bold text-secondary">
                          Save {f.discount}%
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div className="pt-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
                  <Plus className="h-4 w-4 text-primary" />
                  Premium Add-Ons
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {bookingRates.addOns.map((addOn) => {
                    const isSelected = selectedAddOns.includes(addOn.id);
                    return (
                      <button
                        key={addOn.id}
                        onClick={() => toggleAddOn(addOn.id)}
                        aria-pressed={isSelected}
                        className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-sm sparkle-glow"
                            : "border-border bg-surface hover:border-primary/40"
                        }`}
                      >
                        <div
                          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                            isSelected
                              ? "border-primary bg-primary text-white"
                              : "border-muted-light bg-white"
                          }`}
                        >
                          {isSelected && <Check className="h-3.5 w-3.5" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="truncate text-sm font-semibold text-ink">
                              {addOn.name}
                            </span>
                            <span className="flex-shrink-0 text-sm font-bold text-primary">
                              +{formatCurrency(addOn.price)}
                            </span>
                          </div>
                          <span className="text-xs text-muted">
                            {addOn.description}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Price Card */}
            <div className="border-t border-border bg-gradient-to-b from-brand-tint/40 to-bg p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div className="lg:sticky lg:top-24">
                <h3 className="mb-2 text-lg font-bold text-ink">
                  Your Estimate
                </h3>
                <p className="mb-6 text-sm text-muted">
                  {bedrooms} bed · {bathrooms} bath · {currentFreq?.label}
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={calculatedPrice}
                    initial={{ opacity:0, y:-10 }}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:10 }}
                    transition={{ duration:0.2 }}
                    className="mb-6"
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-medium text-muted">from</span>
                      <span className="text-5xl font-bold text-ink tabular-nums">
                        {formatCurrency(animatedPrice)}
                      </span>
                      <span className="text-sm font-medium text-muted">/clean</span>
                    </div>
                    {currentFreq && currentFreq.discount > 0 && (
                      <p className="mt-2 text-sm font-semibold text-secondary">
                        {currentFreq.discount}% recurring discount applied
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>

                {selectedAddOns.length > 0 && (
                  <div className="mb-6 space-y-1.5 rounded-xl border border-border bg-surface p-4">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">
                      Selected Add-Ons
                    </div>
                    {selectedAddOns.map((id) => {
                      const addOn = bookingRates.addOns.find((a) => a.id === id);
                      if (!addOn) return null;
                      return (
                        <div key={id} className="flex justify-between text-sm">
                          <span className="text-ink">{addOn.name}</span>
                          <span className="font-semibold text-primary">
                            +{formatCurrency(addOn.price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <Button size="xl" className="w-full" asChild>
                  <a href="#contact">
                    Book This Clean
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>

                <p className="mt-4 text-center text-xs text-muted">
                  Or call us at{" "}
                  <a
                    href={`tel:${cleaningConfig.contact.phone.replace(/[^\d]/g, "")}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {cleaningConfig.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
