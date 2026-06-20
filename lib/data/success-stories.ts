export interface SuccessStory {
  id: string;
  name: string;
  age: number;
  location: string;
  country: string;
  sector: string;
  headline: string;
  story: string;
  programs_used: string[];
  outcome: string;
  timeline_months: number;
  capital_raised?: string;
  quote: string;
  tags: string[];
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-001",
    name: "Aminata D.",
    age: 28,
    location: "Dakar, Senegal",
    country: "Senegal",
    sector: "Fashion & beauty",
    headline: "From market stall to fashion brand in 18 months",
    story: "Aminata had been selling handmade jewelry at Sandaga market for three years. She knew she had a brand — she just couldn't access the capital or the systems to scale it. A friend told her about Alkebulan. She used the Opportunity Path Engine and got a 7-step roadmap. She started by formalizing her business at RCCM (two weeks, $40). Then applied to DER/FJ women's fund and received 1.5 million CFA. She used that as proof of concept to get into the Tony Elumelu Foundation programme and received $5,000 in seed funding plus 12 weeks of training. She's now selling wholesale to boutiques in Dakar, Saint-Louis, and Abidjan.",
    programs_used: [
      "DER/FJ Women's Entrepreneurship Fund",
      "Tony Elumelu Foundation Programme",
      "ADPME SME Support",
    ],
    outcome: "Launched wholesale fashion brand, 3 employees, distributing across Senegal and Côte d'Ivoire",
    timeline_months: 18,
    capital_raised: "$8,500 in grants + $2,000 concessional loan",
    quote: "The platform didn't give me money. It gave me a sequence. I needed to know what to do first.",
    tags: ["Women", "Senegal", "Fashion", "Youth", "Grants"],
  },
  {
    id: "story-002",
    name: "Kofi A.",
    age: 34,
    location: "Accra, Ghana",
    country: "Ghana",
    sector: "Food & catering",
    headline: "How a Accra caterer won her first government contract",
    story: "Kofi had run a catering business from his home kitchen for four years, supplying offices and schools informally. He was doing about GH₵ 8,000 a month and hitting a ceiling. He used Alkebulan's Procurement Intelligence feature and found that the Ghana Health Service had open tenders for hospital catering services — contracts worth 10x his annual revenue. He used the Capital Stack Engine to figure out how to finance the performance bond and working capital. He registered properly with PPA Ghana, formed a consortium with two other caterers using the First-Order Collective engine, and won a two-year contract with Tema General Hospital worth GH₵ 480,000.",
    programs_used: [
      "Ghana PPA Supplier Registration",
      "NEIP Business Support",
      "First-Order Collective (consortium bidding)",
    ],
    outcome: "2-year government catering contract worth GH₵ 480,000. Hired 8 staff.",
    timeline_months: 9,
    capital_raised: "GH₵ 15,000 NEIP grant + consortium performance bond financing",
    quote: "I was chasing grants for years. The first government contract changed everything. It was 10 times more money and it repeated every month.",
    tags: ["Ghana", "Food", "Procurement", "Male founder", "Consortium"],
  },
  {
    id: "story-003",
    name: "Chioma O.",
    age: 31,
    location: "London, UK → Lagos, Nigeria",
    country: "Nigeria",
    sector: "Cold chain logistics",
    headline: "UK diaspora builds cold chain business in Lagos with remittances",
    story: "Chioma had been sending £400 a month to her mother in Lagos for six years. She used Alkebulan's Remittance-to-Ownership Pipeline and realized she had already sent over £28,000 — with nothing to show for it. She restructured her remittances as equity contributions into a formally registered cold chain business, with her mother as co-director. She used the BOI DiasporaInvest Programme to match her equity with a concessional loan. The Bankability Engine helped structure two years of mobile money records into a financial profile. She now owns 60% of a cold chain logistics company operating between Lagos and Ibadan with 3 refrigerated trucks.",
    programs_used: [
      "BOI DiasporaInvest Programme",
      "Alkebulan Bankability Engine",
      "Alkebulan Remittance-to-Ownership Pipeline",
    ],
    outcome: "3-truck cold chain logistics operation, Lagos–Ibadan corridor. £40,000 in combined equity and concessional financing.",
    timeline_months: 14,
    capital_raised: "£28,000 equity (restructured remittances) + £12,000 BOI concessional loan",
    quote: "I was already investing in Nigeria. I just wasn't calling it investing. This platform helped me see what I already had.",
    tags: ["Diaspora", "Nigeria", "Logistics", "Women", "Remittance"],
  },
  {
    id: "story-004",
    name: "Jean-Pierre M.",
    age: 27,
    location: "Kigali, Rwanda",
    country: "Rwanda",
    sector: "Agri-tech",
    headline: "Rwandan agri-tech founder builds soil testing platform with government grants",
    story: "Jean-Pierre had a BSc in Agriculture and a clear idea: a mobile soil testing service for smallholder farmers in Rwanda's Eastern Province. He had no money and no network. Alkebulan's Opportunity Path mapped his 6-step roadmap starting with RDB startup registration (free in Rwanda, 6 hours). He applied to YouthConnekt Africa fellowship and was accepted. He used the Government Budget Intelligence to identify that Rwanda's Ministry of Agriculture had a technology integration budget line — and applied directly for a pilot contract. His platform now works with 800 farming households and he's expanding to Uganda.",
    programs_used: [
      "YouthConnekt Africa Fellowship",
      "RDB Innovation Fund",
      "Rwanda Ministry of Agriculture pilot contract",
    ],
    outcome: "Agri-tech platform serving 800 households. Expanding to Uganda. 4-person team.",
    timeline_months: 16,
    capital_raised: "$12,000 fellowship grant + $8,000 government pilot contract",
    quote: "Rwanda makes it easy to register. The platform helped me find the money that was already allocated for what I was building.",
    tags: ["Youth", "Rwanda", "Agri-tech", "Male founder", "Government contract"],
  },
  {
    id: "story-005",
    name: "Fatou B.",
    age: 42,
    location: "Dakar, Senegal → Casablanca, Morocco",
    country: "Senegal",
    sector: "Shea butter export",
    headline: "AfCFTA cuts her export costs by 34% — selling shea butter across North Africa",
    story: "Fatou had been exporting raw shea butter from Senegal to cosmetics manufacturers in Morocco and Tunisia for years, paying 18–22% import duties each time. She didn't know AfCFTA applied to her products. She used Alkebulan's AfCFTA Navigator, learned her HS code (1515.90), confirmed she qualified for 0% duty under AfCFTA, and got step-by-step instructions to obtain a Senegalese AfCFTA certificate of origin from ASEPEX. Her first AfCFTA-certified shipment saved her $4,200 in duties. She reinvested that into value-added processing and now ships processed shea cream instead of raw butter — at 4x the margin.",
    programs_used: [
      "AfCFTA Navigator (Alkebulan)",
      "ASEPEX Certificate of Origin",
      "Maroc PME supplier registration",
    ],
    outcome: "34% reduction in export costs. Upgraded from raw to processed shea. Margins quadrupled.",
    timeline_months: 3,
    capital_raised: "$4,200 in annual duty savings reinvested into processing",
    quote: "I was paying duties I didn't owe. For six years. Nobody told me there was a free trade agreement.",
    tags: ["Women", "Senegal", "Export", "AfCFTA", "Agriculture"],
  },
  {
    id: "story-006",
    name: "David K.",
    age: 36,
    location: "Nairobi, Kenya",
    country: "Kenya",
    sector: "Construction & fit-out",
    headline: "Nairobi contractor goes from Hustler Fund to Sh45M government tender",
    story: "David ran a small interior fit-out company in Nairobi. His barrier wasn't skills — he had 12 years of experience. It was the financial paper trail banks needed to lend him working capital for large projects. He used the Bankability Engine to compile three years of M-Pesa business statements, supplier invoices, and client receipts into a formal financial profile. He got a Sh 200,000 Hustler Fund loan — small, but it gave him a formal loan repayment record. Six months later, he used that repayment history plus his mobile money profile to access a Sh 2M KCB business loan. With proper working capital, he could bid on government tenders. He won a fit-out contract with a county government worth Sh 45 million.",
    programs_used: [
      "Kenya Hustler Fund",
      "Alkebulan Bankability Engine",
      "KCB Business Loan (using mobile money profile)",
      "Kenya Government e-Procurement Portal",
    ],
    outcome: "Sh 45M county government tender won. 15-person team. Formal credit file established.",
    timeline_months: 12,
    capital_raised: "Sh 200K (Hustler Fund) → Sh 2M (KCB) → Sh 45M contract",
    quote: "The trick was building the paper trail first. The Bankability Engine showed me exactly what documents I needed and in what order.",
    tags: ["Kenya", "Construction", "Procurement", "Male founder", "Bankability"],
  },
];

export function getStoryById(id: string): SuccessStory | undefined {
  return SUCCESS_STORIES.find((s) => s.id === id);
}

export function getStoriesByCountry(country: string): SuccessStory[] {
  return SUCCESS_STORIES.filter((s) => s.country === country);
}
