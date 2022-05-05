/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://multimedia-ext.bnf.fr', 'multimedia-ext.bnf.fr'],
  },
  env: {
    HOSTNAME: 'https://multimedia-ext.bnf.fr/bancs_sonores/'
  }
}

module.exports = nextConfig
