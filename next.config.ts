import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      // The Cinematic Commercial System sales page is a static file in
      // /public; serve it at the clean /system URL.
      { source: "/system", destination: "/system.html" },
    ];
  },
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
