import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AwningRepair() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/slr.jpg"
            alt="Manufacturing facility background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/75"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6 uppercase font-bold">
            Awning Manufacture Connection
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 uppercase">
            Top quality awnings!
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#ae762b] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#01548f] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Awning Recover & New Awnings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <Image
                src="/awn.jpg"
                alt="Striped awning"
                width={400}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-2/3">
              {/* Awning Recover */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl text-gray-800 mb-3 uppercase tracking-wide font-bold">
                  AWNING RECOVER
                </h2>
                <div className="w-[280px] md:w-[320px] h-0.5 bg-primary mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  While cleaning and maintaining awning fabric can dramatically increase the useable life of awnings, all fabric eventually deteriorates. Recovering existing frames can be a great way to revitalize a property for about half of the capital expense of fully replacing the awnings.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  AwnGuard works for hand in hand with reputable awning manufacturers, who uphold the highest standard of quality workmanship and value.
                </p>
              </div>

              {/* New Awnings */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl text-gray-800 mb-3 uppercase tracking-wide font-bold">
                  NEW AWNINGS
                </h2>
                <div className="w-[220px] md:w-[250px] h-0.5 bg-primary mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Recent building purchases, new construction, new restaurant locations – or just to deal with long-standing shade needs are all reasons for new awning construction. Well designed and custom-built awnings can add tremendous curb appeal while they provide signage, shade, and protection from the elements. Let us help by connecting you with one of the reputable awning manufacturers with who we have worked for years.
                </p>

                <Link
                  href="/quote"
                  className="inline-block border-2 border-primary text-primary px-10 py-3 rounded-full text-base font-medium hover:bg-primary hover:text-white transition-colors"
                >
                  Start with a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
