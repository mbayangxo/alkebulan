"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import { OpportunityCard } from "@/app/components/opportunity-card";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";
import { OpportunityWithMatch, FundingType, Sector } from "@/lib/types";

const FUNDING_TYPES: FundingType[] = [
  "Grant", "Loan", "Accelerator", "Fellowship", "Investment",
  "Government contract", "Tender", "Procurement", "Training",
];

const SECTORS: Sector[] = [
  "Agriculture", "Tech", "Fashion", "Beauty", "Media", "Manufacturing",
  "Food", "Education", "Health", "Finance", "Creative economy", "Climate",
];

const COUNTRIES = [
  "All", "Nigeria", "Ghana", "Kenya", "South Africa", "Senegal",
  "Rwanda", "Morocco", "Côte d'Ivoire", "All Africa",
];

export default function DashboardPage() {
  const [opportunities, setOpportunities] = useState<OpportunityWithMatch[]>(
    SAMPLE_OPPORTUNITIES as OpportunityWithMatch[]
  );
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [diasporaOnly, setDiasporaOnly] = useState(false);
  const [saved, setSaved] = useState<Set<string>>(new Set());

  const filtered = opportunities.filter((o) => {
    if (selectedType !== "All" && o.type !== selectedType) return false;
    if (selectedCountry !== "All" && o.country !== selectedCountry && o.country !== "All Africa") return false;
    if (selectedSector !== "All" && !o.sectors.includes(selectedSector as Sector)) return false;
    if (diasporaOnly && !o.diaspora_allowed) return false;
    if (search && !o.title.toLowerCase().includes(search.toLowerCase()) &&
        !o.summary.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  function toggleSave(id: string) {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-ink mb-2">
            Funding Opportunities
          </h1>
          <p className="text-muted">
            {filtered.length} opportunities across 54 African countries
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search grants, tenders, accelerators..."
            className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {/* Type */}
          <div className="flex flex-wrap gap-2">
            {["All", ...FUNDING_TYPES].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  selectedType === t
                    ? "bg-deep-green text-ivory"
                    : "bg-white border border-border text-muted hover:border-deep-green hover:text-deep-green"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Country */}
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink focus:outline-none focus:border-gold"
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c === "All" ? "All countries" : c}</option>
            ))}
          </select>

          {/* Sector */}
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink focus:outline-none focus:border-gold"
          >
            <option value="All">All sectors</option>
            {SECTORS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          {/* Diaspora toggle */}
          <button
            onClick={() => setDiasporaOnly(!diasporaOnly)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
              diasporaOnly
                ? "bg-gold text-deep-green"
                : "bg-white border border-border text-muted hover:border-gold hover:text-gold-dark"
            }`}
          >
            Diaspora eligible
          </button>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No opportunities match your filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedType("All");
                setSelectedCountry("All");
                setSelectedSector("All");
                setDiasporaOnly(false);
              }}
              className="mt-4 text-deep-green font-semibold hover:text-gold transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((opp) => (
              <div key={opp.id} className="relative">
                <OpportunityCard opportunity={opp} />
                <button
                  onClick={() => toggleSave(opp.id)}
                  className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                    saved.has(opp.id)
                      ? "bg-gold text-deep-green"
                      : "bg-white border border-border text-muted hover:border-gold hover:text-gold-dark"
                  }`}
                >
                  {saved.has(opp.id) ? "Saved ✓" : "Save"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
