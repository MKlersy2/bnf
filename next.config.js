/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     domains: ['https://multimedia-ext.bnf.fr', 'multimedia-ext.bnf.fr'],
//     loader: 'imgix',
//     path: '/',
//   },
//   env: {
//     HOSTNAME: 'https://sandbox.fleurdepapier.fr/bnf-bancsonores/',
//     HOST_FILES: 'https://sandbox.fleurdepapier.fr/bnf-bancsonores/',
//     ENV_URL: 'https://bnf.vercel.app/'
//   }
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
let baseConfig = {
  basePath: "",
  reactStrictMode: false,
  images: {
  domains: ['https://multimedia-ext.bnf.fr', 'multimedia-ext.bnf.fr'],
  loader: 'imgix',
  path: '/',
  },
  }
  const nextConfig = {
  ...baseConfig,
  env: {
  // Pour avoir accès au basePath depuis env
  basePath: baseConfig.basePath ? baseConfig.basePath : "",
  HOSTNAME: 'http://localhost:8888/',//https://sandbox.fleurdepapier.fr/bnf-bancsonores/
  HOST_FILES: 'http://localhost:8888/',//https://sandbox.fleurdepapier.fr/bnf-bancsonores/
  ENV_URL: '../'
  }
  }
  module.exports = nextConfig