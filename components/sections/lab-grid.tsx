"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CornerAccent, LogoLines } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";

type Project = {
  name: string;
  status: "live" | "beta" | "experiment" | "coming-soon";
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "MethVan",
    status: "beta",
    description: "De website die je nu bekijkt. Ons eigen platform gebouwd met Next.js, Tailwind en veel liefde.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/drprijkers-del/Pink-Pollos-MethVan",
  },
  {
    name: "Sprint Poker",
    status: "experiment",
    description: "Real-time planning poker voor remote teams. Geen account nodig, gewoon een link delen.",
    tags: ["WebSockets", "React", "Real-time"],
  },
  {
    name: "Retro Board",
    status: "coming-soon",
    description: "Async retrospectives die wél werken. Anoniem, gestructureerd, actionable.",
    tags: ["Collaboration", "Agile", "SaaS"],
  },
  {
    name: "Code Review Bot",
    status: "experiment",
    description: "AI-powered code reviews die echt nuttig zijn. Geen vage suggesties, wel concrete verbeteringen.",
    tags: ["AI", "GitHub", "Developer Tools"],
  },
];

const statusConfig = {
  live: { label: "Live", color: "bg-green-500" },
  beta: { label: "Beta", color: "bg-blue-500" },
  experiment: { label: "Experiment", color: "bg-amber-500" },
  "coming-soon": { label: "Coming Soon", color: "bg-stone-400" },
};

export function LabGrid() {
  return (
    <section className="py-16 md:py-24 bg-stone-50 dark:bg-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-48 text-pink-500 opacity-10">
        <LogoLines className="w-full h-full" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Intro */}
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Naast klantwerk bouwen we onze eigen tools en producten. Sommige
              zijn serieus, andere zijn experimenten. Allemaal zijn ze gebouwd
              met dezelfde standaard: geen half werk.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-6 overflow-hidden transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5">
                  <CornerAccent position="top-right" className="opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Status badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${statusConfig[project.status].color}`} />
                    <span className="text-xs text-stone-500 uppercase tracking-wider">
                      {statusConfig[project.status].label}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-pink-600 dark:text-pink-400 font-medium hover:underline"
                    >
                      Bekijk op GitHub →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Idee voor een samenwerking?
            </p>
            <Button href="/contact" variant="ghost">
              Laten we praten
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
