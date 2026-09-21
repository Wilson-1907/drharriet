export const profile = {
  fullName: "Dr. Harriet Loice Tsinale",
  shortName: "Dr. Harriet Loice Tsinale",
  honorific: "Dr.",
  givenNames: "Harriet",
  middleName: "Loice",
  familyName: "Tsinale",
  currentRoles: [
    {
      title: "Director, Open, Distance and E-Learning (ODeL)",
      institution: "Karatina University",
      emphasis: "primary" as const,
    },
    {
      title: "Lecturer in Computing",
      institution: "Karatina University",
      emphasis: "primary" as const,
      note: "Actively teaching",
    },
    {
      title: "Director, Open, Distance and E-Learning (ODeL)",
      institution: "Murang'a University of Technology",
      emphasis: "secondary" as const,
      note: "Part-time",
    },
  ],
  previousLeadership: {
    title: "Former Head of Department, Computing",
    institution: "Karatina University",
    status: "previous" as const,
  },
  institution: {
    name: "Karatina University",
    school: "School of Computing and Informatics",
    department: "Department of Computing",
  },
  affiliations: [
    {
      name: "Karatina University",
      roles: [
        "Director, Open, Distance and E-Learning (ODeL)",
        "Lecturer in Computing",
      ],
    },
    {
      name: "Murang'a University of Technology",
      roles: ["Director, Open, Distance and E-Learning (ODeL) — Part-time"],
    },
  ],
  location: "Kenya",
  tagline:
    "Director of ODeL, university lecturer and computing researcher — shaping digital education, mentoring the next generation of technologists, and leading open and distance learning across institutions.",
  heroAxes: [
    "COMPUTING",
    "RESEARCH",
    "TEACHING",
    "ODeL LEADERSHIP",
  ] as const,
  biography: {
    opening:
      "Dr. Harriet Loice Tsinale is a Kenyan academic, researcher and university leader whose career bridges computing practice, classroom teaching, scholarly research and institutional digital-education leadership. With over ten years in higher education, she is known for combining technical depth with academic administration and quality assurance in Computer Science and Information Technology.",
    current:
      "She currently serves at Karatina University as Director, Open, Distance and E-Learning (ODeL) and as Lecturer in Computing — actively teaching while leading digital and distance education. She also serves part-time as Director of ODeL at Murang'a University of Technology, extending her leadership in open, blended and technology-enabled learning across institutions. She was appointed Chair of the Academic Review Panel for the Bachelor of Science (Honours) in Human Computer Interaction at the Namibia University of Science and Technology, under the auspices of the National Council for Higher Education (NCHE), Namibia.",
    institutions: [
      "Karatina University",
      "Murang'a University of Technology",
      "Kirinyaga University",
      "Tharaka University",
      "Mount Kenya University",
    ],
    earlierProfessional: [
      "Kaimosi Teachers' College",
      "Libya Oil Kenya / Oilibya",
    ],
  },
  snapshot: [
    { label: "PhD", value: "Information Technology" },
    { label: "MSc", value: "Information Technology" },
    { label: "BSc", value: "Computer Science" },
    { label: "TEACHING", value: "Lecturer in Computing" },
    { label: "LEADERSHIP", value: "Director, ODeL — Karatina & Murang'a (PT)" },
  ],
  contact: {
    primaryEmail: "htsinale@karu.ac.ke",
    secondaryEmail: "ltsinale@gmail.com",
    phoneDisplay: "+254 725 218 728",
    phoneE164: "+254725218728",
    phoneDigits: "254725218728",
    purposes: [
      "academic enquiries",
      "research collaboration",
      "teaching",
      "digital education",
      "ODeL partnership",
      "professional engagement",
    ],
  },
  site: {
    url: "https://drharriettsinale.example",
    title:
      "Dr. Harriet Loice Tsinale | Director of ODeL & Lecturer in Computing",
    description:
      "Dr. Harriet Loice Tsinale — Director of Open, Distance and E-Learning (ODeL) and Lecturer in Computing at Karatina University; part-time Director of ODeL at Murang'a University of Technology. Research across AI, cybersecurity, human-centered computing and digital education.",
    keywords: [
      "Dr. Harriet Loice Tsinale",
      "Karatina University",
      "Murang'a University of Technology",
      "Lecturer in Computing",
      "Computing",
      "ODeL",
      "academic leadership",
      "research",
      "cybersecurity",
      "artificial intelligence",
      "digital education",
      "publications",
      "Open Distance E-Learning",
      "Namibia University of Science and Technology",
      "NCHE",
      "Human Computer Interaction",
    ],
  },
} as const;

export type Profile = typeof profile;
