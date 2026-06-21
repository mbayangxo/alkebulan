import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Known hostnames that serve the main Alkebulan app
const MAIN_HOSTS = new Set([
  "alkebulan.com",
  "www.alkebulan.com",
  "alkebulan.co",
  "www.alkebulan.co",
]);

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";

  // Route business storefronts: slug.alkebulan.com → /store/slug
  const isSubdomain =
    !MAIN_HOSTS.has(hostname) &&
    (hostname.endsWith(".alkebulan.com") || hostname.endsWith(".alkebulan.co")) &&
    !hostname.startsWith("localhost");

  if (isSubdomain) {
    const slug = hostname.split(".")[0];
    const url = request.nextUrl.clone();
    // Only rewrite the root — API calls and other paths pass through to the same server
    if (url.pathname === "/") {
      url.pathname = `/store/${slug}`;
      return NextResponse.rewrite(url);
    }
  }

  return updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|json|ico)$).*)",
  ],
};

