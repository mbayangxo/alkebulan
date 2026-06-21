"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import { useProfile } from "@/app/components/user-profile";
import type { GeneratedPath, PathStep } from "@/app/api/path/route";
import Link from "next/link";

type Phase = PathStep["phase"];

const PHASE_CONFIG: Record<Phase, { emoji: string; color: string }> = {
  Foundation: { emoji: "🏗", color: "text-amber-700 bg-amber-50 border-amber-200" },
  Funding:    { emoji: "💰", color: "text-green-700 bg-green-50 border-green-200" },
  Growth:     { emoji: "📈", color: "text-blue-700 bg-blue-50 border-blue-200" },
  Scale:      { emoji: "🚀", color: "text-purple-700 bg-purple-50 border-purple-200" },
};

const TYPE_ICONS: Record<PathStep["type"], string> = {
  registration:  "📋",
  funding:       "💳",
  training:      "📚",
  networking:    "🤝",
  procurement:   "🏛",
  market:        "🛒",
};

const STORAGE_PATH = "alkebulan_opportunity_path";
const STORAGE_PROGRESS = "alkebulan_path_progress";

function getMotivation(completed: number, total: number): string {
  const pct = total > 0 ? completed / total : 0;
  if (completed === 0) return "Every journey starts with one step. Complete step 1 today.";
  if (pct < 0.25) return `You've started. Most people never do. Keep going.`;
  if (pct < 0.5) return `${completed} steps done. You're in the top 30% of people who start this journey.`;
  if (pct < 0.75) return `Halfway there. The programs you're applying to have real money waiting.`;
  if (pct < 1) return `Almost done. These final steps are where most of the money is.`;
  return `Path complete. You've done what most people only talk about.`;
}

