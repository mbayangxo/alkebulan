import { Nav } from "@/app/components/nav";
import { INDUSTRIES } from "@/lib/data/industry-intelligence";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Intelligence — Kebu",
  description:
    "Who controls each step of Africa's most important industries? Where does the money go? Where can you enter?",
};

export default function IndustryPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#080620]">
        {/* Hero */}
        <section className="border-b border-white/8 px-5 sm:px-8 pt-16 pb-14">
          <div className="max-w-4xl mx-auto">
            <p
              style={{ letterSpacing: "0.2em" }}
              className="text-[10px] font-semibold uppercase text-gold/50 mb-5"
            >
              Industry Intelligence
            </p>
            <h1
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-4xl sm:text-5xl font-bold text-ivory leading-[1.05] mb-6"
            >
              Africa grows the raw material.
              <br />
              <span className="text-gold italic">Someone else sells the product.</span>
            </h1>
            <p className="text-ivory/60 text-lg max-w-2xl leading-relaxed">
              Five industries where value is created in Africa and extracted elsewhere. See every step of the chain,
              who controls it, where the money goes — and exactly where you can enter at any capital level.
            </p>
          </div>
        </section>

        {/* Extraction teaser — the numbers */}
        <section className="border-b border-white/8 px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <p
              style={{ letterSpacing: "0.18em" }}
              className="text-[9px] font-semibold uppercase text-gold/40 mb-6"
            >
              What leaves Africa
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDUSTRIES.map(ind => (
                <div key={ind.slug} className="bg-white/3 border border-white/8 rounded-2xl p-5">
                  <div className="text-2xl mb-3">{ind.icon}</div>
                  <p className="text-ivory/40 text-xs leading-relaxed">{ind.extraction_headline}</p>
                </div>
              ))}
              <div className="bg-gold/5 border border-gold/15 rounded-2xl p-5 flex flex-col justify-center">
                <p className="text-gold text-sm font-semibold leading-snug">
                  Every one of these gaps is a business opportunity.
                </p>
                <p className="text-ivory/40 text-xs mt-2">
                  The chain doesn't change until Africans own a step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry cards */}
        <section className="px-5 sm:px-8 py-12">
          <div className="max-w-4xl mx-auto space-y-5">
            {INDUSTRIES.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industry/${ind.slug}`}
                className="group block bg-white/3 border border-white/8 hover:border-gold/25 rounded-2xl p-7 transition-all duration-200 hover:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{ind.icon}</span>
                      <div>
                        <p
                          style={{ letterSpacing: "0.12em" }}
                          className="text-[9px] font-semibold uppercase text-gold/40"
                        >
                          Industry {i + 1}
                        </p>
                        <h2 className="text-ivory font-bold text-lg">{ind.name}</h2>
                      </div>
                    </div>
                    <p className="text-ivory/55 text-sm leading-relaxed mb-4">{ind.tagline}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {ind.countries.slice(0, 4).map(c => (
                        <span key={c} className="text-[10px] text-ivory/40 bg-white/5 rounded-full px-2.5 py-0.5">
                          {c}
                        </span>
                      ))}
                      {ind.countries.length > 4 && (
                        <span className="text-[10px] text-ivory/30 bg-white/5 rounded-full px-2.5 py-0.5">
                          +{ind.countries.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-6">
                      <div>
                        <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-0.5">Chain steps</p>
                        <p className="text-ivory/70 text-sm font-medium">{ind.chain.length} steps</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-0.5">Market size</p>
                        <p className="text-gold text-sm font-medium">{ind.market_size.split(" ")[0]} {ind.market_size.split(" ")[1]}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-0.5">Entry paths</p>
                        <p className="text-ivory/70 text-sm font-medium">{ind.entry_points.length} capital levels</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-ivory/30 group-hover:border-gold/30 group-hover:text-gold transition-all">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-white/8 px-5 sm:px-8 py-12">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-ivory font-semibold text-lg mb-1">Ready to build in one of these industries?</p>
              <p className="text-ivory/50 text-sm">Use the AI Business Builder to create a plan tailored to your situation.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/build-business"
                className="bg-gold hover:bg-gold-light text-deep-green text-xs font-bold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
              >
                Build a Business
              </Link>
              <Link
                href="/path"
                className="border border-white/15 hover:border-gold/30 text-ivory/70 hover:text-ivory text-xs font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
              >
                My Path
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
