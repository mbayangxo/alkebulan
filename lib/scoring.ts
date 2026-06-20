import { Opportunity } from "@/lib/types";

export interface UserSignals {
  country?: string;
  sector?: string;
  stage?: string;
  diasporaStatus?: string;
  fundingTypes?: string[];
  gender?: string;
  age?: number;
}

export interface ScoreBreakdown {
  score: number;
  label: "Strong match" | "Good match" | "Moderate match" | "Low match";
  reasons: string[];
  concerns: string[];
}

const PAN_AFRICA = ["Pan-Africa", "All Africa", "Pan Africa"];

export function scoreOpportunity(opp: Opportunity, user: UserSignals): ScoreBreakdown {
  let score = 0;
  const reasons: string[] = [];
  const concerns: string[] = [];

  // Country (30 pts)
  if (PAN_AFRICA.includes(opp.country)) {
    score += 28;
    reasons.push("Open to all African countries");
  } else if (user.country && opp.country.toLowerCase() === user.country.toLowerCase()) {
    score += 30;
    reasons.push(`Available in ${opp.country}`);
  } else if (!user.country) {
    score += 15;
  } else {
    score += 4;
    concerns.push(`Requires presence in ${opp.country}`);
  }

  // Business stage (25 pts)
  if (!opp.business_stage_required || opp.business_stage_required.length === 0) {
    score += 20;
    reasons.push("Open to all stages");
  } else if (user.stage && opp.business_stage_required.includes(user.stage as never)) {
    score += 25;
    reasons.push("Matches your current stage");
  } else if (!user.stage) {
    score += 12;
  } else {
    score += 3;
    concerns.push(`Designed for ${opp.business_stage_required.join(" or ")} stage`);
  }

  // Sector (20 pts)
  if (!user.sector) {
    score += 10;
  } else {
    const match = opp.sectors.some(
      (s) =>
        s.toLowerCase().includes(user.sector!.toLowerCase()) ||
        user.sector!.toLowerCase().includes(s.toLowerCase())
    );
    if (match) {
      score += 20;
      reasons.push(`${user.sector} sector matches`);
    } else {
      score += 4;
    }
  }

  // Diaspora (15 pts)
  const isDiaspora =
    !!user.diasporaStatus &&
    user.diasporaStatus !== "Born in Africa" &&
    user.diasporaStatus !== "None of the above";

  if (isDiaspora && opp.diaspora_allowed) {
    score += 15;
    reasons.push("Diaspora-eligible — you qualify");
  } else if (!isDiaspora) {
    score += 12;
  } else {
    score += 2;
    concerns.push("May require in-country residency");
  }

  // Funding type preference (10 pts)
  if (!user.fundingTypes || user.fundingTypes.length === 0) {
    score += 5;
  } else if (user.fundingTypes.includes(opp.type)) {
    score += 10;
    reasons.push(`${opp.type} matches your preference`);
  } else {
    score += 3;
  }

  score = Math.min(100, Math.max(0, Math.round(score)));

  let label: ScoreBreakdown["label"] = "Low match";
  if (score >= 85) label = "Strong match";
  else if (score >= 70) label = "Good match";
  else if (score >= 50) label = "Moderate match";

  return { score, label, reasons, concerns };
}

export function getScoreColor(score: number) {
  if (score >= 85) return { text: "text-gold-dark", bar: "bg-gold", border: "border-gold/30", bg: "bg-gold/10" };
  if (score >= 70) return { text: "text-deep-green", bar: "bg-deep-green", border: "border-deep-green/20", bg: "bg-deep-green/8" };
  if (score >= 50) return { text: "text-warm-brown", bar: "bg-warm-brown", border: "border-warm-brown/20", bg: "bg-warm-brown/8" };
  return { text: "text-muted", bar: "bg-gray-300", border: "border-gray-200", bg: "bg-gray-50" };
}

export function loadUserSignals(): UserSignals {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem("alkebulan_profile");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveUserSignals(signals: UserSignals) {
  if (typeof window === "undefined") return;
  localStorage.setItem("alkebulan_profile", JSON.stringify(signals));
}
