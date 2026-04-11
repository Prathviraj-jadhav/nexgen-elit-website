'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, LineReveal } from '@/components/animations';
import { ArrowUpRight, ChevronDown, Check, Wrench, Smartphone, Globe, Bot, TrendingUp, Briefcase } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';
import Link from 'next/link';

/* ============================================
   SCANDINAVIAN SERVICES PAGE  NEXGEN ELIT
   ============================================ */

/* ── Slug Mapping ── */
function getSlug(title: string): string {
  const map: Record<string, string> = {
    'Transport Management Systems (TMS)': 'transport-management-systems',
    'Warehouse Management Systems (WMS)': 'warehouse-management-systems',
    'Freight Billing & Invoice Systems': 'freight-billing-invoice-systems',
    'Fleet Management Systems': 'fleet-management-systems',
    'Order Management Systems (OMS)': 'order-management-systems',
    'Custom ERP for Logistics': 'custom-erp-logistics',
    'Client & Vendor Portals': 'client-vendor-portals',
    'Driver & Fleet Compliance Apps': 'driver-fleet-compliance-apps',
    'Driver Mobile Apps': 'driver-mobile-apps',
    'Customer Shipment Tracking Apps': 'customer-shipment-tracking-apps',
    'Logistics Marketplace Apps': 'logistics-marketplace-apps',
    'Field Operations Apps': 'field-operations-apps',
    'Fleet Manager Dashboard Apps': 'fleet-manager-dashboard-apps',
    'Corporate Landing Page': 'corporate-landing-page',
    'Full Corporate Website (Standard)': 'full-corporate-website',
    'Premium Corporate Website': 'premium-corporate-website',
    'E-Commerce for Logistics': 'ecommerce-logistics',
    'Multi-tenant SaaS Platform (Web)': 'multitenant-saas-platform',
    'WhatsApp Shipment Tracking Bot': 'whatsapp-shipment-tracking-bot',
    'Lead CRM & Follow-up Automation': 'lead-crm-automation',
    'AI Freight Quotation Engine': 'ai-freight-quotation-engine',
    'Business Intelligence & MIS Dashboard': 'business-intelligence-dashboard',
    'Custom LLM & AI Operations Chatbot': 'custom-llm-chatbot',
    'Document Processing Automation': 'document-processing-automation',
    'CRM Integration (Salesforce, Zoho, HubSpot)': 'crm-integration',
    'Starter Marketing Retainer': 'starter-marketing-retainer',
    'Growth Marketing Retainer': 'growth-marketing-retainer',
    'Accelerator Marketing Retainer': 'accelerator-marketing-retainer',
    'SEO Campaign (Logistics-Specific)': 'seo-campaign',
    'LinkedIn Authority Building': 'linkedin-authority-building',
    'Digital Transformation Roadmap': 'digital-transformation-roadmap',
    'Vendor Shortlisting & Corporate Positioning': 'vendor-shortlisting-corporate-positioning',
    'SaaS Product Strategy for Logistics Companies': 'saas-product-strategy',
    'Investor Preparation Package': 'investor-preparation-package',
  };
  return map[title] || '';
}

/* ── Category Navigation Data ── */
const CATEGORIES = [
  { id: 'custom-software', label: '01  Custom Software' },
  { id: 'mobile-apps', label: '02  Mobile Apps' },
  { id: 'web-digital', label: '03  Web & Digital' },
  { id: 'ai-automation', label: '04  AI & Automation' },
  { id: 'marketing', label: '05  Marketing' },
  { id: 'consulting', label: '06  Consulting' },
];

/* ── Category 1: Custom Software Development ── */
const CUSTOM_SOFTWARE = [
  {
    title: 'Transport Management Systems (TMS)',
    description: 'Road, Rail, Air, Maritime variants. Trip planning, vehicle assignment, driver app, POD upload, route cost analytics.',
    price: 'From Rs.1.5L to Rs.15L',
    large: true,
  },
  {
    title: 'Warehouse Management Systems (WMS)',
    description: 'Pick & pack, slotting optimization, RFID integration, labor management, real-time inventory.',
    price: 'From Rs.2L to Rs.12L',
    large: false,
  },
  {
    title: 'Freight Billing & Invoice Systems',
    description: 'GST-compliant, rate card management, auto-send via WhatsApp, payment tracking.',
    price: 'From Rs.60K to Rs.1.2L',
    large: false,
  },
  {
    title: 'Fleet Management Systems',
    description: 'Vehicle tracking, maintenance scheduling, fuel management, driver compliance, insurance alerts.',
    price: 'From Rs.80K to Rs.3L',
    large: false,
  },
  {
    title: 'Order Management Systems (OMS)',
    description: 'Multi-channel order capture, fulfillment routing, SLA tracking, client portal.',
    price: 'From Rs.1L to Rs.5L',
    large: false,
  },
  {
    title: 'Custom ERP for Logistics',
    description: 'Multi-module integrated platforms combining TMS, WMS, billing, and analytics.',
    price: 'From Rs.5L to Rs.50L',
    large: true,
  },
  {
    title: 'Client & Vendor Portals',
    description: 'Branded web portals with document upload, shipment tracking, PO management.',
    price: 'From Rs.80K to Rs.1.5L',
    large: false,
  },
  {
    title: 'Driver & Fleet Compliance Apps',
    description: 'Mobile-first document management, attendance, service schedule tracking.',
    price: 'From Rs.50K to Rs.1L',
    large: false,
  },
];

/* ── Category 2: Mobile Application Development ── */
const MOBILE_APPS = [
  {
    title: 'Driver Mobile Apps',
    description: 'Trip updates, POD photo upload, navigation, fuel entry, incident reporting. Android + iOS.',
    price: 'From Rs.1.5L to Rs.4L',
    large: true,
  },
  {
    title: 'Customer Shipment Tracking Apps',
    description: 'Real-time ETA, status updates, notifications, feedback. White-labeled.',
    price: 'From Rs.1L to Rs.3L',
    large: false,
  },
  {
    title: 'Logistics Marketplace Apps',
    description: 'Load matching, spot rate bidding, carrier rating systems.',
    price: 'From Rs.3L to Rs.15L',
    large: false,
  },
  {
    title: 'Field Operations Apps',
    description: 'Inspection, audit, checklist, IoT data capture for on-field teams.',
    price: 'From Rs.80K to Rs.2L',
    large: true,
  },
  {
    title: 'Fleet Manager Dashboard Apps',
    description: 'Real-time fleet visibility, driver status, trip P&L, alerts.',
    price: 'From Rs.1L to Rs.3L',
    large: false,
  },
];

/* ── Category 3: Web Development & Digital Presence ── */
const WEB_DIGITAL = [
  {
    title: 'Corporate Landing Page',
    description: 'Vendor-shortlist-ready single page. GSTIN, fleet data, coverage map, RFQ form. 3\u20135 days.',
    price: 'Rs.15,000',
    large: true,
  },
  {
    title: 'Full Corporate Website (Standard)',
    description: '5\u20137 pages, logistics-specific copy, SEO, GBP, LinkedIn. 7\u201310 days.',
    price: 'Rs.45,000',
    large: false,
  },
  {
    title: 'Premium Corporate Website',
    description: 'Case studies, capability deck PDF, blog, advanced SEO, 3-month support. 12\u201315 days.',
    price: 'Rs.75,000',
    large: false,
  },
  {
    title: 'E-Commerce for Logistics',
    description: 'Online freight booking, rate calculator, document upload, payment gateway.',
    price: 'From Rs.2L to Rs.8L',
    large: false,
  },
  {
    title: 'Multi-tenant SaaS Platform (Web)',
    description: 'White-label logistics software as a service platform.',
    price: 'From Rs.5L+',
    large: true,
  },
];

