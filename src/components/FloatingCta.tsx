"use client";

import { BOOKING_FORM_URL } from "@/lib/site-config";

export function FloatingCta() {
  return (
    <a
      href={BOOKING_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-bronze-500 px-5 py-3.5 text-sm font-semibold text-paper shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-600 sm:bottom-7 sm:right-7"
      aria-label="Book Now (opens booking form in a new tab)"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tan-300 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-tan-300" />
      </span>
      Book Now
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5"
      >
        <path
          d="M3 8H13M13 8L9 4M13 8L9 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
