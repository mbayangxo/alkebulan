"use client";

import { useState } from "react";
import { useLocale } from "./locale-context";
import { LANGUAGES, CURRENCIES, COUNTRY_LOCALE, Language } from "@/lib/locale";

const AFRICAN_COUNTRIES = [
  "Nigeria", "Ghana", "Kenya", "Senegal", "South Africa", "Rwanda", "Morocco",
  "Côte d'Ivoire", "Ethiopia", "Tanzania", "Uganda", "Cameroon", "Mozambique",
  "Zambia", "Zimbabwe", "Tunisia", "Algeria", "Egypt", "Angola", "Burkina Faso",
  "Congo (DRC)", "Guinea", "Mali", "Sierra Leone", "Togo", "Benin",
  "UK diaspora", "France diaspora", "US diaspora", "Canada diaspora",
];

// Languages where AI translations are near-native quality
const HIGH_QUALITY_LANGS = new Set(["en", "fr", "ar", "pt", "sw"]);

export function LanguageBar() {
  const { lang, currency, country, setLang, setCurrency, setCountry, t } = useLocale();
  const [open, setOpen] = useState(false);
  const [showCorrectionTip, setShowCorrectionTip] = useState(false);

  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const currentCurrency = CURRENCIES[currency] ?? CURRENCIES["USD"];
  const countryInfo = country ? COUNTRY_LOCALE[country] : null;

  function handleLangChange(code: string) {
    setLang(code);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("alkebulan_lang_manual", "1");
    }
    setOpen(false);
  }

  function handleCurrencyChange(code: string) {
    setCurrency(code);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("alkebulan_currency_manual", "1");
    }
    setOpen(false);
  }

  function handleCountryChange(c: string) {
    setCountry(c);
    setOpen(false);
  }

  const currencyKeys = Object.keys(CURRENCIES);

  return (
    <div className="bg-ink text-ivory/80 text-[11px] font-medium relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-4">
        {/* Left: tagline */}
        <span className="text-gold/80 hidden sm:block truncate">{t("tagline")}</span>

        {/* Right: selectors */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Country */}
          <div className="flex items-center gap-1.5">
            <span className="text-ivory/40">{t("your_country")}:</span>
            <select
              value={country}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="bg-transparent text-ivory border-none outline-none cursor-pointer text-[11px] font-semibold max-w-[120px]"
            >
              <option value="" className="bg-ink text-ivory">{t("select_country")}</option>
              {AFRICAN_COUNTRIES.map((c) => (
                <option key={c} value={c} className="bg-ink text-ivory">
                  {countryInfo && country === c ? `${countryInfo.flag} ${c}` : c}
                </option>
              ))}
            </select>
          </div>

          <span className="text-ivory/20">|</span>

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setOpen(open === false ? true : false)}
              className="flex items-center gap-1 hover:text-ivory transition-colors"
            >
              <span>{currentLang.flag}</span>
              <span className="font-semibold">{currentLang.native}</span>
              <span className="text-ivory/30 text-[9px]">▾</span>
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-1 bg-ink border border-ivory/10 rounded-xl shadow-xl z-50 min-w-[260px] p-2">
                <div className="mb-2 px-2 pt-1 pb-2 border-b border-ivory/10">
                  <p className="text-[10px] font-bold text-ivory/40 uppercase tracking-widest">{t("your_language")}</p>
                </div>
                <div className="grid grid-cols-2 gap-1 mb-3">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLangChange(l.code)}
                      className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors text-xs ${
                        lang === l.code ? "bg-gold/20 text-gold font-bold" : "hover:bg-ivory/5 text-ivory/80"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <div>
                        <p className="font-semibold leading-none">{l.native}</p>
                        {l.native !== l.name && <p className="text-[9px] text-ivory/40 mt-0.5">{l.name}</p>}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mb-2 px-2 pt-2 pb-1 border-t border-ivory/10">
                  <p className="text-[10px] font-bold text-ivory/40 uppercase tracking-widest">{t("your_currency")}</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {currencyKeys.map((code) => {
                    const c = CURRENCIES[code];
                    return (
                      <button
                        key={code}
                        onClick={() => handleCurrencyChange(code)}
                        className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-colors text-xs ${
                          currency === code ? "bg-gold/20 text-gold font-bold" : "hover:bg-ivory/5 text-ivory/80"
                        }`}
                      >
                        <span className="font-bold w-8 text-right flex-shrink-0">{c.symbol}</span>
                        <span className="text-[10px] text-ivory/60 truncate">{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop to close */}
      {open && (
        <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
      )}

      {/* Translation quality note for African languages */}
      {!HIGH_QUALITY_LANGS.has(lang) && (
        <div className="bg-gold/10 border-b border-gold/20 py-1.5 px-4 text-[10px] text-gold/90 flex items-center justify-between gap-4 max-w-7xl mx-auto">
          <span>
            AI translations in {LANGUAGES.find((l: Language) => l.code === lang)?.native ?? lang} are approximate — African languages are complex and we&apos;re still learning.
            {lang === "wo" && " Native Wolof speakers: your corrections help Yande improve."}
          </span>
          <button
            onClick={() => setShowCorrectionTip(!showCorrectionTip)}
            className="text-gold font-semibold whitespace-nowrap hover:underline flex-shrink-0"
          >
            Help improve →
          </button>
        </div>
      )}

      {showCorrectionTip && !HIGH_QUALITY_LANGS.has(lang) && (
        <div className="bg-ink border-b border-ivory/10 px-4 py-3 text-xs text-ivory/80 max-w-7xl mx-auto">
          <p className="font-semibold text-gold mb-1">How to help Yande learn {LANGUAGES.find((l: Language) => l.code === lang)?.native}</p>
          <p>When you see a translation that&apos;s wrong or unnatural, tap the AI response and use the &ldquo;Suggest correction&rdquo; button. Your correction gets saved and Yande uses it in future responses. Community corrections make her smarter for everyone.</p>
          <button onClick={() => setShowCorrectionTip(false)} className="text-gold/60 hover:text-gold mt-2">Close</button>
        </div>
      )}
    </div>
  );
}
