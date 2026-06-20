"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import { ALL_COUNTRY_PROGRAMS } from "@/lib/data/all-country-programs";
import Link from "next/link";

const CATEGORIES = [
  { id: "youth_women_funds", label: "Youth & women funds" },
  { id: "development_bank_programs", label: "Development banks" },
  { id: "donor_grants", label: "Donor grants" },
  { id: "startup_innovation", label: "Startup & innovation" },
  { id: "procurement", label: "Government contracts" },
  { id: "all", label: "All categories" },
];

const QUICK_PROGRAMS = [
  "DER/FJ — Senegal youth and women fund",
  "BOI — Nigeria Bank of Industry",
  "FONGIP — Senegal guarantee fund",
  "YouStart — Ghana youth enterprise",
  "BSTP — Senegal infrastructure subcontracts",
  "Tony Elumelu Foundation — all Africa",
  "Norrsken Africa Fund",
  "USAID West Africa Trade Hub",
  "MASLOC — Ghana microloans",
  "LSETF — Lagos State Employment Trust",
  "Rwanda Development Bank — agriculture",
  "Morocco Innovation Fund",
  "AfDB AFAWA — African women entrepreneurs",
];

interface SavedResearch {
  id: string;
  query: string;
  result: string;
  date: string;
}

function ResearchResult({ text, loading }: { text: string; loading: boolean }) {
  if (!text && !loading) return null;

  const lines = text.split("\n");

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden">
      <div className="bg-deep-green px-5 py-3 flex items-center gap-2">
        <span className="text-lg">🔍</span>
        <span className="text-sm font-bold text-ivory">Amara&apos;s Research Report</span>
        {loading && (
          <span className="text-[10px] text-gold bg-gold/20 px-2 py-0.5 rounded-full ml-auto animate-pulse">
            Researching...
          </span>
        )}
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => {
          if (line.startsWith("# ")) {
            return <h1 key={i} className="font-display text-xl font-bold text-ink mt-2 mb-3 font-sans">{line.slice(2)}</h1>;
          }
          if (line.startsWith("## ")) {
            return <h2 key={i} className="font-bold text-deep-green text-sm mt-5 mb-2 uppercase tracking-wide font-sans">{line.slice(3)}</h2>;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            return <p key={i} className="font-bold text-ink text-xs mb-1 font-sans">{line.slice(2, -2)}</p>;
          }
          if (line.startsWith("- [ ] ")) {
            return (
              <label key={i} className="flex items-start gap-2 py-1 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 flex-shrink-0 accent-deep-green" />
                <span className="text-xs text-ink group-hover:text-deep-green">{line.slice(6)}</span>
              </label>
            );
          }
          if (line.startsWith("- ")) {
            return <p key={i} className="text-xs text-ink py-0.5 flex items-start gap-1"><span className="text-gold mt-0.5">•</span><span>{line.slice(2)}</span></p>;
          }
          if (line.match(/^\d+\. /)) {
            return <p key={i} className="text-xs text-ink py-0.5 font-sans">{line}</p>;
          }
          if (line === "---") {
            return <hr key={i} className="border-border my-4" />;
          }
          if (line.trim() === "") {
            return <div key={i} className="h-2" />;
          }
          return <p key={i} className="text-xs text-ink leading-relaxed font-sans">{line}</p>;
        })}
        {loading && <span className="inline-block w-2 h-4 bg-gold animate-pulse align-middle ml-1" />}
      </div>
    </div>
  );
}

