// Deep country intelligence — hyper-local, specific opportunities, named companies, real numbers.
// Each profile goes beyond sector lists to show exactly what's happening on the ground.

export interface LocalResource {
  name: string;
  what_it_is: string;
  current_state: string; // who has it, what's happening
  the_gap: string; // what value is being lost or uncaptured
  businesses: { name: string; cost: string; description: string }[];
  africans_doing_it?: string;
}

export interface ForeignExtraction {
  sector: string;
  company: string;
  what_they_do: string;
  what_africa_gets: string;
  what_you_can_do: string;
}

export interface LocalProblem {
  problem: string;
  scale: string;
  opportunity: string;
  businesses: { name: string; cost: string }[];
  example?: string;
}

export interface LocalBuilder {
  name: string;
  sector: string;
  what: string;
  started_with?: string;
}

export interface Infrastructure {
  name: string;
  what_it_is: string;
  opportunity: string;
  who_can_use_it: string;
}

export interface CountryDeepProfile {
  country: string;
  country_code: string;
  tagline: string;
  opening: string; // narrative intro — the real story of this country
  quick_facts: { label: string; value: string }[];
  resources: LocalResource[];
  foreign_extraction: ForeignExtraction[];
  problems: LocalProblem[];
  infrastructure: Infrastructure[];
  builders: LocalBuilder[];
  vision: string; // what this country will look like when Africans own the opportunity
}

