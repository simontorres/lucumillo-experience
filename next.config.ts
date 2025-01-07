import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/',
  publicRuntimeConfig: {
    basePath: '/',
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
