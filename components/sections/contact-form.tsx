"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CornerAccent, LogoHex } from "@/components/shared/logo-fragments";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("error"));
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t("error")
      );
    }
  };

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
              {t("formTitle")}
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
              {t("formDescription")}
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">
                  {t("labels.email")}
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
                  Response
                </p>
                <p className="text-stone-900 dark:text-white font-medium">
                  {t("responseTime")}
                </p>
              </div>

              <div>
                <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">
                  {t("linkedInQuestion")}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/cjager272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 dark:text-stone-400 hover:text-pink-600 dark:hover:text-pink-400"
                  >
                    Chris →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dennisrijkers/"
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

              {status === "success" ? (
                <div className="relative text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-2">
                    {t("success.title")}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 mb-6">
                    {t("success.description")}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                    className="mx-auto"
                  >
                    {t("success.newMessage")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                    >
                      {t("labels.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors disabled:opacity-50"
                      placeholder={t("placeholders.name")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                    >
                      {t("labels.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors disabled:opacity-50"
                      placeholder={t("placeholders.email")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                    >
                      {t("labels.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none disabled:opacity-50"
                      placeholder={t("placeholders.message")}
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="solid"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? t("submitting") : t("submit")}
                  </Button>

                  <p className="text-xs text-stone-500 text-center">
                    {t("orMailDirectly")}{" "}
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-pink-600 dark:text-pink-400 hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
