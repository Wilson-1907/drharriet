"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const value =
        scrollable > 0
          ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100))
          : 0;
      setProgress(Math.round(value));
      setVisible(window.scrollY > 120 || value > 2);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={cn(
        "fixed z-[55] flex flex-col items-center gap-2 transition-all duration-300",
        "right-[calc(0.75rem+env(safe-area-inset-right,0px))] bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))]",
        "sm:right-[calc(1rem+env(safe-area-inset-right,0px))]",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
      aria-label="Page scroll controls"
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-md transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Scroll to top"
        title="Top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper shadow-md"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Page scroll ${progress} percent`}
        title={`${progress}%`}
      >
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-line"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-accent transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>
        <span className="relative font-sans text-[0.65rem] font-medium tabular-nums text-ink">
          {progress}%
        </span>
      </div>

      <button
        type="button"
        onClick={scrollToBottom}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-md transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Scroll to bottom"
        title="Bottom"
      >
        <ArrowDown className="h-4 w-4" />
      </button>
    </div>
  );
}
