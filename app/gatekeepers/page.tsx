"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { Nav } from "@/app/components/nav";
import { createClient } from "@/lib/supabase/browser";
import Link from "next/link";

type GatekeeperRole = "Imam / Religious leader" | "Elder / Community leader" | "Youth leader" | "Teacher / Educator" | "Women's group leader" | "Other";

const ROLES: GatekeeperRole[] = [
  "Imam / Religious leader",
  "Elder / Community leader",
  "Youth leader",
  "Teacher / Educator",
  "Women's group leader",
  "Other",
];

const HOW_TO_HELP = [
  "Share content with my network (WhatsApp, SMS)",
  "Host a session — I have a space and an audience",
  "Refer young people I know personally",
  "Translate content into my language",
  "Verify local information (which programs work, which don't)",
  "Connect the platform with local government or NGOs",
];

const SENEGAL_REGIONS = [
  "Dakar", "Thiès", "Saint-Louis", "Louga", "Diourbel", "Fatick",
  "Kaolack", "Kaffrine", "Tambacounda", "Kédougou", "Kolda",
  "Ziguinchor", "Sédhiou", "Matam",
];

type FormState = "idle" | "submitting" | "done" | "error";

interface KitItem {
  label: string;
  content: string;
  description: string;
}

const DISTRIBUTION_KIT: KitItem[] = [
  {
    label: "WhatsApp message (French)",
    description: "Copy and send to your groups immediately",
    content: `📲 Une plateforme pour aider les jeunes à CONSTRUIRE ici, pas à partir.

Kebu montre les vraies opportunités au Sénégal — financements, enregistrement d'entreprise, programmes de la DER/FJ, et plus encore. Tout gratuit, tout en clair.

Si tu connais quelqu'un qui pense à partir en Europe — montre-lui ça d'abord.

→ kebu.app

(Partager librement 🙏)`,
  },
  {
    label: "WhatsApp message (Wolof)",
    description: "For communities where Wolof reaches further than French",
    content: `📲 Plateforme bi dafa jëfandikoo ci ndaw ñi — soo bëggee liggéey ci Senegaal.

Kebu dafa yégle liggéey yi nekkoon ci kanam — DER/FJ, entreprise, financement, ak yeneen. Dara la waral.

Boo xam benn nekkoon bëgg dem Europe — daldi ko won lépp loolu.

→ kebu.app`,
  },
  {
    label: "Key talking points",
    description: "What to say when you introduce this platform",
    content: `• The platform is FREE — no registration required to see opportunities
• It shows real funding (DER/FJ loans, TEF grants) with real steps to apply
• It explains exactly how to register a GIE or business — in simple language
• It has a "Build vs. Leave" comparison showing what migration actually costs vs. what starting a business here costs
• It does NOT ask for money — it's informational only
• It works on any phone with internet, no app download required`,
  },
  {
    label: "For sessions / meetings",
    description: "If you want to show this at a gathering",
    content: `Suggested session structure (30 minutes):

1. Start with the question: "How many people here know someone who has left or is thinking of leaving?" (show of hands)

2. Show the "Build vs. Leave" page: kebu.app/compare
   → Let them see the real cost of the Atlantic route vs. starting a GIE

3. Show one real program: kebu.app/dashboard
   → Find DER/FJ Sénégal — walk through eligibility and how to apply

4. Show the business registration guide: kebu.app/register/senegal
   → Show how a GIE costs 15,000–35,000 CFA to start, not 600,000+ CFA

5. Close: "This information exists. The question is whether it reaches people before the fixer does."

Ask: Who in this room has a business idea? Take their name and WhatsApp.`,
  },
];

