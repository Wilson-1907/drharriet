import Image from "next/image";
import { odl } from "@/data/odl";
import { leadership } from "@/data/leadership";
import { images } from "@/data/images";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function TheLeader() {
  return (
    <section
      id="the-leader"
      aria-labelledby="leader-heading"
      className="bg-void text-on-void"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionLabel number="05" label="The Leader" light />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="font-sans text-[0.7rem] tracking-[0.28em] text-accent uppercase">
                Current leadership
              </p>
              <h2
                id="leader-heading"
                className="mt-3 font-display text-[clamp(2.75rem,14vw,8rem)] leading-[0.88] tracking-tight text-on-void"
              >
                <span className="block">{odl.title}</span>
                <span className="block text-accent">{odl.subtitle}</span>
              </h2>
              <p className="mt-6 font-display text-2xl text-on-void/90 md:text-3xl">
                {odl.full}
              </p>
            </div>
            <p className="max-w-lg font-sans text-base leading-relaxed text-on-void/75 md:text-lg">
              {odl.context}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
              <div className="photo-mono relative h-full w-full">
                <Image
                  src={images.photo3.src}
                  alt={images.photo3.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="absolute bottom-3 left-3 font-sans text-[0.6rem] tracking-[0.18em] text-on-void/70 uppercase">
                {images.photo3.label}
              </p>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div className="grid gap-4 sm:grid-cols-2">
              {odl.focusAreas.map((area) => (
                <div
                  key={area}
                  className="border-t border-on-void/20 pt-4 font-sans text-sm text-on-void/85"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-8 font-sans text-xs leading-relaxed text-on-void/50">
              {odl.disclaimer}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 border-t border-on-void/15 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <article className="h-full border border-accent/60 bg-on-void/[0.04] p-6 md:p-7">
              <p className="font-sans text-[0.62rem] tracking-[0.24em] text-accent uppercase">
                Current · Primary
              </p>
              <h3 className="mt-3 font-display text-2xl text-on-void md:text-3xl">
                {leadership.current.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-on-void/65">
                {leadership.current.fullTitle}
                <br />
                {leadership.current.institution}
              </p>
            </article>
          </Reveal>
          <Reveal delay={40}>
            <article className="h-full border border-accent/40 bg-on-void/[0.04] p-6 md:p-7">
              <p className="font-sans text-[0.62rem] tracking-[0.24em] text-accent uppercase">
                Current · Teaching
              </p>
              <h3 className="mt-3 font-display text-2xl text-on-void md:text-3xl">
                {leadership.currentTeaching.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-on-void/65">
                {leadership.currentTeaching.fullTitle}
                <br />
                {leadership.currentTeaching.institution}
                <br />
                <span className="text-accent">{leadership.currentTeaching.note}</span>
              </p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="h-full border border-on-void/25 p-6 md:p-7">
              <p className="font-sans text-[0.62rem] tracking-[0.24em] text-accent uppercase">
                Current · Part-time
              </p>
              <h3 className="mt-3 font-display text-2xl text-on-void md:text-3xl">
                {leadership.currentPartTime.title}
              </h3>
              <p className="mt-2 font-sans text-sm text-on-void/65">
                {leadership.currentPartTime.fullTitle}
                <br />
                {leadership.currentPartTime.institution}
                <br />
                <span className="text-accent">{leadership.currentPartTime.note}</span>
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <article className="border border-on-void/15 p-6 md:max-w-md">
            <p className="font-sans text-[0.62rem] tracking-[0.24em] text-on-void/45 uppercase">
              Previous
            </p>
            <h3 className="mt-2 font-display text-xl text-on-void/85">
              {leadership.previous.title}
            </h3>
            <p className="mt-1 font-sans text-sm text-on-void/50">
              {leadership.previous.institution}
            </p>
          </article>
        </Reveal>

        <Reveal className="mt-14">
          <p className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
            Academic Leadership Experience
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {leadership.areas.map((area) => (
              <li
                key={area}
                className="border border-on-void/25 px-3 py-1.5 font-sans text-xs tracking-wide text-on-void/80"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
