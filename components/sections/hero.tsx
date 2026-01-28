"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/shared/grid-background";
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
            {/* Badge - more specific */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                100% Senior · Direct Inzetbaar
              </span>
            </motion.div>

            {/* Headline - benefit focused */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.1]"
            >
              Wij doen niet aan{" "}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                  onboarding-theater.
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

            {/* Subheadline - expanded value prop */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg md:text-xl text-stone-300 max-w-xl leading-relaxed"
            >
              Senior developers en agile experts die je team versterken vanaf dag één.
              De mensen die je krijgt, zijn de mensen die leveren.
            </motion.p>

            {/* Trust indicators - improved contrast */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-stone-400"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Geen juniors</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Geen overhead</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Geen excuses</span>
              </div>
            </motion.div>

            {/* CTAs - clear hierarchy */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" variant="solid" size="large" className="group shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-shadow">
                Plan een kennismaking
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
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
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-stone-400 hover:text-white transition-colors"
              >
                <span>Bekijk onze aanpak</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>

            {/* Social proof hint */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-sm text-stone-500"
            >
              Trusted by tech teams at startups & scale-ups across NL
            </motion.p>
          </motion.div>

          {/* Right: Logo Mark with enhanced glow */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Multi-layer glow effect */}
              <div className="absolute inset-0 blur-3xl bg-pink-500/30 scale-125" />
              <div className="absolute inset-0 blur-xl bg-pink-600/20 scale-110" />

              {/* Decorative ring */}
              <div className="absolute inset-0 scale-150">
                <motion.div
                  className="w-full h-full rounded-full border border-pink-500/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <Image
                src="/logo-mark.svg"
                alt="Pink Pollos"
                width={400}
                height={400}
                className="relative w-72 h-72 xl:w-96 xl:h-96"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 dark:from-stone-900 to-transparent pointer-events-none" />

      {/* Scroll indicator - refined */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-stone-700 flex items-start justify-center p-2"
          whileHover={{ borderColor: "rgb(236 72 153 / 0.5)" }}
        >
          <motion.div
            className="w-1 h-2 bg-pink-500 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
