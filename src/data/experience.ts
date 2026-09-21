export type ExperienceRole = {
  title: string;
  status?: "current" | "previous" | "former";
  note?: string;
};

export type ExperienceEntry = {
  id: string;
  organization: string;
  roles: ExperienceRole[];
  responsibilities?: string[];
  category: "academic" | "professional";
};

export const experience: ExperienceEntry[] = [
  {
    id: "karatina",
    organization: "Karatina University",
    category: "academic",
    roles: [
      {
        title: "Director, Open, Distance and E-Learning",
        status: "current",
      },
      {
        title: "Lecturer, Department of Computing",
        status: "current",
        note: "Actively teaching undergraduate and related computing programmes",
      },
      {
        title: "Head of Department, Computing",
        status: "former",
        note: "Previous leadership role",
      },
    ],
  },
  {
    id: "muranga",
    organization: "Murang'a University of Technology",
    category: "academic",
    roles: [
      {
        title: "Lecturer",
        status: "current",
      },
    ],
  },
  {
    id: "kirinyaga",
    organization: "Kirinyaga University",
    category: "academic",
    roles: [{ title: "Lecturer" }],
  },
  {
    id: "tharaka",
    organization: "Tharaka University",
    category: "academic",
    roles: [
      { title: "Lecturer / Examination Officer" },
      { title: "Tutorial Fellow" },
    ],
    responsibilities: [
      "teaching",
      "examinations",
      "project supervision",
      "academic advising",
      "student mentorship",
      "programme specialization",
      "career development guidance",
    ],
  },
  {
    id: "mku",
    organization: "Mount Kenya University",
    category: "academic",
    roles: [
      { title: "Head of Department, Information Technology" },
      {
        title: "Head of Department, Information Science and Knowledge Management",
      },
      { title: "Tutorial Fellow" },
      { title: "Academic Advisor" },
      { title: "ISO 9001:2015 Auditor" },
      { title: "Teaching Programme Coordinator" },
      { title: "Graduate Assistant" },
    ],
  },
  {
    id: "kaimosi",
    organization: "Kaimosi Teachers' College",
    category: "professional",
    roles: [{ title: "System Administrator" }],
  },
  {
    id: "oilibya",
    organization: "Libya Oil Kenya / Oilibya",
    category: "professional",
    roles: [{ title: "IT Internship" }],
  },
];

export type TimelineStage = {
  id: string;
  organization: string;
  role: string;
  isCurrent?: boolean;
  isHighlight?: boolean;
};

/** Editorial career journey — from systems to scholarship. No fabricated dates. */
export const careerTimeline: TimelineStage[] = [
  {
    id: "kaimosi",
    organization: "Kaimosi Teachers' College",
    role: "System Administrator",
  },
  {
    id: "oilibya",
    organization: "Libya Oil Kenya / Oilibya",
    role: "IT Internship",
  },
  {
    id: "mku",
    organization: "Mount Kenya University",
    role: "Academic & Leadership Roles",
  },
  {
    id: "tharaka",
    organization: "Tharaka University",
    role: "Tutorial Fellow / Lecturer / Examination Officer",
  },
  {
    id: "kirinyaga",
    organization: "Kirinyaga University",
    role: "Lecturer",
  },
  {
    id: "karatina-lecturer",
    organization: "Karatina University",
    role: "Lecturer in Computing",
  },
  {
    id: "karatina-hod",
    organization: "Karatina University",
    role: "Head of Department, Computing",
  },
  {
    id: "karatina-odel",
    organization: "Karatina University",
    role: "Director, ODeL & Lecturer in Computing",
    isCurrent: true,
    isHighlight: true,
  },
  {
    id: "muranga-lecturer",
    organization: "Murang'a University of Technology",
    role: "Lecturer",
    isCurrent: true,
  },
];
