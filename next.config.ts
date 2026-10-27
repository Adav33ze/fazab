import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { inlineCss: true },
  images: { formats: ["image/webp"], minimumCacheTTL: 86400 },
};

export default nextConfig;
