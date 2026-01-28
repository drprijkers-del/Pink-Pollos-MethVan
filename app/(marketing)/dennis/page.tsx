import { PageHero } from "@/components/sections/page-hero";
import { ProfileSection } from "@/components/sections/profile-section";

export const metadata = {
  title: "Dennis",
  description: "Agile Coach en Team Manager bij Pink Pollos. Maakt teams beter.",
};

const dennisData = {
  name: "Dennis",
  role: "Agile Coach & Team Manager",
  alias: "The Catalyst",
  bio: [
    "Teams die vastlopen, processen die niet werken, organisaties die worstelen met verandering — Dennis lost het op. Niet met frameworks en certifications, maar met gezond verstand.",
    "8+ jaar ervaring in het begeleiden van development teams. Van chaotische startups tot logge enterprises. De aanpak verschilt, het resultaat niet: teams die leveren.",
    "Geen Scrum-politie, geen Agile-theater. Wel: heldere communicatie, focus op resultaat, en de moed om te zeggen wat niemand wil horen.",
  ],
  skills: [
    { name: "Agile Coaching", level: "expert" as const },
    { name: "Team Management", level: "expert" as const },
    { name: "Scrum / Kanban", level: "expert" as const },
    { name: "Stakeholder Management", level: "senior" as const },
    { name: "Change Management", level: "senior" as const },
    { name: "Conflict Resolution", level: "senior" as const },
    { name: "Technical Background", level: "experienced" as const },
    { name: "Workshop Facilitation", level: "expert" as const },
  ],
  experience: "8+",
  availability: "Direct",
};

export default function DennisPage() {
  return (
    <>
      <PageHero
        badge="Agile & Leadership"
        title="Dennis"
        subtitle="Maakt teams beter. Geen methodologie-gedram, wel resultaat. Als je team vastzit, los ik het op."
      />
      <ProfileSection {...dennisData} />
    </>
  );
}
