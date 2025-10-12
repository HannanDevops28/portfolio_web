/** @type {import('next').NextConfig} */
const nextConfig = {
   typescript: {
    // ✅ Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com", // optional, if you use Dribbble shots later
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // optional for portfolio-hosted images
      },
    ],
  },
};

module.exports = nextConfig;
