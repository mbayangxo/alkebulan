export type MarketCategory =
  | "Fresh produce"
  | "Livestock"
  | "Grains & legumes"
  | "Processed food"
  | "Raw materials"
  | "Wholesale goods"
  | "Construction materials"
  | "Textiles & fabric"
  | "Chemicals & inputs"
  | "Energy & fuel";

export type PriceType = "fixed" | "negotiable" | "contact";

export interface MarketListing {
  id: string;
  sellerName: string;
  businessName?: string;
  category: MarketCategory;
  productName: string;
  description: string;
  unit: string;
  quantityAvailable: string;
  minOrderQuantity: string;
  pricePerUnit?: string;
  currency: string;
  priceType: PriceType;
  country: string;
  region?: string;
  contactWhatsapp?: string;
  contactPhone?: string;
  contactEmail?: string;
  availableUntil?: string;
  tags: string[];
  publishedAt: string;
}

export const MARKET_CATEGORIES: MarketCategory[] = [
  "Fresh produce",
  "Livestock",
  "Grains & legumes",
  "Processed food",
  "Raw materials",
  "Wholesale goods",
  "Construction materials",
  "Textiles & fabric",
  "Chemicals & inputs",
  "Energy & fuel",
];

export const UNITS = [
  "kg", "tonne", "g", "lb",
  "litre", "barrel",
  "crate", "bag", "bale", "sack", "pallet", "container",
  "unit", "piece", "roll", "bundle",
  "hectare", "acre",
];

export const CURRENCIES_BY_COUNTRY: Record<string, string> = {
  Nigeria: "NGN",
  Ghana: "GHS",
  Kenya: "KES",
  Rwanda: "RWF",
  "Côte d'Ivoire": "XOF",
  Senegal: "XOF",
  "South Africa": "ZAR",
  Ethiopia: "ETB",
  Tanzania: "TZS",
  Uganda: "UGX",
  Cameroon: "XAF",
  "DR Congo": "CDF",
  Mozambique: "MZN",
  Zambia: "ZMW",
  Zimbabwe: "ZWL",
  Egypt: "EGP",
  Morocco: "MAD",
  Tunisia: "TND",
};

// ── Supabase persistence layer ──────────────────────────────────────────────
// Requires: NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY env vars
// Falls back to in-memory if Supabase is not configured.
//
// Required Supabase SQL (run once in SQL editor):
// CREATE TABLE IF NOT EXISTS market_listings (
//   id TEXT PRIMARY KEY, seller_name TEXT NOT NULL, business_name TEXT,
//   category TEXT NOT NULL, product_name TEXT NOT NULL, description TEXT NOT NULL,
//   unit TEXT NOT NULL, quantity_available TEXT NOT NULL, min_order_quantity TEXT NOT NULL,
//   price_per_unit TEXT, currency TEXT NOT NULL, price_type TEXT NOT NULL,
//   country TEXT NOT NULL, region TEXT, contact_whatsapp TEXT, contact_phone TEXT,
//   contact_email TEXT, available_until TEXT, tags TEXT[] DEFAULT '{}',
//   published_at TIMESTAMPTZ DEFAULT NOW()
// );
// CREATE TABLE IF NOT EXISTS market_enquiries (
//   id TEXT PRIMARY KEY, listing_id TEXT NOT NULL, buyer_name TEXT NOT NULL,
//   buyer_phone TEXT NOT NULL, buyer_email TEXT, buyer_business TEXT,
//   quantity TEXT NOT NULL, unit TEXT NOT NULL, message TEXT,
//   status TEXT DEFAULT 'new', seller_reply TEXT,
//   created_at TIMESTAMPTZ DEFAULT NOW(), replied_at TIMESTAMPTZ
// );
// ALTER TABLE market_listings ENABLE ROW LEVEL SECURITY;
// ALTER TABLE market_enquiries ENABLE ROW LEVEL SECURITY;
// CREATE POLICY "public_read" ON market_listings FOR SELECT USING (true);
// CREATE POLICY "public_insert" ON market_listings FOR INSERT WITH CHECK (true);
// CREATE POLICY "public_enquiry_insert" ON market_enquiries FOR INSERT WITH CHECK (true);
// CREATE POLICY "public_enquiry_read" ON market_enquiries FOR SELECT USING (true);

import { createClient as createSupabaseClient } from "@supabase/supabase-js";

function getDB() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || url.includes("your-project")) return null;
  try {
    return createSupabaseClient(url, key, { auth: { persistSession: false } });
  } catch {
    return null;
  }
}

function rowToListing(row: Record<string, unknown>): MarketListing {
  return {
    id: String(row.id),
    sellerName: String(row.seller_name),
    businessName: row.business_name ? String(row.business_name) : undefined,
    category: row.category as MarketCategory,
    productName: String(row.product_name),
    description: String(row.description),
    unit: String(row.unit),
    quantityAvailable: String(row.quantity_available),
    minOrderQuantity: String(row.min_order_quantity),
    pricePerUnit: row.price_per_unit ? String(row.price_per_unit) : undefined,
    currency: String(row.currency),
    priceType: row.price_type as PriceType,
    country: String(row.country),
    region: row.region ? String(row.region) : undefined,
    contactWhatsapp: row.contact_whatsapp ? String(row.contact_whatsapp) : undefined,
    contactPhone: row.contact_phone ? String(row.contact_phone) : undefined,
    contactEmail: row.contact_email ? String(row.contact_email) : undefined,
    availableUntil: row.available_until ? String(row.available_until) : undefined,
    tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
    publishedAt: String(row.published_at),
  };
}

