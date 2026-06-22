import { NextRequest, NextResponse } from "next/server";
import { getListing } from "@/lib/market-data";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const listing = await getListing(params.id);
  if (!listing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(listing);
}
