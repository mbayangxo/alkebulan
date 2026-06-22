export interface CountryWealth {
  headline: string;
  resources: string[];
  market_size?: string;
}

export const COUNTRY_WEALTH: Record<string, CountryWealth> = {
  "Nigeria": {
    headline: "Africa's largest economy and most populous nation",
    resources: ["Oil & gas", "Cocoa", "Palm oil", "Cassava", "Solid minerals", "Fintech hub", "Nollywood"],
    market_size: "210M consumers · $440B GDP",
  },
  "Ghana": {
    headline: "West Africa's most stable democracy and processing hub",
    resources: ["Cocoa (2nd globally)", "Gold", "Bauxite", "Oil", "Cashew", "Timber", "Tourism"],
    market_size: "33M consumers · $77B GDP",
  },
  "Senegal": {
    headline: "Gateway to Francophone West Africa with emerging oil wealth",
    resources: ["Oil & gas (emerging)", "Phosphates", "Fish", "Groundnuts", "Tourism", "Solar energy"],
    market_size: "17M consumers · $28B GDP",
  },
  "Côte d'Ivoire": {
    headline: "World's cocoa capital and West Africa's commercial hub",
    resources: ["Cocoa (1st globally)", "Cashew (1st globally)", "Palm oil", "Coffee", "Rubber", "Oil"],
    market_size: "27M consumers · $70B GDP",
  },
  "Cameroon": {
    headline: "Central Africa's most diversified agricultural and industrial economy",
    resources: ["Cocoa", "Coffee", "Timber", "Oil", "Rubber", "Bauxite", "Hydropower"],
    market_size: "28M consumers · $45B GDP",
  },
  "Mali": {
    headline: "West Africa's 3rd largest gold producer",
    resources: ["Gold (3rd in Africa)", "Cotton", "Livestock", "Salt", "Phosphates", "Manganese"],
    market_size: "22M consumers · $19B GDP",
  },
  "Burkina Faso": {
    headline: "West Africa's top gold producer with a growing cotton industry",
    resources: ["Gold (1st in West Africa)", "Cotton", "Manganese", "Limestone", "Livestock"],
    market_size: "23M consumers · $19B GDP",
  },
  "Guinea": {
    headline: "Holds 30% of the world's known bauxite reserves",
    resources: ["Bauxite (30% of world supply)", "Gold", "Diamonds", "Iron ore", "Hydropower"],
    market_size: "13M consumers · $16B GDP",
  },
  "Benin": {
    headline: "Key transit gateway between Nigeria and landlocked West Africa",
    resources: ["Cotton", "Palm products", "Cashew", "Shea butter", "Transit trade (Cotonou Port)"],
    market_size: "13M consumers · $18B GDP",
  },
  "Togo": {
    headline: "West Africa's deepest port and 4th largest phosphate producer globally",
    resources: ["Phosphates (4th globally)", "Cotton", "Limestone", "Gold", "Port of Lomé (deepest in West Africa)"],
    market_size: "9M consumers · $9B GDP",
  },
  "Sierra Leone": {
    headline: "World's largest rutile producer with significant diamond and iron ore wealth",
    resources: ["Rutile (1st globally)", "Diamonds", "Iron ore", "Gold", "Bauxite", "Fish"],
    market_size: "8M consumers · $4B GDP",
  },
  "Liberia": {
    headline: "Strategic rubber producer with major iron ore and gold reserves",
    resources: ["Iron ore", "Rubber", "Gold", "Diamonds", "Timber", "Fish"],
    market_size: "5M consumers · $4B GDP",
  },
  "Guinea-Bissau": {
    headline: "6th largest cashew producer in the world — almost entirely exported raw",
    resources: ["Cashew (6th globally — 99% exported raw)", "Fish", "Phosphates", "Timber"],
    market_size: "2M consumers · $1.6B GDP",
  },
  "Gambia": {
    headline: "Tourism destination and groundnut producer with Atlantic Ocean access",
    resources: ["Tourism", "Groundnuts", "Fish", "Trade (re-export to Senegal)"],
    market_size: "2.5M consumers · $2.5B GDP",
  },
  "Cabo Verde": {
    headline: "Atlantic island economy built on tourism and positioning as an Atlantic hub",
    resources: ["Tourism", "Fish", "Solar & wind energy (transition leader)", "Strategic location"],
    market_size: "600K consumers · $2.2B GDP",
  },
  "Kenya": {
    headline: "East Africa's tech and logistics capital",
    resources: ["Tea (2nd globally)", "Coffee", "Horticulture", "Tourism", "Fintech (M-Pesa)", "Livestock", "Geothermal energy"],
    market_size: "56M consumers · $110B GDP",
  },
  "Ethiopia": {
    headline: "Birthplace of coffee with Africa's fastest-growing manufacturing base",
    resources: ["Coffee (original)", "Leather", "Cut flowers (2nd in Africa)", "Gold", "Livestock (1st in Africa)", "Hydropower"],
    market_size: "130M consumers · $130B GDP",
  },
  "Tanzania": {
    headline: "Africa's 4th largest gold producer with world-exclusive tanzanite",
    resources: ["Gold", "Tanzanite (only in Tanzania)", "Coffee", "Tea", "Tourism (Serengeti)", "Natural gas"],
    market_size: "67M consumers · $84B GDP",
  },
  "Uganda": {
    headline: "Pearl of Africa with oil discovery on Lake Albert and world-class agriculture",
    resources: ["Coffee", "Gold", "Oil (Lake Albert)", "Fish (Lake Victoria)", "Tea", "Hydropower"],
    market_size: "49M consumers · $49B GDP",
  },
  "Rwanda": {
    headline: "Africa's fastest-rising economy and tech hub",
    resources: ["Coltan", "Cassiterite", "Coffee", "Tea", "Tourism (mountain gorillas)", "Tech hub"],
    market_size: "14M consumers · $14B GDP",
  },
  "Morocco": {
    headline: "Holds 70% of the world's phosphate reserves — a global industrial kingpin",
    resources: ["Phosphates (70% of world reserves)", "Tourism", "Argan oil", "Fish", "Solar energy", "Automotive manufacturing"],
    market_size: "38M consumers · $130B GDP",
  },
  "Egypt": {
    headline: "Africa's most populous Arab nation — Suez Canal, tourism, and agriculture",
    resources: ["Suez Canal revenues", "Tourism", "Oil & gas", "Cotton", "Phosphates", "Tourism (Nile, Red Sea)"],
    market_size: "107M consumers · $475B GDP",
  },
  "Tunisia": {
    headline: "Mediterranean gateway with phosphates, olive oil, and manufacturing strength",
    resources: ["Phosphates", "Olive oil (4th globally)", "Dates", "Tourism", "Manufacturing (automotive)"],
    market_size: "12M consumers · $47B GDP",
  },
  "Algeria": {
    headline: "Africa's largest country by land area and 4th largest gas producer",
    resources: ["Oil & gas (4th in Africa)", "Iron ore", "Phosphates", "Zinc", "Date palms"],
    market_size: "45M consumers · $212B GDP",
  },
  "South Africa": {
    headline: "Africa's most industrialised economy — platinum, gold, and finance capital",
    resources: ["Platinum (80% of world reserves)", "Gold", "Diamonds", "Coal", "Chrome", "Tourism", "Winemaking"],
    market_size: "62M consumers · $405B GDP",
  },
  "Zimbabwe": {
    headline: "Some of the world's richest mineral deposits under one of Africa's most educated populations",
    resources: ["Platinum (2nd globally)", "Chrome (1st globally)", "Diamonds", "Gold", "Tobacco", "Lithium"],
    market_size: "16M consumers · $25B GDP",
  },
  "Zambia": {
    headline: "Africa's 2nd largest copper producer with emerald and cobalt wealth",
    resources: ["Copper (2nd in Africa)", "Cobalt", "Emeralds", "Gold", "Tobacco", "Agriculture"],
    market_size: "20M consumers · $25B GDP",
  },
  "Mozambique": {
    headline: "One of Africa's largest natural gas discoveries in the last 20 years",
    resources: ["Natural gas (LNG — world scale)", "Coal", "Titanium", "Hydropower", "Tourism (coast)", "Fish"],
    market_size: "33M consumers · $18B GDP",
  },
  "Angola": {
    headline: "Sub-Saharan Africa's 2nd largest oil producer",
    resources: ["Oil (2nd in sub-Saharan Africa)", "Diamonds", "Iron ore", "Copper", "Fish", "Agriculture"],
    market_size: "35M consumers · $90B GDP",
  },
  "Namibia": {
    headline: "World-class diamond, uranium, and emerging green hydrogen exporter",
    resources: ["Diamonds (marine, among world's best quality)", "Uranium (3rd globally)", "Fish", "Lithium (new)", "Green hydrogen (planned)", "Tourism"],
    market_size: "3M consumers · $13B GDP",
  },
  "Botswana": {
    headline: "Diamond capital of the world — transformed a desert economy into middle income in 50 years",
    resources: ["Diamonds (1st globally by value)", "Coal", "Beef", "Tourism (Okavango Delta)", "Solar potential"],
    market_size: "2.7M consumers · $20B GDP",
  },
  "Lesotho": {
    headline: "The kingdom in the sky — water exporter and diamond producer",
    resources: ["Diamonds", "Water (Lesotho Highlands Water Project)", "Wool & mohair", "Tourism"],
    market_size: "2.3M consumers · $2.5B GDP",
  },
  "Eswatini": {
    headline: "Sugar, timber, and industrial production in Southern Africa",
    resources: ["Sugar", "Timber", "Coal", "Diamonds", "Tourism (royal culture)"],
    market_size: "1.2M consumers · $5B GDP",
  },
  "Congo (DRC)": {
    headline: "The world's richest country in raw mineral wealth — cobalt, coltan, copper, gold",
    resources: ["Cobalt (70% of global supply)", "Copper", "Coltan", "Gold", "Diamonds", "Oil", "Hydropower (Congo River)"],
    market_size: "105M consumers · $65B GDP",
  },
  "Gabon": {
    headline: "Oil-rich, forest-covered, and 2nd largest manganese producer in the world",
    resources: ["Oil", "Manganese (2nd globally)", "Timber", "Iron ore", "Fish"],
    market_size: "2.4M consumers · $20B GDP",
  },
  "Congo-Brazzaville": {
    headline: "Oil economy with the world's second-largest tropical rainforest",
    resources: ["Oil", "Timber", "Potash (large deposits)", "Gold", "Rainforest carbon"],
    market_size: "6M consumers · $14B GDP",
  },
  "Central African Republic": {
    headline: "Uranium, diamonds, and gold — one of Africa's most untouched resource frontiers",
    resources: ["Diamonds", "Gold", "Uranium", "Timber", "Cotton"],
    market_size: "5M consumers · $2.5B GDP",
  },
  "Chad": {
    headline: "Oil and livestock economy at the crossroads of Central and North Africa",
    resources: ["Oil", "Cotton", "Livestock (large herd)", "Gum arabic", "Gold"],
    market_size: "18M consumers · $13B GDP",
  },
  "Equatorial Guinea": {
    headline: "Sub-Saharan Africa's 3rd largest oil producer per capita",
    resources: ["Oil & gas", "Cocoa", "Timber", "Fish"],
    market_size: "1.5M consumers · $11B GDP",
  },
  "São Tomé & Príncipe": {
    headline: "Cocoa heritage islands with emerging ecotourism and oil potential",
    resources: ["Cocoa (heritage quality)", "Tourism (ecotourism)", "Fish", "Oil (offshore, potential)"],
    market_size: "230K consumers · $600M GDP",
  },
  "Burundi": {
    headline: "Coffee, nickel, and coltan — one of East Africa's most resource-dense small nations",
    resources: ["Coffee", "Nickel", "Gold", "Coltan", "Peat", "Tungsten"],
    market_size: "13M consumers · $3.5B GDP",
  },
  "Comoros": {
    headline: "Vanilla and ylang-ylang islands — world leader in essential oil production",
    resources: ["Ylang-ylang (1st globally)", "Vanilla", "Cloves", "Fish", "Tourism"],
    market_size: "900K consumers · $1.4B GDP",
  },
  "Djibouti": {
    headline: "East Africa's strategic port — the gateway for Ethiopian and landlocked trade",
    resources: ["Strategic port location", "Salt", "Trade corridor (Ethiopia → world)", "Geothermal energy"],
    market_size: "1M consumers · $3.8B GDP",
  },
  "Somalia": {
    headline: "Largest camel herd in the world, frankincense, and Africa's longest coastline",
    resources: ["Livestock (world's largest camel herd)", "Frankincense", "Fish (unexploited)", "Telecom & mobile money"],
    market_size: "18M consumers · $10B GDP",
  },
  "South Sudan": {
    headline: "Oil reserves and agricultural potential in one of Africa's newest nations",
    resources: ["Oil (significant reserves)", "Timber", "Livestock", "Hydropower (Nile)", "Agriculture"],
    market_size: "12M consumers · $4B GDP",
  },
  "Sudan": {
    headline: "Africa's 3rd largest country — gold, cotton, and Nile agriculture",
    resources: ["Gold (3rd in Africa)", "Cotton", "Sesame (1st globally)", "Livestock", "Gum arabic (80% of global supply)"],
    market_size: "48M consumers · $34B GDP",
  },
  "Eritrea": {
    headline: "Untapped copper, gold, and potash along a strategic Red Sea coast",
    resources: ["Copper", "Gold", "Zinc", "Potash", "Salt (Red Sea coast)", "Fish"],
    market_size: "3.5M consumers · $2B GDP",
  },
  "Madagascar": {
    headline: "Produces half the world's vanilla — plus sapphires, chromite, and unique biodiversity",
    resources: ["Vanilla (50% of global supply)", "Sapphires", "Chromite", "Nickel", "Ilmenite", "Cloves", "Biodiversity tourism"],
    market_size: "29M consumers · $14B GDP",
  },
  "Malawi": {
    headline: "Tobacco, tea, and uranium in the warm heart of Africa",
    resources: ["Tobacco", "Tea", "Uranium", "Sugar", "Cotton", "Limestone"],
    market_size: "20M consumers · $13B GDP",
  },
  "Mauritania": {
    headline: "Iron ore, fish, and emerging oil — the land where Sahara meets Atlantic",
    resources: ["Iron ore (among Africa's largest)", "Fish (highly unexploited)", "Gold", "Oil (emerging)", "Copper"],
    market_size: "4.7M consumers · $10B GDP",
  },
  "Niger": {
    headline: "7th largest uranium producer globally — plus oil and agriculture potential",
    resources: ["Uranium (7th globally)", "Gold", "Oil", "Livestock", "Cowpeas (largest producer globally)"],
    market_size: "26M consumers · $14B GDP",
  },
  "Seychelles": {
    headline: "Indian Ocean paradise — tourism, fisheries, and blue economy leader",
    resources: ["Tourism", "Fish (tuna hub)", "Blue economy", "Offshore finance"],
    market_size: "100K consumers · $2B GDP",
  },
  "Mauritius": {
    headline: "Africa's highest-income economy — finance, tourism, and manufacturing",
    resources: ["Offshore financial hub", "Tourism", "Sugar", "Textiles & manufacturing"],
    market_size: "1.3M consumers · $14B GDP",
  },
  "Libya": {
    headline: "Africa's largest proven oil reserves per square kilometre",
    resources: ["Oil (1st in Africa by reserves)", "Natural gas", "Gypsum", "Limestone"],
    market_size: "7M consumers · $44B GDP",
  },
};
