import { NextRequest, NextResponse } from "next/server";
import { getAllListings, createListing, MARKET_CATEGORIES, UNITS } from "@/lib/market-data";
import type { MarketCategory, PriceType } from "@/lib/market-data";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const country = searchParams.get("country");
  const q = searchParams.get("q")?.toLowerCase();

  let listings = await getAllListings();

  if (category && MARKET_CATEGORIES.includes(category as MarketCategory)) {
    listings = listings.filter(l => l.category === category);
  }
  if (country) {
    listings = listings.filter(l => l.country.toLowerCase() === country.toLowerCase());
  }
  if (q) {
    listings = listings.filter(l =>
      l.productName.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.tags.some(t => t.toLowerCase().includes(q)) ||
      l.country.toLowerCase().includes(q) ||
      (l.region?.toLowerCase().includes(q) ?? false)
    );
  }

  return NextResponse.json(listings);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ["sellerName", "category", "productName", "description", "unit", "quantityAvailable", "minOrderQuantity", "currency", "priceType", "country"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    if (!MARKET_CATEGORIES.includes(body.category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }
    if (!UNITS.includes(body.unit)) {
      return NextResponse.json({ error: "Invalid unit" }, { status: 400 });
    }
    if (!["fixed", "negotiable", "contact"].includes(body.priceType)) {
      return NextResponse.json({ error: "Invalid priceType" }, { status: 400 });
    }
    if (!body.contactWhatsapp && !body.contactPhone && !body.contactEmail) {
      return NextResponse.json({ error: "At least one contact method required" }, { status: 400 });
    }

    const listing = await createListing({
      sellerName: String(body.sellerName).trim(),
      businessName: body.businessName ? String(body.businessName).trim() : undefined,
      category: body.category as MarketCategory,
      productName: String(body.productName).trim(),
      description: String(body.description).trim(),
      unit: String(body.unit),
      quantityAvailable: String(body.quantityAvailable).trim(),
      minOrderQuantity: String(body.minOrderQuantity).trim(),
      pricePerUnit: body.pricePerUnit ? String(body.pricePerUnit).trim() : undefined,
      currency: String(body.currency).trim(),
      priceType: body.priceType as PriceType,
      country: String(body.country).trim(),
      region: body.region ? String(body.region).trim() : undefined,
      contactWhatsapp: body.contactWhatsapp ? String(body.contactWhatsapp).trim() : undefined,
      contactPhone: body.contactPhone ? String(body.contactPhone).trim() : undefined,
      contactEmail: body.contactEmail ? String(body.contactEmail).trim() : undefined,
      availableUntil: body.availableUntil ? String(body.availableUntil) : undefined,
      tags: Array.isArray(body.tags) ? body.tags.map(String) : [],
    });

    return NextResponse.json(listing, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
