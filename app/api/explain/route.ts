import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { aiRateLimit } from "@/lib/api-guard";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are Alkebulan's plain-language explainer — you take complex government programs, funds, and grants and explain them like a smart friend texting you.

Rules:
- No jargon. No bureaucratic language. Plain conversational English.
- Keep it to 3–5 short sentences max.
- Always answer: What is it? Who can get it? How much? How to start?
- If the program is specifically for women or youth, say so warmly and directly.
- If it's indigenous/nationals-only, say so clearly but warmly — "This one is specifically for [country] nationals."
- End with one sentence of encouragement: "This is real money. Apply now."
- Never say "empowerment." Never say "beneficiaries." Talk like a friend.`;

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req);
  if (limited) return limited;
  const { name, what, for_who, amount, apply_at, indigenous_note, country, profile } = await req.json();

  if (!name || !what) {
    return Response.json({ error: "name and what are required" }, { status: 400 });
  }

  const profileContext = profile
    ? `The person reading this is: ${profile.gender ? `a ${profile.gender}` : ""}${profile.age ? `, ${profile.age} years old` : ""}${profile.country_of_residence ? `, living in ${profile.country_of_residence}` : ""}${profile.country_of_origin ? `, originally from ${profile.country_of_origin}` : ""}${profile.business_stage ? `, at the ${profile.business_stage} stage` : ""}. Personalize the explanation for them if relevant — e.g. if they're a woman and it's a women's fund, acknowledge that directly and warmly.`
    : "";

  const prompt = `Explain this program simply, like a smart friend texting me about it.

Program: ${name}
Country: ${country || "Africa"}
What it is: ${what}
Who it's for: ${for_who}
${amount ? `Amount: ${amount}` : ""}
${apply_at ? `Where to apply: ${apply_at}` : ""}
${indigenous_note ? `Indigenous note: ${indigenous_note}` : ""}

${profileContext}

Give me a plain-language explanation — no jargon, no bureaucracy. 3–5 short sentences max. Make it feel like opportunity, not paperwork.`;

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 512,
    thinking: { type: "adaptive" },
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
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
