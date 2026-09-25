import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { images } from "@/data/images";
import { researchProfiles } from "@/data/profiles";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "About",
  description: `Biography of ${profile.fullName} — Director of ODeL and Lecturer in Computing at Karatina University; Lecturer at Murang'a University of Technology.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <div className="border-b border-on-void/10 bg-void text-on-void">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">
            Academic Profile
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2rem,8vw,3.75rem)] text-on-void md:text-6xl">
            {profile.fullName}
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-base text-on-void/75 md:text-lg">
            {profile.tagline}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 min-[390px]:px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8 md:py-24">
        <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-soft">
            <Image
              src={images.photo2.src}
              alt={images.photo2.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="space-y-8 font-sans text-base leading-relaxed text-ink-muted md:text-lg">
          <p className="text-ink">{profile.biography.opening}</p>
          <p className="text-ink">{profile.biography.current}</p>

          <div className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <h2 className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                Current roles
              </h2>
              <ul className="mt-4 space-y-4 text-ink">
                {profile.currentRoles.map((role) => (
                  <li key={`${role.institution}-${role.title}`}>
                    <p className="font-medium">{role.title}</p>
                    <p className="text-sm text-ink-muted">{role.institution}</p>
                    {"note" in role && role.note ? (
                      <p className="text-sm text-accent">{role.note}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-muted">
                {profile.previousLeadership.title}
                <br />
                {profile.previousLeadership.institution}
              </p>
            </div>
            <div>
              <h2 className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                Home institution
              </h2>
              <p className="mt-4 text-ink">{profile.institution.name}</p>
              <p className="text-sm text-ink-muted">{profile.institution.school}</p>
              <p className="text-sm text-ink-muted">
                {profile.institution.department}
              </p>
              <h2 className="mt-8 font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                Also affiliated
              </h2>
              <p className="mt-3 text-ink">Murang&apos;a University of Technology</p>
              <p className="text-sm text-ink-muted">Lecturer</p>
            </div>
          </div>

          <div className="border-t border-line pt-8">
            <h2 className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
              International appointment
            </h2>
            <p className="mt-3 font-medium text-ink">
              Chair, Academic Review Panel
            </p>
            <p className="mt-2 text-ink">
              Bachelor of Science (Honours) in Human Computer Interaction
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Namibia University of Science and Technology
              <br />
              Under the auspices of the National Council for Higher Education
              (NCHE), Namibia
            </p>
          </div>

          <div className="border-t border-line pt-8">
            <h2 className="font-display text-3xl text-ink">Education</h2>
            <ul className="mt-6 space-y-4">
              {education.map((e) => (
                <li
                  key={e.id}
                  className="grid gap-1 border-b border-line pb-4 sm:grid-cols-[6rem_1fr]"
                >
                  <span className="text-accent">{e.degree}</span>
                  <span className="text-ink">
                    {e.field} — {e.institution}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <ButtonLink href="/experience">Full experience</ButtonLink>
            <ButtonLink href="/research" variant="outline">
              Research
            </ButtonLink>
            {researchProfiles.slice(0, 2).map((p) => (
              <ButtonLink key={p.id} href={p.url} variant="ghost" external>
                {p.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
