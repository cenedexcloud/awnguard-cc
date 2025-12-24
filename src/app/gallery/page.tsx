import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gallery - AwnGuard',
  description: 'Experience our expert commercial cleaning services for awnings, windows, and solar panels. View our portfolio of completed projects.',
};

export default function GalleryPage() {
  const awningCleaningImages = [
    'https://ext.same-assets.com/1191166484/1976379564.false',
    'https://ext.same-assets.com/1191166484/1757608754.false',
    'https://ext.same-assets.com/1191166484/908849572.false',
    'https://ext.same-assets.com/1191166484/1268895866.false',
    'https://ext.same-assets.com/1191166484/2800822263.false',
    'https://ext.same-assets.com/1191166484/992400115.false',
    'https://ext.same-assets.com/1191166484/1768408575.false',
    'https://ext.same-assets.com/1191166484/1272380062.false',
    'https://ext.same-assets.com/1191166484/3186633224.false',
    'https://ext.same-assets.com/1191166484/370764455.false',
    'https://ext.same-assets.com/1191166484/2613461558.false',
    'https://ext.same-assets.com/1191166484/285718605.png',
  ];

  const awningManufactureImages = [
    'https://ext.same-assets.com/1191166484/2152666403.false',
    'https://ext.same-assets.com/1191166484/4206958210.false',
    'https://ext.same-assets.com/1191166484/2692165463.false',
    'https://ext.same-assets.com/1191166484/137238477.false',
    'https://ext.same-assets.com/1191166484/1424550887.false',
    'https://ext.same-assets.com/1191166484/2038476313.false',
    'https://ext.same-assets.com/1191166484/3477448272.false',
    'https://ext.same-assets.com/1191166484/621159724.false',
    'https://ext.same-assets.com/1191166484/3462617985.false',
    'https://ext.same-assets.com/1191166484/410081388.false',
    'https://ext.same-assets.com/1191166484/2922280952.false',
    'https://ext.same-assets.com/1191166484/100200474.false',
  ];

  const solarPanelImages = [
    'https://ext.same-assets.com/1191166484/2868644280.false',
    'https://ext.same-assets.com/1191166484/2090672116.false',
    'https://ext.same-assets.com/1191166484/1228270172.false',
    'https://ext.same-assets.com/1191166484/1511342033.false',
    'https://ext.same-assets.com/1191166484/2752140112.false',
    'https://ext.same-assets.com/1191166484/1316159086.false',
    'https://ext.same-assets.com/1191166484/1600990905.false',
    'https://ext.same-assets.com/1191166484/3358325170.false',
    'https://ext.same-assets.com/1191166484/2122989437.false',
    'https://ext.same-assets.com/1191166484/2048055920.false',
    'https://ext.same-assets.com/1191166484/2806359983.false',
    'https://ext.same-assets.com/1191166484/3429246137.false',
    'https://ext.same-assets.com/1191166484/2731041978.false',
    'https://ext.same-assets.com/1191166484/327115677.false',
    'https://ext.same-assets.com/1191166484/4175440377.false',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#2c5f7f]">OUR</span>{' '}
            <span className="text-[#a78d59]">WORK</span>
          </h1>
          <div className="w-1 h-24 bg-[#a78d59] ml-1"></div>
        </div>
      </section>

      {/* Awning Cleaning Section */}
      <section className="py-16 bg-white border-l-4 border-[#a78d59] ml-4 md:ml-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 uppercase">
            Awning Cleaning
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {awningCleaningImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`Awning cleaning project ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#a78d59] text-white px-8 py-3 rounded-full hover:bg-[#8a7349] transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Awning Manufacture Connection Section */}
      <section className="py-16 bg-gray-50 border-l-4 border-[#a78d59] ml-4 md:ml-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase">
            Awning Manufacture Connection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {awningManufactureImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`Awning manufacture project ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#a78d59] text-white px-8 py-3 rounded-full hover:bg-[#8a7349] transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Solar Panel Cleaning Section */}
      <section className="py-16 bg-white border-l-4 border-[#a78d59] ml-4 md:ml-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase">
            Solar Panel Cleaning
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {solarPanelImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`Solar panel cleaning project ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#a78d59] text-white px-8 py-3 rounded-full hover:bg-[#8a7349] transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
