export type NetworkNeed =
  | "Co-founder"
  | "Investor"
  | "Customers"
  | "Supplier"
  | "Mentor"
  | "Partner"
  | "Team member"
  | "Diaspora connection"
  | "Export partner";

export interface NetworkProfile {
  id: string;
  name: string;
  initials: string;
  location: string;
  country: string;
  sector: string;
  headline: string;
  building: string;
  looking_for: NetworkNeed[];
  offering: string;
  stage: string;
  languages: string[];
  joined: string;
  tags: string[];
}

export const NETWORK_PROFILES: NetworkProfile[] = [
  {
    id: "net-001",
    name: "Aïssatou N.",
    initials: "AN",
    location: "Dakar, Senegal",
    country: "Senegal",
    sector: "Fashion & textiles",
    headline: "Building a pan-African fashion distribution platform",
    building: "An online wholesale marketplace connecting African fashion designers with boutique buyers across the continent. Currently active in Senegal, Côte d'Ivoire, and Ghana.",
    looking_for: ["Investor", "Export partner", "Customers"],
    offering: "Deep relationships with 200+ Dakar-based designers. Expertise in OHADA commercial law and AfCFTA trade compliance.",
    stage: "Growing",
    languages: ["French", "Wolof", "English"],
    joined: "2026-03-15",
    tags: ["Fashion", "Women", "AfCFTA", "Wholesale"],
  },
  {
    id: "net-002",
    name: "Emeka O.",
    initials: "EO",
    location: "Lagos, Nigeria",
    country: "Nigeria",
    sector: "Fintech",
    headline: "Fintech founder building credit infrastructure for market traders",
    building: "Credit scoring system for informal market traders using mobile money, airtime history, and supplier data. Currently in pilot with 500 traders in Lagos Island market.",
    looking_for: ["Co-founder", "Investor", "Mentor"],
    offering: "CTO / technical co-founder. 8 years engineering at GTBank and Flutterwave. Can build fast.",
    stage: "Early stage",
    languages: ["English", "Igbo", "Yoruba"],
    joined: "2026-04-01",
    tags: ["Fintech", "Credit", "Informal economy", "Nigeria"],
  },
  {
    id: "net-003",
    name: "Fatima A.",
    initials: "FA",
    location: "Casablanca, Morocco",
    country: "Morocco",
    sector: "Food processing",
    headline: "Argan oil processor looking for European and Gulf export partners",
    building: "Cold-pressed argan oil and cosmetic ingredient processing. EU organic certified. Currently exporting to France. Looking to expand to UK, Germany, and UAE.",
    looking_for: ["Export partner", "Diaspora connection", "Customers"],
    offering: "EU organic certified argan oil at competitive wholesale prices. Can handle custom labeling and private label for partners.",
    stage: "Established",
    languages: ["Arabic", "French", "English"],
    joined: "2026-02-20",
    tags: ["Food", "Export", "Women", "Organic", "Morocco"],
  },
  {
    id: "net-004",
    name: "Kwame A.",
    initials: "KA",
    location: "Accra, Ghana",
    country: "Ghana",
    sector: "Construction",
    headline: "Construction company looking for consortium partners for large tenders",
    building: "Mid-size building and fit-out contractor with 12-year track record. Seeking partners to form a consortium for government health infrastructure tenders in 2026.",
    looking_for: ["Partner", "Co-founder"],
    offering: "Established PPA Ghana supplier registration, performance bond capacity up to $500K, 45 skilled workers on roster.",
    stage: "Established",
    languages: ["English", "Twi", "Ga"],
    joined: "2026-05-10",
    tags: ["Construction", "Ghana", "Procurement", "Consortium"],
  },
  {
    id: "net-005",
    name: "Diane M.",
    initials: "DM",
    location: "London, UK",
    country: "Congo (DRC)",
    sector: "Creative economy",
    headline: "Congolese-British filmmaker building Africa's first streaming studio",
    building: "Production company creating original African stories for global streaming platforms. Based in London, filming primarily in DRC and Rwanda.",
    looking_for: ["Investor", "Co-founder", "Diaspora connection"],
    offering: "Network of 30+ African directors and writers. Distribution relationships with Netflix and Canal+. Expertise in diaspora-to-continent investment structures.",
    stage: "Early stage",
    languages: ["English", "French", "Lingala"],
    joined: "2026-04-22",
    tags: ["Creative economy", "Diaspora", "Media", "Film", "DRC"],
  },
  {
    id: "net-006",
    name: "Samuel K.",
    initials: "SK",
    location: "Nairobi, Kenya",
    country: "Kenya",
    sector: "Agriculture",
    headline: "Agri-logistics operator connecting smallholders to supermarkets",
    building: "Cold chain logistics and aggregation platform for smallholder farmers in Rift Valley. Currently serving 1,200 farmers, supplying Naivas and Carrefour Kenya.",
    looking_for: ["Investor", "Export partner", "Mentor"],
    offering: "Operational playbook for farmer aggregation. Can bring 1,200 farmer relationships to a partnership. Expertise in East African logistics and post-harvest handling.",
    stage: "Growing",
    languages: ["English", "Swahili", "Kikuyu"],
    joined: "2026-01-30",
    tags: ["Agriculture", "Logistics", "Kenya", "Cold chain", "Impact"],
  },
  {
    id: "net-007",
    name: "Nadia C.",
    initials: "NC",
    location: "Paris, France",
    country: "Senegal",
    sector: "Health",
    headline: "French-Senegalese doctor building telemedicine for rural Senegal",
    building: "Telemedicine platform connecting rural patients in Casamance with specialists in Dakar and diaspora doctors in France. 800 consultations completed.",
    looking_for: ["Investor", "Supplier", "Team member"],
    offering: "Medical licensing in both France and Senegal. Network of 40 diaspora doctors willing to consult. Grant funding expertise (EU Horizon, AFD).",
    stage: "Early stage",
    languages: ["French", "Wolof", "English"],
    joined: "2026-03-08",
    tags: ["Health", "Telemedicine", "Diaspora", "Women", "Senegal"],
  },
  {
    id: "net-008",
    name: "Idrissa B.",
    initials: "IB",
    location: "Bamako, Mali",
    country: "Mali",
    sector: "Renewable energy",
    headline: "Solar micro-grid developer seeking project finance partners",
    building: "Off-grid solar micro-grids for rural communities in southern Mali. 6 villages electrified. Seeking project finance for 20-village expansion.",
    looking_for: ["Investor", "Mentor", "Diaspora connection"],
    offering: "Proven project model with 3-year operating history. AfDB and USAID project development experience. Can mentor other solar developers.",
    stage: "Growing",
    languages: ["French", "Bambara", "English"],
    joined: "2026-05-01",
    tags: ["Energy", "Solar", "Climate", "Mali", "Rural"],
  },
];

export function getProfilesByNeed(need: NetworkNeed): NetworkProfile[] {
  return NETWORK_PROFILES.filter((p) => p.looking_for.includes(need));
}

export function getProfilesByCountry(country: string): NetworkProfile[] {
  return NETWORK_PROFILES.filter((p) => p.country === country);
}
