export interface FounderProfile {
  name: string;
  background: string;
  from: string;
}

export interface BrandDeepDive {
  id: string;
  brand_name: string;
  annual_revenue_est: string;
  founded: number;
  founder: FounderProfile;
  elevator_pitch: string;
  the_real_story: string;
  african_ingredient: string;
  what_africa_earns: string;
  what_they_earn: string;
  multiplier: string;
  their_genius: string[];
  packaging_notes: string;
  pricing_breakdown: {
    their_cost_per_unit: string;
    their_retail_price: string;
    margin: string;
  };
  what_you_can_do: string;
  tiktok_angle: string;
  instagram_angle: string;
  naming_lesson: string;
  africa_product_ideas: string[];
  the_friend_take: string;
}

export const BRAND_DEEP_DIVES: BrandDeepDive[] = [
  {
    id: "josie-maran",
    brand_name: "Josie Maran Cosmetics",
    annual_revenue_est: "$100M+ (estimated)",
    founded: 2007,
    founder: {
      name: "Josie Maran",
      background:
        "American model. You've seen her in Sports Illustrated, in Vogue, in campaigns for Guess and Maybelline. She had the career, the magazine covers, the agency. In her early 30s, she walked away from conventional modeling work and started a beauty brand. She had no cosmetics training. No chemistry background. She had access, a nose for what women actually wanted, and she'd spent time in Morocco.",
      from: "California, USA",
    },
    elevator_pitch:
      "Josie Maran sells argan oil. That's it. Moroccan argan oil, positioned as liquid gold from the Sahara, turned into serums, foundations, body butters, lip treatments. What started as a single $48 bottle became a $100M brand sold at Sephora worldwide.",
    the_real_story:
      "Josie Maran discovered argan oil through Moroccan women who'd been using it for centuries — for skin, hair, cooking, everything. She saw what Moroccan women already knew and asked: 'why doesn't the Western beauty market know this yet?' She launched in 2007 with Argan Oil as the hero product. The brand grew because the story was real — ancient ingredient, Moroccan origin, luxury positioning, clean beauty angle. Sephora put it in stores. The rest is history.",
    african_ingredient: "Argan oil (Morocco) — pressed from the kernels of the argan tree",
    what_africa_earns: "Morocco's entire national argan oil export earns roughly $30–50M per year",
    what_they_earn: "Josie Maran alone is estimated to generate $100M+ annually — more than Morocco's entire argan export",
    multiplier: "A bottle of raw argan oil costs $8–12 to source. Josie Maran sells a 1.7oz bottle for $48–$72. That's 40–100× per unit.",
    their_genius: [
      "They named the ingredient ('Argan Oil') before anyone in mainstream beauty did — first mover advantage",
      "They made the origin story central to the brand, not an afterthought",
      "They positioned it as 'liquid gold' — simple, evocative, easy to remember",
      "They found a clean beauty angle before 'clean beauty' was even a phrase",
      "They launched at Sephora, not indie markets — straight to premium retail",
      "Josie's own face IS the brand. A real person, a real story. Not a made-up mascot.",
    ],
    packaging_notes:
      "Minimalist gold and cream packaging. Clean, aspirational, not cluttered. The bottle looks like a luxury perfume, not a cooking oil bottle. They make you feel like you're buying something precious — which you are, if you're paying $48 for it.",
    pricing_breakdown: {
      their_cost_per_unit: "~$3–5 for argan oil + $2–3 packaging + $1–2 manufacturing = $6–10 total COGS",
      their_retail_price: "$48–$72 for the flagship Argan Oil",
      margin: "~75–85% gross margin. That is the power of positioning.",
    },
    what_you_can_do:
      "If you're in Morocco — you're sitting on this. The ingredient is yours. The origin story is yours. No American model can compete with a Moroccan woman who grew up watching her grandmother press argan oil from trees her family has grown for generations. That story is worth more than anything Josie Maran can claim. The only thing standing between you and her revenue is branding and distribution.",
    tiktok_angle:
      "'This is what Josie Maran buys from Morocco for $8 and sells for $48. I'm from Morocco and I want to show you what we actually do with argan oil.' Film yourself at the argan tree. Film the pressing process. Film your grandmother. Then show your product. That video could get 5M views.",
    instagram_angle:
      "The 'before Josie Maran, there was us' angle. Archive photos of Moroccan women with beautiful skin. Side by side with Josie Maran's $70 bottle. Then your product. Heritage vs. imitation.",
    naming_lesson:
      "Josie Maran named herself. Your name, your grandmother's name, your village name — any of these carry more authenticity than a made-up brand name. 'Fatima Argan' is more powerful than 'LuxeGlow Beauty.'",
    africa_product_ideas: [
      "Argan-infused hair oil for 4C natural hair (underserved category, huge diaspora demand)",
      "Argan face oil for dark skin tones (most argan brands don't speak to melanin — your unfair advantage)",
      "Argan cooking oil in luxury packaging (food-grade argan is used in Moroccan cuisine — position it for high-end restaurants and home cooks)",
      "Argan body butter with oud (combine two signature Moroccan ingredients — completely unique)",
      "Men's argan beard oil (men's grooming is fast-growing, argan is perfect for it)",
    ],
    the_friend_take:
      "Look — Josie Maran has never planted an argan tree, never pressed oil from a kernel, never learned the Amazigh word for any of this. She's a model who saw an opportunity. You actually have the tree in your backyard. The playing field is not even — it's tilted in your favor. You just haven't built the brand yet.",
  },
  {
    id: "the-body-shop-shea",
    brand_name: "The Body Shop",
    annual_revenue_est: "$1.1B (2022)",
    founded: 1976,
    founder: {
      name: "Anita Roddick",
      background:
        "British activist and entrepreneur. She opened the first Body Shop in Brighton, England in 1976. She was not a chemist. She was not a beauty industry veteran. She was a woman who believed cosmetics companies were lying to their customers and charging too much for it. Her original store had 15 products. By the time she sold to L'Oréal in 2006 for $1.14 billion, The Body Shop had 2,000 stores in 55 countries.",
      from: "Littlehampton, England",
    },
    elevator_pitch:
      "The Body Shop built a $1B+ business on ethical beauty — cruelty-free, fair trade, community-sourced. Their shea butter from Ghana became one of their signature ingredients. The brand's entire value proposition is: we source from places that matter and we tell you about it.",
    the_real_story:
      "The Body Shop's 'Community Fair Trade' program sources shea butter from Ghana through a women's cooperative called Tungteiya. They pay above-market rates, fund community development projects, and use the story in every marketing touchpoint. The Ghanaian women who collect shea nuts and press the butter earn more than they would in the open market — but still a fraction of what The Body Shop earns per bottle of shea body butter.",
    african_ingredient: "Shea butter (Ghana/Burkina Faso) — from the nut of the shea tree",
    what_africa_earns: "$0.30–0.80/kg for raw shea butter at the farm/cooperative level",
    what_they_earn: "$18–28 for a 200ml jar of shea body butter (roughly $90–140 per kg equivalent)",
    multiplier: "90–250× per kilogram between what Africa earns and what The Body Shop earns at retail",
    their_genius: [
      "The ethical sourcing story IS the product — you're not buying shea butter, you're buying your conscience feeling good",
      "They paid fair trade premiums but captured essentially all the brand value themselves",
      "The 'Community Fair Trade' label made their sourcing a marketing asset, not a cost",
      "They knew 'Ghanaian shea butter' sounds more exotic and trustworthy than 'synthetic emollient' — they leaned in",
    ],
    packaging_notes:
      "Clean, eco-friendly looking. Dark brown glass or recycled plastic. Simple typography. The packaging signals 'natural' without trying too hard. Nothing ostentatious — the ethics story does the luxury positioning.",
    pricing_breakdown: {
      their_cost_per_unit: "~$2–4 shea butter + $1–2 packaging + $2–3 formulation/manufacturing = $5–9 COGS",
      their_retail_price: "$18–28 for a 200ml jar",
      margin: "~65–75% gross margin",
    },
    what_you_can_do:
      "The Ghanaian or Burkinabè entrepreneur who makes shea body butter does not need to pay a fair trade premium to themselves. Their cost of goods is already lower. Their story is more authentic. Their ingredient is fresher. The only gap is: packaging, positioning, and distribution. That gap is closable.",
    tiktok_angle:
      "'The Body Shop charges $25 for Ghanaian shea butter. I'm from Ghana. I make it from scratch. Watch.' Show the whole process: collecting the nuts, roasting, grinding, pressing, churning. Then show your finished product next to The Body Shop bottle. The contrast alone will go viral.",
    instagram_angle:
      "The cooperative angle: show the women who make it. Not as charity — as business partners, as the real artisans. 'Meet the women behind every jar.' This is more powerful than anything The Body Shop can do with a photograph taken by a UK photographer on a press trip.",
    naming_lesson:
      "'Shea by Tungteiya' or 'Northern Ghana Shea Collective' or just the founder's name. The place of origin is the luxury credential — use it.",
    africa_product_ideas: [
      "Whipped shea butter (already popular in diaspora — but with a legitimate Ghanaian origin story, you dominate)",
      "Shea-based baby products (safest ingredient on earth for baby skin, huge market, premium price point)",
      "Shea hair mask for 4C/type 4 hair (this is an enormous underserved market globally)",
      "Shea + neem multipurpose balm (two African ingredients, one product, unprecedented positioning)",
      "Unrefined (raw, yellow) shea butter positioned as the authentic version vs. refined white shea (authenticity premium)",
    ],
    the_friend_take:
      "The Body Shop basically built a $1 billion business on your grandmother's moisturizer. The shea butter story — the village women, the traditional pressing, the golden butter — is YOUR story. They borrowed it. You own it. Start there.",
  },
  {
    id: "starbucks-ethiopian-coffee",
    brand_name: "Starbucks",
    annual_revenue_est: "$36B (2023)",
    founded: 1971,
    founder: {
      name: "Howard Schultz (scaled it from a small Seattle roaster)",
      background:
        "Howard Schultz grew up in Brooklyn public housing. He joined Starbucks as Director of Operations in 1982, convinced the founders to pivot to espresso drinks after a trip to Italy, bought the company in 1987 for $3.8 million, and turned it into a global empire. He understood that people weren't buying coffee — they were buying a place. A third place between home and work. The coffee was almost secondary.",
      from: "Seattle, USA",
    },
    elevator_pitch:
      "Starbucks made $36 billion in 2023. Ethiopia, the birthplace of coffee, earns roughly $1.5–2B from coffee exports annually — for the entire country. A single Starbucks 'Reserve' single-origin Ethiopian coffee costs $28 at retail. The farmer who grew those beans earns $0.25–0.40 per pound.",
    the_real_story:
      "Ethiopia tried to trademark its coffee origins (Yirgacheffe, Sidamo, Harrar) so Ethiopian farmers could earn more from the premium positioning. Starbucks fought the trademark for years before eventually settling. The fight itself tells you everything: the origin story is so valuable that Starbucks was willing to spend millions of dollars fighting Ethiopia's right to own it.",
    african_ingredient: "Arabica coffee (Ethiopia) — coffee was literally invented in Ethiopia (the word 'coffee' comes from Kaffa, a region in Ethiopia)",
    what_africa_earns: "$0.60–1.50/lb for green beans at origin price",
    what_they_earn: "$28 for a 250g bag of 'Reserve' Ethiopian coffee (equivalent to $50+/lb at retail weight)",
    multiplier: "30–80× from bean price to Starbucks retail",
    their_genius: [
      "They built a 'third place' concept — it's not about coffee, it's about the experience of the space",
      "They made premium pricing normal ($7 for a latte taught an entire generation that coffee can cost $7)",
      "Single-origin storytelling: 'Ethiopian Yirgacheffe' sounds poetic and prestigious — they use this to sell premium lines",
      "They own the customer relationship — you come back every day, and they have your name, your order, your face",
    ],
    packaging_notes:
      "Clean, forest-green brand color. 'Reserve' line uses dark, sophisticated packaging with hand-drawn illustration. The packaging signals craft and premium without going to luxury territory.",
    pricing_breakdown: {
      their_cost_per_unit: "~$4–6 for beans + $1–2 packaging + roasting/logistics = $6–10 per bag",
      their_retail_price: "$14–28 per 250g bag",
      margin: "~60–70% gross margin on retail coffee",
    },
    what_you_can_do:
      "Ethiopia has Yirgacheffe. Kenya has AA. Rwanda has Bourbon. These aren't just coffees — they're the most celebrated coffees in the world. An African brand that does direct-to-consumer specialty coffee with the farmer's name on the bag, subscriptions, and a story that Starbucks will never be able to tell — that's a business.",
    tiktok_angle:
      "'You pay $7 for Starbucks Ethiopian coffee. The farmer earned $0.40 for the beans in that cup. I'm building a brand where you know the farmer by name.' The justice angle resonates enormously on TikTok.",
    instagram_angle:
      "The farmer's face on the bag. Not as branding — as authorship. 'This coffee was grown by [Name], in [specific village], at [altitude]m above sea level, for [X] years.' That story is unreplicable.",
    naming_lesson:
      "'Kaffa Reserve' (named after the Ethiopian region that gave coffee its name), or the specific farm/cooperative name, or the altitude and village. Terroir language (borrowed from wine) elevates the product.",
    africa_product_ideas: [
      "Specialty single-origin African coffee subscription service (direct-to-consumer, $25–45/month)",
      "Coffee cascara tea made from the coffee cherry pulp (waste product turned into premium product — see waste-to-wealth)",
      "African coffee ceremony kit targeting diaspora and international customers (coffee + traditional cup + ceremony guide)",
      "Cold brew concentrate using Ethiopian or Kenyan beans, positioned as 'the original caffeine from its homeland'",
    ],
    the_friend_take:
      "Coffee is from Ethiopia. Not Seattle. Not Italy. Ethiopia. Your country created this $500 billion global industry and earns less than 1% of it. This is not bad luck — it's a distribution and branding problem that you can solve, starting with one bag and a good story.",
  },
  {
    id: "loccitane-shea",
    brand_name: "L'Occitane en Provence",
    annual_revenue_est: "€2.1B (2023)",
    founded: 1976,
    founder: {
      name: "Olivier Baussan",
      background:
        "French entrepreneur. He started by distilling essential oils from Provençal plants and selling them at markets in southern France. He discovered shea butter from West Africa in the 1980s and built a sourcing relationship with women's cooperatives in Burkina Faso. That relationship became the cornerstone of the brand's ethical sourcing story — and their most profitable product line.",
      from: "Provence, France",
    },
    elevator_pitch:
      "L'Occitane built a €2.1 billion beauty empire with the same shea butter your grandmother used. They source from Burkina Faso cooperatives, pay 'fair trade' rates, and sell the butter back to the world at 200× the source price in €30 hand creams.",
    the_real_story:
      "L'Occitane's Burkina Faso program is genuinely one of the better fair trade stories — they've been working with the same cooperatives for 30+ years, funding schools, literacy programs, healthcare. But the economics remain: Burkina Faso women earn $0.50–$1 per kg for butter they press by hand. L'Occitane sells that butter as part of a €35 hand cream. The community development programs cost L'Occitane a fraction of what they earn from the story.",
    african_ingredient: "Shea butter (Burkina Faso) — wild harvested, traditionally pressed",
    what_africa_earns: "$0.50–1.00/kg for raw butter at cooperative level",
    what_they_earn: "€35 for a 150ml hand cream (approximately €200+/kg equivalent at retail)",
    multiplier: "200–400× from cooperative price to L'Occitane retail",
    their_genius: [
      "The Burkina Faso story is their single most powerful marketing asset — they mention it in every product description",
      "They created a sustainable sourcing narrative before the market demanded it, making them look ahead of the curve",
      "Their Shea Butter Hand Cream is the brand's #1 bestseller — a €35 product built on €0.60 of raw ingredient",
      "They go deep into the tradition ('women have been harvesting shea for centuries') — borrowed authority",
    ],
    packaging_notes:
      "Provençal aesthetic — lavender colors, vintage typography, French countryside imagery. Deliberately provincial and artisan-feeling. The irony: the brand most associated with French fields gets its #1 ingredient from Burkina Faso.",
    pricing_breakdown: {
      their_cost_per_unit: "~€3–5 shea butter + formulation/ingredients + €2–3 packaging = ~€6–9 COGS",
      their_retail_price: "€28–45 for 150–200ml products",
      margin: "~70–80% gross margin",
    },
    what_you_can_do:
      "You do not need to pretend to be from Provence. You are from Burkina Faso. From Ghana. From Mali. Your grandmother pressed this butter by hand. Her mother did before her. That is a story so much more powerful than a French man discovering it at a market that there's genuinely no competition — if you know how to tell it.",
    tiktok_angle:
      "'L'Occitane charges €35 for a hand cream made from Burkinabè shea butter. The women who press that butter earn €0.60/kg. I'm from Burkina Faso and I'm building something different.' That video will find its audience.",
    instagram_angle:
      "Show the hands that press the butter. Then show the finished cream. Then show the L'Occitane price tag. No words needed. The image does everything.",
    naming_lesson:
      "L'Occitane means 'the Occitan woman' — a woman from southern France. Your brand name can mean something too. 'La Burkinabè' or 'Femme du Sahel' or 'La Sheasière' — French sounds luxurious, your origin is the credential.",
    africa_product_ideas: [
      "Shea hand cream with baobab oil for extreme dryness (Sahel climate — the formulation matches the climate)",
      "Shea-based lip treatment using natural African pigments (turmeric, hibiscus) for tinted balm",
      "Artisan shea soap bars (cold-process soap is low-tech, high-margin, beautiful to photograph)",
      "Shea butter 'cooking + beauty' dual-use product — traditional use, positioned as luxury 'food-grade ingredient'",
    ],
    the_friend_take:
      "L'Occitane visits Burkina Faso once a year for photos. You live there. This is your ingredient, your women, your story. The only reason they're telling it is because you haven't started yet.",
  },
];

export const DIASPORA_ADVANTAGE = {
  title: "The Diaspora Superpower",
  the_truth:
    "African diaspora founders in London, Paris, Toronto, New York have an advantage that nobody talks about: you understand both worlds. You know what your mother's shea butter smells like AND you know what a Sephora customer expects from packaging. You can code-switch between the kitchen in Lagos and the pitch deck for a London buyer. That double consciousness — usually treated as a burden — is your business moat.",
  distribution_shortcuts: [
    "Sell to your community first — diaspora networks are tight, they will tell each other",
    "Find the African grocery stores in your city — they're already selling to your exact customer",
    "African diaspora Facebook groups are free marketing with buying power",
    "Target African student unions at universities — thousands of potential customers in one organization",
    "Partner with African restaurants to stock your product at the counter — they already have the customer",
  ],
  pricing_permission:
    "The diaspora will pay premium for quality African products. They are HUNGRY for them. A Senegalese woman in Paris will pay €25 for bissap syrup that tastes like her mother's if you tell the story right. She's paying for the memory as much as the product. Price accordingly.",
};
