"use client";

import { pricing, pricingNotes } from "@/lib/site-config";
import { useReveal } from "@/lib/use-reveal";

export function Pricing() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="prices" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze-600">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">
            Clear pricing, no surprises.
          </h2>
          <p className="mt-4 text-lg text-espresso-800/75">
            Priced by property size, so you know exactly what to budget for
            before you book.
          </p>
        </div>

        <div ref={revealRef} className="reveal mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.map((group) => (
            <div
              key={group.key}
              className="flex flex-col rounded-2xl border border-espresso-900/8 bg-paper p-7 shadow-card"
            >
              <h3 className="font-display text-xl font-semibold text-espresso-900">
                {group.serviceName}
              </h3>

              <ul className="mt-6 flex-1 divide-y divide-espresso-900/8">
                {group.tiers.map((tier) => (
                  <li
                    key={tier.label}
                    className="flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <span className="text-sm text-espresso-800/85">
                      {tier.label}
                    </span>
                    <span className="whitespace-nowrap font-display text-lg font-semibold text-bronze-600">
                      {tier.price}
                    </span>
                  </li>
                ))}
              </ul>

              {group.footnote && (
                <p className="mt-4 text-xs leading-relaxed text-espresso-800/60">
                  {group.footnote}
                </p>
              )}

              <a
                href="#quote"
                className="mt-6 block rounded-full bg-espresso-900 px-5 py-3 text-center text-sm font-semibold text-paper transition-colors hover:bg-bronze-600"
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 rounded-xl border border-bronze-500/20 bg-tan-400/10 p-5 text-sm text-espresso-800/85 sm:flex-row sm:items-center sm:justify-between">
          <ul className="space-y-1.5">
            {pricingNotes.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-bronze-500" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
