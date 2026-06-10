import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      // The standalone /studio index page was removed when Studio became a
      // section in the homepage flow. Send the old URL to that section so it
      // doesn't 404 (the per-brand /studio/[slug] pages are unaffected).
      {
        source: "/studio",
        destination: "/#studio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
