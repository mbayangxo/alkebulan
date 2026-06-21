export interface BusinessIdea {
  name: string;
  startup_cost: string;
  description: string;
}

export interface HiddenOpportunity {
  id: string;
  commodity: string;
  emoji: string;
  countries: string[];
  the_truth: string; // What is happening / what colonizers/foreigners are doing
  what_exists: string; // What Africa already has
  who_profits: string; // Who is currently making money from this
  annual_value: string; // What this market is worth
  the_gap: string; // The value that leaks out of Africa
  businesses_to_build: BusinessIdea[];
  suppliers_and_inputs: string;
  markets: string; // Where to sell (local + export)
  africans_doing_it: string; // Real African companies and people
  historical_note: string; // How Africans were doing this before colonization
  first_step: string;
}

export const HIDDEN_OPPORTUNITIES: HiddenOpportunity[] = [

  {
    id: "leather-hides",
    commodity: "Leather & Hides",
    emoji: "🐄",
    countries: ["Nigeria", "Ethiopia", "Senegal", "Mali", "Kenya", "Niger", "Sudan", "Chad"],
    the_truth: "Louis Vuitton, Hermès, Gucci, and Prada are built on African leather. The hides come from Nigeria, Ethiopia, and Mali. They are exported for almost nothing. They go to tanneries in Italy, Spain, and France. They come back as luxury bags and shoes that sell for $5,000–$30,000. African countries export the raw material. European brands add value and keep 95% of the revenue. This is not a trade relationship. This is extraction with a legal contract.",
    what_exists: "Africa has the world's largest livestock population — over 1 billion animals. Nigeria alone exports hundreds of thousands of hides annually. Ethiopia is East Africa's largest producer of leather. Senegalese craftspeople have made shoes and leather goods for centuries. The Hausa people of Northern Nigeria and Niger have deep leather-working traditions dating back over 1,000 years. Kano's Kofar Mata dye pits are one of the oldest operating tanneries in the world.",
    who_profits: "Louis Vuitton (LVMH): €21B+ leather goods revenue. Hermès: €11B+ leather goods revenue. Gucci (Kering): €9B+ leather goods revenue. Prada, Coach, Burberry — all sourcing African raw materials, adding value in Europe, selling globally. Africans see none of the final sale price.",
    annual_value: "$400B+ global leather goods market annually. Africa's share as a producer: under 2%. Africa's potential share as a manufacturer and brand: 20–30% ($80–120B).",
    the_gap: "Africa exports raw hides at $0.50–$3 per piece. A finished leather handbag from those same hides retails at $500–$30,000. The value addition — tanning, cutting, stitching, branding — happens in Europe. Africans could capture that entire chain.",
    businesses_to_build: [
      {
        name: "Leather Tannery",
        startup_cost: "$15,000–$80,000",
        description: "Process raw hides into finished, export-quality leather. Sell to local manufacturers and international buyers. Ethiopia's tanning industry earns 10x what hide exporters earn.",
      },
      {
        name: "Artisan Leather Brand",
        startup_cost: "$2,000–$10,000",
        description: "Handbags, wallets, belts, shoes. Market locally, then to diaspora, then export. Sandstorm Kenya and Kemi Telford Nigeria already do this.",
      },
      {
        name: "Leather Export Company",
        startup_cost: "$5,000–$25,000",
        description: "Source finished (not raw) leather from local tanneries and sell directly to European or US brands who currently buy from Asia.",
      },
      {
        name: "Shoe Manufacturing Workshop",
        startup_cost: "$3,000–$15,000",
        description: "5–10 cobblers, local leather, export-standard quality. Ethiopia's shoe exports to Europe grew 300% in 5 years.",
      },
    ],
    suppliers_and_inputs: "Raw hides: local slaughterhouses and livestock markets. Chemicals for tanning: Sigma-Aldrich East Africa, local importers. Dyes, hardware: local trade suppliers. Equipment: secondhand tanning equipment from European closures can be imported affordably.",
    markets: "LOCAL: Hotels, restaurants, retail, corporate gifting. REGIONAL: South Africa (premium retail), Nigeria (luxury market). EXPORT: EU buyers actively looking for ethical African leather supply chains. UK market growing for African artisan goods. US diaspora market. Amazon Handmade and Etsy for online sales.",
    africans_doing_it: "Sandstorm Kenya: premium leather bags exported globally, 100+ African employees. Sole Rebels Ethiopia (Bethlehem Tilahun Alemu): global footwear brand. Kemi Telford: Nigerian luxury leather brand. Black Swallow Nairobi: contemporary leather goods. The Ethiopian leather sector employs 450,000 people and earns $70M+ in annual exports.",
    historical_note: "Kano, Nigeria has had leather workers for over 1,000 years. The Hausa and Fulani people of West Africa traded leather goods across the Sahara to North Africa and the Arab world centuries before European colonization. Kano's Kofar Mata dye pits are possibly the oldest continuously operating tannery in the world. The colonialists took the raw material and the trade routes. African leather craftsmanship predates the European luxury industry by centuries.",
    first_step: "Visit your nearest livestock market or slaughterhouse. Ask who they sell hides to and at what price. That price tells you the gap. Google 'finished leather price' to see what it sells for. The difference is your business.",
  },

  {
    id: "shea-butter",
    commodity: "Shea Butter",
    emoji: "🌰",
    countries: ["Ghana", "Burkina Faso", "Nigeria", "Mali", "Benin", "Côte d'Ivoire", "Senegal"],
    the_truth: "Shea butter is extracted from the nuts of the shea tree — a tree that grows only in Africa, in a 5,000km belt across 21 countries called the Shea Belt. It cannot be grown anywhere else on earth. It is an African-exclusive resource. Yet Dove, Neutrogena, L'Oréal, Estée Lauder, and Unilever sell $1.5B+ of shea-based products every year. Ghanaian women collect the nuts. Burkina Faso women process the butter by hand. The raw shea leaves Africa for $0.50–$1.50 per kilogram. L'Oréal sells a shea face cream for $40 per 50ml jar. Nobody asked if African women wanted to keep the value chain.",
    what_exists: "20 million tonnes of shea nuts are produced annually across Africa. There are 500 million shea trees across the Shea Belt. Shea collection is almost entirely done by women — over 16 million African women earn part of their income from shea. Ghana's shea exports earn $200M+ annually. Burkina Faso's shea exports earn $100M+. Nigeria has the largest shea tree coverage in the world.",
    who_profits: "L'Oréal: $38B in annual revenue, shea is a core ingredient. Unilever: $60B in annual revenue, shea-heavy product lines. Dove (Unilever): shea butter body lotion is one of the world's best-selling skincare products. Estée Lauder, Neutrogena, The Body Shop (owned by L'Oréal) all profit heavily from African shea.",
    annual_value: "$2B+ global market for shea products. Africa's share of processed product revenue: under 5%. Africa's share of raw material: 100%. The processing, branding, and retail value stays in Europe and North America.",
    the_gap: "Raw shea nuts: $0.30–$0.80/kg. Raw shea butter (unrefined): $1.50–$3/kg. Refined, cosmetic-grade shea butter: $8–$15/kg. Branded retail shea butter cream (50ml): $20–$60. Every step of refining and branding that happens outside Africa is value extracted from the continent.",
    businesses_to_build: [
      {
        name: "Refined Shea Butter Producer",
        startup_cost: "$3,000–$20,000",
        description: "Process raw shea to cosmetic-grade refined butter. Sell to cosmetics manufacturers in Africa, Europe, and the US. Prices are 5–10x raw material.",
      },
      {
        name: "African Beauty Brand",
        startup_cost: "$2,000–$8,000",
        description: "Shea-based body butters, lip balms, hair products. Sell online (DTC), to diaspora, local pharmacies, and international clean beauty retailers.",
      },
      {
        name: "Shea Export Company",
        startup_cost: "$5,000–$30,000",
        description: "Source refined shea directly from processing cooperatives and export to cosmetics manufacturers in the US, EU, and Asia who currently buy through European brokers.",
      },
      {
        name: "Women's Shea Cooperative",
        startup_cost: "$1,000–$5,000",
        description: "Organize 20–50 shea collectors and processors. Pool resources for quality certification (USDA Organic, fair trade). Sell at 3–5x individual seller prices.",
      },
    ],
    suppliers_and_inputs: "Shea nuts: local markets, collectors' cooperatives. Processing equipment: shea press, drying racks (local fabrication). Certification: USDA Organic ($2,000–$5,000), Fair Trade ($1,000–$3,000). Packaging: local packagers in Accra, Ouagadougou, Lagos.",
    markets: "LOCAL: Growing African middle-class demand for natural cosmetics. REGIONAL: South Africa's clean beauty market is Africa's largest. EXPORT: US natural beauty market is $36B+. EU cosmetics market requiring sustainable, ethical sourcing. Korean and Japanese beauty industry — high demand for exotic African ingredients.",
    africans_doing_it: "Nzuri Hair (Nigeria/USA): clean African beauty brand using shea. Nubian Heritage (US, founded by Richelieu Dennis — Sierra Leonean-American): $100M shea brand. Akamuti (UK, founded by Ghanaians): shea products. The Shea Butter Cottage (Ghana): direct-to-consumer shea brand. AAK Ghana: the world's largest shea processor, with significant Ghanaian operations and employee base.",
    historical_note: "African women have processed shea butter for at least 3,000 years. In ancient Mali and Ghana empires, shea butter was used as a cooking fat, skin protectant, and medicine — and traded across Saharan trade routes to Egypt and North Africa. Cleopatra reportedly used African shea butter in cosmetics. The colonialists mapped and catalogued African botanical resources as part of colonial science — then patented products derived from them without crediting or compensating Africa. African women still collect the same nuts, by hand, while European companies collect the profits.",
    first_step: "Find a shea collectors' cooperative in your region (Ghana, Burkina Faso, or Nigeria). Buy 10kg of refined shea butter. Buy 50 glass jars. Make a small batch of body butter with shea, coconut oil, and lavender. Sell it. Understand the difference between the $3/kg input and the $20 retail output. That gap is your business.",
  },

  {
    id: "cocoa-chocolate",
    commodity: "Cocoa & Chocolate",
    emoji: "🍫",
    countries: ["Côte d'Ivoire", "Ghana", "Nigeria", "Cameroon", "Tanzania", "Madagascar"],
    the_truth: "Ghana and Côte d'Ivoire together produce 65% of the world's cocoa. The cocoa goes to Switzerland, Belgium, Germany, and the United States, where it becomes Lindt, Ferrero Rocher, KitKat, Cadbury, and M&M's. The global chocolate market is worth $130B per year. West African farmers receive approximately $6B of that — less than 5%. Swiss chocolatiers, Belgian chocolatiers, and Nestlé earn $120B+ annually from a raw material they do not grow on their own land. This is not a fair trade. This is the most successful example of value extraction in the food industry.",
    what_exists: "Africa produces 3.5 million tonnes of cocoa annually. Côte d'Ivoire: 2M tonnes. Ghana: 900,000 tonnes. These countries have the raw material, the climate, the skilled farmers, and increasingly the capital to process chocolate themselves. Ethiopia produces some of the world's finest single-origin cacao. Madagascar's cacao is among the most prized in the high-end chocolate market.",
    who_profits: "Nestlé: $94B revenue, owns Kit Kat, Aero. Mars: $40B revenue, owns Snickers, M&M's. Ferrero: $14B revenue, owns Ferrero Rocher, Nutella. Lindt: $5B revenue, premium Swiss chocolate. Mondelez: $28B revenue, owns Cadbury, Milka. Combined: $181B in annual revenue largely built on West African cocoa.",
    annual_value: "$130B global chocolate market. Africa's share as a manufacturer: under 1%. Africa's share as raw material producer: 65%. If Ghana and Côte d'Ivoire processed even 20% of their cocoa into finished chocolate, it would be worth $26B — more than both countries' entire annual export income.",
    the_gap: "Dried cocoa beans: $2,500–$3,500 per tonne. Processed cocoa butter and powder: $6,000–$8,000 per tonne. Finished artisan chocolate bar (70g): $4–$15 retail. A tonne of cocoa beans becomes approximately 14,000 chocolate bars worth $70,000–$200,000 at retail. West African farmers see $2,500–$3,500 of that.",
    businesses_to_build: [
      {
        name: "Bean-to-Bar Chocolate Brand",
        startup_cost: "$5,000–$25,000",
        description: "Source directly from Ghanaian or Ivorian farmers. Process into single-origin artisan chocolate. Sell at $6–$15 per bar to local premium market, diaspora, and international buyers.",
      },
      {
        name: "Cocoa Processing Plant",
        startup_cost: "$50,000–$500,000",
        description: "Process raw cocoa into butter, powder, and chocolate liquor for export to manufacturers. Ghana and Côte d'Ivoire offer tax incentives for cocoa processing.",
      },
      {
        name: "African Chocolate Gifting Company",
        startup_cost: "$3,000–$15,000",
        description: "Premium gift boxes of African-made chocolate. Target corporate clients, hotels, diaspora gifting market. Belgian brands built billion-dollar gift markets. You can too.",
      },
      {
        name: "Cocoa Farmer Cooperative",
        startup_cost: "$2,000–$10,000",
        description: "Organize 50–200 smallholder cocoa farmers into a cooperative. Certify organic and fair trade. Sell direct to European and US premium chocolate brands who pay 30–50% premiums for certified direct-trade cocoa.",
      },
    ],
    suppliers_and_inputs: "Raw cocoa: Cocoa Board (Ghana), Coffee and Cocoa Council (Côte d'Ivoire), local farms and cooperatives. Processing equipment: winnowers, melangers, tempering machines — sourced from US and European equipment suppliers. Packaging: local packaging companies in Accra, Abidjan, Lagos.",
    markets: "LOCAL: African premium consumer market is growing. Middle-class Ghanaians, Ivorians, and Nigerians increasingly buy premium food products. REGIONAL: South Africa's premium food market. EXPORT: EU single-origin chocolate market is growing. US artisan chocolate market: $5B+. Asian premium gifting market.",
    africans_doing_it: "57 Chocolate (Ghana): first bean-to-bar chocolate brand from Ghana, founded by Kimberly Addison. Fairafric (Ghana): fair-trade chocolate made and wrapped in Ghana, sold in Germany. Niche Ghana: premium Ghanaian chocolate. TCHO (San Francisco/Ghana partnership): direct-sourcing model. Villars and Lindt now offer 'Ghana origin' products — which are still made in Switzerland from Ghanaian cocoa.",
    historical_note: "Cacao is not native to Africa. It was brought from South America by European colonizers in the 19th century. But within a generation, African farmers mastered its cultivation so completely that West Africa became the world's primary producer. The colonial system then used land alienation and forced pricing to ensure that processing and profit stayed in Europe. The British Gold Coast (now Ghana) Cocoa Board, established in 1947, was designed specifically to control the price cocoa farmers received — setting prices low to maximize what the colonial government could extract. Independent Ghana inherited this structure. The system was designed to keep Africans as raw material suppliers. That was a design choice, not a natural law.",
    first_step: "Buy 5kg of high-quality Ghanaian or Ivorian cocoa beans online or from a local supplier. Follow a YouTube tutorial on basic bean-to-bar chocolate making. Make 30 bars. Sell them to your colleagues, at a hotel, or online. Track the margin. Understand that you just captured value that Swiss companies have been capturing for a century.",
  },

  {
    id: "coffee",
    commodity: "Coffee",
    emoji: "☕",
    countries: ["Ethiopia", "Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi", "DRC", "Cameroon"],
    the_truth: "Ethiopia invented coffee. The word 'coffee' comes from the Kaffa region of Ethiopia, where the plant was first discovered. Ethiopian coffee has been drunk for over 1,000 years. Today, Starbucks, Nestlé (Nescafé), Lavazza, and Illy earn hundreds of billions of dollars from coffee — much of it grown in Ethiopia, Uganda, and Kenya. The Ethiopian farmer who grows the coffee earns $0.10–$0.50 per kg of cherries. Starbucks charges $5–$7 for a single cup made from that same coffee. The distance between the farm gate and the cup is the entire coffee industry. Africa grows the world's best coffee. Africa captures almost none of the money.",
    what_exists: "Ethiopia produces 700,000+ tonnes of coffee annually — its largest export, earning $1.5B+ per year. But that is the raw bean price. Uganda is East Africa's second-largest producer. Kenya produces some of the world's most prized auction coffees. Rwanda has built a world-class specialty coffee sector in under 20 years. DRC, Tanzania, and Burundi all have high-altitude growing regions producing exceptional quality. Africa has the climate, the history, the flavor profiles, and the tradition.",
    who_profits: "Starbucks: $36B revenue. Nestlé (Nescafé): $25B+ coffee revenue. Lavazza (Italy): $3.5B revenue. Illy (Italy): $500M+ revenue. JAB Holdings (Germany): owns Jacobs, Douwe Egberts, Peet's Coffee — $50B+. These companies' brands are built on the romance of Ethiopian highlands, Kenyan altitude, and Ugandan arabica. The farmers whose land makes these brands romantic earn a fraction of the price of a single cup.",
    annual_value: "$460B global coffee market. Africa's export revenue from coffee: approximately $5B — just over 1% of the final market value. If Africa captured just 10% of global retail coffee value, that would be $46B — more than double current earnings.",
    the_gap: "Green (unroasted) coffee bean: $2–$6 per kg at origin. Roasted specialty coffee: $15–$40 per kg. Branded specialty retail (100g bag): $8–$20. Single cup at Starbucks: $5–$7. Roasting, branding, and distribution is where the money is. Almost all of that happens outside Africa.",
    businesses_to_build: [
      {
        name: "African Coffee Roastery",
        startup_cost: "$8,000–$40,000",
        description: "Roast Ethiopian, Kenyan, or Ugandan coffee locally. Sell retail bags at $12–$25. Supply local cafes and hotels. Export to European and US specialty buyers. Ethiopia has several successful roasteries already.",
      },
      {
        name: "Specialty Coffee Export Company",
        startup_cost: "$10,000–$50,000",
        description: "Source directly from smallholder farmers. Grade to export quality. Sell direct to independent roasters in Europe, US, and Japan who pay premium prices for direct-trade, certified coffee.",
      },
      {
        name: "Coffee Tourism Experience",
        startup_cost: "$2,000–$10,000",
        description: "Coffee origin tours in Ethiopia, Kenya, or Rwanda. Bring foreign tourists to see farms, wash stations, and traditional ceremonies. Specialty coffee tourism is a growing niche.",
      },
      {
        name: "African Coffee Brand",
        startup_cost: "$5,000–$20,000",
        description: "A named African brand (not a commodity supplier). Package, brand, and sell African coffee as a premium product online and in diaspora markets. Yirgacheffe, Sidamo, Kona Africa.",
      },
    ],
    suppliers_and_inputs: "Coffee: Ethiopian Commodity Exchange (ECX), Kenya Coffee Board, Uganda Coffee Development Authority, Rwanda cooperative systems. Roasting equipment: secondhand Italian or German drum roasters ($5,000–$30,000). Packaging: resealable foil bags (local or imported). Certification: UTZ/Rainforest Alliance, USDA Organic.",
    markets: "LOCAL: Hotel chains, restaurants, urban cafes in Nairobi, Addis Ababa, Kigali, Lagos. REGIONAL: South Africa has a booming specialty coffee culture. EXPORT: European specialty coffee market is worth $50B+. US independent coffee shops pay premiums for African direct-trade. Japanese coffee culture prizes African highland coffees.",
    africans_doing_it: "Kaldis Coffee (Ethiopia): largest Ethiopian coffee chain, sourcing and selling Ethiopian origin. Café Neo (Nigeria): growing Nigerian coffee chain. Dormans Coffee (Kenya): 70+ years, Kenyan roaster supplying East Africa and exporting. Kahawa 1893 (Kenya): women farmers' direct-trade brand selling in US stores including Target.",
    historical_note: "Coffee was discovered in the Kaffa region of Ethiopia over 1,000 years ago — legend says a goat herder named Kaldi noticed his goats were energized after eating certain berries. Ethiopian people have been drinking coffee in ceremony for over 1,000 years. When Arab traders brought coffee to Yemen in the 15th century, they understood they had something extraordinary. By the 17th century, coffeehouses spread across Europe. By the 18th century, European colonial powers had stolen and transplanted coffee plants to their tropical colonies in Latin America and Asia — deliberately breaking the Arab and Ethiopian trade monopoly. Ethiopia still produces some of the world's finest coffee. The global coffee industry earned $460B last year. Ethiopia earned $1.5B. That gap is the story of colonization's continuing economic legacy.",
    first_step: "Buy 1kg of Ethiopia Yirgacheffe or Kenya AA green coffee beans. Roast them yourself with a simple pan or a basic home roaster ($50–$200). Grind, brew, taste. Then look up what Starbucks charges for a similar origin coffee. Then understand the gap. That gap is a business.",
  },

  {
    id: "dairy-livestock",
    commodity: "Dairy & Livestock",
    emoji: "🐄",
    countries: ["Kenya", "Ethiopia", "Nigeria", "Rwanda", "Uganda", "Tanzania", "Mali", "Niger"],
    the_truth: "The Fulani people of West Africa have herded cattle for over 3,000 years. They are among the world's most expert livestock managers, moving cattle across vast ranges, managing breeds, and producing milk in conditions no European dairy farmer has ever faced. The Maasai of East Africa have lived alongside cattle for millennia. Africa has over 1 billion livestock animals — more than any other continent. Yet Africa imports powdered milk from Ireland, France, and New Zealand, processed cheese from Germany, and yogurt from European multinationals. The milk exists. The cows exist. The knowledge exists. The processing and packaging that creates value does not.",
    what_exists: "Kenya's dairy sector produces 5+ billion litres of milk annually — East Africa's largest. Ethiopia has over 55 million cattle — Africa's largest herd. Nigeria produces 700M+ litres annually through its Fulani herding communities. Rwanda has dramatically scaled dairy yields through its Girinka ('one cow per family') programme. Across sub-Saharan Africa, smallholder dairy is the backbone of rural food security.",
    who_profits: "Nestlé (Milo, Nido powdered milk): $94B revenue, with powdered milk a major product line in Africa. Brookside Dairy (Kenya) — owned 50% by Saputo (Canada): one of Kenya's largest dairy processors. Arla Foods (Denmark): exports powdered milk across Africa. Danone (France): yogurt brands across African markets. International dairy companies use Africa as a market for processed products while the raw milk is not being fully captured by African processors.",
    annual_value: "$50B+ African dairy market annual value. Growing at 6–8% per year as urban populations grow. Currently dominated by informal market (approximately 80% of African dairy is sold informally with no value-added processing).",
    the_gap: "Fresh raw milk: $0.20–$0.50/litre at farm gate. Pasteurized packaged milk: $0.80–$1.50/litre retail. Yogurt: $1.50–$3 per 500ml. Cheese: $5–$20 per kg. Powdered milk: $8–$15 per kg. The value chain from raw milk to packaged product multiplies value 3–30x. Most of that processing happens outside Africa or by foreign-owned companies.",
    businesses_to_build: [
      {
        name: "Small Dairy Processor",
        startup_cost: "$5,000–$30,000",
        description: "Pasteurize and package local milk. Supply local schools, hospitals, hotels. Kenya has hundreds of small dairy processors. You can start with 200 litres/day.",
      },
      {
        name: "Yogurt Brand",
        startup_cost: "$2,000–$10,000",
        description: "African-flavored yogurt (mango, passion fruit, baobab). Target urban consumers, restaurants, hotels. Rwanda's Inyange Industries built a dominant dairy brand domestically.",
      },
      {
        name: "Artisan Cheese Maker",
        startup_cost: "$3,000–$15,000",
        description: "East African highland milk (Kenya, Rwanda, Ethiopia) is naturally suited to artisan cheese. Supply restaurants, hotels, and the growing urban middle class. South Africa's artisan cheese industry earns R500M+.",
      },
      {
        name: "Dairy Cooperative + Cold Chain",
        startup_cost: "$10,000–$50,000",
        description: "Organize 50–200 smallholder farmers into a cooperative with a cooling tank. Supply consistently to processors. The cooperative model is how Kenya Cooperative Creameries (KCC) was built.",
      },
    ],
    suppliers_and_inputs: "Milk: local farmers, cooperatives, pastoralist communities. Processing equipment: pasteurizer, culture tanks, yogurt cups — local fabrication and import. Cold chain: solar-powered cooling tanks (available through NGO programmes). Packaging: local packaging companies.",
    markets: "LOCAL: Urban middle-class consumers, school feeding programmes, hospitals, hotels. REGIONAL: EAC trade bloc allows free dairy trade between Kenya, Uganda, Tanzania, Rwanda, Burundi. EXPORT: Premium African artisan dairy for diaspora markets and specialty food import.",
    africans_doing_it: "Brookside Dairy (Kenya, partly Kenyan-owned): dominant Kenyan milk brand. Inyange Industries (Rwanda): Rwanda's largest dairy company, fully government-linked and Rwanda-built. Vital (Senegal): dairy brand. President (Tanzania): Tanzanian dairy brand. Jesa Farm Dairy (Uganda): premium Ugandan dairy. Thousands of small-scale dairy processors exist across East and West Africa.",
    historical_note: "The Fulani people (West Africa) have herded cattle for 3,000+ years and developed some of the world's most sophisticated pastoral knowledge — disease management, seasonal migration routes, selective breeding — without textbooks or European science. The Maasai of East Africa built their entire culture around cattle. The Tutsi of Rwanda were cattle-herding royalty. Colonial land policies — especially in East and Southern Africa — forcibly removed African pastoralists from their traditional grazing lands, giving those lands to European settler farmers. The same land, the same cattle knowledge, the same climate. Different ownership by colonial decree. The Girinka programme in Rwanda is one of the most successful attempts to restore African livestock ownership to African families.",
    first_step: "Find the nearest milk producer in your area. Ask what price they receive per litre. Then walk to the nearest supermarket or market and check the retail price of packaged milk. The difference between those two prices is a business opportunity.",
  },

  {
    id: "mangoes-tropical-fruit",
    commodity: "Mangoes & Tropical Fruits",
    emoji: "🥭",
    countries: ["Senegal", "Mali", "Burkina Faso", "Kenya", "Ghana", "Nigeria", "Tanzania", "Ethiopia", "Cameroon"],
    the_truth: "Africa produces hundreds of millions of tonnes of mangoes, pineapples, bananas, passion fruit, papaya, and avocado every year. A significant portion rots in the field or at the farm gate because there is no processing, no cold storage, and no reliable market access. Meanwhile, Dole, Del Monte, and Chiquita — American and European food companies — earn billions from fruit grown in Africa, processed elsewhere, and sold globally. Germany, Netherlands, and France are the world's largest importers of tropical fruit. They buy it cheap, process it, and resell it as juice, jam, puree, and dried fruit at 5–10x the raw fruit price. Africa grows the fruit. Europe owns the processing.",
    what_exists: "Africa produces 1/3 of the world's mangoes. Nigeria produces 7 million tonnes of mangoes annually — and loses an estimated 40–50% to post-harvest waste. Senegal and Mali have major mango belts. Kenya's Meru region is one of East Africa's primary mango and avocado zones. Ethiopia grows premium Hass avocados and a variety of tropical fruits. The raw material is everywhere. The problem is not growing — it is processing, packaging, and market access.",
    who_profits: "Dole Food Company: $4B+ revenue from tropical fruit globally. Chiquita Brands International: $3B+ revenue. Del Monte Pacific: $2B+ revenue. European juice companies (including Coca-Cola's Minute Maid, PepsiCo's Tropicana): buy African fruit concentrates and sell finished juice at 10x the input cost. African fruit brokers — often subsidiaries of European food companies — control the supply chain.",
    annual_value: "$180B global tropical fruit market annually. Africa's share as a processed goods producer: under 3%. Africa could earn $30B+ annually from tropical fruit processing alone.",
    the_gap: "Fresh mango at farm gate: $0.05–$0.20 per kg. Mango juice (retail, 1L): $1.50–$4.00. Dried mango slices (200g): $3–$8. Mango puree for export (industrial): $0.80–$2.50/kg. Mango jam (retail): $3–$6 per jar. Every step of processing multiplies the value. Nigeria throws away millions of tonnes of mangoes worth billions in processed form every year.",
    businesses_to_build: [
      {
        name: "Fruit Juice Brand",
        startup_cost: "$3,000–$20,000",
        description: "100% natural mango, pineapple, or passion fruit juice. No artificial flavors. Supply local restaurants, hotels, schools. Every African city has a growing middle class willing to pay for premium natural juice.",
      },
      {
        name: "Dried Fruit Processing",
        startup_cost: "$2,000–$10,000",
        description: "Solar dryers cost $500–$2,000 and can process 50–200kg of fruit daily. Dried mango, papaya, and pineapple export to European health food stores. Already exporting from Ghana, Burkina Faso, and Tanzania.",
      },
      {
        name: "Fruit Puree Exporter",
        startup_cost: "$10,000–$50,000",
        description: "Process fresh fruit into puree or concentrate for export to juice manufacturers and food companies in Europe and Asia who buy African puree currently through brokers.",
      },
      {
        name: "Jam & Preserve Brand",
        startup_cost: "$1,000–$5,000",
        description: "Artisan African fruit jams, chutneys, and preserves. Sell to hotels, restaurants, export markets. Mango chutney is a staple in UK supermarkets — sold by Indian and British brands, made from African mangoes.",
      },
    ],
    suppliers_and_inputs: "Fruit: local farm markets, farmer cooperatives, direct farm sourcing. Processing equipment: juicers, solar dryers, jam-making pots, bottling equipment — all locally fabricated or cheaply imported. Packaging: glass jars, plastic bottles, vacuum-sealed bags — local suppliers in Lagos, Accra, Nairobi, Dakar.",
    markets: "LOCAL: Hotels, restaurants, schools, hospitals, supermarkets. REGIONAL: South African premium food market. EXPORT: EU health food market — Whole Foods, Holland & Barrett, Bio-Marché. US natural food stores. UK Waitrose and M&S source dried African fruit directly.",
    africans_doing_it: "Tropicana Ghana: Ghanaian fruit processing brand. Afia (Nigeria): Nigerian juice brand. Minute Maid Africa (Coca-Cola): using African fruit. Sun Fruits (Burkina Faso): dried mango exporter. Homegrown (Kenya): fresh vegetable and fruit exporter. Kenya's avocado export earnings tripled in 5 years as processors entered the market.",
    historical_note: "The mango is itself a transplant from South Asia, brought to Africa by Arab and Indian Ocean traders centuries ago — Africa adopted it so completely that West African mango varieties are now distinct from Asian ones. But the broader point holds: African farmers have grown, harvested, and traded tropical fruits for generations. Colonial export agriculture enforced commodity export — you grew the raw material and shipped it. Value-adding was forbidden or economically blocked. Nigeria's groundnut pyramids in Kano were a global symbol of raw commodity export — the groundnuts went to Europe for processing, came back as groundnut oil and peanut butter worth far more. The structure persisted after independence because colonial institutions, pricing systems, and export frameworks were never dismantled. They just had new managers.",
    first_step: "Find the closest mango, pineapple, or papaya farm to you. Ask what they do with excess fruit at peak season. Most will say it rots. Offer to buy it at harvest price. Rent or borrow a basic juicer or solar dryer. Make a test batch. Sell to your neighbourhood, a school, or a local restaurant. The test costs you under $100.",
  },

  {
    id: "salt",
    commodity: "Salt",
    emoji: "🧂",
    countries: ["Senegal", "Mali", "Ethiopia", "South Africa", "Kenya", "Mozambique", "Egypt", "Tunisia"],
    the_truth: "Senegal's Lac Rose (Pink Lake) and Mali's Timbuktu salt mines produced salt that was traded across the Sahara for centuries — salt was literally worth its weight in gold in ancient West Africa. Ethiopian salt miners have extracted salt from the Danakil Depression — one of the harshest environments on earth — for over 1,000 years. Today, Senegal exports raw salt at commodity prices. The same salt repackaged by French and Spanish companies becomes premium gourmet sea salt selling at 50–100x the raw salt price in European supermarkets. Maldon Salt (UK), Fleur de sel (France), and pink salt brands all use production techniques and raw materials no different from what Senegalese and Ethiopian salt producers have used for centuries. The only difference is branding and packaging.",
    what_exists: "Senegal produces 400,000+ tonnes of salt annually. The salt women of Lac Rose (many of whom are part of traditional salt-harvesting cooperatives) extract salt by hand using techniques centuries old. Ethiopia's Afar people harvest salt blocks from the Danakil Depression — the most dangerous and isolated salt source on earth. Kenya, Mozambique, and South Africa all have significant coastal salt production.",
    who_profits: "Maldon Salt Company (UK): premium sea salt retailing at $8–$15 per 250g. J.P. Chenet et Fils (France): fleur de sel. Himalayan pink salt brands (many repackaged in US/UK): $5–$20 per kg. Morton Salt (US): major industrial salt company. La Baleine (France). None of these companies produce African salt. But the premium market has been built entirely outside Africa while Africa sells its salt at commodity prices.",
    annual_value: "$14B global table salt market. $500M+ global gourmet/specialty salt market (growing 10%+ annually). Africa's share of the gourmet salt market: near zero. Africa's share of raw salt production: significant.",
    the_gap: "Industrial salt: $20–$50 per tonne. Packaged table salt: $0.50–$1.50 per kg retail. Premium sea salt (250g): $8–$15 retail. The gourmet premium is almost entirely packaging, branding, and perceived origin.",
    businesses_to_build: [
      {
        name: "Premium African Salt Brand",
        startup_cost: "$2,000–$8,000",
        description: "Package Senegalese pink salt, Ethiopian Danakil crystal salt, or Kenyan coastal sea salt in premium retail packaging. Market the origin, the history, the tradition. Sell online, at hotels, in specialty food stores.",
      },
      {
        name: "Salt Export Company",
        startup_cost: "$5,000–$25,000",
        description: "Source from Senegalese cooperatives or Ethiopian miners. Export directly to European and US food manufacturers and retailers who currently buy through intermediaries.",
      },
      {
        name: "Artisan Salt Workshop",
        startup_cost: "$500–$3,000",
        description: "Infused salts (herb, citrus, smoked). Premium gifting sets. Target hotels, tourism markets, diaspora. $20 per gift set of 3 small jars. Dozens of artisan salt brands exist in the UK — none are African.",
      },
    ],
    suppliers_and_inputs: "Raw salt: Lac Rose cooperatives (Senegal), Afar region suppliers (Ethiopia), coastal salt works (Kenya, Mozambique). Packaging: glass jars, kraft paper bags, premium cartons — local packaging companies. Branding: graphic design, label printing — local.",
    markets: "LOCAL: Restaurants and hotels are buyers of premium salt. EXPORT: EU and US specialty food market is willing to pay $10–$20 for 250g of premium African sea salt. Etsy and Amazon Handmade for artisan salt brands. UK specialty food importers (Selfridges, Harvey Nichols, Fortnum & Mason all stock exotic salts).",
    africans_doing_it: "Salt of the Earth (South Africa): South African premium salt brand. Some Senegalese cooperatives are beginning to package for export directly. But the African branded premium salt market is almost entirely uncaptured — this is one of the clearest opportunities on the continent.",
    historical_note: "Salt was so valuable in ancient West Africa that it was traded ounce for ounce against gold. The city of Timbuktu was partly built on the salt trade — caravans came from the Saharan salt mines at Taoudenni (Mali) across the desert to exchange salt for gold, ivory, and slaves in the West African kingdoms. The Arabic word for salt is 'milh' — the root of 'Malian' and connected to 'Mali' itself in some linguistic traditions. Mansa Musa's empire controlled both the gold and the salt trade — understanding that controlling both sides of any trade makes you rich. Colonialists disrupted these trade networks, reorienting African exports toward European ports and away from trans-Saharan and Indian Ocean routes. African salt became a commodity input, not a finished product.",
    first_step: "Go to Lac Rose in Senegal, or find the nearest salt flat or coastal salt producer in your country. Ask the price per tonne of raw salt. Buy 5kg. Package 200g into 20 small glass jars with a handwritten label. Bring them to the nearest boutique hotel. Ask $5 per jar. See if they buy. If they do, you just discovered a business.",
  },

  {
    id: "cashew-nuts",
    commodity: "Cashews",
    emoji: "🥜",
    countries: ["Côte d'Ivoire", "Tanzania", "Mozambique", "Ghana", "Nigeria", "Benin", "Burkina Faso"],
    the_truth: "West Africa produces over 1 million tonnes of cashews annually — Côte d'Ivoire alone produces 800,000+ tonnes, making it the world's largest cashew exporter. These cashews go almost entirely to Vietnam and India, where they are processed (shelled, roasted, packaged), and then sold to Europe and the United States as 'Vietnamese cashews' or 'Indian cashews.' The processing industry — worth billions — happens outside Africa. Côte d'Ivoire exports the raw nut. Vietnam and India export the snack. Africa grew the product. Asia owns the industry.",
    what_exists: "West Africa is the world's largest raw cashew producer. The climate is ideal for cashew trees, which grow in tropical coastal areas. Cashew trees grow quickly, are drought-resistant, produce for 30+ years, and require relatively little input. The cashew apple (the fruit attached to the nut) is almost entirely wasted in Africa — it is a high-value product (juice, jam, wine) that could generate additional income from each tree.",
    who_profits: "Vietnam: processes 40% of global cashews. India: processes 20% of global cashews. Planters (Kraft Heinz, US): branded cashew snack revenue. Blue Diamond Growers: cashew and nut brands. Whole Foods, Trader Joe's, Lidl: all sell cashews at $10–$25 per kg retail. Côte d'Ivoire exports raw cashews at $0.80–$1.50 per kg. Processed cashews retail at $10–$25 per kg.",
    annual_value: "$6B+ global cashew market. Africa's share of raw nut production: 50%+. Africa's share of processed cashew value: under 10%. Côte d'Ivoire earns $500M from cashew exports. The same cashews, processed in Vietnam and sold in Europe, are worth $4–$5 billion.",
    the_gap: "Raw cashew nut (in shell): $0.80–$1.50/kg. Processed cashew kernel (shelled, roasted): $8–$12/kg. Retail branded cashew pack (100g): $3–$6. A single cashew tree that earns $5 per season as a raw nut supplier could earn $50+ per season if the nut were processed and packaged locally.",
    businesses_to_build: [
      {
        name: "Cashew Processing Plant",
        startup_cost: "$15,000–$100,000",
        description: "Shell, roast, and package cashews for domestic sale and export. The Côte d'Ivoire government actively supports cashew processing investment with tax incentives.",
      },
      {
        name: "Cashew Snack Brand",
        startup_cost: "$2,000–$10,000",
        description: "Roasted, spiced, and flavored cashews. African flavors (suya-spiced, jollof-flavored, chili-lime). Sell at urban markets, airports, online. Target diaspora markets.",
      },
      {
        name: "Cashew Apple Products",
        startup_cost: "$1,000–$5,000",
        description: "The cashew apple is almost entirely wasted in Africa. Juice, wine, and jam from cashew apples are sold in Brazil and India at premium prices. The apple is currently free.",
      },
      {
        name: "Cashew Butter",
        startup_cost: "$1,500–$8,000",
        description: "Alternative to peanut butter. Growing market globally as nut butter category expands. African origin adds story value.",
      },
    ],
    suppliers_and_inputs: "Raw cashews: local farmers, cooperatives, commodity markets. Processing equipment: cashew shelling machines, roasters, packaging lines — available locally and from Asian manufacturers. Seasoning and flavoring: local spice markets.",
    markets: "LOCAL: Airports, hotels, petrol stations, urban supermarkets. REGIONAL: South Africa's snack market. EXPORT: EU natural food market, UK health food retailers. US diaspora market. Amazon for online snack brands.",
    africans_doing_it: "Cajou Espoir (Burkina Faso): woman-led cashew processing cooperative, exporting to France. Olam International (Singapore-origin, major African operations): processes cashews in Côte d'Ivoire and Nigeria. Premium Produce (Nigeria): roasted cashew brand. Several Ghanaian brands are beginning to export processed cashews directly.",
    historical_note: "Cashew trees were brought to Africa by Portuguese colonizers from Brazil in the 16th century — initially as a tool to prevent coastal erosion. African farmers recognized the value and adopted the tree rapidly. By the 20th century, cashew cultivation had spread across West Africa's coastal belt. Colonial export systems then ensured that the raw nut was exported — the colonial powers wanted raw material inputs for their factories, not competitors in the processing industry. Post-independence governments inherited those export structures. The processing that could earn African countries 5–10x their current export revenue still doesn't happen at scale in Africa. That is a policy failure, not a capability failure.",
    first_step: "Buy 5kg of raw cashews from a local farm or market. Roast them in a pan with a simple spice blend (suya spice, chili, salt). Bag them in 100g resealable pouches. Price at $3–$5 each. Sell to your office, a local hotel, or at a market. That test will cost you under $20 and teach you the entire business model.",
  },

  {
    id: "textiles-fabric",
    commodity: "Textiles & African Fabric",
    emoji: "🧵",
    countries: ["Ghana", "Nigeria", "Senegal", "Mali", "Côte d'Ivoire", "Ethiopia", "Tanzania", "Kenya"],
    the_truth: "African wax-print fabric — called Ankara, Kente, Kitenge, Kanga, or Dutch Wax — is sold across Africa and the African diaspora as a symbol of African identity. The largest manufacturers of African wax-print fabric are Vlisco (Netherlands), ABC Wax (UK), and Woodin (which Vlisco owns). Dutch companies have been manufacturing and selling 'African fabric' in Africa for over 150 years. African people buy their own cultural fabric from Dutch companies. The African fashion market is worth $31B annually. The fabric sold as African is largely not made in Africa.",
    what_exists: "West Africa has deep weaving and dyeing traditions — Kente from Ghana, Adire from Nigeria, Bogolan from Mali, Bazin from Senegal. These are genuine African textile traditions, distinct from imported wax-print. Ethiopia has a thriving handloom textile industry. Rwanda is building an industrial textile sector. Kenya has textile mills. The skills, the looms, the dyes, and the artists exist across the continent.",
    who_profits: "Vlisco Group (Netherlands): owns several African fabric brands including Vlisco, GTP, ABC Wax, Woodin. Estimated $200M+ in annual revenue from 'African fabric' sold in Africa. H&M, Zara (Inditex), ASOS: sell African-inspired prints globally. European fast fashion brands appropriate African prints without licensing, crediting, or compensating African designers.",
    annual_value: "$31B African fashion market. Global demand for African-inspired fashion growing 10%+ annually. Authentic African-made textiles command 20–50% premium over mass-produced alternatives in premium markets.",
    the_gap: "Machine-printed wax fabric: $2–$5 per yard (manufactured in Netherlands). Handwoven authentic Kente: $20–$100 per yard. Adire (hand-dyed): $10–$40 per yard. Bogolan (mud cloth): $15–$80 per yard. Authentic African textile commands 5–20x the price of mass-produced 'African print' — but it requires more labor and skill to produce, which is exactly what Africa has.",
    businesses_to_build: [
      {
        name: "African Fabric Brand",
        startup_cost: "$3,000–$15,000",
        description: "Source authentic handwoven or hand-dyed African textiles. Build a brand around the provenance and the artisans. Sell online globally. Maxhosa, Christie Brown, and Lisa Folawiyo have all done this.",
      },
      {
        name: "Ready-to-Wear African Fashion Label",
        startup_cost: "$2,000–$10,000",
        description: "Design and sell contemporary African clothing using authentic local fabric. 10 styles, 3 sizes each, sold online and at African fashion weeks.",
      },
      {
        name: "Textile Manufacturing",
        startup_cost: "$10,000–$100,000",
        description: "Industrial looms to produce African wax-print fabric competitively. Ethiopia's METEC textile factories and industrial zones offer infrastructure support.",
      },
      {
        name: "African Fabric Export Company",
        startup_cost: "$5,000–$30,000",
        description: "Export authentic hand-dyed, handwoven fabric to diaspora retailers, US boutiques, and EU specialist African fabric stores who currently source through Dutch intermediaries.",
      },
    ],
    suppliers_and_inputs: "Fabric: local weavers (Kente, Aso-oke), dyers (Adire, Bogolan), and artisan cooperatives. Thread and yarn: local suppliers and imported cotton thread. Equipment: looms (locally fabricated or imported), dye vats. Design: local graphic designers for digital prints if going into machine printing.",
    markets: "LOCAL: Growing African middle class and urban professionals buying African fashion. REGIONAL: South Africa, East Africa have demand for West African fabric. EXPORT: African diaspora in UK ($400M+ African fashion market), US ($600M+ African fashion market). EU fashion buyers at trade shows. Online DTC sales through Etsy, own website, Instagram.",
    africans_doing_it: "Maxhosa Africa (South Africa): Xhosa knitwear globally. Lisa Folawiyo (Nigeria): Ankara luxury on Net-a-Porter. Christie Brown (Ghana): contemporary Ghanaian fashion internationally. Thebe Magugu (South Africa): LVMH Prize winner. Orange Culture (Nigeria): Adebayo Oke-Lawal, international stockists. D'IYANU (Nigeria/USA): African fabric fashion brand in US.",
    historical_note: "West Africa's textile traditions are among the world's oldest continuous craft traditions. Kente cloth was woven by the Akan people of Ghana for royalty and ceremony — specific patterns had specific meanings and were worn only by kings. Adire was the Yoruba people's indigo-dyeing tradition, with patterns that communicated social meaning, spiritual protection, and family identity. Bogolan (mud cloth) was made by Bambara women in Mali and worn by hunters, warriors, and new mothers — each pattern encoded knowledge. Colonizers classified these as 'primitive crafts' and introduced machine-printed fabric as 'modern.' European companies then spent 150 years selling machine-printed versions of African patterns back to Africans, calling them 'African fabric.' The authentic traditions survived — kept alive by weavers and dyers who maintained the knowledge through generations despite colonial suppression. Those traditions are the foundation of the global African fashion movement today.",
    first_step: "Find a local Adire dyer, Kente weaver, or Bogolan maker in your country. Buy 3 yards of their fabric. Design a simple, elegant garment or bag from it. Photograph it professionally (a phone camera in good light works). Put it on Instagram with a caption that explains the tradition and the artisan. Watch who responds.",
  },

  {
    id: "shea-beauty-cosmetics",
    commodity: "African Beauty & Cosmetics",
    emoji: "💄",
    countries: ["Nigeria", "Ghana", "Senegal", "Kenya", "Morocco", "South Africa", "Ethiopia"],
    the_truth: "The global beauty industry is worth $600B annually and growing fastest in Africa. Yet the African beauty market is dominated by European and American brands — L'Oréal, Unilever, Revlon — whose products were not formulated for African skin and hair, and often contain ingredients that damage them. African women spend disproportionate amounts of their income on cosmetics. Black women in the United States spend $7.5B on beauty products annually — 9x more per capita than non-Black women. Yet until the last decade, almost no brands existed specifically for Black African skin and hair. The consumers exist. The demand exists. The money leaves the continent and diaspora to foreign brands.",
    what_exists: "Africa has extraordinary natural beauty ingredients: shea butter (Ghana, Burkina Faso), argan oil (Morocco), black seed oil (Egypt, Ethiopia), baobab oil (Senegal, Mali), marula oil (South Africa), rooibos (South Africa), turmeric and moringa (East and West Africa). These are ingredients that global cosmetics companies are paying hundreds of millions of dollars to source — from Africa — while selling the finished products back to Africans at premium prices.",
    who_profits: "L'Oréal: $38B revenue. Unilever (Dove, Vaseline, Fair & Lovely): $60B revenue. Estée Lauder: $16B revenue. SheaMoisture (now Unilever subsidiary): built a $700M natural hair brand on African ingredients specifically for Black consumers. Carol's Daughter (now L'Oréal subsidiary): $100M brand acquired by L'Oréal. The pattern repeats: African founders build for African consumers, grow the brand, and foreign companies buy it.",
    annual_value: "$32B African beauty market. Growing at 8% per year. Sub-Saharan Africa is the world's fastest-growing beauty market. Black women globally (African and diaspora): $7.5B+ in US alone. Global natural beauty (largely African-ingredient driven): $54B market.",
    the_gap: "Shea butter at source: $1.50–$3/kg. Shea-based moisturizer retail (SheaMoisture, 400ml): $10–$18. Argan oil at Moroccan source: $10–$15/litre. Branded argan cosmetic oil retail: $30–$80 per 50ml. The ingredients are African. The branding and packaging value happens elsewhere.",
    businesses_to_build: [
      {
        name: "Natural African Beauty Brand",
        startup_cost: "$2,000–$8,000",
        description: "Shea-based body butters, hair oils, soaps. Use African ingredients, sell to African consumers and diaspora. SheaMoisture started as a market stall. ORS, Carol's Daughter, Cantu were all small-batch brands.",
      },
      {
        name: "Argan Oil Brand (Morocco)",
        startup_cost: "$3,000–$15,000",
        description: "Morocco is the only source of argan. Source from cooperatives, brand and package in Morocco. Sell to EU and US beauty market. 100+ Moroccan brands now do this.",
      },
      {
        name: "African Men's Grooming Brand",
        startup_cost: "$2,000–$8,000",
        description: "Beard oils, skin moisturizers, hair products for African men. Massively underserved market. Growing African middle class of professional men is a new consumer.",
      },
      {
        name: "African Cosmetics for Dark Skin",
        startup_cost: "$5,000–$25,000",
        description: "Foundation, lipstick, eyeshadow formulated for African melanin. Fenty Beauty ($570M first year) proved the global demand. An African company could serve the African market first.",
      },
    ],
    suppliers_and_inputs: "Shea butter: Ghanaian and Burkinabé cooperatives. Argan oil: Moroccan women's cooperatives. Black soap: Yoruba soap makers, Ghana. Essential oils: local distillers. Base oils, emulsifiers: specialist cosmetics suppliers in Nairobi, Lagos, Accra, Casablanca. Packaging: glass or recyclable plastic — local packagers.",
    markets: "LOCAL: African women are the primary consumers of African beauty products. REGIONAL: Pan-African distribution through pharmacies, supermarkets, online. EXPORT: African diaspora in UK (400,000+ Nigerian community alone), US (3.7M Nigerian-Americans). Global natural beauty market actively looking for African ingredient brands.",
    africans_doing_it: "Kahina Giving Beauty (Morocco/US): premium argan brand. House of Tara (Nigeria): Nigerian beauty brand. House 99 (David Beckham + Ghanaian partners): African-ingredient men's grooming. 54 Thrones (US, African-founded): African beauty brand in Whole Foods. Muya (Ethiopia): Ethiopian beauty brand. Skin Republic (South Africa): African-developed skincare.",
    historical_note: "African women have maintained sophisticated beauty and skincare practices for millennia. Cleopatra bathed in milk and honey. Ancient Nubian queens used kohl (antimony sulfide) for eye cosmetics — kohl is now a global beauty product still largely sourced from Africa. Yoruba women used black soap (ose dudu) made from plantain ash, cocoa pod ash, and shea butter for centuries — a product now sold in Western health food stores for $8 per bar. The colonial period introduced imported European products and marketed them as 'modern' and 'civilized' — including skin-lightening creams that told African women their own skin color was inferior. The psychological damage of those campaigns persists. Rebuilding African beauty brands is not just economics. It is an act of cultural restoration.",
    first_step: "Buy 500g of raw shea butter, 200ml of black seed oil, and a bag of oats from a local market. Make a simple body butter using a recipe from YouTube. Pour into 10 glass jars. Label them with a name you like. Give 5 to friends for feedback. Sell 5 to your neighbours at $5 each. Calculate your margins. You have started a beauty brand.",
  },

  {
    id: "music-entertainment",
    commodity: "Music & Entertainment",
    emoji: "🎵",
    countries: ["Nigeria", "Ghana", "South Africa", "Senegal", "Tanzania", "Kenya", "Côte d'Ivoire", "DR Congo"],
    the_truth: "Afrobeats is the fastest-growing music genre in the world. Wizkid, Burna Boy, Davido, Tems, Rema, Ayra Starr — artists from Lagos and Accra are selling out Madison Square Garden and the O2 Arena. But most of the money from African music goes to American and European record labels, streaming platforms, and distributors. Universal Music Group, Sony Music, and Warner Music control the distribution of most major African artists. When a Nigerian fan streams a Burna Boy song on Spotify, the money flows: Spotify → distributor → label (often foreign-owned). African streaming infrastructure barely exists. The music is African. The money pipeline is not.",
    what_exists: "Nigeria's music industry earns $50M+ annually in publishing and licensing — far more if you count informal markets. Ghana's music scene exports globally. South African music (amapiano is the 2020s' biggest genre export) is reaching every continent. Senegalese mbalax, East African bongo flava, Ugandan afrobeats — the creative output across Africa is extraordinary. The continent produces world-class music with almost no world-class music business infrastructure.",
    who_profits: "Universal Music Group (US): $11B revenue, owns rights to many African artists. Sony Music Entertainment (Japan): $4B revenue. Spotify: $14B revenue, pays below 1 cent per stream to artists. Warner Music Group: $5B revenue. YouTube (Google): earns advertising revenue from hundreds of millions of African music streams without paying African creators fairly. Boomplay (Beijing-based): major African music streaming platform despite being Chinese-owned.",
    annual_value: "$1.4B African music industry estimated value (formal). Real value including informal markets: potentially 3–5x. Global Afrobeats market growing 10–15% annually. African music publishing rights (if owned by Africans): $100M+ annually.",
    the_gap: "An African artist signs with a foreign label and receives 15–30% of earnings from their own music. The label keeps 70–85%. If that artist owned their masters and distributed independently, they would earn 80–90% of their revenue. The business model of foreign label ownership of African music is designed to extract African creative value.",
    businesses_to_build: [
      {
        name: "African Music Label",
        startup_cost: "$5,000–$25,000",
        description: "Sign 3–5 emerging local artists. Own their masters. Distribute through TuneCore or DistroKid (self-distribution for under $50/year). Earn 80% of streaming revenue instead of 15%.",
      },
      {
        name: "Concert Promotion Company",
        startup_cost: "$3,000–$20,000",
        description: "Book African artists for local events. Partner with hotels, venues, corporate events. 10,000-person concerts in Lagos, Accra, Nairobi regularly sell out. The promoter earns 20–40% of ticket revenue.",
      },
      {
        name: "Music Production Studio",
        startup_cost: "$5,000–$30,000",
        description: "Recording, mixing, and mastering for local artists. Lagos, Accra, and Nairobi each have hundreds of recording artists who need studio time. $50–$300/hour.",
      },
      {
        name: "Artist Management Company",
        startup_cost: "$500–$5,000",
        description: "Manage 3–10 local artists. Negotiate contracts, bookings, brand deals. Takes 15–20% commission. Every successful artist needs a good manager. There aren't enough in Africa.",
      },
    ],
    suppliers_and_inputs: "Recording equipment: interface, microphones, headphones, DAW software ($500–$5,000 basic setup). Distribution: TuneCore, DistroKid, AMUSE — digital distribution for under $100/year. Venue: rent event spaces, hotels, outdoor grounds. Promotion: Instagram, TikTok, WhatsApp broadcast lists — free.",
    markets: "LOCAL: Urban music fans willing to pay for live shows and streaming. REGIONAL: Pan-African streaming demand is massive. EXPORT: African diaspora worldwide are the largest consumers of African music. Global music market in UK, US, and Europe increasingly buying African music.",
    africans_doing_it: "Mavin Records (Don Jazzy, Nigeria): major independent African label, raised $55M. Empire (US/Nigeria partnership): distributing African artists globally. Audiomack: US-based streaming platform but investing heavily in Africa. Boomplay: Beijing-owned but dominant in Africa — a gap an African platform could fill. Several African artist management companies are emerging in Lagos, Accra, and Johannesburg.",
    historical_note: "Music is Africa's oldest and most universal cultural export. Griot traditions in West Africa preserved centuries of oral history, genealogy, and cultural wisdom through music. The talking drum communicated across distances. African music traveled to the Americas through enslaved people — and became the root of jazz, blues, rock and roll, soul, funk, hip-hop, and house music. The global popular music industry — valued at hundreds of billions of dollars — is built on the foundation of African musical traditions. The people who invented the rhythmic, melodic, and cultural foundations of modern music have received almost none of the industry's financial rewards. The emergence of Afrobeats as a global genre is African music reclaiming its place — but African-owned business infrastructure needs to be built before that value stays in Africa.",
    first_step: "If you have a phone, you can start. Record a local artist on your phone. Put it on TuneCore for $29/year. Share it. If 10,000 people stream it at $0.003/stream, that is $30. Not much. But 1,000,000 streams at $0.003 is $3,000. And 10,000,000 streams (which Afrobeats artists regularly achieve) is $30,000. The distribution infrastructure is cheap. The music talent is everywhere. The business is in between.",
  },

  {
    id: "tourism",
    commodity: "Tourism & Hospitality",
    emoji: "🦁",
    countries: ["Kenya", "Tanzania", "Rwanda", "Morocco", "South Africa", "Ghana", "Senegal", "Ethiopia", "Uganda"],
    the_truth: "Africa has the world's most extraordinary natural and cultural assets — the Serengeti, Victoria Falls, the Pyramids, the Okavango Delta, Kilimanjaro, the gorillas of Rwanda, the ancient cities of Ethiopia, the beaches of Zanzibar and Senegal. Yet most of the money in African tourism goes to foreign-owned hotel chains, foreign-owned safari companies, and foreign-owned tour operators. Booking.com, Airbnb, Marriott, Hyatt, and Four Seasons earn billions from Africa without the revenue circulating locally. A tourist pays $500/night at a luxury lodge in Kenya — and 70%+ of that revenue leaves Kenya immediately through management fees, international bookings, foreign ownership, and imported goods.",
    what_exists: "Africa's biodiversity is unmatched. Rwanda has mountain gorillas — only 1,000 exist in the world. Tanzania's Serengeti sees the world's largest animal migration every year. Morocco's medinas, Ghana's Cape Coast Castle, Ethiopia's rock-hewn churches at Lalibela — cultural assets no other continent has. Africa received 70 million tourists before COVID. The infrastructure gap is a business opportunity.",
    who_profits: "Marriott International: 137+ hotels across Africa, revenue leaves through corporate structure. Four Seasons: Kenya, Tanzania, Morocco properties — profits go to Toronto headquarters. Abercrombie & Kent (UK): premium African safari revenue. Intrepid Travel (Australia): African tour packages. Booking.com and Expedia: take 15–25% commission on every hotel booking in Africa.",
    annual_value: "$169B tourism contribution to African GDP (2019, pre-COVID). $50B+ in tourism revenue that currently flows out of Africa through foreign ownership. $100B+ potential additional tourism revenue if Africa's natural and cultural assets were properly marketed and managed by Africans.",
    the_gap: "A tourist booking an African safari through a UK tour operator pays $4,000–$15,000. The African lodge and guide receive 30–40% of that. The UK operator and international booking platform keep 60–70%. If Africans owned the entire supply chain — from booking to accommodation to guiding to food — that $15,000 would stay in Africa.",
    businesses_to_build: [
      {
        name: "Community Tourism Lodge",
        startup_cost: "$10,000–$100,000",
        description: "Build 5–10 eco-cottages near a national park or cultural site. Market directly through Booking.com and your own website. Employ local guides and cooks. Rwanda has hundreds of community lodges.",
      },
      {
        name: "African Travel Agency",
        startup_cost: "$2,000–$10,000",
        description: "Curate and sell African travel experiences directly to diaspora and international tourists. Cut out UK tour operators. Earn 15–20% of every booking.",
      },
      {
        name: "Cultural Tourism Guide Company",
        startup_cost: "$500–$3,000",
        description: "Licensed local guides who tell the real story of African history and culture. Tourists pay $50–$200/day for guides. A 10-guide company doing 5 tours/week earns $25,000+/month.",
      },
      {
        name: "African Restaurant & Food Tourism",
        startup_cost: "$5,000–$30,000",
        description: "A restaurant that tells the story of its food — what it is, where it comes from, how it was made for generations. Culinary tourism is one of the fastest-growing travel segments.",
      },
    ],
    suppliers_and_inputs: "Accommodation: land (lease or purchase through government allocation), local builders. Food: local farms, markets, fishing communities. Transport: local vehicle hire or purchase. Guide licensing: national parks authority and tourism board. Marketing: Google Business, Booking.com listing ($0 upfront), Instagram (@yourloungename).",
    markets: "LOCAL: African domestic tourism is growing. More Africans are traveling within the continent. REGIONAL: Pan-African tourism. EXPORT: European and American tourists who are the highest-spending visitors. African diaspora visiting 'home' — 40M+ Africans in diaspora, most of whom want to connect to the continent.",
    africans_doing_it: "African Pride Hotels (South Africa): African-owned hotel chain. Sarova Hotels (Kenya): Kenyan-owned hotel group with 10+ properties. Ol Pejeta Conservancy (Kenya): African wildlife conservancy. Ngorongoro Conservation Area Authority (Tanzania): government-owned tourism authority. andBeyond (South Africa, partly African ownership): luxury African safari company.",
    historical_note: "Lalibela's rock-hewn churches in Ethiopia were commissioned by King Lalibela in the 12th century — carved out of solid rock as a 'New Jerusalem' for Ethiopian Christians who could not travel to the real Jerusalem. They are among the most extraordinary architectural achievements in human history. Great Zimbabwe was a stone city built in the 11th–15th centuries — evidence of a sophisticated civilization that early European explorers refused to believe Africans had built. The Pyramids of Giza are the most visited monuments on earth. Egypt's greatest asset — thousands of years of African civilization — earns Egypt billions. But most of that tourist money flows to foreign-owned booking platforms, foreign-managed hotels, and foreign airlines. Africa's greatest heritage is its greatest untapped business asset.",
    first_step: "Identify the most beautiful, historically significant, or naturally unique place within 50km of where you live. Research it: what is its history? Does it have visitors? What do visitors currently pay? What do they need that doesn't exist? A good meal? A knowledgeable guide? A comfortable place to sleep? Solve one of those needs. You have started a tourism business.",
  },

  {
    id: "palm-oil-ingredients",
    commodity: "Palm Oil & Food Ingredients",
    emoji: "🌴",
    countries: ["Nigeria", "Cameroon", "DRC", "Ghana", "Côte d'Ivoire", "Sierra Leone"],
    the_truth: "Nigeria was the world's largest palm oil producer until the 1960s, supplying Unilever's entire West African soap business. Today, Nigeria imports palm oil from Malaysia and Indonesia — despite having the ideal climate and deep traditional knowledge of palm cultivation. Malaysia entered palm oil in the 1960s by importing Nigerian and Ghanaian seeds and expertise, then industrialized and scaled. By the 1980s, Malaysia had overtaken Africa. The continent that invented palm oil now buys it back from Southeast Asia. Unilever — the company built on West African palm oil — still earns billions from palm oil products. The supply chain just no longer includes African farmers.",
    what_exists: "West and Central Africa have ideal palm oil conditions. DRC has the world's largest untapped palm growing potential. Nigeria, Cameroon, and Ghana all have significant smallholder production. The palm tree is indigenous to Africa — it has grown here for tens of thousands of years. Africa has the land, the climate, and the ancestral knowledge. What is missing is processing infrastructure and market linkage.",
    who_profits: "Unilever: $60B revenue, palm oil in almost every product. Procter & Gamble: $80B revenue, palm in soap, shampoo, cosmetics. Nestlé: $94B revenue, palm in food products. Felda Global Ventures (Malaysia): major palm oil company built on transplanted African knowledge. Wilmar International (Singapore): world's largest palm oil company.",
    annual_value: "$65B global palm oil market. Africa's current share of production: under 5% of global output. Africa's historical share: majority. Africa could realistically capture 20–30% of global palm production with investment.",
    the_gap: "Raw palm fruit bunches: $60–$100 per tonne. Crude palm oil: $600–$900 per tonne. Refined palm oil: $700–$1,000 per tonne. Branded cooking oil retail: $3–$6 per litre. Value-added palm products (soaps, cosmetics, food ingredients): even higher margins.",
    businesses_to_build: [
      {
        name: "Palm Oil Processing Mill",
        startup_cost: "$10,000–$80,000",
        description: "Process fresh palm fruit bunches into crude palm oil. Smallholder processing mills are running profitably across Nigeria, Cameroon, and Ghana.",
      },
      {
        name: "Branded Cooking Oil Company",
        startup_cost: "$5,000–$30,000",
        description: "Refine, package, and brand palm oil for domestic retail. Every Nigerian and Ghanaian kitchen uses palm oil. Branded domestic products earn 3–5x commodity export prices.",
      },
      {
        name: "Palm Kernel Oil Beauty Products",
        startup_cost: "$2,000–$10,000",
        description: "Palm kernel oil is separate from palm oil and is used in skin and hair care. It is an African beauty ingredient used for centuries. Build a brand around it.",
      },
    ],
    suppliers_and_inputs: "Fresh fruit bunches: local palm farmers, smallholder networks. Processing equipment: palm oil mills (imported or locally fabricated). Storage: stainless tanks. Transport: road logistics.",
    markets: "LOCAL: Every household in West Africa uses palm oil. REGIONAL: East Africa imports palm. EXPORT: EU and US food manufacturing, certified sustainable palm market.",
    africans_doing_it: "Okomu Oil Palm Company (Nigeria): publicly listed Nigerian palm oil company. Presco PLC (Nigeria): Nigerian palm oil manufacturer. SOCAPALM (Cameroon): Cameroon's largest palm oil company. Several thousand smallholder processors operate across West and Central Africa.",
    historical_note: "Palm oil has been produced in West and Central Africa for at least 5,000 years. It was used as cooking fat, lamp oil, medicine, and cosmetics. British colonial companies — particularly the United Africa Company, a subsidiary of Unilever — built their entire fortune on West African palm oil, extracted under colonial pricing systems that prevented African producers from earning fair value. When Unilever needed a cheaper source, British colonial administrators transplanted palm oil to Malaysia and built a Southeast Asian industry to replace African producers. This was a deliberate business decision that transferred an African industry to Asia. The continent that created palm oil lost its industry to a company that used that industry's profits to build the world's largest consumer goods company.",
    first_step: "If you are in a palm-growing region: find the nearest fresh fruit bunch seller. Ask the price per tonne. Find the nearest processing mill. Ask what they pay per tonne. Find out what refined palm oil sells for in your nearest market. The difference at each step is margin. Find where the gap is biggest. That is where you enter.",
  },

  {
    id: "fishing-fisheries",
    commodity: "Fisheries & Seafood",
    emoji: "🐟",
    countries: ["Senegal", "Ghana", "Mozambique", "Tanzania", "Mauritania", "Morocco", "Nigeria", "Kenya"],
    the_truth: "African coastal and inland waters contain some of the world's richest fishing grounds. But European and Chinese fishing fleets operate off Africa's coasts under licensing agreements that allow them to extract fish that Africans don't see on their plates or in their export revenues. Senegal has seen its artisanal fishing communities devastated by EU industrial fishing fleets that catch more in one hour than a local fisherman catches in a week. Chinese fishing boats operate off West and East African coasts, frequently in violation of licensing terms. The fish is caught off African shores, processed in China or Europe, and sold globally. Africa earns licensing fees — far below the value of the fish caught.",
    what_exists: "Senegal's Atlantic coast is one of West Africa's richest fishing zones. Ghana's coastline. Mozambique's Indian Ocean coast. Tanzania's Lake Victoria and Indian Ocean. Morocco's Atlantic waters. Kenya and Tanzania have both coastal and inland fisheries. Artisanal fishing communities have existed along these coasts for thousands of years with sophisticated traditional knowledge of fish populations, seasons, and sustainable fishing.",
    who_profits: "EU fishing fleets (particularly Spanish and French): operate under Fisheries Partnership Agreements with West African governments, paying fees that are widely considered below market value. Chinese fishing fleets: accused of over-fishing and IUU (illegal, unreported, unregulated) fishing across African waters. Fish processing companies in China and the EU: import African fish, process, and sell globally.",
    annual_value: "$24B value of fish caught in African waters annually. Amount retained in Africa as processing and export revenue: under 30%. If Africa processed and exported its own catch at retail value, the industry could be worth $50B+ annually.",
    the_gap: "Raw fish at beach: $0.50–$2 per kg (artisanal catch). Frozen processed fish: $3–$8 per kg. Smoked, canned, or dried fish: $4–$15 per kg. Fish meal (for animal feed): $1,200–$2,000 per tonne. Value-added processing multiplies revenue 5–15x.",
    businesses_to_build: [
      {
        name: "Fish Processing & Cold Storage",
        startup_cost: "$10,000–$80,000",
        description: "Buy fresh catch, freeze and process for domestic and export markets. Cold chain infrastructure for fish is almost entirely missing in West Africa — this is the bottleneck.",
      },
      {
        name: "Smoked/Dried Fish Brand",
        startup_cost: "$1,000–$5,000",
        description: "Traditional smoked fish with modern packaging and quality standards. Sell to urban supermarkets, diaspora export markets. West African smoked catfish is a luxury ingredient in UK African grocery stores.",
      },
      {
        name: "Aquaculture Farm",
        startup_cost: "$5,000–$50,000",
        description: "Fish farming (tilapia, catfish, shrimp) to supplement declining wild catches. Kenya, Ghana, and Nigeria have growing aquaculture sectors. Tilapia demand in Africa is growing 8% annually.",
      },
    ],
    suppliers_and_inputs: "Fish: local fishing communities, artisanal boats, coastal markets. Ice and cold storage: local ice plants or solar-powered cold storage. Processing equipment: gutting tools, smokers, dryers, canning lines. Packaging: sealed plastic for fresh, vacuum bags for dried/smoked.",
    markets: "LOCAL: African households are the primary consumers of fish. REGIONAL: Landlocked countries import all their fish. EXPORT: Japanese and Korean markets for dried seafood. EU market for sustainable-certified African fish. US diaspora market for smoked and dried African fish varieties.",
    africans_doing_it: "Samaki (Kenya): aquaculture and fish processing. AquaFarms Ghana: tilapia aquaculture. Victoria Fish (Uganda): Lake Victoria fisheries company. Several West African fishing cooperatives are beginning to process for export rather than selling raw catch.",
    historical_note: "Senegalese lebu fishing communities have fished the Atlantic coast for centuries with sophisticated knowledge of fish populations, currents, and seasonal patterns. The Ijaw people of Nigeria's Niger Delta were expert fishermen before oil was discovered. East Africa's coastal Swahili communities built their civilization partly on Indian Ocean fishing and trade. Colonial powers monetized African fish as a commodity export rather than a processed product — fish went to European canneries in the colonial period, came back as tinned sardines for African consumers. After independence, European fleets negotiated new access arrangements that continued the extraction model. The EU's own scientific assessments acknowledge that fishing agreements with West African countries are not fair to African countries. The value extracted from African waters is one of the least-publicized dimensions of Africa's continuing economic disadvantage.",
    first_step: "If you live near a coast or lake: find the nearest fish landing site. Watch the trading. Ask the prices. See what happens to the fish that doesn't sell — does it rot? Could it be smoked, dried, or frozen? Find one solution to one step in the chain. That is your business.",
  },

];

export function getOpportunityById(id: string): HiddenOpportunity | undefined {
  return HIDDEN_OPPORTUNITIES.find((o) => o.id === id);
}

export function getOpportunitiesForCountry(country: string): HiddenOpportunity[] {
  return HIDDEN_OPPORTUNITIES.filter((o) => o.countries.includes(country));
}
