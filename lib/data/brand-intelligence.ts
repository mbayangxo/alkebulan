// What global brands earn on African raw materials — and how to compete.
// Extraction stats, brand comparisons, waste opportunities, distribution playbooks.

export interface BrandComparison {
  raw_material: string;
  african_countries: string[];
  africa_earns: string;
  global_brands: { brand: string; product: string; retail_price: string; per_kg: string }[];
  multiplier: string;
  your_product: string;
  your_price_range: string;
  market_size: string;
}

export const BRAND_COMPARISONS: BrandComparison[] = [
  {
    raw_material: "Cocoa beans",
    african_countries: ["Ghana", "Côte d'Ivoire", "Nigeria", "Cameroon"],
    africa_earns: "$2.50–$3.00/kg raw cocoa beans at farm gate",
    global_brands: [
      { brand: "Lindt", product: "Excellence 70% Dark 100g", retail_price: "$4.50", per_kg: "$45/kg" },
      { brand: "Godiva", product: "Assorted gift box 19pc", retail_price: "$40.00", per_kg: "$200/kg" },
      { brand: "Tony's Chocolonely", product: "Dark Chocolate 180g", retail_price: "$5.99", per_kg: "$33/kg" },
      { brand: "Ferrero Rocher", product: "Gift Box 24pc", retail_price: "$18.00", per_kg: "$112/kg" },
    ],
    multiplier: "13–80× what Africa earns",
    your_product: "Origin artisan chocolate bar (72% Ghana / CIV cocoa, origin-branded)",
    your_price_range: "$8–$25 per 100g bar",
    market_size: "$130 billion global chocolate industry",
  },
  {
    raw_material: "Argan oil",
    african_countries: ["Morocco"],
    africa_earns: "$8–$12/kg raw argan oil (bulk export to Europe)",
    global_brands: [
      { brand: "Josie Maran", product: "Pure Argan Oil 1.7 fl oz", retail_price: "$48.00", per_kg: "$950/kg" },
      { brand: "Moroccanoil", product: "Treatment 3.4 fl oz", retail_price: "$46.00", per_kg: "$450/kg" },
      { brand: "The Ordinary", product: "Organic Argan Oil 30ml", retail_price: "$13.90", per_kg: "$463/kg" },
      { brand: "L'Oréal", product: "EverPure Argan Shampoo", retail_price: "$9.00", per_kg: "$40/kg" },
    ],
    multiplier: "40–100× what Morocco earns per kg",
    your_product: "Certified organic cold-pressed argan oil, branded with origin story",
    your_price_range: "$25–$60 per 50ml bottle",
    market_size: "$600 million argan oil beauty market (growing 8%/year)",
  },
  {
    raw_material: "Shea butter",
    african_countries: ["Ghana", "Burkina Faso", "Mali", "Nigeria", "Uganda"],
    africa_earns: "$0.30–$0.80/kg raw shea kernels",
    global_brands: [
      { brand: "The Body Shop", product: "Shea Body Butter 380ml", retail_price: "$28.00", per_kg: "$74/kg" },
      { brand: "L'Occitane", product: "Shea Hand Cream 150ml", retail_price: "$30.00", per_kg: "$200/kg" },
      { brand: "Burt's Bees", product: "Shea Body Lotion 170g", retail_price: "$14.00", per_kg: "$82/kg" },
      { brand: "SheaMoisture", product: "Shea Butter & Oats Mask", retail_price: "$13.00", per_kg: "$65/kg" },
    ],
    multiplier: "90–250× what Africa earns per kg",
    your_product: "Refined shea butter + body lotion / hair butter range",
    your_price_range: "$15–$40 per 250g jar",
    market_size: "$2.5 billion shea beauty market (fastest-growing natural ingredient)",
  },
  {
    raw_material: "Hibiscus / Bissap / Zobo",
    african_countries: ["Senegal", "Nigeria", "Mali", "Egypt", "Sudan"],
    africa_earns: "$1.50–$3.00/kg dried hibiscus flowers",
    global_brands: [
      { brand: "Stash Tea", product: "Hibiscus Herbal Tea 36ct", retail_price: "$8.00", per_kg: "$222/kg" },
      { brand: "Tazo", product: "Passion Tea 20ct", retail_price: "$6.50", per_kg: "$162/kg" },
      { brand: "Harney & Sons", product: "Hibiscus Herbal 20ct", retail_price: "$11.00", per_kg: "$274/kg" },
      { brand: "VAHDAM", product: "Hibiscus Tea 200g", retail_price: "$18.00", per_kg: "$90/kg" },
    ],
    multiplier: "30–90× what African farmers earn",
    your_product: "Packaged hibiscus tea bags, bissap syrup concentrate, hibiscus beauty mask",
    your_price_range: "$8–$20 per 100g pack",
    market_size: "$4.3 billion herbal tea market in the US alone",
  },
  {
    raw_material: "Moringa",
    african_countries: ["Nigeria", "Ghana", "Senegal", "Kenya", "Ethiopia"],
    africa_earns: "$0.50–$1.50/kg raw moringa leaves",
    global_brands: [
      { brand: "Amazing Grass", product: "Moringa Powder 240g", retail_price: "$30.00", per_kg: "$125/kg" },
      { brand: "Kuli Kuli", product: "Pure Moringa Powder 4oz", retail_price: "$20.00", per_kg: "$176/kg" },
      { brand: "Organic India", product: "Moringa Powder 100g", retail_price: "$14.00", per_kg: "$140/kg" },
      { brand: "Garden of Life", product: "Raw Moringa 120 caps", retail_price: "$25.00", per_kg: "$125/kg" },
    ],
    multiplier: "47–176× more than raw leaves",
    your_product: "Dried moringa powder, capsules, moringa tea bags, moringa baby food fortifier",
    your_price_range: "$15–$35 per 250g",
    market_size: "$9 billion superfoods market (moringa is top 5 fastest-growing)",
  },
  {
    raw_material: "Kenyan / Ethiopian coffee",
    african_countries: ["Kenya", "Ethiopia", "Rwanda", "Uganda"],
    africa_earns: "$3–$5/kg green (unroasted) beans",
    global_brands: [
      { brand: "Starbucks", product: "Reserve Kenya 250g", retail_price: "$18.00", per_kg: "$72/kg" },
      { brand: "Blue Bottle", product: "Kenya Single Origin 8oz", retail_price: "$22.00", per_kg: "$97/kg" },
      { brand: "Peet's", product: "Kenya AA 12oz", retail_price: "$19.95", per_kg: "$59/kg" },
      { brand: "Counter Culture", product: "Ethiopia Kochere 12oz", retail_price: "$20.00", per_kg: "$59/kg" },
    ],
    multiplier: "12–20× what farmers earn",
    your_product: "Direct-to-consumer roasted specialty coffee with farm story and subscription model",
    your_price_range: "$20–$45 per 250g bag",
    market_size: "$495 billion global coffee market",
  },
  {
    raw_material: "Cashew nuts",
    african_countries: ["Côte d'Ivoire", "Ghana", "Nigeria", "Mozambique", "Tanzania"],
    africa_earns: "$0.90–$1.50/kg raw cashew nuts (exported to Vietnam for processing)",
    global_brands: [
      { brand: "Planters", product: "Salted Cashews 8oz", retail_price: "$8.00", per_kg: "$18/kg" },
      { brand: "John B. Sanfilippo", product: "Whole Cashews 24oz", retail_price: "$14.00", per_kg: "$13/kg" },
      { brand: "Artisana Organics", product: "Raw Cashew Butter 16oz", retail_price: "$16.00", per_kg: "$35/kg" },
      { brand: "Nuttzo", product: "Cashew Butter 12oz", retail_price: "$13.00", per_kg: "$38/kg" },
    ],
    multiplier: "10–25× more than raw",
    your_product: "Roasted flavored cashews (honey, chili, natural) + cashew butter + cashew milk",
    your_price_range: "$6–$15 per 200g pack",
    market_size: "$6.7 billion global cashew market",
  },
];

