export type FeedCategory =
  | "Grant"
  | "Procurement"
  | "Policy"
  | "Accelerator"
  | "Trade"
  | "Finance"
  | "Network";

export interface FeedItem {
  id: string;
  date: string;
  category: FeedCategory;
  country: string;
  headline: string;
  summary: string;
  action: string;
  action_url?: string;
  amount?: string;
  deadline?: string;
  tags: string[];
  is_hot?: boolean;
}

export const FEED_ITEMS: FeedItem[] = [
  {
    id: "feed-001",
    date: "2026-06-15",
    category: "Grant",
    country: "Pan-Africa",
    headline: "Tony Elumelu Foundation opens 2026 applications",
    summary: "TEF is accepting applications for the 2026 entrepreneurship programme. $5,000 seed capital + 12 weeks training for 10,000 entrepreneurs. Open to all African nationalities including diaspora.",
    action: "Apply now",
    action_url: "https://www.tonyelumelufoundation.org/teep",
    amount: "$5,000",
    deadline: "2026-07-31",
    tags: ["Youth", "Pan-African", "Diaspora eligible"],
    is_hot: true,
  },
  {
    id: "feed-002",
    date: "2026-06-12",
    category: "Policy",
    country: "Senegal",
    headline: "Senegal launches 50bn CFA entrepreneur support fund",
    summary: "The Government of Senegal has announced a new 50 billion CFA fund under the Agenda 2050 plan to support SMEs in manufacturing, agriculture, and creative industries. Applications open to businesses registered in Senegal.",
    action: "Learn more",
    action_url: "https://www.der.sn",
    amount: "50bn CFA total",
    tags: ["Manufacturing", "Agriculture", "Senegal", "SME"],
    is_hot: true,
  },
  {
    id: "feed-003",
    date: "2026-06-10",
    category: "Procurement",
    country: "Ghana",
    headline: "Ghana PPA updates local content minimums for IT contracts",
    summary: "The Public Procurement Authority of Ghana has increased the minimum local content requirement for ICT service contracts from 30% to 50%. Government IT tenders above GH₵ 500,000 now require majority Ghanaian supplier participation.",
    action: "Register as supplier",
    action_url: "https://www.ppaghana.org",
    tags: ["Ghana", "Tech", "Procurement", "Local content"],
  },
  {
    id: "feed-004",
    date: "2026-06-08",
    category: "Finance",
    country: "Nigeria",
    headline: "BOI reduces interest rates for women entrepreneurs to 5%",
    summary: "Bank of Industry Nigeria has reduced the interest rate on women-owned business loans from 9% to 5% per annum. Loans of N500,000 to N50 million available. No collateral required for amounts under N5 million.",
    action: "Apply",
    action_url: "https://www.boi.ng",
    amount: "Up to N50M",
    tags: ["Women", "Nigeria", "Loan", "Finance"],
    is_hot: true,
  },
  {
    id: "feed-005",
    date: "2026-06-05",
    category: "Trade",
    country: "Pan-Africa",
    headline: "AfCFTA adds 8 new countries to preferential tariff schedules",
    summary: "The AfCFTA Secretariat has confirmed that 8 additional countries have ratified their tariff reduction schedules, bringing the total to 46 active member states. Exporters from Ethiopia, Sudan, and Libya can now access preferential rates.",
    action: "Check your tariff",
    tags: ["AfCFTA", "Export", "Trade", "Pan-African"],
  },
  {
    id: "feed-006",
    date: "2026-06-02",
    category: "Accelerator",
    country: "Rwanda",
    headline: "Rwanda opens applications for 2026 Presidential Entrepreneurship Initiative",
    summary: "Rwanda's Presidential Entrepreneurship Initiative is accepting applications from young entrepreneurs (18–35) across all East African Community countries. Winners receive RWF 5M grant + 6-month mentorship + RDB fast-track registration.",
    action: "Apply",
    amount: "RWF 5,000,000",
    deadline: "2026-08-15",
    tags: ["Rwanda", "Youth", "EAC", "Grant"],
  },
  {
    id: "feed-007",
    date: "2026-05-28",
    category: "Finance",
    country: "Morocco",
    headline: "Maroc PME launches 5bn MAD SME credit guarantee program",
    summary: "Maroc PME and Bank Al-Maghrib have launched a 5 billion MAD credit guarantee facility for SMEs in manufacturing, tourism, and green energy. The guarantee covers up to 80% of loan value, significantly reducing collateral requirements.",
    action: "Find participating banks",
    amount: "5bn MAD total facility",
    tags: ["Morocco", "Loan", "Manufacturing", "SME"],
  },
  {
    id: "feed-008",
    date: "2026-05-25",
    category: "Network",
    country: "Pan-Africa",
    headline: "AfDB AFAWA accelerates funding for 50,000 women entrepreneurs",
    summary: "The African Development Bank's Affirmative Finance Action for Women in Africa (AFAWA) program has expanded its target to 50,000 women entrepreneurs across 40 countries. Partner banks in 18 countries are now accepting applications.",
    action: "Find your bank",
    action_url: "https://www.afdb.org/en/topics-and-sectors/initiatives-partnerships/afawa",
    tags: ["Women", "Pan-African", "Loan", "Finance"],
    is_hot: true,
  },
  {
    id: "feed-009",
    date: "2026-05-20",
    category: "Procurement",
    country: "Kenya",
    headline: "Kenya opens e-procurement portal to diaspora-owned businesses",
    summary: "Kenya's Public Procurement Regulatory Authority has updated regulations to allow Kenyan diaspora-owned companies (with at least 51% Kenyan ownership) to bid on government contracts through the e-procurement portal.",
    action: "Register on PPIP",
    action_url: "https://ppip.go.ke",
    tags: ["Kenya", "Diaspora", "Procurement", "Government contract"],
  },
  {
    id: "feed-010",
    date: "2026-05-15",
    category: "Policy",
    country: "Nigeria",
    headline: "Nigeria's 2026 budget allocates N2.1 trillion to infrastructure procurement",
    summary: "Nigeria's 2026 appropriations bill includes N2.1 trillion for road infrastructure, N800bn for power sector procurement, and N400bn for digital infrastructure — all open to Nigerian-registered companies through BPP portal.",
    action: "View opportunities",
    action_url: "https://www.bpp.gov.ng",
    amount: "N2.1 trillion in procurement",
    tags: ["Nigeria", "Infrastructure", "Procurement", "Construction"],
  },
  {
    id: "feed-011",
    date: "2026-05-10",
    category: "Accelerator",
    country: "Pan-Africa",
    headline: "Seedstars Africa opens applications for 2026 cohort",
    summary: "Seedstars is looking for early-stage startups across Africa for its 2026 programme. Equity investment of $500K–$1M for selected companies. Focus on fintech, agri-tech, health, and climate sectors.",
    action: "Apply",
    amount: "$500K–$1M equity",
    deadline: "2026-09-01",
    tags: ["Startup", "Tech", "Equity", "Pan-African"],
  },
  {
    id: "feed-012",
    date: "2026-05-05",
    category: "Trade",
    country: "Ghana",
    headline: "Ghana \"Year of Return 2026\" — new diaspora investment incentives",
    summary: "Ghana's Investment Promotion Centre has launched a new package of incentives for diaspora investors: 5-year tax holidays for manufacturing investments, fast-track land title processing, and residency pathway for diaspora investors of $100K+.",
    action: "Learn more",
    tags: ["Ghana", "Diaspora", "Investment", "Manufacturing"],
  },
];

export function getFeedByCategory(category: FeedCategory): FeedItem[] {
  return FEED_ITEMS.filter((f) => f.category === category);
}

export function getFeedByCountry(country: string): FeedItem[] {
  return FEED_ITEMS.filter((f) => f.country === country || f.country === "Pan-Africa");
}

export function getHotItems(): FeedItem[] {
  return FEED_ITEMS.filter((f) => f.is_hot);
}
