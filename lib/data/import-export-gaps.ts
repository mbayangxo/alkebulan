// How dependent African countries are on imports — and what they're sitting on that
// the rest of the world is selling back to them.

export interface CountryTradeProfile {
  country: string;
  country_code: string;
  import_dependency_summary: string;
  total_imports_usd: string;
  total_exports_usd: string;
  export_to_import_ratio: string;
  what_we_import_that_we_shouldnt: {
    product: string;
    annual_import_value: string;
    why_absurd: string;
    what_we_have_instead: string;
    opportunity: string;
  }[];
  pharmaceuticals: {
    import_value: string;
    dependency_percent: string;
    what_africa_has: string;
    who_owns_the_market: string;
    african_opportunity: string;
  };
  top_raw_exports: {
    product: string;
    annual_value: string;
    who_processes_it: string;
    processed_value: string;
    the_loss: string;
  }[];
  the_verdict: string;
}

export const COUNTRY_TRADE_PROFILES: CountryTradeProfile[] = [
  {
    country: "Senegal",
    country_code: "SN",
    import_dependency_summary: "Senegal imports approximately 70–80% of the rice it eats, nearly all of its cooking oil, most of its wheat, and 100% of its pharmaceuticals — despite having world-class fishing waters, premium rice-growing land in Casamance, fertile groundnut basin, and the Sahel's richest cattle corridors in Linguère. The country sells the world its fish, its groundnuts, its phosphates — and buys back processed oil, packaged food, and medicine.",
    total_imports_usd: "$8.2 billion/year",
    total_exports_usd: "$3.4 billion/year",
    export_to_import_ratio: "For every $2.40 Senegal imports, it only earns $1 from exports",
    what_we_import_that_we_shouldnt: [
      {
        product: "Packaged rice — mostly Thai and Vietnamese jasmine rice",
        annual_import_value: "$350–$450 million/year",
        why_absurd: "The Casamance region in southern Senegal grows premium jasmine rice that experts say rivals Thai jasmine quality. Yet 80% of rice eaten in Dakar is imported from Asia. Local rice is sold in bulk with no packaging at below-market prices while Thai rice sits on Auchan shelves for 3× the price.",
        what_we_have_instead: "Casamance has 80,000+ hectares of irrigated rice fields. The soil and climate are ideal. The gap is milling, packaging, and branding.",
        opportunity: "Package Casamance jasmine rice in 1kg and 5kg retail bags. Sell in Dakar supermarkets (Auchan, Prix, Casino) at the same price as Thai rice. Export to the French Senegalese diaspora on Amazon France and in Château Rouge market Paris — where packaged 'authentic Casamance rice' would command a premium.",
      },
      {
        product: "Cooking oil — palm oil and soybean oil from Europe and Asia",
        annual_import_value: "$200–$280 million/year",
        why_absurd: "Senegal is the Peanut Basin — one of the world's historically important groundnut-producing regions. Senegalese peanut oil (huile d'arachide) is richer and more flavourful than industrial palm oil. Yet industrial palm oil is imported from Malaysia and sold in Auchan while Senegalese groundnut farmers sell raw nuts at commodity price.",
        what_we_have_instead: "600,000+ tons of groundnuts produced annually in the Peanut Basin (Kaolack, Kaffrine, Diourbel). Local cold-press oil production has been proven by small artisan producers.",
        opportunity: "Cold-pressed artisan groundnut oil, bottled with proper labeling, sold as 'Sénégal Premium Peanut Oil' in Dakar restaurants, hotels, and supermarkets. Export to West African diaspora in France as a premium cooking oil.",
      },
      {
        product: "Dairy products — imported milk powder, yogurt, butter from Europe",
        annual_import_value: "$150–$200 million/year",
        why_absurd: "The Fulani (Peul) herders of Linguère and the Ferlo region in northern Senegal manage hundreds of thousands of cattle. During the rainy season (July–October), cows produce so much milk that herders literally cannot collect it fast enough — calves drink what they can, and the rest is lost. Meanwhile, Dakar supermarkets sell European butter, Dutch milk powder, and French UHT milk.",
        what_we_have_instead: "The Fulani do not throw the milk away carelessly — the problem is they have no infrastructure to preserve it. Without refrigeration, fresh milk spoils in 4–6 hours in Linguère's heat. If you don't milk the cow regularly, it's painful for the animal and affects future milk production. The milk is there. The problem is collection and cold chain.",
        opportunity: "Mobile pasteurization unit ($5,000–$15,000) traveling the Ferlo circuit. Collect milk from 50 Fulani herders. Pasteurize on-site. Sell fresh pasteurized milk to Dakar within 24 hours. This is exactly what Laiterie du Berger built — they raised $10M doing this. The model is proven and replicable.",
      },
      {
        product: "Canned and smoked fish — sardines from Morocco, tuna from Spain and Thailand",
        annual_import_value: "$80–$120 million/year",
        why_absurd: "Senegal has one of the richest fishing zones in the world — the Atlantic coast from Dakar to Saint-Louis. Thiès and Kayar are among West Africa's most productive fishing ports. And yet European (French, Spanish) and Asian fleets pay licensing fees to fish Senegalese waters, process the catch on their ships or in their factories, and sell canned products back to Senegalese consumers.",
        what_we_have_instead: "Kayar alone lands 50,000+ tons of fish per year. Most is sold fresh or as dried linguère. No industrial canning operation exists in Senegal.",
        opportunity: "Artisanal canned thiof (grouper) and sardines from Kayar and Saint-Louis. The process: heat-treat in jars or cans, seal, label. Sell to Dakar restaurants, hotels, and supermarkets as 'Pêché au Sénégal.' Export canned Senegalese sardines to the French diaspora market and specialty food stores in Paris.",
      },
      {
        product: "Packaged biscuits and confectionery — mostly from France and Morocco",
        annual_import_value: "$60–$90 million/year",
        why_absurd: "Senegal imports biscuits and packaged sweets from LU (France), Bimo (Morocco), and Asian manufacturers. Yet Senegal has millet, groundnuts, hibiscus, and baobab — the natural ingredients for uniquely Senegalese snacks that no French company can authentically make.",
        what_we_have_instead: "Millet is grown across Senegal and is more nutritious than refined wheat flour. Groundnuts are everywhere. Bissap is dried in bulk. Bouye (baobab) is harvested from trees that have no owners.",
        opportunity: "Branded Senegalese snack range: millet biscuits, groundnut energy bars, bouye power balls. For local supermarkets and school canteens. Export to the French diaspora who misses the taste of home.",
      },
    ],
    pharmaceuticals: {
      import_value: "$300–$350 million/year",
      dependency_percent: "95%+ of all medicines are imported",
      what_africa_has: "Senegal has a small but growing pharmaceutical industry — Pharmacie Nationale d'Approvisionnement (PNA) and SIMED manufacture some generics. The country has mangoes, moringa, neem, hibiscus, and other plants with proven medicinal properties used in traditional medicine for centuries.",
      who_owns_the_market: "India (generics), France (branded drugs), Belgium (vaccines), USA (specialty drugs). The PNA distributes but does not manufacture most products.",
      african_opportunity: "Generic drug manufacturing for the West African market. Senegal could become the pharmaceutical hub for ECOWAS (15 countries, 400M people). WAEMU zone harmonized pharmaceutical regulation makes cross-border sales easier. The government has made this a priority — FONSIS has pharmaceutical investment programs. Plant-based medicine (traditional pharmacopoeia) is an underexplored export for the wellness market: moringa supplements, neem toothpaste, bissap health products.",
    },
    top_raw_exports: [
      {
        product: "Phosphate rock",
        annual_value: "$200–$250M",
        who_processes_it: "France (Roullier Group), Morocco (OCP), China — buy the rock, produce fertilizer, sell fertilizer back to Senegalese farmers",
        processed_value: "Phosphate fertilizer: 10–15× the raw rock value",
        the_loss: "Senegal sits on one of the world's largest phosphate deposits (Matam, Thiès). It exports the raw rock and imports the processed fertilizer at 10× the price. ICS (Industries Chimiques du Sénégal) processes some locally but most is raw export.",
      },
      {
        product: "Groundnuts (raw peanuts)",
        annual_value: "$150–$200M",
        who_processes_it: "China, France, Netherlands — they press the oil and sell it globally",
        processed_value: "Groundnut oil: 4–6× the raw nut value. Premium artisan cold-pressed oil: 10–15×",
        the_loss: "Senegal was once the world's top groundnut exporter. Oil mills collapsed after structural adjustment in the 1980s. Now raw nuts are exported while processed oil returns at premium price.",
      },
      {
        product: "Fish — mostly sold to European and Asian fleets at license price",
        annual_value: "$500–$700M (including Chinese/EU fleet licenses)",
        who_processes_it: "China, Morocco, Spain, France — process at sea or in their factories",
        processed_value: "Canned fish, frozen fish fillets, fish oil — 3–8× the raw fish value",
        the_loss: "Senegal's Exclusive Economic Zone (EEZ) is one of the richest fishing zones on the Atlantic. European and Chinese fleets pay license fees — a fraction of the catch value. Most processing happens outside Senegal.",
      },
    ],
    the_verdict: "Senegal is rich on paper and poor in practice because it adds zero value to almost everything it produces. The fish in your piment goes through a Chinese freezer before it comes back to Dakar. The groundnut oil in your shop came from the Netherlands. The rice in your thiéboudienne came from Thailand. Every link where someone else processes, packages, or brands Senegalese raw materials is a job and a margin that should belong to a Senegalese family.",
  },

  {
    country: "Nigeria",
    country_code: "NG",
    import_dependency_summary: "Nigeria, Africa's largest economy and most oil-rich nation, imports over $25 billion in food every year — including wheat for bread, rice, cooking oil, sugar, and fish — while being the world's largest cassava producer, a top palm oil producer, and Africa's biggest market. It exports crude oil and buys back refined petrol at higher prices. It grows moringa everywhere and imports it as supplements from India.",
    total_imports_usd: "$55 billion/year",
    total_exports_usd: "$46 billion/year (90% crude oil)",
    export_to_import_ratio: "Nigeria exports but almost everything exported is unprocessed crude oil. Non-oil exports are less than $3 billion — meaning almost no value is added to Nigerian products before they leave.",
    what_we_import_that_we_shouldnt: [
      {
        product: "Wheat and wheat flour — for bread, noodles, and pastries",
        annual_import_value: "$2.0–$2.5 billion/year",
        why_absurd: "Nigeria spends more on wheat flour imports than any other African country, despite having cassava — a root crop that can substitute wheat flour in bread (cassava-wheat blend, 40% cassava, requires government-backed certification) and that Nigeria produces 60 million tons of per year.",
        what_we_have_instead: "Nigeria is the world's largest cassava producer. Cassava flour is a direct wheat substitute for baked goods. The Nigerian government has a 40% cassava flour inclusion mandate for bread — but enforcement is weak because local cassava flour processing capacity is limited.",
        opportunity: "Cassava flour processing and supply to bakeries. A mill processing 10 tons/day can supply 200+ bakeries. The Federal Ministry of Agriculture supports this. BOI (Bank of Industry) has agro-processing loan products specifically for cassava value addition.",
      },
      {
        product: "Fish — frozen fish from Russia, Norway, Iceland",
        annual_import_value: "$1.0–$1.5 billion/year",
        why_absurd: "Nigeria has the Atlantic coast to the south, Lake Chad to the north, and the Niger and Benue rivers running through the country — some of Africa's richest freshwater and coastal fisheries. Yet imported frozen fish (mackerel, herring) dominates the market because domestic fish processing cannot meet urban demand.",
        what_we_have_instead: "Nigeria's artisanal fish catch is 700,000+ tons/year. The problem is post-harvest loss — 30–50% of fish spoils before reaching markets without adequate cold chain. A third of what Nigeria imports is fish that Nigeria's own waters produce but Nigeria's infrastructure cannot preserve.",
        opportunity: "Cold storage and ice supply at fishing ports. Small fish processing and packaging (smoked fish, dried fish, canned fish). The fish is there — the infrastructure gap is the business.",
      },
      {
        product: "Palm oil — semi-refined and refined, from Malaysia and Indonesia",
        annual_import_value: "$300–$500 million/year",
        why_absurd: "Nigeria was the world's largest palm oil producer until the 1970s. Malaysian palm oil companies got their seedlings from Nigeria, built modern plantations, and now sell processed palm oil back to Nigeria at premium prices.",
        what_we_have_instead: "Nigeria still produces 1.5 million tons of palm oil per year but most is processed by small artisan mills with poor quality control. The Cross River and Edo state palm belts are vast. The problem is consistent quality and industrial processing capacity.",
        opportunity: "Small-scale modern palm oil mill with quality certification. Supply Shoprite, Spar, and Hubmart supermarkets with branded Nigerian palm oil. The premium product market (organic, artisan, red palm oil for health market) is growing in the US and UK.",
      },
      {
        product: "Tomato paste — from China and Italy",
        annual_import_value: "$300–$400 million/year",
        why_absurd: "Nigeria is Africa's largest fresh tomato producer — 2.5 million tons per year. But 50% of all tomatoes rot before reaching the market due to lack of processing infrastructure. Meanwhile, Nigeria imports tomato paste from China (made partly from Nigerian tomato concentrate re-exported to China) at $300M+ per year.",
        what_we_have_instead: "Fresh tomatoes — in abundance. Kano and Kaduna grow most of Nigeria's tomatoes. The problem: no tomato processing factories near the farms.",
        opportunity: "Small tomato processing facility near Kano farming zones. Tomato paste, sundried tomatoes, tomato powder. The Dangote Group tried this at scale and faced problems — but small-scale processing near farms is proven to work. Government has provided incentives through the Tomato Industrial Zone in Kano.",
      },
    ],
    pharmaceuticals: {
      import_value: "$1.8–$2.2 billion/year",
      dependency_percent: "70–80% of all medicines are imported",
      what_africa_has: "Nigeria has NAFDAC (regulatory body) and a small domestic pharma sector — Emzor, Neimeth, Swiss Pharma. Nigeria also has massive moringa production in the north, neem trees everywhere, and traditional healers who know the Nigerian pharmacopoeia.",
      who_owns_the_market: "India (50% — Cipla, Sun Pharma, Ranbaxy generics), France and Belgium (branded drugs), USA and UK (specialty and patented drugs), China (active pharmaceutical ingredients — APIs)",
      african_opportunity: "Nigeria is the largest pharmaceutical market in sub-Saharan Africa ($2.5B). A local generic manufacturer serving the 200M+ population with NAFDAC-certified generics (paracetamol, amoxicillin, metformin, artemether for malaria) can capture enormous market share. Moringa supplements and neem-based health products for the export wellness market are achievable at $300–$500 startup.",
    },
    top_raw_exports: [
      {
        product: "Crude petroleum",
        annual_value: "$35–$45 billion",
        who_processes_it: "European, American, and Chinese refineries",
        processed_value: "Refined petrol, diesel, jet fuel: 2–3× crude price",
        the_loss: "Nigeria exported $40B of crude oil in 2022 and spent $10B importing refined petroleum products it could have made domestically. Dangote Refinery (650k bbl/day) will change this — but the 60-year gap represents hundreds of billions of dollars extracted.",
      },
      {
        product: "Cocoa beans",
        annual_value: "$400–$600M",
        who_processes_it: "Netherlands (Cargill), Germany (Barry Callebaut), USA (Mars, Hershey)",
        processed_value: "Chocolate, cocoa powder, cocoa butter: 8–20× raw bean price",
        the_loss: "Nigeria is the world's 4th largest cocoa producer. Almost none is processed domestically. Barry Callebaut's SACO Ivory Coast facility processes West African cocoa — in Côte d'Ivoire, not Nigeria.",
      },
    ],
    the_verdict: "Nigeria produces the world's most cassava, grows moringa everywhere, has among Africa's richest fishing waters, and sits on billions of barrels of oil — and still spends $25 billion buying food from abroad. The problem is not resources. The problem is processing, packaging, and distribution. Every link in that chain is a business that doesn't exist yet.",
  },

  {
    country: "Ghana",
    country_code: "GH",
    import_dependency_summary: "Ghana produces cocoa for 70% of the world's chocolate and gold for luxury jewellery globally — and imports finished chocolate, gold jewellery, and cosmetics from Switzerland, Belgium, and France. It processes almost none of its own cocoa into chocolate. It exports timber and imports furniture. It grows plantain but imports plantain chips from Latin America.",
    total_imports_usd: "$15 billion/year",
    total_exports_usd: "$15 billion/year (but 95% is gold, cocoa, and oil — all raw)",
    export_to_import_ratio: "Ghana exports about as much as it imports in dollar terms, but what it exports is raw and what it imports is processed. The value multiplier gap is enormous.",
    what_we_import_that_we_shouldnt: [
      {
        product: "Finished chocolate and confectionery — Swiss, Belgian, UK brands",
        annual_import_value: "$40–$60 million/year",
        why_absurd: "Ghana produces 20% of the world's cocoa. Swiss and Belgian companies send finished chocolate to Ghanaian supermarkets (Shoprite, MaxMart, Game) at $4–$20 per bar while Ghanaian farmers earn $2–$3 per kg for the raw beans used to make those bars. Lindt Excellence 100g retails for $4.50 in Ghana — made from Ghanaian cocoa.",
        what_we_have_instead: "The cocoa. COCOBOD certification. Growing artisan chocolate scene in Accra (Fairafric, Niche Cocoa, Chocolate Ghana).",
        opportunity: "Origin chocolate bars. 'Made in Ghana from Ghanaian cocoa' is a powerful differentiator for the European and US market. EU deforestation regulation (2023) now requires traceable supply chains — creating direct buyer relationships for Ghanaian chocolate brands. Fairafric already sells Ghanaian-made chocolate in German supermarkets.",
      },
      {
        product: "Shea butter cosmetics — imported from France, USA, UK",
        annual_import_value: "$20–$40 million/year",
        why_absurd: "Northern Ghana (Tamale, Bolgatanga) is in the global shea belt — one of the world's most productive shea regions. Most shea is exported raw to Europe and returned as The Body Shop or SheaMoisture products at 80× the raw price.",
        what_we_have_instead: "Raw shea kernels, traditional shea processing knowledge, Northern Ghana women's cooperatives that have been extracting shea for generations.",
        opportunity: "Refined shea butter products: body butter, lip balm, hair treatment, baby care. Sell locally to Shoprite and Koala Supermarket. Export to UK and US on Amazon and Etsy.",
      },
      {
        product: "Rice — from USA, Thailand, Vietnam, India",
        annual_import_value: "$500–$600 million/year",
        why_absurd: "Ghana has the Volta River basin and irrigation infrastructure. Upper East region produces local rice. Yet 70% of rice consumed is imported. USAID and the Ghanaian government have been subsidizing US rice imports since the 1990s.",
        what_we_have_instead: "Local rice varieties grown in northern Ghana and the Volta region.",
        opportunity: "Branded packaged local Ghana rice — 'Volta Gold' or 'Northern Harvest' — sold in Accra supermarkets at a slight premium to imported rice with a 'Buy Ghana, Grow Ghana' story.",
      },
    ],
    pharmaceuticals: {
      import_value: "$350–$450 million/year",
      dependency_percent: "80%+ imported",
      what_africa_has: "Ghana has FDA (Food and Drugs Authority) and a small domestic pharma sector: Ernest Chemists, GIHOC Pharmaceuticals. Ghana has moringa, neem, shea (used in skin medicine), aloe vera, and traditional herbal medicine recognized by the government's CSIR.",
      who_owns_the_market: "India (generics), France and Belgium (branded), China (APIs — active pharmaceutical ingredients)",
      african_opportunity: "Herbal medicine export: Ghanaian government's CSRPM (Centre for Scientific Research into Plant Medicine) has documented and standardized hundreds of local plant medicines. Scaling these as supplements for the European and US wellness market is achievable. NEIP (National Entrepreneurship Innovation Programme) has pharma and health innovation funding.",
    },
    top_raw_exports: [
      {
        product: "Cocoa beans",
        annual_value: "$2.0–$2.5 billion",
        who_processes_it: "Netherlands, Germany, USA, Belgium — all the world's major chocolate companies",
        processed_value: "Chocolate: $45–$200/kg vs $2.50/kg raw",
        the_loss: "Ghana earns $2.50/kg. A bar of Lindt made from Ghanaian cocoa earns $45/kg. That 18× gap is $35+ per kg that leaves Ghana every year.",
      },
      {
        product: "Gold",
        annual_value: "$5.0–$7.0 billion",
        who_processes_it: "Swiss refineries (Valcambi, Argor-Heraeus, PAMP), UAE refineries, then sold to Cartier, Tiffany, Pandora",
        processed_value: "Gold jewelry: $35–$200/gram vs $60/gram raw gold — but with the craftsmanship premium",
        the_loss: "Ghana's artisan goldsmithing tradition (Akan goldweights, kente gold ornaments) goes back 700 years. But Accra's gold mostly goes to Swiss refineries, not Ghanaian jewellers.",
      },
    ],
    the_verdict: "Ghana grows the cocoa. Switzerland makes the chocolate. Ghana produces the shea. France makes the body butter. Ghana mines the gold. Switzerland refines it and Italy makes the jewellery. The pattern is the same across every Ghanaian export. The country supplies the raw material and the world supplies the value-added product — and sells it back to Ghana at 10–100× the cost.",
  },

  {
    country: "Kenya",
    country_code: "KE",
    import_dependency_summary: "Kenya grows the world's finest coffee and tea — and drinks instant Nescafé made in Switzerland. It produces avocados for export to Europe and imports avocado oil from Chile. It's one of Africa's most fertile countries and imports $2B in food every year. Kenya's export strengths are massive but almost all are raw materials — tea leaves, coffee beans, cut flowers — processed abroad and sold globally at huge markups.",
    total_imports_usd: "$20 billion/year",
    total_exports_usd: "$6.5 billion/year",
    export_to_import_ratio: "Kenya imports $3 for every $1 it exports — a chronic trade deficit that keeps the shilling weak",
    what_we_import_that_we_shouldnt: [
      {
        product: "Instant coffee (Nescafé, Jacobs) — made in Switzerland and Germany",
        annual_import_value: "$30–$50 million/year",
        why_absurd: "Kenyan Nyeri and Kirinyaga AA arabica is among the world's 5 most prized coffees. Blue Bottle, Starbucks, and Peet's pay $20–$40 for 250g of roasted Kenyan beans. Yet Kenyan supermarkets (Naivas, Quickmart, Carrefour) sell Nescafé instant — made in Europe from commodity Robusta — instead of local roasted Kenyan specialty coffee.",
        what_we_have_instead: "Kenya has the finest arabica in the world. Nairobi has a growing specialty coffee café scene. The Kenya Coffee Directorate regulates export but also supports domestic branding.",
        opportunity: "Direct-to-consumer roasted Kenyan specialty coffee: subscriptions for the diaspora, Amazon gourmet food listings, Naiva supermarket's premium shelves. Kerchanshe (Ethiopia) has shown that African-origin branded coffee sells globally. Kenya can do the same.",
      },
      {
        product: "Avocado oil — from Mexico and Chile",
        annual_import_value: "$10–$20 million/year",
        why_absurd: "Kenya is one of the world's top 5 avocado producers — Murang'a and Meru counties produce Hass avocados year-round. The avocado is exported raw to Europe for $0.50–$1.50 per fruit. Cold-pressed avocado oil made from that same fruit retails for $12–$25 per 100ml in Holland & Barrett (UK). Mexico and Chile have built $1B+ avocado oil industries using this arbitrage.",
        what_we_have_instead: "Murang'a county has the highest concentration of Hass avocado trees in the world per capita. There is no industrial avocado oil pressing facility in Kenya.",
        opportunity: "Cold-pressed avocado oil plant near Murang'a. Food-grade for cooking, cosmetic-grade for hair and skin. Sell to Holland & Barrett UK, Amazon UK, and European organic food distributors.",
      },
      {
        product: "Cooking oil — palm oil from Malaysia, sunflower oil from Ukraine",
        annual_import_value: "$200–$300 million/year",
        why_absurd: "Kenya has avocado oil, coconut oil, sunflower oil from Rift Valley farming — and still imports most cooking oil.",
        what_we_have_instead: "Sunflower is grown in Kitale and Trans Nzoia. Coconut in Kwale and Kilifi coastal counties. Avocado everywhere in central Kenya.",
        opportunity: "Local cold-pressed sunflower and coconut oil — branded for supermarket shelves. Naivas, Quickmart, and Carrefour Kenya.",
      },
    ],
    pharmaceuticals: {
      import_value: "$500–$600 million/year",
      dependency_percent: "75%+ imported",
      what_africa_has: "Kenya has the Kenya Medical Supplies Agency (KEMSA) which distributes but doesn't manufacture. There is Cosmos Pharmaceuticals (Kenyan-owned), Universal Corporation. Kenya also has aloe vera (Coast), moringa, neem, and a strong traditional herbal medicine sector.",
      who_owns_the_market: "India (generics), France and Germany (branded), China (APIs), USA (specialty drugs)",
      african_opportunity: "Kenya as the pharmaceutical hub for East Africa. COMESA (Common Market for Eastern and Southern Africa) gives Kenyan manufacturers tariff-free access to 21 countries and 560M people. KIRDI (Kenya Industrial Research Development Institute) supports pharmaceutical manufacturing startups.",
    },
    top_raw_exports: [
      {
        product: "Tea (bulk — not packaged)",
        annual_value: "$1.0–$1.3 billion",
        who_processes_it: "UK (Unilever — Lipton, PG Tips), US (Tetley), Germany (various) — buy bulk tea, package in European factories with UK/US brand names",
        processed_value: "Packaged branded tea: 4–8× bulk tea price",
        the_loss: "Kenya is the world's #1 tea exporter by value. But it exports bulk — not branded, not packaged. Lipton buys Kenyan tea at $2–$3/kg and sells PG Tips teabags at $12–$20/kg equivalent. Kenyan brand Kericho Gold is an exception — it packages in Kenya and exports.",
      },
      {
        product: "Cut flowers (raw stems)",
        annual_value: "$700–$900 million",
        who_processes_it: "Netherlands (Royal FloraHolland auction) — Kenya's flowers go to Amsterdam, are sorted and auctioned, then sold to European retailers. The Dutch add the margin of sorting, auction, branding, and retail.",
        processed_value: "Retail bouquet: 3–5× the stem price paid to Kenyan growers",
        the_loss: "Kenya grows 40% of all flowers sold in the EU. They all go through a Dutch auction house. A Dutch company takes the margin between what Kenyan farms earn and what European retailers pay.",
      },
    ],
    the_verdict: "Kenya grows the world's best coffee, tea, avocados, and flowers — and barely processes any of them. Switzerland sells Nescafé to Kenyans made from their own coffee. The Netherlands auctions Kenyan flowers and keeps the margin. The UK sells Kenyan tea as Lipton. Every Kenyan export is a business that someone else built on Kenyan raw materials.",
  },

  {
    country: "Morocco",
    country_code: "MA",
    import_dependency_summary: "Morocco controls the world's largest phosphate reserves, produces near-monopoly argan oil, grows world-class saffron and roses, and mines cobalt — and still imports $60B of goods per year while exporting mostly raw materials. European beauty companies source Moroccan argan, rose, and ghassoul clay, process them in French and Spanish factories, and sell the finished products back to Moroccan consumers.",
    total_imports_usd: "$62 billion/year",
    total_exports_usd: "$38 billion/year",
    export_to_import_ratio: "$1.60 imported for every $1 exported",
    what_we_import_that_we_shouldnt: [
      {
        product: "Cosmetics and beauty products — mostly French and Spanish brands",
        annual_import_value: "$600–$800 million/year",
        why_absurd: "Morocco has near-monopoly on argan oil. It has the roses of Kelaat M'Gouna (Rose Valley) — some of the world's finest rose water and rose essential oil. It has ghassoul clay (unique mineral clay used in hammams and high-end beauty spas). It has saffron from Taliouine — one of the world's top saffron varieties. Every ingredient for a world-class beauty brand comes from Moroccan soil. Yet Moroccan women buy L'Oréal and Yves Rocher from France.",
        what_we_have_instead: "Everything. Argan trees that grow nowhere else in the world. Rose Valley with 3,000 tons of roses harvested each year. Ghassoul clay mined only in the Atlas Mountains. Taliouine saffron.",
        opportunity: "A Moroccan-made premium beauty brand using argan, rose, ghassoul, and saffron — sold as 'made in Morocco from Morocco.' Sephora and ASOS Marketplace are accessible for Moroccan brands. Amazon EU is wide open. Marjane and Label'Vie supermarkets are the local market.",
      },
    ],
    pharmaceuticals: {
      import_value: "$1.0–$1.3 billion/year",
      dependency_percent: "60% imported — Morocco has one of Africa's best pharma sectors but still depends significantly",
      what_africa_has: "Morocco's Maphar, Cooper Pharma, Galenica, Sothema — some of Africa's most advanced pharmaceutical manufacturers. Morocco exports generic drugs to Francophone Africa. Morocco also has the Taliouine saffron with documented medicinal properties.",
      who_owns_the_market: "France dominates (historical relationship), USA specialty drugs, India generics",
      african_opportunity: "Morocco is already Africa's #3 pharmaceutical exporter. The opportunity is to expand exports to the 54 African countries and develop plant-based medicines (saffron as antidepressant — clinically proven, argan for cardiovascular health) for the global wellness market.",
    },
    top_raw_exports: [
      {
        product: "Phosphate rock and fertilizer",
        annual_value: "$8–$12 billion",
        who_processes_it: "Morocco's OCP Group actually processes much domestically — making it more advanced than most African exporters. But European and Asian buyers still capture distribution margin.",
        processed_value: "Morocco OCP is now vertically integrated to DAP/MAP fertilizer — a model for other African countries",
        the_loss: "OCP is actually an African success story — Morocco captured the processing chain for phosphates. But argan, rose, and saffron are still underprocessed.",
      },
      {
        product: "Argan oil (raw and semi-processed)",
        annual_value: "$30–$50 million",
        who_processes_it: "France, Spain, USA — buy bulk argan, refine, formulate, brand, sell globally",
        processed_value: "Josie Maran Cosmetics alone earns $100M+ per year selling Moroccan argan oil",
        the_loss: "Morocco's entire argan export earns $30–50M per year. Josie Maran alone earns more than all of Morocco's argan oil exports combined — from the same oil.",
      },
    ],
    the_verdict: "Morocco should be the beauty capital of the world. It has argan (monopoly), roses (world-class), saffron (premium), ghassoul (unique), honey (atlas mountains). Instead, French companies source these ingredients, process them in Paris, and sell the products back to Moroccan consumers. The ingredients come from Morocco. The value goes to France.",
  },
];

