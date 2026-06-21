export interface SuccessStory {
  id: string;
  name: string;
  age?: number;
  location: string;
  country: string;
  sector: string;
  headline: string;
  story: string;
  programs_used: string[];
  outcome: string;
  timeline_months?: number;
  capital_raised?: string;
  quote: string;
  tags: string[];
  is_real: true;
  source_note?: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-dangote",
    name: "Aliko Dangote",
    age: 21,
    location: "Kano, Nigeria",
    country: "Nigeria",
    sector: "Commodities, cement, manufacturing",
    headline: "Borrowed $3,000 from his uncle. Built Africa's largest empire.",
    story: "Aliko Dangote graduated from Al-Azhar University in Cairo and returned home to Nigeria with a clear plan: trade what people need every day. He borrowed ₦500,000 — roughly $3,000 at the time — from his uncle, a successful businessman named Sanusi Dantata, to start trading commodities: flour, rice, sugar, cement. This was the early 1980s. He had no technology, no investors, no accelerator. Just a product, a market, and a relentless understanding that Nigeria needed to stop importing and start producing. Over the next two decades he moved from trading to manufacturing — building cement plants, flour mills, sugar refineries. Today the Dangote Group is Africa's largest conglomerate. His cement alone produces more than any other company on the continent. He is Africa's wealthiest person. It started with one loan and one product people needed every day.",
    programs_used: [
      "Nigerian government import substitution policy",
      "Nigerian Stock Exchange listing (Dangote Cement, 2010)",
      "State and federal government supply contracts",
    ],
    outcome: "Africa's largest industrial conglomerate. Dangote Cement, Sugar, Oil & Gas across 10+ African countries. Africa's richest person.",
    capital_raised: "₦500,000 (~$3,000) uncle's loan at age 21",
    quote: "You have to dream big. If you don't dream big, there's nothing. And I mean, nothing happens.",
    tags: ["Nigeria", "Male founder", "Manufacturing", "Bootstrap", "Commodities"],
    is_real: true,
    source_note: "Aliko Dangote is a public figure. His founding story is extensively documented.",
  },
  {
    id: "story-bethlehem",
    name: "Bethlehem Tilahun Alemu",
    age: 26,
    location: "Zenabwork, Addis Ababa, Ethiopia",
    country: "Ethiopia",
    sector: "Fashion & footwear",
    headline: "No VC. No investors. Built Africa's fastest-growing footwear brand from a garbage dump.",
    story: "Bethlehem Tilahun Alemu grew up in Zenabwork — a poor neighbourhood in Addis Ababa built on a garbage dump. In 2004, she founded soleRebels using zero outside capital. Her approach was radical in its simplicity: hire the craftspeople from her own neighbourhood, pay them above market wages, and use centuries-old Ethiopian shoe-making techniques — including recycled rubber tire soles — to create a product that the world had never seen. She cold-approached buyers directly. Her first international sale was to a small retailer in Vienna. Then Japan. Then the United States. By 2013, soleRebels was Africa's fastest-growing footwear brand, selling in over 30 countries and $15M+ in revenue. She never raised VC. Never took debt. She is the first African brand founder to open standalone branded stores in Europe. Time Magazine named her one of the world's 100 most influential people in 2011.",
    programs_used: [
      "Ethiopian Investment Commission (business registration)",
      "African Growth and Opportunity Act (AGOA) — US preferential trade for Ethiopian exporters",
      "World Fair Trade Organization certification",
    ],
    outcome: "Selling in 30+ countries. Africa's fastest-growing footwear brand (2013). $15M+ annual revenue. Named one of Time's 100 Most Influential People.",
    capital_raised: "Zero external capital. Fully bootstrapped from first sale.",
    quote: "Don't try to replicate what everyone else does. Find what's uniquely yours and build that.",
    tags: ["Women", "Ethiopia", "Fashion", "Bootstrap", "Export", "Youth"],
    is_real: true,
    source_note: "Bethlehem Tilahun Alemu is a public figure. soleRebels is a real company based in Addis Ababa.",
  },
  {
    id: "story-masiyiwa",
    name: "Strive Masiyiwa",
    location: "Harare, Zimbabwe",
    country: "Zimbabwe",
    sector: "Telecommunications",
    headline: "The Zimbabwean government refused him a license for 5 years. He took them to court. And won.",
    story: "Strive Masiyiwa founded Econet Wireless in 1993 with a simple thesis: Africans deserved mobile telecommunications. The Zimbabwean government had a different view. For five years — 1993 to 1998 — they refused to grant him a license. The state telecom monopoly had to be protected. During those five years, Masiyiwa's personal savings ran out. His wife Tsitsi sold her jewelry to keep the family going. He did consulting work to survive. He was rejected by government committees, told to give up, told it would never happen. He didn't stop. He took the Zimbabwe government to court, filing Constitutional challenges arguing that the ban on private telecommunications violated the right to freedom of expression. In 1998, after a landmark Constitutional Court ruling, he won. He launched Econet Zimbabwe. Within years it became Zimbabwe's largest mobile network. He then built EcoCash — now Zimbabwe's dominant mobile money platform. He expanded across Africa: Liquid Telecom became one of Africa's largest fiber networks. Today the group operates across 20+ countries. His net worth is estimated at over $2 billion.",
    programs_used: [
      "Zimbabwe Constitutional Court (freedom of expression case)",
      "IFC / World Bank Group financing for Econet expansion",
      "Pan-African fiber backbone (Liquid Telecom)",
    ],
    outcome: "Econet Zimbabwe, Liquid Telecom (pan-African fiber), EcoCash (Zimbabwe's largest mobile money). Operates across 20+ African countries.",
    capital_raised: "Personal savings + IFC backing after winning license",
    quote: "You cannot change your life without faith. When I was fighting the government, everything was against me. Everything. I just refused to accept it.",
    tags: ["Zimbabwe", "Male founder", "Telecom", "Resilience", "Legal"],
    is_real: true,
    source_note: "Strive Masiyiwa is a public figure. The Econet founding story is extensively documented.",
  },
  {
    id: "story-elumelu",
    name: "Tony Elumelu",
    location: "Lagos, Nigeria",
    country: "Nigeria",
    sector: "Finance & entrepreneurship",
    headline: "Started as a bank clerk. Now runs Africa's most ambitious entrepreneur fund.",
    story: "Tony Elumelu's first job was as a junior economist at a financial institution. He was not born into wealth. He worked his way through Nigeria's banking sector, understanding it from the inside. In 1997, he was appointed Managing Director and CEO of United Bank for Africa — a bank that was struggling, reeling from scandal, losing market confidence. Over the next decade he transformed UBA into one of the most profitable and geographically expansive banks in Africa: present in 20 African countries and in New York, London, and Paris. When he stepped back from daily operations, he committed $100 million of his own money to a single idea: that the greatest thing Africa needs is an entrepreneurial class, and that the private sector — not foreign aid — is what builds it. The Tony Elumelu Foundation has since trained over 15,000 African entrepreneurs from all 54 countries, providing $5,000 in seed funding, 12 weeks of training, and mentorship. His philosophy — which he calls Africapitalism — is that Africa's prosperity must be built by Africans, through business, not dependence.",
    programs_used: [
      "Tony Elumelu Foundation TEFConnect Programme",
      "UBA Foundation small business grants",
      "African Development Bank partnership programmes",
    ],
    outcome: "Transformed UBA into a 20-country pan-African bank. Founded the Tony Elumelu Foundation. Backed 15,000+ African entrepreneurs across all 54 countries.",
    capital_raised: "$100M personal commitment to the Tony Elumelu Foundation",
    quote: "Africa's time is now. The continent's greatest resource is its entrepreneurs, not its oil.",
    tags: ["Nigeria", "Male founder", "Finance", "Entrepreneurship", "Pan-African"],
    is_real: true,
    source_note: "Tony Elumelu is a public figure. The Tony Elumelu Foundation is a real organization.",
  },
  {
    id: "story-enonchong",
    name: "Rebecca Enonchong",
    location: "Cameroon / Washington DC",
    country: "Cameroon",
    sector: "Enterprise tech",
    headline: "In 1999, she founded one of Africa's first global Black-woman-led tech companies. No VC. Just delivery.",
    story: "Rebecca Enonchong founded AppsTech in 1999 — an enterprise software and Oracle implementation company — when almost no one was doing it from Africa, let alone as a Black African woman. There was no African tech ecosystem to speak of. No VC funds targeting African founders. No incubators. She built it on delivery: winning contracts, implementing complex enterprise systems, and growing client by client. AppsTech now operates in over 50 countries with several hundred employees. She never raised VC. She built global from African roots, refusing the idea that technology had to be built in Silicon Valley to be credible. Beyond AppsTech, she returned to Cameroon and co-founded ActivSpaces — one of Central Africa's first technology hubs. She is now one of Africa's most prominent technology investors and ecosystem advocates, named by Forbes as one of Africa's top tech entrepreneurs.",
    programs_used: [
      "Oracle Partner Network (AppsTech is a certified Oracle partner)",
      "ActivSpaces (Cameroon tech hub she co-founded)",
      "African Business Angel Network (investor)",
    ],
    outcome: "AppsTech: global Oracle partner in 50+ countries, several hundred employees. Co-founded ActivSpaces, Cameroon's first major tech hub. Named Africa's top tech entrepreneur by Forbes.",
    capital_raised: "Bootstrapped. Zero VC funding.",
    quote: "The single biggest challenge facing African entrepreneurs is the lack of access to capital. But lack of capital doesn't have to mean lack of progress.",
    tags: ["Women", "Cameroon", "Tech", "Diaspora", "Bootstrap", "Pan-African"],
    is_real: true,
    source_note: "Rebecca Enonchong is a public figure. AppsTech and ActivSpaces are real organizations.",
  },
  {
    id: "story-awuah",
    name: "Patrick Awuah Jr.",
    location: "Berekuso, Ghana (from Seattle, USA)",
    country: "Ghana",
    sector: "Education",
    headline: "Left Microsoft at its peak. Came home to Ghana. Built Africa's most innovative university.",
    story: "Patrick Awuah Jr. spent eight years at Microsoft in Seattle as a program manager. In the late 1990s, Microsoft was the most valuable company on earth. He was exactly where ambitious people wanted to be. And he walked away. He came back to Ghana with his family and his savings, with a conviction: Africa's biggest deficit was not capital or infrastructure — it was leadership trained to think critically, act ethically, and build institutions. In 2002 he founded Ashesi University in Berekuso, Ghana. The Ghanaian government was skeptical of private universities. Accreditation was difficult. The first class had 30 students. For years, it looked like a beautiful experiment that might not survive. He kept going. Today Ashesi has over 1,200 students, a student-run honour code that has made it one of Africa's most ethically rigorous campuses, and graduates working at Google, McKinsey, Goldman Sachs, and running startups across the continent. He won the Skoll Award for Social Entrepreneurship and was named an Ashoka Fellow. He gave up a certain future to build something that mattered.",
    programs_used: [
      "Ghana Education Service (university accreditation process)",
      "Skoll Foundation Award for Social Entrepreneurship",
      "Mastercard Foundation Scholars Program (partnership)",
    ],
    outcome: "Ashesi University: 1,200+ students, ranked one of Africa's top universities. Graduates building companies and careers across the continent and world.",
    capital_raised: "Personal savings + philanthropic partnerships. Zero government subsidy.",
    quote: "I believe that leadership, not resources, is what will transform Africa. And leadership can be taught.",
    tags: ["Ghana", "Male founder", "Diaspora", "Education", "Return home"],
    is_real: true,
    source_note: "Patrick Awuah Jr. is a public figure. Ashesi University is a real accredited university in Ghana.",
  },
];

export function getStoryById(id: string): SuccessStory | undefined {
  return SUCCESS_STORIES.find((s) => s.id === id);
}

export function getStoriesByCountry(country: string): SuccessStory[] {
  return SUCCESS_STORIES.filter((s) => s.country === country);
}
