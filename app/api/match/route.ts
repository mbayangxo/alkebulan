import { NextRequest } from "next/server";
import { ALL_COUNTRY_PROGRAMS, type ProgramEntry } from "@/lib/data/all-country-programs";
import { PROGRAM_INTEL, type EligibilityTag } from "@/lib/data/program-intel";
import type { UserProfile } from "@/app/components/user-profile";

export interface ScoreBreakdown {
  factor: string;
  earned: number;
  max: number;
  status: "qualified" | "missing" | "na" | "excluded";
  detail: string;
}

export interface MatchedProgram {
  programName: string;
  category: string;
  country: string;
  flag: string;
  what: string;
  for_who: string;
  amount?: string;
  apply_at?: string;
  indigenous_note?: string;
  score: number;
  opportunityScore: number; // 0–100 normalized
  scoreLabel: "Strong Match" | "Good Match" | "Partial Match" | "Low Match";
  matchReasons: string[];
  breakdown: ScoreBreakdown[];
  gaps: string[];
  hasIntel: boolean;
}

function scoreLabel(pct: number): MatchedProgram["scoreLabel"] {
  if (pct >= 80) return "Strong Match";
  if (pct >= 60) return "Good Match";
  if (pct >= 40) return "Partial Match";
  return "Low Match";
}

function matchScore(
  program: ProgramEntry,
  tag: EligibilityTag,
  profile: UserProfile,
  country: string
): { score: number; reasons: string[]; breakdown: ScoreBreakdown[]; gaps: string[] } | null {
  const age = parseInt(profile.age, 10);
  const reasons: string[] = [];
  const breakdown: ScoreBreakdown[] = [];
  const gaps: string[] = [];
  let score = 0;

  // ── Citizenship / country (40 pts, hard exclude on mismatch) ──
  const originCountry = profile.country_of_origin;
  const req = tag.citizenship;
  if (!req || req === "any_african") {
    score += 40;
    breakdown.push({ factor: "Citizenship", earned: 40, max: 40, status: "qualified",
      detail: req === "any_african" ? "Open to all Africans" : "No citizenship restriction" });
    if (req === "any_african") reasons.push("Open to all Africans");
  } else if (
    country.toLowerCase().includes(req.toLowerCase()) ||
    req.toLowerCase().includes(originCountry.toLowerCase()) ||
    originCountry.toLowerCase().includes(req.toLowerCase())
  ) {
    score += 40;
    breakdown.push({ factor: "Citizenship", earned: 40, max: 40, status: "qualified",
      detail: `${req} nationality ✓` });
    reasons.push(`${req} nationality ✓`);
  } else {
    return null; // hard exclude
  }

  // ── Age (25 pts) ──
  if (!isNaN(age) && (tag.age_min !== undefined || tag.age_max !== undefined)) {
    const minOk = tag.age_min === undefined || age >= tag.age_min;
    const maxOk = tag.age_max === undefined || age <= tag.age_max;
    const rangeStr = tag.age_min && tag.age_max
      ? `${tag.age_min}–${tag.age_max}`
      : tag.age_min ? `${tag.age_min}+` : `up to ${tag.age_max}`;
    if (minOk && maxOk) {
      score += 25;
      breakdown.push({ factor: "Age", earned: 25, max: 25, status: "qualified",
        detail: `Your age (${age}) is within ${rangeStr} ✓` });
      reasons.push(`Age ${age} qualifies ✓`);
    } else {
      score -= 20;
      breakdown.push({ factor: "Age", earned: 0, max: 25, status: "missing",
        detail: `Program requires ages ${rangeStr}; your age is ${age}` });
      gaps.push(`Age requirement: ${rangeStr} years old`);
    }
  } else if (!isNaN(age)) {
    score += 25;
    breakdown.push({ factor: "Age", earned: 25, max: 25, status: "qualified",
      detail: `No age restriction` });
    reasons.push(`Age ${age} qualifies ✓`);
  } else {
    breakdown.push({ factor: "Age", earned: 0, max: 25, status: "na",
      detail: "Add your age to your profile to check this" });
    gaps.push("Add your age to unlock full eligibility check");
  }

  // ── Gender (20 pts, hard exclude: women-only + non-woman) ──
  if (!tag.gender || tag.gender === "all") {
    score += 20;
    breakdown.push({ factor: "Gender", earned: 20, max: 20, status: "qualified",
      detail: "Open to all genders" });
  } else if (tag.gender === "women" && profile.gender === "woman") {
    score += 20;
    breakdown.push({ factor: "Gender", earned: 20, max: 20, status: "qualified",
      detail: "Women-only program — you qualify ✓" });
    reasons.push("Women's program ✓");
  } else if (tag.gender === "women" && profile.gender !== "woman") {
    return null; // hard exclude
  }

  // ── Diaspora (10 pts) ──
  if (tag.diaspora_ok === false && profile.is_diaspora) {
    score -= 15;
    breakdown.push({ factor: "Residency", earned: 0, max: 10, status: "missing",
      detail: "This program requires in-country residency" });
    gaps.push("Must be residing in-country (not diaspora-eligible)");
  } else if (tag.diaspora_ok === true && profile.is_diaspora) {
    score += 10;
    breakdown.push({ factor: "Residency", earned: 10, max: 10, status: "qualified",
      detail: "Diaspora-eligible ✓" });
    reasons.push("Diaspora-eligible ✓");
  } else if (tag.diaspora_ok !== undefined) {
    score += 5;
    breakdown.push({ factor: "Residency", earned: 5, max: 10, status: "qualified",
      detail: "Residency status acceptable" });
  }

  // ── Business stage (5 pts) ──
  if (tag.stages && tag.stages.length > 0) {
    if (profile.business_stage && tag.stages.includes(profile.business_stage as "idea" | "early" | "growing" | "established")) {
      score += 5;
      breakdown.push({ factor: "Business Stage", earned: 5, max: 5, status: "qualified",
        detail: `Your stage (${profile.business_stage}) is eligible ✓` });
      reasons.push(`${profile.business_stage} stage qualifies ✓`);
    } else if (profile.business_stage) {
      breakdown.push({ factor: "Business Stage", earned: 0, max: 5, status: "missing",
        detail: `Program targets: ${tag.stages.join(", ")} stage businesses` });
      gaps.push(`Program targets ${tag.stages.join("/")} stage businesses`);
    } else {
      breakdown.push({ factor: "Business Stage", earned: 0, max: 5, status: "na",
        detail: "Add your business stage to check this" });
      gaps.push("Add your business stage to complete the check");
    }
  } else {
    score += 5;
    breakdown.push({ factor: "Business Stage", earned: 5, max: 5, status: "qualified",
      detail: "No stage restriction" });
  }

  return { score, reasons, breakdown, gaps };
}

