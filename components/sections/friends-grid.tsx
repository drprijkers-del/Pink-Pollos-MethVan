"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { CornerAccent, LogoHex } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";

const friendKeys = [
  { key: "cleaner", available: true },
  { key: "operator", available: true },
  { key: "chemist", available: false },
  { key: "fixer", available: true },
  { key: "artist", available: false },
  { key: "professor", available: true },
] as const;

export function FriendsGrid() {
  const t = useTranslations("friends");

  return (
    <section className="py-16 md:py-24 bg-stone-50 dark:bg-stone-900">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Intro */}
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              {t("intro")}
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friendKeys.map((friend) => (
              <motion.div
                key={friend.key}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-6 overflow-hidden transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5">
                  {/* Corner accent */}
                  <CornerAccent position="top-right" className="opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Hex decoration */}
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 text-pink-500 opacity-5 group-hover:opacity-10 transition-opacity">
                    <LogoHex className="w-full h-full" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Availability badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          friend.available ? "bg-green-500" : "bg-stone-400"
                        }`}
                      />
                      <span className="text-xs text-stone-500 uppercase tracking-wider">
                        {friend.available ? t("available") : t("busy")}
                      </span>
                    </div>

                    {/* Alias */}
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-1">
                      {t(`list.${friend.key}.alias`)}
                    </h3>

                    {/* Specialty */}
                    <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-4">
                      {t(`list.${friend.key}.specialty`)}
                    </p>

                    {/* Description */}
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      {t(`list.${friend.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              {t("needSomeoneElse")}
            </p>
            <Link
              href="/contact"
              className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
            >
              {t("tellUs")}
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
