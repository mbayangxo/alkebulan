// Business registration guides — concrete, branched by business type.
// Not generic: actual CFA costs, actual office names, actual timelines at Linguère/Dakar rates.
// Each path maps to a Wealth Path and gates Tier 0 → Tier 1 visibility in the marketplace.

export interface RegistrationStep {
  step: number;
  action: string;
  where: string;
  cost_cfa: string;
  cost_usd: string;
  timeline: string;
  phone?: string;
  note?: string;
}

export interface BusinessPath {
  id: string;
  name: string;              // e.g. "GIE / Groupement"
  wealth_paths: string[];    // which Wealth Paths this serves
  who_it_is_for: string;     // plain language
  minimum_people: number;
  why: string;               // why this structure, not another
  total_cost_cfa: string;
  total_timeline: string;
  steps: RegistrationStep[];
  after_registration: string[]; // what unlocks after this
  tier_upgrade: string;         // what marketplace tier this achieves
}

export interface CountryRegistrationGuide {
  country: string;
  country_code: string;
  intro: string;
  updated: string;  // ISO date of last verification
  paths: BusinessPath[];
  common_mistakes: string[];
  help_contacts: { name: string; phone: string; hours?: string }[];
}

export const REGISTRATION_GUIDES: CountryRegistrationGuide[] = [

  // ─── SENEGAL ──────────────────────────────────────────────────────────────
  {
    country: "Senegal",
    country_code: "SN",
    intro: "Senegal has four main legal structures for small businesses. The right one depends on your sector, how many people you're starting with, and how quickly you need to formalize. Most informal producers (farmers, dairy sellers, artisans) start with a GIE. Tech founders and exporters usually go straight to SARL. Individual traders use Registre du Commerce. None of these require a lawyer if you know the steps.",
    updated: "2026-05-01",
    paths: [
      {
        id: "SN-GIE",
        name: "GIE (Groupement d'Intérêt Économique)",
        wealth_paths: ["Farmer", "Manufacturer", "Exporter", "Beauty Founder"],
        who_it_is_for: "Groups of 2–20 people who want to formalize a collective business — farmers' cooperatives, women's processing groups, artisan networks. You do NOT need a business registration first. No minimum capital required.",
        minimum_people: 2,
        why: "The GIE is designed for informal African economic structures. It lets a group of people pool resources, access credit together, get a bank account, and bid on procurement contracts — without any individual needing to put up capital. Mouride trading networks, dairy cooperatives, shea butter processing groups — GIE is the instrument they use.",
        total_cost_cfa: "15,000–35,000 CFA ($25–$58)",
        total_timeline: "2–4 weeks",
        steps: [
          {
            step: 1,
            action: "Draft your GIE statutes — the founding document listing all members, shares, and purpose",
            where: "You can write this yourself using the OHADA model GIE template (available at any notary or legal aid center). A notary will charge 10,000–25,000 CFA to do it for you.",
            cost_cfa: "0–25,000 CFA",
            cost_usd: "$0–$41",
            timeline: "1–3 days",
            note: "The statute must list all members' full names, ID numbers, and their share in the GIE. Keep a copy of all members' national ID cards (CNI).",
          },
          {
            step: 2,
            action: "Register at the Tribunal de Commerce (RCCM) or local Centre de Formalités des Entreprises (CFE)",
            where: "In Dakar: Tribunal de Commerce, Plateau — RCCM counter. In Thiès, Louga, Saint-Louis: local CFE. In Linguère (Louga region): CFE de Louga covers this area (Louga city). No need to go to Dakar.",
            cost_cfa: "10,000–15,000 CFA",
            cost_usd: "$17–$25",
            timeline: "3–7 days",
            phone: "+221 33 889 80 00 (Tribunal de Commerce Dakar)",
            note: "Bring: statutes (2 originals + 3 copies), all members' CNI copies, a group photo is sometimes requested but not required.",
          },
          {
            step: 3,
            action: "Get your NINEA (tax ID) from DGID",
            where: "Direction Générale des Impôts et Domaines — online at impôts.sn or nearest DGID centre. Free. Do this the same week as step 2.",
            cost_cfa: "0 CFA",
            cost_usd: "Free",
            timeline: "3–5 days",
            phone: "+221 33 889 21 00",
          },
          {
            step: 4,
            action: "Open a collective bank account with your RCCM number and NINEA",
            where: "BNDE (best for groups — SME-specific products), La Poste / CCP (lowest fees), Banque Atlantique. Wave does not currently support GIE accounts.",
            cost_cfa: "0–5,000 CFA opening deposit",
            cost_usd: "$0–$8",
            timeline: "1 week",
            note: "BNDE specifically targets GIEs with micro-credit products. Bring your RCCM, NINEA, statutes, and all member IDs.",
          },
        ],
        after_registration: [
          "Access DER/FJ group loans (up to 5M CFA for GIEs, no collateral under 500K CFA)",
          "Open a collective Wave or Orange Money account for digital payments",
          "Bid on ARMP (public procurement) contracts — minimum size 2M CFA for GIEs",
          "Tier 1 visibility in the Unity Opportunities marketplace (local + regional buyers)",
          "Apply for FONSIS / BNDE agricultural financing",
        ],
        tier_upgrade: "Tier 1 — ID Verified + business registration complete",
      },

      {
        id: "SN-AUTO",
        name: "Auto-Entrepreneur",
        wealth_paths: ["Creator", "Tech Founder", "Fashion Brand"],
        who_it_is_for: "Solo operators: freelancers, digital creators, consultants, designers. Individual — not a group. You work alone or with contractors you pay per project. Simplified tax regime, lowest cost to register.",
        minimum_people: 1,
        why: "Introduced in 2015, the auto-entrepreneur regime is Senegal's fastest and cheapest business structure. No minimum capital. Flat monthly tax based on revenue — no accounting firm required. Ideal for people starting out who want to be legal and access banking without complexity.",
        total_cost_cfa: "5,000–10,000 CFA ($8–$17)",
        total_timeline: "1 week",
        steps: [
          {
            step: 1,
            action: "Register online at APIX / DER portal or at any CFE",
            where: "Online: investinsenegal.com or the Auto-Entrepreneur portal at autoentrepreneur.sn. In person: any CFE (Centre de Formalités des Entreprises). In Dakar: CFE Corniche, Thiès, or Ziguinchor.",
            cost_cfa: "5,000–10,000 CFA",
            cost_usd: "$8–$17",
            timeline: "Same day (online) to 3 days (in person)",
            phone: "+221 33 849 05 55 (APIX)",
          },
          {
            step: 2,
            action: "Receive your RCCM and NINEA — both issued simultaneously at the CFE",
            where: "Included in registration — not a separate step in the auto-entrepreneur regime",
            cost_cfa: "Included",
            cost_usd: "Included",
            timeline: "Same day as step 1",
          },
          {
            step: 3,
            action: "Declare your monthly revenue and pay flat monthly tax (CFU)",
            where: "Online at impots.sn or at any tax center (Centre des Services Fiscaux). The rate is 2% of turnover up to 15M CFA/year — below that no IS or TVA required.",
            cost_cfa: "2% of monthly revenue",
            cost_usd: "2% of monthly revenue",
            timeline: "Monthly",
            note: "Keep a simple record of income. You do not need a full accountant. A notebook or spreadsheet is sufficient for the auto-entrepreneur regime.",
          },
        ],
        after_registration: [
          "Open a personal business bank account or dedicated mobile money account",
          "Issue invoices legally — your NINEA is your business identity",
          "Access Dakar digital economy grants (JICA, AFD) — many require NINEA as minimum",
          "Tier 1 visibility in marketplace",
        ],
        tier_upgrade: "Tier 1 — ID Verified + business registration complete",
      },

      {
        id: "SN-RC",
        name: "Commerçant — Registre du Commerce",
        wealth_paths: ["Farmer", "Manufacturer", "Fashion Brand", "Exporter"],
        who_it_is_for: "Individual traders who buy and sell goods — market vendors, shop owners, wholesalers. This is the standard individual trader registration, not a company. You trade in your own name.",
        minimum_people: 1,
        why: "Faster and cheaper than a SARL. Required for anyone who wants to trade commercially, import/export goods, or formalize an existing shop. Many market vendors in Dakar, Touba, Linguère, and Thiès start here.",
        total_cost_cfa: "20,000–40,000 CFA ($33–$66)",
        total_timeline: "1–2 weeks",
        steps: [
          {
            step: 1,
            action: "Register at your local Tribunal de Commerce or CFE",
            where: "Dakar: Tribunal de Commerce, Plateau. Louga (covers Linguère region): Tribunal de Grande Instance de Louga, Service du Greffe. Thiès: Tribunal de Commerce de Thiès.",
            cost_cfa: "20,000–35,000 CFA",
            cost_usd: "$33–$58",
            timeline: "1 week",
            phone: "+221 33 941 13 72 (Tribunal Louga)",
            note: "Bring: CNI, 2 passport photos, a lease or proof of business address (even a notarized letter from a family member confirming you operate from their address works).",
          },
          {
            step: 2,
            action: "Get NINEA at DGID",
            where: "Same as GIE step 3 — DGID. Free.",
            cost_cfa: "0 CFA",
            cost_usd: "Free",
            timeline: "3–5 days",
          },
        ],
        after_registration: [
          "Open a business bank account",
          "Register with ARMP to bid on government supply contracts",
          "Access trade finance and import/export permits",
          "DER/FJ individual loans up to 5M CFA",
          "Tier 1 marketplace visibility",
        ],
        tier_upgrade: "Tier 1 — ID Verified + business registration complete",
      },

      {
        id: "SN-SARL",
        name: "SARL (Société à Responsabilité Limitée)",
        wealth_paths: ["Tech Founder", "Exporter", "Manufacturer"],
        who_it_is_for: "Founders building companies — tech startups, manufacturing, export businesses, anyone raising investment or contracting with international partners. Requires at least 1,000,000 CFA minimum share capital (approx. $1,650).",
        minimum_people: 1,
        why: "The SARL limits personal liability and is recognized internationally for contracts and investment. Required for DFI financing above 10M CFA, for USAID/EU procurement, and for most formal investor agreements. It's the standard for Dakar's startup ecosystem.",
        total_cost_cfa: "100,000–250,000 CFA + 1,000,000 CFA minimum capital",
        total_timeline: "3–6 weeks",
        steps: [
          {
            step: 1,
            action: "Hire a notary to draft your statuts constitutifs (founding articles)",
            where: "Dakar: Maître Fall, Maître Diagne, or any notaire inscrit à la Chambre des Notaires du Sénégal. Estimated cost: 50,000–150,000 CFA depending on share capital.",
            cost_cfa: "50,000–150,000 CFA",
            cost_usd: "$82–$245",
            timeline: "1–2 weeks",
            note: "You can draft your own statutes using the OHADA SARL template and have a notary authenticate them for less. A notary is legally required for authentication but does not have to draft from scratch.",
          },
          {
            step: 2,
            action: "Deposit your minimum share capital at an approved bank",
            where: "Any commercial bank. Bring notarized statutes. The bank issues a capital deposit certificate (attestation de dépôt des fonds).",
            cost_cfa: "1,000,000 CFA minimum capital (deposit, not fee)",
            cost_usd: "$1,650 minimum",
            timeline: "1–3 days",
            note: "The capital stays in the company account — it's the company's money, not a fee. Once registered, you can use it for expenses.",
          },
          {
            step: 3,
            action: "Register at RCCM and get NINEA",
            where: "CFE or Tribunal de Commerce. Brings statutes, capital certificate, and all founders' IDs.",
            cost_cfa: "35,000–60,000 CFA",
            cost_usd: "$58–$98",
            timeline: "1–2 weeks",
          },
          {
            step: 4,
            action: "Publish a notice in a journal d'annonces légales (official gazette)",
            where: "Le Soleil, Dakar Actu, or the Journal Officiel. Required by OHADA law.",
            cost_cfa: "15,000–30,000 CFA",
            cost_usd: "$25–$50",
            timeline: "3–5 days",
          },
        ],
        after_registration: [
          "Raise investment — SARL is required for most angel/VC deals in Senegal",
          "Access BNDE / FONGIP / FONSIS financing above 10M CFA",
          "Sign international contracts and apply for EU/US procurement",
          "Diamniadio Industrial City: priority access for registered SARLs",
          "Tier 1 (and eligible for Tier 2/3 as business grows)",
        ],
        tier_upgrade: "Tier 1 — eligible for Tier 2 field verification",
      },
    ],
    common_mistakes: [
      "Getting a SARL when you need a GIE. SARLs require 1M CFA capital — most cooperatives and farmers' groups should start with a GIE.",
      "Going to Dakar when your regional CFE can do it. Louga CFE covers the Linguère area. Thiès CFE covers Thiès region. You rarely need to travel to Dakar for registration.",
      "Paying a fixer ('courtier') 100,000+ CFA for something that costs 15,000 CFA at the CFE. The CFE counter staff can walk you through the process for free.",
      "Skipping the NINEA. Without a NINEA you cannot open a proper business account, access DER/FJ loans, or bid on procurement. It's free and takes 3 days.",
      "Not keeping your statutes. You will need them every time you apply for a loan, open an account, or apply for a program. Keep 5 certified copies.",
    ],
    help_contacts: [
      { name: "CFE Dakar (Centre de Formalités des Entreprises)", phone: "+221 33 889 25 00", hours: "Mon–Fri 8h–17h" },
      { name: "DER/FJ (loans and grants for youth/women)", phone: "+221 33 824 13 22", hours: "Mon–Fri 8h–16h30" },
      { name: "APIX (investment promotion / auto-entrepreneur)", phone: "+221 33 849 05 55" },
      { name: "Tribunal de Commerce Dakar (RCCM)", phone: "+221 33 889 80 00" },
      { name: "DGID (NINEA / tax ID)", phone: "+221 33 889 21 00" },
    ],
  },

];

export function getRegistrationGuide(countryCode: string): CountryRegistrationGuide | undefined {
  return REGISTRATION_GUIDES.find(g => g.country_code.toUpperCase() === countryCode.toUpperCase());
}

export function getPathById(countryCode: string, pathId: string): BusinessPath | undefined {
  return getRegistrationGuide(countryCode)?.paths.find(p => p.id === pathId);
}

export function getPathsForWealthPath(countryCode: string, wealthPath: string): BusinessPath[] {
  return getRegistrationGuide(countryCode)?.paths.filter(p => p.wealth_paths.includes(wealthPath)) ?? [];
}
