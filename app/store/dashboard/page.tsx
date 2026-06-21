"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import type { StoreOrder } from "@/lib/store-data";
import Link from "next/link";

interface MySite {
  slug: string;
  businessName: string;
  publishedAt: string;
}

const STATUS_CONFIG: Record<StoreOrder["status"], { label: string; color: string }> = {
  pending:   { label: "Pending",   color: "#D4874A" },
  confirmed: { label: "Confirmed", color: "#38B2CC" },
  paid:      { label: "Paid",      color: "#48BB78" },
  fulfilled: { label: "Fulfilled", color: "#A0AEC0" },
  cancelled: { label: "Cancelled", color: "#FC8181" },
};

export default function DashboardPage() {
  const [sites, setSites] = useState<MySite[]>([]);
  const [activeSite, setActiveSite] = useState<MySite | null>(null);
  const [orders, setOrders] = useState<StoreOrder[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = JSON.parse(localStorage.getItem("alkebulan_my_sites") || "[]") as MySite[];
      setSites(stored);
      if (stored.length > 0) setActiveSite(stored[0]);
    } catch {}
  }, []);

  useEffect(() => {
    if (!activeSite) return;
    fetchOrders(activeSite.slug);
  }, [activeSite]);

  function fetchOrders(slug: string) {
    setLoadingOrders(true);
    fetch(`/api/store/orders/${slug}`)
      .then(r => r.json())
      .then(data => { setOrders(Array.isArray(data) ? data : []); setLoadingOrders(false); })
      .catch(() => { setOrders([]); setLoadingOrders(false); });
  }

  async function updateStatus(orderId: string, status: StoreOrder["status"]) {
    if (!activeSite) return;
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
    await fetch(`/api/store/orders/${activeSite.slug}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, status }),
    });
  }

  if (!mounted) return null;

  if (sites.length === 0) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <p className="text-5xl mb-6">🏪</p>
          <h1 className="font-display text-3xl font-bold text-ink mb-3">No sites yet</h1>
          <p className="text-muted mb-8">Build your first business site — it takes 5 minutes.</p>
          <Link href="/store/new" className="inline-block bg-deep-green text-ivory font-bold px-8 py-4 rounded-2xl hover:bg-mid-green transition-colors">
            Build my site →
          </Link>
        </div>
      </div>
    );
  }

  const pendingCount = orders.filter(o => o.status === "pending").length;

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-1">My stores</p>
            <h1 className="font-display text-3xl font-bold text-ink">
              Dashboard
              {pendingCount > 0 && (
                <span className="ml-3 text-sm font-bold bg-gold text-deep-green px-2.5 py-1 rounded-full">
                  {pendingCount} new
                </span>
              )}
            </h1>
          </div>
          <Link href="/store/new" className="bg-deep-green text-ivory text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-mid-green transition-colors">
            + Build another site
          </Link>
        </div>

        {/* Site selector */}
        {sites.length > 1 && (
          <div className="flex gap-2 mb-6 flex-wrap">
            {sites.map(site => (
              <button
                key={site.slug}
                onClick={() => setActiveSite(site)}
                className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-colors ${
                  activeSite?.slug === site.slug
                    ? "bg-deep-green text-ivory border-deep-green"
                    : "bg-white border-border text-ink hover:border-deep-green"
                }`}
              >
                {site.businessName}
              </button>
            ))}
          </div>
        )}

        {activeSite && (
          <>
            {/* Site card */}
            <div className="bg-white border border-border rounded-2xl p-5 mb-8 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="font-bold text-ink">{activeSite.businessName}</p>
                <p className="text-xs text-muted mt-0.5 font-mono">/store/{activeSite.slug}</p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <a
                  href={`/store/${activeSite.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-deep-green hover:underline"
                >
                  View live site →
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(`${window.location.origin}/store/${activeSite.slug}`)}
                  className="text-xs text-muted border border-border px-3 py-1.5 rounded-lg hover:border-deep-green transition-colors"
                >
                  Copy link
                </button>
              </div>
            </div>

            {/* Orders */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-xl text-ink">
                  Orders
                  {orders.length > 0 && (
                    <span className="ml-2 text-sm font-normal text-muted">({orders.length})</span>
                  )}
                </h2>
                <button
                  onClick={() => fetchOrders(activeSite.slug)}
                  className="text-xs text-muted hover:text-ink transition-colors"
                >
                  ↻ Refresh
                </button>
              </div>

              {loadingOrders ? (
                <div className="bg-white border border-border rounded-2xl p-10 text-center">
                  <p className="text-sm text-muted">Loading orders...</p>
                </div>
              ) : orders.length === 0 ? (
                <div className="bg-white border border-border rounded-2xl p-10 text-center">
                  <p className="text-3xl mb-3">📦</p>
                  <p className="font-semibold text-ink mb-1">No orders yet</p>
                  <p className="text-sm text-muted">
                    Share your site link to start receiving orders.
                  </p>
                  <button
                    onClick={() => navigator.clipboard.writeText(`${window.location.origin}/store/${activeSite.slug}`)}
                    className="mt-4 text-sm font-bold text-deep-green hover:underline"
                  >
                    Copy site link →
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {orders.map(order => (
                    <div key={order.id} className="bg-white border border-border rounded-2xl p-5">
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                        <div>
                          <p className="font-bold text-ink">{order.customerName}</p>
                          <p className="text-xs text-muted mt-0.5">{order.customerPhone}</p>
                          {order.customerEmail && (
                            <p className="text-xs text-muted">{order.customerEmail}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor: `${STATUS_CONFIG[order.status].color}20`,
                              color: STATUS_CONFIG[order.status].color,
                            }}
                          >
                            {STATUS_CONFIG[order.status].label}
                          </span>
                          <span className="text-xs text-muted">
                            {new Date(order.createdAt).toLocaleDateString("en-GB", {
                              day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="mb-3 space-y-1">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-ink font-medium">
                              {item.quantity}× {item.offeringName}
                            </span>
                            {item.priceAtOrder && (
                              <span className="text-muted">{item.priceAtOrder}</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {order.notes && (
                        <p className="text-xs text-muted italic bg-warm-ivory rounded-lg px-3 py-2 mb-3">
                          &ldquo;{order.notes}&rdquo;
                        </p>
                      )}

                      <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-border">
                        <span className="text-xs text-muted">
                          Payment:{" "}
                          {order.paymentMethod === "flutterwave"
                            ? "Card / Bank"
                            : order.paymentMethod === "wave"
                            ? "Wave"
                            : "Cash"}
                        </span>

                        <div className="flex gap-2 flex-wrap">
                          {order.status === "pending" && (
                            <button
                              onClick={() => updateStatus(order.id, "confirmed")}
                              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-deep-green text-ivory hover:bg-mid-green transition-colors"
                            >
                              Confirm
                            </button>
                          )}
                          {(order.status === "confirmed" || order.status === "paid") && (
                            <button
                              onClick={() => updateStatus(order.id, "fulfilled")}
                              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-deep-green text-ivory hover:bg-mid-green transition-colors"
                            >
                              Mark fulfilled
                            </button>
                          )}
                          {order.status !== "cancelled" && order.status !== "fulfilled" && (
                            <button
                              onClick={() => updateStatus(order.id, "cancelled")}
                              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border text-muted hover:border-red-300 hover:text-red-500 transition-colors"
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>

                      <p className="text-xs font-mono text-muted/50 mt-2">{order.id}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
