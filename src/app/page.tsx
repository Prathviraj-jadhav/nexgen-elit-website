'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
// Footer is now in SiteFooter via root layout
import { Navbar } from '@/components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plane, Ship, Truck, TrainFront } from 'lucide-react';

// Industry Section Images
import AirwaysImg from '@/img/Airways.jpeg';
import ShipImg from '@/img/Ship Container 1.jpeg';
import TruckImg from '@/img/Truck with Man.jpeg';
import TrainImg from '@/img/Fast train.jpeg';

// Before & After + Blog Images
import BeforeLandscape from '@/img/landscape-2.jpg';
import AfterLandscape from '@/img/landscape-1.png';
import Blog1Img from '@/img/Fleet.jpeg';
import Blog2Img from '@/img/Deliver.jpeg';
import Blog3Img from '@/img/Truck with Man.jpeg';
import Blog4Img from '@/img/Truck.jpeg';
import Blog5Img from '@/img/Warehouse.jpeg';
import Blog6Img from '@/img/Container grop.jpeg';
import ChartsImg from '@/img/Charts.webp';
import BrandImg from '@/img/Brand.png';

// Use Cases Images
// Use Case GIFs
import Scroll1 from '@/img/Scroll 1.gif';
import Scroll2 from '@/img/Scroll -2.gif';
import Scroll3 from '@/img/Scroll-3.gif';
import Scroll4 from '@/img/Scroll 4.gif';
import Scroll5 from '@/img/Scroll - 5.gif';

gsap.registerPlugin(ScrollTrigger);

/* ============================================
   CONSTANTS & DATA
   ============================================ */
const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4';

const PROJECT_CARDS = [
  {
    title: 'Freight Website Revamp',
    image: '/project-automotive.jpg',
    span: 'md:col-span-7',
  },
  {
    title: '3PL Corporate Positioning',
    image: '/project-branding.jpg',
    span: 'md:col-span-5',
  },
  {
    title: 'Fleet Visibility System',
    image: '/project-architecture.jpg',
    span: 'md:col-span-5',
  },
  {
    title: 'Logistics Brand Authority',
    image: '/project-portrait.jpg',
    span: 'md:col-span-7',
  },
];



const SYSTEMS_ROW_1 = [
  ['Freight Management', 'Shipment Tracking', 'Load Optimization', 'Carrier Selection', 'Freight Audit'],
  ['Fleet Dashboard', 'Vehicle Tracking', 'Driver Analytics', 'Fuel Management', 'Maintenance Alerts'],
  ['Route Planner', 'Delivery Optimization', 'Multi-stop Routing', 'ETA Prediction', 'Geo-fencing'],
  ['Client CRM', 'Lead Scoring', 'Quotation Builder', 'Follow-up Engine', 'Pipeline Tracker'],
  ['POD Automation', 'EPOD Capture', 'Delivery Proof', 'Signature Digitization', 'Instant Dispatch'],
  ['Vendor Portal', 'Rate Management', 'Vendor Onboarding', 'Performance Score', 'Contract Renewal'],
];

const SYSTEMS_ROW_2 = [
  ['Billing System', 'Auto Invoicing', 'Payment Gateway', 'Reconciliation', 'Credit Control'],
  ['Inquiry Funnel', 'Lead Capture', 'Auto Response', 'Qualification Bot', 'Meeting Scheduler'],
  ['Analytics Suite', 'Revenue Insights', 'Cost Analytics', 'Performance KPIs', 'Custom Reports'],
  ['Warehouse Ops', 'Inventory Tracking', 'Slotting Logic', 'Pick & Pack', 'Stock Alerts'],
  ['Tender Dashboard', 'Bid Management', 'Rate Comparison', 'Award Tracker', 'Compliance Check'],
  ['API Hub', 'ULIP Connect', 'ERP Sync', 'TMS Integration', 'Real-time Webhooks'],
];

const INDUSTRIES = [
  {
    id: 'airway',
    tab: 'Airway Logistics Systems',
    title: 'Airway Logistics',
    icon: Plane,
    description: 'Manage air cargo operations with speed and accuracy. From shipment tracking to airline coordination, we build systems that help logistics companies handle time-sensitive deliveries without delays.',
    image: AirwaysImg.src,
  },
  {
    id: 'waterway',
    tab: 'Waterway Freight Systems',
    title: 'Waterway Freight',
    icon: Ship,
    description: 'Streamline port operations, container tracking, and global shipments. Our systems help you manage large-volume freight with better visibility and fewer manual errors.',
    image: ShipImg.src,
  },
  {
    id: 'roadway',
    tab: 'Roadway Transport Systems',
    title: 'Roadway Transport',
    icon: Truck,
    description: 'Track fleets, optimize routes, and manage deliveries in real time. We help transport companies reduce delays, cut costs, and improve operational efficiency.',
    image: TruckImg.src,
  },
  {
    id: 'railway',
    tab: 'Railway Cargo Systems',
    title: 'Railway Cargo',
    icon: TrainFront,
    description: <>Handle bulk cargo movement with structured systems. From scheduling to tracking, we help railway <span className="logistics-highlight">logistics businesses</span> operate with better control and reliability.</>,
    image: TrainImg.src,
  },
];

