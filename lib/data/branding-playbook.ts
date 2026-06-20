export interface BrandNamingFormula {
  formula: string;
  how_it_works: string;
  examples: string[];
  works_for: string[];
  avoid_if: string;
}

export interface PackagingRequirement {
  market: string;
  flag: string;
  mandatory_on_label: string[];
  nice_to_have: string[];
  common_mistakes: string[];
  certification_needed: string;
  pro_tip: string;
}

export interface TikTokStrategy {
  category: string;
  hook_formulas: string[];
  posting_cadence: string;
  content_pillars: string[];
  hashtags: string[];
  first_30_days: string[];
  what_performs_best: string;
  what_kills_reach: string;
}

export interface InstagramStrategy {
  feed_grid_strategy: string;
  reels_ideas: string[];
  stories_cadence: string;
  shopping_setup: string[];
  caption_formula: string;
  growth_moves: string[];
  brand_archetypes: string[];
}

export interface BrandArchetype {
  archetype: string;
  vibe: string;
  visual_language: string;
  tone_of_voice: string;
  works_for: string[];
  example_brands: string[];
  avoid: string;
}

export const BRAND_NAMING_FORMULAS: BrandNamingFormula[] = [
  {
    formula: "The Origin Story Name",
    how_it_works:
      "Name the place, the tradition, or the people your product comes from. Foreigners pay premium for origin. Locals feel pride. Diaspora feel nostalgia. It does all three at once.",
    examples: ["Linguère Dairy (Fulani heartland)", "Casamance Gold (Senegal's rice region)", "Lalibela Reserve (Ethiopia)", "Volta Cacao (Ghana)", "Rift Valley Honey"],
    works_for: ["Food and beverage", "Beauty and skincare", "Spirits and tea", "Agricultural products"],
    avoid_if: "Your product has no meaningful connection to a place — it feels like cultural appropriation of your own culture.",
  },
  {
    formula: "The Ancestor Name",
    how_it_works:
      "Use a name from African history, mythology, or ancient kingdoms. It signals prestige, depth, and a legacy that Western brands can never replicate. It positions you as the original, not the imitation.",
    examples: ["Nefertiti Oils", "Mansa Reserves (after Mansa Musa, richest man ever)", "Anansi Collective", "Sundiata Foods", "Kush Beauty", "Alkebulan (the ancient name for Africa)"],
    works_for: ["Luxury and premium products", "Fashion and leather goods", "Fine foods and spirits", "Any brand targeting diaspora"],
    avoid_if: "You haven't researched who the ancestor was — someone will ask and you must know the story deeply.",
  },
  {
    formula: "The Ingredient Hero",
    how_it_works:
      "Lead with your star ingredient, especially if it's exotic to Western consumers who will pay premium for things they can't pronounce. Make the unfamiliar sound glamorous.",
    examples: ["Baobab Ritual", "Moringa & Co.", "Shea Sisters", "Bissap Rouge", "Néré Naturals", "Black Seed Beauty"],
    works_for: ["Skincare and beauty", "Health supplements", "Teas and infusions", "Functional foods"],
    avoid_if: "Your ingredient is too hard to pronounce for your target market — then romanticize it, don't translate it.",
  },
  {
    formula: "The Founder's Confidence Name",
    how_it_works:
      "Use your name. Or a family name. Or a personal story word. The brands people pay $400 for are often just someone's name on a bottle. Josie Maran is literally her name. Charlotte Tilbury. Maison Margiela. Confidence is the product.",
    examples: ["Aïssatou Beauty", "Kofi Reserve", "Ngo Naturals", "Abeke & Sons", "Aminata Fine Foods"],
    works_for: ["Luxury goods", "High-end beauty", "Artisan food and spirits", "Fashion atelier"],
    avoid_if: "You plan to sell the brand — founder names make acquisition conversations messy.",
  },
  {
    formula: "The Feeling Name",
    how_it_works:
      "Name the emotional state your product creates, not the product itself. People don't buy shea butter. They buy the feeling of skin that's been nourished. They buy the feeling of being powerful. Name that.",
    examples: ["Radunanza (Italian for 'gathering', but sounds luxurious)", "Kali (Sanskrit for 'black', also sounds premium)", "Ìmọlè (Yoruba for 'light')", "Umoya (Zulu for 'spirit/breath')", "Amani Beauty (Swahili for 'peace')"],
    works_for: ["Lifestyle brands", "Wellness and beauty", "Home goods", "Premium food"],
    avoid_if: "The feeling name requires explanation — it needs to communicate instantly.",
  },
];

