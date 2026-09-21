/**
 * Photograph registry.
 * Files live in: public/images/photoN.jpeg
 *
 * Present files: 1,2,3,4,6,8,9,11,12
 * Fallbacks for missing 5,7,10 use the closest available portraits
 * until dedicated images are added.
 */
const slots = {
  photo1: {
    src: "/images/photo1.jpeg",
    alt: "Dr. Harriet Loice Tsinale — professional portrait",
    treatment: "mono" as const,
    label: "photo1",
    placement: "Homepage hero",
  },
  photo2: {
    src: "/images/photo2.jpeg",
    alt: "Dr. Harriet Loice Tsinale — academic portrait",
    treatment: "natural" as const,
    label: "photo2",
    placement: "About + The Academic",
  },
  photo3: {
    src: "/images/photo3.jpeg",
    alt: "Dr. Harriet Loice Tsinale — academic leadership",
    treatment: "mono" as const,
    label: "photo3",
    placement: "ODeL / leadership",
  },
  photo4: {
    src: "/images/photo4.jpeg",
    alt: "Cisco Networking Academy context with Dr. Harriet Loice Tsinale",
    treatment: "natural" as const,
    label: "photo4",
    placement: "Cisco feature",
  },
  photo5: {
    // Dedicated teaching photo not yet provided — using academic portrait
    src: "/images/photo2.jpeg",
    alt: "Dr. Harriet Loice Tsinale — teaching and academic presence",
    treatment: "natural" as const,
    label: "photo5 (using photo2 until teaching photo added)",
    placement: "The Educator",
  },
  photo6: {
    src: "/images/photo6.jpeg",
    alt: "Research or academic context",
    treatment: "mono" as const,
    label: "photo6",
    placement: "The Researcher",
  },
  photo7: {
    // Dedicated speaking photo not yet provided — using NCHE appointment image
    src: "/images/photo11.jpeg",
    alt: "Professional and academic engagement",
    treatment: "natural" as const,
    label: "photo7 (using photo11 until speaking photo added)",
    placement: "Experience page",
  },
  photo8: {
    src: "/images/photo8.jpeg",
    alt: "University or campus context",
    treatment: "natural" as const,
    label: "photo8",
    placement: "Career journey",
  },
  photo9: {
    src: "/images/photo9.jpeg",
    alt: "Cisco Instructor credential",
    treatment: "natural" as const,
    label: "photo9",
    placement: "Cisco credential",
  },
  photo10: {
    // Dedicated human portrait not yet provided — using academic portrait
    src: "/images/photo2.jpeg",
    alt: "Dr. Harriet Loice Tsinale",
    treatment: "natural" as const,
    label: "photo10 (using photo2 until second portrait added)",
    placement: "About secondary",
  },
  photo11: {
    src: "/images/photo11.jpeg",
    alt: "Chair of Academic Review Panel — NCHE Namibia appointment",
    treatment: "natural" as const,
    label: "photo11",
    placement: "NCHE Namibia section",
  },
  photo12: {
    src: "/images/photo12.jpeg",
    alt: "Academic Review Panel — Namibia University of Science and Technology",
    treatment: "natural" as const,
    label: "photo12",
    placement: "NCHE Namibia section",
  },
} as const;

export const images = {
  ...slots,
  heroPortrait: slots.photo1,
  academicPortrait: slots.photo2,
  leadership: slots.photo3,
  cisco: slots.photo4,
  teaching: slots.photo5,
  research: slots.photo6,
  speaking: slots.photo7,
  campus: slots.photo8,
  ciscoCredential: slots.photo9,
  human: slots.photo10,
  ncheNamibia1: slots.photo11,
  ncheNamibia2: slots.photo12,
} as const;