function rowToEnquiry(row: Record<string, unknown>): MarketEnquiry {
  return {
    id: String(row.id),
    listingId: String(row.listing_id),
    buyerName: String(row.buyer_name),
    buyerPhone: String(row.buyer_phone),
    buyerEmail: row.buyer_email ? String(row.buyer_email) : undefined,
    buyerBusiness: row.buyer_business ? String(row.buyer_business) : undefined,
    quantity: String(row.quantity),
    unit: String(row.unit),
    message: row.message ? String(row.message) : undefined,
    status: (row.status as EnquiryStatus) ?? "new",
    sellerReply: row.seller_reply ? String(row.seller_reply) : undefined,
    createdAt: String(row.created_at),
    repliedAt: row.replied_at ? String(row.replied_at) : undefined,
  };
}

// In-memory fallback store
const listings = new Map<string, MarketListing>();
const enquiries = new Map<string, MarketEnquiry[]>();

// Seed a handful of example listings so the page isn't empty on first visit
const SEED: MarketListing[] = [
  {
    id: "mkt-001",
    sellerName: "Kwame Asante",
    businessName: "Asante Farms",
    category: "Fresh produce",
    productName: "Fresh tomatoes",
    description: "Sun-grown plum tomatoes from our 12-acre farm in Ashanti Region. Harvested weekly. Good for processing, retail, and catering supply.",
    unit: "crate",
    quantityAvailable: "200",
    minOrderQuantity: "20",
    pricePerUnit: "45",
    currency: "GHS",
    priceType: "fixed",
    country: "Ghana",
    region: "Ashanti",
    contactWhatsapp: "+233244000001",
    tags: ["tomatoes", "fresh produce", "weekly harvest"],
    publishedAt: "2025-01-15T00:00:00Z",
  },
  {
    id: "mkt-002",
    sellerName: "Aisha Diallo",
    businessName: "Sahel Grain Co.",
    category: "Grains & legumes",
    productName: "White maize (shelled)",
    description: "Dried and cleaned white maize from smallholder cooperative in Tambacounda. 12% moisture, suitable for milling and animal feed. ANADER quality checked.",
    unit: "sack",
    quantityAvailable: "500",
    minOrderQuantity: "50",
    pricePerUnit: "22000",
    currency: "XOF",
    priceType: "negotiable",
    country: "Senegal",
    region: "Tambacounda",
    contactWhatsapp: "+221770000002",
    tags: ["maize", "grain", "milling", "animal feed", "cooperative"],
    publishedAt: "2025-01-20T00:00:00Z",
  },
  {
    id: "mkt-003",
    sellerName: "Samuel Okafor",
    businessName: "Lagos Wholesale Centre",
    category: "Wholesale goods",
    productName: "Assorted cosmetics — Nigerian brands",
    description: "Mixed pallets of cosmetics from Nigerian brands: CHI, Zaron, BBO, House of Tara. Full cartons and broken cases. Ideal for retailers and market traders across West Africa.",
    unit: "pallet",
    quantityAvailable: "30",
    minOrderQuantity: "1",
    pricePerUnit: "850000",
    currency: "NGN",
    priceType: "negotiable",
    country: "Nigeria",
    region: "Lagos",
    contactWhatsapp: "+234800000003",
    contactPhone: "+234800000003",
    tags: ["cosmetics", "beauty", "wholesale", "retail stock"],
    publishedAt: "2025-02-01T00:00:00Z",
  },
  {
    id: "mkt-004",
    sellerName: "Fatuma Wanjiku",
    businessName: "Rift Valley Dairy Co-op",
    category: "Processed food",
    productName: "Fresh whole milk",
    description: "Pasteurized whole milk from our collective of 40 dairy farmers in Nakuru County. Available daily. Supply 500L–5,000L per day. Cold chain delivery within Rift Valley.",
    unit: "litre",
    quantityAvailable: "3000",
    minOrderQuantity: "500",
    pricePerUnit: "65",
    currency: "KES",
    priceType: "fixed",
    country: "Kenya",
    region: "Nakuru",
    contactWhatsapp: "+254700000004",
    contactEmail: "riftvalleydairy@example.com",
    tags: ["milk", "dairy", "pasteurized", "cooperative", "cold chain"],
    publishedAt: "2025-02-10T00:00:00Z",
  },
  {
    id: "mkt-005",
    sellerName: "Jean-Pierre Habimana",
    businessName: "Kigali Building Supply",
    category: "Construction materials",
    productName: "Cement (Cimerwa — 50kg bags)",
    description: "Cimerwa brand cement, 50kg bags. Full truck loads of 400 bags minimum. We deliver within Kigali and to Northern Province. Price includes delivery in Kigali.",
    unit: "bag",
    quantityAvailable: "5000",
    minOrderQuantity: "400",
    pricePerUnit: "12500",
    currency: "RWF",
    priceType: "negotiable",
    country: "Rwanda",
    region: "Kigali",
    contactWhatsapp: "+250780000005",
    tags: ["cement", "construction", "bulk", "Cimerwa", "delivery"],
    publishedAt: "2025-02-15T00:00:00Z",
  },
];

