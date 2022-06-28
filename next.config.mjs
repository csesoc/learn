/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  // cursed cursed cursed cursed cursed cursed cursed
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['imgur.com']
  }
}

export default withContentlayer({ nextConfig })