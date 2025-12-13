import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ResidentialSolarPanelCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/residential_solar_panel.jpg"
            alt="Residential solar panels background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px] px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-wide text-center mb-4 font-bold">
            RESIDENTIAL SOLAR PANEL CLEANING
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 tracking-wide font-light text-center mb-10">
            PROLONG THE LIFE OF YOUR SOLAR PANEL INVESTMENT
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#ab772b] text-white px-12 py-4 rounded-full text-lg font-normal hover:bg-[#01548f] transition-colors shadow-lg"
          >
            Start with a Quote
          </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/1191166484/136305533.false"
                alt="Solar panel cleaning in progress"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Responding to the increase of residential solar panels, AwnGuard added Residential Solar Panel Cleaning to its service options in 2023. Our dedicated residential cleaning crews are trained for a variety of roofing types, with safety protocols in place and the shared goal to increase energy production. By offering before/after pictures of your solar panels, you can visually see the difference that cleaning will make - but the real benefit will come in the increased energy output. AwnGuard uses a deionized water system, which is the most effective cleaning method, avoiding the addition of unnecessary chemicals into the environment. It's a win-win!
              </p>

              <p>
                We also offer{' '}
                <Link
                  href="/services/solar-panel-cleaning/commercial"
                  className="text-[#425051] underline hover:text-[#a77332] transition-colors"
                >
                  commercial solar panel cleaning services
                </Link>
                .
              </p>

              <div className="pt-4">
                <Link
                  href="/quote"
                  className="inline-block bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors border-2 border-primary shadow-lg"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
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
