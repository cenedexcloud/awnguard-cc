'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup, { ExitIntentPopupRef } from '@/components/ExitIntentPopup';
import MainPopup, { MainPopupRef } from '@/components/MainPopup';
import FloatingRocketButton from '@/components/FloatingRocketButton';
import FloatingQuickQuoteButton from '@/components/FloatingQuickQuoteButton';

// CONFIGURATION: Paste your Vimeo video URL here
// Example: const CUSTOMER_TESTIMONIAL_VIMEO_URL = 'https://vimeo.com/123456789';
const CUSTOMER_TESTIMONIAL_VIMEO_URL = 'https://vimeo.com/1133989794?fl=ip&fe=ec';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [awningsCount, setAwningsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const exitPopupRef = useRef<ExitIntentPopupRef>(null);
  const mainPopupRef = useRef<MainPopupRef>(null);

  const testimonials = [
    {
      name: 'Matthew Johnson',
      text: 'AwnGuard has employed competent and hard working individuals. They do a great job servicing my commercial properties.',
      rating: 5,
      timeAgo: '2 months ago',
      image: 'https://ext.same-assets.com/579006187/1137085434.png',
      googleUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2toNVRsWTVVMDV4Y0ZOQ09YcEpaVEZrYkRCNE1VRRAB!2m1!1s0x0:0xcccba5df4f67f411!3m1!1s2@1:CAIQACodChtycF9oOkh5TlY5U05xcFNCOXpJZTFkbDB4MUE%7C0cqio4iDSuC%7C',
    },
    {
      name: 'Matt Dolan',
      text: 'All the benefits of an Owner/Operator who started the business herself. Great service, experience, and best value you will ever find.',
      rating: 5,
      timeAgo: '3 months ago',
      image: 'https://ext.same-assets.com/579006187/65201118.png',
      googleUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUQtNXEtNlBREAE!2m1!1s0x0:0xcccba5df4f67f411!3m1!1s2@1:CIHM0ogKEICAgID-5q-6PQ%7C0cdWU0D7CJ0%7C',
    },
    {
      name: 'Jason Ivey',
      text: "I'm not even a customer of these guys. I'm a customer of a business that they were cleaning for and the guy cleaning was really friendly.",
      rating: 5,
      timeAgo: '5 months ago',
      image: 'https://ext.same-assets.com/579006187/2664750680.png',
      googleUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s0M1VFeGFPRlZMTVZoT2MwUnpVR3BJU2xSMmFGRRAB!2m1!1s0x0:0xcccba5df4f67f411!3m1!1s2@1:CAIQACodChtycF9oOk43UExaOFVLMVhOc0RzUGpISlR2aFE%7C0cHwYum_k0m%7C',
    },
    {
      name: 'Mya L.',
      text: 'Awnguard did an amazing job cleaning our awnings! The owner was incredibly friendly, communicative, and professional. The team\'s attention to detail was impressive, and our awnings look brand new. Highly recommend!',
      rating: 5,
      timeAgo: '9 months ago',
      image: 'https://ext.same-assets.com/579006187/80942002.png',
      googleUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNna2VUUFFnEAE!2m1!1s0x0:0xcccba5df4f67f411!3m1!1s2@1:CIHM0ogKEICAgMCgkeTPQg%7CCgwI2Z_QvQYQgOu56QE%7C',
    },
    {
      name: 'Ernest Prieto',
      text: 'The team at Awnguard is the best! Professional from order to installation. I would highly recommend.',
      rating: 5,
      timeAgo: '1 year ago',
      image: 'https://ext.same-assets.com/579006187/1405305864.png',
      googleUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURiazd5QzNRRRAB!2m1!1s0x0:0xcccba5df4f67f411!3m1!1s2@1:CIHM0ogKEICAgIDbk7yC3QE%7CCgwIrfrVtQYQiMmMjgI%7C',
    },
    {
      name: 'J Corwin',
      text: 'Great professional company. Timely, efficient and trustworthy. Also reasonably priced, they all the total package!',
      rating: 5,
      timeAgo: '1 year ago',
      image: 'https://ext.same-assets.com/579006187/978998555.png',
      googleUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURiOG9lbFVBEAE!2m1!1s0x0:0xcccba5df4f67f411!3m1!1s2@1:CIHM0ogKEICAgIDb8oelUA%7CCgsItYe7tQYQ0LXEcA%7C',
    },
  ];

  const totalPages = Math.ceil(testimonials.length / 3);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleRocketClick = () => {
    exitPopupRef.current?.open();
  };

  // Extract video ID from Vimeo URL
  const getVimeoVideoId = (url: string): string => {
    const match = url.match(/(?:vimeo\.com\/|video\/)(\d+)/);
    return match && match[1] ? match[1] : '';
  };

  const vimeoVideoId = getVimeoVideoId(CUSTOMER_TESTIMONIAL_VIMEO_URL);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate awnings count to 1,000,000
          const awningsDuration = 2000;
          const awningsIncrement = 1000000 / (awningsDuration / 16);
          let awningsCounter = 0;
          const awningsTimer = setInterval(() => {
            awningsCounter += awningsIncrement;
            if (awningsCounter >= 1000000) {
              setAwningsCount(1000000);
              clearInterval(awningsTimer);
            } else {
              setAwningsCount(Math.floor(awningsCounter));
            }
          }, 16);

          // Animate years count to 20
          const yearsDuration = 1500;
          const yearsIncrement = 20 / (yearsDuration / 16);
          let yearsCounter = 0;
          const yearsTimer = setInterval(() => {
            yearsCounter += yearsIncrement;
            if (yearsCounter >= 20) {
              setYearsCount(20);
              clearInterval(yearsTimer);
            } else {
              setYearsCount(Math.floor(yearsCounter));
            }
          }, 16);

          // Animate customers count to 5,000
          const customersDuration = 1800;
          const customersIncrement = 5000 / (customersDuration / 16);
          let customersCounter = 0;
          const customersTimer = setInterval(() => {
            customersCounter += customersIncrement;
            if (customersCounter >= 5000) {
              setCustomersCount(5000);
              clearInterval(customersTimer);
            } else {
              setCustomersCount(Math.floor(customersCounter));
            }
          }, 16);

          // Animate rating to 4.8
          const ratingDuration = 1200;
          const ratingIncrement = 4.8 / (ratingDuration / 16);
          let ratingCounter = 0;
          const ratingTimer = setInterval(() => {
            ratingCounter += ratingIncrement;
            if (ratingCounter >= 4.8) {
              setRatingCount(4.8);
              clearInterval(ratingTimer);
            } else {
              setRatingCount(Math.floor(ratingCounter * 10) / 10);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1133923052?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0"
            className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full"
            style={{
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="AwnGuard Hero Video"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <div className="mb-8">
            <Image
              src="/logo-white.png"
              alt="AwnGuard Logo White"
              width={300}
              height={120}
              className="mx-auto mb-8"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide">
            WE'VE CLEANED OVER 1,000,000<br />AWNINGS!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 tracking-widest uppercase">
            Proudly offering awning and solar panel cleaning<br />
            services in Southern California
          </p>
          <a
            href="/quote"
            className="inline-block bg-[#ab772c] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#01548f] hover:border-[#01548f] transition-colors border-2 border-[#ab772c]"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Urban Oasis Banner */}
      <section className="w-full mt-8 flex justify-center">
        <div className="relative w-full max-w-7xl px-2 sm:px-4">
          <Image
            src="/b2.jpg"
            alt="Urban Oasis Movement"
            width={1920}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-4 uppercase text-gray-800">
            Our Key Services
          </h2>
        </div>
        <div className="max-w-[1600px] mx-auto px-0 mb-16">
          <div className="w-full h-1 bg-primary"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center items-center h-48">
                <Image
                  src="/awning-cleaning-icon.jpg"
                  alt="Awning Cleaning"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-cover"
                />
              </div>
              <h3 className="text-xl mb-4 uppercase">Awning Cleaning</h3>
              <p className="text-gray-500 mb-6">
                Make a great first impression! Let AwnGuard clean and maintain your awnings and shade structures with our specialized hand cleaning process.
              </p>
              <a href="/services/awning-cleaning" className="inline-block border-2 border-[#1b4f75] text-[#1b4f75] px-8 py-3 rounded-full hover:bg-[#1b4f75] hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center items-center h-48">
                <Image
                  src="/solar-panel-icon.jpg"
                  alt="Solar Panel Cleaning"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-cover"
                />
              </div>
              <h3 className="text-xl mb-4 uppercase">Solar Panel Cleaning</h3>
              <p className="text-gray-500 mb-6">
                Keep your solar panel investment producing at peak performance with our tailored cleaning plan designed to meet the needs of both residential and commercial properties.
              </p>
              <a href="/services/solar-panel-cleaning/commercial" className="inline-block border-2 border-[#1b4f75] text-[#1b4f75] px-8 py-3 rounded-full hover:bg-[#1b4f75] hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center items-center h-48">
                <Image
                  src="/awning-repair-icon.jpg"
                  alt="Awning Repair, Replace, New Installation"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-cover"
                />
              </div>
              <h3 className="text-xl mb-4 uppercase">Awning Repair, Replace, New Installation</h3>
              <p className="text-gray-500 mb-6">
                AwnGuard partners with specialized awning manufacturers to provide the highest standard of quality workmanship and industrial fabrics.
              </p>
              <a href="/services/awning-repair" className="inline-block border-2 border-[#1b4f75] text-[#1b4f75] px-8 py-3 rounded-full hover:bg-[#1b4f75] hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center items-center h-48">
                <Image
                  src="/window-washing-icon.jpg"
                  alt="Window Washing"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-cover"
                />
              </div>
              <h3 className="text-xl mb-4 uppercase">Window Washing</h3>
              <p className="text-gray-500 mb-6">
                AwnGuard provides low to mid-rise window washing services. We safely clean up to 4 stories from the ground. Streak-free!
              </p>
              <a href="/services/window-washing" className="inline-block border-2 border-[#1b4f75] text-[#1b4f75] px-8 py-3 rounded-full hover:bg-[#1b4f75] hover:text-white transition-colors">
                Learn More
              </a>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex justify-center items-center h-48">
                <Image
                  src="/pressure-washing-icon.jpg"
                  alt="Pressure Washing"
                  width={192}
                  height={192}
                  className="w-48 h-48 object-cover"
                />
              </div>
              <h3 className="text-xl mb-4 uppercase">Pressure Washing</h3>
              <p className="text-gray-500 mb-6">
                AwnGuard offers complete cleaning and maintenance for outdoor spaces, including pressure washing. Our regular service will keep your property looking its best, all the time.
              </p>
              <a href="/services/pressure-washing" className="inline-block border-2 border-[#1b4f75] text-[#1b4f75] px-8 py-3 rounded-full hover:bg-[#1b4f75] hover:text-white transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Panel Cleaning Section */}
      <section id="solar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            <span className="text-[#1b4f75]">SOLAR PANEL</span>{' '}
            <span className="text-primary">CLEANING</span>
          </h2>

          <div className="relative max-w-4xl mx-auto mb-8">
            <div ref={sliderContainerRef} className="relative overflow-hidden rounded-lg" style={{ height: '600px' }}>
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://ext.same-assets.com/1191166484/414198147.false"
                  alt="Before Cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-bold">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                }}
              >
                <Image
                  src="https://ext.same-assets.com/1191166484/2105894563.false"
                  alt="After Cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold">
                  After
                </div>
              </div>

              {/* Slider */}
              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  const onMouseMove = (moveEvent: MouseEvent) => {
                    if (sliderContainerRef.current) {
                      const rect = sliderContainerRef.current.getBoundingClientRect();
                      const x = moveEvent.clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    }
                  };
                  const onMouseUp = () => {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                  };
                  document.addEventListener('mousemove', onMouseMove);
                  document.addEventListener('mouseup', onMouseUp);
                }}
                onTouchStart={(e) => {
                  const onTouchMove = (moveEvent: TouchEvent) => {
                    if (sliderContainerRef.current && moveEvent.touches[0]) {
                      const rect = sliderContainerRef.current.getBoundingClientRect();
                      const x = moveEvent.touches[0].clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    }
                  };
                  const onTouchEnd = () => {
                    document.removeEventListener('touchmove', onTouchMove as EventListener);
                    document.removeEventListener('touchend', onTouchEnd);
                  };
                  document.addEventListener('touchmove', onTouchMove as EventListener);
                  document.addEventListener('touchend', onTouchEnd);
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg pointer-events-none">
                  <div className="flex items-center gap-1">
                    <ChevronLeft size={20} />
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/services/solar-panel-cleaning"
              className="inline-block bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#00558e] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About/Team Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Customer Testimonial Video - moved here */}
          {vimeoVideoId && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <h2 className="text-4xl text-center mb-8">
                CUSTOMER TESTIMONIAL
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${vimeoVideoId}?h=ec&title=0&byline=0&portrait=0&badge=0#t=4s`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Customer Testimonial Video"
                  ></iframe>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1191166484/3084931785.false"
                alt="AwnGuard Team"
                width={600}
                height={800}
                className="w-full rounded-lg"
              />
            </div>

            <div>
              <p className="text-secondary text-lg mb-4 uppercase tracking-wide">When you're ready to get started</p>
              <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
                WE ARE THE TEAM YOU'RE LOOKING FOR!
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                AwnGuard has been cleaning commercial properties in Southern California for more than 20 years, with an initial focus on industrial fabrics such as awnings, shade structures and large outdoor tents. We have expanded that business to also include pressure washing, exterior window washing and in 2023 have added solar panel cleaning for both residential and commercial properties. We are proud to be in this growing field as California strives to meet its renewable energy goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/quote"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00558e] transition-colors text-center"
                >
                  Get Started with a Quote
                </a>
                <a
                  href="/cleaning-services"
                  className="inline-block border-2 border-[#1b4f75] text-[#1b4f75] px-8 py-3 rounded-full font-semibold hover:bg-[#1b4f75] hover:text-white transition-colors text-center"
                >
                  More About Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            {/* Title with Quote Icon */}
            <div className="max-w-6xl mx-auto mb-8">
              <div className="relative">
                <div className="flex items-center justify-center gap-6 pb-6">
                  <div>
                    <h2 className="text-5xl md:text-6xl">
                      <span className="text-[#1b4f75]">OUR </span>
                      <span className="text-[#ab772c]">HAPPY CLIENTS</span>
                    </h2>
                  </div>
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#3a3a3a] rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Full-width horizontal line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ab772c]"></div>
                {/* Vertical line on the right creating L-shape */}
                <div className="absolute right-0 bottom-0 w-0.5 h-40 bg-[#ab772c]"></div>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                  <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                  <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                  <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                  <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                </svg>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">Google</span>
                  <span className="text-2xl font-bold text-gray-800">4.8</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Enhanced Review Cards */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 hover:opacity-80 transition-opacity"
                aria-label="Previous testimonial"
              >
                <div className="w-[60px] h-[60px] bg-[#6b6b6b] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 hover:opacity-80 transition-opacity"
                aria-label="Next testimonial"
              >
                <div className="w-[60px] h-[60px] bg-[#6b6b6b] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              <div className="grid md:grid-cols-3 gap-6 mb-12 transition-all duration-500 ease-in-out">
                {testimonials.slice(currentTestimonial * 3, currentTestimonial * 3 + 3).map((testimonial, index) => (
                  <div
                    key={currentTestimonial * 3 + index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 animate-fadeIn"
                  >
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4 text-yellow-400 text-lg">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                    <button className="text-[#1b4f75] text-sm font-medium hover:underline mb-6">
                      Read more
                    </button>

                    {/* Reviewer Info with Profile Picture */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <svg className="absolute -bottom-1 -right-1 w-5 h-5" viewBox="0 0 48 48" fill="none">
                          <circle cx="24" cy="24" r="24" fill="white"/>
                          <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                          <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                          <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                          <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <a
                            href={testimonial.googleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-gray-900 hover:text-[#1b4f75] transition-colors cursor-pointer"
                          >
                            {testimonial.name}
                          </a>
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-3 mb-10">
                {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-8 bg-primary'
                        : 'w-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="/testimonials"
                  className="inline-block bg-[#ab772c] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#9a6623] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  See More Testimonials
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Main Popup - Time + Engagement Based */}
      <MainPopup ref={mainPopupRef} />

      {/* Exit Intent Popup */}
      <ExitIntentPopup ref={exitPopupRef} />

      {/* Floating Rocket Button */}
      <FloatingRocketButton onClick={handleRocketClick} />

      {/* Floating Quick Quote Button */}
      <FloatingQuickQuoteButton />
    </div>
  );
}
