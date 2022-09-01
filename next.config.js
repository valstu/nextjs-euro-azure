/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  experimental: { images: { allowFutureImage: true } },
  assetPrefix: isProd
    ? "https://nextjs-euro-dkh8g6eybgfsgpdd.z01.azurefd.net/"
    : undefined,
  images: {
    path: "https://nextjs-euro-dkh8g6eybgfsgpdd.z01.azurefd.net/_next/image",
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
