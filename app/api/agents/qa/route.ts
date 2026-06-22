import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { aiRateLimit } from "@/lib/api-guard";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const PAGE_ROUTES = [
  { path: "/", name: "Home" },
  { path: "/opportunities", name: "Africa is the Opportunity" },
  { path: "/programs", name: "Programs Database" },
  { path: "/dashboard", name: "Funding & Programs" },
  { path: "/goals", name: "My Goals" },
  { path: "/path", name: "Your Path" },
  { path: "/map", name: "Countries Map" },
  { path: "/feed", name: "Feed" },
  { path: "/social", name: "Social Media Agent (Ada)" },
  { path: "/build", name: "What Should I Build?" },
  { path: "/brand", name: "Brand Builder" },
  { path: "/capital", name: "Capital Intelligence" },
  { path: "/capital-stack", name: "Capital Stack" },
  { path: "/afcfta", name: "AfCFTA Navigator" },
  { path: "/bankability", name: "Bankability Engine" },
  { path: "/budget-intel", name: "Budget Intelligence" },
  { path: "/regulatory", name: "Regulatory Map" },
  { path: "/remittance", name: "Remittance → Ownership" },
  { path: "/collective", name: "First-Order Collective" },
  { path: "/succession", name: "Succession Planner" },
  { path: "/assistant", name: "AI Coach (Imani)" },
  { path: "/success", name: "Success Maps" },
  { path: "/agents", name: "AI Agents Hub" },
  { path: "/agents/amara", name: "Amara — Research Agent" },
  { path: "/agents/zuri", name: "Zuri — QA Agent" },
  { path: "/login", name: "Login" },
  { path: "/signup", name: "Signup" },
];

const API_ROUTES = [
  {
    name: "Social Agent API (Ada)",
    path: "/api/social",
    body: { format: "fact", topic: "African agriculture opportunity" },
    expectStream: true,
  },
  {
    name: "AI Engine API",
    path: "/api/ai",
    body: { prompt: "What is one business opportunity in Nigeria?" },
    expectStream: true,
  },
  {
    name: "Explain API",
    path: "/api/explain",
    body: { name: "DER/FJ", what: "Youth and women entrepreneurship fund", for_who: "Senegalese nationals", country: "Senegal" },
    expectStream: true,
  },
  {
    name: "Research Agent API (Amara)",
    path: "/api/agents/research",
    body: { country: "Nigeria", program: "BOI", category: "development_bank" },
    expectStream: true,
  },
];

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req);
  if (limited) return limited;
  const origin = req.headers.get("origin") || `https://${req.headers.get("host")}` || "http://localhost:3000";

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      function send(text: string) {
        controller.enqueue(encoder.encode(text));
      }

      send("# Zuri's QA Report\n");
      send(`**Run started**: ${new Date().toISOString()}\n`);
      send(`**Platform**: ${origin}\n\n`);

      // --- Page route checks ---
      send("## Page routes\n\n");
      const pageResults: { name: string; path: string; status: number; ok: boolean; ms: number }[] = [];

      for (const route of PAGE_ROUTES) {
        const t0 = Date.now();
        try {
          const res = await fetch(`${origin}${route.path}`, {
            signal: AbortSignal.timeout(8000),
            headers: { "User-Agent": "Zuri-QA/1.0" },
          });
          const ms = Date.now() - t0;
          const ok = res.status < 400;
          pageResults.push({ ...route, status: res.status, ok, ms });
          send(`${ok ? "✅" : "❌"} \`${route.path}\` — ${route.name} (${res.status}, ${ms}ms)\n`);
        } catch (e) {
          const ms = Date.now() - t0;
          pageResults.push({ ...route, status: 0, ok: false, ms });
          send(`❌ \`${route.path}\` — ${route.name} (TIMEOUT/ERROR: ${String(e).slice(0, 60)})\n`);
        }
      }

      const pagePassed = pageResults.filter(r => r.ok).length;
      send(`\n**Pages**: ${pagePassed}/${pageResults.length} passing\n\n`);

      // --- API route checks ---
      send("## API routes\n\n");
      const apiResults: { name: string; status: number; ok: boolean; ms: number }[] = [];

      for (const api of API_ROUTES) {
        const t0 = Date.now();
        try {
          const res = await fetch(`${origin}${api.path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "User-Agent": "Zuri-QA/1.0" },
            body: JSON.stringify(api.body),
            signal: AbortSignal.timeout(15000),
          });
          const ms = Date.now() - t0;
          const ok = res.status < 400;
          apiResults.push({ name: api.name, status: res.status, ok, ms });
          send(`${ok ? "✅" : "❌"} ${api.name} (${res.status}, ${ms}ms)\n`);
        } catch (e) {
          const ms = Date.now() - t0;
          apiResults.push({ name: api.name, status: 0, ok: false, ms });
          send(`❌ ${api.name} (TIMEOUT/ERROR: ${String(e).slice(0, 60)})\n`);
        }
      }

      const apiPassed = apiResults.filter(r => r.ok).length;
      send(`\n**APIs**: ${apiPassed}/${apiResults.length} passing\n\n`);

      // --- AI analysis ---
      send("## Zuri's assessment\n\n");

      const allResults = [...pageResults.map(r => `${r.ok ? "PASS" : "FAIL"} ${r.path} (${r.name}) — HTTP ${r.status} — ${r.ms}ms`),
        ...apiResults.map(r => `${r.ok ? "PASS" : "FAIL"} ${r.name} — HTTP ${r.status} — ${r.ms}ms`)];

      const zuriStream = anthropic.messages.stream({
        model: "claude-opus-4-8",
        max_tokens: 1024,
        thinking: { type: "adaptive" },
        system: `You are Zuri, Kebu's Quality Assurance Agent. Your sole job is making sure everything on the platform works perfectly every day. You are precise, direct, and care about the user's experience. Report results clearly, flag anything that needs fixing, and give your overall verdict.`,
        messages: [{
          role: "user",
          content: `Here are the results of my daily QA check. Write a clear assessment:

${allResults.join("\n")}

Tell me:
1. Overall health (one sentence verdict)
2. Any failures and what they mean for users
3. Anything slow (>2000ms) that needs attention
4. Your priority list for the dev team today

Be direct. No padding.`,
        }],
      });

      for await (const event of zuriStream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }

      send(`\n\n---\n*Report by Zuri — ${new Date().toLocaleString()}*\n`);
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
