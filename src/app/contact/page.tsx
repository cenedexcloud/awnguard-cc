'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Arrow upload state
  const [uploadMode, setUploadMode] = useState(false);
  const [arrowImage, setArrowImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Image upload handlers
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setArrowImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setArrowImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveArrowImage = async () => {
    if (!arrowImage) {
      alert('Please upload an arrow image first!');
      return;
    }

    try {
      // Convert base64 to blob
      const response = await fetch(arrowImage);
      const blob = await response.blob();

      // Create form data
      const formData = new FormData();
      formData.append('arrow', blob, 'custom-arrow.png');

      // Upload to server
      const uploadResponse = await fetch('/api/upload-arrow', {
        method: 'POST',
        body: formData
      });

      const result = await uploadResponse.json();

      if (result.success) {
        // Force reload the image by adding timestamp
        setArrowImage(result.path + '?t=' + Date.now());
        setUploadMode(false);
        alert('Arrow image saved and merged with hero section!');
      } else {
        throw new Error(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Error saving arrow:', error);
      alert('Failed to save arrow. Please try again.');
    }
  };

  const clearArrowImage = () => {
    setArrowImage(null);
  };

  // Load saved arrow on mount
  useEffect(() => {
    // Check if custom arrow exists
    const checkCustomArrow = async () => {
      try {
        const response = await fetch('/custom-arrow.png?t=' + Date.now(), { method: 'HEAD' });
        if (response.ok) {
          setArrowImage('/custom-arrow.png?t=' + Date.now());
        }
      } catch (error) {
        // No custom arrow exists, use default - this is normal on first load
        console.log('No custom arrow found, using default');
      }
    };
    checkCustomArrow();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to notification API
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          formData: formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <section className="pt-24 bg-[#84abc3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - CTA */}
            <div className="text-white pr-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 uppercase tracking-wide font-bold">
                READY TO GET STARTED?
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-10 uppercase font-bold" style={{ color: '#1A5A7E' }}>
                LET'S START WITH A QUOTE BASED ON YOUR SPECIFIC NEEDS.
              </h2>
              <div className="flex items-end gap-6 mb-4 pl-4">
                {arrowImage && (
                  <div
                    className="w-28 h-32 md:w-32 md:h-36 flex-shrink-0 relative"
                  >
                    <Image
                      src={arrowImage}
                      alt="Custom arrow"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}
                <Link
                  href="/quote"
                  className="bg-[#FAFAFA] text-[#1E3A5F] px-10 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-[#1A5A7E] hover:text-white transition-all duration-300 mb-3"
                >
                  Request A Quote
                </Link>
              </div>
              {uploadMode && (
                <div className="pl-4">
                  <div className="bg-[#84abc3] border-4 border-white rounded-lg p-4 mb-4 max-w-md">
                    <p className="text-white text-sm mb-2 font-semibold">Upload or drag & drop your arrow image:</p>
                    <div
                      className={`border-4 border-dashed ${isDragging ? 'border-yellow-300 bg-blue-100' : 'border-white'} rounded-lg p-8 text-center cursor-pointer transition-all`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {arrowImage ? (
                        <div className="relative w-full h-64">
                          <Image
                            src={arrowImage}
                            alt="Uploaded arrow"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="text-white">
                          <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="font-semibold">Drop arrow image here</p>
                          <p className="text-sm mt-1">or click to browse</p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                    <div className="flex gap-3 mt-3">
                      <button
                        onClick={clearArrowImage}
                        className="bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition-all text-sm"
                      >
                        Clear
                      </button>
                      <button
                        onClick={saveArrowImage}
                        className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition-all text-sm"
                      >
                        Save Arrow
                      </button>
                      <button
                        onClick={() => setUploadMode(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded font-semibold hover:bg-gray-600 transition-all text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Contact Info */}
            <div className="text-white border-l-4 border-[#1A5A7E] pl-10 md:pl-12">
              <p className="text-lg md:text-xl mb-8 leading-relaxed font-bold">
                We look forward to becoming<br />
                Your Urban Oasis Partner.
              </p>

              <div className="space-y-5 mb-8">
                <a
                  href="tel:+17604351367"
                  className="block text-lg md:text-xl font-normal hover:underline"
                >
                  (760) 435-1367
                </a>

                <a
                  href="mailto:contact@awnguard.com"
                  className="block text-base md:text-lg font-normal hover:underline"
                >
                  contact@awnguard.com
                </a>

                <div className="text-base md:text-lg">
                  <p className="font-normal">Monday - Friday</p>
                  <p className="font-normal">9:00am - 4:30pm</p>
                </div>

                <div className="text-base md:text-lg">
                  <p className="font-normal">Saturday and Sunday</p>
                  <p className="font-normal">In The Field</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-6 items-center">
                <a
                  href="https://www.facebook.com/AwnGuard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Contact Form Section */}
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-4 font-normal">
              <span className="text-[#1A4D6D]">CONTACT</span>{' '}
              <span className="text-[#ab772c]">US</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              Have a question? Looking for more information? Send us a message below and we'll get back to you as soon as possible.
            </p>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us! We'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">Submission Failed</h3>
                    <p className="text-red-700">
                      We're sorry, but there was an error sending your message. Please try again or contact us directly at{' '}
                      <a href="tel:+17604351367" className="underline">(760) 435-1367</a>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name, Phone, Email Row */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#00558e] font-medium mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#1A4D6D] font-medium mb-2">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#00558e] font-medium mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all bg-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#00558e] font-medium mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all resize-none bg-transparent"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-16 py-3 border-2 border-[#ab772c] text-[#ab772c] rounded-full font-medium hover:bg-[#ab772c] hover:text-white transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
