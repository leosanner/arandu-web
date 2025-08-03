import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/user/login',
        destination: 'http://localhost:8080/login',
      },
    ];
  },
};

export default nextConfig;
