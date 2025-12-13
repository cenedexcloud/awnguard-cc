'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CleaningServices() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [awningsDropdownOpen, setAwningsDropdownOpen] = useState(false);
  const [mobileAwningsOpen, setMobileAwningsOpen] = useState(false);
  const [solarDropdownOpen, setSolarDropdownOpen] = useState(false);
  const [mobileSolarOpen, setMobileSolarOpen] = useState(false);
  const [ourWorkDropdownOpen, setOurWorkDropdownOpen] = useState(false);
  const [mobileOurWorkOpen, setMobileOurWorkOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src="https://ext.same-assets.com/1191166484/3288525540.png"
                  alt="AwnGuard Logo"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary font-medium">Home</a>

              {/* Awnings Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAwningsDropdownOpen(true)}
                onMouseLeave={() => setAwningsDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  Awnings
                  <ChevronDown className={`w-4 h-4 transition-transform ${awningsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {awningsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a href="/services/awning-cleaning" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Awning Cleaning
                    </a>
                    <a href="/services/awning-repair" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Awning Repairs
                    </a>
                  </div>
                )}
              </div>

              <a href="#windows" className="text-gray-700 hover:text-primary font-medium">Windows</a>

              {/* Solar Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolarDropdownOpen(true)}
                onMouseLeave={() => setSolarDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  Solar
                  <ChevronDown className={`w-4 h-4 transition-transform ${solarDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {solarDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a href="/services/solar-panel-cleaning" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Commercial Solar Panel Cleaning
                    </a>
                    <a href="/services/solar-panel-cleaning" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Residential Solar Panel Cleaning
                    </a>
                  </div>
                )}
              </div>

              {/* Our Work Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOurWorkDropdownOpen(true)}
                onMouseLeave={() => setOurWorkDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  Our Work
                  <ChevronDown className={`w-4 h-4 transition-transform ${ourWorkDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {ourWorkDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a href="/industries" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      Industries
                    </a>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-primary font-medium flex items-center gap-1">
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                    <a href="/#about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">About Us</a>
                    <a href="/urban-oasis" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Urban Oasis Partner</a>
                    <a href="/blog" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Blog</a>
                    <a href="/testimonials" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Happy Customers</a>
                    <a href="/faq" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Our FAQs</a>
                  </div>
                )}
              </div>

              <a href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
              <a href="/contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">Contact Us</a>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            {/* Mobile navigation content similar to home page */}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl text-left">
            <span style={{ color: '#00558e' }}>CLEANING</span>{' '}
            <span className="text-primary">SERVICES</span>
          </h1>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Box 1: Cleaning Services */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <Link href="/services/awning-cleaning">
                  <Image
                    src="/mancleaning.jpg"
                    alt="Awning Cleaning Service"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <h2 className="text-3xl mb-6 tracking-wider font-prompt">CLEANING SERVICES</h2>
              <p className="text-gray-600 mb-8 leading-relaxed" style={{ textAlign: 'justify' }}>
                We do awning cleaning and we do it the right way. It's important to your business that the front is presentable and that means a well-taken care awning. We provide regular cleaning and maintenance services to keep awnings looking their best - welcoming and inviting for your guests.
              </p>
              <a
                href="/services/awning-cleaning"
                className="inline-block border-2 px-12 py-3 rounded-full transition-colors font-medium"
                style={{ borderColor: '#ab772b', color: '#ab772b' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ab772b';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ab772b';
                }}
              >
                Learn More
              </a>
            </div>

            {/* Box 2: Solar Cleaning */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <Link href="/services/solar-panel-cleaning">
                  <Image
                    src="/solar.jpg"
                    alt="Solar Panel Cleaning"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <h2 className="text-3xl mb-6 tracking-wider font-prompt">SOLAR CLEANING</h2>
              <p className="text-gray-600 mb-8 leading-relaxed" style={{ textAlign: 'justify' }}>
                As we collectively transition to renewable energy choices like solar, maintaining peak efficiency is the goal. Solar panel cleaning on a quarterly or semi-annual basis is recommended by panel manufacturers and helps the bottom line by allowing your solar asset to perform at it's best. Our team is ready!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/services/solar-panel-cleaning/commercial"
                  className="inline-block border-2 px-8 py-3 rounded-full transition-colors font-medium"
                  style={{ borderColor: '#ab772b', color: '#ab772b' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ab772b';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#ab772b';
                  }}
                >
                  Commercial Panel Cleaning
                </a>
                <a
                  href="/services/solar-panel-cleaning/residential"
                  className="inline-block border-2 px-8 py-3 rounded-full transition-colors font-medium"
                  style={{ borderColor: '#ab772b', color: '#ab772b' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ab772b';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#ab772b';
                  }}
                >
                  Residential Panel Cleaning
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center">
            <a
              href="/AG_flyer_01.jpg"
              download="AwnGuard_Services_Flyer.jpg"
              className="inline-block text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ backgroundColor: '#ab772b' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
