import { NextRequest } from "next/server";
import { storeDb, type StoreSite } from "@/lib/store-data";

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 40);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const base = toSlug(body.businessName || "my-business");
  const suffix = Math.random().toString(36).slice(2, 6);
  const slug = `${base}-${suffix}`;

  const site: StoreSite = {
    slug,
    businessName: body.businessName,
    tagline: body.tagline,
    industry: body.industry,
    country: body.country,
    ownerName: body.ownerName || "",
    location: body.location || body.country,
    heroHeadline: body.heroHeadline,
    heroSubtext: body.heroSubtext,
    aboutText: body.aboutText,
    offerings: body.offerings,
    contactPhone: body.contactPhone || "",
    contactEmail: body.contactEmail || "",
    contactWhatsapp: body.contactWhatsapp || "",
    colorTheme: body.colorTheme || "forest",
    publishedAt: new Date().toISOString(),
  };

  storeDb.sites.save(site);

  return Response.json({ success: true, slug, site });
}
