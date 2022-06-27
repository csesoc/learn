/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['imgur.com']
  }
}

export default withContentlayer({ nextConfig })