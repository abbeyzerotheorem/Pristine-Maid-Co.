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
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </div>
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="gradient-mint-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faq.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-xl border border-border bg-surface px-5 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="pr-4">{item.question}</span>
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