/* ── Category 4: AI & Automation ── */
const AI_AUTOMATION = [
  {
    title: 'WhatsApp Shipment Tracking Bot',
    description: 'Customer sends Order ID, bot replies with ETA. 60\u201380% call deflection.',
    price: 'Rs.40K\u2013Rs.80K',
    large: true,
  },
  {
    title: 'Lead CRM & Follow-up Automation',
    description: 'Multi-channel lead capture, auto-reply, follow-up sequences, pipeline dashboard.',
    price: 'Rs.30K\u2013Rs.60K',
    large: false,
  },
  {
    title: 'AI Freight Quotation Engine',
    description: 'Rate card-based auto-quoting, founder approval via WhatsApp, PDF auto-send.',
    price: 'Rs.1.2L\u2013Rs.2.5L',
    large: false,
  },
  {
    title: 'Business Intelligence & MIS Dashboard',
    description: 'Revenue by route/client/vehicle, on-time delivery KPIs, cash flow analytics.',
    price: 'Rs.80K\u2013Rs.1.5L',
    large: false,
  },
  {
    title: 'Custom LLM & AI Operations Chatbot',
    description: 'Trained on company rate cards, SOPs, routes. Handles client and driver queries 24/7.',
    price: 'Rs.2L\u2013Rs.5L+',
    large: true,
  },
  {
    title: 'Document Processing Automation',
    description: 'e-Way bill generation, invoice OCR, customs document automation.',
    price: 'Rs.60K\u2013Rs.1.5L',
    large: false,
  },
  {
    title: 'CRM Integration (Salesforce, Zoho, HubSpot)',
    description: 'Connect enquiries, proposals, follow-ups, billing into one system.',
    price: 'Rs.40K\u2013Rs.1.5L',
    large: false,
  },
];

/* ── Category 5: Performance Marketing ── */
const MARKETING = [
  {
    title: 'Starter Marketing Retainer',
    price: 'Rs.15K/month',
    features: ['12 LinkedIn posts', 'GBP management', 'Monthly SEO updates', 'Strategy call', 'Performance report'],
  },
  {
    title: 'Growth Marketing Retainer',
    price: 'Rs.30K/month',
    features: ['Google Ads', 'Meta Ads (Rs.20K ad spend included)', 'Lead CRM', '16 posts', '2 strategy calls'],
  },
  {
    title: 'Accelerator Marketing Retainer',
    price: 'Rs.60K/month',
    features: ['Full channel management', 'Rs.40K ad spend', 'WhatsApp automation', 'Competitor intelligence', 'Quarterly QBR'],
  },
  {
    title: 'SEO Campaign (Logistics-Specific)',
    price: 'Rs.25K\u2013Rs.50K/month',
    features: ['Keyword research', 'Technical SEO audit', 'Content creation', 'Backlink building'],
  },
  {
    title: 'LinkedIn Authority Building',
    price: 'Rs.15K\u2013Rs.30K/month',
    features: ['Founder personal brand', 'Company page growth', 'Thought leadership content'],
  },
];

/* ── Category 6: Consulting ── */
const CONSULTING = [
  {
    title: 'Digital Transformation Roadmap',
    price: 'Rs.50K\u2013Rs.1L',
    description: '90-day assessment, gap analysis, prioritized investment plan.',
  },
  {
    title: 'Vendor Shortlisting & Corporate Positioning',
    price: 'Rs.25K\u2013Rs.60K',
    description: 'Positioning strategy for Tata, Reliance, Amazon vendor screening.',
  },
  {
    title: 'SaaS Product Strategy for Logistics Companies',
    price: 'Rs.1L\u2013Rs.3L',
    description: 'Productize operational knowledge into software.',
  },
  {
    title: 'Investor Preparation Package',
    price: 'Rs.2L\u2013Rs.5L',
    description: 'Pitch deck, financial model, data room setup, investor-grade MIS.',
  },
];