export interface GlobalExportDominance {
  product: string;
  africa_produces: string;
  africa_export_value: string;
  top_global_exporters: { country: string; annual_export: string; how: string }[];
  why_africa_isnt_dominating: string;
  what_africa_needs: string;
  african_opportunity: string;
}

export const GLOBAL_EXPORT_DOMINANCE: GlobalExportDominance[] = [
  {
    product: "Processed chocolate",
    africa_produces: "70% of world cocoa supply — Ghana (20%), CIV (44%), Nigeria (6%)",
    africa_export_value: "$4–5 billion (raw beans only)",
    top_global_exporters: [
      { country: "Belgium", annual_export: "$4.1 billion", how: "Imports African cocoa, melts, tempers, moulds, brands as 'Belgian chocolate'" },
      { country: "Germany", annual_export: "$3.8 billion", how: "World's largest cocoa processor (Barry Callebaut HQ). Imports beans, processes into couverture and finished chocolate" },
      { country: "Switzerland", annual_export: "$3.1 billion", how: "Lindt, Nestlé, Toblerone — premium branding on African raw material" },
      { country: "USA", annual_export: "$2.3 billion", how: "Hershey, Mars — high volume mass-market chocolate from African beans" },
    ],
    why_africa_isnt_dominating: "Ghana and CIV lack processing capacity (conching, tempering machines). Historical CFA franc zone policy was to export raw commodities to France. No major African chocolate brand has global distribution yet — though Fairafric (Ghana) and Niche Cocoa are building this.",
    what_africa_needs: "Processing facilities, branding, international food safety certification (ISO 22000, FDA, EU), and distribution partnerships in EU and US markets.",
    african_opportunity: "A Ghana-made chocolate bar with origin branding commands premium pricing in European specialty retailers. Fairafric already sells in German dm and Rewe stores. The EU deforestation regulation (2023) creates demand for directly traceable African chocolate.",
  },
  {
    product: "Roasted and packaged coffee",
    africa_produces: "Ethiopia (#1 arabica origin), Uganda (#2 global robusta), Kenya (top AA arabica), Rwanda (specialty), Tanzania",
    africa_export_value: "$3–4 billion (green/unroasted beans)",
    top_global_exporters: [
      { country: "USA", annual_export: "$6.1 billion", how: "Starbucks, Peet's, Caribou — buy African green beans, roast in Seattle/Boston, sell globally" },
      { country: "Germany", annual_export: "$4.8 billion", how: "World's largest coffee re-exporter. Receives green beans, roasts and packages for European market" },
      { country: "Italy", annual_export: "$3.1 billion", how: "illy, Lavazza — premium espresso culture brands built on African (and Brazilian) beans" },
      { country: "France", annual_export: "$2.5 billion", how: "Carte Noire, Grand'Mère — French mass-market coffee brands using African origin" },
    ],
    why_africa_isnt_dominating: "Coffee roasting infrastructure is concentrated in consuming countries. Green beans travel better than roasted (6-month shelf life vs 2 weeks). But this is changing — specialty roasters can export roasted coffee with proper packaging.",
    what_africa_needs: "Roasting equipment (entry level: $3,000–$15,000), nitrogen-flush packaging (keeps roasted coffee fresh 6–12 months), and direct-to-consumer e-commerce to Europe and the US.",
    african_opportunity: "Subscription model: 'Ethiopian Yirgacheffe, roasted at source, delivered to your door.' Kerchanshe (Ethiopia) is building this. Garden of Coffee (Ethiopia) already exports specialty roasted coffee. Kenya's Dormans is a regional leader. The model works — it just needs to scale.",
  },
  {
    product: "Packaged cashews and nut products",
    africa_produces: "Côte d'Ivoire (#1 global, 900K tons), Tanzania (#2), Mozambique, Guinea-Bissau, Ghana, Nigeria — Africa produces 45% of world cashews",
    africa_export_value: "$1.8 billion (raw nuts, mostly to Vietnam and India)",
    top_global_exporters: [
      { country: "Vietnam", annual_export: "$3.6 billion", how: "Imports 60% of world raw cashews, processes in Vietnamese factories, sells globally as 'Vietnamese cashews'" },
      { country: "India", annual_export: "$1.5 billion", how: "Long history of cashew processing, strong global distribution networks" },
      { country: "USA", annual_export: "$1.1 billion", how: "Planters, John B. Sanfilippo — brand and distribute Vietnamese/Indian cashews in US market" },
    ],
    why_africa_isnt_dominating: "CIV exports 90% of its cashews raw. Vietnam built processing capacity in the 2000s and locked in the supply chain. African processing capacity is low due to historical commodity export policies and lack of processing investment.",
    what_africa_needs: "Cashew processing (deshelling, roasting, flavoring, packaging). Small processors can start with manual deshellers ($300–$1,000) and build to semi-automatic equipment ($3,000–$8,000).",
    african_opportunity: "Côte d'Ivoire could supply the EU market directly with CIV-branded cashews. The 'Conseil du Coton et de l'Anacarde' (CIV's cashew authority) has value-addition grants. Air Côte d'Ivoire in-flight snacks are a premium local buyer. A CIV cashew brand in French supermarkets would tell a true origin story that Vietnamese brands cannot.",
  },
  {
    product: "Packaged tea (teabags and specialty tea)",
    africa_produces: "Kenya (#1 global tea exporter), Rwanda, Ethiopia, Tanzania, Malawi, Uganda",
    africa_export_value: "$1.3 billion (mostly bulk)",
    top_global_exporters: [
      { country: "China", annual_export: "$1.8 billion", how: "Green tea and specialty tea — China packages and brands its own product" },
      { country: "UK", annual_export: "$0.7 billion", how: "Unilever (PG Tips, Lipton) buys Kenyan bulk tea, packages in UK factories with UK branding" },
      { country: "Germany", annual_export: "$0.6 billion", how: "Teekanne, Meßmer — branded tea bags with Kenyan and other origins" },
    ],
    why_africa_isnt_dominating: "Historical Brooke Bond (Unilever subsidiary) control of Kenyan tea processing and the Mombasa Tea Auction price-setting mechanism. Most Kenyan farmers sell through the auction at whatever price is set.",
    what_africa_needs: "Direct export licenses bypassing the auction, branded packaging, EU/US market entry.",
    african_opportunity: "Kericho Gold (Kenyan brand) sells packaged tea in Kenya, UK, and internationally. Kenya Tea Development Authority (KTDA) supports direct export. A Rwandan specialty tea brand — Rwanda's high-altitude teas are among Africa's finest — commands premium pricing in specialty tea markets.",
  },
];
