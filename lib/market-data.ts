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

// In-memory store — replace with Supabase before production
const listings = new Map<string, MarketListing>();

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

export function getAllListings(): MarketListing[] {
  return Array.from(listings.values()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getListing(id: string): MarketListing | undefined {
  return listings.get(id);
}

export function createListing(data: Omit<MarketListing, "id" | "publishedAt">): MarketListing {
  const id = `mkt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const listing: MarketListing = {
    ...data,
    id,
    publishedAt: new Date().toISOString(),
  };
  listings.set(id, listing);
  return listing;
}
