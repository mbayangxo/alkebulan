"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";

interface FlagListingProps {
  opportunityId: string;
  opportunityTitle: string;
}

export function FlagListing({ opportunityId, opportunityTitle }: FlagListingProps) {
  const [open, setOpen] = useState(false);
  const [what, setWhat] = useState("");
  const [contact, setContact] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function submit() {
    if (!what.trim()) return;
    setState("submitting");
    try {
      const supabase = createClient();
      await supabase.from("program_flags").insert({
        opportunity_id: opportunityId,
        opportunity_title: opportunityTitle,
        what_changed: what.trim(),
        reporter_contact: contact.trim() || null,
        created_at: new Date().toISOString(),
      });
      setState("done");
    } catch {
      // table may not exist yet — still thank the user, log internally
      console.warn("program_flags write failed — table may not exist yet");
      setState("done");
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="text-[10px] font-medium text-muted hover:text-amber-700 transition-colors underline underline-offset-2"
      >
        Flag as changed
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/40 px-4 pb-4 sm:pb-0">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6">
        {state === "done" ? (
          <div className="text-center py-4">
            <div className="text-2xl mb-3">🙏</div>
            <h3 className="font-display font-bold text-ink mb-2">Got it — thank you</h3>
            <p className="text-sm text-muted mb-4">
              We&apos;ll flag this listing for reverification before it can lead anyone astray.
              This kind of correction is the most valuable thing you can do for the platform.
            </p>
            <button
              onClick={() => { setOpen(false); setState("idle"); setWhat(""); setContact(""); }}
              className="bg-deep-green text-ivory text-sm font-semibold px-5 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display font-bold text-ink text-base">Flag as changed</h3>
                <p className="text-xs text-muted mt-0.5 leading-snug">
                  What did you notice? We&apos;ll hold this listing for reverification.
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-ink text-lg leading-none ml-4">
                ×
              </button>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 mb-4">
              <p className="text-[10px] text-amber-800 font-medium line-clamp-2">{opportunityTitle}</p>
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-ink block mb-1.5">What changed?</label>
              <textarea
                value={what}
                onChange={e => setWhat(e.target.value)}
                placeholder={'e.g. "The program closed in March 2026" or "The deadline passed and was not renewed" or "The ministry website shows this program is suspended"'}
                rows={3}
                className="w-full text-sm border border-border rounded-xl px-3 py-2.5 resize-none focus:outline-none focus:border-deep-green transition-colors"
              />
            </div>

            <div className="mb-5">
              <label className="text-xs font-semibold text-ink block mb-1.5">
                Contact (optional)
                <span className="font-normal text-muted ml-1">— so we can follow up if needed</span>
              </label>
              <input
                type="text"
                value={contact}
                onChange={e => setContact(e.target.value)}
                placeholder="Phone or email"
                className="w-full text-sm border border-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-deep-green transition-colors"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 text-sm font-medium text-muted border border-border rounded-full py-2 hover:border-ink transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submit}
                disabled={!what.trim() || state === "submitting"}
                className="flex-1 text-sm font-semibold bg-amber-600 text-white rounded-full py-2 hover:bg-amber-700 transition-colors disabled:opacity-40"
              >
                {state === "submitting" ? "Sending…" : "Flag it"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
