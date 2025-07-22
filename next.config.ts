// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',      // or e.g. 'cdn.example.com'
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
