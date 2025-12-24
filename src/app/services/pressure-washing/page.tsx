import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PressureWashing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Steam Background */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Steam/smoke effect background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://dam.thdstatic.com/content/production/yEtBEpC3I4Btc81AHDl2zw/ccReIRj-uqfhNrUeFyjL_w/Original%20file/2025-HC-PRESSURE-WASHER-300PPI.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.2)'
          }}
        ></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl text-white mb-6 uppercase tracking-wide">
            Pressure Steam Cleaning
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20">
        {/* Why Steam Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/1191166484/793022243.false"
                alt="Steam Pressure Washing in Action"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-4xl text-gray-800 mb-8 uppercase">
                Why Steam?
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  While cold water pressure washing can strip paint off a fence, if you're brand of grime is melted
                  into the sidewalk or is greasy, then steam pressure washing is the best. To clean stubborn gum
                  stains and oily residue with cold water requires the use of some pretty harsh chemicals and degreasers.
                  Steam on the other hand simply raises the temperature high enough to dissolve stains away.
                </p>
                <p>
                  The use of steam reduces the chance of introducing more chemical pollutants into the environment
                  by avoiding putting them there in the first place. We have one planet and AwnGuard's philosophy
                  is to utilize the least impactful products and techniques while still getting the job done. This
                  is why AwnGuard practices comprehensive water reclamation and recycle program to insure waste water
                  stays out of storm drains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Questions Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl text-gray-800 mb-10 uppercase">
            3 Questions for Prospective Pressure Wash Service:
          </h2>
          <ol className="space-y-4 text-gray-600 text-lg">
            <li className="flex">
              <span className="font-semibold mr-3 text-gray-800">1.</span>
              <span>Do you have water reclamation capability?</span>
            </li>
            <li className="flex">
              <span className="font-semibold mr-3 text-gray-800">2.</span>
              <span>Do you use steam pressure washing – or only cold water?</span>
            </li>
            <li className="flex">
              <span className="font-semibold mr-3 text-gray-800">3.</span>
              <span>Are you fully insured and can provide certificates for Workers Compensation, General Liability and Commercial Vehicle insurance?</span>
            </li>
          </ol>

          {/* Note */}
          <div className="mt-10 p-6 bg-gray-50 border-l-4 border-primary rounded-r-lg">
            <p className="text-gray-600 italic">
              <strong>Note:</strong> Awn-Guard only utilizes pressure washing to stucco and concrete surfaces.
              Awn-Guard cleans commercial fabric by hand in accordance with fabric manufacturers worldwide.
            </p>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex justify-between items-center py-8 border-t border-b border-gray-200">
            <Link
              href="/blog"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="text-2xl">&lt;</span>
              <span>Older Post</span>
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
            >
              <span>Newer Post</span>
              <span className="text-2xl">&gt;</span>
            </Link>
          </div>
        </section>

        {/* Social Share */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.awnguard.com/services/pressure-washing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ab772b] hover:opacity-80 transition-opacity"
              aria-label="Share on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.awnguard.com/services/pressure-washing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ab772b] hover:opacity-80 transition-opacity"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send?text=https://www.awnguard.com/services/pressure-washing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ab772b] hover:opacity-80 transition-opacity"
              aria-label="Share on WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="mailto:?subject=Pressure Washing Services&body=Check out this page: https://www.awnguard.com/services/pressure-washing"
              className="text-[#ab772b] hover:opacity-80 transition-opacity"
              aria-label="Share via Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <Link href="/blog" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/1191166484/4047820995.false"
                  alt="Party Tents for Outdoor Events"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors uppercase">
                Party Tents for Outdoor Events
              </h3>
              <p className="text-gray-600 mb-2">April 24, 2024</p>
              <p className="text-gray-600">Preserve your party tent</p>
            </Link>

            {/* Blog Post 2 */}
            <Link href="/blog" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://ext.same-assets.com/1191166484/391181457.jpeg"
                  alt="Party Tent Services for Weddings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors uppercase">
                Party Tent Services for Weddings and Summer Events
              </h3>
              <p className="text-gray-600 mb-2">September 7, 2023</p>
              <p className="text-gray-600">
                Though COVID-19 has put many events on hold, with lifted restrictions right around the corner, it's
                time to reconsider summer plans. People can't wait...
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
