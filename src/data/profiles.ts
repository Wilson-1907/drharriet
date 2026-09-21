export type ResearchProfile = {
  id: string;
  label: string;
  url: string;
};

export const researchProfiles: ResearchProfile[] = [
  {
    id: "orcid",
    label: "ORCID",
    url: "https://orcid.org/0000-0001-7007-7845",
  },
  {
    id: "google-scholar",
    label: "Google Scholar",
    url: "https://scholar.google.co.th/citations?hl=en&user=wW7XMT0AAAAJ&view_op=list_works",
  },
  {
    id: "researchgate",
    label: "ResearchGate",
    url: "https://www.researchgate.net/profile/Harriet-Tsinale",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://ke.linkedin.com/in/dr-harriet-tsinale-41254b21",
  },
];
