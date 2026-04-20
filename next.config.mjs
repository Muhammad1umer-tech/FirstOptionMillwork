/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.0.20'],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;