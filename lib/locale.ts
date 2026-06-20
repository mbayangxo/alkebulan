// Language, currency, and locale settings for Alkebulan
// AI responses switch language via system prompt instruction
// UI labels are translated for English, French, and key African languages

export interface Language {
  code: string;
  name: string;
  native: string;
  flag: string;
  rtl?: boolean;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", native: "English", flag: "🇬🇧" },
  { code: "fr", name: "French", native: "Français", flag: "🇫🇷" },
  { code: "sw", name: "Swahili", native: "Kiswahili", flag: "🇰🇪" },
  { code: "ha", name: "Hausa", native: "Hausa", flag: "🇳🇬" },
  { code: "yo", name: "Yoruba", native: "Yorùbá", flag: "🇳🇬" },
  { code: "ig", name: "Igbo", native: "Igbo", flag: "🇳🇬" },
  { code: "wo", name: "Wolof", native: "Wolof", flag: "🇸🇳" },
  { code: "ff", name: "Fulfulde", native: "Fulfulde / Pulaar", flag: "🇸🇳" },
  { code: "bm", name: "Bambara", native: "Bamanankan", flag: "🇲🇱" },
  { code: "tw", name: "Twi", native: "Twi (Akan)", flag: "🇬🇭" },
  { code: "ln", name: "Lingala", native: "Lingála", flag: "🇨🇩" },
  { code: "zu", name: "Zulu", native: "isiZulu", flag: "🇿🇦" },
  { code: "so", name: "Somali", native: "Soomaali", flag: "🇸🇴" },
  { code: "ti", name: "Tigrinya", native: "ትግርኛ", flag: "🇪🇷" },
  { code: "am", name: "Amharic", native: "አማርኛ", flag: "🇪🇹" },
  { code: "ar", name: "Arabic", native: "العربية", flag: "🇲🇦", rtl: true },
  { code: "pt", name: "Portuguese", native: "Português", flag: "🇦🇴" },
];

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  approx_usd_rate: number; // 1 USD = X local currency (approximate)
}

export const CURRENCIES: Record<string, Currency> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar", approx_usd_rate: 1 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", approx_usd_rate: 0.92 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", approx_usd_rate: 0.78 },
  NGN: { code: "NGN", symbol: "₦", name: "Nigerian Naira", approx_usd_rate: 1600 },
  GHS: { code: "GHS", symbol: "GH₵", name: "Ghana Cedi", approx_usd_rate: 15.5 },
  KES: { code: "KES", symbol: "KSh", name: "Kenya Shilling", approx_usd_rate: 130 },
  XOF: { code: "XOF", symbol: "CFA", name: "CFA Franc (UEMOA)", approx_usd_rate: 600 },
  XAF: { code: "XAF", symbol: "FCFA", name: "CFA Franc (CEMAC)", approx_usd_rate: 600 },
  MAD: { code: "MAD", symbol: "DH", name: "Moroccan Dirham", approx_usd_rate: 10 },
  ZAR: { code: "ZAR", symbol: "R", name: "South African Rand", approx_usd_rate: 18.5 },
  ETB: { code: "ETB", symbol: "Br", name: "Ethiopian Birr", approx_usd_rate: 56 },
  TZS: { code: "TZS", symbol: "TSh", name: "Tanzanian Shilling", approx_usd_rate: 2550 },
  UGX: { code: "UGX", symbol: "USh", name: "Uganda Shilling", approx_usd_rate: 3750 },
  RWF: { code: "RWF", symbol: "RF", name: "Rwanda Franc", approx_usd_rate: 1280 },
  MZN: { code: "MZN", symbol: "MT", name: "Mozambican Metical", approx_usd_rate: 64 },
  ZMW: { code: "ZMW", symbol: "ZK", name: "Zambian Kwacha", approx_usd_rate: 26 },
  AOA: { code: "AOA", symbol: "Kz", name: "Angolan Kwanza", approx_usd_rate: 840 },
  EGP: { code: "EGP", symbol: "E£", name: "Egyptian Pound", approx_usd_rate: 31 },
  DZD: { code: "DZD", symbol: "DA", name: "Algerian Dinar", approx_usd_rate: 134 },
  TND: { code: "TND", symbol: "DT", name: "Tunisian Dinar", approx_usd_rate: 3.1 },
};

