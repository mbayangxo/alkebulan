// What each African country imports that it grows or could make locally.
// Used to ground AI recommendations in real market gaps.

export interface MarketGap {
  country: string;
  imported: string;
  local_advantage: string;
  product_ideas: string[];
  local_buyers: string[];
  export_channels: string[];
  starting_capital: string;
  government_program?: string;
}

export const MARKET_GAPS: MarketGap[] = [
  // ── SENEGAL ──────────────────────────────────────────────────────────
  {
    country: "Senegal",
    imported: "Packaged rice — mostly from Asia despite Casamance producing high-quality local rice",
    local_advantage: "Casamance region produces premium jasmine rice. Most sold at low prices in bulk with no branding.",
    product_ideas: ["Packaged Casamance jasmine rice", "Rice flour for baking", "Rice bread (pain de riz)", "Puffed rice snacks"],
    local_buyers: ["Auchan Dakar (8 stores)", "Prix stations", "Casino Sénégal", "Marché Sandaga wholesalers", "Local superettes and boutiques"],
    export_channels: ["Amazon FBA France (African food section)", "Amazon FBA US", "UK African food shops (Peckham, Brixton)", "Diaspora WhatsApp groups"],
    starting_capital: "$300–$800",
    government_program: "DER/FJ Women's Entrepreneurship Fund — up to 1.5M CFA at 5% interest",
  },
  {
    country: "Senegal",
    imported: "Commercial juices (Tropicana, Minute Maid) — imported from Europe",
    local_advantage: "Senegal produces bissap (hibiscus), ditax, tamarind, bouye (baobab) — all used in traditional drinks with no industrial packaging.",
    product_ideas: ["Bottled bissap drink", "Baobab juice (superfood export)", "Hibiscus tea bags for export", "Concentrated bissap syrup"],
    local_buyers: ["Auchan", "Prix", "Hospital and school canteens", "Dakar restaurants and hotels"],
    export_channels: ["Amazon US (hibiscus tea is growing fast)", "Whole Foods supplier program", "UK health food stores", "French supermarkets (large Senegalese diaspora)"],
    starting_capital: "$200–$600",
    government_program: "FONSIS Youth Investment Program",
  },
  {
    country: "Senegal",
    imported: "Industrial peanut oil from European manufacturers — despite Senegal being a world-leading groundnut producer",
    local_advantage: "Casamance and Peanut Basin produce 1M+ tons of groundnuts. Most exported raw. Artisan groundnut oil is richer and more flavourful.",
    product_ideas: ["Artisan cold-pressed groundnut oil", "Groundnut butter (peanut butter)", "Roasted groundnut snacks", "Groundnut-based baby food"],
    local_buyers: ["All major Dakar supermarkets", "Restaurant supply", "School canteens through PNBSF program"],
    export_channels: ["Amazon FBA (peanut butter market is huge)", "Etsy food section", "African food distributors in France"],
    starting_capital: "$500–$2,000",
    government_program: "ADPME agri-processing support",
  },

  // ── GHANA ──────────────────────────────────────────────────────────
  {
    country: "Ghana",
    imported: "Finished chocolate — Swiss and Belgian brands dominate Ghanaian supermarkets despite Ghana being the world's 2nd largest cocoa producer",
    local_advantage: "Ghana controls 20% of world cocoa supply. Processing adds 5–10× value. EU Regulation 2023/1115 now requires deforestation-free sourcing — creating direct buyer relationships.",
    product_ideas: ["Artisan Ghanaian chocolate bars (72% origin)", "Cocoa butter (beauty market)", "Cocoa powder (baking supply)", "Cocoa nibs (health food)"],
    local_buyers: ["Shoprite Ghana", "Game Ghana", "MaxMart", "Koala Supermarket Accra", "Hotels and restaurants"],
    export_channels: ["UK specialty chocolate retailers", "Whole Foods supplier program", "Amazon Handmade", "US farmers market distributors", "Tony's Chocolonely supply chain (they source directly)"],
    starting_capital: "$1,000–$5,000",
    government_program: "Ghana Cocoa Board (COCOBOD) value-addition scheme, NEIP grant",
  },
  {
    country: "Ghana",
    imported: "Imported shea-based cosmetics from Europe — despite Ghana being one of the world's largest shea producers",
    local_advantage: "Northern Ghana shea belt. Most shea exported as raw kernels at $0.30/kg. Refined shea butter retails for $15–$40/250g in US/UK markets.",
    product_ideas: ["Refined unrefined shea butter", "Shea body lotion", "Shea hair butter", "Shea lip balm", "Shea + cocoa butter blend"],
    local_buyers: ["Shoprite Ghana", "Accra Mall boutiques", "Wellness stores"],
    export_channels: ["Amazon US (top category for natural beauty)", "Etsy", "Target supplier program", "UK Holland & Barrett", "Afrikrea marketplace"],
    starting_capital: "$300–$1,500",
    government_program: "NEIP Ghana — up to GH₵ 100,000, Women's Shea Cooperative support",
  },
  {
    country: "Ghana",
    imported: "Processed plantain products — chips mostly from Latin America and UK",
    local_advantage: "Ghana grows abundant plantain year-round. Urban middle class wants packaged snacks. Large Ghanaian diaspora in UK/US buys plantain chips.",
    product_ideas: ["Packaged plantain chips", "Plantain flour (gluten-free market)", "Freeze-dried plantain", "Plantain fufu powder"],
    local_buyers: ["Shoprite", "KFC Ghana (supply)", "School feeding program", "Supermarkets in Kumasi and Accra"],
    export_channels: ["UK African food retailers (Brixton Market, Peckham)", "Amazon FBA UK", "Walmart US through FBA", "Whole Foods"],
    starting_capital: "$200–$1,000",
  },

  // ── NIGERIA ──────────────────────────────────────────────────────────
  {
    country: "Nigeria",
    imported: "Gluten-free flours (cassava flour, plantain flour) from UK and US — despite Nigeria being the world's largest cassava producer with 50M+ tons/year",
    local_advantage: "Nigeria produces more cassava than any country on Earth. In the UK and US, gluten-free cassava flour sells for $8–$15/kg. Unprocessed garri sells for $0.30/kg locally.",
    product_ideas: ["Premium packaged cassava flour (gluten-free certified)", "Branded garri in retail packaging", "Cassava pasta", "Cassava fufu powder export"],
    local_buyers: ["Shoprite Nigeria", "Spar Nigeria", "Hubmart Supermarkets", "Market Square Lagos", "Prince Ebeano Supermarket Abuja"],
    export_channels: ["Amazon FBA UK/US (gluten-free category is massive)", "Whole Foods supplier", "UK African food distributors (Deptford, Peckham)", "US diaspora food shops"],
    starting_capital: "$500–$3,000",
    government_program: "Federal Ministry of Agriculture Cassava Transformation Agenda, BOI Agric SME Loan",
  },
  {
    country: "Nigeria",
    imported: "Moringa supplements — sold in Nigerian pharmacies imported from India and Pakistan despite moringa growing wild across Northern Nigeria",
    local_advantage: "Moringa grows abundantly in Kano, Borno, and the North-Central states. On Amazon US, moringa powder sells for $15–$30/250g. India exports it processed and takes the margin.",
    product_ideas: ["Moringa powder (health supplement)", "Moringa tea bags", "Moringa oil (beauty)", "Moringa capsules", "Moringa dried leaves"],
    local_buyers: ["Nigerian pharmacies and health stores", "Jumia Nigeria", "Konga", "Health food cafes in Lagos/Abuja"],
    export_channels: ["Amazon FBA US/UK (moringa is a top-10 supplement search)", "iHerb supplier", "UK health food shops", "EU organic food distributors"],
    starting_capital: "$300–$1,500",
    government_program: "Bank of Industry Agric SME, CBN Anchor Borrowers Program",
  },
  {
    country: "Nigeria",
    imported: "Leather bags and shoes from Italy and China — despite Kano having one of the oldest leather industries in West Africa with 700-year-old traditions",
    local_advantage: "Kano Leather is globally recognized. Most sold unbranded at commodity price. With branding and social media, Kano leather bags can sell for $80–$300 in the US.",
    product_ideas: ["Branded Kano leather handbags", "Leather sandals (selling Nikes in Kano market, make them locally)", "Corporate leather accessories (portfolios, belts)", "Custom-order leather goods"],
    local_buyers: ["Upscale Lagos boutiques", "Abuja Airport duty-free", "Hotel gift shops"],
    export_channels: ["Etsy (African leather is a growing search)", "Instagram/TikTok direct", "Faire wholesale marketplace for boutiques", "Amazon Handmade"],
    starting_capital: "$200–$1,000",
    government_program: "CBN Creative Industry Financing Initiative (CIFI), BOI",
  },

  // ── KENYA ──────────────────────────────────────────────────────────
  {
    country: "Kenya",
    imported: "Specialty coffee in retail packaging — Kenya AA coffee is famous globally but Kenyans buy imported instant Nescafé at home",
    local_advantage: "Kenyan Nyeri and Kirinyaga AA arabica is among the world's most sought-after. Specialty coffee shops in US/UK pay $20–$40 for 250g. Kenyan farmers get $0.50/kg.",
    product_ideas: ["Direct-to-consumer roasted Kenyan coffee (subscriptions)", "Branded specialty Kenyan coffee bags", "Coffee tourism experiences", "Coffee equipment import for local cafes"],
    local_buyers: ["Naivas Supermarkets (fastest growing Kenyan chain)", "Carrefour Kenya", "Upscale Nairobi restaurants and hotels"],
    export_channels: ["Own website (Shopify + Klaviyo email subscriptions)", "Amazon gourmet food", "UK specialty coffee shops (direct B2B)", "US specialty roasters (buy green beans directly)"],
    starting_capital: "$500–$3,000",
    government_program: "Kenya Coffee Directorate export support, Youth Enterprise Development Fund",
  },
  {
    country: "Kenya",
    imported: "Avocado oil — imported from Mexico and Chile despite Kenya being one of the world's top 5 avocado producers",
    local_advantage: "Murang'a and Meru counties produce Hass avocados year-round. Cold-pressed avocado oil retails for $12–$25/100ml in European beauty markets.",
    product_ideas: ["Cold-pressed avocado oil (food grade)", "Avocado oil for hair and skin (beauty)", "Avocado face masks", "Guacamole in jars for export"],
    local_buyers: ["Naivas", "Quickmart", "Carrefour Kenya", "Nairobi hotel restaurants"],
    export_channels: ["UK Holland & Barrett", "Amazon UK natural beauty", "Germany organic beauty market", "Etsy"],
    starting_capital: "$400–$2,000",
    government_program: "KIRDI (Kenya Industrial Research Development Institute) for SME processing",
  },

  // ── CÔTE D'IVOIRE ──────────────────────────────────────────────────
  {
    country: "Côte d'Ivoire",
    imported: "Packaged cashews — despite Côte d'Ivoire being the world's largest cashew producer, most nuts are exported raw to Vietnam for processing",
    local_advantage: "CIV produces 900,000 tons of cashews per year. 90% exported raw. In US/UK, roasted packaged cashews sell for $8–$15/200g. CIV gets $0.90/kg raw.",
    product_ideas: ["Roasted packaged cashews (flavoured: honey, spicy, natural)", "Cashew butter", "Cashew milk", "Cashew apple juice (the fruit is thrown away)"],
    local_buyers: ["Carrefour Abidjan", "Spar CIV", "Premium Abidjan hotels", "Air Côte d'Ivoire in-flight snacks"],
    export_channels: ["Amazon FBA France (large CIV diaspora)", "UK supermarket supplier (Tesco, Waitrose local brand programs)", "Germany organic food trade fairs"],
    starting_capital: "$500–$3,000",
    government_program: "Conseil du Coton et de l'Anacarde value-addition grants",
  },

  // ── MOROCCO ──────────────────────────────────────────────────────────
  {
    country: "Morocco",
    imported: "Beauty products — French and European brands dominate despite Morocco producing argan, rose water, ghassoul clay, and saffron",
    local_advantage: "Morocco has near-monopoly on argan oil. Taliouine saffron is world-class. Roses of Kelaat M'Gouna are famous globally. Most sold as low-grade bulk.",
    product_ideas: ["Premium argan oil (food grade + cosmetic grade)", "Rose water + rose oil beauty line", "Ghassoul clay face mask (trending in natural beauty)", "Saffron gift sets for export"],
    local_buyers: ["Marjane Hypermarché", "Label'Vie", "Carrefour Maroc", "Moroccan pharmacy chains", "Tourist Marrakech souks (direct retail)"],
    export_channels: ["Amazon EU (argan beauty is top 20 natural beauty)", "Sephora supplier program", "ASOS Marketplace", "Faire boutique wholesale", "France (large Moroccan diaspora)"],
    starting_capital: "$500–$3,000",
    government_program: "Maroc PME subsidy — up to 80% of investment cost, women's cooperative support (INDH)",
  },

  // ── SOUTH AFRICA ──────────────────────────────────────────────────
  {
    country: "South Africa",
    imported: "Premium spirits — whisky and gin imported from UK, Scotland, US. South Africa has world-class fruit, honey, indigenous plants (rooibos, buchu, fynbos)",
    local_advantage: "South Africa's rooibos is globally unique. Buchu is a protected indigenous plant used in medicine. Honeybush grows only in Western Cape. All underutilized in premium products.",
    product_ideas: ["Rooibos gin and spirits", "Buchu health supplement", "Fynbos honey skincare range", "Honeybush tea for export", "African botanicals bitters and tonics"],
    local_buyers: ["Woolworths Food SA", "Pick n Pay", "Checkers", "Liquor World", "Upscale Cape Town/Joburg restaurants"],
    export_channels: ["UK specialty gin retailers", "Amazon UK premium spirits", "Germany natural wellness market", "US Whole Foods"],
    starting_capital: "$1,000–$10,000",
    government_program: "SEFA Youth Fund, IDC (Industrial Development Corporation) agro-processing",
  },
];

