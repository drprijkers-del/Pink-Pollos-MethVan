export const SITE_CONFIG = {
  name: "Pink Pollos",
  description:
    "Wij doen niet aan onboarding-theater. Senior developers en agile experts die je team versterken vanaf dag één.",
  url: "https://pinkpollos.com",
  email: "info@pinkpollos.com",
} as const;

export const NAV_ITEMS = [
  { label: "De Zaak", href: "/#pillars" },
  { label: "Chris", href: "/chris" },
  { label: "Dennis", href: "/dennis" },
  { label: "Vrienden", href: "/vrienden" },
  { label: "Het Lab", href: "/lab" },
] as const;

export const PILLARS = [
  {
    id: "de-zaak",
    title: "Direct inzetbaar",
    description:
      "Chris en Dennis. Twee seniors die leveren zonder supervisie. Full-stack development. Agile transformatie. Geen agency-overhead.",
    link: { label: "Maak kennis", href: "/chris" },
  },
  {
    id: "vrienden",
    title: "De inner circle",
    description:
      "Niet iedereen mag meedoen. Onze vrienden zijn handgepickte specialisten met bewezen track record. Als wij niet beschikbaar zijn, regelen we iemand die wél levert.",
    link: { label: "Ontmoet de familia", href: "/vrienden" },
  },
  {
    id: "lab",
    title: "Waar we experimenteren",
    description:
      "Eigen tools, producten en side projects. Van POC tot productie. Soms voor klanten, soms voor onszelf.",
    link: { label: "Bekijk het lab", href: "/lab" },
  },
] as const;

export const PROOF_POINTS = [
  {
    title: "Geen juniors",
    description: "Elke consultant heeft minimaal 8 jaar ervaring. Punt.",
  },
  {
    title: "Geen verrassingen",
    description: "Vaste tarieven, heldere communicatie, nul bullshit.",
  },
  {
    title: "Geen drama",
    description: "We integreren in je team alsof we er altijd al waren.",
  },
] as const;
