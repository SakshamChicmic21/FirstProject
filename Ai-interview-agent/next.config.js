/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  // Disable Turbopack due to permission issues
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig
