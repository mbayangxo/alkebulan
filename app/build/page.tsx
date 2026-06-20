"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import Link from "next/link";

export default function BuildPage() {
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState("");
  const [budget, setBudget] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [interests, setInterests] = useState("");
  const [education, setEducation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const LANG_OPTIONS = ["English", "French", "Arabic", "Swahili", "Hausa", "Yoruba", "Igbo", "Amharic", "Zulu", "Wolof"];

  function toggleLang(lang: string) {
    setLanguages((prev) => prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]);
  }

  async function handleAnalyze() {
    if (!country) return;
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `You are Alkebulan's Business Opportunity Matcher. You help people in Africa and the African diaspora identify the highest-potential business to start given their specific context: country, skills, budget, languages, interests, and local market conditions.

Your recommendations are grounded in:
- Real opportunity density: which sectors have the most unfulfilled demand in this country right now
- Funding availability: which sectors have the most grant, loan, and accelerator funding available
- Government priority sectors: which industries have the most government procurement and support
- Competitive advantage: which businesses match this person's specific skills and languages
- Capital efficiency: which businesses can be started with their stated budget

You are NOT generic. You don't say "try agriculture or tech." You say "Start a cold-chain logistics business connecting smallholder cassava farmers in Eastern Nigeria to Lagos wholesalers, using your logistics experience and Igbo language advantage." Then you explain exactly why.`,
          prompt: `Recommend the best business to start for this person:

Country: ${country}
Skills and experience: ${skills || "Not specified"}
Starting budget: ${budget || "Very limited"}
Languages spoken: ${languages.length > 0 ? languages.join(", ") : "Not specified"}
Personal interests: ${interests || "Open"}
Education/background: ${education || "Not specified"}

Provide:
1. Top 3 Business Recommendations: For each, give:
   - Business name and one-line description
   - Why it's right for THIS person in THIS country (use their specific skills/languages/budget)
   - Opportunity density score: how much unmet demand exists right now (1–10)
   - Funding availability: what grants/loans exist for this business type in ${country}
   - Realistic startup cost and first-year revenue potential
   - First competitor they should study

2. The #1 Recommendation: Pick one and go deep:
   - Exactly what the business does (service/product, who pays, how you get paid)
   - Why ${country} specifically is a great place for this business right now
   - The single biggest risk and how to mitigate it
   - What success looks like at 12 months

3. Fast-Start Option: A business they could start this month with near-zero capital as a bridge while building toward the #1 recommendation

4. What to Search for Next: 3 specific search terms to research this business in ${country} (government programs, market data, competitor names)`,
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
      setResult("Error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-4">
            WHAT SHOULD I BUILD?
          </div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            Find the right business for you
          </h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            Most people know they want to start a business. Few know which one.
            Tell us who you are and where you are — we match you to the highest-opportunity
            business you can realistically build, based on funding density, market gaps, and your specific skills.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white border border-border rounded-2xl p-6 mb-6">
          <h2 className="font-display text-lg font-bold text-ink mb-5">Tell us about yourself</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Country you live in</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Nigeria, Senegal, UK (targeting Ghana)"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Starting budget</label>
              <select value={budget} onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold">
                <option value="">Select budget</option>
                <option>Under $100 — nearly nothing</option>
                <option>$100–$500</option>
                <option>$500–$2,000</option>
                <option>$2,000–$10,000</option>
                <option>$10,000–$50,000</option>
                <option>Over $50,000</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your skills & experience</label>
              <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g. 5 years accounting, cooking, sewing, driving, IT support..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Education / background</label>
              <input type="text" value={education} onChange={(e) => setEducation(e.target.value)}
                placeholder="e.g. BSc Nursing, trade school electrician, self-taught..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">What you enjoy / interests</label>
              <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)}
                placeholder="e.g. fashion, food, helping people, technology, farming, design..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
            </div>
          </div>

          {/* Languages */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Languages you speak</label>
            <div className="flex flex-wrap gap-2">
              {LANG_OPTIONS.map((lang) => (
                <button key={lang} onClick={() => toggleLang(lang)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                    languages.includes(lang)
                      ? "bg-deep-green text-ivory border-deep-green"
                      : "bg-white border-border text-ink hover:border-gold"
                  }`}>
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleAnalyze} disabled={!country || loading}
            className="w-full bg-deep-green text-ivory font-bold py-3.5 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50">
            {loading ? "Finding your best business..." : "Find my best business →"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="bg-white border border-border rounded-2xl p-6 mb-8">
            <h2 className="font-display text-xl font-bold text-ink mb-4">Your Business Match</h2>
            <div className="text-sm text-ink whitespace-pre-wrap leading-relaxed">
              {result}
              {loading && <span className="inline-block w-1.5 h-4 bg-gold ml-1 animate-pulse align-middle" />}
            </div>
            {!loading && (
              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-3">
                <Link href="/path"
                  className="bg-deep-green text-ivory text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-mid-green transition-colors">
                  Build my roadmap →
                </Link>
                <Link href="/dashboard"
                  className="border border-deep-green text-deep-green text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors">
                  Find funding for this business
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
