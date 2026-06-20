"use client";

import { useState, useMemo } from "react";
import { Nav } from "@/app/components/nav";
import { useProfile } from "@/app/components/user-profile";
import {
  ALL_COUNTRY_PROGRAMS,
  type CountryOpportunityProfile,
  type ProgramEntry,
} from "@/lib/data/all-country-programs";

const REGIONS = ["All regions", "West Africa", "East Africa", "North Africa", "Southern Africa", "Central Africa"] as const;

const CATEGORIES = [
  { id: "all", label: "All programs" },
  { id: "procurement", label: "Government contracts" },
  { id: "youth_women_funds", label: "Youth & women funds" },
  { id: "development_bank_programs", label: "Development banks" },
  { id: "donor_grants", label: "Donor grants" },
  { id: "startup_innovation", label: "Startup & innovation" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

function ProgramCard({
  program,
  country,
  flag,
  userProfile,
}: {
  program: ProgramEntry;
  country: string;
  flag: string;
  userProfile?: ReturnType<typeof useProfile>["profile"];
}) {
  const [explaining, setExplaining] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [explainOpen, setExplainOpen] = useState(false);

  async function explain() {
    if (explanation) { setExplainOpen(true); return; }
    setExplaining(true);
    setExplainOpen(true);
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: program.name,
          what: program.what,
          for_who: program.for_who,
          amount: program.amount,
          apply_at: program.apply_at,
          indigenous_note: program.indigenous_note,
          country,
          profile: userProfile,
        }),
      });
      if (!res.body) throw new Error("No stream");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setExplanation(text);
      }
    } catch {
      setExplanation("Couldn't load explanation. Try again.");
    } finally {
      setExplaining(false);
    }
  }

  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <p className="text-xs text-muted font-medium mb-0.5">
            {flag} {country}
          </p>
          <h3 className="text-sm font-bold text-ink leading-snug">{program.name}</h3>
        </div>
        {program.amount && (
          <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-1 rounded-lg flex-shrink-0">
            {program.amount}
          </span>
        )}
      </div>
      <p className="text-xs text-muted leading-relaxed mb-2">{program.what}</p>
      <p className="text-xs font-semibold text-deep-green">{program.for_who}</p>
      {program.indigenous_note && (
        <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
          <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wide mb-0.5">Indigenous note</p>
          <p className="text-xs text-amber-800">{program.indigenous_note}</p>
        </div>
      )}
      {program.apply_at && (
        <div className="mt-2 pt-2 border-t border-border">
          <p className="text-[10px] text-muted">Apply at: <span className="font-semibold text-ink">{program.apply_at}</span></p>
        </div>
      )}

      {/* Explain simply */}
      <button
        onClick={explain}
        className="mt-3 text-[10px] font-bold text-deep-green hover:underline flex items-center gap-1"
      >
        💬 Explain this to me simply
      </button>

      {explainOpen && (
        <div className="mt-2 bg-deep-green/5 border border-deep-green/20 rounded-xl px-4 py-3">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] font-bold text-deep-green uppercase tracking-wide">Plain language</p>
            <button onClick={() => setExplainOpen(false)} className="text-muted text-xs hover:text-ink">×</button>
          </div>
          <p className="text-xs text-ink leading-relaxed whitespace-pre-wrap">
            {explanation || (explaining ? "" : "")}
            {explaining && <span className="inline-block w-1.5 h-3 bg-gold ml-0.5 animate-pulse align-middle" />}
          </p>
        </div>
      )}
    </div>
  );
}

