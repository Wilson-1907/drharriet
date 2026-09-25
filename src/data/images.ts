/**
 * Four photograph slots only.
 * Files: public/images/photo1.jpeg … photo4.jpeg
 */
export const images = {
  photo1: {
    src: "/images/photo1.jpeg",
    alt: "Dr. Harriet Loice Tsinale",
    placement: "Homepage hero",
  },
  photo2: {
    src: "/images/photo2.jpeg",
    alt: "Dr. Harriet Loice Tsinale — academic portrait",
    placement: "About page and The Academic section",
  },
  photo3: {
    src: "/images/photo3.jpeg",
    alt: "Cisco Networking Academy",
    placement: "Cisco Networking Academy section",
  },
  photo4: {
    src: "/images/photo4.jpeg",
    alt: "NCHE Namibia Academic Review Panel appointment",
    placement: "Namibia / NCHE appointment",
  },
} as const;
