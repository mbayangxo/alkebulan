import { NextRequest } from "next/server";
import { storeDb } from "@/lib/store-data";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const orders = storeDb.orders.list(slug);
  return Response.json(orders);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { orderId, status } = await req.json();
  storeDb.orders.updateStatus(slug, orderId, status);
  return Response.json({ success: true });
}
