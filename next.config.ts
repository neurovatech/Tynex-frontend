import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler runs an extra Babel pass over every file — keep it for
  // production builds only so `next dev` compiles much faster.
  reactCompiler: process.env.NODE_ENV === "production",
  staticPageGenerationTimeout: 180,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@tanstack/react-query",
      "swiper",
      "react-hot-toast",
      "redux",
      "@reduxjs/toolkit",
    ],
  },
  images: {
    formats: ["image/webp"],
    qualities: [70, 75],
    minimumCacheTTL: 2592000, // 30 days
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "tynex.com.bd" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "dazzle.sgp1.cdn.digitaloceanspaces.com" },
      { protocol: "https", hostname: "dzl.sgp1.cdn.digitaloceanspaces.com" },
      { protocol: "https", hostname: "store.storeimages.cdn-apple.com" },
    ],
  },
};

export default nextConfig;
