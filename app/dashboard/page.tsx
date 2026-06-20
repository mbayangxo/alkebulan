"use client";

import { useState, useEffect, useCallback } from "react";
import { Nav } from "@/app/components/nav";
import { OpportunityCard } from "@/app/components/opportunity-card";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";
import { Opportunity, OpportunityWithMatch, FundingType, Sector } from "@/lib/types";
import {
  scoreOpportunity,
  loadUserSignals,
  ScoreBreakdown,
  UserSignals,
} from "@/lib/scoring";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────

type AppStatus = "saved" | "applying" | "submitted" | "won" | "rejected";

interface TrackedApp {
  id: string;
  opportunityId: string;
  title: string;
  type: string;
  country: string;
  amount?: number;
  currency?: string;
  status: AppStatus;
  savedAt: string;
  deadline?: string;
  notes?: string;
}

interface WatchlistAlert {
  id: string;
  label: string;
  country: string;
  sector: string;
  type: string;
  createdAt: string;
}

interface VaultDoc {
  id: string;
  documentType: string;
  filename: string;
  fileSizeKb: number;
  uploadedAt: string;
}

// ── Constants ──────────────────────────────────────────────────────────────

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
  "Rwanda", "Morocco", "Côte d'Ivoire", "Pan-Africa",
];

const STATUS_CONFIG: Record<AppStatus, { label: string; color: string; bg: string; next?: AppStatus }> = {
  saved:     { label: "Saved",     color: "text-muted",       bg: "bg-gray-100",        next: "applying" },
  applying:  { label: "Applying",  color: "text-royal-blue",  bg: "bg-royal-blue/10",   next: "submitted" },
  submitted: { label: "Submitted", color: "text-warm-brown",  bg: "bg-warm-brown/10",   next: "won" },
  won:       { label: "Won",       color: "text-deep-green",  bg: "bg-deep-green/10" },
  rejected:  { label: "Rejected",  color: "text-red-earth",   bg: "bg-red-earth/10" },
};

const DOC_TYPES = [
  "ID", "Passport", "Business Registration", "Tax Certificate",
  "Business Plan", "Bank Statement", "Certificate", "Contract", "Other",
];

const DOC_ICONS: Record<string, string> = {
  "ID": "🪪", "Passport": "📘", "Business Registration": "📋",
  "Tax Certificate": "🧾", "Business Plan": "📊", "Bank Statement": "🏦",
  "Certificate": "🏅", "Contract": "📝", "Other": "📄",
};

// ── Local storage helpers ──────────────────────────────────────────────────

