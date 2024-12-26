import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['manapuraza.com'],
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'export',
  basePath: '/404',
  assetPrefix: '/404/',
  trailingSlash: true,
};

export default nextConfig;
