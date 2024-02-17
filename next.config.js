/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

module.exports = nextConfig;
