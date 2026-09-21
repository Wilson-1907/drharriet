import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-void text-on-void">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center md:px-8">
        <p className="font-sans text-[0.65rem] tracking-[0.28em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl text-on-void md:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 font-sans text-base text-on-void/70">
          The page you requested is not part of this academic archive.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex bg-accent px-5 py-2.5 font-sans text-xs tracking-[0.16em] text-on-void uppercase transition-colors hover:bg-accent-deep"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
