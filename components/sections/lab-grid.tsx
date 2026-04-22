"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CornerAccent, LogoLines } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";

type ProjectConfig = {
  key: string;
  status: "live" | "beta" | "experiment" | "coming-soon";
  tags: string[];
  link?: string;
  image?: string;
};

const projectsConfig: ProjectConfig[] = [
  {
    key: "methvan",
    status: "beta",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/drprijkers-del/Pink-Pollos-MethVan",
    image: "/images/lab/methvan.png",
  },
  {
    key: "aiIndex",
    status: "live",
    tags: ["AI", "OpenStreetMap", "Next.js"],
    link: "https://lighthouse-index.com",
    image: "/images/lab/ai-index.png",
  },
  {
    key: "euTaxes",
    status: "live",
    tags: ["React", "Finance", "EU"],
    link: "https://eutaxes.app",
    image: "/images/lab/eu-taxes.png",
  },
  {
    key: "movingPolygons",
    status: "live",
    tags: ["Maps", "Animation", "GIS"],
    link: "https://movingpolygons.com",
    image: "/images/lab/moving-polygons.png",
  },
  {
    key: "maelstrom",
    status: "live",
    tags: ["Portfolio", "Consulting", "Tech Leadership"],
    link: "https://maelstromit.com",
    image: "/images/lab/maelstrom.png",
  },
  {
    key: "bliply",
    status: "live",
    tags: ["AI", "SaaS", "CV Tools"],
    link: "https://bliply.eu",
    image: "/images/lab/bliply.png",
  },
  {
    key: "sprintPoker",
    status: "experiment",
    tags: ["WebSockets", "React", "Real-time"],
  },
  {
    key: "retroBoard",
    status: "coming-soon",
    tags: ["Collaboration", "Agile", "SaaS"],
  },
  {
    key: "codeReviewBot",
    status: "experiment",
    tags: ["AI", "GitHub", "Developer Tools"],
  },
  {
    key: "coreView",
    status: "live",
    tags: ["React", "Personality", "Assessment"],
    link: "https://core-view.app",
    image: "/images/lab/core-view.png",
  },
  {
    key: "isNietGrappig",
    status: "live",
    tags: ["Humor", "Fun", "Multi-domain"],
    link: "https://isnietgrappig.com",
    image: "/images/lab/isnietgrappig.png",
  },
  {
    key: "dgaVermogensplanner",
    status: "live",
    tags: ["React", "Finance", "DGA"],
    link: "https://dga-vermogensplanner.pinkpollos.com",
    image: "/images/lab/dga-vermogensplanner.png",
  },
  {
    key: "brainQuest",
    status: "live",
    tags: ["React", "Education", "Neuroscience"],
    link: "https://brain-quest.pinkpollos.com",
    image: "/images/lab/brain-quest.png",
  },
  {
    key: "auroraNow",
    status: "live",
    tags: ["React", "NOAA", "Weather", "Data Viz"],
    link: "https://aurora.pinkpollos.com",
    image: "/images/lab/aurora.png",
  },
  {
    key: "pastWeather",
    status: "live",
    tags: ["React", "Open-Meteo", "Weather"],
    link: "https://weather.pinkpollos.com",
    image: "/images/lab/weather.png",
  },
  {
    key: "tafelsLeren",
    status: "live",
    tags: ["React", "Education", "Gamification"],
    link: "https://tafels-leren.pinkpollos.com",
    image: "/images/lab/tafels-leren.png",
  },
  {
    key: "transportFootprint",
    status: "live",
    tags: ["React", "Climate", "Data Viz"],
    link: "https://transport-footprint.pinkpollos.com",
    image: "/images/lab/transport-footprint.png",
  },
  {
    key: "languageAnalyzer",
    status: "live",
    tags: ["React", "Leaflet", "Linguistics"],
    link: "https://language-analyzer.pinkpollos.com",
    image: "/images/lab/language-analyzer.png",
  },
];

const statusColors = {
  live: "bg-green-500",
  beta: "bg-blue-500",
  experiment: "bg-amber-500",
  "coming-soon": "bg-stone-400",
};

export function LabGrid() {
  const t = useTranslations("lab");

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
              {t("intro")}
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsConfig.map((project) => (
              <motion.div
                key={project.key}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 overflow-hidden transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/5">
                  <CornerAccent position="top-right" className="opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Screenshot */}
                  {project.image && (
                    <div className="relative w-full h-40 bg-stone-100 dark:bg-stone-900">
                      <Image
                        src={project.image}
                        alt={t(`projects.${project.key}.name`)}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}

                  <div className="p-6">
                  {/* Status badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${statusColors[project.status]}`} />
                    <span className="text-xs text-stone-500 uppercase tracking-wider">
                      {t(`status.${project.status === "coming-soon" ? "comingSoon" : project.status}`)}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3">
                    {t(`projects.${project.key}.name`)}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
                    {t(`projects.${project.key}.description`)}
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
                      {project.link.includes("github.com") ? t("viewOnGithub") : t("viewWebsite")}
                    </a>
                  )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              {t("collaborationIdea")}
            </p>
            <Button href="/contact" variant="ghost">
              {t("letsTalk")}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
