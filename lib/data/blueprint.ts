export type BlueprintOrigin =
  | "French"
  | "Chinese"
  | "Lebanese / Arab"
  | "Indian"
  | "Gulf Arab"
  | "South African";

export interface BlueprintModel {
  id: string;
  company: string;
  origin: BlueprintOrigin;
  sector: string;
  what_they_control: string;
  their_model: string;
  scale: string;
  how_they_entered: string;
  your_move: string;
  entry_point: string;
  africans_doing_it: string[];
  tags: string[];
}

export const BLUEPRINT_MODELS: BlueprintModel[] = [
  {
    id: "bp-castel",
    company: "Castel Group / BGI",
    origin: "French",
    sector: "Beer & Beverages",
    what_they_control:
      "The beer market in more than 40 African countries. Every bottle of Flag Beer (Côte d'Ivoire), Primus (DRC), Beaufort, Regab (Gabon), Bock (Burkina Faso), and Ngok (Cameroon) is a Castel product. The brands sound local. The money is not.",
    their_model:
      "Win exclusive government brewery licenses — often as the only licensed industrial brewer in the country. Acquire or outcompete any local brand that gains traction. Build a national distribution network through exclusive deals with bars, restaurants, and bottle shops. The market feels competitive. The underlying ownership does not.",
    scale:
      "Castel Group is a private French company. Estimated annual revenue: €4–5 billion. Africa is their single largest and most profitable market. One family. One company. 40+ countries.",
    how_they_entered:
      "Post-independence license agreements. When African governments offered industrial brewery licenses in the 1960s–80s, French companies were already positioned through colonial relationships to win those licenses before local capital could organize.",
    your_move:
      "The craft brewery market is growing across Africa and Castel cannot serve it. The middle class wants premium, story-rich African products. Sorghum beer (tchapalo, pito, chibuku) is traditional and commercially underbuilt. A premium African-branded craft brewery is a category Castel won't fight you in — because it's below their volume floor and above their brand positioning.",
    entry_point:
      "A micro-brewery setup: $20,000–$80,000 for a 500L system. Start with a signature African grain (sorghum, millet) and a story that connects to your community. Supply restaurants and events first — no distribution network needed. Once you have 10 restaurant accounts and a consistent product, FMCG distributors come to you.",
    africans_doing_it: [
      "East African Breweries (Kenya) — one of Africa's oldest and largest brewers, now partially Diageo-owned but Kenyan in origin. Proof that African brewers can scale.",
      "Tanzanian Breweries Limited — partner of SABMiller, but local leadership and manufacturing.",
      "Nkulenu Industries (Ghana) — palm wine, local beverages; proving traditional drinks can be formally packaged and distributed.",
    ],
    tags: ["Beer", "Beverages", "Manufacturing", "Licensing", "Franchise"],
  },
  {
    id: "bp-bollore",
    company: "Bolloré Africa Logistics (now MSC / Terminal Link)",
    origin: "French",
    sector: "Port & Logistics",
    what_they_control:
      "For 30 years, Vincent Bolloré's group controlled the port terminal concessions at Abidjan, Lomé, Douala, Conakry, Tema, Dakar, Dar es Salaam, and more — the physical chokepoints where all African imports and exports pass. Recently sold to MSC (Mediterranean Shipping Company, a Swiss-Italian family business), so the ownership changed but the model remains.",
    their_model:
      "Win 25–30 year government concession to operate the port terminal — the single most strategic piece of infrastructure in any coastal African city. Charge handling fees on every container that enters or leaves the country. The government gets a fee and promises of investment. The concessionaire gets the cash flow from the country's entire import/export economy.",
    scale:
      "Bolloré Africa Logistics generated €600M+ annually from African operations at peak. The port terminal model is one of the highest-margin infrastructure businesses on Earth — you have a monopoly and every business in the country must pay you.",
    how_they_entered:
      "Post-independence governments needed capital to modernize ports. Bolloré offered to invest and operate in exchange for long concession periods. Political relationships (documented in French and African courts) secured many of these concessions.",
    your_move:
      "You cannot bid for the terminal concession (that requires hundreds of millions). But the logistics AROUND the port is where African entrepreneurs win: customs clearing agents, freight forwarding, last-mile delivery, bonded warehousing, truck fleets, container depot operations. Every major port city has 10–50 African-owned logistics companies doing $1M–$50M per year in revenue.",
    entry_point:
      "Customs clearing and freight forwarding license: costs $500–$2,000 in most African countries. You need relationships with the shipping lines and a deep understanding of customs procedures. Apprentice under an established clearing agent for 1–2 years, then launch your own. First client: a small importer who can't afford the big freight forwarders.",
    africans_doing_it: [
      "Kobo360 (Nigeria) — African-founded freight tech platform, $30M+ raised, connecting truck owners to cargo — the Uber for African logistics.",
      "ICTSI (the terminal model can be done by Africans — Ghanaian Investment Promotion Centre has been pushing for local port concession participation).",
      "Dozens of African-owned customs clearing firms in every port city across the continent — this business IS being done, just not at scale.",
    ],
    tags: ["Logistics", "Port", "Freight", "Concession", "Infrastructure"],
  },
  {
    id: "bp-transsion",
    company: "Transsion Holdings (Tecno, Itel, Infinix)",
    origin: "Chinese",
    sector: "Smartphones & Electronics",
    what_they_control:
      "40–50% of Africa's smartphone market. Walk into any phone shop in Lagos, Accra, Nairobi, Kinshasa, or Abidjan — more than half the phones on display are Tecno, Itel, or Infinix. All three brands are the same Chinese parent company.",
    their_model:
      "Study African consumers deeply. Make phones specifically for them: dual SIM cards (everyone has two lines), long battery life (power cuts), cameras tuned for darker skin tones, local language support. Sell at prices local incomes can actually afford (starter phones at $30–$60). Build a repair and distribution network in African cities. Africans needed a phone that worked for their life — Transsion made it.",
    scale:
      "Transsion listed on the Shanghai Stock Exchange in 2019. Revenue: $10B+ globally. Africa is their home market. In 2023, Tecno was the #1 selling smartphone brand in Africa — beating Samsung, Apple, and everyone else.",
    how_they_entered:
      "Entered Nigeria and Kenya around 2006 when the market was dominated by Nokia feature phones. Identified that African consumers were underserved — phones not designed for African needs, African skin tones, African price points. Filled the gap before Samsung or Apple paid attention.",
    your_move:
      "You can't build smartphones yet — the supply chain is Chinese. But the ecosystem around phones is wide open: phone accessories (screen protectors, cases — $2M+ market in Lagos alone), phone repair training centers, device financing/leasing (rent-to-own schemes for low-income buyers), phone recycling and refurbishment, and distribution (becoming the official Transsion or Samsung distributor for your city or region).",
    entry_point:
      "Phone accessories import: buy cases and protectors on Alibaba (minimum order $500–$2,000), sell in your local market at 3–5x markup. The sourcing knowledge is on YouTube. The market is in every city. This is how dozens of West African importers started before scaling to electronics wholesale.",
    africans_doing_it: [
      "Mara Phone (Rwanda/Uganda) — Ashish Thakkar's Mara Group built the first smartphone manufacturing plant on African soil. The technology is achievable.",
      "Pointek / Slot (Nigeria) — Nigerian-owned phone retail chains with 100+ stores. Running the same retail model but African-owned.",
      "Jumia (Africa-founded) — the e-commerce platform that distributes Transsion and others. Started by Africans, listed on NYSE.",
    ],
    tags: ["Electronics", "Smartphones", "Retail", "Import", "Manufacturing"],
  },
  {
    id: "bp-lebanese",
    company: "Lebanese Wholesale Trading Networks",
    origin: "Lebanese / Arab",
    sector: "Import / Wholesale Distribution",
    what_they_control:
      "In Côte d'Ivoire, Senegal, Sierra Leone, Liberia, Guinea, DRC, and across West and Central Africa — Lebanese and Arab trading families control the wholesale import and distribution of textiles, electronics, consumer goods, and food staples. They are the invisible layer between Asian manufacturers and African retailers.",
    their_model:
      "Buy in enormous bulk directly from Asian manufacturers. Import at prices individual African retailers could never negotiate. Extend credit to African retailers — 'take the goods now, pay in 30 days.' Build loyalty through consistent supply and credit availability. Over decades, the retailer becomes dependent. The wholesaler becomes indispensable. The margin flows to Beirut, not Lagos or Abidjan.",
    scale:
      "No public company, no listed revenue — these are family networks. But in individual countries the dominance is documented: Lebanese families are estimated to control 30–70% of formal wholesale trade in Sierra Leone and Liberia. In West Africa's textile trade, Lebanese import networks supply the majority of fabric sold in African markets.",
    how_they_entered:
      "Lebanese diaspora began arriving in West Africa in the early 1900s, with large waves during and after the Lebanese Civil War (1975–1990). They came with trading skills, tight family networks across borders, and access to capital from the Lebanese banking system. African governments of the post-independence era needed investment and had few restrictions on foreign traders.",
    your_move:
      "You can source from the same Chinese factories they buy from. Alibaba, 1688.com, and Chinese trade fairs are open to any African entrepreneur with capital and knowledge. The knowledge is the barrier, not the access. Organize buying cooperatives — 10 African traders pooling capital to place a single container-sized order gets you the same prices Lebanese wholesalers pay. Then distribute directly to retailers, cutting the Lebanese middleman out.",
    entry_point:
      "Start on Alibaba.com (or 1688.com for the wholesale Chinese platform). Find 3 products your local market needs. Request samples ($50–$200). Test them. If they sell, place your first container order ($5,000–$15,000 minimum). This is exactly how the Lebanese trading networks started — family money, Asian sourcing, African market knowledge.",
    africans_doing_it: [
      "Aliko Dangote — his empire started in commodities trading (cement, flour, sugar). He applied the Lebanese wholesale model but at national scale, then moved into manufacturing to eliminate the import dependency entirely.",
      "Jumia Market / Kilimall — African e-commerce platforms connecting manufacturers directly to consumers, disrupting the need for physical wholesale middlemen.",
      "Numerous African importers across Accra, Lagos, and Abidjan who have independently figured out Alibaba sourcing and now compete directly with Lebanese distributors.",
    ],
    tags: ["Import", "Wholesale", "Distribution", "Trading", "Textile"],
  },
  {
    id: "bp-bidco",
    company: "Bidco Africa (Vimal & Tarun Shah)",
    origin: "Indian",
    sector: "Cooking Oil / FMCG",
    what_they_control:
      "Cooking oil markets across East Africa. Elianto, Golden Fry, Rina, Cowboy, Pika — these are all Bidco brands. Walk into any Kenyan, Ugandan, or Tanzanian supermarket or duka: Bidco products are on the shelf.",
    their_model:
      "Start with one product in one market. Master the supply chain (crude palm oil import from Malaysia/Indonesia). Build the refinery. Master local distribution. Then extend into adjacent products: soap, personal care, baking fats, margarine. Each product uses the same factory infrastructure and distribution network.",
    scale:
      "Bidco Africa: estimated annual revenue $1B+. Operations in Kenya, Uganda, Tanzania, Rwanda, DRC, Ethiopia. From one cooking oil factory in Thika in the 1970s to East Africa's dominant FMCG company. Founded by Vimal and Tarun Shah — two Indian brothers who came to Kenya and built an empire.",
    how_they_entered:
      "Began as a small soap and edible oil business in Thika, Kenya in the 1970s. The Shah family identified that East Africa needed affordable, domestically produced cooking oil. They invested in refinery infrastructure before local or foreign competition moved in.",
    your_move:
      "The same model works at smaller scale. Groundnut oil, sesame oil, shea butter, moringa oil — all are produced by African farmers and sold as commodities because nobody is refining, bottling, and branding them. A small-scale oil press + bottling line + professional label can transform raw seeds into branded cooking oil selling at 5–8x the seed price.",
    entry_point:
      "A small oil press (groundnut, sesame, or shea) costs $2,000–$8,000. Buy from farmers at commodity price, press, filter, bottle, and sell. Your initial market: local restaurants, hotels, and retailers who currently buy from a major brand. Your advantage over Bidco: you're local, you can offer fresher product, and you can price competitively while keeping better margins than they get.",
    africans_doing_it: [
      "Olam International (founded by Sunny Verghese — Indian origin but now headquartered in Singapore) — the agricultural commodities model scaled to $30B+. Africans can replicate the regional version.",
      "Equatorial Coca-Cola Bottling (African-owned franchise) — showing the local-manufacture, regional-distribution model works for Africans.",
      "Numerous African women in Burkina Faso, Mali, and Ghana who have built shea butter processing businesses exporting to European cosmetic companies — already doing the value-add model.",
    ],
    tags: ["FMCG", "Cooking oil", "Manufacturing", "Distribution", "Consumer goods"],
  },
  {
    id: "bp-orange",
    company: "Orange Telecom Africa",
    origin: "French",
    sector: "Telecoms & Mobile Money",
    what_they_control:
      "Active in 17 African and Middle Eastern countries: Côte d'Ivoire, Senegal, Mali, Guinea, Burkina Faso, Niger, Cameroon, DRC, Central African Republic, Liberia, Madagascar, Sierra Leone, Botswana, Tunisia, Egypt, and more. The telecom network that millions of Africans use daily to call, text, and send money.",
    their_model:
      "Win national telecom licenses — these are government-controlled. The license is the asset. Once you have it, every call, every SMS, every MB of data generates revenue. Layer mobile money (Orange Money) on top: every transfer earns a fee. The infrastructure investment is front-loaded but the ongoing revenue is low-cost to generate.",
    scale:
      "Orange Group Africa & Middle East revenue: approximately €6 billion annually. Orange Money: 50M+ users, processing billions of dollars in transactions. The mobile money layer now generates as much revenue as the voice/data layer in some markets.",
    how_they_entered:
      "Post-colonial telecom infrastructure was state-owned. When African governments privatized state telecoms in the 1990s–2000s, French companies (Orange, Vivendi/Maroc Telecom) were positioned to buy and operate through privatization deals and license auctions.",
    your_move:
      "You cannot replicate Orange at national telecom scale — that requires licenses measured in tens of millions. But the fintech layer on top of mobile money IS replicable: mobile money agents (the last-mile human distribution network), mobile lending (M-Pesa and MoMo agents who extend credit against mobile money float), airtime credit, bill payment services. This is where African fintech entrepreneurs have built billion-dollar companies.",
    entry_point:
      "Become a licensed mobile money agent for Orange Money, MTN Mobile Money, M-Pesa, or Wave. Once you understand the money movement at street level, the fintech opportunity becomes clear. Companies like Wave (Senegal/West Africa), Chipper Cash, and MNT-Halan started by understanding the micro-level mechanics before building infrastructure on top.",
    africans_doing_it: [
      "Safaricom / M-Pesa (Kenya) — arguably the world's most successful mobile money platform, Kenyan government-owned, now processing $300B+ annually.",
      "Wave (Senegal/West Africa) — $1.7B valuation, offering mobile transfers cheaper than any bank. Shows the model can be challenged even in markets Orange dominates.",
      "Flutterwave (Nigeria/Pan-African) — $3B valuation, processing cross-border African payments. Built on top of the infrastructure Orange and MTN own.",
    ],
    tags: ["Telecoms", "Mobile money", "Fintech", "License", "Infrastructure"],
  },
  {
    id: "bp-chinese-construction",
    company: "Chinese State Construction Companies (CRBC, Sinohydro, CSCEC, CHEC)",
    origin: "Chinese",
    sector: "Construction & Infrastructure",
    what_they_control:
      "The majority of major infrastructure projects built in Africa since 2000: roads, railways, stadiums, government buildings, dams, airports, and ports. From the Standard Gauge Railway in Kenya to the Bui Dam in Ghana to roads across every African country — Chinese companies won the contracts.",
    their_model:
      "Chinese development banks (Exim Bank China, China Development Bank) finance infrastructure at low interest rates — with the condition that Chinese companies execute the projects. The African government gets the loan and the infrastructure. The Chinese company gets the contract, brings Chinese workers and materials, and returns cash to China. The construction job stays in China even though the building is in Africa.",
    scale:
      "Chinese construction firms won an estimated $50–70 billion in African construction contracts annually in peak years (2014–2018). Infrastructure across the entire continent has been built by a handful of Chinese SOEs.",
    how_they_entered:
      "Forum on China-Africa Cooperation (FOCAC) established in 2000 created government-to-government lending and project relationships. Chinese banks offered infrastructure financing that Western banks wouldn't — and tied it to Chinese company execution.",
    your_move:
      "African construction companies CAN win sub-contracts from Chinese main contractors — and governments increasingly require local content. More importantly: build your expertise in local construction, serve the private sector (residential, commercial, agricultural infrastructure) where Chinese companies don't compete. The real opportunity is in the materials — bricks, tiles, cement blocks, steel fabrication, roofing materials — the inputs for construction that are currently imported or manufactured by foreign-owned companies.",
    entry_point:
      "Register as a construction company (relatively low barriers in most African countries). Target sub-contract work in your region for 2–3 years — this builds your track record, equipment base, and crew. Once you have completed projects, you qualify to bid independently for government contracts. The AGPO (Access to Government Procurement Opportunities) in Kenya reserves 30% of government tenders for youth, women, and PWDs — similar frameworks exist across Africa.",
    africans_doing_it: [
      "Julius Berger (Nigeria) — one of Africa's largest construction companies, Nigerian-owned, $1B+ revenue. Proof that African construction companies can operate at scale.",
      "RMB Holdings / Rebosis (South Africa) — African-owned construction and property development at scale.",
      "Hundreds of small and medium African contractors serving local residential and commercial markets — the foundation of the industry.",
    ],
    tags: ["Construction", "Infrastructure", "Government contracts", "Sub-contracting", "Materials"],
  },
  {
    id: "bp-shoprite",
    company: "Shoprite / Pick n Pay / Game (South African)",
    origin: "South African",
    sector: "Supermarket Retail",
    what_they_control:
      "Shoprite operates 800+ stores across 12 African countries. In Nigeria, Zambia, Ghana, Uganda, Kenya, Mozambique — Shoprite competes against and dominates local retailers with its sourcing power, brand trust, and supply chain infrastructure.",
    their_model:
      "Build large format retail stores in high-traffic locations. Central buying — negotiate enormous volume discounts from suppliers. Regional distribution centers. Branded house brands that undercut premium brands. African consumers trust formal retail for safety and consistency. The format works across income levels if sized correctly.",
    scale:
      "Shoprite Group annual revenue: R200B+ (South African Rand) — approximately $11B+. Africa (outside South Africa) contributes a growing share. In Nigeria alone, Shoprite was processing $100M+ in annual revenue before partial withdrawal.",
    how_they_entered:
      "Expanded from South Africa in the 1990s as African middle classes grew. Government retail licenses are relatively easy to obtain — unlike telecom or port concessions. First-mover advantage in formal retail in many cities where the alternative was traditional markets.",
    your_move:
      "The local supermarket and mini-mart sector is wide open. Shoprite can't serve every neighborhood — the local version (500–2,000 sqm) serves the same function at community scale and has geographic advantages Shoprite can't replicate. Additionally: become a Shoprite supplier. Shoprite purchases locally when it can — getting your product on their shelves gives you distribution to millions of shoppers without your own stores.",
    entry_point:
      "A neighborhood mini-mart (500 sqm) in a dense urban area: $30,000–$80,000 startup cost. Stock the 200 most-purchased SKUs in your neighborhood. Source 30–40% from local producers (gives you margin advantage over Shoprite). Then apply as a local supplier to Shoprite, Pick n Pay, or Carrefour for your own manufactured product.",
    africans_doing_it: [
      "Nakumatt (Kenya) — was East Africa's largest retail chain before financial difficulties. Proof that an African-founded chain can scale to 60+ stores.",
      "Massmart Makro / Game stores have African management even if South African ownership.",
      "Dozens of Nigerian, Ghanaian, and Kenyan supermarket mini-chains (Everyday, Ebeano, Palace Supermarket) run by African entrepreneurs — this sector IS being built.",
    ],
    tags: ["Retail", "Supermarket", "Distribution", "FMCG", "Local sourcing"],
  },
];
