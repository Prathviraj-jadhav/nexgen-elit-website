'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import { ArrowUpRight } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';
import Link from 'next/link';

/* ============================================
   SCANDINAVIAN ABOUT PAGE
   ============================================ */

/* ── Observation list items ── */
const OBSERVATION_ITEMS = [
  'They run fleets.',
  'They manage routes.',
  'They deliver on time.',
  'They handle clients reliably.',
];

const INVISIBLE_ITEMS = [
  'No structured positioning.',
  'No clear services.',
  'No capability signals.',
  'No credibility indicators.',
];

/* ── Trust chain ── */
const TRUST_CHAIN = [
  { from: 'Visibility', to: 'Trust' },
  { from: 'Trust', to: 'Shortlisting' },
  { from: 'Shortlisting', to: 'Contracts' },
];

/* ── Industry focus ── */
const INDUSTRIES = [
  'Transport companies',
  '3PL providers',
  'Freight operators',
  'Fleet owners',
  'Warehousing companies',
  'Cold chain logistics',
  'Distribution partners',
  'Cargo and forwarding companies',
];

/* ── Buyer evaluation criteria ── */
const BUYER_CRITERIA = [
  'Fleet credibility',
  'Operational clarity',
  'Coverage visibility',
  'Industry specialization',
  'Certification signals',
  'Process maturity',
  'Scale perception',
];

/* ── What We Actually Do ── */
const WHAT_WE_DO = [
  { prefix: "We don't just design", highlight: 'websites', suffix: 'We design perception.' },
  { prefix: "We don't just build", highlight: 'systems', suffix: 'We build credibility signals.' },
  { prefix: "We don't just create", highlight: 'branding', suffix: 'We create procurement confidence.' },
];

const WORK_FOCUS = [
  'Positioning clarity',
  'Service structure',
  'Capability communication',
  'Corporate-ready presentation',
  'Trust signal placement',
  'Buyer psychology alignment',
  'Conversion-driven architecture',
];

/* ── The Problem: Strength vs Gap ── */
const STRENGTHS = [
  'Strong operations',
  'Good client relationships',
  'Consistent delivery',
  'Years of experience',
];

const GAPS = [
  'No corporate inquiries',
  'No enterprise contracts',
  'No inbound leads',
  'No differentiation',
  'No credibility perception',
];

/* ── How We Think ── */
const THINKING_QUESTIONS = [
  'What would a procurement manager look for?',
  'What builds trust instantly?',
  'What signals capability?',
  'What reduces risk perception?',
];

/* ── Who We Work With ── */
const CLIENT_CHARACTERISTICS = [
  'Are operationally strong',
  'Want corporate clients',
  'Want to scale beyond referrals',
  'Want structured positioning',
  'Want to appear enterprise-ready',
  'Want better credibility',
];

/* ── Our Role transformations ── */
const TRANSFORMATIONS = [
  { from: 'Local operator', to: 'Corporate-ready vendor' },
  { from: 'Unstructured presence', to: 'Credible company positioning' },
  { from: 'Invisible capability', to: 'Clear business signal' },
];

/* ── The Outcome ── */
const OUTCOMES = [
  'Clear positioning',
  'Structured services',
  'Stronger credibility',
  'Better perception',
  'Improved shortlisting',
  'Higher trust',
];

/* ── What Makes Us Different ── */
const DIFFERENT = [
  { we: "We don't work across industries", weDo: 'We focus only on logistics' },
  { we: "We don't build generic designs", weDo: 'We build credibility systems' },
  { we: "We don't sell marketing", weDo: 'We build positioning' },
  { we: "We don't optimize for aesthetics", weDo: 'We optimize for trust' },
];

/* ── Goal checklist ── */
const GOAL_ITEMS = [
  'What you do',
  'Where you operate',
  'What you handle',
  "Why you're credible",
  "Why you're safe",
];

/* ============================================
   SUB-COMPONENTS
   ============================================ */

