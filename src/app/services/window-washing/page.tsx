import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WindowWashing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Bubbles Background */}
      <section className="relative pt-32 pb-24 overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-wide">
            WINDOW WASHING SERVICE
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md">
                <Image
                  src="https://ext.same-assets.com/1191166484/3558857120.webp"
                  alt="Window Washing"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  WINDOW WASHING
                </h2>
                <div className="w-32 h-1 mb-6" style={{ backgroundColor: '#C8A67A' }}></div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At AwnGuard, we believe clean windows do more than let in light — they shape the experience of your property. Sparkling glass enhances curb appeal, uplifts tenants and visitors, and contributes to the kind of calm, well-maintained environment that defines an Urban Oasis.
                </p>
                <p>
                  That's why we've added professional window washing to our services — built specifically for property managers who care about consistent quality and a reliable service partner.
                </p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Specialize in low to mid-rise commercial properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>All accessible exterior windows, doors, and glass panels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Interior window cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Frames and sills wiped clean</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Pure water window cleaning using deionized water filtration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Water-fed pole technology for streak-free finishes up to 5 stories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>No harsh chemicals – spot-free drying and no residue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Safety-first operation with minimal equipment footprint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
