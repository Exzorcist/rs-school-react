/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist',
  typescript: {
    ignoreBuildErrors: false,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/page/1',
        permanent: false,
      },
      {
        source: '/page',
        destination: '/page/1',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
