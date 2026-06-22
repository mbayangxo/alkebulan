"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlkebulanCrest } from "@/app/components/panther-motif";
import { createClient } from "@/lib/supabase/client";
import { Sector, FundingType, BusinessStage, DiasporaStatus } from "@/lib/types";
import { saveUserSignals } from "@/lib/scoring";
import { useEducation } from "@/app/components/education-system";

const AFRICAN_COUNTRIES = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi",
  "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros",
  "Congo (Republic)", "Congo (DRC)", "Côte d'Ivoire", "Djibouti", "Egypt",
  "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
  "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia",
  "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius",
  "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda",
  "São Tomé and Príncipe", "Senegal", "Sierra Leone", "Somalia", "South Africa",
  "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
  "Zambia", "Zimbabwe",
];

const SECTORS: Sector[] = [
  "Agriculture", "Tech", "Fashion", "Beauty", "Media", "Music",
  "Manufacturing", "Food", "Education", "Health", "Finance",
  "Creative economy", "Climate", "Tourism", "Logistics", "Housing", "Retail",
];

const FUNDING_TYPES: FundingType[] = [
  "Grant", "Loan", "Accelerator", "Fellowship", "Investment",
  "Government contract", "Tender", "Procurement", "Training",
];

const BUSINESS_STAGES: BusinessStage[] = [
  "Idea", "Early stage", "Growing", "Established", "Not a business",
];

