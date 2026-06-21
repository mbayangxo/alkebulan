// Real migration statistics for Senegal, sourced from IOM, UNHCR, and field research.
// Used by the "Build vs. Leave" comparison tool.
// Numbers are intentionally conservative — undercount deaths, overcount survival rates.

export interface MigrationRoute {
  name: string;
  destination: string;
  cost_cfa: string;
  cost_usd: string;
  death_rate: string;       // e.g. "1 in 25"
  death_context: string;    // brief explanation
  arrival_to_papers: string; // time to legal status
  arrival_to_stable_income: string;
  probability_stable_in_5y: string; // "~15%"
  what_happens_to_most: string;
  sources: string[];
}

export interface WealthPathLocal {
  path: string;             // "Farmer / Producer", "Tech Founder", etc.
  structure: string;        // "GIE", "Auto-Entrepreneur", "SARL"
  start_cost_cfa: string;
  start_cost_usd: string;
  first_income_timeline: string;
  loan_access: string;      // what they can access quickly
  realist_year1_cfa: string;
  realist_year2_cfa: string;
  realist_5year: string;
  key_programs: string[];   // real programs they can access
  risks: string[];
  register_link: string;
}

export interface CountryMigrationData {
  country: string;
  country_code: string;
  migration_routes: MigrationRoute[];
  local_wealth_paths: WealthPathLocal[];
  comparison_note: string;  // context for the comparison
}

