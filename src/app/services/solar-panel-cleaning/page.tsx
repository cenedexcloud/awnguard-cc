'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'), {
  ssr: false,
});

export default function SolarPanelCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-cover bg-center" style={{ backgroundImage: "url('/s.l.r.jpg')" }}>
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">
            <span className="text-black">SOLAR PANEL</span>{' '}
            <span className="text-black">CLEANING</span>
          </h1>
          <p className="text-xl text-black mb-8">
            PROLONG THE LIFE OF YOUR SOLAR PANEL INVESTMENT
          </p>
          <Link
            href="/quote"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start with a Quote
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How We Do It Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/personcln.jpg"
                  alt="Solar Panel Cleaning Service"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 uppercase">
                  HOW WE DO IT
                </h2>
                <div className="w-32 h-1 bg-[#8B6F47] mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Let us partner with you to keep your solar array operating at capacity. Awn-Guard uses a de-ionized water system which is the most effective cleaning method and avoids adding unnecessary chemicals into the environment. It's a win win!
                </p>

                <h3 className="text-2xl text-gray-800 mb-4 uppercase">
                  CLEANING = PRODUCTIVITY!
                </h3>
                <div className="w-32 h-1 bg-[#8B6F47] mb-6"></div>

                <p className="text-gray-600 leading-relaxed">
                  In our ongoing transition towards sustainable energy solutions, such as solar power, the paramount objective remains the preservation of peak efficiency. To achieve this goal, adhering to a regular maintenance schedule for your solar panels is not just advisable; it's imperative. Panel manufacturers themselves recommend cleaning on a quarterly or semi-annual basis, underscoring the pivotal role this practice plays in ensuring that your solar investment consistently operates at its optimal capacity. By heeding these recommendations, you not only enhance the environmental benefits associated with solar energy but also bolster your financial prospects by maximizing the energy output of your solar asset.
                </p>
              </div>
            </div>

            {/* YouTube Video Section */}
            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden aspect-video shadow-lg">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/QZwMiwNGMxw"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Solar Panel Cleaning Video"
                    frameBorder="0"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed mb-6">
                At Awn-Guard, our expertise lies in delivering exceptional maintenance services tailored to the specific needs of small to mid-sized photovoltaic systems within Southern California's urban landscape. With our dedicated team, you can trust that your solar panels will receive the meticulous care and attention they require. Moreover, we prioritize comprehensive insurance coverage, providing you with the peace of mind that comes with knowing your investment is safeguarded against unforeseen events. Additionally, we uphold stringent environmental standards, diligently following best practices for waste water run-off and reclamation regulations. This commitment not only aligns with our dedication to sustainability but also ensures that our cleaning processes have minimal impact on the surrounding ecosystem, preserving the integrity of the natural environment in which your solar panels are situated.
              </p>

              <div className="text-center">
                <Link
                  href="/quote"
                  className="inline-block bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors border-2 border-primary shadow-lg"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Before and After Sliders */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Comparison */}
              <BeforeAfterSlider
                beforeImage="/solar-before-1.jpg"
                afterImage="/solar-after-1.jpg"
                beforeAlt="Commercial Solar Panel Before Cleaning"
                afterAlt="Commercial Solar Panel After Cleaning"
              />

              {/* Second Comparison */}
              <BeforeAfterSlider
                beforeImage="/solar-before-2.jpg"
                afterImage="/solar-after-2.jpg"
                beforeAlt="Residential Solar Panel Before Cleaning"
                afterAlt="Residential Solar Panel After Cleaning"
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
