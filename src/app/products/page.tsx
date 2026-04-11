'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import { ArrowUpRight, Truck, TrainFront, Ship, Plane, Warehouse, Link2 } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/* ────────────────────────────────────────────────
   TYPE DEFINITIONS
   ──────────────────────────────────────────────── */

interface Product {
  number: string;
  name: string;
  description: string;
}

interface Category {
  id: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  shortLabel: string;
  count: number;
  products: Product[];
}

/* ────────────────────────────────────────────────
   PRODUCT DATA  96 Products Across 6 Categories
   ──────────────────────────────────────────────── */

const CATEGORIES: Category[] = [
  {
    id: 'roadway',
    icon: Truck,
    label: 'Roadway Logistics Software',
    shortLabel: 'Roadway',
    count: 18,
    products: [
      { number: '01', name: 'Transport Management System (TMS)', description: 'End-to-end trip planning, dispatch, driver assignment, route optimization, and delivery confirmation.' },
      { number: '02', name: 'Fleet Management System', description: 'Real-time vehicle tracking, maintenance scheduling, fuel logs, insurance alerts, utilization analytics.' },
      { number: '03', name: 'Route Optimization Software', description: 'AI-powered multi-stop route planning, traffic integration, cost-per-km analytics, load balancing.' },
      { number: '04', name: 'Dispatch Management System', description: 'Load-to-vehicle assignment, real-time dispatch board, driver communication, status tracking.' },
      { number: '05', name: 'Last-Mile Delivery System', description: 'Delivery zone management, customer notifications, proof-of-delivery capture, failed delivery workflows.' },
      { number: '06', name: 'Driver Management System', description: 'Driver profiles, license tracking, performance scoring, attendance, incentive management.' },
      { number: '07', name: 'Vehicle Telematics System', description: 'GPS tracking, speed alerts, harsh braking detection, engine diagnostics, fuel efficiency monitoring.' },
      { number: '08', name: 'Load Planning & Optimization', description: 'Cargo dimension matching, weight distribution, multi-stop load sequencing, utilization maximization.' },
      { number: '09', name: 'Proof of Delivery (POD) System', description: 'Digital POD capture, photo upload, e-signature, instant customer notification, dispute management.' },
      { number: '10', name: 'Freight Billing & Invoicing System', description: 'GST-compliant invoicing, rate card management, auto-send via WhatsApp/email, payment tracking.' },
      { number: '11', name: 'Trip Expense Management System', description: 'Driver expense submission, approval workflow, fuel card integration, route-wise P&L.' },
      { number: '12', name: 'Fuel Management System', description: 'Fuel purchase tracking, consumption analytics, theft detection alerts, vendor management.' },
      { number: '13', name: 'Road Safety & Compliance System', description: 'Driver behavior monitoring, safety score, incident logging, regulatory compliance tracking.' },
      { number: '14', name: 'E-Way Bill Automation', description: 'Automated e-Way bill generation from trip data, bulk generation, GSTIN verification, GST portal integration.' },
      { number: '15', name: 'Logistics CRM for Road Transport', description: 'Client relationship management, rate negotiation tracking, contract management, renewal alerts.' },
      { number: '16', name: 'Freight Brokerage Platform', description: 'Load board, carrier matching, rate comparison, booking management, commission tracking.' },
      { number: '17', name: 'Road Freight Marketplace', description: 'Shipper-carrier matching, spot rate auction, carrier rating, load tracking, payment processing.' },
      { number: '18', name: 'Carrier Performance Scorecard', description: 'On-time delivery rate, damage claims rate, response time, overall carrier score.' },
    ],
  },
  {
    id: 'railway',
    icon: TrainFront,
    label: 'Railway Logistics Software',
    shortLabel: 'Railway',
    count: 15,
    products: [
      { number: '01', name: 'Rail Transport Management System', description: 'Rail freight booking, wagon allocation, dispatch coordination, journey tracking, delivery management.' },
      { number: '02', name: 'Wagon Allocation & Scheduling', description: 'Wagon demand forecasting, allocation optimization, maintenance-aware scheduling.' },
      { number: '03', name: 'Rail Freight Booking System', description: 'Online rail freight booking, rate comparison, booking confirmation, document generation, tracking.' },
      { number: '04', name: 'Rail Yard Management System', description: 'Wagon sorting, yard capacity management, locomotive assignment, dwell time analytics.' },
      { number: '05', name: 'Rail Cargo Tracking System', description: 'Real-time wagon location, journey milestone tracking, ETA prediction, delay alerts.' },
      { number: '06', name: 'Rail Fleet Maintenance System', description: 'Preventive maintenance scheduling, repair tracking, part inventory, compliance documentation.' },
      { number: '07', name: 'Rail Freight Billing & Settlement', description: 'Freight charge calculation, waybridge integration, penalty management, revenue reconciliation.' },
      { number: '08', name: 'Rail Terminal Operations System', description: 'Loading/unloading management, terminal capacity, equipment allocation, gate operations.' },
      { number: '09', name: 'Rail Intermodal Coordination', description: 'Rail-road handover management, ICD coordination, container tracking across modes.' },
      { number: '10', name: 'Rail Freight Analytics Platform', description: 'Volume trends, revenue analytics, route profitability, customer performance dashboards.' },
      { number: '11', name: 'Rail Delay Prediction System', description: 'AI-powered delay forecasting, proactive customer notification, alternative routing.' },
      { number: '12', name: 'Rail Compliance & Documentation', description: 'RR management, consignment note generation, regulatory compliance tracking.' },
      { number: '13', name: 'Rail Asset Tracking System', description: 'RFID/GPS-based asset tracking, utilization monitoring, lifecycle management.' },
      { number: '14', name: 'Rail Revenue Optimization Engine', description: 'Dynamic pricing, capacity yield management, off-peak incentive management.' },
      { number: '15', name: 'Rail Network Optimization Software', description: 'Network simulation, corridor analysis, capacity planning, investment prioritization.' },
    ],
  },
  {
    id: 'waterways',
    icon: Ship,
    label: 'Waterways & Maritime Logistics Software',
    shortLabel: 'Waterways',
    count: 16,
    products: [
      { number: '01', name: 'Maritime Transport Management System', description: 'End-to-end maritime freight management, vessel assignment, voyage planning.' },
      { number: '02', name: 'Vessel Management System', description: 'Fleet monitoring, maintenance scheduling, crew management, fuel tracking, voyage reporting.' },
      { number: '03', name: 'Container Management System', description: 'Container lifecycle tracking, yard management, equipment interchange, damage inspection.' },
      { number: '04', name: 'Port Management System', description: 'Berth allocation, vessel scheduling, port resource management, gate control, billing.' },
      { number: '05', name: 'Terminal Operating System (TOS)', description: 'Container terminal operations, crane management, yard planning, truck appointment.' },
      { number: '06', name: 'Ship Scheduling & Routing Software', description: 'Voyage optimization, fuel efficiency routing, port call scheduling.' },
      { number: '07', name: 'Marine Fleet Tracking System', description: 'AIS integration, real-time vessel positioning, route deviation alerts, ETA management.' },
      { number: '08', name: 'Freight Forwarding System', description: 'Shipment booking, rate management, document generation, customs coordination.' },
      { number: '09', name: 'Shipping Documentation System', description: 'Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order  automated generation.' },
      { number: '10', name: 'Customs Clearance Management', description: 'Customs filing, duty calculation, document management, clearance status tracking.' },
      { number: '11', name: 'Maritime Billing & Invoice System', description: 'Freight invoice generation, detention/demurrage calculation, disbursement accounting.' },
      { number: '12', name: 'Smart Container IoT Monitoring', description: 'Temperature, humidity, shock, and GPS monitoring for sensitive cargo via IoT sensors.' },
      { number: '13', name: 'Marine Compliance & Safety System', description: 'ISM Code compliance, SOLAS documentation, safety drills, incident reporting.' },
      { number: '14', name: 'Dock & Yard Management System', description: 'Berth scheduling, yard equipment allocation, labor management, throughput analytics.' },
      { number: '15', name: 'Port Community System', description: 'Multi-stakeholder information sharing, single window clearance, PCS integration.' },
      { number: '16', name: 'Maritime Insurance & Claims Platform', description: 'Policy management, claims filing, damage assessment, settlement tracking.' },
    ],
  },
  {
    id: 'airways',
    icon: Plane,
    label: 'Airways Logistics Software',
    shortLabel: 'Airways',
    count: 15,
    products: [
      { number: '01', name: 'Air Cargo Management System', description: 'Comprehensive air freight management  booking, space allocation, tracking, billing, claims.' },
      { number: '02', name: 'Air Freight Booking System', description: 'Online booking, rate comparison, space confirmation, AWB generation, tracking notification.' },
      { number: '03', name: 'Flight Load Planning System', description: 'ULD management, weight/balance optimization, cargo loading sequence, dangerous goods compliance.' },
      { number: '04', name: 'Air Cargo Tracking System', description: 'Real-time shipment tracking, milestone notifications, ETA management, delay alerts.' },
      { number: '05', name: 'Ground Handling Management System', description: 'Ramp operations, equipment management, staff scheduling, turnaround time monitoring.' },
      { number: '06', name: 'Air Warehouse Handling System', description: 'Cargo build-up, break-bulk, screening management, dangerous goods storage, cold storage.' },
      { number: '07', name: 'Air Freight Billing System', description: 'AWB-based billing, CASS integration, interline billing, revenue accounting.' },
      { number: '08', name: 'Cargo Capacity Optimization Software', description: 'Yield management, space optimization, overbooking management, revenue maximization.' },
      { number: '09', name: 'Air Logistics CRM', description: 'Shipper relationship management, rate contract tracking, service level monitoring.' },
      { number: '10', name: 'Aviation Compliance & Safety System', description: 'DG regulations, IATA compliance, security screening records, audit management.' },
      { number: '11', name: 'Air Shipment Documentation (AWB)', description: 'Air Waybill generation, MAWB/HAWB management, carnet documentation, customs pre-filing.' },
      { number: '12', name: 'Airport Terminal Operations System', description: 'Terminal slot management, counter allocation, baggage system integration.' },
      { number: '13', name: 'Air Freight Rate Management', description: 'Rate card management, tariff filing, pricing engine, contract rate automation.' },
      { number: '14', name: 'Express Cargo & Courier Management', description: 'Time-critical shipment management, priority routing, signature capture.' },
      { number: '15', name: 'Drone Delivery Management Platform', description: 'Drone fleet management, route planning, regulatory compliance, delivery confirmation.' },
    ],
  },
  {
    id: 'warehouse',
    icon: Warehouse,
    label: 'Warehouse & Fulfillment Software',
    shortLabel: 'Warehouse',
    count: 12,
    products: [
      { number: '01', name: 'Warehouse Management System (WMS)', description: 'Complete warehouse operations: receiving, putaway, picking, packing, shipping, returns.' },
      { number: '02', name: 'Inventory Management System', description: 'Real-time stock levels, reorder point alerts, lot/batch tracking, expiry management.' },
      { number: '03', name: 'Smart Slotting Optimization Engine', description: 'AI-driven slot assignment based on velocity, weight, pick frequency.' },
      { number: '04', name: 'Warehouse Labor Management System', description: 'Task management, productivity tracking, incentive management, attendance.' },
      { number: '05', name: 'Pick & Pack Optimization Software', description: 'Batch picking, zone picking, wave management, packing station assignment.' },
      { number: '06', name: 'Returns Processing Automation', description: 'Return authorization, inspection workflow, restocking logic, refund trigger.' },
      { number: '07', name: 'Order Batching Optimization Engine', description: 'Intelligent order grouping for pick efficiency, SLA-aware batching.' },
      { number: '08', name: 'Smart Barcode / RFID Tracking System', description: 'Barcode label printing, RFID reader integration, asset tracking.' },
      { number: '09', name: 'Fulfillment Center Orchestration Platform', description: 'Multi-channel order fulfillment, inventory reservation, carrier selection.' },
      { number: '10', name: 'Inventory Aging & Dead Stock Analyzer', description: 'Aging reports, slow-mover identification, liquidation recommendations.' },
      { number: '11', name: 'Warehouse Digital Twin Platform', description: '3D warehouse visualization, simulation, layout optimization, throughput modeling.' },
      { number: '12', name: 'Cold Chain Monitoring System', description: 'Temperature zone management, IoT sensor integration, excursion alerts, compliance.' },
    ],
  },
  {
    id: 'enterprise',
    icon: Link2,
    label: 'Cross-Modal & Enterprise Logistics Software',
    shortLabel: 'Enterprise',
    count: 20,
    products: [
      { number: '01', name: 'Multi-Modal Transport Management System', description: 'Unified management across Rail, Road, Air, and Water modes.' },
      { number: '02', name: 'Unified Logistics Control Tower', description: 'Real-time visibility across the entire supply chain, exception management.' },
      { number: '03', name: 'Supply Chain Visibility Platform', description: 'End-to-end shipment tracking, multi-carrier integration, event-driven alerts.' },
      { number: '04', name: 'Logistics ERP', description: 'Integrated operations, billing, HR, procurement, and reporting.' },
      { number: '05', name: 'Freight Rate Management System', description: 'Multi-modal rate cards, tariff management, rate negotiation tracking.' },
      { number: '06', name: 'Document Management & Automation', description: 'Centralized document repository, OCR processing, auto-routing.' },
      { number: '07', name: 'Logistics Analytics & BI Platform', description: 'Custom dashboards, route profitability, client performance, cost analytics.' },
      { number: '08', name: 'Vendor Management System', description: 'Carrier qualification, performance monitoring, contract management.' },
      { number: '09', name: 'Client Portal for Shipment Visibility', description: 'Branded client login, shipment tracking, document download.' },
      { number: '10', name: 'Reverse Logistics Management System', description: 'Returns management, reverse routing, inspection tracking.' },
      { number: '11', name: 'Risk & Compliance Management System', description: 'Regulatory compliance tracking, risk assessment, audit management.' },
      { number: '12', name: 'Logistics Automation Workflow Engine', description: 'No-code workflow builder for logistics processes.' },
      { number: '13', name: 'API Integration Hub', description: 'Pre-built connectors for GSTN, NIC, VAHAN, port systems, airline systems.' },
      { number: '14', name: 'Carbon Emission Tracking System', description: 'Scope 3 emissions calculation, mode-wise carbon footprint, ESG reporting.' },
      { number: '15', name: 'Logistics Super App', description: 'All-in-one mobile platform combining tracking, booking, billing, and communication.' },
      { number: '16', name: 'Multi-tenant Logistics SaaS Platform', description: 'White-label platform for logistics associations and franchises.' },
      { number: '17', name: 'Shipper-Carrier Marketplace Platform', description: 'Two-sided marketplace connecting shippers and carriers.' },
      { number: '18', name: 'Billing, Invoicing & Payment System', description: 'Unified billing across all service lines, payment gateway integration.' },
      { number: '19', name: 'Predictive Maintenance System', description: 'IoT sensor data analysis, failure prediction, maintenance scheduling.' },
      { number: '20', name: 'Logistics CRM', description: 'Purpose-built CRM for logistics: rate negotiation, contract management, BD pipeline.' },
    ],
  },
];

