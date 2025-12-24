'use client';

import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import LightboxGallery from '@/components/LightboxGallery';
// Upload interface removed - imports kept for potential future use
// import { Upload, X, ChevronDown } from 'lucide-react';

type Category = 'all' | 'awning-cleaning' | 'awning-manufacture' | 'solar-panel';

interface UploadedImage {
  url: string;
  category: string;
  fileName: string;
}

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('awning-cleaning');
  const [showUploadSection, setShowUploadSection] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Selected category for uploads is derived from activeFilter
  const selectedCategory = activeFilter === 'all' ? 'awning-cleaning' : activeFilter;

  // Load existing gallery images on mount
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        const response = await fetch('/api/upload-gallery-image');
        if (response.ok) {
          const data = await response.json();
          setUploadedImages(data.images || []);
        }
      } catch (error) {
        console.error('Error loading gallery images:', error);
      } finally {
        setLoadingGallery(false);
      }
    };

    loadGalleryImages();
  }, []);

  // Awning Cleaning - All images removed
  const awningCleaningImages: string[] = [];

  // Awning Manufacture Connection - All images removed
  const awningManufactureImages: string[] = [];

  // Solar Panel Cleaning - All images removed
  const solarPanelImages: string[] = [];

  // Add uploaded images to the respective arrays
  const awningCleaningWithUploads = [
    ...awningCleaningImages,
    ...uploadedImages.filter(img => img.category === 'awning-cleaning').map(img => img.url)
  ];

  const awningManufactureWithUploads = [
    ...awningManufactureImages,
    ...uploadedImages.filter(img => img.category === 'awning-manufacture').map(img => img.url)
  ];

  const solarPanelWithUploads = [
    ...solarPanelImages,
    ...uploadedImages.filter(img => img.category === 'solar-panel').map(img => img.url)
  ];

  const allImages = [
    ...awningCleaningWithUploads,
    ...awningManufactureWithUploads,
    ...solarPanelWithUploads
  ];

  const getFilteredImages = () => {
    switch (activeFilter) {
      case 'awning-cleaning':
        return awningCleaningWithUploads;
      case 'awning-manufacture':
        return awningManufactureWithUploads;
      case 'solar-panel':
        return solarPanelWithUploads;
      default:
        return allImages;
    }
  };

  const uploadFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    let successCount = 0;
    let failCount = 0;

    try {
      for (const file of Array.from(files)) {
        try {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('category', selectedCategory);

          const response = await fetch('/api/upload-gallery-image', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            const error = await response.json();
            console.error(`Upload failed for ${file.name}:`, error);
            alert(`Failed to upload ${file.name}: ${error.error || 'Unknown error'}`);
            failCount++;
            continue;
          }

          const result = await response.json();
          setUploadedImages(prev => [...prev, {
            url: result.url,
            category: result.category,
            fileName: result.fileName
          }]);
          successCount++;
        } catch (fileError) {
          console.error(`Error uploading ${file.name}:`, fileError);
          alert(`Error uploading ${file.name}: ${fileError instanceof Error ? fileError.message : 'Unknown error'}`);
          failCount++;
        }
      }

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Show summary
      if (successCount > 0) {
        alert(`Successfully uploaded ${successCount} image(s)!`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert(`Failed to upload images: ${error instanceof Error ? error.message : 'Please try again.'}`);
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await uploadFiles(e.target.files);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    await uploadFiles(files);
  };

  const handleDropZoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteImage = async (fileName: string) => {
    if (!confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      const response = await fetch(`/api/upload-gallery-image?fileName=${encodeURIComponent(fileName)}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Failed to delete image: ${error.error}`);
        return;
      }

      // Remove from state
      setUploadedImages(prev => prev.filter(img => img.fileName !== fileName));
      alert('Image deleted successfully');
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete image. Please try again.');
    }
  };

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const filteredImages = getFilteredImages();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="pt-16 pb-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl mb-8">
              <span className="text-[#1e5a7d]">OUR</span>{' '}
              <span className="text-[#ab772b]">WORK</span>
            </h1>

            {/* Filter Buttons */}
            <div className="mb-2">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === 'all'
                      ? 'bg-[#ab772b] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#ab772b]'
                  }`}
                >
                  All Work
                  {activeFilter === 'all' && (
                    <span className="ml-2 text-xs opacity-80">(View Only)</span>
                  )}
                </button>
                <button
                  onClick={() => setActiveFilter('awning-cleaning')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === 'awning-cleaning'
                      ? 'bg-[#ab772b] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#ab772b]'
                  }`}
                >
                  Awning Cleaning
                </button>
                <button
                  onClick={() => setActiveFilter('awning-manufacture')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === 'awning-manufacture'
                      ? 'bg-[#ab772b] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#ab772b]'
                  }`}
                >
                  Awning Manufacture
                </button>
                <button
                  onClick={() => setActiveFilter('solar-panel')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === 'solar-panel'
                      ? 'bg-[#ab772b] text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#ab772b]'
                  }`}
                >
                  Solar Panel Cleaning
                </button>
              </div>
            </div>

            <div className="mb-8"></div>

            {/* Upload interface hidden - all photos uploaded */}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loadingGallery ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin h-12 w-12 border-4 border-[#ab772b] border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading gallery...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-gray-600">
                    Showing {filteredImages.length} {activeFilter === 'all' ? 'total' : ''} projects
                  </p>
                </div>

                {filteredImages.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-gray-500 text-lg mb-2">No images in this category yet</p>
                    <p className="text-gray-400 text-sm">Upload some images to get started!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                      >
                        <img
                          src={image}
                          alt={`Project ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-sm font-semibold">Click to view</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No images found in this category.</p>
              </div>
            )}

            <div className="mt-12 text-center">
              <Link
                href="/quote"
                className="inline-block bg-[#ab772b] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#01548f] hover:text-white transition-colors border-2 border-[#ab772b] hover:border-[#01548f] shadow-lg"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <LightboxGallery
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}