/* ============================================
   SECTION 2: HERO - Sharp, Linear, Centered
   ============================================ */

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP entrance - subtle opacity + translateY, no bounce/scale/float
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ ease: 'power2.out' });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 20, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, delay: 0.3 }
      );

      tl.fromTo(
        '.hero-heading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.5'
      );

      tl.fromTo(
        '.hero-tagline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      );

      tl.fromTo(
        '.hero-subtext',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      );

      tl.fromTo(
        '.hero-buttons',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

      tl.fromTo(
        '.hero-trust',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <Navbar transparent />

      {/* Background Video - z-0, below content */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay - uniform black/45 across the full hero */}
        <div className="absolute inset-0 bg-black/45 z-[1]" />
      </div>

      {/* Hero Content - z-10, centered, sharp, minimal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="hero-eyebrow text-[10px] sm:text-xs font-[family-name:var(--font-montserrat)] font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Logistics Technology Partner
          </p>

          {/* Main Heading */}
          <h1 className="hero-heading font-[family-name:var(--font-poppins)] font-semibold tracking-tight leading-[1.1] mb-3 sm:mb-4" style={{ color: '#FFFFFF' }}>
            One stop solutions for{' '}
            <span className="logistics-highlight font-normal">
              logistics businesses.
            </span>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline text-base sm:text-lg md:text-xl font-[family-name:var(--font-poppins)] font-medium tracking-tight max-w-2xl mb-4 sm:mb-6" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Complete infrastructure for logistics companies.
          </p>

          {/* Subtext */}
          <div className="hero-subtext flex flex-col gap-0.5 sm:gap-1 max-w-xl px-2 sm:px-0">
            <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-montserrat)] font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
              From operations systems to marketing, development, and consulting.
            </p>
            <p className="text-xs sm:text-sm md:text-base font-[family-name:var(--font-montserrat)] font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Everything logistics companies need, minus the chaos.
            </p>
          </div>

          {/* Buttons - Sharp Outline */}
          <div className="hero-buttons mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto">
            {/* Primary Button - solid white fill */}
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-[0.1em] border border-white transition-all duration-300 w-full sm:w-auto"
              style={{ borderRadius: 0, background: '#FFFFFF', color: '#0A0A0A', borderColor: '#FFFFFF' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = '#000000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0A0A0A'; e.currentTarget.style.borderColor = '#FFFFFF'; }}
            >
              VIEW SERVICES <ArrowUpRight size={14} className="ml-2" />
            </a>

            {/* Secondary Button - outline white */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-[0.1em] bg-transparent border transition-all duration-300 w-full sm:w-auto"
              style={{ borderRadius: 0, color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
            >
              CONTACT US
            </a>
          </div>

          {/* Trust Line */}
          <div className="hero-trust mt-6 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-montserrat)] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>Airway</span>
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-montserrat)] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>Roadway</span>
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-montserrat)] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>Waterway</span>
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-[family-name:var(--font-montserrat)] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>Railway</span>
          </div>
        </div>
      </div>

      {/* Premium bottom fade - cinematic transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[5] pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,1) 100%)' }} />
    </section>
  );
}

/* ============================================
   SECTION 2.5: SYSTEMS GRID (Rotating)
   ============================================ */

function RotatingColumn({ items, className = '' }: { items: string[]; className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 2200 + Math.random() * 300);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={`relative h-16 flex items-center justify-center overflow-hidden border-r border-white/[0.08] last:border-r-0 hover:bg-white/[0.05] transition-all duration-300 ${className}`}>
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute inset-0 flex items-center justify-center text-sm text-white/80 font-medium"
          style={{
            textShadow: 'none',
            opacity: i === activeIndex ? 1 : i === (activeIndex - 1 + items.length) % items.length ? 0 : 0,
            transform: i === activeIndex ? 'translateY(0px)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            pointerEvents: i === activeIndex ? 'auto' : 'none',
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SystemsConveyorSection() {
  return (
    <section id="services" className="bg-black py-14 md:py-20 relative overflow-hidden">
      {/* Premium top transition - distinct shade from hero video section */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.6) 60%, transparent 100%)' }} />

      <div className="text-center mb-10 relative">
        <p className="text-sm text-[#2A3AFF] font-medium mb-3">
          Everything Your Logistics and Supply Chain Needs. In One Place.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-6 border border-white/[0.08]">
          {SYSTEMS_ROW_1.slice(0, 2).map((col, i) => (
            <RotatingColumn key={`r1-${i}`} items={col} />
          ))}
          {SYSTEMS_ROW_1.slice(2).map((col, i) => (
            <RotatingColumn key={`r1m-${i}`} items={col} className="hidden md:block" />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-6 border border-white/[0.08]">
          {SYSTEMS_ROW_2.slice(0, 2).map((col, i) => (
            <RotatingColumn key={`r2-${i}`} items={col} />
          ))}
          {SYSTEMS_ROW_2.slice(2).map((col, i) => (
            <RotatingColumn key={`r2m-${i}`} items={col} className="hidden md:block" />
          ))}
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

/* ============================================
   SECTION 2.7: INDUSTRY EXPERTISE - WE ONLY WORK WITH (Light Mode)
   ============================================ */

function IndustryExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const SLIDE_DURATION = 4000;
  const startTimeRef = useRef<number>(Date.now());

  const animateProgressRef = useRef<((timestamp: number) => void) | null>(null);

  // Smooth progress animation with requestAnimationFrame
  useEffect(() => {
    startTimeRef.current = Date.now();
    progressRef.current = 0;

    animateProgressRef.current = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(elapsed / SLIDE_DURATION, 1);
      progressRef.current = p;
      setProgress(p);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(animateProgressRef.current!);
      }
    };

    rafRef.current = requestAnimationFrame(animateProgressRef.current!);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex]);

  // Auto-play with progress reset
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, SLIDE_DURATION);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handleTabClick = useCallback((index: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setActiveIndex(index);
    startTimeRef.current = Date.now();
    progressRef.current = 0;
    setProgress(0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (animateProgressRef.current) {
      rafRef.current = requestAnimationFrame(animateProgressRef.current!);
    }
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, SLIDE_DURATION);
  }, []);

  return (
    <section id="industry" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Section heading */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-poppins)] leading-[0.9] text-black">
            We Only Work With
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base mt-4 max-w-lg">
            Logistics companies that move things. Not just pixels.
          </p>
        </motion.div>
      </div>

      {/* Content area */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-10 md:mt-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Image Stack Slider - with fade */}
          <motion.div
            className="relative w-full h-[280px] md:h-[420px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {INDUSTRIES.map((industry, i) => {
              let style: React.CSSProperties = {};
              if (i === activeIndex) {
                style = { opacity: 1, transform: 'translateY(0px) scale(1)', zIndex: 20 };
              } else if (i === (activeIndex - 1 + INDUSTRIES.length) % INDUSTRIES.length) {
                style = { opacity: 0.3, transform: 'translateY(-20px) scale(0.96)', zIndex: 10 };
              } else {
                style = { opacity: 0, transform: 'translateY(40px) scale(0.9)', zIndex: 0 };
              }
              return (
                <div key={industry.id} className="absolute inset-0 transition-all duration-700 ease-in-out" style={style}>
                  <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
                </div>
              );
            })}
          </motion.div>

          {/* Right Content - with fade */}
          <motion.div
            className="flex flex-col justify-between min-h-[280px] md:min-h-[420px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={INDUSTRIES[activeIndex].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-black">
                  {INDUSTRIES[activeIndex].title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mb-3 md:mb-4 text-[#6B7280]">
                  {INDUSTRIES[activeIndex].description}
                </p>
                <p className="text-xs md:text-sm max-w-md text-[#9CA3AF]">
                  You didn&apos;t build this to stay small. So why run it like you did?
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Loader - bottom right of the content frame */}
            <div className="mt-auto pt-6">
              <div className="relative h-5 overflow-hidden mb-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`loader-${INDUSTRIES[activeIndex].id}`}
                    className="block text-xs font-medium tracking-wide text-right"
                    style={{ color: 'rgba(0,0,0,0.25)' }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    {INDUSTRIES[activeIndex].tab}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="w-full h-[2px] overflow-hidden" style={{ background: 'rgba(0,0,0,0.08)' }}>
                <div
                  className="h-full transition-none"
                  style={{
                    width: `${progress * 100}%`,
                    background: '#2A3AFF',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3: TRANSFORMATION SYSTEMS
   ============================================ */

const TRANSFORM_BOTTOM_FEATURES = [
  {
    title: 'From confusion \u2192 clarity in proposals',
    desc: 'Your business is presented in a way buyers instantly understand structured, clear, and easy to approve.',
  },
  {
    title: 'From generic \u2192 built for your operations',
    desc: 'Systems designed around how your logistics business actually runs not forced into templates.',
  },
  {
    title: 'From blind spots \u2192 full visibility',
    desc: 'Your team and clients get real-time clarity on operations, status, and performance no chasing updates.',
  },
  {
    title: 'From fragile \u2192 enterprise-ready',
    desc: 'Your systems scale with your business secure, stable, and ready for larger contracts.',
  },
];

function TransformationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Header heading
      gsap.fromTo(
        '.tf-headline',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tf-header',
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // Header subtext
      gsap.fromTo(
        '.tf-subtext',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tf-header',
            start: 'top 82%',
            end: 'top 52%',
            scrub: 1,
          },
        }
      );

      // Main grid border reveal (scaleX from 0 to 1)
      gsap.fromTo(
        '.tf-main-grid',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tf-main-grid',
            start: 'top 88%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );

      // Feature cards - each card fades in with slight stagger
      const featureCards = sectionRef.current.querySelectorAll('.tf-feature-card');
      featureCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 58%',
              scrub: 1,
            },
          }
        );

        // Label tag inside card
        const label = card.querySelector('.tf-card-label');
        if (label) {
          gsap.fromTo(
            label,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 62%',
                scrub: 1,
              },
            }
          );
        }

        // Card title
        const title = card.querySelector('.tf-card-title');
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                end: 'top 55%',
                scrub: 1,
              },
            }
          );
        }

        // Card description
        const desc = card.querySelector('.tf-card-desc');
        if (desc) {
          gsap.fromTo(
            desc,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 52%',
                scrub: 1,
              },
            }
          );
        }

        // Card image placeholder
        const imgArea = card.querySelector('.tf-card-image');
        if (imgArea) {
          gsap.fromTo(
            imgArea,
            { opacity: 0, y: 30, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: imgArea,
                start: 'top 92%',
                end: 'top 70%',
                scrub: 1,
              },
            }
          );
        }
      });

      // Bottom features grid border reveal
      gsap.fromTo(
        '.tf-bottom-grid',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tf-bottom-grid',
            start: 'top 90%',
            end: 'top 65%',
            scrub: 1,
          },
        }
      );

      // Each bottom feature item
      const bottomItems = sectionRef.current.querySelectorAll('.tf-bottom-item');
      bottomItems.forEach((item, i) => {
        // Dot
        const dot = item.querySelector('.tf-dot');
        if (dot) {
          gsap.fromTo(
            dot,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: item,
                start: 'top 88%',
                end: 'top 72%',
                scrub: 1,
              },
            }
          );
        }

        // Title
        const bTitle = item.querySelector('.tf-b-title');
        if (bTitle) {
          gsap.fromTo(
            bTitle,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'top 65%',
                scrub: 1,
              },
            }
          );
        }

        // Description
        const bDesc = item.querySelector('.tf-b-desc');
        if (bDesc) {
          gsap.fromTo(
            bDesc,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 82%',
                end: 'top 60%',
                scrub: 1,
              },
            }
          );
        }
      });

      // Transformation bridge
      gsap.fromTo(
        '.tf-bridge',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.tf-bridge',
            start: 'top 90%',
            end: 'top 70%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mobile carousel scroll tracking
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveSlide(index);
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-20 md:py-28 relative overflow-hidden bg-white">

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        {/* HEADER */}
        <div className="tf-header flex flex-col gap-6 mb-16">
          <h2 className="tf-headline text-4xl md:text-5xl font-medium text-black leading-[1.05] max-w-xl">
            So what actually changes when your systems are built right?
          </h2>
          <p className="tf-subtext text-[#6B7280] text-sm md:text-base">
            The problem wasn&apos;t your operations. It was how your business showed up, got evaluated, and earned trust. Here&apos;s what shifts when that&apos;s fixed.
          </p>
        </div>

        {/* MAIN GRID - Desktop: 2-Column | Mobile: Swipe Carousel */}
        {/* Mobile carousel wrapper with scroll-snap */}
        <div
          ref={carouselRef}
          className="tf-main-grid flex md:grid md:grid-cols-2 gap-0 border border-black/[0.08] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* FEATURE CARD 1 - Visibility Transformation */}
          <div className="tf-feature-card min-w-full md:min-w-0 p-8 md:p-12 border-b md:border-r border-black/[0.08] snap-start scroll-ml-0">
            <div className="tf-card-label flex items-center gap-3 mb-6">
              <span className="w-2 h-2  bg-[#2A3AFF]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B7280] font-medium">Visibility Transformation</span>
            </div>
            <h3 className="tf-card-title text-2xl md:text-3xl font-medium text-black leading-tight mb-4">
              From invisible &rarr; shortlisted
            </h3>
            <p className="tf-card-desc text-[#6B7280] text-sm md:text-base leading-relaxed mb-8">
              Your business starts showing up where decisions happen search, vendor lists, and corporate evaluations. You&apos;re no longer chasing leads, you&apos;re part of the shortlist.
            </p>
            {/* Image placeholder area */}
            <div className="tf-card-image  overflow-hidden bg-[#F7F8FA] aspect-[4/3] flex items-center justify-center">
              <img
                src={ChartsImg.src}
                alt="Visibility transformation charts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* FEATURE CARD 2 - Perception Transformation */}
          <div className="tf-feature-card min-w-full md:min-w-0 p-8 md:p-12 border-b border-black/[0.08] snap-start scroll-ml-0">
            <div className="tf-card-label flex items-center gap-3 mb-6">
              <span className="w-2 h-2  bg-[#2A3AFF]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B7280] font-medium">Perception Transformation</span>
            </div>
            <h3 className="tf-card-title text-2xl md:text-3xl font-medium text-black leading-tight mb-4">
              From scattered &rarr; structured
            </h3>
            <p className="tf-card-desc text-[#6B7280] text-sm md:text-base leading-relaxed mb-8">
              Your operations finally look as strong as they are. Clear systems, clean presentation, and a setup that makes corporate buyers take you seriously from the first glance.
            </p>
            {/* Image placeholder area */}
            <div className="tf-card-image  overflow-hidden bg-[#F7F8FA] aspect-[4/3] flex items-center justify-center">
              <img
                src={BrandImg.src}
                alt="Perception transformation branding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile-only carousel indicators */}
        <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => {
                if (carouselRef.current) {
                  const cardWidth = carouselRef.current.offsetWidth;
                  carouselRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                }
              }}
              className=" transition-all duration-300"
              style={{
                width: activeSlide === i ? '24px' : '8px',
                height: '8px',
                background: activeSlide === i ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)',
              }}
            />
          ))}
        </div>

        {/* BOTTOM FEATURES - Transformation Stack */}
        <div className="tf-bottom-grid grid md:grid-cols-2 gap-0">
          {TRANSFORM_BOTTOM_FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className={`tf-bottom-item p-8 md:p-10 ${i < 2 ? 'border-b md:border-b border-black/[0.08]' : ''} ${i % 2 === 0 ? 'md:border-r' : ''} border-black/[0.08]`}
            >
              <div className="flex items-start gap-4">
                <span className="tf-dot mt-1.5 w-1.5 h-1.5  bg-[#2A3AFF] flex-shrink-0" />
                <div>
                  <h4 className="tf-b-title text-base md:text-lg font-medium text-black mb-2 leading-snug">
                    {feat.title}
                  </h4>
                  <p className="tf-b-desc text-[#6B7280] text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRANSFORMATION BRIDGE */}
        <p className="tf-bridge mt-16 text-black/70 max-w-xl text-sm leading-relaxed text-left">
          You don&apos;t need better operations. You need better positioning of those operations.
        </p>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3.5: HOW WE TRANSFORM YOU
   ============================================ */

const PROCESS_STEPS = [
  {
    title: "We audit where you're losing deals",
    desc: "We identify {highlight}visibility gaps{/highlight} and where buyers drop you before contact. This deep audit covers your digital presence, industry positioning, and the key moments where potential clients lose confidence before reaching out.",
  },
  {
    title: "We rebuild how you show up",
    desc: "Your business is positioned to match {highlight}enterprise expectations{/highlight}. We restructure your messaging, visual identity, and digital presence so that every touchpoint communicates reliability and competence to decision-makers.",
  },
  {
    title: "We structure your operations digitally",
    desc: "Dashboards, workflows, and systems that make you {highlight}look organised{/highlight}. Every operational layer is designed to give buyers confidence that your business can handle scale without friction.",
  },
  {
    title: "We create trust signals",
    desc: "Case studies, clarity, and proof that remove buyer hesitation. We build a layered {highlight}trust signals{/highlight} system so that by the time a prospect speaks with you, they're already convinced.",
  },
  {
    title: "You start getting shortlisted",
    desc: "Now your business is considered, evaluated, and selected. The systems, positioning, and trust signals work together so you're {highlight}not chasing leads{/highlight} - they're choosing you.",
  },
];

function ProcessSection() {
  return (
    <section className="py-24 md:py-32 relative" style={{ background: '#F7F8FA' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* ─── Left Side - Sticky ─── */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-[120px] md:h-fit">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B7280] block mb-6">
                Our Process
              </span>
              <h2 className="text-[36px] md:text-[44px] font-display leading-[1.1] text-black">
                How we build systems that get you selected
              </h2>
              <p className="text-[#6B7280] mt-6 text-sm md:text-base leading-relaxed max-w-md">
                We don&apos;t add tools. We fix how your business is seen, understood, and trusted by the people who decide.
              </p>
              <p className="text-[#6B7280] mt-4 text-sm leading-relaxed max-w-md">
                Every step is designed to move your business from invisible to inevitable in the eyes of corporate buyers.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center border border-[#2A3AFF] bg-[#2A3AFF] text-white px-6 py-3 text-sm transition-all duration-300 cursor-pointer"
                style={{ borderRadius: 0 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#2A3AFF'; e.currentTarget.style.borderColor = '#2A3AFF'; }}
              >
                Book a strategy call <ArrowUpRight size={14} className="ml-1.5" />
              </a>
            </div>
          </div>

          {/* ─── Right Side - Individual Cards ─── */}
          <div className="md:col-span-7 flex flex-col gap-[8px]">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="py-6 md:py-8 px-5 md:px-7 border border-black/[0.08] hover:border-black/[0.20] transition-colors duration-300 cursor-default">
                  <span className="text-xs text-[#6B7280] uppercase tracking-[0.2em] block mb-3">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[20px] md:text-[24px] text-black font-medium leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mt-4 leading-[1.75] max-w-lg">
                    {step.desc.replace(/\{highlight\}/g, '').replace(/\{\/highlight\}/g, '')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3.7: BEFORE / AFTER COMPARISON
   ============================================ */

function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <section className="py-20 md:py-28" style={{ background: '#F7F8FA' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header with fade */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <span className="text-xs text-[#6B7280] uppercase tracking-[0.2em] mb-4 block">
              The Reality of the Market
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
              Built for how modern logistics companies actually operate.
            </h2>
          </div>
          <p className="text-[#6B7280] max-w-md text-sm md:text-base">
            While traditional methods and fragmented tools create operational bottlenecks,
            Nexgen enables a complete, integrated stack for total control.
          </p>
        </motion.div>

        {/* Comparison Slider - using clip-path for no-zoom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            ref={containerRef}
            className="relative w-full mt-12 overflow-hidden cursor-col-resize select-none border border-black/[0.08]"
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseLeave={() => setPosition(50)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={() => setPosition(50)}
          >
            {/* BEFORE IMAGE (top layer - clipped from left) */}
            <img
              src={BeforeLandscape.src}
              alt="Before - Current Logistics Landscape"
              className="absolute top-0 left-0 w-full h-[400px] md:h-[600px] object-contain bg-white pointer-events-none block"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
              draggable={false}
            />

            {/* AFTER IMAGE (background layer - visible as clipped layer shrinks) */}
            <img
              src={AfterLandscape.src}
              alt="After - Nexgen-enabled Operations"
              className="w-full h-[400px] md:h-[600px] object-contain bg-white pointer-events-none block"
              draggable={false}
            />

            {/* DIVIDER LINE */}
            <div
              className="absolute top-0 h-full w-[2px] bg-white pointer-events-none"
              style={{
                left: `${position}%`,
                transform: 'translateX(-50%)',
                boxShadow: '0 0 8px rgba(0,0,0,0.3)',
              }}
            />

            {/* DIVIDER KNOB */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center pointer-events-none"
              style={{
                left: `${position}%`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="md:w-6 md:h-6">
                <path d="M7 4L3 10L7 16" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 4L17 10L13 16" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* LABELS */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 pointer-events-none">
              Before
            </div>
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 pointer-events-none">
              After
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3.8: USE-CASES CAROUSEL
   ============================================ */

const USE_CASE_SLIDES = [
  {
    image: Scroll1.src,
  },
  {
    image: Scroll2.src,
  },
  {
    image: Scroll3.src,
  },
  {
    image: Scroll4.src,
  },
  {
    image: Scroll5.src,
  },
];

function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % USE_CASE_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextIndex = (activeIndex + 1) % USE_CASE_SLIDES.length;

  return (
    <section ref={sectionRef} className="py-[80px] md:py-[100px]" style={{ background: '#f6f6f6' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header - fade in/out on scroll */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-black leading-[1.1] max-w-xl mb-3 md:mb-4" style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 600 }}>
            Built for every part of your logistics business
          </h2>
          <p className="text-[#6B7280] max-w-md text-sm md:text-base leading-relaxed">
            From operations to sales, we build systems that make your logistics company structured, visible, and ready for enterprise clients.
          </p>
        </motion.div>

        {/* Two Large Image Containers - Side by Side */}
        <div className="relative w-full">
          {/* Left Image - Primary Large Container - slide from right to left only */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: 0,
              boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)',
              zIndex: 2,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`active-${activeIndex}`}
                src={USE_CASE_SLIDES[activeIndex].image}
                alt="Logistics platform"
                className="w-full h-auto block"
                style={{
                  maxHeight: '520px',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
                draggable={false}
                initial={{ x: 80 }}
                animate={{ x: 0 }}
                exit={{ x: -80 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>

          {/* Right Image - Faded Ghost Container - slide from right to left only */}
          <div
            className="absolute top-0 right-0 w-[70%] md:w-[65%] h-full overflow-hidden pointer-events-none"
            style={{
              zIndex: 1,
              transform: 'translateX(50px) scale(0.96)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0) 100%)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`next-${nextIndex}`}
                src={USE_CASE_SLIDES[nextIndex].image}
                alt=""
                className="w-full h-full object-cover block"
                style={{ objectPosition: 'left center', opacity: 0.6 }}
                draggable={false}
                initial={{ x: 80 }}
                animate={{ x: 0 }}
                exit={{ x: -80 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation dots - fade on scroll */}
        <motion.div
          className="flex items-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {USE_CASE_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="transition-all duration-300 cursor-pointer"
              style={{
                width: i === activeIndex ? '24px' : '8px',
                height: '8px',
                background: i === activeIndex ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.12)',
                borderRadius: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3.8: FAQ / QUESTIONS
   ============================================ */

const FAQ_ITEMS = [
  {
    question: "Do I really need this if my operations are already strong?",
    answer: "Strong operations don't get you selected. Strong presentation of those operations does. Right now, you're probably good… just not visible where it matters.",
  },
  {
    question: "We already have a website. Isn't that enough?",
    answer: "Having a website is like having a visiting card. What you need is a system that actually convinces someone to trust you.",
  },
  {
    question: "Will this actually bring us more clients?",
    answer: "It won't magically create demand. But when demand exists, it makes sure you're the one getting shortlisted instead of ignored.",
  },
  {
    question: "How is this different from hiring a normal agency?",
    answer: "Most agencies build pages. We build how your business is perceived, evaluated, and selected. Very different game.",
  },
  {
    question: "We manage everything on calls and WhatsApp. That works fine.",
    answer: "Works for you. Looks chaotic to a corporate buyer deciding where to spend crores. Different perspectives, different outcomes.",
  },
  {
    question: "How long does this take?",
    answer: "Fast enough to not waste your time. Structured enough to not break your business later.",
  },
  {
    question: "Is this only for big logistics companies?",
    answer: "No. It's for companies that want to be treated like big ones.",
  },
  {
    question: "What if this doesn't work for us?",
    answer: "Then you'll still have the same problem you have today - just with better clarity on why it exists.",
  },
  {
    question: "Do we need a big team to manage this?",
    answer: "No. The whole point is to reduce dependency on chaos, not add more to it.",
  },
  {
    question: "When should we start?",
    answer: "Usually right after you realise you've been losing deals quietly for months.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
            Questions you&apos;re probably already thinking
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base mt-3 max-w-lg">
            And the answers you&apos;d ask on a call anyway.
          </p>
        </motion.div>

        {/* Accordion - individual fade per item */}
        <div className="flex flex-col mt-12">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className="border border-black/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left p-5 cursor-pointer group"
                >
                  <span
                    className="text-black font-medium text-base pr-4 transition-colors duration-300"
                    style={{ color: isOpen ? '#2A3AFF' : undefined }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ color: isOpen ? '#2A3AFF' : 'rgba(0,0,0,0.2)' }} />
                    </svg>
                  </span>
                </button>

                <div
                  ref={(el) => { contentRefs.current[i] = el; }}
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  style={{
                    maxHeight: isOpen ? contentRefs.current[i]?.scrollHeight + 'px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="text-[#6B7280] text-sm leading-relaxed pb-5 px-5">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3.9: TESTIMONIALS CAROUSEL
   ============================================ */

const TESTIMONIALS = [
  {
    quote:
      'We had strong operations but zero visibility. After Nexgen, we started getting inbound queries from companies we were chasing for months.',
    author: 'Founder',
    role: 'Mid-size logistics firm',
    avatar: '/project-architecture.jpg',
  },
  {
    quote:
      'Before this, everything ran on calls and WhatsApp. Now clients see structured updates and actually trust our process.',
    author: 'Operations Head',
    role: '3PL company',
    avatar: '/project-branding.jpg',
  },
  {
    quote:
      "We didn't realise how unstructured we looked until this. The moment systems went live, conversations changed.",
    author: 'Director',
    role: 'Freight company',
    avatar: '/project-automotive.jpg',
  },
  {
    quote:
      'Earlier we were explaining everything manually. Now our system explains it before the call even happens.',
    author: 'Sales Head',
    role: 'Transport company',
    avatar: '/project-portrait.jpg',
  },
  {
    quote:
      'We stopped chasing clients. Now we\u2019re part of their shortlist.',
    author: 'Founder',
    role: 'Cold chain logistics',
    avatar: '/feature-smart.jpg',
  },
];

function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const speed = 0.4; // px per ms - smooth, calm pace
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragOffsetStart = useRef(0);

  // Duplicate testimonials for seamless loop
  const allCards = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  // Smooth infinite scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardEl = track.querySelector('.testimonial-card');
    if (!cardEl) return;
    const gap = 24;
    const cardWidth = (cardEl as HTMLElement).offsetWidth + gap;
    const singleSetWidth = TESTIMONIALS.length * cardWidth;

    const animate = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused && !isDragging.current) {
        offsetRef.current -= speed * delta;
        // Reset offset when one full set scrolls past
        if (Math.abs(offsetRef.current) >= singleSetWidth) {
          offsetRef.current += singleSetWidth;
        }
      }

      track.style.transform = `translateX(${offsetRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    dragOffsetStart.current = offsetRef.current;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const walk = clientX - dragStartX.current;
    offsetRef.current = dragOffsetStart.current + walk;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // Don't snap - let the smooth animation resume naturally
  };

  return (
    <motion.section
      className="py-20 md:py-28 overflow-hidden" style={{ background: '#FFFFFF' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header - heading + subtext left */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
              Don&apos;t take our word for it.
            </h2>
            <p className="text-[#6B7280] text-sm md:text-base mt-2">
              Logistics teams that fixed visibility, structure, and conversions with Nexgen.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <motion.div
        className="mt-12 relative"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }} />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }} />

        <div
          className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
          style={{ paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 40px))' }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div ref={trackRef} className="flex gap-6 will-change-transform">
            {allCards.map((item, i) => (
              <div
                key={i}
                className="testimonial-card flex-shrink-0 w-[300px] md:w-[380px] p-6 md:p-8 hover:opacity-100 transition-opacity duration-500"
                style={{
                  borderRadius: '0px',
                  backgroundColor: '#F7F8FA',
                  border: '1px solid rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Quote */}
                <p className="text-black text-sm md:text-base leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Divider */}
                <div style={{ width: '32px', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)', marginTop: '24px', marginBottom: '20px' }} />

                {/* Author - role + company type only */}
                <div>
                  <p className="text-black text-sm font-medium">{item.author}</p>
                  <p className="text-[#6B7280] text-sm mt-0.5">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
/* ============================================
   SECTION 5: BLOG GRID
   ============================================ */

const FEATURED_BLOGS = [
  {
    slug: "why-92-percent-logistics-fail-corporate-vendor-google-test",
    title: "Why 92% of Logistics Companies Fail the Corporate Vendor Google Test",
    excerpt: "92% of Indian logistics companies are invisible when corporate procurement teams search for vendors on Google.",
    category: "Software & Technology",
    readTime: "10 min",
    keyStat: "92%",
    keyLabel: "invisible to corporate buyers",
    image: Blog1Img.src,
  },
  {
    slug: "ai-freight-quotation-system-60-seconds",
    title: "AI-Powered Freight Quotation System in Under 60 Seconds",
    excerpt: "The first vendor to respond with a professional quotation wins 68% of the time.",
    category: "Software & Technology",
    readTime: "11 min",
    keyStat: "60s",
    keyLabel: "response time",
    image: Blog2Img.src,
  },
  {
    slug: "client-vendor-portal-logistics-stop-whatsapp-accounts",
    title: "Why WhatsApp Is Destroying Your Professional Image",
    excerpt: "73% of corporate buyers reject logistics vendors who rely on WhatsApp for business communication.",
    category: "Software & Technology",
    readTime: "10 min",
    keyStat: "73%",
    keyLabel: "reject WhatsApp vendors",
    image: Blog3Img.src,
  },
  {
    slug: "google-ads-logistics-campaigns-fail-corporate-inquiries",
    title: "Google Ads for Logistics: Why Most Campaigns Fail",
    excerpt: "Indian logistics companies waste ₹14.2L per year on ads that generate zero corporate inquiries.",
    category: "Digital Marketing",
    readTime: "10 min",
    keyStat: "₹14.2L",
    keyLabel: "wasted per year",
    image: Blog4Img.src,
  },
  {
    slug: "website-design-logistics-corporate-procurement-needs",
    title: "Website Design for Logistics: What Procurement Teams Look For",
    excerpt: "You have 90 seconds to pass the corporate evaluation. Here is exactly what they check.",
    category: "Design & Branding",
    readTime: "8 min",
    keyStat: "90s",
    keyLabel: "to pass evaluation",
    image: Blog5Img.src,
  },
  {
    slug: "fleet-management-systems-india-guide",
    title: "Fleet Management Systems: What You Actually Need vs. What You Buy",
    excerpt: "Most logistics companies buy FMS with 200 features they never use and miss the 5 that matter.",
    category: "Software & Technology",
    readTime: "5 min",
    keyStat: null,
    keyLabel: null,
    image: Blog6Img.src,
  },
];

function BlogBentoSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B7280] font-medium block mb-3">Insights</span>
            <h2 className="text-3xl md:text-4xl font-medium text-black leading-tight">
              From our research desk
            </h2>
            <p className="text-[#6B7280] text-sm md:text-base mt-3 max-w-md">
              Data-driven insights on logistics technology, corporate procurement, and digital transformation.
            </p>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-[#6B7280] hover:text-black transition-colors duration-200"
          >
            View all articles <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px]">
          {FEATURED_BLOGS.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="group block h-full border border-black/[0.08] hover:border-black/[0.18] transition-colors duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44 md:h-52">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  {/* Key stat badge */}
                  {blog.keyStat && (
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5">
                      <span className="text-white text-sm font-semibold">{blog.keyStat}</span>
                      {blog.keyLabel && (
                        <span className="text-white/60 text-[10px] block">{blog.keyLabel}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#2A3AFF] font-medium">{blog.category}</span>
                    <span className="w-0.5 h-0.5 bg-black/[0.15]" />
                    <span className="text-[10px] text-[#9CA3AF]">{blog.readTime}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-medium text-black leading-snug group-hover:text-[#2A3AFF] transition-colors duration-200">
                    {blog.title}
                  </h3>
                  <p className="text-[#6B7280] text-xs mt-2 leading-relaxed line-clamp-2">{blog.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   MAIN PAGE
   ============================================ */

import { useUserTracking } from '@/hooks/useUserTracking';

export default function Home() {
  useUserTracking();

  return (
    <main className="bg-white">
      <HeroSection />
      <SystemsConveyorSection />
      <IndustryExpertiseSection />
      <TransformationSection />
      <ProcessSection />
      <BeforeAfterSection />
      <UseCasesSection />
      <FAQSection />
      <TestimonialsSection />
      <BlogBentoSection />
    </main>
  );
}
