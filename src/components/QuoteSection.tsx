import { QuoteForm } from "./QuoteForm";

export function QuoteSection() {
  return (
    <section id="quote" className="bg-espresso-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-tan-300">
            Get a quote
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            Tell us about the property. We&apos;ll do the rest.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-sand-200/80">
            Share a few details below and we&apos;ll come back with a quote
            and the next available date — usually within one working day.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-sand-200/80">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tan-400" />
              No obligation, no pressure
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tan-400" />
              Discounts when booking more than one service
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tan-400" />
              Cards and bank transfer accepted
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-paper p-7 shadow-2xl sm:p-9">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
