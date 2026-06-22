"use client";

import { useState } from "react";
import type { SuccessIntel } from "@/lib/data/program-intel";

interface Props {
  intel: SuccessIntel;
  programName: string;
}

export function SuccessIntelCard({ intel, programName }: Props) {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [open, setOpen] = useState(false);

  function toggle(i: number) {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const readinessScore = Math.round((checked.size / intel.readiness_checklist.length) * 100);

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden">
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <span className="text-lg">🎯</span>
          </div>
          <div>
            <p className="font-bold text-ink text-sm">Application Intelligence</p>
            <p className="text-xs text-muted">{intel.typical_success_rate}</p>
          </div>
        </div>
        <span className="text-muted text-sm">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="border-t border-border divide-y divide-border">

          {/* What strengthens */}
          <div className="p-5">
            <p className="text-xs font-bold text-deep-green uppercase tracking-wide mb-3">
              ✅ What strengthens your application
            </p>
            <ul className="space-y-2">
              {intel.what_strengthens.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink">
                  <span className="text-deep-green mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What kills */}
          <div className="p-5">
            <p className="text-xs font-bold text-red-earth uppercase tracking-wide mb-3">
              ❌ What kills your application
            </p>
            <ul className="space-y-2">
              {intel.what_kills.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink">
                  <span className="text-red-earth/60 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Readiness checklist */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-ink uppercase tracking-wide">
                Are you ready? — Checklist
              </p>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${readinessScore}%`,
                      backgroundColor: readinessScore === 100 ? "#2D7A3C" : readinessScore > 60 ? "#E05A18" : "#D4874A",
                    }}
                  />
                </div>
                <span className="text-xs font-bold text-muted">{readinessScore}%</span>
              </div>
            </div>
            <ul className="space-y-2">
              {intel.readiness_checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <button
                    onClick={() => toggle(i)}
                    className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 border transition-colors flex items-center justify-center ${
                      checked.has(i)
                        ? "bg-deep-green border-deep-green"
                        : "border-border hover:border-gold"
                    }`}
                  >
                    {checked.has(i) && <span className="text-[10px] text-ivory font-bold">✓</span>}
                  </button>
                  <span className={`text-sm transition-colors ${checked.has(i) ? "text-muted line-through" : "text-ink"}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {readinessScore === 100 && (
              <div className="mt-4 bg-deep-green/10 rounded-xl p-3 text-center">
                <p className="text-sm font-bold text-deep-green">You're ready to apply. 🎉</p>
              </div>
            )}
          </div>

          {/* Insider tip */}
          {intel.insider_tip && (
            <div className="p-5 bg-gold/5">
              <p className="text-xs font-bold text-gold uppercase tracking-wide mb-2">
                💡 Insider tip
              </p>
              <p className="text-sm text-ink leading-relaxed">{intel.insider_tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
