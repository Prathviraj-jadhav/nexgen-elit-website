'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import {
  X,
  Check,
  ArrowUpRight,
  ChevronDown,
  Users,
  Zap,
  Clock,
  Shield,
  ArrowLeft,
  Truck,
  TrainFront,
  Ship,
  Plane,
  Warehouse,
  Link2,
} from 'lucide-react';
import { productsData, categoriesMeta } from '@/data/products-data';

/* ────────────────────────────────────────────────
   ICON MAP
   ──────────────────────────────────────────────── */

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Truck,
  TrainFront,
  Ship,
  Plane,
  Warehouse,
  Link2,
};

/* ────────────────────────────────────────────────
   SUB-COMPONENTS
   ──────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
      <LineReveal className="h-px bg-black/[0.06]" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium mb-5"
      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
    >
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-[22px] md:text-[30px] leading-[1.15] max-w-[640px] tracking-[-0.01em] mb-5 ${dark ? 'text-white' : 'text-[#111318]'
        }`}
      style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
    >
      {children}
    </h2>
  );
}

function AccentText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#2A3AFF]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
      {children}
    </span>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/[0.06]">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-5 text-left gap-4"
      >
        <span
          className="text-[15px] md:text-[16px] leading-[1.4] text-[#111318] font-medium"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#9CA3AF] shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-[14px] md:text-[15px] leading-[1.8] text-[#6B7280] max-w-[680px]"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ────────────────────────────────────────────────
   PAGE SECTIONS
   ──────────────────────────────────────────────── */

