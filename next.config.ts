import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  basePath: '',
  publicRuntimeConfig: {
    basePath: '',
  },
  images: {
    unoptimized: true,
  }
};

export default withNextIntl(nextConfig);
