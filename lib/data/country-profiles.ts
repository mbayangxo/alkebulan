import { CountryProfile } from "@/lib/types";

export const COUNTRY_PROFILES: CountryProfile[] = [
  {
    country: "Senegal",
    country_code: "SN",
    capital: "Dakar",
    population: 17000000,
    gdp: "$27 billion",
    languages: ["French", "Wolof", "Pulaar", "Serer", "Diola", "Mandinka"],
    industries: ["Fishing", "Agriculture", "Tourism", "Mining", "Telecommunications", "Creative economy"],
    cultural_notes:
      "Senegal is known for its Teranga (hospitality) and vibrant music scene including Mbalax and Afrobeat. The country has a strong tradition of entrepreneurship among the Mouride brotherhood.",
    historical_notes:
      "Home to the Wolof Empire, Mali Empire, and Jolof Empire. Dakar served as the capital of French West Africa. A beacon of political stability in West Africa.",
    historical_empires: ["Wolof Empire", "Jolof Empire", "Mali Empire"],
    ethnic_groups: ["Wolof", "Fula", "Serer", "Jola", "Mandinka", "Soninke"],
    procurement_links: [
      { name: "ARMP - Autorité de Régulation des Marchés Publics", url: "https://www.armp.sn" },
      { name: "Portail des Marchés Publics du Sénégal", url: "https://marchespublics.sn" },
    ],
    youth_programs: [
      "Programme 100 000 Entrepreneurs",
      "FONSIS Youth Investment Program",
      "Délégation Générale à l'Entrepreneuriat Rapide (DER/FJ)",
    ],
    women_programs: [
      "DER/FJ Women's Entrepreneurship Fund",
      "ADPME Women SME Support",
      "Banque de Dakar Women's Credit",
    ],
    sme_agencies: ["ADPME", "APIX", "DER/FJ", "FONSIS"],
    startup_notes:
      "Dakar's Silicon Plateau is growing fast. CTIC Dakar is the main tech hub. The government's FORCE-N initiative funds tech startups.",
    diaspora_notes:
      "Large diaspora in France, Italy, Spain, and the US. Diaspora remittances are significant. The FAISE program supports diaspora investment.",
    business_etiquette: [
      "Greetings are important — take time to exchange pleasantries",
      "Business is relationship-based — invest in connections before deals",
      "Tea ceremonies (Ataya) are a sign of welcome",
      "Friday is a half-day due to Friday prayers",
    ],
  },
  {
    country: "Ghana",
    country_code: "GH",
    capital: "Accra",
    population: 33000000,
    gdp: "$77 billion",
    languages: ["English", "Twi", "Ga", "Ewe", "Dagbani", "Hausa"],
    industries: ["Gold mining", "Cocoa", "Oil & Gas", "Financial services", "Tech", "Tourism"],
    cultural_notes:
      "Ghana was the first sub-Saharan African country to gain independence in 1957. Known for its vibrant Kente cloth, Adinkra symbols, and Highlife music. The Year of Return campaign boosted diaspora investment.",
    historical_notes:
      "Home of the Ashanti Empire, one of the most powerful kingdoms in West Africa. The Gold Coast was a major center of trade and culture before colonization.",
    historical_empires: ["Ashanti Empire", "Dagomba Kingdom", "Denkyira Kingdom", "Bono Kingdom"],
    ethnic_groups: ["Akan", "Mole-Dagbon", "Ewe", "Ga-Dangme", "Gurma", "Guan", "Mande"],
    procurement_links: [
      { name: "Public Procurement Authority (PPA)", url: "https://www.ppaghana.org" },
      { name: "Ghana Tender Portal", url: "https://tenders.gov.gh" },
    ],
    youth_programs: [
      "National Entrepreneurship and Innovation Programme (NEIP)",
      "Youth Employment Agency",
      "Ghana Youth Employment and Entrepreneurial Development Agency (GYEEDA)",
    ],
    women_programs: [
      "Mastercard Foundation Women's Fund",
      "Ghana Women's Network Funding",
      "African Development Bank Women's Fund for Africa",
    ],
    sme_agencies: ["NEIP", "NBSSI", "Ghana Enterprises Agency (GEA)", "Export Development & Agricultural Investment Fund (EDAIF)"],
    startup_notes:
      "Accra's tech ecosystem is one of the most developed in Africa. Hub partners include iHub, mLab, and Accra Tech. Ghana StartUp Act provides incentives.",
    diaspora_notes:
      "Year of Return program attracted significant diaspora investment. Beyond the Return continues this momentum. Large diaspora communities in UK, USA, Germany.",
    business_etiquette: [
      "Respect for elders is paramount in business settings",
      "Punctuality is appreciated but meetings often start late",
      "Handshakes are common; address people formally by title first",
      "Gift-giving is common and appreciated",
    ],
  },
  {
    country: "Nigeria",
    country_code: "NG",
    capital: "Abuja",
    population: 220000000,
    gdp: "$477 billion",
    languages: ["English", "Hausa", "Yoruba", "Igbo", "Fulfulde", "Kanuri"],
    industries: ["Oil & Gas", "Agriculture", "Financial services", "Entertainment", "Tech", "Manufacturing", "Telecommunications"],
    cultural_notes:
      "Nigeria is Africa's largest economy and most populous nation. Nollywood is the world's second-largest film industry. Lagos is Africa's largest city and a global tech hub.",
    historical_notes:
      "Home to ancient kingdoms including the Benin Empire, Oyo Empire, Kanem-Bornu, Hausa Kingdoms, and the Nri Kingdom. Nigeria gained independence in 1960.",
    historical_empires: ["Benin Empire", "Oyo Empire", "Kanem-Bornu Empire", "Sokoto Caliphate", "Nri Kingdom"],
    ethnic_groups: ["Hausa-Fulani", "Yoruba", "Igbo", "Ijaw", "Kanuri", "Ibibio", "Tiv"],
    procurement_links: [
      { name: "Bureau of Public Procurement", url: "https://www.bpp.gov.ng" },
      { name: "Nigerian Tenders", url: "https://nigeriangov.org/tenders" },
    ],
    youth_programs: [
      "Bank of Industry (BOI) Youth Entrepreneurship Support",
      "Tony Elumelu Foundation TEF Programme",
      "Central Bank of Nigeria Creative Industry Financing Initiative",
      "NYSC Social Enterprise Competition",
    ],
    women_programs: [
      "Women Empowerment Fund (BOI)",
      "CBN Targeted Credit Facility for Women",
      "AfDB Women's Entrepreneurship Finance Initiative (We-Fi) Nigeria",
    ],
    sme_agencies: ["Bank of Industry (BOI)", "Small and Medium Enterprises Development Agency (SMEDAN)", "CAC", "NAFDAC"],
    startup_notes:
      "Lagos is home to Africa's largest startup ecosystem. Yaba ('Yabacon Valley') hosts hundreds of tech startups. Flutterwave, Paystack, Andela are Nigerian success stories.",
    diaspora_notes:
      "Nigerian diaspora sends the most remittances in Africa. NIDCOM (Nigerians in Diaspora Commission) facilitates diaspora investment. Strong communities in UK, USA, Canada.",
    business_etiquette: [
      "Hierarchy and seniority matter — greet the most senior person first",
      "Building personal relationships is essential before business",
      "Time keeping is flexible — 'African Time' is real but respect others' time",
      "Business cards are exchanged with both hands or the right hand",
    ],
  },
  {
    country: "Rwanda",
    country_code: "RW",
    capital: "Kigali",
    population: 14000000,
    gdp: "$13 billion",
    languages: ["Kinyarwanda", "French", "English", "Swahili"],
    industries: ["Tourism", "Coffee", "Tea", "Financial services", "Tech", "Mining", "Construction"],
    cultural_notes:
      "Rwanda has undergone one of history's most remarkable transformations. Kigali is consistently rated Africa's cleanest city. Umuganda (community work days) reflects a culture of collective effort.",
    historical_notes:
      "The ancient Kingdom of Rwanda was one of Central Africa's most centralized states. After the 1994 genocide, Rwanda rebuilt itself into a model of African development.",
    historical_empires: ["Kingdom of Rwanda"],
    ethnic_groups: ["Hutu", "Tutsi", "Twa"],
    procurement_links: [
      { name: "Rwanda Public Procurement Authority (RPPA)", url: "https://www.rppa.gov.rw" },
      { name: "Rwanda E-procurement System", url: "https://eprocurement.gov.rw" },
    ],
    youth_programs: [
      "Rwanda Youth in Agribusiness Forum (RYAF)",
      "Hanga Ahazaza Youth Entrepreneurship Program",
      "Young Innovators Competition",
      "RDB Youth Mentorship Program",
    ],
    women_programs: [
      "WomenConnect Challenge Rwanda",
      "Rwanda Women's Entrepreneurship Network",
      "BRD Women Credit Facility",
    ],
    sme_agencies: ["Rwanda Development Board (RDB)", "Business Development Fund (BDF)", "SME Rwanda"],
    startup_notes:
      "Kigali Innovation City is a planned tech hub. Rwanda hosts many pan-African tech conferences. Drones for health delivery pioneered here.",
    diaspora_notes:
      "Rwandan diaspora is active in UK, Belgium, USA. Rwanda has created diaspora investment bonds and incentive programs.",
    business_etiquette: [
      "Punctuality is expected and respected",
      "Rwanda is one of Africa's most formal business environments",
      "Clean, professional dress is important",
      "Meetings are structured and efficient",
    ],
  },
  {
    country: "Kenya",
    country_code: "KE",
    capital: "Nairobi",
    population: 55000000,
    gdp: "$115 billion",
    languages: ["English", "Swahili", "Kikuyu", "Luo", "Kamba", "Kalenjin"],
    industries: ["Agriculture", "Tourism", "Financial services", "Tech", "Manufacturing", "Horticulture", "Telecommunications"],
    cultural_notes:
      "Kenya is East Africa's economic hub. Nairobi's Silicon Savannah is a global tech innovation center. M-Pesa, born in Kenya, revolutionized mobile money globally.",
    historical_notes:
      "Home to the Swahili Coast civilization, Maasai Kingdom, and Wanga Kingdom. Kenya gained independence in 1963 under Jomo Kenyatta.",
    historical_empires: ["Wanga Kingdom", "Swahili Coast City-States"],
    ethnic_groups: ["Kikuyu", "Luhya", "Luo", "Kalenjin", "Kamba", "Kisii", "Meru", "Maasai"],
    procurement_links: [
      { name: "Public Procurement Regulatory Authority (PPRA)", url: "https://ppra.go.ke" },
      { name: "Government of Kenya Tenders", url: "https://tenders.go.ke" },
    ],
    youth_programs: [
      "Ajira Digital Program",
      "Uwezo Fund",
      "Youth Enterprise Development Fund (YEDF)",
      "Hustler Fund",
    ],
    women_programs: [
      "Women Enterprise Fund",
      "Equity Bank Wings to Fly for Women",
      "Kenya Women Microfinance Bank",
    ],
    sme_agencies: ["Kenya National Chamber of Commerce (KNCCI)", "Kenya Industrial Estates (KIE)", "Export Promotion Council"],
    startup_notes:
      "iHub Nairobi is one of Africa's first and most influential tech hubs. Kenya's startup ecosystem produced Safaricom, Ushahidi, and many fintech leaders.",
    diaspora_notes:
      "Kenyan diaspora in US, UK, Australia. KNCCI diaspora desk supports investment. Kenya Diaspora Homecoming Summit held annually.",
    business_etiquette: [
      "Firm handshake with direct eye contact is standard",
      "Business relationships are personal — invest time in connection",
      "Kenyans appreciate directness but value courtesy",
      "Swahili greetings show respect: 'Habari yako?'",
    ],
  },
  {
    country: "Morocco",
    country_code: "MA",
    capital: "Rabat",
    population: 37000000,
    gdp: "$142 billion",
    languages: ["Arabic", "Amazigh (Berber)", "French", "Spanish", "Darija"],
    industries: ["Phosphates", "Tourism", "Agriculture", "Automotive", "Aerospace", "Financial services", "Renewable energy"],
    cultural_notes:
      "Morocco bridges Africa and Europe as a gateway country. Casablanca is North Africa's financial capital. Morocco hosts Africa's largest solar plant — Noor Ouarzazate.",
    historical_notes:
      "Seat of powerful empires including the Almoravid, Almohad, Marinid, and Saadian dynasties. The University of Al Quaraouiyine in Fez (founded 859 AD) is the world's oldest university.",
    historical_empires: ["Almoravid Empire", "Almohad Empire", "Marinid Dynasty", "Saadian Dynasty", "Alaoui Dynasty"],
    ethnic_groups: ["Arab-Berber", "Amazigh (Berber)", "Sahrawi", "Gnawa"],
    procurement_links: [
      { name: "Marchés Publics Maroc", url: "https://www.marchespublics.gov.ma" },
      { name: "TENDERS360 Morocco", url: "https://www.tenders360.com/morocco" },
    ],
    youth_programs: [
      "Maroc PME Youth Innovation Program",
      "Centre Régional d'Investissement (CRI) Youth Support",
      "Tamwilcom Youth Credit",
    ],
    women_programs: [
      "Ilayki Women's Entrepreneurship Program",
      "AFEM (Association des Femmes Chefs d'Entreprises du Maroc)",
      "Microfinance for Women (Al Amana)",
    ],
    sme_agencies: ["Maroc PME", "Tamwilcom", "CRI (Regional Investment Centers)", "CGEM"],
    startup_notes:
      "Casablanca Tech City is Morocco's main tech hub. Casablanca Finance City (CFC) provides financial incentives for African-focused businesses. Strong VC ecosystem growing.",
    diaspora_notes:
      "Large Moroccan diaspora in France, Spain, Italy, Netherlands. Morocco's CDG (Caisse de Dépôt et de Gestion) runs diaspora investment programs. MRE (Marocains Résidant à l'Étranger) financial products.",
    business_etiquette: [
      "Greetings involve handshakes and often cheek kisses among acquaintances",
      "Business is relationship-driven — build trust first",
      "Meetings may start late; patience is appreciated",
      "Mint tea ceremonies are hospitality rituals — always accept",
    ],
  },
  {
    country: "South Africa",
    country_code: "ZA",
    capital: "Pretoria",
    population: 60000000,
    gdp: "$418 billion",
    languages: ["Zulu", "Xhosa", "Afrikaans", "Sotho", "Tswana", "English", "Tsonga", "Venda"],
    industries: ["Mining", "Financial services", "Manufacturing", "Agriculture", "Tourism", "Tech", "Retail", "Automotive"],
    cultural_notes:
      "South Africa is the rainbow nation with 11 official languages. Cape Town is a global creative hub. Johannesburg ('Jozi') is Africa's financial powerhouse.",
    historical_notes:
      "Home to the Zulu Kingdom, Ndebele Kingdom, Xhosa chieftaincies, and Sotho-Tswana kingdoms. The fight against Apartheid produced global icons including Nelson Mandela.",
    historical_empires: ["Zulu Kingdom", "Ndebele Kingdom", "Bapedi Kingdom", "Sotho-Tswana Kingdoms"],
    ethnic_groups: ["Zulu", "Xhosa", "Sotho", "Tswana", "Venda", "Tsonga", "Ndebele", "Coloured", "Indian"],
    procurement_links: [
      { name: "National Treasury eTenders", url: "https://etenders.treasury.gov.za" },
      { name: "South African Government Tenders", url: "https://www.gov.za/tenders" },
    ],
    youth_programs: [
      "National Youth Development Agency (NYDA) Grants",
      "Seda (Small Enterprise Development Agency) Youth Fund",
      "Industrial Development Corporation (IDC) Youth Fund",
    ],
    women_programs: [
      "Department of Women, Youth and Persons with Disabilities Grants",
      "SA Women Entrepreneurs Network",
      "Women's Development Business (WDB) Trust",
    ],
    sme_agencies: ["Seda", "SEFA", "IDC", "NEF (National Empowerment Fund)", "NYDA"],
    startup_notes:
      "Cape Town and Johannesburg are Africa's top two startup cities. The 4% Venture Capital Bill provides tax incentives for startup investors. Silicon Cape initiative promotes tech.",
    diaspora_notes:
      "South African diaspora in UK, Australia, USA. SAIIA diaspora engagement programs. Business opportunities in BRICS and African Continental Free Trade Area (AfCFTA).",
    business_etiquette: [
      "South Africa is multicultural — adapt your approach",
      "BEE (Black Economic Empowerment) certification matters for government contracts",
      "Networking events are essential for building business relationships",
      "Dress is professional; punctuality is expected in formal settings",
    ],
  },
  {
    country: "Côte d'Ivoire",
    country_code: "CI",
    capital: "Yamoussoukro",
    population: 27000000,
    gdp: "$73 billion",
    languages: ["French", "Dioula", "Baoulé", "Bété", "Senoufo"],
    industries: ["Cocoa", "Coffee", "Oil & Gas", "Construction", "Financial services", "Telecommunications", "Agriculture"],
    cultural_notes:
      "Côte d'Ivoire produces 40% of the world's cocoa. Abidjan is West Africa's economic capital and most cosmopolitan city. A beacon of stability and investment in the subregion.",
    historical_notes:
      "Home to kingdoms including the Baoule, Kong, and Gyaaman kingdoms. The country gained independence from France in 1960 under Félix Houphouët-Boigny.",
    historical_empires: ["Kong Empire", "Gyaaman Kingdom", "Baoule Kingdom"],
    ethnic_groups: ["Akan", "Gur", "Mande", "Kru", "Lagoon peoples"],
    procurement_links: [
      { name: "Autorité Nationale de Régulation des Marchés Publics (ANRMP)", url: "https://www.anrmp.ci" },
      { name: "Portail des Marchés Publics", url: "https://marchespublics.ci" },
    ],
    youth_programs: [
      "Programme d'Appui à l'Entrepreneuriat Jeune (PAEJ)",
      "Fonds Ivoirien pour le Développement de l'Entreprise Nationale (FIDEN)",
    ],
    women_programs: [
      "Fonds National de la Microfinance (FNM) Women Program",
      "Réseau des Femmes Entrepreneurs de Côte d'Ivoire",
    ],
    sme_agencies: ["CEPICI", "Fonds PME", "FIDEN", "Bourse de Sous-Traitance et de Partenariat (BSTP)"],
    startup_notes:
      "Abidjan is rapidly becoming a francophone tech hub. Orange Digital Center Abidjan supports tech startups. VC4Africa and many impact investors are active.",
    diaspora_notes:
      "Ivorian diaspora mainly in France, Belgium, and North America. MICECI (Ivorians of the World) promotes diaspora investment.",
    business_etiquette: [
      "French is the language of business — basic French proficiency is very appreciated",
      "Business is formal; titles and professional dress matter",
      "Relationships and trust-building precede business transactions",
      "Meetings often end with a shared meal — accept invitations",
    ],
  },
  {
    country: "Guinea",
    country_code: "GN",
    capital: "Conakry",
    population: 13000000,
    gdp: "$18 billion",
    languages: ["French", "Pular", "Mandinka", "Susu"],
    industries: ["Mining (Bauxite, Gold, Iron ore, Diamonds)", "Agriculture", "Fishing", "Hydropower"],
    cultural_notes:
      "Guinea holds 2/3 of the world's bauxite reserves, making it one of Africa's most resource-rich countries. Music and dance are central to Guinean culture — the country is known as the 'Hollywood of African Music'.",
    historical_notes:
      "Part of the ancient Mali Empire and later the Futa Jallon Imamate. Home to the legendary Almamy Samory Touré who resisted French colonization. Guinea was the first French colony to vote for independence in 1958.",
    historical_empires: ["Mali Empire", "Futa Jallon Imamate", "Wassoulou Empire of Samory Touré"],
    ethnic_groups: ["Fula (Pular)", "Mandinka", "Susu", "Kissi", "Toma"],
    procurement_links: [
      { name: "Autorité de Régulation des Marchés Publics Guinée", url: "http://www.armp-guinee.org" },
    ],
    youth_programs: [
      "Fonds de Développement de la Microfinance (FDM) Youth",
      "Programme d'Appui à la Diversification Économique",
    ],
    women_programs: [
      "Agence Nationale de Microfinance (ANMF) Women Program",
      "Réseau des Femmes Rurales de Guinée",
    ],
    sme_agencies: ["AGUIPE", "Centre de Promotion et de Développement Industriel (CPDI)"],
    startup_notes:
      "Conakry's startup scene is nascent but growing. Mining sector opens opportunities for tech solutions in logistics and operations.",
    diaspora_notes:
      "Large Guinean diaspora in Senegal, Côte d'Ivoire, France, and USA. FEGUICARHA (Guinean Community in France) promotes connections.",
    business_etiquette: [
      "French is essential for formal business",
      "Elder respect is very important",
      "Business progresses slowly — patience is critical",
      "Religion plays a role in business timing (prayer times, Ramadan)",
    ],
  },
  {
    country: "Mali",
    country_code: "ML",
    capital: "Bamako",
    population: 22000000,
    gdp: "$19 billion",
    languages: ["French", "Bambara", "Fulfulde", "Dogon", "Tamasheq", "Songhay"],
    industries: ["Gold mining", "Agriculture (cotton)", "Livestock", "Tourism (suspended)", "Crafts"],
    cultural_notes:
      "Mali is home to some of humanity's greatest cultural heritage — Timbuktu, the Djinguereber Mosque, and the Dogon country. The Malian music tradition (blues, kora, balafon) influenced American blues.",
    historical_notes:
      "Home to three of Africa's greatest empires: the Ghana Empire, Mali Empire, and Songhai Empire. Timbuktu was the world's center of Islamic scholarship. Mansa Musa was the richest person in human history.",
    historical_empires: ["Ghana Empire", "Mali Empire", "Songhai Empire", "Bambara Kingdom of Ségou"],
    ethnic_groups: ["Bambara", "Fula", "Sarakole", "Senufo", "Dogon", "Songhai", "Tuareg", "Bozo"],
    procurement_links: [
      { name: "Direction Générale des Marchés Publics et des Délégations de Service Public (DGMP-DSP)", url: "http://www.dgmp.finances.gov.ml" },
    ],
    youth_programs: [
      "APEJ (Agence pour la Promotion de l'Emploi des Jeunes)",
      "Fonds d'Appui à l'Autopromotion des Jeunes (FAAJ)",
    ],
    women_programs: [
      "Fonds de Développement de la Microfinance pour les Femmes",
      "Réseau des Femmes Transformatrices du Mali",
    ],
    sme_agencies: ["APEJ", "API-Mali", "CNPM"],
    startup_notes:
      "Bamako has a growing tech scene despite political challenges. Mobile money solutions and agricultural tech are high-opportunity areas. Jokkolabs Bamako supports entrepreneurs.",
    diaspora_notes:
      "Malian diaspora sends significant remittances mainly from France, Côte d'Ivoire, and other West African countries. FAMA (Fédération des Associations Maliennes en France) is active.",
    business_etiquette: [
      "Greetings are lengthy and important — always ask about family",
      "French is the language of formal business",
      "Business culture is relationship-driven",
      "Hospitality is sacred — accept offered food and tea",
    ],
  },
];

export function getCountryProfile(countryCode: string): CountryProfile | undefined {
  return COUNTRY_PROFILES.find(
    (p) => p.country_code.toLowerCase() === countryCode.toLowerCase() ||
           p.country.toLowerCase() === countryCode.toLowerCase()
  );
}
