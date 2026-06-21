import { NextRequest } from "next/server";
import { storeDb } from "@/lib/store-data";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const site = storeDb.sites.get(slug);
  if (!site) {
    return Response.json({ error: "Site not found" }, { status: 404 });
  }
  return Response.json(site);
}
