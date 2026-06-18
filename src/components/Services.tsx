"use client";

import { services } from "@/lib/site-config";
import { useReveal } from "@/lib/use-reveal";

const icons: Record<string, React.ReactNode> = {
  "virtual-tours": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21C16.5 17.5 20 13.86 20 9.5C20 5.36 16.64 2 12.5 2H11.5C7.36 2 4 5.36 4 9.5C4 13.86 7.5 17.5 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="9.5" r="2.75" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  epc: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  photography: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 8.5C4 7.4 4.9 6.5 6 6.5H8L9.2 4.5H14.8L16 6.5H18C19.1 6.5 20 7.4 20 8.5V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12.5" r="3.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
};

export function Services() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze-600">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">
            Three services. One trusted property marketing partner.
          </h2>
          <p className="mt-4 text-lg text-espresso-800/75">
            Every listing needs to look its best, be legally compliant, and
            be easy to explore. We handle all three.
          </p>
        </div>

        <div
          ref={revealRef}
          className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <article
              key={service.key}
              className="group flex flex-col rounded-2xl border border-espresso-900/8 bg-sand-50 p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-espresso-900 text-tan-300">
                {icons[service.key]}
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-espresso-900">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso-800/75">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-espresso-800/85">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-bronze-500"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10.5L8 14.5L16 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-600 transition-colors group-hover:text-bronze-500"
              >
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
