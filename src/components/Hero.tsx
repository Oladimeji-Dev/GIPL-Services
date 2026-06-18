import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-espresso-900 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FAF8F5 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-bronze-500/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
        {/* Copy column */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-tan-400/30 bg-paper/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-tan-300">
            London &amp; Kent · Property Marketing Specialists
          </span>

          <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-paper text-balance sm:text-5xl lg:text-[3.4rem]">
            Make every listing the one buyers stop scrolling for.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-sand-200/85">
            {siteConfig.companyLegalName} ({siteConfig.brandName}) delivers
            3D virtual tours, EPC certificates, and property photography for
            landlords, estate agents, and property professionals.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="rounded-full bg-tan-400 px-7 py-3.5 text-sm font-semibold text-espresso-900 shadow-card transition-all hover:bg-tan-300 hover:shadow-card-hover"
            >
              Get a Quote
            </a>
            <a
              href="#prices"
              className="rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/50 hover:bg-paper/5"
            >
              View Prices
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-paper/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wide text-sand-200/60">
                Services
              </dt>
              <dd className="mt-1 font-display text-xl text-paper">3-in-1</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-sand-200/60">
                Coverage
              </dt>
              <dd className="mt-1 font-display text-xl text-paper">
                London &amp; Kent
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-sand-200/60">
                Payments
              </dt>
              <dd className="mt-1 font-display text-xl text-paper">
                Cards &amp; transfer
              </dd>
            </div>
          </dl>
        </div>

        {/* Signature visual: mocked estate-agent listing tile */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-bronze-500/30 to-transparent blur-2xl"
          />
          <div className="overflow-hidden rounded-3xl border border-paper/10 bg-sand-50 shadow-2xl">
            {/* Replace with real property photography */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso-700">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                alt="Bright modern living room, sample property photography placeholder"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
                priority
              />
              <div className="absolute left-3 top-3 flex gap-1.5">
                <span className="rounded-full bg-paper/95 px-2.5 py-1 text-[11px] font-semibold text-espresso-900 shadow-sm">
                  3D Tour
                </span>
                <span className="rounded-full bg-paper/95 px-2.5 py-1 text-[11px] font-semibold text-espresso-900 shadow-sm">
                  EPC: B
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold text-espresso-900">
                    3 Bed Garden Flat
                  </p>
                  <p className="text-sm text-espresso-700/70">
                    Illustrative listing · for demonstration only
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-espresso-900/8 pt-4 text-xs text-espresso-700/70">
                <span>Listed with the full marketing package</span>
                <span className="inline-flex items-center gap-1 font-medium text-bronze-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze-500" />
                  Tour + EPC + Photos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
