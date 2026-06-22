import { Nav } from "@/app/components/nav";
import { INDUSTRIES, getIndustry } from "@/lib/data/industry-intelligence";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return INDUSTRIES.map(ind => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} — Industry Intelligence — Alkebulan`,
    description: industry.tagline,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const others = INDUSTRIES.filter(i => i.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#071F15]">
        {/* Breadcrumb */}
        <div className="border-b border-white/8 px-5 sm:px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-[11px] text-ivory/40">
            <Link href="/industry" className="hover:text-ivory/70 transition-colors">Industry Intelligence</Link>
            <span>/</span>
            <span className="text-ivory/70">{industry.name}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="border-b border-white/8 px-5 sm:px-8 pt-12 pb-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{industry.icon}</span>
              <p
                style={{ letterSpacing: "0.2em" }}
                className="text-[10px] font-semibold uppercase text-gold/50"
              >
                {industry.name} Industry
              </p>
            </div>
            <h1
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-3xl sm:text-4xl font-bold text-ivory leading-[1.1] mb-5"
            >
              {industry.tagline}
            </h1>
            <p className="text-gold font-semibold text-sm">{industry.market_size}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {industry.countries.map(c => (
                <span key={c} className="text-[10px] text-ivory/45 bg-white/5 border border-white/8 rounded-full px-2.5 py-1">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage context — Gap 3 */}
        <section className="border-b border-white/8 px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold/5 border-l-2 border-gold/40 rounded-r-2xl pl-6 pr-5 py-6">
              <p
                style={{ letterSpacing: "0.16em" }}
                className="text-[9px] font-semibold uppercase text-gold/50 mb-3"
              >
                Historical context
              </p>
              <p className="text-ivory/75 text-sm leading-relaxed">{industry.heritage}</p>
            </div>
          </div>
        </section>

        {/* Value Extraction — Gap 2 */}
        <section className="border-b border-white/8 px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <p
              style={{ letterSpacing: "0.18em" }}
              className="text-[9px] font-semibold uppercase text-gold/40 mb-6"
            >
              What leaves Africa · What comes back
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
                <p className="text-[10px] text-ivory/35 uppercase tracking-wider mb-2">Africa exports</p>
                <p className="text-ivory font-semibold text-base mb-1">{industry.value_leakage.raw_export}</p>
                <p className="text-gold text-lg font-bold">{industry.value_leakage.raw_price}</p>
              </div>
              <div className="bg-white/3 border border-red-900/30 rounded-2xl p-5">
                <p className="text-[10px] text-ivory/35 uppercase tracking-wider mb-2">World sells back</p>
                <p className="text-ivory font-semibold text-base mb-1">{industry.value_leakage.finished_product}</p>
                <p className="text-red-400 text-lg font-bold">{industry.value_leakage.finished_price}</p>
              </div>
              <div className="bg-gold/5 border border-gold/20 rounded-2xl p-5">
                <p className="text-[10px] text-gold/50 uppercase tracking-wider mb-2">Africa's share</p>
                <p className="text-gold text-2xl font-bold mb-1">{industry.value_leakage.africa_earns_pct}</p>
                <p className="text-ivory/40 text-xs">{industry.value_leakage.annual_value_lost} lost/year</p>
              </div>
            </div>
            <div className="mt-4 bg-white/3 border border-white/8 rounded-2xl p-5">
              <p className="text-[10px] text-gold/50 uppercase tracking-wider mb-2">The interception move</p>
              <p className="text-ivory/75 text-sm leading-relaxed">{industry.value_leakage.interception_move}</p>
            </div>
          </div>
        </section>

        {/* Value Chain Map — Gap 1 */}
        <section className="border-b border-white/8 px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <p
              style={{ letterSpacing: "0.18em" }}
              className="text-[9px] font-semibold uppercase text-gold/40 mb-6"
            >
              The value chain — who controls each step
            </p>
            <div className="space-y-3">
              {industry.chain.map((step, i) => {
                const isAfrica = step.africa_share !== "Zero" && step.africa_share !== "Near zero" && !step.africa_share.startsWith("~2") && !step.africa_share.startsWith("~3");
                const isGrowing = step.africa_share.includes("growing") || step.africa_share.includes("Growing") || step.africa_share.startsWith("~");
                return (
                  <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-[10px] text-ivory/40 font-semibold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-ivory font-semibold text-sm">{step.step}</p>
                          <p className="text-ivory/35 text-xs">{step.location}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className={`text-xs font-bold ${isAfrica && !isGrowing ? "text-gold" : isGrowing ? "text-amber-400" : "text-red-400"}`}>
                          Africa: {step.africa_share}
                        </p>
                        <p className="text-[10px] text-ivory/30 mt-0.5">{step.margin}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-1">Who controls it</p>
                        <p className="text-ivory/60 text-xs">{step.who_controls}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-1">Why foreigners win</p>
                        <p className="text-ivory/55 text-xs leading-relaxed">{step.why_foreigners_win}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Entry Points — Gap 1 */}
        <section className="border-b border-white/8 px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <p
              style={{ letterSpacing: "0.18em" }}
              className="text-[9px] font-semibold uppercase text-gold/40 mb-2"
            >
              Where you can enter
            </p>
            <p className="text-ivory/50 text-sm mb-6">Entry points at every capital level — from $500 to $500K+</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {industry.entry_points.map((ep, i) => (
                <div key={i} className="bg-white/3 border border-white/8 hover:border-gold/20 rounded-2xl p-5 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-gold text-xs font-bold mb-0.5">{ep.capital}</p>
                      <p className="text-ivory font-semibold text-base">{ep.label}</p>
                    </div>
                  </div>
                  <p className="text-ivory/60 text-xs mb-3 leading-relaxed">{ep.what_you_do}</p>
                  <div className="bg-white/3 rounded-xl p-3 mb-3">
                    <p className="text-[10px] text-gold/50 uppercase tracking-wider mb-1">Real example</p>
                    <p className="text-ivory/55 text-xs leading-relaxed">{ep.example}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-1">How to start</p>
                    <p className="text-ivory/55 text-xs leading-relaxed">{ep.how_to_start}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Paths — Gap 4 */}
        {industry.paths.length > 0 && (
          <section className="border-b border-white/8 px-5 sm:px-8 py-10">
            <div className="max-w-4xl mx-auto">
              <p
                style={{ letterSpacing: "0.18em" }}
                className="text-[9px] font-semibold uppercase text-gold/40 mb-6"
              >
                Business paths — step by step
              </p>
              <div className="space-y-6">
                {industry.paths.map((path, i) => (
                  <div key={i} className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
                    {/* Path header */}
                    <div className="border-b border-white/8 p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-ivory font-bold text-lg">{path.name}</h3>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span className="text-gold text-xs font-bold">{path.capital}</span>
                          <span className="text-ivory/40 text-[10px]">{path.timeline}</span>
                        </div>
                      </div>
                      <p className="text-ivory/55 text-sm">{path.tagline}</p>
                    </div>

                    {/* Milestones */}
                    <div className="p-6">
                      <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-4">Milestones</p>
                      <div className="space-y-3">
                        {path.milestones.map((m, j) => (
                          <div key={j} className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-24">
                              <span className="text-[10px] text-gold/60 font-semibold">{m.month}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-ivory/75 text-xs leading-relaxed">{m.action}</p>
                              <p className="text-gold/60 text-[10px] mt-0.5">→ {m.result}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* First sale + ceiling */}
                    <div className="border-t border-white/8 grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/8">
                      <div className="p-5">
                        <p className="text-[10px] text-gold/50 uppercase tracking-wider mb-2">Your first sale</p>
                        <p className="text-ivory/65 text-xs leading-relaxed">{path.first_sale}</p>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-2">Revenue ceiling</p>
                        <p className="text-ivory/65 text-xs leading-relaxed">{path.revenue_ceiling}</p>
                      </div>
                    </div>

                    {/* Suppliers */}
                    <div className="border-t border-white/8 p-5">
                      <p className="text-[10px] text-ivory/30 uppercase tracking-wider mb-2">Key suppliers & resources</p>
                      <div className="flex flex-wrap gap-2">
                        {path.suppliers.map(s => (
                          <span key={s} className="text-[10px] text-ivory/50 bg-white/4 border border-white/8 rounded-full px-2.5 py-1">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* The Insight */}
        <section className="border-b border-white/8 px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/3 border border-white/8 rounded-2xl p-7">
              <p
                style={{ letterSpacing: "0.18em" }}
                className="text-[9px] font-semibold uppercase text-gold/40 mb-4"
              >
                The Insight
              </p>
              <p className="text-ivory/75 text-base leading-relaxed">{industry.the_insight}</p>
            </div>
          </div>
        </section>

        {/* Build business CTA */}
        <section className="border-b border-white/8 px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold/8 border border-gold/20 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <p className="text-gold font-bold text-base mb-1">
                  Ready to build in {industry.name}?
                </p>
                <p className="text-ivory/55 text-sm">
                  Use the AI Business Builder for a custom plan — your capital, your country, your skills.
                </p>
              </div>
              <Link
                href={`/build-business?industry=${industry.slug}`}
                className="bg-gold hover:bg-gold-light text-deep-green text-xs font-bold uppercase tracking-[0.1em] px-6 py-3 rounded-full transition-colors whitespace-nowrap flex-shrink-0"
              >
                Build My Plan
              </Link>
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section className="px-5 sm:px-8 py-10">
          <div className="max-w-4xl mx-auto">
            <p
              style={{ letterSpacing: "0.18em" }}
              className="text-[9px] font-semibold uppercase text-gold/40 mb-5"
            >
              Other industries
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map(ind => (
                <Link
                  key={ind.slug}
                  href={`/industry/${ind.slug}`}
                  className="group bg-white/3 border border-white/8 hover:border-gold/20 rounded-2xl p-5 transition-all"
                >
                  <div className="text-2xl mb-2">{ind.icon}</div>
                  <p className="text-ivory font-semibold text-sm mb-1">{ind.name}</p>
                  <p className="text-ivory/40 text-xs line-clamp-2">{ind.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