export default function AmaraPage() {
  const [country, setCountry] = useState("");
  const [program, setProgram] = useState("");
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState<SavedResearch[]>([]);

  useEffect(() => {
    try { setSaved(JSON.parse(localStorage.getItem("amara_research") || "[]")); } catch {}
  }, []);

  const countryList = ALL_COUNTRY_PROGRAMS.map(p => `${p.flag} ${p.country}`);

  async function research() {
    if (!country && !program && !question.trim()) return;
    setLoading(true);
    setResult("");

    const query = question.trim() || `${program || "programs"} in ${country || "Africa"} (${category || "all categories"})`;

    try {
      const res = await fetch("/api/agents/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: country.replace(/^.* /, ""), program, category, question: question.trim() || undefined }),
      });
      if (!res.body) throw new Error("No stream");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setResult(text);
      }

      // Save to localStorage
      const entry: SavedResearch = {
        id: Date.now().toString(),
        query,
        result: text,
        date: new Date().toLocaleString(),
      };
      const updated = [entry, ...saved].slice(0, 10);
      setSaved(updated);
      try { localStorage.setItem("amara_research", JSON.stringify(updated)); } catch {}
    } catch {
      setResult("Amara encountered an error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Header */}
      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/agents" className="text-xs text-gold/70 hover:text-gold mb-4 block">← All agents</Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-deep-green to-mid-green border-2 border-gold/30 flex items-center justify-center text-3xl">
              🔍
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-ivory">Amara</h1>
              <p className="text-gold text-sm font-semibold">Research Intelligence Agent</p>
              <p className="text-ivory/60 text-xs italic">&ldquo;Amara means eternal grace in Igbo and Amharic&rdquo;</p>
            </div>
          </div>
          <div className="bg-gold/10 border border-gold/20 rounded-xl px-4 py-3 max-w-2xl">
            <p className="text-xs font-bold text-gold uppercase tracking-wide mb-1">Sole job</p>
            <p className="text-ivory/90 text-sm">
              Find every grant, loan, government contract, and program across all 54 African countries.
              Research it deeply. Find the current status, exact eligibility, and step-by-step checklist for how to get it.
              Use the web to stay current.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* Research form */}
        <div className="bg-white border border-border rounded-2xl p-6 mb-6">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-5">What should Amara research?</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-border rounded-xl px-3 py-3 text-sm bg-white focus:outline-none focus:border-gold"
              >
                <option value="">All 54 countries</option>
                {countryList.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-border rounded-xl px-3 py-3 text-sm bg-white focus:outline-none focus:border-gold"
              >
                <option value="">All categories</option>
                {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-ink mb-2">Specific program (optional)</label>
              <input
                type="text"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                placeholder="e.g. DER/FJ, BOI, YouStart"
                className="w-full border border-border rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-bold text-ink mb-2">Or ask a specific question</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={2}
              placeholder="E.g. 'What grants are available for Senegalese women starting a food processing business in 2025?' or 'How do I apply for BSTP subcontracts?'"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold resize-none"
            />
          </div>

          {/* Quick picks */}
          <div className="mb-5">
            <p className="text-[10px] font-bold text-muted uppercase tracking-wide mb-2">Quick research targets</p>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_PROGRAMS.map(p => (
                <button
                  key={p}
                  onClick={() => setProgram(p)}
                  className="text-[10px] bg-warm-ivory hover:bg-gold/10 border border-border hover:border-gold/30 text-ink px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={research}
            disabled={(!country && !program && !question.trim()) || loading}
            className="w-full bg-deep-green text-ivory font-bold py-4 rounded-2xl text-base hover:bg-mid-green transition-colors disabled:opacity-40"
          >
            {loading ? "Amara is researching... (web search active)" : "Start deep research →"}
          </button>

          {loading && (
            <p className="text-center text-xs text-muted mt-3">
              Amara is searching the web, verifying information, and building your checklist.
              This takes 20–60 seconds for thorough research.
            </p>
          )}
        </div>

        <ResearchResult text={result} loading={loading} />

        {/* Saved research */}
        {saved.length > 0 && !result && (
          <div className="mt-6">
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Previous research</p>
            <div className="space-y-2">
              {saved.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setResult(s.result)}
                  className="w-full text-left bg-white border border-border rounded-xl px-4 py-3 hover:border-deep-green/30 transition-colors"
                >
                  <p className="text-xs font-semibold text-ink">{s.query}</p>
                  <p className="text-[10px] text-muted mt-0.5">{s.date}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
