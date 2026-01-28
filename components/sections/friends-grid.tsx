"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { CornerAccent, LogoHex } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";

type Friend = {
  alias: string;
  specialty: string;
  description: string;
  available: boolean;
};

const friends: Friend[] = [
  {
    alias: "The Cleaner",
    specialty: "Legacy Code & Refactoring",
    description: "Maakt van spaghetti-code werkbare systemen. Geen oordeel, alleen oplossingen.",
    available: true,
  },
  {
    alias: "The Operator",
    specialty: "DevOps & Infrastructure",
    description: "Pipelines, containers, cloud. Alles wat moet draaien, draait.",
    available: true,
  },
  {
    alias: "The Chemist",
    specialty: "Data Engineering",
    description: "Transformeert ruwe data naar bruikbare inzichten. ETL is zijn tweede taal.",
    available: false,
  },
  {
    alias: "The Fixer",
    specialty: "Security & Compliance",
    description: "Vindt de gaten voordat anderen dat doen. Pentests, audits, GDPR.",
    available: true,
  },
  {
    alias: "The Artist",
    specialty: "UI/UX Design",
    description: "Interfaces die niet alleen werken, maar ook voelen. Design systems specialist.",
    available: false,
  },
  {
    alias: "The Professor",
    specialty: "Technical Leadership",
    description: "Mentort teams, ontwerpt architectuur, maakt technische roadmaps.",
    available: true,
  },
];

export function FriendsGrid() {
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
              Niet iedereen mag meedoen. Onze vrienden zijn handgepickte specialisten
              die we persoonlijk kennen en vertrouwen. Geen open netwerk, geen
              LinkedIn-connecties. Alleen mensen die leveren.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend) => (
              <motion.div
                key={friend.alias}
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
                        {friend.available ? "Beschikbaar" : "Bezet"}
                      </span>
                    </div>

                    {/* Alias */}
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-1">
                      {friend.alias}
                    </h3>

                    {/* Specialty */}
                    <p className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-4">
                      {friend.specialty}
                    </p>

                    {/* Description */}
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      {friend.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Iemand nodig die hier niet staat?
            </p>
            <a
              href="/contact"
              className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
            >
              Vertel ons wat je zoekt →
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
