// Industry Intelligence: who controls each step, where margin lives, how to enter.
// Five industries where Africa produces the raw material but imports the finished product.

export interface ChainStep {
  step: string;
  location: string;
  who_controls: string;
  africa_share: string;
  margin: string;
  why_foreigners_win: string;
}

export interface EntryPoint {
  capital: string;
  label: string;
  what_you_do: string;
  example: string;
  how_to_start: string;
}

export interface ValueLeakage {
  raw_export: string;
  raw_price: string;
  finished_product: string;
  finished_price: string;
  africa_earns_pct: string;
  annual_value_lost: string;
  interception_move: string;
}

export interface BusinessPath {
  name: string;
  tagline: string;
  capital: string;
  timeline: string;
  milestones: Array<{ month: string; action: string; result: string }>;
  suppliers: string[];
  first_sale: string;
  revenue_ceiling: string;
}

export interface IndustryIntelligence {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  countries: string[];
  heritage: string;
  extraction_headline: string;
  market_size: string;
  chain: ChainStep[];
  value_leakage: ValueLeakage;
  entry_points: EntryPoint[];
  paths: BusinessPath[];
  the_insight: string;
}

export const INDUSTRIES: IndustryIntelligence[] = [
  {
    slug: "cocoa",
    name: "Cocoa",
    icon: "🍫",
    tagline: "Ghana and Côte d'Ivoire grow 65% of the world's cocoa. They receive less than 6% of the chocolate industry's value.",
    countries: ["Ghana", "Côte d'Ivoire", "Nigeria", "Cameroon", "Tanzania", "Uganda"],
    heritage:
      "The Ashanti of Ghana used cocoa culturally for centuries before it became a global commodity. When colonial powers arrived, they understood that the real money was not in the bean — it was in the product. They kept processing in Europe deliberately. That structure still holds today. The same hands that tend the trees don't touch the wrapper.",
    extraction_headline:
      "Swiss companies sell $45 billion of chocolate per year. The farmers who grow every bean see $2,400/year on average.",
    market_size: "$130 billion global chocolate market (2024)",
    chain: [
      {
        step: "Farming",
        location: "Ghana, Côte d'Ivoire",
        who_controls: "5.5 million smallholder farmers",
        africa_share: "100%",
        margin: "3–6% of final chocolate price",
        why_foreigners_win: "Farmers sell only beans — no access to processing, branding, or retail distribution. Price is set by global commodity exchanges in London and New York.",
      },
      {
        step: "Cocoa Trading & Export",
        location: "Abidjan, Accra, London",
        who_controls: "Cargill, Olam, Barry Callebaut",
        africa_share: "Minimal — mostly licensed middlemen",
        margin: "8–12% of final value",
        why_foreigners_win: "Control port logistics, export licenses, financing. Farmers need cash before harvest — buyers provide loans that lock in future supply below market.",
      },
      {
        step: "Grinding & Processing",
        location: "Netherlands, Germany, USA",
        who_controls: "Cargill, Barry Callebaut, Olam (some in Africa)",
        africa_share: "~20% of grinding (growing slowly)",
        margin: "15–25% value-add",
        why_foreigners_win: "Processing equipment costs $5M+. European factories are subsidized. EU tariff structure charges 0% on raw beans, 30%+ on processed cocoa — deliberately pricing out African processing.",
      },
      {
        step: "Chocolate Manufacturing",
        location: "Switzerland, Belgium, Germany, USA",
        who_controls: "Nestlé, Mars, Mondelez, Lindt, Ferrero",
        africa_share: "Near zero",
        margin: "40–60% of final price",
        why_foreigners_win: "Brand, recipe, R&D, distribution networks built over 100+ years. Premium chocolate brands are identity products — consumers pay for the name.",
      },
      {
        step: "Retail & Branding",
        location: "Global",
        who_controls: "Supermarket chains, luxury boutiques",
        africa_share: "Zero",
        margin: "25–35% of final price",
        why_foreigners_win: "Shelf space, retailer relationships, and e-commerce logistics controlled by western companies.",
      },
    ],
    value_leakage: {
      raw_export: "Cocoa beans",
      raw_price: "$2,400–3,000/tonne",
      finished_product: "Premium chocolate bar",
      finished_price: "$40,000–80,000/tonne equivalent",
      africa_earns_pct: "5–6%",
      annual_value_lost: "$120 billion/year",
      interception_move:
        "Process cocoa at origin. Sell couverture chocolate (professional grade), cocoa butter, and finished bars. Bypass the commodity price entirely.",
    },
    entry_points: [
      {
        capital: "$500",
        label: "Bean Trader",
        what_you_do: "Aggregate cocoa from smallholders and sell to licensed buyers at a margin",
        example: "Kofi in Kumasi aggregates 2 tonnes per season from 8 farmers, earns 8% margin = $400 profit per cycle",
        how_to_start: "Join a cocoa farmer cooperative. Learn the grading system (Grade A vs B). Find a Licensed Buying Company (LBC). Start with 500kg on first deal.",
      },
      {
        capital: "$5,000",
        label: "Artisan Chocolate Maker",
        what_you_do: "Buy roasted cocoa, process into bean-to-bar chocolate, sell locally and to diaspora",
        example: "Akua in Accra produces 200 bars/week at GHC 25 each ($2), sells for GHC 80 ($6.50) — 3.25x markup",
        how_to_start: "Buy a $300 stone grinder from Alibaba (search: 'chocolate melangar'). Start with 5kg batches. Sell at Accra Mall, high-end hotels, corporate gifting.",
      },
      {
        capital: "$50,000",
        label: "Cocoa Processor",
        what_you_do: "Set up small cocoa processing unit — produce cocoa butter, cocoa powder, cocoa liquor",
        example: "Ama runs a 10-tonne/month processing unit in Tema, selling cocoa butter to cosmetics companies at 3× the bean price",
        how_to_start: "Contact Ghana Cocoa Board for processing license. Equipment: $15K second-hand European expeller press. Initial inventory: 10 tonnes raw beans. Target: cosmetics companies and local chocolate manufacturers.",
      },
      {
        capital: "$500,000",
        label: "Branded Chocolate Company",
        what_you_do: "Build origin chocolate brand. Full processing facility. Export to diaspora markets and premium European retailers",
        example: "57 Chocolate (Ghana) did this — now sold in Whole Foods USA and online globally",
        how_to_start: "Get HACCP certification. License from Ghana Standards Authority. Start with 3 SKUs (dark 70%, milk, dark with spice). Target African diaspora stores in London, New York, Paris first.",
      },
    ],
    paths: [
      {
        name: "The Bean-to-Bar Path",
        tagline: "From $300 grinder to export-ready chocolate brand",
        capital: "$3,000",
        timeline: "18 months to first export sale",
        milestones: [
          { month: "Month 1", action: "Buy melangar stone grinder + 20kg raw cocoa beans", result: "First 80 chocolate bars" },
          { month: "Month 2–3", action: "Iterate recipe, get 10 regular customers at full price", result: "Cash-positive operation" },
          { month: "Month 4–6", action: "Register food business, design packaging", result: "Sellable product" },
          { month: "Month 7–12", action: "Place in 3 premium retailers/hotels in your city", result: "$800–1,500/month revenue" },
          { month: "Month 13–18", action: "Apply to diaspora markets: UK African food fairs, online Shopify store", result: "First export orders" },
        ],
        suppliers: ["Ghana Cocoa Board (raw beans)", "Alibaba (melangar grinder)", "Local packaging printers", "Ghana Food Authority (certification)"],
        first_sale: "Sell 50 bars to your employer's corporate gifting department. Charge 3× your cost.",
        revenue_ceiling: "$80,000/year at craft scale. $2M+ with export brand.",
      },
      {
        name: "The Cosmetics Cocoa Path",
        tagline: "Cocoa butter for skincare is more valuable than chocolate",
        capital: "$8,000",
        timeline: "12 months",
        milestones: [
          { month: "Month 1–2", action: "Buy cold-press expeller + 200kg raw cocoa", result: "First 50kg cocoa butter batch" },
          { month: "Month 3–5", action: "Package cocoa butter in 100ml jars, test sell at market", result: "Learn customer demand" },
          { month: "Month 6–9", action: "Pitch to cosmetics formulators and natural skincare brands", result: "B2B wholesale contract" },
          { month: "Month 10–12", action: "Certify organic with ECOCERT or similar. Price premium.", result: "Export-ready product at 2× local price" },
        ],
        suppliers: ["Ghana/Ivory Coast cocoa farmers directly", "Alibaba (cold press machines)", "ECOCERT Africa for organic certification"],
        first_sale: "Sell 5kg bulk to a natural hair care brand. Ask what they currently pay for shea butter — cocoa butter competes directly.",
        revenue_ceiling: "$150,000/year at 2 tonnes/month processing.",
      },
    ],
    the_insight:
      "The EU tariff system is designed to keep Africa selling beans. It charges 0% on raw cocoa but escalates to 30%+ on processed products. This is not an accident. It is policy. The AfCFTA's African countries are now negotiating to process more at origin — the political window is opening. The companies that position now will own the infrastructure when the window fully opens.",
  },

  {
    slug: "coffee",
    name: "Coffee",
    icon: "☕",
    tagline: "Ethiopia invented coffee. Starbucks sells $35 billion of it per year. Ethiopia earns less than 10 cents per cup.",
    countries: ["Ethiopia", "Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi", "Cameroon", "DRC"],
    heritage:
      "The story of coffee is an African story that was stolen mid-sentence. In the 9th century, an Ethiopian goat herder named Kaldi noticed his goats dancing after eating red berries from a certain tree. Those berries became coffee. The word 'coffee' comes from the Ethiopian region of Kaffa. For centuries, coffee was an Ethiopian secret, used in ceremonies that still happen today. Then Yemen got seeds. Then Europe. Then the Americas. The entire $500 billion global coffee industry is built on an Ethiopian discovery — and Ethiopia gets almost none of it.",
    extraction_headline:
      "Ethiopia earns $1 billion in coffee exports. The global coffee market is $500 billion. Ethiopia's share: 0.2%.",
    market_size: "$500 billion global coffee market (2024)",
    chain: [
      {
        step: "Growing",
        location: "Ethiopia, Uganda, Kenya, Tanzania",
        who_controls: "500,000+ smallholder farmers",
        africa_share: "100%",
        margin: "2–7% of final cup price",
        why_foreigners_win: "Prices set on the London and New York commodity exchanges. Volatility destroys farmer planning. No access to roasting or branding infrastructure.",
      },
      {
        step: "Wet Milling / Processing",
        location: "Origin country",
        who_controls: "Mix of cooperatives and private mills (mostly foreign-owned)",
        africa_share: "40–60%",
        margin: "10–15% value-add",
        why_foreigners_win: "Equipment imported from Germany and Brazil. Capital access for mill construction dominated by foreign investors.",
      },
      {
        step: "Dry Milling & Export",
        location: "Origin country → export",
        who_controls: "Olam, ECOM, Volcafé (ED&F Man), Neumann Kaffee",
        africa_share: "Minimal — licensed exporters only",
        margin: "12–18%",
        why_foreigners_win: "Control international buyer relationships, quality certification, and export financing. The 4 largest trading companies handle 40% of all green coffee trade globally.",
      },
      {
        step: "Roasting",
        location: "Europe, USA, Japan",
        who_controls: "Nestlé (Nescafé), JDE Peet's, Starbucks, Lavazza, Illy",
        africa_share: "~2% (growing)",
        margin: "50–60% of final price",
        why_foreigners_win: "Roasting is where flavor differentiation happens. Brand identity. 'Single origin' premiums go to the roaster, not the farmer.",
      },
      {
        step: "Retail / Café",
        location: "Global",
        who_controls: "Starbucks, local café chains, supermarkets",
        africa_share: "~3% (African café market growing fast)",
        margin: "300–500% markup on roasted coffee",
        why_foreigners_win: "The real money is in the café experience — labor, rent, branding. Africa's urban café sector is the fastest-growing in the world but dominated by western franchise models.",
      },
    ],
    value_leakage: {
      raw_export: "Green coffee beans",
      raw_price: "$1.50–4.00/pound (commodity price)",
      finished_product: "Specialty roasted coffee",
      finished_price: "$15–35/pound retail",
      africa_earns_pct: "6–8%",
      annual_value_lost: "$450 billion/year",
      interception_move:
        "Roast at origin. Build a named Ethiopian, Kenyan, or Rwandan specialty brand. Sell direct-to-consumer via Shopify. The 'single origin' movement has opened the door.",
    },
    entry_points: [
      {
        capital: "$500",
        label: "Coffee Sourcing Agent",
        what_you_do: "Connect international specialty roasters with specific Ethiopian or Kenyan farms. Earn 5–8% commission on each container",
        example: "Selamawit in Addis connects 3 US roasters with 2 farms she knows personally. Earns $2,000–3,000 per container on 3–4 deals/year",
        how_to_start: "Join Cup of Excellence scoring. Learn Q-grader basics. Contact Specialty Coffee Association (SCA). List on Algrano or Cropster marketplace for free.",
      },
      {
        capital: "$3,000",
        label: "Micro-Roaster",
        what_you_do: "Buy a home roaster, source specialty beans, sell roasted bags to coffee lovers in your city or online",
        example: "Fatou in Nairobi roasts 5kg/week on a Behmor 1600+, sells 250g bags for 3× her cost to restaurants and coworking spaces",
        how_to_start: "Buy Behmor 1600+ roaster ($500). Source 10kg green beans from Addis Ababa or Nairobi auction. Practice 20 roast profiles. Sell to 5 restaurants first.",
      },
      {
        capital: "$15,000",
        label: "Specialty Coffee Brand",
        what_you_do: "Build a named brand around Ethiopian or Kenyan origin. Sell bags online to diaspora. Partner with 10+ roasters as your named origin",
        example: "Yeshi in London sources Ethiopian natural process from her uncle's farm, brands it 'Yirgacheffe Mountain', sells 100 bags/month at £18 each = £1,800/month margin",
        how_to_start: "SCAA membership + Q-grader certificate. Negotiate exclusivity with one farm. Design packaging. Shopify store. Target diaspora communities first.",
      },
      {
        capital: "$100,000",
        label: "Origin Coffee Company",
        what_you_do: "Vertically integrate: source, process, roast, and brand in the origin country. Export finished product",
        example: "Moyee Coffee (Ethiopia) built origin-to-consumer supply chain, claims to pay 7× more than commodity price back to farmers",
        how_to_start: "Partner with 50+ farmer cooperative. Build or lease small roastery (5-tonne/month capacity). Get BRC/SQF food safety certification. Target ethical retail buyers in Europe: Equal Exchange, Whole Foods, etc.",
      },
    ],
    paths: [
      {
        name: "The Origin Roaster Path",
        tagline: "Roast where it grows. Brand where it sells.",
        capital: "$8,000",
        timeline: "12 months to first export bag",
        milestones: [
          { month: "Month 1", action: "Buy Behmor 1600+ roaster, source 50kg green Ethiopian Yirgacheffe", result: "First 40 roasted bags" },
          { month: "Month 2–4", action: "Master roast profiles for 3 different origins. Build tasting ritual.", result: "Consistent quality product" },
          { month: "Month 5–7", action: "Brand design, 3 SKUs, Shopify store. Sell to diaspora community.", result: "First 50 online orders" },
          { month: "Month 8–10", action: "Partner with 1 farm for exclusivity. Name the single-origin.", result: "Traceability story = higher price" },
          { month: "Month 11–12", action: "Pitch to specialty grocery in London, Paris, or New York. Send samples.", result: "First wholesale account" },
        ],
        suppliers: ["Ethiopian Commodity Exchange (green beans)", "Sweet Maria's or Algrano (sourcing platform)", "Coffee Shrub (green bean samples)", "Canva or 99designs (packaging)"],
        first_sale: "Host a cupping session at home for 8 people. Charge $15/head. Take orders. Use that money to fund next batch.",
        revenue_ceiling: "$60,000/year micro-roaster. $2M+ with own café or export brand.",
      },
    ],
    the_insight:
      "The specialty coffee movement values origin, terroir, and story — the same things Africa has in abundance. For the first time, a Yirgacheffe natural process from a named farm can command $35/pound at retail. That's a 20× premium over commodity. The arbitrage is real and it's open right now. You don't need a factory. You need a roaster, a story, and a Shopify account.",
  },

  {
    slug: "cotton",
    name: "Cotton & Textiles",
    icon: "🧵",
    tagline: "West Africa grows some of the world's finest cotton. It all gets shipped to Asia, turned into clothing, and sold back to Africans at a markup.",
    countries: ["Mali", "Burkina Faso", "Benin", "Senegal", "Côte d'Ivoire", "Egypt", "Ethiopia", "Tanzania", "Nigeria"],
    heritage:
      "Africans have been weaving for at least 5,000 years. Kente cloth from Ghana is a royal art form — each pattern has a name and a meaning, worn at funerals and coronations. Bogolan (mudcloth) from Mali contains encoded stories in its geometric patterns. The Tuareg wove fine wool robes that regulated temperature across the Sahara. Adire from Yorubaland uses a resist-dyeing process developed centuries before indigo-dying reached Europe. These are not crafts. These are sophisticated textile engineering traditions. The same people whose ancestors built these systems now import cheap polyester from China because the industrial chain that could have built on this foundation was deliberately never built.",
    extraction_headline:
      "Mali earns $600M exporting raw cotton fiber. The same cotton, turned into clothing, is worth $6 billion. The difference flows to Chinese and Bangladeshi mills.",
    market_size: "$1.5 trillion global textile and apparel market",
    chain: [
      {
        step: "Cotton Farming",
        location: "Mali, Burkina Faso, Benin",
        who_controls: "3+ million smallholder farmers + state cotton boards",
        africa_share: "100%",
        margin: "2–4% of final garment price",
        why_foreigners_win: "Commodity price set in New York (ICE exchange). US cotton subsidies (US gov pays $6B/year to US cotton farmers) depress global prices, hurting African farmers directly. African farmers cannot compete on price.",
      },
      {
        step: "Ginning (fiber separation)",
        location: "Origin country",
        who_controls: "State cotton companies (CMDT Mali, SOFITEX Burkina), some private",
        africa_share: "80–90%",
        margin: "5–8% value-add",
        why_foreigners_win: "Equipment is mostly imported. State monopolies often inefficient.",
      },
      {
        step: "Spinning (yarn)",
        location: "Bangladesh, India, China, Vietnam",
        who_controls: "Asian textile conglomerates",
        africa_share: "~3% (Ethiopia building)",
        margin: "20–30% value-add",
        why_foreigners_win: "Industrial spinning mills cost $20M+. Asian factories receive massive government subsidies. China's duty-free import of African cotton was negotiated to keep spinning in China.",
      },
      {
        step: "Weaving / Knitting",
        location: "Bangladesh, China, Turkey",
        who_controls: "Large Asian textile groups",
        africa_share: "~2%",
        margin: "25–35% value-add",
        why_foreigners_win: "Vertically integrated mills control yarn-to-fabric pipeline. Ethiopia's AGOA access is beginning to change this.",
      },
      {
        step: "Garment Manufacturing",
        location: "Bangladesh, Vietnam, China, Sri Lanka",
        who_controls: "Asian garment factories",
        africa_share: "~5% (Ethiopia, Madagascar growing)",
        margin: "30–40% value-add",
        why_foreigners_win: "Access to mass retail buyers (H&M, Zara, Gap). Speed-to-market logistics. Africa's growing — but still tiny.",
      },
      {
        step: "Branding & Retail",
        location: "Europe, USA",
        who_controls: "Zara (Inditex), H&M, Nike, Adidas, Primark",
        africa_share: "Zero for global brands; growing for local brands",
        margin: "60–80% of final price",
        why_foreigners_win: "Brand premium. The Zara logo adds 500% to the cost of the cotton that went into the shirt.",
      },
    ],
    value_leakage: {
      raw_export: "Raw cotton fiber (seed cotton)",
      raw_price: "$0.70–0.90/pound",
      finished_product: "Cotton T-shirt or jeans",
      finished_price: "$20–80 retail",
      africa_earns_pct: "3–5%",
      annual_value_lost: "$1.4 trillion/year",
      interception_move:
        "Skip the commodity chain. Source local fabric (wax print, kente, mudcloth) or build a small sewing cooperative. Brand as African premium. The 'Made in Africa, Designed in Africa' label is a premium asset right now — not a liability.",
    },
    entry_points: [
      {
        capital: "$200",
        label: "Fashion Reseller",
        what_you_do: "Source authentic African textiles from markets, sell online to diaspora with styling and story",
        example: "Aminata in Dakar buys Bogolan from Mali market at 3,000 CFA, sells on Etsy for $45 each. 6 pieces/week = $180 margin",
        how_to_start: "Source 5 pieces from local market. Photograph them professionally (good light, clean background). List on Etsy with story of fabric. Ship via DHL Express.",
      },
      {
        capital: "$2,000",
        label: "Tailor + Branding",
        what_you_do: "Design and produce a small capsule collection (10–20 pieces). Target diaspora and premium local market.",
        example: "Ade in Lagos produces 15 tailored kente-blend blazers at N45,000 cost, sells for N180,000 each — 4× markup",
        how_to_start: "Partner with 1 expert tailor. Commission 10 pieces. Style and shoot with model. Sell via Instagram first. Each piece is a story.",
      },
      {
        capital: "$15,000",
        label: "Heritage Fashion Brand",
        what_you_do: "Build a named African fashion label. 30–50 pieces per collection. Target London, Paris, New York African diaspora market.",
        example: "IAMISIGO (Nigeria), MAKI OH, Studio 189 — all started under $20K and now sell internationally",
        how_to_start: "2 collections/year. Partner with Vlisco or local wax print mill for fabric. Apply to Lagos Fashion Week. Pitch to African boutiques in London (Spitalfields, Brixton Market).",
      },
      {
        capital: "$100,000",
        label: "Textile Manufacturer",
        what_you_do: "Set up small garment factory (20–30 machines). Target local corporatewear, school uniforms, hotels",
        example: "Uniforms for 3 Lagos schools = 8,000 units/year. Predictable, repeatable income. Then expand to export.",
        how_to_start: "Ghana or Ethiopia are best for this: AGOA access means US duty-free export. Source machines second-hand from closed Asian factories. Target hospitality industry first (hotels, airlines, restaurants).",
      },
    ],
    paths: [
      {
        name: "The African Fashion Brand Path",
        tagline: "Every African designer who sells internationally started with a sewing machine and a story",
        capital: "$5,000",
        timeline: "24 months to first international stockist",
        milestones: [
          { month: "Month 1–2", action: "Define your signature: one fabric (kente/mudcloth/adire/ankara), one silhouette", result: "Clear brand identity" },
          { month: "Month 3–4", action: "Commission 10 pieces with master tailor. Professional photography.", result: "Portfolio and first 10 sales" },
          { month: "Month 5–8", action: "Instagram + Depop store. Lagos/Accra/Nairobi trunk show.", result: "Community of 500+ followers" },
          { month: "Month 9–14", action: "Apply to Lagos Fashion Week or Africa Fashion Week London", result: "Press coverage and buyer introductions" },
          { month: "Month 15–24", action: "Pitch to 1 African boutique in London or New York. Send 3 pieces on consignment.", result: "First international stockist" },
        ],
        suppliers: ["Vlisco (wax print, used by most top designers)", "Kente weavers cooperatives in Kumasi", "Local master tailors", "Canva for lookbook design"],
        first_sale: "Wear your own pieces everywhere. When someone asks where you got it, that is your first lead.",
        revenue_ceiling: "$200,000/year as independent designer. $5M+ as a label with licensing.",
      },
    ],
    the_insight:
      "The 'African print' worn in Zara and H&M stores globally is derived from West African wax print traditions. The fashion houses profit. The African designers and weavers who created the aesthetic receive nothing. This is changing: Thebe Magugu (South Africa) won the LVMH Prize. Telfar Clemens (Liberian-American) has a waitlist in the thousands. The global market for African fashion is real, open, and hungry. The only missing ingredient is African designers willing to claim it.",
  },

  {
    slug: "coltan",
    name: "Coltan & Critical Minerals",
    icon: "🔋",
    tagline: "The DRC holds 60–70% of the world's cobalt and coltan. Every electric vehicle, every smartphone, every laptop runs on Congolese minerals. Congo earns 3% of the final product value.",
    countries: ["DRC", "Zambia", "Zimbabwe", "Tanzania", "Rwanda", "Ghana", "South Africa", "Namibia"],
    heritage:
      "The Great Lakes region of Central Africa is sitting on what geologists call the 'geological anomaly of the century.' The copper belt of DRC and Zambia powered the industrial revolution — Belgian and British mining companies extracted for a century, built nothing, and left. The same pattern is repeating now with cobalt. Chinese mining companies arrived after Belgium left. The workers are Congolese. The profits are Chinese. The EVs are American. This pattern has a name: extractivism. The only way to break it is to move up the value chain.",
    extraction_headline:
      "One tonne of raw cobalt from DRC earns $30,000. One tonne of battery-grade cobalt sulfate earns $100,000. One battery pack for a Tesla earns $400,000 per tonne of cobalt content.",
    market_size: "$400 billion EV battery market by 2030",
    chain: [
      {
        step: "Mining",
        location: "DRC, Zambia",
        who_controls: "Glencore (Switzerland), CMOC (China), Eurasian Resources Group, artisanal miners",
        africa_share: "Labor only — minimal ownership",
        margin: "5–8% of EV battery value",
        why_foreigners_win: "Mining licenses negotiated with government, often with side payments. Capital-intensive extraction requires $500M+ mine development. Foreign companies bring capital and take majority ownership.",
      },
      {
        step: "Refining (cobalt sulfate, cobalt oxide)",
        location: "China (90%), Finland, Belgium",
        who_controls: "Umicore (Belgium), Freeport Cobalt (Finland), Chinese battery refiners",
        africa_share: "~2% (Zambia building one refinery)",
        margin: "200–300% above raw ore price",
        why_foreigners_win: "Refining technology is closely guarded. China controls 80% of global cobalt refining specifically to maintain supply chain dominance over batteries.",
      },
      {
        step: "Battery Cathode Materials",
        location: "China, Japan, South Korea",
        who_controls: "CATL, Samsung SDI, LG Energy Solution, Panasonic",
        africa_share: "Zero",
        margin: "50–80% above refined cobalt price",
        why_foreigners_win: "Manufacturing advanced cathode materials (NMC, LFP) requires proprietary chemistry. Patents held by Asian and European companies.",
      },
      {
        step: "Battery Cell Manufacturing",
        location: "China, USA (gigafactories), Europe",
        who_controls: "CATL, BYD, Tesla (Panasonic), LG, Samsung",
        africa_share: "Zero",
        margin: "300–400% above raw mineral value",
        why_foreigners_win: "Gigafactory construction costs $2–5 billion. US/EU government subsidies for domestic battery manufacturing.",
      },
      {
        step: "EV / Tech Assembly & Branding",
        location: "China, USA, Germany, Japan",
        who_controls: "Tesla, BYD, Toyota, Samsung, Apple",
        africa_share: "Zero",
        margin: "Majority of final product value",
        why_foreigners_win: "Brand and IP ownership. EV companies valued on software and autonomous driving — not materials.",
      },
    ],
    value_leakage: {
      raw_export: "Raw cobalt ore",
      raw_price: "$30,000/tonne",
      finished_product: "EV battery pack",
      finished_price: "$1.2 million/tonne of cobalt content in batteries",
      africa_earns_pct: "2–3%",
      annual_value_lost: "$350 billion/year (growing rapidly)",
      interception_move:
        "Lobby for and invest in in-country refining. Zambia and Zimbabwe are building refineries now — there is a political window. The next move: battery cathode material manufacturing in Africa. Rwanda's free-trade zone is positioning for exactly this.",
    },
    entry_points: [
      {
        capital: "$1,000",
        label: "Critical Minerals Analyst",
        what_you_do: "Become an expert in African critical mineral supply chains. Consult for companies that need to know what's happening on the ground",
        example: "Ntumba in Kinshasa consults for 2 European mining companies on DRC artisanal mining conditions. Earns $2,000/month consulting",
        how_to_start: "Read every quarterly report from Glencore, CMOC, and Freeport. Follow Global Witness and IPIS Research. Publish analysis on LinkedIn. Get hired.",
      },
      {
        capital: "$10,000",
        label: "Minerals Trading Desk",
        what_you_do: "Trade small parcels of coltan or tin from artisanal mining cooperatives to licensed refiners. Earn 5–10% margin",
        example: "Pierre in Goma works with 3 cooperatives to certify their coltan (iTSCi scheme) and sell directly to European buyers, cutting out middlemen",
        how_to_start: "Get iTSCi (ITSCI scheme) certification for your cooperative. Learn LME (London Metal Exchange) pricing. Find a European buyer (Umicore, Nokia, Fairphone).",
      },
      {
        capital: "$500,000",
        label: "Mining Services Company",
        what_you_do: "Provide services to large mining companies: logistics, community liaison, environmental monitoring, security",
        example: "Multiple DRC companies earn $10–50M/year providing services to Glencore and CMOC operations",
        how_to_start: "Get ISO 14001 (environmental management). Join Africa Mining Vision networks. Partner with one existing mining services company for first contract.",
      },
      {
        capital: "$5M+",
        label: "Refinery Development",
        what_you_do: "Develop cobalt or copper refining capacity in Zambia or DRC",
        example: "Zambia's Copperbelt Energy Corporation building first integrated cobalt processing facility. First African-owned battery materials plant.",
        how_to_start: "Partner with Development Finance Institutions (AfDB, IFC, OPIC). Joint venture with established refiner for technology transfer. Zambia's ZCCM-IH is the key government partner.",
      },
    ],
    paths: [
      {
        name: "The Mining Services Path",
        tagline: "You don't have to own the mine to profit from it",
        capital: "$50,000",
        timeline: "18 months to first contract",
        milestones: [
          { month: "Month 1–3", action: "Register company, get ISO 9001 certification, build team of 10", result: "Credible entity" },
          { month: "Month 4–6", action: "Identify which service the nearest mine actually needs (logistics, community affairs, catering, lab testing)", result: "Specific service offering" },
          { month: "Month 7–10", action: "Submit proposal to mine procurement office. Often requires local content compliance.", result: "First tender submitted" },
          { month: "Month 11–18", action: "Win sub-contract. Deliver perfectly. Use reference to win next contract.", result: "$200K–500K first contract" },
        ],
        suppliers: ["DRC Chamber of Mines (contacts)", "Africa Mining Vision (policy)", "Chamber of Mines Zambia", "ISO certification bodies"],
        first_sale: "Find the largest mine within 200km. Find out what they sub-contract. Be the best option for one specific service.",
        revenue_ceiling: "$5M–50M/year in mining services.",
      },
    ],
    the_insight:
      "The global transition to EVs has created a $400 billion battery market that runs entirely on African minerals. This is the largest economic opportunity in African history. The countries that build refining capacity in the next 5 years will capture 30–40× more value than those that continue to export raw ore. This is not speculation — it is arithmetic. Zambia's new government literally called this out in their 2022 manifesto. The window is open.",
  },

  {
    slug: "remittance",
    name: "Remittance",
    icon: "💸",
    tagline: "$100 billion flows into Africa from the diaspora every year. $10–15 billion of it is eaten by transfer fees before it arrives.",
    countries: ["Nigeria", "Egypt", "Ghana", "Kenya", "Senegal", "Ethiopia", "Zimbabwe", "Somalia", "Morocco", "South Africa"],
    heritage:
      "The concept of sending wealth home is older than money. African kingdoms maintained traders and ambassadors across the continent who returned wealth to their communities. The Hausa merchants of West Africa maintained trading networks across the Sahara, sending gold and kola nuts and information between cities centuries before colonization. Today's remittance is the same impulse, modernized — but priced by companies that built their infrastructure specifically to extract maximum fees from the necessity of family obligation. The $10 billion in fees taken from remittances to Africa every year is more than all Western foreign aid to sub-Saharan Africa.",
    extraction_headline:
      "Western Union and MoneyGram charge 8–12% per transfer to Africa. The global average is 5.4%. The G20 target is 3%. Africa pays the most to send money to the people who need it most.",
    market_size: "$100 billion in annual remittances to Africa (World Bank 2024)",
    chain: [
      {
        step: "Sender (diaspora)",
        location: "USA, UK, France, UAE, Canada",
        who_controls: "30 million African diaspora members",
        africa_share: "100%",
        margin: "Negative — they pay the fees",
        why_foreigners_win: "No one wins here. Diaspora members have no choice but to use available services.",
      },
      {
        step: "Money Transfer Operator (MTO)",
        location: "USA (Western Union, MoneyGram), UAE (Al Ansari), UK (WorldRemit)",
        who_controls: "Western Union, MoneyGram, WorldRemit, Wise, Remitly",
        africa_share: "Wave (Senegal), Chipper Cash, Flutterwave Transfers (~15% market share)",
        margin: "8–12% average fee + FX spread",
        why_foreigners_win: "Regulatory licenses in every country. Agent network at destination. Trust built over decades. Banking partnerships.",
      },
      {
        step: "Correspondent Banking",
        location: "Global",
        who_controls: "Citibank, Standard Chartered, JPMorgan",
        africa_share: "Zero",
        margin: "0.5–2% hidden in FX rates",
        why_foreigners_win: "International dollar clearing runs through US correspondent banks. African banks cannot clear dollars without them — this gives US banks permanent leverage.",
      },
      {
        step: "Last-mile Delivery",
        location: "Africa",
        who_controls: "Mobile money (M-Pesa, MTN, Airtel), local banks, cash agents",
        africa_share: "60–70% (growing)",
        margin: "1–3% last-mile fee",
        why_foreigners_win: "MTN and Airtel are foreign-controlled. M-Pesa is Safaricom (Vodafone-originated). The most profitable last-mile networks are not African-owned.",
      },
    ],
    value_leakage: {
      raw_export: "Diaspora cash transfer",
      raw_price: "$200 average transfer to Africa",
      finished_product: "Cash received in Africa",
      finished_price: "$175 after all fees ($25 lost)",
      africa_earns_pct: "0% — the opposite: value is extracted from the transfer",
      annual_value_lost: "$10–15 billion/year in fees alone",
      interception_move:
        "Build infrastructure that cuts the cost of sending money home. Wave (Senegal) charges 1%. Chipper Cash charges $0 on small transfers. The incumbents can be beaten — they're charging 8–12% on infrastructure that costs them 0.3% to operate.",
    },
    entry_points: [
      {
        capital: "$500",
        label: "Agent / Ambassador",
        what_you_do: "Become a registered agent for Wave, Chipper Cash, or Lemfi. Help community members send money cheaper. Earn per-transaction.",
        example: "Oumar in Dakar registered as a Wave agent. 50 transactions/day at 200 CFA commission = 10,000 CFA/day ($16). Plus Wave pays bonuses for activation.",
        how_to_start: "Apply at wave.com/agent or chippercash.com/agent. Need ID, small float ($200–500). Train in 2 hours. Start same day.",
      },
      {
        capital: "$5,000",
        label: "Hawala/Informal Network",
        what_you_do: "Run a trusted informal money transfer network within your community. Charge 2–3% vs Western Union's 8%",
        example: "Hassan in Minneapolis runs transfers for 200 Somali families. Keeps float in both USD and Somali shillings. Earns 2.5% on $500K/year in transfers = $12,500",
        how_to_start: "This requires community trust first — you are the system. Start with people who know you personally. Build reputation for reliability. Understand Hawala principles: no money moves, only accounting adjusts.",
      },
      {
        capital: "$50,000",
        label: "Fintech Corridor Product",
        what_you_do: "Build a specific money transfer product for one corridor (e.g., UK → Nigeria) using existing banking APIs",
        example: "Lemfi started as UK → Nigeria transfers by a Nigerian founder who was tired of Western Union. Now serves 20+ corridors. Raised $33M.",
        how_to_start: "Get UK FCA or EU EMI license ($15K–40K, 6 months). Integrate Wise/CurrencyCloud API for FX. Partner with African bank for last-mile. Target one diaspora community first.",
      },
      {
        capital: "$500,000",
        label: "Licensed MTO",
        what_you_do: "Build a fully licensed money transfer operator. Compete directly with Western Union on your best corridors.",
        example: "Wave raised $200M and now processes more transactions in Senegal than any other operator. Chipper Cash raised $300M and serves 7 African corridors.",
        how_to_start: "Start with VC funding. Target a specific underserved corridor. Regulatory strategy is everything — hire a former regulator as advisor. Zero fees + FX spread model (like Wise) is the winning play.",
      },
    ],
    paths: [
      {
        name: "The Corridor Fintech Path",
        tagline: "Pick one corridor. Charge half of Western Union. Win.",
        capital: "$80,000",
        timeline: "18 months to first 1,000 users",
        milestones: [
          { month: "Month 1–3", action: "Register LLC/Ltd. Apply for FCA registered status (UK) or Money Services Business (USA). Hire 1 compliance officer.", result: "Legal entity in both countries" },
          { month: "Month 4–6", action: "Integrate CurrencyCloud API for FX. Partner with 1 African bank for cash out. Build simple mobile app.", result: "Working product" },
          { month: "Month 7–10", action: "Soft launch to 100 users from your community. Incentivize with first transfer free.", result: "100 users, real feedback" },
          { month: "Month 11–15", action: "Iterate on speed and cost. Target 1-hour delivery. Charge 3% vs WU's 8%.", result: "Word of mouth growth" },
          { month: "Month 16–18", action: "Apply to Techstars or YC. Raise seed round. Hire marketing.", result: "1,000 users, Series A ready" },
        ],
        suppliers: ["CurrencyCloud (FX API)", "Stripe Treasury (banking)", "African partner banks (MTN MoMo, Safaricom M-Pesa for disbursement)", "Andela (tech talent)"],
        first_sale: "Send money yourself using your own system. Then have 10 friends use it for real transfers. Their testimonials are your marketing.",
        revenue_ceiling: "$2M/year at 10,000 users. $50M+ with 3 corridors and 500,000 users.",
      },
    ],
    the_insight:
      "Remittances to Africa ($100B) now exceed foreign direct investment ($48B) and foreign aid ($52B) combined. This is the largest financial flow on the continent and it's entirely driven by African people. Every percentage point in fees saved is $1 billion that stays in African families instead of going to Western Union. The companies that solve this problem first don't just build a business — they redirect a river.",
  },
];

export function getIndustry(slug: string): IndustryIntelligence | undefined {
  return INDUSTRIES.find(i => i.slug === slug);
}
