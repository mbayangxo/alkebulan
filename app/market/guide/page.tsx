"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/app/components/nav";

const VALUE_ADD_EXAMPLES = [
  {
    raw: "Fresh tomatoes",
    raw_price: "GHS 2 / kg",
    processed: "Tomato paste (canned)",
    processed_price: "GHS 120 / kg equivalent",
    multiplier: "60×",
    currency: "Ghana",
    how: "Solar dryer → blender → sterilized jar or tin seal. Equipment: $1,500–$5,000. Market: restaurants, households, hotels.",
  },
  {
    raw: "Raw cashew nuts",
    raw_price: "XOF 200 / kg",
    processed: "Roasted & packaged cashews",
    processed_price: "XOF 2,000–4,000 / kg",
    multiplier: "10–20×",
    currency: "West Africa",
    how: "Roasting drum + packaging machine. Equipment: $2,000–$8,000. Market: supermarkets, airports, hotels, export to Europe.",
  },
  {
    raw: "Raw milk",
    raw_price: "KES 35 / litre",
    processed: "Yoghurt (packaged)",
    processed_price: "KES 240 / litre equivalent",
    multiplier: "7×",
    currency: "Kenya",
    how: "Pasteuriser + yoghurt cultures + clean packaging. Equipment: $3,000–$10,000. Market: schools, supermarkets, urban households.",
  },
  {
    raw: "Fresh mangoes",
    raw_price: "XOF 100 / kg",
    processed: "Dried mango slices",
    processed_price: "XOF 1,500–2,500 / kg",
    multiplier: "15–25×",
    currency: "West Africa",
    how: "Solar dryer (DIY: $200–$800). 7 kg fresh = 1 kg dried. Shelf life: 6–12 months. Market: export, urban retail, airlines.",
  },
  {
    raw: "Raw groundnuts",
    raw_price: "XOF 200 / kg",
    processed: "Peanut butter (branded jar)",
    processed_price: "XOF 1,200–2,000 / kg",
    multiplier: "6–10×",
    currency: "West Africa",
    how: "Roaster + grinder + jar sealer. Equipment: $500–$3,000. Market: schools, supermarkets, households — peanut butter is one of the fastest-growing packaged food categories in Africa.",
  },
  {
    raw: "Shea nuts",
    raw_price: "XOF 150 / kg",
    processed: "Shea butter (food-grade or cosmetic)",
    processed_price: "XOF 2,500–5,000 / kg",
    multiplier: "17–33×",
    currency: "West Africa",
    how: "Traditional processing or mechanical press. 4–5 kg nuts = 1 kg butter. European cosmetic brands pay premium for certified organic. Market: local cosmetics + export.",
  },
  {
    raw: "Raw cassava",
    raw_price: "NGN 50 / kg",
    processed: "Cassava flour (HQCF)",
    processed_price: "NGN 300–500 / kg",
    multiplier: "6–10×",
    currency: "Nigeria",
    how: "Grater + press + dryer + miller. Equipment: $2,000–$7,000. Market: bakeries (replacing wheat flour — Nigerian government mandates 10% cassava in bread), households.",
  },
];

