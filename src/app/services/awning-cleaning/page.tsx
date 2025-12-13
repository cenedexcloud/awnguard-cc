import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AwningCleaning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Bubbles Background */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bubbles2.jpg"
            alt="Bubbles Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-gray-800 mb-2 uppercase font-bold" style={{ letterSpacing: '0.05em' }}>
            Awning Cleaning Service
          </h1>
          <p className="text-base md:text-lg text-gray-700 font-light uppercase" style={{ letterSpacing: '0.25em' }}>
            The Best Awning Care Solution in Southern California
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Awning Cleaning Section */}
          <section className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: Image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/awn_cleaning.jpg"
                  alt="Professional Awning Cleaning"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-3xl md:text-4xl text-gray-800 mb-3 uppercase font-bold">
                  Awning Cleaning
                </h2>
                <div className="w-full h-0.5 mb-6" style={{ backgroundColor: '#ab772b' }}></div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  In business for more than 22 years, we know how to do awning cleaning, care and maintenance to keep your beautiful shade structures an inviting place to visit and relax. We offer regular awning cleaning to help you preserve your property's awning investment, and our scheduling system makes it easy to have ongoing five-star service.
                </p>

                {/* Two Column Benefits */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Professional Awning Cleaning */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Professional Awning Cleaning will:
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Clean out deeply embedded soil, grime, mold, and pollution</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Help bring back and retain original color with the use of optical brighteners</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Leave your awning areas rinsed and free from residual dirt – giving your storefront or backyard oasis a fresh, clean and inviting look</span>
                      </li>
                    </ul>
                  </div>

                  {/* Consistent Awning Cleaning */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Consistent Awning Cleaning will:
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Help control existing mold, mildew, and fungus growth on awning fabric while helping prevent new growth</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Extend the life of awning fabric by removing dirt which, once embedded can weaken the fabric</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Protect against harmful UV damage, bird droppings, and pollution</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Us Button */}
                <Link
                  href="/quote"
                  className="inline-block bg-white text-primary px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-colors border-2 border-primary shadow-lg"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </section>

          {/* Blue Banner - Service Promise */}
          <section className="mb-8 bg-[#00558e] rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/forourpromise.jpg"
                  alt="Professional Cleaning"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
                  OUR SERVICE PROMISE
                </h2>
                <ul className="space-y-4 mb-8 text-lg">
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We use a gentle, hand cleaning process</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We use manufacturer-approved cleaners and protectants</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We extend the usable life of awning fabric by removing embedded soil, grime, mold and pollution which can weaken fabric</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We help bring back and retain original color with the use of optical brighteners</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We leave your awning areas rinsed and free form residual dirt after service</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1">•</span>
                    <span>We squeegee excess water off of window surfaces</span>
                  </li>
                </ul>
                <a
                  href="https://calendly.com/your-scheduling-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#00558e] text-white border-2 border-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#00558e] transition-colors"
                >
                  Schedule Today
                </a>
              </div>
            </div>
          </section>

          {/* Why Clean Your Awnings Section */}
          <section className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Image */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/awningpic.jpg"
                  alt="Yellow and white striped awnings"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 uppercase font-bold">
                  WHY CLEAN YOUR AWNINGS?
                </h2>
                <div className="w-48 h-1 bg-[#8B6F47] mb-8"></div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-600 mb-4">
                    Top three causes of premature awning wear:
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Use of pressure washer machine on awnings – Awning fabric is not designed to withstand high pressure water
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Improper chemicals / detergents / degreasers / solvents – Only manufacturer recommended cleaning agents and protectants should be used
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>Lack of cleaning</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-600 mb-4">
                    How often should awning cleaning be performed?
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Monthly or bi-monthly service is great for high traffic areas, coastal regions, or properties with bird issues
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>Quarterly is recommended for most commercial properties</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1">•</span>
                      <span>
                        Semi-annual service is often chosen for HOA or other residential accounts
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600 mb-6">
                  At AwnGuard, we work hard to minimize our impact on normal business operations. We do this by scheduling work after hours for businesses and on weekdays for our apartment and HOA customers. We are always happy to customize your cleaning schedule.
                </p>

                <Link
                  href="/quote"
                  className="inline-block border-2 border-[#ae762b] text-[#ae762b] px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#ae762b] hover:text-white transition-colors"
                >
                  Let's Get Started!
                </Link>
              </div>
            </div>
          </section>

          {/* Banner Image */}
          <section className="mb-0 relative">
            <Image
              src="/banner3.jpg"
              alt="Solar Panel Cleaning Banner"
              width={1200}
              height={300}
              className="w-full h-auto rounded-xl"
              priority
            />
            {/* Clickable Learn More button overlay - positioned over the existing button on banner */}
            <Link
              href="/services/solar-panel-cleaning"
              className="absolute top-[68%] left-[36%] w-[270px] h-[48px] rounded-full cursor-pointer z-20 flex items-center justify-center bg-[#00558e] text-white border-2 border-white px-10 py-3 text-lg font-semibold hover:bg-white hover:text-[#00558e] transition-colors"
            >
              Learn More
            </Link>
          </section>


        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
