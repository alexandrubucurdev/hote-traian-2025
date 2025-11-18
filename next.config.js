/** @type {import('next').NextConfig} */
const nextConfig = {
     output: "export",
     trailingSlash: true, // Recomandat pentru static hosting

     images: {
          unoptimized: true, // Vital pentru static export
          domains: [],
     },

     // Aceasta este metoda standard pentru SVG-uri în Next.js
     webpack(config) {
          config.module.rules.push({
               test: /\.svg$/i,
               use: ["@svgr/webpack"],
          });

          return config;
     },
};

module.exports = nextConfig;
