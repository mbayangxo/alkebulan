import Link from "next/link";
import { Nav } from "./components/nav";
import { PantherSilhouette, PantherEyes, AlkebulanCrest } from "./components/panther-motif";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";
import { OpportunityCard } from "./components/opportunity-card";

const FEATURED = SAMPLE_OPPORTUNITIES.slice(0, 3);

const STATS = [
  { value: "54", label: "African countries covered" },
  { value: "500+", label: "Verified opportunities" },
  { value: "$1B+", label: "In available funding" },
  { value: "8", label: "AI engines working for you" },
];

const FEATURES = [
  {
    icon: "💰",
    title: "Capital Stack Engine",
    desc: "Don't apply for one thing at a time. Stack grants, loans, supplier credit, and training programs to fund your entire business with zero cash of your own.",
    href: "/capital-stack",
  },
  {
    icon: "🌍",
    title: "AfCFTA Navigator",
    desc: "The largest free trade area in history, made simple. Find your tariff rate to any African market, get your certificate of origin, and unlock intra-African trade.",
    href: "/afcfta",
  },
  {
    icon: "📊",
    title: "Government Budget Intelligence",
    desc: "Every budget is a treasure map. We parse government budgets across Africa and translate line items into opportunities — before they're even announced.",
    href: "/budget-intel",
  },
  {
    icon: "🏦",
    title: "Bankability Engine",
    desc: "Turn M-Pesa transactions, WhatsApp receipts, and mobile history into a Business Financial Profile that banks understand. Raise your approval rate from 3% to 40%.",
    href: "/bankability",
  },
  {
    icon: "🌐",
    title: "Remittance-to-Ownership",
    desc: "Send $200 home and get 5% equity back. We turn diaspora remittances into documented equity stakes with digital shareholder agreements.",
    href: "/remittance",
  },
  {
    icon: "⚖️",
    title: "Regulatory Arbitrage Map",
    desc: "Know the optimal legal structure before you incorporate. Rwanda licensing that passports to EAC. Mauritius holding companies. OHADA frameworks for 17 countries.",
    href: "/regulatory",
  },
  {
    icon: "🤝",
    title: "First-Order Collective",
    desc: "Need a government contract but have no track record? We form legal consortiums of small businesses to bid and win together — giving each member a first contract.",
    href: "/collective",
  },
  {
    icon: "🏛️",
    title: "Succession & Wealth Transfer",
    desc: "Africa's family businesses collapse when founders die. Mobile-first tools to document ownership, create shareholder agreements, and protect what you've built.",
    href: "/succession",
  },
];

