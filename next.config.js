/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const basePath='.'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
 
}


module.exports = nextConfig