export const COUNTRY_DEEP_PROFILES: CountryDeepProfile[] = [

  // ─── SENEGAL ──────────────────────────────────────────────────────────────
  {
    country: "Senegal",
    country_code: "SN",
    tagline: "A country sitting on salt, oil, fish, and solar energy — most of it owned by others.",
    opening: "Senegal is politically stable, growing, and on the edge of an oil boom. The Sangomar offshore oil field came online in 2024 — Senegal's first oil. Natural gas discoveries are next. The government has built Diamniadio, a full industrial city 30 minutes from Dakar. Wave is the world's fastest-growing mobile money company and was built here. Senegalese fashion is on global runways. Yet the pink lake in Lac Rose sells its salt to French companies who rebrand it at 50x the price. EU fishing fleets extract €300M in fish annually and pay €30M in licensing fees. Groundnuts that once made Senegal famous as the 'peanut republic' leave raw and come back processed. The story of Senegal is the story of a country that has everything and has been convinced to sell it cheap.",
    quick_facts: [
      { label: "Population", value: "17 million (60% under 25)" },
      { label: "GDP", value: "$27B and growing at 8%+ with oil" },
      { label: "Coastline", value: "718km of Atlantic — one of West Africa's richest fishing grounds" },
      { label: "Sunshine", value: "2,800+ hours per year (one of the highest in the world)" },
      { label: "Phosphate", value: "World's 11th largest phosphate producer" },
      { label: "Oil", value: "Sangomar oil field: production started 2024. Yakaar-Teranga gas coming" },
      { label: "Mobile money", value: "Wave: largest mobile money operator, built in Dakar" },
      { label: "Business network", value: "Mouride brotherhood: one of the world's most powerful Muslim business networks" },
    ],
    resources: [
      {
        name: "Lac Rose — The Pink Lake",
        what_it_is: "Lac Retba (Pink Lake) is a salt lake 30km north of Dakar, made famous by its bubble-gum pink color from halophilic algae. It contains 3+ million tonnes of salt and has been harvested artisanally for centuries. Women and men wade into the lake, scoop salt by hand, and coat their skin in shea butter to protect against the salt's corrosive effect.",
        current_state: "Thousands of salt harvesters (many women from Senegal and across West Africa) earn as little as 75–150 FCFA per kg of raw salt ($0.12–$0.25). French, Spanish, and Italian companies import the raw salt and rebrand it as 'Fleur de Sel Africain' or 'Lake Retba Pink Salt' selling at 10–50€ per 250g in European supermarkets. The tourism potential — people paying to see and photograph the lake — is vastly underdeveloped.",
        the_gap: "Raw salt at Lac Rose: 75–150 FCFA/kg ($0.12–$0.25). Branded premium pink salt in European supermarkets: €40–€80/kg. A 200% markup at minimum, often 300–500%. The pink color and the story — which are entirely Lac Rose's — are being sold by European brands who never went to Senegal.",
        businesses: [
          { name: "Lac Rose Premium Salt Brand", cost: "500,000–2M FCFA ($800–$3,500)", description: "Package the pink salt in Senegal. Brand it with the story: the lake, the women harvesters, the shea butter tradition. Sell online, to hotels, to specialty food importers in France, the UK, and the US." },
          { name: "Salt Tourism Experience", cost: "200,000–1M FCFA ($350–$1,800)", description: "Guided tours of Lac Rose, salt harvesting experiences, boat trips on the pink lake. Tourists already visit — charge properly and own the experience." },
          { name: "Cosmetic Salt Products", cost: "300,000–1.5M FCFA ($500–$2,500)", description: "Pink salt scrubs, bath salts, spa products using Lac Rose salt. The Dead Sea has built a billion-dollar cosmetic industry from salt. Lac Rose can do the same." },
          { name: "Artisan Salt Cooperative", cost: "100,000–500,000 FCFA ($175–$900)", description: "Organize 20–50 harvesters into a cooperative, certify the product (fair trade, organic), and sell directly to European buyers at 10x the commodity price." },
        ],
        africans_doing_it: "Some Senegalese cooperatives are beginning to package directly, particularly women's groups supported by UN Women and local NGOs. But a genuinely market-scale branded product doesn't yet exist — this is open territory.",
      },
      {
        name: "Atlantic Fisheries — 718km of Africa's Richest Coastline",
        what_it_is: "Senegal's Atlantic coast is one of the most productive fishing zones in the world, where cold Canary Current upwellings bring nutrient-rich water from the deep. Over 600,000 Senegalese people depend directly on fishing for their livelihood. Traditional pirogues (wooden canoes) operated by the Lebu people and other coastal communities have fished these waters for generations.",
        current_state: "EU fishing fleets — primarily Spanish and French — operate under the EU-Senegal Fisheries Partnership Agreement, paying approximately €30 million per year in fees. Independent estimates suggest these fleets extract €300M–€600M in fish value annually from Senegalese waters. Artisanal fishing communities are being pushed out by industrial trawlers. Overfishing has reduced local catches. The fish that used to feed Senegalese families now goes to European processing plants. Local fishermen are increasingly unable to compete.",
        the_gap: "Raw catch at beach landing: 100–300 FCFA/kg ($0.17–$0.52). Processed and packaged fish in European supermarkets: €5–€15/kg. The processing — gutting, freezing, packaging, branding — happens in Spain, France, and the Netherlands. Senegal is left with the environmental impact of overfishing and none of the processing value.",
        businesses: [
          { name: "Fish Processing & Cold Storage", cost: "5–30M FCFA ($8,500–$52,000)", description: "Buy fresh catch from pirogues. Freeze and process for export. Senegal exports very little processed seafood — almost everything goes raw. A single processing facility changes that." },
          { name: "Premium Smoked Fish Brand", cost: "500,000–2M FCFA ($900–$3,500)", description: "Thiébou dieun (Senegal's national dish) is built on smoked and dried fish. Package it. Brand it. Sell to diaspora in France, Italy, and the US. Senegalese restaurants worldwide need supply." },
          { name: "Aquaculture Farm", cost: "2–15M FCFA ($3,500–$26,000)", description: "Tilapia and catfish aquaculture in ponds or cages along Senegal's rivers and coast. Wild fish stocks are declining. Farmed fish demand will only grow." },
          { name: "Cold Chain Logistics", cost: "5–20M FCFA ($8,500–$35,000)", description: "Refrigerated transport from fish landing sites to Dakar markets and to Dakar airport for export. Almost no cold chain exists outside Dakar. Without cold chain, fish rots before it reaches buyers." },
        ],
        africans_doing_it: "GAIPES (cooperative of artisanal fishing associations). GIE des Femmes Transformatrices (women fish processors). Some individual entrepreneurs are beginning to export directly to the Senegalese diaspora in France.",
      },
      {
        name: "Bissap (Hibiscus) — Senegal's Global Flower",
        what_it_is: "Hibiscus sabdariffa — called bissap in Senegal and sorrel elsewhere — is one of Senegal's most important agricultural products. The dried flower is used to make the national drink (bright red, tart, deeply refreshing), natural dyes, and increasingly sought by the global health food industry for its high antioxidant content and anti-inflammatory properties. Senegal is one of the world's top producers.",
        current_state: "Raw dried bissap leaves Senegal for European and North American buyers who use it in herbal teas, juices, and health supplements. Brands like Celestial Seasonings (US), Lipton (UK), and specialty health food brands sell bissap-based products at $8–$20 per 100g. Senegalese farmers receive a fraction of this. The Senegalese drink bissap — and the world increasingly wants to drink it too — but the money stays outside Senegal.",
        the_gap: "Dried bissap at Dakar market: 1,000–2,000 FCFA/kg ($1.75–$3.50). Premium branded hibiscus tea (10 bags): $8–$15 in US Whole Foods. The global herbal tea market is $4B+. Senegal grows the star ingredient. No major Senegalese brand exists in export markets.",
        businesses: [
          { name: "Premium Bissap Tea Brand", cost: "300,000–1.5M FCFA ($525–$2,600)", description: "Package Senegalese hibiscus in premium biodegradable tea bags with the story of Senegal. Sell online to diaspora and international health food buyers. Target Whole Foods, Amazon, and EU organic retailers." },
          { name: "Bissap Juice Brand", cost: "500,000–2M FCFA ($875–$3,500)", description: "Ready-to-drink hibiscus juice. The flavor is exceptional, the color is stunning, and the health claims (antioxidants, blood pressure support) sell in Western markets. Currently dominated by Jamaican and Mexican brands." },
          { name: "Bissap Beauty Products", cost: "200,000–1M FCFA ($350–$1,750)", description: "Hibiscus-infused skincare — masks, serums, hair oils. Hibiscus is proven to moisturize and brighten skin. African beauty brands using African flowers don't yet exist at scale." },
          { name: "Export Cooperative", cost: "100,000–500,000 FCFA ($175–$875)", description: "Aggregate dried bissap from 20–50 farmers. Certify organic. Export directly to European and US buyers currently buying through French and Dutch brokers." },
        ],
        africans_doing_it: "Some Senegalese women's cooperatives are beginning to package bissap for local market. Sen Jus makes local juices. But the export market is almost entirely uncaptured by Senegalese brands.",
      },
      {
        name: "Groundnuts — Senegal's Oldest Industry, Still Undervalued",
        what_it_is: "Senegal was once called 'the peanut republic' — groundnuts were 80% of export revenues in the colonial era and remain a major crop, particularly in the Groundnut Basin (Bassin Arachidier) of central Senegal. Groundnut oil, groundnut paste, and peanut flour are produced from the crop.",
        current_state: "Raw groundnuts and crude groundnut oil are Senegal's traditional exports. The Société Nationale de Commercialisation des Oléagineux du Sénégal (SONACOS) processes some oil domestically, but a significant portion still leaves as raw nuts or crude oil for processing in France and elsewhere. Premium peanut butter brands in France and the UK use Senegalese groundnuts. Senegalese consumers buy peanut butter imported from Europe.",
        the_gap: "Raw groundnuts: 200–300 FCFA/kg. Premium organic peanut butter (retail, 350g): €5–€10 in French supermarkets. Senegal grows the nut. France makes the butter. France keeps the margin.",
        businesses: [
          { name: "Artisan Peanut Butter Brand", cost: "200,000–1M FCFA ($350–$1,750)", description: "Natural, no-additive peanut butter — plain, spicy, sweet. Sell locally (it is cheaper than imported), to diaspora online, and to health food buyers internationally." },
          { name: "Groundnut Oil Processing", cost: "2–10M FCFA ($3,500–$17,500)", description: "Small-scale cold-press groundnut oil. Premium groundnut oil sells at €8–€15 per litre in European specialty stores. Senegalese farmers receive far less per litre equivalent in raw nuts." },
          { name: "Peanut Snack Brand", cost: "200,000–1M FCFA ($350–$1,750)", description: "Spiced roasted groundnuts, peanut brittle, peanut snack bars. Sold at petrol stations, airports, supermarkets, and online." },
        ],
        africans_doing_it: "SONACOS (state oil company). Patisen (local food company). Many informal peanut butter makers in local markets. No major export-focused Senegalese peanut butter brand exists internationally.",
      },
      {
        name: "Solar Energy — The Sun Is Free, Nobody Has Claimed It",
        what_it_is: "Senegal receives 2,800+ hours of sunshine per year — more than anywhere in Europe, far more than Germany (the world's solar energy leader). SENELEC (the national power utility) regularly fails to meet demand. Load shedding is common outside Dakar. Rural electrification is below 50%. The government's Plan Sénégal Émergent targets 30% renewable energy by 2030.",
        current_state: "SENELEC is building solar plants but progress is slow. Most solar installations are done by foreign companies. The rural 50% without electricity use kerosene lamps and diesel generators — expensive, polluting, and dangerous. Solar technology has dropped 90% in cost in 10 years. The economics of solar in Senegal are better than anywhere in Europe. The market is tens of millions of people.",
        the_gap: "A rural family in Senegal spends 3,000–8,000 FCFA per month on kerosene and phone charging. A basic solar home system (lights, USB charging, small fan) costs 50,000–150,000 FCFA and pays back in 12–18 months. SENELEC charges 100–130 FCFA/kWh. Solar can deliver power for 30–50 FCFA/kWh at scale.",
        businesses: [
          { name: "Solar Installation Company", cost: "1–5M FCFA ($1,750–$8,750)", description: "Install rooftop solar for homes, businesses, schools, and health clinics. Train as a SENELEC-certified installer. Government subsidies available through ASER and Compact Energie." },
          { name: "Solar Kiosk & Phone Charging Business", cost: "200,000–800,000 FCFA ($350–$1,400)", description: "In villages without electricity, a solar panel + battery + phone charging station earns money every day. Everyone needs their phone charged. 100–200 FCFA per charge." },
          { name: "Solar Cold Storage for Fish/Produce", cost: "2–10M FCFA ($3,500–$17,500)", description: "Fishing communities lose 30–40% of catch to spoilage without refrigeration. Solar-powered cold storage at fish landing sites is one of the highest-impact business opportunities in Senegal's fisheries sector." },
          { name: "Solar Irrigation for Farmers", cost: "1–5M FCFA ($1,750–$8,750)", description: "Pump water from rivers and boreholes using solar pumps for dry-season farming. Senegalese farmers growing a second or third crop per year with irrigation earn 2–3x annual income." },
        ],
        africans_doing_it: "ASER (Agence Sénégalaise d'Electrification Rurale) has programmes supporting solar companies. Yeelen Kura (Mali-based but operating in Senegal). Several Senegalese entrepreneurs have started solar installation businesses in Dakar and Thiès.",
      },
      {
        name: "Mangoes of Casamance",
        what_it_is: "Casamance — Senegal's southern region separated from the north by the Gambia — has a wetter, more tropical climate ideal for premium mango production. Casamance mangoes are among the sweetest and most flavorful in West Africa. The region also produces oranges, cashews, palm oil, and rice.",
        current_state: "Casamance mangoes are sold raw at local markets or exported as raw fruit to European wholesalers at very low prices. Post-harvest losses can reach 40% during peak season due to lack of processing and cold chain. A bumper harvest often means mango farmers earn less — not more — because supply overwhelms local demand and prices collapse.",
        the_gap: "Fresh mango at farm gate in Ziguinchor: 50–100 FCFA/kg ($0.09–$0.17). Dried mango slices (100g) in French supermarkets: €3–€6. Premium mango juice (1L bottle): €2.50–€5. Mango chutney at Borough Market London: £4.50 per 200g jar. The same fruit.",
        businesses: [
          { name: "Dried Mango Processing", cost: "300,000–2M FCFA ($525–$3,500)", description: "Solar dryers cost 200,000–500,000 FCFA. Dry excess mango during peak season. Package and export. Burkina Faso and Ghana both export significant dried mango to Europe. Senegal barely does." },
          { name: "Mango Juice Brand", cost: "500,000–3M FCFA ($875–$5,250)", description: "100% Casamance mango juice, bottled and sold in Dakar's hotels and restaurants, then exported. Position it as 'Casamance.' The origin story sells." },
          { name: "Mango Export (Direct to EU buyers)", cost: "500,000–2M FCFA ($875–$3,500)", description: "Certify for EU GlobalGAP standards, connect directly with Dutch, French, or UK fresh produce importers who currently buy Senegalese mangoes through middlemen." },
        ],
        africans_doing_it: "SEPAM (Société d'Exploitation et de Production Agricole au Marché) does some mango export. WIENCO (West African trading network) exports some Senegalese produce. Local dried fruit producers exist but are small scale.",
      },
    ],
    foreign_extraction: [
      {
        sector: "Fishing",
        company: "EU fishing fleets (Spain, France, Greece, Netherlands)",
        what_they_do: "Fish Senegalese waters under the EU-Senegal Sustainable Fisheries Partnership Agreement. Industrial trawlers catch large volumes of fish that traditionally fed Senegalese communities. The agreement pays Senegal approximately €30M per year in access fees.",
        what_africa_gets: "€30M in annual licensing fees. Fish quotas that are frequently exceeded. Environmental impact of industrial trawling on artisanal fishing grounds. Depleted fish stocks that local fishermen depend on.",
        what_you_can_do: "Process fish before export. Build cold chain that captures value locally. Advocate with government for local content requirements in fishing agreements. Build a Senegalese seafood export brand.",
      },
      {
        sector: "Salt",
        company: "French, Spanish, and Italian importers (unnamed trading companies)",
        what_they_do: "Import raw pink salt from Lac Rose. Repackage and rebrand in Europe as 'Lake Retba Pink Salt,' 'Fleur de Sel d'Afrique,' and similar premium names.",
        what_africa_gets: "Commodity salt price: 75–150 FCFA/kg ($0.12–$0.25). The premium branding value stays in Europe.",
        what_you_can_do: "Brand and package the salt in Senegal. Own the story of Lac Rose. Sell directly online and to importers who want certified, origin-authentic product.",
      },
      {
        sector: "Groundnuts",
        company: "Lesieur (France), Oleagineux du Sud (French group), various trading companies",
        what_they_do: "Import raw groundnuts and crude oil for processing and refining in France. Sell finished products (refined oil, peanut butter, cosmetics) back to African markets.",
        what_africa_gets: "Raw commodity prices. Some local processing through SONACOS but at limited scale.",
        what_you_can_do: "Process groundnuts locally into peanut butter, refined oil, and flour. Build an African peanut butter brand. Export premium products directly.",
      },
      {
        sector: "Oil & Gas",
        company: "Woodside Energy (Australia), BP (UK), Total Energies (France)",
        what_they_do: "Operate Senegal's offshore oil (Sangomar) and gas (Yakaar-Teranga) fields as majority owners and operators.",
        what_africa_gets: "Tax revenues, government participation through Petrosen (the national oil company), some local employment. Government negotiated 10–20% local content requirements.",
        what_you_can_do: "Supply chain services to oil companies are mandated to be locally sourced. Catering, transport, safety equipment, IT services, waste management for oil field operations are opportunities for Senegalese companies. Register with Petrosen's local vendor database.",
      },
    ],
    problems: [
      {
        problem: "Load shedding — power cuts daily in most of Senegal",
        scale: "45% rural electrification. Daily load shedding in urban areas outside Dakar. SENELEC cannot meet demand, especially in summer.",
        opportunity: "Every home, shop, and business that installs solar reduces load on the grid and saves money. The solar market is the largest infrastructure opportunity in Senegal right now.",
        businesses: [
          { name: "Solar installation company", cost: "1–5M FCFA" },
          { name: "Solar kiosk business", cost: "200,000–800,000 FCFA" },
          { name: "Battery storage systems installer", cost: "2–10M FCFA" },
        ],
        example: "BAOBAB+ (French-Senegalese solar company) has deployed 200,000+ solar kits in Senegal and Mali by partnering with mobile money operators. A Senegalese company could do this better — with deeper community relationships and without French intermediaries.",
      },
      {
        problem: "Rice imports — Senegal imports 80% of its rice",
        scale: "Senegal imports €400M+ in rice annually, mostly from Asia. Casamance grows premium rice. The Senegal River Valley has irrigation infrastructure for rice. The country is paying for food it could grow.",
        opportunity: "Local rice production, processing, and branding. Casamance rice is premium quality — parboiled, organic-certified, story-driven. Sell at 3x the imported rice price.",
        businesses: [
          { name: "Rice mill and processing", cost: "5–20M FCFA" },
          { name: "Premium rice brand (Casamance origin)", cost: "500,000–3M FCFA" },
          { name: "Irrigation cooperative", cost: "2–10M FCFA" },
        ],
        example: "Riz du Sénégal was a government initiative to grow rice along the Senegal River. The private sector has barely entered this space.",
      },
      {
        problem: "No cold chain — perishable goods spoil before they reach markets",
        scale: "30–40% of Senegal's fish catch spoils before sale. Fruit and vegetables from Casamance rot before reaching Dakar. Cold chain almost entirely absent outside the capital.",
        opportunity: "Refrigerated transport, cold storage at farm gates and fish landing sites, solar-powered cooling systems are all open markets with no Senegalese national competitor.",
        businesses: [
          { name: "Refrigerated transport fleet", cost: "10–50M FCFA" },
          { name: "Solar cold storage for fish landing sites", cost: "2–10M FCFA" },
          { name: "Farm-gate cooling for fruits/vegetables", cost: "1–5M FCFA" },
        ],
        example: "In Kenya, Twiga Foods built cold chain logistics for urban markets. No Senegalese equivalent exists at scale.",
      },
      {
        problem: "Waste management crisis in Dakar",
        scale: "Dakar generates 3,000+ tonnes of waste per day. Collection covers only 60–70%. Informal dumps fill neighborhoods. Recycling infrastructure almost entirely absent.",
        opportunity: "Waste collection contracts, recycling of plastic and metal, composting for agricultural input, waste-to-energy. Government pays per tonne for collection. Recyclable material has market value.",
        businesses: [
          { name: "Plastic recycling company", cost: "2–10M FCFA" },
          { name: "Organic waste composting", cost: "500,000–3M FCFA" },
          { name: "Waste collection contractor", cost: "5–30M FCFA" },
        ],
        example: "Senplas recycles plastic waste in Dakar. Cellule Unité de Coordination de la Gestion des Déchets Solides (UCG) offers contracts to private waste collectors.",
      },
      {
        problem: "Digital skills gap — thousands of jobs unfilled in tech and digital economy",
        scale: "Wave, Wari, and Senegal's growing tech sector need engineers, product managers, data analysts, and UX designers. The supply of trained digital workers doesn't meet demand. Dakar's Silicon Plateau is undersupplied with talent.",
        opportunity: "Digital skills training, coding bootcamps, tech talent placement. The Senegalese government actively funds digital training through FORCE-N and Sénégal Numérique.",
        businesses: [
          { name: "Coding bootcamp", cost: "1–5M FCFA" },
          { name: "Tech talent placement agency", cost: "200,000–1M FCFA" },
          { name: "Digital marketing agency", cost: "200,000–1M FCFA" },
        ],
        example: "CTIC Dakar has trained hundreds of Senegalese entrepreneurs. JOKKOLABS offers co-working and training. But demand for skilled digital workers still exceeds supply.",
      },
    ],
    infrastructure: [
      {
        name: "Diamniadio Industrial City",
        what_it_is: "A government-built integrated industrial zone 30km from Dakar city center, adjacent to Blaise Diagne International Airport and on a major highway. Includes factory plots (some already built), a datacenter, UADB university, affordable housing, a convention center, and special economic zone status. Built under the Plan Sénégal Émergent.",
        opportunity: "Factory space is available for lease or purchase at rates far below Dakar city. SEZ status means reduced taxes, simplified customs, and fast-track government services. The location near the airport means perishable exports (fish, fruit, cut flowers) can go from factory to plane in under an hour. Any Senegalese manufacturer who wants to export should be looking at Diamniadio first.",
        who_can_use_it: "Food processing companies, textile manufacturers, pharmaceutical manufacturers, light industrial businesses, tech companies, logistics operators. Apply through APIX (Agence de Promotion des Investissements et des Grands Travaux).",
      },
      {
        name: "Port Autonome de Dakar",
        what_it_is: "One of West Africa's most important deep-water ports. Handles 15+ million tonnes of cargo annually. Gateway for landlocked countries: Mali, Guinea, Burkina Faso, and Mauritania all transit through Dakar. Container terminal, bulk cargo, oil terminal, fishing port.",
        opportunity: "Warehouse and logistics services for goods transiting to landlocked countries. Import-export trading using Dakar as a regional hub. Port-based fish processing. Logistics companies serving Mali's import needs (which are significant) operate through Dakar.",
        who_can_use_it: "Any import-export company, logistics operator, freight forwarder, or warehousing business. The port is a business ecosystem on its own.",
      },
      {
        name: "Blaise Diagne International Airport (AIBD)",
        what_it_is: "Opened in 2017 — built 45km east of Dakar, with a full cargo terminal. Expanded to handle direct flights to North America, Europe, and the Gulf. Currently handles 3M+ passengers annually and growing. Cargo terminal handles perishable exports.",
        opportunity: "Fresh fish, fresh mango, cut flowers, and premium perishables can be exported direct to Europe and the Gulf from AIBD. Cold storage near the airport is almost nonexistent — a significant opportunity for agricultural exporters. Business park around the airport is underutilized.",
        who_can_use_it: "Agricultural exporters, seafood exporters, fashion designers who need to ship samples to Paris buyers, tech companies needing conference facilities for international clients.",
      },
      {
        name: "Wave Mobile Money Infrastructure",
        what_it_is: "Wave is Senegal's dominant mobile money platform with zero-fee transfers. It has built one of Africa's most complete mobile money agent networks across Senegal. Unlike M-Pesa (Kenya) or Orange Money (WAEMU region), Wave charges no transaction fees for most transfers, making it the platform most Senegalese people actually use.",
        opportunity: "Wave is infrastructure for any digital business in Senegal. Accept payments instantly via Wave. Pay suppliers. Pay employees. Build a business that wouldn't work without cheap digital payments — Wave makes that possible. Any business with multiple locations or suppliers benefits from instant, free digital payment.",
        who_can_use_it: "Any business in Senegal. Create a Wave business account at any Wave agent.",
      },
      {
        name: "CTIC Dakar — Tech Hub",
        what_it_is: "Centre de Technologies de l'Information et de la Communication (CTIC) is Senegal's main tech accelerator and hub, based in Dakar Point E. Offers co-working space, mentorship, business development support, and access to investors. Has accelerated 200+ Senegalese startups.",
        opportunity: "If you are building a tech company in Senegal, apply to CTIC. They provide space, mentorship, investor connections, and visibility. The Sénégal Numérique 2025 plan includes specific funding streams for digital startups that CTIC helps companies access.",
        who_can_use_it: "Tech and digital startups in Senegal at early to growth stage.",
      },
    ],
    builders: [
      { name: "Karim Sy", sector: "Tech / Social innovation", what: "Founder of CTIC Dakar and Jokkolabs, the organizations that built Dakar's tech ecosystem. One of the most important institution builders in Francophone African tech.", started_with: "A vision for a Dakar Silicon Plateau. Built it one company at a time." },
      { name: "Youssou N'Dour", sector: "Music / Media / Business", what: "Global music legend who built a media empire from Dakar: RFM Radio, L'Observateur newspaper, and invested in TRACE TV. Showed that cultural capital from Senegal can build media businesses.", started_with: "His voice. Then his reputation. Then his platform." },
      { name: "Adama Amanda Ndiaye (Adama Paris)", sector: "Fashion", what: "Founded Dakar Fashion Week in 2002 and built it into Africa's most important fashion platform. Has dressed international celebrities. Operates entirely from Dakar.", started_with: "European fashion training. The decision to come home and build the platform Africa needed." },
      { name: "Wave founders (Lincoln Quirk & Drew Durbin)", sector: "Fintech", what: "Built Wave in Dakar — now Senegal's largest mobile money operator with zero-fee transfers. Raised $200M Series A. Proved global fintech companies can be built from Dakar.", started_with: "The observation that Senegalese mobile money fees were too high. A better product." },
      { name: "Marième Faye Sall", sector: "Social enterprise / Women's empowerment", what: "Led major women's entrepreneurship initiatives through the DER/FJ and broader Plan Sénégal Émergent social programmes, funding thousands of Senegalese women entrepreneurs." },
      { name: "Mouride Brotherhood Entrepreneurs", sector: "Trade / Commerce", what: "The Mouride brotherhood (Islamic Sufi order centered in Touba) has one of the world's most powerful informal business networks. Mouride traders operate in every major city on earth — New York, Paris, Milan, Madrid — selling African goods and sending remittances home. Their collective economic power is in the billions.", started_with: "The teaching of Cheikh Ahmadou Bamba: work is a form of worship." },
    ],
    vision: "Senegal in 2030 will be an oil producer. The question is not whether wealth will flow — it already is. The question is: who will own the businesses that supply the oil industry, process the fish, brand the salt, build the solar farms, manufacture the food, and serve 17 million people whose purchasing power is about to increase dramatically? The window is now. Before the oil money floods in and foreign companies get there first, the Senegalese entrepreneurs who build today will own the infrastructure tomorrow. Diamniadio is empty factory space waiting for Senegalese manufacturers. Lac Rose salt is waiting to be branded. Casamance mangoes are waiting to be processed. The fish in these waters are waiting for a Senegalese cold chain. The solar energy is waiting for Senegalese installers. Every single one of these opportunities is available to you — today, with African capital, at African prices.",
  },

  // ─── GHANA ────────────────────────────────────────────────────────────────
  {
    country: "Ghana",
    country_code: "GH",
    tagline: "Built the world's second-largest film industry and the world's most celebrated gold heritage. Now building fintech, fashion, and food that the world is starting to notice.",
    opening: "Ghana produces 65% of the world's cocoa together with Côte d'Ivoire. It has the deepest gold reserves in West Africa — the Ashanti people were named for it, fought wars over it, built empires from it. Ghana was the first African country to win independence. It hosted the Year of Return in 2019 and brought tens of thousands of diaspora back. Accra has Africa's most vibrant tech ecosystem outside Lagos. Paystack was acquired from Nigeria. But 57 Chocolate (Ghana's first bean-to-bar chocolate company) was founded from Ghana. The gap between what Ghana produces and what Ghana earns from it is still enormous — and that gap is your opportunity.",
    quick_facts: [
      { label: "Population", value: "33 million" },
      { label: "GDP", value: "$77 billion" },
      { label: "Cocoa", value: "World's 2nd largest producer (850,000+ tonnes/year)" },
      { label: "Gold", value: "World's 10th largest gold producer, West Africa's largest" },
      { label: "Diaspora", value: "Year of Return (2019): 1,000+ diaspora returned permanently" },
      { label: "Independence", value: "1957 — first sub-Saharan country to independence" },
      { label: "Tech", value: "Accra: Africa's 3rd largest startup ecosystem by deal volume" },
      { label: "Religion", value: "63% Christian, 36% Muslim, strong Ashanti cultural identity" },
    ],
    resources: [
      {
        name: "Cocoa — Ghana Grows It, Switzerland Profits",
        what_it_is: "Ghana produces 850,000+ tonnes of cocoa annually — the world's second largest after Côte d'Ivoire. The Ashanti, Brong-Ahafo, Eastern, and Western regions are the heartland of Ghanaian cocoa. Ghanaian cocoa is considered some of the world's finest — the flavor profile is fruity, complex, and distinctive. Single-origin Ghanaian cocoa sells at premium prices globally.",
        current_state: "The Ghana Cocoa Board (COCOBOD) controls all cocoa buying at fixed prices. Farmers receive approximately $0.30–$0.50 per kg of cocoa beans. Nestlé, Mars, Mondelez, and Ferrero buy the beans, process them in Europe, and sell chocolate at $5–$15 per 100g bar. The Lindt 'Ghana 70%' bar at Migros Switzerland costs CHF 3.50. The farmer who grew the cocoa earned $0.10.",
        the_gap: "Raw cocoa at farm gate: $0.30–$0.50/kg. Processed cocoa butter: $6–$8/kg. Artisan Ghana 70% chocolate (retail bar): $6–$15. Ghana could earn 10–20x its current revenue by processing cocoa into chocolate domestically.",
        businesses: [
          { name: "Bean-to-Bar Chocolate Brand", cost: "GH₵ 15,000–80,000 ($1,000–$5,500)", description: "Source Ghanaian cocoa beans directly from farmers. Roast, conch, temper, mould into bars. Sell at GH₵ 25–50 per bar locally, $6–$15 per bar internationally." },
          { name: "Cocoa Processing (Butter & Powder)", cost: "GH₵ 150,000–800,000 ($10,000–$55,000)", description: "Process beans into cocoa butter, cocoa powder, and chocolate liquor for sale to manufacturers and food companies. Ghana has tax incentives for cocoa processors." },
          { name: "Ghana Chocolate Gift Company", cost: "GH₵ 10,000–50,000 ($700–$3,500)", description: "Premium Ghanaian chocolate gift boxes for hotels, corporate gifting, tourism market. Every tourist who visits Ghana should leave with Ghanaian chocolate, not Swiss chocolate made from Ghanaian beans." },
        ],
        africans_doing_it: "57 Chocolate (Kimberly Addison, Accra): Ghana's first bean-to-bar company. Fairafric (joint Ghana-Germany): making and wrapping chocolate in Ghana. Niche Ghana: premium Ghanaian chocolate. These pioneers have proven the market — there is room for many more.",
      },
      {
        name: "Gold — The Ashanti Heritage, Now Owned by Mining Companies",
        what_it_is: "Ghana is West Africa's largest gold producer. The Ashanti kingdom built one of Africa's greatest empires partly on gold — the legendary Ashanti golden stool is a symbol of spiritual power, not just wealth. The Obuasi, Tarkwa, Prestea, and Bibiani gold fields are among Africa's most productive.",
        current_state: "AngloGold Ashanti (South African), Newmont (American), Kinross (Canadian), and Gold Fields (South African) are the dominant operators of Ghana's gold mines. They extract billions in gold value annually. Ghana earns royalties and taxes — approximately 5% royalty on gold production. Local communities near mines often see environmental damage without proportional economic benefit.",
        the_gap: "Ghana exports gold worth $6B+ annually. Ghana's gold jewelry artisan industry — the goldsmiths of Kumasi and Accra, trained in techniques going back 400+ years to the Ashanti empire — produces beautiful, technically accomplished work that is not connecting to global markets.",
        businesses: [
          { name: "Gold Jewelry Export Brand", cost: "GH₵ 15,000–60,000 ($1,000–$4,100)", description: "Work with Kumasi or Accra goldsmithing artisans. Build a brand around Ashanti gold heritage. Sell to US, UK, and EU buyers. The African luxury market is growing. There is no established Ghanaian gold jewelry brand at international scale." },
          { name: "Mining Supplier", cost: "GH₵ 30,000–500,000 ($2,000–$34,500)", description: "Supply catering, cleaning, safety equipment, IT services, or transport to mining companies operating in Ghana under the Ghana local content requirements in mining." },
          { name: "Gold Artisan Cooperative", cost: "GH₵ 5,000–25,000 ($350–$1,700)", description: "Organize Ashanti goldsmithing artisans. Get fair trade certification. Market to diaspora and international collectors who want authentic heritage pieces, not generic African jewelry." },
        ],
        africans_doing_it: "AngloGold Ashanti: South African-owned but Ghana's largest gold producer (not fully Ghanaian-owned). Accra Goldsmiths Guild: traditional artisans with 400+ year history. Some Ghanaian jewelry designers are now selling internationally through social media.",
      },
      {
        name: "Shea Butter — Ghanaian Women Collect It, L'Oréal Sells It",
        what_it_is: "Northern Ghana (Upper East, Upper West, Northern Region) is in Africa's Shea Belt. An estimated 1 million+ Ghanaian women earn part of their income from shea collection and processing. Ghana is one of the world's top 3 shea producers.",
        current_state: "Raw shea nuts leave Ghana for European cosmetics companies. AAK (Sweden's largest food and cosmetics ingredient company) has major shea operations in Ghana and is one of the world's largest shea processors. Ghanaian women earn pennies per kg. L'Oréal, Unilever (Dove), and Estée Lauder earn billions from shea-based products.",
        the_gap: "Raw shea at collection point: $0.30–$0.60/kg. Refined cosmetic-grade shea butter: $8–$15/kg. Branded retail shea cream: $15–$50 per 200ml. AAK processes shea in Ghana and exports — but the brand, the product, and the retail margin all belong to European companies.",
        businesses: [
          { name: "Ghanaian Shea Beauty Brand", cost: "GH₵ 5,000–25,000 ($350–$1,700)", description: "Shea-based body butters, lip balms, hair oils. African beauty for African and diaspora consumers. The brand story — northern Ghanaian women, centuries of tradition — is worth more than any marketing campaign." },
          { name: "Refined Shea Export", cost: "GH₵ 20,000–100,000 ($1,400–$6,900)", description: "Process raw shea into refined cosmetic-grade butter. Sell to cosmetics manufacturers in Europe and the US who currently buy from AAK or Dutch brokers. Cut out the middlemen." },
          { name: "Women's Shea Cooperative", cost: "GH₵ 2,000–10,000 ($140–$690)", description: "Organize 20–50 collectors. Certify organic and fair trade. Sell at 3–5x individual price. Women's cooperatives in Burkina Faso and Mali have already proven this model." },
        ],
        africans_doing_it: "Savannah Fruits Company (Ghana): fair-trade shea exporter. Sheanefit (Ghana): shea cooperative. Women's cooperatives in Tamale and Bolgatanga. But no major Ghanaian consumer brand selling internationally.",
      },
    ],
    foreign_extraction: [
      {
        sector: "Cocoa",
        company: "Nestlé, Mars, Mondelez, Ferrero, Lindt (all European/American)",
        what_they_do: "Buy Ghanaian cocoa through COCOBOD at fixed prices. Process into chocolate in their European factories. Sell globally.",
        what_africa_gets: "$0.30–$0.50/kg for raw beans. COCOBOD floor price system ensures some income stability for farmers but prevents price discovery.",
        what_you_can_do: "Process into chocolate in Ghana. Build a Ghanaian chocolate brand. Sell direct to consumers in Ghana, diaspora, and internationally. Every bar you sell is revenue that would otherwise go to Nestlé.",
      },
      {
        sector: "Gold",
        company: "AngloGold Ashanti (South Africa), Newmont (USA), Kinross (Canada)",
        what_they_do: "Operate major gold mines across Ghana under lease agreements. Export gold. Employ Ghanaians at mine level but senior management, capital, and profits flow out.",
        what_africa_gets: "5% royalty on production. Corporate income tax. Employment for mine workers. Community development funds (sometimes).",
        what_you_can_do: "Ghana Local Content and Local Participation in Petroleum Activities Regulations — similar frameworks exist for mining. Provide goods and services to mining companies. The mining supply chain is a significant business opportunity for Ghanaian companies.",
      },
    ],
    problems: [
      {
        problem: "Energy — Ghana has persistent load shedding ('dumsor')",
        scale: "Ghana's power generation deficit has caused regular 'dumsor' (power cuts) costing the economy billions. SMEs lose millions in spoiled goods, idle machines, and generator costs.",
        opportunity: "Solar rooftop systems, UPS backup systems, generator servicing, LED lighting upgrades for businesses, energy auditing.",
        businesses: [
          { name: "Solar installation company", cost: "GH₵ 20,000–100,000" },
          { name: "Energy audit and efficiency consultancy", cost: "GH₵ 5,000–20,000" },
        ],
        example: "Several Ghanaian solar companies have grown significantly during dumsor periods. Customers are motivated.",
      },
      {
        problem: "Plastic waste — Accra beaches and waterways clogged",
        scale: "Accra generates 2,000+ tonnes of solid waste daily. Sachets (plastic water bags) are ubiquitous and cause severe drainage problems. The government's plastic ban has created demand for alternatives.",
        opportunity: "Plastic recycling, alternative packaging production, waste collection contracts, upcycled plastic products.",
        businesses: [
          { name: "Plastic recycling company", cost: "GH₵ 30,000–200,000" },
          { name: "Sachets recycling", cost: "GH₵ 10,000–50,000" },
        ],
        example: "Trashy Bags (Ghana) makes premium bags and accessories from recycled plastic sachets. Social enterprise and commercial business combined.",
      },
    ],
    infrastructure: [
      {
        name: "Ghana Free Zones Authority",
        what_it_is: "Special economic zone status for export-oriented manufacturers. Zero corporate tax for 10 years, no import duty on inputs, simplified customs. Tema and Accra Free Zones.",
        opportunity: "Any manufacturer who exports 70%+ of production qualifies. Cocoa processing, garment manufacturing, electronics assembly can benefit from 10 years of zero corporate tax.",
        who_can_use_it: "Export-oriented manufacturers. Apply through the Ghana Free Zones Authority.",
      },
      {
        name: "Year of Return Infrastructure",
        what_it_is: "The 2019 Year of Return campaign brought 1,000+ diaspora permanently to Ghana and created a permanent 'Beyond the Return' programme. Cape Coast Castle, Elmina Castle, and the slave trade heritage sites now attract tens of thousands of diaspora visitors annually.",
        opportunity: "Tourism, cultural experiences, high-end hospitality, diaspora investment facilitation, ancestry research services, African American cultural tours.",
        who_can_use_it: "Any Ghanaian tourism or hospitality business. The diaspora tourism market is high-value and growing.",
      },
    ],
    builders: [
      { name: "Kimberly Addison", sector: "Chocolate / Food", what: "Founded 57 Chocolate in Accra — Ghana's first bean-to-bar company, proving Ghanaian chocolate can be made and sold in Ghana rather than exported raw.", started_with: "A food science background and the question: why is there no Ghanaian chocolate brand?" },
      { name: "Gregory Rockson", sector: "Health / Pharma", what: "Co-founded mPharma in Accra at 24. Now in 8+ African countries. Making medicines affordable at scale.", started_with: "Y Combinator. $3M seed. The observation that African medicine prices made no sense." },
      { name: "Farida Bedwei", sector: "Fintech software", what: "Co-founded Logiciel and built gKudi banking software used across West Africa. Has cerebral palsy. Proof that what defines you is what you build, not what others think limits you." },
      { name: "Francis Obirikorang", sector: "Agritech", what: "Founded Agrocenta at 26, connecting smallholder farmers directly to buyers via mobile. Forbes 30 Under 30 Africa.", started_with: "The observation that his family farm was earning less than it should from middlemen." },
    ],
    vision: "Ghana is the most politically stable economy in West Africa and one of the most open to diaspora investment. Year of Return proved that African-Americans and the global African diaspora want to come here — and stay. The question is whether Ghanaians build the restaurants, the hotels, the tech companies, the chocolate brands, and the fashion businesses that serve them — or whether foreigners do. A Ghanaian chocolate brand in Accra that sells to 10,000 diaspora visitors per year is a GH₵ 1M+ business with minimal competition.",
  },

  // ─── NIGERIA ──────────────────────────────────────────────────────────────
  {
    country: "Nigeria",
    country_code: "NG",
    tagline: "Africa's largest economy. The continent's most powerful creative industry. 220 million people who need everything built.",
    opening: "Nigeria is Africa's largest economy, largest population, and most powerful creative force. Nollywood produces 2,500 films per year — more than Hollywood. Afrobeats conquered the world. Dangote is building the world's largest single-train oil refinery. But Nigeria still imports toothpicks. Nigeria still imports tomato paste made from Nigerian tomatoes processed in China. Nigeria imports everything it could make. The import bill is the business opportunity. The 220 million people who need everything are the market. No African country has more business opportunity — or more people who could build it.",
    quick_facts: [
      { label: "Population", value: "220 million — Africa's largest" },
      { label: "GDP", value: "$440 billion — Africa's largest" },
      { label: "Oil", value: "6th largest oil producer in the world" },
      { label: "Film", value: "Nollywood: world's 2nd largest film industry by output" },
      { label: "Music", value: "Afrobeats: fastest-growing music genre globally" },
      { label: "Food", value: "Imports $10B+ of food that could be grown and processed domestically" },
      { label: "Entrepreneurs", value: "Paystack ($200M), Flutterwave ($3B), Kobo360, Moove, Kuda — all built from Lagos" },
      { label: "Diaspora", value: "4M+ Nigerian diaspora, sending $20B+ home annually" },
    ],
    resources: [
      {
        name: "Oil & Gas — Nigeria Has It. Foreign Companies Own the Refining.",
        what_it_is: "Nigeria has proven oil reserves of 37 billion barrels — the world's 6th largest. Nigeria produces 1.5–2 million barrels per day. Yet Nigeria imports 90%+ of its refined petroleum products (petrol, diesel, kerosene) because it has almost no domestic refining capacity.",
        current_state: "Shell (Netherlands), ExxonMobil (USA), Chevron (USA), TotalEnergies (France), and Eni (Italy) are the major operators of Nigerian oil. NNPC (state company) is present in all joint ventures but is a minority partner in most. Nigeria exports crude oil and imports refined fuel — one of the most expensive structural inefficiencies in the world. Dangote Refinery (650,000 bpd capacity when running) is changing this, but the supply chain opportunity is enormous.",
        the_gap: "Crude oil: $70–$90/barrel. Refined petrol: $0.70–$1.00/litre at import price ($4–$5/barrel equivalent). Nigeria sends away crude and buys back fuel at 5–8x the crude cost. When Dangote Refinery reaches full capacity, it will eliminate Nigeria's fuel import bill — and create a massive local supply chain opportunity.",
        businesses: [
          { name: "Petro-chemical supply company", cost: "₦10M–₦50M ($7,000–$35,000)", description: "Supply chemicals, safety equipment, and industrial goods to oil companies. Local content requirements mandate Nigerian suppliers. Register with NCDMB (Nigerian Content Development and Monitoring Board)." },
          { name: "Oil service company", cost: "₦20M–₦200M ($14,000–$140,000)", description: "Maintenance, inspection, catering, transport for oil operations. Most are currently foreign companies. Local content law mandates increasing Nigerian content." },
          { name: "Downstream distribution", cost: "₦5M–₦50M ($3,500–$35,000)", description: "With Dangote Refinery producing, distribution of locally refined fuel is a major opportunity. Filling station owners and fuel distributors will benefit from local supply." },
        ],
        africans_doing_it: "Aliko Dangote (Dangote Refinery — $20B investment). NNPC Ltd (state, majority government-owned). Several Nigerian-owned oil service companies including C&I Leasing, Nestoil, and Oando.",
      },
      {
        name: "Tomatoes — Imported as Paste After Nigeria Grew the Tomatoes",
        what_it_is: "Nigeria is Africa's second-largest tomato producer. The Kano, Kaduna, Jigawa, and Katsina regions grow millions of tonnes annually. Yet Nigeria spends $360M+ annually importing tomato paste — mostly from China. Chinese factories buy Nigerian tomatoes, dry and concentrate them, and sell the paste back to Nigerian consumers.",
        current_state: "A structural absurdity: tomatoes rot by the millions in northern Nigerian farms during harvest season because there is no processing capacity. Farmers earn almost nothing. Then Nigeria imports tomato paste from a country that imported the raw tomatoes. Erisco Foods, Dangote, and a few others have started domestic tomato processing, but capacity is far below demand.",
        the_gap: "Fresh tomatoes at Kano wholesale: ₦200–₦500/kg. Tomato paste (from imported concentrate) at Lagos retail: ₦2,000+ per kg equivalent. A tomato processing plant can capture 8–10x the raw tomato price in finished goods revenue.",
        businesses: [
          { name: "Tomato processing plant (small-scale)", cost: "₦5M–₦30M ($3,500–$21,000)", description: "Buy fresh tomatoes during harvest glut at ₦200–₦300/kg. Process into paste, puree, and powder. Sell at ₦1,500–₦3,000/kg equivalent in finished goods." },
          { name: "Tomato ketchup/sauce brand", cost: "₦2M–₦10M ($1,400–$7,000)", description: "Processed tomato products for Nigerian consumer market. Del Monte and Heinz currently import. A Nigerian brand at lower price point has a massive market." },
          { name: "Cold chain for tomato harvest", cost: "₦5M–₦20M ($3,500–$14,000)", description: "Refrigerated storage near Kano growing areas. Extend shelf life from 3 days to 30 days. Bring harvest to market without spoilage." },
        ],
        africans_doing_it: "Erisco Foods (Lagos): Nigeria's largest tomato paste processor. Dangote Tomato Processing (Kaduna): recently opened large-scale processing. But national demand still exceeds domestic supply massively.",
      },
      {
        name: "Leather — Kano's 1,000-Year-Old Tannery, Still Exporting Raw",
        what_it_is: "Kano's Kofar Mata dye pits are possibly the oldest continuously operating tannery in the world — over 1,000 years of leather processing in one place. The Hausa and Fulani communities of northern Nigeria have deep leather-working traditions. Nigeria has one of the world's largest livestock populations.",
        current_state: "Raw hides still leave Kano for tanneries in Italy and Spain. Nigerian leather artisans in Aba and Kano make shoes and bags sold locally — but quality has declined since the colonial disruption of trade routes. Aba, Abia State, is Nigeria's shoe-making capital: producing 10+ million pairs per year, mostly informally, mostly for local markets. The craftsmanship exists. The branding and international market access don't.",
        the_gap: "Raw hides: ₦2,000–₦5,000/piece. Finished leather handbag: ₦80,000–₦500,000 in Nigerian luxury market. At international quality and branding standards, Aba leather goods would sell in London, Paris, and New York.",
        businesses: [
          { name: "Aba Leather Brand", cost: "₦2M–₦10M ($1,400–$7,000)", description: "Source finished goods from Aba's craftspeople. Improve quality standards. Add branding. Sell online. Build a story around Kano's 1,000-year-old leather tradition." },
          { name: "Leather tannery upgrade", cost: "₦10M–₦100M ($7,000–$70,000)", description: "Invest in finishing capacity at Kano or Aba. Export finished leather (not raw hides) to European manufacturers. Finished leather earns 5–10x raw hide prices." },
        ],
        africans_doing_it: "Kemi Telford: Nigerian luxury leather brand gaining international attention. Several Aba leather businesses are growing online presence.",
      },
    ],
    foreign_extraction: [
      {
        sector: "Oil & Gas",
        company: "Shell, ExxonMobil, Chevron, TotalEnergies, Eni",
        what_they_do: "Operate majority of Nigerian oil fields. Extract oil. Pay Nigerian government approximately 65–70% of production revenue through various tax and royalty structures.",
        what_africa_gets: "Significant revenue through NNPC joint ventures. But capital, technology, management, and value-added refining have historically been foreign-controlled. Shell's operations in the Niger Delta have also caused significant environmental damage.",
        what_you_can_do: "Local content in oil and gas is regulated by the NCDMB. Every oil company operating in Nigeria is mandated to increase Nigerian content in its supply chain. That mandate is a business development opportunity for Nigerian entrepreneurs.",
      },
      {
        sector: "Telecoms",
        company: "MTN South Africa, Airtel (India), Glo (fully Nigerian!), 9mobile",
        what_they_do: "Operate Nigeria's mobile network infrastructure. MTN and Airtel are foreign-owned, repatriating profits to South Africa and India respectively.",
        what_africa_gets: "Connectivity. Jobs. But billions in profits leave Nigeria every year. MTN Nigeria alone earns ₦2.5 trillion+ annually.",
        what_you_can_do: "Build on the telecoms infrastructure: apps, digital services, content platforms, agent banking networks. Glo (Mike Adenuga) is Nigeria's only 100% Nigerian-owned major telecom — proof it can be done.",
      },
    ],
    problems: [
      {
        problem: "Electricity — Nigeria averages 4-6 hours of electricity per day",
        scale: "Nigeria's electricity generation capacity is under 5,000 MW for 220 million people (Germany has 200,000 MW for 84 million). Generators cost Nigerian businesses and households an estimated $14 billion per year in fuel.",
        opportunity: "Solar rooftop systems, solar mini-grids for underserved communities, battery storage systems, energy audit services. The generator fuel bill alone tells you the market size.",
        businesses: [
          { name: "Solar installation company", cost: "₦2M–₦10M ($1,400–$7,000)" },
          { name: "Solar mini-grid (rural)", cost: "₦20M–₦100M ($14,000–$70,000)" },
          { name: "Energy storage systems", cost: "₦5M–₦30M ($3,500–$21,000)" },
        ],
        example: "Rensource Energy, BBOXX Nigeria, Lumos Solar — all growing Nigerian solar companies.",
      },
      {
        problem: "Food imports — Nigeria imports what it could grow",
        scale: "Nigeria spent $2.4B on food imports in 2023. Rice, wheat, fish, tomato paste, sugar, milk — all imported in enormous quantities from countries where these goods are no cheaper to produce than in Nigeria.",
        opportunity: "Every food import is a local production company that doesn't exist yet. Rice milling, tomato processing, fish aquaculture, dairy processing, sugar refining — all massive markets with government incentives.",
        businesses: [
          { name: "Rice processing mill", cost: "₦10M–₦100M ($7,000–$70,000)" },
          { name: "Catfish aquaculture", cost: "₦2M–₦20M ($1,400–$14,000)" },
          { name: "Flour mill", cost: "₦20M–₦200M ($14,000–$140,000)" },
        ],
        example: "CARI (Competitive African Rice Initiative) showed that Nigerian rice farmers can produce competitively. Ofada rice is now sold in UK supermarkets as a premium product.",
      },
    ],
    infrastructure: [
      {
        name: "Lagos Free Zone (Lekki)",
        what_it_is: "3,500-hectare free trade zone in Lekki, adjacent to Dangote Refinery and deep-water Lekki Port. Zero import duty on inputs, zero export duty, 25 years tax holiday for manufacturers.",
        opportunity: "Manufacturing companies that export can operate tax-free for 25 years. Petro-chemicals, food processing, light manufacturing, logistics. Dangote Refinery as anchor tenant means the zone's infrastructure is world-class.",
        who_can_use_it: "Any manufacturing company, especially those supplying the oil and gas sector or exporting to West Africa.",
      },
      {
        name: "USSD & Mobile Money Agent Networks",
        what_it_is: "OPay, PalmPay, and Moniepoint have built agent banking networks across Nigeria — millions of points where unbanked Nigerians can deposit, withdraw, and transfer money without a bank account.",
        opportunity: "Agent banking business (earn commission on every transaction). Digital payments infrastructure means any digital business can now reach customers across Nigeria.",
        who_can_use_it: "Anyone can become a PalmPay, OPay, or Moniepoint agent with ₦50,000–₦200,000 in starting capital. Earn 0.5–1.5% commission on every transaction.",
      },
    ],
    builders: [
      { name: "Aliko Dangote", sector: "Manufacturing, oil & gas", what: "Africa's richest person. Started with $3,000 loan from his uncle. Now completing the world's largest single-train oil refinery.", started_with: "₦500,000 uncle's loan. Flour and sugar trading." },
      { name: "Shola Akinlade", sector: "Fintech", what: "Co-founded Paystack at 24. Stripe acquired it for $200M in 2020. Changed what was possible for Nigerian startups.", started_with: "Y Combinator application. A clean payment API." },
      { name: "Temie Giwa-Tubosun", sector: "Health logistics", what: "Founded LifeBank to deliver blood and medical products to Nigerian hospitals. Women were dying because blood wasn't there in time. She fixed it.", started_with: "Research showing the problem was logistics, not supply." },
      { name: "Mo Abudu", sector: "Media", what: "Built EbonyLife — Nigeria's first luxury entertainment brand. Struck deals with Netflix, Sony, and AMC. Made Nollywood globally bankable.", started_with: "A TV talk show. Then a network. Then a film studio." },
      { name: "Burna Boy", sector: "Music", what: "Built African Giant into a Grammy-winning global brand from Port Harcourt and Lagos. Refused to soften his Africanness. The world came to him.", started_with: "His music. His identity. His refusal to compromise." },
    ],
    vision: "Nigeria is a continent in a country. 220 million people, $440 billion economy, the most powerful creative output in Africa, the largest tech ecosystem on the continent. The challenge is not finding opportunity — it is choosing which one. Import what you can make. Build what 220 million people need. The infrastructure crisis — electricity, cold chain, roads — is the infrastructure opportunity. The import bill is the import substitution opportunity. The creative economy is the export opportunity. Nigerian entrepreneurs built Paystack, Flutterwave, Kobo360, Moove, LifeBank, and Nollywood. The next generation builds the food processing companies, the solar grids, the dairy farms, the leather brands, and the healthcare networks that 220 million people need.",
  },

  // ─── KENYA ────────────────────────────────────────────────────────────────
  {
    country: "Kenya",
    country_code: "KE",
    tagline: "East Africa's business hub. Invented mobile money. Growing the continent's best coffee and avocados. Building tech that serves 54 countries.",
    opening: "Kenya invented mobile money. M-Pesa (launched 2007) is used by 96% of Kenyan adults and processes transactions worth 50% of Kenya's GDP. Kenya's tech ecosystem — iHub, Nairobi Garage, Silicon Savannah — has produced Twiga Foods, M-KOPA, Africa's Talking, Kobo360, and hundreds of other startups. Kenya exports premium coffee and tea. Its avocado exports tripled in 5 years. Its cut flowers account for 35% of Europe's fresh cut flowers. But the processing and value-addition for most Kenyan agricultural products still happens in Europe. And a country that invented mobile money still has millions of people with no financial services access. The opportunity is everywhere you look.",
    quick_facts: [
      { label: "Population", value: "55 million" },
      { label: "GDP", value: "$110 billion" },
      { label: "Mobile money", value: "M-Pesa: 96% adult usage. 50% of GDP transacted on mobile" },
      { label: "Coffee", value: "One of Africa's finest — premium auction prices" },
      { label: "Tea", value: "World's 3rd largest tea producer" },
      { label: "Flowers", value: "35% of Europe's fresh cut flowers from Kenya" },
      { label: "Avocados", value: "One of world's top 5 exporters, growing rapidly" },
      { label: "Tech", value: "'Silicon Savannah' — Africa's 2nd largest startup ecosystem" },
    ],
    resources: [
      {
        name: "Coffee — Kenya AA Is the World's Most Expensive. Farmers Earn Almost Nothing.",
        what_it_is: "Kenya AA coffee — grown in the highlands of Nyeri, Kirinyaga, Murang'a, and Kiambu — consistently fetches some of the world's highest prices at the Nairobi Coffee Exchange auction. Starbucks, Blue Bottle, and Tim Wendelboe (Oslo) pay premium prices for Kenyan coffee. The flavor profile — bright citrus, black currant, intense sweetness — is globally recognized as exceptional.",
        current_state: "The Kenya Coffee Board and cooperative system means farmers sell through centralized channels. Kenyan coffee is auctioned at the Nairobi Coffee Exchange to international buyers who export the green bean. Roasting, packaging, and the high retail price happen outside Kenya. A bag of Kenya AA at a San Francisco specialty cafe: $25–$45 per 250g. The farmer earns $0.50–$2 per kg of the same cherry.",
        the_gap: "Coffee cherry at farm gate: $0.30–$0.80/kg. Processed green bean: $4–$8/kg. Specialty roasted Kenya AA retail (250g): $20–$45. A Kenyan roaster who captures even 20% of the retail value of Kenyan coffee earns 5–10x the current export earnings.",
        businesses: [
          { name: "Kenyan Coffee Roastery", cost: "KSh 500,000–3M ($3,500–$21,000)", description: "Roast Kenya AA and SL28 varietals. Sell to Nairobi's growing cafe culture, hotels, embassies, and online internationally. Kenya's urban middle class increasingly appreciates specialty coffee." },
          { name: "Coffee Origin Tourism", cost: "KSh 200,000–1M ($1,400–$7,000)", description: "Farm tours in Nyeri, Kirinyaga highlands. Tourists pay KSh 3,000–8,000 per person for farm-to-cup experiences. Niche but growing." },
          { name: "Direct-Trade Export Company", cost: "KSh 500,000–2M ($3,500–$14,000)", description: "Connect Kenyan smallholder farmers directly to premium roasters in Europe, USA, and Japan who want traceable, direct-trade coffee and currently buy through Nairobi Exchange middlemen." },
        ],
        africans_doing_it: "Dormans Coffee (Nairobi): established Kenyan roaster. Kaldis Coffee (Ethiopia, operating Kenya): African chain. Café Deli (Nairobi): growing local coffee chain. Kahawa 1893: woman-focused direct-trade coffee brand selling in US Target stores.",
      },
      {
        name: "Avocados — Kenya Grows, Europe Profits",
        what_it_is: "Kenya is one of the world's top avocado exporters, primarily the Hass variety, grown in Murang'a, Kiambu, Nakuru, and Meru counties. European demand for avocados has tripled in 10 years (avocado toast culture, health food trend). Kenya's avocado export earnings tripled in 5 years.",
        current_state: "Most Kenyan avocados go to European supermarkets through Dutch importers (the Netherlands is the hub for European fresh produce). The Kenyan farmer or cooperative sells to an exporter, who ships to Amsterdam, where Dutch traders distribute to UK Tesco, French Carrefour, and German Aldi. Most of the margin — the packaging, branding, retail relationship — sits with Dutch traders and European retailers.",
        the_gap: "Kenyan avocado at farm gate: KSh 5–15/piece ($0.035–$0.10). In UK Tesco: £0.50–£1.00 each ($0.60–$1.20). The difference is transport, packing, ripening management, and retail relationship — all of which could be partially captured by Kenyan exporters.",
        businesses: [
          { name: "Avocado oil production", cost: "KSh 500,000–3M ($3,500–$21,000)", description: "Cold-press avocado oil for cooking and beauty markets. Avocado cooking oil is now a premium product globally. Kenya grows the avocados. No major Kenyan avocado oil brand exists internationally." },
          { name: "Direct export to EU retailers", cost: "KSh 1M–5M ($7,000–$35,000)", description: "Get GlobalGAP certification. Connect directly to UK or EU supermarket chains who want ethical, certified Kenyan avocados. Cut out Dutch middlemen." },
          { name: "Avocado beauty brand", cost: "KSh 200,000–1M ($1,400–$7,000)", description: "Avocado-based skincare and hair products. The beauty market for natural oils is massive. Avocado oil in a premium skincare line commands $20–$60 per 50ml." },
        ],
        africans_doing_it: "Vegpro Group (Kenya): large-scale Kenyan fresh produce exporter. Frigoken (Kenya): processes vegetables for export. Several Kenyan avocado oil producers are emerging.",
      },
    ],
    foreign_extraction: [
      {
        sector: "Tea",
        company: "Unilever (Lipton, Brooke Bond), James Finlay (UK), Williamson Tea (UK), McLeod Russel (India)",
        what_they_do: "Own large-scale tea estates in Kenya's highlands. Buy tea from smallholders through KTDA. Process and export. Lipton and Brooke Bond brands earn billions from Kenyan tea.",
        what_africa_gets: "Tea earns Kenya $1.3B+ in annual export revenue — significant. But most is sold as commodity bulk tea. Premium branded Kenyan tea (Kenyan Purples, single-estate) earns 3–10x commodity prices. Almost no Kenyan consumer brand at international scale.",
        what_you_can_do: "Premium branded Kenyan tea (origin: Mount Kenya, Nandi Hills, Kericho) for export. Specialty tea tourism. Direct-trade relationships with premium tea buyers.",
      },
    ],
    problems: [
      {
        problem: "Last-mile logistics — goods can't reach rural Kenya cheaply",
        scale: "40% of Kenya's agricultural produce spoils before reaching market due to poor roads and lack of cold chain. Rural producers earn 30–50% less than they should because they can't access urban markets directly.",
        opportunity: "Motorcycle logistics (like MAX.ng in Nigeria), aggregation platforms, cold storage near farms, rural e-commerce.",
        businesses: [
          { name: "Agricultural aggregation platform", cost: "KSh 500,000–3M" },
          { name: "Motorcycle logistics fleet", cost: "KSh 1M–10M" },
          { name: "Rural cold storage", cost: "KSh 2M–15M" },
        ],
        example: "Twiga Foods: built farm-to-vendor supply chain in Kenya. Now serving 17,000+ farmers and thousands of urban vendors. Still much of Kenya unreached.",
      },
    ],
    infrastructure: [
      {
        name: "M-Pesa — The World's Best Mobile Money Infrastructure",
        what_it_is: "M-Pesa (Safaricom) has 30M+ users in Kenya. The API (Daraja) is open to developers. You can integrate M-Pesa payments into any product in hours. Lipa na M-Pesa (pay with M-Pesa) is accepted everywhere from street vendors to shopping malls.",
        opportunity: "Any digital business in Kenya can collect payments instantly. Build an app, integrate M-Pesa Daraja, and you have a payment system that 96% of Kenyan adults have access to.",
        who_can_use_it: "Any Kenyan business. M-Pesa Daraja API is available to registered businesses through Safaricom developer portal (developer.safaricom.co.ke).",
      },
      {
        name: "Nairobi iHub and Silicon Savannah",
        what_it_is: "iHub (co-founded 2010) was Africa's first tech hub and catalyzed Kenya's tech ecosystem. Nairobi Garage, MEST Africa, and dozens of co-working and accelerator spaces now exist. Kenya has the densest concentration of African tech VCs after Nigeria.",
        opportunity: "If you are building a tech company in East Africa, Nairobi is the base. Access to investors, talent, clients, and the M-Pesa infrastructure in one city.",
        who_can_use_it: "Tech startups and digital businesses. Apply to Nairobi Garage for co-working. Apply to Innovate Kenya for government grants. Apply to Jica/DFID-backed accelerators for funding.",
      },
    ],
    builders: [
      { name: "Samuel Gikandi", sector: "Developer tools", what: "Built Africa's Talking in Nairobi — API infrastructure for 40,000+ African developers. Made SMS, voice, and USSD accessible to any developer on any African network.", started_with: "The observation that African telecoms didn't offer APIs. Built the middleware." },
      { name: "Jesse Moore", sector: "Energy", what: "Co-founded M-KOPA in Nairobi — pay-as-you-go solar that has connected 1M+ homes to electricity. Proved the off-grid energy business model.", started_with: "The insight that M-Pesa could be used to pay for solar in daily installments." },
      { name: "Hilda Moraa", sector: "Fintech / SME credit", what: "Founded Pezesha in Nairobi — alternative credit for SMEs using mobile money records. Women-led. Impact-driven. Profitable.", started_with: "The frustration of watching Kenyan small businesses unable to access credit despite having real revenue." },
    ],
    vision: "Kenya built mobile money. Kenya built M-KOPA solar. Kenya's avocado exports tripled. Kenya's cut flowers supply 35% of Europe's demand. What Kenya has not yet done is capture the full value chain of what it produces. A Kenyan roastery selling Kenya AA globally. A Kenyan avocado oil brand in UK supermarkets. A Kenyan fish processing company exporting to Japan. A Kenyan dairy brand across East Africa. The infrastructure is here. The market is here. The talent is here. The next 10 years belong to Kenyan entrepreneurs who add value to what Kenya already produces.",
  },

  // ─── ETHIOPIA ─────────────────────────────────────────────────────────────
  {
    country: "Ethiopia",
    country_code: "ET",
    tagline: "Birthplace of coffee. Largest cattle herd in Africa. A manufacturing sector that makes shoes for global brands. The continent's oldest independent civilization.",
    opening: "Ethiopia invented coffee — the word itself comes from the Kaffa region. Ethiopia was never colonized (with the exception of a brief Italian occupation). The country has maintained 3,000 years of unbroken civilization. Ethiopian Airlines is Africa's most profitable carrier. Ethiopia has Africa's largest livestock herd. The Addis Ababa industrial corridor is becoming East Africa's manufacturing hub. And yet Ethiopia is one of the world's poorest countries by per-capita income. The paradox is the opportunity: a country with extraordinary assets whose value has not been captured. The leather goes to Italy. The coffee goes to Starbucks. The livestock feeds other countries. When Ethiopians own the processing, the picture changes.",
    quick_facts: [
      { label: "Population", value: "120 million — Africa's 2nd largest" },
      { label: "GDP", value: "$111 billion and growing" },
      { label: "Coffee", value: "Birthplace of coffee. 7th largest global producer. Yirgacheffe, Sidamo, Harrar are premium origins." },
      { label: "Livestock", value: "Africa's largest herd — 65M cattle, 40M sheep, 50M goats" },
      { label: "Leather", value: "Africa's largest tannery industry. Footwear exports to Europe and US growing rapidly." },
      { label: "Aviation", value: "Ethiopian Airlines: Africa's most profitable airline, 130+ global destinations" },
      { label: "Independence", value: "One of 2 African countries never colonized (with Liberia). 3,000+ year civilization." },
      { label: "Flowers", value: "Second largest cut flower exporter in Africa after Kenya" },
    ],
    resources: [
      {
        name: "Coffee — Ethiopia Invented It, Starbucks Profits",
        what_it_is: "Ethiopia is the origin of all coffee. Every coffee plant on earth traces its lineage to the forests of southwestern Ethiopia (Kaffa, Jimma, Sidama). Ethiopian coffee ceremonies — preparing and sharing coffee in ritual — have been practiced for over 1,000 years. Ethiopian coffee varieties (Yirgacheffe, Sidamo, Harrar, Limu, Guji) are among the world's most prized by specialty coffee buyers.",
        current_state: "Ethiopia earns $1.5B+ annually in coffee exports — its largest single export. But most coffee leaves as green bean (unroasted). Starbucks, Nespresso, and specialty roasters in Europe, Japan, and the US take the bean, roast it, package it, and sell it at 5–20x the export price. Ethiopian coffee drinkers increasingly drink instant coffee (imported from Europe) rather than the authentic Ethiopian coffee ceremony.",
        the_gap: "Green bean at Addis Ababa export: $3–$8/kg. Roasted specialty coffee retail: $15–$40/kg. Starbucks 'Ethiopia' blend (250g): $18–$25. The Yirgacheffe farmer earned $1–$2 worth of that $25 bag.",
        businesses: [
          { name: "Ethiopian Coffee Roastery", cost: "ETB 200,000–1.5M ($3,500–$26,000)", description: "Roast Yirgacheffe, Sidamo, or Guji beans in Addis Ababa. Sell in Ethiopia (growing middle class). Export online to specialty buyers globally. Ethiopian Airlines connects you to 130+ cities — use the cargo network." },
          { name: "Coffee Tourism & Ceremony Experiences", cost: "ETB 50,000–300,000 ($875–$5,250)", description: "The Ethiopian coffee ceremony (buna dabo naw) is one of Ethiopia's most distinctive cultural experiences. Tourists and diaspora pay premium prices for authentic experiences. Boutique coffee experience businesses in Addis Ababa are growing." },
          { name: "Ethiopian Coffee Brand (Export)", cost: "ETB 100,000–800,000 ($1,750–$14,000)", description: "A named Ethiopian brand — not commodity export. Own origin, own story, own packaging. License the geographic indication (Yirgacheffe, Sidamo) which Ethiopia legally owns and has used to win premium pricing for farmers." },
        ],
        africans_doing_it: "Kaldis Coffee (Ethiopia): largest local cafe chain, roasts Ethiopian coffee. Tomoca Coffee (Addis Ababa, est. 1953): legendary Ethiopian roastery. Garden of Coffee (Ethiopia): growing local brand. Ethiopian Commodity Exchange: facilitates direct-trade relationships between Ethiopian farmers and premium buyers.",
      },
      {
        name: "Leather & Shoes — Ethiopia's Most Successful Manufacturing Sector",
        what_it_is: "Ethiopia has Africa's largest livestock herd and Africa's largest tannery industry. Addis Ababa's leather sector employs tens of thousands. The Hawassa Industrial Park and other zones attract footwear manufacturers. Ethiopian-made shoes are exported to Italy, Germany, and the US by brands including Clarks, Geox, and others who manufacture here.",
        current_state: "Ethiopia processes more leather domestically than most African countries. But the finished value still largely benefits foreign brands. Ethiopian factories are hired to manufacture shoes for European and American brands at contract wages — the design, brand, and retail margin all belong to the foreign company. Some Ethiopian brands are emerging but international presence is limited.",
        the_gap: "Ethiopian leather factory worker earns $60–$100/month making shoes that retail for $120–$300 in Europe. The markup between manufacturing cost and retail price is 5–10x, all captured by the European brand.",
        businesses: [
          { name: "Ethiopian Shoe Brand", cost: "ETB 100,000–500,000 ($1,750–$8,750)", description: "Design shoes made in Ethiopia's Addis Ababa leather district. Own the brand. Sell locally to Ethiopia's growing middle class. Export to diaspora market and international buyers." },
          { name: "Leather goods manufacturer", cost: "ETB 200,000–1.5M ($3,500–$26,000)", description: "Handbags, belts, wallets. Source Ethiopian leather (Africa's best tanning industry). Build for export at accessible quality standards. Ethiopian Airlines cargo can ship samples to Europe in 24 hours." },
          { name: "Leather supply chain company", cost: "ETB 100,000–600,000 ($1,750–$10,500)", description: "Source and quality-grade Ethiopian leather for export to small Italian, Spanish, and Portuguese leather goods brands who want African-origin leather without going through European tanning middlemen." },
        ],
        africans_doing_it: "Sole Rebels (Bethlehem Tilahun Alemu): Ethiopia's best-known global leather brand, in 30+ countries. Anbessa Shoe Factory (Addis Ababa): Ethiopia's oldest shoe company. Several smaller Ethiopian leather brands are gaining Instagram presence internationally.",
      },
    ],
    foreign_extraction: [
      {
        sector: "Coffee",
        company: "Nespresso (Nestlé), Starbucks, Peet's Coffee, Blue Bottle, European specialty roasters",
        what_they_do: "Purchase Ethiopian green beans through the Ethiopian Commodity Exchange or direct trade. Roast, brand, and sell at premium prices. The 'Ethiopia Yirgacheffe' label on a coffee bag in a London Waitrose earns £20+. The Ethiopian farmer earns a few cents per cup equivalent.",
        what_africa_gets: "$1.5B+ in coffee export revenue annually. But the full value chain (roasting, packaging, branding, retail) earns 5–20x more and is captured elsewhere.",
        what_you_can_do: "Build an Ethiopian roastery. Use the Ethiopian Coffee Exporters Association and ECX for sourcing. Ethiopian Airlines gives you access to global markets. The story of the birthplace of coffee is the most powerful origin story in the coffee world.",
      },
    ],
    problems: [
      {
        problem: "Industrial electricity for manufacturing",
        scale: "Ethiopia's industrial parks have reliable power. But smaller manufacturers outside parks face frequent outages. The Nile dam (GERD) will add 6,000 MW when complete — a transformational change for Ethiopian manufacturing.",
        opportunity: "Solar installations for SMEs during transition. Generator servicing. Energy efficiency upgrades for factories.",
        businesses: [
          { name: "Industrial solar installation", cost: "ETB 500,000–5M" },
          { name: "Generator maintenance company", cost: "ETB 100,000–500,000" },
        ],
      },
    ],
    infrastructure: [
      {
        name: "Hawassa Industrial Park",
        what_it_is: "World-class industrial park in Hawassa, southern Ethiopia, 275km from Addis Ababa. Managed by Industrial Parks Development Corporation (IPDC). Hosts major garment and textile manufacturers. Solar-powered, water-recycling, next to a railway.",
        opportunity: "Factory plots available for Ethiopian and international manufacturers. Zero corporate tax for 2 years, then reduced rates. One-stop shop for permits and customs. Excellent for apparel, textile, and light manufacturing export.",
        who_can_use_it: "Manufacturers seeking to export. Apply through IPDC.",
      },
      {
        name: "Ethiopian Airlines Cargo Network",
        what_it_is: "Ethiopian Airlines cargo flies to 130+ destinations. Addis Ababa is Africa's busiest cargo hub. Ethiopian manufacturers can ship products globally at competitive rates using Ethiopian Airlines cargo.",
        opportunity: "Fresh flowers, fresh produce, leather goods, coffee — all can be exported via Ethiopian Airlines cargo in 12–36 hours to European, US, and Gulf markets. Ethiopian Airlines cargo pricing is competitive.",
        who_can_use_it: "Any registered Ethiopian exporter. Ethiopian Airlines Cargo offices at Bole International Airport.",
      },
    ],
    builders: [
      { name: "Bethlehem Tilahun Alemu", sector: "Footwear / Fashion", what: "Founded soleRebels in 2004 from zero capital in a Zenabwork garbage dump neighborhood. Built Africa's fastest-growing footwear brand — selling in 30+ countries with $15M+ revenue.", started_with: "Her neighborhood. Her craftspeople. Recycled rubber tire soles." },
      { name: "Tewolde GebreMariam", sector: "Aviation", what: "CEO of Ethiopian Airlines during its most expansive growth period. Built Africa's most profitable airline into a 130-destination global carrier under African management.", started_with: "An Ethiopian institution. The conviction to expand rather than sell." },
    ],
    vision: "Ethiopia is the birthplace of coffee and one of the oldest civilizations on earth. It was never colonized. It maintained its culture, its script, its calendar, and its identity. Now it is building one of Africa's largest industrial corridors. When the Grand Ethiopian Renaissance Dam (GERD) comes fully online, Ethiopia will have more electricity than it needs — and will become East Africa's manufacturing power center. Ethiopian entrepreneurs who build now — leather brands, coffee roasteries, food processors, energy companies — will own the infrastructure when the economy takes off.",
  },

];

export function getCountryDeepProfile(countryCode: string): CountryDeepProfile | undefined {
  return COUNTRY_DEEP_PROFILES.find(
    (p) => p.country_code.toUpperCase() === countryCode.toUpperCase()
  );
}

export function getCountryDeepProfileByName(name: string): CountryDeepProfile | undefined {
  return COUNTRY_DEEP_PROFILES.find(
    (p) => p.country.toLowerCase() === name.toLowerCase()
  );
}
