import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kebu — Africa is the Opportunity",
    short_name: "Kebu",
    description: "Africa's Opportunity Intelligence Network. Build businesses, find funding, export to the world.",
    start_url: "/build",
    display: "standalone",
    background_color: "#F0EFF8",
    theme_color: "#0F0D33",
    orientation: "portrait-primary",
    categories: ["business", "education", "finance"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
    shortcuts: [
      { name: "What can I build?", url: "/build", description: "Find businesses matched to your budget and country" },
      { name: "Find funding", url: "/dashboard", description: "Grants, loans, and tenders for Africa" },
      { name: "Country guide", url: "/map", description: "Business intelligence by country" },
    ],
  };
}
