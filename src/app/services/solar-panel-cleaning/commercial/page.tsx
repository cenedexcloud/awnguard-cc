import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function CommercialSolarPanelCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/s.l.r.jpg"
            alt="Solar panels background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#3e4252] tracking-wide">
            COMMERCIAL SOLAR PANEL CLEANING
          </h1>
          <p className="text-xl md:text-2xl text-[#3e4252] mb-10 tracking-wide font-light">
            PROLONG THE LIFE OF YOUR SOLAR PANEL INVESTMENT
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#a77332] text-white px-12 py-4 rounded-full text-lg font-normal hover:bg-[#8d5f28] transition-colors shadow-lg"
          >
            Start with a Quote
          </Link>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/personcln.jpg"
                alt="Worker cleaning commercial solar panels"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                HOW WE DO IT
              </h2>
              <div className="border-b-4 border-[#a77332] w-24 mb-6"></div>

              <p className="text-gray-600 leading-relaxed">
                AwnGuard is your partner to keep your solar array operating at capacity. We use a pure water system to effectively clean most sites without adding unnecessary chemicals back into the environment. We are committed to investing in new cleaning technologies to insure we deliver highest quality of service in the most efficient way.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">WE CLEAN:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Parking lot carports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Roof mount systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ground mount systems (up to 75,000 panels)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Residential solar panels roof and ground mount</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>We hold comprehensive insurance coverage, providing you with the peace of mind that comes with knowing your investment is safeguarded against unforeseen events.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>We uphold stringent environmental standards, diligently following best practices for waste water run-off and reclamation regulations. This commitment not only aligns with our dedication to sustainability but also ensures that our cleaning processes have minimal impact on the surrounding ecosystem, preserving the integrity of the natural environment in which your solar panels are situated.</span>
                </li>
              </ul>

              <p className="pt-4">
                We also offer{' '}
                <Link
                  href="/services/solar-panel-cleaning/residential"
                  className="text-[#425051] underline hover:text-[#a77332] transition-colors"
                >
                  residential solar cleaning services
                </Link>
                .
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block border-2 border-[#a77332] text-[#a77332] px-10 py-3 rounded-full text-lg font-normal hover:bg-[#a77332] hover:text-white transition-colors no-underline"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right Video */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1140645743"
                  title="Solar Panel Cleaning Video"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Before/After Slider */}
            <BeforeAfterSlider
              beforeImage="https://ext.same-assets.com/1191166484/1962439215.false"
              afterImage="https://ext.same-assets.com/1191166484/1850130523.false"
              beforeAlt="Solar panels before cleaning"
              afterAlt="Solar panels after cleaning"
            />

            {/* Second Before/After Slider */}
            <BeforeAfterSlider
              beforeImage="https://ext.same-assets.com/1191166484/3929307735.false"
              afterImage="https://ext.same-assets.com/1191166484/1210911516.false"
              beforeAlt="Dirty solar panels before cleaning"
              afterAlt="Clean solar panels after cleaning"
            />
          </div>
        </div>
      </section>

      {/* Senate Bill Information Section */}
      <section className="py-16 bg-[#f8f7f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <p className="text-gray-600 italic leading-relaxed">
              Senate Bill 100 (2018) set a renewable goal of 60 percent renewables by 2030 and a longer-term goal of serving 100 percent of California's retail sales and state loads with RPS-certified renewable and zero carbon energy by 2045.
            </p>
            <p>
              <a
                href="http://www.energy.ca.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#425051] underline hover:text-[#a77332] transition-colors italic"
              >
                www.energy.ca.gov
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
