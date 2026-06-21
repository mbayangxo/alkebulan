"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import Link from "next/link";

interface NewsItem {
  id: string;
  date: string;
  content: string;
  focus?: string;
}

const FOCUS_TOPICS = [
  "New grants for women entrepreneurs",
  "Youth funds and new government programs",
  "Government tenders and procurement opportunities",
  "Startup and innovation fund launches",
  "West Africa opportunities",
  "East Africa opportunities",
  "North Africa opportunities",
  "Southern Africa opportunities",
  "AgriTech and food processing",
  "AfDB and World Bank new programs",
  "EU and donor programs in Africa",
];

function NewsDisplay({ text, loading }: { text: string; loading: boolean }) {
  if (!text && !loading) return null;
  const sections = text.split(/^---$/m).filter(Boolean);

  return (
    <div className="space-y-4">
      {sections.map((section, i) => {
        const lines = section.trim().split("\n").filter(Boolean);
        const headlineMatch = lines[0]?.match(/^##\s+(.*)/);
        const headline = headlineMatch?.[1] || "";
        const metaLine = lines.find(l => l.startsWith("**Country**"));
        const bodyLines = lines.filter(l =>
          !l.startsWith("##") && !l.startsWith("**Country**") && !l.startsWith("**What to do**")
        );
        const actionLine = lines.find(l => l.startsWith("**What to do**"))?.replace(/^\*\*What to do\*\*:\s*/, "");

        return (
          <div key={i} className="bg-white border border-border rounded-2xl p-5">
            {headline && (
              <h3 className="font-bold text-ink text-base leading-snug mb-2">{headline}</h3>
            )}
            {metaLine && (
              <p className="text-xs text-muted mb-3">{metaLine.replace(/\*\*/g, "")}</p>
            )}
            {bodyLines.map((line, j) => (
              <p key={j} className="text-sm text-ink leading-relaxed mb-1">{line}</p>
            ))}
            {actionLine && (
              <div className="mt-3 bg-deep-green/5 border border-deep-green/20 rounded-xl px-4 py-2.5">
                <p className="text-xs font-bold text-deep-green">→ {actionLine}</p>
              </div>
            )}
          </div>
        );
      })}
      {loading && (
        <div className="bg-white border border-border rounded-2xl p-5 flex items-center gap-3">
          <span className="inline-block w-2 h-4 bg-gold animate-pulse" />
          <span className="text-sm text-muted">Amara is searching for more news...</span>
        </div>
      )}
    </div>
  );
}

export default function NewsroomPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState("");
  const [past, setPast] = useState<NewsItem[]>([]);
  const [viewing, setViewing] = useState<NewsItem | null>(null);

  useEffect(() => {
    try { setPast(JSON.parse(localStorage.getItem("alkebulan_newsroom") || "[]")); } catch {}
  }, []);

  async function fetchNews() {
    setLoading(true);
    setResult("");
    setViewing(null);

    try {
      const res = await fetch("/api/newsroom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ focus: focus || undefined }),
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

      const item: NewsItem = {
        id: Date.now().toString(),
        date: new Date().toLocaleString(),
        content: text,
        focus: focus || undefined,
      };
      const updated = [item, ...past].slice(0, 14);
      setPast(updated);
      try { localStorage.setItem("alkebulan_newsroom", JSON.stringify(updated)); } catch {}
    } catch {
      setResult("Amara couldn't fetch news right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const activeContent = viewing ? viewing.content : result;

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-4">
            OPPORTUNITY NEWSROOM — powered by Amara
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ivory mb-4 leading-tight">
            New every day.<br />Never miss an opportunity.
          </h1>
          <p className="text-ivory/75 text-lg max-w-2xl leading-relaxed">
            Amara searches the web daily for new grants, government contracts, fund launches,
            and policy changes across all 54 African countries. Real news. Actionable.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Controls */}
            <div className="bg-white border border-border rounded-2xl p-5 mb-6">
              <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Run today&apos;s edition</p>
              <div className="flex gap-3 mb-4">
                <select
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="flex-1 border border-border rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-gold"
                >
                  <option value="">All categories (recommended)</option>
                  {FOCUS_TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <button
                  onClick={fetchNews}
                  disabled={loading}
                  className="bg-deep-green text-ivory text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50 flex-shrink-0"
                >
                  {loading ? "Searching..." : "Run →"}
                </button>
              </div>
              {loading && (
                <p className="text-xs text-muted">
                  Amara is searching the web for the latest African opportunity news. Takes 30–60 seconds.
                </p>
              )}
            </div>

            {/* Results */}
            {(activeContent || loading) ? (
              <div>
                {viewing && (
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-muted">Viewing: {viewing.date}{viewing.focus ? ` — ${viewing.focus}` : ""}</p>
                    <button onClick={() => { setViewing(null); }} className="text-xs text-gold hover:underline">
                      Back to latest
                    </button>
                  </div>
                )}
                <NewsDisplay text={activeContent} loading={loading && !viewing} />
              </div>
            ) : (
              <div className="bg-white border border-border rounded-2xl p-12 text-center">
                <p className="text-3xl mb-4">📰</p>
                <p className="font-bold text-ink text-base mb-2">The newsroom is ready.</p>
                <p className="text-muted text-sm mb-6">
                  Click &quot;Run&quot; to have Amara search the web for the latest African opportunity news.
                </p>
                <button
                  onClick={fetchNews}
                  className="bg-deep-green text-ivory text-sm font-bold px-6 py-3 rounded-xl hover:bg-mid-green transition-colors"
                >
                  Run today&apos;s edition →
                </button>
              </div>
            )}
          </div>

          {/* Sidebar: archive + browse */}
          <div className="space-y-4">
            {past.length > 0 && (
              <div className="bg-white border border-border rounded-2xl p-5">
                <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Past editions</p>
                <div className="space-y-2">
                  {past.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { setViewing(item); setResult(""); }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl border transition-colors ${
                        viewing?.id === item.id
                          ? "bg-deep-green/5 border-deep-green/30"
                          : "border-border hover:border-deep-green/30"
                      }`}
                    >
                      <p className="text-xs font-semibold text-ink leading-snug">
                        {item.focus || "All categories"}
                      </p>
                      <p className="text-[10px] text-muted mt-0.5">{item.date}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white border border-border rounded-2xl p-5">
              <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Browse by country</p>
              <div className="space-y-1">
                {[
                  ["🇸🇳", "Senegal", "senegal"],
                  ["🇳🇬", "Nigeria", "nigeria"],
                  ["🇬🇭", "Ghana", "ghana"],
                  ["🇰🇪", "Kenya", "kenya"],
                  ["🇷🇼", "Rwanda", "rwanda"],
                  ["🇲🇦", "Morocco", "morocco"],
                ].map(([flag, name, slug]) => (
                  <Link
                    key={slug}
                    href={`/opportunities/${slug}`}
                    className="flex items-center gap-2 text-xs text-ink hover:text-gold transition-colors py-1"
                  >
                    <span>{flag}</span> <span>{name}</span>
                  </Link>
                ))}
                <Link href="/programs" className="block text-xs text-deep-green font-semibold hover:underline mt-2">
                  All 54 countries →
                </Link>
              </div>
            </div>

            <div className="bg-deep-green text-ivory rounded-2xl p-5">
              <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Why this exists</p>
              <p className="text-ivory/80 text-xs leading-relaxed">
                Most Africans miss opportunities not because they don&apos;t qualify — but because they
                never heard about them. A fund closes. A tender passes. A program goes unclaimed.
                The newsroom exists to close that gap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
