/** @type {import('next').NextConfig} */
import { resolve } from 'path';


const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@context': resolve(process.cwd(), 'app/context'),
      '@components': resolve(process.cwd(), 'app/components'),
    };
    return config;
  },
};

export default nextConfig;