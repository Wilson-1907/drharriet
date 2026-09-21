import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 font-sans text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variant === "primary" &&
      "bg-accent text-on-void hover:bg-accent-deep",
    variant === "ghost" &&
      "bg-transparent text-ink hover:text-accent",
    variant === "outline" &&
      "border border-ink/35 text-ink hover:border-accent hover:text-accent",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
