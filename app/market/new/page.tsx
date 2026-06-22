"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { MARKET_CATEGORIES, UNITS, CURRENCIES_BY_COUNTRY } from "@/lib/market-data";
import type { MarketCategory, PriceType } from "@/lib/market-data";
import { ALL_COUNTRY_PROGRAMS } from "@/lib/data/all-country-programs";

const COUNTRIES = ALL_COUNTRY_PROGRAMS.map(p => p.country).sort();

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

export default function NewListingPage() {
  const [step, setStep] = useState<"form" | "done">("form");
  const [submitting, setSubmitting] = useState(false);
  const [publishedId, setPublishedId] = useState("");

  // Form fields
  const [sellerName, setSellerName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState<MarketCategory | "">("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [unit, setUnit] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState("");
  const [minOrderQuantity, setMinOrderQuantity] = useState("");
  const [priceType, setPriceType] = useState<PriceType>("fixed");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [contactWhatsapp, setContactWhatsapp] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [tagsRaw, setTagsRaw] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currency = CURRENCIES_BY_COUNTRY[country] ?? "USD";

  function validate() {
    const e: Record<string, string> = {};
    if (!sellerName.trim()) e.sellerName = "Your name is required";
    if (!category) e.category = "Pick a category";
    if (!productName.trim()) e.productName = "Product name is required";
    if (!description.trim() || description.length < 30) e.description = "Describe your product in at least 30 characters";
    if (!unit) e.unit = "Pick a unit";
    if (!quantityAvailable.trim() || isNaN(Number(quantityAvailable))) e.quantityAvailable = "Enter a valid quantity";
    if (!minOrderQuantity.trim() || isNaN(Number(minOrderQuantity))) e.minOrderQuantity = "Enter a valid minimum order";
    if (priceType !== "contact" && !pricePerUnit.trim()) e.pricePerUnit = "Enter price or select 'Contact for price'";
    if (!country) e.country = "Select your country";
    if (!contactWhatsapp.trim() && !contactPhone.trim() && !contactEmail.trim()) e.contact = "Add at least one contact method";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit() {
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/market", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sellerName: sellerName.trim(),
          businessName: businessName.trim() || undefined,
          category,
          productName: productName.trim(),
          description: description.trim(),
          unit,
          quantityAvailable: quantityAvailable.trim(),
          minOrderQuantity: minOrderQuantity.trim(),
          priceType,
          pricePerUnit: priceType !== "contact" ? pricePerUnit.trim() : undefined,
          currency,
          country,
          region: region.trim() || undefined,
          contactWhatsapp: contactWhatsapp.trim() || undefined,
          contactPhone: contactPhone.trim() || undefined,
          contactEmail: contactEmail.trim() || undefined,
          availableUntil: availableUntil || undefined,
          tags: tagsRaw.split(",").map(t => t.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (res.ok && data.id) {
        setPublishedId(data.id);
        setStep("done");
      } else {
        setErrors({ _form: data.error ?? "Something went wrong" });
      }
    } catch {
      setErrors({ _form: "Network error — try again" });
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "done") {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-xl mx-auto px-4 py-24 text-center">
          <p className="text-6xl mb-6">🌾</p>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">Listed!</h1>
          <p className="text-muted mb-8">Your supply is now visible to businesses across Africa.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/market/${publishedId}`}
              className="inline-block bg-deep-green text-ivory font-bold px-6 py-3 rounded-xl hover:bg-mid-green transition-colors"
            >
              View your listing →
            </Link>
            <Link
              href="/market"
              className="inline-block border border-sand bg-white text-ink font-semibold px-6 py-3 rounded-xl hover:border-gold transition-colors"
            >
              Browse market
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const err = (field: string) => errors[field] ? (
    <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
  ) : null;

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <Link href="/market" className="inline-flex items-center gap-2 text-muted hover:text-ink text-sm mb-6 transition-colors">
          ← Back to market
        </Link>

        <h1 className="font-display text-3xl font-bold text-ink mb-2">List your supply</h1>
        <p className="text-muted mb-8">
          Farmers, producers, and wholesale sellers. No middlemen — buyers contact you directly.
        </p>

        {errors._form && (
          <div className="bg-red-earth/10 border border-red-earth/30 rounded-xl p-4 mb-6 text-sm text-red-earth">
            {errors._form}
          </div>
        )}

        <div className="bg-white border border-sand rounded-2xl p-6 space-y-6">

          {/* Seller info */}
          <div>
            <h2 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wide">About you</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Your name *</label>
                <input
                  value={sellerName}
                  onChange={e => setSellerName(e.target.value)}
                  placeholder="e.g. Kwame Asante"
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
                {err("sellerName")}
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Business / farm name (optional)</label>
                <input
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                  placeholder="e.g. Asante Farms"
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </div>
            </div>
          </div>

          <hr className="border-sand" />

          {/* Product */}
          <div>
            <h2 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wide">Your product</h2>

            <div className="mb-4">
              <label className="text-xs font-semibold text-ink block mb-2">Category *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MARKET_CATEGORIES.map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-colors ${
                      category === c
                        ? "bg-deep-green text-ivory border-deep-green"
                        : "bg-white border-sand text-ink hover:border-gold"
                    }`}
                  >
                    <span>{CATEGORY_ICONS[c]}</span>
                    <span className="truncate">{c}</span>
                  </button>
                ))}
              </div>
              {err("category")}
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-ink block mb-1">Product name *</label>
              <input
                value={productName}
                onChange={e => setProductName(e.target.value)}
                placeholder="e.g. Fresh plum tomatoes, White maize (shelled)"
                className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              {err("productName")}
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-ink block mb-1">Description *</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
                placeholder="Describe your product honestly — quality, grade, how it was grown/produced, storage, delivery options, anything a buyer needs to know."
                className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 resize-none"
              />
              {err("description")}
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-ink block mb-1">Tags (comma-separated, optional)</label>
              <input
                value={tagsRaw}
                onChange={e => setTagsRaw(e.target.value)}
                placeholder="e.g. organic, weekly harvest, cold chain available"
                className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
            </div>
          </div>

          <hr className="border-sand" />

          {/* Quantities */}
          <div>
            <h2 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wide">Quantities &amp; pricing</h2>

            <div className="mb-4">
              <label className="text-xs font-semibold text-ink block mb-1">Unit *</label>
              <select
                value={unit}
                onChange={e => setUnit(e.target.value)}
                className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40"
              >
                <option value="">Select unit…</option>
                {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
              {err("unit")}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Quantity available *</label>
                <input
                  type="number"
                  value={quantityAvailable}
                  onChange={e => setQuantityAvailable(e.target.value)}
                  placeholder="500"
                  min="1"
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
                {err("quantityAvailable")}
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Minimum order *</label>
                <input
                  type="number"
                  value={minOrderQuantity}
                  onChange={e => setMinOrderQuantity(e.target.value)}
                  placeholder="50"
                  min="1"
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
                {err("minOrderQuantity")}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-ink block mb-2">Pricing *</label>
              <div className="flex gap-2 mb-3">
                {(["fixed", "negotiable", "contact"] as PriceType[]).map(pt => (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => setPriceType(pt)}
                    className={`flex-1 py-2 rounded-xl border text-sm font-medium transition-colors ${
                      priceType === pt ? "bg-deep-green text-ivory border-deep-green" : "bg-white border-sand text-ink hover:border-gold"
                    }`}
                  >
                    {pt === "fixed" ? "Fixed price" : pt === "negotiable" ? "Negotiable" : "Contact for price"}
                  </button>
                ))}
              </div>

              {priceType !== "contact" && (
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    value={pricePerUnit}
                    onChange={e => setPricePerUnit(e.target.value)}
                    placeholder="e.g. 45"
                    min="0"
                    className="flex-1 border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                  />
                  <span className="text-sm font-semibold text-muted">{currency}{unit ? ` / ${unit}` : ""}</span>
                </div>
              )}
              {err("pricePerUnit")}
            </div>

            <div>
              <label className="text-xs font-semibold text-ink block mb-1">Available until (optional)</label>
              <input
                type="date"
                value={availableUntil}
                onChange={e => setAvailableUntil(e.target.value)}
                className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <p className="text-xs text-muted mt-1">Leave blank for ongoing supply.</p>
            </div>
          </div>

          <hr className="border-sand" />

          {/* Location */}
          <div>
            <h2 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wide">Location</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Country *</label>
                <select
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40"
                >
                  <option value="">Select…</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {err("country")}
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Region / city (optional)</label>
                <input
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  placeholder="e.g. Ashanti, Lagos Island"
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </div>
            </div>
          </div>

          <hr className="border-sand" />

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-ink mb-4 text-sm uppercase tracking-wide">How buyers reach you</h2>
            <p className="text-xs text-muted mb-4">Add at least one. WhatsApp is recommended — most B2B buyers use it.</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">WhatsApp number (recommended)</label>
                <input
                  value={contactWhatsapp}
                  onChange={e => setContactWhatsapp(e.target.value)}
                  placeholder="+234..."
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Phone number</label>
                <input
                  value={contactPhone}
                  onChange={e => setContactPhone(e.target.value)}
                  placeholder="+234..."
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1">Email</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-sand rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                />
              </div>
              {err("contact")}
            </div>
          </div>

          <button
            onClick={submit}
            disabled={submitting}
            className="w-full bg-deep-green text-ivory font-bold py-4 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {submitting ? "Publishing…" : "Publish listing →"}
          </button>
        </div>
      </div>
    </div>
  );
}
