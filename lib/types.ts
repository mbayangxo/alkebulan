export type FundingType =
  | "Grant"
  | "Loan"
  | "Government contract"
  | "Tender"
  | "Accelerator"
  | "Fellowship"
  | "Procurement"
  | "Training"
  | "Investment";

export type Sector =
  | "Agriculture"
  | "Beauty"
  | "Fashion"
  | "Tech"
  | "Media"
  | "Music"
  | "Tourism"
  | "Manufacturing"
  | "Food"
  | "Education"
  | "Health"
  | "Housing"
  | "Logistics"
  | "Retail"
  | "Creative economy"
  | "Climate"
  | "Finance";

export type BusinessStage =
  | "Idea"
  | "Early stage"
  | "Growing"
  | "Established"
  | "Not a business";

export type DiasporaStatus =
  | "Born in Africa"
  | "African diaspora"
  | "First-generation African"
  | "African by parentage"
  | "Citizen of an African country"
  | "None of the above";

export type VerifiedStatus = "verified" | "outdated" | "removed" | "needs_review" | "deadline_unknown" | "expired";

export type Volatility = "high" | "medium" | "low";

export type OpportunityStatus = "saved" | "applying" | "submitted" | "won" | "rejected";

export interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  gender?: string;
  residence_country?: string;
  citizenship_countries: string[];
  parent_citizenship_countries: string[];
  diaspora_status?: DiasporaStatus;
  business_stage?: BusinessStage;
  sectors: Sector[];
  target_countries: string[];
  funding_types: FundingType[];
  created_at: string;
}

export interface Opportunity {
  id: string;
  title: string;
  country: string;
  region?: string;
  type: FundingType;
  sectors: Sector[];
  eligibility_age_min?: number;
  eligibility_age_max?: number;
  eligibility_gender?: string;
  eligibility_citizenship?: string[];
  eligibility_residence?: string[];
  diaspora_allowed: boolean;
  business_stage_required?: BusinessStage[];
  amount?: number;
  amount_max?: number;
  currency: string;
  deadline?: string;
  source_url: string;
  source_name: string;
  verified_status: VerifiedStatus;
  verified_at?: string;   // ISO date — when this was last confirmed active
  flag_reason?: string;   // e.g. "Senegal PM changed May 22, 2026, program status unconfirmed"
  volatility?: Volatility; // determines freshness window: high=14d, medium=30d, low=90d
  summary: string;
  description?: string;
  documents_required?: string[];
  application_steps?: string[];
  notes?: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
}

export interface OpportunityWithMatch extends Opportunity {
  confidence_score?: number;
  why_qualifies?: string;
  why_may_not_qualify?: string;
}

export interface SavedOpportunity {
  user_id: string;
  opportunity_id: string;
  status: OpportunityStatus;
  created_at: string;
}

export interface CountryProfile {
  country: string;
  country_code: string;
  languages: string[];
  industries: string[];
  cultural_notes?: string;
  historical_notes?: string;
  procurement_links?: { name: string; url: string }[];
  youth_programs?: string[];
  women_programs?: string[];
  sme_agencies?: string[];
  startup_notes?: string;
  diaspora_notes?: string;
  population?: number;
  gdp?: string;
  capital?: string;
  historical_empires?: string[];
  ethnic_groups?: string[];
  business_etiquette?: string[];
}
