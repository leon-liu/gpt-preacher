/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'www.superbuzz.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
