import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { ProfileSection } from "@/components/sections/profile-section";

export async function generateMetadata() {
  const t = await getTranslations("profiles.chris");
  return {
    title: "Chris",
    description: t("pageDescription"),
  };
}

const skills = [
  { name: "TypeScript / JavaScript", level: "expert" as const },
  { name: "React / Next.js", level: "expert" as const },
  { name: "Node.js", level: "expert" as const },
  { name: "Python", level: "senior" as const },
  { name: "PostgreSQL / MongoDB", level: "senior" as const },
  { name: "AWS / GCP / Azure", level: "senior" as const },
  { name: "Docker / Kubernetes", level: "experienced" as const },
  { name: "System Architecture", level: "expert" as const },
];

export default async function ChrisPage() {
  const t = await getTranslations("profiles.chris");

  const chrisData = {
    name: "Chris",
    role: t("role"),
    alias: t("alias"),
    tagline: t("tagline"),
    bio: [t("bio.0"), t("bio.1"), t("bio.2")],
    skills,
    experience: "15+",
    crossLink: {
      question: t("crossLinkQuestion"),
      name: "Dennis",
      href: "/dennis",
    },
  };

  return (
    <>
      <PageHero
        badge={t("badge")}
        title="Chris"
        subtitle={t("subtitle")}
      />
      <ProfileSection {...chrisData} />
    </>
  );
}
