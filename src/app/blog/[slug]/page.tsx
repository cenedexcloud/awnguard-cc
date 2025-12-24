import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Facebook, Linkedin, Mail } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts from same category
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Get previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-50"
        />
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 uppercase max-w-5xl">
          {post.title}
        </h1>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category and Date */}
          <div className="mb-8 flex items-center gap-4 text-sm">
            <span className="inline-block bg-[#b8935f] text-white px-4 py-2 rounded-full font-semibold">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
          </div>

          {/* Intro Section - Two Column */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center">
              <div className="text-gray-600 leading-relaxed text-lg space-y-4">
                {post.content.intro.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6 uppercase">
                  {section.heading}
                </h2>
                <div className="text-gray-600 leading-relaxed mb-6 space-y-4">
                  {section.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>
                {section.list && (
                  <ul className="space-y-3 text-gray-600 mb-6">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#b8935f] mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center py-12 border-t border-gray-200 mt-16">
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="text-gray-600 hover:text-[#b8935f] transition-colors font-medium"
              >
                &lt; {previousPost.title}
              </Link>
            ) : (
              <span className="text-gray-400">&lt; No previous post</span>
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="text-gray-600 hover:text-[#b8935f] transition-colors font-medium text-right"
              >
                {nextPost.title} &gt;
              </Link>
            ) : (
              <span className="text-gray-400">No next post &gt;</span>
            )}
          </div>

          {/* Social Share */}
          <div className="flex justify-center gap-6 py-8">
            <button className="text-[#b8935f] hover:text-[#8b7049] transition-colors" aria-label="Share on Facebook">
              <Facebook className="w-6 h-6" />
            </button>
            <button className="text-[#b8935f] hover:text-[#8b7049] transition-colors" aria-label="Share on LinkedIn">
              <Linkedin className="w-6 h-6" />
            </button>
            <button className="text-[#b8935f] hover:text-[#8b7049] transition-colors" aria-label="Share via Email">
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#b8935f] transition-colors uppercase">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{relatedPost.date}</p>
                  <p className="text-gray-600">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#8ba8ba] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Image
                src="https://ext.same-assets.com/1191166484/2319811656.png"
                alt="AwnGuard Logo"
                width={200}
                height={80}
                className="brightness-0 invert"
              />
            </div>

            {/* Navigation Links - Center */}
            <nav className="flex flex-wrap gap-6 text-white text-sm justify-center">
              <Link href="/about-us" className="hover:text-[#b8935f] transition-colors">About Us</Link>
              <Link href="/industries" className="hover:text-[#b8935f] transition-colors">Our Work</Link>
              <Link href="/terms-and-conditions" className="hover:text-[#b8935f] transition-colors">Terms and Conditions</Link>
              <Link href="/privacy-policy" className="hover:text-[#b8935f] transition-colors">Privacy Policy</Link>
            </nav>

            {/* Contact Info - Right */}
            <div className="text-white md:text-right">
              <p className="text-2xl font-bold mb-2">(760) 435-1367</p>
              <p className="text-lg">contact@awnguard.com</p>
            </div>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
