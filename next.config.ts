import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ecomtabil-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
