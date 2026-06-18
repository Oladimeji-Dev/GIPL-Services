import { navLinks, siteConfig } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso-900 pt-16 pb-10 text-sand-200/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-200/65">
              {siteConfig.companyLegalName} — professional property
              marketing for landlords, agents, and homeowners across{" "}
              {siteConfig.serviceArea}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-tan-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-tan-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-tan-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-tan-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="break-all transition-colors hover:text-tan-300">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-tan-300">
              Follow
            </h3>
            {/* PLACEHOLDER — add real social URLs in site-config.ts to
                populate this list; no profiles were found on the source
                site. */}
            <p className="mt-4 text-sm text-sand-200/55">
              Social links coming soon.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-7 text-xs text-sand-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.companyLegalName}. All rights reserved.
          </p>
          <p>{siteConfig.brandName} · 3D Tours · EPC · Photography</p>
        </div>
      </div>
    </footer>
  );
}
