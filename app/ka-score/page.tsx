"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import {
  calculateKaScore,
  loadKaProfile,
  saveKaProfile,
  KA_LEVELS,
  KA_PROFILE_DEFAULTS,
  type KaProfile,
  type KaResult,
} from "@/lib/ka-score";

// ── SVG Score Ring ─────────────────────────────────────────────────────────────
function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 88;
  const circ = 2 * Math.PI * r;
  const fill = circ * (1 - score / 100);
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" className="mx-auto">
      <circle cx="110" cy="110" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
      <circle
        cx="110" cy="110" r={r}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={fill}
        transform="rotate(-90 110 110)"
        style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.34,1.56,0.64,1)" }}
      />
      <text x="110" y="100" textAnchor="middle" fill="white" fontSize="52" fontWeight="700"
        style={{ fontFamily: "var(--font-fraunces)" }}>
        {score}
      </text>
      <text x="110" y="125" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="11"
        style={{ letterSpacing: "0.18em", fontWeight: 600 }}>
        KA SCORE
      </text>
    </svg>
  );
}

// ── Questionnaire Steps ────────────────────────────────────────────────────────
const STEPS = [
  { id: "identity", label: "Business Identity",     step: 1 },
  { id: "history",  label: "Operating History",     step: 2 },
  { id: "revenue",  label: "Revenue Track Record",  step: 3 },
  { id: "assets",   label: "Assets & Resources",    step: 4 },
  { id: "network",  label: "Network & Relationships", step: 5 },
];

function Toggle({
  checked,
  onChange,
  label,
  sub,
}: { checked: boolean; onChange: (v: boolean) => void; label: string; sub?: string }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="w-full flex items-start gap-4 p-4 rounded-xl border transition-all text-left"
      style={{
        background: checked ? "rgba(224,90,24,0.06)" : "rgba(255,255,255,0.02)",
        borderColor: checked ? "rgba(224,90,24,0.35)" : "rgba(255,255,255,0.1)",
      }}
    >
      <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
        style={{ borderColor: checked ? "#E05A18" : "rgba(255,255,255,0.25)", background: checked ? "#E05A18" : "transparent" }}>
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color: checked ? "#F8F0E2" : "rgba(253,250,244,0.6)" }}>{label}</p>
        {sub && <p className="text-xs mt-0.5" style={{ color: "rgba(253,250,244,0.35)" }}>{sub}</p>}
      </div>
    </button>
  );
}

