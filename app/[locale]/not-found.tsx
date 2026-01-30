"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LogoHex } from "@/components/shared/logo-fragments";

export default function NotFound() {
  const t = useTranslations("notFound");
  const tNav = useTranslations("nav");

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-24">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            {/* Decorative 404 with logo */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoHex className="w-32 h-32 text-pink-500/10" />
              </div>
              <h1 className="relative text-8xl md:text-9xl font-bold text-stone-200 dark:text-stone-800">
                {t("title")}
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white mb-4">
              {t("heading")}
            </h2>

            <p className="text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="solid">
                {t("backHome")}
              </Button>
              <Button href="/contact" variant="outline">
                {t("contactUs")}
              </Button>
            </div>

            {/* Quick links */}
            <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800">
              <p className="text-sm text-stone-500 mb-4">{t("orView")}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  href="/chris"
                  className="text-pink-600 dark:text-pink-400 hover:underline"
                >
                  {tNav("chris")}
                </Link>
                <Link
                  href="/dennis"
                  className="text-pink-600 dark:text-pink-400 hover:underline"
                >
                  {tNav("dennis")}
                </Link>
                <Link
                  href="/vrienden"
                  className="text-pink-600 dark:text-pink-400 hover:underline"
                >
                  {tNav("friends")}
                </Link>
                <Link
                  href="/lab"
                  className="text-pink-600 dark:text-pink-400 hover:underline"
                >
                  {tNav("lab")}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
