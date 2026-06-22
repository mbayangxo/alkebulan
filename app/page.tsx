import Link from "next/link";
import { AlkebulanLion, AlkebulanCrest } from "./components/panther-motif";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";
import { SUCCESS_STORIES } from "@/lib/data/success-stories";
import { WEALTH_PATHS } from "@/lib/wealth-paths";
import { INDUSTRIES } from "@/lib/data/industry-intelligence";

const FEATURED_STORIES = SUCCESS_STORIES.slice(0, 3);

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#FDFAF4", color: "#0A0A0A" }}>

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50" style={{ background: "#0B3D2E" }}>
        <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #B04510, #E05A18, #F27840)" }} />
        <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <AlkebulanLion size={38} />
              <span style={{ letterSpacing: "0.13em", fontFamily: "var(--font-fraunces)", color: "#E05A18" }}
                className="font-bold italic text-[17px] leading-none hidden sm:block">
                ALKEBULAN
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.14em]">
              {[["My Path", "/path"], ["Matches", "/matches"], ["Industry", "/industry"], ["Programs", "/programs"]].map(([l, h]) => (
                <Link key={h} href={h} className="text-white/60 hover:text-[#E05A18] transition-colors">{l}</Link>
              ))}
              <span className="text-white/20">·</span>
              <Link href="/build-business" className="flex items-center gap-2 bg-[#E05A18] hover:bg-[#F27840] text-[#0B3D2E] font-bold px-5 py-2 rounded-full transition-colors">
                <AlkebulanLion size={14} /> Build a Business
              </Link>
            </div>
            <div className="lg:hidden flex items-center gap-3">
              <Link href="/signup" className="text-[11px] font-bold uppercase tracking-[0.1em] bg-[#E05A18] text-[#0B3D2E] px-4 py-2 rounded-full">
                Start
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#0B3D2E", minHeight: "92vh", display: "flex", alignItems: "center" }}>
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E05A18 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
        {/* Gold glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07] rounded-full blur-[120px]"
          style={{ background: "#E05A18", transform: "translate(30%, -30%)" }} />

        <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-24 lg:py-40">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-10">
              <AlkebulanLion size={28} />
              <span style={{ letterSpacing: "0.22em", color: "rgba(224,90,24,0.7)", fontSize: "10px" }}
                className="font-semibold uppercase">
                African Opportunity OS
              </span>
            </div>

            {/* Main headline */}
            <h1 style={{ fontFamily: "var(--font-fraunces)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
              className="font-bold text-white mb-8"
              >
              <span className="block text-[clamp(3rem,9vw,7.5rem)]">Africa is not</span>
              <span className="block text-[clamp(3rem,9vw,7.5rem)]">a place to ask</span>
              <span className="block text-[clamp(3rem,9vw,7.5rem)]" style={{ color: "#E05A18" }}>for money.</span>
            </h1>

            {/* Sub-headline */}
            <p style={{ fontFamily: "var(--font-fraunces)", color: "rgba(255,255,255,0.5)", lineHeight: 1.3 }}
              className="text-[clamp(1.5rem,4vw,2.25rem)] italic font-light mb-12 max-w-2xl">
              It&apos;s a place to build wealth.
            </p>

            <p className="text-white/50 text-base max-w-xl leading-relaxed mb-12">
              Alkebulan opens your eyes to what is already in front of you —
              the industries to enter, the businesses to build, the paths that
              have already been walked. Then shows you exactly how.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/path"
                className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-[0.08em] transition-all"
                style={{ background: "#E05A18", color: "#0B3D2E" }}>
                Build my roadmap
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12H19M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
              <Link href="/industry"
                className="inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full text-sm uppercase tracking-[0.08em] transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
                Industry Intelligence
              </Link>
            </div>
          </div>

          {/* Floating stat — bottom right */}
          <div className="absolute bottom-12 right-8 hidden lg:block text-right">
            <p style={{ fontFamily: "var(--font-fraunces)", color: "#E05A18", fontSize: "5rem", lineHeight: 1, fontWeight: 700 }}>
              54
            </p>
            <p className="text-white/30 text-xs uppercase tracking-[0.2em]">African countries</p>
          </div>
        </div>
      </section>

      {/* ── EXTRACTION TRUTH ── */}
      <section className="py-6" style={{ background: "#F5EFE0", borderBottom: "1px solid #E0D8C8" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-3">
            <p style={{ letterSpacing: "0.2em", color: "#B04510", fontSize: "9px" }} className="font-semibold uppercase flex-shrink-0">
              What leaves Africa
            </p>
            {[
              "Ghana grows 65% of world cocoa · earns 6% of chocolate value",
              "Ethiopia invented coffee · earns 0.2% of the $500B market",
              "DRC has 65% of global cobalt · earns 3% of EV battery value",
              "$100B flows into Africa via remittance · $12B taken in fees",
            ].map((fact) => (
              <p key={fact} style={{ color: "#6B5B45", fontSize: "11px" }} className="flex items-center gap-2">
                <span style={{ color: "#E05A18" }}>—</span> {fact}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-24 lg:py-32" style={{ background: "#FDFAF4" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <p style={{ letterSpacing: "0.2em", color: "#E05A18", fontSize: "10px" }} className="font-semibold uppercase mb-4">
              What Alkebulan is
            </p>
            <h2 style={{ fontFamily: "var(--font-fraunces)", lineHeight: 1.05, color: "#0B3D2E" }}
              className="font-bold text-[clamp(2rem,5vw,3.75rem)] max-w-3xl">
              Not a database. An operating system for African opportunity.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-[#E0D8C8] rounded-3xl overflow-hidden">
            {[
              {
                num: "01",
                title: "Industry Intelligence",
                sub: "Who controls each step of Africa's most valuable industries — and exactly where you can enter.",
                detail: "Cocoa · Coffee · Cotton · Coltan · Remittance",
                href: "/industry",
                cta: "Explore Industries",
              },
              {
                num: "02",
                title: "Opportunity Path",
                sub: "Tell us your goal, your country, your budget. Get the exact sequence of steps — what to do first, second, third.",
                detail: "54 countries · Real timelines · Real costs",
                href: "/path",
                cta: "Build My Path",
                highlight: true,
              },
              {
                num: "03",
                title: "AI Business Builder",
                sub: "A structured multi-step session that builds your actual business plan — not a chat box.",
                detail: "Market analysis · First sale · 12-month roadmap",
                href: "/build-business",
                cta: "Start Building",
              },
            ].map((p, i) => (
              <div key={p.num} className="relative"
                style={{
                  background: p.highlight ? "#0B3D2E" : "#FDFAF4",
                  borderLeft: i > 0 ? "1px solid #E0D8C8" : "none",
                }}>
                <div className="p-8 lg:p-10 flex flex-col h-full min-h-[380px]">
                  <div className="flex items-start justify-between mb-8">
                    <span style={{ fontFamily: "var(--font-fraunces)", color: p.highlight ? "rgba(224,90,24,0.4)" : "rgba(11,61,46,0.15)", fontSize: "4rem", lineHeight: 1, fontWeight: 700 }}>
                      {p.num}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-fraunces)", color: p.highlight ? "#FDFAF4" : "#0B3D2E", lineHeight: 1.15 }}
                    className="font-bold text-2xl mb-4">
                    {p.title}
                  </h3>
                  <p style={{ color: p.highlight ? "rgba(253,250,244,0.6)" : "#6B5B45", lineHeight: 1.65 }}
                    className="text-sm flex-1 mb-6">
                    {p.sub}
                  </p>
                  <p style={{ color: p.highlight ? "rgba(224,90,24,0.7)" : "rgba(11,61,46,0.4)", fontSize: "10px", letterSpacing: "0.15em" }}
                    className="font-semibold uppercase mb-6">
                    {p.detail}
                  </p>
                  <Link href={p.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] transition-all self-start"
                    style={{ color: p.highlight ? "#E05A18" : "#0B3D2E" }}>
                    {p.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUMBERS THAT MATTER ── */}
      <section className="py-24" style={{ background: "#0B3D2E" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 rounded-3xl overflow-hidden">
            {[
              { n: "$1T+", label: "African government contracts per year", sub: "3% bid. You could." },
              { n: "54", label: "Countries with full intelligence coverage", sub: "Every market mapped." },
              { n: "$100B", label: "Diaspora remittances into Africa yearly", sub: "Waiting to become equity." },
              { n: "6%", label: "Of chocolate value stays in cocoa-growing Africa", sub: "94% is your opportunity." },
            ].map((s, i) => (
              <div key={s.n} className="p-8 lg:p-10"
                style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <p style={{ fontFamily: "var(--font-fraunces)", color: "#E05A18", lineHeight: 1, fontWeight: 700 }}
                  className="text-[clamp(2.5rem,5vw,4rem)] mb-3">
                  {s.n}
                </p>
                <p className="text-white/70 text-sm leading-snug mb-2">{s.label}</p>
                <p style={{ color: "rgba(224,90,24,0.5)", fontSize: "11px", letterSpacing: "0.1em" }}
                  className="font-semibold uppercase">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 lg:py-32" style={{ background: "#FDFAF4" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p style={{ letterSpacing: "0.2em", color: "#E05A18", fontSize: "10px" }} className="font-semibold uppercase mb-5">
                How it works
              </p>
              <h2 style={{ fontFamily: "var(--font-fraunces)", lineHeight: 1.05, color: "#0B3D2E" }}
                className="font-bold text-[clamp(2rem,4.5vw,3.5rem)] mb-8">
                Your goal.<br />Your path.<br />Your first step.
              </h2>
              <p style={{ color: "#6B5B45", lineHeight: 1.75 }} className="text-base mb-10 max-w-lg">
                Most platforms say: here is a grant. Alkebulan says: you want to launch a
                beauty brand in Senegal — here are the 7 steps, in order, with the exact
                cost, timeline, and program at each stage.
              </p>
              <Link href="/path"
                className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-[0.08em] transition-all"
                style={{ background: "#0B3D2E", color: "#FDFAF4" }}>
                Build my roadmap →
              </Link>
            </div>

            {/* Path preview card */}
            <div style={{ background: "#0B3D2E", borderRadius: "24px", overflow: "hidden" }}>
              <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#E05A18" }} />
                  <p style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(224,90,24,0.7)" }}
                    className="font-semibold uppercase">
                    Example · Beauty brand · Senegal
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-2.5">
                {[
                  { n: 1, text: "Register at RCCM Dakar", meta: "2 weeks · $40", done: true },
                  { n: 2, text: "Open business bank account (BNDE)", meta: "1 week · Free", done: true },
                  { n: 3, text: "Apply to DER/FJ Women's Fund — 1.5M CFA", meta: "4 weeks · Free", done: false },
                  { n: 4, text: "ADPME SME training program", meta: "3 weeks · Free", done: false },
                  { n: 5, text: "Tony Elumelu Foundation — $5,000", meta: "3 months · Free", done: false },
                  { n: 6, text: "Register on ARMP tender portal", meta: "1 week · $20", done: false },
                  { n: 7, text: "Bid: government cosmetics supply tender", meta: "Ongoing · 5% bid bond", done: false },
                ].map(({ n, text, meta, done }) => (
                  <div key={n} className="flex items-start gap-3 px-4 py-3 rounded-xl"
                    style={{ background: done ? "rgba(224,90,24,0.1)" : "rgba(255,255,255,0.04)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-bold mt-0.5"
                      style={{
                        background: done ? "#E05A18" : "transparent",
                        border: done ? "none" : "1px solid rgba(255,255,255,0.15)",
                        color: done ? "#0B3D2E" : "rgba(255,255,255,0.3)"
                      }}>
                      {done ? "✓" : n}
                    </div>
                    <div>
                      <p className="text-xs font-medium" style={{ color: done ? "rgba(253,250,244,0.4)" : "rgba(253,250,244,0.85)", textDecoration: done ? "line-through" : "none" }}>
                        {text}
                      </p>
                      <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }} className="mt-0.5">{meta}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <Link href="/path" className="block text-center text-xs font-bold uppercase tracking-[0.12em] py-3 rounded-full transition-all"
                  style={{ background: "#E05A18", color: "#0B3D2E" }}>
                  Build your path →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY INTELLIGENCE PREVIEW ── */}
      <section className="py-24" style={{ background: "#F5EFE0" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p style={{ letterSpacing: "0.2em", color: "#E05A18", fontSize: "10px" }} className="font-semibold uppercase mb-4">
                Industry Intelligence
              </p>
              <h2 style={{ fontFamily: "var(--font-fraunces)", lineHeight: 1.05, color: "#0B3D2E" }}
                className="font-bold text-[clamp(2rem,4.5vw,3.5rem)]">
                Who controls the chain.<br />Where you can enter.
              </h2>
            </div>
            <Link href="/industry" className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors"
              style={{ color: "#0B3D2E" }}>
              All 5 industries →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industry/${ind.slug}`}
                className="group relative p-6 rounded-2xl transition-all"
                style={{ background: "#0B3D2E", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-3xl mb-4">{ind.icon}</div>
                <p style={{ fontFamily: "var(--font-fraunces)", color: "#FDFAF4", lineHeight: 1.2 }}
                  className="font-bold text-lg mb-2">{ind.name}</p>
                <p style={{ color: "rgba(253,250,244,0.4)", fontSize: "11px", lineHeight: 1.5 }}
                  className="line-clamp-2 mb-4">{ind.tagline}</p>
                <p style={{ color: "#E05A18", fontSize: "10px", letterSpacing: "0.15em" }}
                  className="font-bold uppercase">
                  {ind.value_leakage.africa_earns_pct} of value →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS PATHS ── */}
      <section className="py-24 lg:py-32" style={{ background: "#FDFAF4" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p style={{ letterSpacing: "0.2em", color: "#E05A18", fontSize: "10px" }} className="font-semibold uppercase mb-4">
                Proof it works
              </p>
              <h2 style={{ fontFamily: "var(--font-fraunces)", lineHeight: 1.05, color: "#0B3D2E" }}
                className="font-bold text-[clamp(2rem,4.5vw,3.5rem)]">
                Real people. Real paths.
              </h2>
            </div>
            <Link href="/success" className="hidden lg:block text-xs font-bold uppercase tracking-[0.12em]"
              style={{ color: "#0B3D2E" }}>
              All stories →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {FEATURED_STORIES.map((story) => {
              const initials = story.name.split(" ").map((n: string) => n[0]).join("");
              return (
                <div key={story.id} className="rounded-2xl overflow-hidden"
                  style={{ background: "#FDFAF4", border: "1px solid #E0D8C8" }}>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ background: "#0B3D2E", color: "#FDFAF4" }}>
                        {initials}
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "#0A0A0A" }}>{story.name}, {story.age}</p>
                        <p className="text-xs" style={{ color: "#9B8B75" }}>{story.location}</p>
                      </div>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-fraunces)", color: "#0B3D2E", lineHeight: 1.25 }}
                      className="font-bold text-base mb-3">
                      {story.headline}
                    </h3>
                    <p className="text-xs leading-relaxed mb-4 line-clamp-3" style={{ color: "#6B5B45" }}>{story.story}</p>
                    <blockquote className="text-xs italic pl-3 leading-relaxed" style={{ borderLeft: "2px solid #E05A18", color: "#9B8B75" }}>
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                    {story.capital_raised && (
                      <p className="text-xs font-bold mt-4" style={{ color: "#B04510" }}>{story.capital_raised}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WEALTH PATHS ── */}
      <section className="py-24" style={{ background: "#0B3D2E" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <p style={{ letterSpacing: "0.2em", color: "rgba(224,90,24,0.6)", fontSize: "10px" }} className="font-semibold uppercase mb-4">
              7 proven paths
            </p>
            <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#FDFAF4", lineHeight: 1.05 }}
              className="font-bold text-[clamp(2rem,4.5vw,3.5rem)]">
              Which path is yours?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {WEALTH_PATHS.slice(0, 4).map((path) => (
              <Link key={path.id} href={`/path?goal=${encodeURIComponent(path.prefilledGoal)}`}
                className="group p-6 rounded-2xl transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-2xl mb-4">{path.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", color: "#FDFAF4", lineHeight: 1.2 }}
                  className="font-bold text-lg mb-2">
                  {path.persona}
                </h3>
                <p style={{ color: "rgba(253,250,244,0.45)", fontSize: "12px", lineHeight: 1.6 }} className="mb-4">
                  {path.tagline}
                </p>
                <div className="flex gap-4 mb-4">
                  <div>
                    <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }} className="uppercase mb-0.5">Start with</p>
                    <p style={{ color: "#E05A18", fontSize: "12px" }} className="font-bold">{path.startingCapital}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em" }} className="uppercase mb-0.5">Timeline</p>
                    <p style={{ color: "rgba(253,250,244,0.7)", fontSize: "12px" }} className="font-bold">{path.timelineMonths}mo</p>
                  </div>
                </div>
                <p style={{ color: "#E05A18", fontSize: "11px", letterSpacing: "0.1em" }} className="font-semibold uppercase">
                  Start here →
                </p>
              </Link>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {WEALTH_PATHS.slice(4).map((path) => (
              <Link key={path.id} href={`/path?goal=${encodeURIComponent(path.prefilledGoal)}`}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-2xl flex-shrink-0">{path.emoji}</span>
                <div>
                  <p style={{ color: "#FDFAF4", fontFamily: "var(--font-fraunces)" }} className="font-semibold text-sm">{path.persona}</p>
                  <p style={{ color: "#E05A18", fontSize: "11px" }} className="font-semibold mt-0.5">From {path.startingCapital} →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="py-24 lg:py-32" style={{ background: "#FDFAF4", borderTop: "1px solid #E0D8C8" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <AlkebulanCrest size={56} className="mx-auto mb-10" />
          <blockquote style={{ fontFamily: "var(--font-fraunces)", color: "#0B3D2E", lineHeight: 1.35, fontWeight: 500 }}
            className="text-[clamp(1.4rem,3.5vw,2rem)] italic mb-8">
            &ldquo;This platform is not about charity. It is not about development aid.
            It is about ownership, wealth, business, culture, and the opportunity
            that has always been here — waiting to be claimed.&rdquo;
          </blockquote>
          <p style={{ color: "#9B8B75", letterSpacing: "0.12em", fontSize: "11px" }} className="uppercase font-semibold">
            Alkebulan — Mother of Mankind
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32" style={{ background: "#0B3D2E" }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 style={{ fontFamily: "var(--font-fraunces)", color: "#FDFAF4", lineHeight: 1.0, fontWeight: 700 }}
            className="text-[clamp(3rem,8vw,6rem)] mb-8">
            Your path<br />starts <span style={{ color: "#E05A18" }}>here.</span>
          </h2>
          <p style={{ color: "rgba(253,250,244,0.5)", lineHeight: 1.7 }} className="text-base mb-12 max-w-xl mx-auto">
            Tell us your goal. Get your roadmap. No credit card.
            No grant applications. Just the path.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/path"
              className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-[0.08em] transition-all"
              style={{ background: "#E05A18", color: "#0B3D2E" }}>
              Build my roadmap →
            </Link>
            <Link href="/build-business"
              className="inline-flex items-center gap-3 font-semibold px-10 py-4 rounded-full text-sm uppercase tracking-[0.08em] transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
              AI Business Builder
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#070F09", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <AlkebulanCrest size={32} />
                <span style={{ fontFamily: "var(--font-fraunces)", color: "#FDFAF4", letterSpacing: "0.1em" }}
                  className="font-bold italic">ALKEBULAN</span>
              </div>
              <p style={{ color: "rgba(253,250,244,0.35)", fontSize: "12px", lineHeight: 1.7 }}>
                Africa is the opportunity.
              </p>
            </div>
            {[
              {
                title: "Platform",
                links: [["Your Path", "/path"], ["Industry Intelligence", "/industry"], ["AI Business Builder", "/build-business"], ["Programs", "/programs"], ["Procurement", "/procurement"]],
              },
              {
                title: "Intelligence",
                links: [["Cocoa", "/industry/cocoa"], ["Coffee", "/industry/coffee"], ["Cotton", "/industry/cotton"], ["Coltan", "/industry/coltan"], ["Remittance", "/industry/remittance"]],
              },
              {
                title: "Tools",
                links: [["Capital Stack", "/capital-stack"], ["AfCFTA Navigator", "/afcfta"], ["Bankability Engine", "/bankability"], ["AI Assistant", "/assistant"], ["Success Stories", "/success"]],
              },
            ].map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)" }} className="font-semibold uppercase mb-4">
                  {col.title}
                </p>
                <div className="space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <Link key={href} href={href} className="block text-xs transition-colors"
                      style={{ color: "rgba(253,250,244,0.45)" }}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)" }}>© 2026 Alkebulan. Africa is the opportunity.</p>
            <div className="flex gap-6">
              {[["Sign in", "/login"], ["Get started", "/signup"]].map(([l, h]) => (
                <Link key={h} href={h} style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
                  className="uppercase font-semibold hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
