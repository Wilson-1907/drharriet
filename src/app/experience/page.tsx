import type { Metadata } from "next";
import Image from "next/image";
import { ExperienceList } from "@/components/leadership/experience-list";
import { CareerTimeline } from "@/components/timeline/career-timeline";
import { profile } from "@/data/profile";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience of ${profile.fullName} — Director of ODeL and Lecturer in Computing at Karatina University; Lecturer at Murang'a University of Technology.`,
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="bg-paper">
      <div className="border-b border-line bg-paper-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-8 md:py-20">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">
              Professional Experience
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl text-ink md:text-6xl">
              Appointments &amp; roles
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base text-ink-muted">
              Current emphasis: Director of ODeL and active Lecturer in Computing
              at Karatina University, and Lecturer at Murang&apos;a University of
              Technology. Head of Department, Computing is presented as a former
              role.
            </p>
          </div>
          <div>
            <div className="relative aspect-[5/4] overflow-hidden bg-paper">
              <Image
                src={images.photo7.src}
                alt={images.photo7.alt}
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
              {images.photo7.label}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ExperienceList />
      </div>

      <CareerTimeline />
    </div>
  );
}
