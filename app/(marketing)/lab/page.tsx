import { PageHero } from "@/components/sections/page-hero";
import { LabGrid } from "@/components/sections/lab-grid";

export const metadata = {
  title: "Het Lab",
  description: "Eigen tools, producten en experimenten van Pink Pollos. Van POC tot productie.",
};

export default function LabPage() {
  return (
    <>
      <PageHero
        badge="R&D"
        title="Het Lab"
        subtitle="Waar we experimenteren. Eigen tools, producten en side projects. Soms voor klanten, soms voor onszelf. Altijd met dezelfde standaard."
      />
      <LabGrid />
    </>
  );
}
