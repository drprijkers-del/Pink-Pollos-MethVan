"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentValue = "granted" | "denied" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value: "granted" | "denied") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setConsent(value);
    setIsVisible(false);

    // Dispatch custom event for analytics providers to listen to
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: { consent: value } })
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-stone-900 dark:text-white mb-1">
                  Cookies
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Wij gebruiken cookies om je ervaring te verbeteren en anonieme
                  statistieken te verzamelen.{" "}
                  <Link
                    href="/privacy"
                    className="text-pink-600 dark:text-pink-400 hover:underline"
                  >
                    Meer info
                  </Link>
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => handleConsent("denied")}
                >
                  Weigeren
                </Button>
                <Button
                  variant="solid"
                  size="default"
                  onClick={() => handleConsent("granted")}
                >
                  Accepteren
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook to check consent status
export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    }

    const handleConsentChange = (e: CustomEvent<{ consent: ConsentValue }>) => {
      setConsent(e.detail.consent);
    };

    window.addEventListener(
      "cookie-consent",
      handleConsentChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "cookie-consent",
        handleConsentChange as EventListener
      );
    };
  }, []);

  return consent;
}
