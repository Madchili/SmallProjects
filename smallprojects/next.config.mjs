import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': resolve(__dirname, 'app/components'),
      '@context': resolve(__dirname, 'app/context'),
    };
    return config;
  },
};

export default nextConfig;