export interface ExtractionStat {
  commodity: string;
  africa_produces: string;
  africa_earns: string;
  global_revenue: string;
  who_profits: string;
  the_crime: string;
  the_reversal: string;
}

export const EXTRACTION_STATS: ExtractionStat[] = [
  {
    commodity: "Cocoa",
    africa_produces: "70% of world's cocoa supply",
    africa_earns: "$6 billion/year — farmers earn ~$2/day",
    global_revenue: "$130 billion chocolate industry",
    who_profits: "Nestlé, Mars, Mondelez, Lindt, Hershey, Ferrero",
    the_crime: "Ghana and Côte d'Ivoire grow 65% of the world's cocoa and earn less than 5% of the global chocolate industry's revenue. A Ghanaian cocoa farmer earns $1.90/day. A Swiss chocolatier earns $100/day.",
    the_reversal: "Ghana Cocoa Board (COCOBOD) value-addition scheme and EU 2023 deforestation law now require direct African-brand relationships. Process and brand your own chocolate in-country.",
  },
  {
    commodity: "Cobalt",
    africa_produces: "DRC produces 70% of world cobalt",
    africa_earns: "~$2 billion/year at commodity price",
    global_revenue: "$500B+ electric vehicle battery market; $3T+ in Apple/Tesla market caps",
    who_profits: "Tesla, Apple, Samsung, Volkswagen, Glencore, LG",
    the_crime: "Every iPhone, iPad, laptop, and electric car contains cobalt mined in the Congo. DRC earns the extraction price. Silicon Valley companies earn the innovation price — Apple's market cap is $3 trillion+.",
    the_reversal: "Africa must move up the value chain in the energy transition. It has 70% of the minerals. It needs the battery factories. Gigafactory investment in Africa is now on the DFI agenda.",
  },
  {
    commodity: "Cotton & Textiles",
    africa_produces: "West Africa (Mali, Burkina Faso, Benin, Senegal): major cotton exporters",
    africa_earns: "Raw cotton at $1.50–$2.00/kg",
    global_revenue: "$1.7 trillion global fashion industry",
    who_profits: "Zara (Inditex), H&M, Nike, Levi's, Uniqlo, LVMH — and Chinese/Bangladeshi factories",
    the_crime: "West African cotton is exported raw to Chinese factories. It returns as clothes sold to Africans at $20–$80 per item. Africa grows the fibre, pays the retail price, and employs no one in between.",
    the_reversal: "African fashion brands. Vlisco (Dutch) sells African wax print fabric to Africans. The opportunity: African-owned wax print, kente, and bogolan brands with global positioning. Your fabric, your brand.",
  },
  {
    commodity: "Gold",
    africa_produces: "25% of world gold production",
    africa_earns: "Raw gold at commodity price; much lost to informal export",
    global_revenue: "$280 billion global jewelry and investment gold market",
    who_profits: "Swiss refineries (Valcambi, Argor-Heraeus), UAE, Cartier, Tiffany, Pandora, Richemont",
    the_crime: "Ghana is Africa's largest gold producer. Most gold is refined in Switzerland or UAE, turned into jewelry in Italy and the US, and sold globally. Ghanaian master goldsmiths exist but have no international brand.",
    the_reversal: "Artisan West African jewelry brands. Platforms like Afrikrea already sell this — but there's room for a premium heritage brand built on 700-year Akan goldsmithing tradition.",
  },
  {
    commodity: "Coffee",
    africa_produces: "Ethiopia, Uganda, Kenya, Rwanda: 12% of world coffee",
    africa_earns: "$3–$5/kg green beans at farm gate",
    global_revenue: "$495 billion global coffee market",
    who_profits: "Starbucks, Nestlé (Nescafé), JAB Holding (Lavazza, Peet's, Jacobs), JDE, illycaffè",
    the_crime: "Ethiopia's Yirgacheffe is among the world's most prized coffees. It sells at $3–$5/kg green. Starbucks resells it as 'Reserve' at $100+/kg equivalent. Ethiopian farmers earn 1–2% of the retail price — less than the barista.",
    the_reversal: "Direct-trade, subscription coffee brands roasted in-country. Ethiopia now has Kerchanshe, Yeshi Coffee. Rwanda's specialty coffee wins international cupping competitions. The infrastructure exists. The brand is the gap.",
  },
  {
    commodity: "Oil & Gas",
    africa_produces: "Nigeria, Angola, Libya, Algeria: 8–9% of world production",
    africa_earns: "Crude oil revenue — most wiped out by fuel subsidy imports",
    global_revenue: "$4 trillion+ downstream petroleum market",
    who_profits: "Shell, ExxonMobil, TotalEnergies, Chevron, BP — and Asian refiners",
    the_crime: "Nigeria produces 2.5 million barrels of crude oil per day but imports 80%+ of refined petrol because it has no functioning refineries. Africa exports crude and buys back diesel and gasoline at 3–5× the commodity oil price.",
    the_reversal: "Dangote Refinery (650k bbl/day capacity) is the model at scale. SME plays: LPG filling and distribution, biogas production from agricultural waste, solar + battery systems to displace diesel generators.",
  },
];

