import { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { ALL_COUNTRY_PROGRAMS, type ProgramEntry } from "@/lib/data/all-country-programs";
import { slugify, findBySlug } from "@/lib/utils/slugify";

export async function generateStaticParams() {
  return ALL_COUNTRY_PROGRAMS.map((p) => ({ country: slugify(p.country) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const profile = findBySlug(ALL_COUNTRY_PROGRAMS, slug);
  if (!profile) return { title: "Country not found | Alkebulan" };

  const total =
    profile.youth_women_funds.length +
    profile.development_bank_programs.length +
    profile.donor_grants.length +
    profile.startup_innovation.length;

  return {
    title: `Grants, Loans & Opportunities in ${profile.country} | Alkebulan`,
    description: `${total} verified funding programs for ${profile.country} entrepreneurs. Find grants, government contracts, development bank loans, and startup funds in ${profile.key_sectors.slice(0, 3).join(", ")} and more. Step-by-step application guides.`,
    keywords: [
      `grants ${profile.country}`,
      `loans ${profile.country}`,
      `government contracts ${profile.country}`,
      `youth funds ${profile.country}`,
      `funding entrepreneurs ${profile.country}`,
      ...profile.key_sectors.map((s) => `${s.toLowerCase()} ${profile.country.toLowerCase()}`),
    ],
    openGraph: {
      title: `${profile.flag} ${profile.country} — ${total} Funding Programs | Alkebulan`,
      description: `Every grant, loan, tender, and startup fund available in ${profile.country}. Explained simply. With checklists.`,
      type: "website",
    },
  };
}

function ProgramSection({
  title,
  icon,
  programs,
  country,
}: {
  title: string;
  icon: string;
  programs: ProgramEntry[];
  country: string;
}) {
  if (programs.length === 0) return null;
  return (
    <div className="mb-10">
      <h2 className="font-bold text-ink text-lg mb-4 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {programs.map((p) => (
          <div key={p.name} className="bg-white border border-border rounded-xl p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-sm font-bold text-ink leading-snug">{p.name}</h3>
              {p.amount && (
                <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-0.5 rounded-lg flex-shrink-0">
                  {p.amount}
                </span>
              )}
            </div>
            <p className="text-xs text-muted leading-relaxed mb-2">{p.what}</p>
            <p className="text-xs font-semibold text-deep-green mb-2">{p.for_who}</p>
            {p.indigenous_note && (
              <div className="bg-gold/10 border border-gold/30 rounded-lg px-3 py-2 mb-2">
                <p className="text-[10px] font-bold text-gold-dark uppercase tracking-wide mb-0.5">Indigenous note</p>
                <p className="text-xs text-gold-dark">{p.indigenous_note}</p>
              </div>
            )}
            {p.apply_at && (
              <p className="text-[10px] text-muted border-t border-border pt-2 mt-2">
                Apply: <span className="font-semibold text-ink">{p.apply_at}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function CountryOpportunityPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const profile = findBySlug(ALL_COUNTRY_PROGRAMS, slug);

  if (!profile) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-ink mb-4">Country not found</h1>
          <Link href="/programs" className="text-deep-green font-semibold hover:underline">
            Browse all 54 countries →
          </Link>
        </div>
      </div>
    );
  }

  const totalPrograms =
    profile.youth_women_funds.length +
    profile.development_bank_programs.length +
    profile.donor_grants.length +
    profile.startup_innovation.length;

  const relatedCountries = ALL_COUNTRY_PROGRAMS.filter(
    (p) => p.region === profile.region && p.country !== profile.country
  ).slice(0, 5);

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border px-4 py-2.5">
        <div className="max-w-5xl mx-auto text-xs text-muted">
          <Link href="/" className="hover:text-gold">Home</Link>
          <span className="mx-1.5">›</span>
          <Link href="/programs" className="hover:text-gold">Programs Database</Link>
          <span className="mx-1.5">›</span>
          <span className="text-ink font-semibold">{profile.country}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{profile.flag}</span>
            <div>
              <h1 className="font-display text-4xl font-bold text-ivory">{profile.country}</h1>
              <p className="text-gold text-sm font-semibold">{profile.region} · {profile.population}</p>
            </div>
          </div>
          <p className="text-ivory/80 text-lg max-w-2xl leading-relaxed mb-6">
            {profile.the_opportunity}
          </p>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold text-gold">{totalPrograms}</p>
              <p className="text-xs text-ivory/60">Funding programs</p>
            </div>
            {profile.procurement_portal && (
              <div>
                <p className="text-2xl font-bold text-gold">✓</p>
                <p className="text-xs text-ivory/60">Procurement portal</p>
              </div>
            )}
            <div>
              <p className="text-2xl font-bold text-gold">{profile.key_sectors.length}</p>
              <p className="text-xs text-ivory/60">Key sectors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key sectors */}
      <div className="bg-ink text-ivory py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 items-center">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mr-2">Key sectors:</p>
          {profile.key_sectors.map((s) => (
            <span key={s} className="text-xs bg-ivory/10 text-ivory/80 px-3 py-1 rounded-full">{s}</span>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">

            {/* Procurement portal */}
            {profile.procurement_portal && (
              <div className="bg-deep-green text-ivory rounded-2xl p-6 mb-8">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">Government procurement portal</p>
                <p className="text-ivory/85 text-sm leading-relaxed mb-4">{profile.procurement_note}</p>
                <a
                  href={`https://${profile.procurement_portal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-deep-green text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gold-light transition-colors"
                >
                  Open {profile.procurement_portal} →
                </a>
              </div>
            )}

            <ProgramSection
              title="Youth & Women Funds"
              icon="💫"
              programs={profile.youth_women_funds}
              country={profile.country}
            />
            <ProgramSection
              title="Development Bank Programs"
              icon="🏦"
              programs={profile.development_bank_programs}
              country={profile.country}
            />
            <ProgramSection
              title="Donor Grants"
              icon="🌐"
              programs={profile.donor_grants}
              country={profile.country}
            />
            <ProgramSection
              title="Startup & Innovation"
              icon="🚀"
              programs={profile.startup_innovation}
              country={profile.country}
            />

            {/* Key agencies */}
            <div className="bg-white border border-border rounded-2xl p-5">
              <h2 className="font-bold text-ink text-sm mb-3 uppercase tracking-wide">Key agencies to know</h2>
              <div className="flex flex-wrap gap-2">
                {profile.key_agencies.map((a) => (
                  <span key={a} className="text-xs font-semibold bg-warm-ivory border border-border text-ink px-3 py-1.5 rounded-lg">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Research with Amara */}
            <div className="bg-white border border-border rounded-2xl p-5">
              <p className="text-xs font-bold text-muted uppercase tracking-wide mb-2">Go deeper</p>
              <p className="text-sm font-bold text-ink mb-1">Research {profile.country} with Amara</p>
              <p className="text-xs text-muted mb-4">
                Amara searches the web for the latest programs, current deadlines, and step-by-step checklists.
              </p>
              <Link
                href={`/agents/amara?country=${encodeURIComponent(profile.country)}`}
                className="block w-full text-center bg-deep-green text-ivory text-sm font-bold py-2.5 rounded-xl hover:bg-mid-green transition-colors"
              >
                Start deep research →
              </Link>
            </div>

            {/* More in region */}
            {relatedCountries.length > 0 && (
              <div className="bg-white border border-border rounded-2xl p-5">
                <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">More in {profile.region}</p>
                <div className="space-y-2">
                  {relatedCountries.map((c) => {
                    const t = c.youth_women_funds.length + c.development_bank_programs.length + c.donor_grants.length + c.startup_innovation.length;
                    return (
                      <Link
                        key={c.country}
                        href={`/opportunities/${slugify(c.country)}`}
                        className="flex items-center justify-between py-1.5 hover:text-gold transition-colors group"
                      >
                        <span className="text-sm text-ink group-hover:text-gold">
                          {c.flag} {c.country}
                        </span>
                        <span className="text-[10px] text-muted">{t} programs</span>
                      </Link>
                    );
                  })}
                </div>
                <Link href="/programs" className="block mt-3 text-xs text-deep-green font-semibold hover:underline">
                  All 54 countries →
                </Link>
              </div>
            )}

            {/* All categories */}
            <div className="bg-white border border-border rounded-2xl p-5">
              <p className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Browse by type</p>
              <div className="space-y-1.5">
                {[
                  { href: "/grants/women", label: "Grants for women" },
                  { href: "/grants/youth", label: "Youth funds" },
                  { href: "/grants/startup", label: "Startup & innovation" },
                  { href: "/grants/procurement", label: "Government contracts" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className="block text-xs text-ink hover:text-gold transition-colors py-1">
                    → {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
