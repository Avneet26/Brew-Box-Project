// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.nespresso.com'],  // add any other hostnames you need here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
