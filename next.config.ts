import type { NextConfig } from "next";
import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPlausibleProxy({
  customDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_API,
})(nextConfig);
