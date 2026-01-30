import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { LabGrid } from "@/components/sections/lab-grid";

export async function generateMetadata() {
  const t = await getTranslations("lab");
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function LabPage() {
  const t = await getTranslations("lab");

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />
      <LabGrid />
    </>
  );
}
