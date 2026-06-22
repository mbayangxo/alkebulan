"use client";

import { useState, useRef } from "react";
import { Nav } from "@/app/components/nav";
import type { ScanResult } from "@/app/api/scan/route";
import Link from "next/link";

function ResultCard({ result }: { result: ScanResult }) {
  const [shared, setShared] = useState(false);

  const shareText = `🔍 Je viens de scanner: ${result.product_name}

${result.teaching_moment}

📦 Matière première: ${result.african_origin.material} (${result.african_origin.country})
💰 Prix brut au départ: ${result.african_origin.local_price_raw}
🏪 Prix en rayon: ${result.retail_price_estimate}
📊 Ce qui reste en Afrique: ${result.extraction_gap.raw_fraction}

🌱 Opportunité locale: ${result.local_opportunity.what_to_make}
Coût de démarrage: ${result.local_opportunity.start_cost}

Scanner un produit → kebu.app/scan`;

  async function share() {
    if (navigator.share) {
      try { await navigator.share({ text: shareText }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(shareText);
    setShared(true);
    setTimeout(() => setShared(false), 2500);
  }

  const confidenceColor = result.confidence === "high"
    ? "text-green-700 bg-green-50"
    : result.confidence === "medium"
    ? "text-gold-dark bg-gold/10"
    : "text-muted bg-warm-ivory";

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-xs font-bold text-deep-green uppercase tracking-widest mb-1">{result.product_type}</p>
            <h2 className="font-display text-xl font-bold text-ink">{result.product_name}</h2>
          </div>
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${confidenceColor}`}>
            {result.confidence === "high" ? "High confidence" : result.confidence === "medium" ? "Medium confidence" : "Low confidence — verify"}
          </span>
        </div>
        <div className="bg-gold/10 border border-gold/20 rounded-xl p-4">
          <p className="text-sm text-ink font-medium leading-relaxed italic">&ldquo;{result.teaching_moment}&rdquo;</p>
        </div>
      </div>

      {/* Origin chain */}
      <div className="bg-deep-green text-ivory rounded-2xl p-5">
        <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-3">African origin chain</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🌍</span>
          <div>
            <p className="font-bold text-ivory">{result.african_origin.material}</p>
            <p className="text-xs text-ivory/60">{result.african_origin.country}</p>
          </div>
        </div>
        <p className="text-xs text-ivory/80 leading-relaxed mb-4">{result.african_origin.context}</p>

        {/* Price journey */}
        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-[10px] font-semibold text-gold uppercase tracking-wide mb-3">The price journey</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 text-center">
              <p className="text-[10px] text-ivory/50 mb-1">At origin</p>
              <p className="font-bold text-ivory text-sm">{result.african_origin.local_price_raw}</p>
              <p className="text-[9px] text-ivory/40">{result.extraction_gap.raw_fraction} of shelf</p>
            </div>
            <div className="text-gold text-lg">→</div>
            <div className="flex-1 text-center">
              <p className="text-[10px] text-ivory/50 mb-1">On shelf</p>
              <p className="font-bold text-gold text-sm">{result.retail_price_estimate}</p>
              <p className="text-[9px] text-gold/60">100%</p>
            </div>
          </div>
          <div className="mt-3 border-t border-white/10 pt-3">
            <p className="text-xs text-ivory/70 leading-relaxed">{result.extraction_gap.comparison}</p>
            <p className="text-[10px] text-ivory/50 mt-1">{result.extraction_gap.value_added_outside} added outside Africa by processing, packaging & branding</p>
          </div>
        </div>
      </div>

      {/* Local opportunity */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <p className="text-[10px] font-bold text-deep-green uppercase tracking-widest mb-3">What you could build instead</p>
        <div className="mb-4">
          <p className="font-display text-lg font-bold text-ink mb-1">{result.local_opportunity.what_to_make}</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-warm-ivory rounded-xl p-3 text-center">
            <p className="text-[10px] text-muted mb-1">Start cost</p>
            <p className="text-xs font-bold text-ink">{result.local_opportunity.start_cost}</p>
          </div>
          <div className="bg-warm-ivory rounded-xl p-3 text-center">
            <p className="text-[10px] text-muted mb-1">Where to sell</p>
            <p className="text-xs font-bold text-ink leading-tight">{result.local_opportunity.market}</p>
          </div>
          <div className="bg-warm-ivory rounded-xl p-3 text-center">
            <p className="text-[10px] text-muted mb-1">Year 1 potential</p>
            <p className="text-xs font-bold text-deep-green leading-tight">{result.local_opportunity.potential}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href="/dashboard"
            className="flex-1 text-center bg-deep-green text-ivory font-bold py-3 rounded-xl text-xs hover:bg-mid-green transition-colors"
          >
            Find programs to start this →
          </Link>
          <Link
            href="/register/senegal"
            className="flex-1 text-center border border-deep-green text-deep-green font-semibold py-3 rounded-xl text-xs hover:bg-deep-green hover:text-ivory transition-colors"
          >
            How to register
          </Link>
        </div>
      </div>

      {/* Share */}
      <div className="bg-white border border-border rounded-2xl p-5">
        <h3 className="font-display text-base font-bold text-ink mb-2">Share the truth about this product</h3>
        <p className="text-xs text-muted mb-3">Post this on WhatsApp the next time someone asks why you should stay.</p>
        <button
          onClick={share}
          className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
        >
          {shared ? "Copied — paste into WhatsApp" : "Share via WhatsApp →"}
        </button>
      </div>
    </div>
  );
}

type ScanState = "idle" | "loading" | "done" | "error";

export default function ScanPage() {
  const [state, setState] = useState<ScanState>("idle");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file) return;

    // Preview
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setState("loading");
    setResult(null);
    setErrorMsg("");

    try {
      const base64 = await fileToBase64(file);
      const mediaType = file.type || "image/jpeg";

      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64, mediaType }),
      });

      if (!res.ok) {
        const err = await res.json() as { error: string };
        throw new Error(err.error || "Scan failed");
      }

      const data = await res.json() as ScanResult;
      setResult(data);
      setState("done");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Scan failed — please try again";
      setErrorMsg(msg);
      setState("error");
    }
  }

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function reset() {
    setState("idle");
    setResult(null);
    setPreviewUrl(null);
    setErrorMsg("");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-10 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Decode This Product</p>
          <h1 className="font-display text-3xl font-bold mb-3">
            Point your camera at anything
          </h1>
          <p className="text-sm text-ivory/70 leading-relaxed">
            See where its raw materials came from, what they sold for at origin, and the business you could build from the same ingredients.
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-8">
        {/* Camera / upload input */}
        {state === "idle" || state === "error" ? (
          <div className="mb-6">
            <div
              className="border-2 border-dashed border-border rounded-2xl p-8 text-center cursor-pointer hover:border-deep-green hover:bg-deep-green/2 transition-colors"
              onClick={() => inputRef.current?.click()}
            >
              <div className="text-4xl mb-3">📷</div>
              <p className="font-display font-bold text-ink mb-1">Take a photo or upload one</p>
              <p className="text-xs text-muted mb-3">
                Point at a product — packaged food, cosmetics, leather goods, textiles, beverages
              </p>
              <span className="text-xs font-semibold text-deep-green border border-deep-green px-4 py-2 rounded-full">
                Open camera →
              </span>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={e => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            {state === "error" && (
              <div className="mt-3 bg-red-earth/10 border border-red-earth/20 rounded-xl p-4 text-center">
                <p className="text-sm text-red-earth">{errorMsg}</p>
                <button onClick={reset} className="mt-2 text-xs font-semibold text-red-earth hover:underline">
                  Try again
                </button>
              </div>
            )}
          </div>
        ) : null}

        {/* Loading state */}
        {state === "loading" && (
          <div className="mb-6">
            {previewUrl && (
              <div className="rounded-2xl overflow-hidden mb-4 max-h-64 flex items-center justify-center bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl} alt="Scanned product" className="max-h-64 object-contain" />
              </div>
            )}
            <div className="bg-white border border-border rounded-2xl p-8 text-center">
              <div className="w-10 h-10 border-4 border-deep-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="font-display font-bold text-ink mb-1">Tracing the supply chain…</p>
              <p className="text-xs text-muted">Identifying raw materials and African origin</p>
            </div>
          </div>
        )}

        {/* Result */}
        {state === "done" && result && (
          <div>
            {previewUrl && (
              <div className="rounded-2xl overflow-hidden mb-4 max-h-48 flex items-center justify-center bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl} alt="Scanned product" className="max-h-48 object-contain" />
              </div>
            )}
            <ResultCard result={result} />
            <div className="mt-4 text-center">
              <button
                onClick={reset}
                className="text-xs font-semibold text-muted hover:text-deep-green transition-colors underline underline-offset-2"
              >
                Scan another product
              </button>
            </div>
          </div>
        )}

        {/* How it works */}
        {state === "idle" && (
          <div className="bg-white border border-border rounded-2xl p-5">
            <h2 className="font-display text-base font-bold text-ink mb-3">How it works</h2>
            <div className="space-y-3">
              {[
                ["📷", "Take a photo", "Point at any product — food, cosmetics, clothes, shoes"],
                ["🔍", "We trace the origin", "AI identifies the raw materials and where they came from in Africa"],
                ["📊", "See the extraction gap", "Raw price in Africa vs. shelf price — and who captures the difference"],
                ["🌱", "See the opportunity", "What you could build to capture more of this value yourself"],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{title}</p>
                    <p className="text-xs text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
