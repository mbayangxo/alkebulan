"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import Link from "next/link";
import {
  FOREIGN_OWNERSHIP_FACTS,
  LEGAL_KNOWLEDGE,
  HOW_TO_START_WITH_AFRICAN_PRICES,
  HISTORICAL_TRUTHS,
} from "@/lib/data/economic-sovereignty";

const TABS = [
  { id: "history", label: "Our Legacy", emoji: "🏛️" },
  { id: "opportunity", label: "Who Owns Africa?", emoji: "🌍" },
  { id: "legal", label: "Protect Yourself", emoji: "⚖️" },
  { id: "start", label: "How to Start", emoji: "🚀" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function SovereigntyPage() {
  const [tab, setTab] = useState<TabId>("history");
  const [expandedHistory, setExpandedHistory] = useState<string | null>(null);
  const [expandedFact, setExpandedFact] = useState<string | null>(null);
  const [expandedLegal, setExpandedLegal] = useState<string | null>(null);
  const [expandedStart, setExpandedStart] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Header */}
      <div className="bg-deep-green text-ivory py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-4">
            🌍 ECONOMIC INTELLIGENCE
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-3 leading-tight">
            Take advantage of what&apos;s<br className="hidden sm:block" /> already yours.
          </h1>
          <p className="text-ivory/70 text-base leading-relaxed max-w-xl">
            Your ancestors built the greatest empires on earth. Your land holds the minerals that power the world. The only thing that was taken from you — besides the resources — was the confidence to claim what&apos;s already yours. This page gives it back.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-deep-green border-b border-gold/20 sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-4 flex gap-0">
          {TABS.map(({ id, label, emoji }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                tab === id
                  ? "border-gold text-gold"
                  : "border-transparent text-ivory/60 hover:text-ivory"
              }`}
            >
              <span>{emoji}</span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

        {/* Tab: Our Legacy */}
        {tab === "history" && (
          <div className="space-y-4">
            <div className="bg-deep-green text-ivory rounded-2xl p-5 mb-4">
              <p className="text-base font-bold mb-1">Your people were never poor. They were colonized.</p>
              <p className="text-sm text-ivory/70 leading-relaxed">
                You were taught to think that Africa needed to be developed by outside forces. That is false. African civilizations were advanced, wealthy, and sophisticated long before any European ship arrived. What was taken was not just resources — it was the confidence to know who you are. Here is the truth. Read it. Remember it. Use it.
              </p>
            </div>

            {HISTORICAL_TRUTHS.map((truth) => (
              <div key={truth.title} className="bg-white border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedHistory(expandedHistory === truth.title ? null : truth.title)}
                  className="w-full text-left p-5 hover:bg-warm-ivory transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{truth.icon}</span>
                      <div>
                        <h3 className="font-bold text-ink text-base">{truth.title}</h3>
                        <p className="text-xs text-muted mt-0.5">{truth.era} · {truth.where}</p>
                      </div>
                    </div>
                    <span className="text-gold text-lg flex-shrink-0">
                      {expandedHistory === truth.title ? "▾" : "▸"}
                    </span>
                  </div>
                </button>

                {expandedHistory === truth.title && (
                  <div className="border-t border-border px-5 py-5 space-y-4">
                    <div>
                      <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-2">What they built</p>
                      <p className="text-sm text-ink leading-relaxed">{truth.what_they_built}</p>
                    </div>

                    <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                      <p className="text-xs font-bold text-gold-dark uppercase tracking-wide mb-2">The evidence</p>
                      <p className="text-sm text-ink leading-relaxed">{truth.the_evidence}</p>
                    </div>

                    <div className="bg-red-earth/10 border border-red-earth/30 rounded-xl p-4">
                      <p className="text-xs font-bold text-red-earth uppercase tracking-wide mb-2">What was taken</p>
                      <p className="text-sm text-red-900 leading-relaxed">{truth.what_was_taken}</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-green-800 uppercase tracking-wide mb-2">Africans already doing it today</p>
                      <p className="text-sm text-green-900 leading-relaxed">{truth.what_you_can_reclaim}</p>
                    </div>

                    <div className="flex gap-3">
                      <Link href="/build" className="flex-1 text-center bg-deep-green text-ivory text-sm font-bold py-3 rounded-xl hover:bg-mid-green transition-colors">
                        Build in this space →
                      </Link>
                      <Link href="/matches" className="flex-1 text-center border border-deep-green text-deep-green text-sm font-bold py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors">
                        Find opportunities →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="bg-deep-green rounded-2xl p-6 text-center mt-4">
              <p className="font-display text-xl font-bold text-ivory mb-2">This is who you come from.</p>
              <p className="text-ivory/70 text-sm mb-5 leading-relaxed">
                The people who built the pyramids, who traded across oceans, who pioneered metallurgy and mathematics — those are your ancestors. You did not lose that capability. You were made to forget it. Take your opportunities and build what they would recognize.
              </p>
              <Link href="/path" className="inline-block bg-gold text-deep-green font-bold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors">
                Start building your path →
              </Link>
            </div>
          </div>
        )}

        {/* Tab: Who Owns Africa */}
        {tab === "opportunity" && (
          <div className="space-y-4">
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5 mb-6">
              <p className="text-sm font-bold text-ink mb-1">The honest truth</p>
              <p className="text-sm text-gold-dark leading-relaxed">
                Africa holds 30% of the world&apos;s mineral reserves, 60% of the world&apos;s unused arable land, and 17% of the world&apos;s population — yet accounts for only 3% of global trade. Foreign companies extract the value. African entrepreneurs can reclaim it. Here&apos;s what&apos;s been taken — and what&apos;s yours to build.
              </p>
            </div>

            {FOREIGN_OWNERSHIP_FACTS.map((fact) => (
              <div
                key={fact.sector}
                className="bg-white border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFact(expandedFact === fact.sector ? null : fact.sector)}
                  className="w-full text-left p-5 hover:bg-warm-ivory transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{fact.icon}</span>
                      <div>
                        <h3 className="font-bold text-ink text-base">{fact.sector}</h3>
                        <p className="text-xs text-muted mt-0.5">{fact.annual_value}</p>
                      </div>
                    </div>
                    <span className="text-gold text-lg flex-shrink-0">
                      {expandedFact === fact.sector ? "▾" : "▸"}
                    </span>
                  </div>
                  <p className="text-sm text-ink/80 mt-3 leading-relaxed text-left">{fact.what_they_own}</p>
                </button>

                {expandedFact === fact.sector && (
                  <div className="border-t border-border px-5 py-5 space-y-5">
                    <div>
                      <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-2">Who owns it</p>
                      <ul className="space-y-1">
                        {fact.who_owns_it.map((who) => (
                          <li key={who} className="flex items-start gap-2 text-sm text-ink">
                            <span className="text-red-earth/60 mt-0.5 flex-shrink-0">×</span>
                            {who}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-2">Countries most affected</p>
                      <div className="flex flex-wrap gap-1.5">
                        {fact.countries_affected.map((c) => (
                          <span key={c} className="text-xs bg-warm-ivory border border-border text-ink px-2.5 py-1 rounded-full">{c}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-deep-green/5 border border-deep-green/20 rounded-xl p-4">
                      <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-2">The opportunity for you</p>
                      <p className="text-sm text-ink leading-relaxed">{fact.the_opportunity}</p>
                    </div>

                    <div className="bg-gold/10 border border-gold/20 rounded-xl p-4">
                      <p className="text-xs font-bold text-gold-dark uppercase tracking-wide mb-2">How to start — with African prices</p>
                      <p className="text-sm font-semibold text-ink mb-2">Startup cost: {fact.african_startup_cost}</p>
                      <p className="text-sm text-ink leading-relaxed">{fact.how_to_start}</p>
                    </div>

                    {fact.real_example && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Real African example</p>
                        <p className="text-sm text-green-900 leading-relaxed">{fact.real_example}</p>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Link
                        href="/build"
                        className="flex-1 text-center bg-deep-green text-ivory text-sm font-bold py-3 rounded-xl hover:bg-mid-green transition-colors"
                      >
                        Build in this sector →
                      </Link>
                      <Link
                        href="/matches"
                        className="flex-1 text-center border border-deep-green text-deep-green text-sm font-bold py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors"
                      >
                        Find funding →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab: Protect Yourself */}
        {tab === "legal" && (
          <div className="space-y-4">
            <div className="bg-deep-green/5 border border-deep-green/20 rounded-2xl p-5 mb-4">
              <p className="text-sm font-bold text-ink mb-1">Most entrepreneurs lose business legally, not financially</p>
              <p className="text-sm text-muted leading-relaxed">
                Bad contracts. Bad investors. Titles on land you don&apos;t own. Things you signed without understanding. This section explains the traps — in plain language, with African examples.
              </p>
            </div>

            {LEGAL_KNOWLEDGE.map((topic) => (
              <div key={topic.topic} className="bg-white border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedLegal(expandedLegal === topic.topic ? null : topic.topic)}
                  className="w-full text-left p-5 hover:bg-warm-ivory transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{topic.icon}</span>
                      <h3 className="font-bold text-ink text-sm leading-snug">{topic.topic}</h3>
                    </div>
                    <span className="text-gold text-lg flex-shrink-0">
                      {expandedLegal === topic.topic ? "▾" : "▸"}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-2 leading-relaxed text-left">{topic.why_it_matters}</p>
                </button>

                {expandedLegal === topic.topic && (
                  <div className="border-t border-border px-5 py-5 space-y-5">
                    <div className="bg-red-earth/10 border border-red-earth/30 rounded-xl p-4">
                      <p className="text-xs font-bold text-red-earth uppercase tracking-wide mb-2">What Africans lose</p>
                      <p className="text-sm text-red-900 leading-relaxed">{topic.what_africans_lose}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-3">What you must know</p>
                      <ul className="space-y-2.5">
                        {topic.what_to_know.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-ink leading-relaxed">
                            <span className="text-gold font-bold mt-0.5 flex-shrink-0">{i + 1}.</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                      <p className="text-xs font-bold text-gold-dark uppercase tracking-wide mb-2">Red flags — walk away</p>
                      <ul className="space-y-1.5">
                        {topic.red_flags.map((flag, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-ink">
                            <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">⚠</span>
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-green-800 uppercase tracking-wide mb-2">Protection strategy</p>
                      <p className="text-sm text-green-900 leading-relaxed">{topic.protection}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab: How to Start */}
        {tab === "start" && (
          <div className="space-y-4">
            <div className="bg-deep-green text-ivory rounded-2xl p-5 mb-4">
              <p className="text-base font-bold mb-1">Real African prices. Real steps. Starting now.</p>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Every business below can be started with money you may already have or can access through the programs on this platform. No NGO pricing. No Western startup cost assumptions. Real numbers for where you live.
              </p>
            </div>

            {HOW_TO_START_WITH_AFRICAN_PRICES.map((biz) => (
              <div key={biz.business_type} className="bg-white border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedStart(expandedStart === biz.business_type ? null : biz.business_type)}
                  className="w-full text-left p-5 hover:bg-warm-ivory transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{biz.icon}</span>
                      <div>
                        <h3 className="font-bold text-ink text-base">{biz.business_type}</h3>
                        <p className="text-xs text-gold font-bold mt-0.5">Startup cost: {biz.startup_cost_usd}</p>
                      </div>
                    </div>
                    <span className="text-gold text-lg flex-shrink-0">
                      {expandedStart === biz.business_type ? "▾" : "▸"}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-2 leading-relaxed text-left">{biz.africa_reality}</p>
                </button>

                {expandedStart === biz.business_type && (
                  <div className="border-t border-border px-5 py-5 space-y-5">
                    <div>
                      <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-3">Step by step</p>
                      <ol className="space-y-2.5">
                        {biz.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-ink leading-relaxed">
                            <span className="w-6 h-6 rounded-full bg-deep-green/10 text-deep-green font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-gold/10 border border-gold/20 rounded-xl p-3">
                      <p className="text-xs font-bold text-gold-dark mb-0.5">First revenue expected</p>
                      <p className="text-sm text-ink">{biz.first_revenue}</p>
                    </div>

                    <div className="bg-red-earth/10 border border-red-earth/30 rounded-xl p-4">
                      <p className="text-xs font-bold text-red-earth uppercase tracking-wide mb-2">Mistakes that kill new businesses</p>
                      <ul className="space-y-1.5">
                        {biz.mistakes_to_avoid.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                            <span className="text-red-500 flex-shrink-0 mt-0.5">×</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href="/build"
                        className="flex-1 text-center bg-deep-green text-ivory text-sm font-bold py-3 rounded-xl hover:bg-mid-green transition-colors"
                      >
                        Build my business plan →
                      </Link>
                      <Link
                        href="/path"
                        className="flex-1 text-center border border-deep-green text-deep-green text-sm font-bold py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors"
                      >
                        Get my roadmap →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="bg-deep-green rounded-2xl p-6 text-center mt-6">
              <p className="font-display text-xl font-bold text-ivory mb-2">You have everything you need to start.</p>
              <p className="text-ivory/70 text-sm mb-5">Your location, your knowledge of the market, your community, your labour — these are your inputs. Alkebulan finds you the funding to turn them into a business.</p>
              <Link
                href="/matches"
                className="inline-block bg-gold text-deep-green font-bold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors"
              >
                Find my funding opportunities →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
