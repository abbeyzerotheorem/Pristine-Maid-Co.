"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  Leaf,
  Building2,
  ChevronDown,
  Check,
  Star,
} from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";
import { formatCurrency } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Leaf: <Leaf className="h-6 w-6" />,
  Building2: <Building2 className="h-6 w-6" />,
};

export function ServicesGrid() {
  const { services } = cleaningConfig;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Our Core <span className="gradient-mint-text">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            From routine maintenance to intensive deep cleans, we have a
            specialized service for every need and every space.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const visibleTasks = isExpanded
              ? service.checklist
              : service.checklist.slice(0, 5);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  service.popular
                    ? "border-primary/30 bg-gradient-to-br from-primary/3 to-surface shadow-glow"
                    : "border-border bg-surface hover:border-muted-light hover:shadow-card-hover"
                }`}
              >
                {service.popular && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
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
                      {iconMap[service.icon] || (
                        <Sparkles className="h-6 w-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-sm text-muted">Starting at</span>
                    <span className="text-2xl font-bold text-text">
                      {formatCurrency(service.startingPrice)}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <AnimatePresence>
                      {visibleTasks.map((task, i) => (
                        <motion.div
                          key={task.task}
                          initial={!isExpanded && i >= 5 ? { opacity: 0, height: 0 } : false}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-start gap-2.5"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                          <span className="text-sm text-text">
                            {task.task}
                          </span>
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
