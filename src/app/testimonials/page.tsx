import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "I'm glad you've been our awning cleaners for the past 10 years. We love your team and we are happy to support a local small business. Thank you!",
      author: "Allie Dixon",
      role: "Property Manager",
      company: "Madfi LLC",
    },
    {
      id: 2,
      quote: "Thank you so much for getting out here on such a short notice and getting everything done on time before our audit! It was noticeably better the moment we saw your work completed and it is just great. We really appreciate the professionalism of your staff and we could not be happier. We're glad we chose you.",
      author: "Shannon Cox",
      role: "General Manager",
      company: "Applebee's Oceanside",
    },
    {
      id: 3,
      quote: "AwnGuard has been cleaning and maintaining my awning for over a decade. When I look down the street – it is obvious who has invested in proper maintenance. Stores with neglected awnings look faded and dirty while mine looks awesome! My awning is less faded than the paint on my building. If I ever have another awning, I will definitely call you.",
      author: "Brook Daniel",
      role: "Owner",
      company: "Juniper Furniture & Home Accessories",
    },
    {
      id: 4,
      quote: "You've always been great to work with. You've done a great job since day one – and we appreciate how you remind us when it's time to clean.",
      author: "Ross Melodia",
      role: "Property Manager",
      company: null,
    },
    {
      id: 5,
      quote: "Your team always does a great job. We are thankful for our 20-year relationship, and don't ever plan to switch.",
      author: "Phil Ladman",
      role: "Property Manager",
      company: "Boardwalk Development, Inc.",
    },
    {
      id: 6,
      quote: "I like the ongoing subscription model where I don't have to think. AwnGuard schedules ahead based on our original agreement and it just gets done. It's a beautiful thing.",
      author: "Mary Murphy Rice",
      role: "Sr Property Manager",
      company: "Capital Growth Properties",
    },
    {
      id: 7,
      quote: "It's great to know that you are expanding your services to solar panel cleaning. AwnGuard has been a highly reliable company for us and I appreciate that a lot. You are a valuable tool in my arsenal of different needs for the Division. As far as improvements, just keep doing the awesome service you provide!",
      author: "Ira C Morgan II",
      role: "Building Maintenance Superintendent",
      company: "City of Escondido",
    },
    {
      id: 8,
      quote: "Your service is very good. When one of the braces was loose, you kindly pointed it out to us. Your quality cleaning helps improve the life span of the awnings and we appreciate your added attention. You offer a good service. Thank you!",
      author: "George Goland",
      role: "Building Landlord",
      company: null,
    },
    {
      id: 9,
      quote: "Every time you call me the awnings look great!",
      author: "Robert Y.",
      role: "Property Manager",
      company: "Hamann Property Management",
    },
    {
      id: 10,
      quote: "You guys do an outstanding job!",
      author: "Chris S.",
      role: "Property Manager",
      company: "Mira Mesa Shopping Center West & Mira Mesa Shopping Center East",
    },
    {
      id: 11,
      quote: "I think you guys are spot on. I think you guys do a good job.",
      author: "Abigail R.",
      role: "Property Manager",
      company: "Capital Growth Properties",
    },
    {
      id: 12,
      quote: "Doing business with your company has been trouble-free and we have enjoyed it. Thank you for your services.",
      author: "Barbara S.",
      role: null,
      company: "D&B Auto",
    },
    {
      id: 13,
      quote: "Since using AwnGuard over the last 1 ½ years, we have formed a great partnership and work very smoothly together. They are always willing to work together with us on different tasks, they follow through, do great quality of work, and are easy to coordinate with. When challenges arose, albeit very few, AwnGuard was very flexible and professional in making it right. The quality of work, ease of scheduling, and follow-through is what sets them apart. AwnGuard are great partners in helping Hotel Bel-Air look its best!",
      author: "David M.",
      role: "Director of Housekeeping",
      company: "Hotel Bel Air",
    }
  ];

  // Images from the scraped site
  const storeImages = [
    { src: "https://ext.same-assets.com/1191166484/2055219043.false", alt: "GAP Store" },
    { src: "https://ext.same-assets.com/1191166484/3437402497.false", alt: "Exú Store" },
    { src: "https://ext.same-assets.com/1191166484/961531122.false", alt: "Restaurant" },
    { src: "https://ext.same-assets.com/1191166484/669017528.false", alt: "Building Exterior" },
    { src: "https://ext.same-assets.com/1191166484/251602880.false", alt: "Commercial Building" },
    { src: "https://ext.same-assets.com/1191166484/3123569651.false", alt: "Residential Building" },
    { src: "https://ext.same-assets.com/1191166484/669531998.false", alt: "Restaurant Storefront" },
    { src: "https://ext.same-assets.com/1191166484/2009838207.false", alt: "Retail Store" },
    { src: "https://ext.same-assets.com/1191166484/3549307781.false", alt: "Helzberg Diamonds" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Video Section */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/1133989794?title=0&byline=0&portrait=0#t=4s"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
                loading="lazy"
                title="Customer Testimonial Video"
              />
            </div>

            {/* Title and Description */}
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                <span className="text-[#1e4d7b]">HAPPY</span>{' '}
                <span className="text-[#ab772c]">CUSTOMERS</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The AwnGuard team works tirelessly to ensure every customer has a five-star experience. After all, we couldn't have a successful business without them, and we appreciate each and every one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and Images Grid */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* First row - two testimonials */}
            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[0].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[0].author} | {testimonials[0].role} | {testimonials[0].company}
              </p>
            </div>

            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[1].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[1].author} | {testimonials[1].role} | {testimonials[1].company}
              </p>
            </div>

            {/* Second row - two testimonials */}
            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[2].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[2].author} | {testimonials[2].role} | {testimonials[2].company}
              </p>
            </div>

            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[3].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[3].author} | {testimonials[3].role} {testimonials[3].company && `| ${testimonials[3].company}`}
              </p>
            </div>

            {/* Third row - two testimonials */}
            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[4].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[4].author} | {testimonials[4].role} | {testimonials[4].company}
              </p>
            </div>

            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[5].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[5].author} | {testimonials[5].role} | {testimonials[5].company}
              </p>
            </div>
          </div>

          {/* First image row - 3 images */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[0].src}
                alt={storeImages[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[1].src}
                alt={storeImages[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[2].src}
                alt={storeImages[2].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* More testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[6].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[6].author} | {testimonials[6].role} | {testimonials[6].company}
              </p>
            </div>

            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[7].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[7].author} | {testimonials[7].role} {testimonials[7].company && `| ${testimonials[7].company}`}
              </p>
            </div>

            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[8].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[8].author} | {testimonials[8].role} | {testimonials[8].company}
              </p>
            </div>

            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[9].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[9].author} | {testimonials[9].role} | {testimonials[9].company}
              </p>
            </div>
          </div>

          {/* Second image row - 3 images */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[3].src}
                alt={storeImages[3].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[4].src}
                alt={storeImages[4].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[5].src}
                alt={storeImages[5].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* More testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[10].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[10].author} | {testimonials[10].role} | {testimonials[10].company}
              </p>
            </div>

            <div className="bg-[#f6f6f6] p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonials[11].quote}"
              </p>
              <p className="text-gray-600 text-sm">
                - {testimonials[11].author} {testimonials[11].role && `| ${testimonials[11].role}`} | {testimonials[11].company}
              </p>
            </div>
          </div>

          {/* Long testimonial - full width */}
          <div className="bg-[#f6f6f6] p-8 rounded-lg mt-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              "{testimonials[12].quote}"
            </p>
            <p className="text-gray-600 text-sm">
              - {testimonials[12].author} | {testimonials[12].role} | {testimonials[12].company}
            </p>
          </div>

          {/* Final image row - 3 images */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[6].src}
                alt={storeImages[6].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[7].src}
                alt={storeImages[7].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={storeImages[8].src}
                alt={storeImages[8].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
