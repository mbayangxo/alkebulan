import { NextRequest, NextResponse } from "next/server";
import { getListing } from "@/lib/market-data";

export function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const listing = getListing(params.id);
  if (!listing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(listing);
}
