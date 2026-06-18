"use client";

import { siteConfig } from "@/lib/site-config";
import { useReveal } from "@/lib/use-reveal";

const strengths = [
  {
    title: "Property-first expertise",
    body: "We work exclusively in property marketing, so every tour, certificate, and photoset is built around what actually helps a listing perform.",
  },
  {
    title: "One point of contact",
    body: "Book one visit and leave with everything your listing needs — no juggling separate suppliers or schedules.",
  },
  {
    title: "Built for agents and landlords",
    body: "Trade pricing and fast turnaround for agencies, with the same care and accuracy for individual landlords and homeowners.",
  },
];

export function About() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze-600">
            About us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-espresso-900 sm:text-4xl">
            Property marketing, done properly.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-espresso-800/80">
            {siteConfig.companyLegalName} ({siteConfig.brandName}) provides
            property photography, 3D virtual tours, and EPC certificates to
            both trade clients and individual landlords across{" "}
            {siteConfig.serviceArea}.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-espresso-800/80">
            Our mission is simple: give every property the presentation it
            deserves, and give every client a service they can rely on
            without having to chase it.
          </p>

          <a
            href="#quote"
            className="mt-8 inline-flex rounded-full bg-espresso-900 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-bronze-600"
          >
            Work with us
          </a>
        </div>

        <div ref={revealRef} className="reveal space-y-5">
          {strengths.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-2xl border border-espresso-900/8 bg-sand-50 p-6 shadow-card"
            >
              <span className="font-display text-2xl font-medium text-tan-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-espresso-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-espresso-800/75">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
