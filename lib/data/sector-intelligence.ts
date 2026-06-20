// Per-sector intelligence: who extracts value from Africa, who cracked it as an African,
// the cheap/traditional way to start, and the modern path to scale.

export interface ForeignDominator {
  company: string;
  country_of_origin: string;
  what_they_do_in_africa: string;
  how_they_extract: string;
  annual_africa_revenue: string;
}

export interface AfricanSuccessStory {
  name: string;
  nationality: string;
  company: string;
  how_they_started: string;
  scale_today: string;
  net_worth_or_revenue: string;
  lesson: string;
}

export interface CheapStart {
  method: string;
  historical_roots: string;
  modern_equivalent: string;
  start_cost_africa: string;
  why_cheaper_than_conventional: string;
  alibaba_search?: string;
  local_alternative?: string;
  first_step: string;
}

export interface SectorProfile {
  sector: string;
  icon: string;
  tagline: string;
  countries_most_relevant: string[];
  the_extraction: string;
  foreign_dominators: ForeignDominator[];
  african_success: AfricanSuccessStory[];
  cheap_start: CheapStart;
  the_insight: string;
  market_size: string;
}

export const SECTOR_PROFILES: SectorProfile[] = [
  {
    sector: "Construction & Building Materials",
    icon: "🏗️",
    tagline: "Africa builds with imported cement from European and Chinese companies. African earth is free and stronger.",
    countries_most_relevant: ["Nigeria", "Ghana", "Kenya", "Ethiopia", "Senegal", "Rwanda", "Tanzania", "Uganda", "Morocco", "Côte d'Ivoire"],
    the_extraction: "Africa spends $14 billion/year on cement. Swiss company Holcim and French Lafarge dominate African cement production. China's state construction firms (CCCC, CRBC, CCECC) win 40–50% of all African infrastructure contracts — they bring Chinese workers, Chinese materials, Chinese equipment, and take the profit back to Beijing. The concrete for your road was made in China. The engineer was Chinese. The money went to China.",
    foreign_dominators: [
      {
        company: "CCCC (China Communications Construction Company)",
        country_of_origin: "China (state-owned)",
        what_they_do_in_africa: "Builds highways, ports, railways, and airports across 45+ African countries",
        how_they_extract: "Wins government contracts (often tied to Chinese loans), brings Chinese labour and materials, repatriates all profit. Minimal technology transfer. The Standard Gauge Railway in Kenya was built by CRBC (subsidiary) — Chinese workers, Chinese steel, Chinese financing.",
        annual_africa_revenue: "$10+ billion/year",
      },
      {
        company: "Holcim / Lafarge Africa",
        country_of_origin: "Switzerland / France",
        what_they_do_in_africa: "Controls major cement plants in Nigeria, South Africa, Zimbabwe, Uganda, Tanzania, and 10+ other countries",
        how_they_extract: "Purchased state cement companies at privatization at below-market prices. Controls distribution networks. African cement prices are often 2–3× higher than global benchmarks due to oligopoly control.",
        annual_africa_revenue: "$3–5 billion/year from Africa",
      },
      {
        company: "Julius Berger Nigeria",
        country_of_origin: "Germany (Bilfinger SE)",
        what_they_do_in_africa: "Nigeria's dominant infrastructure contractor for 100+ years — roads, bridges, buildings",
        how_they_extract: "Preferred contractor for major Nigerian government contracts since colonial era. Keeps contracts within German technical leadership. German parent company takes dividends.",
        annual_africa_revenue: "₦300+ billion/year in Nigeria alone",
      },
      {
        company: "Sogea-Satom (Vinci Group)",
        country_of_origin: "France",
        what_they_do_in_africa: "Road and civil infrastructure across Francophone Africa — Senegal, CIV, Cameroon, Gabon, DRC",
        how_they_extract: "French colonial relationships evolved into long-term infrastructure monopolies. CFA franc zone makes it easy to repatriate profits to France. Local sub-contractors get small cut.",
        annual_africa_revenue: "€2+ billion across Africa",
      },
    ],
    african_success: [
      {
        name: "Aliko Dangote",
        nationality: "Nigerian",
        company: "Dangote Cement",
        how_they_started: "Started by importing cement for resale in 1977 with a loan from his uncle. Built trading relationships. Lobbied the Nigerian government for cement import protection. Built first Dangote cement factory in 2008.",
        scale_today: "Largest cement producer in Africa — 45M ton/year capacity across 10 countries. Building the world's largest single-train oil refinery in Lagos.",
        net_worth_or_revenue: "$14 billion net worth. $2.5B Dangote Cement revenue.",
        lesson: "He started as a trader, not a manufacturer. He learned the market first. He built political relationships. He moved into production only when he had the capital and the market understanding. You don't need to start with a factory.",
      },
      {
        name: "Patrice Motsepe",
        nationality: "South African",
        company: "African Rainbow Minerals (ARM) + Ubuntu-Botho Investments",
        how_they_started: "Started as a lawyer, then partnered with Anglo American on a profit-sharing mining deal — negotiated to own small mines that the major companies didn't want. Built up from there.",
        scale_today: "Africa's richest black man. ARM mines gold, copper, coal across 4 countries. Ubuntu-Botho is one of South Africa's largest black-owned investment groups.",
        net_worth_or_revenue: "$3.5 billion net worth",
        lesson: "He used legal and negotiation skills — not capital — to enter an industry that seemed impossible to break into. The entry point was taking deals nobody else wanted.",
      },
      {
        name: "Kathleen Ndongmo",
        nationality: "Cameroonian",
        company: "KND Architecture",
        how_they_started: "Architect who started designing affordable housing using local materials — laterite stone, bamboo, compressed earth blocks. Used traditional Bamiléké construction techniques modernized.",
        scale_today: "Award-winning architect, designs affordable housing across Central Africa, teaches at architecture schools in Cameroon and France.",
        net_worth_or_revenue: "Boutique firm — impact > revenue",
        lesson: "African traditional building materials and methods produce better-insulated, more climate-appropriate buildings than imported concrete at 40–60% less cost. The knowledge exists. The architecture schools stopped teaching it.",
      },
    ],
    cheap_start: {
      method: "CEB — Compressed Earth Blocks (Modernized Mud Brick)",
      historical_roots: "Every African civilization built with earth. The Great Mosque of Djenné in Mali is 700 years old, made of banco (compressed mud), and still standing. The Great Zimbabwe structures used granite and mortar-free stone construction. Traditional Hausa walled cities were built with compressed earth and laterite. European colonizers replaced these with concrete — not because concrete is better, but because it created dependency on imported materials.",
      modern_equivalent: "A CEB press takes raw soil (or soil + 5–8% cement stabilizer) and compresses it into uniform interlocking blocks stronger than fired brick. No kiln. No firing. No imported materials. Just soil, a machine, and labor — all local.",
      start_cost_africa: "$300–$1,500 for a manual CINVA Ram press. $1,500–$4,000 for a motorized press (from local fabricators in Nigeria, Ghana, Kenya). Soil: free (use construction site excavation). Labor: $5–$15/day locally.",
      why_cheaper_than_conventional: "CEB blocks cost $0.05–$0.12 each to make vs $0.25–$0.50 for fired clay brick and $0.30–$0.50 for concrete block. No firing = no fuel cost. No cement = no Holcim/Lafarge bill. A 3-bedroom house built with CEB costs 40–60% less than the same house in concrete. The blocks interlock — no mortar needed for many designs, cutting labour cost further.",
      alibaba_search: "compressed earth block machine manual CINVA Ram",
      local_alternative: "In Nigeria and Ghana, local welding fabricators make CEB presses for $400–$800. Kenya has ISSB (Interlocked Stabilized Soil Block) machines made locally in Nairobi. Rwanda's National Housing Authority has promoted ISSBs for 10 years. Ask at any technical training college in your country — they often have machines and training.",
      first_step: "Go to a construction site near you. Ask if you can take a bucket of excavated soil. Test it: roll a fist-sized ball, let it dry 24 hours. If it holds without cracking, it's CEB-suitable. 80% of African soil is. Then find a local fabricator and get a press quote. That's Day 1.",
    },
    the_insight: "You don't need cement to build Africa. Africa built itself for 5,000 years without Portland cement — which was only invented in 1824. Compressed earth, rammed earth, laterite stone, and bamboo are stronger, cooler, and more sustainable than concrete in tropical climates. The switch to concrete created a $14B/year import dependency that funds European and Chinese companies. CEB breaks that dependency completely.",
    market_size: "$14 billion African cement market + $100B+ African construction market",
  },

  {
    sector: "Food Processing & FMCG",
    icon: "🥫",
    tagline: "Unilever, Nestlé, and Diageo make billions selling Africans processed versions of African raw materials.",
    countries_most_relevant: ["Nigeria", "Ghana", "Kenya", "South Africa", "Ethiopia", "Senegal", "Côte d'Ivoire", "Tanzania"],
    the_extraction: "Africa's FMCG (Fast Moving Consumer Goods) market is worth $250 billion/year. Unilever, Nestlé, Diageo (Guinness), AB InBev (beer), Mars, Kellogg's, and Mondelez dominate the shelves of every African supermarket. They import finished products or manufacture locally using African raw materials — palm oil, cocoa, cassava, groundnuts, sorghum, malt — while keeping branding, technology, and profit centres in Europe and North America.",
    foreign_dominators: [
      {
        company: "Unilever Africa",
        country_of_origin: "UK / Netherlands",
        what_they_do_in_africa: "Dominates household care (OMO, Sunlight, Omo), personal care (Dove, Vaseline, Lux), and food (Knorr, Blue Band, Rama margarine) across 40+ African markets",
        how_they_extract: "Buys African raw materials (palm oil, groundnuts) at commodity price. Converts to branded products at 5–20× markup. Repatriates profit to Netherlands. Has operated in Nigeria since 1923.",
        annual_africa_revenue: "$2.5+ billion Africa revenue",
      },
      {
        company: "Nestlé Africa",
        country_of_origin: "Switzerland",
        what_they_do_in_africa: "Milo, Maggi, Nescafé, Kit Kat, infant formula (Cerelac) across 50+ African countries",
        how_they_extract: "Aggressive infant formula marketing (documented in WHO reports) in countries where breastfeeding is superior. Milo is made from cocoa Nestlé buys from Ghana/CIV at farm prices, sells back to Africans at 50× markup.",
        annual_africa_revenue: "$3+ billion Africa revenue",
      },
      {
        company: "Diageo Africa (Guinness)",
        country_of_origin: "UK",
        what_they_do_in_africa: "Guinness Nigeria, Guinness Ghana, East African Breweries, Senator Keg (low-cost sorghum beer in Kenya), Malta Guinness",
        how_they_extract: "Brews using local sorghum, malt, and water. Keeps premium branding and technology in UK. Diageo HQ earns dividends from all African subsidiaries.",
        annual_africa_revenue: "$2+ billion Africa revenue",
      },
      {
        company: "Olam International",
        country_of_origin: "Singapore",
        what_they_do_in_africa: "Africa's largest agri-commodity trader — cocoa, cashews, cotton, coffee, sesame, groundnuts across 25 African countries",
        how_they_extract: "Started as a Nigerian cashew exporter, went public in Singapore, now extracts commodity margins from African smallholders while profits go to Singapore shareholders.",
        annual_africa_revenue: "$7+ billion from Africa",
      },
    ],
    african_success: [
      {
        name: "Emeka Offor",
        nationality: "Nigerian",
        company: "Chrome Group (foods, oil, power)",
        how_they_started: "Started as a trader, built relationships with state governments, diversified into food processing and energy",
        scale_today: "Multi-billion naira conglomerate with food processing and distribution across Nigeria",
        net_worth_or_revenue: "Estimated $1+ billion",
        lesson: "Start with trading. Understand the market from the bottom up. Add processing once you have the buyer relationships.",
      },
      {
        name: "Cletus Ibeto",
        nationality: "Nigerian",
        company: "Ibeto Group (cement, plastics, salt, food)",
        how_they_started: "Started a small plastics recycling business in Nnewi in the 1980s. Expanded into salt processing, then cement.",
        scale_today: "One of Nigeria's largest industrial conglomerates — cement, plastics, glass, food processing",
        net_worth_or_revenue: "Estimated $1.5 billion",
        lesson: "Recycling and waste are the cheapest starting points. He recycled plastics before he manufactured them.",
      },
      {
        name: "Aliko Dangote",
        nationality: "Nigerian",
        company: "Dangote Flour Mills, Dangote Sugar, Dangote Pasta, Dufil Prima (Indomie)",
        how_they_started: "Followed the same pattern as cement — trading first, processing second, manufacturing third",
        scale_today: "Controls significant share of Nigerian staple food processing — flour, sugar, pasta, salt",
        net_worth_or_revenue: "$14B total — food is a large portion",
        lesson: "Staple food processing is the safest food business. Nigerians will always buy flour, sugar, and pasta. Start with a staple, not a luxury.",
      },
    ],
    cheap_start: {
      method: "Fermented and dried food products — zero equipment to start",
      historical_roots: "Every African culture has fermented food: dawadawa (locust bean ferment), ugba (oil bean ferment), ogiri (castor seed ferment), Senegalese nététu, Ethiopian injera starter. These are natural preservation technologies developed over thousands of years — no refrigerator, no preservatives, no lab.",
      modern_equivalent: "Branded fermented products for urban health food markets. Dawadawa is the African equivalent of miso — used as umami seasoning. It sells for $8–$15 per 100g in the UK natural food market. In Nigeria you buy it for $0.20 from a market woman.",
      start_cost_africa: "$50–$300 to start — just raw materials, packaging, and a kitchen. No equipment needed for fermentation.",
      why_cheaper_than_conventional: "No electricity needed for fermentation. No equipment needed — clay pots are the fermenting vessel. Raw materials are agricultural byproducts. The process is 100% traditional knowledge that no food corporation can patent or own.",
      alibaba_search: "food packaging sealer machine small",
      local_alternative: "Traditional markets are your sourcing, your R&D, and your first test market. Sell to 5 urban restaurants first. Get their feedback before packaging.",
      first_step: "Go to a traditional market and buy 1kg of a fermented product made in your country. Eat it. Find out who makes it. Learn the process. Come back and make a clean, packaged version. That's the whole business.",
    },
    the_insight: "Unilever has sold Africans Knorr seasoning cubes since 1941 — made from yeast extract, salt, and palm oil. Dawadawa does exactly the same thing naturally and is nutritionally superior. The difference is a brand name, a cube shape, and 80 years of marketing. You can make the African version. You already have the raw material. You already have the recipe. You need the packaging and the story.",
    market_size: "$250 billion African FMCG market",
  },

  {
    sector: "Textiles, Fashion & Leather",
    icon: "👗",
    tagline: "China makes $30 billion/year selling Africans fabric. Africa grows the cotton.",
    countries_most_relevant: ["Nigeria", "Ghana", "South Africa", "Kenya", "Ethiopia", "Morocco", "Senegal", "Côte d'Ivoire"],
    the_extraction: "Africa is the world's largest importer of used clothing and second-hand fashion. $4 billion/year in second-hand clothes ('mitumba' in East Africa, 'okirika' in Nigeria) floods African markets, destroying local textile industries. Meanwhile, China exports $30B in new clothing to Africa each year using African cotton — bought raw, processed in Guangzhou, sold back as finished garments. Zara, H&M, and Primark use African cotton (Mali, Burkina Faso, Benin) in Bangladesh and Chinese factories and sell the clothes to Africans at European prices.",
    foreign_dominators: [
      {
        company: "Vlisco Group",
        country_of_origin: "Netherlands",
        what_they_do_in_africa: "Produces 'African' wax print fabric in a Dutch factory in Helmond, Netherlands. Dominates the West African wax print market with brands Vlisco, GTP, Woodin, ABC Wax.",
        how_they_extract: "A Dutch company has profited from African fabric culture since 1846 — 180 years. The fabric most associated with African identity (wax print) is made in the Netherlands. Sells to Africans at $15–$60 per yard.",
        annual_africa_revenue: "$200+ million/year",
      },
      {
        company: "Chinese textile manufacturers (Guangzhou / Zhejiang)",
        country_of_origin: "China",
        what_they_do_in_africa: "Produce cheap imitation wax prints, kente cloth, Ankara patterns — sold in African markets at $2–$5/yard, undercutting local weavers",
        how_they_extract: "Buy African cotton at commodity price, produce in Chinese factories with Chinese labour, flood African markets with copies of African patterns. Kente cloth sold in Accra markets is often Chinese-made.",
        annual_africa_revenue: "$30B+ total African clothing imports from China",
      },
      {
        company: "Global second-hand clothing exporters (UK, US, Canada charities)",
        country_of_origin: "UK, US, Canada",
        what_they_do_in_africa: "Ship donated clothing ('charity') to Africa as commodity bales — sold to intermediaries who resell in local markets",
        how_they_extract: "$4B/year in used clothing imports has destroyed local textile industries in Ghana, Kenya, Tanzania, Nigeria. Rwanda banned second-hand clothing imports in 2018 — the US threatened trade sanctions.",
        annual_africa_revenue: "$4 billion second-hand clothing trade to Africa",
      },
    ],
    african_success: [
      {
        name: "Ozwald Boateng",
        nationality: "Ghanaian-British",
        company: "Ozwald Boateng (Savile Row, London)",
        how_they_started: "Self-taught Ghanaian tailor who became the first Black tailor to open a shop on Savile Row, London's most prestigious tailoring street. Built his brand on African-inspired colour and cut in a British craft tradition.",
        scale_today: "Global luxury menswear brand. Has dressed Barack Obama, Will Smith, Jamie Foxx. License deals worth tens of millions.",
        net_worth_or_revenue: "Multi-million pound brand",
        lesson: "He didn't start in Africa. He mastered the most prestigious craft tradition in the world (Savile Row) and then brought African colour and identity into it. You can learn the world's best techniques and apply them with African materials.",
      },
      {
        name: "Maki Oh (Amaka Osakwe)",
        nationality: "Nigerian",
        company: "Maki Oh",
        how_they_started: "Started with $300 and a sewing machine in Lagos. Used adire (traditional Yoruba resist-dyeing) as a design identity.",
        scale_today: "Stocked at Bergdorf Goodman New York, Browns London, Net-a-Porter. Dressed Michelle Obama.",
        net_worth_or_revenue: "Multi-million dollar fashion brand",
        lesson: "Traditional African textile techniques (adire, kente, bogolan, shweshwe) are internationally unique. No Chinese manufacturer can replicate the authentic origin. Your identity is your competitive advantage.",
      },
      {
        name: "Kenneth Ize",
        nationality: "Nigerian",
        company: "Kenneth Ize",
        how_they_started: "Studied fashion in Vienna, returned to Nigeria and sourced traditional aso-oke weavers in Ilorin to make his fabric. Combined ancient weaving with contemporary cuts.",
        scale_today: "LVMH Prize finalist. Stocked globally. Collaborations with Karl Lagerfeld.",
        net_worth_or_revenue: "High-profile brand. Revenue not disclosed but high-value unit economics.",
        lesson: "Going back to the source — traditional weavers — gave him something no European fashion house could copy. Authenticity + quality training = global brand.",
      },
      {
        name: "Adebayo Okeowo (Deola Sagoe)",
        nationality: "Nigerian",
        company: "Deola Sagoe",
        how_they_started: "Started designing clothes in her Lagos home in the 1980s using aso-oke and adire fabrics she bought from local weavers.",
        scale_today: "Internationally recognised Nigerian couture. Displayed at the Smithsonian and Victoria & Albert Museum.",
        net_worth_or_revenue: "Established Nigerian luxury fashion house",
        lesson: "Nigerian fabrics can compete with French couture. The difference is training, presentation, and international marketing — not the quality of the raw material.",
      },
    ],
    cheap_start: {
      method: "Adire, Bogolan, Kente, Aso-oke — own your traditional textile, sell it as luxury",
      historical_roots: "Adire (Yoruba resist-dyeing) is 1,000+ years old. Kente (Ashanti weaving) has been a royal fabric since the 17th century. Bogolan (Malian mud cloth) was worn by hunters for camouflage and now hangs in European galleries. Shweshwe (South African cotton print, originally from German missionaries) is now uniquely South African. These are not 'crafts' — they are sophisticated textile traditions that took centuries to develop.",
      modern_equivalent: "A small adire studio with 2 sewing machines and locally-sourced indigo and cotton can produce fabric that sells for $25–$80/yard in London and New York. The same fabric costs $3–$8 in Nigerian markets because it is not branded or positioned as premium.",
      start_cost_africa: "$200–$800 for 2 sewing machines (local second-hand market), indigo dye, cotton fabric. Manual tie-dye requires no machine at all — just hands, string, and dye.",
      why_cheaper_than_conventional: "No factory needed to start. Traditional techniques are labour-intensive but use cheap/free materials (natural indigo from local plants, local cotton, local weavers who will work on commission). The premium comes from the story and positioning, not the material cost.",
      alibaba_search: "sewing machine industrial second hand",
      local_alternative: "Find traditional weavers and dyers in your city. In Nigeria: Abeokuta (adire), Ilorin (aso-oke), Kano (leather). In Ghana: Bonwire (kente), Bolgatanga (basket weaving). In Mali: Bamako traditional bogolan makers. Partner with them — you bring the brand and marketing, they bring the craft.",
      first_step: "Go to a traditional weaver or dyer in your city. Buy $50 of fabric at their price. Photograph it beautifully — natural light, outdoor setting, on a person. List on Etsy with the story of the maker. See what price it sells for. That margin tells you whether to scale.",
    },
    the_insight: "A Dutch company has been making 'African' fabric in the Netherlands and selling it to Africans since 1846. Vlisco fabric is not made in Africa. The most iconic African print is European-manufactured. You can make the real thing in Africa, with African weavers, for less than Vlisco's production cost — and sell it as authentic at premium price. The authenticity IS the product.",
    market_size: "$31 billion African textile and fashion market",
  },

  {
    sector: "Agribusiness & Farm Input",
    icon: "🌾",
    tagline: "African farmers buy seeds and fertilizer from European and American companies to grow food for European buyers. They profit at every step.",
    countries_most_relevant: ["Nigeria", "Kenya", "Ghana", "Ethiopia", "Tanzania", "Uganda", "Rwanda", "Senegal", "Zambia", "Mozambique"],
    the_extraction: "Africa has 60% of the world's uncultivated arable land — and still imports $50 billion in food per year. African farmers buy seeds from Bayer (German) and Corteva (US). They buy fertilizer from Yara (Norwegian) and OCP (Moroccan, but state-owned). They sell their harvest to Olam (Singapore), Cargill (US), and Louis Dreyfus (Dutch). Three European/American companies control global commodity prices for everything African farmers grow.",
    foreign_dominators: [
      {
        company: "Bayer CropScience (formerly Monsanto)",
        country_of_origin: "Germany / US",
        what_they_do_in_africa: "Sells hybrid seeds and agrochemicals (herbicides, pesticides) to African farmers in Kenya, Nigeria, Ethiopia, South Africa",
        how_they_extract: "Hybrid seeds cannot be saved and replanted — farmers must buy new seeds every season. Creates permanent dependency. African farmers paid $0 for seeds for 10,000 years using saved seed varieties.",
        annual_africa_revenue: "$500M+ from Africa",
      },
      {
        company: "Olam International",
        country_of_origin: "Singapore",
        what_they_do_in_africa: "Largest agri-commodity trader in Africa — cocoa, cashews, coffee, cotton, sesame, groundnuts, rice",
        how_they_extract: "Buys from millions of smallholder farmers at commodity price, aggregates, exports to processing in Asia or Europe. Takes the trading margin. Profit goes to Singapore shareholders.",
        annual_africa_revenue: "$7+ billion",
      },
      {
        company: "Cargill",
        country_of_origin: "US",
        what_they_do_in_africa: "Buys cocoa from Ghana and CIV, cotton from Benin and Mali, grain from Kenya and South Africa",
        how_they_extract: "Private (no shareholders) — controls more agricultural trade than any public company. One of Africa's largest commodity buyers. No transparency, no accountability.",
        annual_africa_revenue: "$5+ billion from Africa",
      },
      {
        company: "Louis Dreyfus (LDC)",
        country_of_origin: "Netherlands",
        what_they_do_in_africa: "Cotton, coffee, orange juice, sugar, rice trading across Africa",
        how_they_extract: "One of the 'ABCD' companies (Archer Daniels, Bunge, Cargill, Dreyfus) that control global commodity prices. African farmers price their crops against benchmarks these companies influence.",
        annual_africa_revenue: "$3+ billion from Africa",
      },
    ],
    african_success: [
      {
        name: "Fred Swaniker",
        nationality: "Ghanaian",
        company: "African Leadership Group (ALG), Africa50, AgriStar",
        how_they_started: "Education entrepreneur who pivoted into agricultural transformation. Co-founded farming ventures to prove what African smallholders can do with training and market access.",
        scale_today: "ALG graduates lead enterprises across Africa. His thesis: Africa's problem is leadership and market access, not farming capability.",
        net_worth_or_revenue: "Privately funded — $100M+ in backing",
        lesson: "The agricultural gap is not about farming skill. African farmers are excellent. The gap is aggregation, storage, processing, and market access. Fix those four things and the farming works.",
      },
      {
        name: "Theirno Hamidou Barry",
        nationality: "Guinean",
        company: "Tolaro Global",
        how_they_started: "Identified that Guinea exports cashews raw to Vietnam at $1/kg and Vietnamese companies sell processed cashews for $8–$15/kg back to Western markets. Built a local processing facility.",
        scale_today: "Largest cashew processor in Guinea. Processes and exports directly, skipping Vietnamese middlemen.",
        net_worth_or_revenue: "Multi-million dollar processing operation, growing fast",
        lesson: "Processing is the business. Trading is giving your margin away. If you can add one step between the farm and the customer, you multiply your income by 5–10×.",
      },
      {
        name: "Bethlehem Tilahun Alemu",
        nationality: "Ethiopian",
        company: "soleRebels (footwear) / Garden of Coffee",
        how_they_started: "Started making sandals from recycled car tyres and traditional Ethiopian fabric in Addis Ababa. Sold online to US and European customers. Now runs Garden of Coffee — sourcing Ethiopian specialty coffee directly from farmers for export.",
        scale_today: "soleRebels is Africa's first globally certified Fair Trade footwear company. Garden of Coffee operates one of Ethiopia's largest specialty coffee export operations.",
        net_worth_or_revenue: "Multi-million dollar export business. Employs 300+ in Addis Ababa.",
        lesson: "She took the thing her community already did — traditional shoe-making and coffee growing — and found the international customer willing to pay premium for authentic, ethical sourcing. The product was already there. The market connection was the innovation.",
      },
    ],
    cheap_start: {
      method: "Open-pollinated seed saving + organic input production",
      historical_roots: "African farmers grew food for 10,000 years without buying seeds or fertilizer. They saved seeds from their best plants every season — this is called open-pollinated seed saving. They composted crop waste, applied animal manure, and used intercropping (mixing nitrogen-fixing plants with food crops) to maintain soil fertility. These are not 'primitive' practices — they are sophisticated agricultural systems that sustained the most biodiverse farming in the world.",
      modern_equivalent: "An open-pollinated seed bank + organic compost/vermicompost operation. Sell local varieties to organic farmers who cannot use hybrid seeds. In Kenya and Uganda, heirloom tomato, bean, and maize varieties sell for 3–5× more than hybrid varieties from Bayer at certified organic markets.",
      start_cost_africa: "$50–$300 to start seed saving. $200–$800 to start vermicompost (earthworm composting). $500–$2,000 for a simple drip irrigation system to dramatically increase yields without chemical inputs.",
      why_cheaper_than_conventional: "Zero seed cost (you save from your own plants). Zero synthetic fertilizer cost (compost + manure). Zero pesticide cost (companion planting, neem spray). Input costs drop by 60–80% vs. conventional farming with purchased inputs. Yield can be 20–30% lower, but margin is 2–3× higher.",
      alibaba_search: "drip irrigation kit small farm",
      local_alternative: "In every African country, seed saving networks exist. Uganda Seed Network, Kenya Organic Agriculture Network (KOAN), AGRA (Alliance for a Green Revolution in Africa) has criticised synthetic inputs and is shifting to agroecology. Your government's agricultural extension office knows the local open-pollinated varieties.",
      first_step: "Find the oldest farmer in your family or village. Ask what seeds their parents used before hybrid varieties came in the 1970s and 1980s. Those varieties are more drought-resistant, more nutritious, and adapted to your soil. Save those seeds. That's your starting inventory.",
    },
    the_insight: "Africa feeds the world and cannot feed itself. This is not a coincidence — it is a system. European and American companies control seed supply, input pricing, commodity buying prices, and export logistics. African farmers are the most productive link in a chain where they receive the least value. The entry point for an African entrepreneur is aggregation, processing, and direct export — cutting out the Singapore and Dutch middlemen who take the margin.",
    market_size: "$1 trillion African agricultural sector (only 20% of potential is being achieved)",
  },

  {
    sector: "Beauty & Personal Care",
    icon: "💄",
    tagline: "Africa produces the world's most valuable beauty ingredients. European and US brands buy them for pennies and sell back to Africans for dollars.",
    countries_most_relevant: ["Morocco", "Ghana", "Nigeria", "Senegal", "Kenya", "South Africa", "Burkina Faso", "Ethiopia"],
    the_extraction: "The global beauty industry is worth $500 billion/year. Africa produces argan oil (Morocco), shea butter (West Africa), African black soap (Ghana/Nigeria), rooibos (South Africa), baobab (across Africa), marula oil (Southern Africa), and dozens more ingredients that form the backbone of premium Western beauty brands. L'Oréal, Estée Lauder, Unilever, Shiseido, and LVMH buy these ingredients at bulk commodity prices and sell finished products at 40–100× the raw material cost.",
    foreign_dominators: [
      {
        company: "L'Oréal",
        country_of_origin: "France",
        what_they_do_in_africa: "Sells shampoo, skincare, haircare across Africa. Sources argan, shea, and other African ingredients for European production.",
        how_they_extract: "Africa is both supplier (raw materials) and customer (finished product). L'Oréal buys argan at $10/kg and sells argan products at $40–$80 per 50ml. Profit centres in Paris.",
        annual_africa_revenue: "$1.5+ billion from Africa",
      },
      {
        company: "Unilever (Dove, Vaseline, Lux, TRESemmé)",
        country_of_origin: "UK / Netherlands",
        what_they_do_in_africa: "Controls large share of personal care market in Nigeria, Kenya, South Africa, Ghana",
        how_they_extract: "Vaseline is literally petroleum jelly — a byproduct of African oil extraction. They process it in Europe, brand it, sell it to Africa. The ingredients are African. The money is European.",
        annual_africa_revenue: "$2.5+ billion personal care from Africa",
      },
      {
        company: "Estée Lauder Companies (MAC, Clinique, Origins, Aveda)",
        country_of_origin: "US",
        what_they_do_in_africa: "Sells premium skincare and cosmetics. Origins and Aveda source African botanical ingredients.",
        how_they_extract: "African botanical ingredients at commodity price → Aveda serum at $80/50ml. The extraction ratio is 50–100×.",
        annual_africa_revenue: "$500M+ from Africa",
      },
    ],
    african_success: [
      {
        name: "Ibukun Awosika",
        nationality: "Nigerian",
        company: "Chair First Bank Nigeria + The Chair Centre Group (cosmetics, furniture)",
        how_they_started: "Started a furniture and beauty business from scratch in the 1990s, built it into a multi-sector conglomerate while building a parallel career in banking and finance.",
        scale_today: "One of Nigeria's most prominent businesswomen. First Bank Chair. The Chair Centre manufactures office furniture and beauty products.",
        net_worth_or_revenue: "Multi-million dollar group",
        lesson: "Built from manufacturing and retail, not import. The business model was: make locally, sell locally. Import substitution before it had a name.",
      },
      {
        name: "Josie Nwosu (Jobberman, OmniRetail — not beauty, but shows model)",
        nationality: "Nigerian",
        company: "Dozens of Nigerian beauty entrepreneurs on TikTok/Instagram building $100K–$1M beauty businesses",
        how_they_started: "Almost all start the same way: source local shea, black soap, or botanical ingredients. Package at home. Sell on Instagram. Graduate to Amazon or Afrikrea.",
        scale_today: "Hundreds of Nigerian, Ghanaian, and Senegalese beauty brands now sell on Amazon and Etsy. Most started under $500.",
        net_worth_or_revenue: "$50K–$1M annual revenue for the top indie brands",
        lesson: "You don't need a factory. You need product, photos, and a story. The ingredient is already in your market. The brand is the business.",
      },
      {
        name: "Wunmi Olaosebikan",
        nationality: "Nigerian",
        company: "Natural Nigerian",
        how_they_started: "Started blogging about natural hair care for African women in 2009. Launched a product line using shea, black soap, and coconut oil sourced from Nigerian markets.",
        scale_today: "One of Nigeria's most recognized natural beauty brands. Stocked in Nigerian pharmacies and online.",
        net_worth_or_revenue: "Multi-million naira business",
        lesson: "Community first, product second. She built an audience of women who trusted her before she sold them anything.",
      },
    ],
    cheap_start: {
      method: "African black soap + shea butter — the original African cosmetics",
      historical_roots: "African black soap (ose dudu in Yoruba, alata samina in Twi) has been made in West Africa for 1,000+ years. It's made from plantain skin ash + palm kernel oil + cocoa pod ash + shea butter. Traditional Yoruba and Akan healers used it for skin conditions that no modern dermatologist has found a synthetic equivalent for. It naturally contains lauric acid, linolenic acid, and vitamin E.",
      modern_equivalent: "A branded African black soap product sold on Amazon at $12–$20 per 200g. SheaMoisture (US brand, owned by Unilever since 2017 after being acquired for $850M) sells African black soap products made from West African ingredients at massive premium. You can make the real thing for $0.80–$2.00 per bar.",
      start_cost_africa: "$100–$400 for raw materials: raw black soap bars from market women, shea butter, essential oils, packaging. A soap cutter: $20–$50 locally. Packaging: $50–$100 initial order of custom labels and kraft paper wrapping.",
      why_cheaper_than_conventional: "No chemical processing needed — it's already a finished product. No preservatives needed — natural ingredients have long shelf life. Raw materials available in every West African market. Labour: 1 person, 4 hours = 50 bars worth $600 retail.",
      alibaba_search: "soap cutting machine small automatic",
      local_alternative: "Every major Nigerian, Ghanaian, and Senegalese market has women selling raw black soap by weight. Buy 5kg to start. Test different varieties (shea-heavy, plantain ash-heavy) to find your formulation. Then brand it.",
      first_step: "Buy 2kg raw black soap from your local market ($2–$5). Cut into uniform bars. Wrap in kraft paper with a hand-written label and your Instagram handle. Give 10 bars to 10 friends. Ask them to post photos and tag you. That's your launch.",
    },
    the_insight: "Unilever acquired SheaMoisture (a Black-owned natural beauty brand) in 2017 for $850 million. The brand was built on West African ingredients — shea, black soap, coconut. A Black woman (Richelieu Dennis, founder's son) took African ingredients, branded them for the African diaspora in the US, and built a $850M company. That same play is available to entrepreneurs in Lagos, Accra, and Dakar — sourcing the same ingredients even more cheaply.",
    market_size: "$500 billion global beauty industry. African natural ingredients are the fastest-growing ingredient category.",
  },

  {
    sector: "Finance, Payments & Microfinance",
    icon: "💳",
    tagline: "African banks were designed by colonial governments to move money out of Africa. Mobile money is reversing that — and Africans built it.",
    countries_most_relevant: ["Kenya", "Nigeria", "Ghana", "Rwanda", "South Africa", "Tanzania", "Uganda", "Senegal"],
    the_extraction: "Standard Chartered (UK), Barclays/Absa (UK), Societe Generale (France), BNP Paribas (France), and Standard Bank (South Africa) have operated in Africa since colonial times — designed to serve European settlers and mining companies, not African businesses. They charge African SMEs 15–25% interest rates while paying 1–3% on deposits. The spread is extracted and repatriated. Meanwhile, Western Union and MoneyGram charge 5–10% on $40B in annual African diaspora remittances — taking $2–$4 billion/year from money sent to African families.",
    foreign_dominators: [
      {
        company: "Standard Chartered Africa",
        country_of_origin: "UK",
        what_they_do_in_africa: "Retail and corporate banking across 15 African countries — Nigeria, Kenya, Ghana, Tanzania, Uganda, Zambia, Zimbabwe",
        how_they_extract: "Charges 15–25% interest to SME borrowers. Pays 1–3% to savers. The spread (12–22 percentage points) is profit repatriated to London. Originally the Bank of British West Africa — designed for colonial extraction.",
        annual_africa_revenue: "$1.5B+ from Africa",
      },
      {
        company: "Western Union / MoneyGram",
        country_of_origin: "US",
        what_they_do_in_africa: "Processes African diaspora remittances to 54 African countries",
        how_they_extract: "Charges 5–10% on every transfer. Africa receives $40B+/year from diaspora. Western Union/MoneyGram take $2–$4 billion of that before it reaches African families. Wave (Senegalese/US startup) now sends to Senegal at 0% fee — proving this was always extractable.",
        annual_africa_revenue: "$2–$4 billion in fees from African remittances",
      },
      {
        company: "Visa and Mastercard",
        country_of_origin: "US",
        what_they_do_in_africa: "Processes card transactions across Africa — 1.5–3% fee on every transaction",
        how_they_extract: "Pan-African alternative: MTN MoMo, M-Pesa, and Orange Money process $700B+ in mobile money transactions within Africa at far lower fees. But cross-border African payments still route through Visa/Mastercard and extract fees to the US.",
        annual_africa_revenue: "$1B+ from Africa",
      },
    ],
    african_success: [
      {
        name: "James Mwangi",
        nationality: "Kenyan",
        company: "Equity Bank",
        how_they_started: "Joined a failing building society in 1993 that had 27,000 customers and was technically insolvent. Transformed it into a bank serving people who traditional banks rejected — no collateral, no formal employment, small deposits.",
        scale_today: "Equity Bank has 15M+ customers, operates in 7 countries. One of Africa's most profitable banks. Listed on Nairobi Stock Exchange.",
        net_worth_or_revenue: "Equity Group revenue: $1B+. James Mwangi is a billionaire.",
        lesson: "He served the customers the colonial banks ignored — small farmers, market traders, domestic workers. The 'unbanked' were not risky. They were just unserved. The biggest market is always the one everyone else has dismissed.",
      },
      {
        name: "Flutterwave (Olugbenga Agboola + Iyinoluwa Aboyeji)",
        nationality: "Nigerian",
        company: "Flutterwave",
        how_they_started: "Two Nigerians who met at Andela (tech training program). Built a payments API that allows businesses across Africa to send and receive payments across borders without routing through New York correspondent banks.",
        scale_today: "Unicorn — valued at $3 billion. Processes $16B+ in transactions. Used by 900,000+ businesses across 34 countries.",
        net_worth_or_revenue: "$3 billion valuation",
        lesson: "They identified the exact point where foreign companies extracted value (cross-border payment fees) and built the African alternative. The problem was obvious to anyone who had tried to send money between African countries.",
      },
      {
        name: "Wave (Lincoln Quirk + Drew Durbin + Senegalese leadership team)",
        nationality: "US-Senegalese joint team",
        company: "Wave Mobile Money",
        how_they_started: "Launched in Senegal in 2018 with one radical idea: 0% fees for all transfers and bill payments. Orange Money and Free Money charged 5–8% fees. Wave undercut them to zero.",
        scale_today: "10M+ users in Senegal, Côte d'Ivoire, Mali. $1.7 billion valuation. Processes more transactions than the entire Senegalese banking system.",
        net_worth_or_revenue: "$1.7 billion valuation",
        lesson: "The existing players charged maximum fees because they had no competition. One company offering 0% fees took the entire market in 3 years. Wherever foreign companies charge high fees in Africa, the arbitrage opportunity is massive.",
      },
    ],
    cheap_start: {
      method: "Mobile money agent network — no bank license needed",
      historical_roots: "African rotating credit systems (susu in Ghana, esusu in Nigeria, tontines in Francophone Africa, chama in Kenya) existed for centuries before banks arrived. Groups of people pool money and rotate the full pot to each member. Zero bank. Zero fees. 100% trust-based. These informal savings systems collectively hold billions of dollars that never enter the formal banking system.",
      modern_equivalent: "A mobile money agent (M-Pesa agent, Orange Money agent, Wave agent) requires a float capital of $500–$2,000 and earns 0.5–2% on every transaction processed. A busy urban agent can process $5,000–$20,000 per day and earn $25–$400/day in commissions. Scale to a network of sub-agents and earn on their float too.",
      start_cost_africa: "$500–$2,000 initial float + $50–$200 for licensing and registration. Some operators (like Wave in Senegal) have zero registration fees.",
      why_cheaper_than_conventional: "No bank license (costs millions). No premises needed (can operate from a phone). No staff needed to start. The mobile operator handles the technology and compliance. You just provide liquidity (cash/float) and customer service.",
      alibaba_search: "N/A — this is a service business, no equipment needed",
      local_alternative: "Register as an agent through your country's leading mobile money operator: M-Pesa (Kenya/Tanzania), MTN MoMo (Ghana/Nigeria/Uganda), Wave (Senegal/CIV), Orange Money (Senegal/Mali/Cameroon). The operator provides training and float management tools.",
      first_step: "Download the M-Pesa / Wave / Orange Money agent app. Apply online. Most operators approve within 48–72 hours. Start with $500 in float. Place yourself at a location with high foot traffic — market entrance, bus stop, petrol station. That's your business.",
    },
    the_insight: "Wave built a $1.7 billion company by charging 0% fees in a market where everyone else charged 5–8%. The market was there. The customers were there. The technology was there. The only thing missing was someone willing to undercut the colonial-era fee structure. In every African financial service — insurance, remittance, lending, savings — a version of this opportunity exists. The question is: where are the foreign extractors charging the highest fees?",
    market_size: "$230 billion African financial services market (only 10% of potential currently served)",
  },
];
