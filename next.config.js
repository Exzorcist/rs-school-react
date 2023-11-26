/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/page/1?limit=10',
        permanent: false,
      },
      {
        source: '/page',
        destination: '/page/1?limit=10',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
