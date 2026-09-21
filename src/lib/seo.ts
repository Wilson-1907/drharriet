import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { researchProfiles } from "@/data/profiles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? profile.site.url;

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    honorificPrefix: "Dr.",
    givenName: profile.givenNames,
    additionalName: profile.middleName,
    familyName: profile.familyName,
    jobTitle: [
      "Director, Open, Distance and E-Learning (ODeL)",
      "Lecturer in Computing",
      "Director, Open, Distance and E-Learning (ODeL) — Part-time, Murang'a University of Technology",
    ],
    worksFor: {
      "@type": "EducationalOrganization",
      name: profile.institution.name,
      department: profile.institution.department,
    },
    affiliation: [
      {
        "@type": "EducationalOrganization",
        name: profile.institution.name,
      },
      {
        "@type": "EducationalOrganization",
        name: "Murang'a University of Technology",
      },
    ],
    email: profile.contact.primaryEmail,
    url: siteUrl,
    sameAs: researchProfiles.map((p) => p.url),
    description: profile.tagline,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: profile.institution.name,
    url: "https://www.karu.ac.ke",
  };
}

export function scholarlyArticlesJsonLd() {
  return publications
    .filter((p) => p.doi || p.url)
    .map((p) => ({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      headline: p.title,
      datePublished: String(p.year),
      author: {
        "@type": "Person",
        name: profile.fullName,
      },
      isPartOf: {
        "@type": "Periodical",
        name: p.journal,
      },
      ...(p.doi
        ? {
            identifier: `https://doi.org/${p.doi}`,
            sameAs: `https://doi.org/${p.doi}`,
          }
        : {}),
      ...(p.url ? { url: p.url } : {}),
    }));
}

export { siteUrl };