function loadTracker(): TrackedApp[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("alkebulan_tracker") || "[]"); } catch { return []; }
}
function saveTracker(apps: TrackedApp[]) {
  localStorage.setItem("alkebulan_tracker", JSON.stringify(apps));
}
function loadWatchlist(): WatchlistAlert[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("alkebulan_watchlist") || "[]"); } catch { return []; }
}
function saveWatchlist(alerts: WatchlistAlert[]) {
  localStorage.setItem("alkebulan_watchlist", JSON.stringify(alerts));
}
function loadVault(): VaultDoc[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("alkebulan_vault") || "[]"); } catch { return []; }
}
function saveVault(docs: VaultDoc[]) {
  localStorage.setItem("alkebulan_vault", JSON.stringify(docs));
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StatBadge({ value, label, color = "text-deep-green" }: { value: string | number; label: string; color?: string }) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 text-center">
      <p className={`font-display text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-muted mt-0.5">{label}</p>
    </div>
  );
}

function ProfileBanner({ signals, topScore }: { signals: UserSignals; topScore: number }) {
  const hasProfile = !!(signals.country || signals.sector || signals.stage);
  if (!hasProfile) {
    return (
      <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5 mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-ink text-sm mb-1">Complete your profile to see opportunity scores</p>
          <p className="text-xs text-muted">Takes 2 minutes. We'll show you exactly which programs you qualify for.</p>
        </div>
        <Link href="/onboarding" className="flex-shrink-0 bg-gold text-deep-green text-sm font-bold px-4 py-2 rounded-xl hover:bg-gold-light transition-colors">
          Set up profile →
        </Link>
      </div>
    );
  }
  return (
    <div className="bg-deep-green text-ivory rounded-2xl p-5 mb-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-ivory/60 uppercase tracking-wider mb-1">Your profile</p>
          <div className="flex flex-wrap gap-2">
            {signals.country && <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-ivory/10">{signals.country}</span>}
            {signals.sector && <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-ivory/10">{signals.sector}</span>}
            {signals.stage && <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-ivory/10">{signals.stage}</span>}
            {signals.diasporaStatus && <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gold/20 text-gold">{signals.diasporaStatus}</span>}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-3xl font-bold text-gold">{topScore}</p>
          <p className="text-xs text-ivory/60">best match</p>
        </div>
      </div>
    </div>
  );
}

// ── Application Tracker ────────────────────────────────────────────────────

function TrackerTab({ tracker, setTracker }: { tracker: TrackedApp[]; setTracker: (t: TrackedApp[]) => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState("");

  const pipeline: AppStatus[] = ["saved", "applying", "submitted", "won", "rejected"];

  function advanceStatus(app: TrackedApp) {
    const next = STATUS_CONFIG[app.status].next;
    if (!next) return;
    const updated = tracker.map((a) => a.id === app.id ? { ...a, status: next } : a);
    setTracker(updated);
    saveTracker(updated);
  }

  function setStatus(id: string, status: AppStatus) {
    const updated = tracker.map((a) => a.id === id ? { ...a, status } : a);
    setTracker(updated);
    saveTracker(updated);
  }

  function removeApp(id: string) {
    const updated = tracker.filter((a) => a.id !== id);
    setTracker(updated);
    saveTracker(updated);
  }

  function saveNotes(id: string) {
    const updated = tracker.map((a) => a.id === id ? { ...a, notes: editNotes } : a);
    setTracker(updated);
    saveTracker(updated);
    setExpandedId(null);
  }

  const counts = pipeline.reduce<Record<string, number>>((acc, s) => {
    acc[s] = tracker.filter((a) => a.status === s).length;
    return acc;
  }, {});

  if (tracker.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-4">📋</p>
        <p className="font-display text-lg font-bold text-ink mb-2">No applications tracked yet</p>
        <p className="text-sm text-muted mb-6">When you find an opportunity, click &ldquo;+ Track&rdquo; to save it here and follow your progress.</p>
        <Link href="#overview" className="text-deep-green font-semibold hover:text-gold transition-colors text-sm">
          Browse opportunities →
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Pipeline summary */}
      <div className="grid grid-cols-5 gap-2 mb-8">
        {pipeline.map((s) => {
          const cfg = STATUS_CONFIG[s];
          return (
            <div key={s} className={`rounded-xl p-3 text-center ${cfg.bg}`}>
              <p className={`font-bold text-lg ${cfg.color}`}>{counts[s]}</p>
              <p className={`text-[10px] font-semibold uppercase tracking-wide ${cfg.color}`}>{cfg.label}</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        {tracker.map((app) => {
          const cfg = STATUS_CONFIG[app.status];
          const isExpanded = expandedId === app.id;
          return (
            <div key={app.id} className="bg-white border border-border rounded-2xl overflow-hidden">
              <div className="p-4 flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>
                      {cfg.label}
                    </span>
                    <span className="text-[10px] text-muted">{app.type} · {app.country}</span>
                  </div>
                  <p className="font-semibold text-sm text-ink">{app.title}</p>
                  {app.amount && (
                    <p className="text-xs text-gold-dark font-semibold mt-0.5">
                      {new Intl.NumberFormat("en-US", { style: "currency", currency: app.currency || "USD", maximumFractionDigits: 0, notation: "compact" }).format(app.amount)}
                    </p>
                  )}
                  {app.notes && <p className="text-xs text-muted mt-1 italic">{app.notes}</p>}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {STATUS_CONFIG[app.status].next && (
                    <button
                      onClick={() => advanceStatus(app)}
                      className="text-[10px] font-bold px-3 py-1.5 bg-deep-green text-ivory rounded-full hover:bg-mid-green transition-colors"
                    >
                      Mark {STATUS_CONFIG[STATUS_CONFIG[app.status].next!].label} →
                    </button>
                  )}
                  <button
                    onClick={() => { setExpandedId(isExpanded ? null : app.id); setEditNotes(app.notes || ""); }}
                    className="text-[10px] text-muted hover:text-ink"
                  >
                    {isExpanded ? "▲" : "▼"}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 pt-0 border-t border-border">
                  <p className="text-xs font-semibold text-ink mb-2 mt-3">Change status</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pipeline.map((s) => (
                      <button key={s} onClick={() => setStatus(app.id, s)}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition-colors ${
                          app.status === s ? `${STATUS_CONFIG[s].bg} ${STATUS_CONFIG[s].color} border-transparent` : "border-border text-muted hover:border-deep-green"
                        }`}>
                        {STATUS_CONFIG[s].label}
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Add notes — what stage is the application at, who did you speak to..."
                    rows={2}
                    className="w-full text-xs border border-border rounded-lg px-3 py-2 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold resize-none mb-2"
                  />
                  <div className="flex justify-between">
                    <button onClick={() => saveNotes(app.id)} className="text-xs font-semibold text-deep-green hover:text-gold">Save notes</button>
                    <button onClick={() => removeApp(app.id)} className="text-xs text-red-earth/70 hover:text-red-earth">Remove</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Watchlist Tab ──────────────────────────────────────────────────────────

function WatchlistTab({ watchlist, setWatchlist }: { watchlist: WatchlistAlert[]; setWatchlist: (w: WatchlistAlert[]) => void }) {
  const [newLabel, setNewLabel] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newSector, setNewSector] = useState("");
  const [newType, setNewType] = useState("");

  function addAlert() {
    if (!newLabel) return;
    const alert: WatchlistAlert = {
      id: crypto.randomUUID(),
      label: newLabel,
      country: newCountry,
      sector: newSector,
      type: newType,
      createdAt: new Date().toISOString(),
    };
    const updated = [alert, ...watchlist];
    setWatchlist(updated);
    saveWatchlist(updated);
    setNewLabel(""); setNewCountry(""); setNewSector(""); setNewType("");
  }

  function removeAlert(id: string) {
    const updated = watchlist.filter((a) => a.id !== id);
    setWatchlist(updated);
    saveWatchlist(updated);
  }

  // Show matching opportunities for each alert
  function getMatches(alert: WatchlistAlert) {
    return SAMPLE_OPPORTUNITIES.filter((opp) => {
      if (alert.country && opp.country !== alert.country && opp.country !== "Pan-Africa") return false;
      if (alert.sector && !opp.sectors.includes(alert.sector as Sector)) return false;
      if (alert.type && opp.type !== alert.type) return false;
      return true;
    }).slice(0, 3);
  }

  return (
    <div>
      {/* Create alert */}
      <div className="bg-white border border-border rounded-2xl p-6 mb-6">
        <h3 className="font-display text-base font-bold text-ink mb-4">Create an alert</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Alert name, e.g. Women grants Ghana"
            className="col-span-full text-sm border border-border rounded-xl px-4 py-2.5 text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
          />
          <select value={newCountry} onChange={(e) => setNewCountry(e.target.value)}
            className="text-sm border border-border rounded-xl px-4 py-2.5 text-ink focus:outline-none focus:border-gold bg-white">
            <option value="">Any country</option>
            {COUNTRIES.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={newSector} onChange={(e) => setNewSector(e.target.value)}
            className="text-sm border border-border rounded-xl px-4 py-2.5 text-ink focus:outline-none focus:border-gold bg-white">
            <option value="">Any sector</option>
            {SECTORS.map(s => <option key={s}>{s}</option>)}
          </select>
          <select value={newType} onChange={(e) => setNewType(e.target.value)}
            className="text-sm border border-border rounded-xl px-4 py-2.5 text-ink focus:outline-none focus:border-gold bg-white">
            <option value="">Any type</option>
            {FUNDING_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <button onClick={addAlert} disabled={!newLabel}
          className="bg-deep-green text-ivory text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-40">
          Save alert
        </button>
      </div>

      {watchlist.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-4">🔔</p>
          <p className="font-display text-lg font-bold text-ink mb-2">No alerts yet</p>
          <p className="text-sm text-muted">Create an alert above and we&apos;ll match it against new opportunities daily.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {watchlist.map((alert) => {
            const matches = getMatches(alert);
            return (
              <div key={alert.id} className="bg-white border border-border rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-semibold text-ink text-sm">{alert.label}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {alert.country && <span className="text-[10px] px-2 py-0.5 rounded-full bg-warm-ivory text-muted">{alert.country}</span>}
                      {alert.sector && <span className="text-[10px] px-2 py-0.5 rounded-full bg-deep-green/10 text-deep-green">{alert.sector}</span>}
                      {alert.type && <span className="text-[10px] px-2 py-0.5 rounded-full bg-royal-blue/10 text-royal-blue">{alert.type}</span>}
                    </div>
                  </div>
                  <button onClick={() => removeAlert(alert.id)} className="text-muted hover:text-red-earth text-xs">Remove</button>
                </div>
                {matches.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold text-muted uppercase tracking-wide mb-2">{matches.length} matching opportunities</p>
                    <div className="space-y-2">
                      {matches.map((opp) => (
                        <Link key={opp.id} href={`/opportunity/${opp.id}`}
                          className="flex items-center justify-between p-2.5 rounded-lg border border-border hover:border-gold transition-colors group">
                          <div>
                            <p className="text-xs font-semibold text-ink group-hover:text-deep-green">{opp.title}</p>
                            <p className="text-[10px] text-muted">{opp.type} · {opp.country}</p>
                          </div>
                          <span className="text-[10px] text-deep-green group-hover:text-gold">View →</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Document Vault ─────────────────────────────────────────────────────────

function VaultTab({ vault, setVault }: { vault: VaultDoc[]; setVault: (v: VaultDoc[]) => void }) {
  const [docType, setDocType] = useState("ID");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const doc: VaultDoc = {
      id: crypto.randomUUID(),
      documentType: docType,
      filename: file.name,
      fileSizeKb: Math.round(file.size / 1024),
      uploadedAt: new Date().toISOString(),
    };
    const updated = [doc, ...vault];
    setVault(updated);
    saveVault(updated);
    e.target.value = "";
  }

  function removeDoc(id: string) {
    const updated = vault.filter((d) => d.id !== id);
    setVault(updated);
    saveVault(updated);
  }

  const byType = DOC_TYPES.reduce<Record<string, VaultDoc[]>>((acc, t) => {
    acc[t] = vault.filter((d) => d.documentType === t);
    return acc;
  }, {});

  const totalKb = vault.reduce((acc, d) => acc + d.fileSizeKb, 0);

  return (
    <div>
      {/* Upload */}
      <div className="bg-white border border-border rounded-2xl p-6 mb-6">
        <h3 className="font-display text-base font-bold text-ink mb-1">Upload a document</h3>
        <p className="text-xs text-muted mb-4">Store your IDs, registrations, and certificates here. Ready when applications ask for them.</p>
        <div className="flex gap-3 flex-wrap">
          <select value={docType} onChange={(e) => setDocType(e.target.value)}
            className="text-sm border border-border rounded-xl px-4 py-2.5 text-ink focus:outline-none focus:border-gold bg-white">
            {DOC_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
          <label className="bg-deep-green text-ivory text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-mid-green transition-colors cursor-pointer">
            Choose file
            <input type="file" className="hidden" onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
          </label>
        </div>
        {vault.length > 0 && (
          <p className="text-xs text-muted mt-3">{vault.length} documents · {totalKb < 1024 ? `${totalKb} KB` : `${(totalKb / 1024).toFixed(1)} MB`} used</p>
        )}
      </div>

      {vault.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-4xl mb-4">🗄️</p>
          <p className="font-display text-lg font-bold text-ink mb-2">Your vault is empty</p>
          <p className="text-sm text-muted max-w-sm mx-auto">Upload your documents once and reference them across multiple applications. Stop searching for files at the last minute.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {DOC_TYPES.filter((t) => byType[t]?.length > 0).map((t) => (
            <div key={t} className="bg-white border border-border rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted mb-3">{DOC_ICONS[t]} {t}</p>
              <div className="space-y-2">
                {byType[t].map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-ink">{doc.filename}</p>
                      <p className="text-[10px] text-muted">
                        {doc.fileSizeKb < 1024 ? `${doc.fileSizeKb} KB` : `${(doc.fileSizeKb / 1024).toFixed(1)} MB`}
                        {" · "}Uploaded {new Date(doc.uploadedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </p>
                    </div>
                    <button onClick={() => removeDoc(doc.id)} className="text-xs text-muted hover:text-red-earth ml-4">Remove</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Dashboard ─────────────────────────────────────────────────────────

type Tab = "overview" | "track" | "watchlist" | "vault";

export default function DashboardPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [userSignals, setUserSignals] = useState<UserSignals>({});
  const [scores, setScores] = useState<Record<string, ScoreBreakdown>>({});
  const [diasporaMode, setDiasporaMode] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedSector, setSelectedSector] = useState<string>("All");

  // Sub-state
  const [tracker, setTracker] = useState<TrackedApp[]>([]);
  const [watchlist, setWatchlist] = useState<WatchlistAlert[]>([]);
  const [vault, setVault] = useState<VaultDoc[]>([]);

  useEffect(() => {
    const signals = loadUserSignals();
    setUserSignals(signals);
    const computed: Record<string, ScoreBreakdown> = {};
    SAMPLE_OPPORTUNITIES.forEach((opp) => {
      computed[opp.id] = scoreOpportunity(opp, signals);
    });
    setScores(computed);
    setTracker(loadTracker());
    setWatchlist(loadWatchlist());
    setVault(loadVault());
  }, []);

  function handleTrack(opp: Opportunity) {
    if (tracker.some((a) => a.opportunityId === opp.id)) return;
    const app: TrackedApp = {
      id: crypto.randomUUID(),
      opportunityId: opp.id,
      title: opp.title,
      type: opp.type,
      country: opp.country,
      amount: opp.amount,
      currency: opp.currency,
      status: "saved",
      savedAt: new Date().toISOString(),
      deadline: opp.deadline,
    };
    const updated = [app, ...tracker];
    setTracker(updated);
    saveTracker(updated);
  }

  const filtered = SAMPLE_OPPORTUNITIES.filter((o) => {
    if (selectedType !== "All" && o.type !== selectedType) return false;
    if (selectedCountry !== "All" && o.country !== selectedCountry && o.country !== "Pan-Africa") return false;
    if (selectedSector !== "All" && !o.sectors.includes(selectedSector as Sector)) return false;
    if (diasporaMode && !o.diaspora_allowed) return false;
    if (search && !o.title.toLowerCase().includes(search.toLowerCase()) &&
        !o.summary.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }).sort((a, b) => (scores[b.id]?.score ?? 0) - (scores[a.id]?.score ?? 0));

  const topScore = Math.max(0, ...Object.values(scores).map((s) => s.score));
  const trackedCount = tracker.length;
  const inProgressCount = tracker.filter((a) => a.status === "applying" || a.status === "submitted").length;

  const TABS: { id: Tab; label: string; count?: number }[] = [
    { id: "overview", label: "Opportunities" },
    { id: "track", label: "Track", count: trackedCount },
    { id: "watchlist", label: "Watchlist", count: watchlist.length },
    { id: "vault", label: "Vault", count: vault.length },
  ];

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold text-ink mb-1">Founder Dashboard</h1>
          <p className="text-muted text-sm">Your African opportunity operating system.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <StatBadge value={filtered.length} label="Opportunities matched" />
          <StatBadge value={topScore} label="Best match score" color="text-gold-dark" />
          <StatBadge value={inProgressCount} label="Applications active" color="text-royal-blue" />
          <StatBadge value={vault.length} label="Documents stored" color="text-warm-brown" />
        </div>

        {/* Profile banner */}
        <ProfileBanner signals={userSignals} topScore={topScore} />

        {/* Tabs */}
        <div className="flex gap-1 bg-white border border-border rounded-xl p-1 mb-8 overflow-x-auto">
          {TABS.map(({ id, label, count }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                tab === id ? "bg-deep-green text-ivory" : "text-muted hover:text-ink"
              }`}
            >
              {label}
              {count !== undefined && count > 0 && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${tab === id ? "bg-ivory/20" : "bg-border"}`}>
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "overview" && (
          <div id="overview">
            {/* Diaspora mode + search */}
            <div className="flex flex-wrap gap-3 mb-5">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search opportunities..."
                className="flex-1 min-w-48 bg-white border border-border rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold"
              />
              <button
                onClick={() => setDiasporaMode(!diasporaMode)}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl border transition-colors ${
                  diasporaMode
                    ? "bg-gold text-deep-green border-gold"
                    : "bg-white border-border text-muted hover:border-gold hover:text-gold-dark"
                }`}
              >
                🌍 Diaspora mode {diasporaMode ? "ON" : "OFF"}
              </button>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["All", ...FUNDING_TYPES].map((t) => (
                <button key={t} onClick={() => setSelectedType(t)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                    selectedType === t ? "bg-deep-green text-ivory" : "bg-white border border-border text-muted hover:border-deep-green"
                  }`}>
                  {t}
                </button>
              ))}
              <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink focus:outline-none focus:border-gold">
                {COUNTRIES.map((c) => <option key={c} value={c}>{c === "All" ? "All countries" : c}</option>)}
              </select>
              <select value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink focus:outline-none focus:border-gold">
                <option value="All">All sectors</option>
                {SECTORS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <p className="text-xs text-muted mb-5">
              {filtered.length} opportunities · sorted by match score
              {Object.keys(userSignals).length === 0 && " · "}
              {Object.keys(userSignals).length === 0 && (
                <Link href="/onboarding" className="text-deep-green hover:text-gold font-semibold">
                  Set up profile for personalized scores
                </Link>
              )}
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted text-lg">No opportunities match your filters.</p>
                <button onClick={() => { setSearch(""); setSelectedType("All"); setSelectedCountry("All"); setSelectedSector("All"); setDiasporaMode(false); }}
                  className="mt-4 text-deep-green font-semibold hover:text-gold transition-colors">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((opp) => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp as OpportunityWithMatch}
                    score={scores[opp.id]}
                    onTrack={handleTrack}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "track" && (
          <TrackerTab tracker={tracker} setTracker={setTracker} />
        )}
        {tab === "watchlist" && (
          <WatchlistTab watchlist={watchlist} setWatchlist={setWatchlist} />
        )}
        {tab === "vault" && (
          <VaultTab vault={vault} setVault={setVault} />
        )}
      </div>
    </div>
  );
}
