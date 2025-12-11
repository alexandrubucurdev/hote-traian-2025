import { MetadataRoute } from "next";
import { rooms } from "@/lib/data/rooms";

const DOMAIN_URL = "https://www.hotelultraian.ro";

export default function sitemap(): MetadataRoute.Sitemap {
     // 1. Paginile statice principale
     const staticRoutes = [
          "",
          "/camere",
          "/galerie",
          "/despre",
          "/locatie",
          "/contact",
          "/termeni",
          "/actionari",
     ].map((route) => ({
          url: `${DOMAIN_URL}${route}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: route === "" ? 1 : 0.8,
     }));

     // 2. Paginile dinamice pentru fiecare cameră
     const roomRoutes = rooms.map((room) => ({
          url: `${DOMAIN_URL}/camere/${room.id}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.9,
     }));

     return [...staticRoutes, ...roomRoutes];
}