for (const s of SEED) {
  listings.set(s.id, s);
}

export async function getAllListings(): Promise<MarketListing[]> {
  const db = getDB();
  if (db) {
    try {
      const { data, error } = await db
        .from("market_listings")
        .select("*")
        .order("published_at", { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map(r => rowToListing(r as Record<string, unknown>));
      }
    } catch { /* fall through to in-memory */ }
  }
  return Array.from(listings.values()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getListing(id: string): Promise<MarketListing | undefined> {
  const db = getDB();
  if (db) {
    try {
      const { data, error } = await db
        .from("market_listings")
        .select("*")
        .eq("id", id)
        .single();
      if (!error && data) return rowToListing(data as Record<string, unknown>);
    } catch { /* fall through */ }
  }
  return listings.get(id);
}

export async function createListing(data: Omit<MarketListing, "id" | "publishedAt">): Promise<MarketListing> {
  const id = `mkt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const listing: MarketListing = { ...data, id, publishedAt: new Date().toISOString() };
  const db = getDB();
  if (db) {
    try {
      await db.from("market_listings").insert({
        id: listing.id,
        seller_name: listing.sellerName,
        business_name: listing.businessName,
        category: listing.category,
        product_name: listing.productName,
        description: listing.description,
        unit: listing.unit,
        quantity_available: listing.quantityAvailable,
        min_order_quantity: listing.minOrderQuantity,
        price_per_unit: listing.pricePerUnit,
        currency: listing.currency,
        price_type: listing.priceType,
        country: listing.country,
        region: listing.region,
        contact_whatsapp: listing.contactWhatsapp,
        contact_phone: listing.contactPhone,
        contact_email: listing.contactEmail,
        available_until: listing.availableUntil,
        tags: listing.tags,
        published_at: listing.publishedAt,
      });
    } catch { /* fall through — still saved in-memory */ }
  }
  listings.set(id, listing);
  return listing;
}

// ── Enquiries ──────────────────────────────────────────────────────────────

export type EnquiryStatus = "new" | "read" | "responded" | "closed";

export interface MarketEnquiry {
  id: string;
  listingId: string;
  buyerName: string;
  buyerPhone: string;
  buyerEmail?: string;
  buyerBusiness?: string;
  quantity: string;
  unit: string;
  message?: string;
  status: EnquiryStatus;
  sellerReply?: string;
  createdAt: string;
  repliedAt?: string;
}

export async function getEnquiriesForListing(listingId: string): Promise<MarketEnquiry[]> {
  const db = getDB();
  if (db) {
    try {
      const { data, error } = await db
        .from("market_enquiries")
        .select("*")
        .eq("listing_id", listingId)
        .order("created_at", { ascending: false });
      if (!error && data) return data.map(r => rowToEnquiry(r as Record<string, unknown>));
    } catch { /* fall through */ }
  }
  return (enquiries.get(listingId) ?? []).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function createEnquiry(
  data: Omit<MarketEnquiry, "id" | "status" | "createdAt">
): Promise<MarketEnquiry> {
  const id = `enq-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const enquiry: MarketEnquiry = { ...data, id, status: "new", createdAt: new Date().toISOString() };
  const db = getDB();
  if (db) {
    try {
      await db.from("market_enquiries").insert({
        id: enquiry.id,
        listing_id: enquiry.listingId,
        buyer_name: enquiry.buyerName,
        buyer_phone: enquiry.buyerPhone,
        buyer_email: enquiry.buyerEmail,
        buyer_business: enquiry.buyerBusiness,
        quantity: enquiry.quantity,
        unit: enquiry.unit,
        message: enquiry.message,
        status: enquiry.status,
        created_at: enquiry.createdAt,
      });
    } catch { /* fall through */ }
  }
  const list = enquiries.get(data.listingId) ?? [];
  enquiries.set(data.listingId, [...list, enquiry]);
  return enquiry;
}

export async function updateEnquiry(
  listingId: string,
  enquiryId: string,
  patch: Partial<Pick<MarketEnquiry, "status" | "sellerReply" | "repliedAt">>
): Promise<MarketEnquiry | null> {
  const db = getDB();
  if (db) {
    try {
      const update: Record<string, unknown> = {};
      if (patch.status) update.status = patch.status;
      if (patch.sellerReply) update.seller_reply = patch.sellerReply;
      if (patch.repliedAt) update.replied_at = patch.repliedAt;
      await db.from("market_enquiries").update(update).eq("id", enquiryId).eq("listing_id", listingId);
    } catch { /* fall through */ }
  }
  const list = enquiries.get(listingId);
  if (!list) return null;
  const idx = list.findIndex(e => e.id === enquiryId);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...patch };
  return list[idx];
}
