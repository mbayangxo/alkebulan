import { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { ALL_COUNTRY_PROGRAMS, type ProgramEntry, type CountryOpportunityProfile } from "@/lib/data/all-country-programs";
import { slugify } from "@/lib/utils/slugify";

type CategoryDef = {
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  icon: string;
  filter: (p: ProgramEntry) => boolean;
  isProcurement?: boolean;
};

const CATEGORIES: Record<string, CategoryDef> = {
  women: {
    title: "Grants for African Women Entrepreneurs",
    subtitle: "Every fund, grant, and loan specifically built for women across all 54 countries.",
    description: "Find every grant, loan, and fund for women entrepreneurs across Africa. DER/FJ Senegal, AFAWA AfDB, We-Fi, Tony Elumelu Foundation, and 50+ more programs — explained simply.",
    keywords: ["grants african women", "women entrepreneurship africa", "women business loans africa", "African women funding"],
    icon: "💫",
    filter: (p: ProgramEntry) =>
      /women|femme|fem|woman/i.test(p.for_who) ||
      /women|femme|gender/i.test(p.what) ||
      /women|femme/i.test(p.name),
  },
  youth: {
    title: "Youth Funds Across Africa",
    subtitle: "Every youth entrepreneurship fund, grant, and loan program for young Africans aged 18–40.",
    description: "Youth funds across all 54 African countries. NYIF Nigeria, YouStart Ghana, DER/FJ Senegal, Rwanda BDF, and 100+ more programs for young African entrepreneurs aged 18–40.",
    keywords: ["youth funds africa", "african youth grants", "young entrepreneurs africa funding", "youth entrepreneurship africa"],
    icon: "⚡",
    filter: (p: ProgramEntry) =>
      /youth|young|jeune|18.?35|18.?40|under.?35|under.?40/i.test(p.for_who) ||
      /youth|jeune/i.test(p.name),
  },
  procurement: {
    title: "Government Contracts Across Africa",
    subtitle: "Government procurement portals and tender databases across all 54 African countries.",
    description: "Find government tenders and contracts across Africa. Construction, catering, uniforms, IT, transport, agriculture — every African government procurement portal in one place.",
    keywords: ["government contracts africa", "african tenders", "procurement africa", "government procurement africa"],
    icon: "📋",
    filter: () => false,
    isProcurement: true,
  },
  startup: {
    title: "Startup & Innovation Funds in Africa",
    subtitle: "Accelerators, innovation grants, and startup funds across the continent.",
    description: "Startup funds and innovation grants across Africa. Tunisia Startup Act, Lagos State Employment Trust, Rwanda Development Board, CcHUB Nigeria, and more. Find your launchpad.",
    keywords: ["startup grants africa", "africa startup funds", "innovation funds africa", "african accelerators funding"],
    icon: "🚀",
    filter: (p: ProgramEntry) =>
      /startup|innovation|tech|digital|entrepreneur/i.test(p.name) ||
      /startup|innovation/i.test(p.what),
  },
  diaspora: {
    title: "Diaspora Investment Programs in Africa",
    subtitle: "Programs open to Africans living abroad who want to invest or build back home.",
    description: "Funding programs open to African diaspora entrepreneurs. Invest from the US, UK, Europe, and beyond into African businesses. Remittance-to-equity programs, diaspora bonds, and investment vehicles.",
    keywords: ["african diaspora investment", "diaspora grants africa", "invest in africa from abroad", "diaspora africa funding"],
    icon: "🌍",
    filter: (p: ProgramEntry) =>
      /diaspora/i.test(p.for_who) ||
      /diaspora/i.test(p.what) ||
      /diaspora/i.test(p.name),
  },
  agriculture: {
    title: "Agriculture Grants & Loans in Africa",
    subtitle: "Every farming grant, agribusiness loan, and food processing fund across the continent.",
    description: "Agriculture grants and loans across Africa. CBN Anchor Borrowers Nigeria, AGROBank Ghana, Rwanda agriculture loans, and 100+ programs for farmers, agribusiness, and food processors.",
    keywords: ["agriculture grants africa", "farming loans africa", "agribusiness africa funding", "food processing grants africa"],
    icon: "🌾",
    filter: (p: ProgramEntry) =>
      /agri|farm|food|livestock|fishery|fish|crop/i.test(p.name) ||
      /agri|farm|food|livestock/i.test(p.what) ||
      /agri|farm/i.test(p.for_who),
  },
};

interface MatchedProgram {
  program: ProgramEntry;
  country: string;
  flag: string;
  region: string;
}

function collectMatches(category: string): MatchedProgram[] {
  const cat = CATEGORIES[category];
  if (cat.isProcurement) return [];

  const results: MatchedProgram[] = [];
  for (const profile of ALL_COUNTRY_PROGRAMS) {
    const allPrograms = [
      ...profile.youth_women_funds,
      ...profile.development_bank_programs,
      ...profile.donor_grants,
      ...profile.startup_innovation,
    ];
    for (const p of allPrograms) {
      if (cat.filter(p)) {
        results.push({ program: p, country: profile.country, flag: profile.flag, region: profile.region });
      }
    }
  }
  return results;
}

function collectProcurement(): { profile: CountryOpportunityProfile }[] {
  return ALL_COUNTRY_PROGRAMS.filter(p => p.procurement_portal).map(p => ({ profile: p }));
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) return { title: "Grants | Alkebulan" };

  return {
    title: `${cat.title} | Alkebulan`,
    description: cat.description,
    keywords: cat.keywords,
    openGraph: {
      title: `${cat.title} | Alkebulan`,
      description: cat.description,
      type: "website",
    },
  };
}

