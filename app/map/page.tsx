import Link from "next/link";
import { Nav } from "@/app/components/nav";
import { COUNTRY_PROFILES } from "@/lib/data/country-profiles";

const ALL_COUNTRIES = [
  { name: "Algeria", code: "DZ", flag: "🇩🇿" },
  { name: "Angola", code: "AO", flag: "🇦🇴" },
  { name: "Benin", code: "BJ", flag: "🇧🇯" },
  { name: "Botswana", code: "BW", flag: "🇧🇼" },
  { name: "Burkina Faso", code: "BF", flag: "🇧🇫" },
  { name: "Burundi", code: "BI", flag: "🇧🇮" },
  { name: "Cameroon", code: "CM", flag: "🇨🇲" },
  { name: "Cape Verde", code: "CV", flag: "🇨🇻" },
  { name: "Central African Republic", code: "CF", flag: "🇨🇫" },
  { name: "Chad", code: "TD", flag: "🇹🇩" },
  { name: "Comoros", code: "KM", flag: "🇰🇲" },
  { name: "Congo (Republic)", code: "CG", flag: "🇨🇬" },
  { name: "Congo (DRC)", code: "CD", flag: "🇨🇩" },
  { name: "Côte d'Ivoire", code: "CI", flag: "🇨🇮" },
  { name: "Djibouti", code: "DJ", flag: "🇩🇯" },
  { name: "Egypt", code: "EG", flag: "🇪🇬" },
  { name: "Equatorial Guinea", code: "GQ", flag: "🇬🇶" },
  { name: "Eritrea", code: "ER", flag: "🇪🇷" },
  { name: "Eswatini", code: "SZ", flag: "🇸🇿" },
  { name: "Ethiopia", code: "ET", flag: "🇪🇹" },
  { name: "Gabon", code: "GA", flag: "🇬🇦" },
  { name: "Gambia", code: "GM", flag: "🇬🇲" },
  { name: "Ghana", code: "GH", flag: "🇬🇭" },
  { name: "Guinea", code: "GN", flag: "🇬🇳" },
  { name: "Guinea-Bissau", code: "GW", flag: "🇬🇼" },
  { name: "Kenya", code: "KE", flag: "🇰🇪" },
  { name: "Lesotho", code: "LS", flag: "🇱🇸" },
  { name: "Liberia", code: "LR", flag: "🇱🇷" },
  { name: "Libya", code: "LY", flag: "🇱🇾" },
  { name: "Madagascar", code: "MG", flag: "🇲🇬" },
  { name: "Malawi", code: "MW", flag: "🇲🇼" },
  { name: "Mali", code: "ML", flag: "🇲🇱" },
  { name: "Mauritania", code: "MR", flag: "🇲🇷" },
  { name: "Mauritius", code: "MU", flag: "🇲🇺" },
  { name: "Morocco", code: "MA", flag: "🇲🇦" },
  { name: "Mozambique", code: "MZ", flag: "🇲🇿" },
  { name: "Namibia", code: "NA", flag: "🇳🇦" },
  { name: "Niger", code: "NE", flag: "🇳🇪" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬" },
  { name: "Rwanda", code: "RW", flag: "🇷🇼" },
  { name: "São Tomé and Príncipe", code: "ST", flag: "🇸🇹" },
  { name: "Senegal", code: "SN", flag: "🇸🇳" },
  { name: "Sierra Leone", code: "SL", flag: "🇸🇱" },
  { name: "Somalia", code: "SO", flag: "🇸🇴" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "South Sudan", code: "SS", flag: "🇸🇸" },
  { name: "Sudan", code: "SD", flag: "🇸🇩" },
  { name: "Tanzania", code: "TZ", flag: "🇹🇿" },
  { name: "Togo", code: "TG", flag: "🇹🇬" },
  { name: "Tunisia", code: "TN", flag: "🇹🇳" },
  { name: "Uganda", code: "UG", flag: "🇺🇬" },
  { name: "Zambia", code: "ZM", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", flag: "🇿🇼" },
];

const profiledCodes = new Set(COUNTRY_PROFILES.map((p) => p.country_code));

export default function MapPage() {
  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-ink mb-3">
            Country Explorer
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            Explore funding opportunities, cultural business context, SME agencies, and
            procurement portals across all 54 African nations.
          </p>
        </div>

        {/* Regions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {ALL_COUNTRIES.map(({ name, code, flag }) => {
            const hasProfile = profiledCodes.has(code);
            return (
              <Link
                key={code}
                href={hasProfile ? `/map/${code.toLowerCase()}` : "#"}
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border text-center transition-all ${
                  hasProfile
                    ? "bg-white border-border hover:border-gold hover:shadow-sm cursor-pointer"
                    : "bg-ivory border-border/50 cursor-default opacity-60"
                }`}
              >
                <span className="text-3xl">{flag}</span>
                <span className="text-xs font-semibold text-ink leading-tight">{name}</span>
                {hasProfile && (
                  <span className="text-[10px] font-medium text-deep-green bg-deep-green/10 px-2 py-0.5 rounded-full">
                    Profile available
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          Detailed profiles available for 10 countries. More coming soon.
        </p>
      </div>
    </div>
  );
}
