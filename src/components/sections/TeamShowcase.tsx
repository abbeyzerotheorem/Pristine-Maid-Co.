"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, PawPrint } from "lucide-react";
import { iconMap } from "@/lib/icons";
import { cleaningConfig } from "@/data/cleaning";

export function TeamShowcase() {
  const { staffDirectory, teamBadges } = cleaningConfig;

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-white to-bg">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          className="mb-12 text-center"
        >
          <div className="eyebrow eyebrow-center mx-auto mb-4">
            Meet The People
          </div>
          <h2 className="text-h2 font-bold text-ink text-balance">
            Your <span className="gradient-mint-text">Cleaning Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Every team member is background-checked, bonded, insured, and
            personally trained to deliver our 200% Spotless standard.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {teamBadges.map((badge) => {
            const Icon = iconMap[badge.icon];
            return (
              <div
                key={badge.id}
                className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {badge.label}
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staffDirectory.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-30px" }}
              transition={{ duration:0.45, delay: index * 0.07, ease:"easeOut" }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:sparkle-glow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-tint/60 to-secondary/10">
                <Image
                  src={member.profilePhoto}
                  alt={`${member.name} — ${member.title}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {member.petFriendly && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
                    <PawPrint className="h-3 w-3 text-secondary" />
                    Pet-Friendly
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                  <div className="flex flex-shrink-0 items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-bold text-ink">
                      {member.rating}
                    </span>
                  </div>
                </div>
                <p className="mb-2 text-sm font-semibold text-primary">
                  {member.title}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                    {member.specialty}
                  </span>
                  <span className="rounded-lg bg-secondary/5 px-2.5 py-1 text-xs font-medium text-secondary">
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
