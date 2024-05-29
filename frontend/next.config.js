/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
const withTM = require('next-transpile-modules')(['hb-gsp']);
module.exports = withTM(nextConfig);
module.exports = nextConfig
