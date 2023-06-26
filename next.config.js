/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "s3.us-west-2.amazonaws.com",
      "https://res.cloudinary.com/",
      "https://wa.me/",
    ],
  },
};

module.exports = nextConfig;
