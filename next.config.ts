import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'vietnam.tyme.com',
      },
      {
        hostname: 'robohash.org',
      },
    ],
  },
};

export default nextConfig;
