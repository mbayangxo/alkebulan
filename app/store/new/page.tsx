"use client";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import { ALL_COUNTRY_PROGRAMS } from "@/lib/data/all-country-programs";
import { SITE_THEMES } from "@/lib/store-data";
import Link from "next/link";

const COUNTRIES = ALL_COUNTRY_PROGRAMS.map(p => `${p.flag} ${p.country}`);

const INDUSTRIES = [
  { id: "product", label: "Products / Retail", desc: "Fashion, beauty, crafts, electronics" },
  { id: "food", label: "Food & Catering", desc: "Restaurant, catering, packaged food" },
  { id: "farm", label: "Farm / Agriculture", desc: "Fresh produce, livestock, processing" },
  { id: "service", label: "Services", desc: "Cleaning, transport, repairs, events" },
  { id: "professional", label: "Professional", desc: "Consulting, legal, finance, education" },
];

interface Offering {
  id: string;
  name: string;
  price: string;
}

interface GeneratedContent {
  heroHeadline: string;
  heroSubtext: string;
  tagline: string;
  aboutText: string;
  offeringDescriptions: string[];
  colorTheme: keyof typeof SITE_THEMES;
}

export default function NewStorePage() {
  const [step, setStep] = useState<"form" | "preview" | "published">("form");
  const [generating, setGenerating] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishedSlug, setPublishedSlug] = useState("");

  // Form state
  const [businessName, setBusinessName] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [whatYouSell, setWhatYouSell] = useState("");
  const [offerings, setOfferings] = useState<Offering[]>([{ id: "1", name: "", price: "" }]);
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactWhatsapp, setContactWhatsapp] = useState("");

  // Generated content
  const [generated, setGenerated] = useState<GeneratedContent | null>(null);

  function addOffering() {
    setOfferings(prev => [...prev, { id: Date.now().toString(), name: "", price: "" }]);
  }

  function removeOffering(id: string) {
    setOfferings(prev => prev.filter(o => o.id !== id));
  }

  function updateOffering(id: string, field: "name" | "price", value: string) {
    setOfferings(prev => prev.map(o => o.id === id ? { ...o, [field]: value } : o));
  }

  const cleanCountry = country.replace(/^.{2,4}\s/, "");
  const validOfferings = offerings.filter(o => o.name.trim());
  const canGenerate = businessName && country && industry && whatYouSell && validOfferings.length > 0;

  async function generate() {
    if (!canGenerate) return;
    setGenerating(true);
    try {
      const res = await fetch("/api/store/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName, country: cleanCountry, location, industry,
          whatYouSell, offerings: validOfferings,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setGenerated(data.content);
        setStep("preview");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      alert("Generation failed. Please try again.");
    } finally {
      setGenerating(false);
    }
  }

  async function publish() {
    if (!generated) return;
    setPublishing(true);

    const fullOfferings = validOfferings.map((o, i) => ({
      id: o.id,
      name: o.name,
      price: o.price,
      description: generated.offeringDescriptions[i] || o.name,
    }));

    try {
      const res = await fetch("/api/store/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName, tagline: generated.tagline, industry, country: cleanCountry,
          location: location || cleanCountry, ownerName,
          heroHeadline: generated.heroHeadline, heroSubtext: generated.heroSubtext,
          aboutText: generated.aboutText, offerings: fullOfferings,
          contactPhone, contactEmail, contactWhatsapp,
          colorTheme: generated.colorTheme,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPublishedSlug(data.slug);
        setStep("published");

        // Save to localStorage for dashboard
        try {
          const existing = JSON.parse(localStorage.getItem("alkebulan_my_sites") || "[]");
          localStorage.setItem("alkebulan_my_sites", JSON.stringify([
            { slug: data.slug, businessName, publishedAt: new Date().toISOString() },
            ...existing,
          ]));
        } catch {}
      }
    } catch {
      alert("Publishing failed. Please try again.");
    } finally {
      setPublishing(false);
    }
  }

  if (step === "published") {
    const siteUrl = `/store/${publishedSlug}`;
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-display text-4xl font-bold text-ink mb-4">Your site is live.</h1>
          <p className="text-muted text-lg mb-8">Share this link with customers. They can browse and order directly.</p>

          <div className="bg-white border border-border rounded-2xl p-6 mb-6">
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-2">Your site URL</p>
            <p className="font-bold text-deep-green text-lg break-all mb-4">alkebulan.co{siteUrl}</p>
            <div className="flex gap-3">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-deep-green text-ivory font-bold py-3 rounded-xl text-sm text-center hover:bg-mid-green transition-colors"
              >
                View your site →
              </a>
              <button
                onClick={() => { navigator.clipboard.writeText(`${window.location.origin}${siteUrl}`); }}
                className="flex-1 border border-border text-ink font-semibold py-3 rounded-xl text-sm hover:border-deep-green transition-colors"
              >
                Copy link
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/store/dashboard"
              className="bg-white border border-border rounded-xl p-4 text-center hover:border-deep-green transition-colors">
              <p className="font-bold text-ink text-sm">View orders</p>
              <p className="text-xs text-muted mt-1">Manage your dashboard</p>
            </Link>
            <Link href="/store/new"
              onClick={() => { setStep("form"); setGenerated(null); }}
              className="bg-white border border-border rounded-xl p-4 text-center hover:border-deep-green transition-colors">
              <p className="font-bold text-ink text-sm">Build another site</p>
              <p className="text-xs text-muted mt-1">For a different business</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (step === "preview" && generated) {
    const theme = SITE_THEMES[generated.colorTheme] || SITE_THEMES.forest;

    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-bold text-muted uppercase tracking-wide">Preview</p>
              <h2 className="font-bold text-ink text-xl">This is what your site will look like</h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep("form")}
                className="border border-border text-ink text-sm font-semibold px-4 py-2 rounded-xl hover:border-deep-green transition-colors"
              >
                ← Edit
              </button>
              <button
                onClick={publish}
                disabled={publishing}
                className="bg-deep-green text-ivory text-sm font-bold px-6 py-2 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50"
              >
                {publishing ? "Publishing..." : "Publish →"}
              </button>
            </div>
          </div>

          {/* Site preview */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
            {/* Fake browser chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-gray-400 ml-2">
                alkebulan.co/store/your-site
              </div>
            </div>

            {/* Site header */}
            <div style={{ backgroundColor: theme.bg }} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: theme.accent, color: theme.accentText }}>
                  {businessName[0]?.toUpperCase()}
                </div>
                <span className="font-bold text-base" style={{ color: theme.text }}>{businessName}</span>
              </div>
              <div className="hidden sm:flex items-center gap-5 text-sm" style={{ color: theme.muted }}>
                <span>About</span>
                <span>{industry === "service" || industry === "professional" ? "Services" : "Shop"}</span>
                <span>Contact</span>
              </div>
            </div>

            {/* Hero */}
            <div style={{ backgroundColor: theme.bg }} className="px-6 py-16 text-center">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: theme.accent }}>{generated.tagline}</p>
              <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-5 max-w-2xl mx-auto" style={{ color: theme.text }}>
                {generated.heroHeadline}
              </h1>
              <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: theme.muted }}>
                {generated.heroSubtext}
              </p>
              <button className="font-bold px-8 py-3.5 rounded-full text-sm" style={{ backgroundColor: theme.accent, color: theme.accentText }}>
                {industry === "service" || industry === "professional" ? "Book now →" : "Shop now →"}
              </button>
            </div>

            {/* Offerings */}
            <div style={{ backgroundColor: theme.card }} className="px-6 py-12">
              <h2 className="font-bold text-xl text-center mb-8" style={{ color: theme.text }}>
                {industry === "service" || industry === "professional" ? "What we offer" : "Our products"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {validOfferings.map((o, i) => (
                  <div key={o.id} className="rounded-2xl p-5" style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}>
                    <h3 className="font-bold text-base mb-2" style={{ color: theme.text }}>{o.name}</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: theme.muted }}>
                      {generated.offeringDescriptions[i] || "Quality product from our collection"}
                    </p>
                    <div className="flex items-center justify-between">
                      {o.price && <span className="font-bold text-sm" style={{ color: theme.accent }}>{o.price}</span>}
                      <button className="text-xs font-bold px-4 py-2 rounded-lg" style={{ backgroundColor: theme.accent, color: theme.accentText }}>
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div style={{ backgroundColor: theme.bg }} className="px-6 py-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-bold text-xl mb-4" style={{ color: theme.text }}>About us</h2>
                <p className="text-base leading-relaxed" style={{ color: theme.muted }}>{generated.aboutText}</p>
              </div>
            </div>

            {/* Footer */}
            <div style={{ backgroundColor: theme.card, borderTop: `1px solid ${theme.border}` }} className="px-6 py-4 text-center">
              <p className="text-xs" style={{ color: theme.muted }}>
                Powered by <span style={{ color: theme.accent }} className="font-semibold">Alkebulan</span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button onClick={() => setStep("form")} className="border border-border text-ink text-sm font-semibold px-4 py-2.5 rounded-xl hover:border-deep-green transition-colors">
              ← Edit content
            </button>
            <button
              onClick={publish}
              disabled={publishing}
              className="bg-deep-green text-ivory text-sm font-bold px-8 py-2.5 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-50"
            >
              {publishing ? "Publishing..." : "Publish my site →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-4">
            BUSINESS SITE BUILDER
          </div>
          <h1 className="font-display text-4xl font-bold text-ivory mb-3 leading-tight">
            Your business, online in 5 minutes.
          </h1>
          <p className="text-ivory/75 text-lg leading-relaxed">
            Tell us what you sell. Our AI builds a professional site — beautiful, mobile-first, with real ordering and payments built in.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">

        {/* Business basics */}
        <div className="bg-white border border-border rounded-2xl p-6">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-5">Your business</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Business name (required)</label>
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder="e.g. Fatou Cosmetics, Kemi's Kitchen"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Your name</label>
              <input
                type="text"
                value={ownerName}
                onChange={e => setOwnerName(e.target.value)}
                placeholder="e.g. Fatou Diallo"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Country (required)</label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-gold"
              >
                <option value="">Select country</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-ink mb-2">City / area</label>
              <input
                type="text"
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="e.g. Dakar, Lagos Island, Westlands"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>
        </div>

        {/* Industry */}
        <div className="bg-white border border-border rounded-2xl p-6">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-4">Type of business (required)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INDUSTRIES.map(({ id, label, desc }) => (
              <button
                key={id}
                onClick={() => setIndustry(id)}
                className={`text-left p-4 rounded-xl border transition-colors ${
                  industry === id ? "bg-deep-green text-ivory border-deep-green" : "bg-white border-border text-ink hover:border-deep-green"
                }`}
              >
                <p className="font-bold text-sm">{label}</p>
                <p className={`text-xs mt-0.5 ${industry === id ? "text-ivory/70" : "text-muted"}`}>{desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* What you sell */}
        <div className="bg-white border border-border rounded-2xl p-6">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-4">What you sell or offer (required)</p>
          <div className="mb-4">
            <label className="block text-xs font-bold text-ink mb-2">Describe your business in 1–2 sentences</label>
            <textarea
              value={whatYouSell}
              onChange={e => setWhatYouSell(e.target.value)}
              placeholder="e.g. We make handmade shea butter skincare products for women in Accra. Everything is natural, no chemicals, priced for everyday women."
              rows={3}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-ink mb-3">
              Your products or services — add at least one
            </label>
            <div className="space-y-2 mb-3">
              {offerings.map((offering, i) => (
                <div key={offering.id} className="flex gap-2">
                  <input
                    type="text"
                    value={offering.name}
                    onChange={e => updateOffering(offering.id, "name", e.target.value)}
                    placeholder={`e.g. ${i === 0 ? "Shea Butter Body Cream" : i === 1 ? "Coconut Hair Oil" : "Custom Order"}`}
                    className="flex-1 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  <input
                    type="text"
                    value={offering.price}
                    onChange={e => updateOffering(offering.id, "price", e.target.value)}
                    placeholder="Price (optional)"
                    className="w-36 border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-gold"
                  />
                  {offerings.length > 1 && (
                    <button
                      onClick={() => removeOffering(offering.id)}
                      className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink border border-border rounded-xl flex-shrink-0"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={addOffering}
              className="text-xs font-bold text-deep-green hover:underline"
            >
              + Add another
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white border border-border rounded-2xl p-6">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-4">How customers reach you</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Phone</label>
              <input
                type="tel"
                value={contactPhone}
                onChange={e => setContactPhone(e.target.value)}
                placeholder="+221 77 000 0000"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink mb-2">WhatsApp number</label>
              <input
                type="tel"
                value={contactWhatsapp}
                onChange={e => setContactWhatsapp(e.target.value)}
                placeholder="+221 77 000 0000"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
                placeholder="you@gmail.com"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>
        </div>

        <button
          onClick={generate}
          disabled={!canGenerate || generating}
          className="w-full bg-deep-green text-ivory font-bold py-5 rounded-2xl text-lg hover:bg-mid-green transition-colors disabled:opacity-40"
        >
          {generating ? "Building your site..." : "Generate my site →"}
        </button>

        {generating && (
          <p className="text-center text-sm text-muted">
            Our AI is writing your headline, tagline, about text, and product descriptions. Takes about 15 seconds.
          </p>
        )}
      </div>
    </div>
  );
}
