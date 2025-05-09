// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '', // Explicitly empty or completely remove this line
  // assetPrefix: '', // Explicitly empty or completely remove this line
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

module.exports = nextConfig;