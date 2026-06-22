import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { aiRateLimit } from "@/lib/api-guard";
import type { WebSearchTool20260209 } from "@anthropic-ai/sdk/resources/messages/messages";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const AMARA_SYSTEM = `You are Amara — Kebu's Research Intelligence Agent. Your sole job is to find every funding opportunity, grant, loan, government contract, and development program across all 54 African countries and explain exactly how to access them.

You have access to web search. USE IT. Search for the most current, specific information. Do not rely on general knowledge — find live data.

Your output format for every research request is ALWAYS this structure:

# [Program Name] — [Country Flag] [Country]
**Type**: [Youth Fund / Women Fund / Government Contract / Development Bank / Donor Grant / Startup Fund]
**Researched**: [today's date]
**Status**: [Active / Accepting applications / Closed until X / Ongoing]

## What it is (plain language)
[2–3 sentences. Talk like a smart friend who just found out about this. No jargon.]

## Who qualifies
[Bullet list of eligibility. Be specific. Age ranges, nationality, registration requirements, sector restrictions.]
-
-

## How much
[Be specific with amounts, ranges, and currency. If tiered, show the tiers.]

## Application checklist
[Step-by-step. Number them. Make each step a checkbox the person can actually tick.]
- [ ] Step 1: ...
- [ ] Step 2: ...
- [ ] Step 3: ...

## Documents required
[Exact list of documents needed]
- [ ] ...
- [ ] ...

## Where to apply
- **Website**: [URL if found]
- **Office**: [Physical location if relevant]
- **Phone/Email**: [Contact if found]
- **Deadline**: [Current deadline or cycle info]

## Latest news
[From web search: any current news about the program, recent disbursements, new rounds, policy changes, budget updates]

## Insider tip
[One piece of advice a local would know — common application mistakes, what makes applications stand out, unofficial channels]

Be thorough. Be current. Be specific. This person is going to USE this information today.`;

const SEARCH_TOOL: WebSearchTool20260209 = {
  type: "web_search_20260209",
  name: "web_search",
};

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req);
  if (limited) return limited;
  const { country, program, category, question } = await req.json();

  if (!country && !program && !question) {
    return Response.json({ error: "At least one of country, program, or question is required" }, { status: 400 });
  }

  const prompt = question
    ? question
    : `Research the following in depth and produce a complete guide with checklist:

${program ? `Program: ${program}` : ""}
${country ? `Country: ${country}` : ""}
${category ? `Category: ${category}` : ""}

Search the web for the most current information. Find:
1. The official program page and any recent updates
2. Current application status and deadlines
3. Exact eligibility criteria
4. Step-by-step application process
5. Required documents
6. Amounts available
7. Contact information
8. Any recent news about changes to the program

Then produce the full research report in the standard format.`;

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 8192,
    thinking: { type: "adaptive" },
    tools: [SEARCH_TOOL],
    system: AMARA_SYSTEM,
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
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
