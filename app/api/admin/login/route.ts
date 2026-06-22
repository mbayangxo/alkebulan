import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password, next } = await req.json().catch(() => ({ password: "", next: "/admin" }));
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || !password || password !== adminPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ success: true, next: next || "/admin" });
  res.cookies.set("alkebulan-admin", adminPassword, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  });
  return res;
}
