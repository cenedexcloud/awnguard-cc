'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OurWorkPage() {
  // Awning Cleaning - 12 images showing awning cleaning work
  const awningCleaningImages = [
    'https://ext.same-assets.com/1191166484/3756356404.false', // IMG_5233 - building with pink/red awning
    'https://ext.same-assets.com/1191166484/1881712765.false', // 1V4A1729 - worker cleaning awning
    'https://ext.same-assets.com/1191166484/2637109584.false', // Ulta awning
    'https://ext.same-assets.com/1191166484/1621138909.false', // dome awning
    'https://ext.same-assets.com/1191166484/4094741795.false', // ALDO store
    'https://ext.same-assets.com/1191166484/2221548111.false', // Old Navy
    'https://ext.same-assets.com/1191166484/1212862123.false', // OshKosh
    'https://ext.same-assets.com/1191166484/1326997094.false', // red/pink awning building
    'https://ext.same-assets.com/1191166484/1590786671.false', // American Eagle entrance
    'https://ext.same-assets.com/1191166484/1176253522.false', // Mexican Grill pink awning
    'https://ext.same-assets.com/1191166484/1139171390.false', // pink awning storefront
    'https://ext.same-assets.com/1191166484/2855086209.png', // storefront with yellow umbrellas
  ];

  // Awning Manufacture Connection - 12 images showing awning installation/manufacturing
  const awningManufactureImages = [
    'https://ext.same-assets.com/1191166484/3487813958.false', // retail store with pink awning
    'https://ext.same-assets.com/1191166484/3273666659.false', // orange/terracotta awnings
    'https://ext.same-assets.com/1191166484/3919517535.false', // Active store
    'https://ext.same-assets.com/1191166484/1741427457.false', // Pet store
    'https://ext.same-assets.com/1191166484/659370577.false', // shopping corridor
    'https://ext.same-assets.com/1191166484/151533476.false', // covered walkway
    'https://ext.same-assets.com/1191166484/3283407237.false', // person walking (Guess)
    'https://ext.same-assets.com/1191166484/1560181511.false', // storefront
    'https://ext.same-assets.com/1191166484/3251668983.false', // Guess store red awning
    'https://ext.same-assets.com/1191166484/1521756280.false', // Banana Republic
    'https://ext.same-assets.com/1191166484/1773253899.false', // Helzberg Diamonds
    'https://ext.same-assets.com/1191166484/251141794.false', // Cole Haan
  ];

  // Solar Panel Cleaning - 15 images showing solar panel cleaning work
  const solarPanelImages = [
    'https://ext.same-assets.com/1191166484/1649762344.false', // solar panels angled view
    'https://ext.same-assets.com/1191166484/1017947300.false', // solar panels rooftop
    'https://ext.same-assets.com/1191166484/1137655169.false', // solar panels water reflection
    'https://ext.same-assets.com/1191166484/2142545114.false', // solar panels clear sky
    'https://ext.same-assets.com/1191166484/4196170849.false', // solar panels side view
    'https://ext.same-assets.com/1191166484/663491340.false', // solar panels grid view
    'https://ext.same-assets.com/1191166484/1628563362.false', // worker on solar panels mountains
    'https://ext.same-assets.com/1191166484/3412422115.false', // solar panels with greenery
    'https://ext.same-assets.com/1191166484/2543960346.false', // worker walking on panels
    'https://ext.same-assets.com/1191166484/463070056.false', // solar panels close-up
    'https://ext.same-assets.com/1191166484/3547415808.false', // worker with lift equipment
    'https://ext.same-assets.com/1191166484/3981183885.false', // solar panels wide view
    'https://ext.same-assets.com/1191166484/3887491885.false', // worker on panels at sunrise/sunset
    'https://ext.same-assets.com/1191166484/227522073.false', // solar panels installation
    'https://ext.same-assets.com/1191166484/1265652284.png', // solar panels at dusk/dawn
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="pt-16 pb-0 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-[#1e5a7d]">OUR</span>{' '}
              <span className="text-[#ab772b]">WORK</span>
            </h1>
          </div>
        </section>

        {/* Awning Cleaning Section */}
        <section className="py-16 bg-white border-l-4 border-[#ab772b] ml-4 md:ml-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase">
              Awning Cleaning
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {awningCleaningImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={image}
                    alt={`Awning cleaning project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#ab772b] text-white px-8 py-3 rounded-full hover:bg-[#8a611f] transition-colors font-medium"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        {/* Awning Manufacture Connection Section */}
        <section className="py-16 bg-white border-l-4 border-[#ab772b] ml-4 md:ml-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase">
              Awning Manufacture Connection
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {awningManufactureImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={image}
                    alt={`Awning manufacture project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#ab772b] text-white px-8 py-3 rounded-full hover:bg-[#8a611f] transition-colors font-medium"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        {/* Solar Panel Cleaning Section */}
        <section className="py-16 bg-white border-l-4 border-[#ab772b] ml-4 md:ml-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase">
              Solar Panel Cleaning
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {solarPanelImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={image}
                    alt={`Solar panel cleaning project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#ab772b] text-white px-8 py-3 rounded-full hover:bg-[#8a611f] transition-colors font-medium"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
