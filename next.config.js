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
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/upload/**',
        minimumCacheTTL: 3153600
      },
    ],
  
  },
 
}


module.exports = nextConfig
