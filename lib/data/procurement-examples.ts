export interface ProcurementExample {
  flag: string;
  country: string;
  contract: string;
  value: string;
}

export const PROCUREMENT_EXAMPLES: ProcurementExample[] = [
  { flag: "🇸🇳", country: "Senegal", contract: "Government uniform supply", value: "250M CFA" },
  { flag: "🇬🇭", country: "Ghana", contract: "Hospital catering services", value: "GH₵ 480K" },
  { flag: "🇰🇪", country: "Kenya", contract: "County ICT infrastructure", value: "Sh 8M" },
  { flag: "🇷🇼", country: "Rwanda", contract: "Ministry training services", value: "RWF 12M" },
];
