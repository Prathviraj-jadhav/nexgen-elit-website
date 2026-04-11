'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, LineReveal } from '@/components/animations';
import type { BlogPost } from '@/data/blogs';
import { ArrowRight } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [results, setResults] = useState<BlogPost[]>([]);

  useEffect(() => {
    import('@/data/blogs').then((mod) => {
      const published = (mod.BLOG_POSTS || []).filter((p: BlogPost) => p.published);
      setPosts(published);
    });
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query, posts]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchInput.trim()) {
        router.push(`/blogs/search?q=${encodeURIComponent(searchInput.trim())}`);
      }
    },
    [searchInput, router]
  );

  const suggestedCategories = [
    { name: 'Software & Technology', slug: 'software-technology' },
    { name: 'Digital Marketing', slug: 'digital-marketing' },
    { name: 'Branding & Credibility', slug: 'branding-credibility' },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Search Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] border border-black/[0.06] px-3 py-1 inline-block mb-5">
              Search Results
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSearch}>
              <div className="relative w-full max-w-[560px]">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search articles..."
                  autoFocus
                  className="w-full bg-transparent border-b border-black/[0.12] py-3.5 pl-12 pr-4 text-[#000000] font-[family-name:var(--font-montserrat)] text-sm placeholder:text-[#9CA3AF] outline-none focus:border-[#2A3AFF] transition-colors duration-300"
                />
              </div>
            </form>
          </ScrollReveal>
          {query && (
            <ScrollReveal delay={0.2}>
              <div className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] mt-4">
                Showing {results.length} result{results.length !== 1 ? 's' : ''} for &apos;{query}&apos;
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <LineReveal className="h-px bg-black/[0.06] w-full" direction="center" />

      {/* Results */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {results.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
                  <div className="border border-black/[0.06] hover:border-black/[0.12] hover:bg-[#F7F8FA] transition-colors duration-300 p-7 h-full flex flex-col">
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] border border-black/[0.06] px-3 py-1 self-start mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold group-hover:text-[#2A3AFF] transition-colors duration-300 mb-3" style={{ fontSize: '19px', lineHeight: 1.3 }}>
                      {post.title}
                    </h3>
                    <p className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed flex-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[#9CA3AF] font-[family-name:var(--font-montserrat)] text-xs">{post.readTime}</span>
                        <span className="text-[#9CA3AF] font-[family-name:var(--font-montserrat)] text-xs">{post.date}</span>
                      </div>
                      <span className="text-[#2A3AFF] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        Read <ArrowRight className="w-3 h-3 inline ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query ? (
            /* No Results */
            <ScrollReveal>
              <div className="text-center py-16">
                <p className="text-[#000000] font-[family-name:var(--font-poppins)] text-sm mb-2" style={{ fontSize: '18px' }}>
                  No articles found for &ldquo;{query}&rdquo;
                </p>
                <p className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed mb-8">
                  Try browsing by category or reach out to us directly.
                </p>

                {/* Suggested Categories */}
                <div className="mb-8">
                  <div className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#000000] mb-4">
                    Browse by Category
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {suggestedCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/blogs/category/${cat.slug}`}
                        className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#000000] bg-transparent border border-black/[0.06] px-4 py-2 hover:border-[#2A3AFF] hover:text-[#2A3AFF] transition-all duration-300"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919307180782?text=Hi%2C%20I%20was%20looking%20for%20information%20about%20logistics%20technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] bg-[#2A3AFF] text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-[#000000] transition-colors duration-300"
                >
                  ASK US DIRECTLY ON WHATSAPP <ArrowRight className="w-3 h-3 inline ml-1" />
                </a>
              </div>
            </ScrollReveal>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed" style={{ fontSize: '17px' }}>
                Type a search query to find articles.
              </p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-white min-h-screen">
          <div className="flex items-center justify-center" style={{ height: '60vh' }}>
            <p className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm">Loading...</p>
          </div>
        </main>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
