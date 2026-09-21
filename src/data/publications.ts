export type PublicationTheme =
  | "healthcare"
  | "cybersecurity"
  | "software"
  | "digital-learning"
  | "ai"
  | "hci"
  | "education"
  | "quality";

export type Publication = {
  id: string;
  title: string;
  year: number;
  authors?: string[];
  journal: string;
  volume: string;
  issue: string;
  pages: string;
  doi?: string;
  url?: string;
  issn?: string;
  themes: PublicationTheme[];
  abstract?: string;
  verified: true;
};

export const publications: Publication[] = [
  {
    id: "ijeast-2023-health-standards",
    title:
      "Architectural Health Data Standards and Semantic Interoperability: A Comprehensive Review in the Context of Integrating Medical Data into Big Data Analytics",
    year: 2023,
    journal:
      "International Journal of Engineering Applied Sciences and Technology",
    volume: "8",
    issue: "4",
    pages: "17–30",
    doi: "10.33564/IJEAST.2023.v08i04.002",
    url: "https://doi.org/10.33564/IJEAST.2023.v08i04.002",
    themes: ["healthcare", "ai"],
    verified: true,
  },
  {
    id: "ijar-2023-data-management",
    title:
      "Effective Approaches for Enhancing Data Management and Semantic Interoperability within the Healthcare Sector",
    year: 2023,
    journal: "International Journal of Applied Research",
    volume: "9",
    issue: "9",
    pages: "01–06",
    doi: "10.22271/allresearch.2023.v9.i9a.11225",
    url: "https://doi.org/10.22271/allresearch.2023.v9.i9a.11225",
    themes: ["healthcare"],
    verified: true,
  },
  {
    id: "ijeast-2019-usability-bda",
    title:
      "Usability of Big Data Analytics within Clinical Decision Support Systems",
    year: 2019,
    journal:
      "International Journal of Engineering Applied Sciences and Technology",
    volume: "4",
    issue: "5",
    pages: "64–73",
    doi: "10.33564/IJEAST.2019.v04i05.010",
    url: "https://doi.org/10.33564/IJEAST.2019.v04i05.010",
    themes: ["healthcare", "hci"],
    verified: true,
  },
  {
    id: "ijeast-2019-security-privacy",
    title:
      "Security and Privacy Determinants for a Secured Cloud-Based Electronic Health Record System",
    year: 2019,
    journal:
      "International Journal of Engineering Applied Sciences and Technology",
    volume: "4",
    issue: "3",
    pages: "35–47",
    doi: "10.33564/IJEAST.2019.v04i03.005",
    url: "https://doi.org/10.33564/IJEAST.2019.v04i03.005",
    themes: ["cybersecurity", "healthcare"],
    verified: true,
  },
  {
    id: "ijtrd-2017-alm",
    title:
      "Application Lifecycle Management Activities for Quality Assurance in Software",
    year: 2017,
    journal: "International Journal of Trend in Research and Development",
    volume: "4",
    issue: "2",
    pages: "211–224",
    issn: "2394-9333",
    themes: ["software", "quality"],
    verified: true,
  },
  {
    id: "ijar-2016-cloud-acceptance",
    title:
      "Performance expectancy as a determinant for cloud computing acceptance in Kenyan Public Universities",
    year: 2016,
    journal: "International Journal of Applied Research",
    volume: "2",
    issue: "8",
    pages: "353–363",
    issn: "2394-5869",
    themes: ["digital-learning", "hci"],
    verified: true,
  },
];

export const publicationYears = Array.from(
  new Set(publications.map((p) => p.year)),
).sort((a, b) => b - a);

export const publicationThemeLabels: Record<PublicationTheme, string> = {
  healthcare: "Healthcare Data",
  cybersecurity: "Cybersecurity",
  software: "Software Quality",
  "digital-learning": "Digital Education",
  ai: "AI & Analytics",
  hci: "Human-Centered",
  education: "Computing Education",
  quality: "Quality Assurance",
};

export function getPublicationById(id: string): Publication | undefined {
  return publications.find((p) => p.id === id);
}

export function filterPublications(options: {
  query?: string;
  year?: number | "all";
  theme?: PublicationTheme | "all";
}): Publication[] {
  const q = options.query?.trim().toLowerCase() ?? "";
  return publications.filter((p) => {
    if (options.year && options.year !== "all" && p.year !== options.year) {
      return false;
    }
    if (
      options.theme &&
      options.theme !== "all" &&
      !p.themes.includes(options.theme)
    ) {
      return false;
    }
    if (!q) return true;
    const haystack = [p.title, p.journal, p.doi, p.issn, String(p.year)]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
