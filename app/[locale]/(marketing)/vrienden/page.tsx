import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { FriendsGrid } from "@/components/sections/friends-grid";

export async function generateMetadata() {
  const t = await getTranslations("friends");
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
  };
}

export default async function VriendenPage() {
  const t = await getTranslations("friends");

  return (
    <>
      <PageHero
        badge={t("badge")}
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
      />
      <FriendsGrid />
    </>
  );
}
