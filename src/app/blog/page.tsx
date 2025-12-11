'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';
import { blogPosts, categories } from '@/lib/blogData';

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get posts to display based on pagination
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMore = visiblePosts < filteredPosts.length;

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + POSTS_PER_PAGE);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisiblePosts(POSTS_PER_PAGE); // Reset pagination on search
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisiblePosts(POSTS_PER_PAGE); // Reset pagination on category change
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-[#1e3a5f]">NEWS & </span>
              <span className="text-[#b8935f]">BLOG</span>
            </h1>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search the blog"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-6 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:border-[#b8935f] transition-colors"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#b8935f] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#b8935f] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            Showing {displayedPosts.length} of {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>

          {/* Articles Grid */}
          {displayedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedPosts.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group"
                >
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <div className="relative h-64">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block bg-[#b8935f] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#b8935f] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No articles found</p>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="bg-[#b8935f] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#a17f4f] transition-colors"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

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
              <Link href="/careers" className="hover:text-[#b8935f] transition-colors">Careers</Link>
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
