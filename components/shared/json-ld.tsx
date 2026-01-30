import { SITE_CONFIG } from "@/lib/constants";

type OrganizationJsonLdProps = {
  locale?: string;
};

export function OrganizationJsonLd({ locale = "nl" }: OrganizationJsonLdProps) {
  const descriptions: Record<string, string> = {
    nl: "Senior developers en agile experts die je team versterken vanaf dag één. Geen onboarding-theater, direct inzetbaar.",
    en: "Senior developers and agile experts who strengthen your team from day one. No onboarding theater, immediately deployable.",
    sv: "Senior utvecklare och agila experter som stärker ditt team från dag ett. Ingen onboarding-teater, omedelbart redo.",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/apple-icon`,
    description: descriptions[locale] || descriptions.nl,
    email: SITE_CONFIG.email,
    sameAs: [
      "https://www.linkedin.com/in/cjager272/",
      "https://www.linkedin.com/in/dennisrijkers/",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Chris Jager",
        url: "https://www.linkedin.com/in/cjager272/",
      },
      {
        "@type": "Person",
        name: "Dennis Rijkers",
        url: "https://www.linkedin.com/in/dennisrijkers/",
      },
    ],
    knowsAbout: [
      "Software Development",
      "Full-Stack Development",
      "Agile Transformation",
      "React",
      "TypeScript",
      "Node.js",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type FAQJsonLdProps = {
  faqs: Array<{ question: string; answer: string }>;
};

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

type WebPageJsonLdProps = {
  title: string;
  description: string;
  url: string;
};

export function WebPageJsonLd({ title, description, url }: WebPageJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
