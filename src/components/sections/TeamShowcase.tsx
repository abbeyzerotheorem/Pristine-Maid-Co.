"use client";

import { motion } from "framer-motion";
import { Star, PawPrint, Shield, Award, Clock } from "lucide-react";
import { cleaningConfig } from "@/data/cleaning";

export function TeamShowcase() {
  const { staffDirectory } = cleaningConfig;

  return (
    <section className="section-padding bg-gradient-to-b from-white to-bg">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            Meet Your <span className="gradient-mint-text">Cleaning Team</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Every team member is background-checked, bonded, insured, and
            personally trained to deliver our 200% Spotless standard.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: Shield, label: "Background-Checked" },
            { icon: PawPrint, label: "Pet-Safe Products" },
            { icon: Award, label: "200% Spotless Guarantee" },
            { icon: Clock, label: "Punctual & Reliable" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text shadow-sm"
            >
              <Icon className="h-4 w-4 text-primary" />
              {label}
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staffDirectory.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:shadow-card-hover hover:sparkle-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={member.profilePhoto}
                  alt={`${member.name} — ${member.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                {member.petFriendly && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    <PawPrint className="h-3 w-3 text-secondary" />
                    Pet-Friendly
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text">{member.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-bold text-text">
                      {member.rating}
                    </span>
                  </div>
                </div>
                <p className="mb-2 text-sm font-medium text-primary">
                  {member.title}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                    {member.specialty}
                  </span>
                  <span className="rounded-lg bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent">
                    {member.yearsExperience}+ Years
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
                <p className="mt-2 text-xs text-muted-light">
                  {member.reviews} verified reviews
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
