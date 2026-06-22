"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Nav } from "@/app/components/nav";
import { createClient } from "@/lib/supabase/client";
import { NetworkNeed } from "@/lib/data/network-profiles";

const NEEDS: NetworkNeed[] = [
  "Co-founder", "Investor", "Customers", "Supplier", "Mentor",
  "Partner", "Team member", "Diaspora connection", "Export partner",
];

const SECTORS = [
  "Agriculture", "Tech / Software", "Finance / Fintech", "Health",
  "Fashion & beauty", "Food & catering", "Construction", "Creative economy",
  "Education", "Energy", "Logistics", "Manufacturing", "Retail & e-commerce",
  "Tourism", "Trade & export",
];

export default function NetworkJoinPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [sector, setSector] = useState("");
  const [headline, setHeadline] = useState("");
  const [building, setBuilding] = useState("");
  const [offering, setOffering] = useState("");
  const [lookingFor, setLookingFor] = useState<NetworkNeed[]>([]);
  const [stage, setStage] = useState("");
  const [languages, setLanguages] = useState("");

  function toggleNeed(need: NetworkNeed) {
    setLookingFor((prev) => prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from("network_profiles").insert({
      user_id: user?.id ?? null,
      name,
      location,
      country,
      sector,
      headline,
      building,
      offering,
      looking_for: lookingFor,
      stage,
      languages: languages.split(",").map((l) => l.trim()).filter(Boolean),
    });

    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-ivory">
        <Nav />
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-deep-green text-ivory text-2xl flex items-center justify-center mx-auto mb-6">
            ✓
          </div>
          <h1 className="font-display text-3xl font-bold text-ink mb-3">
            You&apos;re in the network
          </h1>
          <p className="text-muted mb-8">
            Your profile has been added. Other founders, investors, and partners can now
            find you. Welcome to the First-Order Collective.
          </p>
          <button
            onClick={() => router.push("/network")}
            className="bg-deep-green text-ivory font-bold px-6 py-3 rounded-xl hover:bg-mid-green transition-colors"
          >
            View the network →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-ink mb-2">
            Join the network
          </h1>
          <p className="text-muted text-sm">
            Tell the community what you&apos;re building and what you need. Your profile will be
            visible to other African founders, diaspora investors, and partners.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white border border-border rounded-2xl p-6">
            <h2 className="font-display text-base font-bold text-ink mb-4">About you</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Full name</label>
                <input required type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">City, Country</label>
                <input required type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dakar, Senegal"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Country (for filtering)</label>
                <input required type="text" value={country} onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g. Senegal"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Languages spoken</label>
                <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)}
                  placeholder="e.g. French, Wolof, English"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6">
            <h2 className="font-display text-base font-bold text-ink mb-4">What you&apos;re building</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Sector</label>
                <select required value={sector} onChange={(e) => setSector(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold">
                  <option value="">Select sector</option>
                  {SECTORS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">One-line headline</label>
                <input required type="text" value={headline} onChange={(e) => setHeadline(e.target.value)}
                  placeholder="e.g. Building a pan-African fashion distribution platform"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">What you&apos;re building (2–4 sentences)</label>
                <textarea required value={building} onChange={(e) => setBuilding(e.target.value)}
                  placeholder="Describe your business: what it does, who it serves, what stage you're at, what traction you have..."
                  rows={4}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold resize-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">Business stage</label>
                <select required value={stage} onChange={(e) => setStage(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold">
                  <option value="">Select stage</option>
                  <option>Idea</option>
                  <option>Early stage</option>
                  <option>Growing</option>
                  <option>Established</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-6">
            <h2 className="font-display text-base font-bold text-ink mb-4">What you need & offer</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-ink mb-3 uppercase tracking-wide">
                  What are you looking for? (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {NEEDS.map((need) => (
                    <button type="button" key={need} onClick={() => toggleNeed(need)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                        lookingFor.includes(need)
                          ? "bg-deep-green text-ivory border-deep-green"
                          : "bg-white border-border text-ink hover:border-gold"
                      }`}>
                      {need}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink mb-2 uppercase tracking-wide">
                  What can you offer to partners?
                </label>
                <textarea required value={offering} onChange={(e) => setOffering(e.target.value)}
                  placeholder="e.g. Network of 200 farmers, EU organic certification, 10 years logistics experience..."
                  rows={3}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold resize-none" />
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading || lookingFor.length === 0}
            className="w-full bg-gold text-deep-green font-bold py-4 rounded-xl hover:bg-gold-light transition-colors disabled:opacity-50">
            {loading ? "Adding you to the network..." : "Join the network →"}
          </button>

          <p className="text-xs text-muted text-center">
            Your profile will be visible to other Alkebulan members. We never sell your data.
          </p>
        </form>
      </div>
    </div>
  );
}
