import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { COUNTRY_PROFILES, getCountryProfile } from "@/lib/data/country-profiles";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";

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
        <div className="bg-deep-green text-ivory rounded-2xl p-8 mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">{profile.country}</h1>
          <p className="text-ivory/60 text-sm mb-6">
            {profile.capital && `Capital: ${profile.capital}`}
            {profile.population && ` · Population: ${(profile.population / 1000000).toFixed(0)}M`}
            {profile.gdp && ` · GDP: ${profile.gdp}`}
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((lang) => (
              <span key={lang} className="text-xs font-medium px-2.5 py-1 rounded-full bg-ivory/10 text-ivory/80">
                {lang}
              </span>
            ))}
          </div>
        </div>

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
