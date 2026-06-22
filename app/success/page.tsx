import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { SUCCESS_STORIES } from "@/lib/data/success-stories";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-4">
            REAL AFRICAN ENTREPRENEURS
          </div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            Africans who built empires.
          </h1>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Not one of these people had an easy path. They faced government refusals, empty accounts, no investors, no networks. They built anyway. This is who you come from. This is who you can be.
          </p>
        </div>

        {/* Featured story — Dangote */}
        {SUCCESS_STORIES.slice(0, 1).map((story) => (
          <div key={story.id} className="bg-deep-green text-ivory rounded-2xl p-8 mb-10">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold text-deep-green font-bold text-lg flex items-center justify-center">
                {story.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gold/20 text-gold">
                    {story.country}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-ivory/10 text-ivory/80">
                    {story.sector}
                  </span>
                  {story.capital_raised && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-ivory/10 text-ivory/80">
                      Started with: {story.capital_raised}
                    </span>
                  )}
                  {story.is_real && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-400/20 text-green-200">
                      ✓ Real story
                    </span>
                  )}
                </div>
                <h2 className="font-display text-2xl font-bold text-ivory mb-3">{story.headline}</h2>
                <p className="text-ivory/80 text-sm leading-relaxed mb-4">
                  {story.story}
                </p>
                <blockquote className="border-l-2 border-gold pl-4 italic text-gold/90 text-sm mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        ))}

        {/* Education callout */}
        <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5 mb-8">
          <p className="text-sm font-bold text-ink mb-1">These stories are not exceptions</p>
          <p className="text-sm text-gold-dark leading-relaxed">
            Dangote started with a loan. Bethlehem started with no capital. Masiyiwa was refused a licence for 5 years. They are ordinary people who refused to be stopped. The resources on your continent, your land, your culture — they are the foundation. Kebu shows you the path to build on them.
          </p>
        </div>

        {/* Grid of stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SUCCESS_STORIES.slice(1).map((story) => {
            const initials = story.name.split(" ").map((n) => n[0]).join("");
            return (
              <div key={story.id} className="bg-white border border-border rounded-2xl p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-deep-green text-ivory font-bold text-sm flex items-center justify-center">
                    {initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-ink text-sm">{story.name}</p>
                      {story.is_real && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700">Real</span>
                      )}
                    </div>
                    <p className="text-xs text-muted">{story.location}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-deep-green/10 text-deep-green flex-shrink-0">
                    {story.country}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-ink mb-2 leading-snug">
                  {story.headline}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-4">
                  {story.story}
                </p>

                <blockquote className="border-l-2 border-gold pl-3 italic text-xs text-muted mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {/* Path */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-ink mb-2 uppercase tracking-wide">How they built it</p>
                  <div className="flex flex-col gap-1">
                    {story.programs_used.map((p, i) => (
                      <div key={p} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-deep-green/10 text-deep-green text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-xs text-muted">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    {story.capital_raised && (
                      <p className="text-xs font-semibold text-gold-dark">Started: {story.capital_raised}</p>
                    )}
                    <p className="text-xs text-muted font-medium">{story.outcome.slice(0, 60)}...</p>
                  </div>
                  <Link
                    href="/path"
                    className="text-xs font-semibold text-deep-green hover:text-gold transition-colors whitespace-nowrap ml-3"
                  >
                    Build similar →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-deep-green rounded-2xl p-10">
          <h2 className="font-display text-3xl font-bold text-ivory mb-3">
            You are next.
          </h2>
          <p className="text-ivory/70 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Every person above started with less certainty than you have right now. They had the same land, the same resources, the same continent. They chose to build. Your path starts the same way.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/path" className="bg-gold text-deep-green font-bold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors">
              Build my roadmap →
            </Link>
            <Link href="/sovereignty" className="border border-ivory/30 text-ivory font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
              See what&apos;s yours to build
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
