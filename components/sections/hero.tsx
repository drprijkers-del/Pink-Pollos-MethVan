"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/shared/grid-background";
import { GeometricChicken } from "@/components/shared/geometric-chicken";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-950">
      {/* Grid background with all decorations */}
      <GridBackground />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 md:py-0">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                Senior Expertise
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.1]"
            >
              Wij bouwen.
              <br />
              Wij begeleiden.
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                  Wij leveren.
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg md:text-xl text-stone-400 max-w-xl leading-relaxed"
            >
              Senior developers en agile experts die geen uitleg nodig hebben.
              Direct inzetbaar, zonder onboarding-theater.
            </motion.p>

            {/* Divider line */}
            <motion.div
              variants={fadeUp}
              className="mt-10 w-24 h-px bg-gradient-to-r from-pink-500/50 to-transparent"
            />

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-8"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">
                  8+
                </span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">
                  jaar ervaring
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">
                  0
                </span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">
                  bullshit
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">
                  100%
                </span>
                <span className="text-sm text-stone-500 uppercase tracking-wider">
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
              <button
                onClick={() => document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-300 border border-stone-700 rounded-full hover:border-stone-500 hover:text-white transition-colors"
              >
                Bekijk onze aanpak
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Geometric Chicken Monument */}
          <div className="hidden lg:flex items-center justify-center">
            <GeometricChicken className="w-80 h-auto xl:w-96" />
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 dark:from-stone-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-xs text-stone-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-pink-500/50 to-transparent"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