export interface CreativeProduct {
  raw_material: string;
  obvious_product: string;
  surprising_products: {
    name: string;
    why_interesting: string;
    market: string;
    price: string;
    difficulty: "Easy" | "Medium" | "Hard";
  }[];
  countries: string[];
}

export const CREATIVE_PRODUCTS: CreativeProduct[] = [
  {
    raw_material: "Hibiscus / Bissap",
    obvious_product: "Bottled hibiscus drink",
    surprising_products: [
      { name: "Hibiscus gin", why_interesting: "Craft gin with hibiscus is one of the fastest-growing spirits in UK — brands like Seedlip use African botanicals. Make it in Africa and own the story.", market: "UK premium spirits, craft cocktail bars", price: "$30–$60 per 500ml bottle", difficulty: "Hard" },
      { name: "Hibiscus face mask powder", why_interesting: "Hibiscus is rich in AHAs and vitamin C. It's used in $40 face masks by US beauty brands. The dry powder is cheap to ship and easy to sell on Amazon Beauty.", market: "US/UK natural beauty market", price: "$15–$30 per 100g jar", difficulty: "Easy" },
      { name: "Hibiscus vinegar", why_interesting: "Hibiscus-infused apple cider vinegar is a trending health product in the US — sold as a daily 'wellness shot'. Literally hibiscus + vinegar.", market: "US health food stores, Amazon", price: "$12–$20 per 500ml", difficulty: "Easy" },
      { name: "Hibiscus fabric dye", why_interesting: "Traditional use modernized. Natural plant dyes are having a premium renaissance in fashion. African hibiscus dye for organic textiles is a B2B product for sustainable fashion brands.", market: "European sustainable fashion brands", price: "$20–$40 per 100g dye pack", difficulty: "Medium" },
    ],
    countries: ["Senegal", "Nigeria", "Mali", "Egypt", "Sudan"],
  },
  {
    raw_material: "Baobab",
    obvious_product: "Baobab powder superfood",
    surprising_products: [
      { name: "Baobab water", why_interesting: "Baobab pulp dissolved in water creates a naturally sweet, high-vitamin C drink. Market it as 'Africa's coconut water'. Coconut water is a $7B global market — baobab water has 6× the vitamin C.", market: "US/UK health food retail, Amazon", price: "$3–$6 per 330ml bottle", difficulty: "Medium" },
      { name: "Baobab fermented probiotic drink", why_interesting: "Baobab naturally ferments. A kombucha-style probiotic drink using baobab as the base is unique, story-rich, and hits the $2.5B probiotic beverage market.", market: "UK/US wellness market, Whole Foods", price: "$4–$8 per bottle", difficulty: "Medium" },
      { name: "Baobab bark fiber (natural paper)", why_interesting: "Baobab bark produces a durable natural fiber. Handmade baobab paper is already sold as premium stationery in boutique shops. Notebooks, journals, luxury packaging.", market: "European luxury stationery, gift shops", price: "$15–$40 per journal", difficulty: "Medium" },
      { name: "Baobab seed oil (beauty)", why_interesting: "Baobab seed oil is lighter and more shelf-stable than argan. It's not yet in mass production — the first African brand to position it like argan captures a $200M+ white space.", market: "US/EU natural beauty brands", price: "$20–$50 per 50ml", difficulty: "Medium" },
    ],
    countries: ["Senegal", "Mali", "Tanzania", "Zimbabwe", "South Africa"],
  },
  {
    raw_material: "Moringa",
    obvious_product: "Moringa powder supplement",
    surprising_products: [
      { name: "Moringa baby food fortifier", why_interesting: "Moringa is the most nutrient-dense plant on Earth — more protein than milk, more calcium than dairy, more vitamin A than carrots. Adding moringa to baby porridge reduces malnutrition. It's also a premium export product for conscious Western parents.", market: "Local health NGOs + premium export (Amazon Whole Foods)", price: "$8–$20 per 100g pack", difficulty: "Easy" },
      { name: "Moringa hair growth serum", why_interesting: "Moringa oil is scientifically linked to hair growth. '#hairgrowthserum' has 2B+ TikTok views. A 'Moringa hair oil' from Nigeria/Ghana with a clinical claim (zinc, vitamins) could be massive.", market: "TikTok Shop, Amazon Beauty, African diaspora", price: "$20–$45 per 50ml", difficulty: "Medium" },
      { name: "Moringa protein powder (vegan)", why_interesting: "Moringa leaves are 25% protein by dry weight. Vegan protein powder is a $5B market dominated by pea and hemp protein. African moringa protein is untapped, and more amino-complete than most plant proteins.", market: "US/UK vegan sports nutrition", price: "$25–$50 per 500g", difficulty: "Hard" },
      { name: "Moringa tea + turmeric blend (detox teas)", why_interesting: "Detox tea is the #3 search on Amazon health. A moringa + ginger + turmeric blend from West Africa has a better story than Yogi Tea or Traditional Medicinals — and they can't replicate the origin.", market: "Amazon, health food stores, TikTok", price: "$10–$20 per 30 tea bags", difficulty: "Easy" },
    ],
    countries: ["Nigeria", "Ghana", "Senegal", "Kenya", "Ethiopia"],
  },
  {
    raw_material: "Shea butter",
    obvious_product: "Raw shea butter moisturizer",
    surprising_products: [
      { name: "Shea mayo (ultra-rich hair treatment)", why_interesting: "Search 'shea butter hair mayo' on Amazon — it's a top-20 natural hair product search. A thick, whipped shea + egg + oil hair mask is called 'mayo' in the natural hair community. Easy to make, huge market.", market: "Amazon Beauty, TikTok natural hair", price: "$12–$25 per 300ml jar", difficulty: "Easy" },
      { name: "African baby skincare line", why_interesting: "Premium natural baby skin care is a $1.5B market. Parents pay $30–$80 for 'clean' baby lotion. A shea-based African baby range (unscented, organic, with origin story) could command premium pricing in US/UK.", market: "Amazon, Whole Foods, UK Boots", price: "$15–$35 per 150ml bottle", difficulty: "Medium" },
      { name: "Shea nut shell activated charcoal", why_interesting: "Shea shells are burned as agricultural waste. Activated charcoal from shea shells is used in beauty (face masks, teeth whitening), water filtration, and supplements. Export to beauty brands as B2B ingredient.", market: "Beauty ingredient suppliers, charcoal face mask brands", price: "$40–$80/kg", difficulty: "Hard" },
      { name: "Whipped shea butter body scrub", why_interesting: "Mix shea butter + raw sugar + essential oil. Tree Hut Shea Sugar Scrub (US brand, $8) sells 1M+ units/year. The formula is simple. The brand and shelf presence is the business.", market: "Amazon, Target, Walmart, TikTok Shop", price: "$10–$20 per 500g", difficulty: "Easy" },
    ],
    countries: ["Ghana", "Burkina Faso", "Mali", "Nigeria", "Uganda"],
  },
  {
    raw_material: "Banana / Plantain",
    obvious_product: "Packaged plantain chips",
    surprising_products: [
      { name: "Banana peel leather goods", why_interesting: "Piñatex (Philippines) made bags and shoes from pineapple leaf fibre and now supplies Hugo Boss and H&M. Banana peel leather uses the same concept. Uganda and Cameroon have the banana waste — Africa can own this material.", market: "European sustainable fashion brands, luxury handbags", price: "$80–$400 per bag (B2C); $30–$80/sqm material to brands", difficulty: "Hard" },
      { name: "Banana flour (gluten-free baking)", why_interesting: "Unripe banana flour is high-fibre, gluten-free, and prebiotic. Bob's Red Mill sells similar products at $8–$15 per 500g. Made from bananas that would otherwise be wasted — overripe, cosmetically imperfect.", market: "US/UK gluten-free baking market, Amazon", price: "$8–$15 per 500g", difficulty: "Medium" },
      { name: "Freeze-dried banana snacks", why_interesting: "Freeze-dried fruit is the fastest-growing snack category in the US. Crunchy, shelf-stable, 100% banana, no oil. A small freeze-dryer ($3,000–$8,000) turns 1kg fresh banana into 125g freeze-dried product worth 10× more.", market: "Amazon Snacks, Whole Foods, school supply", price: "$6–$12 per 50g pack", difficulty: "Medium" },
      { name: "Plantain porridge powder (baby food)", why_interesting: "Unripe plantain flour is one of West Africa's best baby weaning foods — low allergy risk, high fibre, natural. Branded as a premium baby food for US/UK African diaspora and conscious parents, it sells at $8–$15 per bag.", market: "Amazon, UK African diaspora shops, Whole Foods", price: "$8–$15 per 400g", difficulty: "Medium" },
    ],
    countries: ["Uganda", "Cameroon", "Nigeria", "Ghana", "Côte d'Ivoire", "Rwanda"],
  },
  {
    raw_material: "Coffee cherry (the fruit, not the bean)",
    obvious_product: "Coffee grounds / byproduct disposal",
    surprising_products: [
      { name: "Cascara tea (coffee cherry tea)", why_interesting: "Cascara is the dried coffee cherry husk. Starbucks launched a Cascara latte. In the US, 200g packs sell for $15–$30 at specialty tea shops. Coffee mills in Kenya/Ethiopia throw away millions of kilos of this per year.", market: "US/UK specialty beverage, Starbucks supplier", price: "$15–$30 per 200g", difficulty: "Medium" },
      { name: "Coffee cherry flour", why_interesting: "Dried and milled coffee cherry pulp creates a high-fibre, slightly caffeinated, low-calorie flour. Sold in Whole Foods at $14/250g. Made from waste — nothing is bought, only the dryer and mill.", market: "Whole Foods, Amazon health food, specialty baking", price: "$10–$20 per 250g", difficulty: "Medium" },
      { name: "Coffee cherry kombucha", why_interesting: "Coffee cherry + SCOBY (kombucha culture) = caffeinated probiotic beverage with a unique flavour. The Kigali and Nairobi café scenes are already doing this. It's a premium urban product before it becomes an export.", market: "Nairobi / Kigali cafes → bottled product → export", price: "$3–$5 per 330ml locally; $8–$12 export", difficulty: "Medium" },
      { name: "Coffee compost + mushroom substrate", why_interesting: "Coffee grounds are the best substrate for growing oyster mushrooms. Start a mushroom farm on coffee waste — zero cost substrate, high-value output. Oyster mushrooms sell for $4–$10/kg locally and $20–$40/kg dried for export.", market: "Local restaurants, supermarkets, dried mushroom export", price: "$4–$10/kg fresh; $20–$40/kg dried", difficulty: "Easy" },
    ],
    countries: ["Ethiopia", "Kenya", "Rwanda", "Uganda", "Tanzania"],
  },
  {
    raw_material: "Neem (everywhere in West/East Africa)",
    obvious_product: "Neem oil pest spray",
    surprising_products: [
      { name: "Neem toothpaste and dental sticks", why_interesting: "Neem twigs (miswak) have been used for oral hygiene for millennia. A branded 'African neem toothpaste' with origin story sells in UK health shops at £8–£12 per tube. Colgate doesn't own neem. You do.", market: "UK/US natural health stores, Amazon, African diaspora", price: "$6–$15 per tube", difficulty: "Medium" },
      { name: "Organic neem pesticide (for export to EU farms)", why_interesting: "EU is banning synthetic pesticides — neem-based organic pesticide is a $500M+ growing market. India dominates, but West Africa has massive neem production. A certified organic neem oil pesticide can sell B2B to European organic farms.", market: "EU organic farms, B2B agricultural supply", price: "$15–$40/litre to farms; $3–$5/litre to produce", difficulty: "Hard" },
      { name: "Neem oil hair & scalp treatment", why_interesting: "Neem oil's antifungal properties treat dandruff and scalp conditions. 'Scalp treatment oil' is a high-search beauty category. A 50ml neem oil + rosemary blend sells for $15–$30. Story writes itself: 'Used in African villages for 500 years.'", market: "Amazon Beauty, TikTok natural hair, Black hair care", price: "$15–$30 per 50ml", difficulty: "Easy" },
      { name: "Neem pet care (flea and tick treatment)", why_interesting: "Pet natural flea spray is a $200M market in the US. Neem oil is one of the most effective natural pest repellents. A 'natural pet flea spray made with African neem' is a serious Amazon opportunity.", market: "Amazon, Petco, US/UK natural pet stores", price: "$10–$20 per 200ml spray", difficulty: "Medium" },
    ],
    countries: ["Nigeria", "Ghana", "Senegal", "Mali", "Kenya", "Tanzania"],
  },
  {
    raw_material: "Bamboo (East and Central Africa)",
    obvious_product: "Bamboo furniture",
    surprising_products: [
      { name: "Bamboo toothbrushes (plastic-free)", why_interesting: "8 billion plastic toothbrushes go to landfill every year. Bamboo toothbrushes are the fastest-growing plastic-free personal care product on Amazon. Ethiopia and Rwanda have some of Africa's largest bamboo forests. None of it is making toothbrushes yet.", market: "Amazon, UK/EU eco-stores, subscription boxes", price: "$3–$8 per toothbrush; $12–$30 for 4-pack", difficulty: "Medium" },
      { name: "Bamboo fabric / textiles", why_interesting: "Bamboo fabric is softer than cotton, naturally antibacterial, and commands 30–50% premium over cotton. Ethiopia and Uganda have bamboo; Ethiopia already has textile factories. A bamboo fabric brand from East Africa can compete in the EU sustainable fashion space.", market: "EU sustainable fashion brands, direct-to-consumer", price: "$20–$60 per metre wholesale; $40–$150 finished garments", difficulty: "Hard" },
      { name: "Bamboo activated charcoal (beauty)", why_interesting: "Activated charcoal from bamboo is used in face masks, teeth-whitening kits, and detox supplements. One small kiln can produce 200kg/month of activated charcoal worth $80–$150/kg in the beauty ingredient market.", market: "Beauty ingredient suppliers, Amazon, Sephora", price: "$80–$150/kg wholesale ingredient", difficulty: "Hard" },
      { name: "Bamboo vinegar (wood vinegar / pyroligneous acid)", why_interesting: "Bamboo vinegar is a byproduct of charcoal production. It's used as a natural pesticide, soil amendment, and even a food flavoring in Asia. It sells for $5–$15/litre to organic farms and is almost entirely imported from Japan and China. Make it in Rwanda/Ethiopia.", market: "Organic farms, Japan/Korea import market, natural health", price: "$5–$15 per litre", difficulty: "Medium" },
    ],
    countries: ["Ethiopia", "Uganda", "Rwanda", "Cameroon", "Tanzania", "Kenya"],
  },
];

