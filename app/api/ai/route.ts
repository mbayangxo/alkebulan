import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { aiRateLimit, clamp } from "@/lib/api-guard";

const SYSTEM = "You are an expert in African business, finance, and entrepreneurship. You help African founders, entrepreneurs, and diaspora access funding, navigate regulations, and build generational wealth.";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req);
  if (limited) return limited;
  const { prompt } = await req.json();

  if (!prompt) {
    return Response.json({ error: "prompt is required" }, { status: 400 });
  }

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 4096,
    thinking: { type: "adaptive" },
    system: SYSTEM,
    messages: [{ role: "user", content: clamp(prompt, 8000) }],
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
      "X-Content-Type-Options": "nosniff",
    },
  });
}
