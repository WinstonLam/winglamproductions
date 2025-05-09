// image-loader.js
const isProd = process.env.NODE_ENV === 'production';
// Match the repoName logic from next.config.js
const repoName = process.env.NEXT_PUBLIC_REPO || 'winglamproductions';
const basePath = isProd ? `/${repoName}` : '';

export default function customImageLoader({ src, width, quality }) {
    // src will be like '/my-image.png'. We prepend the basePath.
    return `${basePath}${src}?w=${width}&q=${quality || 75}`;
}