"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import Link from "next/link";
import { BUDGET_TIERS, MARKET_GAPS, IMPACT_LEVELS } from "@/lib/data/build-opportunities";
import {
  BRAND_COMPARISONS,
  EXTRACTION_STATS,
  CREATIVE_PRODUCTS,
  WASTE_OPPORTUNITIES,
  DISTRIBUTION_PLAYBOOKS,
} from "@/lib/data/brand-intelligence";
import { COUNTRY_TRADE_PROFILES } from "@/lib/data/import-export-gaps";
import { BRAND_DEEP_DIVES } from "@/lib/data/brand-deep-dives";

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
  const [activeDistrib, setActiveDistrib] = useState(0);
  const [activeExtraction, setActiveExtraction] = useState(0);

  function toggleLang(lang: string) {
    setLanguages((prev) => prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]);
  }

  const countryGaps = MARKET_GAPS.filter(
    (g) => country && g.country.toLowerCase().includes(country.toLowerCase())
  );

  const countryBrands = BRAND_COMPARISONS.filter(
    (b) => country && b.african_countries.some((c) => c.toLowerCase().includes(country.toLowerCase()) || country.toLowerCase().includes(c.toLowerCase()))
  );

  const countryCreative = CREATIVE_PRODUCTS.filter(
    (p) => country && p.countries.some((c) => c.toLowerCase().includes(country.toLowerCase()) || country.toLowerCase().includes(c.toLowerCase()))
  );

  const countryWaste = WASTE_OPPORTUNITIES.filter(
    (w) => country && w.countries.some((c) => c.toLowerCase().includes(country.toLowerCase()) || country.toLowerCase().includes(c.toLowerCase()))
  );

  const countryTradeProfile = COUNTRY_TRADE_PROFILES.find(
    (p) => country && p.country.toLowerCase().includes(country.toLowerCase())
  );

  const countryBrandDive = BRAND_DEEP_DIVES.find(
    (d) => country && d.africa_product_ideas.some(() => true) &&
      (country.toLowerCase().includes("morocco") ? d.id === "josie-maran" :
       country.toLowerCase().includes("ghana") || country.toLowerCase().includes("nigeria") || country.toLowerCase().includes("burkina") ? d.id === "the-body-shop-shea" :
       country.toLowerCase().includes("kenya") || country.toLowerCase().includes("ethiopia") ? d.id === "starbucks-ethiopian-coffee" :
       d.id === "josie-maran")
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
          system: `You are Alkebulan's Africa Build Advisor. You help Africans find businesses that serve four purposes: income for themselves, reducing imports for their country, jobs for their people, and building African ownership chains on the continent.

You know Africa's real market gaps deeply:
- African supermarkets (Shoprite, Carrefour, Auchan, Naivas, Marjane, Spar, Hubmart, MaxMart, Game, Woolworths Food, Pick n Pay, Label'Vie) sell imported goods that should be made locally
- African export channels: Amazon FBA (US, UK, France, Canada), TikTok Shop, Etsy, Faire wholesale, UK African food distributors (Brixton, Peckham, Deptford), Whole Foods supplier programs, iHerb for supplements
- The biggest opportunity: IMPORT SUBSTITUTION and VALUE ADDITION — taking what Africa grows and selling it processed, branded, and packaged instead of raw

PRICING REALITY — do not inflate costs. African entrepreneurs have a massive cost advantage:
- Equipment from local suppliers or Alibaba is 3–10× cheaper than what Western business schools quote
- Labour costs in Africa are 5–20× lower than Europe/US — this IS the competitive weapon
- A small yogurt machine locally: $800–$2,000. A basic oil press: $500–$1,500. A packaging sealer: $200–$800.
- Raw materials: $0/kg when you grow them yourself, $0.30–$3/kg when you source locally
- The West deliberately makes entrepreneurship sound expensive to discourage competition. It is not. A shea butter business in Kumasi costs $300 to start, not $30,000.

COUNTERACT THE MIND GAME: Explain that Western brands charge $40 for products made from $0.50 of African raw material. The margin exists because of branding, packaging, and access — not because of some technical magic. Africans already have the raw material advantage. They need packaging, a name, and a distribution channel.

Creative product ideas to consider:
- Luxury leather goods (Kano leather, Ethiopian hide): bags $80–$400 each, shoes, belts, corporate accessories
- Frozen food brands (jollof rice packs, suya, plantain, fufu, egusi) for diaspora supermarkets
- Ice cream and frozen desserts from local flavours (baobab, tamarind, hibiscus, coconut)
- Fermented dairy products (yogurt, cheese, kefir) from Fulani milk
- Bamboo products (toothbrushes, textiles, charcoal)
- Activated charcoal from shea shells, palm kernel shells
- Mushroom farming on coffee grounds and agricultural waste
- Natural dyes and textile ingredients from local plants

Format your response as:

## Your Best 3 Businesses Right Now

For each business:
**Business [1/2/3]: [Name]**
💰 Income for you: [Realistic monthly income at 12 months — with honest numbers]
🏳️ Impact on [country]: [What import it replaces, what stays in the country]
👥 Impact on your people: [Jobs, farmers supported, community benefit]
🌍 Impact on Africa: [How it builds African ownership]

**Real cost to start:** [With African prices and local sourcing — not inflated Western estimates]
**What the West charges for this:** [The brand comparison — what they sell your raw material for]
**Your cost advantage:** [Why African production costs beat Western brands structurally]
**Buyers:** [Named actual supermarkets, stores, or export platforms]
**First move this week:** [One specific action, free or near-free, this week]
**The risk:** [One honest challenge]
**At 12 months:** [What success looks like]

---

## Start This Month (With Almost Nothing)
[One business to start in under 30 days as a bridge]

---

## The Bigger Vision (3–5 years)
[What this becomes if executed well — the full scope of what's possible]`,

          prompt: `Build a business recommendation for this person:

Country: ${country}
Budget right now: ${budgetTier} — ${tier?.description || ""}
Skills and experience: ${skills || "Not specified — give general recommendations"}
Languages: ${languages.length > 0 ? languages.join(", ") : "Not specified"}
Interests: ${interests || "Open to any high-opportunity sector"}
Age: ${age || "Not specified"}

Known market gaps in ${country}:
${gaps || `Research the most important import substitution opportunities in ${country} — what does ${country} produce that it exports raw or imports back processed?`}

Key context:
- ${budgetTier} budget means: ${tier?.archetypes?.join(", ") || "service-based or small production"}
- Use African prices, not Western NGO or textbook prices. Equipment, labor, raw materials, land — all cheaper in Africa.
- Every recommendation must name actual local buyers (supermarket chains) AND export channels (Amazon FBA, TikTok Shop, Etsy, UK diaspora shops)
- Include luxury goods and frozen food if relevant to the country's resources
- Explain the price gap: what they currently pay $40 for and what it costs to make in ${country}

Give 3 specific businesses. Make it feel like advice from someone who has actually built a business in Africa, not a consultant in London.`,
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
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-4">
            AFRICA BUILD ADVISOR
          </div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            What can you build right now?
          </h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            Walk into any African supermarket. The shelves are full of imported goods
            made from African raw materials — processed in Europe, Asia, or America, sold
            back to Africa at 10–100× the farm price. The opportunity is in reversing that.
          </p>
        </div>

        {/* ── EXTRACTION STATS ── */}
        <div className="mb-8">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">
            What the world earns from Africa&apos;s raw materials
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {EXTRACTION_STATS.map((stat, i) => (
              <button
                key={stat.commodity}
                onClick={() => setActiveExtraction(i)}
                className={`flex-shrink-0 w-48 p-4 rounded-xl border text-left transition-all ${
                  activeExtraction === i
                    ? "bg-deep-green text-ivory border-deep-green"
                    : "bg-white border-border hover:border-gold"
                }`}
              >
                <p className={`text-xs font-bold mb-1 ${activeExtraction === i ? "text-gold" : "text-gold-dark"}`}>
                  {stat.commodity}
                </p>
                <p className={`text-[10px] leading-snug ${activeExtraction === i ? "text-ivory/70" : "text-muted"}`}>
                  {stat.africa_produces}
                </p>
                <div className={`mt-2 pt-2 border-t ${activeExtraction === i ? "border-ivory/20" : "border-border"}`}>
                  <p className={`text-[10px] font-semibold ${activeExtraction === i ? "text-ivory" : "text-ink"}`}>
                    Africa earns: {stat.africa_earns}
                  </p>
                  <p className={`text-[10px] ${activeExtraction === i ? "text-gold" : "text-red-600"}`}>
                    World earns: {stat.global_revenue}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Expanded extraction detail */}
          <div className="mt-3 bg-deep-green text-ivory rounded-2xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-gold text-xs font-bold uppercase tracking-wide mb-1">{EXTRACTION_STATS[activeExtraction].commodity}</p>
                <p className="text-sm text-ivory/90 leading-relaxed">{EXTRACTION_STATS[activeExtraction].the_crime}</p>
              </div>
            </div>
            <div className="border-t border-ivory/10 pt-3 mt-3">
              <p className="text-xs font-bold text-gold mb-1">The reversal</p>
              <p className="text-xs text-ivory/80 leading-relaxed">{EXTRACTION_STATS[activeExtraction].the_reversal}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-ivory/5 rounded-lg p-3">
                <p className="text-[10px] text-ivory/50 mb-0.5">Africa earns</p>
                <p className="text-xs font-bold text-ivory">{EXTRACTION_STATS[activeExtraction].africa_earns}</p>
              </div>
              <div className="bg-ivory/5 rounded-lg p-3">
                <p className="text-[10px] text-ivory/50 mb-0.5">Global industry</p>
                <p className="text-xs font-bold text-gold">{EXTRACTION_STATS[activeExtraction].global_revenue}</p>
              </div>
              <div className="bg-ivory/5 rounded-lg p-3">
                <p className="text-[10px] text-ivory/50 mb-0.5">Who profits</p>
                <p className="text-[10px] text-ivory/80 leading-tight">{EXTRACTION_STATS[activeExtraction].who_profits}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 impact levels */}
        <div className="grid grid-cols-4 gap-3 mb-2">
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
          <p className="text-xs text-muted mb-5">
            Be honest. And remember — African prices are not Western prices.
            The world makes you think you need $50,000 to start. You don&apos;t.
          </p>
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

        {/* ── BRAND COMPARISONS (country-filtered) ── */}
        {countryBrands.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">
              What global brands earn from {country}&apos;s raw materials
            </p>
            <div className="space-y-3">
              {countryBrands.map((brand) => (
                <div key={brand.raw_material} className="bg-white border border-border rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-display text-sm font-bold text-ink">{brand.raw_material}</p>
                      <p className="text-xs text-muted mt-0.5">{brand.africa_earns}</p>
                    </div>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {brand.multiplier}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {brand.global_brands.map((b) => (
                      <div key={b.brand} className="bg-warm-ivory rounded-lg p-2.5">
                        <p className="text-[10px] font-bold text-ink">{b.brand}</p>
                        <p className="text-[10px] text-muted leading-tight">{b.product}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-bold text-red-600">{b.retail_price}</span>
                          <span className="text-[10px] text-muted">{b.per_kg}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-deep-green/5 border border-deep-green/20 rounded-xl p-3">
                    <p className="text-[10px] font-bold text-deep-green mb-0.5">Your play</p>
                    <p className="text-xs text-ink">{brand.your_product}</p>
                    <p className="text-xs font-bold text-deep-green mt-1">{brand.your_price_range}</p>
                    <p className="text-[10px] text-muted mt-0.5">{brand.market_size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── MARKET GAPS ── */}
        {countryGaps.length > 0 && (
          <div className="bg-gold/8 border border-gold/20 rounded-2xl p-5 mb-5">
            <p className="text-xs font-bold text-gold-dark uppercase tracking-wide mb-3">
              What {country} imports that you could build locally
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

        {/* ── IMPORT/EXPORT REALITY ── */}
        {countryTradeProfile && (
          <div className="mb-5 space-y-3">
            <p className="text-xs font-bold text-muted uppercase tracking-wide">
              The import problem — what {country} buys that it shouldn&apos;t have to
            </p>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div>
                  <p className="text-[10px] text-muted mb-0.5">Total imports</p>
                  <p className="text-sm font-bold text-ink">{countryTradeProfile.total_imports_usd}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted mb-0.5">Total exports</p>
                  <p className="text-sm font-bold text-deep-green">{countryTradeProfile.total_exports_usd}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted mb-0.5">Export/import ratio</p>
                  <p className="text-sm font-bold text-red-600">{countryTradeProfile.export_to_import_ratio}</p>
                </div>
              </div>
              <p className="text-xs text-ink mb-3 leading-relaxed font-medium">{countryTradeProfile.import_dependency_summary}</p>
              <div className="space-y-2">
                {countryTradeProfile.what_we_import_that_we_shouldnt.slice(0, 4).map((item) => (
                  <div key={item.product} className="bg-white rounded-xl p-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-xs font-bold text-ink">{item.product}</p>
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full flex-shrink-0">{item.annual_import_value}</span>
                    </div>
                    <p className="text-[10px] text-warm-brown leading-snug mb-1">{item.why_absurd}</p>
                    <p className="text-[10px] font-semibold text-deep-green">Opportunity: {item.opportunity}</p>
                  </div>
                ))}
              </div>
            </div>

            {countryTradeProfile.top_raw_exports.length > 0 && (
              <div className="bg-gold/8 border border-gold/20 rounded-2xl p-5">
                <p className="text-xs font-bold text-gold-dark mb-3">What {country} exports raw — and could be processing instead</p>
                <div className="space-y-2">
                  {countryTradeProfile.top_raw_exports.map((exp) => (
                    <div key={exp.product} className="bg-white rounded-xl p-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-xs font-bold text-ink">{exp.product}</p>
                        <span className="text-[10px] text-muted flex-shrink-0">{exp.annual_value}/yr</span>
                      </div>
                      <p className="text-[10px] text-muted">Processed by: {exp.who_processes_it}</p>
                      <p className="text-[10px] text-muted">Processed value: {exp.processed_value}</p>
                      <p className="text-[10px] font-semibold text-red-600 mt-0.5 leading-snug">{exp.the_loss}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-deep-green text-ivory rounded-xl p-4">
              <p className="text-xs font-bold text-gold mb-1">The verdict</p>
              <p className="text-sm text-ivory/90 leading-relaxed">{countryTradeProfile.the_verdict}</p>
            </div>
          </div>
        )}

        {/* ── BRAND DEEP DIVE ── */}
        {countryBrandDive && (
          <div className="mb-5">
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">
              Who is making money from your country&apos;s raw materials right now
            </p>
            <div className="bg-white border border-border rounded-2xl overflow-hidden">
              <div className="bg-red-900 text-ivory p-5">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{countryBrandDive.brand_name}</p>
                <p className="text-xl font-display font-bold mb-1">Est. {countryBrandDive.annual_revenue_est}/year</p>
                <p className="text-ivory/70 text-xs">Founded {countryBrandDive.founded} by {countryBrandDive.founder.name} ({countryBrandDive.founder.from})</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Who they are</p>
                  <p className="text-sm text-ink leading-relaxed">{countryBrandDive.founder.background}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">What they built</p>
                  <p className="text-sm text-ink leading-relaxed">{countryBrandDive.elevator_pitch}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-red-50 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-red-600 mb-0.5">Africa earns</p>
                    <p className="text-xs font-bold text-red-800">{countryBrandDive.what_africa_earns}</p>
                  </div>
                  <div className="bg-warm-ivory rounded-xl p-3 text-center">
                    <p className="text-[10px] text-muted mb-0.5">They earn</p>
                    <p className="text-xs font-bold text-ink">{countryBrandDive.what_they_earn}</p>
                  </div>
                  <div className="bg-deep-green/5 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-deep-green mb-0.5">Multiplier</p>
                    <p className="text-xs font-bold text-deep-green">{countryBrandDive.multiplier}</p>
                  </div>
                </div>
                <div className="bg-deep-green text-ivory rounded-xl p-4">
                  <p className="text-gold text-xs font-bold mb-1">The friend take</p>
                  <p className="text-sm text-ivory/90 leading-relaxed">{countryBrandDive.the_friend_take}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-ink mb-2">What you can build instead</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {countryBrandDive.africa_product_ideas.map((idea, i) => (
                      <div key={i} className="flex gap-2 text-xs text-ink bg-warm-ivory rounded-lg p-2.5">
                        <span className="text-gold flex-shrink-0">→</span>
                        <span>{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── CREATIVE PRODUCT IDEAS ── */}
        {countryCreative.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">
              Unexpected things you can make — products no one is building yet in {country}
            </p>
            <div className="space-y-4">
              {countryCreative.slice(0, 3).map((item) => (
                <div key={item.raw_material} className="bg-white border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-xs font-bold text-ink">{item.raw_material}</p>
                    <span className="text-[10px] text-muted">— beyond {item.obvious_product}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.surprising_products.map((p) => (
                      <div key={p.name} className={`rounded-xl p-3 border ${
                        p.difficulty === "Easy" ? "bg-deep-green/5 border-deep-green/20" :
                        p.difficulty === "Medium" ? "bg-gold/5 border-gold/20" :
                        "bg-warm-ivory border-border"
                      }`}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-xs font-bold text-ink leading-tight">{p.name}</p>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                            p.difficulty === "Easy" ? "bg-deep-green text-ivory" :
                            p.difficulty === "Medium" ? "bg-gold text-deep-green" :
                            "bg-warm-brown/20 text-warm-brown"
                          }`}>{p.difficulty}</span>
                        </div>
                        <p className="text-[10px] text-muted leading-snug mb-1.5">{p.why_interesting}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] text-muted">{p.market}</p>
                          <p className="text-xs font-bold text-deep-green">{p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ANALYZE BUTTON ── */}
        <button
          onClick={handleAnalyze}
          disabled={!country || !budgetTier || loading}
          className="w-full bg-deep-green text-ivory font-bold py-4 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50 text-base mb-5"
        >
          {loading ? "Finding your best businesses..." : "Show me what I can build →"}
        </button>

        {/* ── AI RESULT ── */}
        {result && (
          <div className="bg-white border border-border rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl font-bold text-ink">Your build plan</h2>
              <button onClick={() => setResult("")} className="text-xs text-muted hover:text-ink transition-colors">
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
                    className="flex items-center justify-center bg-deep-green text-ivory text-sm font-semibold py-3 rounded-xl hover:bg-mid-green transition-colors text-center">
                    Build my roadmap →
                  </Link>
                  <Link href="/dashboard"
                    className="flex items-center justify-center border border-deep-green text-deep-green text-sm font-semibold py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors text-center">
                    Find funding for this
                  </Link>
                  <Link href="/procurement"
                    className="flex items-center justify-center border border-border text-ink text-sm font-semibold py-3 rounded-xl hover:border-gold transition-colors text-center">
                    Find government buyers
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── DISTRIBUTION PLAYBOOKS ── */}
        <div className="mb-8">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">
            How to sell it — step-by-step distribution guides
          </p>
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            {/* Tab headers */}
            <div className="flex border-b border-border overflow-x-auto scrollbar-hide">
              {DISTRIBUTION_PLAYBOOKS.map((pb, i) => (
                <button
                  key={pb.channel}
                  onClick={() => setActiveDistrib(i)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors ${
                    activeDistrib === i
                      ? "border-deep-green text-deep-green"
                      : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  <span>{pb.icon}</span> {pb.channel}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {DISTRIBUTION_PLAYBOOKS.map((pb, i) => (
              <div key={pb.channel} className={activeDistrib === i ? "block" : "hidden"}>
                <div className="p-5">
                  <p className="text-sm font-semibold text-ink mb-1">{pb.tagline}</p>

                  <div className="grid grid-cols-3 gap-3 my-4">
                    <div className="bg-warm-ivory rounded-xl p-3">
                      <p className="text-[10px] text-muted mb-0.5">Reach</p>
                      <p className="text-xs font-semibold text-ink">{pb.reach}</p>
                    </div>
                    <div className="bg-warm-ivory rounded-xl p-3">
                      <p className="text-[10px] text-muted mb-0.5">Your margin</p>
                      <p className="text-xs font-semibold text-deep-green">{pb.margin}</p>
                    </div>
                    <div className="bg-warm-ivory rounded-xl p-3">
                      <p className="text-[10px] text-muted mb-0.5">Start cost</p>
                      <p className="text-xs font-semibold text-ink">{pb.start_cost}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-ink mb-2">Best for</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pb.best_for.map((b) => (
                        <span key={b} className="text-[10px] px-2 py-0.5 bg-gold/10 text-gold-dark rounded-full font-medium">{b}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <p className="text-xs font-bold text-ink">Step-by-step</p>
                    {pb.steps.map((step) => (
                      <div key={step.step} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-deep-green text-ivory text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-ink">{step.action}</p>
                          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                            <span className="text-[10px] text-deep-green">{step.where}</span>
                            <span className="text-[10px] text-muted">{step.cost}</span>
                            <span className="text-[10px] text-muted">{step.time}</span>
                          </div>
                          {step.tip && (
                            <p className="text-[10px] text-warm-brown mt-1 leading-snug">
                              <span className="font-semibold">Tip: </span>{step.tip}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-deep-green/5 border border-deep-green/20 rounded-xl p-4 mb-4">
                    <p className="text-[10px] font-bold text-deep-green mb-1.5">Do this first (today)</p>
                    <p className="text-xs text-ink leading-relaxed">{pb.first_action}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-ink mb-2">Pro tips</p>
                    <ul className="space-y-1.5">
                      {pb.pro_tips.map((tip) => (
                        <li key={tip} className="flex gap-2 text-xs text-muted">
                          <span className="text-gold flex-shrink-0 mt-0.5">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WASTE TO WEALTH ── */}
        {(countryWaste.length > 0 || !country) && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-muted uppercase tracking-wide">
                Waste to wealth — products from what gets thrown away
              </p>
              {!country && (
                <p className="text-[10px] text-muted">Select a country to filter</p>
              )}
            </div>
            <div className="space-y-4">
              {(country ? countryWaste : WASTE_OPPORTUNITIES.slice(0, 3)).map((waste) => (
                <div key={waste.waste_stream} className="bg-white border border-border rounded-2xl p-5">
                  <div className="mb-3">
                    <p className="font-display text-sm font-bold text-ink">{waste.waste_stream}</p>
                    <p className="text-xs text-muted mt-0.5">{waste.source}</p>
                    <p className="text-xs text-warm-brown mt-1 leading-snug">{waste.african_context}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {waste.products.map((product) => (
                      <div key={product.name} className="rounded-xl border border-border p-3">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <p className="text-xs font-bold text-ink">{product.name}</p>
                          <span className="text-xs font-bold text-deep-green flex-shrink-0">{product.price}</span>
                        </div>
                        <p className="text-[10px] text-muted mb-2">{product.market}</p>
                        <div className="flex flex-wrap gap-2">
                          <div className="text-[10px] bg-warm-ivory px-2 py-1 rounded-lg">
                            <span className="font-semibold text-ink">Equipment: </span>
                            <span className="text-muted">{product.equipment} · {product.equipment_cost}</span>
                          </div>
                          <div className="text-[10px] bg-warm-ivory px-2 py-1 rounded-lg">
                            <span className="font-semibold text-ink">Search Alibaba: </span>
                            <span className="text-muted italic">&quot;{product.alibaba_search}&quot;</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gold/5 border border-gold/20 rounded-xl p-3">
                    <p className="text-[10px] font-bold text-gold-dark mb-0.5">Real example</p>
                    <p className="text-xs text-warm-brown leading-snug">{waste.real_example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── THE MIND GAME ── */}
        {!result && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-deep-green text-ivory rounded-2xl p-6">
              <p className="text-gold text-xs font-bold uppercase tracking-wide mb-3">The mind game they play</p>
              <p className="text-sm text-ivory/80 leading-relaxed">
                The world makes African entrepreneurs think manufacturing is expensive.
                It is not. A basic oil press costs $500–$1,500 locally — not $15,000.
                A yogurt machine costs $800–$2,000. A packaging sealer: $200–$800.
              </p>
              <p className="text-sm text-ivory/80 leading-relaxed mt-3">
                Your raw material is often free or near-free. Your labour is the
                cheapest on Earth. Your land is affordable. You have every structural
                advantage — except the confidence to start.
              </p>
              <div className="mt-4 pt-4 border-t border-ivory/10">
                <p className="text-xs font-bold text-gold mb-1">The cost advantage is real</p>
                <p className="text-xs text-ivory/70">
                  The Body Shop pays $5/kg for shea. You pay $0.30/kg.
                  They charge $28 for 380ml. At that margin, you could sell for $12 and
                  still make more profit than them proportionally.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { flag: "🇬🇭", text: "Ghana produces cocoa. Swiss companies make the chocolate and earn 18× more per kg. Ghanaian artisan chocolate now sells for $8–$25/bar in London — made in Accra." },
                { flag: "🇸🇳", text: "Senegal grows hibiscus. A bottled bissap drink sells in Auchan Dakar today. Stash Tea sells hibiscus from Senegal at $222/kg in the US. You can sell for $90/kg and still outsell them on story." },
                { flag: "🇳🇬", text: "Nigeria grows the world's most cassava. UK health stores sell cassava flour at £8/kg. Kano leather has a 700-year heritage. Luxury bags made in Nigeria could retail at $150–$400 in London." },
                { flag: "🇰🇪", text: "Kenya grows Nyeri AA coffee. Starbucks sells it as 'Reserve' at $72/kg. A Kenyan direct-to-consumer brand on Shopify + Amazon could sell it at $52/kg and keep most of the margin." },
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
