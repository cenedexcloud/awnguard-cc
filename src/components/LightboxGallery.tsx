'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxGalleryProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
}

export default function LightboxGallery({ images, currentIndex, onClose }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 text-white text-lg font-semibold z-10">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-3 hover:bg-black/50"
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {/* Image Container */}
      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <img
          src={images[activeIndex]}
          alt={`Gallery image ${activeIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-3 hover:bg-black/50"
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>
      )}

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 bg-black/30 rounded-lg">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden transition-all ${
                index === activeIndex
                  ? 'ring-2 ring-[#ab772b] opacity-100 scale-110'
                  : 'opacity-50 hover:opacity-75'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
