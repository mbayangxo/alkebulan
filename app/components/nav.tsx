"use client";

import Link from "next/link";
import { useState } from "react";
import { AlkebulanCrest } from "./panther-motif";

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const bg = transparent ? "bg-transparent" : "bg-deep-green";

  return (
    <nav className={`${bg} text-ivory sticky top-0 z-50 border-b border-gold/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <AlkebulanCrest size={36} />
          <span
            className="font-display text-xl font-semibold text-gold tracking-wide"
          >
            Alkebulan
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/map" className="text-ivory/80 hover:text-gold transition-colors">
            Country Explorer
          </Link>
          <Link href="/dashboard" className="text-ivory/80 hover:text-gold transition-colors">
            Opportunities
          </Link>
          <Link href="/assistant" className="text-ivory/80 hover:text-gold transition-colors">
            AI Assistant
          </Link>
          <Link href="/capital-stack" className="text-ivory/80 hover:text-gold transition-colors">
            Capital Stack
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Mobile menu */}
        <button
          className="md:hidden text-ivory p-1"
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
        <div className="md:hidden bg-deep-green border-t border-gold/20 px-4 py-4 space-y-3">
          <Link href="/map" className="block text-ivory/80 hover:text-gold py-2">Country Explorer</Link>
          <Link href="/dashboard" className="block text-ivory/80 hover:text-gold py-2">Opportunities</Link>
          <Link href="/assistant" className="block text-ivory/80 hover:text-gold py-2">AI Assistant</Link>
          <Link href="/capital-stack" className="block text-ivory/80 hover:text-gold py-2">Capital Stack</Link>
          <div className="pt-2 border-t border-gold/20 flex gap-3">
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
