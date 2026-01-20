import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "192.180.3.86",
      "via.placeholder.com",
      "admin-boilerplate-lqny.onrender.com",
      "picsum.photos",
      "flagcdn.com",
      "dummyimage.com",
      "e314f619d45a.ngrok-free.app",
      "images.unsplash.com",
      "d2csf5wg03xttg.cloudfront.net",
      "brfeed.s3.amazonaws.com",
    ],
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
