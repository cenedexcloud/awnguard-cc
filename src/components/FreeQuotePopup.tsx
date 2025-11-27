'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { X, Mail } from 'lucide-react';

export interface FreeQuotePopupRef {
  open: () => void;
  close: () => void;
}

const FreeQuotePopup = forwardRef<FreeQuotePopupRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

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

    // Show after 10 seconds on site (different from exit intent)
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send notification
    try {
      await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'quick-quote',
          formData: formData
        })
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }

    // Redirect to quote page with form data
    window.location.href = `/quote?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 md:p-12 relative pointer-events-auto animate-in zoom-in-95 duration-300 my-auto max-h-[96vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Mail Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#9a6d43] p-6 rounded-full">
              <Mail className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2e3139] mb-3">
            Get Your Free Quote
          </h2>

          {/* Subheadline */}
          <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
            Leave your details and we'll contact you within 1 hour
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-[#2e3139] font-semibold mb-2">
                <svg className="w-5 h-5 text-[#9a6d43]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Your Name <span className="text-[#9a6d43]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9a6d43] focus:border-transparent outline-none transition-all text-base"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-[#2e3139] font-semibold mb-2">
                <svg className="w-5 h-5 text-[#9a6d43]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Address <span className="text-[#9a6d43]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9a6d43] focus:border-transparent outline-none transition-all text-base"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="flex items-center gap-2 text-[#2e3139] font-semibold mb-2">
                <svg className="w-5 h-5 text-[#9a6d43]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Phone Number <span className="text-[#9a6d43]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9a6d43] focus:border-transparent outline-none transition-all text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#9a6d43] hover:bg-[#8a5d33] text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              GET FREE QUOTE
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {/* Privacy Notice */}
          <p className="text-center text-gray-500 text-sm mt-6">
            We respect your privacy. Your information is secure and will not be shared.
          </p>
        </div>
      </div>
    </>
  );
});

FreeQuotePopup.displayName = 'FreeQuotePopup';

export default FreeQuotePopup;
