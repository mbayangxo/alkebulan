// Africa sector opportunity intelligence — real programs, government contracts, and indigenous business targets

export interface SectorOpportunity {
  id: string;
  sector: string;
  sector_icon: string;
  tagline: string;
  the_truth: string; // friend voice — why this sector is wide open
  market_size: string;
  for_who: string[]; // farmers, builders, engineers, etc.
  programs: GovernmentProgram[];
  indigenous_contracts: IndigenousContract[];
  entry_points: EntryPoint[];
  african_winner?: string; // real person/company proof
}

export interface GovernmentProgram {
  name: string;
  country: string;
  what_it_is: string;
  for_who: string;
  how_much: string;
  how_to_apply: string;
  indigenous_only: boolean;
  url?: string;
}

export interface IndigenousContract {
  country: string;
  what_they_want: string;
  who_qualifies: string; // specifically indigenous/African-owned
  how_to_position: string;
  current_gap: string; // why the contract goes abroad right now
  the_opportunity: string;
}

export interface EntryPoint {
  budget: string;
  start_here: string;
  first_contract: string;
}

export const AFRICA_SECTORS: SectorOpportunity[] = [
  {
    id: "construction",
    sector: "Construction & Housing",
    sector_icon: "🏗️",
    tagline: "Africa needs 50 million new homes. Who is going to build them?",
    the_truth: "Right now, Chinese and European construction firms are winning government contracts worth billions across Africa — not because they're better, but because African builders haven't organized into companies that can bid. Senegal's Diamniadio industrial city, Nigeria's Eko Atlantic, Ghana's Affordable Housing Programme — these are billion-dollar projects that African engineers and builders could own. The contracts exist. The builders exist. The gap is the company structure.",
    market_size: "$100B+ in construction projects across Africa annually",
    for_who: ["Builders", "Engineers", "Architects", "Contractors", "Plumbers", "Electricians", "Interior designers", "Material suppliers"],
    programs: [
      {
        name: "FONSIS Housing Development Fund",
        country: "Senegal",
        what_it_is: "Senegal's sovereign wealth fund actively finances housing and infrastructure projects for Senegalese construction firms",
        for_who: "Senegalese-owned construction companies with RCCM registration",
        how_much: "CFA 10M–500M in co-financing",
        how_to_apply: "Apply directly at fonsis.org — needs business plan, 2 years company history, proof of past project delivery",
        indigenous_only: true,
        url: "https://fonsis.org"
      },
      {
        name: "Nigeria's Mass Housing Programme",
        country: "Nigeria",
        what_it_is: "Federal Government initiative building 300,000 homes — open to Nigerian construction firms as contractors and subcontractors",
        for_who: "Nigerian-registered construction and material supply companies",
        how_much: "Contract values from ₦50M to billions",
        how_to_apply: "Register at the Bureau of Public Procurement (BPP) and monitor FG contract notices at publicprocurement.gov.ng",
        indigenous_only: true,
      },
      {
        name: "Kenya Affordable Housing Programme",
        country: "Kenya",
        what_it_is: "Government target of 500,000 homes — Kenyan contractors get preference in procurement",
        for_who: "Kenya-registered contractors (Agapo Building Contractors Association members get priority)",
        how_much: "KES 10M–500M contract packages",
        how_to_apply: "Register as a contractor at the National Housing Corporation (NHC) and monitor tenders at tenders.go.ke",
        indigenous_only: true,
      },
      {
        name: "Ghana SSNIT Housing Contractor Programme",
        country: "Ghana",
        what_it_is: "Social Security and National Insurance Trust actively builds affordable housing and awards construction contracts to Ghanaian firms",
        for_who: "Ghanaian-registered construction companies",
        how_much: "GHS 2M–50M per package",
        how_to_apply: "Register at Ghana's Public Procurement Authority at ppaghana.org",
        indigenous_only: true,
      },
      {
        name: "AfDB Fragile States Housing Initiative",
        country: "Pan-Africa",
        what_it_is: "African Development Bank finances large-scale housing in fragile states — and requires local content (30–60% of work to national firms)",
        for_who: "African-owned construction and engineering firms",
        how_much: "$5M–$500M projects",
        how_to_apply: "Register in AfDB's procurement system at afdb.org/en/business/procurement",
        indigenous_only: false,
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "Diamniadio industrial city needs infrastructure services, maintenance contracts, and secondary construction subcontracts. Thiès and Saint-Louis urbanization projects. Dakar Grand Train (BRT) station construction.",
        who_qualifies: "Senegalese (indigenous/wolof/peulh/sérère etc.) owned companies with at least 51% Senegalese blood ownership and RCCM registration",
        how_to_position: "Join BSTP (Bourse de Sous-Traitance et de Partenariat du Sénégal) — the government's local content agency that connects Senegalese businesses to subcontracts on large projects",
        current_gap: "Chinese contractors (CSCEC, CCCC) win primary contracts but legally must subcontract 20–30% to local firms. Most Senegalese businesses don't know this window exists.",
        the_opportunity: "BSTP has active listings for subcontracts that barely get applicants. A Senegalese contractor with basic OHSAS certification and a registered company can access these today."
      },
      {
        country: "Nigeria",
        what_they_want: "Coastal road projects, Abuja satellite towns, Delta state housing, Lagos waterfront development. Federal roads budget exceeds ₦1 trillion annually.",
        who_qualifies: "Nigerian-owned companies registered with COREN (for engineering firms), NIA (architects), and CORBON (builders)",
        how_to_position: "The Local Content Act mandates that Nigerian firms get preference in all federally-funded projects. Document your indigene status and sectoral certification.",
        current_gap: "Julius Berger (German) and China State Construction dominate because Nigerian firms haven't bid at the right tier. But they take subcontractors.",
        the_opportunity: "Julius Berger is legally required to subcontract portions to Nigerian firms. Submit your company profile directly to their local partnerships team."
      },
      {
        country: "Rwanda",
        what_they_want: "Kigali's urban expansion, green buildings, affordable housing estates. Rwanda's Vision 2050 involves rebuilding 70% of existing informal settlements.",
        who_qualifies: "Rwandan-owned companies (RDB-registered) — Rwanda has the strictest local preference rules in East Africa",
        how_to_position: "Rwanda prioritizes certified SMEs. Get registered with Rwanda's Public Procurement Authority (RPPA) at rppa.gov.rw",
        current_gap: "The construction skills base is growing but company formation is lagging — most Rwandan builders work as labor, not as company owners.",
        the_opportunity: "Rwanda Habitat (government agency) specifically seeks Rwandan subcontractors for labor, materials, and secondary services. Start there."
      }
    ],
    entry_points: [
      { budget: "Under $500", start_here: "Form a construction cooperative with 5–10 builders. Split the registration cost. Bid on small municipal projects.", first_contract: "Local school repair, market stalls, government office maintenance" },
      { budget: "$500–$5,000", start_here: "Register your company properly. Get professional certifications. Build one strong portfolio project.", first_contract: "Small residential builds, church/mosque construction, land preparation" },
      { budget: "$5,000+", start_here: "Register as a subcontractor to a Chinese or European primary contractor. Use the learning and the portfolio to bid independently.", first_contract: "Subcontract on road, housing, or public building projects" },
    ],
    african_winner: "Reginald Mengi built IPP Media in Tanzania from construction contracts — he didn't start in media. He started by winning government building contracts with a local company, used the cash flow to diversify, and became Tanzania's richest man."
  },

  {
    id: "agriculture",
    sector: "Modern Agriculture",
    sector_icon: "🌾",
    tagline: "Africa feeds the world but starves itself. That changes now.",
    the_truth: "Africa imports $50 billion in food annually. $50 billion. We export cocoa beans and import chocolate. We export cassava and import pasta. We export tomatoes and import tomato paste. The modern farmer doesn't just grow — they process. They package. They brand. They export. The gap between what African farmers earn and what they could earn is the single biggest wealth creation opportunity on the continent right now.",
    market_size: "$1 trillion African food market by 2030",
    for_who: ["Farmers", "Agricultural engineers", "Food processors", "Cold chain operators", "Agronomists", "Irrigation technicians", "Packaging manufacturers", "Logistics operators"],
    programs: [
      {
        name: "AFAWA (Affirmative Finance Action for Women in Africa)",
        country: "Pan-Africa",
        what_it_is: "AfDB's $3 billion program giving agricultural loans to African women-owned businesses at preferential rates",
        for_who: "Women-owned agribusinesses across all 54 countries",
        how_much: "$10,000–$1M in credit guarantees and loans",
        how_to_apply: "Apply through participating banks in your country — list at afdb.org/afawa",
        indigenous_only: false,
      },
      {
        name: "BSTP Agricultural Subcontracts",
        country: "Senegal",
        what_it_is: "Senegal's local content agency connects Senegalese farmers and processors to large food supply contracts (hospitals, schools, military)",
        for_who: "Senegalese-owned farms and food processors",
        how_much: "CFA 500K–50M per contract",
        how_to_apply: "Register at bstp.sn — free registration, list your products and capacity",
        indigenous_only: true,
        url: "https://bstp.sn"
      },
      {
        name: "NIRSAL Agribusiness Loans",
        country: "Nigeria",
        what_it_is: "Nigeria Incentive-Based Risk Sharing System for Agricultural Lending — makes commercial banks give you agricultural loans they normally wouldn't",
        for_who: "Nigerian farmers and agribusinesses",
        how_much: "₦500,000–₦50M at 9% interest (well below market rate)",
        how_to_apply: "Apply through your commercial bank — they use NIRSAL's guarantee. Check eligibility at nirsal.com",
        indigenous_only: true,
      },
      {
        name: "Ghana ADVANCE Programme",
        country: "Ghana",
        what_it_is: "Agricultural Development and Value Chain Enhancement — USAID-funded but targets Ghanaian businesses to build export capacity",
        for_who: "Ghanaian cocoa, shea, and cashew businesses",
        how_much: "Grant matching up to $50,000",
        how_to_apply: "Apply through local implementing partners listed at advance-ghana.org",
        indigenous_only: false,
      },
      {
        name: "Ethiopia Agricultural Transformation Agency",
        country: "Ethiopia",
        what_it_is: "Government agency channeling fertilizer, seeds, and market access to Ethiopian smallholder farmers and cooperatives",
        for_who: "Ethiopian farmers and agricultural cooperatives",
        how_much: "Subsidized inputs + market connections",
        how_to_apply: "Register your cooperative with local kebele office and apply through ATA at ata.gov.et",
        indigenous_only: true,
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "National school feeding program (Programme National de Cantines Scolaires) needs food supply for 1.5 million students. Army and police food procurement. Hospital food systems. Hotel and restaurant supply chains.",
        who_qualifies: "Senegalese (indigenous blood) owned farms and food processors with food safety certification",
        how_to_position: "Dakar has a massive hotel and restaurant market that currently imports ingredients. Source locally and present to hotel supply managers directly. For government: join BSTP and flag your availability for food supply contracts.",
        current_gap: "School feeding programs import rice and canned goods from Asia when Casamance grows premium rice and Senegal has fruit in abundance. The disconnect is logistics and a registered supply company.",
        the_opportunity: "Form a supplier cooperative with 10–20 local farmers, get a food handling certificate, and bid on the school feeding program. It's a contract that renews every year."
      },
      {
        country: "Kenya",
        what_they_want: "Government school feeding, prison food supply, military rations, Nairobi restaurant and hotel supply",
        who_qualifies: "Kenyan-owned farms and food businesses (KEBS-certified)",
        how_to_position: "Get KEBS certification (Kenya Bureau of Standards) — this is the minimum requirement for any institutional food supply contract in Kenya",
        current_gap: "Import-heavy institutional buyers are switching to local because of forex shortages. This is the window.",
        the_opportunity: "Nairobi's tech and hospitality boom means premium food demand is growing 15% a year. The supply side hasn't caught up."
      }
    ],
    entry_points: [
      { budget: "Under $200", start_here: "Grow one high-value crop intensively (moringa, hibiscus, tiger nuts). Sell fresh, then dry, then package.", first_contract: "Local market, WhatsApp orders, neighbors, restaurants" },
      { budget: "$200–$2,000", start_here: "Add basic processing: a dryer, a grinder, a sealer. Move from commodity to product.", first_contract: "Local shops, health food stores, WhatsApp export to diaspora" },
      { budget: "$2,000+", start_here: "Get food safety certification. Build a cold chain link. Apply for institutional supply contracts.", first_contract: "School feeding, hospital supply, hotel chains" },
    ],
    african_winner: "Laiterie du Berger (Senegal) — started collecting Fulani milk in Linguère with just basic refrigerated trucks. Raised $10M from DFIs including OPIC. Now supplies fresh dairy to 2,000+ retailers across Senegal. The milk existed. The collection, processing, and distribution system didn't."
  },

  {
    id: "energy",
    sector: "Energy & Solar",
    sector_icon: "⚡",
    tagline: "600 million Africans have no reliable electricity. That's 600 million customers.",
    the_truth: "Africa gets more sunlight than anywhere on earth. We have wind. We have rivers for hydro. We have geothermal in East Africa. And yet 600 million people have no reliable power. Not because it's impossible — because nobody built the distribution infrastructure. Solar panel prices dropped 90% in the last decade. A solar installation business in Nairobi or Dakar today can serve off-grid villages, remote farms, and urban middle class homes that the grid doesn't reach. This is not a future opportunity. It is open right now.",
    market_size: "$70B+ African energy market by 2030",
    for_who: ["Electrical engineers", "Solar technicians", "Energy entrepreneurs", "Project developers", "Grid operators", "Battery storage specialists", "Rural electrification contractors"],
    programs: [
      {
        name: "AMEA Power — African Energy Developer Fund",
        country: "Pan-Africa",
        what_it_is: "Dedicated fund for African-owned renewable energy companies to develop and sell power to national grids",
        for_who: "African-owned energy developers",
        how_much: "Project finance from $1M–$500M",
        how_to_apply: "Submit project proposal at amea-power.com — needs site land access, offtake letter, and preliminary engineering study",
        indigenous_only: false,
      },
      {
        name: "Nigeria REA Off-Grid Solar Programme",
        country: "Nigeria",
        what_it_is: "Rural Electrification Agency contracts Nigerian solar companies to electrify unserved communities — guaranteed offtake from government",
        for_who: "Nigerian-registered solar companies with NERC license",
        how_much: "Project grants of $100K–$10M + government guaranteed offtake",
        how_to_apply: "Apply for NERC mini-grid license first, then submit to REA tenders at rea.gov.ng",
        indigenous_only: true,
      },
      {
        name: "Kenya GET FiT Solar Programme",
        country: "Kenya",
        what_it_is: "Government-backed feed-in tariff scheme for small solar developers (under 10MW) — sell power to KPLC at guaranteed price",
        for_who: "Kenyan energy developers (50%+ local ownership required)",
        how_much: "KES 10–20 per kWh guaranteed over 20 years",
        how_to_apply: "Apply at Energy and Petroleum Regulatory Authority: epra.go.ke",
        indigenous_only: false,
      },
      {
        name: "Senegal ASER Rural Electrification",
        country: "Senegal",
        what_it_is: "Agency for Rural Electrification (ASER) awards concessions to electrify unserved rural Senegalese communities",
        for_who: "Senegalese companies or companies with majority Senegalese ownership",
        how_much: "Concession rights + CFA 50M–500M in government co-financing",
        how_to_apply: "Monitor ASER tender publications at aser.sn and respond to specific concession areas",
        indigenous_only: true,
        url: "https://aser.sn"
      },
      {
        name: "USAID POWER Africa",
        country: "Pan-Africa",
        what_it_is: "US government initiative with $54B committed to African energy — but directs transactions to local developers, not American companies",
        for_who: "African energy businesses",
        how_much: "Deal advisory, financing connections, and direct grants",
        how_to_apply: "Register as a transaction party at powerafrica.org",
        indigenous_only: false,
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "SENELEC (national power company) wants local installation, maintenance, and metering companies. The solar off-grid push under Plan Sénégal Émergent targets 1,000+ villages by 2025 — still underway.",
        who_qualifies: "Senegalese-owned companies with electrical engineering certification and CRSE license (Commission de Régulation du Secteur de l'Electricité)",
        how_to_position: "Get your CRSE license (6 weeks, ~CFA 150,000). Then contact ASER directly for available concession areas — small villages where no one has bid yet.",
        current_gap: "Many ASER rural concession zones have ZERO bidders. The government literally cannot find local companies to apply for them.",
        the_opportunity: "Pick a zone that has never had electricity. Apply for the concession. Install solar + battery. Sell power under government-guaranteed tariff. This is a 20-year annuity income stream."
      },
      {
        country: "Nigeria",
        what_they_want: "REA needs solar companies for 500+ unserved LGAs. Distribution companies (DISCOs) need metering contractors, installation services, and maintenance.",
        who_qualifies: "Nigerian companies with NERC mini-grid license and COREN-registered engineers on staff",
        how_to_position: "Start with a single community demonstration project (150–500 homes). Use it as proof for REA grant applications.",
        current_gap: "90% of Nigeria's REA contracts go to non-Nigerian companies because the local application quality is poor. A well-written Nigerian bid wins.",
        the_opportunity: "Abuja Disco, Ikeja Electric, and Eko Disco all have active tenders for local installation subcontractors. No engineering degree required at sub-tier — electrician certification is enough."
      }
    ],
    entry_points: [
      { budget: "Under $1,000", start_here: "Get certified as a solar PV installer (NABCEP or equivalent). Start installing home systems.", first_contract: "Individual home solar, village tea shop, farm water pump" },
      { budget: "$1,000–$10,000", start_here: "Form a solar company. Get your regulatory license. Bid on community solar projects.", first_contract: "School solar electrification (UNICEF/UNDP often fund these)" },
      { budget: "$10,000+", start_here: "Apply for a rural electrification concession zone. Access government co-financing.", first_contract: "Mini-grid concession serving 200–2,000 homes" },
    ],
    african_winner: "Starsight Energy (Nigeria) — founded by Africans, now powers data centers, hospitals, and commercial buildings across West Africa with hybrid solar. $50M+ in revenue. Started with small commercial rooftop installations."
  },

  {
    id: "infrastructure",
    sector: "Roads, Water & Infrastructure",
    sector_icon: "🛣️",
    tagline: "Roads to everywhere. Water for everyone. Africa is building itself — join the team.",
    the_truth: "Africa has a $68 billion annual infrastructure financing gap. Roads, water systems, bridges, ports, railways — Africa needs all of it. And increasingly, African governments are under pressure from civil society to award these contracts to local companies. The problem is that when the contract goes out, there's no local company ready to bid at the right scale. Your job is to be that company. You don't start with the highway — you start with the drainage channel. You don't start with the dam — you start with the borehole.",
    market_size: "$68B annual infrastructure gap — growing every year",
    for_who: ["Civil engineers", "Hydraulic engineers", "Road contractors", "Plumbers", "Hydrologists", "Surveyors", "Equipment operators", "Materials suppliers"],
    programs: [
      {
        name: "AfDB African Water Facility",
        country: "Pan-Africa",
        what_it_is: "Funds water and sanitation project preparation — African firms that prepare feasibility studies for AfDB-funded water projects get first mover advantage",
        for_who: "African engineering consultancies",
        how_much: "$500K–$2M per project study",
        how_to_apply: "Apply at afdb.org/awf",
        indigenous_only: false,
      },
      {
        name: "ANSD Road Works — Senegal",
        country: "Senegal",
        what_it_is: "Senegal's road authority publishes tenders for road construction and maintenance — small contract packages reserved for Senegalese SMEs",
        for_who: "Senegalese-owned civil works companies",
        how_much: "CFA 5M–200M per package",
        how_to_apply: "Monitor DCMP (Direction Centrale des Marchés Publics) tenders at dcmp.gouv.sn",
        indigenous_only: true,
        url: "https://dcmp.gouv.sn"
      },
      {
        name: "Kenya KeRRA Local Contractor Programme",
        country: "Kenya",
        what_it_is: "Kenya Rural Roads Authority reserves tier-D contract packages specifically for Kenyan youth-owned companies",
        for_who: "Kenyan-owned companies, with preference for youth (18–35) and women",
        how_much: "KES 3M–15M per package",
        how_to_apply: "Get classified by Kenya National Construction Authority (NCA) at nca.go.ke, then apply for KeRRA tenders",
        indigenous_only: true,
      },
      {
        name: "Ghana Water Company Contractor Register",
        country: "Ghana",
        what_it_is: "Ghana Water Company regularly contracts Ghanaian firms for water network extension, maintenance, and meter installation",
        for_who: "Ghanaian-registered civil and plumbing companies",
        how_much: "GHS 100K–5M contracts",
        how_to_apply: "Register as a contractor at Ghana Water Company Limited — contractor prequalification opens quarterly",
        indigenous_only: true,
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "ONAS (sanitation authority) needs local contractors for drain maintenance in all major cities. SONES (water company) needs pipe installation and extension contractors. AGEROUTE (roads authority) has SME-reserved packages.",
        who_qualifies: "Senegalese companies registered with NINEA tax number and at least one qualified engineer on staff",
        how_to_position: "The key is DCMP registration — Senegal's public procurement system. Once you're in the database, you automatically see relevant tenders. Check dcmp.gouv.sn weekly.",
        current_gap: "Rural road maintenance tenders go unanswered in many regions because no local company can mobilize equipment. Equipment rental + registration = you can compete.",
        the_opportunity: "ONAS has annual drain-cleaning contracts in Dakar, Thiès, and Saint-Louis that are specifically reserved for Senegalese businesses. Most years they struggle to fill all packages."
      }
    ],
    entry_points: [
      { budget: "Under $500", start_here: "Form a cooperative of 5+ laborers. Bid on small municipal maintenance contracts (drain cleaning, pothole filling, market clearing).", first_contract: "Municipal maintenance, school ground work, church building" },
      { budget: "$500–$5,000", start_here: "Rent equipment for first project (don't buy yet). Use project revenue to build equipment over time.", first_contract: "Small road grading, site clearing, foundation excavation" },
      { budget: "$5,000–$50,000", start_here: "Buy basic equipment. Get classified by national construction authority. Bid on tier C and D contract packages.", first_contract: "Rural road rehabilitation, borehole drilling, water network extension" },
    ],
    african_winner: "Reon Matemane (South Africa) built a water infrastructure company that now wins multi-million rand government contracts — started by doing subcontract labor on other firms' projects."
  },

  {
    id: "tech",
    sector: "Tech & Software",
    sector_icon: "💻",
    tagline: "Africa's next unicorn is not in Silicon Valley. It's in Accra, Lagos, Nairobi, Dakar.",
    the_truth: "Flutterwave is worth $3 billion. Wave disrupted Orange Money's 5–8% fees with 0%. Andela placed African engineers in global tech companies. Moove gives African drivers vehicle financing through Uber earnings. None of these ideas required inventing something new — they required applying a known model to an African problem nobody had solved yet. Africa's tech opportunity isn't building what the West already has. It's solving problems that are specific to Africa's 1.4 billion people that no Western company will ever understand deeply enough to solve.",
    market_size: "$120B African digital economy by 2030",
    for_who: ["Software developers", "Data scientists", "UX designers", "Product managers", "System administrators", "Network engineers", "Cybersecurity professionals", "AI engineers"],
    programs: [
      {
        name: "Google for Startups Africa",
        country: "Pan-Africa",
        what_it_is: "Google's startup programme for African tech companies — cloud credits, mentorship, and investor access",
        for_who: "African tech startups with working product",
        how_much: "$200K–$350K in Google Cloud credits + technical support",
        how_to_apply: "Apply at startup.google.com/programs/accelerator",
        indigenous_only: false,
      },
      {
        name: "Senegal Direction de l'Informatique Contracts",
        country: "Senegal",
        what_it_is: "Government IT procurement — Senegalese software companies can bid on digitization projects for ministries and state agencies",
        for_who: "Senegalese-registered IT companies (can be very small)",
        how_much: "CFA 5M–500M contracts",
        how_to_apply: "Register at ARTP (telecom regulator) and monitor DCMP tenders tagged 'informatique'",
        indigenous_only: true,
      },
      {
        name: "Lagos State Employment Trust Fund Tech Track",
        country: "Nigeria",
        what_it_is: "Lagos State gives interest-free loans to Lagos-based tech companies and provides free co-working and mentorship",
        for_who: "Lagos-resident tech entrepreneurs (any origin, Lagos-domiciled company)",
        how_much: "₦1M–₦10M interest-free over 3 years",
        how_to_apply: "Apply at lsetf.ng",
        indigenous_only: false,
      },
      {
        name: "Rwanda Innovation Fund",
        country: "Rwanda",
        what_it_is: "Government fund backing Rwandan tech startups with equity, grants, and procurement preferences for government digitization",
        for_who: "Rwandan-registered tech companies",
        how_much: "$50K–$500K",
        how_to_apply: "Apply through the Rwanda ICT Chamber at ict.gov.rw",
        indigenous_only: true,
      },
      {
        name: "Norrsken22 Fund",
        country: "Pan-Africa",
        what_it_is: "Swedish impact fund with $200M specifically for African tech startups solving African problems",
        for_who: "African tech startups at seed–Series A",
        how_much: "$100K–$3M",
        how_to_apply: "Apply at norrsken22.com",
        indigenous_only: false,
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "Ministry of Finance digitization. National ID system modernization. DGID (tax authority) software. Customs IT systems. Hospital management systems for MSAS.",
        who_qualifies: "Senegalese companies (SN-registered) with technical reference projects — can be small, even 2–3 person firms",
        how_to_position: "Government IT procurement in Senegal is competitive but underserved. A Senegalese company with references from private sector clients can compete. Build 2–3 private sector products first, then bid public.",
        current_gap: "Indian and French IT companies (Capgemini, Infosys) dominate large contracts. But ministries increasingly want local teams for maintenance — they can't fly French consultants for every update.",
        the_opportunity: "Maintenance and support contracts are long-tail gold. Win a one-time system build for CFA 20M, then charge CFA 3M/year in maintenance for the next decade."
      },
      {
        country: "Kenya",
        what_they_want: "Huduma Centre digitization, county government IT systems, national health IT (NHIF systems), education tech for CBC curriculum, agri data platforms",
        who_qualifies: "Kenyan-registered tech companies — preference for youth-owned under government affirmative action procurement",
        how_to_position: "Register with Kenya ICT Authority at ict.go.ke — they have a vendor database specifically for government IT procurement",
        current_gap: "Most Kenyan tech talent works for foreign companies. Government contracts go abroad because there's no local vendor strong enough to bid. Be the exception.",
        the_opportunity: "County governments are severely underserved. 47 counties all need basic digital systems. The Nairobi county IT contract is $10M+ but there are also $50K county contracts nobody is bidding on."
      }
    ],
    entry_points: [
      { budget: "Under $0 (skills only)", start_here: "Build one product that solves a real African problem. Ship it. Get 10 users. Iterate.", first_contract: "Freelance for local businesses, simple websites, basic apps" },
      { budget: "$0–$1,000", start_here: "Register your company. Build a portfolio. Apply for a startup grant (TEF, Norrsken, Google for Startups).", first_contract: "Small business software, SME websites, local e-commerce stores" },
      { budget: "$1,000+", start_here: "Apply for government IT maintenance contracts. Use early wins to bid larger.", first_contract: "Ministry maintenance contract, county digital system, NGO data platform" },
    ],
    african_winner: "Andela started by training 700 Nigerian engineers in 6 months, then placing them in global tech companies. Now valued at $1.5 billion. They didn't build new software — they built access."
  },

  {
    id: "healthcare",
    sector: "Healthcare & Medicine",
    sector_icon: "🏥",
    tagline: "Africa produces less than 2% of its own medicines. The pharmacy is empty. Fill it.",
    the_truth: "Every time a West African patient needs a drug, almost certainly it was made in India or Europe. Africa imports 94% of its medicines. COVID showed the world the danger — Africa couldn't get vaccines because we had no manufacturing base. Now there's a continental push to fix this. Governments are offering incentives, the AfDB is financing pharmaceutical plants, the African Union wants 60% of vaccines made in Africa by 2040. This is a policy-backed, government-funded, officially mandated opportunity. Doctors, pharmacists, healthcare entrepreneurs — this is your moment.",
    market_size: "$45B+ African healthcare market by 2030",
    for_who: ["Doctors", "Nurses", "Pharmacists", "Medical equipment importers", "Lab technicians", "Public health specialists", "Pharmaceutical entrepreneurs", "Medical device engineers"],
    programs: [
      {
        name: "Africa Medicine Manufacturing Fund (AMMF)",
        country: "Pan-Africa",
        what_it_is: "AfDB and AU financing mechanism for African-owned pharmaceutical manufacturing — direct financing and guarantees",
        for_who: "African-owned pharma companies seeking to manufacture locally",
        how_much: "$1M–$100M in project finance",
        how_to_apply: "Apply through AfDB at afdb.org — needs feasibility study and local regulatory approval",
        indigenous_only: false,
      },
      {
        name: "Nigeria NAFDAC Local Manufacturing Incentives",
        country: "Nigeria",
        what_it_is: "Nigeria offers tax holidays and import duty waivers for companies that manufacture pharmaceuticals locally",
        for_who: "Nigerian-registered pharmaceutical companies",
        how_much: "5-year corporate tax holiday + 0% import duty on pharmaceutical raw materials",
        how_to_apply: "Apply for Pioneer Status at Nigerian Investment Promotion Commission (NIPC) at nipc.gov.ng",
        indigenous_only: true,
      },
      {
        name: "Senegal Health Ministry Procurement",
        country: "Senegal",
        what_it_is: "Senegal's PNA (Pharmacie Nationale d'Approvisionnement) is actively seeking Senegalese pharmaceutical suppliers to reduce import dependency",
        for_who: "Senegalese pharmaceutical importers, distributors, and manufacturers",
        how_much: "CFA 10M–500M supply contracts",
        how_to_apply: "Register with PNA at pna.sn and apply for their supplier prequalification process",
        indigenous_only: true,
        url: "https://pna.sn"
      },
      {
        name: "JICA Healthcare Startups",
        country: "Pan-Africa",
        what_it_is: "Japan's development agency funds African health tech and medical device companies to solve African healthcare gaps",
        for_who: "African health entrepreneurs",
        how_much: "$50K–$300K grants",
        how_to_apply: "Apply through local JICA offices in your country",
        indigenous_only: false,
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "PNA needs local pharmaceutical distributors. Hospitals need medical equipment maintenance. Government primary health centers need medical supply companies. Dakar health tech procurement.",
        who_qualifies: "Senegalese pharmaceutical companies and medical supply businesses — DPM (Direction de la Pharmacie et du Médicament) registration required",
        how_to_position: "Start as a distributor of basic medical supplies (gloves, masks, bandages, basic medication). Get DPM approval. Build relationships with hospital procurement directors.",
        current_gap: "Most basic medical supplies in Senegal are imported from India and France. A Senegalese distributor who can reliably supply public hospitals has a permanent customer.",
        the_opportunity: "MSAS (Ministry of Health) has emergency supply contracts that literally no Senegalese company is applying for. They end up going to foreign distributors by default."
      }
    ],
    entry_points: [
      { budget: "Under $2,000", start_here: "Start a medical supply distribution company. Source from India at wholesale. Distribute to clinics, pharmacies, and hospitals.", first_contract: "Local clinic supply, pharmacy distribution, corporate health checkups" },
      { budget: "$2,000–$20,000", start_here: "Build a diagnostics lab or health tech platform. Apply for government diagnostic contracts.", first_contract: "Government clinic diagnostics, corporate health screening, telemedicine" },
      { budget: "$20,000+", start_here: "Apply for pharmaceutical manufacturing licenses. Explore generic drug manufacturing.", first_contract: "Government supply contract for generic drugs, hospital supply" },
    ],
    african_winner: "Aspen Pharmacare (South Africa) went from a small generics company to Africa's largest pharmaceutical manufacturer. Now supplies 25+ countries with generic ARVs, cancer drugs, and anaesthetics. They proved it can be done."
  },

  {
    id: "logistics",
    sector: "Logistics & Trade",
    sector_icon: "🚚",
    tagline: "Nothing moves in Africa without a logistics company. Be the one that moves it.",
    the_truth: "The cost of moving goods inside Africa is 3–5× higher than in Asia or Europe. Moving goods from Lagos to Abidjan costs more per kilometer than shipping them from Rotterdam to Lagos. This is why intra-African trade is only 15% of total trade — not because Africans don't want to buy from each other, but because the logistics infrastructure and companies don't exist. AfCFTA changes this. 54 countries dropping trade barriers. One billion potential customers. But goods still need to move. The opportunity is not the container ship — it's the last-mile delivery, the cold chain truck, the border crossing agent, the customs clearance service.",
    market_size: "$200B African logistics market by 2030",
    for_who: ["Truck drivers", "Logistics entrepreneurs", "Customs agents", "Cold chain operators", "Warehouse managers", "Port operations workers", "Trade finance specialists", "E-commerce fulfillment operators"],
    programs: [
      {
        name: "AfCFTA Small Business Trade Facilitation Fund",
        country: "Pan-Africa",
        what_it_is: "African Union fund helping small businesses export under the new AfCFTA single market rules",
        for_who: "African SMEs with export capacity",
        how_much: "Trade finance guarantees and technical assistance",
        how_to_apply: "Contact AfCFTA Secretariat at afcfta.au.int",
        indigenous_only: false,
      },
      {
        name: "ECOWAS Trade Finance Guarantee",
        country: "West Africa",
        what_it_is: "ECOWAS Bank guarantees letters of credit and trade finance for West African SMEs trading across borders",
        for_who: "ECOWAS member country businesses",
        how_much: "Guarantees on trade finance up to $500K",
        how_to_apply: "Apply through ECOWAS Bank at ebid.int",
        indigenous_only: false,
      },
      {
        name: "Senegal AGPME Transport Loans",
        country: "Senegal",
        what_it_is: "Senegalese SME agency provides subsidized loans for transport companies to buy vehicles",
        for_who: "Senegalese transport and logistics companies",
        how_much: "CFA 5M–50M at 5–8% interest",
        how_to_apply: "Apply at agpme.sn",
        indigenous_only: true,
        url: "https://agpme.sn"
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "Port of Dakar inland transport. Government supply chain logistics. Fruit and vegetable cold chain. School book distribution. Hospital supply chain. DiamFarm agricultural logistics.",
        who_qualifies: "Senegalese transport companies (CCRT — Conseil des Chargeurs du Sénégal registered)",
        how_to_position: "Join CCRT — the shipper's council. They actively connect Senegalese logistics companies to cargo contracts. Membership is ~CFA 50,000/year and gives access to their contract board.",
        current_gap: "Port of Dakar uses Lebanese and French-connected logistics companies for most inland transport. Senegalese companies that meet safety and capacity requirements are preferred but rarely apply.",
        the_opportunity: "DiamFarm (the Diamniadio industrial zone) needs logistics companies for factory supply chains. Early relationships with factories there can become decade-long service contracts."
      }
    ],
    entry_points: [
      { budget: "Under $500", start_here: "Start with motorbike delivery in your city. Scale to a fleet. Apply for e-commerce fulfillment contracts.", first_contract: "Restaurant delivery, parcel delivery, errand service" },
      { budget: "$500–$5,000", start_here: "One pickup truck. Serve local businesses, markets, and small manufacturers.", first_contract: "Market produce transport, local store delivery, event logistics" },
      { budget: "$5,000+", start_here: "A truck + cold chain capability opens hospital supply, farm produce, and institutional contracts.", first_contract: "Hospital supply chain, agricultural cold chain, cross-border trade" },
    ],
    african_winner: "Kobo360 (Nigeria) — built an Uber-like platform for freight trucks. Connected thousands of truck owners to cargo contracts digitally. Raised $30M+ from Goldman Sachs and others. Started with one truck and one app."
  },

  {
    id: "mining",
    sector: "Mining & Resources",
    sector_icon: "⛏️",
    tagline: "Africa holds 60% of the world's critical minerals. We should hold more of the profit.",
    the_truth: "Congo has 70% of the world's cobalt. Every electric vehicle on earth runs on Congolese cobalt. Congo earns $7/kg. Tesla sells the battery pack for $12,000. Guinea has 30% of the world's bauxite. The aluminum in your MacBook started in Guinea. Guinea earned approximately nothing from it. Gold, diamonds, platinum, lithium, manganese — Africa has it all, and exports almost all of it raw. The opportunity isn't the mining license (those require billions) — it's the processing, the equipment supply, the environmental services, the community relations work, the artisanal mining organization, the refining.",
    market_size: "$50B+ annual African mining services market",
    for_who: ["Mining engineers", "Geologists", "Environmental scientists", "Equipment operators", "Community liaison officers", "Artisanal mining cooperatives", "Processing plant engineers", "Safety officers"],
    programs: [
      {
        name: "DRC Artisanal Mining Formalization Fund",
        country: "Congo (DRC)",
        what_it_is: "Government support for artisanal miners to formalize, get safe equipment, and access better markets",
        for_who: "Congolese artisanal and small-scale miners (ASM)",
        how_much: "Equipment grants and cooperative formation support",
        how_to_apply: "Contact SAESSCAM (Service d'Assistance et d'Encadrement du Small Scale Mining) in Kinshasa",
        indigenous_only: true,
      },
      {
        name: "South Africa Mining Charter Local Procurement",
        country: "South Africa",
        what_it_is: "All mining companies operating in South Africa must source 70%+ of goods and services from South African (black-owned preferred) companies",
        for_who: "South African black-owned businesses supplying to mining companies",
        how_much: "Supply contracts from R500K to hundreds of millions",
        how_to_apply: "Register as a mining services supplier with MHSC (Mine Health and Safety Council) and approach mining company procurement departments directly",
        indigenous_only: true,
      },
      {
        name: "Guinea Mining Community Development Fund",
        country: "Guinea",
        what_it_is: "Mining companies operating in Guinea must pay into community development funds — Guinean entrepreneurs can apply for business development grants from these funds",
        for_who: "Guinean citizens in mining-affected communities",
        how_much: "GNF 50M–2B depending on fund size",
        how_to_apply: "Contact the local prefectural development office in your mining region",
        indigenous_only: true,
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "ICS (phosphate mines) and TOSYALI (steel) in Senegal need local suppliers for everything from food catering to transport to environmental monitoring. Teranga Gold (Sabodala) has a local procurement policy.",
        who_qualifies: "Senegalese companies registered with NINEA — any sector, from catering to transport to environmental services",
        how_to_position: "Large mining operations need hundreds of local services. Contact the Community Relations Manager at each mine directly. They are under pressure to spend locally.",
        current_gap: "Mining companies in Senegal struggle to find qualified local suppliers and often import services they'd prefer to buy locally. Present professionally, meet their quality standards, win the contract.",
        the_opportunity: "Mine catering alone is millions of CFA per year. TOSYALI steel plant (near Dakar) currently sources food and facility management from outside Senegal. No Senegalese company has formally bid."
      }
    ],
    entry_points: [
      { budget: "Under $1,000", start_here: "Join an artisanal mining cooperative. Formalize it. Get better tools and better prices.", first_contract: "Formalized ASM cooperative with certified minerals" },
      { budget: "$1,000–$10,000", start_here: "Start a mining services company (catering, transport, security, environmental monitoring) serving existing mines.", first_contract: "Food supply contract to a local mine, site security" },
      { budget: "$10,000+", start_here: "Environmental consulting, equipment import, technical services for mining operations.", first_contract: "Environmental impact monitoring contract, equipment supply" },
    ],
    african_winner: "Tony Elumelu originally built his wealth as a banker who specialized in financing African natural resource companies — then built United Bank for Africa into a 20-country operation. He didn't mine the gold. He financed the people who did."
  },

  {
    id: "entrepreneurship",
    sector: "Trade & Entrepreneurship",
    sector_icon: "🏪",
    tagline: "The African market is 1.4 billion people. Not a niche. Not emerging. It is the market.",
    the_truth: "The African middle class is 350 million people and growing faster than any other region. They want brands that speak to them, products made for their climate, and services built for their reality. The opportunity isn't to copy European or American businesses into Africa — it's to build African solutions that are better than what exists anywhere else. Wave didn't copy M-Pesa. It destroyed Orange Money by being 5× better and 8× cheaper. You don't compete by being similar. You compete by being irreplaceable.",
    market_size: "$5.6T African GDP by 2030 — larger than India today",
    for_who: ["Entrepreneurs", "Product designers", "Service providers", "Retailers", "Wholesalers", "Market traders", "E-commerce entrepreneurs", "Factory owners"],
    programs: [
      {
        name: "Tony Elumelu Foundation Grant",
        country: "Pan-Africa",
        what_it_is: "Non-refundable $5,000 + mentorship for 10,000 African entrepreneurs annually",
        for_who: "Any African entrepreneur with a viable business idea",
        how_much: "$5,000 USD non-dilutive",
        how_to_apply: "Apply at tefconnect.com — applications open annually in January",
        indigenous_only: false,
        url: "https://tefconnect.com"
      },
      {
        name: "Senegal DER/FJ Youth Entrepreneurship Fund",
        country: "Senegal",
        what_it_is: "Délégation Générale à l'Entrepreneuriat Rapide des Femmes et des Jeunes — Senegal's primary government fund for young entrepreneurs",
        for_who: "Senegalese youth (18–40) with business projects",
        how_much: "CFA 300,000–10,000,000",
        how_to_apply: "Apply online at der.sn — multiple windows open throughout the year",
        indigenous_only: true,
        url: "https://der.sn"
      },
      {
        name: "3iE Africa Youth Innovation Challenge",
        country: "Pan-Africa",
        what_it_is: "Innovation challenge for African entrepreneurs solving development problems with scalable business models",
        for_who: "African entrepreneurs aged 18–35",
        how_much: "$50K–$300K",
        how_to_apply: "Apply at 3ieimpact.org when challenge windows open",
        indigenous_only: false,
      },
      {
        name: "FONGIP — Senegal SME Guarantee Fund",
        country: "Senegal",
        what_it_is: "Fonds de Garantie des Investissements Prioritaires — helps Senegalese entrepreneurs get bank loans by providing the guarantee banks require",
        for_who: "Senegalese businesses that have good ideas but lack bank collateral",
        how_much: "Loan guarantees from CFA 300K to 150M",
        how_to_apply: "Apply through any participating bank in Senegal — ask your bank if they work with FONGIP",
        indigenous_only: true,
        url: "https://fongip.sn"
      }
    ],
    indigenous_contracts: [
      {
        country: "Senegal",
        what_they_want: "Senegalese government procurement for: cleaning services, security, printing, catering, office supplies, transportation, IT maintenance, event management, media production.",
        who_qualifies: "Any Senegalese-registered company with NINEA tax number",
        how_to_position: "DCMP (dcmp.gouv.sn) publishes ALL government contracts. Subscribe to alerts. Apply fast — many small contracts (under CFA 5M) are single-source and awarded quickly to whoever applies first.",
        current_gap: "Cleaning contracts for government buildings. Security for public offices. Catering for national events. These are given to whoever shows up and submits a quote. Most Senegalese businesses don't know this.",
        the_opportunity: "Starting a government cleaning or security company in Senegal is one of the simplest businesses to start ($200–$500 to register, cleaning equipment under CFA 200,000). Contract revenues are reliable and monthly."
      }
    ],
    entry_points: [
      { budget: "Under $100", start_here: "Identify one product or service your community is importing that you can supply locally. Start selling.", first_contract: "Neighbors, local market, WhatsApp, church community" },
      { budget: "$100–$1,000", start_here: "Register your business. Apply for government micro-contracts. Supply local institutions.", first_contract: "Government office cleaning, local school supply, church catering" },
      { budget: "$1,000+", start_here: "Build a brand. Move from commodity to product. Go to market in diaspora and online.", first_contract: "Retail distribution, online store, diaspora export" },
    ],
    african_winner: "Aliko Dangote started by trading commodities — cement, sugar, rice — not manufacturing them. He built the cash flow and relationships first. Then he built the factories. The trade is the school."
  }
];

