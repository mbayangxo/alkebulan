import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { aiRateLimit } from "@/lib/api-guard";
import type { WebSearchTool20260209 } from "@anthropic-ai/sdk/resources/messages/messages";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SEARCH_TOOL: WebSearchTool20260209 = {
  type: "web_search_20260209",
  name: "web_search",
};

const SYSTEM = `You are Kwame, Alkebulan's Growth Agent. You help African entrepreneurs find growth levers: communities to join, influencers to partner with, distribution channels, B2B opportunities, and strategic partnerships.

Your tone: strategic, direct, like a growth advisor who has scaled businesses across Africa.

When given a business type, sector, and country — you search the web to find:
1. Active communities (WhatsApp groups, Facebook groups, LinkedIn groups, trade associations) for that sector in that country
2. Key influencers and content creators in the space who partner with brands
3. Distribution channels they may be missing (retailers, marketplaces, resellers, NGO procurement)
4. B2B partnerships and institutional buyers (hotels, hospitals, schools, government agencies that buy this product/service)
5. One underrated growth move specific to their context

Format each section with a clear header (## Section), concrete names, handles, or links where possible, and end with a "→ This week's move:" action step.

Rules:
- Only report what you actually find via search. No generic advice.
- Be specific. Name the association, the group, the influencer's handle.
- Africa-specific. Local beats global.
- Think like a builder, not a consultant.`;

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req);
  if (limited) return limited;
  const { business, sector, country, stage } = await req.json();

  if (!country) {
    return Response.json({ error: "country is required" }, { status: 400 });
  }

  const prompt = `Find growth opportunities for this African business:

Business: ${business || "small business"}
Sector: ${sector || "general"}
Country: ${country}
Stage: ${stage || "early stage"}

Search the web and find:
1. Communities, trade associations, and networks for this sector in ${country}
2. Key influencers and creators in this space (with handles/pages if possible)
3. Distribution channels and marketplaces they could use
4. Institutional buyers (B2B opportunities — who buys this at scale?)
5. One underrated growth move

For each section give 2–4 specific, named options — not generic categories. End with one concrete "This week's move" action.`;

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 3000,
    thinking: { type: "adaptive" },
    tools: [SEARCH_TOOL],
    system: SYSTEM,
    messages: [{ role: "user", content: prompt }],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }
      controller.close();
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Transfer-Encoding": "chunked" },
  });
}