/* ── Process Flow ── */
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We understand your operation, current tech stack, and specific bottlenecks in a free 20-minute call.',
  },
  {
    number: '02',
    title: 'Scope & Proposal',
    description: 'A written scope covering deliverables, timeline, milestones, and total cost arrives within 24 hours.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Development in 2-10 week sprints with milestone demos. You see progress, not surprises.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Go-live with 30-90 days of post-launch support. We don\'t disappear after delivery.',
  },
];

/* ── FAQ Data ── */
const FAQ_ITEMS = [
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines range from 3 days for a corporate landing page to 10+ weeks for a custom ERP or enterprise TMS. Most projects fall in the 2-6 week range. We provide a detailed timeline in our proposal before work begins, with clear milestones so you always know where things stand.',
  },
  {
    question: 'What is the payment structure?',
    answer: 'We follow a 40-30-30 milestone payment structure: 40% advance to begin work, 30% upon design approval, and 30% at go-live. For larger projects (Rs.5L+), we can customize the payment schedule to match your comfort level.',
  },
  {
    question: 'Do you work with logistics companies outside India?',
    answer: 'Yes. Our primary focus is the Indian logistics market, but we serve clients globally. All delivery is remote, which means we work with logistics companies across the Middle East, Southeast Asia, Africa, and beyond. The process is the same discovery, scoping, building, and supporting.',
  },
  {
    question: 'What if I\u2019m not satisfied with the initial design?',
    answer: 'If the design direction is wrong within the first 72 hours of the design phase, we offer a full refund. No questions asked. After that, we work through revisions collaboratively until you\u2019re satisfied. Our goal is to build something you\u2019re proud of not just something that ships.',
  },
  {
    question: 'Can I start with a small project and scale later?',
    answer: 'Yes. Most of our clients start with a website or landing page and expand as they see results. We design everything with scalability in mind so a landing page can grow into a full website, a WhatsApp bot can become a full CRM, and a small tool can evolve into an enterprise platform. Start where you are. Grow from there.',
  },
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

function SectionLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium font-[family-name:var(--font-montserrat)] ${className}`}>
      {children}
    </span>
  );
}

function SectionHeading({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <h2
      className={`text-[clamp(28px,4vw,42px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.1] tracking-tight ${dark ? 'text-white' : 'text-[#000000]'} ${className}`}
    >
      {children}
    </h2>
  );
}

function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2A3AFF]">{children}</span>;
}

/* ── Bento Card ── */
function BentoCard({ item, index }: { item: { title: string; description: string; price: string; large: boolean }; index: number }) {
  const slug = getSlug(item.title);
  return (
    <Link
      href={slug ? `/services/${slug}` : '#'}
      className={`block border border-black/[0.06] bg-[#F7F8FA] p-5 md:p-6 transition-all duration-300 hover:border-[#2A3AFF]/20 cursor-pointer group ${item.large ? 'md:col-span-2' : 'col-span-1'
        }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] md:text-base font-[family-name:var(--font-poppins)] font-semibold leading-snug text-[#000000]">
          {item.title}
        </h3>
        <ArrowUpRight size={16} className="text-[#9CA3AF] flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <p className="mt-3 text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
        {item.description}
      </p>
      <div className="mt-4 pt-3 border-t border-black/[0.06]">
        <span className="text-[12px] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium">
          {item.price}
        </span>
      </div>
    </Link>
  );
}

