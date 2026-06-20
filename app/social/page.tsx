"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";

const CONTENT_FORMATS = [
  {
    id: "fact",
    label: "African Business Fact",
    icon: "💡",
    platform: "Any platform",
    example: "Stunning stat + what it means for builders",
  },
  {
    id: "instagram",
    label: "Instagram Caption",
    icon: "📸",
    platform: "Instagram",
    example: "Hook + story + call to action + hashtags",
  },
  {
    id: "tiktok",
    label: "TikTok Script",
    icon: "🎬",
    platform: "TikTok",
    example: "3-second hook + 45-sec content + CTA with visual cues",
  },
  {
    id: "twitter",
    label: "X/Twitter Thread",
    icon: "🧵",
    platform: "X (Twitter)",
    example: "5–8 tweet thread. First tweet is the hook.",
  },
  {
    id: "linkedin",
    label: "LinkedIn Post",
    icon: "💼",
    platform: "LinkedIn",
    example: "Business case + human story. 200–300 words.",
  },
  {
    id: "spotlight",
    label: "Country Spotlight",
    icon: "🌍",
    platform: "Any platform",
    example: "One country, one opportunity, one proof it works, how to start",
  },
  {
    id: "story",
    label: "Success Story",
    icon: "🏆",
    platform: "Any platform",
    example: "Who they are, what they started with, what they built",
  },
  {
    id: "alert",
    label: "Opportunity Alert",
    icon: "🚨",
    platform: "Any platform",
    example: "Specific program, who qualifies, how much, apply where",
  },
  {
    id: "program",
    label: "Program Explained Simply",
    icon: "📋",
    platform: "Any platform",
    example: "Complex government program explained like a text to a friend",
  },
];

const TOPIC_TEMPLATES = [
  "Housing shortage as a construction business opportunity",
  "600 million Africans with no reliable electricity = solar market",
  "Senegal DER/FJ youth fund — how to apply and what it gives",
  "Africa imports $50B in food while having the world's best farmland",
  "Dangote started with commodities trading before he built factories",
  "Wave built 0% fees mobile money and destroyed Orange Money in Senegal",
  "BSTP Senegal — subcontracts on major projects that no one is applying for",
  "You can start a logistics business with one truck",
  "Food imports = food processing factories waiting to be built",
  "Cobalt in Congo — why Africa's richest mineral makes Africans poor",
  "Youth unemployment is also a staffing agency waiting to be built",
  "Government procurement portals that barely anyone uses",
  "Moringa: $0.10/kg raw in Nigeria → $50/kg in Europe. The gap is processing.",
  "Laiterie du Berger: built a $10M dairy from Fulani milk that was being thrown away",
  "Power cuts = solar opportunity, battery storage market, generator rental",
];

const AFRICAN_COUNTRIES = [
  "", "Nigeria", "Ghana", "Kenya", "Senegal", "South Africa", "Rwanda",
  "Morocco", "Côte d'Ivoire", "Ethiopia", "Tanzania", "Uganda", "Cameroon",
  "Egypt", "Tunisia", "Algeria", "Angola", "Zambia", "Zimbabwe",
];

const SECTORS = [
  "", "Construction", "Agriculture", "Energy", "Tech", "Healthcare", "Logistics",
  "Education", "Fashion", "Beauty", "Finance", "Mining", "Food processing",
  "Manufacturing", "Media", "Tourism",
];

const MANIFESTO_LINES = [
  { problem: "Food is expensive", answer: "Someone builds farms, cold storage, processing plants, distribution." },
  { problem: "Power cuts everywhere", answer: "Someone builds solar companies, battery systems, mini-grids." },
  { problem: "Youth unemployment", answer: "Someone builds training schools, staffing firms, apprentice networks." },
  { problem: "Housing shortage", answer: "Someone builds a construction company, cement supply, architecture firm, mortgage company." },
  { problem: "No transport infrastructure", answer: "Someone builds logistics networks, bus fleets, delivery services, trucking companies." },
];

