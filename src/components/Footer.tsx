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
            <p className="text-lg mb-4">contact@awnguard.com</p>
            <div className="flex gap-4 justify-start md:justify-end">
              <a href="https://www.facebook.com/AwnGuard" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dawnmwood" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
