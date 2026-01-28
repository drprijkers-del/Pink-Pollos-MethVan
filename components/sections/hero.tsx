"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/shared/logo";
import {
  GradientOrb,
  GridPattern,
  FloatingElement,
  Badge,
} from "@/components/shared/decorative";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decorations */}
      <GridPattern className="opacity-50" />
      <GradientOrb
        color="pink"
        className="w-[600px] h-[600px] -top-40 -right-40"
      />
      <GradientOrb
        color="amber"
        className="w-[400px] h-[400px] top-1/2 -left-40"
      />

      {/* Floating chicken watermark */}
      <FloatingElement
        delay={0.5}
        className="absolute right-10 top-40 hidden lg:block"
      >
        <LogoMark className="w-72 h-72 opacity-[0.08] dark:opacity-[0.05]" />
      </FloatingElement>

      <Container size="default" className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <Badge variant="pink">Senior Expertise</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.1]"
          >
            Wij bouwen.
            <br />
            Wij begeleiden.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-pink-600 dark:text-pink-400">
                Wij leveren.
              </span>
              {/* Underline decoration */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-pink-500/30"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 9 Q50 0 100 9 T200 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
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

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-8 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                8+
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                jaar ervaring
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                0
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                bullshit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                100%
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                senior
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" variant="solid" size="large">
              Plan een kennismaking
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button href="#pillars" variant="ghost" size="large">
              Bekijk onze aanpak
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 dark:from-stone-950 to-transparent pointer-events-none" />
    </section>
  );
}
