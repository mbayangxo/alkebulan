import { NextRequest } from "next/server";
import { SAMPLE_OPPORTUNITIES } from "@/lib/data/sample-opportunities";
import { FundingType, Sector } from "@/lib/types";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get("type") as FundingType | null;
  const sector = searchParams.get("sector") as Sector | null;
  const country = searchParams.get("country");
  const diaspora = searchParams.get("diaspora") === "true";
  const q = searchParams.get("q")?.toLowerCase();

  let results = SAMPLE_OPPORTUNITIES;

  if (type) results = results.filter((o) => o.type === type);
  if (country) results = results.filter((o) => o.country === country || o.country === "All Africa");
  if (sector) results = results.filter((o) => o.sectors.includes(sector));
  if (diaspora) results = results.filter((o) => o.diaspora_allowed);
  if (q) {
    results = results.filter(
      (o) =>
        o.title.toLowerCase().includes(q) ||
        o.summary.toLowerCase().includes(q) ||
        o.country.toLowerCase().includes(q)
    );
  }

  return Response.json(results);
}
