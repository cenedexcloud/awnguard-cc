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
      image: null
    },
    {
      id: 2,
      quote: "Thank you so much for getting out here on such a short notice and getting everything done on time before our audit! It was noticeably better the moment we saw your work completed and it is just great. We really appreciate the professionalism of your staff and we could not be happier. We're glad we chose you.",
      author: "Shannon Cox",
      role: "General Manager",
      company: "Applebee's Oceanside",
      image: null
    },
    {
      id: 3,
      quote: "AwnGuard has been cleaning and maintaining my awning for over a decade. When I look down the street – it is obvious who has invested in proper maintenance. Stores with neglected awnings look faded and dirty while mine looks awesome! My awning is less faded than the paint on my building. If I ever have another awning, I will definitely call you.",
      author: "Brook Daniel",
      role: "Owner",
      company: "Juniper Furniture & Home Accessories",
      image: null
    },
    {
      id: 4,
      quote: "You've always been great to work with. You've done a great job since day one – and we appreciate how you remind us when it's time to clean.",
      author: "Ross Melodia",
      role: "Property Manager",
      company: null,
      image: null
    },
    {
      id: 5,
      quote: "Your team always does a great job. We are thankful for our 20-year relationship, and don't ever plan to switch.",
      author: "Phil Ladman",
      role: "Property Manager",
      company: "Boardwalk Development, Inc.",
      image: null
    },
    {
      id: 6,
      quote: "I like the ongoing subscription model where I don't have to think. AwnGuard schedules ahead based on our original agreement and it just gets done. It's a beautiful thing.",
      author: "Mary Murphy Rice",
      role: "Sr Property Manager",
      company: "Capital Growth Properties",
      image: null
    },
    {
      id: 7,
      quote: "It's great to know that you are expanding your services to solar panel cleaning. AwnGuard has been a highly reliable company for us and I appreciate that a lot. You are a valuable tool in my arsenal of different needs for the Division. As far as improvements, just keep doing the awesome service you provide!",
      author: "Ira C Morgan II",
      role: "Building Maintenance Superintendent",
      company: "City of Escondido",
      image: null
    },
    {
      id: 8,
      quote: "Your service is very good. When one of the braces was loose, you kindly pointed it out to us. Your quality cleaning helps improve the life span of the awnings and we appreciate your added attention. You offer a good service. Thank you!",
      author: "George Goland",
      role: "Building Landlord",
      company: null,
      image: null
    },
    {
      id: 9,
      quote: "Every time you call me the awnings look great!",
      author: "Robert Y.",
      role: "Property Manager",
      company: "Hamann Property Management",
      image: null
    },
    {
      id: 10,
      quote: "You guys do an outstanding job!",
      author: "Chris S.",
      role: "Property Manager",
      company: "Mira Mesa Shopping Center West & Mira Mesa Shopping Center East",
      image: null
    },
    {
      id: 11,
      quote: "I think you guys are spot on. I think you guys do a good job.",
      author: "Abigail R.",
      role: "Property Manager",
      company: "Capital Growth Properties",
      image: null
    },
    {
      id: 12,
      quote: "Doing business with your company has been trouble-free and we have enjoyed it. Thank you for your services.",
      author: "Barbara S.",
      role: null,
      company: "D&B Auto",
      image: null
    },
    {
      id: 13,
      quote: "Since using AwnGuard over the last 1 ½ years, we have formed a great partnership and work very smoothly together. They are always willing to work together with us on different tasks, they follow through, do great quality of work, and are easy to coordinate with. When challenges arose, albeit very few, AwnGuard was very flexible and professional in making it right. The quality of work, ease of scheduling, and follow-through is what sets them apart. AwnGuard are great partners in helping Hotel Bel-Air look its best!",
      author: "David M.",
      role: "Director of Housekeeping",
      company: "Hotel Bel Air",
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Video Section */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/1133989794?title=0&byline=0&portrait=0"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
                loading="lazy"
                title="Customer Testimonial Video"
              />
            </div>

            {/* Title and Description */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#1e4d7b]">HAPPY</span>{' '}
                <span className="text-[#a88669]">CUSTOMERS</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The AwnGuard team works tirelessly to ensure every customer has a five-star experience. After all, we couldn't have a successful business without them, and we appreciate each and every one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#f6f6f6] p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-gray-600 text-sm">
                  <p className="font-semibold text-gray-800">- {testimonial.author} {testimonial.role && `| ${testimonial.role}`} {testimonial.company && `| ${testimonial.company}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#8ca3b1] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Image
                src="https://ext.same-assets.com/1191166484/3889870443.png"
                alt="AwnGuard Logo"
                width={200}
                height={80}
              />
            </div>

            {/* Navigation Links - Center */}
            <nav className="flex flex-wrap gap-6 text-white text-sm justify-center">
              <Link href="/about-us" className="hover:underline transition-colors">About Us</Link>
              <Link href="/gallery" className="hover:underline transition-colors">Our Work</Link>
              <Link href="/careers" className="hover:underline transition-colors">Careers</Link>
              <Link href="/terms-and-conditions" className="hover:underline transition-colors">Terms and Conditions</Link>
              <Link href="/privacy-policy" className="hover:underline transition-colors">Privacy Policy</Link>
            </nav>

            {/* Contact Info - Right */}
            <div className="text-white text-right">
              <p className="text-2xl font-bold mb-2">(760) 435-1367</p>
              <p className="text-lg mb-6">contact@awnguard.com</p>
              <div className="flex gap-4 justify-end">
                <a href="https://www.facebook.com/AwnGuard" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
                <a href="https://twitter.com/awnguard" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
