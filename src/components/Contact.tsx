import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze-600">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">
            Talk to us directly.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-espresso-900/8 bg-paper p-5 shadow-card transition-colors hover:border-bronze-500/30"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-espresso-900 text-tan-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6.6 10.8C8.1 13.8 10.2 15.9 13.2 17.4L15.3 15.3C15.6 15 16 14.9 16.4 15.1C17.7 15.6 19.1 15.9 20.5 16C21 16 21.4 16.4 21.4 16.9V20.6C21.4 21.1 21 21.5 20.5 21.5C10.5 21.5 2.5 13.5 2.5 3.5C2.5 3 2.9 2.6 3.4 2.6H7.1C7.6 2.6 8 3 8 3.5C8.1 4.9 8.4 6.3 8.9 7.6C9.1 8 9 8.4 8.7 8.7L6.6 10.8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-espresso-800/60">
                  Phone
                </p>
                <p className="font-display text-lg font-semibold text-espresso-900">
                  {siteConfig.phone}
                </p>
              </div>
            </a>

            <a
              href={siteConfig.emailHref}
              className="flex items-center gap-4 rounded-2xl border border-espresso-900/8 bg-paper p-5 shadow-card transition-colors hover:border-bronze-500/30"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-espresso-900 text-tan-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 6.5C3 5.4 3.9 4.5 5 4.5H19C20.1 4.5 21 5.4 21 6.5V17.5C21 18.6 20.1 19.5 19 19.5H5C3.9 19.5 3 18.6 3 17.5V6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-espresso-800/60">
                  Email
                </p>
                <p className="font-display text-lg font-semibold text-espresso-900 break-all">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-espresso-900/8 bg-paper p-5 shadow-card">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-espresso-900 text-tan-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21C15.5 17.6 19 14.1 19 10C19 6.1 15.9 3 12 3C8.1 3 5 6.1 5 10C5 14.1 8.5 17.6 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-espresso-800/60">
                  Coverage Area
                </p>
                <p className="font-display text-lg font-semibold text-espresso-900">
                  {siteConfig.address}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-espresso-900/8 shadow-card">
            {/* PLACEHOLDER — replace mapEmbedSrc in site-config.ts with the
                real business location embed URL before launch. */}
            <iframe
              src={siteConfig.mapEmbedSrc}
              title="GIPL Services coverage area map"
              loading="lazy"
              className="h-full min-h-[320px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
