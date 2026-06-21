"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", icon: "🏠", label: "Home" },
  { href: "/matches", icon: "⚡", label: "Matches" },
  { href: "/path", icon: "🗺", label: "My Path" },
  { href: "/build", icon: "🏗", label: "Build" },
  { href: "/programs", icon: "🔍", label: "Programs" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  // Hide on standalone store pages (they're separate branded experiences)
  const isStoreCustomer =
    pathname.startsWith("/store/") &&
    !pathname.startsWith("/store/new") &&
    !pathname.startsWith("/store/dashboard");

  if (isStoreCustomer) return null;

  return (
    <>
      {/* Nav bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-deep-green border-t border-gold/20">
        <div className="flex items-stretch">
          {TABS.map(({ href, icon, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors ${
                  active ? "text-gold" : "text-ivory/55 hover:text-ivory/80"
                }`}
              >
                <span className="text-lg leading-none">{icon}</span>
                <span className="text-[9px] font-semibold leading-none">{label}</span>
              </Link>
            );
          })}
        </div>
        {/* Safe area for devices with home indicator */}
        <div className="h-safe-bottom bg-deep-green" />
      </nav>
      {/* Spacer so content isn't hidden behind the nav */}
      <div className="h-16 lg:hidden" aria-hidden />
    </>
  );
}
