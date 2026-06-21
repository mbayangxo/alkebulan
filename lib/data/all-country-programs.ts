// Full 54-country African opportunity dataset
// Categories: Government procurement, Youth/women funds, Development banks, Donor grants, Startup/innovation

export interface CountryOpportunityProfile {
  country: string;
  flag: string;
  region: "West Africa" | "East Africa" | "North Africa" | "Southern Africa" | "Central Africa";
  population: string;
  key_sectors: string[];
  procurement_portal?: string;
  procurement_note: string;
  youth_women_funds: ProgramEntry[];
  development_bank_programs: ProgramEntry[];
  donor_grants: ProgramEntry[];
  startup_innovation: ProgramEntry[];
  key_agencies: string[];
  the_opportunity: string; // one-sentence friend voice
}

export interface ProgramEligibility {
  age_min?: number;
  age_max?: number;
  gender?: "all" | "women";
  citizenship?: string;
  diaspora_ok?: boolean;
  stages?: Array<"idea" | "early" | "growing" | "established">;
  sectors?: string[];
}

export interface ProgramEntry {
  name: string;
  what: string;
  for_who: string;
  amount?: string;
  apply_at?: string;
  indigenous_note?: string;
  eligibility?: ProgramEligibility;
}

export const ALL_COUNTRY_PROGRAMS: CountryOpportunityProfile[] = [
  // ── WEST AFRICA ──────────────────────────────────────────────────────────

  {
    country: "Nigeria",
    flag: "🇳🇬",
    region: "West Africa",
    population: "220M",
    key_sectors: ["Fintech", "Agriculture", "Oil & gas services", "Manufacturing", "Creative economy", "Construction"],
    procurement_portal: "publicprocurement.gov.ng",
    procurement_note: "Federal tenders on procurementgateway.gov.ng — state-level portals vary. Bureau of Public Procurement (BPP) oversees all federal contracts.",
    youth_women_funds: [
      { name: "Nigeria Youth Investment Fund (NYIF)", what: "Federal fund for youth entrepreneurs aged 18–35", for_who: "Nigerian nationals 18–35", amount: "₦250,000–₦25,000,000", apply_at: "nyif.gov.ng" },
      { name: "Government Enterprise & Empowerment Programme (GEEP)", what: "Zero-interest loans for market traders, farmers, artisans (TraderMoni, MarketMoni, FarmerMoni)", for_who: "Nigerian micro-entrepreneurs", amount: "₦10,000–₦100,000", apply_at: "envelopedevt.gov.ng" },
      { name: "Youth Entrepreneurship Investment Bank (YEIB)", what: "AfDB $100M facility — Equity Investment Fund, Ecosystem Development Fund, and Credit Guarantee for youth/women-led businesses. Being fully rolled out 2025–2026.", for_who: "Indigenous Nigerian youth and women entrepreneurs", amount: "₦500,000–₦50,000,000", indigenous_note: "Specifically for indigenous Nigerian-blooded entrepreneurs — not open to foreign nationals" },
      { name: "Women Entrepreneurship Finance Initiative (We-Fi)", what: "Access to finance and markets for women-owned SMEs through partner banks", for_who: "Women-owned indigenous Nigerian businesses", apply_at: "Through BOI and partner banks" },
    ],
    development_bank_programs: [
      { name: "BOI — Bank of Industry", what: "Development finance for SMEs — also has women-specific facility at concessional rates with flexible repayment", for_who: "Indigenous Nigerian businesses", amount: "₦1M–₦5B", apply_at: "boi.ng" },
      { name: "DBN FINCLUDE (2025)", what: "World Bank $500M facility approved December 2025 — expands DBN capacity to reach more MSMEs with longer-term, lower-cost loans", for_who: "Nigerian MSMEs via DBN partner banks", apply_at: "dbn.gov.ng" },
      { name: "CBN Anchor Borrowers Programme", what: "Agricultural loans at 9% subsidized rate through commercial banks", for_who: "Indigenous Nigerian farmers", amount: "₦500,000–₦10,000,000" },
      { name: "NIRSAL — Agricultural Credit Guarantee", what: "Makes banks give agricultural loans by providing the guarantee", for_who: "Nigerian agribusinesses", apply_at: "nirsal.com" },
      { name: "SMEDAN SME Support + Free Registration", what: "CAC-SMEDAN partnership registered 250,000 micro-businesses for free in late 2025 — being a registered business unlocks all other programs", for_who: "Nigerian micro-entrepreneurs", apply_at: "smedan.gov.ng" },
    ],
    donor_grants: [
      { name: "Tony Elumelu Foundation (TEF)", what: "$5,000 non-dilutive grant + mentorship — open to all Africans of African descent", for_who: "African entrepreneurs", amount: "$5,000 USD", apply_at: "tefconnect.com" },
      { name: "USAID West Africa Trade & Investment Hub", what: "Matching grants and trade facilitation for Nigerian exporters", for_who: "Nigerian exporters", apply_at: "watradehub.com" },
    ],
    startup_innovation: [
      { name: "NITDA Tech Startup Programme", what: "Technical and financial support for Nigerian tech companies", for_who: "Indigenous Nigerian tech startups", apply_at: "nitda.gov.ng" },
      { name: "Lagos State Employment Trust Fund", what: "Interest-free loans for Lagos-based entrepreneurs", for_who: "Lagos residents", amount: "₦1M–₦10M", apply_at: "lsetf.ng" },
      { name: "CcHUB (Co-Creation Hub)", what: "Nigeria's leading tech accelerator — Lagos and Abuja", for_who: "Tech founders", apply_at: "cchubnigeria.com" },
    ],
    key_agencies: ["BOI", "NIRSAL", "SMEDAN", "NIPC", "NEPC", "BPP", "DBN"],
    the_opportunity: "YEIB + DBN FINCLUDE = two massive new capital pools being deployed right now. Free CAC registration means the cost of becoming formal has dropped to zero — register today and unlock everything.",
  },

  {
    country: "Ghana",
    flag: "🇬🇭",
    region: "West Africa",
    population: "33M",
    key_sectors: ["Cocoa processing", "Gold & mining services", "Tech", "Agriculture", "Tourism"],
    procurement_portal: "ppaghana.org",
    procurement_note: "Ghana Tender Portal at tenders.gov.gh — all government contracts published. PPA oversees procurement.",
    youth_women_funds: [
      { name: "YouStart Initiative (World Bank)", what: "World Bank-funded youth enterprise grants + training. Targets 50,000+ youth, 50% women priority. Competitive business start-up grants.", for_who: "Indigenous Ghanaian youth 18–40", amount: "GHS 10,000–50,000", apply_at: "gea.gov.gh", indigenous_note: "Indigenous Ghanaian nationals — 50% of grants target women" },
      { name: "GEA YEEP — Youth Entrepreneurship & Employment Program", what: "Ghana Enterprises Agency flagship program — grants, training, market linkages specifically for youth", for_who: "Ghanaian youth entrepreneurs", apply_at: "gea.gov.gh" },
      { name: "MASLOC (Microfinance & Small Loans Centre)", what: "Government microloan scheme at competitive rates — three credit schemes available", for_who: "Ghanaian entrepreneurs", amount: "GHS 2,000–50,000" },
      { name: "Women in Tech Accelerator Ghana 2026", what: "6-month program for women-led businesses using technology — grants + mini MBA + business support", for_who: "Ghanaian women entrepreneurs in tech", apply_at: "gea.gov.gh" },
    ],
    development_bank_programs: [
      { name: "Ghana Enterprises Agency (GEA)", what: "SME training, grants, and market linkages — the main government SME door", for_who: "Indigenous Ghanaian SMEs", apply_at: "gea.gov.gh" },
      { name: "AGROBank — Agricultural Finance", what: "Ghana's development bank for agribusiness — lower rates, longer tenors", for_who: "Ghanaian farmers and agribusinesses", apply_at: "adbghana.com" },
      { name: "Ghana GIIF Grants Round 3", what: "Ghana Incentive-Based Risk Sharing System for Agricultural Lending — up to $50K per company for agribusiness", for_who: "Ghanaian agribusinesses", amount: "$50,000" },
    ],
    donor_grants: [
      { name: "Mastercard Foundation — Ghana Programs", what: "Youth employment and education funding in partnership with Ghanaian institutions", for_who: "Ghanaian youth and educators" },
      { name: "USAID ADVANCE Programme", what: "Agricultural value chain support for cocoa, shea, and cashew businesses", for_who: "Ghanaian agribusinesses" },
    ],
    startup_innovation: [
      { name: "MEST Africa", what: "Ghana's leading tech accelerator — seed funding and 2-year incubation", for_who: "Tech founders (Ghana-focused)", apply_at: "meltwater.org/en/mest" },
      { name: "Ghana Free Zones Board", what: "Tax holidays for export-focused manufacturers", for_who: "Export-oriented Ghanaian companies", apply_at: "gfzb.com.gh" },
    ],
    key_agencies: ["GEA", "MASLOC", "AGROBank", "Ghana Free Zones Board", "PPA"],
    the_opportunity: "YouStart has GHS sitting in the account waiting to be deployed. Most eligible youth never apply because they don't know it exists. Cocoa processing, shea butter, cashews — Ghana sits on value chains that Europe profits from. Processing locally is the next billion-dollar opportunity.",
  },

  {
    country: "Senegal",
    flag: "🇸🇳",
    region: "West Africa",
    population: "17M",
    key_sectors: ["Agriculture", "Fisheries", "Tourism", "Mining (phosphates, gold)", "Digital economy", "Construction"],
    procurement_portal: "dcmp.gouv.sn",
    procurement_note: "All government contracts on DCMP portal — free registration, set alerts by sector. BSTP (bstp.sn) connects Senegalese businesses to subcontracts on large projects.",
    youth_women_funds: [
      { name: "DER/FJ — Délégation à l'Entrepreneuriat Rapide", what: "President's flagship youth and women fund — nano-credit to MSME financing", for_who: "Senegalese youth and women 18–40", amount: "CFA 300,000–10,000,000", apply_at: "der.sn", indigenous_note: "Senegalese nationals only — specifically designed for indigenous Senegalese" },
      { name: "PAVIE II (launched May 2025)", what: "AfDB + AFD €163.449M flagship — targets 92,633 jobs, 40% women, 70% youth aged 15–40. Focuses on entrepreneurship, food sovereignty, women/youth economic empowerment under Sénégal 2050 strategy. Implemented through DER/FJ, FONGIP, and FONSIS.", for_who: "Senegalese youth 15–40 and all economically active women", amount: "Through DER/FJ and FONGIP implementing partners", apply_at: "der.sn or fongip.sn", indigenous_note: "Indigenous Senegalese nationals. Largest youth/women fund ever launched in Senegal." },
      { name: "FONGIP — Guarantee Fund", what: "Government stands behind your bank loan — get loans banks normally refuse", for_who: "Senegalese SMEs without collateral", amount: "CFA 300,000–150,000,000 in guarantees", apply_at: "fongip.sn", indigenous_note: "Prioritizes Senegalese nationals" },
    ],
    development_bank_programs: [
      { name: "FONSIS — Sovereign Investment Fund", what: "Co-financing for large Senegalese infrastructure and business projects", for_who: "Senegalese companies", amount: "CFA 10M–500M", apply_at: "fonsis.org" },
      { name: "ADEPME — SME Development Agency", what: "Advisory, market connections, and grant access for Senegalese SMEs", for_who: "Senegalese SMEs", apply_at: "adepme.sn" },
      { name: "3FPT — Vocational Training Fund", what: "Free government-funded skills training in construction, solar, IT, agriculture", for_who: "Senegalese nationals", apply_at: "3fpt.sn" },
    ],
    donor_grants: [
      { name: "AFD (Agence Française de Développement) SME Lines", what: "Credit lines through Senegalese banks for SME investment", for_who: "Senegalese SMEs" },
      { name: "GIZ Employment Programme", what: "Technical training and entrepreneurship support in target sectors", for_who: "Senegalese youth" },
    ],
    startup_innovation: [
      { name: "Sénégal Numérique / DAPSE", what: "Government digital economy fund for Senegalese tech startups", for_who: "Senegalese digital entrepreneurs", apply_at: "senumerique.sn" },
      { name: "CTIC Dakar", what: "Senegal's main tech hub and accelerator", for_who: "Tech founders", apply_at: "cticdarkar.com" },
      { name: "BSTP Subcontracting Exchange", what: "Free registration connects Senegalese businesses to subcontracts on large foreign projects", for_who: "Any Senegalese business", apply_at: "bstp.sn" },
    ],
    key_agencies: ["DER/FJ", "FONGIP", "FONSIS", "ADEPME", "BSTP", "DCMP", "APIX"],
    the_opportunity: "Diamniadio industrial zone, BSTP subcontracts, and PAVIE II — three massive programs most Senegalese entrepreneurs don't know exist.",
  },

  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    region: "West Africa",
    population: "27M",
    key_sectors: ["Cocoa", "Coffee", "Cashews", "Construction", "Logistics", "Financial services"],
    procurement_portal: "marchespublics.ci",
    procurement_note: "All public tenders on marchespublics.ci — the world's largest cocoa producer's procurement system is substantial. CEPICI (cepici.gouv.ci) is the one-stop shop for business registration and investment facilitation.",
    youth_women_funds: [
      {
        name: "FAFCI — Fonds d'Appui aux Femmes de Côte d'Ivoire",
        what: "Government microcredit program for women entrepreneurs without material guarantees — the First Lady's initiative, active since 2012",
        for_who: "Ivorian women entrepreneurs",
        amount: "CFA 100,000–5,000,000",
        indigenous_note: "Ivorian nationality required",
        eligibility: { gender: "women", citizenship: "Ivorian", stages: ["idea", "early", "growing"] },
      },
      {
        name: "AGIR pour les Jeunes (UNACOOPEC)",
        what: "State-backed microcredit for youth 18–40 seeking to develop revenue-generating activities — 10.5% annual rate with 6-month repayment deferral option",
        for_who: "Ivorian youth 18–40 with a business project",
        amount: "CFA 500,000–10,000,000",
        apply_at: "unacoopec.com",
        eligibility: { age_min: 18, age_max: 40, citizenship: "Ivorian", stages: ["idea", "early", "growing"] },
      },
      {
        name: "CI-PME Startup & Women Programme",
        what: "Côte d'Ivoire PME agency customized support program for startups created by young people and women — training, mentoring, and market linkages",
        for_who: "Youth-led and women-led Ivorian SMEs",
        apply_at: "cipme.ci",
        indigenous_note: "Ivorian-registered businesses prioritized",
        eligibility: { citizenship: "Ivorian", stages: ["early", "growing"] },
      },
      {
        name: "ONUDI Fonds d'Appui à l'Entrepreneuriat des Jeunes",
        what: "UNIDO-managed youth entrepreneurship support fund targeting job creation in productive sectors including agri-processing and manufacturing",
        for_who: "Ivorian youth entrepreneurs in productive sectors",
        apply_at: "onudi.ci",
        eligibility: { age_max: 35, stages: ["idea", "early"] },
      },
    ],
    development_bank_programs: [
      {
        name: "BOAD — West African Development Bank",
        what: "Finances large infrastructure and SME projects across the UEMOA zone — credit lines through partner banks for Ivorian SMEs",
        for_who: "Ivorian businesses in agriculture, manufacturing, services",
        amount: "CFA 50M–5B",
        apply_at: "boad.org",
      },
      {
        name: "AfDB Côte d'Ivoire Portfolio",
        what: "African Development Bank active portfolio includes agribusiness, infrastructure, and private sector financing — access through Ivorian financial intermediaries",
        for_who: "Ivorian private sector companies",
        apply_at: "afdb.org",
      },
      {
        name: "FIN'Elle Women's Finance Program",
        what: "Inclusive financing model dedicated to women in Côte d'Ivoire — savings products, credit, and capacity-building specifically designed for women entrepreneurs",
        for_who: "Ivorian women entrepreneurs",
        apply_at: "fin-elle.com",
        eligibility: { gender: "women", citizenship: "Ivorian" },
      },
    ],
    donor_grants: [
      {
        name: "Tony Elumelu Foundation (TEF) Programme",
        what: "$5,000 non-refundable seed capital + 12 weeks business training + mentorship — open to all Africans of African descent including diaspora",
        for_who: "Ivorian entrepreneurs with ideas or businesses under 5 years old",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
      {
        name: "EU–Côte d'Ivoire Cocoa & Cashew Value Chain Program",
        what: "EU-funded program supporting local processing of cocoa and cashews — grants and technical assistance for agro-processors",
        for_who: "Ivorian agribusiness companies and cooperatives",
      },
      {
        name: "AfDB Youth Entrepreneurship & Innovation Multi-Donor Trust Fund",
        what: "AfDB-managed grant fund supporting African youth entrepreneurs in green jobs, agribusiness, and digital sectors",
        for_who: "Ivorian youth entrepreneurs 18–35",
        amount: "Grants via implementing partners",
        apply_at: "afdb.org/yei-mdtf",
        eligibility: { age_max: 35, stages: ["idea", "early"] },
      },
    ],
    startup_innovation: [
      {
        name: "Abidjan Digital Hub (ADBN)",
        what: "French-speaking West Africa's growing tech hub — home to Orange Digital Center and multiple accelerators in Abidjan",
        for_who: "Tech startups",
        apply_at: "orangedigitalcenters.com",
      },
      {
        name: "Yamoussoukro Digital Economy Zone",
        what: "Special economic zone for digital businesses with reduced regulatory burden and tax incentives — part of the government's Smart Côte d'Ivoire 2025 strategy",
        for_who: "Tech and digital companies",
      },
      {
        name: "CEPICI One-Stop Shop",
        what: "Register a business in 24 hours — CEPICI fast-tracks registration, investment facilitation, and investor services for Ivorian and foreign investors",
        for_who: "Any entrepreneur registering in Côte d'Ivoire",
        apply_at: "cepici.gouv.ci",
      },
    ],
    key_agencies: ["CEPICI", "CI-PME", "AGEFOP", "BOAD", "FAFCI"],
    the_opportunity: "World's largest cocoa producer processing less than 40% locally — every cocoa and cashew processing plant built here captures value that currently leaves the country, and CI-PME plus FAFCI are actively funding entrepreneurs to make this happen.",
  },

  {
    country: "Cameroon",
    flag: "🇨🇲",
    region: "Central Africa",
    population: "28M",
    key_sectors: ["Agriculture (cocoa, coffee, palm oil)", "Timber", "Oil & gas services", "Construction", "Trade"],
    procurement_portal: "armp.cm",
    procurement_note: "Public contracts on ARMP Cameroon portal — French and English procurement.",
    youth_women_funds: [
      { name: "MINPMEESA Youth SME Fund", what: "Ministry of SMEs fund for youth-owned businesses", for_who: "Cameroonian youth" },
      { name: "MINJEC Youth Employment Programs", what: "Ministry of Youth employment and enterprise programs", for_who: "Cameroonian youth" },
    ],
    development_bank_programs: [
      { name: "CFC (Crédit Foncier du Cameroun)", what: "Real estate and construction loans for Cameroonians", for_who: "Cameroonian businesses and individuals" },
      { name: "BDEAC Regional Fund", what: "Central African development bank financing for regional SMEs", for_who: "Central African businesses" },
    ],
    donor_grants: [
      { name: "GIZ / German Development Support", what: "Agricultural and vocational training programs", for_who: "Cameroonian businesses and farmers" },
    ],
    startup_innovation: [
      { name: "Douala/Yaoundé Tech Ecosystem", what: "Growing French-speaking startup scene", for_who: "Tech founders" },
    ],
    key_agencies: ["APME", "MINPMEESA", "CFC"],
    the_opportunity: "Gateway between West and Central Africa — logistics, processing, and trade across CEMAC zone is wide open.",
  },

  {
    country: "Mali",
    flag: "🇲🇱",
    region: "West Africa",
    population: "22M",
    key_sectors: ["Gold mining services", "Agriculture (cotton, millet, sorghum)", "Livestock", "Construction"],
    procurement_portal: "dgmp.gouv.ml",
    procurement_note: "Government tenders on DGMP portal. UNGM (ungm.org) for UN system procurement — WFP, UNICEF, and UNDP all procure locally in Bamako.",
    youth_women_funds: [
      {
        name: "APEJ — Agence pour la Promotion de l'Emploi des Jeunes",
        what: "Government youth employment agency offering enterprise training, grants, and market linkages for young Malian entrepreneurs",
        for_who: "Malian youth 18–35",
        indigenous_note: "Malian nationals only",
        eligibility: { age_min: 18, age_max: 35, citizenship: "Malian", stages: ["idea", "early"] },
      },
      {
        name: "FARE — Fonds d'Appui à la Responsabilisation Économique des Femmes",
        what: "Government revolving microcredit fund for women entrepreneurs — one of West Africa's oldest women's funds",
        for_who: "Malian women entrepreneurs",
        amount: "CFA 50,000–2,000,000",
        indigenous_note: "Malian women only",
        eligibility: { gender: "women", citizenship: "Malian", stages: ["idea", "early"] },
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable seed capital + mentorship — open to all 54 African countries including Mali",
        for_who: "Malian entrepreneurs 18–35 with ideas or businesses under 5 years",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "BOAD — West African Development Bank",
        what: "Credit lines through Malian partner banks for SME investment in agriculture, manufacturing, and services",
        for_who: "Malian businesses",
        apply_at: "boad.org",
      },
      {
        name: "BMS-SA — Banque Malienne de Solidarité",
        what: "Mali's dedicated solidarity bank for agricultural loans and small enterprise finance at below-market rates",
        for_who: "Malian farmers and micro-entrepreneurs",
        amount: "CFA 100,000–5,000,000",
      },
      {
        name: "IsDB Mali Portfolio",
        what: "Islamic Development Bank active in Mali for agricultural development, infrastructure, and SME finance — Islamic finance products available",
        for_who: "Malian businesses",
        apply_at: "isdb.org",
      },
    ],
    donor_grants: [
      {
        name: "WFP Mali Local Procurement",
        what: "World Food Programme buys staple foods locally when available — food suppliers and processors can register as WFP vendors",
        for_who: "Malian food producers, processors, and traders",
        apply_at: "wfp.org/procurement",
      },
      {
        name: "AfDB Youth Entrepreneurship & Innovation Fund (YEI MDTF)",
        what: "AfDB multi-donor fund supporting youth-led businesses in agribusiness, digital, and green economy — open to Malian youth",
        for_who: "Malian youth entrepreneurs",
        apply_at: "afdb.org/yei-mdtf",
        eligibility: { age_max: 35, stages: ["idea", "early"] },
      },
      {
        name: "Sahel Alliance Resilience Fund",
        what: "Multi-donor (France, Germany, EU, World Bank) fund for Sahel agricultural resilience and SME development — active in Mali despite transition",
        for_who: "Malian farmers, agribusinesses, and service companies",
      },
    ],
    startup_innovation: [
      {
        name: "JOKKOLABS Bamako",
        what: "Co-working space and startup support hub in Bamako — connects Malian tech entrepreneurs to regional networks",
        for_who: "Tech founders",
        apply_at: "jokkolabs.net",
      },
      {
        name: "Orange Digital Center Bamako",
        what: "Free digital skills training, coding bootcamps, and startup support — open to all Malian youth",
        for_who: "Malian youth and tech founders",
        apply_at: "orangedigitalcenters.com",
      },
    ],
    key_agencies: ["APEJ", "ANPE", "BOAD", "BMS-SA", "DGMP"],
    the_opportunity: "Mali's gold sector services — catering, transport, environmental monitoring, and maintenance at gold mines are heavily dominated by foreign companies, and local businesses that register and get OHADA-compliant have a guaranteed market.",
  },

  {
    country: "Burkina Faso",
    flag: "🇧🇫",
    region: "West Africa",
    population: "22M",
    key_sectors: ["Gold mining services", "Cotton processing", "Agriculture", "Construction"],
    procurement_portal: "dgcmef.gov.bf",
    procurement_note: "Government procurement through DGCMEF. Mining companies have local procurement requirements. UN system (UNGM) procurement open via ungm.org.",
    youth_women_funds: [
      {
        name: "FAPE — Fonds d'Appui à la Promotion de l'Emploi",
        what: "Government fund supporting youth and women enterprise creation — grants, subsidized loans, and training for Burkinabè entrepreneurs",
        for_who: "Burkinabè youth and women entrepreneurs",
        indigenous_note: "Burkinabè nationals only",
        eligibility: { citizenship: "Burkinabè", stages: ["idea", "early", "growing"] },
      },
      {
        name: "FAARF — Fonds d'Appui aux Activités Rémunératrices des Femmes",
        what: "Government revolving microcredit fund specifically for women-owned microenterprises — one of Burkina's longest-running women's finance programs",
        for_who: "Burkinabè women entrepreneurs",
        amount: "CFA 50,000–2,000,000",
        indigenous_note: "Burkinabè women only",
        eligibility: { gender: "women", citizenship: "Burkinabè", stages: ["idea", "early"] },
      },
      {
        name: "AfDB PADEJ-MR Phase III (2025)",
        what: "AfDB €12.25M grant supporting rural youth employment through incubators — practical training in financial education, personalized coaching, and local technical support launched July 2025",
        for_who: "Burkinabè rural youth 15–35",
        amount: "Part of €13.62M total program",
        apply_at: "afdb.org",
        eligibility: { age_max: 35, stages: ["idea", "early"] },
      },
      {
        name: "AfDB Multisectoral Youth Resilience Project",
        what: "AfDB $39.2M loan for skills development and resilience — priority for women and youth in Burkina Faso despite security challenges",
        for_who: "Burkinabè youth and women",
        amount: "Part of $39.2M program",
        apply_at: "afdb.org",
        eligibility: { gender: "all", stages: ["idea", "early"] },
      },
    ],
    development_bank_programs: [
      {
        name: "BOAD — West African Development Bank",
        what: "Credit lines through Burkinabè partner banks for SME investment — Djoliba 2021-2025 strategic plan prioritizes sustainable transformation",
        for_who: "Burkinabè businesses",
        apply_at: "boad.org",
      },
      {
        name: "AfDB Boost Africa Initiative",
        what: "Equity and quasi-equity financing for Burkinabè innovative startups and high-growth SMEs — co-investment model with local partners",
        for_who: "Innovative Burkinabè SMEs and startups",
        apply_at: "afdb.org/boost-africa",
      },
    ],
    donor_grants: [
      {
        name: "WFP Burkina Faso Local Purchase",
        what: "WFP purchasing food and services locally — food processors, traders, and logistics companies can register as vendors",
        for_who: "Burkinabè food businesses and service providers",
        apply_at: "wfp.org/procurement",
      },
      {
        name: "Sahel Alliance Agricultural Fund",
        what: "Multi-donor Sahel development fund (EU, France, Germany) supporting agricultural SMEs and food processing in Burkina Faso",
        for_who: "Burkinabè agribusinesses and cooperatives",
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable grant + mentorship — open to Burkinabè entrepreneurs",
        for_who: "Burkinabè entrepreneurs with ideas or businesses under 5 years",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early"] },
      },
    ],
    startup_innovation: [
      {
        name: "Ouagadougou Tech Ecosystem (CIPMEN, YIRI)",
        what: "Growing startup scene in Ouagadougou — CIPMEN incubator and YIRI hub supporting Burkinabè tech entrepreneurs despite security challenges",
        for_who: "Tech founders",
      },
      {
        name: "Orange Digital Center Ouagadougou",
        what: "Free coding bootcamps, digital skills, and startup support for Burkinabè youth",
        for_who: "Youth and tech founders",
        apply_at: "orangedigitalcenters.com",
      },
    ],
    key_agencies: ["CEFORE", "FAPE", "FAARF", "BOAD", "BUMIGEB (mining)"],
    the_opportunity: "Gold mining service contracts for catering, transport, and maintenance go largely to foreign companies — any Burkinabè business that is formally registered and can pass a mining company's supplier vetting has a guaranteed pipeline of work.",
  },

  {
    country: "Guinea",
    flag: "🇬🇳",
    region: "West Africa",
    population: "13M",
    key_sectors: ["Bauxite & alumina services", "Agriculture", "Construction", "Logistics"],
    procurement_portal: "marchespublics.gov.gn",
    procurement_note: "Government tenders on marchespublics.gov.gn. CBG (bauxite) and SMB-Winning local procurement are primary channels — both companies have local content offices.",
    youth_women_funds: [
      {
        name: "FAPA — Fonds d'Appui à la Promotion et à l'Autonomisation",
        what: "Government youth and women enterprise fund backed by donors — grants and subsidized loans for Guinean youth and women entrepreneurs",
        for_who: "Guinean youth 18–35 and women",
        indigenous_note: "Guinean nationals prioritized",
        eligibility: { age_max: 35, citizenship: "Guinean", stages: ["idea", "early", "growing"] },
      },
      {
        name: "ANPE Youth Enterprise Programs",
        what: "Guinean National Employment Agency enterprise training and micro-grant programs for unemployed youth",
        for_who: "Guinean unemployed youth",
        eligibility: { age_max: 40, citizenship: "Guinean", stages: ["idea", "early"] },
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable seed capital + mentorship — open to all African entrepreneurs including Guineans",
        for_who: "Guinean entrepreneurs with ideas or businesses under 5 years",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "IFC Guinea Private Sector Portfolio",
        what: "International Finance Corporation finances private sector in Guinea's mining services, agribusiness, and financial sector — equity and loans for growth companies",
        for_who: "Guinean private sector growth companies",
        apply_at: "ifc.org",
      },
      {
        name: "IsDB Guinea Portfolio",
        what: "Islamic Development Bank active in Guinea for agricultural development, vocational training, and SME finance",
        for_who: "Guinean businesses and farmers",
        apply_at: "isdb.org",
      },
      {
        name: "BOAD Regional Finance",
        what: "West African Development Bank financing for Guinea-based SMEs in manufacturing and agribusiness via Guinean partner banks",
        for_who: "Guinean businesses",
        apply_at: "boad.org",
      },
    ],
    donor_grants: [
      {
        name: "CBG/SAG Mining Community Development Fund",
        what: "Compagnie des Bauxites de Guinée and SMB-Winning — both required by law to fund local supplier development. Apply directly at their community relations offices in Boké and Conakry.",
        for_who: "Businesses in Boké, Kindia, and Conakry mining supply chains",
        indigenous_note: "Guinean-owned businesses prioritized for supplier development",
      },
      {
        name: "AfDB Jobs for Youth in Africa — Guinea",
        what: "AfDB multi-donor fund specifically targeting Guinean youth in agribusiness, mining services, and digital — grants via implementing partners",
        for_who: "Guinean youth entrepreneurs",
        apply_at: "afdb.org",
        eligibility: { age_max: 35, stages: ["idea", "early"] },
      },
      {
        name: "EU-Guinea Private Sector Support",
        what: "EU funds for Guinean agricultural value chains and SME development — priority for agro-processing and food security businesses",
        for_who: "Guinean agribusinesses and SMEs",
      },
    ],
    startup_innovation: [
      {
        name: "Orange Digital Center Conakry",
        what: "Free tech training, coding bootcamps, and startup mentoring in Conakry — accelerator for Guinean digital entrepreneurs",
        for_who: "Guinean youth and tech founders",
        apply_at: "orangedigitalcenters.com",
      },
      {
        name: "Hub Conakry Numérique",
        what: "Growing digital hub supporting Guinean tech startups — co-working, networking, and investor connections",
        for_who: "Tech startups",
      },
    ],
    key_agencies: ["AGUIPE", "FAPA", "ANPE", "CBG Local Content Office", "BOAD"],
    the_opportunity: "Guinea holds 30% of the world's bauxite reserves and is the world's largest bauxite exporter — the mining services supply chain (catering, transport, environmental, maintenance) is almost entirely foreign, and any formally registered Guinean company in these sectors is immediately in demand.",
  },

  {
    country: "Benin",
    flag: "🇧🇯",
    region: "West Africa",
    population: "13M",
    key_sectors: ["Agriculture (cotton, cashews)", "Trade & transit", "Tourism (Vodoun heritage)", "Digital economy"],
    procurement_portal: "armp.bj",
    procurement_note: "Public procurement through ARMP Bénin at armp.bj. Digital Benin and port logistics contracts are growing. World Bank WARDIP digital integration program brings $137M across Benin, Liberia, and Sierra Leone (approved March 2026).",
    youth_women_funds: [
      {
        name: "FNPEJ — Fonds National de Promotion de l'Entreprise et de l'Emploi des Jeunes",
        what: "Government fund for youth-owned businesses — loans at below-market rates with technical support for Beninese entrepreneurs under 40",
        for_who: "Beninese youth under 40",
        amount: "CFA 500,000–10,000,000",
        indigenous_note: "Beninese nationals only",
        eligibility: { age_max: 40, citizenship: "Beninese", stages: ["idea", "early", "growing"] },
      },
      {
        name: "FNMF Women's Microcredit Fund",
        what: "Government microcredit program for women entrepreneurs — part of Benin's social protection and women empowerment strategy",
        for_who: "Beninese women entrepreneurs",
        indigenous_note: "Beninese women only",
        eligibility: { gender: "women", citizenship: "Beninese", stages: ["idea", "early"] },
      },
      {
        name: "World Bank Adaptive Safety Nets — Youth Business Grants",
        what: "World Bank-supported program providing $500 micro-grants to urban youth plus basic business training — 65,000+ youth targeted across Benin",
        for_who: "Unemployed urban Beninese youth",
        amount: "$500 USD equivalent",
        eligibility: { stages: ["idea", "early"] },
      },
    ],
    development_bank_programs: [
      {
        name: "BOAD — West African Development Bank",
        what: "Credit lines through Beninese partner banks for agricultural processing, manufacturing, and services",
        for_who: "Beninese businesses",
        apply_at: "boad.org",
      },
      {
        name: "AfDB Benin Portfolio",
        what: "African Development Bank financing for infrastructure and private sector — local content opportunities in AfDB-financed projects",
        for_who: "Beninese companies",
        apply_at: "afdb.org",
      },
      {
        name: "APIEX Investment Facilitation",
        what: "Agence de Promotion des Investissements et des Exportations — one-stop shop for business registration and investment incentives in Benin",
        for_who: "Investors and Beninese businesses",
        apply_at: "apiex.bj",
      },
    ],
    donor_grants: [
      {
        name: "MCC Benin Compact",
        what: "Millennium Challenge Corporation infrastructure and agricultural programs — procurement opportunities for local businesses in road construction and agriculture",
        for_who: "Beninese businesses and cooperatives",
      },
      {
        name: "World Bank WARDIP Digital Program",
        what: "$137M World Bank initiative across Benin, Liberia, and Sierra Leone to accelerate digital economy — tech companies, ISPs, and digital service providers can participate",
        for_who: "Beninese tech and digital companies",
        amount: "Part of $137M regional program",
        apply_at: "worldbank.org",
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable seed capital — open to all 54 African countries including Benin",
        for_who: "Beninese entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
    ],
    startup_innovation: [
      {
        name: "Cotonou Digital Hub & Activspaces",
        what: "Growing startup ecosystem in Cotonou — accelerators, co-working spaces, and tech events connecting Beninese founders to regional investors",
        for_who: "Tech founders",
      },
      {
        name: "Digital Benin Initiative",
        what: "Government digital economy push under the Bénin Révélé strategy — tech procurement for e-government, digital ID, and smart city projects",
        for_who: "Digital businesses",
      },
      {
        name: "Orange Digital Center Cotonou",
        what: "Free digital skills training and startup support for Beninese youth",
        for_who: "Youth and tech entrepreneurs",
        apply_at: "orangedigitalcenters.com",
      },
    ],
    key_agencies: ["APIEX", "ANPME", "FNPEJ", "BOAD", "ARMP"],
    the_opportunity: "Cotonou port is the main transit gateway between Nigeria and landlocked francophone West Africa — logistics, warehousing, and customs brokerage businesses here serve a multi-billion dollar trade corridor, and very few local companies are formally structured to capture it.",
  },

  {
    country: "Togo",
    flag: "🇹🇬",
    region: "West Africa",
    population: "8M",
    key_sectors: ["Phosphate mining services", "Logistics (Port of Lomé)", "Agriculture", "Trade"],
    procurement_portal: "armp.tg",
    procurement_note: "Public procurement on ARMP Togo portal. Port of Lomé logistics contracts are a separate channel via Lomé Container Terminal.",
    youth_women_funds: [
      {
        name: "FAIEJ — Fonds d'Appui aux Initiatives Économiques des Jeunes",
        what: "Main government fund for young Togolese entrepreneurs — loans at below-market rates for business creation and expansion",
        for_who: "Togolese youth 18–40",
        amount: "CFA 500,000–5,000,000",
        apply_at: "faiej.tg",
        indigenous_note: "Togolese nationals only",
        eligibility: { age_min: 18, age_max: 40, citizenship: "Togolese", stages: ["idea", "early", "growing"] },
      },
      {
        name: "FNFI — Fonds National de la Finance Inclusive",
        what: "National inclusive finance fund — access to credit for women entrepreneurs and excluded populations through MFI partners",
        for_who: "Togolese women and low-income entrepreneurs",
        apply_at: "fnfi.tg",
        eligibility: { gender: "women", citizenship: "Togolese", stages: ["idea", "early"] },
      },
      {
        name: "ANPGF Women's Guarantee Fund",
        what: "National partial credit guarantee fund — stands behind bank loans for women who lack collateral, enabling access to commercial bank credit",
        for_who: "Togolese women business owners",
        apply_at: "anpgf.tg",
        eligibility: { gender: "women", stages: ["early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "BOAD — West African Development Bank",
        what: "Headquartered in Lomé — BOAD directly finances Togolese SME and agribusiness through partner banks. Priority sectors include agriculture and manufacturing.",
        for_who: "Togolese businesses",
        apply_at: "boad.org",
      },
      {
        name: "UTB — Union Togolaise de Banque",
        what: "Development-oriented bank with SME credit lines and agricultural finance programs for Togolese businesses",
        for_who: "Togolese SMEs",
      },
      {
        name: "AfDB Boost Africa Initiative",
        what: "AfDB equity and quasi-equity financing for innovative Togolese startups and high-growth companies",
        for_who: "Togolese startups and innovative SMEs",
        apply_at: "afdb.org/boost-africa",
      },
    ],
    donor_grants: [
      {
        name: "EU-Togo Private Sector Development Programme",
        what: "EU funds for Togolese agriculture, SME competitiveness, and trade facilitation — cashew, cotton, and food processing priority",
        for_who: "Togolese agribusinesses and SMEs",
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable seed capital — open to Togolese entrepreneurs of all backgrounds",
        for_who: "Togolese entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
    ],
    startup_innovation: [
      {
        name: "Lomé Digital Hub (WoeLab / Impact Hub Lomé)",
        what: "Togo's pioneer tech hub — WoeLab created Africa's first satellite, W.AFATE. Active co-working, mentoring, and startup competitions",
        for_who: "Tech founders",
        apply_at: "impacthubafrica.org",
      },
      {
        name: "Togo Digital Accelerator Program",
        what: "Government-supported digital acceleration under the Togo Digital 2025 strategy — supporting e-commerce, fintech, and agri-tech startups",
        for_who: "Togolese digital startups",
      },
    ],
    key_agencies: ["APIM (investment)", "FAIEJ", "FNFI", "BOAD", "ARMP"],
    the_opportunity: "Port of Lomé is the deepest port in West Africa and its main free trade zone handles trade for 7 landlocked countries — logistics, warehousing, and port services companies here serve a regional market worth billions.",
  },

  {
    country: "Sierra Leone",
    flag: "🇸🇱",
    region: "West Africa",
    population: "8M",
    key_sectors: ["Mineral services (iron ore, diamonds, rutile)", "Agriculture", "Fisheries", "Tourism (beaches)"],
    procurement_portal: "nppa.gov.sl",
    procurement_note: "Government procurement on NPPA Sierra Leone portal at nppa.gov.sl. World Bank WARDIP digital program ($137M across Benin, Liberia, Sierra Leone approved March 2026) opens major digital procurement.",
    youth_women_funds: [
      {
        name: "SLIEPA SME Support Program",
        what: "Sierra Leone Investment and Export Promotion Agency — SME advisory, market connections, and grant facilitation for Sierra Leonean entrepreneurs",
        for_who: "Sierra Leonean entrepreneurs",
        apply_at: "sliepa.org",
        eligibility: { citizenship: "Sierra Leonean", stages: ["early", "growing"] },
      },
      {
        name: "NASSIT SME Financing Scheme",
        what: "National Social Security and Insurance Trust pension fund — SME loans for registered Sierra Leonean businesses contributing to NASSIT",
        for_who: "Sierra Leonean businesses registered with NASSIT",
        apply_at: "nassit.org",
      },
      {
        name: "Youth Enterprise Fund (START Program)",
        what: "Government and donor-backed startup training and enterprise support targeting Sierra Leonean youth — business plan competitions and seed grants",
        for_who: "Sierra Leonean youth 18–35",
        eligibility: { age_max: 35, citizenship: "Sierra Leonean", stages: ["idea", "early"] },
      },
    ],
    development_bank_programs: [
      {
        name: "World Bank Sierra Leone Development Portfolio",
        what: "Major World Bank programs in agriculture, health, education, and infrastructure — significant local procurement for Sierra Leonean companies",
        for_who: "Sierra Leonean businesses",
        apply_at: "worldbank.org",
      },
      {
        name: "AfDB Sierra Leone Programs",
        what: "African Development Bank financing for agriculture, infrastructure, and private sector — local content requirements for all projects",
        for_who: "Sierra Leonean businesses",
        apply_at: "afdb.org",
      },
      {
        name: "Bank of Sierra Leone SME Lines",
        what: "Central bank credit lines to commercial banks for SME lending at reduced rates",
        for_who: "Sierra Leonean SMEs",
      },
    ],
    donor_grants: [
      {
        name: "Tony Elumelu Foundation (TEF)",
        what: "$5,000 non-refundable seed capital + mentorship — actively recruiting Sierra Leonean entrepreneurs",
        for_who: "Sierra Leonean entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
      {
        name: "USAID Sierra Leone Economic Growth",
        what: "USAID programs supporting agricultural value chains, trade, and private sector development in Sierra Leone",
        for_who: "Sierra Leonean agribusinesses and SMEs",
        apply_at: "usaid.gov/sierra-leone",
      },
      {
        name: "World Bank WARDIP Digital Integration Program",
        what: "$137M World Bank program across Benin, Liberia, and Sierra Leone — digital economy, broadband, and e-government procurement",
        for_who: "Sierra Leonean tech and digital companies",
        apply_at: "worldbank.org",
      },
    ],
    startup_innovation: [
      {
        name: "Transform Finance Sierra Leone",
        what: "Freetown-based financial inclusion and fintech hub — supporting Sierra Leonean startups in mobile money, savings, and digital lending",
        for_who: "Fintech founders",
      },
      {
        name: "Rethink Sierra Leone / Digital Jobs SL",
        what: "Tech skills and startup support for Sierra Leonean youth — coding, digital marketing, and freelancing programs",
        for_who: "Youth and digital entrepreneurs",
      },
    ],
    key_agencies: ["SLIEPA", "NASSIT", "NPPA", "NRA (revenue)", "Bank of Sierra Leone"],
    the_opportunity: "Diamond, iron ore, and rutile mining generate billions but local supplier development is minimal — a formally registered Sierra Leonean services company (catering, transport, environmental compliance) can immediately begin supplier accreditation with mining operators.",
  },

  {
    country: "Liberia",
    flag: "🇱🇷",
    region: "West Africa",
    population: "5M",
    key_sectors: ["Rubber processing", "Iron ore services", "Agriculture", "Timber (sustainable)"],
    procurement_portal: "ppcc.gov.lr",
    procurement_note: "Government procurement on PPCC portal. AfDB and World Bank project procurement open to Liberian companies. WARDIP digital program ($137M across Benin, Liberia, Sierra Leone, approved March 2026) creates new procurement opportunities.",
    youth_women_funds: [
      {
        name: "YEIB — Liberia Youth Entrepreneurship Investment Bank (AfDB, launched July 2025)",
        what: "Africa's first YEIB — officially launched July 22, 2025 by President Boakai and AfDB President Adesina. Three components: Early-Stage Equity Fund, Technical Assistance Fund, and Credit Guarantee Fund. Target: 30,000 youth businesses, 120,000 jobs, $500M in unlocked lending.",
        for_who: "Liberian youth 18–35",
        amount: "$17.8M initial capitalization (AfDB $15.9M + Korea Africa $0.7M + Government $1.2M in-kind)",
        apply_at: "moci.gov.lr",
        indigenous_note: "Liberian nationals — first-of-its-kind in Africa",
        eligibility: { age_min: 18, age_max: 35, citizenship: "Liberian", stages: ["idea", "early", "growing"] },
      },
      {
        name: "LACE — Liberia Agency for Community Empowerment",
        what: "Government agency providing youth and community enterprise grants, vocational training, and livelihood support",
        for_who: "Liberian youth and communities",
        eligibility: { citizenship: "Liberian", stages: ["idea", "early"] },
      },
      {
        name: "Innovation Bureau Liberia (YEIB-linked)",
        what: "Innovation labs, incubation spaces, hands-on training, workspace, and mentorship launched alongside YEIB in July 2025 to support young Liberian entrepreneurs",
        for_who: "Liberian youth entrepreneurs",
        apply_at: "moci.gov.lr",
        eligibility: { age_max: 35, citizenship: "Liberian", stages: ["idea", "early"] },
      },
    ],
    development_bank_programs: [
      {
        name: "AfDB Liberia Portfolio",
        what: "Active AfDB infrastructure and agribusiness projects — local content requirements open procurement to Liberian companies in construction, services, and supply",
        for_who: "Liberian businesses",
        apply_at: "afdb.org",
      },
      {
        name: "World Bank Liberia Portfolio",
        what: "World Bank active programs in health, education, and infrastructure — significant local procurement opportunities for registered Liberian businesses",
        for_who: "Liberian businesses",
        apply_at: "worldbank.org",
      },
    ],
    donor_grants: [
      {
        name: "USAID Liberia Economic Growth Program",
        what: "USAID supports agricultural value chains, trade facilitation, and private sector development — grants and technical assistance for Liberian businesses",
        for_who: "Liberian agribusinesses and SMEs",
        apply_at: "usaid.gov/liberia",
      },
      {
        name: "Tony Elumelu Foundation (TEF)",
        what: "$5,000 non-refundable seed capital — open to Liberian entrepreneurs",
        for_who: "Liberian entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
      {
        name: "World Bank WARDIP Digital Program",
        what: "$137M World Bank digital economy initiative across Benin, Liberia, and Sierra Leone — tech sector procurement and digital inclusion funding",
        for_who: "Liberian digital companies and tech entrepreneurs",
        apply_at: "worldbank.org",
      },
    ],
    startup_innovation: [
      {
        name: "iLab Liberia",
        what: "Monrovia's main tech hub and co-working space — incubator for Liberian digital entrepreneurs",
        for_who: "Tech founders",
        apply_at: "ilabliberia.org",
      },
      {
        name: "YEIB Innovation Bureau",
        what: "Newly established (July 2025) innovation labs providing research support, mentorship, and incubation for young Liberian business owners",
        for_who: "Young Liberian entrepreneurs",
        apply_at: "moci.gov.lr",
      },
    ],
    key_agencies: ["LIPA", "PPCC", "LACE", "YEIB", "Ministry of Commerce & Industry"],
    the_opportunity: "Liberia just launched Africa's first Youth Entrepreneurship Investment Bank — the window to be among the first 30,000 businesses funded at below-market rates is open right now.",
  },

  {
    country: "Guinea-Bissau",
    flag: "🇬🇼",
    region: "West Africa",
    population: "2M",
    key_sectors: ["Cashew processing", "Fisheries", "Agriculture"],
    procurement_note: "Government procurement limited — donor and UN procurement are main channels. UNGM (ungm.org) registration opens UN system procurement. WFP and FAO both procure locally.",
    youth_women_funds: [
      {
        name: "World Bank PDSS Social Development Project",
        what: "World Bank-funded social development with enterprise components — youth training, community grants, and livelihood support",
        for_who: "Bissau-Guinean youth and women",
        apply_at: "worldbank.org",
        eligibility: { stages: ["idea", "early"] },
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable seed capital — open to Bissau-Guinean entrepreneurs of African descent",
        for_who: "Bissau-Guinean entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
      {
        name: "BOAD UEMOA Women's Enterprise Finance",
        what: "West African Development Bank credit lines for women-owned SMEs in UEMOA zone including Guinea-Bissau",
        for_who: "Women-owned Bissau-Guinean businesses",
        apply_at: "boad.org",
        eligibility: { gender: "women", stages: ["early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "BOAD — West African Development Bank",
        what: "UEMOA zone development bank — credit lines through Bissau-Guinean partner banks for agribusiness and services",
        for_who: "Bissau-Guinean businesses",
        apply_at: "boad.org",
      },
      {
        name: "AfDB Guinea-Bissau Programs",
        what: "AfDB active in Guinea-Bissau for agriculture, fisheries, and infrastructure — local procurement for registered businesses",
        for_who: "Bissau-Guinean businesses",
        apply_at: "afdb.org",
      },
    ],
    donor_grants: [
      {
        name: "FAO Guinea-Bissau Agricultural Grants",
        what: "FAO procurement and grants for food production, fisheries management, and agricultural development",
        for_who: "Bissau-Guinean farmers and agribusinesses",
        apply_at: "ungm.org",
      },
      {
        name: "EU Fisheries Agreement Revenue",
        what: "EU pays Guinea-Bissau for fishing access — fisheries processing and value-addition businesses benefit from EU partnerships",
        for_who: "Bissau-Guinean fisheries businesses",
      },
    ],
    startup_innovation: [
      {
        name: "Bissau Digital Initiative",
        what: "Nascent digital economy — growing mobile money adoption and tech entrepreneurship in Bissau",
        for_who: "Local entrepreneurs",
      },
    ],
    key_agencies: ["CCIA-GB", "API-GB (investment)", "BOAD"],
    the_opportunity: "Guinea-Bissau is the world's 6th largest cashew producer yet exports 99% raw — a single processing facility transforms a commodity into premium branded products worth 3–5× more, and the raw material grows here with zero cost.",
  },

  {
    country: "Gambia",
    flag: "🇬🇲",
    region: "West Africa",
    population: "2.5M",
    key_sectors: ["Tourism", "Agriculture (groundnuts)", "Fisheries", "Remittances"],
    procurement_portal: "gppa.gm",
    procurement_note: "Government procurement on GPPA portal at gppa.gm. UN system procurement via UNGM.org open to Gambian-registered businesses.",
    youth_women_funds: [
      {
        name: "Youth Empowerment Project (YEP) — World Bank",
        what: "World Bank-backed youth enterprise, vocational training, and grants program targeting unemployed Gambian youth",
        for_who: "Gambian youth 18–35",
        apply_at: "worldbank.org",
        eligibility: { age_max: 35, citizenship: "Gambian", stages: ["idea", "early"] },
      },
      {
        name: "GIEPA SME Export Support",
        what: "Gambia Investment and Export Promotion Agency — SME grants, market linkages, and trade facilitation for Gambian exporters",
        for_who: "Gambian SMEs with export potential",
        apply_at: "giepa.gm",
        eligibility: { citizenship: "Gambian", stages: ["growing", "established"] },
      },
      {
        name: "NEDI — National Enterprise Development Initiative",
        what: "Government SME development fund providing grants and subsidized loans to Gambian micro and small enterprises",
        for_who: "Gambian micro and small entrepreneurs",
        eligibility: { citizenship: "Gambian", stages: ["idea", "early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "ECOWAS Bank for Investment and Development (EBID)",
        what: "Regional development bank providing credit lines through Gambian commercial banks for SME investment",
        for_who: "Gambian SMEs",
        apply_at: "ebid.int",
      },
      {
        name: "IsDB Gambia Portfolio",
        what: "Islamic Development Bank active in Gambia for agricultural development, education, and SME finance",
        for_who: "Gambian businesses and farmers",
        apply_at: "isdb.org",
      },
    ],
    donor_grants: [
      {
        name: "EU-Gambia Migration and Development Programme",
        what: "EU grants for Gambian businesses, remittance-linked investment, and diaspora entrepreneurship initiatives",
        for_who: "Gambian businesses and diaspora entrepreneurs",
        eligibility: { diaspora_ok: true },
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable seed capital — open to Gambian entrepreneurs including diaspora",
        for_who: "Gambian entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
      {
        name: "USAID Gambia Feed the Future",
        what: "Agricultural value chain development grants and technical assistance for Gambian agribusinesses and farmers",
        for_who: "Gambian farmers and agribusinesses",
      },
    ],
    startup_innovation: [
      {
        name: "Gambia Tech Hub / GamCode",
        what: "Small but growing digital ecosystem in Banjul — tech training, startup support, and connection to regional networks",
        for_who: "Tech founders",
      },
      {
        name: "Orange Digital Center Banjul",
        what: "Free digital skills training, coding bootcamps, and startup mentoring in Gambia",
        for_who: "Youth and tech entrepreneurs",
        apply_at: "orangedigitalcenters.com",
      },
    ],
    key_agencies: ["GIEPA", "GPPA", "NEDI", "GRA"],
    the_opportunity: "Diaspora remittances to Gambia are equivalent to nearly 30% of GDP — financial services, property management, agri-export, and tourism businesses that bridge the diaspora connection to home are dramatically under-served.",
  },

  {
    country: "Cabo Verde",
    flag: "🇨🇻",
    region: "West Africa",
    population: "600K",
    key_sectors: ["Tourism", "Blue economy (fisheries, shipping)", "Renewable energy", "Financial services"],
    procurement_portal: "portalcompras.gov.cv",
    procurement_note: "Small but well-run government at portalcompras.gov.cv. EU association agreement opens EU procurement markets to Cape Verdean businesses.",
    youth_women_funds: [
      {
        name: "IEFP — Instituto de Emprego e Formação Profissional",
        what: "Government vocational training and enterprise grant program for youth — subsidy for business creation and professional development",
        for_who: "Cape Verdean youth entrepreneurs",
        indigenous_note: "Cape Verdean nationals prioritized",
        eligibility: { citizenship: "Cape Verdean", stages: ["idea", "early"] },
      },
      {
        name: "Casa do Jovem Empreendedor (CJE)",
        what: "Government business incubator and enterprise support for young Cape Verdean entrepreneurs — training, mentoring, and seed funding",
        for_who: "Cape Verdean youth entrepreneurs",
        eligibility: { age_max: 40, citizenship: "Cape Verdean", stages: ["idea", "early"] },
      },
      {
        name: "TEF Entrepreneurship Programme",
        what: "$5,000 non-refundable seed capital — open to Cape Verdean entrepreneurs of African descent",
        for_who: "Cape Verdean entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "BCA — Banco Comercial do Atlântico SME Lines",
        what: "Cape Verde's largest commercial bank with SME credit lines backed by government guarantees — priority for tourism, renewable energy, and export businesses",
        for_who: "Cape Verdean SMEs",
        apply_at: "bca.cv",
      },
      {
        name: "AfDB Cape Verde Portfolio",
        what: "AfDB active in renewable energy, water, and private sector development — local content opportunities in AfDB-financed infrastructure",
        for_who: "Cape Verdean businesses",
        apply_at: "afdb.org",
      },
    ],
    donor_grants: [
      {
        name: "EU Atlantic Cooperation Special Status Grants",
        what: "Cape Verde has Special Partnership status with EU — access to EU funding for SME development, fisheries, and renewable energy projects",
        for_who: "Cape Verdean businesses",
      },
      {
        name: "Global Fund for Blue Economy",
        what: "International funds for sustainable ocean economy — fisheries processing, marine services, and ocean tourism businesses in Cape Verde qualify",
        for_who: "Cape Verdean blue economy businesses",
      },
    ],
    startup_innovation: [
      {
        name: "ADEI — Agência para o Desenvolvimento Empresarial e Inovação",
        what: "Cape Verde's SME development and innovation agency — incubation, market access, and internationalization support for Cape Verdean startups",
        for_who: "Cape Verdean startups and SMEs",
        apply_at: "adei.cv",
      },
      {
        name: "Praia Digital Hub (NOSi / CV Digital)",
        what: "Growing tech scene in Praia — e-government contracts and digital services are a major opportunity given Cape Verde's advanced ICT infrastructure",
        for_who: "Tech founders and digital companies",
      },
    ],
    key_agencies: ["ADEI", "IEFP", "BCA", "Câmara de Comércio"],
    the_opportunity: "Cape Verde is positioning as the Atlantic gateway between Africa, Europe, and the Americas — logistics, digital services, and premium fisheries products for European markets through the EU Special Partnership are the overlooked opportunities.",
  },

  // ── EAST AFRICA ──────────────────────────────────────────────────────────

  {
    country: "Kenya",
    flag: "🇰🇪",
    region: "East Africa",
    population: "55M",
    key_sectors: ["Fintech", "Agriculture (tea, coffee, flowers)", "Tourism", "Logistics", "Tech", "Manufacturing"],
    procurement_portal: "tenders.go.ke",
    procurement_note: "National tenders on tenders.go.ke — county tenders on individual county portals. AGPO reserves 30% of tenders for youth, women, and PWDs.",
    youth_women_funds: [
      { name: "Hustler Fund", what: "Instant mobile loans via M-PESA with no collateral", for_who: "Kenyan nationals with M-PESA", amount: "KES 500–50,000 (individual), up to KES 500,000 (groups)", apply_at: "Dial *844#" },
      { name: "Kenya Youth Enterprise Development Fund (KYEDF)", what: "Government loans and support for youth businesses", for_who: "Indigenous Kenyan youth 18–35", amount: "KES 50,000–1,000,000", apply_at: "kydf.go.ke" },
      { name: "Women Enterprise Fund (WEF)", what: "Loans and capacity building for women-owned businesses", for_who: "Indigenous Kenyan women entrepreneurs", apply_at: "wef.go.ke" },
      { name: "AGPO (Access to Government Procurement Opportunities)", what: "30% of ALL government tenders reserved for youth, women, and PWDs — one of the most powerful but underused programs in Africa", for_who: "Youth-owned, women-owned, PWD-owned companies (Kenyan nationals)", apply_at: "agpo.go.ke", indigenous_note: "Must be Kenyan citizen and 70%+ owned by the qualifying group" },
      { name: "NYOTA Program (2025)", what: "National Youths Opportunities Towards Advancement — apprenticeships, certification, entrepreneurship grants, digital skills, savings support for 820,000 unemployed youth", for_who: "Unemployed indigenous Kenyan youth", apply_at: "nyotaproject.go.ke" },
    ],
    development_bank_programs: [
      { name: "Kenya Development Corporation (KDC)", what: "Long-term development finance for Kenyan businesses", for_who: "Kenyan companies", apply_at: "kdc.co.ke" },
      { name: "IFC Kenya Portfolio", what: "Private sector financing for growth businesses", for_who: "Kenyan private sector" },
    ],
    donor_grants: [
      { name: "Mastercard Foundation Kenya", what: "Youth employment and education programs with enterprise grants", for_who: "Kenyan youth" },
      { name: "USAID Kenya Power Africa", what: "Renewable energy programs and SME support", for_who: "Energy businesses" },
    ],
    startup_innovation: [
      { name: "iHub Nairobi", what: "Kenya's flagship tech hub — 10+ years, 300+ companies", for_who: "Tech founders" },
      { name: "Nairobi Garage", what: "Co-working and startup community", for_who: "Tech startups" },
      { name: "Innovate Africa Fund", what: "Kenyan government fund for tech and innovation", for_who: "Kenyan startups" },
    ],
    key_agencies: ["KDC", "KEBS", "KYDF", "WEF", "AGPO", "PPRA"],
    the_opportunity: "AGPO means 30% of ALL government tenders are reserved for youth and women — most eligible companies never register.",
  },

  {
    country: "Ethiopia",
    flag: "🇪🇹",
    region: "East Africa",
    population: "120M",
    key_sectors: ["Agriculture (coffee, sesame, cut flowers)", "Industrial parks (textiles, apparel)", "Digital economy", "Tourism", "Construction"],
    procurement_portal: "ppa.gov.et",
    procurement_note: "Government procurement on PPA Ethiopia portal. Industrial parks (Hawassa, Bole Lemi) have their own procurement channels. AfDB $42.86M Agri-MSMEs for Jobs program creates additional procurement for Ethiopians.",
    youth_women_funds: [
      {
        name: "AMD4J — Agri-MSMEs Development for Jobs (AfDB, approved May 2024)",
        what: "AfDB $42.86M grant approved May 2024, co-financed by DBE ($10M) and government ($6.24M). Two pillars: (1) expand finance access for youth/women agri-MSMEs; (2) establish YEIB framework. Target: 8,000+ youth and women-led businesses",
        for_who: "Ethiopian youth and women agri-MSMEs",
        amount: "$42.86M program; individual businesses via DBE implementing partners",
        apply_at: "dbe.com.et",
        eligibility: { gender: "all", stages: ["early", "growing"] },
      },
      {
        name: "WEDP — Women Entrepreneurship Development Project (DBE/World Bank/EIB)",
        what: "EIB €30M loan + World Bank co-finance through Development Bank of Ethiopia — micro and small enterprises owned or partly owned by women. One of Ethiopia's largest women enterprise programs.",
        for_who: "Ethiopian women entrepreneurs in micro and small enterprises",
        amount: "ETB 10,000–2,000,000 through DBE partner MFIs",
        apply_at: "dbe.com.et",
        eligibility: { gender: "women", citizenship: "Ethiopian", stages: ["idea", "early", "growing"] },
      },
      {
        name: "Youth Entrepreneurship & Innovation Program (YEIP)",
        what: "Government youth enterprise and innovation fund — grants, loans, and training for Ethiopian youth starting or scaling businesses",
        for_who: "Ethiopian youth 15–35",
        eligibility: { age_max: 35, citizenship: "Ethiopian", stages: ["idea", "early"] },
      },
    ],
    development_bank_programs: [
      {
        name: "DBE — Development Bank of Ethiopia",
        what: "Ethiopia's national DFI — priority sectors (agriculture, manufacturing, export) get below-market rates. Also implementing AMD4J and WEDP through partner MFIs.",
        for_who: "Ethiopian businesses in priority sectors",
        amount: "ETB 500,000–500M",
        apply_at: "dbe.com.et",
        indigenous_note: "Ethiopian businesses; foreign investors can access through joint ventures",
      },
      {
        name: "EIC — Ethiopian Investment Commission",
        what: "One-stop shop for investment facilitation — tax holidays, industrial park access, and incentives for manufacturing and export businesses",
        for_who: "Investors and Ethiopian businesses in manufacturing",
        apply_at: "ethiopiainvestment.gov.et",
      },
    ],
    donor_grants: [
      {
        name: "USAID Feed the Future Ethiopia",
        what: "USAID programs supporting agricultural value chains, food security, and enterprise — grants and technical assistance for Ethiopian agribusinesses",
        for_who: "Ethiopian farmers and agribusinesses",
        apply_at: "usaid.gov/ethiopia",
      },
      {
        name: "GIZ Ethiopia Skills & Private Sector",
        what: "German development cooperation — vocational training, private sector advisory, and SME technical assistance programs",
        for_who: "Ethiopian businesses, youth, and workers",
      },
      {
        name: "Tony Elumelu Foundation (TEF)",
        what: "$5,000 non-refundable seed capital — actively supports Ethiopian entrepreneurs",
        for_who: "Ethiopian entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
    ],
    startup_innovation: [
      {
        name: "iCog Labs Addis Ababa",
        what: "Ethiopia's leading AI and robotics hub — incubator for Ethiopian tech startups, creator of the BINA48 and Sophia robot's African contributions",
        for_who: "Tech founders especially AI/robotics",
        apply_at: "icog-labs.com",
      },
      {
        name: "Africa to Silicon Valley (A2SV)",
        what: "Programming excellence training transforming Ethiopian university students into global tech talent — alumni placed at Google, Meta, Amazon",
        for_who: "Ethiopian coders and computer science students",
        apply_at: "a2sv.org",
      },
      {
        name: "Addis Ababa Innovation Hub (Ministry of Innovation)",
        what: "Government innovation support for Ethiopian tech startups — incubation, prototyping labs, and market access programs",
        for_who: "Ethiopian tech entrepreneurs",
      },
    ],
    key_agencies: ["EIC", "DBE", "ECAE (export)", "ERCA (revenue)", "UNDP Ethiopia"],
    the_opportunity: "AfDB's $42.86M AMD4J program approved May 2024 is being deployed through DBE right now — 8,000 Ethiopian youth and women agri-businesses will be funded, and the application window through partner MFIs is open.",
  },

  {
    country: "Tanzania",
    flag: "🇹🇿",
    region: "East Africa",
    population: "63M",
    key_sectors: ["Agriculture (tobacco, cashews, coffee)", "Tourism (Serengeti, Zanzibar)", "Mining (gold, tanzanite)", "Construction"],
    procurement_portal: "tender.go.tz",
    procurement_note: "TANePS (Tanzania National e-Procurement System) at tender.go.tz — well-organized digital procurement. Government allocated TZS 200 billion for youth startups and SMEs in 2024–2025.",
    youth_women_funds: [
      {
        name: "Tanzania Government Youth Fund — TZS 200 Billion",
        what: "President Samia Suluhu Hassan's TZS 200 billion fund for youth enterprises, startups, and SMEs — agriculture, mining, ICT, manufacturing, and services. In 2024–2025, TZS 66.9 billion disbursed as loans and guarantees to 13,000+ beneficiaries.",
        for_who: "Tanzanian youth entrepreneurs",
        amount: "TZS 1M–50M (via TAMISEMI and regional offices)",
        indigenous_note: "Tanzanian nationals; priority for youth under 35",
        eligibility: { age_max: 35, citizenship: "Tanzanian", stages: ["idea", "early", "growing"] },
      },
      {
        name: "SIDO — Small Industries Development Organisation",
        what: "Government agency supporting Tanzanian SMEs — training centers, equipment hire purchase, market linkages, and enterprise development since 1973",
        for_who: "Tanzanian small businesses in manufacturing and agro-processing",
        apply_at: "sido.go.tz",
        eligibility: { citizenship: "Tanzanian", stages: ["early", "growing"] },
      },
      {
        name: "Women Enterprise Fund Tanzania",
        what: "Government fund providing low-interest loans specifically for women-owned businesses — capacity building and market access support",
        for_who: "Tanzanian women entrepreneurs",
        eligibility: { gender: "women", citizenship: "Tanzanian", stages: ["idea", "early", "growing"] },
      },
      {
        name: "AfDB $129M Agricultural Youth Jobs Program",
        what: "AfDB approved $129M loan for agricultural job creation targeting Tanzanian youth — agri-value chain businesses and food processing",
        for_who: "Tanzanian youth in agriculture",
        apply_at: "afdb.org",
        eligibility: { age_max: 35, stages: ["early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "TIB Development Bank",
        what: "Tanzania's national development bank for industrial and agricultural projects — loans for energy, water, mining services, and agribusiness at below-market rates",
        for_who: "Tanzanian businesses in priority sectors",
        apply_at: "tib.co.tz",
        indigenous_note: "Tanzanian businesses preferred; joint ventures eligible",
      },
      {
        name: "NMB Bank Youth Startup Loans",
        what: "NMB Bank provides startup capital in collaboration with TAMISEMI (President's Office Regional Administration) — accessible through regional offices",
        for_who: "Tanzanian youth entrepreneurs",
        apply_at: "nmbbank.co.tz",
        eligibility: { age_max: 35, stages: ["idea", "early"] },
      },
    ],
    donor_grants: [
      {
        name: "MCC Tanzania Compact",
        what: "Millennium Challenge Corporation infrastructure and agricultural programs — procurement and subcontracting for Tanzanian companies",
        for_who: "Tanzanian businesses and cooperatives",
      },
      {
        name: "Tony Elumelu Foundation (TEF)",
        what: "$5,000 non-refundable seed capital — actively recruits Tanzanian entrepreneurs",
        for_who: "Tanzanian entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
      {
        name: "GIZ Tanzania Private Sector Development",
        what: "German development agency programs supporting Tanzanian agribusiness, vocational training, and SME competitiveness",
        for_who: "Tanzanian businesses and youth",
      },
    ],
    startup_innovation: [
      {
        name: "kLab Dar es Salaam",
        what: "Tanzania's leading tech incubator and innovation hub — mentoring, co-working, and startup competitions for Tanzanian entrepreneurs",
        for_who: "Tech founders",
        apply_at: "klab.co.tz",
      },
      {
        name: "BUNI Innovation Hub (COSTECH)",
        what: "Government science and technology innovation hub at COSTECH — prototype development, incubation, and tech enterprise support",
        for_who: "Tech and innovation entrepreneurs",
        apply_at: "buni.costech.or.tz",
      },
      {
        name: "Tanzania Youth Startup Fund (TTY Brand Africa)",
        what: "Government-aligned fund specifically targeting digital economy growth and tech startup support in Tanzania",
        for_who: "Tanzanian tech startups",
      },
    ],
    key_agencies: ["SIDO", "TIC (investment)", "TIB", "TAMISEMI", "TANePS"],
    the_opportunity: "Tanzania's TZS 200 billion youth fund has already disbursed TZS 66.9 billion to 13,000 businesses — the pipeline is active and under-subscribed, especially in tourism supply chains serving Serengeti and Zanzibar's booming hospitality sector.",
  },

  {
    country: "Uganda",
    flag: "🇺🇬",
    region: "East Africa",
    population: "48M",
    key_sectors: ["Agriculture (coffee, tea, vanilla)", "Oil services (Albertine Basin)", "Construction", "Manufacturing"],
    procurement_portal: "gpp.ppda.go.ug",
    procurement_note: "Government procurement on PPDA portal. Oil sector (EACOP, TotalEnergies) local content office active. UDB approved Shs 124.2B for indigenous Ugandan infrastructure contractors in 2025.",
    youth_women_funds: [
      {
        name: "Youth Livelihood Programme (YLP)",
        what: "Government interest-free loans for youth groups — enterprise training + group loans for young Ugandans starting businesses",
        for_who: "Ugandan youth groups 18–30",
        amount: "UGX 5M–25M per group",
        indigenous_note: "Ugandan nationals only — specifically designed for indigenous Ugandan youth",
        eligibility: { age_max: 30, citizenship: "Ugandan", stages: ["idea", "early"] },
      },
      {
        name: "Women Entrepreneurship Programme (WEP)",
        what: "Government grants for women-owned businesses — access to affordable credit and business development support",
        for_who: "Ugandan women entrepreneurs",
        indigenous_note: "Ugandan women nationals",
        eligibility: { gender: "women", citizenship: "Ugandan", stages: ["early", "growing"] },
      },
      {
        name: "UDB Youth Special Program",
        what: "Uganda Development Bank special youth enterprise program — in 2024/25 UDB supported 13 youth-owned enterprises, 85 women-owned businesses and 216 SMEs. Target: 69,202 jobs created in 2025.",
        for_who: "Ugandan youth-owned businesses",
        amount: "UGX 50M–500M",
        apply_at: "udbl.co.ug",
        eligibility: { age_max: 35, citizenship: "Ugandan", stages: ["early", "growing"] },
      },
    ],
    development_bank_programs: [
      {
        name: "UDB — Uganda Development Bank",
        what: "Uganda's DFI — capitalized to Shs 1.6 trillion. Special programs for SMEs, women, youth, AgriConnect, Local Contractors, and EACOP oil sector. Shs 124.2B for indigenous contractors in 2025.",
        for_who: "Ugandan businesses in agriculture, manufacturing, oil services, infrastructure",
        amount: "UGX 50M–5B",
        apply_at: "udbl.co.ug",
        indigenous_note: "Prioritizes indigenous Ugandan-owned businesses",
      },
      {
        name: "DFCU Bank SME Development Lines",
        what: "Development Finance Company of Uganda — SME credit backed by DFI money at lower-than-market rates",
        for_who: "Ugandan SMEs",
        apply_at: "dfcugroup.com",
      },
    ],
    donor_grants: [
      {
        name: "GIZ Uganda Skills & Private Sector Development",
        what: "German development cooperation — skills development, agricultural value chains, and private sector technical assistance",
        for_who: "Ugandan businesses and youth",
      },
      {
        name: "Tony Elumelu Foundation (TEF)",
        what: "$5,000 non-refundable seed capital — open to Ugandan entrepreneurs",
        for_who: "Ugandan entrepreneurs",
        amount: "$5,000 USD",
        apply_at: "tefconnect.com",
        eligibility: { diaspora_ok: true, stages: ["idea", "early", "growing"] },
      },
      {
        name: "Mastercard Foundation Uganda Programs",
        what: "Youth employment and education partnerships — funds Ugandan training institutions and employer networks",
        for_who: "Ugandan youth",
        apply_at: "mastercardfdn.org",
      },
    ],
    startup_innovation: [
      {
        name: "Outbox Hub Kampala",
        what: "Kampala's leading tech accelerator and co-working space — incubation for Ugandan digital entrepreneurs",
        for_who: "Tech founders",
        apply_at: "outbox.co.ug",
      },
      {
        name: "Innovation Village Kampala",
        what: "Startup studio, co-working, and investor connections — active acceleration programs for Ugandan startups",
        for_who: "Entrepreneurs and tech startups",
        apply_at: "innovationvillage.co.ug",
      },
      {
        name: "EACOP Local Content Supplier Program",
        what: "East Africa Crude Oil Pipeline (TotalEnergies) requires local Ugandan suppliers — official local content vendor registration open to qualified Ugandan businesses",
        for_who: "Ugandan businesses in oil services, catering, logistics, construction",
        apply_at: "eacop.com/local-content",
        indigenous_note: "Ugandan-owned companies specifically required for local content quota",
      },
    ],
    key_agencies: ["UDB", "PPDA", "UIA (investment)", "UWESO", "EACOP Local Content Office"],
    the_opportunity: "UDB's Shs 1.6 trillion capitalization is the largest in the bank's history — and special programs for youth, women, oil sector, and indigenous contractors are all under-subscribed; the money is there before you even walk in.",
  },

  {
    country: "Rwanda",
    flag: "🇷🇼",
    region: "East Africa",
    population: "14M",
    key_sectors: ["Tech & digital", "Tourism (gorilla trekking)", "Agriculture (coffee, tea)", "Construction", "Financial services"],
    procurement_portal: "rppa.gov.rw",
    procurement_note: "Rwanda has Africa's most transparent procurement system — RPPA portal is excellent and all tenders are digitized.",
    youth_women_funds: [
      { name: "BDF — Business Development Fund", what: "Credit guarantees helping Rwandan businesses get bank loans", for_who: "Rwandan entrepreneurs", amount: "RWF 5M–500M in guarantees", apply_at: "bdf.rw" },
      { name: "Hanga Ahazaza Initiative", what: "Youth enterprise development and seed funding", for_who: "Rwandan youth 16–35", amount: "RWF 500,000–5,000,000", apply_at: "rdb.rw" },
      { name: "Women Guarantee Fund", what: "Loan guarantees specifically for women-owned businesses", for_who: "Rwandan women entrepreneurs" },
    ],
    development_bank_programs: [
      { name: "RDB (Rwanda Development Board)", what: "Investment promotion, tax incentives, and business facilitation", for_who: "Investors and businesses", apply_at: "rdb.rw" },
      { name: "Development Bank of Rwanda (BRD)", what: "Development finance for priority sectors", for_who: "Rwandan businesses" },
    ],
    donor_grants: [
      { name: "MasterCard Foundation Rwanda", what: "Youth employment and education partnership programs", for_who: "Rwandan youth" },
    ],
    startup_innovation: [
      { name: "Kigali Innovation City", what: "Special tech zone being built — early entry for startups", for_who: "Tech startups" },
      { name: "Rwanda ICT Chamber", what: "Government-backed tech business support", for_who: "Tech companies", apply_at: "ict.gov.rw" },
      { name: "Norrsken Kigali House", what: "Impact investment and startup hub", for_who: "Impact entrepreneurs" },
    ],
    key_agencies: ["RDB", "BRD", "BDF", "RPPA"],
    the_opportunity: "Rwanda's rule of law and digital infrastructure are best-in-class for Africa — the easiest environment to register, operate, and win government contracts.",
  },

  // ── NORTH AFRICA ─────────────────────────────────────────────────────────

  {
    country: "Morocco",
    flag: "🇲🇦",
    region: "North Africa",
    population: "37M",
    key_sectors: ["Phosphates & chemicals", "Tourism", "Automotive & aerospace manufacturing", "Agriculture", "Renewable energy"],
    procurement_portal: "marchespublics.gov.ma",
    procurement_note: "Well-organized procurement at marchespublics.gov.ma — Morocco is the easiest North African country to win contracts in.",
    youth_women_funds: [
      { name: "INDH — National Initiative for Human Development", what: "Social development fund with enterprise components", for_who: "Moroccan youth and women" },
      { name: "Maroc PME", what: "SME development program — upgrading, exports, and access to finance", for_who: "Moroccan SMEs", apply_at: "marocpme.gov.ma" },
      { name: "ANAPEC Youth Employment", what: "Job and enterprise support for young Moroccans", for_who: "Moroccan youth" },
    ],
    development_bank_programs: [
      { name: "CIH Bank Development Lines", what: "Long-term investment finance for Moroccan businesses", for_who: "Moroccan businesses" },
      { name: "BERD Guarantee Fund", what: "Credit guarantees for SMEs that lack collateral", for_who: "Moroccan SMEs" },
    ],
    donor_grants: [
      { name: "EU Morocco Partnership", what: "EU funding for agricultural modernization, SMEs, and digital", for_who: "Moroccan businesses" },
    ],
    startup_innovation: [
      { name: "Morocco Startup Act", what: "Legal framework with tax benefits for tech startups", for_who: "Moroccan startups" },
      { name: "Casa Anfa Tech City", what: "Casablanca tech hub being developed", for_who: "Tech companies" },
      { name: "Outlierz Ventures", what: "Main Moroccan VC fund", for_who: "Startups" },
    ],
    key_agencies: ["AMDIE (investment)", "Maroc PME", "ANAPEC", "CGEM (employers federation)"],
    the_opportunity: "Argan oil — Morocco earns $30–50M/year exporting raw oil; Josie Maran alone earns more than that from Moroccan argan. Processing and premium branding opportunity is enormous.",
  },

  {
    country: "Egypt",
    flag: "🇪🇬",
    region: "North Africa",
    population: "105M",
    key_sectors: ["Tourism", "Agriculture", "Manufacturing", "Tech & ICT", "Construction", "Petroleum services"],
    procurement_portal: "eprocurement.gov.eg",
    procurement_note: "Government tenders at eprocurement.gov.eg. Egypt's large economy generates significant procurement volume.",
    youth_women_funds: [
      { name: "MSMEDA — Micro, Small and Medium Enterprise Development Agency", what: "Main government agency for SME finance and support", for_who: "Egyptian SMEs", apply_at: "msmeda.org.eg" },
      { name: "Nasser Social Bank", what: "Social lending for small Egyptian businesses and graduates", for_who: "Egyptian youth and graduates" },
      { name: "Women's Development Fund", what: "Low-interest loans for women-owned businesses", for_who: "Egyptian women entrepreneurs" },
    ],
    development_bank_programs: [
      { name: "ITIDA Tech Sector Support", what: "IT industry development — grants and support for Egyptian tech companies", for_who: "Egyptian tech businesses", apply_at: "itida.gov.eg" },
      { name: "Industrial Development Authority", what: "Factory financing and industrial zone access", for_who: "Egyptian manufacturers" },
    ],
    donor_grants: [
      { name: "USAID Egypt", what: "Economic growth and enterprise support programs", for_who: "Egyptian businesses" },
    ],
    startup_innovation: [
      { name: "Egypt Startup Act", what: "Official startup registration with tax benefits", for_who: "Egyptian startups" },
      { name: "Cairo Angels", what: "Angel network for Egyptian startups", for_who: "Early-stage startups" },
      { name: "ITIDA Boost Program", what: "Government grants for tech product companies", for_who: "Tech startups" },
    ],
    key_agencies: ["MSMEDA", "GAFI (investment)", "ITIDA", "IDA"],
    the_opportunity: "105M people — Egypt is Africa's 2nd largest economy. Tech, fintech, and manufacturing for this domestic market alone is a $100B+ opportunity.",
  },

  {
    country: "Tunisia",
    flag: "🇹🇳",
    region: "North Africa",
    population: "12M",
    key_sectors: ["Tech & ICT", "Tourism", "Olive oil & food processing", "Textiles", "Financial services"],
    procurement_portal: "tuneps.tn",
    procurement_note: "Government tenders on TUNEPS portal. Tech procurement notable given Tunisia's digital capabilities.",
    youth_women_funds: [
      { name: "APIA Agricultural Investment", what: "Agricultural investment promotion for Tunisian businesses", for_who: "Tunisian agribusinesses" },
      { name: "Youth Employment Programs", what: "Government ministry programs for youth enterprise", for_who: "Tunisian youth" },
    ],
    development_bank_programs: [
      { name: "BTS — Tunisian Solidarity Bank", what: "Microcredit for low-income and marginal entrepreneurs", for_who: "Tunisian micro-entrepreneurs" },
      { name: "BFPME SME Bank", what: "Bank focused on SME development finance", for_who: "Tunisian SMEs" },
    ],
    donor_grants: [
      { name: "EU-Tunisia SME Support", what: "EU program for Tunisian SME competitiveness", for_who: "Tunisian businesses" },
    ],
    startup_innovation: [
      { name: "Tunisia Startup Act", what: "World-class legal framework for startups — tax exemptions, social security waivers, forex flexibility", for_who: "Tunisian startups", apply_at: "startup.gov.tn" },
      { name: "Flat6Labs Tunisia", what: "MENA accelerator active in Tunisia", for_who: "Startups" },
    ],
    key_agencies: ["APII (investment)", "APIA", "BFPME", "TUNEPS"],
    the_opportunity: "Tunisia's Startup Act is one of the best in Africa — the most founder-friendly legal environment on the continent. Tech and olive oil value-addition are the sectors to build.",
  },

  {
    country: "Algeria",
    flag: "🇩🇿",
    region: "North Africa",
    population: "45M",
    key_sectors: ["Oil & gas services", "Agriculture", "Construction", "Manufacturing", "Tech"],
    procurement_portal: "armp.dz",
    procurement_note: "Government procurement heavily oil-sector driven. BOMOP (official procurement bulletin) publishes all state contracts.",
    youth_women_funds: [
      { name: "ANSEJ — Youth Employment Agency", what: "Loans and grants for youth-created enterprises", for_who: "Algerian youth 19–35", amount: "DZD 1M–10M" },
      { name: "ANADE (renamed CNAC)", what: "Enterprise support for unemployed adults", for_who: "Unemployed Algerians" },
      { name: "ANGEM Microcredit", what: "Microcredit for very small businesses", for_who: "Algerian micro-entrepreneurs" },
    ],
    development_bank_programs: [
      { name: "BADR Agricultural Bank", what: "Algeria's agricultural development bank", for_who: "Algerian farmers and agribusinesses" },
      { name: "BDL Development Lines", what: "State commercial bank with SME development lines", for_who: "Algerian SMEs" },
    ],
    donor_grants: [
      { name: "EU Algeria Partnership", what: "Limited donor presence but EU association agreement provides some business support", for_who: "Algerian businesses" },
    ],
    startup_innovation: [
      { name: "Algeria Startup Fund", what: "Government startup support and seed fund", for_who: "Algerian startups" },
      { name: "Incubators at USTHB and other universities", what: "University-backed startup incubation", for_who: "Tech founders" },
    ],
    key_agencies: ["ANDI (investment)", "ANSEJ", "ANGEM", "BADR"],
    the_opportunity: "Petroleum services is largely foreign — an Algerian technical services company (maintenance, environmental, logistics) for the oil sector is a long-term contract machine.",
  },

  // ── SOUTHERN AFRICA ──────────────────────────────────────────────────────

  {
    country: "South Africa",
    flag: "🇿🇦",
    region: "Southern Africa",
    population: "60M",
    key_sectors: ["Mining services", "Finance", "Manufacturing", "Agriculture", "Tech", "Tourism", "Retail"],
    procurement_portal: "etenders.gov.za",
    procurement_note: "eTenders portal for national tenders. CIDB grades construction companies — grade determines tender value you can bid. BBBEE compliance is essential for all government contracts.",
    youth_women_funds: [
      { name: "NYDA — National Youth Development Agency", what: "Grants up to R250,000 for youth-led businesses — lower paperwork burden than SEDFA. Fast-track: 6–10 weeks if documents are complete.", for_who: "Black South African youth 18–35", amount: "R1,000–R250,000", apply_at: "nyda.gov.za", indigenous_note: "Indigenous Black South African youth — specifically designed for economic transformation" },
      { name: "SEDFA (2025) — SEFA + SEDA Merged Agency", what: "NEW in 2025/26: SEFA and SEDA merged into SEDFA. One door for loans AND business support. Portal: sedfa.org.za. R50K–R15M loans, decisions within 21 days for under R500K.", for_who: "Black-owned South African SMEs", amount: "R50,000–R15,000,000", apply_at: "sedfa.org.za", indigenous_note: "Previously SEFA — merged 2025, same programs, new portal" },
      { name: "NEF — National Empowerment Fund", what: "Equity and debt finance for black-owned businesses. NEF Women Empowerment Fund specifically for black women across all sectors.", for_who: "Black-owned South African businesses / Black women entrepreneurs", amount: "R250,000–R75,000,000", apply_at: "nefcorp.co.za", indigenous_note: "Indigenous Black South Africans only — economic transformation mandate" },
      { name: "IDC — Industrial Development Corporation", what: "Development finance for manufacturing. IDC Youth Pipeline: grants to help youth businesses get proposal-ready for IDC applications.", for_who: "South African manufacturers and youth businesses", apply_at: "idc.co.za" },
    ],
    development_bank_programs: [
      { name: "DBSA — Development Bank of Southern Africa", what: "Infrastructure and development finance", for_who: "South African businesses", apply_at: "dbsa.org" },
      { name: "Land Bank", what: "Agricultural finance for South African farmers", for_who: "Black South African farmers" },
    ],
    donor_grants: [
      { name: "NRF Innovation Grants", what: "Research and innovation funding for South African businesses", for_who: "SA businesses with R&D component" },
    ],
    startup_innovation: [
      { name: "SEDFA Business Support (ex-SEDA)", what: "Business support, incubation, and mentorship — now integrated into SEDFA under one roof", for_who: "Black South African small businesses", apply_at: "sedfa.org.za" },
      { name: "Cape Town + Joburg Startup Ecosystem", what: "Africa's most developed VC ecosystem — but note most VC is foreign-owned. Target SEDFA, NEF, IDC first.", for_who: "Tech startups" },
    ],
    key_agencies: ["NYDA", "SEDFA", "NEF", "IDC", "DBSA", "CIDB"],
    the_opportunity: "BBBEE requirements mean large corporations are contractually obligated to buy from black-owned businesses — SAP, Anglo American, Standard Bank, Shoprite all have supplier development programs. SEDFA merger means one door now opens everything.",
  },

  {
    country: "Zimbabwe",
    flag: "🇿🇼",
    region: "Southern Africa",
    population: "15M",
    key_sectors: ["Mining services (platinum, gold, lithium)", "Agriculture", "Manufacturing", "Tourism"],
    procurement_portal: "praz.org.zw",
    procurement_note: "Procurement Regulatory Authority of Zimbabwe at praz.org.zw. Significant government procurement despite economic challenges.",
    youth_women_funds: [
      { name: "Youth Fund Zimbabwe", what: "Government youth enterprise support", for_who: "Zimbabwean youth" },
      { name: "Women's Microfinance Bank", what: "Government bank for women's enterprise finance", for_who: "Zimbabwean women" },
    ],
    development_bank_programs: [
      { name: "IDBZ — Infrastructure Development Bank", what: "Infrastructure and development finance", for_who: "Zimbabwean businesses" },
      { name: "ZB Bank SME Lines", what: "Commercial bank SME products", for_who: "Zimbabwean SMEs" },
    ],
    donor_grants: [
      { name: "World Bank Zimbabwe Portfolio", what: "Economic recovery programs with local procurement", for_who: "Zimbabwean businesses" },
    ],
    startup_innovation: [
      { name: "Harare Tech Hub", what: "Growing startup ecosystem", for_who: "Tech founders" },
      { name: "Lithium Economy Initiative", what: "Government program for lithium value addition", for_who: "Mining and battery businesses" },
    ],
    key_agencies: ["ZIDA (investment)", "PRAZ", "IDBZ"],
    the_opportunity: "World's largest lithium reserves — electric vehicle battery supply chain starts here. Processing and value-addition from raw lithium is the next decade's opportunity.",
  },

  {
    country: "Zambia",
    flag: "🇿🇲",
    region: "Southern Africa",
    population: "20M",
    key_sectors: ["Copper & cobalt services", "Agriculture", "Tourism (Victoria Falls)", "Construction"],
    procurement_portal: "zppa.org.zm",
    procurement_note: "Zambia Public Procurement Authority at zppa.org.zm.",
    youth_women_funds: [
      { name: "CEEC — Citizens Economic Empowerment Commission", what: "Grants and loans for Zambian citizens", for_who: "Zambian citizens", apply_at: "ceec.org.zm" },
      { name: "Youth Enterprise Access Fund", what: "Government fund for young entrepreneurs", for_who: "Zambian youth" },
      { name: "Women Enterprise Fund", what: "Government support for women-owned businesses", for_who: "Zambian women" },
    ],
    development_bank_programs: [
      { name: "DBZ — Development Bank of Zambia", what: "Development finance for Zambian businesses", for_who: "Zambian businesses" },
      { name: "IDC Zambia", what: "Industrial investment fund", for_who: "Zambian manufacturers" },
    ],
    donor_grants: [
      { name: "USAID Zambia", what: "Agricultural and enterprise programs", for_who: "Zambian businesses" },
    ],
    startup_innovation: [
      { name: "BongoHive Lusaka", what: "Zambia's main tech hub", for_who: "Tech founders" },
    ],
    key_agencies: ["ZDA (investment)", "CEEC", "DBZ", "ZPPA"],
    the_opportunity: "Copper mining generates $8B/year but service supply is dominated by foreign companies — a Zambian catering, transport, or maintenance company at the mines has a guaranteed customer.",
  },

  {
    country: "Mozambique",
    flag: "🇲🇿",
    region: "Southern Africa",
    population: "32M",
    key_sectors: ["Natural gas services", "Agriculture", "Tourism (coastal)", "Construction"],
    procurement_portal: "ufsa.gov.mz",
    procurement_note: "Government procurement through UFSA. Natural gas companies (TotalEnergies, ENI) have local content requirements.",
    youth_women_funds: [
      { name: "IPEME SME Agency", what: "Government agency supporting Mozambican SMEs", for_who: "Mozambican entrepreneurs" },
      { name: "Youth Employment Program", what: "Government youth enterprise support", for_who: "Mozambican youth" },
    ],
    development_bank_programs: [
      { name: "BCI Development Lines", what: "Commercial bank development finance", for_who: "Mozambican businesses" },
      { name: "AfDB Mozambique Portfolio", what: "Infrastructure projects with local content", for_who: "Mozambican businesses" },
    ],
    donor_grants: [
      { name: "EU Mozambique SME Support", what: "EU funds for Mozambican private sector development", for_who: "Mozambican businesses" },
    ],
    startup_innovation: [
      { name: "Maputo Startup Scene", what: "Small but growing — hub.co is active", for_who: "Tech founders" },
    ],
    key_agencies: ["APIEX (investment)", "IPEME", "UFSA"],
    the_opportunity: "Gas megaprojects need local service companies urgently — catering, logistics, environmental monitoring, security. TotalEnergies LNG is the biggest project; their local procurement team is contactable.",
  },

  {
    country: "Angola",
    flag: "🇦🇴",
    region: "Southern Africa",
    population: "35M",
    key_sectors: ["Oil & gas services", "Diamond services", "Agriculture", "Construction", "Manufacturing"],
    procurement_portal: "spe.gov.ao",
    procurement_note: "Government procurement through SPE Angola. Oil sector local content requirements are significant.",
    youth_women_funds: [
      { name: "INAPEM SME Agency", what: "National agency for SME promotion", for_who: "Angolan businesses" },
      { name: "FNDE Youth Fund", what: "National fund for youth employment and enterprise", for_who: "Angolan youth" },
    ],
    development_bank_programs: [
      { name: "BDA — Development Bank of Angola", what: "Angola's main development finance institution", for_who: "Angolan businesses", apply_at: "bda.ao" },
      { name: "Sonangol Local Content", what: "Angola's state oil company — local content policy requires Angolan supplier development", for_who: "Angolan businesses" },
    ],
    donor_grants: [
      { name: "World Bank Angola Portfolio", what: "Post-conflict development programs with local procurement", for_who: "Angolan businesses" },
    ],
    startup_innovation: [
      { name: "Luanda Tech Ecosystem", what: "Oil money funding startup scene", for_who: "Tech founders" },
    ],
    key_agencies: ["ANIP (investment)", "INAPEM", "BDA"],
    the_opportunity: "One of Africa's richest oil nations — but all the oil wealth leaves. Agricultural processing (the country imports 70% of food) and non-oil manufacturing are the diversification opportunity.",
  },

  {
    country: "Namibia",
    flag: "🇳🇦",
    region: "Southern Africa",
    population: "3M",
    key_sectors: ["Mining services (diamonds, uranium)", "Tourism (luxury)", "Fisheries", "Agriculture"],
    procurement_portal: "nipdb.com",
    procurement_note: "Namibia procurement through Public Procurement Tribunal. Strong legal framework.",
    youth_women_funds: [
      { name: "DBN Youth Loans", what: "Development Bank of Namibia youth enterprise finance", for_who: "Namibian youth" },
      { name: "NIPA — Namibia Industrial Parks", what: "Industrial park access for Namibian manufacturers", for_who: "Namibian manufacturers" },
    ],
    development_bank_programs: [
      { name: "DBN — Development Bank of Namibia", what: "Development finance for priority sectors", for_who: "Namibian businesses", apply_at: "dbn.com.na" },
    ],
    donor_grants: [
      { name: "GIZ Namibia", what: "Skills development and enterprise support", for_who: "Namibian businesses" },
    ],
    startup_innovation: [
      { name: "Namibia Innovation Hub", what: "Tech and innovation support in Windhoek", for_who: "Tech founders" },
    ],
    key_agencies: ["NIPDB (investment)", "DBN", "NIPA"],
    the_opportunity: "Small population but high per-capita income — premium tourism, luxury accommodation, and value-added fisheries products can command top prices.",
  },

  {
    country: "Botswana",
    flag: "🇧🇼",
    region: "Southern Africa",
    population: "2.5M",
    key_sectors: ["Diamond services", "Tourism (eco-tourism)", "Financial services", "Manufacturing"],
    procurement_portal: "ppb.org.bw",
    procurement_note: "Public Procurement & Asset Disposal Board at ppb.org.bw — one of Africa's best-managed procurement systems.",
    youth_women_funds: [
      { name: "CEDA — Citizen Entrepreneurial Development Agency", what: "Loans and grants for Botswana citizen businesses", for_who: "Botswana citizens", amount: "BWP 50,000–10,000,000", apply_at: "ceda.co.bw" },
      { name: "YDF — Youth Development Fund", what: "Grants for youth-owned businesses", for_who: "Botswana youth" },
    ],
    development_bank_programs: [
      { name: "BDC — Botswana Development Corporation", what: "Equity and loan finance for Botswana businesses", for_who: "Botswana businesses" },
      { name: "BEDIA Investment Promotion", what: "Investment incentives and facilitation", for_who: "Investors and businesses" },
    ],
    donor_grants: [
      { name: "Botswana-specific donors limited — strong domestic programs", what: "CEDA and BDC are better than most donor grants", for_who: "Botswana citizens" },
    ],
    startup_innovation: [
      { name: "Botswana Innovation Hub", what: "Science and tech park in Gaborone", for_who: "Tech companies", apply_at: "botswanainnovationhub.co.bw" },
    ],
    key_agencies: ["CEDA", "BDC", "BEDIA", "PPB"],
    the_opportunity: "CEDA is one of Africa's most accessible citizen-only enterprise funds — amounts up to BWP 10M available to Botswana citizens with viable businesses.",
  },

  {
    country: "Lesotho",
    flag: "🇱🇸",
    region: "Southern Africa",
    population: "2.2M",
    key_sectors: ["Textiles & apparel (AGOA access)", "Water (Lesotho Highlands)", "Construction", "Agriculture (wool, mohair)"],
    procurement_portal: "ppd.gov.ls",
    procurement_note: "Government procurement through PPD. Small economy but AGOA access is very valuable for textile businesses.",
    youth_women_funds: [
      { name: "LNDC SME Support", what: "Lesotho National Development Corporation enterprise finance", for_who: "Lesotho citizens", apply_at: "lndc.org.ls" },
      { name: "Women Enterprise Fund", what: "Government fund for women-owned businesses", for_who: "Lesotho women" },
    ],
    development_bank_programs: [
      { name: "LNDC", what: "State development agency — financing and industrial sites", for_who: "Lesotho businesses" },
    ],
    donor_grants: [
      { name: "MCC Lesotho Compact", what: "Infrastructure and agriculture grants", for_who: "Lesotho businesses" },
    ],
    startup_innovation: [
      { name: "Digital Lesotho", what: "Government digital initiative creating tech opportunities", for_who: "Tech businesses" },
    ],
    key_agencies: ["LNDC", "BEDCO (small enterprise)"],
    the_opportunity: "AGOA (African Growth and Opportunity Act) gives Lesotho duty-free access to US markets — a textile or apparel factory here exports to American retailers tariff-free.",
  },

  {
    country: "Eswatini",
    flag: "🇸🇿",
    region: "Southern Africa",
    population: "1.1M",
    key_sectors: ["Textiles (AGOA access)", "Sugar processing", "Agriculture", "Tourism"],
    procurement_portal: "sppra.co.sz",
    procurement_note: "Small economy — government and sugar industry procurement are main channels.",
    youth_women_funds: [
      { name: "Eswatini Development Finance Corporation", what: "Development finance for Swati businesses", for_who: "Eswatini citizens" },
      { name: "Youth Enterprise Fund", what: "Government youth business support", for_who: "Swati youth" },
    ],
    development_bank_programs: [
      { name: "SIDC — Swaziland Industrial Dev Corp", what: "Industrial finance and industrial sites", for_who: "Eswatini businesses" },
    ],
    donor_grants: [
      { name: "EU support programs", what: "Limited but present for agricultural and SME development", for_who: "Eswatini businesses" },
    ],
    startup_innovation: [
      { name: "Mbabane digital economy", what: "Nascent startup scene", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["SIDC", "SIPA (investment)"],
    the_opportunity: "AGOA textiles access — same as Lesotho, a manufacturing operation here exports to US markets duty-free.",
  },

  // ── CENTRAL AFRICA ───────────────────────────────────────────────────────

  {
    country: "Congo (DRC)",
    flag: "🇨🇩",
    region: "Central Africa",
    population: "100M",
    key_sectors: ["Mining services (cobalt, coltan, gold)", "Agriculture", "Construction", "Telecom"],
    procurement_portal: "acmp.gouv.cd",
    procurement_note: "ACMP procurement portal — UN and World Bank procurement significant. UNGM registration opens additional opportunities.",
    youth_women_funds: [
      { name: "FONAREF Youth Fund", what: "National fund for youth enterprise in agriculture", for_who: "Congolese youth" },
      { name: "SONAS / ONEM Employment Programs", what: "Employment and enterprise support programs", for_who: "Congolese workers and entrepreneurs" },
    ],
    development_bank_programs: [
      { name: "World Bank DRC Portfolio ($4B+)", what: "Massive World Bank presence — local procurement for health, education, infrastructure", for_who: "Congolese businesses", apply_at: "worldbank.org/drc" },
      { name: "AfDB DRC Projects", what: "Infrastructure and agricultural finance", for_who: "Congolese businesses" },
    ],
    donor_grants: [
      { name: "UN System DRC Procurement", what: "MONUSCO, UNDP, UNICEF, WFP all procure locally — UNGM registration opens this", for_who: "DRC-registered businesses", apply_at: "ungm.org" },
    ],
    startup_innovation: [
      { name: "CTIC Kinshasa / Digital DRC", what: "Tech and startup support in Kinshasa", for_who: "Tech founders" },
    ],
    key_agencies: ["ANAPI (investment)", "ACMP", "SAESSCAM (artisanal mining)"],
    the_opportunity: "70% of world's cobalt. Every EV battery runs on DRC cobalt. Mining service companies, processing plants, and tech for mining are the opportunity of a generation.",
  },

  {
    country: "Gabon",
    flag: "🇬🇦",
    region: "Central Africa",
    population: "2.3M",
    key_sectors: ["Oil services", "Timber (sustainable)", "Mining (manganese)", "Agriculture"],
    procurement_portal: "marchespublics.ga",
    procurement_note: "Government procurement portal. Oil companies have local content requirements.",
    youth_women_funds: [
      { name: "ANPME Gabon", what: "National agency for SME promotion", for_who: "Gabonese entrepreneurs" },
      { name: "Fonds Gabonais d'Investissements Stratégiques", what: "Strategic investment fund with SME components", for_who: "Gabonese businesses" },
    ],
    development_bank_programs: [
      { name: "BDEAC Regional Bank", what: "Central African development bank", for_who: "CEMAC zone businesses" },
    ],
    donor_grants: [
      { name: "AFD Gabon", what: "French development agency programs in Gabon", for_who: "Gabonese businesses" },
    ],
    startup_innovation: [
      { name: "Libreville Digital Scene", what: "Small but oil-funded startup ecosystem", for_who: "Tech founders" },
    ],
    key_agencies: ["ANPI (investment)", "ANPME", "BDEAC"],
    the_opportunity: "Gabon's forestry sector is the world's most sustainable (FSC-certified) — premium timber and forest products for European markets can command top prices.",
  },

  {
    country: "Congo-Brazzaville",
    flag: "🇨🇬",
    region: "Central Africa",
    population: "6M",
    key_sectors: ["Oil services", "Agriculture", "Timber", "Construction"],
    procurement_portal: "marchespublics.cg",
    procurement_note: "Government tenders — oil company procurement also significant.",
    youth_women_funds: [
      { name: "FODEX Youth Fund", what: "Youth enterprise development fund", for_who: "Congolese youth" },
    ],
    development_bank_programs: [
      { name: "BDEAC", what: "Central African development bank", for_who: "CEMAC businesses" },
    ],
    donor_grants: [
      { name: "World Bank Congo Programs", what: "Development programs with local procurement", for_who: "Congolese businesses" },
    ],
    startup_innovation: [
      { name: "Brazzaville Tech Hub", what: "Growing digital ecosystem", for_who: "Tech founders" },
    ],
    key_agencies: ["ANAPI (investment)", "BDEAC"],
    the_opportunity: "Oil services dominated by foreign companies — local suppliers for accommodation, catering, transport, and maintenance are urgently needed.",
  },

  {
    country: "Central African Republic",
    flag: "🇨🇫",
    region: "Central Africa",
    population: "5M",
    key_sectors: ["Diamond services", "Agriculture", "UN/humanitarian procurement"],
    procurement_portal: "ungm.org",
    procurement_note: "UN procurement is primary channel — register at UNGM. Government capacity limited.",
    youth_women_funds: [
      { name: "World Bank Youth Projects", what: "World Bank youth employment programs", for_who: "CAR youth" },
    ],
    development_bank_programs: [
      { name: "AfDB CAR Portfolio", what: "Reconstruction financing", for_who: "CAR businesses" },
    ],
    donor_grants: [
      { name: "MINUSCA / UN Procurement", what: "UN peacekeeping mission and UN agencies buy locally when possible", for_who: "CAR-registered businesses", apply_at: "ungm.org" },
    ],
    startup_innovation: [
      { name: "Bangui Digital Initiatives", what: "Nascent digital economy", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["UNDP CAR", "MINUSCA"],
    the_opportunity: "UN and NGO procurement for food, logistics, construction, and services is the most accessible channel — formal registration opens it immediately.",
  },

  {
    country: "Chad",
    flag: "🇹🇩",
    region: "Central Africa",
    population: "17M",
    key_sectors: ["Oil services", "Agriculture", "UN/humanitarian procurement", "Livestock"],
    procurement_portal: "ungm.org",
    procurement_note: "UNGM for UN procurement. Government and oil sector procurement main channels.",
    youth_women_funds: [
      { name: "ANADER Youth Fund", what: "Agricultural development and youth enterprise", for_who: "Chadian youth" },
      { name: "World Bank MSME Support", what: "IFC and World Bank SME programs", for_who: "Chadian businesses" },
    ],
    development_bank_programs: [
      { name: "BDEAC", what: "Central African development bank", for_who: "CEMAC businesses" },
    ],
    donor_grants: [
      { name: "Sahel Alliance Grants", what: "Multi-donor Sahel development fund", for_who: "Chadian businesses in agriculture and services" },
    ],
    startup_innovation: [
      { name: "N'Djamena Digital Economy", what: "Very early stage", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["ANIE (investment)", "BDEAC"],
    the_opportunity: "Oil sector local content and UN humanitarian procurement — two channels with real money that local businesses can access with basic registration.",
  },

  {
    country: "Equatorial Guinea",
    flag: "🇬🇶",
    region: "Central Africa",
    population: "1.5M",
    key_sectors: ["Oil & gas services", "Construction", "Agriculture"],
    procurement_note: "Oil company procurement is main channel. Small formal procurement system.",
    youth_women_funds: [
      { name: "INPYDE Youth Fund", what: "Government youth enterprise support", for_who: "EG youth" },
    ],
    development_bank_programs: [
      { name: "BDEAC", what: "Regional development bank", for_who: "CEMAC businesses" },
    ],
    donor_grants: [
      { name: "Limited donor presence due to oil wealth classification", what: "Oil company social responsibility programs main channel", for_who: "Local businesses" },
    ],
    startup_innovation: [
      { name: "Malabo Tech Scene", what: "Very early stage", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["APIGE (investment)"],
    the_opportunity: "Small population, huge oil revenues — government procurement for services, construction, and food supply is accessible to local businesses.",
  },

  {
    country: "São Tomé & Príncipe",
    flag: "🇸🇹",
    region: "Central Africa",
    population: "220K",
    key_sectors: ["Tourism (eco-tourism)", "Cocoa (heritage varieties)", "Fisheries", "Agriculture"],
    procurement_note: "Small island economy — donor and government procurement are main channels.",
    youth_women_funds: [
      { name: "AfDB Youth/Women Projects", what: "AfDB programs specifically for STP youth and women", for_who: "STP citizens" },
    ],
    development_bank_programs: [
      { name: "AfDB STP Portfolio", what: "Small island development finance", for_who: "STP businesses" },
    ],
    donor_grants: [
      { name: "EU Cocoa and Tourism Grants", what: "EU funds for specialty cocoa and sustainable tourism", for_who: "STP businesses" },
    ],
    startup_innovation: [
      { name: "Specialty cocoa market", what: "Some of the world's rarest cocoa grows here — premium brand opportunity", for_who: "Agribusiness entrepreneurs" },
    ],
    key_agencies: ["AAAC (investment)"],
    the_opportunity: "Rarest cacao in the world grows on this island — a single premium chocolate brand from São Tomé could sell for $20+ per bar to luxury markets.",
  },

  {
    country: "Burundi",
    flag: "🇧🇮",
    region: "East Africa",
    population: "12M",
    key_sectors: ["Coffee & tea processing", "Agriculture", "Construction", "UN procurement"],
    procurement_portal: "armp.bi",
    procurement_note: "ARMP Burundi procurement portal. UN system procurement available via UNGM.",
    youth_women_funds: [
      { name: "FNS Youth Employment", what: "Government youth enterprise programs", for_who: "Burundian youth" },
      { name: "INADES Women's Programs", what: "Agricultural and enterprise support for women", for_who: "Burundian women" },
    ],
    development_bank_programs: [
      { name: "AfDB Burundi Projects", what: "Agricultural and infrastructure projects with local procurement", for_who: "Burundian businesses" },
    ],
    donor_grants: [
      { name: "WFP Burundi Local Procurement", what: "WFP buys food locally — register as a food supplier", for_who: "Burundian food producers", apply_at: "wfp.org/procurement" },
    ],
    startup_innovation: [
      { name: "Bujumbura Tech Scene", what: "Nascent but growing", for_who: "Tech founders" },
    ],
    key_agencies: ["API (investment)", "ARMP"],
    the_opportunity: "Specialty coffee — Burundian arabica is among the world's highest quality. Direct trade and specialty roasting for export command 5–10× commodity prices.",
  },

  {
    country: "Comoros",
    flag: "🇰🇲",
    region: "East Africa",
    population: "870K",
    key_sectors: ["Ylang-ylang (perfume)", "Cloves & vanilla", "Tourism", "Fisheries"],
    procurement_note: "Small island economy — donor grants and government procurement are main channels.",
    youth_women_funds: [
      { name: "FADC Youth Fund", what: "Social development fund enterprise component", for_who: "Comorian youth" },
    ],
    development_bank_programs: [
      { name: "IsDB (Islamic Development Bank)", what: "IsDB active in Comoros for agriculture and SME programs", for_who: "Comorian businesses" },
    ],
    donor_grants: [
      { name: "AFD Comoros", what: "French development agency programs", for_who: "Comorian businesses" },
    ],
    startup_innovation: [
      { name: "Moroni Digital Economy", what: "Very early stage", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["ANPI-Comores"],
    the_opportunity: "Ylang-ylang — Comoros produces 80% of world's ylang-ylang oil used in Chanel No. 5 and other luxury perfumes. Brand the oil directly and earn 10× more.",
  },

  {
    country: "Djibouti",
    flag: "🇩🇯",
    region: "East Africa",
    population: "1M",
    key_sectors: ["Port & logistics", "Military base services", "Trade hub", "Renewable energy"],
    procurement_note: "Port of Djibouti is the main economic driver. Government and military procurement are key channels.",
    youth_women_funds: [
      { name: "ADDS Youth Fund", what: "Social development agency enterprise programs", for_who: "Djiboutian youth" },
    ],
    development_bank_programs: [
      { name: "IsDB Djibouti", what: "Islamic Development Bank programs", for_who: "Djiboutian businesses" },
    ],
    donor_grants: [
      { name: "USAID and military donor programs", what: "Given strategic location, significant military and donor procurement", for_who: "Djiboutian businesses" },
    ],
    startup_innovation: [
      { name: "Djibouti Logistics Innovation", what: "Port logistics and supply chain is the tech opportunity", for_who: "Tech founders in logistics" },
    ],
    key_agencies: ["PAID (investment)"],
    the_opportunity: "Every trade container between Asia and Europe stops here — port logistics services, warehousing, and trade finance for a company here serves the whole Horn of Africa.",
  },

  {
    country: "Somalia",
    flag: "🇸🇴",
    region: "East Africa",
    population: "17M",
    key_sectors: ["Telecommunications (remarkably advanced)", "Agriculture (livestock)", "Fisheries", "Reconstruction procurement"],
    procurement_portal: "ungm.org",
    procurement_note: "UN procurement main channel — AMISOM and UN agencies buy significant amounts locally. Government procurement rebuilding.",
    youth_women_funds: [
      { name: "UNDP Somalia Youth Programs", what: "Youth enterprise and employment through UNDP", for_who: "Somali youth" },
      { name: "Diaspora Investment Programs", what: "Somali diaspora investment facilitation", for_who: "Diaspora businesses" },
    ],
    development_bank_programs: [
      { name: "World Bank Somalia Portfolio", what: "Reconstruction financing with heavy local procurement requirements", for_who: "Somali businesses" },
    ],
    donor_grants: [
      { name: "AMISOM / ATMIS Procurement", what: "African Union mission procurement for food, fuel, and services", for_who: "Somalia-based businesses", apply_at: "ungm.org" },
    ],
    startup_innovation: [
      { name: "Dahabshiil / Fintech ecosystem", what: "Somalia has one of Africa's most advanced informal mobile money systems — tech opportunity here", for_who: "Fintech founders" },
    ],
    key_agencies: ["SOMINVEST", "UNDP Somalia"],
    the_opportunity: "Mobile money penetration is higher in Somalia than almost anywhere — fintech and digital services built here serve a resilient, cash-and-mobile economy.",
  },

  {
    country: "South Sudan",
    flag: "🇸🇸",
    region: "East Africa",
    population: "11M",
    key_sectors: ["Oil services", "Agriculture", "UN/humanitarian procurement", "Construction"],
    procurement_portal: "ungm.org",
    procurement_note: "UN procurement dominant — UNMISS and all UN agencies buy locally. Government system rebuilding.",
    youth_women_funds: [
      { name: "UNDP SSUPP Youth Programs", what: "Youth enterprise through UNDP", for_who: "South Sudanese youth" },
    ],
    development_bank_programs: [
      { name: "AfDB South Sudan Portfolio", what: "Infrastructure with local procurement", for_who: "South Sudanese businesses" },
    ],
    donor_grants: [
      { name: "UN System Procurement", what: "UNMISS, UNICEF, WFP — significant local procurement available", for_who: "South Sudan registered businesses", apply_at: "ungm.org" },
    ],
    startup_innovation: [
      { name: "Juba Digital Economy", what: "Very early stage", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["SSIC (investment)", "UNMISS"],
    the_opportunity: "UN procurement for food, construction, logistics, and services — any registered company can apply and these contracts fund years of operation.",
  },

  {
    country: "Sudan",
    flag: "🇸🇩",
    region: "North Africa",
    population: "46M",
    key_sectors: ["Agriculture (gum arabic, sesame)", "Mining (gold)", "Livestock", "Construction"],
    procurement_portal: "ungm.org",
    procurement_note: "UN procurement accessible via UNGM. Government procurement rebuilding post-conflict.",
    youth_women_funds: [
      { name: "SME Development Agency", what: "Government agency for small business support", for_who: "Sudanese entrepreneurs" },
    ],
    development_bank_programs: [
      { name: "IsDB Sudan Portfolio", what: "Islamic Development Bank programs in Sudan", for_who: "Sudanese businesses" },
    ],
    donor_grants: [
      { name: "UN Humanitarian Procurement", what: "UN agencies buy food, NFIs, and services locally", for_who: "Sudan-registered businesses", apply_at: "ungm.org" },
    ],
    startup_innovation: [
      { name: "Khartoum Tech Scene", what: "Diaspora-backed startups rebuilding", for_who: "Tech entrepreneurs" },
    ],
    key_agencies: ["GIAD Industrial Group", "ISDB Sudan"],
    the_opportunity: "Sudan produces 70% of the world's gum arabic (used in everything from Coca-Cola to pharmaceuticals) — but most is exported unprocessed at commodity prices.",
  },

  {
    country: "Eritrea",
    flag: "🇪🇷",
    region: "East Africa",
    population: "3.5M",
    key_sectors: ["Mining services (gold, copper)", "Agriculture", "Construction", "Fisheries"],
    procurement_note: "Very restricted external engagement. Agriculture, construction, and fisheries procurement through government ministries.",
    youth_women_funds: [
      { name: "Ministry of Labor Programs", what: "Government employment and enterprise programs", for_who: "Eritrean citizens" },
    ],
    development_bank_programs: [
      { name: "Limited international finance due to sanctions history", what: "Domestic finance through state banks", for_who: "Eritrean businesses" },
    ],
    donor_grants: [
      { name: "Limited donor access", what: "UN agencies active in food security — local food supplier registration available", for_who: "Eritrean food producers" },
    ],
    startup_innovation: [
      { name: "Asmara nascent digital", what: "Very limited but improving", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["Eritrean Investment Center"],
    the_opportunity: "Mining services for Bisha Mine (gold/copper) — Nevsun Resources was majority-owned Canadian but required local supplier development. New mining operations opening.",
  },

  // ── REMAINING COUNTRIES ───────────────────────────────────────────────────

  {
    country: "Madagascar",
    flag: "🇲🇬",
    region: "Southern Africa",
    population: "28M",
    key_sectors: ["Vanilla (world's largest producer)", "Textiles (AGOA access)", "Mining (chromite, nickel)", "Tourism"],
    procurement_portal: "armp.mg",
    procurement_note: "ARMP Madagascar procurement portal.",
    youth_women_funds: [
      { name: "EDBM Investment Board", what: "One-stop shop for business setup and SME support", for_who: "Malagasy entrepreneurs", apply_at: "edbm.mg" },
    ],
    development_bank_programs: [
      { name: "World Bank Madagascar Portfolio", what: "Significant WB presence — agricultural and infrastructure programs", for_who: "Malagasy businesses" },
    ],
    donor_grants: [
      { name: "USAID Feed the Future", what: "Agricultural value chain support", for_who: "Malagasy agribusinesses" },
    ],
    startup_innovation: [
      { name: "Antananarivo Tech Hub", what: "French-speaking startup ecosystem", for_who: "Tech founders" },
    ],
    key_agencies: ["EDBM", "ARMP"],
    the_opportunity: "80% of world's vanilla comes from Madagascar — but most is exported raw. Premium vanilla extract, flavoring, and branded products commanding 100× the raw material price.",
  },

  {
    country: "Malawi",
    flag: "🇲🇼",
    region: "Southern Africa",
    population: "20M",
    key_sectors: ["Tobacco processing", "Tea (high-quality)", "Agriculture", "Tourism (Lake Malawi)"],
    procurement_portal: "odpp.gov.mw",
    procurement_note: "Office of Director of Public Procurement portal.",
    youth_women_funds: [
      { name: "MARDEF Women Enterprise Fund", what: "Government fund for women-owned microenterprises", for_who: "Malawian women" },
      { name: "SEDOM Youth Enterprise", what: "Small Enterprise Development Organization of Malawi", for_who: "Malawian youth" },
    ],
    development_bank_programs: [
      { name: "INDEBANK", what: "Industrial Development Bank of Malawi", for_who: "Malawian businesses" },
    ],
    donor_grants: [
      { name: "USAID Malawi", what: "Agricultural and enterprise development", for_who: "Malawian businesses" },
    ],
    startup_innovation: [
      { name: "mHub Lilongwe", what: "Malawi's main tech hub", for_who: "Tech founders" },
    ],
    key_agencies: ["MITC (investment)", "ODPP", "SEDOM"],
    the_opportunity: "Premium Malawi tea — Ceylon tea commands high prices; Malawi's tea is equally high quality but branded cheaply. Direct-to-consumer tea brands can 10× farmer earnings.",
  },

  {
    country: "Mauritania",
    flag: "🇲🇷",
    region: "West Africa",
    population: "4.5M",
    key_sectors: ["Fisheries (Atlantic coast)", "Iron ore services", "Agriculture", "Mining"],
    procurement_portal: "armp.mr",
    procurement_note: "ARMP Mauritania — mining companies also have local procurement.",
    youth_women_funds: [
      { name: "ANPE Youth Employment", what: "Government youth employment and enterprise", for_who: "Mauritanian youth" },
    ],
    development_bank_programs: [
      { name: "IsDB Mauritania", what: "Islamic Development Bank programs", for_who: "Mauritanian businesses" },
    ],
    donor_grants: [
      { name: "EU Fisheries Partnership", what: "EU pays for fishing access — local processing facilities benefit", for_who: "Mauritanian fisheries businesses" },
    ],
    startup_innovation: [
      { name: "Nouakchott Digital Economy", what: "Early stage", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["APIM (investment)", "ARMP"],
    the_opportunity: "Atlantic fisheries — some of Africa's richest fishing grounds. Processing and export of fish products rather than raw fish export is a multi-million dollar gap.",
  },

  {
    country: "Niger",
    flag: "🇳🇪",
    region: "West Africa",
    population: "25M",
    key_sectors: ["Uranium services", "Gold mining", "Agriculture", "Livestock", "UN procurement"],
    procurement_portal: "armp.ne",
    procurement_note: "ARMP Niger and UN system procurement (UNGM).",
    youth_women_funds: [
      { name: "ANPE Youth Employment", what: "Employment agency with enterprise programs", for_who: "Nigerien youth" },
      { name: "3N Initiative Agricultural Fund", what: "Nigerians Nourishing Nigeriens — agricultural enterprise support", for_who: "Nigerien farmers" },
    ],
    development_bank_programs: [
      { name: "BOAD", what: "West African Development Bank financing", for_who: "UEMOA businesses" },
    ],
    donor_grants: [
      { name: "Sahel Alliance Fund", what: "Multi-donor program for Sahel development", for_who: "Nigerien businesses" },
      { name: "WFP Niger Local Procurement", what: "WFP buys food locally in Niger when available", for_who: "Nigerien food producers" },
    ],
    startup_innovation: [
      { name: "Niamey Tech Hub", what: "Nascent startup scene", for_who: "Tech founders" },
    ],
    key_agencies: ["ANIPEX (investment)", "ARMP", "ANPE"],
    the_opportunity: "Uranium services — Niger's mines need local suppliers for everything from food to technical services. UN procurement also accessible immediately via UNGM registration.",
  },

  {
    country: "Seychelles",
    flag: "🇸🇨",
    region: "East Africa",
    population: "100K",
    key_sectors: ["Tourism (ultra-luxury)", "Blue economy", "Finance", "Fisheries"],
    procurement_portal: "ppu.gov.sc",
    procurement_note: "Small economy — government procurement and tourism sector are main channels.",
    youth_women_funds: [
      { name: "SEnDaP Youth Enterprise", what: "Seychelles Enterprise Development Authority programs", for_who: "Seychellois youth" },
    ],
    development_bank_programs: [
      { name: "DBSeychelles", what: "Development Bank of Seychelles — SME lines", for_who: "Seychellois businesses" },
    ],
    donor_grants: [
      { name: "Blue Economy Grants", what: "International funds for sustainable ocean economy businesses", for_who: "Seychelles businesses" },
    ],
    startup_innovation: [
      { name: "Seychelles Blue Economy Hub", what: "Innovation in marine and ocean businesses", for_who: "Ocean economy entrepreneurs" },
    ],
    key_agencies: ["SIBA (investment)", "SEnDaP"],
    the_opportunity: "Ultra-luxury tourism market — suppliers of premium food, crafts, and services to Seychelles' luxury hotels command premium prices.",
  },

  {
    country: "Mauritius",
    flag: "🇲🇺",
    region: "Southern Africa",
    population: "1.3M",
    key_sectors: ["Financial services (Africa gateway)", "Tourism", "ICT & BPO", "Textiles", "Sugar processing"],
    procurement_portal: "govtenders.gov.mu",
    procurement_note: "Well-managed procurement system — Mauritius is often used as a gateway to access Africa.",
    youth_women_funds: [
      { name: "SME Mauritius", what: "Full-service SME support agency", for_who: "Mauritian SMEs", apply_at: "smemauritius.mu" },
      { name: "National Women Entrepreneur Council", what: "Support and finance for women-owned businesses", for_who: "Mauritian women entrepreneurs" },
    ],
    development_bank_programs: [
      { name: "DBM — Development Bank of Mauritius", what: "Development finance for priority sectors", for_who: "Mauritian businesses" },
      { name: "MIC — Mauritius Investment Corporation", what: "Government investment fund for strategic businesses", for_who: "Large Mauritian businesses" },
    ],
    donor_grants: [
      { name: "EU Mauritius Support", what: "EU association agreement — market access and business grants", for_who: "Mauritian businesses" },
    ],
    startup_innovation: [
      { name: "Mauritius Africa Fintech Hub", what: "Fintech gateway to African markets", for_who: "Fintech companies", apply_at: "mafh.mu" },
      { name: "Smart City Schemes", what: "Technology smart cities offering business space and incentives", for_who: "Tech and innovation companies" },
    ],
    key_agencies: ["EDB (investment)", "SME Mauritius", "DBM"],
    the_opportunity: "Gateway to Africa — many global companies headquarter African operations in Mauritius for its legal system and tax treaties. Set up here, serve the continent.",
  },

  {
    country: "Libya",
    flag: "🇱🇾",
    region: "North Africa",
    population: "7M",
    key_sectors: ["Oil & gas services", "Construction (reconstruction)", "Trade", "Infrastructure"],
    procurement_note: "Government procurement rebuilding. Oil sector procurement main channel.",
    youth_women_funds: [
      { name: "SME Fund Libya", what: "Government fund for SME development", for_who: "Libyan citizens" },
    ],
    development_bank_programs: [
      { name: "LIA (Libyan Investment Authority)", what: "Sovereign fund with SME investment programs", for_who: "Libyan businesses" },
    ],
    donor_grants: [
      { name: "EU Libya Support", what: "EU programs for economic recovery and SME support", for_who: "Libyan businesses" },
    ],
    startup_innovation: [
      { name: "Tripoli Tech Scene", what: "Oil wealth funding nascent ecosystem", for_who: "Tech founders" },
    ],
    key_agencies: ["LPTIC (investment)", "LIA"],
    the_opportunity: "Reconstruction boom — Libya needs everything rebuilt and oil revenues are flowing. Construction companies, suppliers, and service providers have a decade of demand.",
  },
];

// Helper: get country by name
export function getCountryPrograms(country: string): CountryOpportunityProfile | undefined {
  return ALL_COUNTRY_PROGRAMS.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );
}

// Helper: get countries by region
export function getCountriesByRegion(region: CountryOpportunityProfile["region"]): CountryOpportunityProfile[] {
  return ALL_COUNTRY_PROGRAMS.filter((c) => c.region === region);
}

// Helper: get all countries that have a specific program type
export function getCountriesWithIndigenousFocus(): CountryOpportunityProfile[] {
  return ALL_COUNTRY_PROGRAMS.filter((c) =>
    c.youth_women_funds.some((p) => p.indigenous_note)
  );
}
