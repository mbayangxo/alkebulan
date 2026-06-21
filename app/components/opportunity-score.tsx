"use client";

import type { ScoreBreakdown } from "@/app/api/match/route";

type ScoreLabel = "Strong Match" | "Good Match" | "Partial Match" | "Low Match";

const SCORE_COLORS: Record<ScoreLabel, { ring: string; text: string; bg: string }> = {
  "Strong Match":  { ring: "#2F855A", text: "#2F855A", bg: "#F0FFF4" },
  "Good Match":    { ring: "#C9A035", text: "#92700F", bg: "#FFFBEB" },
  "Partial Match": { ring: "#D4874A", text: "#9C4221", bg: "#FFF7ED" },
  "Low Match":     { ring: "#FC8181", text: "#C53030", bg: "#FFF5F5" },
};

interface OpportunityScoreProps {
  score: number;
  label: ScoreLabel;
  breakdown: ScoreBreakdown[];
  gaps: string[];
  compact?: boolean;
}

export function OpportunityScore({ score, label, breakdown, gaps, compact = false }: OpportunityScoreProps) {
  const colors = SCORE_COLORS[label];
  const circumference = 2 * Math.PI * 28;
  const offset = circumference - (score / 100) * circumference;

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <svg width="44" height="44" viewBox="0 0 44 44" className="flex-shrink-0 -rotate-90">
          <circle cx="22" cy="22" r="18" fill="none" stroke="#E5E7EB" strokeWidth="4" />
          <circle
            cx="22" cy="22" r="18" fill="none"
            stroke={colors.ring} strokeWidth="4"
            strokeDasharray={`${2 * Math.PI * 18}`}
            strokeDashoffset={`${2 * Math.PI * 18 - (score / 100) * 2 * Math.PI * 18}`}
            strokeLinecap="round"
          />
        </svg>
        <div>
          <p className="text-lg font-bold leading-none" style={{ color: colors.text }}>{score}%</p>
          <p className="text-[10px] font-semibold" style={{ color: colors.text }}>{label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl p-4" style={{ backgroundColor: colors.bg }}>
      {/* Score ring + headline */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
            <circle cx="36" cy="36" r="28" fill="none" stroke="#E5E7EB" strokeWidth="7" />
            <circle
              cx="36" cy="36" r="28" fill="none"
              stroke={colors.ring} strokeWidth="7"
              strokeDasharray={`${circumference}`}
              strokeDashoffset={`${offset}`}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold leading-none" style={{ color: colors.text }}>{score}%</span>
          </div>
        </div>
        <div>
          <p className="font-bold text-base" style={{ color: colors.text }}>{label}</p>
          <p className="text-xs text-muted mt-0.5">Opportunity Score</p>
        </div>
      </div>

      {/* Factor breakdown */}
      <div className="space-y-2 mb-3">
        {breakdown.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-base flex-shrink-0">
              {item.status === "qualified" ? "✓" : item.status === "excluded" ? "✗" : item.status === "missing" ? "○" : "—"}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-ink truncate">{item.factor}</p>
              <p className="text-[11px] text-muted leading-tight">{item.detail}</p>
            </div>
            <span
              className="text-xs font-bold flex-shrink-0 ml-1"
              style={{ color: item.status === "qualified" ? colors.ring : "#9CA3AF" }}
            >
              {item.earned}/{item.max}
            </span>
          </div>
        ))}
      </div>

      {/* Gaps */}
      {gaps.length > 0 && (
        <div className="border-t border-black/5 pt-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">What would raise your score</p>
          {gaps.map((gap, i) => (
            <p key={i} className="text-xs text-muted flex items-start gap-1.5">
              <span className="text-gold mt-0.5">→</span>
              {gap}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