export default function SocialPage() {
  const [format, setFormat] = useState("fact");
  const [topic, setTopic] = useState("");
  const [country, setCountry] = useState("");
  const [sector, setSector] = useState("");
  const [extra, setExtra] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function generate() {
    if (!topic.trim()) return;
    setLoading(true);
    setResult("");
    setCopied(false);

    try {
      const res = await fetch("/api/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ format, topic, country, sector, extra }),
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
      setResult("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copyToClipboard() {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const selectedFormat = CONTENT_FORMATS.find(f => f.id === format)!;

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-5">
            SOCIAL MEDIA AGENT
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Give Africa self-belief.<br />One post at a time.
          </h1>
          <p className="text-ivory/75 text-lg max-w-2xl leading-relaxed">
            Generate ready-to-post content for Instagram, TikTok, X, and LinkedIn.
            Business facts. Opportunity alerts. Country spotlights. Success stories.
            The message: Africa is full of unfinished opportunity, and it&apos;s Africans who will finish it.
          </p>
        </div>
      </div>

      {/* Manifesto strip */}
      <div className="bg-ink text-ivory py-5 px-4 overflow-x-auto">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">The lens we post through</p>
          <div className="flex gap-4 min-w-max">
            {MANIFESTO_LINES.map(({ problem, answer }) => (
              <div key={problem} className="bg-ivory/5 rounded-xl px-4 py-3 flex-shrink-0 max-w-[240px]">
                <p className="text-xs text-ivory/50 mb-1">Everyone sees:</p>
                <p className="text-sm font-semibold text-ivory mb-2">{problem}</p>
                <p className="text-xs text-gold leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* Format selector */}
        <div className="bg-white border border-border rounded-2xl p-5 mb-5">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-4">Choose content format</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {CONTENT_FORMATS.map((f) => (
              <button
                key={f.id}
                onClick={() => { setFormat(f.id); setResult(""); }}
                className={`text-left px-3 py-3 rounded-xl border transition-all ${
                  format === f.id
                    ? "bg-deep-green text-ivory border-deep-green"
                    : "bg-white border-border text-ink hover:border-deep-green"
                }`}
              >
                <span className="text-base block mb-0.5">{f.icon}</span>
                <span className="text-xs font-semibold block">{f.label}</span>
                <span className="text-[10px] opacity-60">{f.platform}</span>
              </button>
            ))}
          </div>
          {selectedFormat && (
            <div className="mt-3 bg-gold/10 border border-gold/20 rounded-xl px-4 py-2.5">
              <p className="text-xs text-gold-dark"><span className="font-bold">What you get:</span> {selectedFormat.example}</p>
            </div>
          )}
        </div>

        {/* Topic input */}
        <div className="bg-white border border-border rounded-2xl p-5 mb-5">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-4">What to write about</p>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-ink mb-2">Topic or message</label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              rows={2}
              placeholder="E.g. 'Senegal imports 80% of its rice despite having perfect rice-growing conditions in Casamance'"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold resize-none"
            />
          </div>

          {/* Topic templates */}
          <div className="mb-4">
            <p className="text-[10px] font-bold text-muted uppercase tracking-wide mb-2">Or pick a topic</p>
            <div className="flex flex-wrap gap-1.5">
              {TOPIC_TEMPLATES.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className="text-[10px] bg-warm-ivory hover:bg-gold/10 border border-border hover:border-gold/30 text-ink px-2.5 py-1.5 rounded-lg transition-colors text-left leading-snug"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ink mb-2">Country focus (optional)</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold"
              >
                {AFRICAN_COUNTRIES.map((c) => <option key={c} value={c}>{c || "Any / Pan-Africa"}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink mb-2">Sector (optional)</label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold"
              >
                {SECTORS.map((s) => <option key={s} value={s}>{s || "Any sector"}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-3">
            <label className="block text-xs font-semibold text-ink mb-2">Extra context or specific angle (optional)</label>
            <input
              type="text"
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              placeholder="E.g. 'Focus on women entrepreneurs' or 'Emphasize the small starting budget'"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
            />
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={generate}
          disabled={!topic.trim() || loading}
          className="w-full bg-deep-green text-ivory font-bold py-4 rounded-2xl text-base hover:bg-mid-green transition-colors disabled:opacity-50 mb-5"
        >
          {loading ? `Writing your ${selectedFormat.label}...` : `Generate ${selectedFormat.label} →`}
        </button>

        {/* Result */}
        {result && (
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span>{selectedFormat.icon}</span>
                <span className="text-sm font-semibold text-ink">{selectedFormat.label}</span>
                {selectedFormat.platform !== "Any platform" && (
                  <span className="text-[10px] bg-warm-ivory text-muted border border-border px-2 py-0.5 rounded-full">{selectedFormat.platform}</span>
                )}
              </div>
              <button
                onClick={copyToClipboard}
                className="text-xs font-semibold text-deep-green hover:underline flex items-center gap-1"
              >
                {copied ? "✓ Copied!" : "Copy →"}
              </button>
            </div>
            <div className="p-6">
              <div className="text-sm text-ink whitespace-pre-wrap leading-relaxed">
                {result}
                {loading && <span className="inline-block w-1.5 h-4 bg-gold ml-1 animate-pulse align-middle" />}
              </div>
            </div>
          </div>
        )}

        {/* Bottom insight */}
        <div className="mt-8 bg-deep-green text-ivory rounded-2xl p-6">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Why this matters</p>
          <p className="text-ivory/85 leading-relaxed text-sm">
            Africans are surrounded by NGO pricing, foreign consultant pricing, and donor project pricing —
            $500K feasibility studies, $2M development projects, $50K consulting contracts.
            This makes people think everything requires huge money. Meanwhile, local entrepreneurs
            are starting farms for $1,000, opening factories in leased buildings, building media
            companies from laptops, and creating logistics businesses with one vehicle.
          </p>
          <p className="text-ivory/85 leading-relaxed text-sm mt-3">
            Countries aren&apos;t transformed by aid alone. They&apos;re transformed when thousands of
            builders, engineers, farmers, teachers, developers, architects, manufacturers, and
            entrepreneurs decide: instead of waiting for opportunity, we&apos;re going to create it.
          </p>
          <p className="text-gold font-semibold mt-3 text-sm">
            Africa is not lacking opportunity. It&apos;s full of unfinished opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
