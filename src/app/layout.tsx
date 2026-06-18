import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.gipl-services.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GIPL Services | 3D Virtual Tours, EPC & Property Photography",
    template: "%s | GIPL Services",
  },
  description:
    "Groove Park Investment Limited (GIPL Services) provides professional 3D virtual tours, EPC certificates, and property photography for landlords, estate agents, and property professionals across London and the South East.",
  keywords: [
    "3D virtual tours",
    "EPC certificate",
    "Energy Performance Certificate",
    "property photography",
    "estate agent photography",
    "London property marketing",
  ],
  authors: [{ name: "Groove Park Investment Limited" }],
  openGraph: {
    title: "GIPL Services | Professional Property Marketing",
    description:
      "High-quality 3D Virtual Tours, EPC Certificates, and Property Photography for landlords, estate agents, and property professionals.",
    url: siteUrl,
    siteName: "GIPL Services",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIPL Services | Professional Property Marketing",
    description:
      "High-quality 3D Virtual Tours, EPC Certificates, and Property Photography for landlords, estate agents, and property professionals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GIPL Services (Groove Park Investment Limited)",
  description:
    "Professional 3D virtual tours, EPC certificates, and property photography for landlords, estate agents, and property professionals.",
  areaServed: ["London", "Kent", "South East England"],
  telephone: "+44-20-3598-2318",
  email: "contact@gipl-services.co.uk",
  url: siteUrl,
  priceRange: "\u00a3\u00a3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
