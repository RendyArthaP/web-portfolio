/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
    domains: ["s3.us-west-2.amazonaws.com", "https://res.cloudinary.com/"],
  },
};

module.exports = nextConfig;
