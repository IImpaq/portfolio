import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; script-src 'self' 'unsafe-inline' ${process.env.NEXT_PUBLIC_PLAUSIBLE_API}; connect-src 'self' ${process.env.NEXT_PUBLIC_PLAUSIBLE_API};`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
