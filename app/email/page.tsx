"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import { ALL_COUNTRY_PROGRAMS } from "@/lib/data/all-country-programs";

const SECTORS = [
  "Agriculture", "Construction", "Energy / Solar", "Tech / Software", "Healthcare",
  "Logistics / Transport", "Education", "Fashion / Beauty", "Food processing",
  "Finance / Fintech", "Media / Creative", "Tourism", "Manufacturing", "Mining",
];

const STAGES = [
  { id: "idea", label: "Just an idea — haven't started yet" },
  { id: "early", label: "Early stage — under 2 years" },
  { id: "growing", label: "Growing — generating revenue" },
  { id: "established", label: "Established — 5+ years" },
];

const COUNTRIES = ALL_COUNTRY_PROGRAMS.map((p) => `${p.flag} ${p.country}`);

export default function EmailPage() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [sector, setSector] = useState("");
  const [stage, setStage] = useState("");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function generate() {
    if (!country) return;
    setLoading(true);
    setResult("");

    const cleanCountry = country.replace(/^.{2,4}\s/, "");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, gender, country: cleanCountry, sector, stage, goal }),
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
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copy() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const subjectMatch = result.match(/\[SUBJECT:\s*(.+?)\]/);
  const subject = subjectMatch?.[1] || "";
  const body = result.replace(/\[SUBJECT:.*?\]\n?/, "");

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-4">
            EMAIL AGENT
          </div>
          <h1 className="font-display text-4xl font-bold text-ivory mb-4 leading-tight">
            Personalized opportunity digest.<br />Built for you.
          </h1>
          <p className="text-ivory/75 text-lg max-w-2xl leading-relaxed">
            Tell us who you are. Get an email with the top 3 funding opportunities for your country,
            sector, and stage — explained simply, with exactly how to apply.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Form */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-5">Your profile</p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-ink mb-2">Your first name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Fatou, Amara, Kwame"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-2">I am</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "woman", label: "A woman" },
                    { id: "man", label: "A man" },
                  ].map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setGender(id)}
                      className={`py-2.5 px-4 rounded-xl border text-sm font-semibold transition-colors ${
                        gender === id ? "bg-deep-green text-ivory border-deep-green" : "bg-white border-border text-ink hover:border-deep-green"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
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
                <label className="block text-xs font-bold text-ink mb-2">Sector</label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
                >
                  <option value="">Any sector</option>
                  {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-2">Business stage</label>
                <div className="space-y-2">
                  {STAGES.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setStage(id)}
                      className={`w-full text-left py-2.5 px-4 rounded-xl border text-xs font-medium transition-colors ${
                        stage === id ? "bg-deep-green text-ivory border-deep-green" : "bg-white border-border text-ink hover:border-deep-green"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink mb-2">What&apos;s your goal? (optional)</label>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Launch a beauty brand, expand my farm, get a government contract"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <button
                onClick={generate}
                disabled={!country || loading}
                className="w-full bg-deep-green text-ivory font-bold py-4 rounded-2xl text-base hover:bg-mid-green transition-colors disabled:opacity-40"
              >
                {loading ? "Generating your digest..." : "Generate my email →"}
              </button>
            </div>
          </div>

          {/* Result */}
          <div>
            {result ? (
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="bg-ink px-5 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-ivory/60 mb-0.5">Subject line</p>
                    <p className="text-sm font-bold text-ivory">{subject || "Your personalized opportunity digest"}</p>
                  </div>
                  <button
                    onClick={copy}
                    className="text-xs font-bold text-gold hover:underline"
                  >
                    {copied ? "✓ Copied!" : "Copy →"}
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-sm text-ink whitespace-pre-wrap leading-relaxed">
                    {body}
                    {loading && <span className="inline-block w-1.5 h-4 bg-gold animate-pulse align-middle ml-1" />}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-border rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <p className="text-4xl mb-4">✉️</p>
                <p className="font-bold text-ink text-base mb-2">Your digest will appear here</p>
                <p className="text-muted text-sm max-w-xs">
                  Fill in your profile and we&apos;ll generate a personalized email with the top
                  opportunities for you — right now.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-deep-green text-ivory rounded-2xl p-6">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Why personalization matters</p>
          <p className="text-ivory/85 leading-relaxed text-sm">
            A woman starting a beauty brand in Senegal needs DER/FJ, FONGIP, and the Tony Elumelu Foundation.
            A tech founder in Ghana needs GEA, the NYIF equivalent, and CcHUB. A diaspora entrepreneur
            in the UK needs different programs than someone building from Lagos.
            Generic grant lists are useless. Personalized intel is actionable.
          </p>
        </div>
      </div>
    </div>
  );
}
