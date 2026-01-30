import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/sections/page-hero";
import { ProfileSection } from "@/components/sections/profile-section";

export async function generateMetadata() {
  const t = await getTranslations("profiles.dennis");
  return {
    title: "Dennis",
    description: t("pageDescription"),
  };
}

const skills = [
  { name: "Agile Coaching", level: "expert" as const },
  { name: "Team Management", level: "expert" as const },
  { name: "Scrum / Kanban", level: "expert" as const },
  { name: "Stakeholder Management", level: "senior" as const },
  { name: "Change Management", level: "senior" as const },
  { name: "Conflict Resolution", level: "senior" as const },
  { name: "Technical Background", level: "experienced" as const },
  { name: "Workshop Facilitation", level: "expert" as const },
];

export default async function DennisPage() {
  const t = await getTranslations("profiles.dennis");

  const dennisData = {
    name: "Dennis",
    role: t("role"),
    alias: t("alias"),
    tagline: t("tagline"),
    bio: [t("bio.0"), t("bio.1"), t("bio.2")],
    skills,
    experience: "15+",
    availability: "Direct",
    crossLink: {
      question: t("crossLinkQuestion"),
      name: "Chris",
      href: "/chris",
    },
  };

  return (
    <>
      <PageHero
        badge={t("badge")}
        title="Dennis"
        subtitle={t("subtitle")}
      />
      <ProfileSection {...dennisData} />
    </>
  );
}
