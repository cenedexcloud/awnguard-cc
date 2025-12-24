'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutUsPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const toggleFAQ = (faq: string) => {
    setOpenFAQ(openFAQ === faq ? null : faq);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        <h1 className="text-4xl md:text-5xl mb-2">
          <span className="text-[#1e5a7d]">ABOUT</span>{' '}
          <span className="text-[#ab772c]">AWNGUARD</span>
        </h1>
        <p className="text-lg text-gray-700 uppercase tracking-wide">
          We've cleaned over 1,000,000 awnings!
        </p>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-[#81a9c2] text-white h-[550px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full h-full">
          {/* Left Image */}
          <div className="h-[550px]">
            <img
              src="https://ext.same-assets.com/1191166484/3033836899.jpeg"
              alt="AwnGuard Awning"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 uppercase tracking-wide">
              AwnGuard Leading the Urban Oasis Movement
            </h2>
            <p className="mb-6 italic" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: 'rgb(0, 0, 0)' }}>
              "We're not just cleaning," says founder Dawn Wood. "We're stewards of shade and peace in a concrete world."
            </p>
            <div>
              <p style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: 300, fontSize: '16px', lineHeight: '24px', color: 'rgb(255, 255, 255)' }}>
                <strong>AwnGuard</strong> is a commercial exterior cleaning company founded in 2001 with the mission to create peaceful, beautiful public spaces that enhance quality of life in urban environments. The company was started by Dawn Wood, whose personal journey – including childhood memories of watching her landscape architect father hand-draft park designs in Alaska – inspired a commitment to transforming overlooked commercial spaces into welcoming "Urban Oases."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="bg-[#81a9c2] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              {/* STARTUP STORY */}
              <div className="border-b border-[#FAFAFA]">
                <button
                  onClick={() => toggleAccordion('startup')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-widest" style={{ color: '#000000', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                    Startup Story
                  </span>
                  <span className="text-2xl text-gray-500">
                    {openAccordion === 'startup' ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 'startup' && (
                  <div className="pb-6 text-sm text-white/90 leading-relaxed space-y-4">
                    <p>
                      The idea for AwnGuard was sparked when Dawn Wood and her then-husband Dan relocated from Alaska to Southern California in 2000. After visiting her aging grandmothers in the region, Dawn was struck by a revelation: "Everywhere we looked there were awnings, and everywhere we looked they were disgusting." This moment of clarity, combined with her father's legacy of designing thoughtful public spaces, inspired her to start a business that would go beyond simple cleaning to actively contribute to the beauty and dignity of commercial environments.
                    </p>
                    <p>
                      What began as a humble operation with a single truck and a $49 cleaning job at Paperback Exchange in Oceanside has grown into a mission-driven enterprise serving over 300 commercial properties across Southern California.
                    </p>
                  </div>
                )}
              </div>

              {/* SERVICES THAT SUPPORT THE MISSION */}
              <div className="border-b border-[#FAFAFA]">
                <button
                  onClick={() => toggleAccordion('services')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-widest" style={{ color: '#000000', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                    Services That Support the Mission
                  </span>
                  <span className="text-2xl text-gray-500">
                    {openAccordion === 'services' ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 'services' && (
                  <div className="pb-6 text-sm text-white/90 leading-relaxed">
                    <p className="mb-4">
                      Today, AwnGuard offers comprehensive exterior cleaning services that help commercial property managers and business owners create inviting, well-maintained spaces. The company's core offerings include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Awning Cleaning & Maintenance</strong> - Gentle, specialized hand-cleaning of fabric and vinyl awnings that preserves materials while restoring vibrancy</li>
                      <li><strong>Solar Panel Cleaning</strong> - Professional cleaning using purified water and soft-brush techniques to maximize energy efficiency</li>
                      <li><strong>Pressure Washing</strong> - Complete exterior building cleaning for facades, walkways, and outdoor spaces</li>
                      <li><strong>Window Washing</strong> - Streak-free cleaning for buildings up to four stories</li>
                    </ul>
                    <p className="mt-4">
                      Each service is delivered with AwnGuard's signature promise: "Big Company Credibility with Small Company Service," ensuring professional results with personalized attention.
                    </p>
                  </div>
                )}
              </div>

              {/* MEASURABLE IMPACT */}
              <div className="border-b border-[#FAFAFA]">
                <button
                  onClick={() => toggleAccordion('impact')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-widest" style={{ color: '#000000', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                    Measurable Impact
                  </span>
                  <span className="text-2xl text-gray-500">
                    {openAccordion === 'impact' ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 'impact' && (
                  <div className="pb-6 text-sm text-white/90 leading-relaxed space-y-4">
                    <p>
                      Since its founding, AwnGuard has cleaned over 1,000,000 awnings, helping commercial properties across San Diego, Orange, and Riverside counties maintain attractive, functional outdoor spaces. The company has built lasting relationships with clients who have stayed loyal for 10-20 years, with property managers consistently praising the team's reliability and attention to detail.
                    </p>
                    <p>
                      Beyond the numbers, AwnGuard's impact is measured in the transformation of public spaces – from shopping centers and medical plazas to schools and municipal buildings – into environments where people naturally want to linger, connect, and feel at ease.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Column 2 */}
            <div>
              {/* THE URBAN OASIS MOVEMENT */}
              <div className="border-b border-[#FAFAFA]">
                <button
                  onClick={() => toggleAccordion('urban')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-widest" style={{ color: '#000000', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                    The Urban Oasis Movement
                  </span>
                  <span className="text-2xl text-gray-500">
                    {openAccordion === 'urban' ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 'urban' && (
                  <div className="pb-6 text-sm text-white/90 leading-relaxed space-y-4">
                    <p>
                      What sets AwnGuard apart is founder Dawn Wood's vision of the "Urban Oasis Movement" – a philosophy that positions the company as more than a cleaning service. An Urban Oasis, in Wood's definition, is "a thoughtfully designed public space where people can pause, breathe, and reconnect with themselves and their surroundings."
                    </p>
                    <p>
                      This movement recognizes that clean, well-maintained shade structures, solar panels, and building exteriors contribute to the emotional well-being of communities. By keeping these elements pristine, AwnGuard helps create "safe havens in an otherwise concrete-dominated landscape."
                    </p>
                  </div>
                )}
              </div>

              {/* LEADERSHIP */}
              <div className="border-b border-[#FAFAFA]">
                <button
                  onClick={() => toggleAccordion('leadership')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-widest" style={{ color: '#000000', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                    Leadership
                  </span>
                  <span className="text-2xl text-gray-500">
                    {openAccordion === 'leadership' ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 'leadership' && (
                  <div className="pb-6 text-sm text-white/90 leading-relaxed">
                    <p>
                      As a woman-owned business (WBENC certified) in a traditionally male-dominated industry, AwnGuard has earned recognition for both its business excellence and community impact. The company was featured in Vista Magazine as an exemplary local business, and founder Dawn Wood serves on advisory boards while actively mentoring other entrepreneurs through the Goldman Sachs 10,000 Small Businesses program.
                    </p>
                  </div>
                )}
              </div>

              {/* CORE VALUES AND VISION */}
              <div className="border-b border-[#FAFAFA]">
                <button
                  onClick={() => toggleAccordion('values')}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm uppercase tracking-widest" style={{ color: '#000000', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                    Core Values and Vision
                  </span>
                  <span className="text-2xl text-gray-500">
                    {openAccordion === 'values' ? '−' : '+'}
                  </span>
                </button>
                {openAccordion === 'values' && (
                  <div className="pb-6 text-sm text-white/90 leading-relaxed space-y-4">
                    <p>
                      Guided by values of <strong>Respect, Reliability, Impact, Community, Commitment, Teamwork,</strong> and <strong>Sustainability</strong>, AwnGuard envisions a world where urban environments offer pockets of calm and beauty – where clean, shaded spaces invite people to slow down and connect.
                    </p>
                    <p>
                      As the company continues to grow, it remains committed to elevating the dignity of often-overlooked maintenance work while building a network of "Urban Oasis Partners" who share the vision of creating more livable, peaceful communities throughout Southern California.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="py-12 text-center bg-white">
        <Link
          href="/quote"
          className="inline-block bg-[#01548f] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#164a66] transition-colors"
        >
          Get Started with a Quote
        </Link>
      </div>

      {/* Dawn Wood Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Content - Biography */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-2">
                <span className="text-[#1e5a7d]">DAWN WOOD</span>{' '}
                <span className="text-[#ab772c]">| PRESIDENT</span>
              </h2>
              <p className="italic mb-4 text-sm leading-relaxed" style={{ color: '#a8aeb1' }}>
                "I want to see a whole stadium of people who stand up and say, 'Yeah, I'm about building Urban Oases too. That's how movements start."
              </p>
              <h3 className="text-base font-bold mb-3" style={{ color: '#a8aeb1' }}>Creating Urban Oases One Space at a Time</h3>
              <div className="space-y-3 leading-relaxed mb-6 text-sm" style={{ color: '#a8aeb1' }}>
                <p>
                  Dawn Wood is the President and founder of AwnGuard, a purpose-driven company committed to transforming overlooked commercial spaces into peaceful "Urban Oases" where communities can gather, breathe, and reconnect. Inspired by childhood memories of watching her landscape architect father hand-draft park designs with meticulous care for the human experience, she turned a deeply personal understanding of thoughtful space creation into a lifelong mission to bring dignity and beauty to urban environments.
                </p>
                <p>
                  With a background in financial services and an entrepreneurial spirit inherited from her Alaska-raised family, Wood founded AwnGuard in 2001 to support commercial property managers and business owners in creating welcoming, well-maintained spaces that enhance quality of life. Under her leadership, the company has cleaned over 1,000,000 awnings across Southern California, always driven by the belief that even invisible maintenance work – done with grace and intention – can transform how people experience their communities.
                </p>
              </div>

              {/* Dawn Wood Accordions */}
              <div className="space-y-3">
          {/* CHILDHOOD INSPIRATION */}
          <div className="bg-white rounded-lg shadow">
            <button
              onClick={() => toggleAccordion('childhood')}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-xs uppercase tracking-widest text-gray-700" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                Childhood Inspiration
              </span>
              <div className={`w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-300 ${openAccordion === 'childhood' ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
            </button>
            {openAccordion === 'childhood' && (
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed space-y-3">
                <img
                  src="https://ext.same-assets.com/1191166484/975199568.svg"
                  alt="Childhood Inspiration Icon"
                  className="w-16 h-16 mb-4"
                />
                <p>
                  Wood's calling to champion Urban Oases was seeded in the wilderness of Alaska, where she grew up surrounded by her father's vision of thoughtful space creation. Her father, a landscape architect, ran his own firm designing parks and public spaces across Alaska's vast terrain. Wood spent countless hours in his office, mesmerized by drafting tables covered with hand-drawn plans and hundreds of colored pens – each green representing a different shade of life he would bring to concrete spaces.
                </p>
                <p>
                  Her childhood was spent in true Alaskan style: weekends at the family's rustic one-room cabin 70 miles north of Anchorage, complete with propane lights, wood-burning stove, and an outhouse overlooking a pristine lake. Her parents, both adventurous spirits who had fled California's concrete sprawl for Alaska's open wilderness, raised her sailing on cold waters, cross-country skiing through untouched forests, and cycling on Anchorage's innovative network of separate bike paths – infrastructure her father helped champion as essential to livable cities.
                </p>
                <p>
                  What shaped Wood most profoundly was watching her father's meticulous care for human experience in his designs. She remembers him creating shadow studies for business parks, ensuring no building would cast others in perpetual darkness during Alaska's brief winter days. "He didn't want anything to look designed," she recalls. "He wanted spaces to feel naturally beautiful while serving people's needs." This philosophy – that thoughtful maintenance of our shared environments is both invisible and essential – became the foundation of everything Wood would later build.
                </p>
              </div>
            )}
          </div>

          {/* BUILDING A MOVEMENT */}
          <div className="bg-white rounded-lg shadow">
            <button
              onClick={() => toggleAccordion('movement')}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-xs uppercase tracking-widest text-gray-700" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                Building a Movement
              </span>
              <div className={`w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-300 ${openAccordion === 'movement' ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
            </button>
            {openAccordion === 'movement' && (
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed space-y-3">
                <img
                  src="https://ext.same-assets.com/1191166484/1251434652.svg"
                  alt="Building a Movement Icon"
                  className="w-16 h-16 mb-4"
                />
                <p>
                  This calling led Wood to transform what could have been a simple cleaning business into the foundation of the "Urban Oasis Movement" – a philosophy that positions clean, shaded public spaces as essential to community well-being. She envisions Urban Oases as pockets of calm carved into city life, where weary travelers find clean awnings to shelter under, where lunchtime crowds pause in plazas that feel cared for, and where light reflects off spotless surfaces instead of grime.
                </p>
                <p>
                  As a certified woman-owned business leader in a traditionally male-dominated industry, Wood has earned recognition through features in local business publications and serves on advisory boards while mentoring other entrepreneurs through the Goldman Sachs 10,000 Small Businesses program. Her company's client relationships often span decades, with property managers consistently praising not just the quality of work, but the sense of partnership and shared purpose that AwnGuard brings to every project.
                </p>
              </div>
            )}
          </div>

          {/* VISION AND VALUES */}
          <div className="bg-white rounded-lg shadow">
            <button
              onClick={() => toggleAccordion('vision')}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-xs uppercase tracking-widest text-gray-700" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>
                Vision and Values
              </span>
              <div className={`w-10 h-10 rounded-full bg-black flex items-center justify-center transition-transform duration-300 ${openAccordion === 'vision' ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
            </button>
            {openAccordion === 'vision' && (
              <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed space-y-3">
                <img
                  src="https://ext.same-assets.com/1191166484/2735496679.svg"
                  alt="Vision and Values Icon"
                  className="w-16 h-16 mb-4"
                />
                <p>
                  Today, Wood continues to lead with what she calls "grace in motion" – a personal affirmation that guides her approach to business challenges and team leadership. She's building a movement, not just a business, working toward a future where commercial properties serve as welcoming community spaces and where the essential work of maintenance is recognized as dignified stewardship of shared environments.
                </p>
                <p>
                  Wood's ultimate vision is to rally a "stadium of people" who declare themselves Urban Oasis Partners – contractors, property managers, landscapers, and community leaders who share her commitment to creating spaces where people naturally want to linger, connect, and find peace in the midst of urban life.
                </p>
              </div>
            )}
          </div>
            </div>
          </div>

            {/* Right Image */}
            <div className="flex justify-center items-start">
              <Image
                src="/dawn.jpg"
                alt="Dawn Wood - President of AwnGuard"
                width={600}
                height={750}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            <span className="text-[#1e5a7d]">OUR</span>{' '}
            <span className="text-[#ab772c]">FAQS</span>
          </h2>
          <div className="w-full h-1 bg-[#ab772c] mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* General FAQs */}
            <div>
              <h3 className="text-xl text-gray-900 mb-6 uppercase tracking-wide">General FAQs</h3>
              <div className="space-y-4">
                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('vision')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What is your Vision?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'vision' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      We are a leading partner in the Urban Oasis Movement. By providing reliable high value awning cleaning services, we maximize the beauty and function of shade structures in public spaces, contributing and enhancing safe havens in an otherwise concrete dominated landscape.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('mission')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What is your mission?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'mission' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      AwnGuard's mission is to foster a culture of continuous improvement. By searching for ways to improve processes and services, we strive to improve the customer experience.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('hours')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What are your hours?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'hours' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Our office is typically staffed from 9:00 am -4:30 pm, although you are welcome to email us or fill out our online contact form at any time. Our field service team works during 3rd shift to minimize our impact on regular business hours.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('commercial')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>Do you only work with commercial clients?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'commercial' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      AwnGuard specializes in working with the commercial sector, included in this are any properties run with professional property management including HOAs and apartment complexes, retail properties and restaurants.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Recurring Services FAQs */}
            <div>
              <h3 className="text-xl text-gray-900 mb-6 uppercase tracking-wide">Recurring Services FAQs</h3>
              <div className="space-y-4">
                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('recurring')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What are recurring services?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'recurring' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Recurring services include awning cleaning, pressure washing of sidewalks & building facades and window washing services. We know how important it is to look your best, put your best foot forward.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('how-often')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>How often should I clean my awnings?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'how-often' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Most awning warranties require regular cleaning. For high traffic or coastal locations we recommend service monthly or every other month. For most other locations quarterly service is suggested.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('how-clean')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>How does AwnGuard clean awnings?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'how-clean' && (
                    <div className="mt-3 text-sm text-gray-700 leading-relaxed space-y-2">
                      <p className="font-semibold">Our Awning Cleaning Guarantee:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>For regular cleaning we use a gentle, hand cleaning process</li>
                        <li>We use only manufacturer approved cleaners and protectants</li>
                        <li>We extend the useable life of awning fabric</li>
                        <li>We leave your awning area rinsed and free from residual dirt</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('mold')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What causes mold on awnings?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'mold' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Usually mold is a problem when several conditions persist. Mold grows on dirt – if awnings are not cleaned often enough. Mold loves moisture. Coastal properties tend to have more mold issues.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('consequences')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What are the consequences of improper maintenance?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'consequences' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      The top three causes are: Pressure washing awnings for routine maintenance, improper chemicals/detergents/degreasers/solvents, and lack of regular cleaning.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Awning Manufacturing FAQs */}
            <div>
              <h3 className="text-xl text-gray-900 mb-6 uppercase tracking-wide">Awning Manufacturing FAQs</h3>
              <div className="space-y-4">
                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('recovers')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>Do you help with awning recovers?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'recovers' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      One of our specialties is recovering existing frames. We want to make sure the life of your awning is maximized and awning recovery is a great way to revitalize your property.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('color')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What is the best awning color to pick?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'color' && (
                    <div className="mt-3 text-sm text-gray-700 leading-relaxed space-y-2">
                      <p><strong>Blues and greens:</strong> The best over time, retaining the original color and staying stain-free better than other colors.</p>
                      <p><strong>Black:</strong> Another solid choice, however it can look linty especially in spring with high concentrations of airborne pollens.</p>
                    </div>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('fabric')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>What fabric is the right fabric?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'fabric' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      We recommend high-quality acrylic fabrics from trusted manufacturers that offer durability and long-lasting color retention.
                    </p>
                  )}
                </div>

                <div className="border-b border-[#FAFAFA] pb-4">
                  <button
                    onClick={() => toggleFAQ('custom')}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-gray-900 text-sm uppercase" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', fontWeight: '200' }}>Do you make custom awnings?</span>
                    <span className="text-2xl text-gray-600">+</span>
                  </button>
                  {openFAQ === 'custom' && (
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Yes, we can help you design and create custom awnings tailored to your specific needs and property requirements.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
