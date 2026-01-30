"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { CornerAccent } from "@/components/shared/logo-fragments";
import { FAQJsonLd } from "@/components/shared/json-ld";

const FAQ_KEYS = [
  "whatDoYouDo",
  "howFast",
  "rates",
  "remote",
  "team",
  "guarantee",
] as const;

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stone-200 dark:border-stone-800 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-stone-900 dark:text-white pr-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-stone-600 dark:text-stone-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = FAQ_KEYS.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-950">
      <Container>
        <FAQJsonLd faqs={faqs} />

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white">
              {t("title")}
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="relative rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-6 md:p-8 overflow-hidden">
            <CornerAccent position="top-right" />

            {FAQ_KEYS.map((key, index) => (
              <FAQItem
                key={key}
                question={t(`items.${key}.question`)}
                answer={t(`items.${key}.answer`)}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          {/* CTA */}
          <p className="text-center mt-8 text-stone-600 dark:text-stone-400">
            {t("moreQuestions")}{" "}
            <a
              href="/contact"
              className="text-pink-600 dark:text-pink-400 hover:underline font-medium"
            >
              {t("contactUs")}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
