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

export interface ProgramEntry {
  name: string;
  what: string;
  for_who: string;
  amount?: string;
  apply_at?: string;
  indigenous_note?: string;
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
    procurement_note: "All public tenders on marchespublics.ci — the world's largest cocoa producer's procurement system is substantial.",
    youth_women_funds: [
      { name: "FAFCI — Fund for Women", what: "Government microcredit for women entrepreneurs", for_who: "Ivorian women", amount: "CFA 100,000–5,000,000" },
      { name: "AGEFOP Youth Employment", what: "Vocational training and enterprise support for youth", for_who: "Ivorian youth" },
      { name: "PNUD-backed Youth Entrepreneurship", what: "UNDP youth enterprise support in targeted regions", for_who: "Ivorian youth" },
    ],
    development_bank_programs: [
      { name: "BOAD (West African Development Bank)", what: "Finances large infrastructure and SME projects across UEMOA zone", for_who: "CIV businesses", apply_at: "boad.org" },
      { name: "Caisse Nationale de Prévoyance Sociale SME Loans", what: "Pension fund-backed SME loans for Ivorian businesses", for_who: "Ivorian companies" },
    ],
    donor_grants: [
      { name: "EU Private Sector Development", what: "EU-funded cocoa and cashew value chain development", for_who: "Ivorian agribusinesses" },
    ],
    startup_innovation: [
      { name: "Abidjan Tech Hub", what: "French-speaking West Africa's growing tech hub", for_who: "Tech startups" },
      { name: "Yamoussoukro Digital Economy Zone", what: "Special economic zone for digital businesses", for_who: "Tech companies" },
    ],
    key_agencies: ["CEPICI (investment promotion)", "AGEFOP", "BOAD"],
    the_opportunity: "World's largest cocoa producer — processing less than 40% locally. Every cocoa processor built here is a business that should have existed 30 years ago.",
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
    procurement_note: "Government tenders on DGMP portal. UN procurement (MINUSMA winding down but other UN agencies active).",
    youth_women_funds: [
      { name: "APEJ — Youth Employment Agency", what: "Youth employment and training programs", for_who: "Malian youth" },
      { name: "FARE (women's fund)", what: "Microcredit for women entrepreneurs", for_who: "Malian women", amount: "CFA 50,000–2,000,000" },
    ],
    development_bank_programs: [
      { name: "BOAD", what: "West African Development Bank financing for Mali businesses", for_who: "Malian companies", apply_at: "boad.org" },
      { name: "BMS-SA Agricultural Finance", what: "Malian development bank agricultural loans", for_who: "Malian farmers" },
    ],
    donor_grants: [
      { name: "World Food Programme Procurement", what: "WFP buys food locally when possible — food suppliers can register", for_who: "Malian food businesses", apply_at: "wfp.org/procurement" },
    ],
    startup_innovation: [
      { name: "JOKKOLABS Bamako", what: "Co-working and startup support in Bamako", for_who: "Tech founders" },
    ],
    key_agencies: ["APEJ", "ANPE", "BOAD"],
    the_opportunity: "Despite instability, Mali's gold sector and agricultural processing are open — mining service companies need local suppliers for everything.",
  },

  {
    country: "Burkina Faso",
    flag: "🇧🇫",
    region: "West Africa",
    population: "22M",
    key_sectors: ["Gold mining services", "Cotton processing", "Agriculture", "Construction"],
    procurement_portal: "dgcmef.gov.bf",
    procurement_note: "Government procurement through DGCMEF. Mining companies have local procurement requirements.",
    youth_women_funds: [
      { name: "FAPE — Enterprise Promotion Fund", what: "Youth and women enterprise fund", for_who: "Burkinabè entrepreneurs" },
      { name: "FAARF — Women's Fund", what: "Revolving fund for women-owned microenterprises", for_who: "Burkinabè women" },
    ],
    development_bank_programs: [
      { name: "BOAD Regional Finance", what: "West African Development Bank projects in Burkina Faso", for_who: "Burkinabè businesses" },
    ],
    donor_grants: [
      { name: "USAID Burkina Faso", what: "Agricultural and resilience programs — local procurement of food and services", for_who: "Burkinabè agribusinesses" },
    ],
    startup_innovation: [
      { name: "Ouagadougou Tech Ecosystem", what: "Growing startup scene despite instability", for_who: "Tech founders" },
    ],
    key_agencies: ["CEFORE", "FAPE", "BOAD"],
    the_opportunity: "Mining service contracts (catering, security, transport, equipment) at gold mines — most go unclaimed by local companies.",
  },

  {
    country: "Guinea",
    flag: "🇬🇳",
    region: "West Africa",
    population: "13M",
    key_sectors: ["Bauxite & alumina services", "Agriculture", "Construction", "Logistics"],
    procurement_portal: "marchespublics.gov.gn",
    procurement_note: "Government tenders and mining company local procurement are the main channels.",
    youth_women_funds: [
      { name: "FAPA Guinea", what: "Youth and women enterprise fund backed by government and donors", for_who: "Guinean youth and women" },
      { name: "Ministry of Youth Enterprise Fund", what: "Youth business grants and loans", for_who: "Guinean youth" },
    ],
    development_bank_programs: [
      { name: "IFC Guinea Portfolio", what: "IFC finances private sector in Guinea's mining and agri sectors", for_who: "Guinean private sector" },
    ],
    donor_grants: [
      { name: "CBG/SAG Mining Community Funds", what: "Bauxite mining companies required to fund community businesses — apply locally", for_who: "Businesses in mining regions" },
    ],
    startup_innovation: [
      { name: "Orange Digital Center Conakry", what: "Tech training and startup support", for_who: "Tech founders" },
    ],
    key_agencies: ["AGUIPE (investment promotion)", "FAPA"],
    the_opportunity: "30% of world's bauxite is here — mining service suppliers (catering, transport, maintenance, environmental) desperately needed from local businesses.",
  },

  {
    country: "Benin",
    flag: "🇧🇯",
    region: "West Africa",
    population: "13M",
    key_sectors: ["Agriculture (cotton, cashews)", "Trade & transit", "Tourism (Vodoun heritage)", "Digital economy"],
    procurement_portal: "armp.bj",
    procurement_note: "Public procurement through ARMP Bénin. Growing digital economy procurement.",
    youth_women_funds: [
      { name: "FNPEJ — National Fund for Youth Enterprise", what: "Government fund for youth-owned businesses", for_who: "Beninese youth", amount: "CFA 500,000–10,000,000" },
      { name: "FNMF Women's Microcredit Fund", what: "Microcredit for women entrepreneurs", for_who: "Beninese women" },
    ],
    development_bank_programs: [
      { name: "BOAD", what: "West African Development Bank financing", for_who: "Beninese businesses" },
    ],
    donor_grants: [
      { name: "MCC Compact Grant", what: "Millennium Challenge Corporation infrastructure and agri grants in Benin", for_who: "Beninese businesses and cooperatives" },
    ],
    startup_innovation: [
      { name: "Cotonou Tech Hub", what: "Growing startup ecosystem", for_who: "Tech founders" },
      { name: "Digital Benin Initiative", what: "Government digital economy push — tech procurement opportunities", for_who: "Digital businesses" },
    ],
    key_agencies: ["APIEX (investment)", "ANPME", "FNPEJ"],
    the_opportunity: "Trade transit hub between Nigeria and francophone West Africa — logistics, warehousing, and processing businesses here serve the whole region.",
  },

  {
    country: "Togo",
    flag: "🇹🇬",
    region: "West Africa",
    population: "8M",
    key_sectors: ["Phosphate mining services", "Logistics (Port of Lomé)", "Agriculture", "Trade"],
    procurement_portal: "armp.tg",
    procurement_note: "Public procurement on ARMP Togo portal.",
    youth_women_funds: [
      { name: "FAIEJ — Youth Enterprise Investment Fund", what: "Main government fund for young entrepreneurs", for_who: "Togolese youth", amount: "CFA 500,000–5,000,000", apply_at: "faiej.tg" },
      { name: "FNFI Women's Fund", what: "National inclusive finance fund for women", for_who: "Togolese women" },
    ],
    development_bank_programs: [
      { name: "BOAD", what: "Regional development bank financing", for_who: "Togolese businesses" },
      { name: "UTB (Union Togolaise de Banque)", what: "Development-oriented bank with SME programs", for_who: "Togolese SMEs" },
    ],
    donor_grants: [
      { name: "EU-Togo Support Programme", what: "EU funds for Togolese agriculture and SME development", for_who: "Togolese businesses" },
    ],
    startup_innovation: [
      { name: "Lomé Digital Hub", what: "Tech accelerator and co-working space", for_who: "Tech founders" },
    ],
    key_agencies: ["APIF", "FAIEJ", "BOAD"],
    the_opportunity: "Port of Lomé is the deepest port in West Africa — logistics, warehousing, and value-added services to port operations is a massive gap.",
  },

  {
    country: "Sierra Leone",
    flag: "🇸🇱",
    region: "West Africa",
    population: "8M",
    key_sectors: ["Mineral services (iron ore, diamonds, rutile)", "Agriculture", "Fisheries", "Tourism (beaches)"],
    procurement_portal: "nppa.gov.sl",
    procurement_note: "Government procurement on NPPA Sierra Leone portal.",
    youth_women_funds: [
      { name: "SLIEPA SME Support", what: "Sierra Leone investment promotion agency SME programs", for_who: "Sierra Leonean entrepreneurs" },
      { name: "NASSIT SME Loans", what: "Pension fund SME financing for Sierra Leonean businesses", for_who: "Sierra Leonean businesses" },
    ],
    development_bank_programs: [
      { name: "World Bank Sierra Leone Portfolio", what: "Agricultural and youth employment programs with local procurement", for_who: "Sierra Leonean businesses" },
    ],
    donor_grants: [
      { name: "Tony Elumelu Foundation", what: "Pan-African fund open to Sierra Leoneans", for_who: "Entrepreneurs", amount: "$5,000" },
    ],
    startup_innovation: [
      { name: "Transform Finance Sierra Leone", what: "Financial inclusion and fintech support", for_who: "Fintech founders" },
    ],
    key_agencies: ["SLIEPA", "NRA", "NPPA"],
    the_opportunity: "Post-conflict rebuild + mineral boom = huge procurement demand — but very few locally registered companies to supply it.",
  },

  {
    country: "Liberia",
    flag: "🇱🇷",
    region: "West Africa",
    population: "5M",
    key_sectors: ["Rubber processing", "Iron ore services", "Agriculture", "Timber (sustainable)"],
    procurement_portal: "ppcc.gov.lr",
    procurement_note: "Government procurement on PPCC (Public Procurement and Concessions Commission) portal.",
    youth_women_funds: [
      { name: "LACE — Liberia Agency for Community Empowerment", what: "Government youth and community enterprise programs", for_who: "Liberian youth" },
      { name: "Youth Entrepreneurship Investment Bank (AfDB-backed)", what: "AfDB-supported bank providing youth loans at concessional rates", for_who: "Liberian youth" },
    ],
    development_bank_programs: [
      { name: "AfDB Liberia Portfolio", what: "Infrastructure and agri projects with significant local procurement", for_who: "Liberian businesses" },
    ],
    donor_grants: [
      { name: "USAID Liberia", what: "Agricultural, governance, and economic growth programs", for_who: "Liberian businesses and NGOs" },
    ],
    startup_innovation: [
      { name: "iLab Liberia", what: "Monrovia's main tech hub", for_who: "Tech founders" },
    ],
    key_agencies: ["LIPA (investment)", "PPCC", "LACE"],
    the_opportunity: "Rubber — Liberia is one of the world's biggest producers yet earns pennies. Processing and value-addition is wide open.",
  },

  {
    country: "Guinea-Bissau",
    flag: "🇬🇼",
    region: "West Africa",
    population: "2M",
    key_sectors: ["Cashew processing", "Fisheries", "Agriculture"],
    procurement_note: "Government procurement limited — donor and UN procurement are main channels. UNGM registration for UN contracts.",
    youth_women_funds: [
      { name: "World Bank PDSS Project", what: "Social development and enterprise support", for_who: "Bissau-Guinean youth and women" },
    ],
    development_bank_programs: [
      { name: "BOAD", what: "West African Development Bank — limited but present", for_who: "Businesses in UEMOA zone" },
    ],
    donor_grants: [
      { name: "FAO Agricultural Support", what: "Food and agriculture organization procurement and grants", for_who: "Farmers and agribusinesses" },
    ],
    startup_innovation: [{ name: "Bissau Digital Initiative", what: "Nascent digital economy support", for_who: "Local entrepreneurs" }],
    key_agencies: ["CCIA-GB (chamber of commerce)"],
    the_opportunity: "6th largest cashew producer in the world — exporting 100% raw. A single cashew processing plant here is a $10M+ business opportunity.",
  },

  {
    country: "Gambia",
    flag: "🇬🇲",
    region: "West Africa",
    population: "2.5M",
    key_sectors: ["Tourism", "Agriculture (groundnuts)", "Fisheries", "Remittances"],
    procurement_portal: "gppa.gm",
    procurement_note: "Government procurement on GPPA portal.",
    youth_women_funds: [
      { name: "Youth Empowerment Project (YEP)", what: "World Bank-backed youth enterprise and training", for_who: "Gambian youth" },
      { name: "GIEPA SME Support", what: "Gambia investment and export promotion — SME grants", for_who: "Gambian SMEs" },
    ],
    development_bank_programs: [
      { name: "ECOWAS Bank SME Lines", what: "Regional development bank SME financing", for_who: "Gambian SMEs" },
    ],
    donor_grants: [
      { name: "EU-Gambia Support", what: "Agricultural and SME development grants", for_who: "Gambian businesses" },
    ],
    startup_innovation: [{ name: "Gambia Tech Hub", what: "Small but growing digital ecosystem", for_who: "Tech founders" }],
    key_agencies: ["GIEPA", "GPPA", "GRA"],
    the_opportunity: "Diaspora remittances flow in massively — financial services, property investment, and tourism businesses serving the diaspora connection are under-built.",
  },

  {
    country: "Cabo Verde",
    flag: "🇨🇻",
    region: "West Africa",
    population: "600K",
    key_sectors: ["Tourism", "Blue economy (fisheries, shipping)", "Renewable energy", "Financial services"],
    procurement_portal: "portalcompras.gov.cv",
    procurement_note: "Small economy but strong institutions — government procurement portal well-managed.",
    youth_women_funds: [
      { name: "IEFP Youth Training Grants", what: "Vocational training and enterprise grants for youth", for_who: "Cape Verdean youth" },
      { name: "BCA SME Lines", what: "Commercial bank SME lines backed by government guarantees", for_who: "Cape Verdean SMEs" },
    ],
    development_bank_programs: [
      { name: "AfDB Cape Verde Portfolio", what: "Small economy programs — energy and tourism focus", for_who: "Cape Verdean businesses" },
    ],
    donor_grants: [
      { name: "EU Atlantic Cooperation Grants", what: "EU grants for Atlantic island economies", for_who: "Cape Verdean businesses" },
    ],
    startup_innovation: [{ name: "Praia Digital Hub", what: "Growing tech scene — small but well-connected", for_who: "Tech founders" }],
    key_agencies: ["ADEI (investment)", "IEFP"],
    the_opportunity: "Blue economy — fisheries processing, marine services, and renewable energy on Atlantic islands is dramatically underexploited.",
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
    procurement_note: "Government procurement on PPA Ethiopia portal. Industrial park procurement is a separate channel.",
    youth_women_funds: [
      { name: "YEIP — Youth Entrepreneurship & Innovation Program", what: "Government youth enterprise and innovation fund", for_who: "Ethiopian youth" },
      { name: "Women's Development Fund", what: "Ministry of Women fund for women entrepreneurs", for_who: "Ethiopian women" },
    ],
    development_bank_programs: [
      { name: "DBE — Development Bank of Ethiopia", what: "Ethiopia's national development bank — priority sectors get low rates", for_who: "Ethiopian businesses", apply_at: "dbe.com.et" },
      { name: "Ethiopian Investment Commission", what: "Investment facilitation and incentives for priority sectors", for_who: "Investors and businesses", apply_at: "ethiopiainvestment.gov.et" },
    ],
    donor_grants: [
      { name: "GIZ Ethiopia", what: "Vocational training and private sector development", for_who: "Ethiopian businesses and workers" },
      { name: "USAID Ethiopia", what: "Agricultural, food security, and enterprise programs", for_who: "Ethiopian businesses" },
    ],
    startup_innovation: [
      { name: "iCog Labs Addis", what: "AI and tech startup hub", for_who: "Tech founders" },
      { name: "Africa to Silicon Valley (A2SV)", what: "Programming training and placement program", for_who: "Ethiopian coders" },
    ],
    key_agencies: ["EIC", "DBE", "ECAE (export)", "ERCA (revenue)"],
    the_opportunity: "Industrial parks need thousands of Ethiopians to run production, quality control, logistics, and services — and the domestic market of 120M is still barely served.",
  },

  {
    country: "Tanzania",
    flag: "🇹🇿",
    region: "East Africa",
    population: "63M",
    key_sectors: ["Agriculture (tobacco, cashews, coffee)", "Tourism (Serengeti, Zanzibar)", "Mining (gold, tanzanite)", "Construction"],
    procurement_portal: "tender.go.tz",
    procurement_note: "TANePS (Tanzania National e-Procurement System) at tendering.go.tz — well-organized digital procurement.",
    youth_women_funds: [
      { name: "SIDO — Small Industries Development", what: "Government agency supporting Tanzanian SMEs with training and finance", for_who: "Tanzanian small businesses", apply_at: "sido.go.tz" },
      { name: "Youth Development Fund (YDF)", what: "Government fund for youth entrepreneurship", for_who: "Tanzanian youth" },
      { name: "Women Enterprise Fund", what: "Low-interest loans for women-owned businesses", for_who: "Tanzanian women" },
    ],
    development_bank_programs: [
      { name: "TIB Development Bank", what: "Tanzania's development bank for industrial and agri projects", for_who: "Tanzanian businesses" },
      { name: "AfDB Tanzania Portfolio", what: "Infrastructure and agriculture projects with local content requirements", for_who: "Tanzanian businesses" },
    ],
    donor_grants: [
      { name: "MCC Tanzania Compact", what: "Millennium Challenge infrastructure and agri grant programs", for_who: "Tanzanian businesses and cooperatives" },
    ],
    startup_innovation: [
      { name: "Dar es Salaam Tech Scene", what: "Growing startup ecosystem — kLab and BUNI hubs", for_who: "Tech founders" },
    ],
    key_agencies: ["SIDO", "TIC (investment)", "TIB", "TANePS"],
    the_opportunity: "Tourism is one of Africa's most lucrative — but Tanzanian-owned tourism businesses are a fraction of the sector. Supply chain to hotels and lodges is wide open.",
  },

  {
    country: "Uganda",
    flag: "🇺🇬",
    region: "East Africa",
    population: "48M",
    key_sectors: ["Agriculture (coffee, tea, vanilla)", "Oil services (Albertine Basin)", "Construction", "Manufacturing"],
    procurement_portal: "gpp.ppda.go.ug",
    procurement_note: "Government procurement on PPDA portal. Oil sector local content requirements creating significant SME opportunity.",
    youth_women_funds: [
      { name: "Youth Livelihood Programme (YLP)", what: "Government interest-free loans for youth groups", for_who: "Ugandan youth", amount: "UGX 5M–25M per group" },
      { name: "Women Entrepreneurship Programme (WEP)", what: "Government grants for women-owned businesses", for_who: "Ugandan women" },
      { name: "UWESO Women's Fund", what: "Credit for women entrepreneurs", for_who: "Ugandan women" },
    ],
    development_bank_programs: [
      { name: "UDB — Uganda Development Bank", what: "Development finance for priority sectors", for_who: "Ugandan businesses", apply_at: "udb.co.ug" },
      { name: "DFCU Bank SME Lines", what: "SME credit backed by development finance", for_who: "Ugandan SMEs" },
    ],
    donor_grants: [
      { name: "GIZ Uganda Skills Programme", what: "Vocational training and enterprise support", for_who: "Ugandan youth" },
    ],
    startup_innovation: [
      { name: "Outbox Hub Kampala", what: "Main tech accelerator and co-working space", for_who: "Tech founders" },
      { name: "Innovation Village Kampala", what: "Startup studio and co-working", for_who: "Entrepreneurs" },
    ],
    key_agencies: ["UDB", "PPDA", "UWESO", "UIA (investment)"],
    the_opportunity: "Uganda's oil sector is coming online — local content requirements mean Ugandan businesses must supply 30%+ of services. Oil service companies are urgently needed.",
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
