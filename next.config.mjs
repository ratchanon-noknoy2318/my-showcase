/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure `basePath` and `assetPrefix` for GitHub Pages.
  // The repo name is 'resume'.
  basePath: '/resume',
  assetPrefix: '/resume/',
  // Since we are using `next export`, we must disable image optimization.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;