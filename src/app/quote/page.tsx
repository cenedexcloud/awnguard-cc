'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    services: [] as string[],
    details: '',
  });

  // Pre-fill form data from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');
    const phone = params.get('phone');

    if (name || email || phone) {
      setFormData(prev => ({
        ...prev,
        name: name || prev.name,
        email: email || prev.email,
        phone: phone || prev.phone,
      }));
    }
  }, []);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter(s => s !== value)
    }));
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'application/zip',
        'application/x-zip-compressed'
      ];

      if (!allowedTypes.includes(file.type)) {
        alert('Please upload files in JPG, PNG, PDF, DOC/DOCX, TXT, or ZIP format only.');
        e.target.value = '';
        return;
      }

      // Check file size (max 10MB per file)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert(`File "${file.name}" is too large. Maximum file size is 10MB.`);
        e.target.value = ''; // Clear the input
        return;
      }

      setFiles(prev => {
        const newFiles = [...prev];
        newFiles[index] = file;
        return newFiles;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validate total file size before converting to base64
      const validFiles = files.filter(file => file);
      const totalFileSize = validFiles.reduce((sum, file) => sum + file.size, 0);
      const maxTotalSize = 3 * 1024 * 1024; // 3MB limit (base64 encoding will increase this by ~33%)

      console.log('File validation:', {
        fileCount: validFiles.length,
        totalSizeBytes: totalFileSize,
        totalSizeMB: (totalFileSize / 1024 / 1024).toFixed(2),
        limitMB: (maxTotalSize / 1024 / 1024).toFixed(2)
      });

      if (totalFileSize > maxTotalSize) {
        const totalSizeMB = (totalFileSize / 1024 / 1024).toFixed(2);
        const limitMB = (maxTotalSize / 1024 / 1024).toFixed(2);
        throw new Error(
          `Total file size (${totalSizeMB}MB) exceeds the ${limitMB}MB limit. Please reduce file sizes or remove some attachments.`
        );
      }

      // Convert files to base64
      console.log('Converting files to base64...', validFiles.length, 'files');
      const fileAttachments = await Promise.all(
        files.filter(file => file).map(async (file) => {
          try {
            const base64 = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                const base64String = reader.result as string;
                resolve(base64String.split(',')[1]); // Remove data:mime;base64, prefix
              };
              reader.onerror = () => reject(new Error(`Failed to read file: ${file.name}`));
              reader.readAsDataURL(file);
            });
            return {
              filename: file.name,
              content: base64,
              type: file.type || 'application/octet-stream' // Default type if not available
            };
          } catch (fileError) {
            console.error('Error converting file:', file.name, fileError);
            throw fileError;
          }
        })
      );

      console.log('Files converted successfully:', fileAttachments.length, 'files');

      // Calculate total size of attachments
      const totalSize = fileAttachments.reduce((sum, att) => sum + att.content.length, 0);
      console.log('Total attachment size (base64):', (totalSize / 1024 / 1024).toFixed(2), 'MB');

      console.log('Sending to API...');

      // Send to notification API
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'quote',
          formData: formData,
          attachments: fileAttachments
        })
      });

      if (!response.ok) {
        let errorDetails = '';
        try {
          const errorData = await response.json();
          errorDetails = errorData.error || errorData.message || '';
          console.error('API Response Error (JSON):', response.status, errorData);
        } catch {
          errorDetails = await response.text();
          console.error('API Response Error (Text):', response.status, errorDetails);
        }
        throw new Error(errorDetails || `Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        console.log('Quote submitted successfully');
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          services: [],
          details: '',
        });
        setFiles([]);

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('API returned error:', result.error);
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      const errorMsg = error instanceof Error ? error.message : 'An unexpected error occurred';
      setErrorMessage(errorMsg);
      setSubmitStatus('error');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Quote Request Submitted Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for your interest! We've received your quote request and will get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-3 text-green-800 underline hover:no-underline"
                  >
                    Submit another quote
                  </button>
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
                  <p className="text-red-700 mb-2">
                    We're sorry, but there was an error submitting your quote request. Please try again or contact us directly at{' '}
                    <a href="tel:+17604351367" className="underline">(760) 435-1367</a>.
                  </p>
                  {errorMessage && (
                    <p className="text-sm text-red-600 bg-red-100 p-2 rounded mt-2">
                      Error details: {errorMessage}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setErrorMessage('');
                    }}
                    className="mt-3 text-red-800 underline hover:no-underline"
                  >
                    Try again
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="max-w-5xl mx-auto">
            {/* Quote Form */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl md:text-4xl mb-8">
                <span className="text-[#1A4D6D]">LET'S GET STARTED</span>{' '}
                <span className="text-[#ab772b]">WITH A QUOTE</span>
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name, Phone, Email Row */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Phone:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Address and City Row */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Address:
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all ${errors.address ? 'border-red-500' : ''}`}
                    />
                    {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      City:
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all ${errors.city ? 'border-red-500' : ''}`}
                    />
                    {errors.city && <p className="text-sm text-red-500 mt-1">{errors.city}</p>}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium text-[#1A4D6D] mb-4">
                    Services:
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="awning-manufacturing"
                        checked={formData.services.includes('awning-manufacturing')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">Awning Manufacturing</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="pressure-washing"
                        checked={formData.services.includes('pressure-washing')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">Pressure Washing</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="window-washing"
                        checked={formData.services.includes('window-washing')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">Window Washing</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="awning-cleaning"
                        checked={formData.services.includes('awning-cleaning')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">Awning Cleaning</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="commercial-solar"
                        checked={formData.services.includes('commercial-solar')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">Commercial Solar Panel Cleaning</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="awning-repair"
                        checked={formData.services.includes('awning-repair')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">Awning Repair</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="residential-solar"
                        checked={formData.services.includes('residential-solar')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">Residential Solar Panel Cleaning</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value="not-sure"
                        checked={formData.services.includes('not-sure')}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-[#1A4D6D] border-gray-300 rounded focus:ring-[#1A4D6D]"
                      />
                      <span className="text-gray-700">I'm not sure</span>
                    </label>
                  </div>
                  {errors.services && <p className="text-sm text-red-500 mt-1">{errors.services}</p>}
                </div>

                {/* File Uploads */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Upload File:*
                    </label>
                    <input
                      type="file"
                      name="file1"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip"
                      onChange={(e) => handleFileChange(e, 0)}
                      className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-[#1A4D6D] hover:file:bg-gray-200 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Upload File
                    </label>
                    <input
                      type="file"
                      name="file2"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip"
                      onChange={(e) => handleFileChange(e, 1)}
                      className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-[#1A4D6D] hover:file:bg-gray-200 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Upload File
                    </label>
                    <input
                      type="file"
                      name="file3"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip"
                      onChange={(e) => handleFileChange(e, 2)}
                      className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-[#1A4D6D] hover:file:bg-gray-200 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A4D6D] mb-2">
                      Upload File
                    </label>
                    <input
                      type="file"
                      name="file4"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip"
                      onChange={(e) => handleFileChange(e, 3)}
                      className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-[#1A4D6D] hover:file:bg-gray-200 cursor-pointer"
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-600 -mt-2">
                  *We always appreciate visuals. Feel free to upload files (JPG, PNG, PDF, DOC/DOCX, TXT, ZIP) to better help us understand your needs. Maximum file size: 10MB per file. Pet pictures are welcomed, too!
                </p>

                {/* Additional Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-[#1A4D6D] mb-2">
                    Additional Details:
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-2 border-b-2 border-gray-300 focus:border-[#1A4D6D] outline-none transition-all resize-none ${errors.details ? 'border-red-500' : ''}`}
                  />
                  {errors.details && <p className="text-sm text-red-500 mt-1">{errors.details}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#ab772b] text-white font-semibold py-3 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 16h16a7.962 7.962 0 01-7.999 7.709L12 22.291l-1.999-1.709A7.962 7.962 0 014 16z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
