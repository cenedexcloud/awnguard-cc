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
      <section className="relative pt-20 overflow-hidden">
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
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10 flex items-center justify-center h-[280px] px-4">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800 tracking-wide text-center">
            <strong className="font-bold">WINDOW WASHING SERVICE</strong>
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-12 py-14">
          <div className="grid lg:grid-cols-2 gap-1 items-start">
            {/* Left Side - Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="rounded-3xl overflow-hidden shadow-xl max-w-md w-full">
                <Image
                  src="/wipe.jpg"
                  alt="Window Washing"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="-mt-8">
              <div>
                <h2 className="text-4xl text-gray-900 mb-3 font-bold">
                  WINDOW WASHING
                </h2>
                <div className="w-80 h-1 mb-5" style={{ backgroundColor: '#ab772c' }}></div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-5">
                <p>
                  At AwnGuard, we believe clean windows do more than let in light — they shape the experience of your property. Sparkling glass enhances curb appeal, uplifts tenants and visitors, and contributes to the kind of calm, well-maintained environment that defines an Urban Oasis.
                </p>
                <p>
                  That's why we've added professional window washing  to our services — built specifically for property managers who care about consistent quality  and a reliable service partner.
                </p>
              </div>

              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>Specialize in low to mid-rise commercial properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>All accessible exterior windows, doors, and glass panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>Interior window cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>Frames and sills wiped clean</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>Pure water window cleaning using deionized water filtration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>Water-fed pole technology for streak-free finishes up to 5 stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>No harsh chemicals – spot-free drying and no residue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-0.5">•</span>
                  <span>Safety-first operation with minimal equipment footprint</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-block px-8 py-3 text-white font-medium rounded-lg transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: '#ab772c' }}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
