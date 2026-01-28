"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { PILLARS } from "@/lib/constants";

const pillarIcons = {
  "de-zaak": (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  vrienden: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  lab: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
};

export function Pillars() {
  return (
    <section id="pillars" className="py-24 md:py-32 scroll-mt-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
              Drie pijlers, één filosofie
            </h2>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              We werken alleen met de beste ingrediënten.
            </p>
          </motion.div>

          {/* Pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                className="group relative rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-pink-50 dark:bg-pink-950/50 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/50 transition-colors">
                  {pillarIcons[pillar.id as keyof typeof pillarIcons]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Link */}
                <Button href={pillar.link.href} variant="link">
                  {pillar.link.label} &rarr;
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
