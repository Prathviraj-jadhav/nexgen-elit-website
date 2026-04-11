'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { BlogPost } from '@/data/blogs';
import { ArrowRight, Mail } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';

const CATEGORIES = [
  { label: 'All', slug: 'all' },
  { label: 'Software & Technology', slug: 'software-technology' },
  { label: 'Digital Marketing', slug: 'digital-marketing' },
  { label: 'Branding & Credibility', slug: 'branding-credibility' },
  { label: 'Operations & Growth', slug: 'operations-growth' },
];

const CITIES = ['Mumbai', 'Delhi NCR', 'Bengaluru', 'Nagpur', 'Pune', 'Surat', 'Hyderabad', 'Chennai'];

export default function BlogsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    import('@/data/blogs').then((mod) => {
      const published = (mod.BLOG_POSTS || []).filter((p: BlogPost) => p.published);
      setPosts(published);
    });
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blogs/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }, [searchQuery, router]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
      }
    } catch (err) {
      setNewsletterStatus('error');
    }
  };

  const filteredPosts = posts.filter((p) => {
    if (activeCategory !== 'all' && p.categorySlug !== activeCategory) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const startHerePosts = posts
    .filter((p) => ['why-92-percent-logistics-fail-corporate-vendor-google-test', 'website-design-logistics-corporate-procurement-needs', 'ai-freight-quotation-system-60-seconds'].includes(p.slug))
    .slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            if (!isNaN(idx)) {
              setVisibleCards((prev) => new Set(prev).add(idx));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredPosts]);

  return (
    <main className="bg-white min-h-screen">
      <Navbar transparent />

      {/* ── HEADER ── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-black overflow-hidden hero-dark-text">

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] border border-[#2A3AFF]/20 bg-white/10 backdrop-blur-md px-3 py-1 inline-block mb-6">
              Logistics Intelligence
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="font-[family-name:var(--font-poppins)] text-white font-semibold"
              style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', lineHeight: 1.15, maxWidth: '720px' }}
            >
              The Logistics Knowledge Base for Founders Who Want to Win Corporate Contracts
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="mt-6 font-[family-name:var(--font-montserrat)] text-white/70 text-sm leading-relaxed"
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                maxWidth: '640px',
              }}
            >
              Research, strategies, and frameworks  written exclusively for Indian logistics companies building digital credibility and winning enterprise clients.
            </p>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-0 mt-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.12em] pb-3 px-4 transition-all duration-300 cursor-pointer border-b-2 ${activeCategory === cat.slug
                      ? 'border-[#2A3AFF] text-[#2A3AFF]'
                      : 'border-transparent text-[#9CA3AF] hover:text-[#6B7280] hover:border-[#9CA3AF]/40'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Search */}
          <ScrollReveal delay={0.4}>
            <form onSubmit={handleSearch} className="mt-8">
              <div className="relative max-w-[380px] w-full">
                <svg
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-2.5 pl-8 pr-4 text-sm font-[family-name:var(--font-montserrat)] text-white placeholder:text-white/40 outline-none focus:border-[#2A3AFF] transition-colors duration-300"
                />
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" direction="left" />
      </div>

      {/* ── AUTHORITY STRIP ── */}
      <section className="bg-[#F7F8FA] py-8 border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "India's First Logistics-Exclusive Agency",
              '30+ Logistics Articles Published',
              'Serving Logistics Companies in 8 Cities',
              '100% Logistics Focus  No Other Industry',
            ].map((stat) => (
              <div key={stat} className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.1em] text-[#9CA3AF]">
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINE REVEAL: After authority strip, before featured card ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" direction="left" />
      </div>

      {/* ── CUSTOM ENGINE GRAPHIC ── */}
      {activeCategory === 'all' && !searchQuery && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
            <ScrollReveal>
              <div className="relative border border-black/[0.06] overflow-hidden">
                <img
                  src="/img/Operations.png"
                  alt="Nexgen Operations Engine"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" direction="left" />
      </div>

      {/* ── BLOG GRID + SIDEBAR ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Grid */}
            <div className="flex-1">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {filteredPosts.map((post, i) => (
                  <StaggerItem key={post.id} className={i > 0 ? 'border-t border-black/[0.06] pt-8' : ''}>
                    <Link href={`/blogs/${post.slug}`} className="group block">
                      <div
                        ref={(el) => { cardsRef.current[i] = el; }}
                        data-idx={i}
                        className={`pb-8 h-full flex flex-col border-l-2 border-transparent hover:border-l-[#2A3AFF] hover:bg-[#F7F8FA]/50 pl-4 pr-2 -ml-[2px] transition-all duration-300 ${visibleCards.has(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                          }`}
                        style={{ transition: 'all 0.5s ease' }}
                      >
                        <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] mb-4 self-start">
                          {post.category}
                        </span>
                        <h3
                          className="font-[family-name:var(--font-poppins)] text-[#000000] font-semibold group-hover:text-[#2A3AFF] transition-colors duration-300 mb-3"
                          style={{ fontSize: '18px', lineHeight: 1.35 }}
                        >
                          {post.title}
                        </h3>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#6B7280] text-sm leading-relaxed flex-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '14px', lineHeight: 1.7 }}>
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4">
                          <div className="flex items-center gap-3">
                            <span className="font-[family-name:var(--font-montserrat)] text-[#9CA3AF] text-xs">{post.readTime}</span>
                            <span className="font-[family-name:var(--font-montserrat)] text-[#9CA3AF] text-xs">{post.date}</span>
                          </div>
                          <span className="font-[family-name:var(--font-montserrat)] text-[#2A3AFF] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                            Read <ArrowRight className="w-3 h-3 inline ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              {filteredPosts.length === 0 && (
                <div className="py-16 text-center">
                  <p className="font-[family-name:var(--font-montserrat)] text-[#6B7280] text-sm leading-relaxed" style={{ fontSize: '17px' }}>
                    No articles found in this category.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar  Desktop Only */}
            <div className="hidden lg:block" style={{ width: '240px', flexShrink: 0 }}>
              {/* Top divider */}
              <div className="h-px bg-black/[0.06] mb-0" />

              <div style={{ position: 'sticky', top: '100px' }}>
                {/* Start Here */}
                <ScrollReveal>
                  <div className="border border-black/[0.06] p-5 mb-3">
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] block mb-4">
                      Start Here
                    </span>
                    {startHerePosts.length > 0 ? (
                      <div className="flex flex-col gap-3">
                        {startHerePosts.map((p) => (
                          <Link key={p.id} href={`/blogs/${p.slug}`} className="block group">
                            <div className="font-[family-name:var(--font-montserrat)] text-[#000000] text-sm group-hover:text-[#2A3AFF] transition-colors duration-300" style={{ lineHeight: 1.5, fontSize: '13px' }}>
                              {p.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="font-[family-name:var(--font-montserrat)] text-[#6B7280] text-sm leading-relaxed" style={{ fontSize: '13px' }}>
                        Recommended articles for first-time visitors.
                      </p>
                    )}
                  </div>
                </ScrollReveal>

                {/* Free Audit CTA */}
                <ScrollReveal delay={0.1}>
                  <div className="border border-black/[0.06] bg-[#F7F8FA] p-5 mb-3">
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] block mb-3">
                      Free Digital Audit
                    </span>
                    <p className="font-[family-name:var(--font-montserrat)] text-[#6B7280] text-sm leading-relaxed mb-4" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                      We look at what corporate buyers see when they Google your company.
                    </p>
                    <a
                      href="https://wa.me/919307180782?text=Hi%2C%20I%20want%20a%20free%20digital%20audit%20for%20my%20logistics%20company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] hover:text-[#000000] transition-colors duration-300"
                    >
                      Book via WhatsApp <ArrowRight className="w-3 h-3 inline ml-1" />
                    </a>
                  </div>
                </ScrollReveal>

                {/* WhatsApp */}
                <ScrollReveal delay={0.2}>
                  <div className="border border-black/[0.06] p-5 mb-3">
                    <p className="font-[family-name:var(--font-montserrat)] text-[#000000] text-sm mb-3" style={{ lineHeight: 1.6, fontSize: '13px' }}>
                      Have a specific question about your logistics business?
                    </p>
                    <a
                      href="https://wa.me/919307180782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-montserrat)] text-[#2A3AFF] text-sm font-medium hover:text-[#000000] transition-colors duration-300"
                    >
                      WhatsApp Us Directly <ArrowRight className="w-3 h-3 inline ml-1" />
                    </a>
                  </div>
                </ScrollReveal>

                {/* Categories */}
                <ScrollReveal delay={0.3}>
                  <div className="border border-black/[0.06] p-5 mb-3">
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#000000] block mb-4">
                      Categories
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {CATEGORIES.filter((c) => c.slug !== 'all').map((cat) => {
                        const count = posts.filter((p) => p.categorySlug === cat.slug).length;
                        return (
                          <Link key={cat.slug} href={`/blogs/category/${cat.slug}`} className="block group">
                            <div className="font-[family-name:var(--font-montserrat)] text-[#000000] text-sm flex justify-between items-center group-hover:text-[#2A3AFF] transition-colors duration-300" style={{ fontSize: '13px' }}>
                              <span>{cat.label}</span>
                              <span className="text-[#9CA3AF] text-xs">{count}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Cities */}
                <ScrollReveal delay={0.4}>
                  <div className="border border-black/[0.06] p-5 mb-3">
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#000000] block mb-4">
                      Used by Logistics Founders In
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {CITIES.map((city) => (
                        <span
                          key={city}
                          className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.1em] text-[#9CA3AF] bg-[#F7F8FA] px-3 py-1 border border-black/[0.06]"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Newsletter */}
                <ScrollReveal delay={0.5}>
                  <div className="border border-black/[0.06] p-5">
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] block mb-3">
                      Newsletter
                    </span>
                    <p className="font-[family-name:var(--font-montserrat)] text-[#6B7280] text-sm leading-relaxed mb-4" style={{ fontSize: '13px', lineHeight: 1.7 }}>
                      Weekly logistics insights, strategies, and frameworks  delivered to your inbox.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9CA3AF] pointer-events-none" />
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full bg-transparent border border-black/[0.12] py-2 pl-9 pr-3 text-xs font-[family-name:var(--font-montserrat)] text-[#000000] placeholder:text-[#9CA3AF] outline-none focus:border-[#2A3AFF] transition-colors duration-300"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          required
                          disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                        className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] bg-[#2A3AFF] text-white px-4 py-2 hover:bg-[#000000] transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {newsletterStatus === 'loading' ? 'Subscribing...' : newsletterStatus === 'success' ? 'Subscribed' : 'Subscribe'}
                      </button>
                      {newsletterStatus === 'error' && (
                        <p className="text-[10px] text-red-500 font-[family-name:var(--font-montserrat)] mt-1">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" direction="left" />
      </div>

      {/* ── CTA BLOCK ── */}
      <section className="bg-[#F7F8FA] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          {/* LineReveal divider above heading */}
          <div className="max-w-5xl mx-auto mb-10">
            <LineReveal className="h-px bg-black/[0.06] w-full" direction="center" />
          </div>

          <ScrollReveal>
            <h2
              className="font-[family-name:var(--font-poppins)] text-[#000000] font-semibold mb-3"
              style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.25 }}
            >
              Your competitors are reading this too. The ones who act first win the corporate contracts.
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-[#6B7280] text-sm leading-relaxed mb-2" style={{ fontSize: '16px', lineHeight: 1.8 }}>
              Book a free 20-minute digital audit. We look at what corporate buyers see when they Google your company and tell you exactly what needs to change.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-[#9CA3AF] text-xs mb-8" style={{ fontSize: '13px', lineHeight: 1.6 }}>
              No spam. No obligation. Just actionable clarity for your logistics business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919307180782?text=Hi%2C%20I%20want%20a%20free%20digital%20audit%20for%20my%20logistics%20company"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] bg-[#2A3AFF] text-white px-6 py-3 inline-flex items-center justify-center gap-2 hover:bg-[#000000] transition-colors duration-300"
              >
                WhatsApp Us <ArrowRight className="w-3 h-3 inline ml-1" />
              </a>
              <a
                href="mailto:nexgenelit@gmail.com?subject=Free%20Digital%20Audit"
                className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] bg-transparent text-[#000000] border border-black/[0.12] px-6 py-3 inline-flex items-center justify-center gap-2 hover:border-[#000000] hover:bg-white transition-all duration-300"
              >
                Email Us <ArrowRight className="w-3 h-3 inline ml-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MOBILE STICKY BOTTOM BAR ── */}
      <a
        href="https://wa.me/919307180782?text=Hi%2C%20I%20want%20a%20free%20digital%20audit%20for%20my%20logistics%20company"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-sticky-cta md:hidden"
      >
        Get a Free Digital Audit <ArrowRight className="w-3 h-3 inline mx-1" /> WhatsApp Us
      </a>
    </main>
  );
}
