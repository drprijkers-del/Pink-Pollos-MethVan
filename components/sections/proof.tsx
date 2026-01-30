"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Divider, Stamp } from "@/components/shared/decorative";
import { fadeUp, staggerContainer } from "@/lib/animations";

const proofIcons = [
  // Geen juniors - shield icon
  <svg
    key="icon-1"
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>,
  // Geen verrassingen - check icon
  <svg
    key="icon-2"
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    />
  </svg>,
  // Geen drama - heart/handshake icon
  <svg
    key="icon-3"
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>,
];

const proofKeys = ["noJuniors", "noSurprises", "noDrama"];

export function Proof() {
  const t = useTranslations("proof");

  return (
    <section className="relative py-24 md:py-32 bg-stone-900 dark:bg-stone-950 overflow-hidden">
      {/* Decorative stamp */}
      <div className="absolute right-10 top-10 hidden lg:block">
        <Stamp className="w-32 h-32 opacity-20" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-950/20 via-transparent to-transparent pointer-events-none" />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              {t("sectionTitle")}
            </h2>
            <Divider className="max-w-xs mx-auto mt-8" />
          </motion.div>

          {/* Proof points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {proofKeys.map((key, index) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-800/50 border border-stone-700/50 hover:border-pink-500/30 transition-colors">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-500/30 transition-colors" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                      {proofIcons[index]}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom quote */}
          <motion.div variants={fadeUp} className="mt-16 text-center">
            <blockquote className="text-lg md:text-xl text-stone-400 italic max-w-2xl mx-auto">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
