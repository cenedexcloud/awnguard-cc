import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Industries We Serve | AwnGuard',
  description: 'AwnGuard serves various industries including property management, HOAs, apartments, corporate chains, and more.',
};

const industries = [
  {
    image: 'https://ext.same-assets.com/1191166484/3762646447.false',
    title: 'Property Management',
    description: 'We have a long history of partnering with small to large scale property management firms. This collaboration is at the core of our business development and retention. Serving commercial properties is our passion.',
  },
  {
    image: 'https://ext.same-assets.com/1191166484/1030037785.jpeg',
    title: 'Home Owner Associations',
    description: 'Balancing high-quality outcomes with the individual needs of each property makes Awn Guard the choice for many HOAs and HOA Management Organizations.',
  },
  {
    image: 'https://ext.same-assets.com/1191166484/3920374708.jpeg',
    title: 'Apartment Management',
    description: 'We go the extra mile to reduce resident impact during service and finish with lasting results.',
  },
  {
    image: 'https://ext.same-assets.com/1191166484/2666312143.jpeg',
    title: 'Corporate Chains',
    description: 'Chain restaurants, services, and other businesses often have awnings. If you\'ve been to a strip mall recently, you\'d notice they\'re everywhere. We make a commitment to perform our services efficiently without disrupting business.',
  },
  {
    image: 'https://ext.same-assets.com/1191166484/3215754796.false',
    title: 'Property Owners',
    description: 'It is always important to have a property be in top shape, so we go the extra mile to make sure our awning services meet their standards.',
  },
  {
    image: 'https://ext.same-assets.com/1191166484/647725588.false',
    title: 'Business Owners',
    description: 'We support and service small businesses in our community; from surf shops to boutiques. Individual small businesses are one of our cornerstone customers.',
  },
  {
    image: 'https://ext.same-assets.com/1191166484/3852174135.false',
    title: 'Hotels',
    description: 'A hotel\'s first impression is usually the outside and it is important that the awning looks phenomenal.',
  },
  {
    image: 'https://ext.same-assets.com/1191166484/3804929558.false',
    title: 'Time-Share',
    description: 'A great first impression can lead to future bookings which is why having a top of the line awning is crucial.',
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Page Title */}
          <h1 className="text-5xl md:text-6xl mb-16" style={{ color: '#2c5282' }}>
            INDUSTRIES
          </h1>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="flex flex-col">
                {/* Industry Image */}
                <div className="w-full aspect-[4/3] relative mb-6 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Industry Title with Underline */}
                <h5 className="text-xl uppercase mb-4" style={{ color: '#3f3d3a' }}>
                  {industry.title}
                  <div className="w-16 h-0.5 mt-2" style={{ backgroundColor: '#c9a793' }} />
                </h5>

                {/* Industry Description */}
                <p className="text-base leading-relaxed" style={{ color: '#6b7280' }}>
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
