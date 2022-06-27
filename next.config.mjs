/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true
}

export default withContentlayer({ nextConfig })
