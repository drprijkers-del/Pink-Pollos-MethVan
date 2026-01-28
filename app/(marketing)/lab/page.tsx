import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Het Lab",
  description: "Eigen tools, producten en experimenten van Pink Pollos.",
};

export default function LabPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container size="narrow">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Het Lab
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400">
          Waar we experimenteren. Eigen tools, producten en side projects.
        </p>
      </Container>
    </section>
  );
}