export interface WasteOpportunity {
  waste_stream: string;
  source: string;
  african_context: string;
  waste_volume: string;
  products: {
    name: string;
    market: string;
    price: string;
    equipment: string;
    equipment_cost: string;
    alibaba_search: string;
  }[];
  real_example: string;
  countries: string[];
}

export const WASTE_OPPORTUNITIES: WasteOpportunity[] = [
  {
    waste_stream: "Fish waste (heads, bones, scales, skin, offal)",
    source: "Artisanal fishing, fish landing sites, fish smoking and processing markets",
    african_context: "West and East Africa together land 6M+ tons of fish per year. 30–40% is waste — heads, scales, bones, guts — left at the beach or sold as low-grade cheap fertilizer. Virtually none is value-added.",
    waste_volume: "2–2.5 million tons/year",
    products: [
      { name: "Fish meal (animal feed)", market: "Poultry farms, fish farms, livestock feed — massive local demand", price: "$400–$600/ton", equipment: "Fish dryer + hammer mill", equipment_cost: "$2,000–$8,000", alibaba_search: "fish meal processing machine small scale" },
      { name: "Fish collagen powder (beauty supplement)", market: "US/EU beauty supplement — fastest growing ingredient category 2024–2026", price: "$40–$80 per 200g retail", equipment: "Hydrolysis reactor + spray dryer", equipment_cost: "$8,000–$25,000", alibaba_search: "fish collagen extraction hydrolysis machine" },
      { name: "Fish oil (omega-3 supplement)", market: "Global health supplement — $2B+ market dominated by Norway and Peru", price: "$15–$30 per 60 softgels", equipment: "Oil press + encapsulation machine", equipment_cost: "$5,000–$15,000", alibaba_search: "fish oil cold press extraction machine" },
    ],
    real_example: "In Senegal, ENDA Graf turns Kayar fish waste into fish meal for local aquaculture. In Kenya, women's groups in Kisumu process Nile perch offal into fish powder for school feeding programs.",
    countries: ["Senegal", "Ghana", "Nigeria", "Kenya", "Tanzania", "Mozambique", "Ivory Coast"],
  },
  {
    waste_stream: "Dairy waste — excess milk, whey, buttermilk",
    source: "Fulani / Mbororo pastoral herders, small dairy farms, cooperative dairies",
    african_context: "Fulani herders manage 25M+ cattle across West Africa and the Sahel. During peak lactation seasons, cows produce more milk than can be sold fresh without cold chain. Hundreds of millions of litres are wasted or sold too cheaply every year.",
    waste_volume: "Hundreds of millions of litres per season across West and East Africa",
    products: [
      { name: "Wagashi / Wara fresh cheese (traditional but brandable)", market: "Urban Benin, Nigeria, Burkina Faso — already eaten, needs packaging and branding", price: "$2–$5 locally; $8–$15 export specialty African cheese", equipment: "Pasteurizer + cheese press + packaging", equipment_cost: "$800–$4,000", alibaba_search: "small scale cheese making equipment pasteurizer" },
      { name: "Fura da Nono style yogurt / fermented dairy", market: "Branded yogurt in Lagos, Accra, Dakar, Abidjan — urban middle class pays for convenience and branding", price: "$0.50–$2 locally; $4–$8 in diaspora markets", equipment: "Pasteurizer + yogurt incubator + filling machine", equipment_cost: "$1,000–$5,000", alibaba_search: "small yogurt production machine 50L" },
      { name: "Whey protein powder", market: "Sports nutrition — fastest-growing health category in Nigeria, Ghana, Kenya, South Africa", price: "$30–$60 per 1kg bag", equipment: "Evaporator + spray dryer (large investment)", equipment_cost: "$15,000–$50,000", alibaba_search: "whey protein powder spray dryer small" },
    ],
    real_example: "Laiterie du Berger (Senegal) collects milk from 1,500+ Fulani herders and makes Dolima yogurt — now stocked in Auchan, Casino, and exported. They've raised $10M+ and created 200+ jobs. The model is replicable across West Africa.",
    countries: ["Nigeria", "Senegal", "Burkina Faso", "Mali", "Niger", "Ghana", "Kenya", "Ethiopia"],
  },
  {
    waste_stream: "Cocoa pod husks and shells",
    source: "Cocoa bean harvesting — every ton of beans produces 10 tons of husk",
    african_context: "Ghana and Côte d'Ivoire alone produce 900,000+ tons of cocoa husks per season. Almost all is left to rot in the field or burned — despite containing potassium, pectin, and energy value. It is the largest single agricultural waste stream in West Africa.",
    waste_volume: "Millions of tons per cocoa season",
    products: [
      { name: "Cocoa pod ash — organic potassium fertilizer", market: "Local farmers (soap making + fertilizer), organic fertilizer export", price: "$150–$300/ton", equipment: "Kiln + grinder + bagging machine", equipment_cost: "$800–$3,000", alibaba_search: "biomass kiln small scale agricultural" },
      { name: "Cascara-style cocoa pulp tea", market: "US/UK specialty tea and wellness — Koa (Netherlands) sells this to European food companies", price: "$12–$25 per 100g pack", equipment: "Pulp separator + dryer + packaging", equipment_cost: "$1,500–$6,000", alibaba_search: "fruit pulp dryer dehydrator machine" },
      { name: "Biogas from fermented husks", market: "On-site energy generation — reduces diesel generator cost by $200–$500/month per facility", price: "Cost saving (not sold — used internally)", equipment: "Anaerobic biogas digester", equipment_cost: "$2,000–$8,000", alibaba_search: "biogas digester small scale agricultural" },
    ],
    real_example: "Koa (Netherlands/Ghana startup) extracts cocoa pulp juice from the husk and sells it to European food companies as a novel ingredient. They've raised €7M. Barry Callebaut now uses cocoa pod husks to generate energy at their Ghana factory.",
    countries: ["Ghana", "Côte d'Ivoire", "Nigeria", "Cameroon"],
  },
  {
    waste_stream: "Coffee cherry pulp (the fruit that surrounds the bean)",
    source: "Coffee wet processing mills — the pulp is stripped off during washing",
    african_context: "For every kg of roasted coffee, 2–3kg of coffee pulp (the fruit) is discarded or dumped into rivers. Ethiopia, Kenya, Uganda, and Rwanda produce millions of tons of coffee pulp per year — causing water pollution and missed income.",
    waste_volume: "3–5 million tons/year across African coffee-producing nations",
    products: [
      { name: "Cascara tea (dried coffee cherry drink)", market: "US/UK specialty beverage — Starbucks now sells cascara latte. 200g packs retail at $15–$30", price: "$15–$30 per 200g", equipment: "Pulp dryer + packaging", equipment_cost: "$1,000–$5,000", alibaba_search: "coffee pulp cherry dryer machine" },
      { name: "Coffee cherry flour (high-fibre, caffeinated)", market: "US health food — sold in Whole Foods at $14/250g. Unique product, zero competition from Africa yet", price: "$10–$20 per 250g", equipment: "Dryer + mill + sifter", equipment_cost: "$2,000–$8,000", alibaba_search: "grain flour mill small capacity commercial" },
      { name: "Oyster mushroom farm on coffee grounds", market: "Local restaurants, hotels, supermarkets — zero substrate cost, high-value output", price: "$4–$10/kg fresh; $20–$40/kg dried for export", equipment: "Mushroom growing bags + humidity tent + inoculation tools", equipment_cost: "$300–$2,000", alibaba_search: "oyster mushroom spawn mycelium bag" },
    ],
    real_example: "Coffee flour made from coffee pulp is sold in Whole Foods at $14/250g. It was pioneered by CF Global Holdings (Guatemala) — African coffee mills can copy this exactly. In Kenya, Githiru Women's Group grows mushrooms on coffee grounds from local estates.",
    countries: ["Ethiopia", "Kenya", "Rwanda", "Uganda", "Tanzania"],
  },
  {
    waste_stream: "Banana peel and rejected banana / plantain",
    source: "Banana and plantain farms — 30–40% of production rejected for cosmetic reasons or lost post-harvest",
    african_context: "Cameroon, Côte d'Ivoire, Uganda, Nigeria, and Rwanda grow millions of tons of bananas and plantains. Up to 40% is lost post-harvest — overripe, bruised, too small for export. The peel is thrown away entirely.",
    waste_volume: "1–2 million tons/year of usable waste",
    products: [
      { name: "Banana peel leather (vegan leather alternative)", market: "European sustainable fashion — Hugo Boss and H&M already use plant leather (Piñatex from pineapple). Banana version is next.", price: "$30–$80/sqm material to brands; $80–$400 finished bags", equipment: "Processing chemicals + hot press + dryer", equipment_cost: "$5,000–$20,000", alibaba_search: "vegan leather production equipment plant based" },
      { name: "Banana flour (gluten-free baking)", market: "US/UK gluten-free and paleo baking — unripe banana flour is high fibre and prebiotic. $8–$15 per 500g at Whole Foods.", price: "$8–$15 per 500g", equipment: "Slicer + dryer + mill + sifter", equipment_cost: "$1,500–$6,000", alibaba_search: "banana flour processing machine dehydrator" },
      { name: "Freeze-dried banana snack", market: "Fastest-growing snack category in the US — freeze-dried fruit sells at 10× fresh price with 2-year shelf life", price: "$6–$12 per 50g pack", equipment: "Freeze-dryer (key investment)", equipment_cost: "$3,000–$10,000", alibaba_search: "small commercial freeze dryer food" },
    ],
    real_example: "Kelea (Uganda) makes bags from banana fibre. Piñatex (Philippines) pioneered pineapple leaf leather and now supplies Hugo Boss, H&M, and Nike. The exact same concept applies to banana peel in Uganda, Cameroon, and Nigeria — the material is more available and the supply is free (waste).",
    countries: ["Uganda", "Cameroon", "Nigeria", "Côte d'Ivoire", "Ghana", "Rwanda"],
  },
];