export interface CountryYouthProgram {
  country: string;
  flag: string;
  programs: {
    name: string;
    who: string;
    what: string;
    amount: string;
    sectors: string[];
    apply_at: string;
    indigenous_note?: string;
  }[];
}

export const COUNTRY_YOUTH_PROGRAMS: CountryYouthProgram[] = [
  {
    country: "Senegal",
    flag: "🇸🇳",
    programs: [
      {
        name: "DER/FJ — Délégation à l'Entrepreneuriat Rapide",
        who: "Senegalese youth and women (18–40)",
        what: "President Macky Sall's flagship youth entrepreneurship program. Non-dilutive grants and subsidized loans for Senegalese-owned businesses. Specific tracks for agriculture, digital, crafts, and services.",
        amount: "CFA 300,000 to CFA 10,000,000",
        sectors: ["Agriculture", "Digital", "Artisanal crafts", "Services", "Livestock"],
        apply_at: "der.sn — multiple windows open throughout the year",
        indigenous_note: "Reserved for Senegalese nationals — specifically designed to help indigenous Senegalese compete with non-Senegalese business owners"
      },
      {
        name: "FONGIP — Fonds de Garantie des Investissements Prioritaires",
        who: "Senegalese entrepreneurs who can't get bank loans",
        what: "Government guarantee fund. They stand between you and the bank — so even if you have no collateral, FONGIP's guarantee gets you the loan. Specifically designed for Senegalese SMEs that banks normally reject.",
        amount: "CFA 300,000 to CFA 150,000,000 in loan guarantees",
        sectors: ["All sectors"],
        apply_at: "fongip.sn — apply through any partner bank in Senegal",
        indigenous_note: "Prioritizes Senegalese nationals and businesses majority-owned by Senegalese nationals"
      },
      {
        name: "BSTP — Bourse de Sous-Traitance et de Partenariat",
        who: "Senegalese businesses of any size",
        what: "This is the most underused program in Senegal. BSTP connects Senegalese businesses to subcontract opportunities on large projects (Chinese infrastructure, French energy, international organizations). Registration is free. The contracts are real and recurring.",
        amount: "CFA 1M to hundreds of millions in subcontracts",
        sectors: ["Construction", "Logistics", "Catering", "IT", "Security", "Agriculture"],
        apply_at: "bstp.sn — free registration, list your company and services",
        indigenous_note: "Exists specifically to ensure Senegalese businesses get subcontracts from large foreign companies operating in Senegal"
      },
      {
        name: "DCMP Government Procurement Portal",
        who: "Any Senegalese-registered business with NINEA tax number",
        what: "All Senegalese government contracts are published here by law. Small contracts under CFA 5M are often awarded quickly with minimal competition. Many go unanswered. Subscribe to email alerts for your sector.",
        amount: "CFA 500,000 to billions depending on contract",
        sectors: ["All sectors — from cleaning to construction to IT"],
        apply_at: "dcmp.gouv.sn — register free, set up alerts by sector",
        indigenous_note: "Senegalese procurement law gives preference to Senegalese-owned companies in government contracting"
      },
      {
        name: "3FPT — Fonds de Financement de la Formation Professionnelle",
        who: "Senegalese workers and unemployed youth seeking skills",
        what: "Government training fund that pays for vocational training — solar installation, construction skills, IT, tailoring, and more. Free training for eligible Senegalese nationals.",
        amount: "Free training programs (government-funded)",
        sectors: ["Construction", "Energy", "IT", "Agriculture", "Artisanal"],
        apply_at: "3fpt.sn",
        indigenous_note: "Specifically for Senegalese nationals"
      },
      {
        name: "Sénégal Numérique — Digital Economy Fund",
        who: "Senegalese digital entrepreneurs and tech companies",
        what: "Senegal's digital economy push — the government actively funds Senegalese tech startups, digital platforms, and e-services that serve the Senegalese market",
        amount: "CFA 5M to CFA 100M in grants and loans",
        sectors: ["Tech", "Digital services", "Fintech", "Agritech", "E-commerce"],
        apply_at: "senumerique.sn",
        indigenous_note: "Strongly preferences Senegalese-owned digital companies"
      }
    ]
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    programs: [
      {
        name: "Nigeria Youth Investment Fund (NYIF)",
        who: "Nigerian youth aged 18–35",
        what: "Federal Government fund specifically for Nigerian youth entrepreneurs. Up to ₦25 million. Includes free business training before the loan.",
        amount: "₦250,000 to ₦25,000,000",
        sectors: ["All sectors"],
        apply_at: "nyif.gov.ng",
        indigenous_note: "Nigerian nationality required"
      },
      {
        name: "Government Enterprise and Empowerment Programme (GEEP)",
        who: "Market women, farmers, artisans, youth entrepreneurs",
        what: "Zero-interest or very low-interest loans for Nigerian micro-businesses. Fast disbursement. No collateral required for lower tiers.",
        amount: "₦10,000 to ₦100,000 (TraderMoni/MarketMoni) — up to ₦3M for higher tiers",
        sectors: ["Trading", "Agriculture", "Services", "Artisanal"],
        apply_at: "envelopedevt.gov.ng",
        indigenous_note: "Nigerian nationals only"
      },
      {
        name: "CBN Anchor Borrowers Programme",
        who: "Nigerian farmers and agribusinesses",
        what: "Central Bank subsidized loans for agriculture — 9% interest rate when commercial banks charge 25–30%. Targets smallholder farmers.",
        amount: "₦500,000 to ₦10,000,000",
        sectors: ["Agriculture", "Agro-processing"],
        apply_at: "Through your state's Agricultural Finance Corporation or participating banks",
        indigenous_note: "Nigerian agricultural businesses"
      }
    ]
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    programs: [
      {
        name: "YouStart Initiative",
        who: "Ghanaian youth aged 18–40",
        what: "Government's flagship youth employment program — grants, technical training, and market linkages for Ghanaian entrepreneurs",
        amount: "GHS 10,000 to GHS 50,000",
        sectors: ["Agriculture", "Manufacturing", "Services", "Tech"],
        apply_at: "masloc.gov.gh",
        indigenous_note: "Ghanaian nationals"
      },
      {
        name: "Ghana Enterprises Agency (GEA)",
        who: "Ghanaian SME owners",
        what: "Direct government support including business development services, market linkages, and funding access. Specifically targets companies that will create jobs for Ghanaians.",
        amount: "GHS 50,000 to GHS 500,000",
        sectors: ["All sectors"],
        apply_at: "gea.gov.gh",
        indigenous_note: "Priority for Ghanaian-owned companies"
      }
    ]
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    programs: [
      {
        name: "Hustler Fund",
        who: "Kenyan micro-entrepreneurs",
        what: "President Ruto's flagship fund — fast loans through M-PESA with no collateral required. The most accessible capital program Kenya has ever had.",
        amount: "KES 500 to KES 50,000 (individual), up to KES 500,000 (groups)",
        sectors: ["All sectors"],
        apply_at: "Via M-PESA — dial *844#",
        indigenous_note: "Kenyan nationals with M-PESA account"
      },
      {
        name: "Kenya Youth Enterprise Development Fund (KYEDF)",
        who: "Kenyan youth aged 18–35",
        what: "Government loans and technical support for youth-owned businesses. Special tracks for women and persons with disabilities.",
        amount: "KES 50,000 to KES 1,000,000",
        sectors: ["Agriculture", "Manufacturing", "Services", "Creative"],
        apply_at: "kydf.go.ke",
        indigenous_note: "Kenyan nationals"
      }
    ]
  },
  {
    country: "Rwanda",
    flag: "🇷🇼",
    programs: [
      {
        name: "BDF (Business Development Fund)",
        who: "Rwandan entrepreneurs",
        what: "Rwanda's SME support facility — credit guarantees that help Rwandan businesses access bank loans they couldn't otherwise get",
        amount: "RWF 5M to RWF 500M in guarantees",
        sectors: ["All sectors"],
        apply_at: "bdf.rw",
        indigenous_note: "Rwandan-owned businesses (any gender, age)"
      },
      {
        name: "Hanga Ahazaza Initiative",
        who: "Rwandan youth aged 16–35",
        what: "Enterprise development and job creation — combines training, mentorship, and seed funding for young Rwandan entrepreneurs",
        amount: "RWF 500,000 to RWF 5,000,000",
        sectors: ["ICT", "Agribusiness", "Creative industries", "Tourism"],
        apply_at: "rdb.rw",
        indigenous_note: "Rwandan nationals"
      }
    ]
  }
];
