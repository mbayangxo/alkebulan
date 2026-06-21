import type { VerifiedStatus, Volatility } from "@/lib/types";

// How many days before a "verified" listing is considered stale.
// High-volatility programs (annual grant cycles, political appointments) go stale faster.
const FRESHNESS_DAYS: Record<Volatility, number> = {
  high: 14,
  medium: 30,
  low: 90,
};

export type FreshnessState =
  | { kind: "fresh"; daysAgo: number; label: string }
  | { kind: "stale"; daysAgo: number; label: string }
  | { kind: "flagged"; label: string; reason: string }
  | { kind: "removed"; label: string }
  | { kind: "unknown"; label: string };

export interface VerificationInput {
  verified_status: VerifiedStatus;
  verified_at?: string;
  flag_reason?: string;
  volatility?: Volatility;
}

export function computeFreshness(opp: VerificationInput): FreshnessState {
  if (opp.verified_status === "removed") {
    return { kind: "removed", label: "Program closed" };
  }

  if (opp.verified_status === "outdated") {
    return {
      kind: "flagged",
      label: "Flagged — needs reverification",
      reason: opp.flag_reason ?? "Program status changed. Confirm before applying.",
    };
  }

  if (!opp.verified_at) {
    return { kind: "unknown", label: "Verification date unknown" };
  }

  const window = FRESHNESS_DAYS[opp.volatility ?? "medium"];
  const daysAgo = Math.floor(
    (Date.now() - new Date(opp.verified_at).getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysAgo <= window) {
    return {
      kind: "fresh",
      daysAgo,
      label: daysAgo === 0 ? "Verified today" : `Verified ${daysAgo}d ago`,
    };
  }

  return {
    kind: "stale",
    daysAgo,
    label: `Last checked ${daysAgo}d ago`,
  };
}

// Badge color/text variants consumed by UI components
export function freshnessUI(state: FreshnessState): {
  bg: string;
  text: string;
  dot: string;
  shortLabel: string;
  longLabel: string;
  showWarning: boolean;
} {
  switch (state.kind) {
    case "fresh":
      return {
        bg: "bg-green-50",
        text: "text-green-800",
        dot: "bg-green-500",
        shortLabel: state.label,
        longLabel: state.label,
        showWarning: false,
      };
    case "stale":
      return {
        bg: "bg-amber-50",
        text: "text-amber-800",
        dot: "bg-amber-400",
        shortLabel: `${state.daysAgo}d ago`,
        longLabel: `${state.label} — may be outdated`,
        showWarning: true,
      };
    case "flagged":
      return {
        bg: "bg-amber-50",
        text: "text-amber-900",
        dot: "bg-amber-500",
        shortLabel: "Flagged",
        longLabel: state.reason,
        showWarning: true,
      };
    case "removed":
      return {
        bg: "bg-red-50",
        text: "text-red-800",
        dot: "bg-red-400",
        shortLabel: "Closed",
        longLabel: "This program has been confirmed closed or expired.",
        showWarning: true,
      };
    case "unknown":
      return {
        bg: "bg-gray-50",
        text: "text-gray-600",
        dot: "bg-gray-300",
        shortLabel: "Unverified",
        longLabel: "Verification date unknown — confirm before applying.",
        showWarning: true,
      };
  }
}
