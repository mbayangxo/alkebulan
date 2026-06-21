export interface SiteOffering {
  id: string;
  name: string;
  description: string;
  price?: string;
  unit?: string;
}

export interface StoreSite {
  slug: string;
  businessName: string;
  tagline: string;
  industry: "product" | "service" | "food" | "farm" | "professional";
  country: string;
  ownerName: string;
  location: string;
  heroHeadline: string;
  heroSubtext: string;
  aboutText: string;
  offerings: SiteOffering[];
  contactPhone?: string;
  contactEmail?: string;
  contactWhatsapp?: string;
  colorTheme: "forest" | "earth" | "ocean" | "flame" | "midnight";
  publishedAt: string;
}

export interface StoreOrder {
  id: string;
  siteSlug: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  items: Array<{
    offeringId: string;
    offeringName: string;
    quantity: number;
    priceAtOrder?: string;
  }>;
  notes?: string;
  paymentMethod: "flutterwave" | "wave" | "cash";
  status: "pending" | "confirmed" | "paid" | "fulfilled" | "cancelled";
  createdAt: string;
}

export const SITE_THEMES = {
  forest:   { bg: "#1B3A2B", text: "#F0E6C8", accent: "#C9A035", accentText: "#1B3A2B", card: "#243D2F", border: "#2D5040", muted: "#A89870" },
  earth:    { bg: "#3D2416", text: "#F5EDE0", accent: "#D4874A", accentText: "#FFFFFF", card: "#4A2E1A", border: "#5C3820", muted: "#B89070" },
  ocean:    { bg: "#0F2235", text: "#E4F2F8", accent: "#38B2CC", accentText: "#0F2235", card: "#162E45", border: "#1E3D5A", muted: "#7AAFC0" },
  flame:    { bg: "#1C0E08", text: "#F5E8DE", accent: "#E05A2B", accentText: "#FFFFFF", card: "#261410", border: "#381C14", muted: "#B07860" },
  midnight: { bg: "#0D1128", text: "#E4DEFF", accent: "#8B5CF6", accentText: "#FFFFFF", card: "#141830", border: "#1E2445", muted: "#7060A0" },
} as const;

// In-memory store — replace with Supabase / Postgres before production
const sites = new Map<string, StoreSite>();
const orders = new Map<string, StoreOrder[]>();

export const storeDb = {
  sites: {
    save: (site: StoreSite) => sites.set(site.slug, site),
    get: (slug: string): StoreSite | undefined => sites.get(slug),
    list: (): StoreSite[] => Array.from(sites.values()),
  },
  orders: {
    save: (order: StoreOrder) => {
      const existing = orders.get(order.siteSlug) || [];
      orders.set(order.siteSlug, [order, ...existing]);
    },
    list: (siteSlug: string): StoreOrder[] => orders.get(siteSlug) || [],
    updateStatus: (siteSlug: string, orderId: string, status: StoreOrder["status"]) => {
      const list = orders.get(siteSlug) || [];
      orders.set(siteSlug, list.map(o => o.id === orderId ? { ...o, status } : o));
    },
  },
};
