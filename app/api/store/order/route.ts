import { NextRequest } from "next/server";
import { storeDb, type StoreOrder } from "@/lib/store-data";

// Flutterwave payment initialization
// Requires FLW_SECRET_KEY env variable — get from dashboard.flutterwave.com
async function initFlutterwave(order: StoreOrder, site: { businessName: string }) {
  const secretKey = process.env.FLW_SECRET_KEY;
  if (!secretKey) return null;

  const res = await fetch("https://api.flutterwave.com/v3/payments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tx_ref: order.id,
      amount: 1, // placeholder — real amount needs to be calculated from items
      currency: "NGN", // should be dynamic based on country
      redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/order-confirmed?orderId=${order.id}&slug=${order.siteSlug}`,
      customer: {
        email: order.customerEmail || `${order.customerPhone}@placeholder.com`,
        phone_number: order.customerPhone,
        name: order.customerName,
      },
      customizations: {
        title: site.businessName,
        description: `Order from ${site.businessName}`,
      },
    }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.link as string | null;
}

// Wave payment initialization
// Requires WAVE_API_KEY env variable — get from developer.wave.com
async function initWave(order: StoreOrder) {
  const apiKey = process.env.WAVE_API_KEY;
  if (!apiKey) return null;

  const res = await fetch("https://api.wave.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: "1", // placeholder
      currency: "XOF", // Francophone West Africa
      error_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/${order.siteSlug}`,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/store/order-confirmed?orderId=${order.id}&slug=${order.siteSlug}`,
      client_reference: order.id,
    }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data?.wave_launch_url as string | null;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const order: StoreOrder = {
    id: `ord_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    siteSlug: body.siteSlug,
    customerName: body.customerName,
    customerPhone: body.customerPhone,
    customerEmail: body.customerEmail || "",
    items: body.items,
    notes: body.notes || "",
    paymentMethod: body.paymentMethod,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  storeDb.orders.save(order);

  // Cash on delivery — no payment redirect needed
  if (body.paymentMethod === "cash") {
    return Response.json({ success: true, orderId: order.id, paymentUrl: null });
  }

  const site = storeDb.sites.get(body.siteSlug);

  // Flutterwave payment
  if (body.paymentMethod === "flutterwave" && site) {
    const paymentUrl = await initFlutterwave(order, site);
    return Response.json({ success: true, orderId: order.id, paymentUrl });
  }

  // Wave payment
  if (body.paymentMethod === "wave") {
    const paymentUrl = await initWave(order);
    return Response.json({ success: true, orderId: order.id, paymentUrl });
  }

  return Response.json({ success: true, orderId: order.id, paymentUrl: null });
}
