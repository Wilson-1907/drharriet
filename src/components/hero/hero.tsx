import Image from "next/image";
import { profile } from "@/data/profile";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-void text-on-void"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(139,30,45,0.18),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 pt-12 pb-12 min-[390px]:px-5 sm:gap-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-8 md:pt-20 md:pb-20 lg:pt-28">
        {/* Portrait first on very small screens for identity */}
        <div className="hero-portrait relative order-1 mx-auto w-full max-w-[280px] min-[390px]:max-w-xs sm:max-w-sm md:order-2 md:mx-0 md:max-w-md md:justify-self-end">
          <div className="absolute -inset-2 border border-on-void/15 sm:-inset-3" aria-hidden="true" />
          <div className="absolute top-0 left-0 h-full w-px bg-accent" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            <Image
              src={images.photo1.src}
              alt={images.photo1.alt}
              fill
              priority
              sizes="(max-width: 390px) 280px, (max-width: 768px) 360px, 380px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="hero-copy order-2 min-w-0 md:order-1">
          <p className="font-sans text-[0.62rem] tracking-[0.22em] text-accent uppercase sm:text-[0.68rem] sm:tracking-[0.32em]">
            Karatina University
          </p>

          <h1
            id="hero-heading"
            className="mt-4 font-display text-[clamp(2.35rem,11vw,6.4rem)] leading-[0.92] tracking-tight break-words text-on-void sm:mt-6"
          >
            <span className="block hero-line">Dr. Harriet</span>
            <span className="block hero-line hero-line-delay">Loice Tsinale</span>
          </h1>

          <div
            className="hero-line-rule mt-5 h-px w-16 origin-left bg-accent sm:mt-7 sm:w-24"
            aria-hidden="true"
          />

          <div className="hero-fade mt-5 space-y-2 font-sans text-sm text-on-void/85 sm:mt-7 md:text-base">
            <p className="font-medium tracking-wide text-on-void">
              Director, Open, Distance and E-Learning (ODeL)
            </p>
            <p className="font-medium tracking-wide text-on-void">
              Lecturer in Computing — actively teaching
            </p>
          </div>

          <p className="hero-fade hero-fade-delay mt-5 max-w-xl font-sans text-[0.95rem] leading-relaxed text-on-void/75 sm:mt-6 sm:text-base md:text-lg">
            «{profile.tagline}»
          </p>

          <div className="hero-fade hero-fade-delay-2 mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-9">
            <ButtonLink href="/research" className="w-full min-[420px]:w-auto">
              Explore Research
            </ButtonLink>
            <ButtonLink
              href="/publications"
              variant="outline"
              className="w-full border-on-void/40 text-on-void hover:border-accent hover:text-accent min-[420px]:w-auto"
            >
              View Publications
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="ghost"
              className="w-full text-on-void/85 hover:text-accent min-[420px]:w-auto"
            >
              Academic Profile
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="border-t border-on-void/15">
        <p className="mx-auto max-w-7xl px-4 py-3 font-sans text-[0.58rem] leading-relaxed tracking-[0.18em] text-on-void/55 uppercase min-[390px]:px-5 sm:py-4 sm:text-[0.65rem] sm:tracking-[0.28em] md:px-8">
          {profile.heroAxes.join(" · ")}
        </p>
      </div>
    </section>
  );
}
