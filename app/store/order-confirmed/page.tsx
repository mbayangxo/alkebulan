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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment confirmed!</h1>
        <p className="text-gray-500 mb-2 text-sm leading-relaxed">
          Your order has been placed and payment processed. The seller will be in touch to confirm delivery.
        </p>
        {orderId && (
          <p className="text-xs text-gray-400 font-mono bg-gray-100 rounded-lg px-3 py-2 inline-block mt-2 mb-6">
            Order: {orderId}
          </p>
        )}
        <div className="flex flex-col gap-3 mt-6">
          {slug && (
            <Link
              href={`/store/${slug}`}
              className="block bg-green-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-900 transition-colors"
            >
              Back to store
            </Link>
          )}
          <Link
            href="/"
            className="block text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Powered by Alkebulan
          </Link>
        </div>
      </div>
    </div>
  );
}