function OptionSelect({
  value,
  onChange,
  options,
}: { value: number; onChange: (v: number) => void; options: { value: number; label: string; sub?: string }[] }) {
  return (
    <div className="space-y-2">
      {options.map(o => {
        const selected = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className="w-full flex items-start gap-4 p-4 rounded-xl border transition-all text-left"
            style={{
              background: selected ? "rgba(224,90,24,0.06)" : "rgba(255,255,255,0.02)",
              borderColor: selected ? "rgba(224,90,24,0.35)" : "rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
              style={{ borderColor: selected ? "#E05A18" : "rgba(255,255,255,0.25)", background: selected ? "#E05A18" : "transparent" }}>
              {selected && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: selected ? "#F8F0E2" : "rgba(253,250,244,0.6)" }}>{o.label}</p>
              {o.sub && <p className="text-xs mt-0.5" style={{ color: "rgba(253,250,244,0.35)" }}>{o.sub}</p>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function KaScorePage() {
  const [profile, setProfile] = useState<KaProfile>(KA_PROFILE_DEFAULTS);
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = steps, 6 = results
  const [result, setResult] = useState<KaResult | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = loadKaProfile();
    if (saved) {
      setProfile(saved);
      setResult(calculateKaScore(saved));
      setStep(6);
    }
  }, []);

  function update(patch: Partial<KaProfile>) {
    const next = { ...profile, ...patch };
    setProfile(next);
    setResult(calculateKaScore(next));
  }

  function finish() {
    const r = calculateKaScore(profile);
    setResult(r);
    saveKaProfile(profile);
    setStep(6);
  }

  function restart() {
    setProfile(KA_PROFILE_DEFAULTS);
    setResult(null);
    setStep(1);
  }

  if (!mounted) return null;

  const liveResult = result ?? calculateKaScore(profile);

  return (
    <div className="min-h-screen" style={{ background: "#F8F0E2" }}>
      <Nav />

      {/* ── INTRO ── */}
      {step === 0 && (
        <div className="min-h-[calc(100vh-68px)] flex flex-col" style={{ background: "#1A1008" }}>
          <div className="flex-1 flex items-center">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-24 w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-0 mb-4" aria-label="Ka">
                      <span style={{ fontFamily: "var(--font-fraunces)", color: "#E05A18", fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 700, lineHeight: 1 }}>
                        Ka
                      </span>
                      <span style={{ fontFamily: "var(--font-fraunces)", color: "rgba(253,250,244,0.2)", fontSize: "clamp(3rem,8vw,6rem)", fontWeight: 700, lineHeight: 1 }}>
                        Score
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-fraunces)", color: "rgba(253,250,244,0.5)", fontSize: "clamp(1rem,2vw,1.25rem)", lineHeight: 1.4 }}
                      className="italic">
                      Your business life force — measured, verified, and recognised.
                    </p>
                  </div>

                  <p style={{ color: "rgba(253,250,244,0.55)", lineHeight: 1.8 }} className="text-sm mb-4 max-w-xl">
                    In ancient Egypt, <span style={{ color: "#E05A18", fontWeight: 600 }}>Ka</span> was the life force that distinguished a living being from one that had not yet begun. Every person — every business — has a Ka. The question is whether it is visible.
                  </p>
                  <p style={{ color: "rgba(253,250,244,0.55)", lineHeight: 1.8 }} className="text-sm mb-4 max-w-xl">
                    Most African businesses are invisible to the financial system. No credit history. No verifiable record. No score. Banks say no. Suppliers demand cash upfront. Buyers ask for references you can&apos;t provide.
                  </p>
                  <p style={{ color: "rgba(253,250,244,0.55)", lineHeight: 1.8 }} className="text-sm mb-10 max-w-xl">
                    Your Ka Score changes that. It is built from what you actually have and what you actually do — and it grows as your business grows.
                  </p>

                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-[0.08em] transition-all"
                    style={{ background: "#E05A18", color: "#1A1008" }}
                  >
                    Build my Ka Score
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path d="M5 12H19M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Level preview cards */}
                <div className="space-y-2">
                  {KA_LEVELS.map((l, i) => (
                    <div key={l.name} className="flex items-center gap-4 px-5 py-3.5 rounded-xl"
                      style={{ background: i === 2 ? "rgba(224,90,24,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${i === 2 ? "rgba(224,90,24,0.2)" : "rgba(255,255,255,0.06)"}` }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: l.color + "22", border: `1px solid ${l.color}40` }}>
                        <span style={{ color: l.color, fontSize: "10px", fontWeight: 700 }}>{l.min}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p style={{ fontFamily: "var(--font-fraunces)", color: "#F8F0E2", fontSize: "13px", fontWeight: 700 }}>{l.name}</p>
                        <p style={{ color: "rgba(253,250,244,0.35)", fontSize: "11px" }}>{l.tagline}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p style={{ fontSize: "9px", color: "rgba(253,250,244,0.2)", letterSpacing: "0.15em" }} className="font-semibold uppercase">
                          {l.unlocks.length} unlocks
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── QUESTIONNAIRE STEPS 1-5 ── */}
      {step >= 1 && step <= 5 && (
        <div className="min-h-[calc(100vh-68px)]" style={{ background: "#0D0804" }}>
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-12">

            {/* Step progress */}
            <div className="flex items-center gap-2 mb-12">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                      style={{
                        background: step > i + 1 ? "#E05A18" : step === i + 1 ? "rgba(224,90,24,0.2)" : "rgba(255,255,255,0.05)",
                        border: step === i + 1 ? "1px solid #E05A18" : "1px solid transparent",
                        color: step > i + 1 ? "#1A1008" : step === i + 1 ? "#E05A18" : "rgba(255,255,255,0.3)",
                      }}>
                      {step > i + 1 ? "✓" : i + 1}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest hidden sm:block"
                      style={{ color: step === i + 1 ? "rgba(253,250,244,0.8)" : "rgba(253,250,244,0.25)" }}>
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="h-px w-4 sm:w-8 flex-shrink-0"
                      style={{ background: step > i + 1 ? "rgba(224,90,24,0.4)" : "rgba(255,255,255,0.08)" }} />
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

              {/* Questions panel */}
              <div>
                {step === 1 && (
                  <div>
                    <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.7)", fontSize: "10px" }} className="font-semibold uppercase mb-3">Step 1 of 5</p>
                    <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#F8F0E2", lineHeight: 1.1 }}
                      className="font-bold text-3xl mb-2">Business Identity</h2>
                    <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "13px", lineHeight: 1.7 }} className="mb-8">
                      Does your business have an official presence? These are the foundation of your Ka Score. Each one makes you more visible to banks, suppliers, and buyers.
                    </p>
                    <div className="space-y-3">
                      <Toggle checked={profile.has_registered_name} onChange={v => update({ has_registered_name: v })}
                        label="Registered business name"
                        sub="Officially registered with a government authority (CAC, RCCM, CIPC, etc.)" />
                      <Toggle checked={profile.has_tax_id} onChange={v => update({ has_tax_id: v })}
                        label="Tax identification number"
                        sub="TIN, VAT registration, or local tax ID" />
                      <Toggle checked={profile.has_business_bank} onChange={v => update({ has_business_bank: v })}
                        label="Business bank account or mobile money merchant account"
                        sub="A separate account in the business's name — not a personal account" />
                      <Toggle checked={profile.has_documented_address} onChange={v => update({ has_documented_address: v })}
                        label="Documented business address"
                        sub="A physical location you can prove — shop, market stall, warehouse, or registered office" />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.7)", fontSize: "10px" }} className="font-semibold uppercase mb-3">Step 2 of 5</p>
                    <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#F8F0E2", lineHeight: 1.1 }}
                      className="font-bold text-3xl mb-2">Operating History</h2>
                    <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "13px", lineHeight: 1.7 }} className="mb-8">
                      How long has your business been operating? Time in operation is one of the most powerful signals of business health. Consistent operation is proof of survival.
                    </p>
                    <OptionSelect
                      value={profile.months_operating}
                      onChange={v => update({ months_operating: v })}
                      options={[
                        { value: 0,   label: "Not yet started",             sub: "Planning stage — your Ka is preparing" },
                        { value: 3,   label: "Less than 3 months",          sub: "Just launched — your Ka is awakening" },
                        { value: 12,  label: "3 months to 1 year",          sub: "Getting established" },
                        { value: 24,  label: "1 to 2 years",                sub: "Proven survival through a full cycle" },
                        { value: 60,  label: "2 to 5 years",                sub: "A real operating business" },
                        { value: 120, label: "More than 5 years",           sub: "Established — your track record is long" },
                      ]}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.7)", fontSize: "10px" }} className="font-semibold uppercase mb-3">Step 3 of 5</p>
                    <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#F8F0E2", lineHeight: 1.1 }}
                      className="font-bold text-3xl mb-2">Revenue Track Record</h2>
                    <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "13px", lineHeight: 1.7 }} className="mb-8">
                      What is your approximate monthly revenue? This is not a judgment — it is a signal. Even small consistent revenue is worth more to a lender than a larger number with no history.
                    </p>
                    <OptionSelect
                      value={profile.monthly_revenue_usd}
                      onChange={v => update({ monthly_revenue_usd: v })}
                      options={[
                        { value: 0,     label: "Not yet generating revenue",  sub: "Pre-revenue stage" },
                        { value: 1,     label: "Under $100/month",            sub: "Micro-business — a starting point" },
                        { value: 100,   label: "$100 – $500/month",           sub: "Growing — equivalent to many formal salaries" },
                        { value: 500,   label: "$500 – $2,000/month",         sub: "Small business territory" },
                        { value: 2000,  label: "$2,000 – $10,000/month",      sub: "Established SME revenue range" },
                        { value: 10000, label: "More than $10,000/month",     sub: "Mid-market — significant operating business" },
                      ]}
                    />
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.7)", fontSize: "10px" }} className="font-semibold uppercase mb-3">Step 4 of 5</p>
                    <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#F8F0E2", lineHeight: 1.1 }}
                      className="font-bold text-3xl mb-2">Assets & Resources</h2>
                    <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "13px", lineHeight: 1.7 }} className="mb-8">
                      What does your business actually have? Assets are proof that your business exists beyond words. They show capacity — the ability to deliver on a contract.
                    </p>
                    <div className="space-y-3">
                      <Toggle checked={profile.has_inventory} onChange={v => update({ has_inventory: v })}
                        label="Documented inventory or stock"
                        sub="Products, raw materials, or goods you can count and value" />
                      <Toggle checked={profile.has_equipment} onChange={v => update({ has_equipment: v })}
                        label="Business equipment or tools"
                        sub="Machines, vehicles, technology, or tools used in your operation" />
                      <Toggle checked={profile.has_premises} onChange={v => update({ has_premises: v })}
                        label="Business premises or workspace"
                        sub="A shop, market stall, warehouse, farm, or office — owned or leased" />
                      <Toggle checked={profile.has_verified_suppliers} onChange={v => update({ has_verified_suppliers: v })}
                        label="Established supplier relationships"
                        sub="At least one supplier you buy from regularly and can name" />
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.7)", fontSize: "10px" }} className="font-semibold uppercase mb-3">Step 5 of 5</p>
                    <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#F8F0E2", lineHeight: 1.1 }}
                      className="font-bold text-3xl mb-2">Network & Relationships</h2>
                    <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "13px", lineHeight: 1.7 }} className="mb-8">
                      Who trusts your business? Relationships are the oldest form of credit. A business with repeat customers and verified connections is a business that has earned trust.
                    </p>
                    <div className="space-y-3">
                      <Toggle checked={profile.has_repeat_customers} onChange={v => update({ has_repeat_customers: v })}
                        label="Repeat customers or buyers"
                        sub="At least one customer or buyer who has purchased from you more than once" />
                      <Toggle checked={profile.has_buyer_relationships} onChange={v => update({ has_buyer_relationships: v })}
                        label="Documented buyer relationships"
                        sub="A contract, purchase order, invoice, or formal agreement with a buyer" />
                      <Toggle checked={profile.is_in_cooperative} onChange={v => update({ is_in_cooperative: v })}
                        label="Member of a cooperative, association, or trade body"
                        sub="Any formal group — farmer cooperative, market association, chamber of commerce" />
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-10">
                  <button
                    onClick={() => setStep(s => Math.max(0, s - 1))}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(253,250,244,0.5)" }}
                  >
                    ← Back
                  </button>
                  {step < 5 ? (
                    <button
                      onClick={() => setStep(s => s + 1)}
                      className="flex-1 sm:flex-none px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                      style={{ background: "#E05A18", color: "#1A1008" }}
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      onClick={finish}
                      className="flex-1 sm:flex-none px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                      style={{ background: "#E05A18", color: "#1A1008" }}
                    >
                      See my Ka Score →
                    </button>
                  )}
                </div>
              </div>

              {/* Live score sidebar */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden" style={{ background: "#1A1008" }}>
                  <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <p style={{ fontSize: "9px", letterSpacing: "0.22em", color: "rgba(224,90,24,0.6)" }} className="font-semibold uppercase">
                      Your score — live
                    </p>
                  </div>
                  <div className="p-5">
                    <ScoreRing score={liveResult.total} color={liveResult.level.color} />
                    <div className="text-center mt-2 mb-6">
                      <p style={{ fontFamily: "var(--font-fraunces)", color: liveResult.level.color, fontWeight: 700, fontSize: "1.1rem" }}>
                        {liveResult.level.name}
                      </p>
                      <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "11px", lineHeight: 1.6, marginTop: "4px" }}>
                        {liveResult.level.tagline}
                      </p>
                    </div>

                    {/* Mini breakdown */}
                    <div className="space-y-2">
                      {Object.values(liveResult.breakdown).map(cat => (
                        <div key={cat.label}>
                          <div className="flex justify-between items-center mb-1">
                            <p style={{ fontSize: "9px", color: "rgba(253,250,244,0.4)", letterSpacing: "0.12em" }} className="font-semibold uppercase">{cat.label}</p>
                            <p style={{ fontSize: "9px", color: cat.score > 0 ? "#E05A18" : "rgba(253,250,244,0.2)" }} className="font-bold">{cat.score}/{cat.max}</p>
                          </div>
                          <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                            <div className="h-1 rounded-full transition-all duration-500"
                              style={{ width: `${(cat.score / cat.max) * 100}%`, background: "#E05A18" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── RESULTS ── */}
      {step === 6 && result && (
        <div style={{ background: "#0D0804" }}>
          {/* Score hero */}
          <div className="py-16 lg:py-24" style={{ background: "#1A1008" }}>
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
              <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-center">
                <div className="text-center lg:text-left">
                  <ScoreRing score={result.total} color={result.level.color} />
                  <div className="mt-4">
                    <p style={{ fontFamily: "var(--font-fraunces)", color: result.level.color, fontWeight: 700, fontSize: "1.4rem" }}>
                      {result.level.name}
                    </p>
                    <p style={{ color: "rgba(253,250,244,0.5)", fontSize: "13px", lineHeight: 1.6, marginTop: "6px" }}>
                      {result.level.meaning}
                    </p>
                    {result.next_level && (
                      <p style={{ color: "rgba(224,90,24,0.6)", fontSize: "11px", marginTop: "10px" }} className="font-semibold">
                        {result.points_to_next} points to {result.next_level.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.6)", fontSize: "10px" }} className="font-semibold uppercase mb-3">
                    Your score breakdown
                  </p>
                  <div className="space-y-4">
                    {Object.values(result.breakdown).map(cat => (
                      <div key={cat.label}>
                        <div className="flex justify-between items-center mb-2">
                          <p style={{ color: "rgba(253,250,244,0.7)", fontSize: "13px" }} className="font-semibold">{cat.label}</p>
                          <p style={{ color: cat.score > 0 ? "#E05A18" : "rgba(253,250,244,0.2)", fontSize: "13px" }} className="font-bold">
                            {cat.score} / {cat.max}
                          </p>
                        </div>
                        <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                          <div className="h-2 rounded-full transition-all"
                            style={{ width: `${(cat.score / cat.max) * 100}%`, background: cat.score > 0 ? "#E05A18" : "transparent" }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={restart}
                      className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(253,250,244,0.5)" }}
                    >
                      Update my profile
                    </button>
                    <Link href="/programs"
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                      style={{ background: "#E05A18", color: "#1A1008" }}>
                      See matched programs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What you've unlocked */}
          <div className="py-16">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
              <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.6)", fontSize: "10px" }} className="font-semibold uppercase mb-3">
                What your Ka Score unlocks
              </p>
              <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#F8F0E2", lineHeight: 1.1 }}
                className="font-bold text-3xl mb-10">
                You have access to {result.level.unlocks.length} things right now.
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {KA_LEVELS.slice(0, KA_LEVELS.indexOf(result.level) + 1).flatMap(l => l.unlocks).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: "rgba(224,90,24,0.15)" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#E05A18" }} />
                    </div>
                    <p style={{ color: "rgba(253,250,244,0.7)", fontSize: "12px", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>

              {/* Next level preview */}
              {result.next_level && (
                <div className="rounded-2xl p-6" style={{ border: "1px solid rgba(224,90,24,0.2)", background: "rgba(224,90,24,0.04)" }}>
                  <p style={{ fontSize: "9px", letterSpacing: "0.22em", color: "rgba(224,90,24,0.6)" }} className="font-semibold uppercase mb-2">
                    {result.points_to_next} points away
                  </p>
                  <p style={{ fontFamily: "var(--font-fraunces)", color: result.next_level.color, fontWeight: 700, fontSize: "1.1rem" }} className="mb-1">
                    {result.next_level.name}
                  </p>
                  <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "12px", marginBottom: "12px" }}>
                    {result.next_level.tagline}
                  </p>
                  <div className="space-y-1.5">
                    {result.next_level.unlocks.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center"
                          style={{ border: "1px solid rgba(224,90,24,0.3)" }}>
                          <div className="w-1 h-1 rounded-full" style={{ background: "rgba(224,90,24,0.5)" }} />
                        </div>
                        <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "11px" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={restart}
                    className="mt-5 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all"
                    style={{ border: "1px solid rgba(224,90,24,0.3)", color: "#E05A18" }}
                  >
                    Build toward {result.next_level.name} →
                  </button>
                </div>
              )}

              {result.total === 100 && (
                <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(224,90,24,0.06)", border: "1px solid rgba(224,90,24,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-fraunces)", color: "#E05A18", fontSize: "1.5rem", fontWeight: 700 }} className="mb-2">
                    Ka Trusted. Maximum.
                  </p>
                  <p style={{ color: "rgba(253,250,244,0.5)", fontSize: "13px", lineHeight: 1.7 }} className="max-w-xl mx-auto">
                    Your business life force is at full strength. You have built something real, documented it, and earned the trust of the network. The full weight of Kebu is behind you.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* All levels map */}
          <div className="py-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
              <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.6)", fontSize: "10px" }} className="font-semibold uppercase mb-8">
                The full Ka journey
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {KA_LEVELS.map(l => {
                  const isCurrentOrBelow = result.total >= l.min;
                  return (
                    <div key={l.name} className="p-5 rounded-2xl"
                      style={{
                        background: isCurrentOrBelow ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
                        border: `1px solid ${isCurrentOrBelow ? l.color + "33" : "rgba(255,255,255,0.06)"}`,
                      }}>
                      <div className="flex items-center justify-between mb-3">
                        <p style={{ fontSize: "9px", color: isCurrentOrBelow ? l.color : "rgba(253,250,244,0.2)", letterSpacing: "0.18em" }}
                          className="font-bold uppercase">{l.min}–{l.max}</p>
                        {isCurrentOrBelow && result.level.name === l.name && (
                          <span className="text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full"
                            style={{ background: l.color + "22", color: l.color }}>You</span>
                        )}
                      </div>
                      <p style={{ fontFamily: "var(--font-fraunces)", color: isCurrentOrBelow ? "#F8F0E2" : "rgba(253,250,244,0.2)", fontWeight: 700, fontSize: "15px", lineHeight: 1.2 }}
                        className="mb-1">{l.name}</p>
                      <p style={{ color: "rgba(253,250,244,0.3)", fontSize: "10px", lineHeight: 1.5 }}>{l.tagline}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
