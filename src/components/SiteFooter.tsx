'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Footer } from '@/components/Footer';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4';

export function SiteFooter() {
  return (
    <>
      {/* ====== CTA SECTION ====== */}
      <section id="contact" className="relative bg-black text-white overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-[1]" />
        </div>

        {/* ====== CTA MESSAGE + REDIRECT ====== */}
        <motion.div
          className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center pt-28 md:pt-36 pb-24 md:pb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-poppins)] font-semibold tracking-tight leading-[1.1]" style={{ color: '#FFFFFF' }}>
              Let&apos;s talk about your logistics business.
            </h2>
            <p className="text-sm md:text-base mt-5 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.60)' }}>
              If you&apos;re serious about fixing how your logistics business shows up
              and gets selected, this is where it starts.
            </p>
            <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Not for time-pass enquiries. Only for teams ready to improve how they win work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-[#2A3AFF]"
              style={{
                backgroundColor: '#2A3AFF',
                color: '#fff',
                borderRadius: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#2A3AFF'; e.currentTarget.style.borderColor = '#2A3AFF'; }}
            >
              Get in Touch <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Premium bottom fade - cinematic blend into footer */}
        <div className="absolute bottom-0 left-0 right-0 h-56 z-[5] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.9) 65%, rgba(0,0,0,1) 100%)' }} />
      </section>

      {/* ====== FOOTER ====== */}
      <Footer />
    </>
  );
}
