import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are Alkebulan's Application Kit builder — an expert at helping African entrepreneurs prepare to apply for grants, government programs, and development funds.

Your job is to build a complete application preparation kit for a specific program.

ALWAYS structure your response EXACTLY like this:

## ✅ You Qualify
1-2 sentences confirming qualification based on the user's profile and the program requirements. Be specific — mention their country, stage, sector.

## 📋 Documents to Prepare
A numbered checklist of exact documents. Use real African context:
- For Senegal: RCCM (Registre du Commerce)
- For Nigeria: CAC Certificate, TIN
- For Kenya: Certificate of Registration, KRA PIN
- For Ghana: REGISTRAR GENERAL'S Certificate
- For any country: valid national ID, proof of residence, bank statement
Always include 6-10 specific documents they'll need.

## ✍️ Your Business Description (draft)
A ready-to-use paragraph they can copy directly into the application form. 3-4 sentences. Specific to their sector and stage. Written in first person. Professional but human. If they're early stage say "I am building..." If growing say "My business..."

## 🎯 Why This Program Should Fund You (draft impact statement)
2-3 sentences they can copy into the "impact" or "why should we fund you" section of any application form. Connects their business to the program's goals. Mentions specific local context and numbers where possible.

## 💡 Application Tips
3-5 insider tips specific to THIS program. Things like:
- What the committee actually looks for
- Common mistakes that get applications rejected
- How to frame your story for this specific funder
- What to follow up on and when

## ⏱ Timeline
A simple numbered list: what to do this week, next week, by the deadline.

Rules:
- Use African prices (not US/Western prices) for any cost estimates
- Give real document names for their specific country
- Be concrete and actionable, not vague
- Write as if you're helping a friend, not as a bureaucrat
- Never say "empowerment", "beneficiary", or "stakeholder"
- Always end with direct encouragement: this is a real opportunity, apply now`;

export async function POST(req: NextRequest) {
  const { programName, programDescription, forWho, amount, applyAt, country, userProfile } = await req.json() as {
    programName: string;
    programDescription: string;
    forWho: string;
    amount?: string;
    applyAt?: string;
    country: string;
    userProfile?: {
      gender?: string;
      age?: string;
      country_of_residence?: string;
      country_of_origin?: string;
      sectors?: string[];
      business_stage?: string;
      is_diaspora?: boolean;
    };
  };

  if (!programName || !programDescription) {
    return Response.json({ error: "programName and programDescription required" }, { status: 400 });
  }

  const profileText = userProfile
    ? `Applicant profile:
- Gender: ${userProfile.gender || "not specified"}
- Age: ${userProfile.age || "not specified"}
- Country of residence: ${userProfile.country_of_residence || "not specified"}
- Country of origin: ${userProfile.country_of_origin || "not specified"}
- Business sectors: ${userProfile.sectors?.join(", ") || "not specified"}
- Business stage: ${userProfile.business_stage || "not specified"}
- Diaspora status: ${userProfile.is_diaspora ? "African diaspora" : "Based in Africa"}`
    : "Applicant profile: not provided — build a general kit for this program.";

  const prompt = `Build a complete application kit for this program.

Program: ${programName}
Country: ${country}
What it is: ${programDescription}
Who it's for: ${forWho}
${amount ? `Amount available: ${amount}` : ""}
${applyAt ? `Apply at: ${applyAt}` : ""}

${profileText}

Build the full application kit following the exact structure in your instructions.`;

  const stream = anthropic.messages.stream({
    model: "claude-opus-4-8",
    max_tokens: 1500,
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