const DIASPORA_STATUSES: DiasporaStatus[] = [
  "Born in Africa",
  "African diaspora",
  "First-generation African",
  "African by parentage",
  "Citizen of an African country",
  "None of the above",
];

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const router = useRouter();
  const supabase = createClient();
  const { showLesson } = useEducation();
  const [step, setStep] = useState<Step>(0);
  const [loading, setLoading] = useState(false);

  // Identity
  const [firstName, setFirstName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [diasporaStatus, setDiasporaStatus] = useState<DiasporaStatus | "">("");
  // Location
  const [residenceCountry, setResidenceCountry] = useState("");
  const [citizenshipCountries, setCitizenshipCountries] = useState<string[]>([]);
  const [targetCountries, setTargetCountries] = useState<string[]>([]);
  // Business
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [businessStage, setBusinessStage] = useState<BusinessStage | "">("");
  // Funding
  const [fundingTypes, setFundingTypes] = useState<FundingType[]>([]);

  function toggleItem<T>(arr: T[], item: T, setArr: (v: T[]) => void) {
    setArr(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
  }

  async function handleFinish() {
    setLoading(true);

    saveUserSignals({
      country: residenceCountry || targetCountries[0] || undefined,
      sector: sectors[0] || undefined,
      stage: businessStage || undefined,
      diasporaStatus: diasporaStatus || undefined,
      fundingTypes,
    });

    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from("user_profiles").upsert({
        id: user.id,
        first_name: firstName || null,
        whatsapp_number: whatsapp || null,
        diaspora_status: diasporaStatus || null,
        residence_country: residenceCountry || null,
        citizenship_countries: citizenshipCountries,
        target_countries: targetCountries,
        sectors,
        funding_types: fundingTypes,
        business_stage: businessStage || null,
        onboarding_complete: true,
      });
    }
    router.push("/matches");
  }

  return (
    <div className="min-h-screen bg-deep-green flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <AlkebulanCrest size={48} />
        </div>

        {/* Step 0: Welcome */}
        {step === 0 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold bg-gold/15 px-3 py-1.5 rounded-full mb-6">
              🌍 AFRICA&apos;S OPPORTUNITY NETWORK
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ivory mb-4 leading-tight">
              Africa is the richest<br />continent on earth.
            </h1>
            <p className="text-ivory/70 text-base leading-relaxed mb-6 max-w-md mx-auto">
              Right now, foreign companies own the banks, the telecoms, the supermarkets, and the supply chains on your land. Alkebulan exists to change that — by connecting you to the funding, contracts, and knowledge to build what belongs to Africans.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-sm mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">54</p>
                <p className="text-[11px] text-ivory/60">countries covered</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">800+</p>
                <p className="text-[11px] text-ivory/60">programs & funds</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">Free</p>
                <p className="text-[11px] text-ivory/60">always</p>
              </div>
            </div>
            <button
              onClick={() => setStep(1)}
              className="w-full bg-gold text-deep-green font-bold py-4 rounded-2xl text-lg hover:bg-gold-light transition-colors"
            >
              Find my opportunities →
            </button>
            <p className="text-ivory/40 text-xs mt-4">Takes 2 minutes. No payment needed.</p>
          </div>
        )}

        {/* Steps 1–5 */}
        {step > 0 && (
          <>
            {/* Progress */}
            <div className="flex gap-2 mb-6">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i + 1 <= step ? "bg-gold" : "bg-ivory/20"
                  }`}
                />
              ))}
            </div>

            <div className="bg-ivory rounded-2xl p-8">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
                Step {step} of {TOTAL_STEPS}
              </p>

              {/* Step 1: Who are you */}
              {step === 1 && (
                <>
                  <h2 className="font-display text-2xl font-bold text-ink mb-6">Who are you?</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-ink mb-1.5 block">First name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="e.g. Amara"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-deep-green bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-ink mb-1.5 block">I identify as</label>
                      <p className="text-xs text-muted mb-3">Alkebulan serves Africans everywhere — on the continent and across the diaspora.</p>
                      <div className="space-y-2">
                        {DIASPORA_STATUSES.map((status) => (
                          <button
                            key={status}
                            onClick={() => setDiasporaStatus(status)}
                            className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                              diasporaStatus === status
                                ? "bg-deep-green text-ivory border-deep-green"
                                : "bg-white border-border text-ink hover:border-gold"
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Location */}
              {step === 2 && (
                <>
                  <h2 className="font-display text-2xl font-bold text-ink mb-6">Where are you?</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Where do you currently live?</label>
                      <select
                        value={residenceCountry}
                        onChange={(e) => setResidenceCountry(e.target.value)}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold"
                      >
                        <option value="">Select country</option>
                        {[...AFRICAN_COUNTRIES, "United States", "United Kingdom", "France", "Canada", "Germany", "UAE", "Other"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Which African countries interest you for opportunities?</label>
                      <p className="text-xs text-muted mb-3">Select all that apply</p>
                      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                        {AFRICAN_COUNTRIES.map((c) => (
                          <button
                            key={c}
                            onClick={() => toggleItem(targetCountries, c, setTargetCountries)}
                            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                              targetCountries.includes(c)
                                ? "bg-deep-green text-ivory border-deep-green"
                                : "bg-white border-border text-ink hover:border-gold"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 3: Business */}
              {step === 3 && (
                <>
                  <h2 className="font-display text-2xl font-bold text-ink mb-6">What&apos;s your business?</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Business stage</label>
                      <div className="space-y-2">
                        {BUSINESS_STAGES.map((stage) => (
                          <button
                            key={stage}
                            onClick={() => setBusinessStage(stage)}
                            className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                              businessStage === stage
                                ? "bg-deep-green text-ivory border-deep-green"
                                : "bg-white border-border text-ink hover:border-gold"
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-2">Sectors (pick all that apply)</label>
                      <div className="flex flex-wrap gap-2">
                        {SECTORS.map((s) => (
                          <button
                            key={s}
                            onClick={() => toggleItem(sectors, s, setSectors)}
                            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                              sectors.includes(s)
                                ? "bg-gold text-deep-green border-gold"
                                : "bg-white border-border text-ink hover:border-gold"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 4: Funding types */}
              {step === 4 && (
                <>
                  <h2 className="font-display text-2xl font-bold text-ink mb-6">What funding do you want?</h2>
                  <p className="text-sm text-muted mb-4">Select all that apply.</p>
                  <div className="space-y-2">
                    {FUNDING_TYPES.map((ft) => (
                      <button
                        key={ft}
                        onClick={() => toggleItem(fundingTypes, ft, setFundingTypes)}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                          fundingTypes.includes(ft)
                            ? "bg-deep-green text-ivory border-deep-green"
                            : "bg-white border-border text-ink hover:border-gold"
                        }`}
                      >
                        {ft}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Step 5: Stay connected */}
              {step === 5 && (
                <>
                  <h2 className="font-display text-2xl font-bold text-ink mb-2">Stay in the loop</h2>
                  <p className="text-sm text-muted mb-6">
                    We&apos;ll notify you when new programs open, deadlines are close, or a new opportunity matches your profile.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-ink mb-1.5 block">WhatsApp number <span className="text-muted font-normal">(optional)</span></label>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-deep-green bg-white"
                      />
                      <p className="text-[11px] text-muted mt-1">Include country code. We won&apos;t spam — opportunity updates only.</p>
                    </div>
                    <div className="bg-gold/10 border border-gold/20 rounded-xl p-4">
                      <p className="text-xs font-semibold text-deep-green mb-1">What you&apos;ll receive</p>
                      <ul className="text-xs text-ink/70 space-y-1">
                        <li>→ New grants and programs for your country</li>
                        <li>→ Deadline reminders for programs you saved</li>
                        <li>→ Tips on your application path</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  className="flex-1 border border-border text-ink font-semibold py-3 rounded-xl hover:border-deep-green transition-colors"
                >
                  Back
                </button>
                {step < TOTAL_STEPS ? (
                  <button
                    onClick={() => setStep((s) => (s + 1) as Step)}
                    className="flex-1 bg-deep-green text-ivory font-bold py-3 rounded-xl hover:bg-mid-green transition-colors"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    onClick={() => showLesson("mansa-musa-wealth", handleFinish)}
                    disabled={loading}
                    className="flex-1 bg-gold text-deep-green font-bold py-3 rounded-xl hover:bg-gold-light transition-colors disabled:opacity-60"
                  >
                    {loading ? "Finding your matches..." : "Show my opportunities →"}
                  </button>
                )}
              </div>

              {step === 5 && (
                <button
                  onClick={handleFinish}
                  disabled={loading}
                  className="w-full text-center text-xs text-muted mt-4 hover:text-ink transition-colors"
                >
                  Skip notifications and go to my matches
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
