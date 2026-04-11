'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LineReveal,
} from '@/components/animations';
import {
  ArrowUpRight,
  Check,
  Zap,
  Brain,
  BarChart3,
  Shield,
  Bot,
  Truck,
  LineChart,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Data ─────────────────────────────────────── */

const PRODUCTS = [
  {
    num: '01',
    name: 'AI Demand Forecasting System',
    Icon: BarChart3,
    desc: 'Predicts freight demand by route, season, and client  enabling proactive capacity planning and rate optimization. Trained on historical shipment data, economic indicators, and seasonal patterns.',
    roi: [
      'Reduce empty runs by 15–30%',
      'Improve fleet utilization rate',
      'Price contracts more accurately',
    ],
    setup: 'Rs.1.5L–Rs.4L',
    tags: ['Forecasting', 'Revenue', 'Planning'],
  },
  {
    num: '02',
    name: 'Predictive Maintenance System',
    Icon: Shield,
    desc: 'IoT sensor data from vehicles and machinery analyzed to predict failures 7–21 days before they occur. Prevents breakdown-related SLA violations and emergency repair costs.',
    roi: [
      '40–60% reduction in unplanned downtime',
      '25% lower maintenance cost',
      'SLA protection for corporate clients',
    ],
    setup: 'Rs.2L–Rs.6L',
    tags: ['IoT', 'Maintenance', 'Fleet'],
  },
  {
    num: '03',
    name: 'AI Route Self-Optimization Engine',
    Icon: Truck,
    desc: 'Learns from historical delivery data to continuously improve route efficiency. Accounts for traffic patterns, driver behavior, delivery time windows, and fuel cost. Gets smarter with every trip.',
    roi: [
      '10–20% fuel cost reduction',
      'Higher on-time delivery rate',
      'Driver overtime reduction',
    ],
    setup: 'Rs.1.5L–Rs.3.5L',
    tags: ['Routing', 'Fuel', 'Delivery'],
  },
  {
    num: '04',
    name: 'Logistics Decision Intelligence Platform',
    Icon: Brain,
    desc: 'Executive-level AI platform that consolidates operational data from all systems and surfaces actionable insights: which routes are unprofitable, which clients are high-risk, which investments have highest ROI.',
    roi: [
      'Board-ready reporting in one click',
      'Early warning signals for business risks',
      'Investment prioritization recommendations',
    ],
    setup: 'Rs.3L–Rs.8L',
    tags: ['Analytics', 'BI', 'Strategy'],
  },
  {
    num: '05',
    name: 'AI Supply Chain Control Tower',
    Icon: Zap,
    desc: 'Real-time visibility across the entire supply chain with AI-powered exception management. Automatically detects disruptions, models alternative scenarios, and recommends optimal responses.',
    roi: [
      'Enterprise-grade supply chain visibility',
      'Automated exception management',
      'Proactive customer communication',
    ],
    setup: 'Rs.5L–Rs.15L',
    tags: ['Supply Chain', 'Visibility', 'Enterprise'],
  },
  {
    num: '06',
    name: 'AI Fraud Detection for Logistics',
    Icon: LineChart,
    desc: 'Machine learning models trained to detect billing fraud, fuel theft, ghost trips, and false PODs. Learns from historical patterns and flags anomalies in real time.',
    roi: [
      'Recover 2–5% of revenue lost to fraud',
      'Real-time alert system',
      'Audit trail for disputes',
    ],
    setup: 'Rs.1.5L–Rs.3L',
    tags: ['Fraud', 'Security', 'Revenue'],
  },
  {
    num: '07',
    name: 'Custom LLM Chatbot (Logistics-Trained)',
    Icon: MessageSquare,
    desc: "An AI assistant trained exclusively on the company's own data: rate cards, SOPs, routes, client records. Handles customer queries, driver questions, and internal operations enquiries 24/7.",
    roi: [
      '70–80% reduction in repetitive queries',
      '24/7 availability without headcount',
      'Integrated with WhatsApp and web portal',
    ],
    setup: 'Rs.2L–Rs.5L+',
    tags: ['Chatbot', 'LLM', 'WhatsApp'],
  },
  {
    num: '08',
    name: 'AI Freight Quotation Engine',
    Icon: Bot,
    desc: 'BD team enters origin, destination, weight, and commodity. System generates a quote in 60 seconds from stored rate card. Founder approves with one WhatsApp tap. Quote auto-sent as branded PDF.',
    roi: [
      'Response time: 4 hours to 2 minutes',
      'Zero pricing errors',
      'Complete audit trail',
    ],
    setup: 'Rs.1.2L–Rs.2.5L',
    tags: ['Quotation', 'Sales', 'Automation'],
  },
];

const BENEFITS = [
  {
    title: 'Reduce Operational Costs',
    desc: 'AI automates decisions that currently require experienced humans, cutting costs by 15-30%.',
  },
  {
    title: 'Predict Problems Before They Happen',
    desc: 'From vehicle breakdowns to demand spikes, AI sees what\u2019s coming.',
  },
  {
    title: 'Structural Competitive Advantage',
    desc: 'Not a temporary edge  AI compounds. The more data flows through, the smarter it gets.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Data Audit',
    desc: 'We analyze your existing data sources  TMS, ERP, spreadsheets, WhatsApp logs  to determine AI readiness.',
  },
  {
    num: '02',
    title: 'Model Development',
    desc: 'Custom models trained on your operational data. Not generic AI  your AI.',
  },
  {
    num: '03',
    title: 'Deployment & Learning',
    desc: 'Integration into your existing workflows. Models improve continuously with new data.',
  },
];

/* ─── Product Card Component ────────────────────── */

function ProductSection({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[0];
  index: number;
}) {
  const isOdd = index % 2 === 0;
  const bgClass = isOdd ? 'bg-white' : 'bg-[#F7F8FA]';

  return (
    <section className={`${bgClass} py-20 md:py-28`}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal once>
          {/* Product number  large faded */}
          <div
            className="font-[family-name:var(--font-poppins)] text-[clamp(72px,12vw,140px)] font-bold leading-none tracking-tighter text-black/[0.04] select-none mb-2 md:mb-4"
          >
            {product.num}
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left / Right  icon + text */}
            <div className={isOdd ? '' : 'md:order-2'}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center bg-[#2A3AFF]/[0.06]">
                  <product.Icon className="w-5 h-5 text-[#2A3AFF]" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-poppins)] text-[clamp(22px,3vw,30px)] font-semibold leading-tight text-[#000000] tracking-tight mb-4">
                {product.name}
              </h3>

              <p className="font-[family-name:var(--font-montserrat)] text-[15px] leading-[1.75] text-[#6B7280] mb-6">
                {product.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#9CA3AF] border border-black/[0.08] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Setup cost */}
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#6B7280]">
                <span className="text-[#9CA3AF]">Setup cost:</span>{' '}
                <span className="text-[#000000] font-medium">{product.setup}</span>
              </p>
            </div>

            {/* Right / Left  ROI card */}
            <div className={isOdd ? '' : 'md:order-1'}>
              <div className="border border-black/[0.08] p-6 md:p-8 h-full flex flex-col justify-center">
                <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.15em] text-[#9CA3AF] mb-5">
                  Expected ROI
                </p>
                <StaggerContainer staggerDelay={0.1} once>
                  {product.roi.map((item) => (
                    <StaggerItem key={item} className="flex items-start gap-3 mb-4 last:mb-0">
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 bg-[#2A3AFF]/[0.08]">
                        <Check className="w-3 h-3 text-[#2A3AFF]" strokeWidth={2.5} />
                      </div>
                      <span className="font-[family-name:var(--font-montserrat)] text-sm leading-relaxed text-[#000000]">
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider (except after last product) */}
        {index < PRODUCTS.length - 1 && (
          <LineReveal
            className="h-px bg-black/[0.06] mt-20 md:mt-28"
            direction={isOdd ? 'left' : 'right'}
          />
        )}
      </div>
    </section>
  );
}

/* ─── Main Page ─────────────────────────────────── */

export default function AIProductsPage() {
  return (
    <main className="bg-white text-[#000000]">
      <Navbar transparent />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-[70vh] bg-black flex items-center justify-center pt-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-32 text-center">
          <StaggerContainer staggerDelay={0.12} once>
            <StaggerItem>
              <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
                AI Products
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="font-[family-name:var(--font-poppins)] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-tight text-white max-w-[900px] mx-auto mb-6">
                The logistics companies that deploy AI in 2026 will dominate
                their markets by 2028.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <h2 className="font-[family-name:var(--font-poppins)] text-[clamp(20px,3vw,30px)] font-medium leading-[1.2] text-white/60 max-w-[600px] mx-auto mb-8">
                Every other company will be catching up.
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="font-[family-name:var(--font-montserrat)] text-[15px] leading-[1.8] text-white/40 max-w-[680px] mx-auto mb-10">
                Nexgen Elit builds AI-powered logistics systems that reduce
                operational costs, predict problems before they happen, and
                create competitive advantages that are structural  not
                temporary.
              </p>
            </StaggerItem>

            <StaggerItem>
              <a
                href="#products"
                className="btn-outline-white px-6 py-3 text-[13px] tracking-[0.04em]"
              >
                Explore AI Products
                <ArrowUpRight className="w-4 h-4 ml-1.5" strokeWidth={1.5} />
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="scroll-indicator-line w-px h-10" />
        </div>
      </section>

      {/* ── GRADIENT TRANSITION ──────────────────── */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-[#000000] to-white" />

      {/* ── WHY AI FOR LOGISTICS? ────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <LineReveal className="h-px bg-black/[0.06] mb-16" direction="left" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left column */}
            <ScrollReveal once style="fadeLeft">
              <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#9CA3AF] mb-4">
                Why AI for Logistics?
              </p>
              <h2 className="font-[family-name:var(--font-poppins)] text-[clamp(28px,4vw,40px)] font-semibold leading-[1.1] tracking-tight text-[#000000] mb-5">
                The Intelligence Layer
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-[15px] leading-[1.8] text-[#6B7280]">
                In logistics, margins are thin and competition is relentless. AI
                is the layer that separates companies running on instinct from
                those running on intelligence. It&apos;s not about replacing
                people  it&apos;s about giving your team superpowers: the
                ability to see demand before it arrives, predict failures before
                they happen, and price every shipment with precision.
              </p>
            </ScrollReveal>

            {/* Right column  benefit cards */}
            <div className="flex flex-col gap-6">
              {BENEFITS.map((b, i) => (
                <ScrollReveal key={b.title} once delay={i * 0.1} style="fadeRight">
                  <div className="border border-black/[0.08] p-5 md:p-6 transition-colors duration-300 hover:border-black/[0.15]">
                    <h4 className="font-[family-name:var(--font-poppins)] text-[16px] font-semibold text-[#000000] mb-2">
                      {b.title}
                    </h4>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm leading-[1.7] text-[#6B7280]">
                      {b.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <LineReveal className="h-px bg-black/[0.06] mt-16" direction="right" />
        </div>
      </section>

      {/* ── AI PRODUCTS ──────────────────────────── */}
      <div id="products">
        {PRODUCTS.map((product, i) => (
          <ProductSection key={product.num} product={product} index={i} />
        ))}
      </div>

      {/* ── IMPLEMENTATION APPROACH ──────────────── */}
      <section className="bg-[#F7F8FA] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <LineReveal className="h-px bg-black/[0.06] mb-16" direction="left" />

          <ScrollReveal once>
            <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#9CA3AF] mb-4">
              Implementation Approach
            </p>
            <h2 className="font-[family-name:var(--font-poppins)] text-[clamp(28px,4vw,40px)] font-semibold leading-[1.1] tracking-tight text-[#000000] mb-12 md:mb-16 max-w-[560px]">
              How we deploy AI into your operations
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15} once>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {STEPS.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="border border-black/[0.08] bg-white p-6 md:p-8 h-full">
                    <span className="font-[family-name:var(--font-poppins)] text-[clamp(36px,5vw,48px)] font-bold leading-none tracking-tighter text-black/[0.06] block mb-4">
                      {step.num}
                    </span>
                    <h4 className="font-[family-name:var(--font-poppins)] text-[18px] font-semibold text-[#000000] mb-3">
                      {step.title}
                    </h4>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm leading-[1.75] text-[#6B7280]">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <LineReveal className="h-px bg-black/[0.06] mt-16" direction="right" />
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────── */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <StaggerContainer staggerDelay={0.12} once>
            <StaggerItem>
              <h2 className="font-[family-name:var(--font-poppins)] text-[clamp(26px,4vw,40px)] font-semibold leading-[1.15] tracking-tight text-white max-w-[700px] mx-auto mb-5">
                Which AI product is right for your operation?
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="font-[family-name:var(--font-montserrat)] text-[15px] leading-[1.8] text-white/40 max-w-[560px] mx-auto mb-10">
                Every AI deployment starts with understanding your data and
                your bottlenecks. Book a free assessment.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary px-7 py-3.5">
                  <span>Book Assessment</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white px-7 py-3.5 text-[13px]"
                >
                  WhatsApp
                  <ArrowUpRight className="w-4 h-4 ml-1.5" strokeWidth={1.5} />
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