function CountryCard({ profile, category, userProfile }: { profile: CountryOpportunityProfile; category: CategoryId; userProfile?: ReturnType<typeof useProfile>["profile"] }) {
  const [expanded, setExpanded] = useState(false);

  const programs: { program: ProgramEntry; type: string }[] = useMemo(() => {
    if (category === "procurement") return [];
    const result: { program: ProgramEntry; type: string }[] = [];
    if (category === "all" || category === "youth_women_funds") {
      profile.youth_women_funds.forEach(p => result.push({ program: p, type: "Youth & Women" }));
    }
    if (category === "all" || category === "development_bank_programs") {
      profile.development_bank_programs.forEach(p => result.push({ program: p, type: "Development Bank" }));
    }
    if (category === "all" || category === "donor_grants") {
      profile.donor_grants.forEach(p => result.push({ program: p, type: "Donor Grant" }));
    }
    if (category === "all" || category === "startup_innovation") {
      profile.startup_innovation.forEach(p => result.push({ program: p, type: "Startup" }));
    }
    return result;
  }, [profile, category]);

  const totalPrograms =
    profile.youth_women_funds.length +
    profile.development_bank_programs.length +
    profile.donor_grants.length +
    profile.startup_innovation.length;

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 hover:bg-warm-ivory transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{profile.flag}</span>
            <div>
              <h3 className="font-bold text-ink text-base">{profile.country}</h3>
              <p className="text-xs text-muted">{profile.region} · {profile.population}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-deep-green">{totalPrograms} programs</p>
              {profile.procurement_portal && (
                <p className="text-[10px] text-muted">+ procurement portal</p>
              )}
            </div>
            <span className="text-gold text-lg">{expanded ? "▾" : "▸"}</span>
          </div>
        </div>
        <p className="text-xs text-muted mt-2 leading-relaxed text-left">{profile.the_opportunity}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {profile.key_sectors.map(s => (
            <span key={s} className="text-[10px] bg-warm-ivory border border-border text-muted px-2 py-0.5 rounded-full">{s}</span>
          ))}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border">
          {(category === "all" || category === "procurement") && profile.procurement_portal && (
            <div className="p-5 bg-deep-green/5 border-b border-border">
              <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-1">Government procurement</p>
              <p className="text-xs text-ink leading-relaxed mb-2">{profile.procurement_note}</p>
              <a
                href={`https://${profile.procurement_portal}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-deep-green border border-deep-green/30 px-3 py-1.5 rounded-lg hover:bg-deep-green hover:text-ivory transition-colors"
              >
                {profile.procurement_portal} →
              </a>
            </div>
          )}

          {category === "procurement" && !profile.procurement_portal && (
            <div className="p-5 bg-warm-ivory border-b border-border">
              <p className="text-xs text-muted">{profile.procurement_note}</p>
            </div>
          )}

          {programs.length > 0 && (
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {programs.map(({ program }) => (
                <ProgramCard
                  key={program.name}
                  program={program}
                  country={profile.country}
                  flag={profile.flag}
                  userProfile={userProfile}
                />
              ))}
            </div>
          )}

          <div className="px-5 pb-5">
            <p className="text-[10px] font-bold text-muted uppercase tracking-wide mb-2">Key agencies</p>
            <div className="flex flex-wrap gap-1.5">
              {profile.key_agencies.map(a => (
                <span key={a} className="text-[10px] font-semibold bg-warm-ivory border border-border text-ink px-2 py-1 rounded-lg">{a}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProgramsPage() {
  const { profile, setShowSetup } = useProfile();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<string>("All regions");
  const [category, setCategory] = useState<CategoryId>("all");

  const filtered = useMemo(() => {
    let results = ALL_COUNTRY_PROGRAMS.filter((p) => {
      const matchesRegion = region === "All regions" || p.region === region;
      const matchesSearch =
        !search.trim() ||
        p.country.toLowerCase().includes(search.toLowerCase()) ||
        p.key_sectors.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
        p.the_opportunity.toLowerCase().includes(search.toLowerCase()) ||
        [
          ...p.youth_women_funds,
          ...p.development_bank_programs,
          ...p.donor_grants,
          ...p.startup_innovation,
        ].some(
          pr =>
            pr.name.toLowerCase().includes(search.toLowerCase()) ||
            pr.what.toLowerCase().includes(search.toLowerCase())
        );
      return matchesRegion && matchesSearch;
    });

    // Float user's home country to top if profile is set
    if (profile.setup_complete && profile.country_of_origin) {
      results = [
        ...results.filter(p => p.country === profile.country_of_origin),
        ...results.filter(p => p.country !== profile.country_of_origin),
      ];
    }

    return results;
  }, [search, region, profile]);

  const totalPrograms = useMemo(
    () =>
      ALL_COUNTRY_PROGRAMS.reduce(
        (acc, p) =>
          acc +
          p.youth_women_funds.length +
          p.development_bank_programs.length +
          p.donor_grants.length +
          p.startup_innovation.length,
        0
      ),
    []
  );

  const indigenousCount = useMemo(
    () =>
      ALL_COUNTRY_PROGRAMS.reduce((acc, p) => {
        const all = [
          ...p.youth_women_funds,
          ...p.development_bank_programs,
          ...p.donor_grants,
          ...p.startup_innovation,
        ];
        return acc + all.filter(pr => pr.indigenous_note).length;
      }, 0),
    []
  );

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-5">
            FUNDING & PROGRAMS DATABASE
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            54 countries.<br />Hundreds of programs.<br />Zero excuses.
          </h1>
          <p className="text-ivory/75 text-lg max-w-2xl leading-relaxed">
            Every major funding program, government procurement portal, youth fund,
            development bank, and startup grant across Africa — in one place.
            Search by country, sector, or type of funding.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <p className="text-2xl font-bold text-gold">54</p>
              <p className="text-xs text-ivory/60">Countries</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">{totalPrograms}+</p>
              <p className="text-xs text-ivory/60">Programs tracked</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">{indigenousCount}</p>
              <p className="text-xs text-ivory/60">Indigenous-reserved funds</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">5</p>
              <p className="text-xs text-ivory/60">Program categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Continental resources bar */}
      <div className="bg-ink text-ivory py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="text-xs font-bold text-gold uppercase tracking-widest">Continental resources:</p>
          {[
            { name: "Tony Elumelu Foundation", note: "$5K, all 54 countries" },
            { name: "AfDB Affirmative Finance (AFAWA)", note: "Women-led businesses" },
            { name: "USAID West Africa Hub", note: "Exporters & manufacturers" },
            { name: "Norrsken Africa Fund", note: "Series A–B" },
            { name: "African Development Bank", note: "Infrastructure & agri" },
          ].map(({ name, note }) => (
            <div key={name} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              <span className="text-xs text-ivory/80 font-medium">{name}</span>
              <span className="text-[10px] text-ivory/40">— {note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* Personalized banner */}
        {profile.setup_complete ? (
          <div className="bg-deep-green text-ivory rounded-2xl px-5 py-4 mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-gold mb-0.5">
                Showing programs for{" "}
                {profile.gender === "woman" ? "women" : profile.gender === "man" ? "men" : "you"}
                {profile.age ? `, age ${profile.age}` : ""}
                {profile.country_of_origin ? ` from ${profile.country_of_origin}` : ""}
                {profile.is_diaspora ? " (diaspora)" : ""}
              </p>
              <p className="text-ivory/70 text-xs">
                {profile.country_of_origin
                  ? `${profile.country_of_origin} programs are shown first. Indigenous notes highlighted where relevant.`
                  : "Indigenous ownership notes are highlighted where relevant."}
              </p>
            </div>
            <button
              onClick={() => setShowSetup(true)}
              className="text-[10px] font-bold text-gold border border-gold/30 px-3 py-1.5 rounded-full hover:bg-gold/10 transition-colors flex-shrink-0"
            >
              Edit profile
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSetup(true)}
            className="w-full bg-gold/10 border border-gold/30 rounded-2xl px-5 py-4 mb-5 text-left hover:bg-gold/15 transition-colors"
          >
            <p className="text-sm font-bold text-ink mb-0.5">✨ Personalize this for me</p>
            <p className="text-xs text-muted">Tell us who you are — we&apos;ll surface the most relevant programs for your gender, age, and country.</p>
          </button>
        )}

        {/* Search & filters */}
        <div className="bg-white border border-border rounded-2xl p-5 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="sm:col-span-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country, program, sector… (e.g. 'solar', 'DER/FJ', 'Morocco')"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
              />
            </div>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold"
            >
              {REGIONS.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setCategory(id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  category === id
                    ? "bg-deep-green text-ivory border-deep-green"
                    : "bg-white text-muted border-border hover:border-deep-green hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted">
            Showing <span className="font-bold text-ink">{filtered.length}</span> of {ALL_COUNTRY_PROGRAMS.length} countries
          </p>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-xs text-gold hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Country cards */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="bg-white border border-border rounded-2xl p-12 text-center">
              <p className="text-muted text-sm">No results for &ldquo;{search}&rdquo;</p>
              <button onClick={() => setSearch("")} className="mt-3 text-xs text-gold hover:underline">Clear search</button>
            </div>
          ) : (
            filtered.map((countryProfile) => (
              <CountryCard key={countryProfile.country} profile={countryProfile} category={category} userProfile={profile} />
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-deep-green text-ivory rounded-2xl p-6">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">The real opportunity</p>
          <p className="text-ivory/85 leading-relaxed text-sm">
            Most of these programs sit underused. DER/FJ in Senegal disburses millions every year to youth and women entrepreneurs —
            but most people applying don&apos;t know it exists. Government procurement portals list contracts worth millions —
            but barely anyone is submitting bids. The BSTP publishes infrastructure subcontracts on public works projects —
            but local contractors aren&apos;t positioning themselves to win them.
          </p>
          <p className="text-ivory/85 leading-relaxed text-sm mt-3">
            The gap isn&apos;t the opportunity. The gap is the <em>awareness</em> of the opportunity.
            That&apos;s what this database exists to close.
          </p>
          <p className="text-gold font-semibold mt-3 text-sm">
            Africa is not lacking programs. It&apos;s lacking builders who know the programs exist.
          </p>
        </div>
      </div>
    </div>
  );
}
