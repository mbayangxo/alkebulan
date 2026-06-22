"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/app/components/nav";
import Link from "next/link";

interface QAReport {
  id: string;
  date: string;
  result: string;
  summary: string;
}

function ReportDisplay({ text, loading }: { text: string; loading: boolean }) {
  if (!text && !loading) return null;

  const lines = text.split("\n");

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden">
      <div className="bg-ink px-5 py-3 flex items-center gap-2">
        <span className="text-lg">✅</span>
        <span className="text-sm font-bold text-ivory">Zuri&apos;s QA Report</span>
        {loading && (
          <span className="text-[10px] text-gold bg-gold/20 px-2 py-0.5 rounded-full ml-auto animate-pulse">
            Running checks...
          </span>
        )}
      </div>
      <div className="p-6 space-y-0.5">
        {lines.map((line, i) => {
          if (line.startsWith("# ")) {
            return <h1 key={i} className="font-bold text-ink text-lg mt-2 mb-3">{line.slice(2)}</h1>;
          }
          if (line.startsWith("## ")) {
            return <h2 key={i} className="font-bold text-ink text-sm mt-5 mb-2 uppercase tracking-wide border-b border-border pb-1">{line.slice(3)}</h2>;
          }
          if (line.startsWith("✅")) {
            return <p key={i} className="text-xs text-mid-green font-mono py-0.5">{line}</p>;
          }
          if (line.startsWith("❌")) {
            return <p key={i} className="text-xs text-red-earth font-mono py-0.5 font-bold">{line}</p>;
          }
          if (line.startsWith("**") || line.startsWith("*")) {
            return <p key={i} className="text-xs font-bold text-ink py-1">{line.replace(/\*\*/g, "")}</p>;
          }
          if (line.startsWith("---")) {
            return <hr key={i} className="border-border my-3" />;
          }
          if (line.trim() === "") {
            return <div key={i} className="h-1.5" />;
          }
          return <p key={i} className="text-xs text-ink leading-relaxed">{line}</p>;
        })}
        {loading && <span className="inline-block w-2 h-4 bg-gold animate-pulse align-middle ml-1" />}
      </div>
    </div>
  );
}

export default function ZuriPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<QAReport[]>([]);

  useEffect(() => {
    try { setReports(JSON.parse(localStorage.getItem("zuri_reports") || "[]")); } catch {}
  }, []);

  async function runQA() {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/agents/qa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
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

      // Save report
      const lines = text.split("\n");
      const summaryLine = lines.find(l => l.includes("passing")) || "QA check complete";
      const report: QAReport = {
        id: Date.now().toString(),
        date: new Date().toLocaleString(),
        result: text,
        summary: summaryLine.replace(/\*\*/g, "").trim(),
      };
      const updated = [report, ...reports].slice(0, 7);
      setReports(updated);
      try { localStorage.setItem("zuri_reports", JSON.stringify(updated)); } catch {}
    } catch {
      setResult("Zuri encountered an error running QA. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const passCount = result.match(/✅/g)?.length ?? 0;
  const failCount = result.match(/❌/g)?.length ?? 0;
  const hasResult = result.length > 0;

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Header */}
      <div className="bg-ink text-ivory py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/agents" className="text-xs text-ivory/50 hover:text-ivory/80 mb-4 block">← All agents</Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ink to-ink/80 border-2 border-gold/30 flex items-center justify-center text-3xl">
              ✅
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-ivory">Zuri</h1>
              <p className="text-gold text-sm font-semibold">Quality Guardian Agent</p>
              <p className="text-ivory/50 text-xs italic">&ldquo;Zuri means beautiful / something done well in Swahili&rdquo;</p>
            </div>
          </div>
          <div className="bg-ivory/5 border border-ivory/10 rounded-xl px-4 py-3 max-w-2xl">
            <p className="text-xs font-bold text-gold uppercase tracking-wide mb-1">Sole job</p>
            <p className="text-ivory/90 text-sm">
              Daily QA checks across every page and API on the platform.
              Make sure every button works, every page loads, every API responds.
              Flag anything broken. Give the dev team a priority list.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* Score cards (if report exists) */}
        {hasResult && !loading && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-border rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-light-green">{passCount}</p>
              <p className="text-xs text-muted mt-1">Passing</p>
            </div>
            <div className={`border rounded-2xl p-4 text-center ${failCount > 0 ? "bg-red-earth/10 border-red-earth/30" : "bg-white border-border"}`}>
              <p className={`text-3xl font-bold ${failCount > 0 ? "text-red-earth" : "text-muted"}`}>{failCount}</p>
              <p className="text-xs text-muted mt-1">Failing</p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-4 text-center">
              <p className="text-3xl font-bold text-ink">{passCount + failCount}</p>
              <p className="text-xs text-muted mt-1">Total checks</p>
            </div>
          </div>
        )}

        {/* Run button */}
        <div className="bg-white border border-border rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-bold text-ink text-base">Run QA check</h2>
              <p className="text-xs text-muted mt-0.5">
                Zuri will test all {27} pages and {4} API endpoints. Takes about 30–60 seconds.
              </p>
            </div>
            {reports.length > 0 && (
              <p className="text-[10px] text-muted text-right">
                Last run:<br />
                <span className="font-semibold text-ink">{reports[0].date}</span>
              </p>
            )}
          </div>

          <button
            onClick={runQA}
            disabled={loading}
            className="w-full bg-ink text-ivory font-bold py-4 rounded-2xl text-base hover:bg-ink/80 transition-colors disabled:opacity-50"
          >
            {loading
              ? "Zuri is running checks..."
              : result
              ? "Run again →"
              : "Start daily QA check →"}
          </button>

          {loading && (
            <p className="text-center text-xs text-muted mt-3">
              Testing all pages and APIs. Zuri is thorough — this takes a moment.
            </p>
          )}
        </div>

        <ReportDisplay text={result} loading={loading} />

        {/* Previous reports */}
        {reports.length > 0 && !result && (
          <div className="mt-6">
            <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Previous reports</p>
            <div className="space-y-2">
              {reports.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setResult(r.result)}
                  className="w-full text-left bg-white border border-border rounded-xl px-4 py-3 hover:border-ink/30 transition-colors flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold text-ink">{r.summary}</p>
                    <p className="text-[10px] text-muted mt-0.5">{r.date}</p>
                  </div>
                  <span className="text-[10px] text-muted">View →</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Schedule note */}
        <div className="mt-8 bg-ink text-ivory rounded-2xl p-6">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Zuri&apos;s daily routine</p>
          <p className="text-ivory/85 leading-relaxed text-sm">
            Zuri runs every day. Her job isn&apos;t just to find what&apos;s broken — it&apos;s to make sure
            this platform is worthy of the people who depend on it. When someone from Dakar or Lagos
            or Nairobi opens this app looking for a grant that could change their life, everything
            has to work. No broken buttons. No slow pages. No dead links.
          </p>
          <p className="text-gold font-semibold mt-3 text-sm">
            Quality is not optional when the stakes are someone&apos;s livelihood.
          </p>
        </div>
      </div>
    </div>
  );
}
