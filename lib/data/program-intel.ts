// Program intelligence: eligibility tags + application success intel
// Keyed by exact program name as it appears in all-country-programs.ts

export interface SuccessIntel {
  typical_success_rate: string;
  what_strengthens: string[];
  what_kills: string[];
  readiness_checklist: string[];
  insider_tip?: string;
}

export interface EligibilityTag {
  age_min?: number;
  age_max?: number;
  gender?: "all" | "women";
  citizenship?: string;          // country name or "any_african"
  diaspora_ok?: boolean;
  stages?: Array<"idea" | "early" | "growing" | "established">;
  sectors?: string[];
}

export interface ProgramIntel {
  eligibility: EligibilityTag;
  success?: SuccessIntel;
}

export const PROGRAM_INTEL: Record<string, ProgramIntel> = {

  // ── NIGERIA ────────────────────────────────────────────────────────────────

  "Nigeria Youth Investment Fund (NYIF)": {
    eligibility: {
      age_min: 18, age_max: 35,
      gender: "all",
      citizenship: "Nigerian",
      diaspora_ok: false,
      stages: ["idea", "early", "growing"],
    },
    success: {
      typical_success_rate: "~5–8% of applicants receive funding per cycle",
      what_strengthens: [
        "BVN registered and linked to your bank account",
        "CAC-registered business (even free via SMEDAN)",
        "Clear financial projections showing how you'll repay",
        "Demonstrated job creation potential (even 1–2 jobs)",
        "Completed NYIF online capacity-building modules before applying",
      ],
      what_kills: [
        "No BVN or unverifiable identity",
        "Previous federal government loan default",
        "Age outside 18–35 at time of application",
        "No bank account in your name",
        "Vague business idea with no supporting documentation",
      ],
      readiness_checklist: [
        "National ID (NIN) or International Passport",
        "BVN — Bank Verification Number",
        "Active bank account in your name",
        "CAC registration certificate (get free via SMEDAN partnership)",
        "Business plan using the NYIF template",
        "2 passport photographs",
        "Utility bill or proof of address",
      ],
      insider_tip: "NYIF portal opens annually — apply on day 1. The system routinely gets overwhelmed within 48 hours. Set a calendar reminder for November/December when applications typically open.",
    },
  },

  "Youth Entrepreneurship Investment Bank (YEIB)": {
    eligibility: {
      age_min: 18, age_max: 40,
      gender: "all",
      citizenship: "Nigerian",
      diaspora_ok: false,
      stages: ["early", "growing"],
    },
    success: {
      typical_success_rate: "Newly launched (2025–2026) — rollout ongoing. Early applicants have advantage.",
      what_strengthens: [
        "Women-led or women co-founded businesses get priority tier",
        "Businesses with existing revenue and employees",
        "Sectors: agro-processing, manufacturing, tech, creative economy",
        "Clear ability to service the loan component",
        "Partnership with a BOI or DBN-connected bank",
      ],
      what_kills: [
        "Non-indigenous Nigerian applicants (citizenship strictly verified)",
        "Businesses with zero operating history",
        "Missing CAC registration",
      ],
      readiness_checklist: [
        "CAC certificate of incorporation",
        "2-year financial statements (if existing)",
        "Business plan with 3-year projections",
        "BVN + NIN",
        "Tax identification number (TIN)",
        "Bank statements (6 months minimum)",
      ],
      insider_tip: "YEIB is deployed through BOI and DBN partner banks — approach your bank about YEIB eligibility rather than applying directly. Banks push applications faster when there's a relationship.",
    },
  },

  "Tony Elumelu Foundation (TEF)": {
    eligibility: {
      age_min: 18, age_max: 55,
      gender: "all",
      citizenship: "any_african",
      diaspora_ok: true,
      stages: ["idea", "early"],
    },
    success: {
      typical_success_rate: "~1.5% globally — 10,000 selected from 500,000+ applicants annually",
      what_strengthens: [
        "Business idea is less than 3 years old (TEF targets early stage)",
        "Clear African market focus — must solve a problem in Africa",
        "3-minute video pitch is polished and personal (many skip this — don't)",
        "Sector alignment with TEF priorities: agriculture, health, tech, energy, manufacturing",
        "Checking which sectors are underrepresented in your country's cohort and applying accordingly",
      ],
      what_kills: [
        "Business older than 3 years at time of application",
        "No African market focus or business based entirely outside Africa",
        "Generic business plan not tailored to TEF's template",
        "Missing or low-quality video pitch",
        "Applying for a sector that had many successful applicants in your country last year",
      ],
      readiness_checklist: [
        "TEF online application (tefconnect.com) — opens January annually",
        "3-minute video pitch — record multiple takes, use natural light",
        "TEF business plan template — fill out every field",
        "National ID or passport",
        "Tax registration or business registration (optional but strengthens application)",
      ],
      insider_tip: "TEF favors sectors they haven't saturated in your country. Search 'TEF 2024 Nigeria cohort' to see which sectors were already selected, then apply in underrepresented areas. Agriculture and health consistently outperform 'generic tech'.",
    },
  },

  "BOI — Bank of Industry": {
    eligibility: {
      age_min: 18,
      gender: "all",
      citizenship: "Nigerian",
      diaspora_ok: false,
      stages: ["growing", "established"],
    },
    success: {
      typical_success_rate: "~15–20% of applicants in targeted sectors receive loans",
      what_strengthens: [
        "Collateral or ability to provide guarantor",
        "3+ years in business with audited financial statements",
        "Clear manufacturing, processing, or productive sector focus",
        "Existing contracts or confirmed market for your products",
        "Women-owned businesses qualify for a dedicated concessional-rate facility",
      ],
      what_kills: [
        "No verifiable business history",
        "Service businesses without productive sector components (BOI focuses on manufacturing)",
        "Poor credit history or existing loan defaults",
      ],
      readiness_checklist: [
        "CAC certificate + memorandum and articles",
        "2–3 years audited financial statements",
        "Business plan with factory/production details",
        "Collateral documentation (land title, property valuation)",
        "Company bank statements (12 months)",
        "Tax clearance certificate",
      ],
    },
  },

  // ── GHANA ──────────────────────────────────────────────────────────────────

  "YouStart Initiative (World Bank)": {
    eligibility: {
      age_min: 18, age_max: 40,
      gender: "all",
      citizenship: "Ghanaian",
      diaspora_ok: false,
      stages: ["idea", "early", "growing"],
    },
    success: {
      typical_success_rate: "~8% of applicants in competitive grant rounds (50,000+ target beneficiaries total)",
      what_strengthens: [
        "Women-led businesses — 50% of grants specifically reserved for women",
        "Agro-processing, manufacturing, creative economy, and tech focus",
        "Completion of GEA-facilitated business plan training before applying",
        "Detailed financial projections showing break-even within 2 years",
        "Letters from potential customers or market validation evidence",
      ],
      what_kills: [
        "Age outside 18–40 at submission",
        "Non-Ghanaian nationals (citizenship required)",
        "Application without attending a GEA pre-application workshop",
        "Business in purely trading/reselling (YouStart prioritizes value-addition)",
      ],
      readiness_checklist: [
        "GhanaCard (national ID)",
        "Attend a GEA YouStart workshop — many are free",
        "Business registration with Registrar General's Department",
        "Business plan in YouStart format",
        "Evidence of business concept or prototype",
        "Bank account (Ghana Commercial or any licensed bank)",
        "TIN — Tax Identification Number",
      ],
      insider_tip: "GEA runs free business plan workshops specifically for YouStart applicants. Attending dramatically increases success rate because they show you exactly what the evaluation criteria is. Find dates at gea.gov.gh.",
    },
  },

  "MEST Africa": {
    eligibility: {
      age_min: 18, age_max: 45,
      gender: "all",
      citizenship: "any_african",
      diaspora_ok: true,
      stages: ["idea", "early"],
    },
    success: {
      typical_success_rate: "~3% of applicants accepted into the 1-year program",
      what_strengthens: [
        "Tech-enabled solution with clear African market fit",
        "Team over solo founders (MEST heavily weights team composition)",
        "Founders who already have technical or business skills",
        "Market research demonstrating real customer understanding",
        "Willingness to relocate to Ghana for the program period",
      ],
      what_kills: [
        "Solo founder with no technical co-founder (if building tech)",
        "Solutions without clear African market differentiation",
        "Unwillingness to commit to full-time program",
      ],
      readiness_checklist: [
        "Strong team (2–4 founders preferred)",
        "Problem statement with market size research",
        "Basic prototype or MVP (even wireframes help)",
        "Video application — production quality matters less than clarity",
      ],
    },
  },

  // ── SENEGAL ────────────────────────────────────────────────────────────────

  "DER/FJ — Délégation à l'Entrepreneuriat Rapide": {
    eligibility: {
      age_min: 18, age_max: 40,
      gender: "all",
      citizenship: "Senegalese",
      diaspora_ok: false,
      stages: ["idea", "early", "growing"],
    },
    success: {
      typical_success_rate: "~20–25% of structured applicants receive some form of financing",
      what_strengthens: [
        "Business registered with RCCM and NINEA (formal businesses prioritized)",
        "Application submitted through your Commune's Entrepreneurship Champion",
        "Women and youth 18–35 are in the highest priority tier",
        "Sectors: agriculture, agro-processing, digital services, creative economy, crafts",
        "Clear repayment plan even for grant components",
      ],
      what_kills: [
        "No NINEA or business registration — informal businesses face a hard wall",
        "Applying outside the official cycle window",
        "Duplicate application (one person, one application, strictly enforced)",
        "Non-Senegalese nationality",
        "Application with no financial projections",
      ],
      readiness_checklist: [
        "NINEA — Numéro d'Identification Nationale des Entreprises et Associations",
        "RCCM — Registre du Commerce (business registration)",
        "CNI — Carte Nationale d'Identité (Senegalese)",
        "Business plan (DER/FJ has a standard template)",
        "Bank account at any Senegalese institution",
        "Evidence of 6+ months activity if existing business",
        "Letter from your local Commune or mairie",
      ],
      insider_tip: "DER/FJ processes through regional champions (Champions de l'Entrepreneuriat). Find your Commune's champion — they know the evaluation criteria and can flag your application for faster review. This alone moves you up the queue.",
    },
  },

  "PAVIE II (launched May 2025)": {
    eligibility: {
      age_min: 15, age_max: 40,
      gender: "all",
      citizenship: "Senegalese",
      diaspora_ok: false,
      stages: ["idea", "early", "growing"],
    },
    success: {
      typical_success_rate: "Deployed through DER/FJ and FONGIP — apply through those channels",
      what_strengthens: [
        "Youth 15–40 and economically active women of any age are the two core target groups",
        "Food sovereignty and agro-processing sector applications receive premium",
        "Applying through DER/FJ for direct financing or FONGIP for guarantee-backed loans",
        "Having a business idea with clear employment creation (PAVIE II targets 92,633 jobs)",
      ],
      what_kills: [
        "Non-Senegalese applicants",
        "Businesses in non-aligned sectors (focus is entrepreneurship, food, women/youth economic empowerment)",
      ],
      readiness_checklist: [
        "Same as DER/FJ checklist — PAVIE II funds flow through DER/FJ and FONGIP",
        "Specifically note youth or women status in application",
        "Mention food sovereignty or agriculture if applicable",
      ],
      insider_tip: "PAVIE II is €163M being channeled through existing DER/FJ and FONGIP infrastructure. Apply to DER/FJ and FONGIP as normal — they are the implementation arms. The additional PAVIE II budget means more capacity to approve in 2025–2026.",
    },
  },

  "FONGIP — Guarantee Fund": {
    eligibility: {
      age_min: 18,
      gender: "all",
      citizenship: "Senegalese",
      diaspora_ok: false,
      stages: ["early", "growing", "established"],
    },
    success: {
      typical_success_rate: "~35% of applications receive a guarantee — higher than direct grant programs",
      what_strengthens: [
        "Existing bank relationship (FONGIP guarantees existing loan applications — you need a bank first)",
        "Business with some trading history and bank statements",
        "Sectors: agriculture, crafts, SME services, manufacturing",
        "Women-led businesses receive up to 70% guarantee coverage vs 60% standard",
        "Clear ability to service the loan once the guarantee is in place",
      ],
      what_kills: [
        "Applying without first approaching a bank (FONGIP is a guarantor, not a direct lender)",
        "No business history at all — guarantee works for banks already considering you",
        "Non-Senegalese nationality",
      ],
      readiness_checklist: [
        "First: approach your bank about the loan you need, get a pre-approval or rejection due to lack of collateral",
        "Then: apply to FONGIP with the bank's letter indicating they'd lend if guaranteed",
        "RCCM + NINEA",
        "Bank statements (6 months)",
        "Business plan",
        "Tax clearance or attestation fiscale",
      ],
      insider_tip: "FONGIP's power is turning bank rejections into approvals. Get declined first (or negotiate with a bank), then bring FONGIP in as the guarantor. Banks move fast once FONGIP is on board.",
    },
  },

  // ── KENYA ──────────────────────────────────────────────────────────────────

  "Youth Enterprise Development Fund (YEDF)": {
    eligibility: {
      age_min: 18, age_max: 34,
      gender: "all",
      citizenship: "Kenyan",
      diaspora_ok: false,
      stages: ["idea", "early", "growing"],
    },
    success: {
      typical_success_rate: "~20% of applicants at county level",
      what_strengthens: [
        "County-level application (not national) — county offices process faster and have more accountability",
        "Group/cooperative applications are prioritized over individual",
        "Agricultural, manufacturing, trade, and service businesses all qualify",
        "Clear business registration or youth group registration",
        "National ID and youth age verification (18–34)",
      ],
      what_kills: [
        "Age 35+ at application",
        "Non-Kenyan nationals",
        "No supporting documentation",
        "Applying nationally when you should apply at county level",
      ],
      readiness_checklist: [
        "National ID (must show age 18–34)",
        "Youth group certificate or business registration from county",
        "Business plan (YEDF has a simple template)",
        "Bank account or SACCO account",
        "Letter from sublocation chief or ward administrator",
      ],
      insider_tip: "County-level applications succeed at 3× the rate of national-level applications. Go to your sub-county YEDF office in person — the officers have discretion to fast-track well-prepared applications.",
    },
  },

  "Women Enterprise Fund (WEF)": {
    eligibility: {
      age_min: 18,
      gender: "women",
      citizenship: "Kenyan",
      diaspora_ok: false,
      stages: ["idea", "early", "growing"],
    },
    success: {
      typical_success_rate: "~25–30% for group applications (higher than individual)",
      what_strengthens: [
        "Apply as a women's group (5–30 members) rather than individually — 70% of WEF goes to groups",
        "Group already registered with county (chama, cooperative, self-help group)",
        "Existing savings within the group demonstrate discipline",
        "Clear use of funds — specify what the loan will buy and how it generates income",
      ],
      what_kills: [
        "Solo individual applications (lower success rate than groups)",
        "Groups with no savings or formal registration",
        "Non-Kenyan women",
        "Male applicants (WEF is exclusively for women)",
      ],
      readiness_checklist: [
        "National ID",
        "Women's group registration certificate",
        "Group bank account or M-Pesa Savings group statement",
        "List of group members with IDs",
        "Simple business proposal",
      ],
      insider_tip: "Form or join a registered women's chama first. WEF loans to groups can be as low as 8% annual interest vs 15%+ commercial. The group guarantee mechanism is stronger than any collateral.",
    },
  },

  "NYOTA Program": {
    eligibility: {
      age_min: 15, age_max: 29,
      gender: "all",
      citizenship: "Kenyan",
      diaspora_ok: false,
      stages: ["idea", "early"],
    },
    success: {
      typical_success_rate: "~12% — 820,000 youth targeted nationally over the program period",
      what_strengthens: [
        "Age 15–29 clearly documented",
        "Skills training component in the application",
        "County targeting — apply in your registered county",
      ],
      what_kills: [
        "Age 30+ at application",
        "Non-Kenyan nationals",
      ],
      readiness_checklist: [
        "National ID or birth certificate (for under-18)",
        "County registration",
        "Skills assessment or training interest form",
      ],
    },
  },

  // ── SOUTH AFRICA ───────────────────────────────────────────────────────────

  "NYDA — National Youth Development Agency": {
    eligibility: {
      age_min: 14, age_max: 35,
      gender: "all",
      citizenship: "South African",
      diaspora_ok: false,
      stages: ["idea", "early", "growing"],
    },
    success: {
      typical_success_rate: "~18% of qualified applicants",
      what_strengthens: [
        "Age 14–35 clearly documented (proof of ID)",
        "Business registered with CIPC — even a simple PTY Ltd strengthens application",
        "Black-owned business — NYDA BEE mandate prioritizes historically disadvantaged individuals",
        "Clear job creation component",
        "Sectorally aligned: creative industries, tech, construction, agriculture, tourism",
      ],
      what_kills: [
        "Age 36+ at time of application",
        "Non-South African nationals",
        "Business older than 3 years (for grant components)",
        "No business plan in NYDA format",
      ],
      readiness_checklist: [
        "SA ID document",
        "CIPC company registration (nyda.gov.za provides support for this)",
        "Business plan using NYDA template",
        "Bank account in the business name",
        "Tax clearance pin from SARS (required for loans)",
        "3-month bank statements",
      ],
      insider_tip: "NYDA processes applications faster when submitted through a NYDA regional office rather than online. Book a business advisor appointment — they're free and the advisor can tell you which grants you qualify for before you apply.",
    },
  },

  "SEDFA — Small Enterprise Development Finance Agency": {
    eligibility: {
      age_min: 18,
      gender: "all",
      citizenship: "South African",
      diaspora_ok: false,
      stages: ["early", "growing", "established"],
    },
    success: {
      typical_success_rate: "~25% of applications under R500,000 — SEDFA's mandate is faster decisions",
      what_strengthens: [
        "SEDFA's 21-day decision rule for applications under R500K — apply for smaller amounts first",
        "BEE-compliant or BBBEE certificate (prioritized)",
        "Businesses with existing revenue (SEDFA bridges operational gaps)",
        "Clear repayment plan from business cash flow",
        "Established business with 2+ years history",
      ],
      what_kills: [
        "No South African business registration",
        "Poor SARS compliance or outstanding tax debt",
        "No proof of business revenue",
      ],
      readiness_checklist: [
        "CIPC registration certificate",
        "BBBEE certificate or affidavit",
        "6–12 months business bank statements",
        "Management accounts",
        "Tax clearance certificate from SARS",
        "Business plan with financial projections",
        "ID documents for all directors",
      ],
      insider_tip: "SEDFA specifically guarantees a 21-day decision on applications under R500,000. Submit a smaller, focused application first — getting approved builds your track record for larger funding later.",
    },
  },

  "NEF Women Empowerment Fund": {
    eligibility: {
      age_min: 18,
      gender: "women",
      citizenship: "South African",
      diaspora_ok: false,
      stages: ["early", "growing", "established"],
    },
    success: {
      typical_success_rate: "~20% of qualifying applications",
      what_strengthens: [
        "51%+ women-owned and women-managed business (both required)",
        "Black women ownership — NEF mandate explicitly prioritizes Black women",
        "Manufacturing, agriculture, and productive sectors get priority",
        "Existing business with demonstrable revenue and market",
      ],
      what_kills: [
        "Ownership below 51% by women",
        "Non-Black ownership at NEF (NEF mandate is Black economic empowerment)",
        "Purely speculative businesses without market validation",
      ],
      readiness_checklist: [
        "CIPC certificate showing women ownership",
        "Shareholders agreement",
        "3-year financial projections",
        "BEE certificate or affidavit",
        "Audited financials (if existing business)",
        "Business plan in NEF format",
      ],
    },
  },

};

// Pan-African programs available to all Africans (regardless of specific country)
export const PAN_AFRICAN_INTEL: ProgramIntel[] = [
  {
    eligibility: {
      age_min: 18, age_max: 55,
      gender: "all",
      citizenship: "any_african",
      diaspora_ok: true,
      stages: ["idea", "early"],
    },
  },
];
