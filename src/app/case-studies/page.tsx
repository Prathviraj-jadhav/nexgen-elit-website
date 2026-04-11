'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import { ArrowUpRight, Clock, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';
import Link from 'next/link';

/* ============================================
   DATA CONSTANTS
   ============================================ */

const HERO_METRICS = [
  { value: '45 Days', label: 'First Contract Win' },
  { value: '340%', label: 'Traffic Increase' },
  { value: '78%', label: 'Call Deflection' },
  { value: '90 Seconds', label: 'Quote Generation' },
];

const METHODOLOGY = [
  { step: '01', title: 'Discovery', desc: 'We understand the specific challenge, existing systems, and business context.' },
  { step: '02', title: 'Strategy', desc: 'We design a solution that addresses the root cause, not just the symptom.' },
  { step: '03', title: 'Build', desc: 'Development, deployment, and iteration in focused sprints.' },
  { step: '04', title: 'Measure', desc: 'Every outcome is tracked. Every result is documented.' },
];

interface CaseStudy {
  number: string;
  company: string;
  location: string;
  challenge: string;
  delivered: string;
  result: string;
  tags: string[];
  keyMetrics: { icon: 'clock' | 'trending-up' | 'check'; value: string; label: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    number: '01',
    company: 'Mumbai-based FTL Operator',
    location: 'Mumbai, Maharashtra',
    challenge:
      'A 12-year-old full truckload operator with a fleet of 85+ vehicles had been losing corporate bids consistently. The reason was not capability  it was credibility. They had no website, no corporate presentation, and no digital footprint. Procurement teams couldn\'t verify their existence, let alone their capacity.',
    delivered:
      'Full Corporate Website with fleet showcase, service capabilities, route coverage map, client testimonial section, and downloadable company profile. Built to match the visual standards of enterprise-grade logistics companies.',
    result:
      'Won their first enterprise contract within 45 days of the website going live. Shortlisted in 3 out of 4 subsequent corporate tenders. The company reported that the website became their primary credibility tool in every client meeting.',
    tags: ['Website', 'Corporate Positioning'],
    keyMetrics: [
      { icon: 'clock', value: '45 Days', label: 'To First Contract' },
      { icon: 'check', value: '3 of 4', label: 'Tenders Shortlisted' },
    ],
  },
  {
    number: '02',
    company: 'Pune 3PL Warehouse Operator',
    location: 'Pune, Maharashtra',
    challenge:
      'Had invested in a website a year prior but it generated zero inbound leads. The site was built as a brochure  no SEO strategy, no content architecture, no conversion funnel. It ranked on page 5+ for every relevant logistics keyword in the Pune region.',
    delivered:
      'Complete Marketing Retainer  website audit and restructure, keyword-mapped service pages, local SEO for Pune and surrounding industrial corridors, Google Business optimization, monthly content creation, and performance tracking.',
    result:
      '340% increase in organic traffic within 6 months. Moved from page 5+ to top 3 rankings for 12 high-intent logistics keywords. Started receiving 8–12 qualified inbound inquiries per month from warehousing and distribution companies.',
    tags: ['Marketing', 'SEO', 'Website'],
    keyMetrics: [
      { icon: 'trending-up', value: '340%', label: 'Traffic Increase' },
      { icon: 'trending-up', value: 'Top 3', label: 'Keyword Rankings' },
      { icon: 'check', value: '8–12/mo', label: 'Inbound Inquiries' },
    ],
  },
  {
    number: '03',
    company: 'Delhi NCR Cold Chain Logistics',
    location: 'Delhi NCR',
    challenge:
      'A temperature-controlled logistics company was managing 60+ daily tracking calls manually. Their operations team spent 4+ hours every day answering the same questions: "Where is my shipment?", "What is the current temperature?", "When will it arrive?"  creating operational bottlenecks and delayed responses.',
    delivered:
      'WhatsApp-based Tracking Bot integrated with their existing GPS and IoT monitoring system. Customers send a simple message and receive real-time shipment location, current temperature, ETA, and delivery proof  all automated, available 24/7 in English and Hindi.',
    result:
      '78% call deflection rate achieved within the first month. Operations team saved an average of 4 hours daily. Customer satisfaction scores improved by 35%. Zero downtime reported in the first 6 months of deployment.',
    tags: ['Software', 'Automation'],
    keyMetrics: [
      { icon: 'trending-up', value: '78%', label: 'Call Deflection' },
      { icon: 'clock', value: '4 hrs', label: 'Saved Daily' },
      { icon: 'trending-up', value: '+35%', label: 'Satisfaction Increase' },
    ],
  },
  {
    number: '04',
    company: 'Bengaluru Last-Mile Fleet',
    location: 'Bengaluru, Karnataka',
    challenge:
      'A last-mile delivery fleet serving e-commerce and D2C brands was taking 3+ hours to prepare each freight quotation. Their pricing team manually calculated distances, checked rate cards, factored in vehicle type, weight, and urgency  leading to lost deals due to slow response times.',
    delivered:
      'AI-powered Freight Quotation Engine that takes origin, destination, weight, vehicle type, and urgency as inputs. The system references historical pricing data, real-time fuel costs, and dynamic demand factors to generate accurate quotations instantly.',
    result:
      'Average quote time reduced from 3+ hours to under 90 seconds. Quote-to-conversion rate improved by 22%. The team now handles 5x more quotation requests with the same headcount. Client onboarding time dropped from 2 days to same-day.',
    tags: ['AI', 'Software'],
    keyMetrics: [
      { icon: 'clock', value: '90 Seconds', label: 'Quote Generation' },
      { icon: 'trending-up', value: '+22%', label: 'Conversion Rate' },
      { icon: 'trending-up', value: '5x', label: 'More Quotes Handled' },
    ],
  },
];

