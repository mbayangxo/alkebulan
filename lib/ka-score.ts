export interface KaProfile {
  // Step 1 — Business Identity
  has_registered_name: boolean;
  has_tax_id: boolean;
  has_business_bank: boolean;
  has_documented_address: boolean;

  // Step 2 — Operating History
  months_operating: number; // 0 | 3 | 12 | 24 | 60 | 120

  // Step 3 — Revenue
  monthly_revenue_usd: number; // 0 | 100 | 500 | 2000 | 10000

  // Step 4 — Assets & Resources
  has_inventory: boolean;
  has_equipment: boolean;
  has_premises: boolean;
  has_verified_suppliers: boolean;

  // Step 5 — Network
  has_repeat_customers: boolean;
  has_buyer_relationships: boolean;
  is_in_cooperative: boolean;
}

export const KA_PROFILE_DEFAULTS: KaProfile = {
  has_registered_name: false,
  has_tax_id: false,
  has_business_bank: false,
  has_documented_address: false,
  months_operating: 0,
  monthly_revenue_usd: 0,
  has_inventory: false,
  has_equipment: false,
  has_premises: false,
  has_verified_suppliers: false,
  has_repeat_customers: false,
  has_buyer_relationships: false,
  is_in_cooperative: false,
};

export interface KaBreakdown {
  identity: { score: number; max: number; label: string };
  history:  { score: number; max: number; label: string };
  revenue:  { score: number; max: number; label: string };
  assets:   { score: number; max: number; label: string };
  network:  { score: number; max: number; label: string };
}

export interface KaLevel {
  name: string;
  min: number;
  max: number;
  tagline: string;
  meaning: string;
  color: string;
  unlocks: string[];
}

export const KA_LEVELS: KaLevel[] = [
  {
    name: "Ka Seed",
    min: 0,
    max: 19,
    tagline: "Your business life force is awakening.",
    meaning: "Every business starts here. Your Ka is taking shape.",
    color: "#9B8B75",
    unlocks: [
      "Full platform access — path builder, industry intelligence",
      "54-country opportunity database",
      "Business gap analysis for your country",
    ],
  },
  {
    name: "Ka Rising",
    min: 20,
    max: 39,
    tagline: "Your roots are taking hold.",
    meaning: "You are operating. Your Ka is growing with each step you take.",
    color: "#B04510",
    unlocks: [
      "Everything in Ka Seed",
      "Microfinance partner introductions",
      "Supplier discovery in your country",
      "Business health assessment reports",
    ],
  },
  {
    name: "Ka Building",
    min: 40,
    max: 59,
    tagline: "Your business has a foundation.",
    meaning: "You have history, assets, and customers. Your Ka can be seen.",
    color: "#E05A18",
    unlocks: [
      "Everything in Ka Rising",
      "Trade network access — verified buyers and sellers",
      "Tender eligibility screening",
      "Bulk supplier terms and introductions",
      "B2B trade matching",
    ],
  },
  {
    name: "Ka Established",
    min: 60,
    max: 79,
    tagline: "You are recognized and traceable.",
    meaning: "Your business record exists. Institutions can see you. Your Ka is strong.",
    color: "#0B7A56",
    unlocks: [
      "Everything in Ka Building",
      "Bank loan application support",
      "Formal credit bureau referral (where available)",
      "Export readiness assessment",
      "Letter of business standing from Kebu",
    ],
  },
  {
    name: "Ka Trusted",
    min: 80,
    max: 100,
    tagline: "Your word is your bond. Your record speaks.",
    meaning: "You are verified and credit-worthy. Your Ka is at full strength.",
    color: "#E05A18",
    unlocks: [
      "Everything in Ka Established",
      "Priority partner lender introductions",
      "Verified supplier badge on the trade network",
      "International buyer access",
      "AfCFTA cross-border trade facilitation",
      "Kebu Trusted seal — visible to all buyers and partners",
    ],
  },
];

export interface KaResult {
  total: number;
  level: KaLevel;
  next_level: KaLevel | null;
  points_to_next: number;
  breakdown: KaBreakdown;
}

export function calculateKaScore(p: KaProfile): KaResult {
  // ── Identity (max 30) ──────────────────────────────────────────────────────
  let identity = 0;
  if (p.has_registered_name)    identity += 10;
  if (p.has_tax_id)             identity += 8;
  if (p.has_business_bank)      identity += 7;
  if (p.has_documented_address) identity += 5;

  // ── Operating History (max 20) ─────────────────────────────────────────────
  let history = 0;
  if      (p.months_operating >= 120) history = 20;
  else if (p.months_operating >= 60)  history = 17;
  else if (p.months_operating >= 24)  history = 13;
  else if (p.months_operating >= 12)  history = 8;
  else if (p.months_operating >= 3)   history = 4;

  // ── Revenue (max 25) ───────────────────────────────────────────────────────
  let revenue = 0;
  if      (p.monthly_revenue_usd >= 10000) revenue = 25;
  else if (p.monthly_revenue_usd >= 2000)  revenue = 20;
  else if (p.monthly_revenue_usd >= 500)   revenue = 15;
  else if (p.monthly_revenue_usd >= 100)   revenue = 10;
  else if (p.monthly_revenue_usd >= 1)     revenue = 5;

  // ── Assets (max 15) ────────────────────────────────────────────────────────
  let assets = 0;
  if (p.has_inventory)         assets += 3;
  if (p.has_equipment)         assets += 3;
  if (p.has_premises)          assets += 4;
  if (p.has_verified_suppliers) assets += 5;

  // ── Network (max 10) ──────────────────────────────────────────────────────
  let network = 0;
  if (p.has_repeat_customers)    network += 3;
  if (p.has_buyer_relationships) network += 3;
  if (p.is_in_cooperative)       network += 4;

  const total = Math.min(100, identity + history + revenue + assets + network);

  const level = KA_LEVELS.find(l => total >= l.min && total <= l.max) ?? KA_LEVELS[0];
  const currentIdx = KA_LEVELS.indexOf(level);
  const next_level = currentIdx < KA_LEVELS.length - 1 ? KA_LEVELS[currentIdx + 1] : null;
  const points_to_next = next_level ? next_level.min - total : 0;

  return {
    total,
    level,
    next_level,
    points_to_next,
    breakdown: {
      identity: { score: identity, max: 30, label: "Business Identity" },
      history:  { score: history,  max: 20, label: "Operating History" },
      revenue:  { score: revenue,  max: 25, label: "Revenue Track Record" },
      assets:   { score: assets,   max: 15, label: "Assets & Resources" },
      network:  { score: network,  max: 10, label: "Network & Relationships" },
    },
  };
}

export function loadKaProfile(): KaProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem("kebu_ka_profile");
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function saveKaProfile(profile: KaProfile) {
  if (typeof window === "undefined") return;
  localStorage.setItem("kebu_ka_profile", JSON.stringify(profile));
}
