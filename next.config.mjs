/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Configure `basePath` and `assetPrefix` for GitHub Pages.
  // The repo name is 'resume'.
  basePath: isProd ? '/resume' : undefined,
  assetPrefix: isProd ? '/resume/' : undefined,
  // Since we are using `next export`, we must disable image optimization.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;