const SPOILAGE_SOLUTIONS = [
  {
    name: "Zeer pot (evaporative cooling)",
    cost: "Zero — made from two clay pots and wet sand",
    what_it_does: "Drops temperature by 15–20°C inside the inner pot using water evaporation. Keeps vegetables fresh for 2–3 weeks instead of 2–3 days. No electricity required.",
    how: "Outer clay pot → layer of wet sand → inner clay pot → vegetables → wet cloth on top. Keep the sand moist. The evaporation does the work.",
    best_for: "Leafy vegetables, tomatoes, peppers, okra. Used successfully by farmers in Niger, Nigeria's Kano State, and across the Sahel.",
    source: "Developed by Mohammed Bah Abba (Nigerian) — his zeer pot won the World Shellfish Innovation Award 2001.",
  },
  {
    name: "Solar dryer (DIY)",
    cost: "$200–$800 for a family-scale unit. $2,000–$8,000 for commercial scale.",
    what_it_does: "Reduces moisture content in fruits, vegetables, and fish to safe storage levels. Extends shelf life from days to 6–18 months. Produces a product that sells at 10–25× the raw price.",
    how: "Slanted wooden or metal frame with transparent polycarbonate sheet on top. Black mesh or tray inside absorbs heat. Air flows through to remove moisture. Build time: 1–3 days with local materials.",
    best_for: "Mangoes, tomatoes, chilies, fish, moringa, bananas. Anything you currently lose to overripe spoilage.",
    source: "ITDG / Practical Action has free DIY solar dryer designs. Food and Agriculture Organization has downloadable manuals.",
  },
  {
    name: "ColdHubs solar cold room",
    cost: "NGN 500–1,000 per crate per day to rent. Or build your own: $15,000–$40,000 for a 3-tonne cold room.",
    what_it_does: "Maintains 10°C temperature using solar panels + battery storage. Keeps produce fresh for 21 days instead of 2–4. Farmers store until price is right instead of selling at a loss during glut.",
    how: "Developed by Nnaemeka Ikegwuonu (Nigerian) who built 50+ solar cold rooms in Nigerian rural markets. Business model: farmers pay per crate. No electricity bills. Operates 24/7 off-grid.",
    best_for: "Any fresh produce — tomatoes, peppers, leafy greens, fruits. Most powerful for market traders and aggregators.",
    source: "ColdHubs.com (Nigeria). Similar models: Kitovu (Uganda), Fresh Box (Kenya), SunCulture cold storage.",
  },
  {
    name: "Warehouse receipt system",
    cost: "Storage fee (varies — roughly 0.5–1% of commodity value per month)",
    what_it_does: "Store grain in a certified warehouse. Receive a formal receipt. Use the receipt as loan collateral — the bank lends you 60–80% of the commodity's value. Wait for prices to rise before selling.",
    how: "Farmers currently sell immediately after harvest when prices are lowest. A warehouse receipt lets you store grain, access cash now (as a loan against the commodity), and sell when the price rises 20–40% (usually 3–6 months later).",
    best_for: "Maize, rice, sorghum, beans, groundnuts. Any storable grain or commodity.",
    source: "East Africa Grain Council (EAGC), WAEMU warehouse receipt program (West Africa), USAID-backed warehouse receipt systems in Kenya, Ethiopia, Tanzania.",
  },
  {
    name: "Modified atmosphere bags (hermetic storage)",
    cost: "$0.05–$0.15 per kg of grain stored",
    what_it_does: "Airtight triple-layer plastic bags that deprive insects of oxygen. Stores grain for 12+ months with no pesticides, no losses, no need for electricity.",
    how: "Fill the bag with dried grain. Seal completely airtight using heat or twist-tie method. No air in = no insects. No insects = no losses. Simple, effective, and scalable.",
    best_for: "Any dried grain: maize, rice, sorghum, millet, cowpeas. One bag can store 50–100 kg.",
    source: "PICS bags (Purdue Improved Crop Storage) — available across West Africa through agricultural input dealers. IRRI Super Bag (Asia/Africa). Cost-effective at any scale.",
  },
  {
    name: "Wax coating for fruits",
    cost: "Food-grade wax: approximately $2–$5 per kg, coating roughly 50–100 fruits",
    what_it_does: "Replaces the natural wax coating removed during washing. Slows water loss and respiration. Extends shelf life of citrus, mangoes, and avocados by 1–3 weeks.",
    how: "Melt food-grade carnauba or beeswax. Apply a thin coat by dipping, spraying, or brushing. Let dry. Simple, low-tech, and legal for export (must declare coating for international standards).",
    best_for: "Oranges, lemons, mangoes, avocados. Any smooth-skinned fruit you sell to supermarkets, hotels, or export.",
    source: "Standard practice in any fresh produce export business. Food-grade wax available from agricultural input suppliers.",
  },
];

