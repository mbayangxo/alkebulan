import Link from "next/link";
import { Opportunity, OpportunityWithMatch } from "@/lib/types";
import { ScoreBreakdown, getScoreColor } from "@/lib/scoring";
import { computeFreshness, freshnessUI, type VerificationInput } from "@/lib/verification";

function VerifiedBadge({ opp }: { opp: VerificationInput }) {
  const state = computeFreshness(opp);
  const ui = freshnessUI(state);
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${ui.bg} ${ui.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${ui.dot}`} />
      {ui.shortLabel}
    </span>
  );
}

function TypePill({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Grant: "bg-deep-green/10 text-deep-green",
    Loan: "bg-royal-blue/10 text-royal-blue",
    Accelerator: "bg-red-earth/10 text-red-earth",
    Fellowship: "bg-warm-brown/10 text-warm-brown",
    Investment: "bg-gold/10 text-gold-dark",
    "Government contract": "bg-deep-green/10 text-deep-green",
    Tender: "bg-royal-blue/10 text-royal-blue",
    Procurement: "bg-royal-blue/10 text-royal-blue",
    Training: "bg-warm-brown/10 text-warm-brown",
  };
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${colors[type] || "bg-gray-100 text-gray-600"}`}>
      {type}
    </span>
  );
}

interface ScoreMeterProps {
  score: ScoreBreakdown;
}

function ScoreMeter({ score }: ScoreMeterProps) {
  const colors = getScoreColor(score.score);
  return (
    <div className={`rounded-xl border px-3 py-2.5 mb-4 ${colors.border} ${colors.bg}`}>
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-[10px] font-bold uppercase tracking-wider ${colors.text}`}>
          {score.label}
        </span>
        <span className={`text-sm font-bold ${colors.text}`}>{score.score}</span>
      </div>
      <div className="h-1 bg-black/8 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${colors.bar}`}
          style={{ width: `${score.score}%` }}
        />
      </div>
      {score.reasons.length > 0 && (
        <p className={`text-[10px] mt-1.5 leading-snug ${colors.text} opacity-80`}>
          {score.reasons[0]}
          {score.reasons.length > 1 && ` · ${score.reasons[1]}`}
        </p>
      )}
      {score.concerns.length > 0 && (
        <p className="text-[10px] mt-0.5 text-red-earth/80 leading-snug">
          ⚠ {score.concerns[0]}
        </p>
      )}
    </div>
  );
}

interface OpportunityCardProps {
  opportunity: OpportunityWithMatch;
  showMatch?: boolean;
  score?: ScoreBreakdown;
  onTrack?: (opp: Opportunity) => void;
}

export function OpportunityCard({ opportunity, showMatch = false, score, onTrack }: OpportunityCardProps) {
  const deadlineDate = opportunity.deadline ? new Date(opportunity.deadline) : null;
  const now = new Date();
  const daysLeft = deadlineDate ? Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : null;
  const isUrgent = daysLeft !== null && daysLeft <= 14 && daysLeft > 0;
  const isExpired = daysLeft !== null && daysLeft <= 0;

  const formattedAmount = opportunity.amount
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: opportunity.currency,
        maximumFractionDigits: 0,
        notation: opportunity.amount >= 1000000 ? "compact" : "standard",
      }).format(opportunity.amount)
    : null;

  return (
    <div className="bg-white border border-border rounded-2xl p-5 card-hover group flex flex-col">
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex flex-wrap gap-1.5">
          <TypePill type={opportunity.type} />
          <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-warm-ivory text-warm-brown">
            {opportunity.country}
          </span>
          {opportunity.diaspora_allowed && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gold/10 text-gold-dark">
              Diaspora ✓
            </span>
          )}
        </div>
        <VerifiedBadge opp={opportunity} />
      </div>

      {/* Title */}
      <h3 className="font-display text-base font-semibold text-ink mb-2 leading-snug group-hover:text-deep-green transition-colors">
        {opportunity.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2 flex-1">
        {opportunity.summary}
      </p>

      {/* Score meter (when user profile exists) */}
      {score && <ScoreMeter score={score} />}

      {/* Legacy match info */}
      {showMatch && !score && opportunity.why_qualifies && (
        <div className="bg-deep-green/5 border border-deep-green/10 rounded-xl p-3 mb-4">
          <p className="text-xs font-semibold text-deep-green mb-1">Why you qualify</p>
          <p className="text-xs text-deep-green/80 leading-relaxed">{opportunity.why_qualifies}</p>
          {opportunity.why_may_not_qualify && (
            <>
              <p className="text-xs font-semibold text-red-earth mt-2 mb-1">Potential concern</p>
              <p className="text-xs text-red-earth/80 leading-relaxed">{opportunity.why_may_not_qualify}</p>
            </>
          )}
        </div>
      )}

      {/* Bottom row */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex items-center gap-4">
          {formattedAmount && (
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wide">Amount</p>
              <p className="text-sm font-bold text-gold-dark">{formattedAmount}</p>
            </div>
          )}
          {opportunity.deadline && !isExpired && (
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wide">Deadline</p>
              <p className={`text-sm font-medium ${isUrgent ? "text-red-earth font-bold" : "text-ink"}`}>
                {isUrgent ? `${daysLeft}d left` : new Date(opportunity.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onTrack && (
            <button
              onClick={() => onTrack(opportunity)}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-border text-muted hover:border-deep-green hover:text-deep-green transition-colors"
            >
              + Track
            </button>
          )}
          <Link
            href={`/opportunity/${opportunity.id}`}
            className="text-xs font-semibold text-deep-green hover:text-gold transition-colors"
          >
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}
