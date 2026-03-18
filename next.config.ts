import type { NextConfig } from "next";
// @ts-ignore - next-pwa non ha tipi ufficiali per TS
const withPWA = require("next-pwa")({
  dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
      fallbacks: {
    document: "/offline",
      },
        runtimeCaching: [
{
      urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
              handler: "NetworkFirst",
              options: {
        cacheName: "supabase-cache",
                  expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 },
      },
},
          {
                urlPattern: /\/_next\/static\/.*/i,
                handler: "CacheFirst",
                options: {
        cacheName: "next-static",
                  expiration: { maxEntries: 500, maxAgeSeconds: 60 * 60 * 24 * 30 },
        },
},
  ],
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
{
        protocol: "https",
                  hostname: "*.supabase.co",
          },
    ],
          },
          };

export default withPWA(nextConfig);