const TOTAL_PRODUCTS = CATEGORIES.reduce((sum, cat) => sum + cat.count, 0);

const STATS = [
  { value: '160+', label: 'Software Products' },
  { value: '6', label: 'Transport Modes' },
  { value: '96+', label: 'Core Solutions' },
  { value: '∞', label: 'Custom Possibilities' },
];

/* ────────────────────────────────────────────────
   HELPER: Get featured + remaining products
   ──────────────────────────────────────────────── */

function splitProducts(products: Product[]) {
  return {
    featured: products.slice(0, 3),
    remaining: products.slice(3),
  };
}

/* ────────────────────────────────────────────────
   SUB-COMPONENTS
   ──────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden bg-black hero-dark-text">


      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal once>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-md mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-medium font-[family-name:var(--font-montserrat)]">Products</span>
          </div>
        </ScrollReveal>
        <ScrollReveal once delay={0.08}>
          <h1
            className="text-[clamp(36px,5vw,60px)] leading-[1.08] text-white max-w-[800px] tracking-[-0.02em] font-medium"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            {TOTAL_PRODUCTS}+ Logistics Software Products.
          </h1>
        </ScrollReveal>
        <ScrollReveal once delay={0.16}>
          <p
            className="mt-3 text-[clamp(24px,3.5vw,36px)] leading-[1.15] text-[#2A3AFF] max-w-[600px] tracking-[-0.01em] font-medium"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            Every Mode. Every Function.
          </p>
        </ScrollReveal>
        <ScrollReveal once delay={0.24}>
          <p
            className="mt-8 text-base md:text-xl leading-relaxed text-white/70 max-w-2xl border-l border-white/20 pl-6 font-light"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            The deepest logistics technology catalog in India. Purpose-built for road, rail, air, maritime, and warehouse operations.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CategoryTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (id: string) => void;
}) {
  return (
    <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onTabChange(cat.id)}
              className={`
                flex items-center gap-2 px-4 md:px-5 py-4 text-[13px] font-medium tracking-wide
                border-b-2 transition-all duration-200 whitespace-nowrap shrink-0
                ${activeTab === cat.id
                  ? 'border-[#2A3AFF] text-[#000000]'
                  : 'border-transparent text-[#9CA3AF] hover:text-[#6B7280]'
                }
              `}
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <cat.icon className="w-4 h-4" size={16} />
              <span>{cat.shortLabel}</span>
              <span className={`text-[11px] ${activeTab === cat.id ? 'text-[#2A3AFF]' : 'text-[#9CA3AF]/60'}`}>
                ({cat.count})
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedBentoGrid({
  category,
  featured,
}: {
  category: Category;
  featured: Product[];
}) {
  const router = useRouter();
  return (
    <div className="pb-12 md:pb-16">
      {/* Category Header */}
      <ScrollReveal once>
        <div className="flex items-center gap-3 mb-2">
          <category.icon className="w-6 h-6 text-[#2A3AFF]" size={24} />
          <p
            className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF]"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {category.count} Products
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal once delay={0.06}>
        <h2
          className="text-[22px] md:text-[30px] leading-[1.15] text-[#000000] max-w-[640px] tracking-[-0.01em] mb-8"
          style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
        >
          {category.label}
        </h2>
      </ScrollReveal>

      {/* Bento Grid  Featured Products */}
      <StaggerContainer once staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {featured.map((product, idx) => (
          <StaggerItem key={product.number}>
            <div
              onClick={() => router.push(`/products/${category.id}-${product.number}`)}
              className={`
                  h-full p-6 md:p-8 border border-black/[0.06]
                  transition-colors duration-300 hover:bg-[#F7F8FA] group cursor-pointer
                  ${idx === 0 ? 'md:col-span-2' : ''}
                `}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-[48px] md:text-[56px] leading-none text-black/[0.04] font-semibold select-none"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {product.number}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 shrink-0" />
              </div>
              <h3
                className="text-[17px] md:text-[19px] leading-[1.3] text-[#000000] mb-3"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                {product.name}
              </h3>
              <p
                className="text-[13px] md:text-[14px] leading-[1.75] text-[#6B7280]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                {product.description}
              </p>
              {idx === 0 && (
                <div className="mt-5">
                  <span
                    className="text-[10px] uppercase tracking-[0.16em] font-medium text-[#2A3AFF] bg-[#2A3AFF]/[0.06] px-3 py-1.5 inline-block"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Featured
                  </span>
                </div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

function ProductList({ products, categoryId }: { products: Product[]; categoryId: string }) {
  const router = useRouter();
  return (
    <div className="pb-20 md:pb-28">
      <div className="h-px bg-black/[0.06] mb-2" />
      <ScrollReveal once>
        <p
          className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF] py-4"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          All Products
        </p>
      </ScrollReveal>

      <StaggerContainer once staggerDelay={0.04} className="flex flex-col">
        {products.map((product, idx) => (
          <StaggerItem key={product.number}>
            <div
              onClick={() => router.push(`/products/${categoryId}-${product.number}`)}
              className="group grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr] gap-4 md:gap-6 py-5 border-b border-black/[0.06] cursor-pointer transition-colors duration-200 hover:bg-[#F7F8FA]/60 px-2 md:px-3 -mx-2 md:-mx-3"
            >
              {/* Number */}
              <span
                className="text-[16px] md:text-[18px] leading-none text-[#9CA3AF] font-medium pt-[3px] tabular-nums"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                {product.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col gap-1">
                <h3
                  className="text-[15px] md:text-[16px] leading-[1.3] text-[#000000] font-medium transition-colors duration-200 group-hover:text-[#2A3AFF]"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-[13px] md:text-[14px] leading-[1.7] text-[#6B7280]"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {product.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

function CategoryContent({ category }: { category: Category }) {
  const { featured, remaining } = splitProducts(category.products);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={category.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 pt-10 md:pt-14">
          <FeaturedBentoGrid category={category} featured={featured} />
          {remaining.length > 0 && <ProductList products={remaining} categoryId={category.id} />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}



function ModesOverviewSection() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <ScrollReveal once>
          <p
            className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF] mb-5"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            Six Domains. One Platform.
          </p>
        </ScrollReveal>
        <ScrollReveal once delay={0.06}>
          <h2
            className="text-[24px] md:text-[32px] leading-[1.15] text-[#000000] max-w-[600px] tracking-[-0.01em] mb-12"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            Every transport mode in India has unique operational challenges. We built software for all of them.
          </h2>
        </ScrollReveal>

        <StaggerContainer once staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.id}>
              <div className="h-full p-6 md:p-8 border border-black/[0.06] bg-white transition-colors duration-300 hover:bg-[#F7F8FA] group cursor-pointer">
                <cat.icon className="w-7 h-7 text-[#2A3AFF] block mb-5" size={28} />
                <h3
                  className="text-[16px] md:text-[18px] leading-[1.25] text-[#000000] mb-2"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {cat.label}
                </h3>
                <p
                  className="text-[13px] text-[#2A3AFF] font-medium mb-3"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {cat.count} Products
                </p>
                <p
                  className="text-[13px] leading-[1.7] text-[#6B7280] mb-5 line-clamp-3"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {cat.products[0].description}
                </p>
                <div className="flex items-center gap-1.5 text-[12px] text-[#9CA3AF] group-hover:text-[#2A3AFF] transition-colors duration-200">
                  <span style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>View all</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <LineReveal className="h-px bg-black/[0.06] mb-16" />
        <ScrollReveal once>
          <div className="max-w-[540px]">
            <h2
              className="text-[24px] md:text-[32px] leading-[1.15] text-[#000000] mb-5 tracking-[-0.01em]"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              Not sure which product fits your operation?
            </h2>
            <p
              className="text-[15px] leading-[1.8] text-[#6B7280] mb-8"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Every logistics operation is different. Let us understand your specific bottlenecks and recommend the right product  or build one from scratch.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white text-[13px] font-medium tracking-wide px-6 py-3.5 transition-colors duration-200 hover:bg-[#2A3AFF]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Schedule a call
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-black/[0.12] text-[#000000] text-[13px] font-medium tracking-wide px-6 py-3.5 transition-colors duration-200 hover:bg-[#F7F8FA]"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                View all services
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────── */

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('roadway');
  const activeCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  return (
    <main className="bg-white">
      <Navbar transparent />

      {/* Hero */}
      <HeroSection />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06]" />
      </div>

      {/* Sticky Category Tabs */}
      <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Active Category Content */}
      <CategoryContent category={activeCategory} />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06]" />
      </div>

      {/* Modes Overview */}
      <ModesOverviewSection />

      {/* Stats */}


      {/* CTA */}
      <CTASection />
    </main>
  );
}
