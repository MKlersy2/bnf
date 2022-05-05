/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://sandbox.fleurdepapier.fr/', 'sandbox.fleurdepapier.fr'],
  },
  env: {
    HOSTNAME: 'https://sandbox.fleurdepapier.fr/bnf-bancsonores/'
  }
}

module.exports = nextConfig
