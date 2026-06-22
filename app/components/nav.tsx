"use client";

import Link from "next/link";
import { useState } from "react";
import { AlkebulanCrest } from "./panther-motif";

const NAV_LINKS = [
  { label: "My Path 🗺", href: "/path", highlight: true },
  { label: "My Matches ⚡", href: "/matches" },
  { label: "Programs", href: "/programs" },
  { label: "Procurement", href: "/procurement" },
  { label: "Discover", href: "/opportunities" },
  { label: "Market 🌾", href: "/market" },
  { label: "Feed", href: "/feed" },
  { label: "Countries", href: "/map" },
];

const TOOLS = [
  { label: "Build vs. Leave →", href: "/compare" },
  { label: "Decode This Product →", href: "/scan" },
  { label: "Local Starts Map", href: "/starts" },
  { label: "Community Partners", href: "/gatekeepers" },
  { label: "Build a Business", href: "/build" },
  { label: "Bankability Engine", href: "/bankability" },
  { label: "AfCFTA Navigator", href: "/afcfta" },
  { label: "Capital Stack", href: "/capital-stack" },
  { label: "Success Stories", href: "/success" },
  { label: "AI Assistant", href: "/assistant" },
  { label: "Yande AI Agents →", href: "/agents" },
];

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const bg = transparent ? "bg-transparent" : "bg-deep-green";

  return (
    <nav className={`${bg} text-ivory sticky top-0 z-50 border-b border-gold/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <AlkebulanCrest size={36} />
          <span className="font-display text-xl font-semibold text-gold tracking-wide">
            Alkebulan
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ label, href, highlight }) => (
            <Link
              key={href}
              href={href}
              className={
                highlight
                  ? "text-gold font-semibold hover:text-gold-light transition-colors"
                  : "text-ivory/80 hover:text-gold transition-colors"
              }
            >
              {label}
            </Link>
          ))}

          {/* Tools dropdown */}
          <div className="relative">
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
              className="text-ivory/80 hover:text-gold transition-colors flex items-center gap-1"
            >
              Tools
              <span className="text-[10px] opacity-60">▾</span>
            </button>
            {toolsOpen && (
              <div className="absolute top-full right-0 mt-2 w-52 bg-deep-green border border-gold/20 rounded-xl shadow-xl overflow-hidden z-50">
                {TOOLS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2.5 text-xs text-ivory/80 hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login" className="text-ivory/70 hover:text-ivory text-sm font-medium transition-colors">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="bg-gold text-deep-green text-sm font-semibold px-4 py-2 rounded-full hover:bg-gold-light transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-ivory p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden bg-deep-green border-t border-gold/20 px-4 py-4">
          <div className="space-y-1 mb-4">
            {NAV_LINKS.map(({ label, href, highlight }) => (
              <Link
                key={href}
                href={href}
                className={`block py-2.5 text-sm ${
                  highlight ? "text-gold font-semibold" : "text-ivory/80 hover:text-gold"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gold/20 pt-3 mb-4">
            <p className="text-xs font-semibold text-gold/60 uppercase tracking-wider mb-2">AI Engines</p>
            <div className="grid grid-cols-2 gap-1">
              {TOOLS.map(({ label, href }) => (
                <Link key={href} href={href} className="block py-1.5 text-xs text-ivory/70 hover:text-gold"
                  onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t border-gold/20 flex gap-3">
            <Link href="/login" className="text-ivory/70 text-sm font-medium">Sign in</Link>
            <Link href="/signup" className="bg-gold text-deep-green text-sm font-semibold px-4 py-2 rounded-full">
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
