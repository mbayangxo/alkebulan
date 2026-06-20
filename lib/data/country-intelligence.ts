export interface BusinessGuide {
  registrationSteps: {
    step: number;
    action: string;
    timeline: string;
    cost: string;
    where: string;
  }[];
  taxRates: {
    label: string;
    rate: string;
  }[];
  keyBanks: {
    name: string;
    notes: string;
    sme_friendly: boolean;
  }[];
  mobileMoney: string[];
  bestSectors: {
    name: string;
    reason: string;
  }[];
  easeOfBusiness: {
    score: number;
    rank: string;
    note: string;
  };
}

export const COUNTRY_INTELLIGENCE: Record<string, BusinessGuide> = {
  SN: {
    registrationSteps: [
      { step: 1, action: "Register at RCCM (Registre du Commerce et du Crédit Mobilier)", timeline: "1–2 weeks", cost: "35,000–60,000 CFA ($55–$100)", where: "Tribunal de Commerce de Dakar or online at rccm.sn" },
      { step: 2, action: "Get NINEA tax identification number", timeline: "1 week", cost: "Free", where: "Direction Générale des Impôts et Domaines (DGID)" },
      { step: 3, action: "Open a business bank account", timeline: "1–2 weeks", cost: "Starting deposit varies by bank", where: "Any major bank: BNDE, BHS, BRM, Banque Atlantique" },
      { step: 4, action: "Register with IPRES (social security) for employees", timeline: "1 week", cost: "Free to register", where: "IPRES office or online" },
    ],
    taxRates: [
      { label: "Corporate income tax (IS)", rate: "30%" },
      { label: "VAT (TVA)", rate: "18%" },
      { label: "Minimum flat tax (CFU)", rate: "0.5% of turnover" },
      { label: "Personal income tax (IRPP)", rate: "0–40% progressive" },
    ],
    keyBanks: [
      { name: "BNDE (Banque Nationale pour le Développement Economique)", notes: "Government DFI — best rates for productive investment", sme_friendly: true },
      { name: "DER/FJ", notes: "Not a bank but provides grants and loans at 5% — priority for women and youth", sme_friendly: true },
      { name: "Banque Atlantique", notes: "Pan-African commercial bank with SME products", sme_friendly: true },
      { name: "Société Générale Sénégal", notes: "International bank with business banking for established SMEs", sme_friendly: false },
    ],
    mobileMoney: ["Orange Money", "Wave (dominant, zero fees)", "Free Money", "Wizall"],
    bestSectors: [
      { name: "Fisheries & seafood", reason: "World-class coastline, growing EU export demand, underdeveloped value chain" },
      { name: "Tourism", reason: "Government priority, AfCFTA tourism corridor, French and American diaspora market" },
      { name: "Fashion & creative economy", reason: "Strong Dakar fashion scene, growing export to Europe, access to Afreximbank Creative fund" },
      { name: "Agricultural processing", reason: "Groundnut, millet, bissap — raw exports undervalued, processing premium is 3–5×" },
    ],
    easeOfBusiness: { score: 72, rank: "Top 30% in Africa", note: "APIX reforms have cut registration time significantly. Political stability is an advantage." },
  },

  GH: {
    registrationSteps: [
      { step: 1, action: "Register with Registrar General's Department (RGD)", timeline: "1–3 days", cost: "GH₵ 150–500 ($10–$40)", where: "rgd.gov.gh online or RGD offices in Accra, Kumasi" },
      { step: 2, action: "Register with Ghana Revenue Authority (GRA) for Tax ID", timeline: "1 day", cost: "Free", where: "gra.gov.gh" },
      { step: 3, action: "Register for VAT at GRA (if turnover > GH₵ 200,000)", timeline: "2–3 days", cost: "Free", where: "GRA VAT Service" },
      { step: 4, action: "Open a business bank account", timeline: "1 week", cost: "GH₵ 500–2,000 initial deposit", where: "GCB, Ecobank, Stanbic, CalBank" },
      { step: 5, action: "Register with SSNIT (social security) for employees", timeline: "1 week", cost: "Free", where: "ssnit.gov.gh" },
    ],
    taxRates: [
      { label: "Corporate income tax (CIT)", rate: "25%" },
      { label: "VAT (standard rate)", rate: "15%" },
      { label: "NHIL + GETFL levy", rate: "2.5% + 1%" },
      { label: "Personal income tax", rate: "0–35% progressive" },
      { label: "Withholding tax (dividends)", rate: "8%" },
    ],
    keyBanks: [
      { name: "Agricultural Development Bank (ADB)", notes: "Best for agri businesses — dedicated SME and agri loan products", sme_friendly: true },
      { name: "Ghana Commercial Bank (GCB)", notes: "Largest domestic bank, widespread branches, SME loan schemes", sme_friendly: true },
      { name: "Stanbic Bank Ghana", notes: "Standard Bank subsidiary, strong for mid-size SMEs", sme_friendly: true },
      { name: "Ecobank Ghana", notes: "Pan-African bank, good for cross-border trade within West Africa", sme_friendly: true },
    ],
    mobileMoney: ["MTN Mobile Money (MoMo — dominant)", "Vodafone Cash", "AirtelTigo Money"],
    bestSectors: [
      { name: "Cocoa processing", reason: "Ghana exports raw beans but processes very little — value add opportunity is massive" },
      { name: "Tech & fintech", reason: "Year of Return built diaspora links, government Ghana Digital Centers, SEC sandbox" },
      { name: "Gold jewelry & craft", reason: "Artisanal goldsmithing has centuries of heritage, strong export market especially US" },
      { name: "Food processing", reason: "Growing urban middle class, import substitution policy creates buyer market" },
    ],
    easeOfBusiness: { score: 78, rank: "Top 25% in Africa", note: "Ghana StartUp Act, NEIP incentives, and AfCFTA early adopter status make it highly favorable." },
  },

  NG: {
    registrationSteps: [
      { step: 1, action: "Register business at Corporate Affairs Commission (CAC)", timeline: "3–7 days", cost: "₦10,000–₦25,000 ($10–$25)", where: "search.cac.gov.ng online — fully digital" },
      { step: 2, action: "Get Tax Identification Number (TIN) from FIRS", timeline: "1–3 days", cost: "Free", where: "tinverification.firs.gov.ng" },
      { step: 3, action: "Obtain NAFDAC registration (for food, cosmetics, drugs)", timeline: "3–6 months", cost: "₦50,000–₦500,000 ($50–$500)", where: "nafdac.gov.ng — apply early, it takes time" },
      { step: 4, action: "Open business bank account", timeline: "1–2 weeks", cost: "₦5,000–₦50,000 opening balance", where: "GTBank, Zenith, Access, First Bank" },
      { step: 5, action: "Register for VAT at FIRS", timeline: "2–3 days", cost: "Free", where: "firs.gov.ng" },
    ],
    taxRates: [
      { label: "Companies income tax (CIT)", rate: "30% (20% for SMEs < ₦25M revenue)" },
      { label: "VAT", rate: "7.5%" },
      { label: "Education tax", rate: "2.5% of assessable profit" },
      { label: "Personal income tax", rate: "7–24% progressive" },
      { label: "Withholding tax", rate: "10%" },
    ],
    keyBanks: [
      { name: "Bank of Industry (BOI)", notes: "DFI — best rates (5–10%) for manufacturing, creative economy, agri", sme_friendly: true },
      { name: "GTBank SME Banking", notes: "Strong SME products, Quick Credit up to ₦10M without collateral", sme_friendly: true },
      { name: "Zenith Bank SME", notes: "Business accounts with good digital banking for growth-stage companies", sme_friendly: true },
      { name: "Access Bank SME", notes: "DiasporaInvest program for returnees, good for import/export", sme_friendly: true },
    ],
    mobileMoney: ["OPay (dominant for SMEs)", "Palmpay", "Kuda", "PiggyVest (savings)", "Flutterwave (payments)"],
    bestSectors: [
      { name: "Entertainment & Nollywood", reason: "World's 2nd largest film industry — content distribution, post-production, streaming" },
      { name: "Fintech & payments", reason: "Largest unbanked population in Africa = largest opportunity for fintech" },
      { name: "Agriculture & agri-tech", reason: "90M smallholder farmers, government ANCHOR Borrowers Program, massive input gaps" },
      { name: "Construction & real estate", reason: "100M+ urban housing deficit, government social housing push, FG infrastructure contracts" },
    ],
    easeOfBusiness: { score: 61, rank: "Average — improving", note: "Registration is now fast (CAC is fully digital). Regulatory complexity varies by sector. Lagos > Abuja for startup ecosystem." },
  },

  RW: {
    registrationSteps: [
      { step: 1, action: "Register company at Rwanda Development Board (RDB)", timeline: "6 hours", cost: "Free", where: "rdb.rw/business-in-rwanda — one of Africa's fastest registrations" },
      { step: 2, action: "Get Tax ID and register for VAT at RRA", timeline: "Same day as registration", cost: "Free (automated with RDB registration)", where: "rra.gov.rw" },
      { step: 3, action: "Open business bank account", timeline: "1–3 days", cost: "RWF 50,000–100,000 initial deposit", where: "Bank of Kigali, Equity Bank, I&M Bank, KCB" },
    ],
    taxRates: [
      { label: "Corporate income tax", rate: "30% (0% for startups in priority sectors first 5 years)" },
      { label: "VAT", rate: "18%" },
      { label: "Personal income tax", rate: "0–30% progressive" },
      { label: "Withholding tax (dividends)", rate: "15%" },
    ],
    keyBanks: [
      { name: "Bank of Kigali (BK)", notes: "Dominant bank, BK SME offering with collateral-free products up to RWF 5M", sme_friendly: true },
      { name: "BDF (Business Development Fund)", notes: "Credit guarantee scheme — not a bank but unlocks SME loans at partner banks", sme_friendly: true },
      { name: "Equity Bank Rwanda", notes: "Pan-African bank with good micro/SME products", sme_friendly: true },
    ],
    mobileMoney: ["MTN Mobile Money (dominant)", "Airtel Money"],
    bestSectors: [
      { name: "Tourism & hospitality", reason: "Gorilla trekking, meetings industry (MICE) growing fast — government MICE strategy" },
      { name: "Coffee (specialty)", reason: "Rwandan specialty coffee commands $10+/kg — premium export opportunity globally" },
      { name: "Tech & services", reason: "Kigali Innovation City, RDB incentives, government digitization contracts" },
      { name: "Clean energy", reason: "Government target: 100% energy access by 2030 — massive off-grid opportunity" },
    ],
    easeOfBusiness: { score: 94, rank: "Africa's #1 ease of doing business", note: "Rwanda is consistently rated the easiest country in Africa to start a business. Zero tolerance for corruption." },
  },

  KE: {
    registrationSteps: [
      { step: 1, action: "Register business on eCitizen portal", timeline: "1–3 days", cost: "KES 950–10,850 ($7–$80) depending on structure", where: "ecitizen.go.ke — fully online" },
      { step: 2, action: "Apply for KRA PIN (Tax PIN)", timeline: "1 day", cost: "Free", where: "itax.kra.go.ke" },
      { step: 3, action: "Register for VAT at KRA (if turnover > KES 5M)", timeline: "1–3 days", cost: "Free", where: "itax.kra.go.ke" },
      { step: 4, action: "Open business bank account", timeline: "1 week", cost: "KES 2,000–10,000 initial deposit", where: "Equity Bank, KCB, Co-op Bank" },
      { step: 5, action: "Register with NHIF and NSSF for employees", timeline: "1 week", cost: "Free to register", where: "nhif.or.ke, nssf.or.ke" },
    ],
    taxRates: [
      { label: "Corporate income tax", rate: "30% (15% for new manufacturers for 10 years)" },
      { label: "VAT", rate: "16%" },
      { label: "Personal income tax", rate: "10–30% progressive" },
      { label: "Withholding tax (dividends)", rate: "5% for residents, 10% for non-residents" },
    ],
    keyBanks: [
      { name: "Equity Bank Kenya", notes: "Best for SMEs and first-time business owners — widespread branches, Eazzy Loan", sme_friendly: true },
      { name: "KCB Group", notes: "Largest bank, Hustler Fund distributor, strong SME loans", sme_friendly: true },
      { name: "Co-operative Bank", notes: "Strong in SACCO and cooperative sectors — good for farming and manufacturing cooperatives", sme_friendly: true },
      { name: "KCBK M-Pesa", notes: "KCB-M-Pesa instant business loans directly via mobile money", sme_friendly: true },
    ],
    mobileMoney: ["M-Pesa (dominant, 50M+ users)", "Airtel Money Kenya", "M-Kopa (asset finance)"],
    bestSectors: [
      { name: "Agri-tech & horticulture", reason: "Fresh produce export to EU/Middle East, government agri-processing push, year-round growing" },
      { name: "Fintech & mobile banking", reason: "Most advanced mobile money ecosystem in the world — M-Pesa infrastructure" },
      { name: "Tourism & safari", reason: "Kenya is top 5 global safari destination — hospitality, logistics, experiences gap" },
      { name: "Logistics & cold chain", reason: "Hub for East Africa — Mombasa port, JKIA cargo, SGR rail line" },
    ],
    easeOfBusiness: { score: 82, rank: "Top 20% in Africa", note: "Nairobi is East Africa's most established startup hub. M-Pesa makes payments trivial. Regulatory environment improving." },
  },
};
