/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  };
};

module.exports = nextConfig;
