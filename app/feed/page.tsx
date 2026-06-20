"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import { FEED_ITEMS, FeedCategory } from "@/lib/data/feed-items";
import Link from "next/link";

const CATEGORY_COLORS: Record<FeedCategory, string> = {
  Grant: "bg-deep-green/10 text-deep-green",
  Procurement: "bg-royal-blue/10 text-royal-blue",
  Policy: "bg-warm-brown/10 text-warm-brown",
  Accelerator: "bg-red-earth/10 text-red-earth",
  Trade: "bg-gold/10 text-gold-dark",
  Finance: "bg-deep-green/10 text-deep-green",
  Network: "bg-warm-brown/10 text-warm-brown",
};

const CATEGORIES: FeedCategory[] = ["Grant", "Procurement", "Policy", "Accelerator", "Trade", "Finance", "Network"];

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const days = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}

export default function FeedPage() {
  const [selectedCategory, setSelectedCategory] = useState<FeedCategory | "All">("All");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filtered = FEED_ITEMS.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) return false;
    if (selectedCountry !== "All" && item.country !== selectedCountry && item.country !== "Pan-Africa") return false;
    return true;
  });

  const countries = ["All", ...Array.from(new Set(FEED_ITEMS.map((i) => i.country).filter((c) => c !== "Pan-Africa")))];

  const hotItems = FEED_ITEMS.filter((i) => i.is_hot);

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-4">
            OPPORTUNITY FEED
          </div>
          <h1 className="font-display text-3xl font-bold text-ink mb-2">
            What&apos;s moving across Africa
          </h1>
          <p className="text-muted text-sm">
            New funds, open tenders, policy changes, and market signals — curated daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main feed */}
          <div className="lg:col-span-2">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  selectedCategory === "All" ? "bg-deep-green text-ivory" : "bg-white border border-border text-muted hover:border-deep-green"
                }`}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                    selectedCategory === cat ? "bg-deep-green text-ivory" : "bg-white border border-border text-muted hover:border-deep-green"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex gap-2 mb-6">
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink focus:outline-none focus:border-gold">
                {countries.map((c) => (
                  <option key={c} value={c}>{c === "All" ? "All countries" : c}</option>
                ))}
              </select>
            </div>

            {/* Feed items */}
            <div className="space-y-4">
              {filtered.map((item) => (
                <div key={item.id} className="bg-white border border-border rounded-2xl p-5 card-hover">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${CATEGORY_COLORS[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-warm-ivory border border-border text-warm-brown">
                        {item.country}
                      </span>
                      {item.is_hot && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-earth/10 text-red-earth">
                          Hot
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted whitespace-nowrap">{timeAgo(item.date)}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-ink mb-2 leading-snug">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{item.summary}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.amount && (
                        <span className="text-xs font-semibold text-gold-dark">{item.amount}</span>
                      )}
                      {item.deadline && (
                        <span className="text-xs text-muted">
                          Deadline: {new Date(item.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                      )}
                    </div>
                    {item.action_url ? (
                      <a href={item.action_url} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-semibold text-deep-green hover:text-gold transition-colors">
                        {item.action} →
                      </a>
                    ) : (
                      <Link href="/dashboard"
                        className="text-xs font-semibold text-deep-green hover:text-gold transition-colors">
                        {item.action} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted">
                <p>No items match your filters.</p>
                <button onClick={() => { setSelectedCategory("All"); setSelectedCountry("All"); }}
                  className="mt-2 text-deep-green font-semibold hover:text-gold transition-colors text-sm">
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-5">
            {/* Hot right now */}
            <div className="bg-deep-green text-ivory rounded-2xl p-5">
              <h2 className="font-display text-base font-bold text-gold mb-4">Hot right now</h2>
              <div className="space-y-3">
                {hotItems.map((item) => (
                  <div key={item.id} className="border-b border-ivory/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] font-semibold text-ivory/50 uppercase tracking-wide">
                      {item.country}
                    </span>
                    <p className="text-sm font-medium text-ivory leading-tight mt-0.5">
                      {item.headline}
                    </p>
                    {item.amount && (
                      <p className="text-xs text-gold mt-1">{item.amount}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-white border border-border rounded-2xl p-5">
              <h2 className="font-display text-base font-bold text-ink mb-4">Quick actions</h2>
              <div className="space-y-2">
                {[
                  { label: "Build my opportunity path", href: "/path" },
                  { label: "Find a government tender", href: "/procurement" },
                  { label: "What business should I start?", href: "/build" },
                  { label: "Browse all funding", href: "/dashboard" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-warm-ivory transition-colors text-sm font-medium text-ink group">
                    {label}
                    <span className="text-muted group-hover:text-gold transition-colors">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-warm-ivory border border-border rounded-2xl p-5">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">This month</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">New opportunities</span>
                  <span className="font-bold text-ink">47</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Active tenders</span>
                  <span className="font-bold text-ink">23</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Open applications</span>
                  <span className="font-bold text-ink">18</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Countries active</span>
                  <span className="font-bold text-ink">31</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
