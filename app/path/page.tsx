"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import Link from "next/link";

interface PathStep {
  step: number;
  action: string;
  why: string;
  resource?: string;
  resource_url?: string;
  timeline: string;
  cost?: string;
  done?: boolean;
}

type ParsedPath = {
  goal: string;
  gap_summary: string;
  steps: PathStep[];
  total_timeline: string;
  first_move: string;
} | null;

function parsePathFromText(text: string, goal: string): ParsedPath {
  // Return raw text as structured display — the AI formats it well
  return { goal, gap_summary: "", steps: [], total_timeline: "", first_move: text };
}

export default function PathPage() {
  const [goal, setGoal] = useState("");
  const [country, setCountry] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [budget, setBudget] = useState("");
  const [stage, setStage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  async function handleGenerate() {
    if (!goal || !country) return;
    setLoading(true);
    setResult("");
    setCompletedSteps(new Set());

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `You are Alkebulan's Opportunity Path Engine. Your job is to turn someone's business goal into a precise, sequenced roadmap — not a generic list of suggestions, but a step-by-step path that accounts for their current reality and closes the gap between where they are and where they want to be.

You know the African funding landscape deeply: government programs, development banks, DFIs, accelerators, training programs, procurement portals, and the exact documents needed for each. You also understand African business realities: informal economies, mobile money infrastructure, registration hurdles, language barriers, and the importance of sequencing (you cannot apply for certain things without completing earlier steps first).

Format your response EXACTLY as follows:

## Your Goal
[Restate the goal concretely]

## Where You Are Now
[2-3 sentences: honest gap analysis — what's missing between now and the goal]

## Your 7-Step Path
For each step, use this format:

**Step X: [Action title]**
- What: [Exactly what to do]
- Why now: [Why this comes before the next step]
- Resource: [Specific program, portal, or tool to use]
- Timeline: [Realistic time estimate]
- Cost: [Realistic cost in local currency or USD]

## First Move (Do This Week)
[The single most important thing to do in the next 7 days — specific, actionable, with a URL or phone number if applicable]

## Total Timeline
[Realistic end-to-end timeline from today to goal achieved]

Be specific. Name real programs. Give real URLs when you know them. Don't hedge. If a program has an application window, say so. If a step requires the previous one to be complete first, explain why.`,
          prompt: `Build a step-by-step opportunity path for this person:

Their goal: ${goal}
Country: ${country}
Current business stage: ${stage || "Not specified — assume early/no business yet"}
Current situation / what they already have: ${currentStatus || "Starting from zero — no registration, no funding, no formal business yet"}
Available budget to start: ${budget || "Very limited — assume under $500 unless specified"}

Create a realistic 6–8 step roadmap that takes them from their current situation to their stated goal, using real African programs, government registrations, grants, loans, and accelerators available in ${country} and pan-African.

Sequence the steps so each one enables the next. The first step should be something they can do this week.`,
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
        setResult(text);
      }
    } catch {
      setResult("Error generating your path. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const GOAL_EXAMPLES = [
    "Launch a beauty brand in Senegal selling shea products",
    "Win a government catering contract in Ghana",
    "Export cocoa products to Morocco and Tunisia",
    "Build a fintech startup in Rwanda",
    "Open a cold chain logistics business in Lagos",
    "Start an agri-processing business in Kenya",
  ];

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-4">
            OPPORTUNITY PATH ENGINE
          </div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            Your path to wealth, step by step
          </h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            Tell us your goal. We close the gap — a precise, sequenced roadmap from where you
            are today to where you want to be, using real African programs, funding sources,
            and the right order of operations.
          </p>
        </div>

        {/* Goal examples */}
        {!result && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
              Examples — click to use
            </p>
            <div className="flex flex-wrap gap-2">
              {GOAL_EXAMPLES.map((eg) => (
                <button
                  key={eg}
                  onClick={() => setGoal(eg)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    goal === eg
                      ? "bg-deep-green text-ivory border-deep-green"
                      : "bg-white border-border text-ink hover:border-gold"
                  }`}
                >
                  {eg}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white border border-border rounded-2xl p-6 mb-6">
          <h2 className="font-display text-lg font-bold text-ink mb-5">
            {result ? "Your goal" : "What do you want to build?"}
          </h2>

          <div className="space-y-4 mb-5">
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">
                Your goal
              </label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Launch a beauty brand in Senegal, win a government tender in Ghana..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">
                  Country
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g. Senegal, Ghana, Kenya..."
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">
                  Current stage
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold"
                >
                  <option value="">I haven&apos;t started yet</option>
                  <option>I have an idea</option>
                  <option>I have an informal business</option>
                  <option>I have a registered business</option>
                  <option>I have a business and some revenue</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">
                  What you already have
                </label>
                <input
                  type="text"
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                  placeholder="e.g. 2 years experience, $500 savings, small customer base..."
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">
                  Starting budget
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. $200, $2,000, almost nothing"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!goal || !country || loading}
            className="w-full bg-deep-green text-ivory font-bold py-3.5 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50"
          >
            {loading ? "Building your path..." : "Build my roadmap →"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-white border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl font-bold text-ink">Your Roadmap</h2>
              <button
                onClick={() => { setResult(""); setGoal(""); setCountry(""); setStage(""); setCurrentStatus(""); setBudget(""); }}
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                Start over
              </button>
            </div>

            <div className="prose prose-sm max-w-none text-ink whitespace-pre-wrap leading-relaxed">
              {result}
              {loading && (
                <span className="inline-block w-1.5 h-4 bg-gold ml-1 animate-pulse align-middle" />
              )}
            </div>

            {!loading && (
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">
                  Take action
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    href="/dashboard"
                    className="flex items-center justify-center gap-2 bg-deep-green text-ivory text-sm font-semibold py-3 rounded-xl hover:bg-mid-green transition-colors text-center"
                  >
                    Browse funding opportunities
                  </Link>
                  <Link
                    href="/assistant"
                    className="flex items-center justify-center gap-2 border border-deep-green text-deep-green text-sm font-semibold py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors text-center"
                  >
                    Get AI application coaching
                  </Link>
                  <Link
                    href="/network"
                    className="flex items-center justify-center gap-2 border border-border text-ink text-sm font-semibold py-3 rounded-xl hover:border-gold transition-colors text-center"
                  >
                    Find partners & mentors
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* How it works — shown when no result */}
        {!result && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "1", title: "Set your goal", desc: "Tell us what you're trying to build and where you are starting from." },
              { n: "2", title: "Gap analysis", desc: "We assess what's missing between your current reality and your goal." },
              { n: "3", title: "Sequenced steps", desc: "Each step enables the next. Registration before funding. Training before tendering." },
              { n: "4", title: "Real resources", desc: "Every step links to the exact program, portal, or contact you need." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-white border border-border rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-gold text-deep-green text-sm font-bold flex items-center justify-center mb-3">
                  {n}
                </div>
                <h3 className="font-semibold text-ink text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