/* ── Service Category Section (Bento Grid) ── */
function BentoCategorySection({
  id,
  Icon,
  label,
  heading,
  items,
  bg = 'bg-white',
}: {
  id: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  heading: string;
  items: { title: string; description: string; price: string; large: boolean }[];
  bg?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${bg}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal style="fadeUp" once={false}>
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-5 h-5 text-[#2A3AFF]" size={20} />
            <SectionLabel>{label}</SectionLabel>
          </div>
          <SectionHeading className="max-w-4xl">
            {heading}
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal style="fadeUp" delay={0.1} once={false}>
          <div className="mt-10 md:mt-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {items.map((item, i) => (
                <BentoCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── List Card (Marketing/Consulting) ── */
function ListCard({
  item,
  index,
  type,
}: {
  item: { title: string; price: string; description?: string; features?: string[] };
  index: number;
  type: 'marketing' | 'consulting';
}) {
  const slug = getSlug(item.title);
  return (
    <Link
      href={slug ? `/services/${slug}` : '#'}
      className="block border border-black/[0.06] bg-[#F7F8FA] p-5 md:p-6 transition-all duration-300 hover:border-[#2A3AFF]/20 cursor-pointer group"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[15px] md:text-base font-[family-name:var(--font-poppins)] font-semibold leading-snug text-[#000000]">
              {item.title}
            </h3>
            <ArrowUpRight size={16} className="text-[#9CA3AF] flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {type === 'marketing' && item.features && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {item.features.map((feature) => (
                <span key={feature} className="flex items-center gap-1.5 text-[12px] text-[#6B7280] font-[family-name:var(--font-montserrat)]">
                  <Check size={12} className="text-[#2A3AFF] flex-shrink-0" />
                  {feature}
                </span>
              ))}
            </div>
          )}
          {type === 'consulting' && item.description && (
            <p className="mt-2.5 text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
              {item.description}
            </p>
          )}
        </div>
        <span className="text-[12px] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium whitespace-nowrap md:pt-0.5">
          {item.price}
        </span>
      </div>
    </Link>
  );
}

