import Link from "next/link";
import { Opportunity, OpportunityWithMatch, VerifiedStatus } from "@/lib/types";

function VerifiedBadge({ status }: { status: VerifiedStatus }) {
  if (status === "verified") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-800">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Verified
      </span>
    );
  }
  if (status === "needs_review") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800">
        ⚠ Needs review
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
      Deadline unknown
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
    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors[type] || "bg-gray-100 text-gray-600"}`}>
      {type}
    </span>
  );
}

interface OpportunityCardProps {
  opportunity: OpportunityWithMatch;
  showMatch?: boolean;
}

export function OpportunityCard({ opportunity, showMatch = false }: OpportunityCardProps) {
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
      }).format(opportunity.amount)
    : null;

  return (
    <div className="bg-white border border-border rounded-2xl p-5 card-hover group">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-2">
          <TypePill type={opportunity.type} />
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-warm-ivory text-warm-brown">
            {opportunity.country}
          </span>
        </div>
        <VerifiedBadge status={opportunity.verified_status} />
      </div>

      {/* Title */}
      <h3 className="font-display text-base font-semibold text-ink mb-2 leading-snug group-hover:text-deep-green transition-colors">
        {opportunity.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
        {opportunity.summary}
      </p>

      {/* Match info */}
      {showMatch && opportunity.why_qualifies && (
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
              <p className="text-xs text-muted">Amount</p>
              <p className="text-sm font-semibold text-gold-dark">{formattedAmount}</p>
            </div>
          )}
          {opportunity.deadline && (
            <div>
              <p className="text-xs text-muted">Deadline</p>
              <p className={`text-sm font-medium ${isUrgent ? "text-red-earth" : isExpired ? "text-muted line-through" : "text-ink"}`}>
                {isExpired ? "Expired" : isUrgent ? `${daysLeft}d left` : new Date(opportunity.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </p>
            </div>
          )}
        </div>

        <Link
          href={`/opportunity/${opportunity.id}`}
          className="text-xs font-semibold text-deep-green hover:text-gold transition-colors"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}
