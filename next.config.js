/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
      '@/components': './components',
      '@/data': './data',
      '@/lib': './lib',
    }
    return config
  },
}

module.exports = nextConfig 