const COUNTRIES = [
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "SN", name: "Senegal", flag: "🇸🇳" },
  { code: "RW", name: "Rwanda", flag: "🇷🇼" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "ET", name: "Ethiopia", flag: "🇪🇹" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />

      {/* Hero */}
      <section className="relative bg-deep-green text-ivory overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #C9A035 0, #C9A035 1px, transparent 0, transparent 50%)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute right-0 bottom-0 opacity-8 hidden lg:block">
          <PantherSilhouette size={480} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <PantherEyes size={32} />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                The African Opportunity Engine
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-ivory mb-6">
              Africa is{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #C9A035 0%, #E8C865 60%, #9B7A22 100%)" }}
              >
                the opportunity.
              </span>
            </h1>

            <p className="text-xl text-ivory/75 leading-relaxed mb-10 max-w-2xl">
              Find every grant, loan, tender, accelerator, and government program built for
              Africans, diaspora, women entrepreneurs, young founders, and business owners —
              matched to your exact situation, explained in plain language.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-gold text-deep-green font-bold px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-colors"
              >
                Find what you qualify for
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/map"
                className="inline-flex items-center gap-2 border border-ivory/30 text-ivory font-semibold px-8 py-4 rounded-full text-lg hover:bg-ivory/10 transition-colors"
              >
                Explore by country
              </Link>
            </div>

            <p className="mt-8 text-ivory/50 text-sm">
              All 54 countries · Free to explore · No credit card
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-ivory border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-bold text-gold mb-1">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-ink mb-4">
            Built for you, wherever you are
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            One platform for every African building something — on the continent or in the diaspora.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🌱", label: "Young founders", desc: "18–35 building their first business" },
            { icon: "👩‍💼", label: "Women entrepreneurs", desc: "Funding designed specifically for you" },
            { icon: "✈️", label: "African diaspora", desc: "Invest home from anywhere in the world" },
            { icon: "🏭", label: "SME owners", desc: "Scale with government contracts and credit" },
            { icon: "🎨", label: "Creatives & artists", desc: "Creative economy funds and music grants" },
            { icon: "🌾", label: "Agri-preneurs", desc: "Agricultural loans and cooperatives" },
            { icon: "💻", label: "Tech builders", desc: "Accelerators, VC, and government tech funds" },
            { icon: "🏘️", label: "Family businesses", desc: "Succession planning and formalization tools" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-border rounded-2xl p-5 hover:border-gold/40 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-semibold text-ink text-sm mb-1">{item.label}</p>
              <p className="text-xs text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured opportunities */}
      <section className="bg-warm-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Live opportunities</p>
              <h2 className="font-display text-4xl font-bold text-ink">Active right now</h2>
            </div>
            <Link href="/dashboard" className="text-sm font-semibold text-deep-green hover:text-gold transition-colors">
              See all →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {FEATURED.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </section>

      {/* 8 Engines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">The infrastructure</p>
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Eight engines. One platform.</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The infrastructure of wealth creation exists in Africa. What has always been missing
            is the translation layer. This is it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="bg-white border border-border rounded-2xl p-6 hover:border-gold/40 hover:shadow-md transition-all group"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-display text-base font-bold text-ink mb-2 group-hover:text-deep-green transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Country explorer */}
      <section className="bg-deep-green text-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">54 countries</p>
            <h2 className="font-display text-4xl font-bold text-ivory mb-4">
              Explore opportunity by country
            </h2>
            <p className="text-ivory/70 max-w-xl mx-auto">
              Every procurement portal, youth fund, women&apos;s program, startup ecosystem, and
              cultural context — one page per country.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {COUNTRIES.map((c) => (
              <Link
                key={c.code}
                href={`/map/${c.code.toLowerCase()}`}
                className="flex items-center gap-2 bg-ivory/10 hover:bg-gold hover:text-deep-green text-ivory px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/map"
              className="inline-flex items-center gap-2 border border-gold text-gold font-semibold px-6 py-3 rounded-full hover:bg-gold hover:text-deep-green transition-colors"
            >
              View all 54 countries
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold text-ink mb-4">How it works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Tell us about you",
              desc: "Your country, sector, business stage, diaspora status, and what kind of funding you're looking for.",
            },
            {
              step: "02",
              title: "See your matches",
              desc: "We show every opportunity you qualify for — with clear explanations of why you qualify and what might disqualify you.",
            },
            {
              step: "03",
              title: "Build your stack",
              desc: "Our Capital Stack Engine shows you how to combine multiple sources to fund your entire project.",
            },
            {
              step: "04",
              title: "Apply with AI",
              desc: "Your AI Application Coach prepares your documents, drafts your pitch, and walks you through every step.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-lg font-bold text-gold">{item.step}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-warm-ivory py-20 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AlkebulanCrest size={64} className="mx-auto mb-8" />
          <blockquote className="font-display text-2xl sm:text-3xl font-medium text-ink leading-relaxed mb-6 italic">
            &ldquo;This platform is not about charity. It is not about development aid.
            It is about ownership, wealth-building, business, culture, and the
            opportunity that has always been here — waiting to be found.&rdquo;
          </blockquote>
          <p className="text-muted text-sm">
            Alkebulan — the ancient African name for Africa, meaning &ldquo;Mother of Mankind.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-green text-ivory py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-5xl font-bold mb-6">
            Your opportunity{" "}
            <span className="text-gold">is waiting.</span>
          </h2>
          <p className="text-xl text-ivory/75 mb-10">
            Create your free account. Tell us about yourself. Get matched to everything that was built for you.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gold text-deep-green font-bold px-10 py-5 rounded-full text-xl hover:bg-gold-light transition-colors"
          >
            Start for free
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-4 text-ivory/40 text-sm">No credit card. Free forever to browse.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-ivory/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <AlkebulanCrest size={32} />
              <span className="font-display text-ivory font-semibold">Alkebulan</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/map" className="hover:text-gold transition-colors">Country Explorer</Link>
              <Link href="/dashboard" className="hover:text-gold transition-colors">Opportunities</Link>
              <Link href="/assistant" className="hover:text-gold transition-colors">AI Assistant</Link>
              <Link href="/capital-stack" className="hover:text-gold transition-colors">Capital Stack</Link>
            </div>
            <p className="text-xs text-ivory/30">
              © 2025 Alkebulan. Africa is the opportunity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
