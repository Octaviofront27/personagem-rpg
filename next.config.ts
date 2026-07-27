import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ha um package-lock.json solto em C:\Users\octav (fora deste projeto) que fazia o Next
  // inferir a raiz do workspace errada — fixamos explicitamente na raiz deste projeto.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
