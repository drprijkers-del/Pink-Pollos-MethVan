"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CornerAccent } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";

type Skill = {
  name: string;
  level: "expert" | "senior" | "experienced";
};

type ProfileSectionProps = {
  name: string;
  role: string;
  alias?: string;
  tagline?: string;
  bio: string[];
  skills: Skill[];
  experience: string;
  availability?: string;
  crossLink?: {
    question: string;
    name: string;
    href: string;
  };
};

const levelColors = {
  expert: "bg-pink-500",
  senior: "bg-pink-400",
  experienced: "bg-pink-300",
};

export function ProfileSection({
  name,
  role,
  alias,
  tagline,
  bio,
  skills,
  experience,
  availability,
  crossLink,
}: ProfileSectionProps) {
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
          {/* Left: Bio */}
          <motion.div variants={fadeUp}>
            {alias && (
              <p className="text-pink-500 text-sm font-medium uppercase tracking-wider mb-2">
                a.k.a. "{alias}"
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white mb-2">
              {name}
            </h2>

            {/* Tagline - stylized quote */}
            {tagline && (
              <p className="text-xl md:text-2xl font-light italic text-stone-400 dark:text-stone-500 mb-6">
                "{tagline}"
              </p>
            )}

            <p className="text-lg text-pink-600 dark:text-pink-400 font-medium mb-6">
              {role}
            </p>
            <div className="space-y-4">
              {bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-stone-600 dark:text-stone-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 flex gap-8">
              <div>
                <span className="text-3xl font-bold text-stone-900 dark:text-white">
                  {experience}
                </span>
                <p className="text-sm text-stone-500 uppercase tracking-wider">
                  jaar ervaring
                </p>
              </div>
              {availability && (
                <div>
                  <span className="text-3xl font-bold text-pink-600 dark:text-pink-400">
                    {availability}
                  </span>
                  <p className="text-sm text-stone-500 uppercase tracking-wider">
                    beschikbaar
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="solid">
                Neem contact op
              </Button>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div variants={fadeUp}>
            <div className="relative rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-8 overflow-hidden">
              <CornerAccent position="top-right" />

              <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-6">
                Skills & Expertise
              </h3>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-stone-700 dark:text-stone-300">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-stone-500 uppercase">
                        {skill.level}
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((dot) => (
                          <div
                            key={dot}
                            className={`w-2 h-2 rounded-full ${
                              (skill.level === "expert" && dot <= 3) ||
                              (skill.level === "senior" && dot <= 2) ||
                              (skill.level === "experienced" && dot <= 1)
                                ? levelColors[skill.level]
                                : "bg-stone-200 dark:bg-stone-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cross-link to other profile */}
        {crossLink && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-stone-200 dark:border-stone-800"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-stone-500 dark:text-stone-400">
                {crossLink.question}
              </p>
              <a
                href={crossLink.href}
                className="group inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-medium hover:text-pink-500 transition-colors"
              >
                <span>Ontmoet {crossLink.name}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
