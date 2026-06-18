import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the placeholder hero photo (images.unsplash.com). Remove once
    // real property photography is hosted, or add additional patterns for
    // wherever final images are served from (e.g. Vercel Blob, S3, a CMS).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
