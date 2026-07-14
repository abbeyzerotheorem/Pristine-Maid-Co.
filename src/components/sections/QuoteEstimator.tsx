"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bed,
  Bath,
  Calculator,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cleaningConfig } from "@/data/cleaning";
import { formatCurrency } from "@/lib/utils";
import type { CleanFrequency, AddOn } from "@/types";

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
      const diff = Math.abs(r.bedrooms - bedrooms) + Math.abs(r.bathrooms - bathrooms);
      const closestDiff = Math.abs(closest.bedrooms - bedrooms) + Math.abs(closest.bathrooms - bathrooms);
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

  const currentFreq = bookingRates.frequencies.find((f) => f.id === frequency);

  return (
    <section
      id="quote-estimator"
      className="section-padding bg-gradient-to-br from-bg via-white to-primary/3"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Calculator className="h-4 w-4" />
            Instant Quote Estimator
          </div>
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Your Price in <span className="gradient-mint-text">30 Seconds</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Select your home details below for an instant baseline estimate. Final pricing confirmed after a quick walkthrough.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xl"
        >
          <div className="grid lg:grid-cols-3">
            <div className="space-y-0 divide-y divide-border p-6 lg:col-span-2 lg:p-8">
              {/* Bedrooms */}
              <div className="pb-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-text">
                  <Bed className="h-4 w-4 text-primary" />
                  Number of Bedrooms
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setBedrooms(n)}
                      className={`flex h-12 min-w-[48px] items-center justify-center rounded-xl border-2 px-5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        bedrooms === n
                          ? "border-primary bg-primary/5 text-primary shadow-sm sparkle-glow"
                          : "border-border bg-surface text-muted hover:border-muted-light hover:text-text"
                      }`}
                    >
                      {n === 5 ? "5+" : n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div className="py-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-text">
                  <Bath className="h-4 w-4 text-primary" />
                  Number of Bathrooms
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <button
                      key={n}
                      onClick={() => setBathrooms(n)}
                      className={`flex h-12 min-w-[48px] items-center justify-center rounded-xl border-2 px-5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        bathrooms === n
                          ? "border-primary bg-primary/5 text-primary shadow-sm sparkle-glow"
                          : "border-border bg-surface text-muted hover:border-muted-light hover:text-text"
                      }`}
                    >
                      {n === 4 ? "4+" : n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div className="py-6">
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-text">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Cleaning Frequency
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {bookingRates.frequencies.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFrequency(f.id)}
                      className={`flex flex-col items-center rounded-xl border-2 px-3 py-3 text-center transition-all duration-200 cursor-pointer ${
                        frequency === f.id
                          ? "border-primary bg-primary/5 shadow-sm sparkle-glow"
                          : "border-border bg-surface hover:border-muted-light"
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          frequency === f.id ? "text-primary" : "text-text"
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
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-text">
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
                        className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-sm sparkle-glow"
                            : "border-border bg-surface hover:border-muted-light"
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
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-text">
                              {addOn.name}
                            </span>
                            <span className="text-sm font-bold text-primary">
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
            <div className="border-t bg-gradient-to-b from-primary/3 to-bg p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div className="sticky top-24">
                <h3 className="mb-2 text-lg font-bold text-text">
                  Your Estimate
                </h3>
                <p className="mb-6 text-sm text-muted">
                  {bedrooms} bed · {bathrooms} bath · {currentFreq?.label}
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={calculatedPrice}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="mb-6"
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-medium text-muted">from</span>
                      <span className="text-5xl font-bold text-text">
                        {formatCurrency(calculatedPrice)}
                      </span>
                      <span className="text-sm font-medium text-muted">/clean</span>
                    </div>
                    {currentFreq && currentFreq.discount > 0 && (
                      <p className="mt-2 text-sm font-medium text-secondary">
                        {currentFreq.discount}% recurring discount applied
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>

                {selectedAddOns.length > 0 && (
                  <div className="mb-6 space-y-1.5 rounded-xl border border-border bg-surface p-4">
                    <div className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Selected Add-Ons
                    </div>
                    {selectedAddOns.map((id) => {
                      const addOn = bookingRates.addOns.find((a) => a.id === id);
                      if (!addOn) return null;
                      return (
                        <div key={id} className="flex justify-between text-sm">
                          <span className="text-text">{addOn.name}</span>
                          <span className="font-medium text-primary">
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