export const MIGRATION_DATA: CountryMigrationData[] = [
  {
    country: "Senegal",
    country_code: "SN",
    comparison_note: "Senegal lost an estimated 8,000–12,000 people to the Atlantic and Mediterranean routes in 2023 alone. The fixer economy charges families more to send someone to Europe than it costs to start a registered business here.",
    migration_routes: [
      {
        name: "Atlantic Route (Canary Islands)",
        destination: "Spain (via Canary Islands)",
        cost_cfa: "600,000–1,500,000 CFA",
        cost_usd: "$1,000–$2,500",
        death_rate: "1 in 25 boats sinks or capsizes",
        death_context: "IOM recorded 2,571 deaths on the Atlantic route in 2023. The actual number is higher — most drownings go unrecorded. The route averages 10–14 days at sea in wooden pirogues built for fishing, not open ocean.",
        arrival_to_papers: "3–8 years, if regularization happens at all",
        arrival_to_stable_income: "5–12 years for undocumented migrants",
        probability_stable_in_5y: "~12% achieve stable legal employment within 5 years",
        what_happens_to_most: "Most spend 1–5 years in legal limbo, working cash-in-hand construction or seasonal agriculture. Many are deported. Some die waiting. A minority find stable work and send remittances — but earn minimum wage in Spain (~1,100 EUR/month), spend 60–70% on rent and food, and send home 100–200 EUR/month.",
        sources: ["IOM Missing Migrants Project 2023", "UNHCR Atlantic Route Monitoring 2023", "Caminando Fronteras NGO 2023"],
      },
      {
        name: "Libya-Italy Route",
        destination: "Italy (via Libya)",
        cost_cfa: "1,200,000–3,000,000 CFA",
        cost_usd: "$2,000–$5,000",
        death_rate: "1 in 7 people who enter Libya die or disappear before reaching Italy",
        death_context: "The Libya route passes through documented torture camps, forced labor, and extortion by militias. Of those who make it onto boats, ~1 in 40 die at sea. But the majority of deaths happen in Libya before embarkation.",
        arrival_to_papers: "4–10 years",
        arrival_to_stable_income: "6–15 years",
        probability_stable_in_5y: "~8% achieve stable legal employment within 5 years",
        what_happens_to_most: "Most Senegalese on this route pass through Libya where they face extortion, imprisonment, or forced labor. Italian arrivals face years in the asylum system with very low grant rates for Senegalese nationals (Senegal is classified as a 'safe country of origin' — most applications are denied).",
        sources: ["IOM Missing Migrants Project 2023", "MSF Libya detention reports 2022–2023", "Italian Interior Ministry asylum statistics 2023"],
      },
    ],
    local_wealth_paths: [
      {
        path: "Farmer / Producer",
        structure: "GIE (Groupement d'Intérêt Économique)",
        start_cost_cfa: "15,000–35,000 CFA",
        start_cost_usd: "$25–$58",
        first_income_timeline: "3–6 months (first harvest or first sale)",
        loan_access: "DER/FJ group loans up to 500,000 CFA within 3 months of GIE registration. BNDE agricultural credit up to 2M CFA for established GIEs.",
        realist_year1_cfa: "400,000–1,200,000 CFA net",
        realist_year2_cfa: "800,000–2,500,000 CFA net",
        realist_5year: "Established agricultural GIEs in Senegal (mango, onion, dairy, shea) average 2–8M CFA annual revenue by year 5, with members taking 400,000–1,500,000 CFA each.",
        key_programs: [
          "DER/FJ (Délégation Générale à l'Entrepreneuriat Rapide) — group loans to 500K CFA",
          "FONSIS agricultural financing",
          "BNDE credit for registered GIEs",
          "ProFarm / GIZ agri support programs",
        ],
        risks: ["Drought / rainfall failure (partially mitigated by irrigation access)", "Market price fluctuation", "Lack of cold storage (addressable)"],
        register_link: "/register/senegal#SN-GIE",
      },
      {
        path: "Creator / Freelancer",
        structure: "Auto-Entrepreneur",
        start_cost_cfa: "5,000–10,000 CFA",
        start_cost_usd: "$8–$17",
        first_income_timeline: "2–8 weeks (first client or commission)",
        loan_access: "DER/FJ individual grants up to 1M CFA. Access to JICA/AFD digital economy grants (NINEA required). Wave Business account day one.",
        realist_year1_cfa: "600,000–2,400,000 CFA",
        realist_year2_cfa: "1,200,000–4,000,000 CFA",
        realist_5year: "Established creators and digital freelancers in Dakar (video production, graphic design, music, software) earn 3–10M CFA/year. Remote clients (EU, US) pay in EUR/USD, dramatically increasing purchasing power.",
        key_programs: [
          "DER/FJ individual grants up to 1M CFA",
          "JICA/AFD digital economy grants (NINEA required)",
          "Dakar Digital Campus (incubation, 0 equity)",
          "Orange Money / Wave Business for digital payments",
        ],
        risks: ["Client acquisition (solvable with platforms like Afriworkers, Upwork)", "Internet costs", "Irregular income early on"],
        register_link: "/register/senegal#SN-AUTO",
      },
      {
        path: "Tech Founder",
        structure: "SARL or Auto-Entrepreneur (start Auto-Entrepreneur, upgrade later)",
        start_cost_cfa: "5,000–250,000 CFA to register + 1,000,000 CFA capital if SARL",
        start_cost_usd: "$8–$1,800",
        first_income_timeline: "1–6 months (first customer or grant)",
        loan_access: "TEF ($5,000 seed capital, annual application). FONSIS / BNDE tech financing. AfricaHack / WOFBI pitch competitions (Dakar). JICA, EU startup grants.",
        realist_year1_cfa: "500,000–5,000,000 CFA (highly variable)",
        realist_year2_cfa: "2,000,000–20,000,000 CFA",
        realist_5year: "Senegal's top 20 startups by year 5 have raised $500K–$5M and employed 20–100 people. Median tech startup after 5 years: 5M–15M CFA annual revenue, 5–20 employees.",
        key_programs: [
          "Tony Elumelu Foundation ($5,000 seed capital)",
          "Dakar Digital Campus (free incubation space)",
          "FONSIS / BNDE tech credit",
          "Diamniadio Tech City — priority office/lab access for registered tech SARLs",
        ],
        risks: ["Fundraising is slow in early stage", "Infrastructure (power, internet) adds costs", "Talent competition with diaspora salaries"],
        register_link: "/register/senegal#SN-SARL",
      },
      {
        path: "Manufacturer",
        structure: "GIE or SARL",
        start_cost_cfa: "35,000–250,000 CFA to register",
        start_cost_usd: "$58–$415",
        first_income_timeline: "3–9 months (production + first sales cycle)",
        loan_access: "BNDE manufacturing loans up to 10M CFA. Diamniadio Industrial City subsidized workshops. FONSIS for industrial projects above 50M CFA.",
        realist_year1_cfa: "800,000–3,000,000 CFA",
        realist_year2_cfa: "2,000,000–8,000,000 CFA",
        realist_5year: "Light manufacturing (food processing, soap, textile, construction materials) in Senegal: 5–25M CFA annual revenue by year 5. Export-oriented manufacturers earn significantly more.",
        key_programs: [
          "BNDE manufacturing credit",
          "Diamniadio Industrial City (subsidized factory space)",
          "APIX investment promotion support",
          "ARMP procurement registration (government contracts)",
        ],
        risks: ["Capital intensity", "Import competition for raw materials", "Power supply costs"],
        register_link: "/register/senegal#SN-GIE",
      },
      {
        path: "Exporter",
        structure: "SARL or Commerçant (Registre du Commerce)",
        start_cost_cfa: "20,000–250,000 CFA to register",
        start_cost_usd: "$33–$415",
        first_income_timeline: "4–12 months (first export shipment)",
        loan_access: "Trade finance via BNDE, Banque Atlantique. APIX export facilitation. AfCFTA tariff advantages for intra-Africa trade.",
        realist_year1_cfa: "1,000,000–5,000,000 CFA",
        realist_year2_cfa: "3,000,000–15,000,000 CFA",
        realist_5year: "Established exporters (mango, groundnut oil, dried fish, shea) in Senegal report 15–50M CFA annual turnover by year 5.",
        key_programs: [
          "APIX export support and market access",
          "AfCFTA Navigator (intra-Africa trade facilitation)",
          "SENEX (Senegalese Exporters Union) network",
          "EU-Senegal Partnership access programs",
        ],
        risks: ["International buyer relationships take time", "Certification costs (organic, fair trade)", "Currency fluctuation"],
        register_link: "/register/senegal#SN-RC",
      },
      {
        path: "Fashion Brand",
        structure: "Auto-Entrepreneur or GIE",
        start_cost_cfa: "5,000–35,000 CFA to register",
        start_cost_usd: "$8–$58",
        first_income_timeline: "2–8 weeks (first order or market stall)",
        loan_access: "DER/FJ individual and group grants. Artisan cooperative programs. Marché HLM / Colobane access for materials.",
        realist_year1_cfa: "500,000–2,000,000 CFA",
        realist_year2_cfa: "1,200,000–5,000,000 CFA",
        realist_5year: "Dakar's top independent fashion designers gross 5–20M CFA/year. Instagram and diaspora sales increasingly bypass traditional markets.",
        key_programs: [
          "DER/FJ artisan grants",
          "Dakar Fashion Week — exposure and buyer access",
          "Artisanat Sénégalais cooperative programs",
          "ADPME (Agence de Développement des PME) fashion incubation",
        ],
        risks: ["Intellectual property copying", "Seasonal demand", "Raw material costs (wax print, leather)"],
        register_link: "/register/senegal#SN-AUTO",
      },
      {
        path: "Beauty Founder",
        structure: "Auto-Entrepreneur or GIE",
        start_cost_cfa: "5,000–35,000 CFA to register",
        start_cost_usd: "$8–$58",
        first_income_timeline: "1–4 weeks (first clients or product sales)",
        loan_access: "DER/FJ individual grants. Women's solidarity groups (tontines). Microfinance via PAMECAS, ACEP.",
        realist_year1_cfa: "600,000–2,500,000 CFA",
        realist_year2_cfa: "1,500,000–6,000,000 CFA",
        realist_5year: "Natural beauty brands (shea-based, baobab oil, hibiscus) are Senegal's fastest-growing export category in the cosmetics sector. Established brands gross 5–30M CFA/year with EU export access.",
        key_programs: [
          "DER/FJ women's entrepreneurship track",
          "BNDE women's enterprise credit",
          "Teranga Lab (women's beauty incubator, Dakar)",
          "EU ACP market access for natural cosmetics",
        ],
        risks: ["Product certification for export (costly)", "Competition from international brands", "Cold chain for natural products"],
        register_link: "/register/senegal#SN-AUTO",
      },
    ],
  },
];

export function getMigrationData(countryCode: string): CountryMigrationData | undefined {
  return MIGRATION_DATA.find(d => d.country_code.toUpperCase() === countryCode.toUpperCase());
}

export function getLocalPath(countryCode: string, wealthPath: string): WealthPathLocal | undefined {
  return getMigrationData(countryCode)?.local_wealth_paths.find(p => p.path === wealthPath);
}
