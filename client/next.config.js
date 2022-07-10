/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: false,
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
