import { profile } from "@/data/profile";
import { researchProfiles } from "@/data/profiles";
import { Reveal } from "@/components/ui/reveal";
import { Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-void text-on-void"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-sans text-[0.68rem] tracking-[0.28em] text-accent uppercase">
            Correspondence
          </p>
          <h2
            id="contact-heading"
            className="mt-5 font-display text-[clamp(3rem,10vw,6.5rem)] leading-[0.9] text-on-void"
          >
            Let&apos;s Connect
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base text-on-void/75">
            For {profile.contact.purposes.join(", ")}.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-6">
              <a
                href={`mailto:${profile.contact.primaryEmail}`}
                className="group flex items-start gap-4 border-t border-on-void/20 pt-6 transition-colors hover:border-accent"
              >
                <Mail className="mt-1 h-4 w-4 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-sans text-[0.62rem] tracking-[0.2em] text-on-void/55 uppercase">
                    Primary
                  </p>
                  <p className="mt-1 break-all font-display text-xl text-on-void group-hover:text-accent sm:text-2xl md:text-3xl">
                    {profile.contact.primaryEmail}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${profile.contact.secondaryEmail}`}
                className="group flex items-start gap-4 border-t border-on-void/20 pt-6 transition-colors hover:border-accent"
              >
                <Mail className="mt-1 h-4 w-4 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-sans text-[0.62rem] tracking-[0.2em] text-on-void/55 uppercase">
                    Secondary
                  </p>
                  <p className="mt-1 break-all font-display text-lg text-on-void/90 group-hover:text-accent sm:text-xl md:text-2xl">
                    {profile.contact.secondaryEmail}
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <dl className="space-y-5 border border-on-void/20 p-6 md:p-8">
              <div>
                <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                  Personal phone
                </dt>
                <dd className="mt-2 font-sans text-base text-on-void">
                  <a
                    href={`tel:${profile.contact.phoneE164}`}
                    className="transition-colors hover:text-accent"
                  >
                    {profile.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                  Institution
                </dt>
                <dd className="mt-2 font-sans text-base text-on-void">
                  {profile.institution.name}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                  Current teaching
                </dt>
                <dd className="mt-2 font-sans text-base text-on-void/85">
                  Lecturer in Computing — actively teaching
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                  School
                </dt>
                <dd className="mt-2 font-sans text-base text-on-void/85">
                  {profile.institution.school}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                  Department
                </dt>
                <dd className="mt-2 font-sans text-base text-on-void/85">
                  {profile.institution.department}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                  Part-time
                </dt>
                <dd className="mt-2 font-sans text-base text-on-void/85">
                  Director, ODeL · Murang&apos;a University of Technology
                </dd>
              </div>
              <div className="border-t border-on-void/15 pt-5">
                <dt className="font-sans text-[0.62rem] tracking-[0.2em] text-accent uppercase">
                  Research Profiles
                </dt>
                <dd className="mt-4 flex flex-wrap gap-3">
                  {researchProfiles.map((p) => (
                    <a
                      key={p.id}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border border-on-void/30 px-3 py-2 font-sans text-xs tracking-[0.14em] text-on-void/85 uppercase transition-colors hover:border-accent hover:text-accent"
                    >
                      {p.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
