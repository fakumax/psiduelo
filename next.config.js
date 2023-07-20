/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    // async rewrites() {
    //   return [
    //     {
    //       source: '/articles',
    //       destination: '/',
    //     },
    //   ];
    // },
  };
};

module.exports = nextConfig;
