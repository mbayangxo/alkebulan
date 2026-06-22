"use client";

import { use } from "react";
import Link from "next/link";

export default function OrderConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string; slug?: string }>;
}) {
  const { orderId, slug } = use(searchParams);

  return (
    <div className="min-h-screen bg-warm-ivory flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <div className="w-16 h-16 bg-light-green/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-deep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-ink mb-2">Order placed</h1>
        <p className="text-muted mb-2 text-sm leading-relaxed">
          Your order is confirmed. The seller will be in touch to arrange delivery and confirm payment.
        </p>
        {orderId && (
          <p className="text-xs text-muted font-mono bg-border/30 rounded-lg px-3 py-2 inline-block mt-2 mb-6">
            Ref: {orderId}
          </p>
        )}
        <div className="flex flex-col gap-3 mt-6">
          {slug && (
            <Link
              href={`/store/${slug}`}
              className="block bg-deep-green text-ivory font-bold px-6 py-3 rounded-xl hover:bg-mid-green transition-colors"
            >
              Back to store
            </Link>
          )}
          <Link
            href="/"
            className="block text-sm text-muted hover:text-ink transition-colors"
          >
            Powered by Alkebulan
          </Link>
        </div>
      </div>
    </div>
  );
}
