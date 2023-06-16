/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/pdfs/:path*",
        destination: "/public/pdfs/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
