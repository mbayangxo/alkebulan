import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { COUNTRY_PROFILES, getCountryProfile } from "@/lib/data/country-profiles";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";
import { COUNTRY_INTELLIGENCE } from "@/lib/data/country-intelligence";
import { getCountryDeepProfile, type LocalResource, type ForeignExtraction, type LocalProblem, type Infrastructure, type LocalBuilder } from "@/lib/data/country-deep-profiles";

export function generateStaticParams() {
  return COUNTRY_PROFILES.map((p) => ({ country: p.country_code.toLowerCase() }));
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const profile = getCountryProfile(country.toUpperCase());
  if (!profile) notFound();

  const intel = COUNTRY_INTELLIGENCE[profile.country_code.toUpperCase()];
  const deep = getCountryDeepProfile(profile.country_code.toUpperCase());
  const countryOpps = SAMPLE_OPPORTUNITIES.filter(
    (o) =>
      o.country === profile.country ||
      o.country === "Pan-Africa" ||
      o.country === "All Africa"
  );

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link href="/map" className="hover:text-deep-green transition-colors">
            Country Explorer
          </Link>
          <span>/</span>
          <span className="text-ink">{profile.country}</span>
        </div>

        {/* Hero */}
        <div className="bg-deep-green text-ivory rounded-2xl p-8 mb-6">
          <h1 className="font-display text-4xl font-bold mb-2">{profile.country}</h1>
          {deep ? (
            <p className="text-gold/90 text-sm font-medium mb-4 italic">{deep.tagline}</p>
          ) : (
            <p className="text-ivory/60 text-sm mb-4">
              {profile.capital && `Capital: ${profile.capital}`}
              {profile.population && ` · Population: ${(profile.population / 1000000).toFixed(0)}M`}
              {profile.gdp && ` · GDP: ${profile.gdp}`}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((lang) => (
              <span key={lang} className="text-xs font-medium px-2.5 py-1 rounded-full bg-ivory/10 text-ivory/80">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* ── DEEP PROFILE SECTIONS ─────────────────────────────────────── */}
        {deep && (
          <>
            {/* Opening narrative */}
            <div className="bg-gold/10 border border-gold/30/60 rounded-2xl p-6 mb-6">
              <p className="text-sm text-ink leading-relaxed">{deep.opening}</p>
            </div>

            {/* Quick facts */}
            {deep.quick_facts.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {deep.quick_facts.map((fact) => (
                  <div key={fact.label} className="bg-white border border-border rounded-xl p-3">
                    <p className="text-xs text-muted mb-1">{fact.label}</p>
                    <p className="text-xs font-semibold text-ink leading-snug">{fact.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Resources — What this country has */}
            {deep.resources.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-xl font-bold text-ink mb-1">What {profile.country} has</h2>
                <p className="text-xs text-muted mb-4">Specific resources, named places, real numbers — and who's capturing the value today.</p>
                <div className="space-y-4">
                  {deep.resources.map((res: LocalResource) => (
                    <div key={res.name} className="bg-white border border-border rounded-2xl overflow-hidden">
                      <div className="p-5 border-b border-border">
                        <h3 className="font-display text-base font-bold text-ink mb-2">{res.name}</h3>
                        <p className="text-sm text-muted leading-relaxed mb-3">{res.what_it_is}</p>
                        <p className="text-sm text-muted leading-relaxed mb-3">{res.current_state}</p>
                        {/* The gap — amber alert */}
                        <div className="bg-gold/10 border border-gold/30 rounded-xl p-3">
                          <p className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-1">The gap</p>
                          <p className="text-xs text-ink leading-relaxed">{res.the_gap}</p>
                        </div>
                      </div>
                      {/* Businesses to build */}
                      <div className="p-5 bg-deep-green/3">
                        <p className="text-xs font-semibold text-deep-green uppercase tracking-wide mb-3">Businesses to build here</p>
                        <div className="space-y-3">
                          {res.businesses.map((biz) => (
                            <div key={biz.name} className="flex gap-3">
                              <span className="text-gold mt-0.5 flex-shrink-0">→</span>
                              <div>
                                <p className="text-sm font-semibold text-ink">{biz.name}</p>
                                <p className="text-xs text-deep-green font-medium mb-0.5">{biz.cost}</p>
                                <p className="text-xs text-muted leading-snug">{biz.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        {res.africans_doing_it && (
                          <div className="mt-4 bg-deep-green/5 rounded-lg p-3">
                            <p className="text-xs font-semibold text-deep-green mb-1">Africans doing it</p>
                            <p className="text-xs text-deep-green/80 leading-relaxed">{res.africans_doing_it}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Foreign extraction — Who profits */}
            {deep.foreign_extraction.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-xl font-bold text-ink mb-1">Who profits from {profile.country}</h2>
                <p className="text-xs text-muted mb-4">Foreign companies extracting value — and what you can do instead.</p>
                <div className="space-y-3">
                  {deep.foreign_extraction.map((ext: ForeignExtraction) => (
                    <div key={ext.sector} className="bg-white border border-red-earth/20 rounded-2xl overflow-hidden">
                      <div className="bg-red-earth/10 px-5 py-3 border-b border-red-earth/20">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-red-earth uppercase tracking-wide">{ext.sector}</span>
                          <span className="text-xs font-bold text-red-900">{ext.company}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm text-muted mb-2">{ext.what_they_do}</p>
                        <p className="text-xs text-red-earth font-medium mb-3">{ext.what_africa_gets}</p>
                        <div className="flex items-start gap-2 bg-deep-green/5 rounded-lg p-3">
                          <span className="text-deep-green font-bold text-sm flex-shrink-0">→</span>
                          <p className="text-xs text-deep-green leading-relaxed">{ext.what_you_can_do}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problems = Opportunities */}
            {deep.problems.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-xl font-bold text-ink mb-1">Problems are opportunities</h2>
                <p className="text-xs text-muted mb-4">Every gap in the market is a business waiting to be built.</p>
                <div className="space-y-4">
                  {deep.problems.map((prob: LocalProblem) => (
                    <div key={prob.problem} className="bg-white border border-border rounded-2xl p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-sm text-ink mb-1">{prob.problem}</h3>
                          <p className="text-xs text-muted mb-1">{prob.scale}</p>
                          <p className="text-xs text-deep-green font-medium">{prob.opportunity}</p>
                        </div>
                      </div>
                      <div className="space-y-1.5 ml-5">
                        {prob.businesses.map((biz) => (
                          <div key={biz.name} className="flex items-start gap-2">
                            <span className="text-gold text-xs mt-0.5 flex-shrink-0">→</span>
                            <div>
                              <span className="text-xs font-semibold text-ink">{biz.name}</span>
                              <span className="text-xs text-muted ml-2">{biz.cost}</span>
                            </div>
                          </div>
                        ))}
                        {prob.example && (
                          <p className="text-xs text-deep-green/70 italic mt-2">{prob.example}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Infrastructure */}
            {deep.infrastructure.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-xl font-bold text-ink mb-1">Infrastructure you can use</h2>
                <p className="text-xs text-muted mb-4">Assets already built — networks, hubs, platforms. How to access them.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deep.infrastructure.map((infra: Infrastructure) => (
                    <div key={infra.name} className="bg-white border border-border rounded-2xl p-5">
                      <h3 className="font-semibold text-sm text-ink mb-2">{infra.name}</h3>
                      <p className="text-xs text-muted leading-relaxed mb-2">{infra.what_it_is}</p>
                      <p className="text-xs text-deep-green font-medium mb-2">{infra.opportunity}</p>
                      <div className="bg-gold/5 border border-gold/20 rounded-lg p-2">
                        <p className="text-xs text-warm-brown leading-snug">{infra.who_can_use_it}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Builders */}
            {deep.builders.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-xl font-bold text-ink mb-1">Builders who started here</h2>
                <p className="text-xs text-muted mb-4">Real people, what they built, and what they started with.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deep.builders.map((builder: LocalBuilder) => (
                    <div key={builder.name} className="bg-white border border-border rounded-2xl p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-deep-green/10 text-deep-green text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {builder.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-ink">{builder.name}</p>
                          <p className="text-xs text-gold-dark font-medium mb-1">{builder.sector}</p>
                          <p className="text-xs text-muted leading-relaxed mb-2">{builder.what}</p>
                          {builder.started_with && (
                            <div className="bg-gold/10 border border-gold/20 rounded-lg px-2.5 py-1.5">
                              <p className="text-xs text-gold-dark font-medium">Started with: {builder.started_with}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vision */}
            <div className="bg-deep-green text-ivory rounded-2xl p-6 mb-6">
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">The vision</p>
              <p className="text-sm text-ivory/90 leading-relaxed">{deep.vision}</p>
            </div>

            {/* Register a business CTA — links to concrete path guide */}
            <div className="bg-white border border-border rounded-2xl p-5 mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-ink mb-1">Ready to register a business?</p>
                <p className="text-xs text-muted leading-snug">
                  Concrete steps, actual CFA costs, real phone numbers. Branched by business type — GIE, SARL, Auto-entrepreneur.
                </p>
              </div>
              <a
                href={`/register/${profile.country.toLowerCase()}`}
                className="flex-shrink-0 bg-deep-green text-ivory text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-mid-green transition-colors whitespace-nowrap"
              >
                Register a business →
              </a>
            </div>
          </>
        )}

        {/* ── EXISTING SECTIONS ─────────────────────────────────────────── */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Industries */}
          <div className="bg-white border border-border rounded-2xl p-5">
            <h2 className="font-display text-base font-bold text-ink mb-3">Key industries</h2>
            <ul className="space-y-1.5">
              {profile.industries.map((ind) => (
                <li key={ind} className="text-sm text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {ind}
                </li>
              ))}
            </ul>
          </div>

          {/* SME agencies */}
          {profile.sme_agencies && (
            <div className="bg-white border border-border rounded-2xl p-5">
              <h2 className="font-display text-base font-bold text-ink mb-3">SME agencies</h2>
              <ul className="space-y-1.5">
                {profile.sme_agencies.map((agency) => (
                  <li key={agency} className="text-sm text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-deep-green flex-shrink-0" />
                    {agency}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ethnic groups */}
          {profile.ethnic_groups && (
            <div className="bg-white border border-border rounded-2xl p-5">
              <h2 className="font-display text-base font-bold text-ink mb-3">Ethnic groups</h2>
              <div className="flex flex-wrap gap-1.5">
                {profile.ethnic_groups.map((g) => (
                  <span key={g} className="text-xs px-2 py-0.5 rounded-full bg-warm-ivory border border-border text-ink">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Historical notes */}
        {profile.historical_notes && (
          <div className="bg-white border border-border rounded-2xl p-6 mb-6">
            <h2 className="font-display text-lg font-bold text-ink mb-3">Historical context</h2>
            <p className="text-sm text-muted leading-relaxed">{profile.historical_notes}</p>
            {profile.historical_empires && profile.historical_empires.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.historical_empires.map((e) => (
                  <span key={e} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gold/10 text-gold-dark">
                    {e}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Cultural notes */}
        {profile.cultural_notes && (
          <div className="bg-white border border-border rounded-2xl p-6 mb-6">
            <h2 className="font-display text-lg font-bold text-ink mb-3">Culture & business</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">{profile.cultural_notes}</p>
            {profile.business_etiquette && profile.business_etiquette.length > 0 && (
              <ul className="space-y-2">
                {profile.business_etiquette.map((tip) => (
                  <li key={tip} className="text-sm text-ink flex items-start gap-2">
                    <span className="text-gold mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {profile.youth_programs && profile.youth_programs.length > 0 && (
            <div className="bg-white border border-border rounded-2xl p-5">
              <h2 className="font-display text-base font-bold text-ink mb-3">Youth programs</h2>
              <ul className="space-y-2">
                {profile.youth_programs.map((p) => (
                  <li key={p} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-deep-green mt-0.5">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {profile.women_programs && profile.women_programs.length > 0 && (
            <div className="bg-white border border-border rounded-2xl p-5">
              <h2 className="font-display text-base font-bold text-ink mb-3">Women&apos;s programs</h2>
              <ul className="space-y-2">
                {profile.women_programs.map((p) => (
                  <li key={p} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-earth mt-0.5">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Procurement links */}
        {profile.procurement_links && profile.procurement_links.length > 0 && (
          <div className="bg-white border border-border rounded-2xl p-6 mb-8">
            <h2 className="font-display text-lg font-bold text-ink mb-4">Procurement portals</h2>
            <div className="space-y-3">
              {profile.procurement_links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-gold transition-colors group"
                >
                  <span className="text-sm font-medium text-ink group-hover:text-deep-green">{link.name}</span>
                  <span className="text-xs text-muted group-hover:text-gold">→</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Diaspora notes */}
        {profile.diaspora_notes && (
          <div className="bg-deep-green/5 border border-deep-green/20 rounded-2xl p-6 mb-8">
            <h2 className="font-display text-lg font-bold text-deep-green mb-3">Diaspora opportunities</h2>
            <p className="text-sm text-deep-green/80 leading-relaxed">{profile.diaspora_notes}</p>
          </div>
        )}

        {/* Startup notes */}
        {profile.startup_notes && (
          <div className="bg-gold/5 border border-gold/20 rounded-2xl p-6 mb-8">
            <h2 className="font-display text-lg font-bold text-gold-dark mb-3">Startup ecosystem</h2>
            <p className="text-sm text-warm-brown leading-relaxed">{profile.startup_notes}</p>
          </div>
        )}

        {/* Business Intelligence */}
        {intel && (
          <div className="space-y-6 mb-8">
            {/* Ease of doing business */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h2 className="font-display text-lg font-bold text-ink">Business climate</h2>
                <div className="text-right">
                  <span className="font-display text-2xl font-bold text-deep-green">{intel.easeOfBusiness.score}</span>
                  <p className="text-xs text-muted">{intel.easeOfBusiness.rank}</p>
                </div>
              </div>
              <div className="h-2 bg-border rounded-full mb-3">
                <div className="h-full bg-deep-green rounded-full" style={{ width: `${intel.easeOfBusiness.score}%` }} />
              </div>
              <p className="text-sm text-muted">{intel.easeOfBusiness.note}</p>
            </div>

            {/* Best sectors */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-display text-base font-bold text-ink mb-4">Highest-opportunity sectors</h2>
              <div className="space-y-3">
                {intel.bestSectors.map((s, i) => (
                  <div key={s.name} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 text-gold-dark text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-ink">{s.name}</p>
                      <p className="text-xs text-muted leading-snug">{s.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration guide */}
            <div className="bg-white border border-border rounded-2xl p-6">
              <h2 className="font-display text-base font-bold text-ink mb-4">How to register a business</h2>
              <div className="space-y-4">
                {intel.registrationSteps.map((step) => (
                  <div key={step.step} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-deep-green text-ivory text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-ink">{step.action}</p>
                      <p className="text-xs text-muted mt-0.5">
                        {step.timeline} · {step.cost}
                      </p>
                      <p className="text-xs text-deep-green mt-0.5">{step.where}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tax rates */}
              <div className="bg-white border border-border rounded-2xl p-5">
                <h2 className="font-display text-base font-bold text-ink mb-3">Key tax rates</h2>
                <div className="space-y-2">
                  {intel.taxRates.map((t) => (
                    <div key={t.label} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                      <span className="text-xs text-muted">{t.label}</span>
                      <span className="text-xs font-bold text-ink">{t.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile money */}
              <div className="bg-white border border-border rounded-2xl p-5">
                <h2 className="font-display text-base font-bold text-ink mb-3">Mobile money platforms</h2>
                <div className="space-y-2">
                  {intel.mobileMoney.map((m) => (
                    <div key={m} className="flex items-center gap-2">
                      <span className="text-green-500 text-sm">●</span>
                      <span className="text-sm text-muted">{m}</span>
                    </div>
                  ))}
                </div>

                <h2 className="font-display text-base font-bold text-ink mt-5 mb-3">Best banks for SMEs</h2>
                <div className="space-y-2">
                  {intel.keyBanks.filter(b => b.sme_friendly).map((b) => (
                    <div key={b.name}>
                      <p className="text-xs font-semibold text-ink">{b.name}</p>
                      <p className="text-xs text-muted">{b.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Opportunities */}
        {countryOpps.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-bold text-ink mb-4">
              Funding opportunities for {profile.country}
            </h2>
            <div className="space-y-4">
              {countryOpps.map((opp) => (
                <Link
                  key={opp.id}
                  href={`/opportunity/${opp.id}`}
                  className="block bg-white border border-border rounded-xl p-4 hover:border-gold transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-deep-green mb-1">{opp.type}</p>
                      <h3 className="font-semibold text-ink text-sm group-hover:text-deep-green transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-xs text-muted mt-1 line-clamp-1">{opp.summary}</p>
                    </div>
                    {opp.amount && (
                      <span className="text-sm font-bold text-gold-dark whitespace-nowrap">
                        {new Intl.NumberFormat("en-US", { style: "currency", currency: opp.currency, maximumFractionDigits: 0 }).format(opp.amount)}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
