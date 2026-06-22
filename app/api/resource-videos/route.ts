import { NextRequest, NextResponse } from "next/server";

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

const RESOURCE_QUERIES: Record<string, string> = {
  cocoa:       "cocoa chocolate cacao farming Africa",
  coffee:      "coffee harvesting Ethiopia Africa",
  fish:        "fishing Africa ocean lake market",
  fruits:      "tropical fruits Africa mango banana market",
  cotton:      "cotton farming harvest Africa",
  coltan:      "mining Africa minerals coltan",
  remittance:  "money transfer Africa mobile payment",
  farming:     "farming agriculture Africa harvest",
  market:      "African market food trading commerce",
  ocean:       "ocean fishing boat Africa atlantic",
};

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q") || "Africa farming";
  const perPage = Math.min(parseInt(req.nextUrl.searchParams.get("per_page") || "4"), 8);

  const searchQuery = RESOURCE_QUERIES[query] || query;

  if (!PEXELS_API_KEY) {
    return NextResponse.json({ error: "PEXELS_API_KEY not configured", videos: [] }, { status: 503 });
  }

  try {
    const res = await fetch(
      `https://api.pexels.com/videos/search?query=${encodeURIComponent(searchQuery)}&per_page=${perPage}&orientation=landscape`,
      { headers: { Authorization: PEXELS_API_KEY }, next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Pexels API error", videos: [] }, { status: res.status });
    }

    const data = await res.json();

    const videos = (data.videos || []).map((v: Record<string, unknown>) => {
      const files = (v.video_files as Record<string, unknown>[]) || [];
      // Prefer HD (1280 wide) or SD — pick best quality under 1920
      const preferred = files
        .filter((f: Record<string, unknown>) => f.file_type === "video/mp4" && (f.width as number) >= 1280 && (f.width as number) <= 1920)
        .sort((a: Record<string, unknown>, b: Record<string, unknown>) => (b.width as number) - (a.width as number))[0]
        || files.filter((f: Record<string, unknown>) => f.file_type === "video/mp4")
          .sort((a: Record<string, unknown>, b: Record<string, unknown>) => (b.width as number) - (a.width as number))[0];

      return {
        id: v.id,
        url: preferred?.link,
        thumbnail: (v.image as string),
        duration: v.duration,
        width: preferred?.width,
        height: preferred?.height,
        photographer: (v.user as Record<string, unknown>)?.name,
        pexels_url: v.url,
      };
    }).filter((v: Record<string, unknown>) => v.url);

    return NextResponse.json({ videos, query: searchQuery });
  } catch (err) {
    return NextResponse.json({ error: String(err), videos: [] }, { status: 500 });
  }
}
