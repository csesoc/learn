import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
export default withContentlayer({
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['imgur.com']
  }
})
