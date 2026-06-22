import Link from "next/link";
import { Nav } from "./components/nav";
import { PantherSilhouette, PantherEyes, AlkebulanCrest } from "./components/panther-motif";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";
import { OpportunityCard } from "./components/opportunity-card";
import { SUCCESS_STORIES } from "@/lib/data/success-stories";
import { FEED_ITEMS, getHotItems } from "@/lib/data/feed-items";
import { WEALTH_PATHS } from "@/lib/wealth-paths";
import { NETWORK_PROFILES } from "@/lib/data/network-profiles";
import { PROCUREMENT_EXAMPLES } from "@/lib/data/procurement-examples";
import { COUNTRY_LOCALE } from "@/lib/locale";

const FEATURED = SAMPLE_OPPORTUNITIES.slice(0, 3);
const FEATURED_STORIES = SUCCESS_STORIES.slice(0, 3);
const HOT_FEED = getHotItems().slice(0, 3);
const FEATURED_NETWORK = NETWORK_PROFILES.slice(0, 4);
const NEWSROOM_FEED = FEED_ITEMS.slice(0, 4);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />

      {/* ─── HERO ─── */}
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
                African Opportunity Operating System
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-ivory mb-6">
              Africa is not a place
              <br />
              to ask for money.{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #C9A035 0%, #E8C865 60%, #9B7A22 100%)" }}
              >
                It&apos;s a place to build wealth.
              </span>
            </h1>

            <p className="text-xl text-ivory/75 leading-relaxed mb-10 max-w-2xl">
              You are good enough. Africa has what you need. Alkebulan opens your eyes to
              the opportunities already in front of you — the markets to enter, the problems
              to solve, the businesses to build. Then shows you exactly how.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/path"
                className="inline-flex items-center gap-2 bg-gold text-deep-green font-bold px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-colors"
              >
                Build my roadmap
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/build"
                className="inline-flex items-center gap-2 border border-ivory/30 text-ivory font-semibold px-8 py-4 rounded-full text-lg hover:bg-ivory/10 transition-colors"
              >
                What should I build?
              </Link>
            </div>

            <p className="mt-8 text-ivory/50 text-sm">
              54 countries · Free to explore · No credit card
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-warm-ivory border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "54", label: "African countries covered" },
              { value: "500+", label: "Verified opportunities" },
              { value: "$1T+", label: "In government contracts/year" },
              { value: "11", label: "AI engines working for you" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-bold text-gold mb-1">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPPORTUNITY PATH ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">The core feature</p>
            <h2 className="font-display text-4xl font-bold text-ink mb-5">
              Not a directory.
              <br />
              A roadmap.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Most platforms say: &ldquo;Here is a grant.&rdquo;
              <br /><br />
              Alkebulan says: <strong className="text-ink">Your goal is to launch a beauty brand in Senegal.
              Here is your 7-step path — what to do first, what to do next, and exactly
              which program to use at each stage.</strong>
            </p>
            <p className="text-muted leading-relaxed mb-8">
              The sequence matters. You cannot apply for funding before you register.
              You cannot bid on tenders without a tax clearance. The Opportunity Path
              Engine knows the order. You follow the steps.
            </p>
            <Link
              href="/path"
              className="inline-flex items-center gap-2 bg-deep-green text-ivory font-bold px-6 py-3.5 rounded-xl hover:bg-mid-green transition-colors"
            >
              Build my path →
            </Link>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-gold mb-4">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              EXAMPLE PATH — Beauty brand, Senegal
            </div>
            <div className="space-y-3">
              {[
                { n: 1, action: "Register business at RCCM Dakar", time: "2 weeks", cost: "$40", done: true },
                { n: 2, action: "Open business bank account (BNDE or BHS)", time: "1 week", cost: "Free", done: true },
                { n: 3, action: "Apply to DER/FJ Women's Fund — up to 1.5M CFA", time: "4 weeks", cost: "Free", done: false },
                { n: 4, action: "Attend ADPME SME training program", time: "3 weeks", cost: "Free", done: false },
                { n: 5, action: "Apply to Tony Elumelu Foundation — $5,000 grant", time: "3 months", cost: "Free", done: false },
                { n: 6, action: "Register on ARMP tender portal", time: "1 week", cost: "$20", done: false },
                { n: 7, action: "Bid on government cosmetics supply tender", time: "Ongoing", cost: "Bid bond 5%", done: false },
              ].map(({ n, action, time, cost, done }) => (
                <div key={n} className={`flex items-start gap-3 p-3 rounded-xl ${done ? "bg-deep-green/5" : "bg-warm-ivory"}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    done ? "bg-deep-green text-ivory" : "bg-white border border-border text-muted"
                  }`}>
                    {done ? "✓" : n}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${done ? "text-deep-green line-through opacity-60" : "text-ink"}`}>
                      {action}
                    </p>
                    <p className="text-xs text-muted mt-0.5">{time} · {cost}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/path" className="block mt-4 text-center text-sm font-semibold text-deep-green hover:text-gold transition-colors">
              Build your own path →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU CAN FIND ─── */}
      <section className="bg-warm-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Wealth creation, not just funding</p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">
              Every path to African wealth in one place
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Funding is one piece. We cover all of it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: "🏛️", label: "Grants", desc: "Non-dilutive capital" },
              { icon: "🏦", label: "Loans", desc: "Concessional & commercial" },
              { icon: "📋", label: "Tenders", desc: "$1T in govt contracts" },
              { icon: "🚀", label: "Accelerators", desc: "Equity & mentorship" },
              { icon: "🌍", label: "Export routes", desc: "AfCFTA + global markets" },
              { icon: "🤝", label: "Partners", desc: "Co-founders & suppliers" },
              { icon: "💸", label: "Remittances", desc: "Turned into equity" },
              { icon: "📜", label: "Land programs", desc: "Title & ownership" },
              { icon: "🏗️", label: "Supplier networks", desc: "Join supply chains" },
              { icon: "🌐", label: "Diaspora capital", desc: "Invest back home" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="bg-white border border-border rounded-2xl p-4 text-center hover:border-gold/40 transition-colors">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-semibold text-ink text-sm">{label}</p>
                <p className="text-xs text-muted mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WEALTH PATHS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">7 proven paths</p>
          <h2 className="font-display text-4xl font-bold text-ink mb-4">
            Which path is yours?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Every one of these has been walked before. Real programs. Real timelines.
            Click your path and we&apos;ll build the exact roadmap for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {WEALTH_PATHS.slice(0, 4).map((path) => (
            <Link
              key={path.id}
              href={`/path?goal=${encodeURIComponent(path.prefilledGoal)}`}
              className="group bg-white border border-border rounded-2xl p-5 hover:border-gold transition-all hover:shadow-md"
            >
              <div className="text-3xl mb-3">{path.emoji}</div>
              <h3 className="font-display text-lg font-bold text-ink mb-1 group-hover:text-deep-green transition-colors">
                {path.persona}
              </h3>
              <p className="text-xs text-muted mb-3 leading-relaxed">{path.tagline}</p>
              <div className="flex gap-3 mb-4">
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wide">Start with</p>
                  <p className="text-xs font-bold text-ink">{path.startingCapital}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted uppercase tracking-wide">Timeline</p>
                  <p className="text-xs font-bold text-ink">{path.timelineMonths} months</p>
                </div>
              </div>
              <div className="space-y-1.5">
                {path.milestones.slice(0, 3).map((m, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-border text-[9px] font-bold text-muted flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-[10px] text-muted">{m.label}</p>
                  </div>
                ))}
                <p className="text-[10px] text-gold font-semibold pl-6">+{path.milestones.length - 3} more steps →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {WEALTH_PATHS.slice(4).map((path) => (
            <Link
              key={path.id}
              href={`/path?goal=${encodeURIComponent(path.prefilledGoal)}`}
              className="group bg-white border border-border rounded-2xl p-5 hover:border-gold transition-all hover:shadow-md flex gap-4 items-start"
            >
              <span className="text-3xl flex-shrink-0">{path.emoji}</span>
              <div>
                <h3 className="font-semibold text-ink text-sm group-hover:text-deep-green transition-colors">{path.persona}</h3>
                <p className="text-[10px] text-muted mb-1">{path.tagline}</p>
                <p className="text-[10px] text-gold font-semibold">Start from {path.startingCapital} →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/path" className="inline-flex items-center gap-2 border border-deep-green text-deep-green font-semibold px-6 py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors">
            Build my custom roadmap →
          </Link>
        </div>
      </section>

      {/* ─── PROCUREMENT HIGHLIGHT ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-deep-green text-ivory rounded-2xl p-8">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">Procurement Intelligence</p>
            <div className="space-y-4">
              {PROCUREMENT_EXAMPLES.map(({ flag, country, contract, value }) => (
                <div key={country} className="flex items-center justify-between p-3 rounded-xl bg-ivory/10 hover:bg-ivory/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{flag}</span>
                    <div>
                      <p className="text-xs text-ivory/60">{country}</p>
                      <p className="text-sm font-medium text-ivory">{contract}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gold">{value}</span>
                </div>
              ))}
            </div>
            <Link href="/procurement" className="block mt-6 text-center text-sm font-semibold text-gold hover:text-gold-light transition-colors">
              View procurement intelligence →
            </Link>
          </div>

          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">The bigger opportunity</p>
            <h2 className="font-display text-4xl font-bold text-ink mb-5">
              Contracts beat grants.
              <br />
              Every time.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              African governments spend over <strong className="text-ink">$1 trillion per year</strong> buying
              goods and services. A single catering contract pays more than most grants.
              A government IT tender repeats every year. Procurement is the largest
              untapped market for African SMEs.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              3% of eligible SMEs currently bid on government tenders — not because
              they can&apos;t win, but because no one showed them how to register,
              what to bid on, or how to write a winning proposal.
            </p>
            <Link href="/procurement"
              className="inline-flex items-center gap-2 bg-deep-green text-ivory font-bold px-6 py-3.5 rounded-xl hover:bg-mid-green transition-colors">
              Explore procurement opportunities →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SUCCESS MAPS ─── */}
      <section className="bg-warm-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Success Maps</p>
              <h2 className="font-display text-4xl font-bold text-ink">Real paths. Real wealth.</h2>
            </div>
            <Link href="/success" className="text-sm font-semibold text-deep-green hover:text-gold transition-colors">
              See all stories →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {FEATURED_STORIES.map((story) => {
              const initials = story.name.split(" ").map((n) => n[0]).join("");
              return (
                <div key={story.id} className="bg-white border border-border rounded-2xl p-6 card-hover">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-deep-green text-ivory font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{story.name}, {story.age}</p>
                      <p className="text-xs text-muted">{story.location}</p>
                    </div>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink mb-2 leading-snug">
                    {story.headline}
                  </h3>
                  <p className="text-sm text-muted line-clamp-3 mb-4">{story.story}</p>
                  <blockquote className="border-l-2 border-gold pl-3 italic text-xs text-muted mb-4">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  {story.capital_raised && (
                    <p className="text-xs font-semibold text-gold-dark">{story.capital_raised}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED OPPORTUNITIES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Live opportunities</p>
            <h2 className="font-display text-4xl font-bold text-ink">Open right now</h2>
          </div>
          <Link href="/dashboard" className="text-sm font-semibold text-deep-green hover:text-gold transition-colors">
            See all 500+ →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {FEATURED.map((opp) => (
            <OpportunityCard key={opp.id} opportunity={opp} />
          ))}
        </div>
      </section>

      {/* ─── NETWORK ─── */}
      <section className="bg-deep-green text-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">The Network</p>
              <h2 className="font-display text-4xl font-bold text-ivory mb-5">
                Africa&apos;s strongest companies
                <br />
                will be built together.
              </h2>
              <p className="text-ivory/70 leading-relaxed mb-8">
                Find co-founders who speak your language. Export partners who know your
                market. Diaspora investors looking for equity. Mentors who have already
                won the tender you&apos;re targeting.
              </p>
              <div className="flex gap-3">
                <Link href="/network"
                  className="bg-gold text-deep-green font-bold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors">
                  Browse the network
                </Link>
                <Link href="/network/join"
                  className="border border-ivory/30 text-ivory font-semibold px-6 py-3 rounded-xl hover:bg-ivory/10 transition-colors">
                  Join →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {FEATURED_NETWORK.map(({ initials, name, location, looking_for, sector }) => (
                <div key={name} className="bg-ivory/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gold text-deep-green font-bold text-xs flex items-center justify-center">
                      {initials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ivory">{name}</p>
                      <p className="text-[10px] text-ivory/50">{location.split(",")[0]}</p>
                    </div>
                  </div>
                  <p className="text-xs text-ivory/70">{sector}</p>
                  <p className="text-xs font-semibold text-gold mt-1">Seeking: {looking_for[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPPORTUNITY FEED ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Signal feed</p>
            <h2 className="font-display text-4xl font-bold text-ink">What&apos;s moving this week</h2>
          </div>
          <Link href="/feed" className="text-sm font-semibold text-deep-green hover:text-gold transition-colors">
            Full feed →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {HOT_FEED.map((item) => (
            <div key={item.id} className="bg-white border border-border rounded-xl p-5 card-hover">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-deep-green/10 text-deep-green">
                  {item.category}
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-warm-ivory border border-border text-warm-brown">
                  {item.country}
                </span>
              </div>
              <h3 className="font-display text-sm font-bold text-ink mb-2 leading-snug">{item.headline}</h3>
              <p className="text-xs text-muted line-clamp-2 mb-3">{item.summary}</p>
              {item.amount && <p className="text-xs font-semibold text-gold-dark">{item.amount}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ─── NEWSROOM TEASER ─── */}
      <section className="bg-deep-green text-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-4">
                OPPORTUNITY NEWSROOM — powered by Amara
              </div>
              <h2 className="font-display text-4xl font-bold text-ivory mb-4">
                New openings.
                <br />Every single day.
              </h2>
              <p className="text-ivory/75 text-lg leading-relaxed mb-6">
                Amara scans all 54 African countries daily — new contracts, fund launches,
                policy changes, export openings. Real intelligence. Never miss the thing
                that was already meant for you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/newsroom"
                  className="inline-flex items-center gap-2 bg-gold text-deep-green font-bold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors">
                  Run today&apos;s edition →
                </Link>
                <Link href="/email"
                  className="border border-ivory/30 text-ivory font-semibold px-6 py-3 rounded-xl hover:bg-ivory/10 transition-colors">
                  Get personalized digest
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {NEWSROOM_FEED.map((item) => {
                const flag = item.country === "Pan-Africa" ? "🌍" : (COUNTRY_LOCALE[item.country]?.flag ?? "🌍");
                const d = new Date(item.date);
                const diff = Math.floor((Date.now() - d.getTime()) / 86400000);
                const time = diff === 0 ? "Today" : diff === 1 ? "Yesterday" : diff < 7 ? `${diff} days ago` : diff < 14 ? "1 week ago" : `${Math.floor(diff / 7)} weeks ago`;
                return (
                  <div key={item.id} className="bg-ivory/10 rounded-xl px-4 py-3 flex items-start gap-3 hover:bg-ivory/15 transition-colors">
                    <span className="text-xl flex-shrink-0">{flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-ivory leading-snug">{item.headline}</p>
                      <div className="flex gap-3 mt-1">
                        <span className="text-[10px] text-gold font-semibold">{item.category}</span>
                        <span className="text-[10px] text-ivory/40">{time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Link href="/newsroom" className="block text-center text-xs font-semibold text-gold hover:text-gold-light transition-colors pt-1">
                Run live search for today&apos;s news →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRANTS BY CATEGORY ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">The opportunity landscape</p>
          <h2 className="font-display text-4xl font-bold text-ink mb-4">Where opportunity lives in Africa</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">500+ verified programs across 54 countries. Grants and loans are one piece — explore everything.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { icon: "💫", label: "For Women", href: "/grants/women", desc: "Women-specific grants & loans" },
            { icon: "⚡", label: "Youth Funds", href: "/grants/youth", desc: "Ages 18–40 programs" },
            { icon: "📋", label: "Procurement", href: "/grants/procurement", desc: "Government contracts" },
            { icon: "🚀", label: "Startups", href: "/grants/startup", desc: "Accelerators & innovation" },
            { icon: "🌍", label: "Diaspora", href: "/grants/diaspora", desc: "Invest from abroad" },
            { icon: "🌾", label: "Agriculture", href: "/grants/agriculture", desc: "Farm & food grants" },
          ].map(({ icon, label, href, desc }) => (
            <Link key={href} href={href}
              className="bg-white border border-border rounded-2xl p-4 text-center hover:border-gold/40 hover:shadow-sm transition-all group">
              <div className="text-2xl mb-2">{icon}</div>
              <p className="font-semibold text-ink text-sm group-hover:text-deep-green transition-colors">{label}</p>
              <p className="text-xs text-muted mt-1 leading-snug">{desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/programs"
            className="inline-flex items-center gap-2 border border-deep-green text-deep-green font-semibold px-6 py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors">
            Browse all 500+ programs →
          </Link>
        </div>
      </section>

      {/* ─── AI ENGINES ─── */}
      <section className="bg-warm-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">11 AI engines</p>
            <h2 className="font-display text-4xl font-bold text-ink mb-4">Every tool you need to build wealth in Africa</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: "🗺️", title: "Opportunity Path", desc: "Your goal → your roadmap", href: "/path" },
              { icon: "🏗️", title: "What Should I Build?", desc: "Match business to opportunity", href: "/build" },
              { icon: "📋", title: "Procurement Intel", desc: "Find & win government contracts", href: "/procurement" },
              { icon: "💰", title: "Capital Stack", desc: "Multi-layer funding design", href: "/capital-stack" },
              { icon: "🌍", title: "AfCFTA Navigator", desc: "Trade across 54 countries", href: "/afcfta" },
              { icon: "🏦", title: "Bankability Engine", desc: "Mobile money → bank credit", href: "/bankability" },
              { icon: "📊", title: "Budget Intelligence", desc: "Govt budgets → opportunities", href: "/budget-intel" },
              { icon: "⚖️", title: "Regulatory Map", desc: "Optimal legal structure", href: "/regulatory" },
              { icon: "🌐", title: "Remittance → Ownership", desc: "Diaspora equity pipeline", href: "/remittance" },
              { icon: "🤝", title: "First-Order Collective", desc: "Consortium bidding", href: "/collective" },
              { icon: "🏛️", title: "Succession Planner", desc: "Generational wealth transfer", href: "/succession" },
            ].map((f) => (
              <Link key={f.href} href={f.href}
                className="bg-white border border-border rounded-xl p-5 hover:border-gold/40 hover:shadow-sm transition-all group">
                <div className="text-xl mb-2">{f.icon}</div>
                <h3 className="font-display text-sm font-bold text-ink mb-1 group-hover:text-deep-green transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-muted">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="bg-warm-ivory py-20 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AlkebulanCrest size={64} className="mx-auto mb-8" />
          <blockquote className="font-display text-2xl sm:text-3xl font-medium text-ink leading-relaxed mb-6 italic">
            &ldquo;This platform is not about charity. It is not about development aid.
            It is about ownership, wealth, business, culture, and the opportunity
            that has always been here — waiting to be claimed.&rdquo;
          </blockquote>
          <p className="text-muted text-sm">
            Alkebulan — the ancient African name for Africa, meaning &ldquo;Mother of Mankind.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-deep-green text-ivory py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-5xl font-bold mb-6">
            Your path starts{" "}
            <span className="text-gold">here.</span>
          </h2>
          <p className="text-xl text-ivory/75 mb-10">
            Tell us your goal. Get your roadmap. Start building.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/path"
              className="inline-flex items-center gap-2 bg-gold text-deep-green font-bold px-8 py-4 rounded-full text-lg hover:bg-gold-light transition-colors">
              Build my roadmap
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/signup"
              className="border border-ivory/30 text-ivory font-semibold px-8 py-4 rounded-full text-lg hover:bg-ivory/10 transition-colors">
              Create free account
            </Link>
          </div>
          <p className="mt-4 text-ivory/40 text-sm">No credit card. Free forever to explore.</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-ink text-ivory/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlkebulanCrest size={28} />
                <span className="font-display text-ivory font-semibold">Alkebulan</span>
              </div>
              <p className="text-xs leading-relaxed">Africa is the opportunity.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-ivory/40 uppercase tracking-wide mb-3">Platform</p>
              <div className="space-y-2">
                {[
                  { label: "Your Path", href: "/path" },
                  { label: "Opportunities", href: "/dashboard" },
                  { label: "Procurement", href: "/procurement" },
                  { label: "Network", href: "/network" },
                  { label: "Feed", href: "/feed" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="block text-xs hover:text-gold transition-colors">{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-ivory/40 uppercase tracking-wide mb-3">AI Engines</p>
              <div className="space-y-2">
                {[
                  { label: "What Should I Build?", href: "/build" },
                  { label: "Capital Stack", href: "/capital-stack" },
                  { label: "AfCFTA Navigator", href: "/afcfta" },
                  { label: "Bankability Engine", href: "/bankability" },
                  { label: "AI Coach", href: "/assistant" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="block text-xs hover:text-gold transition-colors">{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-ivory/40 uppercase tracking-wide mb-3">Discover</p>
              <div className="space-y-2">
                {[
                  { label: "Opportunity Newsroom", href: "/newsroom" },
                  { label: "Personalized Email Digest", href: "/email" },
                  { label: "Grants for Women", href: "/grants/women" },
                  { label: "Youth Funds", href: "/grants/youth" },
                  { label: "Procurement / Tenders", href: "/grants/procurement" },
                  { label: "Country Explorer", href: "/map" },
                  { label: "Success Maps", href: "/success" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="block text-xs hover:text-gold transition-colors">{label}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-ivory/10 pt-6 text-center">
            <p className="text-xs text-ivory/30">© 2026 Alkebulan. Africa is the opportunity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
