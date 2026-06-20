import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { prompt, system } = await req.json();

  if (!prompt) {
    return Response.json({ error: "prompt is required" }, { status: 400 });
  }

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 4096,
    thinking: { type: "adaptive" },
    system: system || "You are an expert in African business, finance, and entrepreneurship. You help African founders, entrepreneurs, and diaspora access funding, navigate regulations, and build generational wealth.",
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
      "X-Content-Type-Options": "nosniff",
    },
  });
}
