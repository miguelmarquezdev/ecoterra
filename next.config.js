/** @type {import('next').NextConfig} */
const nextConfig ={
  reactStrictMode:true,
  swcMinify:true,
  images:{
    formats:['image/avif', 'image/webp'],
    domains: ['app.enjoyperu.org']
  }
}

module.exports = nextConfig