export const PACKAGING_REQUIREMENTS: PackagingRequirement[] = [
  {
    market: "European Union",
    flag: "🇪🇺",
    mandatory_on_label: [
      "Product name",
      "Net quantity (weight or volume in metric — grams, ml, liters)",
      "List of ingredients in descending order by weight",
      "Any allergens in BOLD (gluten, nuts, dairy, eggs, soya, sesame, etc.)",
      "Name and address of EU-based responsible operator (importer or distributor)",
      "Country of origin ('Product of Senegal', 'Made in Ghana')",
      "Best before date or use by date",
      "Lot number / batch code",
      "Storage conditions if product requires them",
      "For food: nutritional information table (per 100g and per serving)",
    ],
    nice_to_have: [
      "QR code linking to your story / farm origin",
      "Certification logos (Organic, Fairtrade, Rainforest Alliance)",
      "Carbon footprint / sustainability statement",
      "Shelf-life after opening",
    ],
    common_mistakes: [
      "No EU-based address — you need a EU importer or distributor listed, not your Dakar address",
      "Allergen not in bold — this is an automatic rejection",
      "Net weight in ounces instead of grams",
      "Missing 'Best Before' date or using the wrong format (EU uses DD/MM/YYYY)",
      "Ingredient names in local language instead of English/French/German",
    ],
    certification_needed: "No single EU certification required for most foods — but cosmetics need EU Cosmetics Regulation (EC) 1223/2009 compliance. Novel foods (baobab, moringa) need Novel Food authorization.",
    pro_tip:
      "Hire a EU food law consultant (cost: $500–$2,000) before printing your first label. A wrong label means your entire shipment gets rejected at Rotterdam. The consultant fee is nothing compared to that loss.",
  },
  {
    market: "United States",
    flag: "🇺🇸",
    mandatory_on_label: [
      "FDA-compliant Nutrition Facts Panel (for food) or Drug Facts Panel (if making health claims)",
      "Ingredient list in descending order by weight",
      "Allergen statement ('Contains: peanuts, tree nuts' etc.)",
      "Net contents in US customary units (oz, fl oz) AND metric",
      "Name and address of US distributor or importer (not your African address)",
      "Country of origin on food products ('Product of Kenya')",
      "Manufacturer's name and address",
    ],
    nice_to_have: [
      "USDA Organic seal (if certified — powerful for premium pricing)",
      "Non-GMO Project Verified",
      "Kosher or Halal certification (opens specific market segments)",
      "QR code for brand story",
    ],
    common_mistakes: [
      "Making health claims ('cures diabetes', 'boosts immune system') — FDA will shut this down",
      "No US address on label — you must have a US importer or agent",
      "Cosmetics with no FDA registration for the facility — technically required",
      "Missing 'Contains' allergen declaration",
      "Serving size that doesn't match FDA guidelines for your product category",
    ],
    certification_needed:
      "For food: FDA facility registration if exporting directly. For cosmetics: technically need FDA cosmetic facility registration under MoCRA (2024 law). For supplements: FTC rules on claims are strict.",
    pro_tip:
      "The US market rewards certifications. A USDA Organic certification for your shea butter makes it a $45 product instead of a $12 product. The certification costs $400–$1,500/year. Do the math.",
  },
  {
    market: "West Africa / ECOWAS",
    flag: "🌍",
    mandatory_on_label: [
      "Product name",
      "Net quantity in metric",
      "Ingredient list",
      "Name and address of manufacturer",
      "Country of origin",
      "Expiry or best before date",
      "National regulatory approval number (NAFDAC in Nigeria, FDA-Ghana, CNAAS in Senegal, etc.)",
      "Batch number",
    ],
    nice_to_have: [
      "Halal certification (vital for Muslim-majority markets like Senegal, Mali, Niger)",
      "Both French and English on label (for cross-border trade)",
      "'Made in Africa' or 'Proudly African' messaging",
      "QR code for authenticity verification (growing anti-counterfeiting trend)",
    ],
    common_mistakes: [
      "Skipping national regulatory approval — NAFDAC in Nigeria will pull your product off shelves",
      "Only English label in French-speaking West Africa",
      "Prices in USD on packaging — use CFA or local currency or no currency",
      "Health claims that don't match regulatory approval category",
    ],
    certification_needed:
      "Each country has its own food regulatory body. Nigeria: NAFDAC (allow 3–6 months, cost varies). Ghana: FDA Ghana. Senegal: DRHPF / CNAAS. Get the certification for your biggest market first, then expand.",
    pro_tip:
      "Register in Nigeria first — it's the hardest and the biggest. Once you have NAFDAC approval, every other West African regulator takes you more seriously. It's a hard door to open that unlocks many others.",
  },
  {
    market: "United Kingdom",
    flag: "🇬🇧",
    mandatory_on_label: [
      "Product name",
      "Net quantity in metric",
      "Ingredient list in descending order by weight",
      "Allergens in BOLD",
      "UK-based Responsible Person or UK importer address (since Brexit)",
      "Country of origin",
      "Best before or use by date",
      "Lot number",
      "Storage conditions",
      "Nutritional information (for food)",
    ],
    nice_to_have: [
      "UK Organic certification (Soil Association) — respected and recognized",
      "Fairtrade certification — resonates strongly with UK consumers",
      "COSMOS certification for natural cosmetics",
    ],
    common_mistakes: [
      "Using EU label post-Brexit — UK has its own requirements now, separate from EU",
      "No UK address — same as EU, you need a UK importer",
      "Missing UKCA mark for certain regulated products",
    ],
    certification_needed: "Post-Brexit UK has its own cosmetics regulation mirroring EU Cosmetics Regulation but with UK CA mark. Hire a UK Responsible Person (cost: $200–$500/year) for cosmetics.",
    pro_tip:
      "The UK African diaspora market is underserved and hungry for premium African products. Target Brixton Market, Dalston, and online first. The community will market you to the mainstream.",
  },
];

