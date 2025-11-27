'use client';

import { Rocket } from 'lucide-react';

interface FloatingRocketButtonProps {
  onClick: () => void;
}

export default function FloatingRocketButton({ onClick }: FloatingRocketButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed left-6 bottom-24 z-40 bg-[#9a6d43] hover:bg-[#a38d56] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce group"
      aria-label="Special Offer"
    >
      <Rocket className="w-7 h-7" strokeWidth={2.5} />

      {/* Tooltip */}
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-[#2e3139] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Special Offer! 15% OFF
        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#2e3139]" />
      </div>
    </button>
  );
}
