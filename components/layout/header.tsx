"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { LanguageSwitcher } from "./language-switcher";

const navKeys = [
  { key: "deZaak", href: "/#pillars" },
  { key: "chris", href: "/chris" },
  { key: "dennis", href: "/dennis" },
  { key: "friends", href: "/vrienden" },
  { key: "lab", href: "/lab" },
] as const;

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo size="sm" showText={true} className="text-white" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden min-[840px]:flex items-center gap-6">
            {navKeys.map((item) => {
              const isActive = pathname.endsWith(item.href) ||
                (item.href === "/#pillars" && pathname.endsWith("/"));
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-white font-medium"
                      : "text-stone-400 hover:text-white"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <LanguageSwitcher />
            <Button href="/contact" variant="solid" size="default">
              {t("contact")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[840px]:hidden p-2 text-stone-400"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="min-[840px]:hidden border-t border-stone-800 bg-stone-950/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-4">
                {navKeys.map((item) => {
                  const isActive = pathname.endsWith(item.href);
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block ${
                        isActive
                          ? "text-white font-medium"
                          : "text-stone-400 hover:text-white"
                      }`}
                    >
                      {t(item.key)}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  <LanguageSwitcher />
                </div>
                <Button
                  href="/contact"
                  variant="solid"
                  className="w-full mt-4"
                >
                  {t("contact")}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
