"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import type { MarketListing } from "@/lib/market-data";

const CATEGORY_ICONS: Record<string, string> = {
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
  return l.priceType === "negotiable"
    ? `${Number(l.pricePerUnit).toLocaleString()} ${l.currency} / ${l.unit} (negotiable)`
    : `${Number(l.pricePerUnit).toLocaleString()} ${l.currency} / ${l.unit}`;
}

function buildWhatsApp(number: string, listing: MarketListing) {
  const text = encodeURIComponent(
    `Hi, I found your listing on Alkebulan Market for *${listing.productName}*. I'd like to enquire about a bulk order. Can we discuss details?`
  );
  const clean = number.replace(/\s+/g, "");
  return `https://wa.me/${clean.startsWith("+") ? clean.slice(1) : clean}?text=${text}`;
}

export default function ListingPage() {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState<MarketListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [enquirySent, setEnquirySent] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerContact, setBuyerContact] = useState("");
  const [qty, setQty] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id) return;
    fetch(`/api/market?q=${id}`)
      .then(r => r.json())
      .then((data: MarketListing[]) => {
        const found = data.find(l => l.id === id);
        setListing(found ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-3xl mx-auto px-4 py-20 animate-pulse">
          <div className="h-8 bg-sand rounded w-2/3 mb-4" />
          <div className="h-4 bg-sand rounded w-full mb-2" />
          <div className="h-4 bg-sand rounded w-4/5" />
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-5xl mb-4">🔍</p>
          <h1 className="font-display text-3xl font-bold text-ink mb-3">Listing not found</h1>
          <p className="text-muted mb-6">This listing may have been removed or the link is incorrect.</p>
          <Link href="/market" className="inline-block bg-deep-green text-ivory font-bold px-6 py-3 rounded-xl">
            ← Browse market
          </Link>
        </div>
      </div>
    );
  }

  const icon = CATEGORY_ICONS[listing.category] ?? "📦";

  function sendEnquiry() {
    if (!buyerName.trim() || !buyerContact.trim() || !qty.trim()) return;
    // If WhatsApp available, open it; otherwise show confirmation
    if (listing!.contactWhatsapp) {
      const text = encodeURIComponent(
        `Hi ${listing!.sellerName || "seller"}, I'm ${buyerName} and I'd like to order *${qty} ${listing!.unit}* of *${listing!.productName}*.\n\nContact: ${buyerContact}${message ? "\n\n" + message : ""}\n\n(via Alkebulan Market)`
      );
      const clean = listing!.contactWhatsapp.replace(/\s+/g, "");
      const url = `https://wa.me/${clean.startsWith("+") ? clean.slice(1) : clean}?text=${text}`;
      window.open(url, "_blank");
    }
    setEnquirySent(true);
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        {/* Back */}
        <Link href="/market" className="inline-flex items-center gap-2 text-muted hover:text-ink text-sm mb-6 transition-colors">
          ← Back to market
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-sand rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{icon}</span>
                <span className="text-xs font-bold text-muted uppercase tracking-wide">{listing.category}</span>
              </div>

              <h1 className="font-display text-3xl font-bold text-ink mb-2">{listing.productName}</h1>

              <div className="flex items-center gap-2 text-sm text-muted mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
                {listing.country}{listing.region ? `, ${listing.region}` : ""}
                <span>·</span>
                {listing.businessName || listing.sellerName}
              </div>

              <p className="text-ink leading-relaxed mb-6">{listing.description}</p>

              {listing.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {listing.tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-warm-ivory border border-sand rounded-full text-xs text-muted">{t}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border border-sand rounded-xl p-4">
                <p className="text-xs text-muted mb-1">Price</p>
                <p className="font-bold text-deep-green">{priceDisplay(listing)}</p>
              </div>
              <div className="bg-white border border-sand rounded-xl p-4">
                <p className="text-xs text-muted mb-1">Min. order</p>
                <p className="font-bold text-ink">{listing.minOrderQuantity} {listing.unit}</p>
              </div>
              <div className="bg-white border border-sand rounded-xl p-4">
                <p className="text-xs text-muted mb-1">Available</p>
                <p className="font-bold text-ink">{listing.quantityAvailable} {listing.unit}</p>
              </div>
            </div>

            {listing.availableUntil && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                ⏳ Available until {new Date(listing.availableUntil).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </div>
            )}
          </div>

          {/* Sidebar — contact */}
          <div>
            <div className="bg-white border border-sand rounded-2xl p-6 sticky top-24">
              <h2 className="font-display text-xl font-bold text-ink mb-1">Make an enquiry</h2>
              <p className="text-sm text-muted mb-5">Fill in your details and send directly to the seller.</p>

              {enquirySent ? (
                <div className="text-center py-6">
                  <p className="text-4xl mb-3">✅</p>
                  <p className="font-bold text-deep-green mb-2">Enquiry sent!</p>
                  <p className="text-sm text-muted">The seller will respond via WhatsApp or phone.</p>
                  <button
                    onClick={() => setEnquirySent(false)}
                    className="mt-4 text-sm text-muted underline hover:text-ink"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">Your name *</label>
                    <input
                      value={buyerName}
                      onChange={e => setBuyerName(e.target.value)}
                      placeholder="e.g. Amara Diop"
                      className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">Your phone / WhatsApp *</label>
                    <input
                      value={buyerContact}
                      onChange={e => setBuyerContact(e.target.value)}
                      placeholder="+234..."
                      className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">
                      Quantity needed ({listing.unit}s) *
                    </label>
                    <input
                      value={qty}
                      onChange={e => setQty(e.target.value)}
                      placeholder={`Min ${listing.minOrderQuantity} ${listing.unit}`}
                      type="number"
                      min={listing.minOrderQuantity}
                      className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink block mb-1">Message (optional)</label>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Delivery location, preferred date, any questions..."
                      className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
                    />
                  </div>

                  <button
                    onClick={sendEnquiry}
                    disabled={!buyerName.trim() || !buyerContact.trim() || !qty.trim()}
                    className="w-full bg-deep-green text-ivory font-bold py-3 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {listing.contactWhatsapp ? "Send via WhatsApp →" : "Send enquiry →"}
                  </button>

                  {listing.contactWhatsapp && (
                    <a
                      href={buildWhatsApp(listing.contactWhatsapp, listing)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center border border-[#25D366] text-[#25D366] font-semibold py-2.5 rounded-xl hover:bg-[#25D366]/10 transition-colors text-sm"
                    >
                      💬 WhatsApp seller directly
                    </a>
                  )}
                  {listing.contactPhone && (
                    <a href={`tel:${listing.contactPhone}`} className="block text-center text-sm text-muted hover:text-ink">
                      📞 {listing.contactPhone}
                    </a>
                  )}
                  {listing.contactEmail && (
                    <a href={`mailto:${listing.contactEmail}`} className="block text-center text-sm text-muted hover:text-ink">
                      ✉️ {listing.contactEmail}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
