export interface RealExample {
  name: string;
  what_happened: string;
  outcome: "good" | "bad" | "mixed";
  lesson: string;
}

export interface CapitalType {
  id: string;
  name: string;
  tagline: string;
  the_truth: string;
  how_it_works: string;
  best_for: string[];
  not_for: string[];
  typical_range: string;
  what_they_want_back: string;
  red_flags: string[];
  green_flags: string[];
  real_examples: RealExample[];
  questions_to_ask_yourself: string[];
}

export const CAPITAL_TYPES: CapitalType[] = [
  {
    id: "debt",
    name: "Debt (Loans & Credit)",
    tagline: "The bank doesn't care if it rained.",
    the_truth:
      "Debt is the most democratic capital — anyone with collateral or a track record can get it. But it does not care about your circumstances. The bill arrives on the same day every month whether your harvest failed, your shipment got held at customs, or your biggest client paid late. That is the deal. The bank is not your partner — they are a landlord collecting rent.",
    how_it_works:
      "You borrow a fixed amount. You pay it back with interest over a set period. The lender has no ownership in your business. If you stop paying, they can take whatever you put up as collateral — your land, your equipment, sometimes your home.",
    best_for: [
      "Businesses with predictable, recurring revenue (e.g., a bottled water company with hotel contracts)",
      "Buying equipment that immediately generates cash (e.g., a rice milling machine that earns per bag milled)",
      "Short-term working capital gaps when you have a confirmed order",
      "Importing inventory you already have buyers for",
    ],
    not_for: [
      "Early-stage businesses with no revenue yet",
      "Seasonal businesses that can't make payments in the off-season",
      "Anything experimental where revenue is uncertain",
    ],
    typical_range: "$500 microloans (MFIs) → $5M+ commercial bank facilities",
    what_they_want_back: "Principal + interest. No equity. No board seat. Just cash on schedule.",
    red_flags: [
      "Interest rates above 25% per year — this is debt that can swallow your business",
      "Balloon payments (nothing for 2 years, then everything at once)",
      "Personal guarantee on a business loan when the business is risky",
      "Short repayment terms (12 months) for an asset that takes 3 years to pay off",
    ],
    green_flags: [
      "Grace periods on principal during the first 6–12 months",
      "Interest rates below 15% per year",
      "Repayment schedule aligned with your cash cycle",
      "Development bank loans (AFREXIMBANK, DFI facilities) — often much cheaper",
    ],
    real_examples: [
      {
        name: "Dangote's early cement empire",
        what_happened:
          "Aliko Dangote built his early trading empire using credit. He would borrow, move goods fast, repay, borrow more. He understood one rule: only borrow for things that generate cash faster than the interest accrues.",
        outcome: "good",
        lesson: "Debt works when your velocity is faster than your interest rate. Trade and logistics businesses can do this. Experimental brands cannot.",
      },
      {
        name: "African food SME vs. microfinance",
        what_happened:
          "A woman in Accra borrowed $2,000 at 30% annual interest from an MFI to buy a commercial blender and start a smoothie business targeting offices. Rainy season came, offices sent staff home to work remotely, foot traffic collapsed for 6 weeks. She couldn't make the weekly payment. The MFI sent collectors.",
        outcome: "bad",
        lesson: "Even good businesses have seasons. Before taking debt, ask: can I make this payment for 3 months with zero revenue?",
      },
      {
        name: "Laiterie du Berger — smart debt mix",
        what_happened:
          "This Senegalese dairy company used DFI (development finance institution) loans at subsidized rates alongside equity to build cold chain infrastructure. They did not use commercial bank debt — the rates would have killed them in year two before volumes scaled.",
        outcome: "good",
        lesson: "Not all debt is equal. A 6% DFI loan is completely different from a 28% microfinance loan. Always explore development finance first.",
      },
    ],
    questions_to_ask_yourself: [
      "Can I make this monthly payment even if my revenue drops 50% for 3 months?",
      "Is what I'm buying with this loan going to generate cash faster than my interest rate?",
      "Have I explored DFI or government-backed loans before commercial banks?",
      "What happens to my business if I default — am I putting my home at risk?",
    ],
  },
  {
    id: "angel",
    name: "Angel Investing",
    tagline: "An angel with the wrong values is just a devil with a cheque book.",
    the_truth:
      "Angel investors are individuals — usually successful entrepreneurs or executives — who invest their own money into early-stage companies. The money is real and the check can come fast. But you are now in a relationship with this person. They have a say in your company. The wrong angel can be worse than no funding at all: they can slow you down, show up uninvited to client meetings, undermine your confidence, or simply refuse to sign off on your next funding round because they don't like the terms.",
    how_it_works:
      "An angel gives you $25,000–$500,000 in exchange for equity — typically 5–20% of your company. Some take a board seat. Some are hands-off. The deal is structured as a SAFE (Simple Agreement for Future Equity), convertible note, or direct equity. The angel makes money when you either sell the company or raise a much bigger round at a higher valuation.",
    best_for: [
      "Businesses that need $50K–$500K to prove product-market fit",
      "Founders who want smart money — an angel with connections, not just cash",
      "Companies too early for VC but too big for bootstrapping",
    ],
    not_for: [
      "Founders who don't want anyone in their business decisions",
      "Businesses that can be bootstrapped — why give away 15% if you don't need to?",
    ],
    typical_range: "$25,000 – $500,000 per angel. $500K–$2M from a group (angel syndicate).",
    what_they_want_back: "They want 10–30× their money when you exit (sell the company or IPO). They are taking high risk for high reward.",
    red_flags: [
      "An angel who wants more than 25% for their first check — they're being greedy",
      "No experience in your industry AND no relevant network to offer",
      'An angel who says "I won\'t be involved" but asks for a board seat',
      "Someone who takes weeks to decide — if they move slow now, they\'ll move slow when you need a signature fast",
      "An angel who makes you feel small or questions your identity, not your business model",
    ],
    green_flags: [
      "Built something in your space before — they understand your problems from the inside",
      "Willing to make introductions on day one, before even signing",
      "Clear about what they expect (board seat? monthly updates? just quarterly?)",
      "Other founders speak highly of how they behaved when things got hard",
    ],
    real_examples: [
      {
        name: "Flutterwave early angels",
        what_happened:
          "Olugbenga Agboola (GB) raised his first angel round from operators who had built in fintech before. Those angels opened doors to banks, regulators, and later-stage investors. The money mattered, but the relationships mattered more.",
        outcome: "good",
        lesson: "The right angel is a door. Pick people who can open the specific doors you need.",
      },
      {
        name: "The controlling early investor (common pattern across African startups)",
        what_happened:
          "A Lagos-based health tech founder raised $150K from a local angel at a $600K valuation. The angel took 25% and a board seat. When a US firm offered to invest at a $3M valuation 18 months later, the angel blocked the deal because the terms diluted him more than he wanted. The founder spent 8 months in legal limbo. The US investor walked.",
        outcome: "bad",
        lesson: "Protective provisions and blocking rights in early deals can give a 25% shareholder the power to hold your whole company hostage. Have a lawyer review every clause.",
      },
      {
        name: "Wave fintech — patient capital",
        what_happened:
          "Before Wave became a $1.7B company offering 0% mobile money fees in Senegal, the founders raised angel-level capital from people who genuinely believed in the mission and were patient enough to watch them build for years.",
        outcome: "good",
        lesson: "Alignment on mission matters as much as the check size. An impatient angel will pressure you to monetize before you're ready, killing the product.",
      },
    ],
    questions_to_ask_yourself: [
      "Do I actually like this person? Would I want to call them at 10pm when something goes wrong?",
      "Have they built anything in my space, or are they just rich?",
      "What specifically are they offering beyond the check?",
      "Have I spoken to 3 other founders they've backed — especially ones whose companies didn't succeed?",
      "Can they block my future fundraising rounds? What are their protective provisions?",
    ],
  },
  {
    id: "family-office",
    name: "Family Office",
    tagline: "Old money, long memory. Align on values or don't take the call.",
    the_truth:
      "Family offices manage the wealth of ultra-high-net-worth families — often $100M–$5B+ in assets. When they invest in your business, you are entering into a relationship with a family, not just a fund manager. They tend to move slower than angels, be more conservative, and have strong opinions about things that aren't just financial: reputation, community, religion, social values, who you are seen with. This can be wonderful if you're aligned. It can be suffocating if you're not.",
    how_it_works:
      "Family offices typically invest $500K–$10M. They are patient (10–15 year horizon vs. VC's 5–7 years). They can be flexible on structure. Some want equity, some want debt, some want a mix. Introductions usually happen through trusted intermediaries — banks, lawyers, or mutual connections.",
    best_for: [
      "Businesses with long investment timelines (agriculture, real estate, infrastructure)",
      "Founders who want patient capital that won't force a premature exit",
      "Businesses in industries the family has legacy interest in (e.g., a family that made money in cocoa investing in a chocolate brand)",
    ],
    not_for: [
      "Founders who want to move fast and pivot — family offices get nervous when things change",
      "Highly disruptive businesses that might threaten industries the family is in",
    ],
    typical_range: "$500,000 – $10,000,000",
    what_they_want_back: "Steady returns (8–15%), preservation of capital, sometimes strategic alignment. They are not looking for a 100× return — they want to protect and grow wealth.",
    red_flags: [
      "A family office that asks you to do business with their other portfolio companies as a condition of investment",
      "Investment that comes with the expectation of hiring the family's nephew",
      "A family with political connections that could make you collateral damage in their disputes",
      "Vague terms about governance — who has the final say on major decisions?",
    ],
    green_flags: [
      "Long track record of backing businesses in your region without drama",
      "Founders they backed are happy to talk to you — a great signal",
      "They care about something other than just money: impact, food security, job creation",
      "Clear separation between family drama and business",
    ],
    real_examples: [
      {
        name: "Nigerian family office backing an agribusiness",
        what_happened:
          "A tomato paste manufacturer in Kano raised $2M from a prominent northern Nigerian family office. The family had deep ties with tomato farmers and distribution networks across the north. What would have taken the founder 5 years to build took 18 months with those introductions.",
        outcome: "good",
        lesson: "Family offices embedded in your industry can give you unfair advantages that no VC can match.",
      },
      {
        name: "The values misalignment (pattern across multiple deals)",
        what_happened:
          "A Kenyan fashion founder took $1.5M from a family office that had conservative views on how the brand should position itself. When she launched a campaign featuring queer African identity — core to the brand's ethos — the family pressured her to pull it. When she refused, they tried to force a buyout at an unfair valuation.",
        outcome: "bad",
        lesson: "Have the hard values conversation before you sign anything. If your brand vision includes anything that might conflict with your investor's values, find out now.",
      },
    ],
    questions_to_ask_yourself: [
      "Have I actually sat with the family — not just their representative — to understand what they care about?",
      "Will this family's reputation help or hurt me in my market?",
      "What happens if the family patriarch dies — is there a succession plan for the investment?",
      "Am I okay moving at their pace, or do I need an investor who moves with me?",
    ],
  },
  {
    id: "crowdfunding",
    name: "Crowdfunding",
    tagline: "Your reputation is the collateral. You must deliver.",
    the_truth:
      "Crowdfunding lets you raise money from hundreds or thousands of regular people who believe in your idea. It sounds perfect — no giving away equity (in rewards-based crowdfunding), no bank, just people who love what you're building. But here's what nobody tells you: it is exhausting, it is public, and if you fail to deliver, the internet will remember. You are making a public promise to hundreds of strangers. Your name is on it.",
    how_it_works:
      "Rewards-based (Kickstarter, Indiegogo): people pre-buy your product. You get the money before production, which eliminates cash flow risk — but you must deliver on your promises. Equity crowdfunding (Republic, Seedrs, Afrikstart): people buy small equity stakes in your company. You're raising capital but also onboarding shareholders — sometimes thousands of them.",
    best_for: [
      "Consumer products that people can immediately understand and want (food, beauty, fashion, gadgets)",
      "Businesses where the community IS the product (marketplace, community platforms)",
      "Founders who can tell a compelling story and create content",
      "Pre-validating a product idea before you invest in production",
    ],
    not_for: [
      "B2B businesses — procurement managers don't crowdfund their ERP software",
      "Founders who are private and hate marketing — crowdfunding requires constant public presence",
      "Businesses that can't handle the complexity of serving hundreds of small investors",
    ],
    typical_range: "$10,000 – $500,000 (most African campaigns raise $20K–$100K)",
    what_they_want_back: "Either your product (rewards-based) or a tiny piece of your company (equity). Either way, they want you to succeed.",
    red_flags: [
      "Launching without a ready prototype or sample to show",
      "Setting a target you can't fulfill if you raise exactly that amount — budget carefully",
      "Promising delivery dates without buffer for shipping, customs, production delays",
      "Going live without a pre-built audience — most campaigns are won or lost in the first 48 hours",
    ],
    green_flags: [
      "You have a community already (Instagram following, WhatsApp group, email list) who will fund day one",
      "Your product is visual and can be explained in 30 seconds",
      "You've done the math: if X people pledge Y, you can actually produce this profitably",
      "You have a PR angle — a story that journalists and bloggers want to write about",
    ],
    real_examples: [
      {
        name: "Nyobi Tools (Kenya) — Kickstarter success",
        what_happened:
          "A Nairobi-based hardware company crowdfunded tools designed for the African market. The campaign worked because the product solved a visible problem, the founder told the story compellingly, and backers felt they were part of something historic — African engineering for African problems.",
        outcome: "good",
        lesson: "African identity can be a crowdfunding superpower. The diaspora and allies want to back this narrative. Use it.",
      },
      {
        name: "Beauty brand that overpromised",
        what_happened:
          "A Ghanaian shea butter beauty brand raised $45,000 on Indiegogo promising delivery in 5 months. Production delays pushed it to 14 months. Some backers received wrong variants. The comment section became a wall of anger. The founder spent more time apologizing publicly than building the brand.",
        outcome: "bad",
        lesson: "Add at least 3–4 months to your delivery estimate. Crowdfunding backers are forgiving about delays if you communicate proactively. They are unforgiving about silence.",
      },
    ],
    questions_to_ask_yourself: [
      "Do I have an audience right now who would fund me on day one?",
      "Can I tell this story in 90 seconds of video and make someone cry or cheer?",
      "Have I added realistic buffer to my delivery timeline?",
      "Am I ready to give weekly updates to hundreds of people for the next year?",
    ],
  },
  {
    id: "vc",
    name: "Venture Capital",
    tagline: "VC is rocket fuel. Don't pour it in a car that wasn't built for it.",
    the_truth:
      "Venture capital is the most misunderstood form of funding in Africa right now. Everyone thinks they want it. Very few businesses should actually take it. A VC fund raises money from pension funds, university endowments, and billionaires. They promise those investors 3× their money in 7–10 years. The only way a VC delivers that return is if a small number of their portfolio companies become enormous — $100M+ in revenue. That means VCs need you to grow fast. Not sustainable-fast. Rocket-ship-fast. If you're building a beautiful, profitable, stable food business that grows 20% per year, congratulations — VCs are the wrong capital for you. They need 10× or they've failed their investors.",
    how_it_works:
      "A VC fund invests $500K–$10M+ in exchange for equity (typically 15–25% per round). They usually take a board seat. They will push you to hire fast, spend aggressively on growth, and raise your next round within 18–24 months. They expect you to either go public (IPO) or get acquired by a larger company within 7–10 years.",
    best_for: [
      "Technology-enabled businesses that can scale to 10M+ users without proportional cost increases",
      "Founders who genuinely want to build something enormous and fast",
      "Markets where the winner-takes-most dynamic is real (payments, logistics platforms, health tech)",
      "Businesses where speed is literally the competitive advantage — if you don't move fast, someone else wins",
    ],
    not_for: [
      "Food, beauty, or fashion businesses with physical production — the unit economics rarely support VC timelines",
      "Founders who value control, stability, or building at their own pace",
      "Businesses in markets too small for VC — a great $5M/year business is a failure in VC math",
      "Founders who haven't thought through what happens if their company gets acquired and they work for someone else",
    ],
    typical_range: "$500,000 – $50,000,000+ depending on stage",
    what_they_want_back: "10× return. Full stop. Your beautiful lifestyle business is not an acceptable outcome to them.",
    red_flags: [
      "A VC who doesn't understand your market or ask smart questions about it",
      "Terms that let them force a sale of the company on a timeline you don't agree with",
      "A VC whose portfolio companies all left after 12 months — check founder references",
      "Excessive dilution in early rounds (giving away 30%+ in seed) that makes future raises ugly",
      "A VC who rushes you — they've already decided and just want signatures before you think clearly",
    ],
    green_flags: [
      "Deep Africa expertise — they understand your regulatory environment, your customer, your supply chain",
      "Portfolio companies who stayed and thrived, not just exited",
      "They push back on your assumptions in the meeting — this is good, they're doing real diligence",
      "They can name specific ways they'll help beyond capital (hires they've placed, customers they've introduced)",
    ],
    real_examples: [
      {
        name: "Flutterwave — VC done right",
        what_happened:
          "Flutterwave raised from top Silicon Valley VCs including Y Combinator and Greycroft. The business was genuinely VC-suited: software-enabled payments that scaled to millions of transactions without proportional cost increases. By 2022, it was valued at $3B. The VCs made enormous returns. The founders built something that reshaped African payments.",
        outcome: "good",
        lesson: "VC works when your business model genuinely scales without proportional cost increases. Flutterwave's 10,000th transaction cost them almost nothing to process. That's what VC is built for.",
      },
      {
        name: "African e-commerce companies that burned out",
        what_happened:
          "Multiple African e-commerce platforms raised $10M–$50M from top VCs and were pushed to expand to 5+ countries simultaneously. The unit economics of last-mile delivery in African cities are brutal — returns are high, theft happens, addresses don't exist. Several went from VC darling to layoffs in 24 months.",
        outcome: "bad",
        lesson: "VC pressure to scale before your unit economics are right is lethal. If you can't make money on one delivery, you definitely can't make money on a million deliveries.",
      },
      {
        name: "Kudi.ai (Nigeria) — pivot or die under VC pressure",
        what_happened:
          "An agent banking startup raised VC and was pushed to grow its agent network aggressively before fraud controls were solid. The fast growth created fraud exposure that cost them significantly and slowed everything down.",
        outcome: "mixed",
        lesson: "VC growth pressure can force you to skip steps that exist for good reasons. Move fast and break things is a phrase invented by people who don't operate in markets where trust is everything.",
      },
    ],
    questions_to_ask_yourself: [
      "Does my business genuinely require being enormous to succeed, or am I just attracted to the prestige of VC?",
      "Am I okay with someone on my board having the power to remove me as CEO?",
      "Can my business reach $50M+ in revenue within 7 years? Is that realistic, not just aspirational?",
      "What happens to my vision for the company when the VC fund needs to exit in year 7?",
      "Have I talked to founders who took money from this specific VC when things went badly?",
    ],
  },
  {
    id: "private-equity",
    name: "Private Equity",
    tagline: "They do not play about numbers. Neither should you.",
    the_truth:
      "Private equity is for businesses that are already working. PE firms buy companies (or large stakes in them) that are profitable and mature, then optimize them aggressively for returns. This is not a partner who is patient with your vision. This is a firm that has a spreadsheet showing exactly what your business needs to look like in 5 years for them to sell it at their target return. They will hire and fire aggressively, cut costs, sometimes push you to raise prices in ways that feel uncomfortable, and keep their eye on the exit from day one.",
    how_it_works:
      "PE firms typically invest $5M–$500M+ in exchange for majority stakes (50–100% ownership). They often use leverage (debt) as part of the acquisition — meaning they buy your company partially with loans, which your company then has to service. They will install a CFO, tighten financial controls, and formalize everything. They exit in 3–7 years via sale to a larger company or IPO.",
    best_for: [
      "Founders who want to unlock the value they've built and partially cash out",
      "Mature businesses (5+ years, profitable) that need capital for acquisition or geographic expansion",
      "Founders who want professional management infrastructure and can handle giving up control",
      "Businesses in industries PE understands — FMCG, healthcare, financial services, manufacturing",
    ],
    not_for: [
      "Early-stage businesses — PE wants proof, not potential",
      "Founders who cannot emotionally separate themselves from day-to-day control",
      "Businesses whose culture and people are central to the value — PE cuts what looks like fat but is sometimes muscle",
    ],
    typical_range: "$5,000,000 – $500,000,000+",
    what_they_want_back: "2–3× their money in 3–7 years. They are precise, disciplined, and will hold you to every number.",
    red_flags: [
      "A PE firm that won't let you speak to founders of companies they've previously exited",
      "Aggressive leverage (debt) as part of the deal — your company now has to service debt it didn't take on",
      "Management fees charged to your company on top of their equity return",
      "Earnout structures that look like they'll pay you but have conditions you'll never hit",
      "Vague language about your role post-acquisition — get your title, authority, and reporting lines in writing",
    ],
    green_flags: [
      "PE firm with Africa-specific expertise and actual operating partners who understand local context",
      "Track record of growing businesses in your industry, not just financial engineering",
      "Honest about timeline and what exit looks like — you know what you're signing up for",
      "Founders they've backed will talk to you openly, including about hard moments",
    ],
    real_examples: [
      {
        name: "Helios Investment Partners — African PE done right",
        what_happened:
          "Helios backed companies like Vivo Energy (fuel retail in Africa) and Interswitch (Nigerian fintech). They brought capital, governance, and access to global relationships. Interswitch eventually became a unicorn with $1B+ valuation. Helios made strong returns. The businesses grew into regional leaders.",
        outcome: "good",
        lesson: "The right PE firm with the right business creates something neither could have built alone. Operational PE with Africa expertise is very different from financial engineering PE.",
      },
      {
        name: "Founder pushed out after PE entry (common pattern)",
        what_happened:
          "A successful Nigerian food manufacturer sold 60% to a PE firm for $8M. The PE firm brought in an outside CEO within 18 months, saying the founder was 'better suited to product development.' The founder had built the culture, the supplier relationships, and the customer loyalty. New management optimized margins but lost three key distribution partners who had personal relationships with the founder. Revenue dropped 30%.",
        outcome: "bad",
        lesson: "If you are the business — your relationships, your trust, your vision — selling control is selling yourself. Get clear on what 'your role post-close' means before you sign.",
      },
    ],
    questions_to_ask_yourself: [
      "Am I selling control of something I built for the right reasons — not because I'm desperate?",
      "Can I emotionally handle watching someone else make decisions about my company?",
      "Is the debt structure they're proposing something my company can actually service?",
      "What specifically does my role look like after close — in writing?",
      "Have I had a lawyer who works on my side (not their lawyer) review every document?",
    ],
  },
];