export interface DistributionPlaybook {
  channel: string;
  icon: string;
  tagline: string;
  best_for: string[];
  reach: string;
  margin: string;
  start_cost: string;
  steps: { step: number; action: string; where: string; cost: string; time: string; tip?: string }[];
  pro_tips: string[];
  first_action: string;
}

export const DISTRIBUTION_PLAYBOOKS: DistributionPlaybook[] = [
  {
    channel: "Amazon FBA",
    icon: "📦",
    tagline: "Sell to 300M customers in US, UK, Germany, France, Canada — Amazon handles storage and shipping",
    best_for: ["Packaged food (sealed)", "Supplements (moringa, baobab, hibiscus)", "Beauty (shea, argan, neem)", "Herbal teas", "Specialty coffee", "Snacks"],
    reach: "US, UK, Germany, France, Canada, Japan, UAE — all from one seller account",
    margin: "Keep 55–65% after Amazon fees and international shipping",
    start_cost: "$500–$2,000 for first inventory + account + compliance",
    steps: [
      { step: 1, action: "Create Amazon Seller Central account (Professional plan)", where: "sellercentral.amazon.com", cost: "$39.99/month", time: "1 day", tip: "Professional tier is required for FBA — the $40/month is worth it from your first sale" },
      { step: 2, action: "Research pricing and competition in your category", where: "Use Helium 10 ($37/mo) or Jungle Scout ($49/mo) — free trials exist", cost: "$37–$49/month", time: "1 week", tip: "Search 'moringa powder', 'shea butter raw', 'hibiscus tea' — see the top 10 products, their prices, and monthly revenue estimates" },
      { step: 3, action: "Create FDA or MHRA compliant labeling for food/beauty/supplements", where: "US FDA consultant on Upwork (search 'FDA supplement labeling')", cost: "$300–$800", time: "2–3 weeks", tip: "Skip this and Amazon will suspend your listing. Required for food, cosmetics, and supplements." },
      { step: 4, action: "Design shelf-ready packaging with barcode (GS1 registered)", where: "gs1.org (GS1 membership) + Canva or Fiverr designer", cost: "$250/year GS1 + $100–$400 design", time: "2 weeks", tip: "Your packaging competes with Tropicana on the shelf — invest in design. Your origin story IS your differentiator." },
      { step: 5, action: "Ship first inventory to Amazon fulfillment center", where: "DHL, FedEx, or UPS — start with air freight for speed", cost: "$4–$8/kg air freight to US/UK", time: "5–10 days", tip: "Start with 100–200 units to test. Don't overcommit before knowing your conversion rate." },
      { step: 6, action: "Launch Amazon PPC ads on Day 1", where: "Seller Central → Advertising → Campaign Manager", cost: "$5–$20/day to start", time: "Set up in 1 hour; runs ongoing", tip: "Start with automatic campaigns — Amazon learns your best keywords. Switch to manual once you know what converts." },
    ],
    pro_tips: [
      "First 10 reviews determine your trajectory — send product to friends and family, ask for honest feedback",
      "Origin branding beats generic: 'Certified Organic Shea from Northern Ghana' outsells 'Natural Shea Butter'",
      "Bundle products: Shea butter + lip balm + scrub as a 'trio' sells for 2–3× each item's price",
      "Apply to 'Amazon Launchpad' — curated program for social impact and emerging brands, gets you editorial features",
      "Seasons matter: Q4 (Oct–Dec) is 40% of annual sales on Amazon — build inventory before October",
    ],
    first_action: "Open sellercentral.amazon.com today. Create your account. Then search your product on Amazon — copy-paste every keyword from your top competitor's title. Those are your target keywords.",
  },
  {
    channel: "TikTok Shop",
    icon: "🎵",
    tagline: "Show the harvest, show the making, show the product — African origin content goes viral organically",
    best_for: ["Beauty and skin care", "Natural hair products", "Herbal drinks", "Artisan food snacks", "Fashion and textiles"],
    reach: "US, UK, Southeast Asia — primarily 18–35 demographic",
    margin: "Keep 80–90% after TikTok's 5–8% commission (lowest fees of any platform)",
    start_cost: "$100–$500 (just a phone, some product, and packaging)",
    steps: [
      { step: 1, action: "Create TikTok Seller account", where: "seller.tiktok.com — choose US or UK store", cost: "Free", time: "1–3 days (approval required)", tip: "You need a US or UK business entity. If you're in Africa, partner with a diaspora family member or agent to hold the entity." },
      { step: 2, action: "Film 5 videos before posting anything — batch your content", where: "Your farm, kitchen, workshop, or market", cost: "$0 — just your phone (iPhone or Samsung camera is enough)", time: "1 day filming, 1 day editing", tip: "Hook in 2 seconds. Start with: 'You paid $40 for this. We make it for $3 in Ghana.' Then show the farm. Then show the product." },
      { step: 3, action: "Add products to your TikTok Shop and tag them in videos", where: "TikTok Seller Center", cost: "$0", time: "1 day", tip: "Tag the product in the video so viewers can buy without leaving TikTok — that's the whole point of Shop vs. regular TikTok" },
      { step: 4, action: "Send free samples to 5 African diaspora creators (10k–100k followers)", where: "Search TikTok for 'African beauty', 'Nigerian skincare', 'Ghanaian food' — DM the creators directly", cost: "$50–$200 in product + shipping", time: "2–4 weeks for content creation", tip: "A 50k African diaspora creator outperforms a 2M lifestyle influencer for your specific product" },
      { step: 5, action: "Post 3–5 times per week — consistently", where: "TikTok app", cost: "$0", time: "1–2 hours/day", tip: "30 videos before you judge results. The algorithm rewards consistency, not perfection." },
    ],
    pro_tips: [
      "Video hooks that go viral: 'Things Africa has that no one is selling yet', 'This is what [Western brand] charges $40 for — made 3km from my village'",
      "'Farm to bottle' beats polished studio ads on TikTok every time — show the real process",
      "Add English subtitles — 85% of TikTok is watched on mute",
      "TikTok LIVE shopping converts 3× better than video — go live when you have fresh stock in hand",
      "Duet trending videos in your niche — 'I tried making this Nigerian-style and it's better than theirs'",
    ],
    first_action: "Film 3 videos today showing where your raw material comes from — the farm, the tree, the harvest, the people. Don't sell anything. Just show. Post all 3 today and the algorithm tells you which hooks resonate.",
  },
  {
    channel: "African Supermarket Pitch",
    icon: "🛒",
    tagline: "Get stocked in Shoprite, Naivas, Auchan, Carrefour — reach millions of middle-class African consumers",
    best_for: ["Packaged food and drinks", "Snacks", "Juices and beverages", "Beauty and personal care", "Cooking ingredients"],
    reach: "Millions of in-store shoppers across Africa's fastest-growing consumer class",
    margin: "Keep 40–55% after retailer margin of 30–50%",
    start_cost: "$500–$3,000 (regulatory registration + shelf-ready packaging + GS1 barcode)",
    steps: [
      { step: 1, action: "Register with your national food safety authority — do this FIRST", where: "NAFDAC (Nigeria), KEBS (Kenya), FDA Ghana, ANSSA (Senegal), ARAA (CIV), ANRQ (Morocco)", cost: "$50–$500 depending on country and product category", time: "3–12 months — this is the bottleneck, start immediately", tip: "Apply for food safety registration before approaching any supermarket. They will not stock an unregistered product." },
      { step: 2, action: "Design shelf-ready packaging and register a GS1 barcode", where: "gs1.org — get your company prefix + Canva/Fiverr for packaging design", cost: "$250/year GS1 + $100–$500 design", time: "2–4 weeks", tip: "Your packaging must compete visually with Tropicana, Kellogg's, and Unilever on a shelf. Invest in this." },
      { step: 3, action: "Find the Category Buyer at your target supermarket chain on LinkedIn", where: "LinkedIn search: '[supermarket name] Category Buyer [country]'", cost: "Free", time: "1 day research", tip: "At Naivas Kenya: contact Grocery Buyer. Shoprite: Area Buyer. Auchan Senegal: Chef de Rayon. Send a direct message, not an email." },
      { step: 4, action: "Send a product introduction email + samples by courier", where: "DHL Same-City delivery or hand-deliver to head office", cost: "$20–$100 per sample package", time: "1 day", tip: "Lead with: 'I'd like to supply [product] to [specific stores]. Here are my NAFDAC/KEBS certs, margin structure, and first-month sampling proposal.' Keep it to 1 page." },
      { step: 5, action: "Negotiate trial listing: 3 stores, 60-day trial, sale-or-return terms", where: "Buyer meeting — ask to meet in person at their office", cost: "Possible listing fee: $200–$1,000 per SKU at larger chains", time: "4–12 weeks to first PO", tip: "Offer sale-or-return for month one — they bear no risk, you get the shelf space." },
    ],
    pro_tips: [
      "Start with 1–3 stores to prove the concept before pitching national distribution",
      "Visit your products on the shelf every week — if they're placed low, ask to be moved. Visibility = sales.",
      "Supermarkets pay 30–60 days after delivery — build that cash buffer before your first big order",
      "A part-time in-store rep visiting stores weekly can double sales vs. no representation",
      "Offer to run a sampling day at your top 3 stores — free samples drive trial and retailer confidence",
    ],
    first_action: "Find the Category Buyer on LinkedIn for one supermarket (Naivas Kenya / Shoprite Ghana / Auchan Senegal). Connect. Send a 3-sentence message: who you are, what you make, that you'd like to send samples. Today.",
  },
  {
    channel: "Etsy",
    icon: "🎨",
    tagline: "Buyers actively search for authentic African-made, handmade, and small-batch products — origin is your advantage",
    best_for: ["Handmade beauty (shea, argan, soaps)", "Artisan snacks and small-batch food", "Fashion and textiles", "Kano leather goods", "Jewelry and accessories", "Candles and home"],
    reach: "US, UK, Canada, Australia, France, Germany — 90M+ active buyers who specifically seek handmade and unique",
    margin: "Keep 70–80% after Etsy's 6.5% transaction fee + payment processing",
    start_cost: "$100–$500 (product + packaging + photos)",
    steps: [
      { step: 1, action: "Create an Etsy seller account and name your shop", where: "etsy.com/sell", cost: "$0.20 per listing", time: "1 day", tip: "Shop name should hint at African origin: Sahel Studio, Accra Beauty, Lagos Leather, Dakar Botanicals — origin IS your brand." },
      { step: 2, action: "Write keyword-rich product titles that match how buyers search", where: "Seller Dashboard → Add a Listing", cost: "Free", time: "1 day per product", tip: "Search 'shea butter' on Etsy — your exact title should include those words. 'Raw African Shea Butter Ghana — Unrefined Pure Body Moisturizer' beats 'Natural Shea'." },
      { step: 3, action: "Take 5 photos per product: white background, lifestyle, origin, detail, size reference", where: "Home studio (white card + natural window light is enough)", cost: "$0–$200", time: "1 day", tip: "Photo 1: clean product on white. Photo 2: in use (on skin, being held). Photo 3: origin (farm, workshop, village). These 3 convert." },
      { step: 4, action: "Write a compelling shop About story and fill in all shop policies", where: "Etsy shop dashboard", cost: "Free", time: "2 hours", tip: "Your About section is your brand story. 'I grew up watching my mother make shea butter in Kumasi. This is the same recipe.' People pay a premium for that." },
      { step: 5, action: "Set up Etsy Ads with $3–$5/day for first 90 days", where: "Etsy Ads Dashboard", cost: "$3–$5/day", time: "30 minutes", tip: "Etsy Ads are worth it before your organic reviews build. Turn off the keywords that spend without selling after 2 weeks." },
      { step: 6, action: "Fulfill orders via DHL Express or Aramex to US/UK", where: "DHL local pickup or courier drop-off", cost: "$25–$45 per small parcel to US/UK", time: "3–7 days delivery", tip: "Build international shipping into your price — $35 DHL on a $25 item kills conversion. Price the product at $40–$60 and offer 'free shipping'." },
    ],
    pro_tips: [
      "February (Black History Month) and December are your two best sales periods — prepare inventory in advance",
      "Join Etsy teams for African sellers — real community, cross-promotion, and buyer exposure",
      "Reviews compound: 10 reviews → 25% more traffic. Follow up with every buyer after delivery.",
      "Bundle products into gift sets for Christmas and Mother's Day — AOV doubles with zero extra effort",
      "Share every Etsy listing on African diaspora Facebook groups and WhatsApp communities — those early sales seed your reviews",
    ],
    first_action: "Open your Etsy shop today. List one product with 5 photos and a 200-word description of your story. Share the link in 3 diaspora Facebook groups tonight.",
  },
];
