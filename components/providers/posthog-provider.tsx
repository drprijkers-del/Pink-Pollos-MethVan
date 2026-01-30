"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import { useCookieConsent } from "@/components/shared/cookie-banner";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const consent = useCookieConsent();

  useEffect(() => {
    // Only initialize PostHog if we have consent
    if (consent === "granted" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
        person_profiles: "identified_only",
        capture_pageview: true,
        capture_pageleave: true,
        persistence: "localStorage+cookie",
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") {
            posthog.debug();
          }
        },
      });
    }

    // If consent is denied and PostHog is initialized, opt out
    if (consent === "denied" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.opt_out_capturing();
    }
  }, [consent]);

  // Don't wrap with provider if no API key
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
