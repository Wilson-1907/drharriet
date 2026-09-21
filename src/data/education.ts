export type EducationEntry = {
  id: string;
  degree: string;
  field: string;
  institution: string;
  level: "doctoral" | "masters" | "bachelors";
};

export const education: EducationEntry[] = [
  {
    id: "phd-it",
    degree: "PhD",
    field: "Information Technology",
    institution: "Kibabii University",
    level: "doctoral",
  },
  {
    id: "msc-it",
    degree: "MSc",
    field: "Information Technology",
    institution: "Kibabii University",
    level: "masters",
  },
  {
    id: "bsc-cs",
    degree: "BSc",
    field: "Computer Science",
    institution: "Kabarak University",
    level: "bachelors",
  },
];