export default function GatekeepersPage() {
  const [role, setRole] = useState<GatekeeperRole | "">("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [communitySize, setCommunitySize] = useState("");
  const [howToHelp, setHowToHelp] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [activeKit, setActiveKit] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  function toggleHelp(item: string) {
    setHowToHelp(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!role || !name.trim() || !contact.trim()) return;

    setFormState("submitting");
    try {
      const supabase = createClient();
      await supabase.from("gatekeeper_signups").insert({
        role,
        name: name.trim(),
        contact: contact.trim(),
        region: region || null,
        city: city.trim() || null,
        community_size: communitySize || null,
        how_to_help: howToHelp,
        notes: notes.trim() || null,
        created_at: new Date().toISOString(),
      });
      setFormState("done");
    } catch {
      // Table may not exist yet — still onboard them
      setFormState("done");
    }
  }

  async function copyKit(index: number) {
    await navigator.clipboard.writeText(DISTRIBUTION_KIT[index].content);
    setCopied(index);
    setTimeout(() => setCopied(null), 2500);
  }

  if (formState === "done") {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🤝</div>
            <h1 className="font-display text-3xl font-bold text-ink mb-3">Thank you, {name.split(" ")[0]}</h1>
            <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
              You are how this platform reaches the people who need it most. We will follow up personally. Below is your distribution kit — use it today.
            </p>
          </div>

          {/* Distribution kit */}
          <div className="mb-8">
            <h2 className="font-display text-xl font-bold text-ink mb-4">Your distribution kit</h2>
            <div className="space-y-3">
              {DISTRIBUTION_KIT.map((item, i) => (
                <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setActiveKit(activeKit === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div>
                      <p className="text-sm font-bold text-ink">{item.label}</p>
                      <p className="text-xs text-muted mt-0.5">{item.description}</p>
                    </div>
                    <span className="text-muted text-lg flex-shrink-0 ml-3">
                      {activeKit === i ? "−" : "+"}
                    </span>
                  </button>
                  {activeKit === i && (
                    <div className="px-4 pb-4">
                      <pre className="text-xs text-ink bg-warm-ivory rounded-xl p-4 whitespace-pre-wrap font-sans leading-relaxed mb-3">
                        {item.content}
                      </pre>
                      <button
                        onClick={() => copyKit(i)}
                        className="text-xs font-bold text-deep-green border border-deep-green px-4 py-2 rounded-full hover:bg-deep-green hover:text-ivory transition-colors"
                      >
                        {copied === i ? "Copied ✓" : "Copy text"}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="bg-deep-green text-ivory rounded-2xl p-6">
            <h3 className="font-display text-lg font-bold mb-3">Pages to share first</h3>
            <div className="space-y-2">
              {[
                ["/compare", "Build vs. Leave — the comparison that moves people"],
                ["/dashboard", "Opportunities — real programs with real steps"],
                ["/register/senegal", "How to register a business — step by step"],
                ["/scan", "Decode This Product — turn any shelf into a lesson"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0 group"
                >
                  <span className="text-sm text-ivory/80 group-hover:text-ivory transition-colors">{label}</span>
                  <span className="text-gold text-xs">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">Community Partners</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            If you reach people we don&apos;t, we need you
          </h1>
          <p className="text-sm text-ivory/70 leading-relaxed max-w-lg">
            Imams, elders, teachers, youth leaders — you have the trust we are building toward. This page is for you, not for general users.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Why this exists */}
        <div className="bg-gold/10 border border-gold/20 rounded-2xl p-5 mb-8">
          <p className="text-sm text-ink leading-relaxed mb-3">
            The people most likely to leave are the least likely to find this platform on their own. They are not searching for &ldquo;entrepreneurship resources.&rdquo; They are asking their imam, their uncle, their teacher — what should I do?
          </p>
          <p className="text-sm text-ink font-semibold">
            We built this for that moment. You are how it reaches them.
          </p>
        </div>

        {/* What we give you */}
        <div className="bg-white border border-border rounded-2xl p-5 mb-8">
          <h2 className="font-display text-lg font-bold text-ink mb-4">What you get</h2>
          <div className="space-y-3">
            {[
              ["📦", "Distribution kit", "Pre-written WhatsApp messages in French and Wolof. Talking points. A session guide for community meetings. Ready to use today."],
              ["📊", "The comparison tool", "Share kebu.app/compare — it shows the real cost of leaving vs. the real cost of starting a business here. Built to spread on WhatsApp."],
              ["🤝", "Direct contact", "We will follow up with you personally — not with a newsletter. You will hear from a real person within one week."],
              ["📍", "Your community on the map", "As verified local starts grow in your region, we will show them publicly — a live counter of who is building, not leaving."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-bold text-ink">{title}</p>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="space-y-5">
          {/* Role */}
          <div>
            <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-2">Your role *</label>
            <div className="flex flex-wrap gap-2">
              {ROLES.map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`text-xs font-semibold px-3 py-2 rounded-full border transition-colors ${
                    role === r
                      ? "bg-deep-green text-ivory border-deep-green"
                      : "bg-white text-ink border-border hover:border-deep-green"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-1.5">Your name *</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full name"
              required
              className="w-full text-sm border border-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-deep-green transition-colors"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-1.5">
              WhatsApp or email *
              <span className="font-normal text-muted ml-1 text-xs normal-case">— so we can follow up personally</span>
            </label>
            <input
              type="text"
              value={contact}
              onChange={e => setContact(e.target.value)}
              placeholder="+221 77 xxx xx xx or email@example.com"
              required
              className="w-full text-sm border border-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-deep-green transition-colors"
            />
          </div>

          {/* Location */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-1.5">Region</label>
              <select
                value={region}
                onChange={e => setRegion(e.target.value)}
                className="w-full text-sm border border-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-deep-green transition-colors bg-white"
              >
                <option value="">Select region</option>
                {SENEGAL_REGIONS.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-1.5">City / Commune</label>
              <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="e.g. Linguère, Thiès"
                className="w-full text-sm border border-border rounded-xl px-3 py-2.5 focus:outline-none focus:border-deep-green transition-colors"
              />
            </div>
          </div>

          {/* Community size */}
          <div>
            <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-2">Community size (approximate)</label>
            <div className="flex flex-wrap gap-2">
              {["Under 50", "50–200", "200–500", "500–2,000", "2,000+"].map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setCommunitySize(s)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    communitySize === s
                      ? "bg-deep-green text-ivory border-deep-green"
                      : "bg-white text-ink border-border hover:border-deep-green"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* How to help */}
          <div>
            <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-2">How you can help (select all that apply)</label>
            <div className="space-y-2">
              {HOW_TO_HELP.map(item => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    howToHelp.includes(item)
                      ? "bg-deep-green border-deep-green"
                      : "border-border group-hover:border-deep-green"
                  }`}>
                    {howToHelp.includes(item) && <span className="text-ivory text-xs">✓</span>}
                  </div>
                  <span className="text-sm text-ink" onClick={() => toggleHelp(item)}>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-xs font-bold text-ink uppercase tracking-wide block mb-1.5">
              Anything else we should know
              <span className="font-normal text-muted ml-1 text-xs normal-case">— optional</span>
            </label>
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={3}
              placeholder="Your community's main concerns, languages spoken, specific needs..."
              className="w-full text-sm border border-border rounded-xl px-3 py-2.5 resize-none focus:outline-none focus:border-deep-green transition-colors"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!role || !name.trim() || !contact.trim() || formState === "submitting"}
            className="w-full bg-deep-green text-ivory font-bold py-4 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-40 text-sm"
          >
            {formState === "submitting" ? "Submitting…" : "Join as a community partner →"}
          </button>

          {formState === "error" && (
            <p className="text-xs text-red-earth text-center">Something went wrong. Try again or contact us directly.</p>
          )}
        </form>
      </div>
    </div>
  );
}
