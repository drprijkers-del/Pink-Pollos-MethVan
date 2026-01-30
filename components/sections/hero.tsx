"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/shared/grid-background";

export function Hero() {
  const t = useTranslations("hero");
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  const logoReveal = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.6,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-950">
      <GridBackground />

      {/* Mobile logo watermark - subtle branding */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 lg:hidden pointer-events-none opacity-[0.04]">
        <Image
          src="/logo-mark.svg"
          alt=""
          width={400}
          height={400}
          className="w-80 h-80"
          aria-hidden="true"
        />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-0">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} transition={transition} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-sm font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                {t("badge")}
              </span>
            </motion.div>

            {/* Headline - Option C: Professional maar krachtig */}
            <motion.h1
              variants={fadeUp}
              transition={transition}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white/95 leading-[1.1]"
            >
              {t("headline1")}
              <br />
              {t("headline2")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500">
                {t("headline3")}
              </span>
            </motion.h1>

            {/* Subheadline - benefit-focused, professioneel */}
            <motion.p
              variants={fadeUp}
              transition={transition}
              className="mt-8 text-lg text-stone-300/90 leading-relaxed max-w-lg"
            >
<<<<<<< HEAD
              {t("subheadline")}
=======
              Senior developers en agile experts die direct waarde leveren aan je team.
              Geen inwerktrajecten, geen ruis. Gewoon resultaat vanaf dag één.
>>>>>>> cb4da586888a7425d43f1c0eaef2ab2b5f69f4c2
            </motion.p>

            {/* Trust indicators - cleaner, minder "edgy" */}
            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              {[t("trustPoints.seniors"), t("trustPoints.available"), t("trustPoints.proven")].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-stone-400">
                  <svg className="w-4 h-4 text-pink-500/80" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs - duidelijke hiërarchie */}
            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {/* Primary CTA - dominant */}
              <Button
                href="/contact"
                variant="solid"
                size="large"
                className="group relative shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-shadow"
              >
                <span>{t("cta.primary")}</span>
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>

              {/* Secondary CTA - subtiel */}
              <button
                onClick={() => document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center text-sm text-stone-500 hover:text-stone-300 transition-colors"
              >
                <span>{t("cta.secondary")}</span>
                <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Logo als visueel anker */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={logoReveal}
            initial="hidden"
            animate="visible"
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative">
              {/* Subtle glow - niet te veel */}
              <div className="absolute inset-0 blur-3xl bg-pink-500/15 scale-110 rounded-full" />

              {/* Logo met subtiele float */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/logo-mark.svg"
                  alt="Pink Pollos"
                  width={400}
                  height={400}
                  className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />

      {/* Scroll indicator - minimal */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-stone-700/50 flex items-start justify-center p-1.5"
          animate={shouldReduceMotion ? {} : { borderColor: ["rgb(68 64 60 / 0.5)", "rgb(236 72 153 / 0.3)", "rgb(68 64 60 / 0.5)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 bg-stone-500 rounded-full"
            animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