// Country → default language + currency
export const COUNTRY_LOCALE: Record<string, { lang: string; currency: string; flag: string }> = {
  "Nigeria": { lang: "en", currency: "NGN", flag: "🇳🇬" },
  "Ghana": { lang: "en", currency: "GHS", flag: "🇬🇭" },
  "Kenya": { lang: "sw", currency: "KES", flag: "🇰🇪" },
  "Tanzania": { lang: "sw", currency: "TZS", flag: "🇹🇿" },
  "Uganda": { lang: "sw", currency: "UGX", flag: "🇺🇬" },
  "Rwanda": { lang: "fr", currency: "RWF", flag: "🇷🇼" },
  "Ethiopia": { lang: "am", currency: "ETB", flag: "🇪🇹" },
  "Senegal": { lang: "fr", currency: "XOF", flag: "🇸🇳" },
  "Côte d'Ivoire": { lang: "fr", currency: "XOF", flag: "🇨🇮" },
  "Mali": { lang: "fr", currency: "XOF", flag: "🇲🇱" },
  "Burkina Faso": { lang: "fr", currency: "XOF", flag: "🇧🇫" },
  "Benin": { lang: "fr", currency: "XOF", flag: "🇧🇯" },
  "Togo": { lang: "fr", currency: "XOF", flag: "🇹🇬" },
  "Guinea": { lang: "fr", currency: "XOF", flag: "🇬🇳" },
  "Cameroon": { lang: "fr", currency: "XAF", flag: "🇨🇲" },
  "Congo (DRC)": { lang: "fr", currency: "XAF", flag: "🇨🇩" },
  "Morocco": { lang: "fr", currency: "MAD", flag: "🇲🇦" },
  "Tunisia": { lang: "ar", currency: "TND", flag: "🇹🇳" },
  "Algeria": { lang: "ar", currency: "DZD", flag: "🇩🇿" },
  "Egypt": { lang: "ar", currency: "EGP", flag: "🇪🇬" },
  "South Africa": { lang: "en", currency: "ZAR", flag: "🇿🇦" },
  "Mozambique": { lang: "pt", currency: "MZN", flag: "🇲🇿" },
  "Angola": { lang: "pt", currency: "AOA", flag: "🇦🇴" },
  "Zambia": { lang: "en", currency: "ZMW", flag: "🇿🇲" },
  "Zimbabwe": { lang: "en", currency: "USD", flag: "🇿🇼" },
  "UK diaspora": { lang: "en", currency: "GBP", flag: "🇬🇧" },
  "France diaspora": { lang: "fr", currency: "EUR", flag: "🇫🇷" },
  "US diaspora": { lang: "en", currency: "USD", flag: "🇺🇸" },
  "Canada diaspora": { lang: "en", currency: "USD", flag: "🇨🇦" },
};

// Browser locale → best guess for language
export function detectLanguageFromBrowser(): string {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language || "en";
  if (lang.startsWith("fr")) return "fr";
  if (lang.startsWith("sw") || lang.startsWith("sw-")) return "sw";
  if (lang.startsWith("ha")) return "ha";
  if (lang.startsWith("yo")) return "yo";
  if (lang.startsWith("ar")) return "ar";
  if (lang.startsWith("am")) return "am";
  if (lang.startsWith("pt")) return "pt";
  return "en";
}

// Convert a USD amount to local currency string
export function formatCurrency(usdAmount: number, currencyCode: string): string {
  const currency = CURRENCIES[currencyCode];
  if (!currency) return `$${usdAmount.toLocaleString()}`;
  const localAmount = Math.round(usdAmount * currency.approx_usd_rate);
  return `${currency.symbol}${localAmount.toLocaleString()}`;
}

