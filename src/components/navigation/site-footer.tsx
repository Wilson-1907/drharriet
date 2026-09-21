import Link from "next/link";
import { profile } from "@/data/profile";
import { researchProfiles } from "@/data/profiles";

export function SiteFooter() {
  return (
    <footer className="border-t border-on-void/15 bg-void text-on-void">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl text-on-void md:text-3xl">
            {profile.fullName}
          </p>
          <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-on-void/70">
            Director, ODeL &amp; Lecturer in Computing
            <br />
            Karatina University
            <br />
            Director, ODeL (Part-time) · Murang&apos;a University of Technology
          </p>
        </div>

        <div>
          <p className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-on-void/80">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/experience", "Experience"],
              ["/research", "Research"],
              ["/publications", "Publications"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-[0.65rem] tracking-[0.22em] text-accent uppercase">
            Research Profiles
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-on-void/80">
            {researchProfiles.map((p) => (
              <li key={p.id}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-on-void/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 font-sans text-xs text-on-void/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          <p className="tracking-[0.16em] uppercase">
            Computing · Research · Teaching · ODeL Leadership
          </p>
        </div>
      </div>
    </footer>
  );
}
