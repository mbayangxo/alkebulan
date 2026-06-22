"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { AlkebulanCrest } from "@/app/components/panther-motif";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-deep-green flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex flex-col items-center gap-3">
            <AlkebulanCrest size={56} />
            <span className="font-display text-2xl font-bold text-gold">Kebu</span>
          </Link>
          <p className="text-ivory/60 mt-2 text-sm">Africa is the opportunity</p>
        </div>

        <div className="bg-ivory rounded-2xl p-8">
          <h1 className="font-display text-2xl font-bold text-ink mb-2">Welcome back</h1>
          <p className="text-muted text-sm mb-8">Sign in to see your matched opportunities</p>

          {error && (
            <div className="bg-red-earth/10 border border-red-earth/30 text-red-earth rounded-xl px-4 py-3 text-sm mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-ink mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-white text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-deep-green text-ivory font-bold py-3.5 rounded-xl hover:bg-mid-green transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-center text-sm text-muted mt-6">
            No account yet?{" "}
            <Link href="/signup" className="text-deep-green font-semibold hover:text-gold transition-colors">
              Create one for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
