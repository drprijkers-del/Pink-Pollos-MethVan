"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { LogoCorner, AccentLine } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
};

export function PageHero({ title, subtitle, badge, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-stone-950">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950 to-stone-900" />

      {/* Logo watermark - subtle branding */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.04]">
        <Image
          src="/logo-mark.svg"
          alt=""
          width={600}
          height={600}
          className="w-125 h-125 lg:w-150 lg:h-150"
          aria-hidden="true"
        />
      </div>

      {/* Corner accents */}
      <LogoCorner position="top-left" className="absolute top-8 left-8 w-24 h-24 text-pink-500" />
      <LogoCorner position="bottom-right" className="absolute bottom-8 right-8 w-24 h-24 text-pink-500" />

      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          {badge && (
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-sm font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-stone-400 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional children (for extra content like CTAs) */}
          {children && (
            <motion.div variants={fadeUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>

        {/* Accent line */}
        <AccentLine className="mt-12 max-w-md" />
      </Container>
    </section>
  );
}
