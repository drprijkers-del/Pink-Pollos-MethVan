"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-800/50">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          >
            Pink Pollos
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="ghost" size="default">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 dark:text-stone-400"
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
              className="md:hidden border-t border-stone-200 dark:border-stone-800"
            >
              <div className="py-4 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  href="/contact"
                  variant="solid"
                  className="w-full mt-4"
                >
                  Contact
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