function SectionDivider({ delay = 0 }: { delay?: number }) {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
      <LineReveal className="w-full h-px bg-black/[0.06]" direction="center" delay={delay} />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium font-[family-name:var(--font-montserrat)]">
      {children}
    </span>
  );
}

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[clamp(28px,4vw,42px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.1] tracking-tight text-black ${className}`}
      style={{ color: '#000000' }}
    >
      {children}
    </h2>
  );
}

function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2A3AFF]">{children}</span>;
}

/* ── Animated trust chain item ── */
function TrustChainItem({ from, to, index }: { from: string; to: string; index: number }) {
  return (
    <ScrollReveal delay={index * 0.15} style="fadeRight" once={false}>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-sm md:text-base font-medium text-black min-w-[100px] md:min-w-[120px] text-right">
            {from}
          </span>
          <motion.div
            className="w-8 h-px bg-[#2A3AFF]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          />
          <span className="text-sm md:text-base font-medium text-[#2A3AFF]">{to}</span>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ============================================
   MAIN ABOUT PAGE
   ============================================ */

import { useUserTracking } from '@/hooks/useUserTracking';

export default function AboutPage() {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  useUserTracking(aboutRef);

  return (
    <main className="bg-white">
      <Navbar transparent />

      {/* ── HERO  Creative Scandinavian ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden bg-black hero-dark-text">


        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-0 w-full">
          <ScrollReveal style="fadeUp" once={false}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-md mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium font-[family-name:var(--font-montserrat)]">About Nexgen Elit</span>
            </div>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <h1 className="text-[clamp(36px,5.5vw,64px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.08] tracking-[-0.02em] text-white max-w-4xl">
              Logistics Companies Don&apos;t Lose Contracts Because of{' '}
              <AccentText>Operations</AccentText>
            </h1>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.2} once={false}>
            <h1 className="mt-2 md:mt-3 text-[clamp(36px,5.5vw,64px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.08] tracking-[-0.02em] text-white max-w-4xl">
              They Lose Them Because of <AccentText>Perception</AccentText>.
            </h1>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.3} once={false}>
            <p className="mt-8 md:mt-10 text-base md:text-xl text-white/70 max-w-2xl leading-relaxed font-[family-name:var(--font-montserrat)] font-light border-l border-white/20 pl-6">
              Nexgen Elit was built around a simple observation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
        THE GOAL - After Hero
        ═══════════════════════════════════════════ */}
      <section ref={aboutRef} className="py-24 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            {/* Left column - Statement */}
            <div className="md:col-span-6 lg:col-span-5">
              <ScrollReveal style="fadeLeft" once={false}>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium font-[family-name:var(--font-montserrat)]">
                  The Goal
                </p>
              </ScrollReveal>

              <ScrollReveal style="fadeLeft" delay={0.08} once={false}>
                <h2
                  className="mt-4 text-[clamp(28px,3.5vw,38px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.15] tracking-tight"
                  style={{ color: '#000000' }}
                >
                  Our goal is simple.
                </h2>
              </ScrollReveal>

              <ScrollReveal style="fadeLeft" delay={0.16} once={false}>
                <p className="mt-5 text-[15px] md:text-base text-[#6B7280] leading-relaxed max-w-md">
                  When a corporate buyer searches your company, they should immediately understand:
                </p>
              </ScrollReveal>

              <ScrollReveal style="blurIn" delay={0.4} once={false}>
                <div className="mt-8 md:mt-10 border-l-2 border-[#2A3AFF] pl-5">
                  <p className="text-[15px] text-[#6B7280] leading-relaxed">
                    And when that happens, you&apos;re no longer competing for{' '}
                    <span className="line-through text-[#9CA3AF]">attention</span>.
                  </p>
                  <p
                    className="mt-2 text-lg md:text-xl font-[family-name:var(--font-poppins)] font-semibold leading-tight"
                    style={{ color: '#000000' }}
                  >
                    You&apos;re competing for <AccentText>contracts</AccentText>.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right column - Checklist + CTA */}
            <div className="md:col-span-6 lg:col-span-7 md:border-l md:border-black/[0.06] md:pl-10 lg:pl-12">
              <StaggerContainer staggerDelay={0.1} once={false}>
                {GOAL_ITEMS.map((item) => (
                  <StaggerItem key={item} y={14}>
                    <div className="flex items-start gap-4 py-4 border-b border-black/[0.06]">
                      <div className="mt-2 w-5 h-5 border border-[#2A3AFF]/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#2A3AFF]" />
                      </div>
                      <span className="text-[15px] md:text-base text-black font-medium">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <ScrollReveal style="fadeUp" delay={0.3} once={false}>
                <div className="mt-10 md:mt-12">
                  <p className="text-[13px] text-[#6B7280] leading-relaxed mb-5 max-w-sm">
                    Because logistics companies don&apos;t need more visibility for the sake of it. They need visibility that converts into trust, shortlisting, and contracts.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-[#2A3AFF] font-[family-name:var(--font-montserrat)]"
                    style={{
                      backgroundColor: '#2A3AFF',
                      color: '#fff',
                      borderRadius: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#2A3AFF'; e.currentTarget.style.borderColor = '#2A3AFF'; }}
                  >
                    Get in Touch <ArrowUpRight size={13} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          THE OBSERVATION
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionHeading>
              Most logistics companies are <AccentText>operationally strong</AccentText>.
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {/* Left: What they do well */}
            <div>
              <StaggerContainer staggerDelay={0.1} once={false}>
                {OBSERVATION_ITEMS.map((item) => (
                  <StaggerItem key={item} y={16}>
                    <div className="flex items-center gap-3 py-1">
                      <div className="w-1.5 h-1.5 bg-black flex-shrink-0" />
                      <span className="text-[15px] md:text-base text-black font-medium">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right: What's invisible */}
            <ScrollReveal style="fadeRight" delay={0.2} once={false}>
              <div>
                <p className="text-[15px] md:text-base text-[#6B7280] leading-relaxed mb-6">
                  But when a corporate procurement manager searches their company, none of that strength is visible.
                </p>
                <StaggerContainer staggerDelay={0.08} once={false}>
                  {INVISIBLE_ITEMS.map((item) => (
                    <StaggerItem key={item} y={12}>
                      <div className="flex items-center gap-3 py-1">
                        <div className="w-1.5 h-1.5 bg-[#9CA3AF] flex-shrink-0" />
                        <span className="text-sm text-[#9CA3AF]">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          THE TRUST CHAIN
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <ScrollReveal style="fadeUp" once={false}>
                <p className="text-[15px] md:text-base text-[#6B7280] leading-relaxed mb-2">
                  And in logistics procurement,
                </p>
              </ScrollReveal>
              <div className="flex flex-col gap-5 mt-6">
                {TRUST_CHAIN.map((chain, i) => (
                  <TrustChainItem key={chain.from} from={chain.from} to={chain.to} index={i} />
                ))}
              </div>
            </div>

            <ScrollReveal style="fadeRight" delay={0.2} once={false}>
              <div className="md:border-l md:border-black/[0.06] md:pl-10 md:ml-4">
                <p className="text-[15px] md:text-base text-[#6B7280] leading-relaxed mb-6">
                  So even capable logistics companies get filtered out before the conversation starts.
                </p>
                <p className="text-base md:text-lg text-black leading-relaxed font-medium">
                  That gap between <AccentText>operational strength</AccentText> and <AccentText>perceived credibility</AccentText> is where Nexgen Elit operates.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          BUILT SPECIFICALLY FOR LOGISTICS
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <ScrollReveal style="fadeLeft" once={false}>
                <SectionLabel>Built Specifically for Logistics Companies</SectionLabel>
                <SectionHeading className="mt-4">
                  Not a generic agency.
                </SectionHeading>
                <p className="mt-5 text-[15px] text-[#6B7280] leading-relaxed">
                  Nexgen Elit is not a generic agency working across industries. We work exclusively with logistics and supply chain businesses.
                </p>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7">
              <StaggerContainer staggerDelay={0.06} once={false}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {INDUSTRIES.map((item) => (
                    <StaggerItem key={item} y={12}>
                      <div className="flex items-center gap-3 py-2">
                        <div className="w-1 h-1 bg-[#2A3AFF] flex-shrink-0" />
                        <span className="text-sm text-black">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          BUYER PSYCHOLOGY - Dark section
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <ScrollReveal style="fadeUp" once={false}>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 font-medium">Because logistics has a different buying psychology</p>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <p className="mt-6 text-[15px] md:text-base text-white/45 leading-relaxed max-w-lg">
              Corporate buyers don&apos;t evaluate logistics vendors like they evaluate software companies.
            </p>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.15} once={false}>
            <p className="mt-4 text-[15px] md:text-base text-white/30 leading-relaxed mb-10 md:mb-14">
              They look for:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {BUYER_CRITERIA.map((item, i) => (
              <ScrollReveal key={item} style="scaleUp" delay={0.1 + i * 0.07} once={false}>
                <div className="border-t border-white/[0.08] pt-4">
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal style="blurIn" delay={0.3} once={false}>
            <div className="mt-14 md:mt-20 flex flex-col gap-2">
              <p className="text-sm text-white/30">Generic websites don&apos;t communicate these.</p>
              <p className="text-sm text-white/30">Generic marketing doesn&apos;t communicate these.</p>
              <p className="text-base md:text-lg text-white font-medium mt-4">
                That&apos;s why most logistics companies appear small even when they&apos;re not.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT WE ACTUALLY DO
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>What We Actually Do</SectionLabel>
            <SectionHeading className="mt-4 max-w-xl">
              We design <AccentText>perception</AccentText>.
              We build <AccentText>credibility</AccentText>.
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <p className="mt-5 text-[15px] text-[#6B7280] leading-relaxed max-w-2xl">
              Nexgen Elit builds the digital and positioning infrastructure that makes logistics companies appear structured, credible, and enterprise-ready.
            </p>
          </ScrollReveal>

          {/* Three pillars */}
          <div className="mt-12 md:mt-16 flex flex-col gap-1">
            {WHAT_WE_DO.map((item, i) => (
              <ScrollReveal key={item.highlight} style="fadeLeft" delay={i * 0.1} once={false}>
                <div className="border-t border-black/[0.06] py-5 md:py-6">
                  <p className="text-[15px] md:text-base text-[#6B7280] leading-relaxed">
                    {item.prefix}{' '}
                    <span className="line-through text-[#9CA3AF]">{item.highlight}</span>.
                    {' '}{item.suffix}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Focus areas */}
          <ScrollReveal style="fadeUp" delay={0.15} once={false}>
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {WORK_FOCUS.map((item) => (
                <div key={item} className="flex items-center gap-3 py-1.5">
                  <div className="w-1 h-1 bg-[#2A3AFF] flex-shrink-0" />
                  <span className="text-sm text-[#6B7280]">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal style="blurIn" delay={0.2} once={false}>
            <p className="mt-10 text-base md:text-lg text-black font-medium max-w-lg">
              Because logistics companies don&apos;t need more marketing. They need better positioning.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          THE PROBLEM WE SOLVE - Split column
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>The Problem We Solve</SectionLabel>
            <SectionHeading className="mt-4">
              Capability vs. Communication
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left: Strengths */}
            <ScrollReveal style="fadeLeft" once={false}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-5">Most logistics founders</p>
                <StaggerContainer staggerDelay={0.08} once={false}>
                  {STRENGTHS.map((item) => (
                    <StaggerItem key={item} y={14}>
                      <div className="flex items-center gap-3 py-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7L6 10L11 4" stroke="#2A3AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[15px] text-black">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            {/* Right: Gaps */}
            <ScrollReveal style="fadeRight" delay={0.15} once={false}>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-5">But they face</p>
                <StaggerContainer staggerDelay={0.08} once={false}>
                  {GAPS.map((item) => (
                    <StaggerItem key={item} y={14}>
                      <div className="flex items-center gap-3 py-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7H11" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-[15px] text-[#9CA3AF]">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          </div>

          {/* The issue */}
          <ScrollReveal style="scaleUp" delay={0.2} once={false}>
            <div className="mt-14 md:mt-20 max-w-2xl mx-auto text-center">
              <p className="text-base md:text-lg text-black font-medium leading-relaxed">
                The issue isn&apos;t <span className="line-through text-[#9CA3AF]">capability</span>. It&apos;s communication.
              </p>
              <p className="mt-4 text-[15px] text-[#6B7280] leading-relaxed">
                Buyers don&apos;t see your fleet strength, your route expertise, your service reliability, your infrastructure, or your specialization. So they assume you&apos;re small. Or unstructured. Or risky.
              </p>
              <p className="mt-5 text-base text-black font-medium">
                And procurement teams avoid risk. <AccentText>Nexgen Elit removes that risk perception.</AccentText>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW WE THINK
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <ScrollReveal style="fadeLeft" once={false}>
                <SectionLabel>How We Think</SectionLabel>
                <SectionHeading className="mt-4">
                  Not like designers. Not like marketers. Not like developers. But like <AccentText>buyers</AccentText>.
                </SectionHeading>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7">
              <StaggerContainer staggerDelay={0.1} once={false}>
                {THINKING_QUESTIONS.map((q, i) => (
                  <StaggerItem key={q} y={16}>
                    <div className="border-t border-black/[0.06] py-4">
                      <div className="flex items-start gap-4">
                        <span className="text-[10px] text-[#9CA3AF] mt-1.5 font-mono">0{i + 1}</span>
                        <p className="text-[15px] md:text-base text-black">{q}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <ScrollReveal style="blurIn" delay={0.2} once={false}>
                <div className="mt-8 border-t border-black/[0.06] pt-6">
                  <p className="text-[15px] text-[#6B7280] leading-relaxed">
                    Every project is built around these questions. Because the goal is not just to look good. The goal is to <span className="text-black font-medium">look credible</span>.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          WHO WE WORK WITH
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Who We Work With</SectionLabel>
            <SectionHeading className="mt-4 max-w-lg">
              We typically work with logistics companies that:
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-1 max-w-2xl">
            <StaggerContainer staggerDelay={0.07} once={false}>
              {CLIENT_CHARACTERISTICS.map((item) => (
                <StaggerItem key={item} y={14}>
                  <div className="flex items-center gap-3 py-3 border-b border-black/[0.04]">
                    <div className="w-1 h-1 bg-[#2A3AFF] flex-shrink-0" />
                    <span className="text-sm text-black">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal style="blurIn" delay={0.2} once={false}>
            <div className="mt-14 md:mt-20 border-l-2 border-[#2A3AFF] pl-6 md:pl-8 max-w-lg">
              <p className="text-[15px] text-[#6B7280] leading-relaxed">
                From growing transport companies to established logistics providers, the common factor is the same:
              </p>
              <p className="mt-3 text-base text-black font-medium">
                They are capable. But not positioned correctly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUR ROLE - Transformations
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Our Role</SectionLabel>
            <SectionHeading className="mt-4">
              The technology and positioning partner for logistics.
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 flex flex-col gap-0 max-w-lg">
            <StaggerContainer staggerDelay={0.12} once={false}>
              {TRANSFORMATIONS.map((t) => (
                <StaggerItem key={t.from} y={16}>
                  <div className="py-5 md:py-6 border-b border-black/[0.06]">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-[15px] text-[#9CA3AF]">{t.from}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[#2A3AFF]">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[15px] text-black font-medium">{t.to}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal style="fadeUp" delay={0.2} once={false}>
            <p className="mt-12 text-[15px] text-[#6B7280] leading-relaxed max-w-lg">
              Because logistics companies don&apos;t need hype. They need clarity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE OUTCOME
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <ScrollReveal style="fadeLeft" once={false}>
                <SectionLabel>The Outcome</SectionLabel>
                <SectionHeading className="mt-4">
                  They start looking like a logistics <AccentText>partner</AccentText>.
                </SectionHeading>
                <p className="mt-5 text-[15px] text-[#6B7280] leading-relaxed">
                  After working with Nexgen Elit, logistics companies don&apos;t just get a website. They get:
                </p>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7">
              <StaggerContainer staggerDelay={0.08} once={false}>
                {OUTCOMES.map((item, i) => (
                  <StaggerItem key={item} y={14}>
                    <div className="flex items-center gap-4 py-4 border-b border-black/[0.04]">
                      <span className="text-[10px] text-[#9CA3AF] font-mono w-4">0{i + 1}</span>
                      <span className="text-[15px] text-black font-medium">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          WHAT MAKES US DIFFERENT - Comparison grid
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>What Makes Nexgen Elit Different</SectionLabel>
            <SectionHeading className="mt-4">
              In logistics, <AccentText>trust</AccentText> wins contracts.
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="scaleUp" delay={0.15} once={false}>
            <div className="mt-12 md:mt-16 border border-black/[0.06]">
              {/* Header */}
              <div className="grid grid-cols-2 border-b border-black/[0.06]">
                <div className="px-5 md:px-8 py-4 bg-[#F7F8FA]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium">Others</span>
                </div>
                <div className="px-5 md:px-8 py-4 bg-[#F7F8FA]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#2A3AFF] font-medium">Nexgen Elit</span>
                </div>
              </div>
              {/* Rows */}
              {DIFFERENT.map((row) => (
                <motion.div
                  key={row.we}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  viewport={{ once: false, margin: '-30px' }}
                  transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  className="grid grid-cols-2 border-b border-black/[0.04] last:border-b-0"
                >
                  <div className="px-5 md:px-8 py-5 md:py-6 text-sm text-[#9CA3AF] flex items-start gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 flex-shrink-0">
                      <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {row.we}
                  </div>
                  <div className="px-5 md:px-8 py-5 md:py-6 text-sm text-black font-medium flex items-start gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 flex-shrink-0 text-[#2A3AFF]">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {row.weDo}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
