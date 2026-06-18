// Central configuration for site-wide content, contact details, and
// external links. Edit values here to update copy across the whole site.

/**
 * PLACEHOLDER — replace with the real external booking form URL
 * (e.g. a Calendly, Tally, or JotForm link) before going live.
 */
export const BOOKING_FORM_URL = "https://example.com/REPLACE_WITH_BOOKING_FORM_URL";

/**
 * PLACEHOLDER — replace with the live form-handling endpoint for the
 * quote request form (e.g. Formspree, Getform, or a custom API route).
 */
export const QUOTE_FORM_ENDPOINT = "https://example.com/REPLACE_WITH_FORM_ENDPOINT";

export const siteConfig = {
  companyLegalName: "Groove Park Investment Limited",
  brandName: "GIPL Services",
  tagline: "Professional Property Marketing Services",
  phone: "020 3598 2318",
  phoneHref: "tel:+442035982318",
  // NOTE: source site listed a placeholder mailbox (info@mysite.com) behind
  // a contact@am-services.uk display address. Using the GIPL domain mailbox
  // as a clearly-labelled placeholder — confirm the real inbox before launch.
  email: "contact@gipl-services.co.uk",
  emailHref: "mailto:contact@gipl-services.co.uk",
  // PLACEHOLDER — source site did not publish a street address, only
  // "London and Kent" as a coverage area. Replace with the registered
  // business address before launch.
  address: "London & Kent, United Kingdom",
  serviceArea: "London & Kent",
  // PLACEHOLDER coordinates (central London) — replace with the real
  // business location for the map embed.
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5!2d-0.1276!3d51.5072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000",
  social: {
    // PLACEHOLDER — no social profiles were listed on the source site.
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

export type ServiceKey = "virtual-tours" | "epc" | "photography";

export const services: {
  key: ServiceKey;
  name: string;
  shortName: string;
  description: string;
  benefits: string[];
}[] = [
  {
    key: "virtual-tours",
    name: "3D Virtual Tours",
    shortName: "Virtual Tours",
    description:
      "Immersive, walk-through 3D tours that let buyers and tenants explore a property remotely, any time, from anywhere.",
    benefits: [
      "Remote property viewing, day or night",
      "Higher buyer and tenant engagement",
      "Increased enquiries and viewing requests",
    ],
  },
  {
    key: "epc",
    name: "EPC Certificates",
    shortName: "EPC",
    description:
      "Accredited Energy Performance Certificates carried out quickly and correctly, keeping you on the right side of the law.",
    benefits: [
      "Full legal compliance for sale or let",
      "Fast turnaround, minimal disruption",
      "Assessment by a qualified Domestic Energy Assessor",
    ],
  },
  {
    key: "photography",
    name: "Property Photography",
    shortName: "Photography",
    description:
      "Crisp, professionally lit photography that presents a property at its absolute best across every listing platform.",
    benefits: [
      "High-quality, magazine-standard imagery",
      "Stronger marketing across every portal",
      "More enquiries from the very first impression",
    ],
  },
];

// Pricing sourced from the current published price list on the existing
// am-services.uk website (Photography, Floor Plans, EPC). No published
// pricing exists for 3D Virtual Tours specifically — that card is marked
// as a "Request a quote" tier rather than an invented figure.
export type PricingTier = {
  label: string;
  price: string;
  note?: string;
};

export const pricing: {
  key: ServiceKey;
  serviceName: string;
  tiers: PricingTier[];
  footnote?: string;
}[] = [
  {
    key: "photography",
    serviceName: "Property Photography",
    tiers: [
      { label: "Studio – 2 Bed Properties", price: "£99" },
      { label: "3 Bed Properties", price: "£110" },
      { label: "4–5 Bed Properties", price: "£140" },
    ],
    footnote: "Properties over 5 bedrooms: please get in touch for a quote.",
  },
  {
    key: "epc",
    serviceName: "EPC Certificates",
    tiers: [
      { label: "Studio – 3 Bed Properties", price: "£80" },
      { label: "4–5 Bed Properties", price: "£95" },
      { label: "6+ Bed Properties", price: "Get a quote" },
    ],
  },
  {
    key: "virtual-tours",
    serviceName: "3D Virtual Tours",
    tiers: [
      // PLACEHOLDER — no 3D virtual tour pricing was published on the
      // source site. Insert real tiers here before launch.
      { label: "Studio – 3 Bed Properties", price: "Get a quote" },
      { label: "4–5 Bed Properties", price: "Get a quote" },
      { label: "6+ Bed Properties", price: "Get a quote" },
    ],
    footnote: "Pricing to be confirmed — contact us for a tailored quote.",
  },
];

export const pricingNotes = [
  "Discounts are available if more than one service is required per visit.",
  "We accept all major payment cards and bank transfers.",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#prices" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