/* Collect all unique tags */
const ALL_TAGS = Array.from(new Set(CASE_STUDIES.flatMap((s) => s.tags))).sort();

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

function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2A3AFF]">{children}</span>;
}

function MetricIcon({ type }: { type: 'clock' | 'trending-up' | 'check' }) {
  switch (type) {
    case 'clock':
      return <Clock size={14} className="text-[#2A3AFF]" />;
    case 'trending-up':
      return <TrendingUp size={14} className="text-[#2A3AFF]" />;
    case 'check':
      return <Check size={14} className="text-[#2A3AFF]" />;
  }
}

function KeyMetricsRow({ metrics }: { metrics: CaseStudy['keyMetrics'] }) {
  return (
    <div className="flex flex-wrap gap-6 md:gap-10 border-t border-b border-black/[0.06] py-4 my-6 md:my-8">
      {metrics.map((m, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <MetricIcon type={m.icon} />
          <div>
            <span className="text-[15px] font-[family-name:var(--font-poppins)] font-semibold text-[#000000]">
              {m.value}
            </span>
            <span className="ml-2 text-[12px] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
              {m.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? 'bg-white' : 'bg-[#F7F8FA]';

  return (
    <section className={`py-20 md:py-28 ${bgColor}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal style="fadeUp" once={false} delay={0.05}>
          <div className="flex flex-col">
            {/* Number + Company + Location */}
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-6 md:mb-8">
              <span className="text-[clamp(48px,6vw,72px)] font-[family-name:var(--font-poppins)] font-semibold leading-none text-[#000000] opacity-[0.07]">
                {study.number}
              </span>
              <div>
                <h2
                  className="text-[clamp(22px,3vw,32px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.15] tracking-tight text-[#000000]"
                >
                  {study.company}
                </h2>
                <p className="mt-1.5 text-[13px] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
                  {study.location}
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              {/* Left column  Challenge */}
              <div className="md:col-span-5">
                <ScrollReveal style={isEven ? 'fadeLeft' : 'fadeRight'} once={false} delay={0.1}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium font-[family-name:var(--font-montserrat)] mb-4">
                    The Challenge
                  </p>
                  <p className="text-[15px] md:text-base text-[#6B7280] leading-[1.7] font-[family-name:var(--font-montserrat)]">
                    {study.challenge}
                  </p>
                </ScrollReveal>
              </div>

              {/* Right column  Delivered + Key Metrics + Result */}
              <div className="md:col-span-7 md:border-l md:border-black/[0.06] md:pl-8 lg:pl-12">
                <ScrollReveal style={isEven ? 'fadeRight' : 'fadeLeft'} once={false} delay={0.15}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#2A3AFF] font-medium font-[family-name:var(--font-montserrat)] mb-4">
                    What We Delivered
                  </p>
                  <p className="text-[15px] md:text-base text-[#6B7280] leading-[1.7] font-[family-name:var(--font-montserrat)] mb-6 md:mb-8">
                    {study.delivered}
                  </p>
                </ScrollReveal>

                {/* Key Metrics */}
                <ScrollReveal style="fadeUp" once={false} delay={0.2}>
                  <KeyMetricsRow metrics={study.keyMetrics} />
                </ScrollReveal>

                <ScrollReveal style="fadeUp" once={false} delay={0.25}>
                  <div className="border-l-2 border-[#2A3AFF] pl-5 md:pl-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium font-[family-name:var(--font-montserrat)] mb-3">
                      The Result
                    </p>
                    <p className="text-[15px] md:text-base text-[#000000] leading-[1.7] font-[family-name:var(--font-montserrat)] font-medium">
                      {study.result}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Tags */}
            <ScrollReveal style="fadeUp" once={false} delay={0.3}>
              <div className="flex items-center gap-3 mt-8 md:mt-10 pt-6 border-t border-black/[0.04]">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[#6B7280] border border-black/[0.08] font-[family-name:var(--font-montserrat)] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================================
   MAIN PAGE
   ============================================ */

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <Navbar transparent />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-12 md:pt-0 md:pb-0 hero-dark-text">


        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 w-full mt-12 md:mt-0">
          <div className="max-w-4xl">
            <ScrollReveal style="fadeUp" once={false}>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
                <SectionLabel>Case Studies</SectionLabel>
              </div>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <h1 className="text-[clamp(44px,6vw,72px)] font-[family-name:var(--font-poppins)] font-semibold leading-[1.05] tracking-tight text-white mb-6">
                Real results from{' '}
                <AccentText>real logistics companies</AccentText>
              </h1>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.15} once={false}>
              <p className="text-[18px] md:text-[22px] text-white/90 font-[family-name:var(--font-poppins)] font-medium tracking-tight mb-4">
                4 documented projects. Real companies. Measurable outcomes.
              </p>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <p className="text-[16px] md:text-[18px] text-white/70 max-w-2xl leading-[1.7] font-[family-name:var(--font-montserrat)] font-light">
                Every project at Nexgen Elit starts with a specific problem and ends with a measurable outcome. These are documented examples of logistics companies that invested in their digital credibility  and what happened next.
              </p>
            </ScrollReveal>

            {/* Hero Metrics Strip */}
            <ScrollReveal style="fadeUp" delay={0.3} once={false}>
              <div className="flex flex-wrap gap-8 md:gap-14 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10">
                {HERO_METRICS.map((m, i) => (
                  <div key={i}>
                    <span className="block text-[clamp(28px,3.5vw,40px)] font-[family-name:var(--font-poppins)] font-semibold text-white leading-none">
                      {m.value}
                    </span>
                    <span className="block mt-2 text-[12px] uppercase tracking-[0.15em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ── METHODOLOGY ── */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Our Process</SectionLabel>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <h2 className="mt-4 text-[clamp(24px,3.5vw,40px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.12] tracking-tight text-[#000000]">
              How every engagement <AccentText>works</AccentText>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 md:mt-16" staggerDelay={0.1} once={false}>
            {METHODOLOGY.map((item) => (
              <StaggerItem key={item.step} className="h-full">
                <div className="h-full border border-black/[0.06] bg-white p-6 md:p-7 flex flex-col">
                  <span className="text-[11px] font-[family-name:var(--font-montserrat)] font-semibold text-[#2A3AFF] tracking-[0.05em]">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-[16px] md:text-[17px] font-[family-name:var(--font-poppins)] font-medium text-[#000000] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] text-[#6B7280] leading-[1.65] font-[family-name:var(--font-montserrat)]">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ── STATS SUMMARY ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="border-t border-black/[0.06] pt-10 md:pt-14">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.08} once={false}>
              <StaggerItem>
                <span className="block text-[clamp(36px,4.5vw,52px)] font-[family-name:var(--font-poppins)] font-semibold text-[#000000] leading-none">
                  4
                </span>
                <span className="block mt-2 text-[12px] uppercase tracking-[0.12em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
                  Projects Delivered
                </span>
              </StaggerItem>
              <StaggerItem>
                <span className="block text-[clamp(36px,4.5vw,52px)] font-[family-name:var(--font-poppins)] font-semibold text-[#000000] leading-none">
                  4
                </span>
                <span className="block mt-2 text-[12px] uppercase tracking-[0.12em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
                  Different Cities
                </span>
              </StaggerItem>
              <StaggerItem>
                <span className="block text-[clamp(36px,4.5vw,52px)] font-[family-name:var(--font-poppins)] font-semibold text-[#000000] leading-none">
                  3
                </span>
                <span className="block mt-2 text-[12px] uppercase tracking-[0.12em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
                  Service Categories
                </span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ── CASE STUDY CARDS ── */}
      {CASE_STUDIES.map((study, index) => (
        <div key={study.number}>
          <CaseStudyCard study={study} index={index} />
          {index < CASE_STUDIES.length - 1 && <SectionDivider delay={0} />}
        </div>
      ))}

      <SectionDivider delay={0} />

      {/* ── WHAT WE WORK ON ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Expertise</SectionLabel>
          </ScrollReveal>
          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <h2 className="mt-4 text-[clamp(20px,2.8vw,30px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.15] tracking-tight text-[#000000]">
              What we work on
            </h2>
          </ScrollReveal>
          <ScrollReveal style="fadeUp" delay={0.15} once={false}>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {ALL_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.1em] text-[#6B7280] font-[family-name:var(--font-montserrat)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="w-full h-px bg-black/[0.06]" direction="center" delay={0} />
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 md:py-36 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-lg">
            <ScrollReveal style="fadeUp" once={false}>
              <SectionLabel>Start Your Project</SectionLabel>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <h2 className="mt-4 text-[clamp(28px,4vw,42px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.1] tracking-tight text-[#000000]">
                Want to be the next <AccentText>case study</AccentText>?
              </h2>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.15} once={false}>
              <p className="mt-5 text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                Every case study on this page started with a conversation. Tell us what you&apos;re dealing with  we&apos;ll tell you if we can help.
              </p>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-[#2A3AFF] font-[family-name:var(--font-montserrat)]"
                  style={{
                    backgroundColor: '#2A3AFF',
                    color: '#fff',
                    borderRadius: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#000000';
                    e.currentTarget.style.borderColor = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#2A3AFF';
                    e.currentTarget.style.borderColor = '#2A3AFF';
                  }}
                >
                  Get in Touch <ArrowUpRight size={13} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-black/[0.12] text-[#000000] font-[family-name:var(--font-montserrat)]"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#000000';
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#000000';
                  }}
                >
                  View All Services <ArrowRight size={13} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