// Budget tiers — what's realistic to start at each level
export const BUDGET_TIERS = [
  {
    id: "zero",
    label: "Under $100",
    emoji: "🌱",
    description: "Starting from nearly nothing",
    archetypes: ["Service-based", "Reselling", "Digital"],
    examples: ["WhatsApp business reseller", "M-Pesa agent", "Social media content for local businesses", "Skills-based freelancing"],
  },
  {
    id: "low",
    label: "$100–$500",
    emoji: "💧",
    description: "A little capital, a real business",
    archetypes: ["Food production", "Beauty products", "Market trading"],
    examples: ["Packaged snacks from local ingredients", "Soap and beauty products", "Bulk buying and reselling", "Small catering"],
  },
  {
    id: "medium",
    label: "$500–$2,000",
    emoji: "⚡",
    description: "Enough to go to market seriously",
    archetypes: ["Branded packaged goods", "Export samples", "Small manufacturing"],
    examples: ["Branded local food products", "Export sample orders to diaspora", "Fashion and textiles", "Agricultural processing"],
  },
  {
    id: "growth",
    label: "$2,000–$10,000",
    emoji: "🔥",
    description: "Ready to build something real",
    archetypes: ["Formal production", "Government supplier", "Import substitution"],
    examples: ["Production equipment and packaging", "Government supplier registration + first bid", "Cold chain and logistics", "Wholesale to supermarkets"],
  },
  {
    id: "serious",
    label: "$10,000–$50,000",
    emoji: "🏗️",
    description: "Serious capital deployment",
    archetypes: ["Manufacturing", "Export business", "Franchise"],
    examples: ["Small factory", "Export freight and certifications", "Franchise territory", "Tech product MVP"],
  },
  {
    id: "scale",
    label: "Over $50,000",
    emoji: "🚀",
    description: "Scale-stage investment",
    archetypes: ["Infrastructure", "Regional expansion", "DFI co-investment"],
    examples: ["Regional distribution", "Africa50 / IFC co-investment target", "Multi-country procurement"],
  },
];

// The 4 levels of impact to frame every recommendation
export const IMPACT_LEVELS = [
  { id: "self", label: "You", icon: "👤", description: "Income, independence, ownership" },
  { id: "country", label: "Your Country", icon: "🏳️", description: "Reducing imports, building local industry" },
  { id: "people", label: "Your People", icon: "👥", description: "Jobs created, problems solved" },
  { id: "continent", label: "Africa", icon: "🌍", description: "Building African-owned value chains" },
];
