import { NextRequest, NextResponse } from "next/server";
import { getListing, createEnquiry, getEnquiriesForListing, updateEnquiry } from "@/lib/market-data";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const listing = getListing(params.id);
  if (!listing) return NextResponse.json({ error: "Listing not found" }, { status: 404 });

  try {
    const body = await req.json();

    if (!body.buyerName?.trim()) return NextResponse.json({ error: "Name required" }, { status: 400 });
    if (!body.buyerPhone?.trim()) return NextResponse.json({ error: "Phone required" }, { status: 400 });
    if (!body.quantity?.trim()) return NextResponse.json({ error: "Quantity required" }, { status: 400 });

    const enquiry = createEnquiry({
      listingId: params.id,
      buyerName: String(body.buyerName).trim(),
      buyerPhone: String(body.buyerPhone).trim(),
      buyerEmail: body.buyerEmail ? String(body.buyerEmail).trim() : undefined,
      buyerBusiness: body.buyerBusiness ? String(body.buyerBusiness).trim() : undefined,
      quantity: String(body.quantity).trim(),
      unit: listing.unit,
      message: body.message ? String(body.message).trim() : undefined,
    });

    return NextResponse.json(enquiry, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const listing = getListing(params.id);
  if (!listing) return NextResponse.json({ error: "Listing not found" }, { status: 404 });
  const enquiries = getEnquiriesForListing(params.id);
  return NextResponse.json({ listing, enquiries });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    if (!body.enquiryId) return NextResponse.json({ error: "enquiryId required" }, { status: 400 });

    const updated = updateEnquiry(params.id, body.enquiryId, {
      status: body.status,
      sellerReply: body.sellerReply,
      repliedAt: body.sellerReply ? new Date().toISOString() : undefined,
    });

    if (!updated) return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
