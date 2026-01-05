const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isProd && { output: 'export' }),
  basePath: isProd ? '/roofilmz' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

