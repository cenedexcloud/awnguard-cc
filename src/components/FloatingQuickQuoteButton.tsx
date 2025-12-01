'use client';

import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function FloatingQuickQuoteButton() {
  return (
    <Link
      href="/quote"
      className="fixed right-6 bottom-24 z-40 bg-[#9a6d43] hover:bg-[#a38d56] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group flex items-center gap-3 animate-pulse-slow"
      aria-label="Get a Quick Quote"
    >
      {/* Pulsing ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#9a6d43] animate-ping opacity-75" />

      <Mail className="w-6 h-6 relative z-10" />
      <span className="hidden md:inline-block font-semibold relative z-10">Quick Quote</span>

      {/* Tooltip for mobile (when text is hidden) */}
      <div className="md:hidden absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2e3139] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Get a Quick Quote
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#2e3139]" />
      </div>
    </Link>
  );
}
