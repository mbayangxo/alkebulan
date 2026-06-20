"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import { useLocale } from "@/app/components/locale-context";
import { langInstruction } from "@/lib/locale";
import Link from "next/link";

const LIFE_GOALS = [
  { id: "house", emoji: "🏠", label: "Build / buy my mother a house" },
  { id: "income", emoji: "💰", label: "Make a specific monthly income" },
  { id: "freedom", emoji: "✈️", label: "Financial freedom — stop working for someone else" },
  { id: "family", emoji: "👨‍👩‍👧", label: "Provide fully for my family" },
  { id: "education", emoji: "🎓", label: "Pay for my children's education" },
  { id: "community", emoji: "🏘️", label: "Create jobs in my community" },
  { id: "land", emoji: "🌾", label: "Buy land and build something on it" },
  { id: "export", emoji: "🌍", label: "Sell to the world — build an export business" },
  { id: "brand", emoji: "✨", label: "Build a brand people are proud of" },
  { id: "legacy", emoji: "👑", label: "Build something I can pass to my children" },
];

const SITUATIONS = [
  "Currently employed — want to start something on the side",
  "Unemployed — need to generate income now",
  "Student — starting early",
  "Already have a small business, want to grow",
  "Farmer or in agriculture",
  "Working in the informal economy",
  "Diaspora — want to invest back in Africa",
  "Recently returned to Africa",
];

const TIMELINES = [
  "As soon as possible — I need income now",
  "6 months — I can plan but need to move fast",
  "1 year — I can build steadily",
  "2–3 years — I'm thinking long term",
  "5+ years — I'm playing the long game",
];

const AFRICAN_COUNTRIES = [
  "Nigeria", "Ghana", "Kenya", "Senegal", "South Africa", "Rwanda", "Morocco",
  "Côte d'Ivoire", "Ethiopia", "Tanzania", "Uganda", "Cameroon", "Mozambique",
  "Zambia", "Zimbabwe", "Mali", "Burkina Faso", "Togo", "Benin",
  "UK diaspora", "France diaspora", "US diaspora", "Canada diaspora",
];

