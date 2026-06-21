"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import { ALL_COUNTRY_PROGRAMS } from "@/lib/data/all-country-programs";
import Link from "next/link";

const SECTORS = [
  "Agriculture / Food", "Fashion / Beauty", "Tech / Software", "Healthcare",
  "Construction / Real Estate", "Education / Training", "Logistics / Transport",
  "Finance / Fintech", "Media / Creative", "Tourism / Hospitality", "Manufacturing",
  "Retail / E-commerce", "Energy / Solar", "Mining / Resources",
];

const STAGES = [
  { id: "idea", label: "Just starting — less than 6 months" },
  { id: "early", label: "Early — selling but not yet profitable" },
  { id: "growing", label: "Growing — profitable, want to scale" },
  { id: "established", label: "Established — 5+ years" },
];

const COUNTRIES = ALL_COUNTRY_PROGRAMS.map((p) => `${p.flag} ${p.country}`);

interface GrowthReport {
  id: string;
  date: string;
  business: string;
  sector: string;
  country: string;
  content: string;
}

function GrowthDisplay({ text, loading }: { text: string; loading: boolean }) {
  if (!text && !loading) return null;

  const lines = text.split("\n");

  return (
    <div className="prose prose-sm max-w-none">
      <div className="space-y-1">
        {lines.map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h3 key={i} className="font-bold text-ink text-base mt-6 mb-2 first:mt-0">
                {line.replace(/^##\s+/, "")}
              </h3>
            );
          }
          if (line.startsWith("### ")) {
            return (
              <h4 key={i} className="font-semibold text-ink text-sm mt-4 mb-1">
                {line.replace(/^###\s+/, "")}
              </h4>
            );
          }
          if (line.startsWith("→ ") || line.startsWith("**→")) {
            return (
              <div key={i} className="mt-4 bg-deep-green/5 border border-deep-green/25 rounded-xl px-4 py-3">
                <p className="text-sm font-bold text-deep-green">{line.replace(/\*\*/g, "")}</p>
              </div>
            );
          }
          if (line.match(/^\d+\.\s/)) {
            return (
              <p key={i} className="text-sm text-ink ml-4 mb-1">
                {line.replace(/\*\*/g, "")}
              </p>
            );
          }
          if (line.startsWith("- ")) {
            return (
              <p key={i} className="text-sm text-ink ml-4 mb-1">
                • {line.slice(2).replace(/\*\*/g, "")}
              </p>
            );
          }
          if (line.trim() === "") return <div key={i} className="h-1" />;
          return (
            <p key={i} className="text-sm text-ink leading-relaxed">
              {line.replace(/\*\*/g, "")}
            </p>
          );
        })}
        {loading && (
          <span className="inline-block w-1.5 h-4 bg-gold animate-pulse align-middle ml-1" />
        )}
      </div>
    </div>
  );
}

