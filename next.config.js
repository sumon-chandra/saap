/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            "files.edgestore.dev",
            "i.ibb.co"
        ]
    }
}

module.exports = nextConfig
