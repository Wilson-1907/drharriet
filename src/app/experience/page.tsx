import type { Metadata } from "next";
import { ExperienceList } from "@/components/leadership/experience-list";
import { CareerTimeline } from "@/components/timeline/career-timeline";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience of ${profile.fullName} — Director of ODeL and Lecturer in Computing at Karatina University; Lecturer at Murang'a University of Technology.`,
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="bg-paper">
      <div className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
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
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ExperienceList />
      </div>

      <CareerTimeline />
    </div>
  );
}
