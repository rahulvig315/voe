/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/r/:realm',
                destination: '/realm/:realm',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