export default function PathPage() {
  const { profile } = useProfile();
  const [path, setPath] = useState<GeneratedPath | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [generating, setGenerating] = useState(false);
  const [goal, setGoal] = useState("");
  const [country, setCountry] = useState(profile.country_of_origin || profile.country_of_residence || "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_PATH);
      if (saved) setPath(JSON.parse(saved) as GeneratedPath);
      const progress = localStorage.getItem(STORAGE_PROGRESS);
      if (progress) setCompleted(new Set(JSON.parse(progress) as string[]));
    } catch {}
  }, []);

  function savePath(p: GeneratedPath) {
    setPath(p);
    localStorage.setItem(STORAGE_PATH, JSON.stringify(p));
  }

  function toggleStep(id: string) {
    setCompleted(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      localStorage.setItem(STORAGE_PROGRESS, JSON.stringify([...next]));
      return next;
    });
  }

  async function generatePath() {
    if (!goal || !country) return;
    setGenerating(true);
    try {
      // Fetch top matches to inform path
      let topPrograms: string[] = [];
      if (profile.country_of_origin || profile.country_of_residence) {
        const matchRes = await fetch("/api/match", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profile }),
        });
        const { matches } = await matchRes.json() as { matches: Array<{ programName: string }> };
        topPrograms = matches.slice(0, 6).map((m) => m.programName);
      }

      const res = await fetch("/api/path", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, country, stage: profile.business_stage, topPrograms }),
      });
      const data = await res.json() as GeneratedPath;
      savePath(data);
      setCompleted(new Set());
      localStorage.removeItem(STORAGE_PROGRESS);
    } catch {
      // keep showing form
    }
    setGenerating(false);
  }

  if (!mounted) return null;

  const phases = path
    ? [...new Set(path.steps.map(s => s.phase))] as Phase[]
    : [];

  const completedCount = completed.size;
  const totalSteps = path?.steps.length ?? 0;
  const progressPct = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  // Find the next incomplete step
  const nextStep = path?.steps.find(s => !completed.has(s.id));

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Header */}
      <div className="bg-deep-green text-ivory py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-3">
            🗺 MY OPPORTUNITY PATH
          </div>
          {path ? (
            <>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-ivory mb-1 leading-tight">
                {path.goal}
              </h1>
              <p className="text-ivory/60 text-sm mb-4">{path.country}</p>
              {/* Progress bar */}
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gold">{completedCount} of {totalSteps} steps complete</span>
                  <span className="text-sm font-bold text-ivory">{progressPct}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 mb-3">
                  <div
                    className="bg-gold rounded-full h-2.5 transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <p className="text-xs text-ivory/70 leading-relaxed">
                  {getMotivation(completedCount, totalSteps)}
                </p>
              </div>
            </>
          ) : (
            <>
              <h1 className="font-display text-3xl font-bold text-ivory mb-2">
                Build your path
              </h1>
              <p className="text-ivory/70 text-sm max-w-xl">
                Tell us your goal. We&apos;ll generate a step-by-step roadmap — registration, funding, growth — and track your progress.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

        {/* No path yet — show goal setter */}
        {!path && (
          <div className="bg-white border border-border rounded-2xl p-6">
            <h2 className="font-bold text-ink text-lg mb-4">What do you want to build?</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-ink mb-1.5 block">My goal</label>
                <input
                  type="text"
                  value={goal}
                  onChange={e => setGoal(e.target.value)}
                  placeholder="e.g. Launch a beauty brand, Start a logistics company, Build a tech startup..."
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-deep-green bg-white"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-ink mb-1.5 block">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  placeholder="e.g. Nigeria, Kenya, Senegal..."
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-deep-green bg-white"
                />
              </div>
              <button
                onClick={generatePath}
                disabled={!goal || !country || generating}
                className="w-full bg-deep-green text-ivory font-bold py-4 rounded-2xl hover:bg-mid-green transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {generating ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-ivory border-t-transparent animate-spin" />
                    Building your path...
                  </span>
                ) : (
                  "Generate my Opportunity Path →"
                )}
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted mb-3">Don&apos;t know what to build yet?</p>
              <Link
                href="/build"
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep-green hover:underline"
              >
                🏗 Use Akin to discover what to build →
              </Link>
            </div>
          </div>
        )}

        {/* Path exists — show next action + phases */}
        {path && (
          <>
            {/* Next action banner */}
            {nextStep && (
              <div className="bg-deep-green text-ivory rounded-2xl p-5 mb-6 border-2 border-gold/30">
                <p className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Your next action</p>
                <p className="font-bold text-lg text-ivory mb-1">{nextStep.title}</p>
                <p className="text-sm text-ivory/80 leading-relaxed mb-3">{nextStep.description}</p>
                <p className="text-xs text-ivory/60 italic mb-4">{nextStep.whyNow}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {nextStep.link && (
                    <a
                      href={nextStep.link.startsWith("http") ? nextStep.link : `https://${nextStep.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-gold hover:underline"
                    >
                      Go to {nextStep.link.replace(/https?:\/\//, "").split("/")[0]} →
                    </a>
                  )}
                  <button
                    onClick={() => toggleStep(nextStep.id)}
                    className="bg-gold text-deep-green text-sm font-bold px-4 py-2 rounded-xl hover:bg-gold/90 transition-colors"
                  >
                    Mark done ✓
                  </button>
                </div>
              </div>
            )}

            {completedCount === totalSteps && totalSteps > 0 && (
              <div className="bg-gold/10 border-2 border-gold rounded-2xl p-5 mb-6 text-center">
                <p className="text-2xl mb-2">🎉</p>
                <p className="font-display text-xl font-bold text-ink mb-1">Path complete.</p>
                <p className="text-sm text-muted">You&apos;ve done what most people only talk about. What&apos;s the next goal?</p>
                <button
                  onClick={() => { setPath(null); setCompleted(new Set()); localStorage.removeItem(STORAGE_PATH); localStorage.removeItem(STORAGE_PROGRESS); }}
                  className="mt-3 text-sm font-bold text-deep-green hover:underline"
                >
                  Start a new path →
                </button>
              </div>
            )}

            {/* Phases */}
            <div className="space-y-6">
              {phases.map(phase => {
                const phaseSteps = path.steps.filter(s => s.phase === phase);
                const phaseCompleted = phaseSteps.filter(s => completed.has(s.id)).length;
                const cfg = PHASE_CONFIG[phase];

                return (
                  <div key={phase}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${cfg.color}`}>
                        {cfg.emoji} {phase}
                      </span>
                      <span className="text-xs text-muted">
                        {phaseCompleted}/{phaseSteps.length} complete
                      </span>
                    </div>

                    <div className="space-y-2">
                      {phaseSteps.map(step => {
                        const isDone = completed.has(step.id);
                        const isCurrent = nextStep?.id === step.id;

                        return (
                          <div
                            key={step.id}
                            className={`bg-white border rounded-xl p-4 transition-all ${
                              isCurrent ? "border-gold shadow-sm" :
                              isDone ? "border-border opacity-60" :
                              "border-border"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <button
                                onClick={() => toggleStep(step.id)}
                                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${
                                  isDone
                                    ? "bg-deep-green border-deep-green text-ivory"
                                    : "border-border hover:border-deep-green"
                                }`}
                              >
                                {isDone && <span className="text-[10px]">✓</span>}
                              </button>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <span className="text-base">{TYPE_ICONS[step.type]}</span>
                                  <p className={`font-semibold text-sm ${isDone ? "line-through text-muted" : "text-ink"}`}>
                                    {step.title}
                                  </p>
                                  <span className="text-[10px] text-muted ml-auto flex-shrink-0">~{step.estimatedDays}d</span>
                                </div>
                                {!isDone && (
                                  <p className="text-xs text-muted leading-relaxed">{step.description}</p>
                                )}
                                {!isDone && step.link && (
                                  <a
                                    href={step.link.startsWith("http") ? step.link : `https://${step.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold text-deep-green hover:underline mt-1 block"
                                  >
                                    → {step.link.replace(/https?:\/\//, "").split("/")[0]}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reset */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <Link href="/matches" className="text-sm font-semibold text-deep-green hover:underline">
                ← See my program matches
              </Link>
              <button
                onClick={() => { setPath(null); setCompleted(new Set()); localStorage.removeItem(STORAGE_PATH); localStorage.removeItem(STORAGE_PROGRESS); }}
                className="text-xs text-muted hover:text-ink"
              >
                Start new path
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
