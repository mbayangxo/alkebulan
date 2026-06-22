"use client";

import { use, useState, useEffect } from "react";
import { SITE_THEMES, type StoreSite, type SiteOffering } from "@/lib/store-data";
import Link from "next/link";

const WAVE_COUNTRIES = ["Senegal", "Côte d'Ivoire", "Mali", "Burkina Faso", "Guinea", "Cameroon", "Uganda", "Tanzania"];

type PayMethod = "flutterwave" | "wave" | "cash";

const PAYMENT_CONFIGS: Record<PayMethod, { icon: string; label: string; sub: string }> = {
  flutterwave: { icon: "💳", label: "Card / Bank / Mobile Money", sub: "via Flutterwave — secure online payment" },
  wave:        { icon: "🌊", label: "Wave",                       sub: "Pay instantly with Wave mobile money" },
  cash:        { icon: "💵", label: "Cash on delivery / pickup",  sub: "Pay when you receive your order" },
};

type OrderStep = "idle" | "form" | "submitting" | "redirecting" | "confirmed";

interface OrderForm {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  quantity: number;
  notes: string;
  paymentMethod: "flutterwave" | "wave" | "cash";
}

export default function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [site, setSite] = useState<StoreSite | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState<SiteOffering | null>(null);
  const [orderStep, setOrderStep] = useState<OrderStep>("idle");
  const [orderId, setOrderId] = useState("");
  const [form, setForm] = useState<OrderForm>({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    quantity: 1,
    notes: "",
    paymentMethod: "flutterwave",
  });

  useEffect(() => {
    fetch(`/api/store/${slug}`)
      .then(res => {
        if (!res.ok) { setNotFound(true); setLoading(false); return null; }
        return res.json();
      })
      .then(data => {
        if (data && !data.error) {
          setSite(data);
          // Record view (fire and forget)
          fetch(`/api/store/analytics/${slug}`, { method: "POST" }).catch(() => {});
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch(() => { setNotFound(true); setLoading(false); });
  }, [slug]);

  const theme = site ? (SITE_THEMES[site.colorTheme] ?? SITE_THEMES.forest) : SITE_THEMES.forest;
  const showWave = site ? WAVE_COUNTRIES.includes(site.country) : false;
  const isService = site?.industry === "service" || site?.industry === "professional";

  function openOrder(offering: SiteOffering) {
    setSelectedOffering(offering);
    setOrderStep("form");
    setForm(prev => ({
      ...prev,
      quantity: 1,
      notes: "",
      paymentMethod: showWave ? "wave" : "flutterwave",
    }));
  }

  function closeOrder() {
    if (orderStep === "submitting" || orderStep === "redirecting") return;
    setSelectedOffering(null);
    setOrderStep("idle");
    setOrderId("");
  }

  async function submitOrder() {
    if (!site || !selectedOffering) return;
    setOrderStep("submitting");

    try {
      const res = await fetch("/api/store/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteSlug: slug,
          customerName: form.customerName,
          customerPhone: form.customerPhone,
          customerEmail: form.customerEmail || undefined,
          items: [{
            offeringId: selectedOffering.id,
            offeringName: selectedOffering.name,
            quantity: form.quantity,
            priceAtOrder: selectedOffering.price,
          }],
          notes: form.notes || undefined,
          paymentMethod: form.paymentMethod,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setOrderId(data.orderId);
        if (data.paymentUrl) {
          setOrderStep("redirecting");
          window.location.href = data.paymentUrl;
        } else {
          setOrderStep("confirmed");
        }
      } else {
        setOrderStep("form");
        alert("Failed to place order. Please try again.");
      }
    } catch {
      setOrderStep("form");
      alert("Something went wrong. Please try again.");
    }
  }

  if (loading) {
    return (
      <div style={{ backgroundColor: "#1B3A2B", minHeight: "100vh" }} className="flex items-center justify-center">
        <div className="text-center">
          <div
            className="w-10 h-10 rounded-full border-2 animate-spin mx-auto mb-4"
            style={{ borderColor: "#E05A18", borderTopColor: "transparent" }}
          />
          <p className="text-sm" style={{ color: "#A89870" }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (notFound || !site) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-4xl mb-4">🏪</p>
          <h1 className="font-bold text-xl text-gray-900 mb-2">Store not found</h1>
          <p className="text-gray-500 text-sm mb-6">This store hasn't been published yet, or the link is wrong.</p>
          <Link href="/store/new" className="text-sm font-bold text-green-800 hover:underline">
            Build your own site →
          </Link>
        </div>
      </div>
    );
  }

  const canSubmit = form.customerName.trim().length > 0 && form.customerPhone.trim().length > 0 && form.quantity >= 1;

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: "100vh" }}>

      {/* Header */}
      <header
        className="sticky top-0 z-30 px-4 sm:px-6 py-3"
        style={{ backgroundColor: theme.bg, borderBottom: `1px solid ${theme.border}` }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: theme.accent, color: theme.accentText }}
            >
              {site.businessName[0]?.toUpperCase()}
            </div>
            <span className="font-bold text-base" style={{ color: theme.text }}>
              {site.businessName}
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-5 text-sm" style={{ color: theme.muted }}>
            <a href="#offerings" className="hover:opacity-80 transition-opacity">
              {isService ? "Services" : "Shop"}
            </a>
            <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 text-center" style={{ backgroundColor: theme.bg }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: theme.accent }}>
            {site.tagline}
          </p>
          <h1
            className="text-3xl sm:text-5xl font-bold leading-tight mb-5"
            style={{ color: theme.text, fontFamily: "Georgia, serif" }}
          >
            {site.heroHeadline}
          </h1>
          <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto" style={{ color: theme.muted }}>
            {site.heroSubtext}
          </p>
          <a
            href="#offerings"
            className="inline-block font-bold px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme.accent, color: theme.accentText }}
          >
            {isService ? "Book a service →" : "Shop now →"}
          </a>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="px-4 sm:px-6 py-16" style={{ backgroundColor: theme.card }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10" style={{ color: theme.text }}>
            {isService ? "What we offer" : "Our products"}
          </h2>
          <div
            className={`grid gap-5 ${
              site.offerings.length === 1
                ? "max-w-sm mx-auto"
                : site.offerings.length === 2
                ? "sm:grid-cols-2 max-w-2xl mx-auto"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {site.offerings.map(offering => (
              <div
                key={offering.id}
                className="rounded-2xl p-5 flex flex-col"
                style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
              >
                <h3 className="font-bold text-base mb-2" style={{ color: theme.text }}>
                  {offering.name}
                </h3>
                {offering.description && (
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: theme.muted }}>
                    {offering.description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto pt-2">
                  {offering.price
                    ? <span className="font-bold" style={{ color: theme.accent }}>{offering.price}</span>
                    : <span />
                  }
                  <button
                    onClick={() => openOrder(offering)}
                    className="font-bold text-sm px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90"
                    style={{ backgroundColor: theme.accent, color: theme.accentText }}
                  >
                    {isService ? "Book" : "Order"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      {site.aboutText && (
        <section id="about" className="px-4 sm:px-6 py-16" style={{ backgroundColor: theme.bg }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-5" style={{ color: theme.text }}>
              About {site.businessName}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: theme.muted }}>
              {site.aboutText}
            </p>
            {site.ownerName && (
              <p className="mt-6 text-sm font-semibold" style={{ color: theme.accent }}>
                — {site.ownerName}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Contact */}
      {(site.contactPhone || site.contactEmail || site.contactWhatsapp) && (
        <section
          id="contact"
          className="px-4 sm:px-6 py-12"
          style={{ backgroundColor: theme.card, borderTop: `1px solid ${theme.border}` }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-lg font-bold mb-6" style={{ color: theme.text }}>Get in touch</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {site.contactPhone && (
                <a
                  href={`tel:${site.contactPhone}`}
                  className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl transition-opacity hover:opacity-80"
                  style={{ backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}` }}
                >
                  📞 {site.contactPhone}
                </a>
              )}
              {site.contactWhatsapp && (
                <a
                  href={`https://wa.me/${site.contactWhatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl transition-opacity hover:opacity-80"
                  style={{ backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}` }}
                >
                  💬 WhatsApp
                </a>
              )}
              {site.contactEmail && (
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl transition-opacity hover:opacity-80"
                  style={{ backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}` }}
                >
                  ✉️ {site.contactEmail}
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer
        className="px-4 py-6 text-center"
        style={{ backgroundColor: theme.bg, borderTop: `1px solid ${theme.border}` }}
      >
        <p className="text-xs" style={{ color: theme.muted }}>
          {site.businessName} · {site.location}
          <span className="mx-2">·</span>
          Powered by{" "}
          <Link href="/" className="font-semibold hover:underline" style={{ color: theme.accent }}>
            Alkebulan
          </Link>
        </p>
      </footer>

      {/* Order Modal */}
      {orderStep !== "idle" && selectedOffering && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeOrder}
          />

          <div
            className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl mx-0 sm:mx-4 overflow-hidden"
            style={{ backgroundColor: theme.card }}
          >

            {/* Confirmed */}
            {orderStep === "confirmed" && (
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: theme.text }}>Order placed!</h3>
                <p className="text-sm mb-1" style={{ color: theme.muted }}>
                  Your order for{" "}
                  <strong style={{ color: theme.text }}>{selectedOffering.name}</strong>{" "}
                  has been received.
                </p>
                <p className="text-xs font-mono mb-4" style={{ color: theme.muted }}>{orderId}</p>
                <p className="text-sm mb-6" style={{ color: theme.muted }}>
                  {site.businessName} will confirm with you at {form.customerPhone}.
                </p>
                <button
                  onClick={closeOrder}
                  className="w-full font-bold py-3 rounded-xl text-sm"
                  style={{ backgroundColor: theme.accent, color: theme.accentText }}
                >
                  Done
                </button>
              </div>
            )}

            {/* Redirecting */}
            {orderStep === "redirecting" && (
              <div className="p-8 text-center">
                <div
                  className="w-10 h-10 rounded-full border-2 animate-spin mx-auto mb-4"
                  style={{ borderColor: theme.accent, borderTopColor: "transparent" }}
                />
                <h3 className="font-bold text-base mb-2" style={{ color: theme.text }}>
                  Taking you to payment...
                </h3>
                <p className="text-xs font-mono" style={{ color: theme.muted }}>{orderId}</p>
              </div>
            )}

            {/* Submitting */}
            {orderStep === "submitting" && (
              <div className="p-8 text-center">
                <div
                  className="w-10 h-10 rounded-full border-2 animate-spin mx-auto mb-4"
                  style={{ borderColor: theme.accent, borderTopColor: "transparent" }}
                />
                <p className="text-sm" style={{ color: theme.muted }}>Placing your order...</p>
              </div>
            )}

            {/* Order form */}
            {orderStep === "form" && (
              <div className="p-5 max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: theme.accent }}>
                      {isService ? "Book" : "Order"}
                    </p>
                    <h3 className="font-bold text-base" style={{ color: theme.text }}>
                      {selectedOffering.name}
                    </h3>
                    {selectedOffering.price && (
                      <p className="text-sm" style={{ color: theme.muted }}>{selectedOffering.price}</p>
                    )}
                  </div>
                  <button
                    onClick={closeOrder}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: theme.border, color: theme.muted }}
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Quantity */}
                  {!isService && (
                    <div>
                      <label className="block text-xs font-bold mb-2" style={{ color: theme.text }}>
                        Quantity
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setForm(f => ({ ...f, quantity: Math.max(1, f.quantity - 1) }))}
                          className="w-9 h-9 rounded-lg font-bold flex items-center justify-center"
                          style={{ backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}` }}
                        >
                          −
                        </button>
                        <span className="font-bold text-lg w-8 text-center" style={{ color: theme.text }}>
                          {form.quantity}
                        </span>
                        <button
                          onClick={() => setForm(f => ({ ...f, quantity: f.quantity + 1 }))}
                          className="w-9 h-9 rounded-lg font-bold flex items-center justify-center"
                          style={{ backgroundColor: theme.accent, color: theme.accentText }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold mb-2" style={{ color: theme.text }}>
                      Your name *
                    </label>
                    <input
                      type="text"
                      value={form.customerName}
                      onChange={e => setForm(f => ({ ...f, customerName: e.target.value }))}
                      placeholder="Full name"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                      style={{ backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}` }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold mb-2" style={{ color: theme.text }}>
                      Phone number *
                    </label>
                    <input
                      type="tel"
                      value={form.customerPhone}
                      onChange={e => setForm(f => ({ ...f, customerPhone: e.target.value }))}
                      placeholder="+221 77 000 0000"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                      style={{ backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}` }}
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold mb-2" style={{ color: theme.text }}>
                      Notes{" "}
                      <span className="font-normal" style={{ color: theme.muted }}>(optional)</span>
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                      placeholder="Delivery address, size, colour, special requests..."
                      rows={2}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                      style={{ backgroundColor: theme.bg, color: theme.text, border: `1px solid ${theme.border}` }}
                    />
                  </div>

                  {/* Payment method */}
                  <div>
                    <label className="block text-xs font-bold mb-3" style={{ color: theme.text }}>
                      How would you like to pay?
                    </label>
                    <div className="space-y-2">
                      {(["flutterwave", ...(showWave ? (["wave"] as PayMethod[]) : []), "cash"] as PayMethod[]).map(method => {
                        const active = form.paymentMethod === method;
                        const cfg = PAYMENT_CONFIGS[method];
                        return (
                          <button
                            key={method}
                            onClick={() => setForm(f => ({ ...f, paymentMethod: method }))}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all"
                            style={{
                              backgroundColor: active ? theme.accent : theme.bg,
                              color: active ? theme.accentText : theme.text,
                              border: `1px solid ${active ? theme.accent : theme.border}`,
                            }}
                          >
                            <span className="text-lg">{cfg.icon}</span>
                            <div>
                              <p className="font-bold text-sm">{cfg.label}</p>
                              <p className="text-xs opacity-70">{cfg.sub}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={submitOrder}
                    disabled={!canSubmit}
                    className="w-full font-bold py-4 rounded-xl text-sm transition-opacity disabled:opacity-40"
                    style={{ backgroundColor: theme.accent, color: theme.accentText }}
                  >
                    {form.paymentMethod === "cash" ? "Place order →" : "Continue to payment →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
