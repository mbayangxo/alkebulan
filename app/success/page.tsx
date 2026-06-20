import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { SUCCESS_STORIES } from "@/lib/data/success-stories";

const SECTOR_COLORS: Record<string, string> = {
  "Fashion & beauty": "bg-warm-brown/10 text-warm-brown",
  "Food & catering": "bg-red-earth/10 text-red-earth",
  "Cold chain logistics": "bg-royal-blue/10 text-royal-blue",
  "Agri-tech": "bg-deep-green/10 text-deep-green",
  "Shea butter export": "bg-gold/10 text-gold-dark",
  "Construction & fit-out": "bg-deep-green/10 text-deep-green",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-4">
            SUCCESS MAPS
          </div>
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            Real paths. Real wealth.
          </h1>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            These are real pathways taken by African entrepreneurs — from idea to funded, from
            informal to government supplier, from diaspora sending money to diaspora owning equity.
            Learn from what worked.
          </p>
        </div>

        {/* Featured story */}
        {SUCCESS_STORIES.slice(0, 1).map((story) => (
          <div key={story.id} className="bg-deep-green text-ivory rounded-2xl p-8 mb-10">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold text-deep-green font-bold text-lg flex items-center justify-center">
                {story.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-ivory/10 text-ivory/80">
                    {story.sector}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-ivory/10 text-ivory/80">
                    {story.location}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold/20 text-gold">
                    {story.timeline_months} months
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-ivory mb-2">{story.headline}</h2>
                <p className="text-ivory/80 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.story}
                </p>
                <blockquote className="border-l-2 border-gold pl-4 italic text-ivory/70 text-sm mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  {story.programs_used.map((p) => (
                    <span key={p} className="text-xs font-medium px-2.5 py-1 rounded-full bg-ivory/10 text-ivory/70">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* All stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SUCCESS_STORIES.slice(1).map((story) => {
            const initials = story.name.split(" ").map((n) => n[0]).join("");
            return (
              <div key={story.id} className="bg-white border border-border rounded-2xl p-6 card-hover">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-deep-green text-ivory font-bold text-sm flex items-center justify-center">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{story.name}, {story.age}</p>
                    <p className="text-xs text-muted">{story.location}</p>
                  </div>
                  <span className={`ml-auto text-xs font-semibold px-2.5 py-0.5 rounded-full ${SECTOR_COLORS[story.sector] || "bg-gray-100 text-gray-600"}`}>
                    {story.sector}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display text-base font-bold text-ink mb-2 leading-snug">
                  {story.headline}
                </h3>

                {/* Story excerpt */}
                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                  {story.story}
                </p>

                {/* Quote */}
                <blockquote className="border-l-2 border-gold pl-3 italic text-xs text-muted mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {/* Path */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-ink mb-2">Path taken</p>
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
                      <p className="text-xs font-semibold text-gold-dark">{story.capital_raised}</p>
                    )}
                    <p className="text-xs text-muted">{story.timeline_months} months</p>
                  </div>
                  <Link href="/path"
                    className="text-xs font-semibold text-deep-green hover:text-gold transition-colors">
                    Build a similar path →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-white border border-border rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-ink mb-2">What&apos;s your path?</h2>
          <p className="text-muted text-sm mb-6 max-w-md mx-auto">
            Every success story started with a goal and a first step. Tell us yours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/path"
              className="bg-deep-green text-ivory font-bold px-6 py-3 rounded-xl hover:bg-mid-green transition-colors">
              Build my roadmap →
            </Link>
            <Link href="/build"
              className="border border-deep-green text-deep-green font-bold px-6 py-3 rounded-xl hover:bg-deep-green hover:text-ivory transition-colors">
              What should I build?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
