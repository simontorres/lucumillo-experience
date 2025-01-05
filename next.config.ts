import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lucumillo-experience',
  publicRuntimeConfig: {
    basePath: '/lucumillo-experience',
  },
};

export default nextConfig;
