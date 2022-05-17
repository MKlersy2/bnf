/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://multimedia-ext.bnf.fr', 'multimedia-ext.bnf.fr'],
    loader: 'imgix',
    path: '/',
  },
  env: {
    HOSTNAME: 'https://multimedia-ext.bnf.fr/bancs_sonores/',
    TESTURL: 'http://localhost:8888'
  }
}

module.exports = nextConfig
