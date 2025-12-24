'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services does AwnGuard offer?",
          answer: "AwnGuard provides professional cleaning and maintenance services including awning cleaning, solar panel cleaning (residential and commercial), awning repair and installation, window washing, and pressure washing services throughout Southern California."
        },
        {
          question: "Where do you provide services?",
          answer: "We serve all of Southern California. Contact us to confirm service availability in your specific area."
        },
        {
          question: "How long has AwnGuard been in business?",
          answer: "AwnGuard has been providing professional cleaning services for over 20 years. We started with awning and industrial fabric cleaning and have expanded to include solar panel cleaning, window washing, and pressure washing."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes! AwnGuard is fully licensed and insured. We carry comprehensive liability insurance to protect your property and our team members."
        }
      ]
    },
    {
      category: "Awning Cleaning",
      questions: [
        {
          question: "How often should awnings be cleaned?",
          answer: "We recommend professional awning cleaning at least twice a year for most properties. High-traffic commercial areas or properties near trees may benefit from quarterly cleaning."
        },
        {
          question: "What types of awnings can you clean?",
          answer: "We clean all types of awnings including residential window awnings, patio covers, commercial storefront awnings, restaurant canopies, shade structures, and large outdoor tents."
        },
        {
          question: "Will cleaning damage my awnings?",
          answer: "No! We use specialized hand cleaning techniques and eco-friendly solutions specifically designed for awning fabrics. Our methods are safe and will not damage your awnings."
        },
        {
          question: "Can you remove stubborn stains?",
          answer: "Yes! We have specialized pre-treatment solutions for stubborn stains including mold, mildew, bird droppings, and environmental pollutants. While we can't guarantee 100% removal of all stains, we have an excellent success rate."
        }
      ]
    },
    {
      category: "Solar Panel Cleaning",
      questions: [
        {
          question: "Why should I clean my solar panels?",
          answer: "Dirty solar panels can lose up to 25% of their efficiency. Dust, pollen, bird droppings, and other debris block sunlight from reaching the photovoltaic cells, reducing energy production and your return on investment."
        },
        {
          question: "How often should solar panels be cleaned?",
          answer: "We recommend cleaning solar panels 2-4 times per year, depending on your location and environmental factors. Areas with high dust, pollen, or bird activity may require more frequent cleaning."
        },
        {
          question: "Will cleaning void my solar panel warranty?",
          answer: "No! Our cleaning methods are manufacturer-approved and specifically designed for solar panels. We use gentle techniques that won't void your warranty."
        },
        {
          question: "Do you clean both residential and commercial solar panels?",
          answer: "Yes! We provide tailored cleaning services for both residential homes and large commercial solar installations."
        },
        {
          question: "What's your cleaning method for solar panels?",
          answer: "We use purified water, soft brushes, and gentle techniques to safely clean your panels without harsh chemicals or pressure washing. We finish with a deionized water rinse to prevent water spots."
        }
      ]
    },
    {
      category: "Pricing & Scheduling",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Pricing varies based on the service, property size, and specific requirements. We provide free, customized quotes for all services. Contact us at (760) 435-1367 or through our website to request a quote."
        },
        {
          question: "Do you offer free estimates?",
          answer: "Yes! We provide free, no-obligation quotes for all our services."
        },
        {
          question: "How do I schedule a service?",
          answer: "You can schedule service by calling us at (760) 435-1367, emailing contact@awnguard.com, or filling out the contact form on our website."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Cancellations must be made at least 24 hours in advance. Cancellations with less than 24 hours notice may be subject to a cancellation fee."
        },
        {
          question: "Do you offer maintenance contracts?",
          answer: "Yes! We offer regular maintenance contracts for both residential and commercial properties. These contracts ensure your awnings and solar panels are cleaned on a schedule that maintains optimal appearance and performance."
        }
      ]
    },
    {
      category: "Window Washing & Pressure Washing",
      questions: [
        {
          question: "What window washing services do you offer?",
          answer: "We provide low to mid-rise window washing services for buildings up to 4 stories from the ground. Our services include streak-free cleaning for both residential and commercial properties."
        },
        {
          question: "What can you pressure wash?",
          answer: "We offer pressure washing for outdoor spaces including walkways, patios, parking lots, building exteriors, and other hard surfaces. Our regular maintenance keeps your property looking its best."
        },
        {
          question: "Are your cleaning products eco-friendly?",
          answer: "Yes! We use environmentally friendly cleaning solutions that are safe for your property, landscaping, and the environment."
        }
      ]
    },
    {
      category: "Awning Manufacture Connection",
      questions: [
        {
          question: "Do you repair damaged awnings?",
          answer: "Yes! We partner with specialized awning manufacturers to provide repairs, fabric replacement, and new installations with the highest quality materials and workmanship."
        },
        {
          question: "Can you replace just the fabric on my awning?",
          answer: "Yes! If your awning frame is in good condition but the fabric is damaged or worn, we can replace just the fabric with high-quality industrial fabrics."
        },
        {
          question: "Do you install new awnings?",
          answer: "Yes! We work with top awning manufacturers to design and install new awnings for both residential and commercial properties."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services. Can't find what you're looking for? Contact us!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-primary">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between text-left"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <section className="mt-16 text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-lg text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our friendly team is here to help! Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:7604351367"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Call (760) 435-1367
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