function HeroSection({
  product,
  categoryMeta,
}: {
  product: (typeof productsData)[string];
  categoryMeta: (typeof categoriesMeta)[string];
}) {
  const Icon = iconMap[categoryMeta.icon] || Truck;

  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Back Link */}
        <ScrollReveal>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[13px] text-[#6B7280] hover:text-[#111318] transition-colors duration-200 mb-8"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Products
          </Link>
        </ScrollReveal>

        {/* Breadcrumb */}
        <ScrollReveal delay={0.04}>
          <div className="flex items-center gap-2 mb-6 text-[12px] text-[#9CA3AF]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
            <Link href="/" className="hover:text-[#6B7280] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#6B7280] transition-colors">Products</Link>
            <span>/</span>
            <Link href={`/products#${product.categoryId}`} className="hover:text-[#6B7280] transition-colors">{categoryMeta.label}</Link>
            <span>/</span>
            <span className="text-[#6B7280]">{product.name}</span>
          </div>
        </ScrollReveal>

        {/* Category Tag */}
        <ScrollReveal delay={0.06}>
          <div className="flex items-center gap-2 mb-5">
            <Icon className="w-4 h-4 text-[#2A3AFF]" size={16} />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
              {categoryMeta.label}  Product {product.number}
            </span>
          </div>
        </ScrollReveal>

        {/* Product Name */}
        <ScrollReveal delay={0.1}>
          <h1
            className="text-[28px] md:text-[40px] lg:text-[48px] leading-[1.08] text-[#111318] max-w-[720px] tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            {product.name}
          </h1>
        </ScrollReveal>

        {/* Tagline */}
        <ScrollReveal delay={0.14}>
          <p
            className="text-[18px] md:text-[22px] leading-[1.2] text-[#2A3AFF] max-w-[600px] tracking-[-0.01em] mb-6"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            {product.heroTagline}
          </p>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.18}>
          <p
            className="text-[15px] md:text-[16px] leading-[1.8] text-[#6B7280] max-w-[620px]"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {product.heroDescription}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProblemStatement({ categoryMeta }: { categoryMeta: (typeof categoriesMeta)[string] }) {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>The Problem</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>{categoryMeta.problemTitle}</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="text-[15px] md:text-[16px] leading-[1.8] text-[#6B7280] max-w-[620px] mb-8"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {categoryMeta.problemDescription}
          </p>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.06} className="flex flex-col gap-0">
          {categoryMeta.problemBullets.map((bullet, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 py-3">
                <X className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5" />
                <p
                  className="text-[14px] md:text-[15px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {bullet}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function WhoThisIsFor({ categoryMeta }: { categoryMeta: (typeof categoriesMeta)[string] }) {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>Who This Is For</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>{categoryMeta.audienceTitle}</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="text-[15px] md:text-[16px] leading-[1.8] text-[#6B7280] max-w-[620px] mb-8"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {categoryMeta.audienceDescription}
          </p>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {categoryMeta.audienceSegments.map((segment, i) => (
            <StaggerItem key={i}>
              <div className="p-5 border border-black/[0.06] h-full">
                <Users className="w-5 h-5 text-[#2A3AFF] mb-3" />
                <h3
                  className="text-[14px] md:text-[15px] leading-[1.3] text-[#111318] font-medium mb-2"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {segment.role}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {segment.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function WhatWeDoSection({ product }: { product: (typeof productsData)[string] }) {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>What We Build</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>{product.whatWeDoTitle}</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="text-[15px] md:text-[16px] leading-[1.8] text-[#6B7280] max-w-[620px] mb-8"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {product.whatWeDoDescription}
          </p>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.06} className="flex flex-col gap-0">
          {product.whatWeDoItems.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 py-3">
                <Check className="w-4 h-4 text-[#2A3AFF] shrink-0 mt-0.5" />
                <p
                  className="text-[14px] md:text-[15px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {item}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FeaturesSection({ product }: { product: (typeof productsData)[string] }) {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>Key Features</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>Everything you need, nothing you do not</SectionHeading>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-8">
          {product.features.map((feature, i) => (
            <StaggerItem key={i}>
              <div
                className={`p-6 border border-black/[0.06] h-full transition-colors duration-300 hover:bg-[#F7F8FA] ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
              >
                <h3
                  className="text-[15px] md:text-[16px] leading-[1.3] text-[#111318] font-medium mb-2"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function HowWeDoItSection({ product }: { product: (typeof productsData)[string] }) {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>How We Do It</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>{product.howWeDoTitle}</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="text-[15px] md:text-[16px] leading-[1.8] text-[#6B7280] max-w-[620px] mb-10"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {product.howWeDoDescription}
          </p>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {product.howWeDoSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="p-6 border border-black/[0.06] h-full">
                <span
                  className="text-[32px] leading-none text-[#2A3AFF]/20 font-semibold select-none block mb-3"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3
                  className="text-[15px] md:text-[16px] leading-[1.3] text-[#111318] font-medium mb-2"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function BenefitsSection({ product }: { product: (typeof productsData)[string] }) {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>Benefits</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>The measurable impact on your operations</SectionHeading>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-8">
          {product.benefits.map((benefit, i) => (
            <StaggerItem key={i}>
              <div className="p-6 border border-black/[0.06] h-full">
                <Zap className="w-5 h-5 text-[#2A3AFF] mb-3" />
                <h3
                  className="text-[15px] md:text-[16px] leading-[1.3] text-[#111318] font-medium mb-2"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function BeforeVsAfterSection({ product }: { product: (typeof productsData)[string] }) {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>Before vs After</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>The difference is measurable</SectionHeading>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.06} className="flex flex-col gap-0 mt-8">
          {product.beforeAfter.map((item, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 border border-black/[0.06]">
                <div className="p-5 border-b md:border-b-0 md:border-r border-black/[0.06] flex items-start gap-3">
                  <X className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-0.5" />
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium block mb-1"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Before
                    </span>
                    <p
                      className="text-[13px] md:text-[14px] leading-[1.7] text-[#6B7280]"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {item.before}
                    </p>
                  </div>
                </div>
                <div className="p-5 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#2A3AFF] shrink-0 mt-0.5" />
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] text-[#2A3AFF] font-medium block mb-1"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      After
                    </span>
                    <p
                      className="text-[13px] md:text-[14px] leading-[1.7] text-[#6B7280]"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProcessTimelineSection({ categoryMeta }: { categoryMeta: (typeof categoriesMeta)[string] }) {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>Our Process</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>{categoryMeta.processTitle}</SectionHeading>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.08} className="flex flex-col gap-0 mt-10">
          {categoryMeta.processSteps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-6 border-b border-black/[0.06]">
                <div>
                  <Clock className="w-4 h-4 text-[#2A3AFF] mb-2" />
                  <p
                    className="text-[13px] font-medium text-[#111318]"
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    {step.phase}
                  </p>
                  <p
                    className="text-[12px] text-[#9CA3AF] mt-0.5"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {step.duration}
                  </p>
                </div>
                <div>
                  <ul className="flex flex-col gap-1.5">
                    {step.deliverables.map((d, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[13px] md:text-[14px] leading-[1.7] text-[#6B7280]"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                      >
                        <Check className="w-3 h-3 text-[#2A3AFF] shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function WhyNexgenSection({ categoryMeta }: { categoryMeta: (typeof categoriesMeta)[string] }) {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>Why Nexgen Elit</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>Why companies choose us</SectionHeading>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-8">
          {categoryMeta.whyNexgenReasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="p-6 border border-black/[0.06] h-full">
                <Shield className="w-5 h-5 text-[#2A3AFF] mb-3" />
                <h3
                  className="text-[15px] md:text-[16px] leading-[1.3] text-[#111318] font-medium mb-2"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FAQSection({ product }: { product: (typeof productsData)[string] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <ScrollReveal>
          <SectionLabel>Frequently Asked Questions</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <SectionHeading>Common questions about this product</SectionHeading>
        </ScrollReveal>
        <div className="mt-8 max-w-[720px]">
          {product.faq.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   NOT FOUND
   ──────────────────────────────────────────────── */

function NotFound() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-20">
        <h1
          className="text-[32px] md:text-[40px] leading-[1.1] text-[#111318] mb-4"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          Product not found
        </h1>
        <p
          className="text-[15px] leading-[1.8] text-[#6B7280] mb-8"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          The product you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111318] bg-[#F7F8FA] px-5 py-3 hover:bg-[#2A3AFF] hover:text-white transition-colors duration-200"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Products
        </Link>
      </div>
    </main>
  );
}

/* ────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────── */

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const product = productsData[slug];

  if (!product) {
    return <NotFound />;
  }

  const categoryMeta = categoriesMeta[product.categoryId];

  if (!categoryMeta) {
    return <NotFound />;
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* 1. Hero */}
      <HeroSection product={product} categoryMeta={categoryMeta} />
      <SectionDivider />

      {/* 2. Problem Statement */}
      <ProblemStatement categoryMeta={categoryMeta} />
      <SectionDivider />

      {/* 3. Who This Is For */}
      <WhoThisIsFor categoryMeta={categoryMeta} />
      <SectionDivider />

      {/* 4. What We Do */}
      <WhatWeDoSection product={product} />
      <SectionDivider />

      {/* 5. Features */}
      <FeaturesSection product={product} />
      <SectionDivider />

      {/* 6. How We Do It */}
      <HowWeDoItSection product={product} />
      <SectionDivider />

      {/* 7. Benefits */}
      <BenefitsSection product={product} />
      <SectionDivider />

      {/* 8. Before vs After */}
      <BeforeVsAfterSection product={product} />
      <SectionDivider />

      {/* 9. Process Timeline */}
      <ProcessTimelineSection categoryMeta={categoryMeta} />
      <SectionDivider />

      {/* 10. Why Nexgen */}
      <WhyNexgenSection categoryMeta={categoryMeta} />
      <SectionDivider />

      {/* 11. FAQ */}
      <FAQSection product={product} />
    </main>
  );
}
