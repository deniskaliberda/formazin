import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/leistungen/waermeschutz", destination: "/leistungen/energieberatung/waermeschutz", permanent: true }];
  },
};

export default nextConfig;
