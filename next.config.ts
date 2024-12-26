import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['manapuraza.com'],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
