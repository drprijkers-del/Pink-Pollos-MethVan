"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CornerAccent, LogoHex } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-50 dark:bg-stone-900">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left: Info */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white mb-6">
              Direct contact
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
              Geen contactformulier dat in een zwart gat verdwijnt. Stuur een
              mail en je hoort binnen 24 uur van ons. Liever bellen? Laat je
              nummer achter.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-lg text-pink-600 dark:text-pink-400 font-medium hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div>
                <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">
                  Response tijd
                </p>
                <p className="text-stone-900 dark:text-white font-medium">
                  Binnen 24 uur
                </p>
              </div>

              <div>
                <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">
                  Liever LinkedIn?
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 dark:text-stone-400 hover:text-pink-600 dark:hover:text-pink-400"
                  >
                    Chris →
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 dark:text-stone-400 hover:text-pink-600 dark:hover:text-pink-400"
                  >
                    Dennis →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick form */}
          <motion.div variants={fadeUp}>
            <div className="relative rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-8 overflow-hidden">
              <CornerAccent position="top-right" />

              {/* Background decoration */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 text-pink-500 opacity-5">
                <LogoHex className="w-full h-full" />
              </div>

              <form className="relative space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Je naam"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="je@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Waar kunnen we je mee helpen?"
                  />
                </div>

                <Button variant="solid" className="w-full">
                  Verstuur bericht
                </Button>

                <p className="text-xs text-stone-500 text-center">
                  Of mail direct naar{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-pink-600 dark:text-pink-400 hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