export const TIKTOK_STRATEGIES: TikTokStrategy[] = [
  {
    category: "African Food & Beverage Brand",
    hook_formulas: [
      "I turned [ingredient] into a $[X] business and here's how 👇",
      "You've been sleeping on [ingredient] — this is what [country] has been hiding",
      "This [product] sold out in 48 hours. Here's what happened",
      "Nobody told me Africa had [product] until I started this brand",
      "POV: You grow up in [country] and realize the world has been paying $80 for your grandma's recipe",
      "Stitch this if you've ever paid $15 for something your auntie makes for $2",
    ],
    posting_cadence: "1–2 videos per day for the first 60 days. The algorithm rewards consistency over quality in the early phase. A shaky authentic video beats a polished ad.",
    content_pillars: [
      "The Origin (where does this ingredient grow? show the farm, the village, the harvest)",
      "The Process (show the transformation — from raw to finished, ideally on camera)",
      "The Taste Reaction (film real people — strangers, family, friends — trying it for the first time)",
      "The Business Behind It (how you started, what you paid, what you earn — people love transparency)",
      "The Why (what problem does your product solve? what are you proving?)",
      "Educational Content (teach people what baobab is, why moringa is medicine, what hibiscus tastes like)",
    ],
    hashtags: [
      "#AfricanBusiness",
      "#MadeInAfrica",
      "#SmallBusinessTikTok",
      "#AfricanFood",
      "#FoodTikTok",
      "#BusinessOwner",
      "#AfricanEntrepreneur",
      "#BlackOwnedBusiness",
      "#AfricanDiaspora",
      "#TikTokMadeMeBuyIt",
      "Use 3–5 niche hashtags + 2–3 broad ones. Don't use all 30 — it confuses the algorithm",
    ],
    first_30_days: [
      "Day 1–7: Post your origin story. Who are you, where does your ingredient come from, why does this matter. 3 videos.",
      "Day 8–14: Show the process. Farm to product. Raw to refined. Let people see what goes into it.",
      "Day 15–21: Film taste reactions. Go to a busy area and offer free samples. Film genuine reactions only — no actors.",
      "Day 22–30: Show your first real customer. Interview them. What did they think? Why did they buy? This is your social proof.",
    ],
    what_performs_best:
      "Authenticity and contrast. The most viral African food content is: 'I grew up eating this, Europeans pay $40 for it in a fancy jar, so I started selling it.' The contrast between everyday African life and Western luxury pricing is magnetic content.",
    what_kills_reach:
      "Posting like an ad. Static product shots with no story. Using background music that TikTok flags. Posting inconsistently (3 videos one week, nothing for two weeks). Being too polished — TikTok rewards raw and real.",
  },
  {
    category: "African Beauty & Skincare Brand",
    hook_formulas: [
      "I've been using [ingredient] my whole life. The beauty industry finally caught up.",
      "Western brands charge $80 for this. I make it at home. Watch.",
      "My grandmother's skincare routine is going viral and she's been doing it for 40 years",
      "POV: You discover you're sitting on a $100M beauty ingredient",
      "The ingredient in your $60 face cream grows wild in [country]. Here's the truth.",
      "Watch me start a skincare brand for $[amount] — day 1",
    ],
    posting_cadence: "5–7 videos per week. Beauty TikTok rewards consistency. Skincare transformations take time — show the journey.",
    content_pillars: [
      "Before and After (show real skin results — authentic, not filtered)",
      "Ingredient Education (teach what shea butter is, where it comes from, what it does to skin)",
      "Manufacturing Process (show how you make it — people trust brands they can see making the product)",
      "The Pricing Truth (show what the ingredient costs at source vs. what brands charge — builds your authority)",
      "Community Content (features your customers' skin, their stories, their results)",
      "Cultural Heritage (the tradition behind the ingredient — your grandmother's recipe, village knowledge)",
    ],
    hashtags: [
      "#AfricanSkincare",
      "#NaturalSkincare",
      "#SheaButter",
      "#BlackSkincare",
      "#SkincareRoutine",
      "#CleanBeauty",
      "#AfricanBeauty",
      "#NaturalHair",
      "#GlowUp",
      "#SkincareTikTok",
    ],
    first_30_days: [
      "Day 1–7: The origin video. Your face, your story, why you started. Skincare brands are personal — lead with yourself.",
      "Day 8–14: The ingredients deep dive. Show each ingredient, where it comes from, what it does. 1 video per ingredient.",
      "Day 15–21: The making process. Film yourself making a batch. This is your most trustworthy content.",
      "Day 22–30: First 5 customer videos. Send free products to 10–15 micro-creators in your niche (5K–50K followers). Film the unboxings.",
    ],
    what_performs_best:
      "The pricing contrast video. 'This face cream costs $4 to make. Here's why I charge $38 for it — and why that's still cheaper than the brands you're buying.' People love being in on the economics.",
    what_kills_reach:
      "Making health claims (TikTok can ban your account for medical claims). Over-filtering your content. Posting product-only content with no human face. Not responding to comments in the first hour — early engagement signals everything.",
  },
];

