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
    '/gallery/awning-cleaning-1765310212938-5di702pndye.png',
    '/gallery/awning-cleaning-1765310213511-tb3befu9kxj.png',
    '/gallery/awning-cleaning-1765310213997-85u2mo9u1ex.png',
    '/gallery/awning-cleaning-1765310214178-iw4pfoo7er.jpg',
    '/gallery/awning-cleaning-1765310214419-a8yuugv20dq.jpg',
    '/gallery/awning-cleaning-1765310214616-hm0bp2ak64h.jpg',
    '/gallery/awning-cleaning-1765310214787-55cey7bejpy.jpg',
    '/gallery/awning-cleaning-1765310214973-taesj8u134p.jpg',
    '/gallery/awning-cleaning-1765310215485-x1ll9sgvldl.jpg',
    '/gallery/awning-cleaning-1765310215664-1yycucn0gqx.jpg',
    '/gallery/awning-cleaning-1765310215830-jp73zg9wl9p.jpg',
    '/gallery/awning-cleaning-1765310216151-di2tluzoada.jpg',
  ];

  const awningManufactureImages = [
    '/gallery/awning-manufacture-1765310335203-wgb9tywf06.jpg',
    '/gallery/awning-manufacture-1765310335373-ajx5wudlzl9.jpg',
    '/gallery/awning-manufacture-1765310335541-e41cuk0ty6w.jpg',
    '/gallery/awning-manufacture-1765310335709-e7qpg0d4xcv.jpg',
    '/gallery/awning-manufacture-1765310335865-fhwm7k5vh4c.jpg',
    '/gallery/awning-manufacture-1765310336030-ffaxx52vhm6.jpg',
    '/gallery/awning-manufacture-1765310336200-46yl24kct3p.jpg',
    '/gallery/awning-manufacture-1765310336357-zodivcc6a8r.jpg',
    '/gallery/awning-manufacture-1765310336526-nc8cu35had.jpg',
    '/gallery/awning-manufacture-1765310336953-s596d9aw8e.jpg',
    '/gallery/awning-manufacture-1765310337119-c3xzj783dyp.jpg',
  ];

  const solarPanelImages = [
    '/gallery/solar-panel-1765310842033-dy5kh87efwq.jpg',
    '/gallery/solar-panel-1765311151872-pikuk7yzfe.jpg',
    '/gallery/solar-panel-1765488100284-i6ikt6mbl1l.jpg',
    '/gallery/solar-panel-1765488100871-h4lavq9f5hf.jpg',
    '/gallery/solar-panel-1765488101052-wgi7k3xh65a.jpg',
    '/gallery/solar-panel-1765488101227-9u6zoteacah.jpg',
    '/gallery/solar-panel-1765488101883-tdrr9byjw2b.jpg',
    '/gallery/solar-panel-1765488102672-uo7iujz60o.jpg',
    '/gallery/solar-panel-1765488102899-lj5nm9van3r.jpg',
    '/gallery/solar-panel-1765488103068-u1gfg9px8kk.jpg',
    '/gallery/solar-panel-1765488103730-my79s626af.jpg',
    '/gallery/solar-panel-1765488104220-d9zv44nkwqw.jpg',
    '/gallery/solar-panel-1765488104552-t4jxleg79yo.jpg',
    '/gallery/solar-panel-1765488104731-6dulb7ugsmd.jpg',
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
