"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/shared/logo";
import { GradientOrb } from "@/components/shared/decorative";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorations */}
      <GradientOrb
        color="pink"
        className="w-96 h-96 top-0 left-1/2 -translate-x-1/2 opacity-30"
      />

      <Container size="narrow" className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Card wrapper */}
          <div className="relative rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-10 md:p-16 text-center overflow-hidden">
            {/* Background chicken watermark */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
              <LogoMark className="w-64 h-64 translate-x-1/4 translate-y-1/4" />
            </div>

            {/* Content */}
            <motion.div variants={fadeUp} className="relative">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-pink-500/25">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
                Klaar om te praten?
              </h2>

              {/* Body */}
              <p className="mt-6 text-lg text-stone-600 dark:text-stone-400 max-w-lg mx-auto">
                Geen sales calls. Geen decks. Gewoon een eerlijk gesprek over wat
                je nodig hebt en of wij de juiste fit zijn.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="solid" size="large">
                  Neem contact op
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
                <Button
                  href="mailto:info@pinkpollos.com"
                  variant="ghost"
                  size="large"
                >
                  Of mail direct
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
