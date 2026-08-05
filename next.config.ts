import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * lib/photos.ts and lib/infrastructure.ts read `public/` via
   * fs.readdirSync(process.cwd()/public) to enumerate images. Next's file
   * tracer sees that and bundles the ENTIRE public/ folder (~270MB) into every
   * serverless function that imports them, blowing past Vercel's 250MB limit
   * (the "about" function was 270.9MB). Every route here is statically
   * prerendered, so those reads only happen at build time — no function needs
   * public/ at runtime (the CDN serves those assets). Exclude it from all
   * function traces so the bundles stay small.
   */
  outputFileTracingExcludes: {
    "/*": ["public/**/*"],
  },
};

export default nextConfig;