const SUCCESS_STORIES = [
  {
    name: "Nnaemeka Ikegwuonu — ColdHubs (Nigeria)",
    summary: "Nnaemeka grew up watching Nigerian farmers lose 40% of their tomato harvest to spoilage. He built solar-powered cold rooms and put them in rural markets across Nigeria. Farmers pay per crate per day — no electricity bill, no refrigerator purchase. By 2023, ColdHubs had 50+ units protecting 15M kg of produce annually. He turned a farm problem into a subscription business.",
    lesson: "The problem is your business. If farmers near you are throwing away produce, the cold chain is your market.",
    type: "Cold chain",
  },
  {
    name: "Juliet Kehinde — Tomato Jos (Nigeria)",
    summary: "Juliet built a tomato processing and farming business in Kaduna state that connects smallholder tomato farmers to industrial buyers. Farmers grow on her model farm, get guaranteed purchase. She processes into tomato paste sold to Nigerian food companies. Her model removes the middleman and doubles what farmers earn per kg.",
    lesson: "Contract farming — guarantee purchase before farmers plant — removes uncertainty and builds loyalty. The processing plant is your leverage.",
    type: "Agri-processing",
  },
  {
    name: "Agnes Ntow — shea butter exporter (Ghana)",
    summary: "Agnes organises women shea collectors in Northern Ghana through a cooperative. She processes, certifies organic, and exports directly to European cosmetics companies — bypassing the trading companies that used to take 60% of the margin. Cooperative volume gives her the minimum order quantities European buyers need.",
    lesson: "Certification (organic, fair trade, Rainforest Alliance) transforms a commodity into a premium product for export. A cooperative gets you to the volume buyers require.",
    type: "Cooperative export",
  },
  {
    name: "Arlene Samen — vertical cassava integration (Nigeria)",
    summary: "Runs an agri-processing business that buys cassava from farmers at guaranteed prices, produces High Quality Cassava Flour (HQCF), and sells to bakeries replacing 10–20% of wheat flour in bread. Nigerian government policy mandates cassava flour content in bread — she built a business on a policy mandate.",
    lesson: "Government procurement mandates (cassava flour, local content in construction, etc.) create guaranteed markets. Read the policies.",
    type: "Policy-backed processing",
  },
];

const SELLER_EARNINGS_TABLE = [
  { product: "Fresh tomatoes (1 tonne)", raw_income: "GHS 2,000", processed_income: "GHS 120,000", processing_cost: "GHS 15,000", net_uplift: "GHS 103,000" },
  { product: "Cashews (100 kg)", raw_income: "XOF 20,000", processed_income: "XOF 200,000–400,000", processing_cost: "XOF 30,000", net_uplift: "XOF 150,000–350,000" },
  { product: "Mangoes (100 kg fresh)", raw_income: "XOF 10,000", processed_income: "XOF 200,000 (14 kg dried)", processing_cost: "XOF 5,000 (solar only)", net_uplift: "XOF 185,000" },
  { product: "Milk (100 litres)", raw_income: "KES 3,500", processed_income: "KES 24,000 (yoghurt)", processing_cost: "KES 4,000", net_uplift: "KES 16,500" },
  { product: "Groundnuts (50 kg)", raw_income: "XOF 10,000", processed_income: "XOF 60,000–100,000", processing_cost: "XOF 5,000", net_uplift: "XOF 45,000–85,000" },
];

type SectionKey = "value" | "spoilage" | "stories" | "sellers";

const SECTIONS: { key: SectionKey; label: string }[] = [
  { key: "value", label: "The value-add opportunity" },
  { key: "spoilage", label: "Spoilage solutions" },
  { key: "stories", label: "Producers who built businesses" },
  { key: "sellers", label: "For B2B sellers: what you earn" },
];

