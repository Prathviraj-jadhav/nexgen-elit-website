'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import {
  ArrowLeft,
  ArrowUpRight,
  AlertTriangle,
  Check,
  X,
  ChevronDown,
  Users,
  Zap,
  Clock,
  Shield,
  Briefcase,
  Target,
} from 'lucide-react';
import { servicesData } from '@/data/services-data';

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

function SectionHeading({
  children,
  className = '',
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-[clamp(28px,4vw,42px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.1] tracking-tight ${dark ? 'text-white' : 'text-[#111318]'} ${className}`}
    >
      {children}
    </h2>
  );
}

function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2A3AFF]">{children}</span>;
}

/* ============================================
   FAQ ITEM
   ============================================ */

function FAQItem({
  item,
  isOpen,
  onClick,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="text-[14px] md:text-[15px] font-[family-name:var(--font-poppins)] font-medium leading-snug text-[#111318] pr-6 group-hover:text-[#2A3AFF] transition-colors duration-200">
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
   MAIN PAGE COMPONENT
   ============================================ */

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  if (!service) {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center max-w-md px-6">
            <SectionLabel>404  Not Found</SectionLabel>
            <h1 className="mt-6 text-3xl font-[family-name:var(--font-poppins)] font-semibold text-[#111318]">
              Service not found
            </h1>
            <p className="mt-4 text-[15px] text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed">
              The service you are looking for does not exist or has been moved.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-8 text-[13px] font-semibold text-[#2A3AFF] font-[family-name:var(--font-montserrat)] hover:underline"
            >
              <ArrowLeft size={14} />
              Back to Services
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="min-h-[60vh] md:min-h-[65vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-0 w-full">
          <ScrollReveal style="fadeUp" once={false}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[12px] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] hover:text-[#2A3AFF] transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={12} />
              Back to Services
            </Link>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.05} once={false}>
            <div className="flex items-center gap-3 mb-4">
              <SectionLabel>{service.categoryLabel}</SectionLabel>
              <span className="text-[10px] text-[#9CA3AF]">·</span>
              <SectionLabel>Service {service.number}</SectionLabel>
            </div>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <h1 className="text-[clamp(28px,4.5vw,52px)] font-[family-name:var(--font-poppins)] font-semibold leading-[1.08] tracking-tight text-[#111318] max-w-5xl">
              {service.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.2} once={false}>
            <p className="mt-4 text-[clamp(18px,2.5vw,28px)] font-[family-name:var(--font-poppins)] font-medium text-[#2A3AFF] leading-snug">
              {service.heroTagline}
            </p>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.3} once={false}>
            <p className="mt-8 text-base md:text-lg text-[#6B7280] max-w-3xl leading-relaxed font-[family-name:var(--font-montserrat)] font-light">
              {service.heroDescription}
            </p>
          </ScrollReveal>

          {/* Breadcrumb */}
          <ScrollReveal style="fadeUp" delay={0.35} once={false}>
            <nav className="mt-8 flex items-center gap-2 text-[12px] font-[family-name:var(--font-montserrat)]">
              <Link href="/" className="text-[#9CA3AF] hover:text-[#2A3AFF] transition-colors">
                Home
              </Link>
              <span className="text-[#9CA3AF]">/</span>
              <Link href="/services" className="text-[#9CA3AF] hover:text-[#2A3AFF] transition-colors">
                Services
              </Link>
              <span className="text-[#9CA3AF]">/</span>
              <span className="text-[#9CA3AF]">{service.categoryLabel}</span>
              <span className="text-[#9CA3AF]">/</span>
              <span className="text-[#111318]">{service.title}</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: PROBLEM STATEMENT
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>The Problem</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">{service.problemTitle}</SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <p className="mt-6 text-[15px] md:text-base text-[#6B7280] leading-relaxed max-w-3xl font-[family-name:var(--font-montserrat)] font-light">
              {service.problemDescription}
            </p>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.06} once={false}>
              <div className="space-y-4">
                {service.problemBullets.map((bullet, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        size={16}
                        className="text-[#2A3AFF] flex-shrink-0 mt-0.5"
                      />
                      <p className="text-[14px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                        {bullet}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: WHO THIS IS FOR
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Who This Is For</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">{service.audienceTitle}</SectionHeading>
          </ScrollReveal>

          <p className="mt-6 text-[15px] md:text-base text-[#6B7280] leading-relaxed max-w-3xl font-[family-name:var(--font-montserrat)] font-light">
            {service.audienceDescription || service.shortDescription}
          </p>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.06} once={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.audienceSegments.map((segment, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="border border-black/[0.06] bg-[#F7F8FA] p-5 md:p-6 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Users size={14} className="text-[#2A3AFF]" />
                        <h3 className="text-[14px] font-[family-name:var(--font-poppins)] font-semibold text-[#111318]">
                          {segment.role}
                        </h3>
                      </div>
                      <p className="text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                        {segment.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: WHAT WE DO
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>What We Do</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">{service.whatWeDoTitle}</SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <p className="mt-6 text-[15px] md:text-base text-[#6B7280] leading-relaxed max-w-3xl font-[family-name:var(--font-montserrat)] font-light">
              {service.whatWeDoDescription}
            </p>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.05} once={false}>
              <div className="space-y-3">
                {service.whatWeDoItems.map((item, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="flex items-start gap-3">
                      <Check size={16} className="text-[#2A3AFF] flex-shrink-0 mt-0.5" />
                      <p className="text-[14px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                        {item}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: FEATURES / DELIVERABLES (Bento Grid)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Features & Deliverables</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">What You Get</SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.05} once={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="border border-black/[0.06] bg-[#F7F8FA] p-5 md:p-6 h-full">
                      <h3 className="text-[15px] font-[family-name:var(--font-poppins)] font-semibold text-[#111318] leading-snug">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: HOW WE DO IT
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>How We Do It</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">{service.howWeDoTitle}</SectionHeading>
          </ScrollReveal>

          <p className="mt-6 text-[15px] md:text-base text-[#6B7280] leading-relaxed max-w-3xl font-[family-name:var(--font-montserrat)] font-light">
            {service.howWeDoDescription || `We follow a precision-led ${service.howWeDoSteps.length}-step process to ensure every detail of your logistics operations is addressed.`}
          </p>

          <div className="mt-10 md:mt-14">
            {service.howWeDoSteps.map((step, i) => (
              <ScrollReveal
                key={step.step}
                style={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                delay={i * 0.08}
                once={false}
              >
                <div className="relative pl-12 md:pl-16 pb-10 md:pb-12">
                  {i < service.howWeDoSteps.length - 1 && (
                    <div className="absolute left-[11px] md:left-[15px] top-7 bottom-0 w-px bg-black/[0.06]" />
                  )}
                  <div className="absolute left-0 top-0 w-[23px] md:w-[31px] h-[23px] md:h-[31px] border border-black/[0.08] bg-white flex items-center justify-center">
                    <span className="text-[9px] md:text-[10px] font-mono text-[#9CA3AF]">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-[15px] md:text-base font-[family-name:var(--font-poppins)] font-semibold leading-snug text-[#111318]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)] max-w-lg">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 7: BENEFITS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Benefits</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">Why This Matters</SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.05} once={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="border border-black/[0.06] bg-[#F7F8FA] p-5 md:p-6 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap size={14} className="text-[#2A3AFF]" />
                        <h3 className="text-[15px] font-[family-name:var(--font-poppins)] font-semibold text-[#111318]">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                        {benefit.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 8: BEFORE VS AFTER
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Before & After</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">The Difference</SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.05} once={false}>
              <div className="space-y-0">
                {service.beforeAfter.map((item, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black/[0.06] last:border-b">
                      {/* Before */}
                      <div className="p-5 md:p-6 flex items-start gap-3 border-b md:border-b-0 border-black/[0.06] md:border-r">
                        <X
                          size={16}
                          className="text-[#9CA3AF] flex-shrink-0 mt-0.5"
                        />
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium">
                            Before
                          </span>
                          <p className="mt-1.5 text-[13px] text-[#9CA3AF] leading-relaxed font-[family-name:var(--font-montserrat)]">
                            {item.before}
                          </p>
                        </div>
                      </div>
                      {/* After */}
                      <div className="p-5 md:p-6 flex items-start gap-3">
                        <Check
                          size={16}
                          className="text-[#2A3AFF] flex-shrink-0 mt-0.5"
                        />
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#2A3AFF] font-[family-name:var(--font-montserrat)] font-medium">
                            After
                          </span>
                          <p className="mt-1.5 text-[13px] text-[#111318] leading-relaxed font-[family-name:var(--font-montserrat)] font-medium">
                            {item.after}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 9: PROCESS / TIMELINE
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Process & Timeline</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">{service.processTitle}</SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.06} once={false}>
              <div className="space-y-4">
                {service.processTimeline.map((phase, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="border border-black/[0.06] p-5 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
                        <div className="flex-1">
                          <h3 className="text-[15px] font-[family-name:var(--font-poppins)] font-semibold text-[#111318]">
                            {phase.phase}
                          </h3>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {phase.deliverables.map((d) => (
                              <span
                                key={d}
                                className="inline-flex items-center gap-1 text-[12px] text-[#6B7280] font-[family-name:var(--font-montserrat)]"
                              >
                                <Check
                                  size={10}
                                  className="text-[#2A3AFF] flex-shrink-0"
                                />
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <Clock size={12} className="text-[#9CA3AF]" />
                          <span className="text-[12px] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium whitespace-nowrap">
                            {phase.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 10: WHY NEXGEN
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Why Nexgen Elit</SectionLabel>
            <SectionHeading className="mt-4 max-w-4xl">Why Work With Us</SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14">
            <StaggerContainer staggerDelay={0.06} once={false}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whyNexgenReasons.map((reason, i) => (
                  <StaggerItem key={i} y={16}>
                    <div className="border border-black/[0.06] bg-white p-5 md:p-6 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield size={14} className="text-[#2A3AFF]" />
                        <h3 className="text-[15px] font-[family-name:var(--font-poppins)] font-semibold text-[#111318]">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                        {reason.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════════════════
          SECTION 11: FAQ
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading className="mt-4 max-w-3xl">
              Frequently Asked Questions
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-10 md:mt-14 max-w-2xl">
            {service.faq.map((item, i) => (
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

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA  DARK
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Get Started</SectionLabel>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <SectionHeading dark className="mt-4 max-w-2xl mx-auto">
              Interested in {service.title.split('(')[0].trim()}?
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.2} once={false}>
            <p className="mt-6 text-[15px] md:text-base text-[#9CA3AF] max-w-lg mx-auto leading-relaxed font-[family-name:var(--font-montserrat)] font-light">
              Book a free 20-minute discovery call. No obligation, no pitch, no follow-up sequence.
            </p>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.3} once={false}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 bg-[#2A3AFF] text-white font-[family-name:var(--font-montserrat)] hover:bg-[#1a2acc]"
              >
                Book a Call <ArrowUpRight size={13} />
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-white/20 text-white font-[family-name:var(--font-montserrat)] hover:bg-white/5"
              >
                WhatsApp Us <ArrowUpRight size={13} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
