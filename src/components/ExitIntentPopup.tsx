'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { X, Phone, Check } from 'lucide-react';

export interface ExitIntentPopupRef {
  open: () => void;
  close: () => void;
}

const ExitIntentPopup = forwardRef<ExitIntentPopupRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
      setHasShown(true);
    },
    close: () => {
      setIsOpen(false);
    }
  }));

  useEffect(() => {
    // Don't show if already shown in this session
    if (hasShown) return;

    // Show after 5 seconds on site
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 5000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClaim = () => {
    // Redirect to quote page
    window.location.href = '/quote';
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 pointer-events-none overflow-y-auto">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-5 md:p-8 relative pointer-events-auto animate-in zoom-in-95 duration-300 my-auto max-h-[96vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Phone Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-[#8ea5b5]/20 p-4 md:p-6 rounded-full">
              <Phone className="w-12 h-12 md:w-16 md:h-16 text-[#9a6d43]" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-xl md:text-3xl font-bold text-center text-black mb-4 md:mb-6">
            🔥 Wait! Special Offer Just for You!
          </h2>

          {/* Discount Box */}
          <div className="bg-[#8ea5b5]/10 border-2 border-[#9a6d43] rounded-lg p-4 md:p-6 mb-4 md:mb-6">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#2e3139] mb-2">
                15% OFF Your First Project
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                Schedule now and save up to $2,000
              </p>
              <p className="text-sm md:text-base text-gray-700 mb-3">
                Get a FREE consultation + 15% discount
              </p>

              {/* Countdown Timer */}
              <div className="inline-flex items-center gap-2 bg-[#2e3139] text-white px-3 py-2 rounded-md text-xs md:text-sm font-semibold">
                <span>Offer expires in:</span>
                <span className="font-mono text-base md:text-lg">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClaim}
            className="w-full bg-[#9a6d43] hover:bg-[#a38d56] text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-colors mb-3 md:mb-4 flex items-center justify-center gap-2 text-base md:text-lg"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            CLAIM MY 15% DISCOUNT NOW!
          </button>

          {/* No Thanks Link */}
          <button
            onClick={handleClose}
            className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors mb-4 md:mb-6"
          >
            No thanks, I'll pay full price
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-4 gap-2 md:gap-3 pt-4 md:pt-6 border-t border-gray-200">
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#9a6d43] rounded-full p-1.5 md:p-2">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-[9px] md:text-xs text-gray-700 font-semibold text-center leading-tight">20+ Years</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#9a6d43] rounded-full p-1.5 md:p-2">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-[9px] md:text-xs text-gray-700 font-semibold text-center leading-tight">1 Million+ Projects</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#9a6d43] rounded-full p-1.5 md:p-2">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-[9px] md:text-xs text-gray-700 font-semibold text-center leading-tight">100% Satisfaction</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#9a6d43] rounded-full p-1.5 md:p-2">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-[9px] md:text-xs text-gray-700 font-semibold text-center leading-tight">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ExitIntentPopup.displayName = 'ExitIntentPopup';

export default ExitIntentPopup;
