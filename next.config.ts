import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/15-AÑOS' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/15-AÑOS' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // No procesar archivos en la carpeta API durante la exportación estática
  // Esto evita que Next.js intente procesar las rutas API como páginas dinámicas
};

export default nextConfig;
