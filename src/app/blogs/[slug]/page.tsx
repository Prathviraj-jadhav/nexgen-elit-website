'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import type { BlogPost, BlogFAQ } from '@/data/blogs';
import { Star, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function extractHeadings(html: string) {
  const regex = /<h2[^>]*>(.*?)<\/h2>/g;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ id, text });
  }
  return headings;
}

function addIdsToHeadings(html: string) {
  return html.replace(/<h2[^>]*>(.*?)<\/h2>/g, (match, content) => {
    const text = content.replace(/<[^>]*>/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<h2 id="${id}">${content}</h2>`;
  });
}

function insertInlineCTAs(html: string) {
  const h2Regex = /<h2/g;
  const matches = [...html.matchAll(h2Regex)];
  if (matches.length < 2) return { content: html, hasSecondCTA: false };

  const firstH2End = html.indexOf('</h2>');
  if (firstH2End === -1) return { content: html, hasSecondCTA: false };

  const beforeSecondH2 = matches.length >= 2 ? matches[1].index : html.length;

  const afterFirstCTA = `
    <div style="border-left:3px solid #2A3AFF;padding:16px 24px;margin:32px 0;background:rgba(42,58,255,0.06);border-radius:0;">
      <p style="font-family:var(--font-montserrat),sans-serif;font-size:15px;line-height:1.7;color:#6B7280;margin:0;">
        Most logistics companies we audit have this exact gap. <a href="https://wa.me/919307180782?text=Hi%2C%20I%20want%20a%20free%20audit" target="_blank" rel="noopener noreferrer" style="color:#2A3AFF;font-weight:600;">Book a free 20-minute audit</a>
      </p>
    </div>
  `;

  const beforeFAQCTA = `
    <div style="border-left:3px solid #2A3AFF;padding:16px 24px;margin:32px 0;background:rgba(42,58,255,0.06);border-radius:0;">
      <p style="font-family:var(--font-montserrat),sans-serif;font-size:15px;line-height:1.7;color:#6B7280;margin:0;">
        Have a specific question? <a href="https://wa.me/919307180782" target="_blank" rel="noopener noreferrer" style="color:#2A3AFF;font-weight:600;">WhatsApp us directly</a>
      </p>
    </div>
  `;

  const part1 = html.substring(0, firstH2End + 5) + afterFirstCTA + html.substring(firstH2End + 5, beforeSecondH2);
  return { content: part1 + beforeFAQCTA + html.substring(beforeSecondH2), hasSecondCTA: true };
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [progress, setProgress] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTOC, setActiveTOC] = useState('');
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    import('@/data/blogs').then((mod) => {
      const data = mod.BLOG_POSTS || [];
      setAllPosts(data);
      const found = data.find((p: BlogPost) => p.slug === slug);
      if (found) setPost(found);
    });
  }, [slug]);

  const headings = useMemo(() => (post ? extractHeadings(post.content) : []), [post]);

  const processedContent = useMemo(() => {
    if (!post) return '';
    const withIds = addIdsToHeadings(post.content);
    const { content } = insertInlineCTAs(withIds);
    return content;
  }, [post]);

  const relatedPosts = useMemo(() => {
    if (!post || allPosts.length === 0) return [];
    return post.relatedPosts
      .map((s) => allPosts.find((p) => p.slug === s))
      .filter(Boolean) as BlogPost[];
  }, [post, allPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (!post) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveTOC(headings[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, headings]);

  if (!post) {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center" style={{ minHeight: '60vh' }}>
          <p className="text-[#6B7280] text-sm leading-relaxed" style={{ fontSize: '18px' }}>
            Post not found.
          </p>
        </div>
      </main>
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq: BlogFAQ) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: 'Nexgen Elit' },
    datePublished: post.date,
    keywords: post.targetKeyword,
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-[3px] bg-[#2A3AFF] z-50 transition-all duration-150" style={{ width: `${progress}%` }} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {post.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Article Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <ScrollReveal>
              <nav className="flex items-center gap-2 mb-8 flex-wrap">
                <Link href="/" className="text-[#9CA3AF] hover:text-[#2A3AFF] transition-colors duration-300 font-[family-name:var(--font-montserrat)] text-xs">
                  Home
                </Link>
                <span className="text-black/[0.12]">/</span>
                <Link href="/blogs" className="text-[#9CA3AF] hover:text-[#2A3AFF] transition-colors duration-300 font-[family-name:var(--font-montserrat)] text-xs">
                  Blog
                </Link>
                <span className="text-black/[0.12]">/</span>
                <Link href={`/blogs/category/${post.categorySlug}`} className="text-[#9CA3AF] hover:text-[#2A3AFF] transition-colors duration-300 font-[family-name:var(--font-montserrat)] text-xs">
                  {post.category}
                </Link>
              </nav>
            </ScrollReveal>

            {/* Category Tag */}
            <ScrollReveal delay={0.1}>
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] border border-[#2A3AFF]/20 px-3 py-1 inline-block mb-5">
                {post.category}
              </span>
            </ScrollReveal>

            {/* H1 */}
            <ScrollReveal delay={0.15}>
              <h1
                className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold mb-5"
                style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', lineHeight: 1.15 }}
              >
                {post.title}
              </h1>
            </ScrollReveal>

            {/* Meta */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-[#000000] text-sm font-[family-name:var(--font-montserrat)]">
                  Nexgen Elit Research Team
                </span>
                <span className="text-[#9CA3AF] font-[family-name:var(--font-montserrat)] text-xs">{post.date}</span>
                <span className="text-[#9CA3AF] font-[family-name:var(--font-montserrat)] text-xs">{post.readTime}</span>
              </div>
            </ScrollReveal>

            {/* Key Stat */}
            {post.keyStat && (
              <ScrollReveal delay={0.25}>
                <div className="bg-[#F7F8FA] border border-black/[0.06] p-6 inline-block mb-5">
                  <div className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold" style={{ fontSize: '32px' }}>{post.keyStat.value}</div>
                  <div className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.1em] text-[#9CA3AF] mt-1">{post.keyStat.label}</div>
                </div>
              </ScrollReveal>
            )}

            {/* Social Share + Logistics Insider */}
            <ScrollReveal delay={0.3}>
              <div className="flex items-center gap-6 flex-wrap">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://nexgenelit.com/blogs/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A3AFF] text-sm flex items-center gap-1.5 hover:text-[#1a2acc] transition-colors duration-300 font-[family-name:var(--font-montserrat)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Share on LinkedIn
                </a>
                <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] border border-[#2A3AFF]/20 px-3 py-1 inline-flex items-center">
                  <Star className="w-3 h-3 text-[#2A3AFF] inline mr-1" fill="currentColor" /> LOGISTICS INSIDER - Written for logistics founders
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <article className="blog-content" dangerouslySetInnerHTML={{ __html: processedContent }} />

              {/* FAQ Section */}
              {post.faqs.length > 0 && (
                <ScrollReveal>
                  <div className="mt-12">
                    <h2 className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold mb-6" style={{ fontSize: '24px' }}>
                      Frequently Asked Questions
                    </h2>
                    <LineReveal className="w-full h-px bg-black/[0.06] mb-0" direction="left" />
                    <div>
                      {post.faqs.map((faq: BlogFAQ, i: number) => (
                        <div key={i} className="border-b border-black/[0.06]">
                          <button
                            className="w-full flex items-center justify-between py-5 px-1 text-left cursor-pointer"
                            onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                          >
                            <span className="text-[#000000] text-sm pr-4 font-[family-name:var(--font-montserrat)]" style={{ fontSize: '15px' }}>{faq.question}</span>
                            <motion.span
                              animate={{ rotate: openFAQ === i ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                              className="text-[#2A3AFF] flex-shrink-0"
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {openFAQ === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="px-1 pb-5">
                                  <p className="text-[#6B7280] text-sm leading-relaxed m-0 font-[family-name:var(--font-montserrat)]" style={{ lineHeight: 1.7 }}>{faq.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* About Nexgen Elit */}
              <ScrollReveal>
                <div className="border-l-[3px] border-[#2A3AFF] bg-[#F7F8FA] p-6 mt-12">
                  <h3 className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold mb-2" style={{ fontSize: '20px' }}>
                    About Nexgen Elit
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed m-0 font-[family-name:var(--font-montserrat)]" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                    Nexgen Elit is India&apos;s first logistics-exclusive digital technology company. We build systems, websites, and growth engines that help logistics companies get found, get shortlisted, and get selected by enterprise buyers. Every solution we build is designed specifically for logistics operations.
                  </p>
                </div>
              </ScrollReveal>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <ScrollReveal>
                  <div className="mt-12">
                    <h2 className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold mb-6" style={{ fontSize: '24px' }}>
                      Related Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedPosts.map((rp) => (
                        <Link key={rp.id} href={`/blogs/${rp.slug}`} className="group block">
                          <div className="border border-black/[0.06] hover:border-black/[0.12] transition-colors duration-300 hover:bg-[#F7F8FA] p-6 h-full">
                            <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] border border-[#2A3AFF]/20 px-3 py-1 inline-block mb-3">
                              {rp.category}
                            </span>
                            <h4 className="text-[#000000] font-semibold group-hover:text-[#2A3AFF] transition-colors duration-300 mb-2 font-[family-name:var(--font-poppins)]" style={{ fontSize: '16px', lineHeight: 1.35 }}>
                              {rp.title}
                            </h4>
                            <span className="text-[#9CA3AF] font-[family-name:var(--font-montserrat)] text-xs">{rp.readTime}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sticky Sidebar - Desktop Only */}
            <div className="hidden lg:block" style={{ width: '280px', flexShrink: 0 }}>
              <div style={{ position: 'sticky', top: '100px' }}>
                {/* TOC */}
                {headings.length > 0 && (
                  <ScrollReveal>
                    <div className="border border-black/[0.06] p-6 mb-5">
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">
                        Table of Contents
                      </div>
                      <div className="flex flex-col gap-1">
                        {headings.map((h) => (
                          <a
                            key={h.id}
                            href={`#${h.id}`}
                            className={`block text-sm py-1.5 transition-all duration-300 px-3 ${
                              activeTOC === h.id
                                ? 'text-[#2A3AFF] bg-[#2A3AFF]/[0.06] font-medium'
                                : 'text-[#9CA3AF] hover:text-[#000000] hover:bg-[#F7F8FA]'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              const el = document.getElementById(h.id);
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }}
                          >
                            {h.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Reading Progress */}
                <ScrollReveal delay={0.1}>
                  <div className="border border-black/[0.06] p-6 mb-5">
                    <div className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">
                      You Are Reading
                    </div>
                    <div className="bg-black/[0.06] h-1 overflow-hidden">
                      <div className="bg-[#2A3AFF] h-full transition-all duration-150" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="font-[family-name:var(--font-montserrat)] text-[10px] text-[#9CA3AF] mt-2">
                      {Math.round(progress)}% complete
                    </div>
                  </div>
                </ScrollReveal>

                {/* Mid-article CTA */}
                <ScrollReveal delay={0.2}>
                  <div className="bg-[#F7F8FA] border border-black/[0.06] p-6 mb-5">
                    <div className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] mb-3">
                      Free Audit
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4 font-[family-name:var(--font-montserrat)]" style={{ fontSize: '14px', lineHeight: 1.7 }}>
                      Is your logistics company passing the 90-second procurement check?
                    </p>
                    <a
                      href="https://wa.me/919307180782?text=Hi%2C%20I%20want%20a%20free%20audit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#2A3AFF] hover:text-[#1a2acc] transition-colors duration-300"
                    >
                      BOOK FREE AUDIT <ArrowRight className="w-3 h-3 inline ml-1" />
                    </a>
                  </div>
                </ScrollReveal>

                {/* Related in Sidebar */}
                {relatedPosts.length > 0 && (
                  <ScrollReveal delay={0.3}>
                    <div className="border border-black/[0.06] p-6">
                      <div className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">
                        Also Read
                      </div>
                      <div className="flex flex-col gap-3">
                        {relatedPosts.slice(0, 3).map((rp) => (
                          <Link key={rp.id} href={`/blogs/${rp.slug}`} className="block group">
                            <div className="text-[#000000] text-sm group-hover:text-[#2A3AFF] transition-colors duration-300 font-[family-name:var(--font-montserrat)]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                              {rp.title}
                            </div>
                            <span className="text-[#9CA3AF] font-[family-name:var(--font-montserrat)] text-xs">{rp.readTime}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#F7F8FA] border-t border-black/[0.06] py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <h2
              className="text-[#000000] font-[family-name:var(--font-poppins)] font-semibold mb-5"
              style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.2 }}
            >
              You just read this for a reason.
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8 font-[family-name:var(--font-montserrat)]" style={{ fontSize: '17px', lineHeight: 1.8 }}>
              If any of this matches what your logistics company is going through, we should talk. The audit is free. The call is 20 minutes. The decision is yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919307180782?text=Hi%2C%20I%20read%20your%20article%20and%20want%20to%20discuss"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] bg-[#2A3AFF] text-white px-7 py-3.5 inline-flex items-center gap-2 hover:bg-[#000000] transition-colors duration-300"
              >
                WHATSAPP US <ArrowRight className="w-3 h-3 inline ml-1" />
              </a>
              <a
                href="mailto:nexgenelit@gmail.com?subject=After%20Reading%20Your%20Article"
                className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.15em] bg-transparent text-[#000000] border border-black/[0.12] px-7 py-3.5 inline-flex items-center gap-2 hover:border-black/[0.25] hover:bg-black/[0.03] transition-all duration-300"
              >
                EMAIL US <ArrowRight className="w-3 h-3 inline ml-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile Sticky Bottom Bar */}
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
