"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { Nav } from "@/app/components/nav";
import { INDUSTRIES } from "@/lib/data/industry-intelligence";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CAPITAL_OPTIONS = [
  { value: "under $500", label: "Under $500" },
  { value: "$500–$2,000", label: "$500 – $2K" },
  { value: "$2,000–$10,000", label: "$2K – $10K" },
  { value: "$10,000–$50,000", label: "$10K – $50K" },
  { value: "$50,000–$200,000", label: "$50K – $200K" },
  { value: "over $200,000", label: "$200K+" },
];

const COUNTRY_OPTIONS = [
  "Nigeria", "Ghana", "Kenya", "Senegal", "Côte d'Ivoire", "Ethiopia",
  "Uganda", "Tanzania", "Rwanda", "Cameroon", "Zambia", "DRC", "South Africa",
  "Morocco", "Egypt", "Burkina Faso", "Mali", "Benin", "Togo", "Zimbabwe",
  "Mozambique", "Angola", "Other / Diaspora",
];

type Step = "industry" | "country-capital" | "skills" | "analysis" | "plan" | "first-customer";

interface Session {
  industry: string;
  country: string;
  capital: string;
  skills: string;
  industryIcon: string;
}

function BuildBusinessInner() {
  const searchParams = useSearchParams();
  const preselectedIndustry = searchParams.get("industry") || "";

  const [step, setStep] = useState<Step>(preselectedIndustry ? "country-capital" : "industry");
  const [session, setSession] = useState<Session>({
    industry: preselectedIndustry
      ? INDUSTRIES.find(i => i.slug === preselectedIndustry)?.name || ""
      : "",
    country: "",
    capital: "",
    skills: "",
    industryIcon: preselectedIndustry
      ? INDUSTRIES.find(i => i.slug === preselectedIndustry)?.icon || ""
      : "",
  });

  const [streaming, setStreaming] = useState(false);
  const [output, setOutput] = useState<{ label: string; content: string }[]>([]);
  const [customIndustry, setCustomIndustry] = useState("");
  const [followUp, setFollowUp] = useState("");
  const outputRef = useRef<HTMLDivElement>(null);

  async function callStep(apiStep: string, extra?: Record<string, string>) {
    setStreaming(true);
    const label =
      apiStep === "market-analysis" ? "Market Analysis"
      : apiStep === "competition" ? "Who Controls This Market"
      : apiStep === "business-plan" ? "Business Plan"
      : apiStep === "first-customer" ? "First Customer Strategy"
      : "AI Response";

    setOutput(prev => [...prev, { label, content: "" }]);

    try {
      const res = await fetch("/api/build-business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          step: apiStep,
          industry: session.industry,
          country: session.country,
          capital: session.capital,
          skills: session.skills,
          ...extra,
        }),
      });
      if (!res.body) return;
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value);
        setOutput(prev => {
          const next = [...prev];
          next[next.length - 1] = { label, content: next[next.length - 1].content + text };
          return next;
        });
      }
    } finally {
      setStreaming(false);
    }
  }

  useEffect(() => {
    if (output.length > 0 && outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [output.length]);

  const STEP_LABELS: Record<Step, string> = {
    industry: "Industry",
    "country-capital": "Country & Capital",
    skills: "Your Background",
    analysis: "Market Analysis",
    plan: "Business Plan",
    "first-customer": "First Customer",
  };
  const STEP_ORDER: Step[] = ["industry", "country-capital", "skills", "analysis", "plan", "first-customer"];
  const currentIdx = STEP_ORDER.indexOf(step);

  return (
    <main className="min-h-screen bg-[#071F15]">
      {/* Hero */}
      <section className="border-b border-white/8 px-5 sm:px-8 pt-14 pb-10">
        <div className="max-w-3xl mx-auto">
          <p
            style={{ letterSpacing: "0.2em" }}
            className="text-[10px] font-semibold uppercase text-gold/50 mb-4"
          >
            AI Business Builder
          </p>
          <h1
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-3xl sm:text-4xl font-bold text-ivory leading-[1.1] mb-4"
          >
            Build your business,
            <br />
            <span className="text-gold italic">step by step.</span>
          </h1>
          <p className="text-ivory/55 text-sm max-w-xl leading-relaxed">
            Not a chat widget. A structured session that builds your actual business plan — market analysis,
            competitive landscape, entry strategy, first sale, 12-month roadmap.
          </p>

          {/* Progress */}
          <div className="flex gap-1 mt-6">
            {STEP_ORDER.map((s, i) => (
              <div
                key={s}
                className={`h-1 rounded-full flex-1 transition-all ${
                  i < currentIdx ? "bg-gold" : i === currentIdx ? "bg-gold/60" : "bg-white/10"
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] text-ivory/30 mt-2">
            Step {currentIdx + 1} of {STEP_ORDER.length} — {STEP_LABELS[step]}
          </p>
        </div>
      </section>

      {/* Steps */}
      <div className="px-5 sm:px-8 py-10">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* STEP 1: Industry */}
          {step === "industry" && (
            <div>
              <h2 className="text-ivory font-bold text-xl mb-2">What do you want to build in?</h2>
              <p className="text-ivory/50 text-sm mb-6">
                Choose an industry or describe your own idea.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {INDUSTRIES.map(ind => (
                  <button
                    key={ind.slug}
                    onClick={() => {
                      setSession(s => ({ ...s, industry: ind.name, industryIcon: ind.icon }));
                      setStep("country-capital");
                    }}
                    className="flex items-start gap-3 bg-white/3 border border-white/8 hover:border-gold/25 rounded-2xl p-4 text-left transition-all group"
                  >
                    <span className="text-2xl flex-shrink-0">{ind.icon}</span>
                    <div>
                      <p className="text-ivory font-semibold text-sm">{ind.name}</p>
                      <p className="text-ivory/40 text-xs mt-0.5 line-clamp-2">{ind.tagline}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
                <p className="text-ivory/50 text-sm mb-3">Or describe your own idea:</p>
                <input
                  type="text"
                  value={customIndustry}
                  onChange={e => setCustomIndustry(e.target.value)}
                  placeholder="e.g. EdTech, Agri-processing, Logistics, Fashion…"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-ivory/25 outline-none focus:border-gold/30"
                />
                <button
                  onClick={() => {
                    if (!customIndustry.trim()) return;
                    setSession(s => ({ ...s, industry: customIndustry.trim(), industryIcon: "🏗️" }));
                    setStep("country-capital");
                  }}
                  disabled={!customIndustry.trim()}
                  className="mt-3 bg-gold hover:bg-gold-light disabled:opacity-40 text-deep-green text-xs font-bold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-colors"
                >
                  Use this industry
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Country & Capital */}
          {step === "country-capital" && (
            <div>
              {session.industry && (
                <div className="flex items-center gap-2 mb-5 text-sm text-ivory/50">
                  <span>{session.industryIcon}</span>
                  <span>{session.industry}</span>
                  <button onClick={() => setStep("industry")} className="text-gold/60 hover:text-gold text-xs ml-1">
                    change
                  </button>
                </div>
              )}
              <h2 className="text-ivory font-bold text-xl mb-2">Where are you building, and with how much?</h2>
              <p className="text-ivory/50 text-sm mb-6">
                The plan will be specific to your country — registration costs, local suppliers, realistic pricing.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-[10px] text-ivory/40 uppercase tracking-wider mb-3">Country / Market</p>
                  <div className="flex flex-wrap gap-2">
                    {COUNTRY_OPTIONS.map(c => (
                      <button
                        key={c}
                        onClick={() => setSession(s => ({ ...s, country: c }))}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          session.country === c
                            ? "bg-gold text-deep-green border-gold font-semibold"
                            : "bg-white/3 border-white/10 text-ivory/60 hover:border-gold/25"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-ivory/40 uppercase tracking-wider mb-3">Available Capital</p>
                  <div className="flex flex-wrap gap-2">
                    {CAPITAL_OPTIONS.map(c => (
                      <button
                        key={c.value}
                        onClick={() => setSession(s => ({ ...s, capital: c.value }))}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          session.capital === c.value
                            ? "bg-gold text-deep-green border-gold font-semibold"
                            : "bg-white/3 border-white/10 text-ivory/60 hover:border-gold/25"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setStep("skills")}
                disabled={!session.country || !session.capital}
                className="mt-8 bg-gold hover:bg-gold-light disabled:opacity-40 text-deep-green text-xs font-bold uppercase tracking-[0.1em] px-6 py-3 rounded-full transition-colors"
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 3: Skills */}
          {step === "skills" && (
            <div>
              <div className="flex items-center gap-3 mb-5 text-xs text-ivory/40">
                <span>{session.industryIcon} {session.industry}</span>
                <span>·</span>
                <span>{session.country}</span>
                <span>·</span>
                <span>{session.capital}</span>
                <button onClick={() => setStep("country-capital")} className="text-gold/60 hover:text-gold ml-1">
                  edit
                </button>
              </div>
              <h2 className="text-ivory font-bold text-xl mb-2">What's your background?</h2>
              <p className="text-ivory/50 text-sm mb-6">
                The more honest you are, the better the plan. Skills, work history, what you've tried before, who you know.
              </p>
              <textarea
                value={session.skills}
                onChange={e => setSession(s => ({ ...s, skills: e.target.value }))}
                placeholder="e.g. I worked in logistics for 3 years, I know how to negotiate with suppliers, I have no formal business training, I have a cousin who farms cocoa in Kumasi…"
                className="w-full h-36 bg-white/4 border border-white/10 rounded-2xl px-4 py-3 text-sm text-ivory placeholder-ivory/25 outline-none focus:border-gold/30 resize-none"
              />
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => {
                    setStep("analysis");
                    callStep("market-analysis");
                  }}
                  disabled={!session.skills.trim()}
                  className="bg-gold hover:bg-gold-light disabled:opacity-40 text-deep-green text-xs font-bold uppercase tracking-[0.1em] px-6 py-3 rounded-full transition-colors"
                >
                  Analyze the market →
                </button>
                <button
                  onClick={() => setStep("skills")}
                  className="text-ivory/40 hover:text-ivory text-xs px-4"
                >
                  ← Back
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Analysis output + next steps */}
          {(step === "analysis" || step === "plan" || step === "first-customer") && (
            <div className="space-y-6">
              {/* Session summary */}
              <div className="flex items-center gap-3 text-xs text-ivory/40">
                <span>{session.industryIcon} {session.industry}</span>
                <span>·</span>
                <span>{session.country}</span>
                <span>·</span>
                <span>{session.capital}</span>
              </div>

              {/* Output sections */}
              <div ref={outputRef} className="space-y-6">
                {output.map((block, i) => (
                  <div key={i} className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
                    <div className="border-b border-white/8 px-5 py-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gold/60" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ivory/50">
                        {block.label}
                      </p>
                    </div>
                    <div className="px-5 py-5">
                      {block.content ? (
                        <MarkdownBlock content={block.content} />
                      ) : (
                        <div className="flex items-center gap-2 text-ivory/30 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                          <span>Generating…</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons — shown when not streaming */}
              {!streaming && (
                <div className="space-y-4">
                  <p
                    style={{ letterSpacing: "0.18em" }}
                    className="text-[9px] font-semibold uppercase text-ivory/30"
                  >
                    What do you want next?
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {step !== "plan" && (
                      <button
                        onClick={() => {
                          setStep("plan");
                          callStep("business-plan");
                        }}
                        className="bg-gold hover:bg-gold-light text-deep-green text-xs font-bold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-colors"
                      >
                        Build my business plan
                      </button>
                    )}
                    {step !== "first-customer" && (
                      <button
                        onClick={() => {
                          setStep("first-customer");
                          callStep("first-customer");
                        }}
                        className="border border-white/15 hover:border-gold/30 text-ivory/70 hover:text-ivory text-xs font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-colors"
                      >
                        How do I get my first customer?
                      </button>
                    )}
                    <button
                      onClick={() => {
                        callStep("competition");
                      }}
                      className="border border-white/15 hover:border-gold/30 text-ivory/70 hover:text-ivory text-xs font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-colors"
                    >
                      Who controls this market?
                    </button>
                  </div>

                  {/* Follow-up question */}
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      value={followUp}
                      onChange={e => setFollowUp(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Enter" && followUp.trim()) {
                          callStep("custom", { context: followUp, step: "custom", prompt: followUp });
                          setFollowUp("");
                        }
                      }}
                      placeholder="Ask anything about this business…"
                      className="flex-1 bg-white/4 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-ivory placeholder-ivory/25 outline-none focus:border-gold/30"
                    />
                    <button
                      onClick={() => {
                        if (!followUp.trim()) return;
                        callStep("custom", { context: followUp, step: "custom", prompt: followUp });
                        setFollowUp("");
                      }}
                      disabled={!followUp.trim()}
                      className="bg-gold/15 hover:bg-gold/25 disabled:opacity-30 text-gold text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                    >
                      Ask
                    </button>
                  </div>
                </div>
              )}

              {/* Save / next steps */}
              {!streaming && output.some(o => o.content.length > 200) && (
                <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <p className="text-ivory/60 text-sm">Ready to start building?</p>
                    <p className="text-ivory/35 text-xs mt-0.5">Save this plan and track your progress on My Path.</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        const text = output.map(o => `## ${o.label}\n\n${o.content}`).join("\n\n---\n\n");
                        navigator.clipboard.writeText(text).catch(() => {});
                      }}
                      className="border border-white/15 hover:border-gold/30 text-ivory/60 hover:text-ivory text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                    >
                      Copy plan
                    </button>
                    <Link
                      href="/path"
                      className="bg-gold hover:bg-gold-light text-deep-green text-xs font-bold uppercase tracking-[0.1em] px-5 py-2 rounded-full transition-colors"
                    >
                      My Path →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function MarkdownBlock({ content }: { content: string }) {
  const lines = content.split("\n");
  return (
    <div className="space-y-2 text-sm">
      {lines.map((line, i) => {
        if (line.startsWith("## ")) {
          return (
            <p key={i} className="text-gold font-semibold text-xs uppercase tracking-[0.12em] mt-5 mb-1 first:mt-0">
              {line.replace("## ", "")}
            </p>
          );
        }
        if (line.startsWith("### ")) {
          return (
            <p key={i} className="text-ivory font-semibold text-sm mt-3 mb-1">
              {line.replace("### ", "")}
            </p>
          );
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={i} className="text-ivory font-semibold text-xs">
              {line.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (line.startsWith("- ") || line.startsWith("• ")) {
          return (
            <p key={i} className="text-ivory/65 pl-3 border-l border-white/10 py-0.5 text-xs">
              {line.slice(2)}
            </p>
          );
        }
        if (line.match(/^\d+\. /)) {
          return (
            <p key={i} className="text-ivory/65 pl-2 text-xs">
              {line}
            </p>
          );
        }
        if (line.trim() === "") return <div key={i} className="h-1" />;
        return (
          <p key={i} className="text-ivory/65 leading-relaxed text-xs">
            {line}
          </p>
        );
      })}
    </div>
  );
}

export default function BuildBusinessPage() {
  return (
    <>
      <Nav />
      <Suspense fallback={
        <main className="min-h-screen bg-[#071F15] flex items-center justify-center">
          <p className="text-ivory/40 text-sm">Loading…</p>
        </main>
      }>
        <BuildBusinessInner />
      </Suspense>
    </>
  );
}
