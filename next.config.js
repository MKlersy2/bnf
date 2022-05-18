/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['https://multimedia-ext.bnf.fr', 'multimedia-ext.bnf.fr'],
    loader: 'imgix',
    path: '/',
  },
  env: {
    HOSTNAME: 'https://sandbox.fleurdepapier.fr/bnf-bancsonores/',
    HOST_FILES: 'https://sandbox.fleurdepapier.fr/bnf-bancsonores/',
    ENV_URL: 'http://localhost:8888/'
  }
}

module.exports = nextConfig
