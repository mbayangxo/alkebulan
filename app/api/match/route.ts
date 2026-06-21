import { NextRequest } from "next/server";
import { ALL_COUNTRY_PROGRAMS, type ProgramEntry } from "@/lib/data/all-country-programs";
import { PROGRAM_INTEL, type EligibilityTag } from "@/lib/data/program-intel";
import type { UserProfile } from "@/app/components/user-profile";

interface MatchedProgram {
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
  matchReasons: string[];
  hasIntel: boolean;
}

function matchScore(
  program: ProgramEntry,
  tag: EligibilityTag,
  profile: UserProfile,
  country: string
): { score: number; reasons: string[] } {
  const age = parseInt(profile.age, 10);
  const reasons: string[] = [];
  let score = 0;

  // Citizenship / country match (highest weight — 40 pts)
  const originCountry = profile.country_of_origin;
  const citizenshipRequired = tag.citizenship;
  if (!citizenshipRequired || citizenshipRequired === "any_african") {
    score += 40;
    if (citizenshipRequired === "any_african") reasons.push("Open to all Africans");
    else reasons.push("No citizenship restriction");
  } else if (
    country.toLowerCase().includes(citizenshipRequired.toLowerCase()) ||
    citizenshipRequired.toLowerCase().includes(originCountry.toLowerCase()) ||
    originCountry.toLowerCase().includes(citizenshipRequired.toLowerCase())
  ) {
    score += 40;
    reasons.push(`${citizenshipRequired} nationality ✓`);
  } else {
    return { score: 0, reasons: [] }; // citizenship mismatch is a hard exclude
  }

  // Age match (25 pts)
  if (!isNaN(age)) {
    const minOk = tag.age_min === undefined || age >= tag.age_min;
    const maxOk = tag.age_max === undefined || age <= tag.age_max;
    if (minOk && maxOk) {
      score += 25;
      reasons.push(`Your age (${age}) qualifies ✓`);
    } else {
      score -= 20; // age mismatch — still show but deprioritize
    }
  }

  // Gender (20 pts)
  if (!tag.gender || tag.gender === "all") {
    score += 20;
  } else if (tag.gender === "women" && profile.gender === "woman") {
    score += 20;
    reasons.push("Women's program ✓");
  } else if (tag.gender === "women" && profile.gender !== "woman") {
    return { score: 0, reasons: [] }; // hard exclude
  }

  // Diaspora (10 pts)
  if (tag.diaspora_ok === false && profile.is_diaspora) {
    score -= 15; // penalize but don't exclude — residency status can change
  } else if (tag.diaspora_ok === true && profile.is_diaspora) {
    score += 10;
    reasons.push("Diaspora-eligible ✓");
  }

  // Business stage (5 pts)
  if (tag.stages && profile.business_stage) {
    if (tag.stages.includes(profile.business_stage as "idea" | "early" | "growing" | "established")) {
      score += 5;
      reasons.push(`Your stage (${profile.business_stage}) qualifies ✓`);
    }
  }

  return { score, reasons };
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

      // If we have explicit intel — use it
      if (intel) {
        const { score, reasons } = matchScore(program, intel.eligibility, profile, countryProfile.country);
        if (score > 0) {
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
            score: isTargetCountry ? score + 10 : score,
            matchReasons: reasons,
            hasIntel: !!intel.success,
          });
        }
        continue;
      }

      // No intel — include only if it's in the user's target country
      if (isTargetCountry) {
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
          score: 30, // base score for in-country programs without detailed eligibility
          matchReasons: ["In your country — review eligibility criteria"],
          hasIntel: false,
        });
      }
    }
  }

  matches.sort((a, b) => b.score - a.score);

  return Response.json({ matches: matches.slice(0, 50) });
}
