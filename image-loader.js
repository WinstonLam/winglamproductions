// image-loader.js

// For root deployment, we don't need to prepend any basePath.
// The 'src' from next/image will already be root-relative (e.g., '/LogoDark.png').
export default function customImageLoader({ src, width, quality }) {
    // Simply return the src with query parameters.
    // No basePath concatenation.
    return `${src}?w=${width}&q=${quality || 75}`;
}