export const INSTAGRAM_GUIDE: InstagramStrategy = {
  feed_grid_strategy:
    "Think in rows of three. Every row should tell a micro-story: product, process, person. Alternate: close-up shot / lifestyle shot / founder or customer face. Your grid is your first impression — someone will scroll it in 10 seconds and decide if you're premium or amateur. Use a consistent filter or color grade. Pick 2–3 brand colors and stick to them. Everything that goes on your grid should feel like it belongs to the same world.",
  reels_ideas: [
    "Farm to finished product — 30 second timelapse from harvest to packaged product",
    "One ingredient, 5 uses — quick cuts showing versatility",
    "Then vs. now — humble beginning photo vs. where you are now",
    "A day in the production kitchen — raw, real, no filters",
    "Customer transformation — before using your product vs. 30 days later",
    "The making of your packaging — from blank box to beautiful finished product",
    "Market day — filming your product at a market, farmer's market, or pop-up",
    "'POV: You buy your first jar' — film the unboxing experience from the customer's perspective",
    "Your pricing breakdown — '1 jar of argan oil costs me X. Here's why I price it at Y.'",
  ],
  stories_cadence:
    "5–8 stories per day. Use Stories for real-time: behind-the-scenes, polls, Q&As, limited offers, process content. Stories are where your community feels closest to you. Reels get you discovered. Stories build loyalty. Both matter.",
  shopping_setup: [
    "Set up Instagram Shopping (requires Facebook Commerce Manager and a Facebook catalog)",
    "Tag products in every feed post and Reel — customers buy without leaving the app",
    "Use the 'Add to Cart' sticker in Stories",
    "Create Collections: 'Bestsellers', 'Starter Kit', 'Gift Sets'",
    "Link your Shopify or WooCommerce store — Instagram syncs inventory automatically",
    "Review your Instagram Shop daily — reply to customer DMs within 2 hours. Speed is a trust signal.",
  ],
  caption_formula:
    "Hook (first 2 lines — make people click 'more') → The story (3–5 sentences: context, emotion, purpose) → Social proof (1 sentence: what customers say, awards, press) → Call to action ('Link in bio', 'DM me SAMPLE', 'Tag a friend who needs this'). Keep the total under 200 words for feed posts.",
  growth_moves: [
    "Collaborate with African diaspora food/beauty/lifestyle accounts (10K–100K followers) — propose content swaps, not paid ads initially",
    "Engage authentically in comments of 10–15 accounts in your niche daily — your name showing up builds recognition",
    "Use location tags in major African cities AND diaspora cities (London, Paris, New York, Toronto)",
    "Post at 7–9am and 7–9pm in your primary timezone — when people commute and wind down",
    "Share every customer post to your Stories — social proof and free content simultaneously",
    "Run a monthly giveaway: entry = follow + tag 2 friends + share to Stories. Grows your community fast.",
    "Submit your products for features on African lifestyle media (@AfricaIsNow, @HouseOfLimbe, @Okayafrica)",
  ],
  brand_archetypes: [
    "The Heritage Brand — leans into tradition, ancestry, history. Visual: earthy tones, vintage typography, archival imagery.",
    "The Modern African — contemporary, urban, global-ready. Visual: bold colors, clean lines, diverse models, city settings.",
    "The Scientist-Formulator — leads with efficacy, data, research. Visual: clean white/lab aesthetic, ingredient close-ups.",
    "The Activist Brand — built around a cause (farmer welfare, environmental, empowerment). Visual: documentary-style, real people.",
    "The Luxury Artisan — small batches, handmade, precious. Visual: gold accents, dark backgrounds, slow-motion product shots.",
  ],
};

