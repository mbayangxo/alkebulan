"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { MARKET_CATEGORIES } from "@/lib/market-data";
import type { MarketListing, MarketCategory } from "@/lib/market-data";

const CATEGORY_ICONS: Record<MarketCategory, string> = {
  "Fresh produce": "🥬",
  "Livestock": "🐄",
  "Grains & legumes": "🌾",
  "Processed food": "🧺",
  "Raw materials": "⛏️",
  "Wholesale goods": "📦",
  "Construction materials": "🧱",
  "Textiles & fabric": "🧵",
  "Chemicals & inputs": "🧪",
  "Energy & fuel": "⚡",
};

function priceDisplay(l: MarketListing) {
  if (l.priceType === "contact") return "Contact for price";
  if (!l.pricePerUnit) return "Negotiable";
  const label = l.priceType === "negotiable" ? `${l.pricePerUnit} ${l.currency} / ${l.unit} (neg.)` : `${l.pricePerUnit} ${l.currency} / ${l.unit}`;
  return label;
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function ListingCard({ listing }: { listing: MarketListing }) {
  const icon = CATEGORY_ICONS[listing.category] ?? "📦";
  return (
    <Link href={`/market/${listing.id}`} className="block group">
      <div className="bg-white border border-sand rounded-2xl p-5 hover:border-gold hover:shadow-md transition-all">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            <span className="text-xs font-semibold text-muted uppercase tracking-wide">{listing.category}</span>
          </div>
          <span className="text-xs text-muted">{timeAgo(listing.publishedAt)}</span>
        </div>

        <h3 className="font-display text-lg font-bold text-ink mb-1 group-hover:text-deep-green transition-colors">
          {listing.productName}
        </h3>

        <p className="text-sm text-muted mb-3 line-clamp-2">{listing.description}</p>

        <div className="flex flex-wrap gap-3 text-sm mb-3">
          <span className="font-semibold text-deep-green">{priceDisplay(listing)}</span>
          <span className="text-muted">·</span>
          <span className="text-ink">Min {listing.minOrderQuantity} {listing.unit}</span>
          <span className="text-muted">·</span>
          <span className="text-ink">{listing.quantityAvailable} {listing.unit} available</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 text-muted">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/></svg>
            </span>
            <span className="text-xs text-muted">
              {listing.country}{listing.region ? `, ${listing.region}` : ""}
            </span>
          </div>
          <span className="text-xs font-semibold text-gold">
            {listing.businessName || listing.sellerName}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function MarketPage() {
  const [listings, setListings] = useState<MarketListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<MarketCategory | "">("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(t);
  }, [search]);

  const fetchListings = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (activeCategory) params.set("category", activeCategory);
    if (debouncedSearch) params.set("q", debouncedSearch);
    try {
      const res = await fetch(`/api/market?${params}`);
      const data = await res.json();
      setListings(Array.isArray(data) ? data : []);
    } catch {
      setListings([]);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, debouncedSearch]);

  useEffect(() => { fetchListings(); }, [fetchListings]);

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Header */}
      <section className="bg-deep-green text-ivory py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">B2B Supply Market</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Buy direct from African<br />
            <span className="text-gold">farmers and suppliers.</span>
          </h1>
          <p className="text-ivory/70 text-lg max-w-xl mb-8">
            No middlemen. Farmers, producers, and wholesale sellers list what
            they have. Businesses contact them directly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/market/new"
              className="inline-flex items-center gap-2 bg-gold text-deep-green font-bold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              + List your supply
            </Link>
            <span className="inline-flex items-center gap-2 border border-ivory/30 text-ivory/80 px-6 py-3 rounded-full text-sm">
              {listings.length} listings active
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* Search + filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products, categories, countries…"
            className="flex-1 border border-sand rounded-xl px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-gold/40"
          />
          <select
            value={activeCategory}
            onChange={e => setActiveCategory(e.target.value as MarketCategory | "")}
            className="border border-sand rounded-xl px-4 py-3 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            <option value="">All categories</option>
            {MARKET_CATEGORIES.map(c => (
              <option key={c} value={c}>{CATEGORY_ICONS[c]} {c}</option>
            ))}
          </select>
        </div>

        {/* Category chips */}
        <div className="flex gap-2 flex-wrap mb-8">
          <button
            onClick={() => setActiveCategory("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "" ? "bg-deep-green text-ivory" : "bg-white border border-sand text-ink hover:border-gold"
            }`}
          >
            All
          </button>
          {MARKET_CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c === activeCategory ? "" : c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                activeCategory === c ? "bg-deep-green text-ivory" : "bg-white border border-sand text-ink hover:border-gold"
              }`}
            >
              <span>{CATEGORY_ICONS[c]}</span>
              {c}
            </button>
          ))}
        </div>

        {/* Listings grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white border border-sand rounded-2xl p-5 animate-pulse">
                <div className="h-4 bg-sand rounded w-1/3 mb-3" />
                <div className="h-6 bg-sand rounded w-2/3 mb-2" />
                <div className="h-4 bg-sand rounded w-full mb-1" />
                <div className="h-4 bg-sand rounded w-4/5" />
              </div>
            ))}
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🌾</p>
            <h2 className="font-display text-2xl font-bold text-ink mb-2">No listings yet</h2>
            <p className="text-muted mb-6">
              {search || activeCategory ? "Try a different search or category." : "Be the first to list your supply."}
            </p>
            <Link href="/market/new" className="inline-block bg-deep-green text-ivory font-bold px-6 py-3 rounded-xl hover:bg-mid-green transition-colors">
              List your supply →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {listings.map(l => <ListingCard key={l.id} listing={l} />)}
          </div>
        )}
      </div>
    </div>
  );
}
