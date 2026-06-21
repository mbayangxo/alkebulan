"use client";

import { useState, useRef } from "react";
import { Nav } from "@/app/components/nav";
import { useProfile } from "@/app/components/user-profile";
import Link from "next/link";

const BUDGETS = [
  { label: "Under $500", value: "under $500 USD" },
  { label: "$500 – $5K", value: "$500–$5,000 USD" },
  { label: "$5K – $50K", value: "$5,000–$50,000 USD" },
  { label: "$50K+", value: "over $50,000 USD" },
];

const SKILL_OPTIONS = [
  "Technology / Software", "Sales & Marketing", "Finance & Accounting",
  "Agriculture / Farming", "Trade & Logistics", "Design & Branding",
  "Teaching & Training", "Construction & Engineering", "Healthcare",
  "Food & Cooking", "Media & Content", "Fashion & Beauty",
];

const INTEREST_OPTIONS = [
  "Agriculture & Food", "Tech & Digital", "Fashion & Beauty",
  "Education & Training", "Health & Wellness", "Logistics & Trade",
  "Media & Creative", "Finance & Fintech", "Tourism & Hospitality",
  "Construction & Real Estate", "Energy & Environment", "Government & Procurement",
];

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-display text-xl font-bold text-ink mt-8 mb-2 first:mt-0 border-l-4 border-gold pl-3">
          {line.slice(3)}
        </h2>
      );
    } else if (/^\*\*[^*]+\*\*:/.test(line)) {
      const colonIdx = line.indexOf("**:", 2);
      const label = line.slice(2, colonIdx);
      const content = line.slice(colonIdx + 3).trim();
      elements.push(
        <p key={key++} className="text-sm mb-2">
          <strong className="text-ink">{label}:</strong>{" "}
          <span className="text-muted">{content}</span>
        </p>
      );
    } else if (/^\d+\./.test(line)) {
      elements.push(
        <p key={key++} className="text-sm text-muted pl-4 mb-1">{line}</p>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="border-border my-6" />);
    } else if (line.trim()) {
      elements.push(
        <p key={key++} className="text-sm text-muted mb-2 leading-relaxed">{line}</p>
      );
    }
  }
  return elements;
}

export default function BuildPage() {
  const { profile } = useProfile();
  const [step, setStep] = useState(0); // 0=form, 1=loading, 2=results
  const [country, setCountry] = useState(profile.country_of_origin || profile.country_of_residence || "");
  const [budget, setBudget] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [result, setResult] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  function toggleSkill(s: string) {
    setSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  }
  function toggleInterest(i: string) {
    setInterests(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  }

  async function generate() {
    if (!country || !budget || skills.length === 0) return;
    setStep(1);
    setResult("");
    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country, budget, skills, interests, stage: profile.business_stage }),
        signal: abortRef.current.signal,
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("No stream");

      setStep(2);
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setResult(text);
      }
    } catch {
      setStep(0);
    }
  }

  function reset() {
    abortRef.current?.abort();
    setStep(0);
    setResult("");
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Header */}
      <div className="bg-deep-green text-ivory py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-3">
            🏗 AKIN — BUSINESS BUILDER
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-2">
            What should I build?
          </h1>
          <p className="text-ivory/70 text-base leading-relaxed max-w-xl">
            Answer 4 questions. Akin scans opportunity density across 54 African countries and tells you exactly what to build — and why it&apos;s right for you.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

        {/* FORM */}
        {step === 0 && (
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-ink mb-2">
                Where are you building? <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                value={country}
                onChange={e => setCountry(e.target.value)}
                placeholder="e.g. Nigeria, Senegal, Ghana, Kenya..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-deep-green bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-ink mb-2">
                Starting budget <span className="text-gold">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BUDGETS.map(b => (
                  <button
                    key={b.value}
                    onClick={() => setBudget(b.value)}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-colors ${
                      budget === b.value
                        ? "bg-deep-green text-ivory border-deep-green"
                        : "bg-white border-border text-ink hover:border-deep-green"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-ink mb-1">
                Your strongest skills <span className="text-gold">*</span>
              </label>
              <p className="text-xs text-muted mb-3">What you&apos;re actually good at — not what you want to learn</p>
              <div className="flex flex-wrap gap-2">
                {SKILL_OPTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => toggleSkill(s)}
                    className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                      skills.includes(s)
                        ? "bg-deep-green text-ivory border-deep-green"
                        : "bg-white border-border text-ink hover:border-deep-green"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-ink mb-1">Sectors that excite you</label>
              <p className="text-xs text-muted mb-3">Helps Akin recommend what you&apos;ll actually stick to</p>
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map(i => (
                  <button
                    key={i}
                    onClick={() => toggleInterest(i)}
                    className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                      interests.includes(i)
                        ? "bg-gold text-deep-green border-gold font-semibold"
                        : "bg-white border-border text-ink hover:border-gold"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generate}
              disabled={!country || !budget || skills.length === 0}
              className="w-full bg-deep-green text-ivory font-bold py-4 rounded-2xl text-base hover:bg-mid-green transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Show me what to build →
            </button>
          </div>
        )}

        {/* LOADING */}
        {step === 1 && (
          <div className="text-center py-20">
            <div className="w-12 h-12 rounded-full border-2 border-deep-green border-t-transparent animate-spin mx-auto mb-6" />
            <p className="font-display text-xl font-bold text-ink mb-2">Akin is thinking...</p>
            <p className="text-muted text-sm">Scanning opportunity density across 54 African countries</p>
          </div>
        )}

        {/* RESULTS */}
        {step === 2 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-bold text-gold uppercase tracking-wide mb-1">Akin&apos;s analysis</p>
                <h2 className="font-display text-2xl font-bold text-ink">3 businesses built for you</h2>
                <p className="text-sm text-muted mt-1">{country} · {budget}</p>
              </div>
              <button onClick={reset} className="text-sm text-muted hover:text-ink transition-colors border border-border px-3 py-1.5 rounded-lg">
                ← Start over
              </button>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 mb-6">
              {renderMarkdown(result)}
              {!result.includes("---\n\n---") && step === 2 && (
                <div className="flex items-center gap-2 mt-3 text-muted">
                  <div className="w-3 h-3 rounded-full border-2 border-muted border-t-transparent animate-spin" />
                  <span className="text-xs">Generating...</span>
                </div>
              )}
            </div>

            {result.length > 500 && (
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/path"
                  className="flex-1 text-center bg-deep-green text-ivory font-bold px-6 py-4 rounded-2xl hover:bg-mid-green transition-colors"
                >
                  Build my Opportunity Path →
                </Link>
                <Link
                  href="/matches"
                  className="flex-1 text-center border border-border text-ink font-semibold px-6 py-4 rounded-2xl hover:border-deep-green transition-colors"
                >
                  See programs I qualify for →
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
