import Link from "next/link";
import { Nav } from "@/app/components/nav";

const AGENTS = [
  {
    name: "Amara",
    title: "Research Intelligence",
    emoji: "🔍",
    color: "from-deep-green to-mid-green",
    textColor: "text-deep-green",
    bgColor: "bg-deep-green/5 border-deep-green/20",
    sole_job: "Find every funding opportunity, grant, loan, and government contract across all 54 African countries. Go deep. Update how to get them. Build the checklist.",
    capabilities: ["Web search across all 54 countries", "Step-by-step application checklists", "Current deadlines and amounts", "Indigenous eligibility notes", "Latest program news"],
    href: "/agents/amara",
    cta: "Start research →",
    status: "Ready",
    statusColor: "text-emerald-600 bg-emerald-50",
    meaning: "Amara means 'eternal grace' in Igbo and Amharic",
  },
  {
    name: "Zuri",
    title: "Quality Guardian",
    emoji: "✅",
    color: "from-ink to-ink/80",
    textColor: "text-ink",
    bgColor: "bg-ink/5 border-ink/20",
    sole_job: "Daily QA checks. Make sure every page loads, every button works, every API responds. Nothing broken, nothing slow, nothing confusing. Report it all.",
    capabilities: ["Tests all 27 pages daily", "Checks all API endpoints", "Flags slow responses", "Reports failures with context", "Prioritizes fixes for the dev team"],
    href: "/agents/zuri",
    cta: "Run QA check →",
    status: "Daily",
    statusColor: "text-blue-600 bg-blue-50",
    meaning: "Zuri means 'beautiful / something done well' in Swahili",
  },
  {
    name: "Ada",
    title: "Social Storyteller",
    emoji: "📣",
    color: "from-gold to-gold-light",
    textColor: "text-gold-dark",
    bgColor: "bg-gold/5 border-gold/20",
    sole_job: "Tell Africa's story. Instagram captions, TikTok scripts, Twitter threads, LinkedIn posts. Give Africans self-belief through the lens of: problems are markets.",
    capabilities: ["9 content formats", "Opportunity alerts", "Country spotlights", "Success stories", "African business facts"],
    href: "/social",
    cta: "Create content →",
    status: "Ready",
    statusColor: "text-emerald-600 bg-emerald-50",
    meaning: "Ada means 'first daughter' and 'she who came first' in Igbo",
  },
  {
    name: "Kofi",
    title: "Capital Analyst",
    emoji: "💰",
    color: "from-amber-700 to-amber-600",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50 border-amber-200",
    sole_job: "Find the money. Analyze capital structures, identify funding sources, map the investment landscape for any African business or project.",
    capabilities: ["Funding landscape analysis", "Capital stack modeling", "Investor matching", "Deal structure advice", "Africa-specific finance"],
    href: "/capital",
    cta: "Analyze capital →",
    status: "Ready",
    statusColor: "text-emerald-600 bg-emerald-50",
    meaning: "Kofi is an Akan name meaning 'born on Friday' — a day of good fortune",
  },
  {
    name: "Imani",
    title: "AI Life Coach",
    emoji: "🤝",
    color: "from-purple-700 to-purple-600",
    textColor: "text-purple-700",
    bgColor: "bg-purple-50 border-purple-200",
    sole_job: "Be the mentor every African entrepreneur deserves. Business strategy, mindset, decision-making, and the belief that you can build something real.",
    capabilities: ["Business strategy coaching", "Founder mindset", "Decision frameworks", "Africa market expertise", "Personal accountability"],
    href: "/assistant",
    cta: "Start coaching →",
    status: "Ready",
    statusColor: "text-emerald-600 bg-emerald-50",
    meaning: "Imani means 'faith' in Swahili — one of the seven principles of Kwanzaa",
  },
  {
    name: "Akin",
    title: "Business Builder",
    emoji: "🏗️",
    color: "from-slate-700 to-slate-600",
    textColor: "text-slate-700",
    bgColor: "bg-slate-50 border-slate-200",
    sole_job: "Answer: what should you build? Analyze the gap, the market, the starting cost, the first steps. Turn 'I have no idea' into a concrete business plan.",
    capabilities: ["Business idea generation", "Market gap analysis", "Starting cost estimates", "Africa-specific opportunities", "First-step action plans"],
    href: "/build",
    cta: "Find your business →",
    status: "Ready",
    statusColor: "text-emerald-600 bg-emerald-50",
    meaning: "Akin means 'brave, heroic, bold' in Yoruba",
  },
  {
    name: "Nadia",
    title: "Brand Strategist",
    emoji: "🎨",
    color: "from-rose-600 to-rose-500",
    textColor: "text-rose-600",
    bgColor: "bg-rose-50 border-rose-200",
    sole_job: "Build your brand identity. Name, positioning, voice, visual direction. Make your business memorable, trustworthy, and built for Africa.",
    capabilities: ["Brand naming", "Positioning strategy", "Brand voice development", "Visual direction", "Africa market branding"],
    href: "/brand",
    cta: "Build your brand →",
    status: "Ready",
    statusColor: "text-emerald-600 bg-emerald-50",
    meaning: "Nadia means 'hopeful, the caller, announcer' — used widely across Africa",
  },
  {
    name: "Olu",
    title: "AfCFTA Navigator",
    emoji: "🌍",
    color: "from-teal-700 to-teal-600",
    textColor: "text-teal-700",
    bgColor: "bg-teal-50 border-teal-200",
    sole_job: "Help businesses move across Africa. AfCFTA rules of origin, tariff schedules, trade corridors, and how to legally sell your product in 54 countries.",
    capabilities: ["AfCFTA rules of origin", "Tariff elimination schedules", "Trade corridor mapping", "Cross-border compliance", "54-country trade access"],
    href: "/afcfta",
    cta: "Navigate trade →",
    status: "Ready",
    statusColor: "text-emerald-600 bg-emerald-50",
    meaning: "Olu is a Yoruba prefix meaning 'God / supreme' — also used as a standalone name meaning 'leader'",
  },
];

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-5">
            AI AGENTS — YOUR TEAM
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Meet the team.
          </h1>
          <p className="text-ivory/75 text-lg max-w-2xl leading-relaxed">
            Each agent has one job. They do it better than anyone else.
            Named after the continent that made them. Built to build Africa.
          </p>
          <div className="flex gap-6 mt-8">
            <div>
              <p className="text-2xl font-bold text-gold">{AGENTS.length}</p>
              <p className="text-xs text-ivory/60">Active agents</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">2</p>
              <p className="text-xs text-ivory/60">Autonomous agents (Amara + Zuri)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">54</p>
              <p className="text-xs text-ivory/60">Countries covered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* Highlight: Autonomous agents */}
        <div className="mb-8">
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Autonomous agents — they have a daily job</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AGENTS.filter(a => a.name === "Amara" || a.name === "Zuri").map((agent) => (
              <Link key={agent.name} href={agent.href} className="group block">
                <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                        {agent.emoji}
                      </div>
                      <div>
                        <h2 className="font-bold text-ink text-lg leading-none">{agent.name}</h2>
                        <p className={`text-xs font-semibold ${agent.textColor}`}>{agent.title}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${agent.statusColor}`}>
                      {agent.status}
                    </span>
                  </div>

                  <p className="text-xs text-muted italic mb-1">&ldquo;{agent.meaning}&rdquo;</p>

                  <div className={`rounded-xl border px-4 py-3 mb-4 ${agent.bgColor}`}>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-wide mb-1">Sole job</p>
                    <p className="text-sm font-semibold text-ink leading-snug">{agent.sole_job}</p>
                  </div>

                  <div className="space-y-1 mb-5">
                    {agent.capabilities.map(c => (
                      <p key={c} className="text-xs text-muted flex items-center gap-2">
                        <span className="text-gold">→</span> {c}
                      </p>
                    ))}
                  </div>

                  <div className={`inline-flex items-center gap-1 text-xs font-bold ${agent.textColor} group-hover:underline`}>
                    {agent.cta}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Rest of the team */}
        <div>
          <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">The full team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AGENTS.filter(a => a.name !== "Amara" && a.name !== "Zuri").map((agent) => (
              <Link key={agent.name} href={agent.href} className="group block">
                <div className="bg-white border border-border rounded-2xl p-5 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      {agent.emoji}
                    </div>
                    <div>
                      <h2 className="font-bold text-ink leading-none">{agent.name}</h2>
                      <p className={`text-xs font-semibold ${agent.textColor}`}>{agent.title}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted italic mb-3">&ldquo;{agent.meaning}&rdquo;</p>

                  <p className="text-xs text-ink leading-relaxed mb-4">{agent.sole_job}</p>

                  <div className={`inline-flex items-center gap-1 text-xs font-bold ${agent.textColor} group-hover:underline`}>
                    {agent.cta}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-10 bg-deep-green text-ivory rounded-2xl p-6">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Why agents have names</p>
          <p className="text-ivory/85 leading-relaxed text-sm">
            Every agent on this platform has an African name with meaning. Not because it&apos;s a gimmick —
            because names carry responsibility. When Amara researches a program, she brings everything that name means.
            When Zuri runs QA, she&apos;s not just checking boxes — she&apos;s making sure this platform is worthy of the people who depend on it.
          </p>
          <p className="text-ivory/85 leading-relaxed text-sm mt-3">
            These aren&apos;t just tools. They&apos;re a team. And they have one mission: make sure every African
            with ambition has access to every opportunity available to them.
          </p>
          <p className="text-gold font-semibold mt-3 text-sm">
            8 agents. 54 countries. One mission.
          </p>
        </div>
      </div>
    </div>
  );
}
