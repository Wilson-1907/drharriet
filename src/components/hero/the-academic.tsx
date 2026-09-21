import Image from "next/image";
import { profile } from "@/data/profile";
import { images } from "@/data/images";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function TheAcademic() {
  return (
    <section
      id="the-academic"
      aria-labelledby="academic-heading"
      className="bg-paper"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-soft">
              <Image
                src={images.photo2.src}
                alt={images.photo2.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-sans text-[0.62rem] tracking-[0.2em] text-ink-muted uppercase">
              {images.photo2.label}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <SectionLabel number="01" label="The Academic" />
          <h2
            id="academic-heading"
            className="mt-5 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl"
          >
            From computing practice to scholarly leadership — still teaching, still leading.
          </h2>
          <div className="mt-8 space-y-5 font-sans text-base leading-relaxed text-ink md:text-lg">
            <p>{profile.biography.opening}</p>
            <p>{profile.biography.current}</p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                Academic appointments
              </p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-ink">
                {profile.biography.institutions.map((name) => (
                  <li key={name} className="border-b border-line py-2">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                Earlier professional experience
              </p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-ink">
                {profile.biography.earlierProfessional.map((name) => (
                  <li key={name} className="border-b border-line py-2">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
