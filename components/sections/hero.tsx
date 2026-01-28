"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-transparent dark:from-pink-950/20 dark:to-transparent pointer-events-none" />

      <Container size="default">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-6 tracking-wide uppercase"
          >
            Development &middot; Agile &middot; Consulting
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1]"
          >
            Wij bouwen.
            <br />
            Wij begeleiden.
            <br />
            <span className="text-pink-600 dark:text-pink-400">
              Wij leveren.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed"
          >
            Senior developers en agile experts die geen uitleg nodig hebben.
            Direct inzetbaar, zonder onboarding-theater.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="solid" size="large">
              Plan een kennismaking
            </Button>
            <Button href="#pillars" variant="ghost" size="large">
              Bekijk onze aanpak
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
