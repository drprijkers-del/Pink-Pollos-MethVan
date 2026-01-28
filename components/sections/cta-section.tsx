"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <Container size="narrow">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-50"
          >
            Klaar om te praten?
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto"
          >
            Geen sales calls. Geen decks. Gewoon een eerlijk gesprek over wat je
            nodig hebt en of wij de juiste fit zijn.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-10">
            <Button href="/contact" variant="solid" size="large">
              Neem contact op
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
