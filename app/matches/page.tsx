"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import { useProfile } from "@/app/components/user-profile";
import { SuccessIntelCard } from "@/app/components/success-intel-card";
import { PROGRAM_INTEL } from "@/lib/data/program-intel";
import Link from "next/link";

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

const CATEGORY_COLORS: Record<string, string> = {
  "Youth & Women":       "bg-gold/10 text-gold-dark",
  "Development Finance": "bg-blue-50 text-blue-700",
  "Grants":              "bg-green-50 text-green-700",
  "Startup & Innovation":"bg-purple-50 text-purple-700",
};

export default function MatchesPage() {
  const { profile, setShowSetup } = useProfile();
  const [matches, setMatches] = useState<MatchedProgram[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const hasProfile = profile.country_of_origin || profile.country_of_residence;

  useEffect(() => {
    if (!hasProfile) return;
    setLoading(true);
    fetch("/api/match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile }),
    })
      .then(r => r.json())
      .then(data => { setMatches(data.matches || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [profile, hasProfile]);

  function toggleExpand(name: string) {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  const categories = ["All", ...new Set(matches.map(m => m.category))];
  const filtered = filter === "All" ? matches : matches.filter(m => m.category === filter);

  if (!hasProfile) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-6">⚡</div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            Your personal matches
          </h1>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Tell us who you are — your age, country, gender, and business stage — and we'll show you every program you actually qualify for right now.
          </p>
          <button
            onClick={() => setShowSetup(true)}
            className="bg-deep-green text-ivory font-bold px-8 py-4 rounded-2xl text-lg hover:bg-mid-green transition-colors"
          >
            Set up my profile →
          </button>
          <p className="text-xs text-muted mt-4">Takes 2 minutes. Stored on your device only.</p>
        </div>
      </div>
    );
  }

  const profileSummary = [
    profile.gender === "woman" ? "Woman" : profile.gender === "man" ? "Man" : null,
    profile.age ? `${profile.age} years old` : null,
    profile.country_of_origin || null,
    profile.is_diaspora ? "Diaspora" : null,
    profile.business_stage ? `${profile.business_stage} stage` : null,
  ].filter(Boolean).join(" · ");

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Header */}
      <div className="bg-deep-green text-ivory py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-3">
            ⚡ PERSONALIZED MATCHES
          </div>
          <h1 className="font-display text-4xl font-bold text-ivory mb-2">
            {loading ? "Finding your matches..." : `${filtered.length} programs for you`}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-ivory/70 text-sm">{profileSummary}</p>
            <button
              onClick={() => setShowSetup(true)}
              className="text-xs font-semibold text-gold hover:underline"
            >
              Edit profile →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* Category filters */}
        <div className="flex gap-2 flex-wrap mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                filter === cat
                  ? "bg-deep-green text-ivory border-deep-green"
                  : "bg-white border-border text-ink hover:border-deep-green"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({matches.filter(m => m.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 rounded-full border-2 border-deep-green border-t-transparent animate-spin mx-auto mb-4" />
            <p className="text-muted">Finding programs you qualify for...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-bold text-ink mb-2">No matches found</p>
            <p className="text-muted text-sm mb-4">
              Try updating your profile or browsing all programs by country.
            </p>
            <Link href="/programs" className="text-sm font-bold text-deep-green hover:underline">
              Browse all programs →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(match => {
              const intel = PROGRAM_INTEL[match.programName];
              const isExpanded = expanded.has(match.programName);

              return (
                <div
                  key={match.programName}
                  className="bg-white border border-border rounded-2xl overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-base">{match.flag}</span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                              CATEGORY_COLORS[match.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {match.category}
                          </span>
                          {match.hasIntel && (
                            <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-deep-green/10 text-deep-green">
                              + Success Intel
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-ink text-base leading-tight">
                          {match.programName}
                        </h3>
                        <p className="text-sm text-muted mt-1 leading-relaxed">{match.what}</p>
                      </div>
                      {match.amount && (
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs text-muted">Amount</p>
                          <p className="font-bold text-deep-green text-sm">{match.amount}</p>
                        </div>
                      )}
                    </div>

                    {/* Why you match */}
                    {match.matchReasons.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {match.matchReasons.map((r, i) => (
                          <span key={i} className="text-[11px] font-semibold bg-gold/10 text-gold-dark px-2.5 py-1 rounded-full">
                            {r}
                          </span>
                        ))}
                      </div>
                    )}

                    {match.indigenous_note && (
                      <p className="text-xs text-muted italic mb-3 border-l-2 border-gold/30 pl-2">
                        {match.indigenous_note}
                      </p>
                    )}

                    <div className="flex items-center gap-3 flex-wrap">
                      {match.apply_at && (
                        <a
                          href={match.apply_at.startsWith("http") ? match.apply_at : `https://${match.apply_at}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-deep-green hover:underline"
                        >
                          Apply at {match.apply_at} →
                        </a>
                      )}
                      {intel?.success && (
                        <button
                          onClick={() => toggleExpand(match.programName)}
                          className="text-sm font-semibold text-muted hover:text-ink transition-colors"
                        >
                          {isExpanded ? "Hide intel ▲" : "View success intel ▼"}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expandable success intel */}
                  {isExpanded && intel?.success && (
                    <div className="border-t border-border p-5">
                      <SuccessIntelCard intel={intel.success} programName={match.programName} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
