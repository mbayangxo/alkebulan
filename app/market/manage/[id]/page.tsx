"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import type { MarketListing, MarketEnquiry, EnquiryStatus } from "@/lib/market-data";

const STATUS_STYLES: Record<EnquiryStatus, string> = {
  new:       "bg-gold/20 text-gold-dark",
  read:      "bg-indigo/8 text-indigo",
  responded: "bg-green-50 text-green-700",
  closed:    "bg-sand text-muted",
};

const STATUS_LABELS: Record<EnquiryStatus, string> = {
  new:       "New",
  read:      "Read",
  responded: "Responded",
  closed:    "Closed",
};

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function EnquiryCard({
  enquiry,
  listingId,
  onUpdate,
}: {
  enquiry: MarketEnquiry;
  listingId: string;
  onUpdate: (updated: MarketEnquiry) => void;
}) {
  const [replyText, setReplyText] = useState(enquiry.sellerReply ?? "");
  const [open, setOpen] = useState(enquiry.status === "new");
  const [saving, setSaving] = useState(false);

  async function patch(patch: { status?: EnquiryStatus; sellerReply?: string }) {
    setSaving(true);
    try {
      const res = await fetch(`/api/market/${listingId}/enquire`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enquiryId: enquiry.id, ...patch }),
      });
      const updated = await res.json();
      if (res.ok) onUpdate(updated);
    } finally {
      setSaving(false);
    }
  }

  async function sendReply() {
    if (!replyText.trim()) return;
    await patch({ status: "responded", sellerReply: replyText.trim() });
  }

  async function markRead() {
    if (enquiry.status === "new") await patch({ status: "read" });
  }

  return (
    <div className="bg-white border border-sand rounded-2xl overflow-hidden">
      {/* Header */}
      <button
        className="w-full text-left p-5 flex items-start justify-between gap-4"
        onClick={() => { setOpen(o => !o); if (enquiry.status === "new") markRead(); }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="font-semibold text-ink">{enquiry.buyerName}</span>
            {enquiry.buyerBusiness && (
              <span className="text-xs text-muted">· {enquiry.buyerBusiness}</span>
            )}
            <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLES[enquiry.status]}`}>
              {STATUS_LABELS[enquiry.status]}
            </span>
          </div>
          <p className="text-sm text-muted">
            Wants <span className="font-medium text-ink">{enquiry.quantity} {enquiry.unit}</span>
            <span className="mx-1.5">·</span>
            {timeAgo(enquiry.createdAt)}
          </p>
        </div>
        <span className="text-muted text-lg flex-shrink-0">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-sand">
          {/* Buyer contact */}
          <div className="grid grid-cols-2 gap-3 mt-4 mb-4">
            <div>
              <p className="text-xs text-muted mb-0.5">Phone / WhatsApp</p>
              <a
                href={`tel:${enquiry.buyerPhone}`}
                className="text-sm font-medium text-deep-green hover:underline"
              >
                {enquiry.buyerPhone}
              </a>
            </div>
            {enquiry.buyerEmail && (
              <div>
                <p className="text-xs text-muted mb-0.5">Email</p>
                <a
                  href={`mailto:${enquiry.buyerEmail}`}
                  className="text-sm font-medium text-deep-green hover:underline truncate block"
                >
                  {enquiry.buyerEmail}
                </a>
              </div>
            )}
          </div>

          {enquiry.message && (
            <div className="bg-warm-ivory border border-sand rounded-xl p-3 mb-4 text-sm text-ink">
              <p className="text-xs text-muted mb-1">Message from buyer</p>
              {enquiry.message}
            </div>
          )}

          {/* Reply */}
          <div>
            <label className="text-xs font-semibold text-ink block mb-1">
              {enquiry.sellerReply ? "Your reply (sent)" : "Reply to buyer"}
            </label>
            <textarea
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              rows={3}
              placeholder="Hi, yes we can supply that. Our delivery schedule is…"
              className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
            />
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={sendReply}
                disabled={saving || !replyText.trim()}
                className="flex-1 bg-deep-green text-ivory font-semibold py-2.5 rounded-xl text-sm hover:bg-mid-green transition-colors disabled:opacity-40"
              >
                {saving ? "Saving…" : enquiry.sellerReply ? "Update reply" : "Save reply →"}
              </button>
              {enquiry.status !== "closed" && (
                <button
                  onClick={() => patch({ status: "closed" })}
                  disabled={saving}
                  className="px-4 py-2.5 border border-sand rounded-xl text-sm text-muted hover:border-gold transition-colors"
                >
                  Close
                </button>
              )}
            </div>
            <p className="text-xs text-muted mt-2">
              Replies are stored here. Contact the buyer directly using their phone or email above.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ManageListingPage() {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState<MarketListing | null>(null);
  const [enquiries, setEnquiries] = useState<MarketEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<EnquiryStatus | "all">("all");

  const load = useCallback(async () => {
    if (!id) return;
    try {
      const res = await fetch(`/api/market/${id}/enquire`);
      const data = await res.json();
      setListing(data.listing ?? null);
      setEnquiries(Array.isArray(data.enquiries) ? data.enquiries : []);
    } catch {}
    setLoading(false);
  }, [id]);

  useEffect(() => { load(); }, [load]);

  function updateEnquiry(updated: MarketEnquiry) {
    setEnquiries(prev => prev.map(e => e.id === updated.id ? updated : e));
  }

  const filtered = filter === "all" ? enquiries : enquiries.filter(e => e.status === filter);
  const newCount = enquiries.filter(e => e.status === "new").length;

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-3xl mx-auto px-4 py-20 animate-pulse space-y-4">
          <div className="h-8 bg-sand rounded w-1/2" />
          <div className="h-24 bg-sand rounded" />
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-5xl mb-4">📭</p>
          <h1 className="font-display text-2xl font-bold text-ink mb-3">Listing not found</h1>
          <Link href="/market" className="inline-block bg-deep-green text-ivory font-bold px-6 py-3 rounded-xl">
            ← Market
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Link href={`/market/${listing.id}`} className="inline-flex items-center gap-1.5 text-muted hover:text-ink text-sm mb-6 transition-colors">
          ← Back to listing
        </Link>

        <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
          <div>
            <h1 className="font-display text-2xl font-bold text-ink">{listing.productName}</h1>
            <p className="text-muted text-sm">{listing.country}{listing.region ? `, ${listing.region}` : ""}</p>
          </div>
          {newCount > 0 && (
            <span className="bg-gold/20 text-gold-dark text-sm font-bold px-3 py-1.5 rounded-full">
              {newCount} new {newCount === 1 ? "enquiry" : "enquiries"}
            </span>
          )}
        </div>

        <p className="text-sm text-muted mb-8">
          {enquiries.length} total enquiries · Bookmark this page to come back.
        </p>

        {/* Filter tabs */}
        {enquiries.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-6">
            {(["all", "new", "read", "responded", "closed"] as const).map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === s
                    ? "bg-deep-green text-ivory"
                    : "bg-white border border-sand text-ink hover:border-gold"
                }`}
              >
                {s === "all" ? `All (${enquiries.length})` : `${STATUS_LABELS[s]} (${enquiries.filter(e => e.status === s).length})`}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white border border-sand rounded-2xl">
            <p className="text-4xl mb-3">📬</p>
            <p className="font-semibold text-ink mb-1">
              {enquiries.length === 0 ? "No enquiries yet" : "No enquiries in this filter"}
            </p>
            <p className="text-sm text-muted">
              {enquiries.length === 0
                ? "Share your listing link to start receiving orders."
                : "Try a different filter."}
            </p>
            {enquiries.length === 0 && (
              <Link
                href={`/market/${listing.id}`}
                className="inline-block mt-4 text-sm text-deep-green underline hover:text-mid-green"
              >
                View your listing →
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map(e => (
              <EnquiryCard
                key={e.id}
                enquiry={e}
                listingId={listing.id}
                onUpdate={updateEnquiry}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
