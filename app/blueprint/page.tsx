"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { BLUEPRINT_MODELS, type BlueprintModel, type BlueprintOrigin } from "@/lib/data/blueprint";

const ORIGIN_COLORS: Record<BlueprintOrigin, string> = {
  "French":          "bg-indigo/12 text-indigo",
  "Chinese":         "bg-red-earth/15 text-red-earth",
  "Lebanese / Arab": "bg-gold/15 text-gold-dark",
  "Indian":          "bg-orange-100 text-orange-800",
  "Gulf Arab":       "bg-teal-100 text-teal-800",
  "South African":   "bg-green-100 text-green-800",
};

const ALL_ORIGINS: BlueprintOrigin[] = [
  "French", "Chinese", "Lebanese / Arab", "Indian", "Gulf Arab", "South African",
];

function ModelCard({ model }: { model: BlueprintModel }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-sand rounded-2xl overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${ORIGIN_COLORS[model.origin]}`}>
                {model.origin}
              </span>
              <span className="text-xs text-muted font-medium">{model.sector}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-ink">{model.company}</h3>
          </div>
        </div>

        {/* What they control */}
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-4">
          <p className="text-xs font-bold text-gold-dark uppercase tracking-wide mb-1">What they control</p>
          <p className="text-sm text-ink leading-relaxed">{model.what_they_control}</p>
        </div>

        {/* Scale */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-warm-ivory border border-sand rounded-xl p-3">
            <p className="text-xs text-muted mb-1">Scale</p>
            <p className="text-sm font-semibold text-ink leading-snug">{model.scale}</p>
          </div>
          <div className="bg-warm-ivory border border-sand rounded-xl p-3">
            <p className="text-xs text-muted mb-1">How they got in</p>
            <p className="text-sm text-ink leading-snug line-clamp-3">{model.how_they_entered}</p>
          </div>
        </div>

        {/* Their model */}
        <div className="mb-4">
          <p className="text-xs font-bold text-ink uppercase tracking-wide mb-2">Their model</p>
          <p className="text-sm text-muted leading-relaxed">{model.their_model}</p>
        </div>

        {/* Your Move */}
        <div className="bg-deep-green/5 border border-deep-green/20 rounded-xl p-4 mb-4">
          <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-2">Your move</p>
          <p className="text-sm text-ink leading-relaxed">{model.your_move}</p>
        </div>

        {/* Entry Point */}
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-4">
          <p className="text-xs font-bold text-gold-dark uppercase tracking-wide mb-2">Entry point — what you do in 90 days</p>
          <p className="text-sm text-ink leading-relaxed">{model.entry_point}</p>
        </div>

        {/* Africans doing it — collapsible */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="w-full text-left text-xs font-bold text-deep-green uppercase tracking-wide flex items-center justify-between"
        >
          Africans already running this model
          <span className="text-base font-normal">{expanded ? "▲" : "▼"}</span>
        </button>

        {expanded && (
          <ul className="mt-3 space-y-2">
            {model.africans_doing_it.map((example, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink">
                <span className="text-deep-green mt-0.5 flex-shrink-0">✓</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {model.tags.map(t => (
            <span key={t} className="px-2 py-0.5 bg-sand rounded-full text-xs text-muted">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlueprintPage() {
  const [activeOrigin, setActiveOrigin] = useState<BlueprintOrigin | "all">("all");

  const filtered = activeOrigin === "all"
    ? BLUEPRINT_MODELS
    : BLUEPRINT_MODELS.filter(m => m.origin === activeOrigin);

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">The Blueprint</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6">
            They came to Africa.<br />
            They built empires.<br />
            <span className="text-gold">Here&apos;s the playbook.</span>
          </h1>
          <p className="text-ivory/80 text-lg leading-relaxed max-w-3xl mb-8">
            Lebanese traders, French telecoms, Chinese phone makers, Indian FMCG companies, South African supermarkets —
            they all came to Africa, studied the market, and built generational businesses.
            None of the models are secret. The resources are African. The opportunity is African.
            Here is the exact playbook — and African entrepreneurs who are already running it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/opportunities" className="bg-gold text-deep-green font-bold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors">
              Find your opportunity →
            </Link>
            <Link href="/market" className="border border-gold/40 text-ivory font-semibold px-6 py-3 rounded-xl hover:border-gold transition-colors">
              B2B Market 🌾
            </Link>
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div className="bg-ink text-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-gold">€4–5B</p>
            <p className="text-xs text-ivory/60 mt-1">Castel's annual beer revenue from Africa</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gold">40%</p>
            <p className="text-xs text-ivory/60 mt-1">African smartphone market owned by one Chinese company</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gold">17</p>
            <p className="text-xs text-ivory/60 mt-1">African countries where Orange collects telecom revenue</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gold">30 yrs</p>
            <p className="text-xs text-ivory/60 mt-1">Typical length of port concession deals</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* Framing note */}
        <div className="bg-white border border-sand rounded-2xl p-6 mb-10">
          <h2 className="font-display text-xl font-bold text-ink mb-3">Why this page exists</h2>
          <p className="text-muted leading-relaxed mb-3">
            These businesses are not enemies. They are examples. Lebanese traders didn&apos;t invent wholesale distribution —
            they just organized it better and earlier. Chinese phone makers didn&apos;t invent smartphones — they studied
            what Africans needed and made it.
          </p>
          <p className="text-muted leading-relaxed mb-3">
            Every business model on this page runs on African resources, African consumers, and African market demand.
            The question is who captures the profit. Right now, much of it leaves. The models below show you
            how to run the same play — with African ownership, African capital, and African wealth-building at the center.
          </p>
          <p className="text-ink font-semibold">
            You are not starting from zero. You are starting from knowledge.
          </p>
        </div>

        {/* Filter by origin */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveOrigin("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeOrigin === "all" ? "bg-deep-green text-ivory" : "bg-white border border-sand text-ink hover:border-gold"
            }`}
          >
            All ({BLUEPRINT_MODELS.length})
          </button>
          {ALL_ORIGINS.map(origin => {
            const count = BLUEPRINT_MODELS.filter(m => m.origin === origin).length;
            if (count === 0) return null;
            return (
              <button
                key={origin}
                onClick={() => setActiveOrigin(origin)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeOrigin === origin ? "bg-deep-green text-ivory" : "bg-white border border-sand text-ink hover:border-gold"
                }`}
              >
                {origin} ({count})
              </button>
            );
          })}
        </div>

        {/* Models grid */}
        <div className="grid grid-cols-1 gap-6">
          {filtered.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-deep-green rounded-2xl p-10 text-ivory">
          <h2 className="font-display text-3xl font-bold mb-4">
            You have seen the models.<br />Now find your opportunity.
          </h2>
          <p className="text-ivory/70 mb-8 max-w-xl mx-auto">
            The programs, financing, and infrastructure you need to build the African version of each of these businesses exist.
            We have researched them across 54+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/opportunities" className="bg-gold text-deep-green font-bold px-8 py-4 rounded-xl text-lg hover:bg-gold-light transition-colors">
              Browse all opportunities →
            </Link>
            <Link href="/market" className="border border-gold/40 text-ivory font-bold px-8 py-4 rounded-xl text-lg hover:border-gold transition-colors">
              List on B2B Market
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