/* ── Process Step ── */
function ProcessStep({ step, index }: { step: typeof PROCESS_STEPS[0]; index: number }) {
  return (
    <ScrollReveal style={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'} delay={index * 0.1} once={false}>
      <div className="relative pl-12 md:pl-16 pb-10 md:pb-12">
        {/* Vertical connector line */}
        {index < PROCESS_STEPS.length - 1 && (
          <div className="absolute left-[11px] md:left-[15px] top-7 bottom-0 w-px bg-black/[0.06]" />
        )}
        {/* Number dot */}
        <div className="absolute left-0 top-0 w-[23px] md:w-[31px] h-[23px] md:h-[31px] border border-black/[0.08] bg-white flex items-center justify-center">
          <span className="text-[9px] md:text-[10px] font-mono text-[#9CA3AF]">{step.number}</span>
        </div>
        {/* Content */}
        <h3 className="text-[15px] md:text-base font-[family-name:var(--font-poppins)] font-semibold leading-snug text-[#000000]">
          {step.title}
        </h3>
        <p className="mt-2 text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)] max-w-lg">
          {step.description}
        </p>
      </div>
    </ScrollReveal>
  );
}

/* ── FAQ Item ── */
function FAQItem({ item, isOpen, onClick }: { item: typeof FAQ_ITEMS[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="text-[14px] md:text-[15px] font-[family-name:var(--font-poppins)] font-medium leading-snug text-[#000000] pr-6 group-hover:text-[#2A3AFF] transition-colors duration-200">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown size={16} className="text-[#9CA3AF]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-[13px] md:text-sm text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)] max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================
   MAIN SERVICES PAGE
   ============================================ */

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="bg-white">
      <Navbar transparent />

      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden bg-black hero-dark-text">


        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-32 md:py-0 w-full">
          <ScrollReveal style="fadeUp" once={false}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-md mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium font-[family-name:var(--font-montserrat)]">Services</span>
            </div>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <h1 className="text-[clamp(32px,5vw,56px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.08] tracking-[-0.02em] text-white max-w-4xl">
              Complete Technology and Growth Services for <AccentText>Logistics Companies</AccentText>
            </h1>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.25} once={false}>
            <p className="mt-8 md:mt-10 text-base md:text-xl text-white/70 max-w-3xl leading-relaxed font-[family-name:var(--font-montserrat)] font-light border-l border-white/20 pl-6">
              From a Rs.15,000 corporate website that passes vendor shortlisting to a Rs.50 lakh enterprise Transport Management System  every engagement starts with understanding your specific operation and builds from there.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ── STICKY CATEGORY NAVIGATION BAR ── */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center overflow-x-auto scrollbar-hide -mx-6 md:-mx-10 lg:-mx-16 px-6 md:px-10 lg:px-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`flex-shrink-0 px-4 py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium font-[family-name:var(--font-montserrat)] transition-all duration-200 border-b-2 whitespace-nowrap ${activeCategory === cat.id
                  ? 'text-[#2A3AFF] border-[#2A3AFF]'
                  : 'text-[#9CA3AF] border-transparent hover:text-[#000000] hover:border-black/[0.12]'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          CATEGORY 1: CUSTOM SOFTWARE DEVELOPMENT
          ═══════════════════════════════════════════ */}
      <BentoCategorySection
        id="custom-software"
        Icon={Wrench}
        label="Category 01"
        heading="Custom Software Development"
        items={CUSTOM_SOFTWARE}
        bg="bg-white"
      />

      {/* ── HOW WE WORK  Process Section ── */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>How We Work</SectionLabel>
            <SectionHeading className="mt-4 max-w-3xl">
              Four steps from first call to go-live
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <p className="mt-6 text-[15px] md:text-base text-[#6B7280] leading-relaxed max-w-2xl font-[family-name:var(--font-montserrat)] font-light">
              Every engagement follows the same structured process  whether you&apos;re building a Rs.15,000 landing page or a Rs.50 lakh enterprise platform.
            </p>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          CATEGORY 2: MOBILE APPLICATION DEVELOPMENT
          ═══════════════════════════════════════════ */}
      <BentoCategorySection
        id="mobile-apps"
        Icon={Smartphone}
        label="Category 02"
        heading="Mobile Application Development"
        items={MOBILE_APPS}
        bg="bg-white"
      />

      {/* ═══════════════════════════════════════════
          CATEGORY 3: WEB DEVELOPMENT & DIGITAL
          ═══════════════════════════════════════════ */}
      <BentoCategorySection
        id="web-digital"
        Icon={Globe}
        label="Category 03"
        heading="Web Development and Digital Presence"
        items={WEB_DIGITAL}
        bg="bg-[#F7F8FA]"
      />

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          CATEGORY 4: AI & AUTOMATION
          ═══════════════════════════════════════════ */}
      <BentoCategorySection
        id="ai-automation"
        Icon={Bot}
        label="Category 04"
        heading="Automation, AI & CRM Integration"
        items={AI_AUTOMATION}
        bg="bg-white"
      />

      {/* ═══════════════════════════════════════════
          CATEGORY 5: PERFORMANCE MARKETING
          ═══════════════════════════════════════════ */}
      <section id="marketing" className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-[#2A3AFF]" size={20} />
              <SectionLabel>Category 05</SectionLabel>
            </div>
            <SectionHeading className="max-w-4xl">
              Performance Marketing & Growth
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <div className="mt-10 md:mt-14 space-y-3 md:space-y-4">
              {MARKETING.map((item, i) => (
                <ListCard key={item.title} item={item} index={i} type="marketing" />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          CATEGORY 6: CONSULTING
          ═══════════════════════════════════════════ */}
      <section id="consulting" className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-[#2A3AFF]" size={20} />
              <SectionLabel>Category 06</SectionLabel>
            </div>
            <SectionHeading className="max-w-4xl">
              Business Consulting & Strategy
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <div className="mt-10 md:mt-14 space-y-3 md:space-y-4">
              {CONSULTING.map((item, i) => (
                <ListCard key={item.title} item={item} index={i} type="consulting" />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading className="mt-4 max-w-3xl">
              Frequently Asked Questions
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14 max-w-2xl">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openFAQ === i}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          BOTTOM CTA  DARK
          ═══════════════════════════════════════════ */}


      {/* Hidden scrollbar style */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
