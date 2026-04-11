'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, LineReveal } from '@/components/animations';
import type { BlogPost } from '@/data/blogs';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CATEGORY_INFO: Record<string, { name: string; description: string; themes: string[]; cta: string }> = {
  'software-technology': {
    name: 'Software & Technology for Logistics Companies',
    description: 'From fleet management systems to AI-powered quotation engines  the technology stack that separates market leaders from the rest.',
    themes: ['Custom ERP Systems', 'Real-time Tracking', 'Automation & AI', 'Client Portals'],
    cta: 'Get a free software audit for your logistics operation',
  },
  'digital-marketing': {
    name: 'Digital Marketing for Logistics Companies',
    description: 'How logistics companies build digital visibility, generate qualified leads, and get found by corporate procurement teams.',
    themes: ['Google Ads Strategy', 'SEO for Logistics', 'LinkedIn Marketing', 'Lead Generation'],
    cta: 'See what corporate buyers find when they Google your company',
  },
  'branding-credibility': {
    name: 'Branding & Credibility for Logistics Companies',
    description: 'Building trust signals that make enterprise buyers choose you before the first meeting even happens.',
    themes: ['Corporate Positioning', 'Website Design', 'Trust Signals', 'Vendor Shortlisting'],
    cta: 'Book a free 20-minute credibility review',
  },
  'operations-growth': {
    name: 'Operations & Growth for Logistics Companies',
    description: 'Frameworks and strategies for scaling logistics operations, improving margins, and winning enterprise contracts.',
    themes: ['Revenue Growth', 'Client Retention', 'Compliance', 'Scale Systems'],
    cta: 'Download our logistics compliance checklist',
  },
};

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.slug as string;
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    import('@/data/blogs').then((mod) => {
      const data = mod.BLOG_POSTS || [];
      const published = data.filter((p: BlogPost) => p.published);
      setAllPosts(published);
      const filtered = published.filter((p: BlogPost) => p.categorySlug === categorySlug);
      setPosts(filtered);
    });
  }, [categorySlug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            if (!isNaN(idx)) setVisibleCards((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [posts]);

  const info = CATEGORY_INFO[categorySlug] || {
    name: categorySlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    description: 'Articles and insights for logistics companies.',
    themes: [],
    cta: 'Get in touch',
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Category Hero */}
      <section className="pt-32 pb-0 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-16 md:pt-24 md:pb-20">
          <ScrollReveal>
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] mb-4 block">
              Nexgen Elit Blog Category
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.15 }}
            >
              {info.name}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p
              className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed mb-4"
              style={{
                fontSize: '17px',
                lineHeight: 1.8,
                maxWidth: '600px',
              }}
            >
              {info.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#2A3AFF] border border-[#2A3AFF]/20 px-3 py-1 inline-block">
              {posts.length} Article{posts.length !== 1 ? 's' : ''}
            </span>
          </ScrollReveal>
        </div>
      </section>

      <LineReveal className="h-px bg-black/[0.06] w-full" direction="center" />

      {/* Category Introduction */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <p
              className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed mb-5"
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                maxWidth: '640px',
              }}
            >
              {categorySlug === 'software-technology' && 'In Indian logistics, technology isn\'t a luxury - it\'s the difference between getting shortlisted and getting ignored. These articles cover the systems that logistics companies need to compete at the enterprise level.'}
              {categorySlug === 'digital-marketing' && 'Corporate buyers start their vendor search online. If your logistics company doesn\'t show up in those searches, you\'ve already lost. These articles show you how to build digital visibility that converts.'}
              {categorySlug === 'branding-credibility' && 'Enterprise procurement teams evaluate logistics vendors in under 90 seconds. Your website, your messaging, and your digital presence must pass that test. These articles explain how.'}
              {categorySlug === 'operations-growth' && 'Scaling a logistics company isn\'t just about adding trucks or routes. It\'s about building systems, processes, and credibility that attract bigger clients. These articles cover the operational framework.'}
              {!['software-technology', 'digital-marketing', 'branding-credibility', 'operations-growth'].includes(categorySlug) && 'Explore insights and strategies relevant to your logistics business.'}
            </p>
            <div className="flex flex-wrap gap-2">
              {info.themes.map((theme) => (
                <span
                  key={theme}
                  className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] border border-black/[0.06] px-3 py-1"
                >
                  {theme}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LineReveal className="h-px bg-black/[0.06] w-full" direction="center" />

      {/* Article Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
                <div
                  ref={(el) => { cardsRef.current[i] = el; }}
                  data-idx={i}
                  className={`border border-black/[0.06] hover:border-black/[0.12] hover:bg-[#F7F8FA] transition-colors duration-300 p-7 h-full flex flex-col ${visibleCards.has(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  style={{ transition: 'all 0.5s ease' }}
                >
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
          {posts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed mb-4" style={{ fontSize: '17px' }}>
                No articles in this category yet.
              </p>
              <Link href="/blogs" className="text-[#2A3AFF] font-[family-name:var(--font-montserrat)] text-sm font-medium hover:text-[#2A3AFF]/70 transition-colors duration-300 inline-block">
                <ArrowLeft className="w-3 h-3 inline mr-1" /> Back to all articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <LineReveal className="h-px bg-black/[0.06] w-full" direction="center" />

      {/* Category-Specific CTA */}
      <section className="bg-[#F7F8FA] border-t border-black/[0.06] py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <h2
              className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold mb-3"
              style={{ fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.25 }}
            >
              {info.cta}
            </h2>
            <p className="text-[#6B7280] font-[family-name:var(--font-montserrat)] text-sm leading-relaxed mb-6" style={{ fontSize: '16px', lineHeight: 1.8 }}>
              The call is free. The audit takes 20 minutes. The decision is yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/919307180782?text=Hi%2C%20I%20want%20to%20discuss%20${encodeURIComponent(info.cta)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] bg-[#2A3AFF] text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-[#000000] transition-colors duration-300"
              >
                WHATSAPP US <ArrowRight className="w-3 h-3 inline ml-1" />
              </a>
              <Link
                href="/blogs"
                className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] bg-transparent text-[#000000] border border-black/[0.06] px-6 py-3 inline-flex items-center gap-2 hover:border-black/[0.12] hover:bg-[#F7F8FA] transition-all duration-300"
              >
                ALL ARTICLES <ArrowRight className="w-3 h-3 inline ml-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
