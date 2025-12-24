'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function UrbanOasisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url(/urban-oasis-banner.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4 uppercase tracking-wide text-black">
            Your Urban Oasis Partner
          </h1>
          <p className="text-xl md:text-2xl uppercase tracking-widest">
            Creating an amazing world!
          </p>
        </div>
      </div>

      {/* Urban Oasis Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[500px]">
            <img
              src="/urban-oasis-cafe.jpg"
              alt="Urban Oasis outdoor dining"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl mb-3">
              <span className="text-[#1e5a7d]">URBAN</span>{' '}
              <span className="text-[#ab772b]">OASIS</span>
            </h2>
            <div className="absolute left-0 w-screen h-1 bg-[#ab772c] mb-6"></div>
            <div className="h-7"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              At AwnGuard, we believe in more than just providing shade and keeping awnings pristine—we are passionate about creating spaces that inspire peace and relaxation in our bustling urban environments. We call these spaces "Urban Oases"—public areas designed with human well-being in mind, offering a retreat from the fast-paced energy of city life.
            </p>
          </div>
        </div>
      </div>

      {/* What Is An Urban Oasis Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 uppercase text-black">
                What is an Urban Oasis?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                An Urban Oasis is more than just a shaded spot in the city. It's a place where people can pause, breathe, and reconnect with themselves and their surroundings. These spaces are thoughtfully designed to promote tranquility, combining natural elements like trees, greenery, and water features with amenities that encourage relaxation and social interaction. Whether it's a park, a plaza, or a quiet courtyard, an Urban Oasis brings a sense of calm and serenity, offering city dwellers a moment of peace amidst the urban hustle.
              </p>
            </div>

            {/* Right Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-[500px]">
              <img
                src="https://ext.same-assets.com/1191166484/2913534093.false"
                alt="Colorful awning structure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* AwnGuard Your Urban Oasis Partner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl mb-8 uppercase text-black">
          AwnGuard Your Urban Oasis Partner
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            While many industries contribute to the creation of these beautiful spaces, at AwnGuard, our role is to enhance them through shade and clean energy. Shade structures are a crucial element of Urban Oases, providing comfort and protection from the sun, allowing people to enjoy these spaces year-round. And through our commitment to clean energy, we help ensure that these oases are sustainable, reducing the environmental impact of our urban environments.
          </p>
          <p>
            As part of our commitment to this vision, we partner with property managers and building owners across Southern California to maintain and enhance public spaces that serve as Urban Oases. Our work ensures that these spaces remain inviting, beautiful, and functional for everyone to enjoy.
          </p>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="relative">
        <div className="grid md:grid-cols-3">
          {/* Left Image */}
          <div className="hidden md:block">
            <img
              src="https://ext.same-assets.com/1191166484/1507358145.false"
              alt="Outdoor dining patio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="bg-[#1e5a7d] text-white p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl mb-6 uppercase text-white">
              Join Us in Elevating Urban Oases
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our vision at AwnGuard goes beyond just maintaining awnings—we aim to elevate the consciousness of our community around creating and preserving Urban Oases. These spaces are essential to the quality of life in our cities, offering places where people can recharge and find balance.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              We invite you to seek out Urban Oases in your day to day life. Consider how you, too, can contribute to creating more of these special places in our communities. Let's work together to make our cities more peaceful, one shady area at a time.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#ab772b] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors w-fit"
            >
              Join the Movement
            </Link>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="/urban-oasis-patio.jpg"
              alt="Modern outdoor space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