export default function MarketGuidePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("value");

  return (
    <div className="min-h-screen bg-warm-ivory">
      <Nav />

      {/* Hero */}
      <div className="bg-deep-green text-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <Link href="/market" className="text-gold/70 hover:text-gold text-sm mb-6 inline-block">
            ← Market
          </Link>
          <h1 className="font-display text-4xl font-bold mb-4">
            Producers & Sellers:<br />
            <span className="text-gold">Here is what you can actually make.</span>
          </h1>
          <p className="text-ivory/80 text-lg max-w-3xl leading-relaxed">
            If you are growing, making, or sourcing anything — you are sitting on more money than you think.
            The gap between raw price and processed price is where fortunes are built.
            This guide shows you the numbers, the spoilage solutions, and the real people who built businesses doing exactly what you are doing now.
          </p>
        </div>
      </div>

      {/* Section tabs */}
      <div className="sticky top-16 z-40 bg-white border-b border-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {SECTIONS.map(s => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                  activeSection === s.key
                    ? "border-deep-green text-deep-green"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* VALUE ADD */}
        {activeSection === "value" && (
          <div>
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-ink mb-3">
                Raw vs. processed: the real numbers
              </h2>
              <p className="text-muted leading-relaxed max-w-3xl">
                Every raw product you sell has a processed version that sells for 5–60× more.
                The difference between a farmer who earns GHS 2/kg and a food processor who earns GHS 120/kg
                is not intelligence — it is one piece of equipment and some packaging.
                Here are the real numbers.
              </p>
            </div>

            <div className="space-y-5">
              {VALUE_ADD_EXAMPLES.map((ex, i) => (
                <div key={i} className="bg-white border border-sand rounded-2xl p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-5">
                    <div className="bg-red-earth/10 border border-red-earth/20 rounded-xl p-4">
                      <p className="text-xs font-bold text-red-earth uppercase mb-1">Raw (what you sell now)</p>
                      <p className="font-bold text-ink text-lg">{ex.raw}</p>
                      <p className="text-2xl font-bold text-red-earth mt-2">{ex.raw_price}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-deep-green">{ex.multiplier}</p>
                        <p className="text-xs text-muted">more income</p>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                      <p className="text-xs font-bold text-green-700 uppercase mb-1">Processed (what you could earn)</p>
                      <p className="font-bold text-ink text-lg">{ex.processed}</p>
                      <p className="text-2xl font-bold text-green-700 mt-2">{ex.processed_price}</p>
                    </div>
                  </div>
                  <div className="bg-warm-ivory border border-sand rounded-xl p-4">
                    <p className="text-xs font-bold text-ink uppercase mb-1">How you get there ({ex.currency})</p>
                    <p className="text-sm text-muted leading-relaxed">{ex.how}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-deep-green text-ivory rounded-2xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-3">The math is on your side.</h3>
              <p className="text-ivory/70 mb-6 max-w-xl mx-auto">
                Processing equipment, grants, and development loans exist specifically to help producers make this jump.
                Find the financing for your product category.
              </p>
              <Link href="/opportunities" className="bg-gold text-deep-green font-bold px-8 py-3 rounded-xl hover:bg-gold-light transition-colors">
                Find processing grants & loans →
              </Link>
            </div>
          </div>
        )}

        {/* SPOILAGE */}
        {activeSection === "spoilage" && (
          <div>
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-ink mb-3">Spoilage solutions that actually work</h2>
              <p className="text-muted leading-relaxed max-w-3xl">
                African producers lose 30–50% of fresh produce to spoilage before it reaches buyers.
                That is not a farming problem — it is a storage and cold chain problem.
                Every solution below has been built and proven by Africans, for African conditions.
                Most cost less than you think.
              </p>
            </div>

            <div className="space-y-5">
              {SPOILAGE_SOLUTIONS.map((sol, i) => (
                <div key={i} className="bg-white border border-sand rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl font-bold text-ink">{sol.name}</h3>
                    <span className="bg-gold/20 text-gold-dark text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {sol.cost}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-warm-ivory border border-sand rounded-xl p-4">
                      <p className="text-xs font-bold text-ink uppercase mb-2">What it does</p>
                      <p className="text-sm text-muted leading-relaxed">{sol.what_it_does}</p>
                    </div>
                    <div className="bg-warm-ivory border border-sand rounded-xl p-4">
                      <p className="text-xs font-bold text-ink uppercase mb-2">How it works</p>
                      <p className="text-sm text-muted leading-relaxed">{sol.how}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 bg-green-50 border border-green-100 rounded-xl p-3">
                      <p className="text-xs font-bold text-green-700 uppercase mb-1">Best for</p>
                      <p className="text-sm text-ink">{sol.best_for}</p>
                    </div>
                    <div className="flex-1 bg-indigo/8 border border-indigo/20 rounded-xl p-3">
                      <p className="text-xs font-bold text-indigo uppercase mb-1">Where to get it</p>
                      <p className="text-sm text-ink">{sol.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUCCESS STORIES */}
        {activeSection === "stories" && (
          <div>
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-ink mb-3">Producers who built real businesses</h2>
              <p className="text-muted leading-relaxed max-w-3xl">
                These are not stories about people who got lucky or had connections.
                These are people who identified a gap between raw production and processed value,
                built the bridge, and created businesses that pay them and their communities.
              </p>
            </div>

            <div className="space-y-5">
              {SUCCESS_STORIES.map((story, i) => (
                <div key={i} className="bg-white border border-sand rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-deep-green/10 text-deep-green text-xs font-bold px-2.5 py-1 rounded-full">
                      {story.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-3">{story.name}</h3>
                  <p className="text-muted leading-relaxed mb-4">{story.summary}</p>
                  <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                    <p className="text-xs font-bold text-gold-dark uppercase mb-1">The lesson</p>
                    <p className="text-sm text-ink font-medium">{story.lesson}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-muted mb-4">Ready to list your product and find B2B buyers?</p>
              <Link href="/market/new" className="bg-deep-green text-ivory font-bold px-8 py-4 rounded-xl hover:bg-mid-green transition-colors">
                List on the market →
              </Link>
            </div>
          </div>
        )}

        {/* B2B SELLERS */}
        {activeSection === "sellers" && (
          <div>
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-ink mb-3">What you can earn as a B2B seller</h2>
              <p className="text-muted leading-relaxed max-w-3xl">
                Selling wholesale to businesses — restaurants, food processors, hotels, manufacturers —
                means bigger orders, fewer transactions, and predictable income.
                Here is what the numbers look like for different product categories.
              </p>
            </div>

            {/* Earnings table */}
            <div className="bg-white border border-sand rounded-2xl overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-sand">
                <h3 className="font-semibold text-ink">Raw vs. processed wholesale earnings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-warm-ivory border-b border-sand">
                      <th className="px-6 py-3 text-left text-xs font-bold text-muted uppercase">Product</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-muted uppercase">Raw income</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-muted uppercase">Processed income</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-muted uppercase">Processing cost</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-deep-green uppercase">Net gain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand">
                    {SELLER_EARNINGS_TABLE.map((row, i) => (
                      <tr key={i} className="hover:bg-warm-ivory/50">
                        <td className="px-6 py-4 font-medium text-ink">{row.product}</td>
                        <td className="px-6 py-4 text-red-earth">{row.raw_income}</td>
                        <td className="px-6 py-4 text-green-700 font-semibold">{row.processed_income}</td>
                        <td className="px-6 py-4 text-muted">{row.processing_cost}</td>
                        <td className="px-6 py-4 font-bold text-deep-green">{row.net_uplift}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Practical seller tips */}
            <div className="space-y-5 mb-10">
              <h3 className="font-display text-xl font-bold text-ink">How to set yourself up for wholesale success</h3>

              {[
                {
                  title: "Price for volume, not for maximum margin",
                  body: "A restaurant that buys 100 kg of groundnut paste from you every month at XOF 1,000/kg is worth more than a customer who buys 2 kg at XOF 1,200. Build your business around the volume buyer. Give them a reason to stay by being reliable, consistent, and easy to re-order from.",
                },
                {
                  title: "Consistency is your product, not just the food",
                  body: "Commercial buyers will drop you the moment your quality varies. They are not buying tomato paste — they are buying the certainty of tomato paste. Standardise your production process: same recipe, same processing time, same packaging every batch. A professional buyer will visit your facility before placing a large order.",
                },
                {
                  title: "Get certified — even basic certification 10× your options",
                  body: "A simple health inspection certificate from your local government's food safety authority is the minimum. This lets you sell to hotels, supermarkets, and institutions that cannot legally buy from uncertified producers. Organic or fair trade certification opens European export markets. The certification process teaches you the quality standards you need to meet anyway.",
                },
                {
                  title: "Professional packaging changes the price you can charge",
                  body: "The same groundnut paste in a plain plastic bag sells for XOF 800. In a properly labelled glass jar with a tamper-evident seal, it sells for XOF 1,500–2,000. Packaging is your marketing. It signals quality, safety, and seriousness to any buyer who sees it for the first time. Budget 10–15% of your production cost for packaging.",
                },
                {
                  title: "Become the most reliable supplier before you scale",
                  body: "The most common reason good producers lose accounts is not price — it is inconsistency. Before you try to add 5 more clients, serve your first 2–3 clients so well that they never think of switching. Reliability is a competitive advantage that very few agricultural producers have. Become the person who always delivers, always on time, always same quality. Word of mouth does the rest.",
                },
              ].map((tip, i) => (
                <div key={i} className="bg-white border border-sand rounded-xl p-5">
                  <h4 className="font-semibold text-ink mb-2">{i + 1}. {tip.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{tip.body}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-deep-green text-ivory rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-3">Ready to find buyers?</h3>
              <p className="text-ivory/70 mb-6">List your product on the Kebu B2B Market. Buyers looking for exactly what you produce are already here.</p>
              <Link href="/market/new" className="bg-gold text-deep-green font-bold px-8 py-3 rounded-xl hover:bg-gold-light transition-colors">
                Create your listing →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
