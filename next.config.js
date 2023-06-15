/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/pdf/:path*",
        destination: "/public/pdf/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