export const BRAND_IDENTITY_FRAMEWORK = {
  the_world_concept:
    "Gen Z doesn't buy products — they buy worlds. They want to live inside a brand's aesthetic universe. Think: Byredo, Le Labo, Supreme, Glossier. Each of these is not just products — they are complete worlds with their own rules, rituals, language, and community. Your African brand should do the same. What world are you building? What does it feel like to live in it? What music plays? What does the morning routine look like? What does the person who uses your product believe about themselves?",
  aesthetic_eras: [
    {
      era: "Y2K (2000–2006)",
      vibe: "Futuristic nostalgia, metallic, bold color, techno-optimism",
      for_brands: "Fashion, streetwear, digital-native products",
      how_to_use: "Retro-futuristic African imagery — imagine Afrofuturism meets early 2000s fashion ads. It feels new because it feels old.",
    },
    {
      era: "Quiet Luxury (2022–present)",
      vibe: "Understated, expensive-looking, neutral tones, no logos",
      for_brands: "Premium food, beauty, wellness, leather goods",
      how_to_use: "Creamy backgrounds, linen textures, minimal packaging, serif fonts. Let the ingredient speak. The Loro Piana of African brands.",
    },
    {
      era: "Clean Girl Era (2022–present)",
      vibe: "Natural skin, minimal makeup, wellness-obsessed, dewy",
      for_brands: "Skincare, natural beauty, wellness foods",
      how_to_use: "Real African skin, unfiltered, glowing. Real women. The story of ingredients your mother used before the beauty industry told her to stop.",
    },
    {
      era: "Cottagecore / Earthen (ongoing)",
      vibe: "Handmade, slow living, natural materials, artisan craft",
      for_brands: "Artisan food, teas, candles, home goods, ceramics",
      how_to_use: "Show the hands. Show the farm. Show the village. Make the traditional feel radical.",
    },
    {
      era: "Afrofuturism",
      vibe: "Ancient Africa meets the future — technology, space, mythology, power",
      for_brands: "Fashion, art, music, tech products, spirits",
      how_to_use: "Imagine the Ashanti Empire had a cosmetic brand in 2050. That is your aesthetic.",
    },
  ],
  brand_differentiation_rules: [
    "Study 10 brands in your category. Make a list of everything they have in common. Do the opposite.",
    "Find the thing only YOU can say. No one else can say 'this recipe has been in my family for 6 generations in Linguère.' That is yours.",
    "Name something after a specific place, specific person, specific tradition. General is forgettable. Specific is memorable.",
    "Commit to a world. If you're the 'heritage Fulani dairy brand,' every visual, every word, every product name should reinforce that world.",
    "Pick one primary emotion your brand creates. Pride. Nostalgia. Power. Calm. Desire. Everything should amplify that one feeling.",
  ],
};
