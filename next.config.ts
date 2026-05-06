import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // PostHog reverse proxy — bypasses ad-blockers and keeps the analytics
  // origin same-site. Mirrors the pattern used in Willow.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ];
  },
  // PostHog responses set their own Access-Control headers; we want to
  // skip Next.js's trailing-slash rewrite for this path.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
