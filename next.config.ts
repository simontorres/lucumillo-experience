import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lucumillo-experience',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
