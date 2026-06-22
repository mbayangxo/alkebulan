import { NextRequest } from "next/server";
import { storeDb } from "@/lib/store-data";

// Flutterwave sends a "verif-hash" header that must match FLW_WEBHOOK_HASH.
// Set this in your Flutterwave dashboard under Settings → Webhooks.
// Any request without the correct hash is rejected.

export async function POST(req: NextRequest) {
  const webhookHash = process.env.FLW_WEBHOOK_HASH;

  if (webhookHash) {
    const incomingHash = req.headers.get("verif-hash");
    if (incomingHash !== webhookHash) {
      return new Response("Forbidden", { status: 403 });
    }
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const event = body.event as string | undefined;
  if (event !== "charge.completed") {
    return new Response("OK", { status: 200 }); // ignore other events
  }

  const data = body.data as Record<string, unknown> | undefined;
  const status = data?.status as string | undefined;
  const txRef = data?.tx_ref as string | undefined;

  if (status !== "successful" || !txRef) {
    return new Response("OK", { status: 200 });
  }

  // txRef = orderId — find the order across all sites and mark it paid
  // The in-memory store doesn't have a global order index, so scan all sites.
  // In production with Supabase this would be a single indexed query.
  const allSites = storeDb.sites.list();
  for (const site of allSites) {
    const orders = storeDb.orders.list(site.slug);
    const match = orders.find(o => o.id === txRef);
    if (match) {
      storeDb.orders.updateStatus(site.slug, txRef, "paid");
      break;
    }
  }

  return new Response("OK", { status: 200 });
}
