import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Logo - Far Left */}
          <div className="pl-4 sm:pl-6 lg:pl-8 flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/1191166484/1472326302.png"
              alt="AwnGuard Logo"
              width={200}
              height={80}
            />
          </div>

          {/* Navigation Links - Center */}
          <nav className="flex flex-wrap gap-6 text-white justify-center flex-1 px-4">
            <a href="/about-us" className="text-[#000000] hover:text-primary transition-colors">About Us</a>
            <a href="/gallery" className="text-[#000000] hover:text-primary transition-colors">Gallery</a>
            <a href="/blog" className="text-[#000000] hover:text-primary transition-colors">Blog</a>
            <a href="/testimonials" className="text-[#000000] hover:text-primary transition-colors">Testimonials</a>
            <a href="/terms-and-conditions" className="text-[#000000] hover:text-primary transition-colors">Terms and Conditions</a>
            <a href="/privacy-policy" className="text-[#000000] hover:text-primary transition-colors">Privacy Policy</a>
          </nav>

          {/* Contact Info - Right */}
          <div className="text-[#000000] text-left md:text-right pr-4 sm:pr-6 lg:pr-8 flex-shrink-0">
            <p className="text-2xl mb-2">(760) 435-1367</p>
            <p className="text-lg">contact@awnguard.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