export default async function GrantCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = CATEGORIES[category];

  if (!cat) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-ink mb-4">Category not found</h1>
          <Link href="/programs" className="text-deep-green font-semibold hover:underline">
            Browse all programs →
          </Link>
        </div>
      </div>
    );
  }

  const matches = cat.isProcurement ? [] : collectMatches(category);
  const procurementProfiles = cat.isProcurement ? collectProcurement() : [];

  const byRegion = matches.reduce<Record<string, MatchedProgram[]>>((acc, m) => {
    if (!acc[m.region]) acc[m.region] = [];
    acc[m.region].push(m);
    return acc;
  }, {});

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
          <span className="text-ink font-semibold">{cat.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="text-4xl block mb-4">{cat.icon}</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ivory mb-4 leading-tight">
            {cat.title}
          </h1>
          <p className="text-ivory/75 text-lg max-w-2xl leading-relaxed">{cat.subtitle}</p>
          {matches.length > 0 && (
            <div className="flex gap-6 mt-8">
              <div>
                <p className="text-2xl font-bold text-gold">{matches.length}</p>
                <p className="text-xs text-ivory/60">Programs found</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gold">{new Set(matches.map(m => m.country)).size}</p>
                <p className="text-xs text-ivory/60">Countries</p>
              </div>
            </div>
          )}
          {cat.isProcurement && (
            <div className="flex gap-6 mt-8">
              <div>
                <p className="text-2xl font-bold text-gold">{procurementProfiles.length}</p>
                <p className="text-xs text-ivory/60">Countries with portals</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* Procurement view */}
        {cat.isProcurement && (
          <div className="space-y-4">
            <p className="text-xs font-bold text-muted uppercase tracking-widest mb-6">
              {procurementProfiles.length} countries with active procurement portals
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {procurementProfiles.map(({ profile }) => (
                <div key={profile.country} className="bg-white border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{profile.flag}</span>
                    <div>
                      <Link
                        href={`/opportunities/${slugify(profile.country)}`}
                        className="font-bold text-ink hover:text-gold transition-colors"
                      >
                        {profile.country}
                      </Link>
                      <p className="text-xs text-muted">{profile.region}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-3">{profile.procurement_note}</p>
                  <a
                    href={`https://${profile.procurement_portal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-deep-green hover:underline"
                  >
                    {profile.procurement_portal} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Program matches by region */}
        {!cat.isProcurement && Object.entries(byRegion).map(([region, items]) => (
          <div key={region} className="mb-10">
            <h2 className="font-bold text-ink text-base mb-4 flex items-center gap-2">
              <span className="text-gold">—</span> {region}
              <span className="text-xs text-muted font-normal">({items.length} programs)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map(({ program, country, flag }) => (
                <div key={`${country}-${program.name}`} className="bg-white border border-border rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="text-[10px] text-muted font-medium mb-0.5">
                        <Link href={`/opportunities/${slugify(country)}`} className="hover:text-gold">
                          {flag} {country}
                        </Link>
                      </p>
                      <h3 className="text-sm font-bold text-ink leading-snug">{program.name}</h3>
                    </div>
                    {program.amount && (
                      <span className="text-xs font-bold text-gold bg-gold/10 px-2 py-0.5 rounded-lg flex-shrink-0">
                        {program.amount}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-2">{program.what}</p>
                  <p className="text-xs font-semibold text-deep-green">{program.for_who}</p>
                  {program.indigenous_note && (
                    <div className="mt-2 bg-gold/10 border border-gold/30 rounded-lg px-3 py-1.5">
                      <p className="text-[10px] text-gold-dark">{program.indigenous_note}</p>
                    </div>
                  )}
                  {program.apply_at && (
                    <p className="text-[10px] text-muted border-t border-border pt-2 mt-2">
                      Apply: <span className="font-semibold text-ink">{program.apply_at}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Other categories */}
        <div className="mt-12 bg-white border border-border rounded-2xl p-6">
          <p className="text-xs font-bold text-muted uppercase tracking-wide mb-4">Browse other categories</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(CATEGORIES).filter(([key]) => key !== category).map(([key, c]) => (
              <Link
                key={key}
                href={`/grants/${key}`}
                className="flex items-center gap-2 text-sm text-ink hover:text-gold transition-colors py-1"
              >
                <span>{c.icon}</span>
                <span className="font-medium">{c.title.split(" ").slice(0, 3).join(" ")}...</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
