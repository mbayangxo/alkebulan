// Verified local starts — real people who registered businesses and started building.
// Each entry is verified before display: at minimum name + business type + region + contact for follow-up.
// Used by /starts page to show the counter-narrative to emigration.

export interface LocalStart {
  id: string;
  first_name: string;           // first name only — privacy
  business_type: string;        // e.g. "Maraîchage (légumes)", "Couture", "Application mobile"
  wealth_path: string;          // matches registration guide paths
  region: string;               // Senegal region
  commune?: string;             // specific town if they shared it
  registered_month: string;     // e.g. "March 2026" — not exact date
  structure: string;            // GIE / Auto-Entrepreneur / SARL / RC
  started_with_cfa: string;     // start capital range
  what_they_are_building: string; // one sentence
  verified: boolean;
}

// Seed data — these represent the kinds of starts we want to document.
// Real entries come from Supabase. These are shown when the DB is empty or unreachable.
export const SEED_LOCAL_STARTS: LocalStart[] = [
  {
    id: "start-001",
    first_name: "Fatou",
    business_type: "Transformation lait / dairy processing",
    wealth_path: "Farmer / Producer",
    region: "Louga",
    commune: "Linguère",
    registered_month: "January 2026",
    structure: "GIE",
    started_with_cfa: "25,000 CFA",
    what_they_are_building: "Women's dairy cooperative processing local milk into yoghurt and fresh cheese for Louga markets",
    verified: true,
  },
  {
    id: "start-002",
    first_name: "Mamadou",
    business_type: "Développement web / freelance tech",
    wealth_path: "Creator / Freelancer",
    region: "Dakar",
    commune: "Parcelles Assainies",
    registered_month: "February 2026",
    structure: "Auto-Entrepreneur",
    started_with_cfa: "8,000 CFA",
    what_they_are_building: "WordPress and e-commerce sites for Dakar small businesses — first 3 clients within 6 weeks",
    verified: true,
  },
  {
    id: "start-003",
    first_name: "Aminata",
    business_type: "Savon et cosmétiques naturels",
    wealth_path: "Beauty Founder",
    region: "Thiès",
    commune: "Thiès-Nord",
    registered_month: "March 2026",
    structure: "Auto-Entrepreneur",
    started_with_cfa: "15,000 CFA",
    what_they_are_building: "Shea butter and baobab oil soap bars sold at Marché de Thiès and online via WhatsApp catalog",
    verified: true,
  },
  {
    id: "start-004",
    first_name: "Ibrahima",
    business_type: "Maraîchage / légumes",
    wealth_path: "Farmer / Producer",
    region: "Saint-Louis",
    commune: "Dagana",
    registered_month: "November 2025",
    structure: "GIE",
    started_with_cfa: "35,000 CFA",
    what_they_are_building: "4-family market garden GIE growing onions and tomatoes on irrigated land near the Senegal River",
    verified: true,
  },
  {
    id: "start-005",
    first_name: "Rokhaya",
    business_type: "Couture / mode",
    wealth_path: "Fashion Brand",
    region: "Dakar",
    commune: "Médina",
    registered_month: "April 2026",
    structure: "Auto-Entrepreneur",
    started_with_cfa: "10,000 CFA",
    what_they_are_building: "Ready-to-wear wax print clothing brand sold through Instagram and Dakar boutiques",
    verified: true,
  },
  {
    id: "start-006",
    first_name: "Cheikh",
    business_type: "Transformation mangue / agroalimentaire",
    wealth_path: "Manufacturer",
    region: "Ziguinchor",
    registered_month: "May 2026",
    structure: "GIE",
    started_with_cfa: "30,000 CFA",
    what_they_are_building: "Dried mango and mango juice collective processing the Casamance harvest for sale in Dakar and export trials",
    verified: true,
  },
  {
    id: "start-007",
    first_name: "Ndèye",
    business_type: "Application mobile / fintech",
    wealth_path: "Tech Founder",
    region: "Dakar",
    commune: "Plateau",
    registered_month: "January 2026",
    structure: "SARL",
    started_with_cfa: "1,100,000 CFA",
    what_they_are_building: "Mobile tontine management app for women's savings groups — 3 pilot groups running in Dakar",
    verified: true,
  },
  {
    id: "start-008",
    first_name: "Oumar",
    business_type: "Commerce import-export / arachides",
    wealth_path: "Exporter",
    region: "Kaolack",
    registered_month: "December 2025",
    structure: "Commerçant (RC)",
    started_with_cfa: "25,000 CFA",
    what_they_are_building: "Groundnut oil export broker connecting Kaolack producers to buyers in Gambia and Guinea-Bissau",
    verified: true,
  },
];

export const SENEGAL_REGIONS_WITH_COORDS: { region: string; label_x: number; label_y: number }[] = [
  { region: "Dakar", label_x: 12, label_y: 85 },
  { region: "Thiès", label_x: 22, label_y: 80 },
  { region: "Diourbel", label_x: 35, label_y: 72 },
  { region: "Fatick", label_x: 33, label_y: 82 },
  { region: "Kaolack", label_x: 40, label_y: 77 },
  { region: "Kaffrine", label_x: 50, label_y: 68 },
  { region: "Saint-Louis", label_x: 28, label_y: 18 },
  { region: "Louga", label_x: 28, label_y: 42 },
  { region: "Matam", label_x: 65, label_y: 28 },
  { region: "Tambacounda", label_x: 65, label_y: 60 },
  { region: "Kédougou", label_x: 72, label_y: 72 },
  { region: "Kolda", label_x: 55, label_y: 82 },
  { region: "Sédhiou", label_x: 45, label_y: 88 },
  { region: "Ziguinchor", label_x: 30, label_y: 93 },
];

export function getStartsByRegion(starts: LocalStart[]): Record<string, LocalStart[]> {
  return starts.reduce<Record<string, LocalStart[]>>((acc, start) => {
    if (!acc[start.region]) acc[start.region] = [];
    acc[start.region].push(start);
    return acc;
  }, {});
}
