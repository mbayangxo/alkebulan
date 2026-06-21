import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { businessName, country, industry, location, whatYouSell, offerings } = await req.json();

  const offeringList = offerings
    .map((o: { name: string; price?: string }) => `${o.name}${o.price ? ` (${o.price})` : ""}`)
    .join(", ");

  const prompt = `You are a professional copywriter for African businesses. Generate premium website content for this business.

Business name: ${businessName}
Country: ${country}
City / area: ${location || country}
Industry: ${industry}
What they sell or offer: ${whatYouSell}
Their offerings: ${offeringList}

Return ONLY a valid JSON object — no markdown, no explanation, no code fences:
{
  "heroHeadline": "powerful 5-8 word headline specific to this business and African context",
  "heroSubtext": "one compelling sentence, max 18 words, builds desire or trust",
  "tagline": "3-5 word memorable tagline for the business",
  "aboutText": "2 warm, authentic, specific sentences about this business. Max 55 words. Write like a person, not a template.",
  "offeringDescriptions": ["improved description for offering 1 — specific and enticing, max 20 words", "offering 2 description", "...one per offering provided"],
  "colorTheme": "forest"
}

Color theme rules — pick ONE:
- forest: fashion, beauty, lifestyle, general retail
- earth: food, restaurant, catering, crafts, agriculture
- ocean: tech, services, logistics, consulting, education
- flame: bold consumer goods, energy, construction, automotive
- midnight: luxury, professional services, finance, legal

Critical rules:
- heroHeadline must make someone stop scrolling — be bold, specific to their country and product
- aboutText: write "We" not "This business" — write as if you are the owner
- Match the energy of the industry — a catering business in Lagos and a legal firm in Nairobi sound different
- offeringDescriptions array must have exactly the same number of items as offerings provided`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      thinking: { type: "adaptive" },
      messages: [{ role: "user", content: prompt }],
    });

    const textBlock = response.content.find(b => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text in response");
    }

    const parsed = JSON.parse(textBlock.text);
    return Response.json({ success: true, content: parsed });
  } catch (err) {
    console.error("Site generation error:", err);
    return Response.json({ success: false, error: "Generation failed" }, { status: 500 });
  }
}
