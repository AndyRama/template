/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const nextConfig = {}

module.exports = withContentlayer(nextConfig)

// next.config.js
module.exports = {
  // Other Next.js configurations...
  output: {
    // Set the output directory for the static export
    dir: 'out', // or any other directory name you prefer
  },
};