export async function POST(req: NextRequest) {
  const { profile } = await req.json() as { profile: UserProfile };

  if (!profile.country_of_origin && !profile.country_of_residence) {
    return Response.json({ matches: [], message: "Set up your profile to see matches." });
  }

  const targetCountries = new Set([
    profile.country_of_origin,
    profile.country_of_residence,
  ].filter(Boolean));

  const matches: MatchedProgram[] = [];

  for (const countryProfile of ALL_COUNTRY_PROGRAMS) {
    const isTargetCountry = targetCountries.has(countryProfile.country);

    const allPrograms: Array<{ program: ProgramEntry; category: string }> = [
      ...countryProfile.youth_women_funds.map(p => ({ program: p, category: "Youth & Women" })),
      ...countryProfile.development_bank_programs.map(p => ({ program: p, category: "Development Finance" })),
      ...countryProfile.donor_grants.map(p => ({ program: p, category: "Grants" })),
      ...countryProfile.startup_innovation.map(p => ({ program: p, category: "Startup & Innovation" })),
    ];

    for (const { program, category } of allPrograms) {
      const intel = PROGRAM_INTEL[program.name];
      const tag: EligibilityTag = intel?.eligibility ?? program.eligibility ?? {};

      const result = matchScore(program, tag, profile, countryProfile.country);
      if (!result) continue; // hard excluded

      const rawScore = result.score + (isTargetCountry ? 10 : 0);
      const opportunityScore = Math.min(100, Math.max(0, Math.round((rawScore / 100) * 100)));

      matches.push({
        programName: program.name,
        category,
        country: countryProfile.country,
        flag: countryProfile.flag,
        what: program.what,
        for_who: program.for_who,
        amount: program.amount,
        apply_at: program.apply_at,
        indigenous_note: program.indigenous_note,
        score: rawScore,
        opportunityScore,
        scoreLabel: scoreLabel(opportunityScore),
        matchReasons: result.reasons,
        breakdown: result.breakdown,
        gaps: result.gaps,
        hasIntel: !!intel?.success,
      });
    }
  }

  matches.sort((a, b) => b.score - a.score);

  return Response.json({ matches: matches.slice(0, 50) });
}
