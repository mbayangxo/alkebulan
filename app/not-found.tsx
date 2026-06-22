import Link from "next/link";
import { Nav } from "@/app/components/nav";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deep-green text-ivory">
      <Nav />
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <p className="text-gold font-bold text-xs uppercase tracking-widest mb-6">404 — Page not found</p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-6">
          This page doesn&apos;t exist.<br />
          <span className="text-gold">The opportunity does.</span>
        </h1>
        <p className="text-ivory/70 text-lg max-w-xl mx-auto mb-10">
          You may have followed a broken link. But the reason you&apos;re here —
          to find what&apos;s possible — is on every other page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/opportunities"
            className="bg-gold text-deep-green font-bold px-8 py-4 rounded-xl text-lg hover:bg-gold-light transition-colors"
          >
            See what&apos;s in front of you →
          </Link>
          <Link
            href="/"
            className="border border-gold/40 text-ivory font-semibold px-8 py-4 rounded-xl text-lg hover:border-gold transition-colors"
          >
            Back home
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { href: "/opportunities", label: "Discover", desc: "Problems that are actually markets. What you can build." },
            { href: "/blueprint", label: "Blueprint", desc: "How others built empires on African resources. The same playbook." },
            { href: "/market", label: "B2B Market", desc: "Buy direct from African farmers and suppliers." },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-5 transition-all group"
            >
              <p className="font-bold text-gold text-sm mb-2 group-hover:text-gold-light">{label} →</p>
              <p className="text-ivory/60 text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
