import { PageHero } from "@/components/sections/page-hero";
import { FriendsGrid } from "@/components/sections/friends-grid";

export const metadata = {
  title: "Vrienden van Pink Pollos",
  description: "Onze inner circle van vertrouwde specialisten. Handgepickt, bewezen, betrouwbaar.",
};

export default function VriendenPage() {
  return (
    <>
      <PageHero
        badge="La Familia"
        title="Vrienden van Pink Pollos"
        subtitle="Als wij niet beschikbaar zijn, regelen we iemand die wél levert. Geen random freelancers, alleen mensen die we kennen en vertrouwen."
      />
      <FriendsGrid />
    </>
  );
}
