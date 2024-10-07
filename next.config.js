/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'source.unsplash.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'github.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'images.pexels.com',
      port: '',
      pathname: '/**'
    }, {
      protocol: 'https',
      hostname: 'utfs.io',
      port: '',
      pathname: '/**'
    }]
  }
};
module.exports = nextConfig;