export const CAPITAL_WISDOM = {
  core_message:
    "Taking money is only good if you can still move how you want to move. The moment your investor's timeline, their values, or their return targets start running your company — you're working for them, not for Africa.",
  before_you_take_any_money: [
    "Know exactly what you're giving up — equity, control, optionality",
    "Know exactly what you're getting — cash, connections, credibility, expertise",
    "Know the exit scenario your investor is planning and ask yourself if you're okay with it",
    "Talk to 3 founders who took money from this investor, especially ones whose companies struggled",
    "Have your own lawyer, not the investor's lawyer",
    "Understand that a bad deal is worse than no deal",
  ],
  the_bootstrapping_case:
    "The most underrated move in African business: don't raise at all. Lola Shoneyin built Ouida Books with no external investment. Diekolola Okonkwo built Ejire with savings. Bootstrapped businesses are 100% yours. Every dollar in revenue goes to you. You answer to your customers, not your cap table. Before you take anyone's money, ask seriously: can I get to profitability without it?",
  investor_type_fit: [
    { stage: "Idea / no revenue", fits: "Grants, Competitions, FFF (Friends/Family/Fools)" },
    { stage: "Revenue: $0–$100K/year", fits: "Grants, Angel investors, Revenue-based financing" },
    { stage: "Revenue: $100K–$1M/year", fits: "Angels, Angel syndicates, Small crowdfunding" },
    { stage: "Revenue: $1M–$10M/year", fits: "VCs (if tech-enabled and scalable), Family offices, PE (if profitable)" },
    { stage: "Revenue: $10M+/year, profitable", fits: "PE, Growth equity, Strategic investors, IPO" },
  ],
};