export default function GoalsPage() {
  const { lang, currency, country: savedCountry } = useLocale();

  const [name, setName] = useState("");
  const [country, setCountry] = useState(savedCountry || "");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [customGoal, setCustomGoal] = useState("");
  const [monthlyTarget, setMonthlyTarget] = useState("");
  const [situation, setSituation] = useState("");
  const [timeline, setTimeline] = useState("");
  const [capital, setCapital] = useState("");
  const [skills, setSkills] = useState("");
  const [age, setAge] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggleGoal(id: string) {
    setSelectedGoals((prev) => prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]);
  }

  const goalLabels = selectedGoals.map((id) => LIFE_GOALS.find((g) => g.id === id)?.label ?? id);

  async function handleSubmit() {
    if (!country || selectedGoals.length === 0) return;
    setLoading(true);
    setResult("");
    setSubmitted(true);

    const goalText = [...goalLabels, customGoal].filter(Boolean).join("; ");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: `You are Alkebulan's Life Advisor — a brilliant older sibling, mentor, and business coach who grew up in Africa and knows exactly what's possible for African entrepreneurs today.

${langInstruction(lang)}

Your mission: take someone's real life goals and show them exactly how Africa's opportunities can get them there. Not theory. Not inspiration porn. Concrete, specific, actionable.

Your voice:
- Talk like you are genuinely invested in this person's success
- Sound like the brilliant cousin who went to business school AND knows the streets
- Give them confidence without being patronizing
- Be specific about their country — Senegal is not Nigeria is not Kenya
- Tell them what others their age have built with similar budgets
- Include practical, unsexy opportunities (chicken shop, provisions store, welding, school feeding) alongside aspirational ones (brand-building, export, tech)
- Always remind them: Africa's biggest advantage is its population growth, its middle class expansion, and its digital leapfrogging
- Currency: show amounts in ${currency} where possible

Core principles you bake into every plan:
- Do not skip the informal economy — it's where 90% of Africa's real money moves
- Mobile-first, WhatsApp-first, community-trust-first
- Local partnerships are not optional — they are the shortcut
- Do not underestimate the middle class — they want quality, they will pay for it
- Bootstrapping is severely underrated — you do not need investors to start
- Start small, prove it, then scale — the biggest African businesses started with one shop, one keke, one batch of product
- Africa is not a risk. Not knowing it is.

Format your response:
1. Address the person by name if given
2. Validate their goal — make them feel it's reachable
3. Show them The Path: specific steps from where they are now to where they want to be
4. Give them 3–5 concrete business ideas that directly serve their stated goals, matched to their budget and country
5. Include at least one "unsexy" practical idea and one aspirational idea
6. Tell them what someone else did starting from their situation (a real or realistic example)
7. End with a challenge: one specific thing they can do this week to start`,

          prompt: `Here is someone who wants your help:

Name: ${name || "a friend"}
Country: ${country}
Age: ${age || "not specified"}
Current situation: ${situation || "not specified"}
Available capital to start: ${capital || "very limited / not specified"}
Skills: ${skills || "not specified"}
Timeline to achieve goals: ${timeline || "not specified"}

Their life goals:
${goalText}

${monthlyTarget ? `Monthly income target: ${monthlyTarget} (${currency})` : ""}

${customGoal ? `In their own words: "${customGoal}"` : ""}

Please give them a complete, personalised life and business plan. Be specific, be honest, be encouraging. Tell them what's actually possible from where they are. Include businesses that work in their country with their budget. Make them feel that they can do this — because they can.`,
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
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-5">
            YOUR GOALS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Where do you want<br />to be in 3 years?
          </h1>
          <p className="text-ivory/75 text-lg max-w-xl leading-relaxed">
            Tell us your real goal — build your mother a house, make $2,000/month, stop working for someone else.
            We&apos;ll show you exactly how Africa&apos;s opportunities get you there.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

        {!submitted ? (
          <div className="space-y-5">

            {/* Name + basics */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-display text-base font-bold text-ink mb-4">First, let&apos;s get to know you</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your name (optional)</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Fatima, Kofi, Amara..."
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 23"
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold"
                  >
                    <option value="">Select your country</option>
                    {AFRICAN_COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your skills</label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="e.g. cooking, sewing, IT, driving, sales..."
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            </div>

            {/* Life goals */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-display text-base font-bold text-ink mb-2">What do you actually want?</h2>
              <p className="text-xs text-muted mb-4">Pick everything that applies. Be honest. This is your plan, not a performance.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {LIFE_GOALS.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                      selectedGoals.includes(goal.id)
                        ? "bg-deep-green text-ivory border-deep-green"
                        : "bg-warm-ivory border-border hover:border-gold text-ink"
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{goal.emoji}</span>
                    <span className="text-sm font-medium leading-snug">{goal.label}</span>
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">In your own words (optional)</label>
                <textarea
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  rows={2}
                  placeholder='e.g. "I want to build my mother a house in 2 years. I also want to put my younger siblings through university."'
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/40 focus:outline-none focus:border-gold resize-none"
                />
              </div>
            </div>

            {/* Income target + timeline */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-display text-base font-bold text-ink mb-4">The numbers and the timeline</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">
                    Monthly income target ({currency})
                  </label>
                  <input
                    type="text"
                    value={monthlyTarget}
                    onChange={(e) => setMonthlyTarget(e.target.value)}
                    placeholder={`e.g. 500,000 ${currency === "NGN" ? "NGN" : currency === "XOF" ? "CFA" : "in your currency"}`}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Capital available to start</label>
                  <input
                    type="text"
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    placeholder="e.g. nothing, 50,000 CFA, $500..."
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your current situation</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SITUATIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSituation(s)}
                      className={`text-left text-xs p-3 rounded-xl border transition-all ${
                        situation === s
                          ? "bg-deep-green text-ivory border-deep-green"
                          : "bg-warm-ivory border-border hover:border-gold text-ink"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Your timeline</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TIMELINES.map((tl) => (
                    <button
                      key={tl}
                      onClick={() => setTimeline(tl)}
                      className={`text-left text-xs p-3 rounded-xl border transition-all ${
                        timeline === tl
                          ? "bg-gold text-deep-green border-gold font-semibold"
                          : "bg-warm-ivory border-border hover:border-gold text-ink"
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={!country || selectedGoals.length === 0 || loading}
              className="w-full bg-deep-green text-ivory font-bold py-4 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50 text-base"
            >
              {loading ? "Building your plan..." : "Show me my path →"}
            </button>

            <p className="text-center text-xs text-muted">
              Your information is never stored on our servers. It stays in your browser.
            </p>
          </div>
        ) : (
          /* Result view */
          <div>
            {loading && !result && (
              <div className="bg-white border border-border rounded-2xl p-8 text-center">
                <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-ink font-medium">Building your personal plan...</p>
                <p className="text-muted text-sm mt-1">This takes 15–20 seconds. It&apos;s worth it.</p>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <div className="bg-white border border-border rounded-2xl p-6">
                  <div className="text-sm text-ink whitespace-pre-wrap leading-relaxed">
                    {result}
                    {loading && <span className="inline-block w-1.5 h-4 bg-gold ml-1 animate-pulse align-middle" />}
                  </div>
                </div>

                {!loading && (
                  <>
                    {/* Next step links */}
                    <div className="bg-deep-green text-ivory rounded-2xl p-6">
                      <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Your next steps on Alkebulan</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link href="/build"
                          className="flex items-center justify-between bg-ivory/10 hover:bg-ivory/15 rounded-xl p-4 transition-colors">
                          <div>
                            <p className="font-semibold text-sm">What should I build?</p>
                            <p className="text-ivory/60 text-xs mt-0.5">Business ideas matched to your budget and country</p>
                          </div>
                          <span className="text-gold ml-2">→</span>
                        </Link>
                        <Link href="/dashboard"
                          className="flex items-center justify-between bg-ivory/10 hover:bg-ivory/15 rounded-xl p-4 transition-colors">
                          <div>
                            <p className="font-semibold text-sm">Find funding</p>
                            <p className="text-ivory/60 text-xs mt-0.5">Grants, loans, and investment for your stage</p>
                          </div>
                          <span className="text-gold ml-2">→</span>
                        </Link>
                        <Link href="/brand"
                          className="flex items-center justify-between bg-ivory/10 hover:bg-ivory/15 rounded-xl p-4 transition-colors">
                          <div>
                            <p className="font-semibold text-sm">Build your brand</p>
                            <p className="text-ivory/60 text-xs mt-0.5">Name, story, TikTok hooks, packaging brief</p>
                          </div>
                          <span className="text-gold ml-2">→</span>
                        </Link>
                        <Link href="/capital"
                          className="flex items-center justify-between bg-ivory/10 hover:bg-ivory/15 rounded-xl p-4 transition-colors">
                          <div>
                            <p className="font-semibold text-sm">Capital Intelligence</p>
                            <p className="text-ivory/60 text-xs mt-0.5">Understand every type of funding before you take it</p>
                          </div>
                          <span className="text-gold ml-2">→</span>
                        </Link>
                      </div>
                    </div>

                    <button
                      onClick={() => { setSubmitted(false); setResult(""); }}
                      className="w-full border border-border text-muted text-sm py-3 rounded-xl hover:text-ink hover:border-ink transition-colors"
                    >
                      Update my goals and try again
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {/* Motivation section at bottom when not submitted */}
        {!submitted && (
          <div className="mt-8 space-y-3">
            <p className="text-xs font-bold text-muted uppercase tracking-wide">What other Africans have built starting from nothing</p>
            {[
              {
                person: "Aliko Dangote, Nigeria",
                start: "Started with a loan from his uncle to trade commodities. Every cent went back into the business.",
                outcome: "Richest man in Africa. Built factories where others only traded.",
              },
              {
                person: "Bethlehem Tilahun Alemu, Ethiopia",
                start: "Started soleRebels with $10,000 and workers from her community in Zenabwork, Addis Ababa.",
                outcome: "First African brand in Whole Foods, Time Zones worldwide. Made in Ethiopia.",
              },
              {
                person: "Ibukun Awosika, Nigeria",
                start: "Started a furniture business from her living room after quitting her job with nothing.",
                outcome: "Founded Sokoa Chair Centre, then became Chairman of First Bank Nigeria.",
              },
              {
                person: "Navalayo Osembo, Kenya",
                start: "Co-founded Enda Athletic with no fashion background, just the idea that Kenya's running culture deserved its own shoe brand.",
                outcome: "First Made-in-Kenya performance running shoe. Sold globally.",
              },
            ].map(({ person, start, outcome }) => (
              <div key={person} className="bg-white border border-border rounded-xl p-4">
                <p className="text-xs font-bold text-ink mb-1">{person}</p>
                <p className="text-xs text-muted leading-snug mb-1">{start}</p>
                <p className="text-xs font-semibold text-deep-green">{outcome}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
