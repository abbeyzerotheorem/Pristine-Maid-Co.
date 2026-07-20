"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQAccordion() {
  const { faq } = cleaningConfig;

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="mb-12 text-center"
        >
          <div className="eyebrow eyebrow-center mx-auto mb-4">
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </div>
          <h2 className="text-h2 font-bold text-ink text-balance">
            Frequently Asked <span className="gradient-mint-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5, delay:0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2.5">
            {faq.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="overflow-hidden rounded-xl border border-border bg-bg px-5 data-[state=open]:shadow-card"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="flex flex-1 items-center gap-3 pr-4">
                    <span className="inline-flex flex-shrink-0 rounded-md bg-primary/5 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                      {item.category}
                    </span>
                    <span className="text-[0.95rem] font-semibold text-ink">
                      {item.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
