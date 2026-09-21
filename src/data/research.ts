export type ResearchThemeId =
  | "ai"
  | "cybersecurity"
  | "hci"
  | "education"
  | "software"
  | "digital-learning"
  | "healthcare"
  | "quality";

export type ResearchTheme = {
  id: ResearchThemeId;
  label: string;
  shortLabel: string;
  description: string;
  related: ResearchThemeId[];
  publicationThemes: string[];
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "ai",
    label: "Artificial Intelligence & Emerging Technologies",
    shortLabel: "AI",
    description:
      "Inquiry into artificial intelligence and emerging computing technologies as they reshape systems, learning environments and decision support.",
    related: ["hci", "digital-learning", "healthcare"],
    publicationThemes: ["ai", "healthcare", "digital-learning"],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity & Information Assurance",
    shortLabel: "Cybersecurity",
    description:
      "Security, privacy and assurance considerations for networked systems, cloud platforms and sensitive institutional data.",
    related: ["healthcare", "software"],
    publicationThemes: ["cybersecurity", "healthcare"],
  },
  {
    id: "hci",
    label: "Human-Centered Computing",
    shortLabel: "Human-Centered",
    description:
      "Attention to how people interact with computing systems — usability, adoption and the human dimensions of technology design.",
    related: ["ai", "education", "digital-learning"],
    publicationThemes: ["hci", "digital-learning"],
  },
  {
    id: "education",
    label: "Computing Education",
    shortLabel: "Education",
    description:
      "Teaching, curriculum and pedagogical practice in computing and information technology within higher education.",
    related: ["digital-learning", "quality", "hci"],
    publicationThemes: ["education", "digital-learning"],
  },
  {
    id: "software",
    label: "Software Development & Quality",
    shortLabel: "Software",
    description:
      "Software lifecycle practices and quality assurance approaches that support reliable, maintainable systems.",
    related: ["cybersecurity", "quality"],
    publicationThemes: ["software"],
  },
  {
    id: "digital-learning",
    label: "Digital Education",
    shortLabel: "Digital Learning",
    description:
      "Open, distance and technology-enabled learning — including blended models, digital content and learning systems.",
    related: ["education", "ai", "hci"],
    publicationThemes: ["digital-learning", "education"],
  },
  {
    id: "healthcare",
    label: "Healthcare Data & Interoperability",
    shortLabel: "Healthcare Data",
    description:
      "Health data standards, semantic interoperability, analytics and electronic health record systems — themes present across documented publications.",
    related: ["ai", "cybersecurity"],
    publicationThemes: ["healthcare"],
  },
  {
    id: "quality",
    label: "Academic Quality Assurance",
    shortLabel: "Quality Assurance",
    description:
      "Programme evaluation, accreditation alignment, curriculum review and institutional quality processes in higher education.",
    related: ["education", "software"],
    publicationThemes: ["quality", "software"],
  },
];

/** Visual research journey — themes present in documented work, not a single formal programme. */
export const researchJourney = [
  "Healthcare Data",
  "Semantic Interoperability",
  "Big Data Analytics",
  "Clinical Decision Support",
  "Electronic Health Records",
  "Security & Privacy",
  "Cloud Computing",
  "Software Quality",
  "Technology Adoption",
] as const;

export const constellationCenter = {
  id: "computing",
  label: "COMPUTING",
} as const;
