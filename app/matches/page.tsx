"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import { useProfile } from "@/app/components/user-profile";
import { useEducation } from "@/app/components/education-system";
import { SuccessIntelCard } from "@/app/components/success-intel-card";
import { OpportunityScore } from "@/app/components/opportunity-score";
import { PROGRAM_INTEL } from "@/lib/data/program-intel";
import type { MatchedProgram } from "@/app/api/match/route";
import Link from "next/link";

const CATEGORY_COLORS: Record<string, string> = {
  "Youth & Women":       "bg-gold/10 text-gold-dark",
  "Development Finance": "bg-blue-50 text-blue-700",
  "Grants":              "bg-green-50 text-green-700",
  "Startup & Innovation":"bg-purple-50 text-purple-700",
};

const LABEL_COLORS: Record<string, string> = {
  "Strong Match":  "text-green-700 bg-green-50",
  "Good Match":    "text-amber-700 bg-amber-50",
  "Partial Match": "text-orange-700 bg-orange-50",
  "Low Match":     "text-red-600 bg-red-50",
};

export default function MatchesPage() {
  const { profile, setShowSetup } = useProfile();
  const { showRandom } = useEducation();
  const [matches, setMatches] = useState<MatchedProgram[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const [scoreFilter, setScoreFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [scoreExpanded, setScoreExpanded] = useState<Set<string>>(new Set());
  const [kitExpanded, setKitExpanded] = useState<Set<string>>(new Set());
  const [kitContent, setKitContent] = useState<Record<string, string>>({});
  const [kitLoading, setKitLoading] = useState<Set<string>>(new Set());

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
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  function toggleScore(name: string) {
    setScoreExpanded(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  async function buildKit(match: MatchedProgram) {
    if (kitContent[match.programName]) {
      setKitExpanded(prev => {
        const next = new Set(prev);
        next.has(match.programName) ? next.delete(match.programName) : next.add(match.programName);
        return next;
      });
      return;
    }
    setKitExpanded(prev => new Set([...prev, match.programName]));
    setKitLoading(prev => new Set([...prev, match.programName]));
    try {
      const res = await fetch("/api/apply-kit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          programName: match.programName,
          programDescription: match.what,
          forWho: match.for_who,
          amount: match.amount,
          applyAt: match.apply_at,
          country: match.country,
          userProfile: profile,
        }),
      });
      if (!res.body) throw new Error("No stream");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setKitContent(prev => ({ ...prev, [match.programName]: text }));
      }
    } catch {
      setKitContent(prev => ({ ...prev, [match.programName]: "Could not build kit. Please try again." }));
    } finally {
      setKitLoading(prev => { const next = new Set(prev); next.delete(match.programName); return next; });
    }
  }

  const categories = ["All", ...new Set(matches.map(m => m.category))];
  const scoreLabels = ["All", "Strong Match", "Good Match", "Partial Match"];

  let filtered = filter === "All" ? matches : matches.filter(m => m.category === filter);
  if (scoreFilter !== "All") filtered = filtered.filter(m => m.scoreLabel === scoreFilter);

  const strongCount = matches.filter(m => m.opportunityScore >= 80).length;
  const avgScore = matches.length > 0
    ? Math.round(matches.slice(0, 10).reduce((s, m) => s + m.opportunityScore, 0) / Math.min(10, matches.length))
    : 0;

  if (!hasProfile) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-6">⚡</div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            Your Opportunity Score
          </h1>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Tell us who you are — age, country, gender, business stage — and we'll score every African program for you. Not just a list. A ranked qualification engine.
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
    profile.age ? `Age ${profile.age}` : null,
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
            ⚡ OPPORTUNITY SCORES
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-2">
            {loading ? "Scoring your matches..." : `${filtered.length} programs scored for you`}
          </h1>
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <p className="text-ivory/70 text-sm">{profileSummary}</p>
            <button onClick={() => setShowSetup(true)} className="text-xs font-semibold text-gold hover:underline">
              Edit profile →
            </button>
          </div>
          {!loading && matches.length > 0 && (
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/10 rounded-xl px-4 py-2.5">
                <p className="text-2xl font-bold text-gold">{strongCount}</p>
                <p className="text-xs text-ivory/60">Strong matches (80%+)</p>
              </div>
              <div className="bg-white/10 rounded-xl px-4 py-2.5">
                <p className="text-2xl font-bold text-gold">{avgScore}%</p>
                <p className="text-xs text-ivory/60">Avg score (top 10)</p>
              </div>
              <div className="bg-white/10 rounded-xl px-4 py-2.5">
                <p className="text-2xl font-bold text-gold">{matches.length}</p>
                <p className="text-xs text-ivory/60">Programs checked</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-3">
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
                <span className="ml-1.5 text-xs opacity-60">({matches.filter(m => m.category === cat).length})</span>
              )}
            </button>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap mb-6">
          {scoreLabels.map(sl => (
            <button
              key={sl}
              onClick={() => setScoreFilter(scoreFilter === sl ? "All" : sl)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                scoreFilter === sl
                  ? "bg-deep-green text-ivory border-deep-green"
                  : "bg-white border-border text-muted hover:border-deep-green"
              }`}
            >
              {sl}
            </button>
          ))}
        </div>

        {!loading && matches.length > 0 && (
          <div className="bg-deep-green/5 border border-deep-green/20 rounded-xl px-4 py-3.5 mb-4">
            <p className="text-xs font-bold text-deep-green mb-1">These are tools to build with — not the goal</p>
            <p className="text-xs text-ink/70 leading-relaxed">
              Grants, loans, and contracts are fuel. The goal is to own businesses, supply chains, and sectors that foreigners currently own in your country. Use this funding to build something that lasts.{" "}
              <Link href="/sovereignty" className="font-semibold text-deep-green underline">See what&apos;s yours to reclaim →</Link>
            </p>
          </div>
        )}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 rounded-full border-2 border-deep-green border-t-transparent animate-spin mx-auto mb-4" />
            <p className="text-muted">Scoring programs across 54 African countries...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-bold text-ink mb-2">No matches found</p>
            <p className="text-muted text-sm mb-4">Try updating your profile or browsing all programs.</p>
            <Link href="/programs" className="text-sm font-bold text-deep-green hover:underline">
              Browse all programs →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((match, idx) => {
              const intel = PROGRAM_INTEL[match.programName];
              const isExpanded = expanded.has(match.programName);
              const isScoreExpanded = scoreExpanded.has(match.programName);
              const isKitExpanded = kitExpanded.has(match.programName);
              const isKitLoading = kitLoading.has(match.programName);

              return (
                <div
                  key={match.programName}
                  className="bg-white border border-border rounded-2xl overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Score badge */}
                      <div className="flex-shrink-0 pt-1">
                        <OpportunityScore
                          score={match.opportunityScore}
                          label={match.scoreLabel}
                          breakdown={match.breakdown}
                          gaps={match.gaps}
                          compact
                        />
                        {idx < 3 && (
                          <p className="text-[9px] font-bold text-gold text-center mt-1">
                            #{idx + 1} match
                          </p>
                        )}
                      </div>

                      {/* Main content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div>
                            <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                              <span>{match.flag}</span>
                              <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                                CATEGORY_COLORS[match.category] ?? "bg-gray-100 text-gray-600"
                              }`}>
                                {match.category}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${LABEL_COLORS[match.scoreLabel]}`}>
                                {match.scoreLabel}
                              </span>
                              {match.hasIntel && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-deep-green/10 text-deep-green">
                                  + Intel
                                </span>
                              )}
                            </div>
                            <h3 className="font-bold text-ink text-base leading-tight">{match.programName}</h3>
                            <p className="text-sm text-muted mt-0.5 leading-relaxed">{match.what}</p>
                          </div>
                          {match.amount && (
                            <div className="text-right flex-shrink-0">
                              <p className="text-xs text-muted">Amount</p>
                              <p className="font-bold text-deep-green text-sm whitespace-nowrap">{match.amount}</p>
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
                              Apply →
                            </a>
                          )}
                          <button
                            onClick={() => toggleScore(match.programName)}
                            className="text-xs font-semibold text-muted hover:text-ink transition-colors"
                          >
                            {isScoreExpanded ? "Hide breakdown ▲" : "Score breakdown ▼"}
                          </button>
                          {intel?.success && (
                            <button
                              onClick={() => toggleExpand(match.programName)}
                              className="text-xs font-semibold text-muted hover:text-ink transition-colors"
                            >
                              {isExpanded ? "Hide intel ▲" : "Success intel ▼"}
                            </button>
                          )}
                          <button
                            onClick={() => {
                              if (!kitContent[match.programName]) {
                                showRandom(() => buildKit(match));
                              } else {
                                buildKit(match);
                              }
                            }}
                            disabled={isKitLoading}
                            className="text-xs font-bold text-gold hover:text-gold-dark transition-colors disabled:opacity-50"
                          >
                            {isKitLoading ? "Building kit..." : isKitExpanded ? "Hide kit ▲" : "📋 Build my application ▼"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Score breakdown panel */}
                  {isScoreExpanded && (
                    <div className="border-t border-border p-5">
                      <OpportunityScore
                        score={match.opportunityScore}
                        label={match.scoreLabel}
                        breakdown={match.breakdown}
                        gaps={match.gaps}
                      />
                    </div>
                  )}

                  {/* Application kit panel */}
                  {isKitExpanded && (
                    <div className="border-t border-border p-5">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-bold text-deep-green uppercase tracking-wide">Application Kit</p>
                        <button onClick={() => buildKit(match)} className="text-[10px] text-muted hover:text-ink">close ×</button>
                      </div>
                      {isKitLoading && !kitContent[match.programName] && (
                        <div className="flex items-center gap-2 text-sm text-muted py-4">
                          <span className="w-4 h-4 rounded-full border-2 border-deep-green border-t-transparent animate-spin" />
                          Building your personalised application kit...
                        </div>
                      )}
                      {kitContent[match.programName] && (
                        <div className="prose prose-sm max-w-none text-ink leading-relaxed">
                          {kitContent[match.programName].split("\n").map((line, i) => {
                            if (line.startsWith("## ")) return <h3 key={i} className="font-bold text-ink text-sm mt-4 mb-2">{line.replace("## ", "")}</h3>;
                            if (line.startsWith("- ")) return <li key={i} className="text-xs text-ink/80 ml-4 mb-1 list-disc">{line.replace("- ", "")}</li>;
                            if (/^\d+\./.test(line)) return <p key={i} className="text-xs text-ink/80 mb-1 flex gap-2"><span className="font-bold text-deep-green flex-shrink-0">{line.match(/^\d+/)?.[0]}.</span><span>{line.replace(/^\d+\.\s*/, "")}</span></p>;
                            if (line.trim() === "") return <br key={i} />;
                            return <p key={i} className="text-xs text-ink/80 mb-2 leading-relaxed">{line}</p>;
                          })}
                          {isKitLoading && <span className="inline-block w-1.5 h-3 bg-gold ml-0.5 animate-pulse align-middle" />}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Success intel panel */}
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
