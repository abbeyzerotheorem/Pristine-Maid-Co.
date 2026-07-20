"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Star } from "lucide-react";
import { iconMap } from "@/lib/icons";
import { cleaningConfig } from "@/data/cleaning";
import { formatCurrency } from "@/lib/utils";

export function ServicesGrid() {
  const { services } = cleaningConfig;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="mb-12 text-center"
        >
          <div className="eyebrow eyebrow-center mx-auto mb-4">
            What We Offer
          </div>
          <h2 className="text-h2 font-bold text-ink text-balance">
            Our Core <span className="gradient-mint-text">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From routine maintenance to intensive deep cleans, we have a
            specialized service for every need and every space.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-50px" }}
                transition={{ duration:0.45, delay: index * 0.08, ease:"easeOut" }}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  service.popular
                    ? "border-primary/30 bg-gradient-to-br from-brand-tint/50 to-surface shadow-glow"
                    : "border-border bg-surface hover:border-primary/40 hover:shadow-card-hover"
                }`}
              >
                {service.popular && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${
                        service.popular
                          ? "bg-primary/10 text-primary"
                          : "bg-primary/5 text-primary"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ink">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-sm text-muted">Starting at</span>
                    <span className="text-2xl font-bold text-ink">
                      {formatCurrency(service.startingPrice)}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {service.checklist.slice(0, 5).map((task) => (
                      <div key={task.task} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span className="text-sm text-ink">{task.task}</span>
                      </div>
                    ))}

                    <AnimatePresence initial={false}>
                      {isExpanded &&
                        service.checklist.slice(5).map((task) => (
                          <motion.div
                            key={task.task}
                            initial={{ opacity:0, height:0 }}
                            animate={{ opacity:1, height:"auto" }}
                            exit={{ opacity:0, height:0 }}
                            transition={{ duration:0.3, ease:"easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex items-start gap-2.5 pt-2.5">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                              <span className="text-sm text-ink">{task.task}</span>
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>

                  {service.checklist.length > 5 && (
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : service.id)
                      }
                      className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark cursor-pointer tap-target"
                    >
                      {isExpanded
                        ? "Show less"
                        : `+${service.checklist.length - 5} more tasks`}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
