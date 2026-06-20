"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import Link from "next/link";
import { BUDGET_TIERS, MARKET_GAPS, IMPACT_LEVELS } from "@/lib/data/build-opportunities";

const AFRICAN_COUNTRIES = [
  "Nigeria", "Ghana", "Kenya", "Senegal", "South Africa", "Rwanda", "Morocco",
  "Côte d'Ivoire", "Ethiopia", "Tanzania", "Uganda", "Cameroon", "Mozambique",
  "Zambia", "Zimbabwe", "Tunisia", "Algeria", "Egypt", "Angola", "Botswana",
  "Burkina Faso", "Congo (DRC)", "Guinea", "Mali", "Sierra Leone", "Togo",
];

const LANG_OPTIONS = ["English", "French", "Arabic", "Swahili", "Hausa", "Yoruba", "Igbo", "Amharic", "Wolof", "Kinyarwanda"];

export default function BuildPage() {
  const [budgetTier, setBudgetTier] = useState("");
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [interests, setInterests] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function toggleLang(lang: string) {
    setLanguages((prev) => prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]);
  }

  // Get the known market gaps for the selected country
  const countryGaps = MARKET_GAPS.filter(
    (g) => country && g.country.toLowerCase().includes(country.toLowerCase())
  );

  async function handleAnalyze() {
    if (!country || !budgetTier) return;
    setLoading(true);
    setResult("");

    const tier = BUDGET_TIERS.find((t) => t.label === budgetTier);
    const gaps = countryGaps.map((g) =>
      `• ${g.imported} → Products: ${g.product_ideas.join(", ")}. Local buyers: ${g.local_buyers.slice(0, 2).join(", ")}. Export: ${g.export_channels.slice(0, 2).join(", ")}.`
    ).join("\n");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `You are Alkebulan's Africa Build Advisor. You help Africans — on the continent and in the diaspora — find businesses that serve four levels of purpose:

1. YOURSELF — a real income and path to ownership
2. YOUR COUNTRY — reduce what gets imported, increase what gets made and kept locally
3. YOUR PEOPLE — create jobs, solve real problems, build community wealth
4. YOUR CONTINENT — contribute to African-owned value chains instead of foreign extraction

You know Africa's real market gaps deeply:
- African supermarkets (Shoprite, Carrefour, Auchan, Naivas, Marjane, Spar, Hubmart, MaxMart, Game, Woolworths Food, Pick n Pay, Label'Vie) are filled with imported goods that can and should be made locally
- African export channels include Amazon FBA (US, UK, France, Canada), Etsy, Faire (wholesale), UK African food distributors in Brixton/Peckham/Deptford, Whole Foods supplier programs, iHerb for supplements
- African countries produce world-class raw materials that they export raw and import back as finished products at 5–20× the price: Ghana exports cocoa, Côte d'Ivoire exports cashews raw, Nigeria exports cassava and moringa unprocessed, Kenya exports coffee at commodity prices, Morocco exports argan oil minimally processed, Senegal exports groundnuts and bissap with no value-add
- The largest opportunity in Africa right now is IMPORT SUBSTITUTION — making locally what is currently imported — and VALUE ADDITION — processing what is exported raw into a finished product

Your recommendations must be:
- SPECIFIC: name the actual supermarket chains, actual export platforms, actual buyers
- IMMEDIATE: the first step must be doable this week with the stated budget
- GROUNDED: based on what this country actually produces and what it actually imports
- HONEST: give real startup costs, real timelines, real risks
- IMPACTFUL: explain who benefits beyond just the entrepreneur

Format your response as:

## Your Best 3 Businesses Right Now

For each business:
**Business [1/2/3]: [Name]**
💰 Income for you: [Realistic monthly income at 12 months]
🏳️ Impact on [country]: [What local problem it solves, what import it replaces]
👥 Impact on your people: [Jobs created, community benefit]
🌍 Impact on Africa: [How it builds African ownership vs foreign extraction]

**Why this works with your budget:** [specific explanation for their stated capital]
**Buyers:** [Named actual supermarkets, stores, or export platforms]
**First move this week:** [One specific action, free or near-free, that starts this]
**The risk:** [Single biggest challenge, honest]
**At 12 months:** [What success looks like]

---

## Start This Month (With Almost Nothing)
[One business they can start in under 30 days as a bridge while building toward their main business]

---

## The Bigger Vision (3-5 years)
[What this becomes if they execute well — the full scope of what's possible]`,

          prompt: `Build a business recommendation for this person:

Country: ${country}
Budget right now: ${budgetTier} — ${tier?.description || ""}
Skills and experience: ${skills || "Not specified yet — give general recommendations"}
Languages: ${languages.length > 0 ? languages.join(", ") : "Not specified"}
Interests: ${interests || "Open to any high-opportunity sector"}
Age: ${age || "Not specified"}

Known market gaps in ${country} that this person could address:
${gaps || `Research the most important import substitution and value-addition opportunities in ${country} — what does ${country} produce that it exports raw or imports back processed?`}

Key context:
- ${budgetTier} budget means: ${tier?.archetypes.join(", ") || "service-based or small production"}
- Africa's biggest opportunity right now: taking what Africa grows/makes → processing it → selling it to named African supermarkets AND exporting to diaspora markets (Amazon FBA, UK African food shops, French supermarkets)
- Every recommendation must name actual buyers: specific supermarket chains in ${country}, specific export platforms (Amazon FBA France, UK Brixton Market distributors, etc.)
- Every recommendation must include: what this replaces on a supermarket shelf that is currently imported

Give 3 specific businesses they can start with their stated budget. Make it feel like advice from someone who has actually built a business in Africa.`,
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
            AFRICA BUILD ADVISOR
          </div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            What can you build right now?
          </h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            Walk into any African supermarket. The shelves are full of imported goods made
            from African raw materials. Rice from Asia. Shea cream from France. Cashew snacks
            from Vietnam. The opportunity is in reversing that.
          </p>
        </div>

        {/* 4 impact levels */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {IMPACT_LEVELS.map((level) => (
            <div key={level.id} className="bg-white border border-border rounded-xl p-3 text-center">
              <div className="text-xl mb-1">{level.icon}</div>
              <p className="text-xs font-bold text-ink">{level.label}</p>
              <p className="text-[10px] text-muted leading-snug mt-0.5">{level.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted text-center mb-8">
          Every business we recommend serves all four. Not just your income — your country&apos;s independence.
        </p>

        {/* ── STEP 1: BUDGET ── */}
        <div className="bg-white border border-border rounded-2xl p-6 mb-5">
          <h2 className="font-display text-base font-bold text-ink mb-1">
            How much do you have right now?
          </h2>
          <p className="text-xs text-muted mb-5">Be honest. We match you to what&apos;s real for your situation, not what sounds good.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {BUDGET_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setBudgetTier(tier.label)}
                className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${
                  budgetTier === tier.label
                    ? "bg-deep-green text-ivory border-deep-green"
                    : "bg-warm-ivory border-border hover:border-gold"
                }`}
              >
                <span className="text-xl flex-shrink-0">{tier.emoji}</span>
                <div>
                  <p className={`text-sm font-bold ${budgetTier === tier.label ? "text-ivory" : "text-ink"}`}>
                    {tier.label}
                  </p>
                  <p className={`text-[10px] leading-snug mt-0.5 ${budgetTier === tier.label ? "text-ivory/70" : "text-muted"}`}>
                    {tier.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── STEP 2: WHERE + WHO ── */}
        <div className="bg-white border border-border rounded-2xl p-6 mb-5">
          <h2 className="font-display text-base font-bold text-ink mb-5">Where are you and what can you do?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your country</label>
              <select value={country} onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold">
                <option value="">Select country</option>
                {AFRICAN_COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                <option value="UK diaspora">UK — targeting Africa</option>
                <option value="US diaspora">USA — targeting Africa</option>
                <option value="France diaspora">France — targeting Africa</option>
                <option value="Canada diaspora">Canada — targeting Africa</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your age</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 24"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your skills & experience</label>
              <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)}
                placeholder="e.g. cooking, sewing, IT, driving, nursing, accounting..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">What you care about / enjoy</label>
              <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)}
                placeholder="e.g. food, fashion, helping farmers, tech, children..."
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
            </div>
          </div>

          <div>
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
        </div>

        {/* Show known gaps for selected country */}
        {countryGaps.length > 0 && (
          <div className="bg-gold/8 border border-gold/20 rounded-2xl p-5 mb-5">
            <p className="text-xs font-bold text-gold-dark uppercase tracking-wide mb-3">
              Known gaps in {country} — what&apos;s imported that you could build locally
            </p>
            <div className="space-y-2">
              {countryGaps.map((gap, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-gold-dark text-xs font-bold flex-shrink-0">→</span>
                  <p className="text-xs text-warm-brown leading-snug">{gap.imported}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleAnalyze}
          disabled={!country || !budgetTier || loading}
          className="w-full bg-deep-green text-ivory font-bold py-4 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50 text-base"
        >
          {loading ? "Finding your best businesses..." : "Show me what I can build →"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 bg-white border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl font-bold text-ink">Your build plan</h2>
              <button
                onClick={() => { setResult(""); }}
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                Start over
              </button>
            </div>

            <div className="text-sm text-ink whitespace-pre-wrap leading-relaxed">
              {result}
              {loading && <span className="inline-block w-1.5 h-4 bg-gold ml-1 animate-pulse align-middle" />}
            </div>

            {!loading && (
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Next step</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link href="/path"
                    className="flex items-center justify-center gap-2 bg-deep-green text-ivory text-sm font-semibold py-3 rounded-xl hover:bg-mid-green transition-colors text-center">
                    Build my roadmap →
                  </Link>
                  <Link href="/dashboard"
                    className="flex items-center justify-center gap-2 border border-deep-green text-deep-green text-sm font-semibold py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors text-center">
                    Find funding for this
                  </Link>
                  <Link href="/procurement"
                    className="flex items-center justify-center gap-2 border border-border text-ink text-sm font-semibold py-3 rounded-xl hover:border-gold transition-colors text-center">
                    Find government buyers
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Why this matters — shown before result */}
        {!result && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-deep-green text-ivory rounded-2xl p-6">
              <p className="text-gold text-xs font-bold uppercase tracking-wide mb-3">The real gap</p>
              <p className="text-sm text-ivory/80 leading-relaxed">
                Africa produces cocoa, cashews, moringa, shea, hibiscus, cassava, leather, rice.
                Africa imports chocolate, cashew snacks, supplements, cosmetics, drinks, flour,
                handbags, and packaged rice — mostly from Europe, Asia, and North America.
              </p>
              <p className="text-sm text-ivory/80 leading-relaxed mt-3">
                The continent is selling raw materials at $0.50/kg and buying them back
                as finished products at $15/kg. That gap is where African businesses live.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { flag: "🇬🇭", text: "Ghana produces cocoa. Swiss companies make the chocolate. Ghanaian artisan chocolate now sells for $8/bar in London." },
                { flag: "🇸🇳", text: "Senegal grows hibiscus. French companies bottle the juice. A bottled bissap drink can sell in Auchan Dakar today." },
                { flag: "🇳🇬", text: "Nigeria produces the world's most cassava. UK health stores sell cassava flour at £8/kg. Made in Oyo State." },
                { flag: "🇰🇪", text: "Kenya grows Nyeri AA coffee. Dutch auctions set the price. Direct-to-US subscriptions change who owns the margin." },
              ].map(({ flag, text }) => (
                <div key={flag} className="bg-white border border-border rounded-xl p-3.5 flex gap-3">
                  <span className="text-lg">{flag}</span>
                  <p className="text-xs text-muted leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
