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
  const formatted = Number(l.pricePerUnit).toLocaleString();
  return l.priceType === "negotiable"
    ? `${formatted} ${l.currency} / ${l.unit} (negotiable)`
    : `${formatted} ${l.currency} / ${l.unit}`;
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

interface EnquiryForm {
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  buyerBusiness: string;
  quantity: string;
  message: string;
}

const EMPTY_FORM: EnquiryForm = {
  buyerName: "",
  buyerPhone: "",
  buyerEmail: "",
  buyerBusiness: "",
  quantity: "",
  message: "",
};

export default function ListingPage() {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState<MarketListing | null>(null);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState<EnquiryForm>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [errors, setErrors] = useState<Partial<EnquiryForm>>({});

  useEffect(() => {
    if (!id) return;
    fetch(`/api/market/${id}`)
      .then(r => r.json())
      .then((data: MarketListing) => {
        setListing(data?.id ? data : null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  function set(field: keyof EnquiryForm) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function validate(): boolean {
    const e: Partial<EnquiryForm> = {};
    if (!form.buyerName.trim()) e.buyerName = "Required";
    if (!form.buyerPhone.trim()) e.buyerPhone = "Required";
    if (!form.quantity.trim() || isNaN(Number(form.quantity))) e.quantity = "Enter a number";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (!validate() || !listing) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/market/${listing.id}/enquire`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buyerName: form.buyerName.trim(),
          buyerPhone: form.buyerPhone.trim(),
          buyerEmail: form.buyerEmail.trim() || undefined,
          buyerBusiness: form.buyerBusiness.trim() || undefined,
          quantity: form.quantity.trim(),
          message: form.message.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (res.ok && data.id) {
        setRefId(data.id);
        setSubmitted(true);
      } else {
        setErrors({ buyerName: data.error ?? "Something went wrong — try again" });
      }
    } catch {
      setErrors({ buyerName: "Network error — try again" });
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-4xl mx-auto px-4 py-20 animate-pulse space-y-4">
          <div className="h-8 bg-sand rounded w-2/3" />
          <div className="h-4 bg-sand rounded w-full" />
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

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <Link href="/market" className="inline-flex items-center gap-1.5 text-muted hover:text-ink text-sm mb-6 transition-colors">
          ← Market
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Main ── */}
          <div className="lg:col-span-3 space-y-5">

            {/* Header card */}
            <div className="bg-white border border-sand rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-bold text-muted uppercase tracking-wide">{listing.category}</span>
                <span className="ml-auto text-xs text-muted">{timeAgo(listing.publishedAt)}</span>
              </div>

              <h1 className="font-display text-3xl font-bold text-ink mb-2">
                {listing.productName}
              </h1>

              <div className="flex items-center gap-2 text-sm text-muted mb-5">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
                {listing.country}{listing.region ? `, ${listing.region}` : ""}
                <span>·</span>
                <span className="font-medium text-ink">{listing.businessName || listing.sellerName}</span>
              </div>

              <p className="text-ink leading-relaxed">{listing.description}</p>

              {listing.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {listing.tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-warm-ivory border border-sand rounded-full text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-sand rounded-xl p-4">
                <p className="text-xs text-muted mb-1">Price</p>
                <p className="font-bold text-deep-green text-sm leading-snug">{priceDisplay(listing)}</p>
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
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                ⏳ Listed until{" "}
                {new Date(listing.availableUntil).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric"
                })}
              </div>
            )}

            {/* Seller manage link */}
            <div className="bg-warm-ivory border border-sand rounded-xl p-4 text-sm text-muted">
              <span className="font-semibold text-ink">Are you the seller?</span>{" "}
              <Link href={`/market/manage/${listing.id}`} className="text-deep-green underline hover:text-mid-green">
                View enquiries for this listing →
              </Link>
            </div>
          </div>

          {/* ── Enquiry sidebar ── */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-sand rounded-2xl p-6 sticky top-24">

              {submitted ? (
                <div className="text-center py-4">
                  <p className="text-5xl mb-4">✅</p>
                  <h2 className="font-display text-xl font-bold text-deep-green mb-2">
                    Enquiry sent!
                  </h2>
                  <p className="text-sm text-muted mb-4">
                    The seller will see your request and respond. Your reference:
                  </p>
                  <code className="block bg-warm-ivory border border-sand rounded-lg px-3 py-2 text-xs text-ink font-mono mb-6">
                    {refId}
                  </code>
                  <button
                    onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                    className="text-sm text-muted underline hover:text-ink"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-bold text-ink mb-1">Make an enquiry</h2>
                  <p className="text-sm text-muted mb-5">
                    Your request goes directly to {listing.sellerName || "the seller"} on this platform.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-ink block mb-1">Your name *</label>
                      <input
                        value={form.buyerName}
                        onChange={set("buyerName")}
                        placeholder="e.g. Aminata Kouyaté"
                        className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                      />
                      {errors.buyerName && <p className="text-red-500 text-xs mt-1">{errors.buyerName}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-ink block mb-1">Business name (optional)</label>
                      <input
                        value={form.buyerBusiness}
                        onChange={set("buyerBusiness")}
                        placeholder="e.g. Kouyaté Catering"
                        className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-ink block mb-1">Phone / WhatsApp *</label>
                      <input
                        value={form.buyerPhone}
                        onChange={set("buyerPhone")}
                        placeholder="+224…"
                        className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                      />
                      {errors.buyerPhone && <p className="text-red-500 text-xs mt-1">{errors.buyerPhone}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-ink block mb-1">Email (optional)</label>
                      <input
                        type="email"
                        value={form.buyerEmail}
                        onChange={set("buyerEmail")}
                        placeholder="you@example.com"
                        className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-ink block mb-1">
                        Quantity needed ({listing.unit}s) *
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={form.quantity}
                          onChange={set("quantity")}
                          placeholder={listing.minOrderQuantity}
                          min={listing.minOrderQuantity}
                          className="flex-1 border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                        />
                        <span className="text-sm text-muted font-medium">{listing.unit}</span>
                      </div>
                      {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
                      <p className="text-xs text-muted mt-1">Minimum: {listing.minOrderQuantity} {listing.unit}</p>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-ink block mb-1">Message (optional)</label>
                      <textarea
                        value={form.message}
                        onChange={set("message")}
                        rows={3}
                        placeholder="Delivery location, timing, questions about the product…"
                        className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
                      />
                    </div>

                    <button
                      onClick={submit}
                      disabled={submitting}
                      className="w-full bg-deep-green text-ivory font-bold py-3 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Send enquiry →"}
                    </button>

                    <p className="text-xs text-muted text-center">
                      Your details are shared only with this seller.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
