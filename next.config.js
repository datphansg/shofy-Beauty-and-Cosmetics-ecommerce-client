const path = require('path'); // Import the 'path' module

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co','lh3.googleusercontent.com','res.cloudinary.com','media.sellycdn.net'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false , net: false, dns: false, child_process : false, tls: false
    }; //, net: false, dns: false, child_process : false, tls: false
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@assets'] = path.join(__dirname, 'public/assets');
    return config; // Ensure the config is returned after modification
  },
}

module.exports = nextConfig;
