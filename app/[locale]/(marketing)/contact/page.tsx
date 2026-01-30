import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { ContactSection } from "@/components/sections/contact-form";

export async function generateMetadata() {
  const t = await getTranslations("contact");
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />
      <ContactSection />
    </>
  );
}
