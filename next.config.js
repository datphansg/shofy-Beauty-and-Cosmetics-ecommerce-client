/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    protocol: 'https',
    domains: ['i.ibb.co','lh3.googleusercontent.com','res.cloudinary.com','media.sellycdn.net'],
  },
}

module.exports = nextConfig
