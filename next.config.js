const withNextIntl = require('next-intl/plugin')(
  // Specify the path to your i18n config
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextIntl(nextConfig);
