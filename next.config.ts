/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Important for Docker
  images: {
    domains: ['https://avvdcjpgunzxqbvfbivf.supabase.co'], // Add your Supabase URL
  },
}

module.exports = nextConfig