import { NextRequest } from "next/server";
import { analyticsDb } from "@/lib/analytics-store";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  analyticsDb.recordView(slug);
  return Response.json({ ok: true });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return Response.json(analyticsDb.get(slug));
}
