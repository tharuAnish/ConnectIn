/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb", // Set desired value here
    },
  },
  images: {
    domains: ["img.clerk.com"], // Add the allowed domain here
  },
}

export default nextConfig
