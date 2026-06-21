import { Nav } from "@/app/components/nav";
import { getRegistrationGuide, type BusinessPath, type RegistrationStep } from "@/lib/data/registration-guides";
import Link from "next/link";
import { notFound } from "next/navigation";

const WEALTH_PATH_FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Farmer / Producer", value: "Farmer" },
  { label: "Manufacturer", value: "Manufacturer" },
  { label: "Tech Founder", value: "Tech Founder" },
  { label: "Exporter", value: "Exporter" },
  { label: "Creator / Freelancer", value: "Creator" },
  { label: "Fashion Brand", value: "Fashion Brand" },
  { label: "Beauty Founder", value: "Beauty Founder" },
];

function StepCard({ step }: { step: RegistrationStep }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-deep-green text-ivory text-sm font-bold flex items-center justify-center">
        {step.step}
      </div>
      <div className="flex-1 pb-6 border-b border-border last:border-0 last:pb-0">
        <p className="font-semibold text-sm text-ink mb-1">{step.action}</p>
        <p className="text-xs text-muted leading-relaxed mb-2">{step.where}</p>
        <div className="flex flex-wrap gap-3 mb-2">
          <span className="text-xs font-medium text-deep-green">{step.cost_cfa}</span>
          <span className="text-xs text-muted">({step.cost_usd})</span>
          <span className="text-xs text-muted">· {step.timeline}</span>
          {step.phone && (
            <a href={`tel:${step.phone}`} className="text-xs font-medium text-gold-dark hover:underline">
              {step.phone}
            </a>
          )}
        </div>
        {step.note && (
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
            <p className="text-xs text-amber-800 leading-relaxed">{step.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function PathCard({ path }: { path: BusinessPath }) {
  return (
    <div id={path.id} className="bg-white border border-border rounded-2xl overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-deep-green text-ivory p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="font-display text-xl font-bold">{path.name}</h2>
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-ivory/60">Total cost</p>
            <p className="text-sm font-bold text-gold">{path.total_cost_cfa}</p>
          </div>
        </div>
        <p className="text-xs text-ivory/70 mb-3 leading-relaxed">{path.who_it_is_for}</p>
        <div className="flex flex-wrap gap-1.5">
          {path.wealth_paths.map(wp => (
            <span key={wp} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-ivory/10 text-ivory/80">
              {wp}
            </span>
          ))}
        </div>
      </div>

      {/* Why this structure */}
      <div className="px-5 py-4 border-b border-border bg-amber-50/50">
        <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Why this structure</p>
        <p className="text-sm text-amber-900 leading-relaxed">{path.why}</p>
      </div>

      {/* Steps */}
      <div className="p-5">
        <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">
          Steps — {path.total_timeline} total
        </p>
        <div className="space-y-0">
          {path.steps.map(step => (
            <StepCard key={step.step} step={step} />
          ))}
        </div>
      </div>

      {/* What unlocks */}
      <div className="px-5 py-4 border-t border-border bg-deep-green/3">
        <p className="text-xs font-semibold text-deep-green uppercase tracking-wide mb-3">
          What this unlocks
        </p>
        <ul className="space-y-1.5">
          {path.after_registration.map(item => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted">
              <span className="text-gold mt-0.5 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          {path.tier_upgrade}
        </div>
      </div>
    </div>
  );
}

export default function SenegalRegistrationPage() {
  const guide = getRegistrationGuide("SN");
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-6">
          <Link href="/map/sn" className="hover:text-deep-green transition-colors">Senegal</Link>
          <span>/</span>
          <span className="text-ink">Register a Business</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-ink mb-3">
            Register a Business in Senegal
          </h1>
          <p className="text-sm text-muted leading-relaxed mb-3">{guide.intro}</p>
          <p className="text-xs text-muted">
            Last verified: <span className="font-medium text-ink">{new Date(guide.updated).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
            {" · "}
            <Link href="/map/sn" className="text-deep-green hover:underline">Country overview</Link>
          </p>
        </div>

        {/* Jump links */}
        <div className="flex flex-wrap gap-2 mb-8">
          {guide.paths.map(path => (
            <a
              key={path.id}
              href={`#${path.id}`}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-deep-green hover:text-deep-green transition-colors"
            >
              {path.name}
            </a>
          ))}
        </div>

        {/* Path cards */}
        {guide.paths.map(path => (
          <PathCard key={path.id} path={path} />
        ))}

        {/* Common mistakes */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8">
          <h2 className="font-display text-lg font-bold text-red-900 mb-4">Common mistakes to avoid</h2>
          <ul className="space-y-3">
            {guide.common_mistakes.map((mistake, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-sm flex-shrink-0 mt-0.5">✗</span>
                <p className="text-sm text-red-900 leading-relaxed">{mistake}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Help contacts */}
        <div className="bg-white border border-border rounded-2xl p-6">
          <h2 className="font-display text-lg font-bold text-ink mb-4">Who to call</h2>
          <div className="space-y-3">
            {guide.help_contacts.map(contact => (
              <div key={contact.name} className="flex items-start justify-between gap-3 py-2.5 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-ink">{contact.name}</p>
                  {contact.hours && (
                    <p className="text-xs text-muted">{contact.hours}</p>
                  )}
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm font-bold text-deep-green hover:text-gold transition-colors whitespace-nowrap"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
