'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { X, Sparkles } from 'lucide-react';

export interface MainPopupRef {
  open: () => void;
  close: () => void;
}

const MainPopup = forwardRef<MainPopupRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOnSite90Seconds, setHasBeenOnSite90Seconds] = useState(false);
  const [hasScrolled35Percent, setHasScrolled35Percent] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
      savePopupTimestamp();
    },
    close: () => {
      setIsOpen(false);
    }
  }));

  // Save timestamp when popup is shown
  const savePopupTimestamp = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mainPopupShown', 'true');
    }
  };

  // Check if popup has already been shown this session
  const hasShownThisSession = () => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('mainPopupShown') === 'true';
  };

  // Timer: 90 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasBeenOnSite90Seconds(true);
    }, 90000); // 90 seconds

    return () => clearTimeout(timer);
  }, []);

  // Scroll depth: 35%
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;

      if (scrollPercentage >= 35) {
        setHasScrolled35Percent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case already scrolled

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show popup when both conditions are met
  useEffect(() => {
    if (hasBeenOnSite90Seconds && hasScrolled35Percent && !hasShownThisSession()) {
      setIsOpen(true);
      savePopupTimestamp();
    }
  }, [hasBeenOnSite90Seconds, hasScrolled35Percent]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGetQuote = () => {
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
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-10 relative pointer-events-auto animate-in zoom-in-95 duration-300 my-auto max-h-[96vh] overflow-y-auto"
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

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="bg-[#9a6d43]/10 p-5 rounded-full">
              <Sparkles className="w-14 h-14 text-[#9a6d43]" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2e3139] mb-4">
            Looking for Professional Awning Care?
          </h2>

          {/* Subheadline */}
          <p className="text-center text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
            With over 20 years of experience and 1 million awnings cleaned, we're the trusted choice for businesses across the region.
          </p>

          {/* Trust Points */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#9a6d43] rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm md:text-base">Free consultation and quote within 24 hours</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#9a6d43] rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm md:text-base">Licensed, insured, and 100% satisfaction guaranteed</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#9a6d43] rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm md:text-base">Flexible scheduling and contract options available</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleGetQuote}
            className="w-full bg-[#9a6d43] hover:bg-[#8a5d33] text-white font-bold py-4 px-6 rounded-lg transition-colors mb-3 text-base md:text-lg shadow-lg"
          >
            Get Your Free Quote
          </button>

          {/* No Thanks Link */}
          <button
            onClick={handleClose}
            className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </>
  );
});

MainPopup.displayName = 'MainPopup';

export default MainPopup;
