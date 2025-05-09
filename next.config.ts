/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_REPO || 'winglamproductions';       //  ← your repo name
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  /* NEW — static export mode (replaces `next export`) */
  output: 'export',                         // :contentReference[oaicite:0]{index=0}

  /* GitHub Pages sits in a sub‑folder → prefix every asset */
  basePath: isProd ? `/${repo}` : '',
  // assetPrefix: isProd ? `/${repo}/` : '',   // final slash important

  /* App‑router + static export needs this for <Image/> */
  images: {
    loader: 'custom',         // Use a custom loader
    loaderFile: './image-loader.js', // Here's the file that exports the loader function
  },

  /* Optional but avoids 404s on folder links */
  trailingSlash: true,
};
