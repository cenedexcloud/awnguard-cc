'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'coverLetter') => {
    const file = e.target.files?.[0] || null;

    // Validate file type and size
    if (file) {
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

      // Check file size (max 10MB)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        alert(`File "${file.name}" is too large. Maximum file size is 10MB.`);
        e.target.value = '';
        return;
      }
    }

    if (type === 'resume') {
      setResume(file);
    } else {
      setCoverLetter(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Convert files to base64
      const fileAttachments = [];

      if (resume) {
        const resumeBase64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            resolve(base64String.split(',')[1]);
          };
          reader.readAsDataURL(resume);
        });
        fileAttachments.push({
          filename: resume.name,
          content: resumeBase64,
          type: resume.type
        });
      }

      if (coverLetter) {
        const coverLetterBase64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            resolve(base64String.split(',')[1]);
          };
          reader.readAsDataURL(coverLetter);
        });
        fileAttachments.push({
          filename: coverLetter.name,
          content: coverLetterBase64,
          type: coverLetter.type
        });
      }

      console.log('Files converted successfully:', fileAttachments.length, 'files');

      // Calculate total size of attachments
      const totalSize = fileAttachments.reduce((sum, att) => sum + att.content.length, 0);
      console.log('Total attachment size (base64):', (totalSize / 1024 / 1024).toFixed(2), 'MB');

      // Send to notification API
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'career',
          formData: formData,
          attachments: fileAttachments
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response Error:', response.status, errorText);
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
        setResume(null);
        setCoverLetter(null);

        // Reset file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach((input) => {
          (input as HTMLInputElement).value = '';
        });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting career form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20 bg-[#f4f5f5]">
        {/* Hero Section with Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-[#3a5d75]">CAREERS</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-normal text-gray-600 mb-8 uppercase tracking-wide">
                  Working at AwnGuard
                </h2>
                <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                  <p>
                    We welcome honest and reliable workers. Our company is a leader in the awning repair and maintenance
                    industry and we're always happy to see new talent learn the trade. Opportunities may present themselves
                    throughout the year, you are welcome to leave your resume and contact info so we can reach out when
                    such opportunities arises.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-[#3a5d75] mb-6">Contact Us</h3>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded">
                    <p className="text-green-800 font-medium">
                      Thank you for contacting us. We will get back to you as soon as possible.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded">
                    <p className="text-red-800 font-medium">
                      Oops, there was an error sending your message. Please try again later.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name, Phone, Email Row */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[#3a5d75] font-medium mb-2">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#3a5d75] outline-none transition-all bg-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[#3a5d75] font-medium mb-2">
                        Phone:
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#3a5d75] outline-none transition-all bg-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#3a5d75] font-medium mb-2">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#3a5d75] outline-none transition-all bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[#3a5d75] font-medium mb-2">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-0 py-2 border-b-2 border-gray-300 focus:border-[#3a5d75] outline-none transition-all resize-none bg-transparent"
                    />
                  </div>

                  {/* File Uploads */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="resume" className="block text-[#3a5d75] font-medium mb-2">
                        Resume:
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip"
                          onChange={(e) => handleFileChange(e, 'resume')}
                          className="hidden"
                        />
                        <label
                          htmlFor="resume"
                          className="inline-block text-[#3a5d75] underline cursor-pointer hover:text-[#ad702d] transition-colors"
                        >
                          Upload File
                        </label>
                        {resume && (
                          <p className="text-sm text-gray-600 mt-2">{resume.name}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="coverLetter" className="block text-[#3a5d75] font-medium mb-2">
                        Cover Letter:
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="coverLetter"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt,.zip"
                          onChange={(e) => handleFileChange(e, 'coverLetter')}
                          className="hidden"
                        />
                        <label
                          htmlFor="coverLetter"
                          className="inline-block text-[#3a5d75] underline cursor-pointer hover:text-[#ad702d] transition-colors"
                        >
                          Upload File
                        </label>
                        {coverLetter && (
                          <p className="text-sm text-gray-600 mt-2">{coverLetter.name}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-[#ad702d] text-white px-12 py-3 rounded-full font-medium hover:bg-[#8f5d24] transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Job Description Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl">
              {/* Job Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-[#3a5d75]">JOB DESCRIPTION: </span>
                <span className="text-[#3a5d75] font-normal uppercase tracking-wide">Awning Installation Tech</span>
              </h2>

              <p className="text-gray-600 mb-2">Part-time (20-25 hours) or Full-Time (40 hours)</p>
              <p className="text-gray-600 mb-8">Day time hours, with shifts seven days a week</p>

              {/* Qualifications */}
              <h3 className="text-2xl font-bold text-[#3a5d75] mb-6 uppercase">Qualifications</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
                <li>Awning company is seeking Awning Installation Techs and Awning Cleaning Crew Members who are dependable and have a valid driver's license</li>
                <li>Day shift hours include Awning Installation and Awning Repairs of existing structures</li>
                <li>Night shift hours include Awning Cleaning of commercial properties</li>
                <li>Applicant must be reliable</li>
                <li>Prior construction or janitorial experience helpful, but not required</li>
                <li>2 references required</li>
                <li>**VALID DRIVERS LICENSE** REQUIRED</li>
                <li>$18-$22/hour</li>
                <li>8-hour shifts</li>
              </ul>

              {/* Must Be */}
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-[#3a5d75] uppercase">must be: </span>
                <span className="text-[#3a5d75] font-normal uppercase tracking-wide">
                  Responsible, reliable, hard workers with go-getter initiative.
                </span>
              </h3>

              <div className="space-y-4 text-gray-600">
                <p>
                  AwnGuard is looking for able-bodied personnel with current and valid DRIVERS LICENSE for awning
                  services work - cleaning, installation, and repairs of existing awning structures.
                </p>

                <p>
                  Jobs are located throughout San Diego, Orange County and Riverside County at commercial property
                  shopping centers, strip malls or individual storefronts/restaurants, as well as residential awnings
                  on occasion. Our business is 90/10 - commercial to residential - with day time hours seven days a week.
                  Crew meets at company offices in either Oceanside or Vista, uses company vehicles and equipment, and
                  returns to the same starting location at shift end.
                </p>

                <p>
                  Lifting up to 50lbs and carrying/climbing ladders are an important part of this job. You must be
                  physically available to complete all parts.
                </p>

                <p>
                  Please note: Only apply if you are reliable. We cannot hire people who don't show up. There is a
                  zero-tolerance for no-show team members as it puts our business at risk of missing deadlines. If
                  consistently showing up for work on time and ready to give 100% is you, then please apply!
                </p>

                <p>
                  Prior construction or janitorial experience is helpful, but it is not required. A willingness to learn
                  and work hard to achieve quality work IS required.
                </p>

                <p>
                  Please submit your interest by filling out the job application form and be prepared to share two
                  professional references at the final interview.
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-gray-700">Interview process:</p>
                  <p>Phone screen, 30 min</p>
                  <p>Phone interview, 30 min</p>
                  <p>In-person interview, 45 min</p>
                </div>

                <p>
                  All team members will be under a 30-day trial period with a bonus granted after 30 days should we be
                  a mutually good fit.
                </p>

                <p className="font-medium">
                  Apply with above form.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-[#f4f5f5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '450px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106443.06978084858!2d-117.39930945!3d33.25586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE1JzIxLjEiTiAxMTfCsDE5JzA4LjEiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AwnGuard Location Map"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
