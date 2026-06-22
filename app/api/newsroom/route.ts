import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import type { WebSearchTool20260209 } from "@anthropic-ai/sdk/resources/messages/messages";
import { requireCronSecret, aiRateLimit } from "@/lib/api-guard";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SEARCH_TOOL: WebSearchTool20260209 = {
  type: "web_search_20260209",
  name: "web_search",
};

const SYSTEM = `You are Amara running the Alkebulan Opportunity Newsroom. Your job: find real, current news about African business opportunities and write compelling news items.

Search the web for news from the last 30–60 days about:
- New grants or funding programs launched across Africa
- New government procurement opportunities or contract awards
- New accelerator programs or startup funds
- Youth and women entrepreneurship fund launches
- Policy changes that create business opportunities
- New development bank programs (AfDB, World Bank, ECOWAS Bank, etc.)
- New donor programs (EU, USAID, GIZ, AFD, TEF, Mastercard Foundation)

Write 5–8 news items. For each item use EXACTLY this format:

---
## [EMOJI] [Compelling headline in plain language]
**Country**: [Country flag + name] | **Category**: [Grant / Contract / Fund / Startup / Policy]

[2–3 sentences. What happened. Who it benefits. The opportunity.]

**What to do**: [One specific action — apply at X / check portal Y / deadline Z]

---

Rules:
- Only write about things you actually found via web search. No fabrication.
- Specific beats general. Name the fund, the amount, the deadline.
- End each item with a concrete action.
- Voice: like a smart friend texting you about money you're leaving on the table.`;

export async function POST(req: NextRequest) {
  // Newsroom uses web search — more expensive. Require cron secret when called
  // server-to-server; fall back to IP rate limit for interactive UI calls.
  const cronDenied = requireCronSecret(req);
  if (cronDenied) {
    const ipDenied = aiRateLimit(req);
    if (ipDenied) return ipDenied;
  }

  const { focus } = await req.json().catch(() => ({ focus: undefined }));

  const prompt = focus
    ? `Search the web and find the latest opportunity news specifically about: ${focus}. Write news items in the standard format.`
    : `Search the web and find the latest African business opportunity news from the last 30–60 days. Cover multiple countries and categories. Write 5–8 news items in the standard format.`;

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 4096,
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
