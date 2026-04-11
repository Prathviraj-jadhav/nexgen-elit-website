'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NAV_STRUCTURE = [
  {
    group: 'Products',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'App Development', href: '/services' },
      { label: 'Custom Software', href: '/services' },
      { label: 'CRM Systems', href: '/services' },
      { label: 'ERP Solutions', href: '/services' },
    ],
  },
  {
    group: 'Growth',
    links: [
      { label: 'Marketing Systems', href: '/services' },
      { label: 'AI Automation', href: '/ai-products' },
      { label: 'Workflow Automation', href: '/ai-products' },
      { label: 'Lead Generation', href: '/services' },
      { label: 'Analytics', href: '/ai-products' },
    ],
  },
  {
    group: 'What We Fix',
    links: [
      { label: 'Not showing up when buyers search', slug: 'why-92-percent-logistics-fail-corporate-vendor-google-test' },
      { label: 'Strong ops but weak perception', slug: 'website-design-logistics-corporate-procurement-needs' },
      { label: 'Over-dependence on calls & WhatsApp', slug: 'whatsapp-tracking-bot-logistics-stop-tracking-calls' },
      { label: 'Losing deals before first interaction', slug: 'ai-freight-quotation-system-60-seconds' },
      { label: 'No structured client experience', slug: 'client-vendor-portal-logistics-stop-whatsapp-accounts' },
    ],
  },
  {
    group: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blogs' },
      { label: 'Investor', href: '/investor' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nxgen-elit/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@nexgenelit.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;

    setLoading(true);
    try {
      // Get tracking metadata
      let meta = {};
      if (typeof window !== 'undefined') {
        const { getMetadata } = await import('@/hooks/useUserTracking');
        const data = getMetadata();
        meta = {
          page: data?.currentPage,
          device: data?.deviceType,
          isReturning: data?.isReturning,
          timestamp: data?.timestamp,
        };
      }

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), metadata: meta }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      }
    } catch (err) {
      console.error('Subscription failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">

        {/* ── Top Row: Brand + Newsletter ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-14 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/icons.png"
                alt="Nexgen Elit"
                width={28}
                height={28}
                className="object-contain"
              />
              <span
                className="text-sm font-semibold tracking-wide text-white"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Nexgen Elit
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              We build systems that make logistics companies visible, structured, and chosen.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.25em] mb-3 font-medium" style={{ color: 'rgba(255,255,255,0.30)' }}>
              Stay Updated
            </p>
            <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Logistics technology insights, delivered monthly.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-stretch gap-0 w-full max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-transparent border border-white/[0.12] border-r-0 px-4 py-2.5 text-xs text-white placeholder:text-white/25 focus:outline-none focus:border-white/[0.25] transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="border border-[#2A3AFF]/50 text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-5 py-2.5 bg-[#2A3AFF]/10 hover:bg-[#2A3AFF] hover:border-[#2A3AFF] transition-all duration-300 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {subscribed ? 'DONE' : 'SUBSCRIBE'}
              </button>
            </form>
          </div>
        </div>

        {/* ── Middle: Link Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-14">
          {NAV_STRUCTURE.map((group) => (
            <div key={group.group}>
              <p className="text-[10px] uppercase tracking-[0.25em] mb-5 font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>
                {group.group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={'slug' in item ? `/blogs/${item.slug}` : (item.href || '/')}
                      className="text-xs transition-colors duration-200 block leading-snug"
                      style={{ color: 'rgba(255,255,255,0.50)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.50)'; }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[10px] tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.20)' }}>
            © {new Date().getFullYear()} Nexgen Elit. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-[10px] tracking-[0.12em] transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.20)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
            >
              PRIVACY
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-[10px] tracking-[0.12em] transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.20)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
            >
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
