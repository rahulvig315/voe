/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/app/agoras/r/:realm',
                destination: '/app/agoras/realm/:realm',
                permanent: true,
            },
            {
                source: '/app',
                destination: '/app/dashboard',
                permanent: true,
            }
        ];
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {
            protocol: "http",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
