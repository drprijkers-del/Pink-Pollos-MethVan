import { PageHero } from "@/components/sections/page-hero";
import { ProfileSection } from "@/components/sections/profile-section";

export const metadata = {
  title: "Chris",
  description: "Senior Full-stack Developer bij Pink Pollos. Bouwt systemen die werken.",
};

const chrisData = {
  name: "Chris",
  role: "Senior Full-stack Developer",
  alias: "Mr PinkMan",
  tagline: "One Man Army",
  bio: [
    "Meer dan 10 jaar ervaring in het bouwen van schaalbare applicaties. Van startup MVP tot enterprise platform, Chris heeft het gebouwd.",
    "Specialiteit: complexe problemen reduceren tot elegante oplossingen. Geen overengineering, geen shortcuts. Code die werkt, leesbaar is, en blijft werken.",
    "Pragmatisch, direct, en allergisch voor bullshit. Als iets niet kan, hoor je het meteen. Als het wél kan, is het morgen af.",
  ],
  skills: [
    { name: "TypeScript / JavaScript", level: "expert" as const },
    { name: "React / Next.js", level: "expert" as const },
    { name: "Node.js", level: "expert" as const },
    { name: "Python", level: "senior" as const },
    { name: "PostgreSQL / MongoDB", level: "senior" as const },
    { name: "AWS / GCP / Azure", level: "senior" as const },
    { name: "Docker / Kubernetes", level: "experienced" as const },
    { name: "System Architecture", level: "expert" as const },
  ],
  experience: "10+",
  availability: "Q2 2025",
  crossLink: {
    question: "Liever met een team werken?",
    name: "Dennis",
    href: "/dennis",
  },
};

export default function ChrisPage() {
  return (
    <>
      <PageHero
        badge="Full-stack Development"
        title="Chris"
        subtitle="Bouwt systemen die werken. Geen excuses, geen drama. Gewoon code die doet wat het moet doen."
      />
      <ProfileSection {...chrisData} />
    </>
  );
}