export default function KwamePage() {
  const [business, setBusiness] = useState("");
  const [sector, setSector] = useState("");
  const [country, setCountry] = useState("");
  const [stage, setStage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [past, setPast] = useState<GrowthReport[]>([]);
  const [viewing, setViewing] = useState<GrowthReport | null>(null);

  useEffect(() => {
    try {
      setPast(JSON.parse(localStorage.getItem("alkebulan_kwame") || "[]"));
    } catch {}
  }, []);

  async function runSearch() {
    if (!country) return;
    setLoading(true);
    setResult("");
    setViewing(null);

    const cleanCountry = country.replace(/^.{2,4}\s/, "");

    try {
      const res = await fetch("/api/agents/growth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ business, sector, country: cleanCountry, stage }),
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

      const report: GrowthReport = {
        id: Date.now().toString(),
        date: new Date().toLocaleString(),
        business: business || "My business",
        sector: sector || "General",
        country: cleanCountry,
        content: text,
      };
      const updated = [report, ...past].slice(0, 10);
      setPast(updated);
      try { localStorage.setItem("alkebulan_kwame", JSON.stringify(updated)); } catch {}
    } catch {
      setResult("Kwame couldn't complete the search. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const activeContent = viewing ? viewing.content : result;

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-4">
            KWAME — GROWTH AGENT
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ivory mb-4 leading-tight">
            Find your customers.<br />Find your channel.
          </h1>
          <p className="text-ivory/75 text-lg max-w-2xl leading-relaxed">
            Tell Kwame what you build and where. He searches the web to find communities to join,
            influencers to partner with, distribution channels you&apos;re missing,
            and the one growth move to make this week.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-2xl p-6 sticky top-20">
              <p className="text-xs font-bold text-muted uppercase tracking-wide mb-5">Your business</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-ink mb-2">What do you sell / do?</label>
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. organic shea butter cosmetics, solar installation, mobile money app"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-2">Sector</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
                  >
                    <option value="">Select sector</option>
                    {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-2">Country (required)</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
                  >
                    <option value="">Select your country</option>
                    {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-2">Business stage</label>
                  <div className="space-y-2">
                    {STAGES.map(({ id, label }) => (
                      <button
                        key={id}
                        onClick={() => setStage(id)}
                        className={`w-full text-left py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                          stage === id ? "bg-deep-green text-ivory border-deep-green" : "bg-white border-border text-ink hover:border-deep-green"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={runSearch}
                  disabled={!country || loading}
                  className="w-full bg-deep-green text-ivory font-bold py-4 rounded-2xl text-base hover:bg-mid-green transition-colors disabled:opacity-40"
                >
                  {loading ? "Kwame is searching..." : "Find my growth levers →"}
                </button>

                {loading && (
                  <p className="text-xs text-muted text-center">
                    Searching the web for communities, influencers, and channels... takes 30–60 seconds.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">

            {/* Past reports */}
            {past.length > 0 && !activeContent && (
              <div className="bg-white border border-border rounded-2xl p-5">
                <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Past searches</p>
                <div className="space-y-2">
                  {past.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => { setViewing(r); setResult(""); }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl border transition-colors ${
                        viewing?.id === r.id ? "bg-deep-green/5 border-deep-green/30" : "border-border hover:border-deep-green/30"
                      }`}
                    >
                      <p className="text-xs font-semibold text-ink">{r.business || "My business"} — {r.country}</p>
                      <p className="text-[10px] text-muted mt-0.5">{r.date} · {r.sector}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeContent ? (
              <div className="bg-white border border-border rounded-2xl p-6">
                {viewing && (
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-xs font-bold text-ink">{viewing.business} — {viewing.country}</p>
                      <p className="text-[10px] text-muted">{viewing.date}</p>
                    </div>
                    <button onClick={() => { setViewing(null); setResult(""); }} className="text-xs text-gold hover:underline">
                      New search
                    </button>
                  </div>
                )}
                <GrowthDisplay text={activeContent} loading={loading && !viewing} />
              </div>
            ) : !past.length && (
              <div className="bg-white border border-border rounded-2xl p-12 text-center">
                <p className="text-4xl mb-4">📈</p>
                <p className="font-bold text-ink text-base mb-2">Kwame is ready to find your growth levers</p>
                <p className="text-muted text-sm max-w-xs mx-auto">
                  Tell Kwame what you build and where you are. He&apos;ll search the web and come back with
                  communities, channels, influencers, and B2B buyers — specific to your business.
                </p>
              </div>
            )}

            <div className="bg-deep-green text-ivory rounded-2xl p-6">
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Why growth intel matters</p>
              <p className="text-ivory/80 text-sm leading-relaxed">
                Most African businesses fail not because their product is bad — but because they never
                found their customer. WhatsApp groups with 10,000 buyers exist in every sector.
                Influencers with 500K followers are looking for partnerships. Institutional buyers
                need exactly what you make. Kwame finds them.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-5">
              <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Other agents</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Amara", role: "Research Agent", href: "/agents/amara", desc: "Find funding programs" },
                  { name: "Email Agent", role: "Opportunity Digest", href: "/email", desc: "Personalized email" },
                  { name: "Newsroom", role: "Daily News", href: "/newsroom", desc: "Latest opportunities" },
                  { name: "All Agents", role: "Full roster", href: "/agents", desc: "Meet the team" },
                ].map(({ name, role, href, desc }) => (
                  <Link key={href} href={href}
                    className="border border-border rounded-xl p-3 hover:border-deep-green/30 transition-colors">
                    <p className="text-xs font-bold text-ink">{name}</p>
                    <p className="text-[10px] text-gold font-semibold">{role}</p>
                    <p className="text-[10px] text-muted mt-0.5">{desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
