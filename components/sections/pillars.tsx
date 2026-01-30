"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientOrb, DotPattern } from "@/components/shared/decorative";
import { fadeUp, staggerContainer } from "@/lib/animations";

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

const pillarNumbers = ["01", "02", "03"];

const pillarsConfig = [
  { id: "de-zaak", key: "deZaak", href: "/chris" },
  { id: "vrienden", key: "friends", href: "/vrienden" },
  { id: "lab", key: "lab", href: "/lab" },
];

export function Pillars() {
  const t = useTranslations("pillars");

  return (
    <section id="pillars" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden">
      {/* Background decoration */}
      <DotPattern className="text-pink-600" />
      <GradientOrb
        color="pink"
        className="w-96 h-96 -bottom-48 -left-48 opacity-50"
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header - narrative flow from hero */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
              {t("sectionBadge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
              {t("sectionTitle")}
            </h2>
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              {t("sectionSubtitle")}
            </p>
          </motion.div>

          {/* Pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillarsConfig.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 transition-all duration-300 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 overflow-hidden">
                  {/* Background number */}
                  <span className="absolute -right-4 -top-6 text-[120px] font-bold text-stone-100 dark:text-stone-800/50 select-none pointer-events-none leading-none">
                    {pillarNumbers[index]}
                  </span>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-shadow">
                      {pillarIcons[pillar.id as keyof typeof pillarIcons]}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50 mb-3">
                      {t(`${pillar.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                      {t(`${pillar.key}.description`)}
                    </p>

                    {/* Link */}
                    <Button href={pillar.href} variant="link">
                      {t(`${pillar.key}.linkLabel`)}
                      <svg
                        className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