// UI string translations — key strings only
// AI handles full language switching via system prompt
export type TranslationKey =
  | "tagline"
  | "your_country"
  | "your_language"
  | "your_currency"
  | "select_country"
  | "what_can_i_build"
  | "show_me"
  | "my_goals"
  | "brand_builder"
  | "capital"
  | "find_funding"
  | "ask_ai"
  | "loading"
  | "start_over"
  | "tools"
  | "opportunities"
  | "network"
  | "countries"
  | "feed"
  | "your_path";

export const UI_STRINGS: Record<string, Record<TranslationKey, string>> = {
  en: {
    tagline: "Africa is the Opportunity",
    your_country: "Your country",
    your_language: "Language",
    your_currency: "Currency",
    select_country: "Select your country",
    what_can_i_build: "What can I build?",
    show_me: "Show me what I can build →",
    my_goals: "My Goals",
    brand_builder: "Brand Builder",
    capital: "Capital",
    find_funding: "Find Funding",
    ask_ai: "Ask AI",
    loading: "Thinking...",
    start_over: "Start over",
    tools: "Tools",
    opportunities: "Opportunities",
    network: "Network",
    countries: "Countries",
    feed: "Feed",
    your_path: "Your Path",
  },
  fr: {
    tagline: "L'Afrique est l'Opportunité",
    your_country: "Votre pays",
    your_language: "Langue",
    your_currency: "Devise",
    select_country: "Choisissez votre pays",
    what_can_i_build: "Que puis-je créer ?",
    show_me: "Montre-moi ce que je peux créer →",
    my_goals: "Mes Objectifs",
    brand_builder: "Créer ma Marque",
    capital: "Capital",
    find_funding: "Trouver du Financement",
    ask_ai: "Demander à l'IA",
    loading: "En cours...",
    start_over: "Recommencer",
    tools: "Outils",
    opportunities: "Opportunités",
    network: "Réseau",
    countries: "Pays",
    feed: "Actualités",
    your_path: "Mon Chemin",
  },
  sw: {
    tagline: "Afrika ni Fursa",
    your_country: "Nchi yako",
    your_language: "Lugha",
    your_currency: "Sarafu",
    select_country: "Chagua nchi yako",
    what_can_i_build: "Ninaweza kujenga nini?",
    show_me: "Nionyeshe ninachoweza kujenga →",
    my_goals: "Malengo Yangu",
    brand_builder: "Jenga Brand",
    capital: "Mtaji",
    find_funding: "Tafuta Fedha",
    ask_ai: "Uliza AI",
    loading: "Inafikiri...",
    start_over: "Anza upya",
    tools: "Zana",
    opportunities: "Fursa",
    network: "Mtandao",
    countries: "Nchi",
    feed: "Habari",
    your_path: "Njia Yangu",
  },
  ha: {
    tagline: "Afirka ita ce Damar",
    your_country: "Kasarku",
    your_language: "Harshe",
    your_currency: "Kuɗi",
    select_country: "Zaɓi kasarka",
    what_can_i_build: "Menene zan iya gina?",
    show_me: "Nuna min abin da zan iya gina →",
    my_goals: "Manufofina",
    brand_builder: "Gina Alama",
    capital: "Jari",
    find_funding: "Nemo Kuɗi",
    ask_ai: "Tambaya AI",
    loading: "Ana tunanin...",
    start_over: "Fara sake",
    tools: "Kayan aiki",
    opportunities: "Damammaki",
    network: "Hanyar sadarwa",
    countries: "Ƙasashe",
    feed: "Labarai",
    your_path: "Tafarkin ku",
  },
  yo: {
    tagline: "Afirika ni Anfaani",
    your_country: "Orílẹ̀-èdè rẹ",
    your_language: "Èdè",
    your_currency: "Owó",
    select_country: "Yan orílẹ̀-èdè rẹ",
    what_can_i_build: "Kíni mo lè kọ?",
    show_me: "Fihàn mí ohun tí mo lè kọ →",
    my_goals: "Àwọn Èrò Mi",
    brand_builder: "Kọ Ami-iṣowo",
    capital: "Olu",
    find_funding: "Wá Owó",
    ask_ai: "Béèrè AI",
    loading: "Ń ronú...",
    start_over: "Bẹ̀rẹ̀ lẹ́ẹ̀kan si",
    tools: "Àwọn ohun èlò",
    opportunities: "Àwọn àǹfààní",
    network: "Nẹtiwọ̀ọ̀kì",
    countries: "Àwọn Orílẹ̀-èdè",
    feed: "Ìròyìn",
    your_path: "Ọ̀nà Rẹ",
  },
  wo: {
    tagline: "Afrig mooy Yëgël",
    your_country: "Sa réew",
    your_language: "Làkk",
    your_currency: "Xaalis",
    select_country: "Tann sa réew",
    what_can_i_build: "Lan la ma mën jëfandikoo?",
    show_me: "Wàcc ma loolu ma mën def →",
    my_goals: "Sama Xibaar",
    brand_builder: "Def sa Marque",
    capital: "Xaalis",
    find_funding: "Seet Xaalis",
    ask_ai: "Laaj AI",
    loading: "Xam-xam...",
    start_over: "Doxal ci kanam",
    tools: "Jumtukaay",
    opportunities: "Yëgël",
    network: "Réseau",
    countries: "Réew yi",
    feed: "Xibaar yi",
    your_path: "Sa Yoon",
  },
  am: {
    tagline: "አፍሪካ አጋጣሚ ናት",
    your_country: "አገርህ",
    your_language: "ቋንቋ",
    your_currency: "ምንዛሬ",
    select_country: "አገርህን ምረጥ",
    what_can_i_build: "ምን መገንባት እችላለሁ?",
    show_me: "መገንባት የምችለውን አሳየኝ →",
    my_goals: "ግቦቼ",
    brand_builder: "ብራንድ ገንባ",
    capital: "ካፒታል",
    find_funding: "ፋይናንስ አግኝ",
    ask_ai: "AI ጠይቅ",
    loading: "በማሰብ ላይ...",
    start_over: "እንደገና ጀምር",
    tools: "መሣሪያዎች",
    opportunities: "ዕድሎች",
    network: "ኔትወርክ",
    countries: "አገሮች",
    feed: "ዜና",
    your_path: "ጎዳናህ",
  },
  ar: {
    tagline: "أفريقيا هي الفرصة",
    your_country: "بلدك",
    your_language: "اللغة",
    your_currency: "العملة",
    select_country: "اختر بلدك",
    what_can_i_build: "ماذا يمكنني بناء؟",
    show_me: "أرني ما يمكنني بناؤه →",
    my_goals: "أهدافي",
    brand_builder: "بناء العلامة التجارية",
    capital: "رأس المال",
    find_funding: "ابحث عن تمويل",
    ask_ai: "اسأل الذكاء الاصطناعي",
    loading: "جارٍ التفكير...",
    start_over: "ابدأ من جديد",
    tools: "الأدوات",
    opportunities: "الفرص",
    network: "الشبكة",
    countries: "الدول",
    feed: "الأخبار",
    your_path: "مسارك",
  },
  pt: {
    tagline: "África é a Oportunidade",
    your_country: "O seu país",
    your_language: "Idioma",
    your_currency: "Moeda",
    select_country: "Selecione o seu país",
    what_can_i_build: "O que posso construir?",
    show_me: "Mostra-me o que posso construir →",
    my_goals: "Os Meus Objetivos",
    brand_builder: "Criar Marca",
    capital: "Capital",
    find_funding: "Encontrar Financiamento",
    ask_ai: "Perguntar à IA",
    loading: "A pensar...",
    start_over: "Recomeçar",
    tools: "Ferramentas",
    opportunities: "Oportunidades",
    network: "Rede",
    countries: "Países",
    feed: "Notícias",
    your_path: "O Meu Caminho",
  },
};

