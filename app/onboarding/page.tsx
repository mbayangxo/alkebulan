"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlkebulanCrest } from "@/app/components/panther-motif";
import { createClient } from "@/lib/supabase/client";
import { Sector, FundingType, BusinessStage, DiasporaStatus } from "@/lib/types";
import { saveUserSignals } from "@/lib/scoring";

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

type Step = 1 | 2 | 3 | 4;

export default function OnboardingPage() {
  const router = useRouter();
  const supabase = createClient();
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);

  // Form state
  const [diasporaStatus, setDiasporaStatus] = useState<DiasporaStatus | "">("");
  const [residenceCountry, setResidenceCountry] = useState("");
  const [citizenshipCountries, setCitizenshipCountries] = useState<string[]>([]);
  const [targetCountries, setTargetCountries] = useState<string[]>([]);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [fundingTypes, setFundingTypes] = useState<FundingType[]>([]);
  const [businessStage, setBusinessStage] = useState<BusinessStage | "">("");

  function toggleItem<T>(arr: T[], item: T, setArr: (v: T[]) => void) {
    setArr(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
  }

  async function handleFinish() {
    setLoading(true);

    // Save to localStorage for instant client-side scoring
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
    router.push("/dashboard");
  }

  const stepTitles = [
    "Who are you?",
    "Where are you?",
    "What's your business?",
    "What funding do you want?",
  ];

  return (
    <div className="min-h-screen bg-deep-green flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <AlkebulanCrest size={48} />
          <p className="text-ivory/60 text-sm mt-3">Let's find your opportunities</p>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {([1, 2, 3, 4] as Step[]).map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-gold" : "bg-ivory/20"
              }`}
            />
          ))}
        </div>

        <div className="bg-ivory rounded-2xl p-8">
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
            Step {step} of 4
          </p>
          <h1 className="font-display text-2xl font-bold text-ink mb-6">
            {stepTitles[step - 1]}
          </h1>

          {/* Step 1: Identity */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-muted mb-4">
                Alkebulan serves Africans everywhere — on the continent and across the diaspora.
              </p>
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
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Where do you currently live?
                </label>
                <select
                  value={residenceCountry}
                  onChange={(e) => setResidenceCountry(e.target.value)}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink focus:outline-none focus:border-gold"
                >
                  <option value="">Select country</option>
                  {[...AFRICAN_COUNTRIES, "United States", "United Kingdom", "France", "Canada", "Other"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Which African countries interest you for funding?
                </label>
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
          )}

          {/* Step 3: Business */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  What stage is your business?
                </label>
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
                <label className="block text-sm font-semibold text-ink mb-2">
                  What sectors are you in?
                </label>
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
          )}

          {/* Step 4: Funding types */}
          {step === 4 && (
            <div className="space-y-3">
              <p className="text-sm text-muted mb-4">
                What kinds of funding are you looking for? Select all that apply.
              </p>
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
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep((s) => (s - 1) as Step)}
                className="flex-1 border border-border text-ink font-semibold py-3 rounded-xl hover:border-deep-green transition-colors"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep((s) => (s + 1) as Step)}
                className="flex-1 bg-deep-green text-ivory font-bold py-3 rounded-xl hover:bg-mid-green transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={loading}
                className="flex-1 bg-gold text-deep-green font-bold py-3 rounded-xl hover:bg-gold-light transition-colors disabled:opacity-60"
              >
                {loading ? "Saving..." : "Find my opportunities →"}
              </button>
            )}
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="w-full text-center text-xs text-muted mt-4 hover:text-ink transition-colors"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
