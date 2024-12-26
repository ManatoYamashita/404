import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['manapuraza.com'],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/404',
  assetPrefix: '/404/',
  trailingSlash: true,
};

export default nextConfig;