export function t(lang: string, key: TranslationKey): string {
  return UI_STRINGS[lang]?.[key] ?? UI_STRINGS["en"][key];
}

// System prompt language instruction for AI calls
export function langInstruction(langCode: string, corrections?: string): string {
  const map: Record<string, string> = {
    en: "Respond in English.",
    fr: "Réponds en français. Utilise un langage accessible et motivant.",
    sw: "Jibu kwa Kiswahili. Tumia lugha rahisi na ya kuhamasisha.",
    ha: "Ka amsa da Hausa. Yi amfani da harshe mai sauƙi kuma mai ƙarfafawa.",
    yo: "Dáhùn ní èdè Yorùbá. Lo èdè tó rọrùn àti tó fún ìmúlárugẹ.",
    ig: "Zaghachi n'asụsụ Igbo. Jiri asụsụ dị mfe ma na-eme ka ọ dị ume.",
    wo: "Yëgël ci Wolof. Jëfandikoo làkk bu yomb te bu noppiku. Sunu AI amna seen tëralinu ci Wolof — xamal ne man dafa amoon njëk yu baaxul.",
    ff: "Jaɓɓo e Fulfulde / Pulaar. Jëfandikoo mbaadiiji ɗi yimɓe fahmata. Yande waawi taƴtaali Fulfulde kañum ɗoo — ñoɓu e kattanɗe moodibaaɓe.",
    bm: "Jaabi Bamanankan na. Kuma yèrèlen ni jigiyalen ye. Yande tɛ Bamanankan kalan ka ɲɛ — i ka kɔlɔsi di n'i ye segin.",
    tw: "Gye so wɔ Twi (Akan) kasa mu. Fa kasa a yɛde nti ara. Yande nim Twi kakra — wo tumiboa yɛn na yɛakyerɛ yaw biara.",
    ln: "Yambi na Lingála. Sálá maloba ya pɛtɛɛ mpe ya botɔndi. Yande ayebi Lingála moke — support yo ekosalisa ye akola.",
    zu: "Phendula ngesiZulu. Sebenzisa ulimi olulula nolwezwayo. Izwi eliqinile liyasiza—siza usile.",
    so: "Ka jawaab Soomaali. Isticmaal luuqad sahlan oo dhiirigelisa. Yande waxay garataa Soomaali xoogaa—caawinta saxaafadda ayaa muhiim ah.",
    ti: "ብትግርኛ መልሲ ሃቦ። ቀሊልን ዘበርታዕን ቋንቋ ተጠቀም። Yande ትግርኛ ውሑድ ትፈልጥ — ምርሓዊ ምቕራብ ጠቓሚ እዩ።",
    am: "በአማርኛ ምላሽ ስጥ። ቀላልና አበረታች ቋንቋ ተጠቀም።",
    ar: "أجب باللغة العربية. استخدم لغة بسيطة ومحفزة.",
    pt: "Responda em português. Use linguagem simples e motivadora.",
  };
  const base = map[langCode] ?? "Respond in English.";
  if (corrections) {
    return `${base}\n\nCommunity-verified translations to use (provided by native speakers — use these exact phrases when relevant):\n${corrections}`;
  }
  return base;
}

// Load community corrections from localStorage for a given language
export function loadCorrections(langCode: string): string {
  if (typeof localStorage === "undefined") return "";
  const stored = localStorage.getItem(`yande_corrections_${langCode}`);
  return stored ?? "";
}

// Save a community correction to localStorage
export function saveCorrection(langCode: string, original: string, correction: string): void {
  if (typeof localStorage === "undefined") return;
  const existing = loadCorrections(langCode);
  const entry = `- Instead of "${original}", say "${correction}"`;
  const updated = existing ? `${existing}\n${entry}` : entry;
  localStorage.setItem(`yande_corrections_${langCode}`, updated);
}
