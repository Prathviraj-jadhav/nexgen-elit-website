/* ============================================
   SERVICES DATA  NEXGEN ELIT
   Complete service detail data for all 34 services
   Each service has 11 conversion flow sections
   ============================================ */

export interface ServiceDetail {
  slug: string;
  category: string;
  categoryLabel: string;
  number: string;
  title: string;
  shortDescription: string;

  // Section 1: Hero
  heroTagline: string;
  heroDescription: string;

  // Section 2: Problem Statement
  problemTitle: string;
  problemDescription: string;
  problemBullets: string[];

  // Section 3: Who This Is For
  audienceTitle: string;
  audienceDescription?: string;
  audienceSegments: { role: string; description: string }[];

  // Section 4: What We Do
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  whatWeDoItems: string[];

  // Section 5: Features / Deliverables
  features: { title: string; description: string }[];

  // Section 6: How We Do It
  howWeDoTitle: string;
  howWeDoDescription?: string;
  howWeDoSteps: { step: number; title: string; description: string; duration?: string; deliverables?: string[] }[];

  // Section 7: Benefits
  benefits: { title: string; description: string }[];

  // Section 8: Before vs After
  beforeAfter: { before: string; after: string }[];

  // Section 9: Process / Timeline
  processTitle: string;
  processTimeline: { phase: string; duration: string; deliverables: string[] }[];

  // Section 10: Why Nexgen
  whyNexgenReasons: { title: string; description: string }[];

  // Section 11: FAQ
  faq: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  /* ═══════════════════════════════════════════════════════════════
     CATEGORY 1: CUSTOM SOFTWARE DEVELOPMENT (8 services)
     ═══════════════════════════════════════════════════════════════ */

  'transport-management-systems': {
    slug: 'transport-management-systems',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '01',
    title: 'Transport Management Systems (TMS)',
    shortDescription: 'End-to-end trip planning, vehicle assignment, driver coordination, and route cost analytics for road, rail, air, and maritime logistics.',

    heroTagline: 'One system. Every trip. Every mode. Full control.',
    heroDescription: 'A Transport Management System built specifically for Indian logistics operations. Plan trips, assign vehicles, track drivers, upload PODs, and analyze route profitability  all from a single dashboard. Supports road, rail, air, and maritime modes with mode-specific workflows.',

    problemTitle: 'The Problem: Your Operations Run on WhatsApp and Excel',
    problemDescription: 'Most Indian transporters and logistics companies manage trips through a chaotic mix of WhatsApp groups, phone calls, handwritten registers, and scattered Excel sheets. Trip details get lost, drivers go unmonitored, freight bills take days to generate, and there is zero visibility into route-level profitability. As volumes grow, this manual approach becomes a bottleneck that limits scaling.',
    problemBullets: [
      'Trip details lost in WhatsApp conversations  no audit trail or structured data',
      'Manual vehicle assignment leads to underutilized capacity and empty return trips',
      'No real-time visibility into driver location, ETAs, or trip progress',
      'Freight billing requires manual data entry from multiple sources  takes 3-5 days per invoice cycle',
      'No route-level P&L analysis  you cannot tell which lanes are profitable and which are draining margins',
      'Compliance documents (driving licence, fitness certificate, insurance) tracked manually with frequent lapses',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This system is designed for logistics operators who manage 10 or more trips daily across multiple vehicles and routes. If your current process involves calling drivers for updates, manually recording trip sheets, and spending hours on billing  this is for you.',
    audienceSegments: [
      { role: 'Transporters & Fleet Owners', description: 'Managing 20-500+ vehicles who need centralized trip planning and tracking' },
      { role: '3PL & 4PL Operators', description: 'Handling shipments for multiple clients with SLA tracking and billing requirements' },
      { role: 'Freight Forwarders', description: 'Coordinating across road, rail, air, and maritime with multi-modal trip management' },
      { role: 'Logistics Branch Managers', description: 'Overseeing regional operations who need branch-level visibility and control' },
      { role: 'CFOs & Finance Heads', description: 'Who need accurate trip-level costing, revenue reconciliation, and profitability reports' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a complete Transport Management System tailored to your specific operational workflows. This is not an off-the-shelf product  it is engineered around how your team actually works, with your route structures, billing formats, and compliance requirements baked in.',
    whatWeDoItems: [
      'Trip creation and planning with multi-stop routing, load optimization, and vehicle matching',
      'Real-time driver tracking via GPS integration with alerts for route deviations and delays',
      'Proof of Delivery (POD) capture with photo upload, e-signature, and client notification',
      'Automated freight billing from trip data  GST-compliant invoices generated in minutes, not days',
      'Route analytics dashboard showing revenue, cost, margin, and vehicle utilization per lane',
      'Multi-branch and multi-client architecture with role-based access control',
    ],

    features: [
      { title: 'Multi-Mode Trip Planning', description: 'Create and manage trips across road, rail, air, and maritime from a single interface with mode-specific fields and workflows.' },
      { title: 'Vehicle & Driver Assignment Engine', description: 'Smart matching algorithm that considers vehicle capacity, driver availability, route proximity, and compliance status before assigning.' },
      { title: 'GPS Tracking & Live Dashboard', description: 'Real-time vehicle tracking on map with geofencing, route deviation alerts, ETA predictions, and trip progress indicators.' },
      { title: 'POD Capture & Verification', description: 'Driver app allows photo upload, e-signature capture, and weight verification at delivery. Clients receive automated notifications.' },
      { title: 'Automated Freight Billing', description: 'GST-compliant invoices auto-generated from trip data. Supports rate cards, surcharges, detention charges, and multi-party billing.' },
      { title: 'Route Profitability Analytics', description: 'Per-lane, per-vehicle, and per-client P&L reports. Identify your most profitable routes and the ones eating into margins.' },
      { title: 'Multi-Branch Architecture', description: 'Centralized control with branch-level autonomy. Each branch manages its own trips while leadership gets a consolidated view.' },
      { title: 'Compliance Management Module', description: 'Track vehicle fitness, insurance, pollution certificates, driving licences, and permits. Automated expiry alerts 30/15/7 days before deadline.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We follow a structured 6-step process that takes your existing manual workflows and converts them into a digital system. Every step involves your team to ensure the system matches how your operation actually runs.',
    howWeDoSteps: [
      { step: 1, title: 'Operational Audit', description: 'We study your current trip sheets, billing formats, vehicle registers, and compliance documents to map every workflow.' },
      { step: 2, title: 'System Architecture', description: 'Database schema, user roles, API integrations, and deployment plan designed around your operational structure.' },
      { step: 3, title: 'Core Module Development', description: 'Trip planning, vehicle assignment, and tracking modules built with iterative demos every 5-7 days.' },
      { step: 4, title: 'Billing & Analytics Build', description: 'Freight billing engine, GST compliance, and route profitability dashboards built from your actual rate cards and cost structures.' },
      { step: 5, title: 'Driver App & Integration', description: 'Mobile app for drivers with GPS tracking, POD capture, and notifications. Integration with existing systems (ERP, GPS providers).' },
      { step: 6, title: 'Testing & Go-Live', description: 'UAT with your team on real trips, data migration from Excel/registers, training sessions, and 60-day post-launch support.' },
    ],

    benefits: [
      { title: '60-80% Reduction in Billing Time', description: 'Auto-generated invoices from trip data eliminate manual data entry. What took 3-5 days now happens in under 2 hours.' },
      { title: 'Real-Time Visibility', description: 'Know exactly where every vehicle is, every trip status, and every pending delivery  without calling drivers.' },
      { title: '15-25% Improvement in Vehicle Utilization', description: 'Smart vehicle assignment and return trip planning reduces empty miles and maximizes fleet earning potential.' },
      { title: 'Zero Compliance Lapses', description: 'Automated expiry tracking with escalation alerts means no more fines, impounds, or last-minute document scrambles.' },
      { title: 'Data-Driven Route Decisions', description: 'Route profitability analytics let you focus resources on high-margin lanes and renegotiate or drop unprofitable ones.' },
      { title: 'Scalable Architecture', description: 'Whether you run 20 vehicles or 2,000, the system scales with your operation without needing a rebuild.' },
    ],

    beforeAfter: [
      { before: 'Trip details tracked in WhatsApp groups and phone calls', after: 'Structured trip management with full audit trail and searchable history' },
      { before: 'Vehicle assigned manually based on memory and availability guesses', after: 'Smart matching algorithm considers capacity, compliance, location, and route' },
      { before: 'Call driver 5 times a day to know where the truck is', after: 'Live GPS dashboard shows every vehicle location, ETA, and trip progress in real-time' },
      { before: 'Freight bills take 3-5 days with manual data entry and errors', after: 'GST-compliant invoices auto-generated in minutes from trip data' },
      { before: 'No idea which routes are profitable  gut-feel decisions', after: 'Per-lane P&L reports showing exact revenue, cost, and margin per route' },
      { before: 'Compliance documents tracked in files and diaries', after: 'Automated expiry alerts 30/15/7 days before deadline with escalation' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Discovery & Audit', duration: '5-7 days', deliverables: ['Operational workflow map', 'Data flow diagram', 'Feature priority list', 'Proposal with fixed scope and timeline'] },
      { phase: 'Architecture & Design', duration: '5-7 days', deliverables: ['Database schema', 'UI wireframes', 'API integration plan', 'User role matrix'] },
      { phase: 'Core Development Sprint 1', duration: '2-3 weeks', deliverables: ['Trip planning module', 'Vehicle & driver assignment', 'Basic tracking dashboard', 'First demo walkthrough'] },
      { phase: 'Core Development Sprint 2', duration: '2-3 weeks', deliverables: ['Freight billing engine', 'POD capture system', 'Compliance module', 'Branch management'] },
      { phase: 'Integration & Analytics', duration: '1-2 weeks', deliverables: ['GPS provider integration', 'Route analytics dashboard', 'Multi-branch reporting', 'Mobile app beta'] },
      { phase: 'UAT & Go-Live', duration: '1-2 weeks', deliverables: ['User acceptance testing', 'Data migration from Excel', 'Team training sessions', 'Production deployment'] },
      { phase: 'Post-Launch Support', duration: '60 days', deliverables: ['Bug fixes and enhancements', 'Performance optimization', 'Additional training', 'Monthly review call'] },
    ],

    whyNexgenReasons: [
      { title: 'Built for Indian Logistics', description: 'We understand GST invoicing, e-way bills, RTO compliance, Indian route structures, and the realities of Indian road logistics. No generic Western templates.' },
      { title: 'Not an Off-the-Shelf Product', description: 'Every TMS we build is custom-engineered for your specific operation. Your rate cards, your routes, your billing formats  not a forced fit.' },
      { title: 'Multi-Mode Support', description: 'Unlike most TMS vendors who only handle road freight, we support road, rail, air, and maritime from a single platform.' },
      { title: 'End-to-End Delivery', description: 'From operational audit to go-live and 60-day post-launch support. We do not hand off a half-built system and disappear.' },
    ],

    faq: [
      { question: 'What modes of transport does the TMS support?', answer: 'We build support for all four major modes: road, rail, air, and maritime. Each mode has its own trip creation workflow, tracking integration, and billing format. You can start with one mode and add others as your operation grows.' },
      { question: 'Can the TMS integrate with our existing GPS tracking provider?', answer: 'Yes. We integrate with all major GPS providers used in India including Trimble, Lojack, Track Your Truck, and custom REST APIs. If you have a provider not on this list, we will build the integration at no extra cost.' },
      { question: 'How long does it take to build and deploy a TMS?', answer: 'A full-featured TMS with trip planning, tracking, billing, and analytics typically takes 8-12 weeks from discovery to go-live. Smaller deployments with core modules only can be done in 4-6 weeks.' },
      { question: 'Will my team need extensive training to use the system?', answer: 'No. We design the interface to match how your team already works. Trip creation mirrors your existing trip sheets, billing follows your current invoice format. Training sessions take 2-4 hours, and we provide video tutorials and a help desk during the 60-day support period.' },
      { question: 'Can we migrate data from our current Excel sheets?', answer: 'Absolutely. We handle the complete data migration  vehicle registers, driver databases, trip history, rate cards, and client master data. You do not need to manually re-enter anything.' },
      { question: 'Do you provide ongoing maintenance after the 60-day support period?', answer: 'Yes. After the free 60-day support period, we offer annual maintenance contracts starting at 15% of the project cost. This covers bug fixes, security patches, minor enhancements, and priority support.' },
      { question: 'Can the TMS handle multi-branch operations?', answer: 'Yes. Our TMS is built with a multi-tenant architecture that supports unlimited branches with centralized control. Each branch manages its own trips while leadership gets a consolidated cross-branch dashboard.' },
    ],
  },

  'warehouse-management-systems': {
    slug: 'warehouse-management-systems',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '02',
    title: 'Warehouse Management Systems (WMS)',
    shortDescription: 'Pick & pack optimization, real-time inventory tracking, RFID integration, and labor management for logistics warehouses and fulfillment centers.',

    heroTagline: 'Every pallet tracked. Every pick optimized. Zero shrinkage.',
    heroDescription: 'A Warehouse Management System designed for Indian logistics warehouses  from single-location godowns to multi-zone fulfillment centers. Manage inbound receiving, putaway, picking, packing, dispatch, and returns with real-time inventory accuracy and slotting optimization.',

    problemTitle: 'The Problem: Your Warehouse Runs on Paper and Memory',
    problemDescription: 'Indian warehouses often operate with manual stock registers, paper-based pick lists, and zero visibility into real-time inventory levels. Pickers walk the entire warehouse looking for products, putaway is based on available space rather than optimization, and dispatch delays pile up because of misplaced inventory. Month-end stock reconciliation reveals 5-15% discrepancies that eat directly into margins.',
    problemBullets: [
      'Manual stock registers with no real-time visibility  you only discover stockouts during order fulfillment',
      'Pickers spend 40-60% of their time walking, not picking  no optimized pick paths or slotting strategy',
      'Zero FIFO/FEFO enforcement  older stock sits while newer stock gets shipped first',
      'Month-end reconciliation shows 5-15% inventory discrepancies  unaccounted shrinkage',
      'No integration between inbound receiving, storage, and outbound dispatch  data silos at every stage',
      'Labor productivity cannot be measured  no data on picks per hour, accuracy rates, or idle time',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This system is for warehouse operators and logistics companies managing 500+ SKUs or processing 50+ orders daily. If stock accuracy is a guessing game and dispatch delays are hurting client relationships, this system solves the root problem.',
    audienceSegments: [
      { role: 'Warehouse Managers', description: 'Responsible for day-to-day warehouse operations, stock accuracy, and dispatch timelines' },
      { role: '3PL Operators', description: 'Managing warehousing for multiple clients with separate inventory zones and billing requirements' },
      { role: 'E-Commerce Fulfillment Centers', description: 'Processing high-volume B2C orders with same-day or next-day delivery SLAs' },
      { role: 'Supply Chain Heads', description: 'Overseeing multiple warehouses who need centralized inventory visibility and cross-location transfers' },
      { role: 'CFOs & Operations Directors', description: 'Who need to reduce warehouse costs, improve accuracy, and measure labor productivity' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a complete Warehouse Management System that digitizes every warehouse operation from receiving dock to dispatch bay. The system is configured for your specific warehouse layout, product types, and operational workflows.',
    whatWeDoItems: [
      'Inbound receiving with barcode/QR scanning, quality check workflows, and automated putaway suggestions',
      'Slotting optimization engine that places fast-moving items in accessible zones based on order velocity',
      'Pick path optimization with wave planning, batch picking, and zone picking strategies',
      'Real-time inventory management with cycle counting, stock alerts, and FIFO/FEFO enforcement',
      'Pack verification with weight checking, label printing, and automated dispatch documentation',
      'Returns processing with inspection workflows, restocking rules, and refund initiation triggers',
    ],

    features: [
      { title: 'Smart Slotting Engine', description: 'Automatically assigns SKU locations based on velocity, weight, size, and pick frequency. Fast movers go to ergonomic zones, slow movers to back racks.' },
      { title: 'Optimized Pick Paths', description: 'Wave-based and batch picking with route optimization. Pickers follow the shortest path through the warehouse, reducing walk time by 40-60%.' },
      { title: 'Real-Time Inventory Tracking', description: 'Every movement scanned and recorded. Stock levels updated instantly across all channels  no more sync delays or phantom inventory.' },
      { title: 'RFID & Barcode Integration', description: 'Support for both RFID and barcode scanning. Bulk scanning for receiving and cycle counts, individual scanning for high-value items.' },
      { title: 'Labor Management Module', description: 'Track picks per hour, accuracy rates, idle time, and individual productivity. Set KPIs, identify top performers, and optimize shift scheduling.' },
      { title: 'Returns Processing', description: 'End-to-end returns workflow  receiving, inspection, restocking or disposal, and client refund triggers. Full audit trail for dispute resolution.' },
      { title: 'Multi-Warehouse Dashboard', description: 'Consolidated view across all warehouse locations. Transfer stock between locations, compare performance, and manage centralized procurement.' },
      { title: 'Dispatch Documentation', description: 'Auto-generated dispatch reports, packing lists, shipping labels, and e-way bill integration. Eliminates manual documentation errors.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We start by walking through your warehouse to understand the physical layout, product handling requirements, and current pain points. The system is then architected around your specific operational reality.',
    howWeDoSteps: [
      { step: 1, title: 'Warehouse Walkthrough', description: 'Physical inspection of your warehouse  layout zones, racking systems, dock doors, product flow patterns, and existing technology.' },
      { step: 2, title: 'Process Mapping', description: 'Document every workflow  receiving, putaway, picking, packing, dispatch, returns  including exceptions and edge cases.' },
      { step: 3, title: 'System Design', description: 'Database schema, slotting logic, pick path algorithms, and UI design based on your warehouse layout and operational requirements.' },
      { step: 4, title: 'Module Development', description: 'Iterative development with demos every 5-7 days. Inbound, inventory, pick-pack, and dispatch modules built in sequence.' },
      { step: 5, title: 'Hardware Integration', description: 'RFID readers, barcode scanners, label printers, and weight scales connected and tested in your warehouse environment.' },
      { step: 6, title: 'Go-Live & Training', description: 'Parallel run with your existing process, team training, data migration, and 60-day support with on-site assistance.' },
    ],

    benefits: [
      { title: '99.5%+ Inventory Accuracy', description: 'Real-time scanning and automated cycle counting eliminate manual errors. Month-end reconciliation discrepancies drop from 5-15% to under 0.5%.' },
      { title: '40-60% Less Walker Time', description: 'Optimized pick paths and smart slotting reduce the time pickers spend walking between locations. More picks per shift, same team size.' },
      { title: '30% Faster Order Processing', description: 'Automated pick-wave generation and pack verification reduce order-to-dispatch time from hours to minutes for standard orders.' },
      { title: 'Measurable Labor Productivity', description: 'Individual and team KPIs  picks per hour, accuracy rates, idle time. Data-driven decisions on staffing, training, and performance management.' },
      { title: 'Zero FIFO/FEFO Violations', description: 'System enforces stock rotation automatically. No more expired products shipped or old stock forgotten in back racks.' },
      { title: 'Scalable to Multi-Location', description: 'Architecture supports adding new warehouse locations without rebuild. Centralized visibility across all sites from day one.' },
    ],

    beforeAfter: [
      { before: 'Stock levels checked manually  you discover stockouts during fulfillment', after: 'Real-time inventory dashboard shows exact stock at every location, updated per scan' },
      { before: 'Pickers walk entire warehouse looking for products', after: 'Optimized pick paths with zone and batch picking  40-60% less walking' },
      { before: 'Month-end reconciliation shows 5-15% discrepancies', after: 'Automated cycle counting maintains 99.5%+ accuracy throughout the month' },
      { before: 'Older stock sits while newer stock ships first', after: 'System enforces FIFO/FEFO automatically on every pick transaction' },
      { before: 'No way to measure picker productivity', after: 'Individual KPIs  picks per hour, accuracy rate, idle time  visible in real-time' },
      { before: 'Dispatch documents typed manually with frequent errors', after: 'Auto-generated packing lists, labels, and e-way bill data from system records' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Warehouse Audit & Discovery', duration: '5-7 days', deliverables: ['Physical layout assessment', 'Process workflow map', 'Hardware requirements', 'Project proposal'] },
      { phase: 'System Design & Architecture', duration: '5-7 days', deliverables: ['Slotting strategy', 'Pick path algorithms', 'Database schema', 'UI wireframes'] },
      { phase: 'Core Module Development', duration: '3-4 weeks', deliverables: ['Inbound receiving module', 'Inventory management', 'Putaway engine', 'First demo'] },
      { phase: 'Pick-Pack-Dispatch Development', duration: '2-3 weeks', deliverables: ['Pick path optimization', 'Pack verification', 'Dispatch documentation', 'Returns module'] },
      { phase: 'Hardware Integration & Testing', duration: '1-2 weeks', deliverables: ['Scanner/RFID setup', 'Label printer integration', 'Weight scale connection', 'End-to-end testing'] },
      { phase: 'UAT & Go-Live', duration: '1-2 weeks', deliverables: ['Parallel run with manual process', 'Team training', 'Data migration', 'Production deployment'] },
      { phase: 'Post-Launch Support', duration: '60 days', deliverables: ['On-site assistance', 'Bug fixes', 'Performance tuning', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Warehouse-First Approach', description: 'We start by walking your warehouse, not designing screens. The system adapts to your physical layout and product handling requirements.' },
      { title: 'Indian Logistics Ready', description: 'Support for Indian GST invoicing, e-way bills, multi-warehouse operations across states, and local compliance requirements.' },
      { title: 'Hardware-Agnostic', description: 'We integrate with whatever hardware you use  Zebra scanners, Honeywell printers, or budget Android devices. No vendor lock-in.' },
      { title: 'Phased Rollout Option', description: 'Start with inbound and inventory modules, add pick-pack later. Grow the system at your pace without paying for everything upfront.' },
    ],

    faq: [
      { question: 'Do we need to buy special hardware for the WMS?', answer: 'Not necessarily. Our WMS works with any Android device for basic barcode scanning. For high-volume operations, we recommend dedicated scanners and label printers, but the system functions fully on smartphones too.' },
      { question: 'Can the WMS handle multiple warehouses?', answer: 'Yes. Our architecture is multi-warehouse from the ground up. You can manage stock transfers between locations, run cross-warehouse reports, and consolidate inventory visibility across all sites.' },
      { question: 'How long before we see ROI on a WMS investment?', answer: 'Most clients see measurable ROI within 6-12 months through reduced shrinkage, faster order processing, and lower labor costs per pick. The inventory accuracy improvement alone typically covers 30-40% of the investment.' },
      { question: 'Can it integrate with our existing ERP or TMS?', answer: 'Yes. We build bidirectional APIs to connect with your existing ERP (Tally, SAP, Oracle) and TMS. Inventory levels, order data, and shipment status sync automatically.' },
      { question: 'What about returns processing?', answer: 'The WMS includes a complete returns module  receiving, inspection, restocking, quality hold, and disposal workflows. It generates credit notes and triggers refund processes in your billing system.' },
      { question: 'Do you train our warehouse team?', answer: 'Yes. We conduct hands-on training sessions at your warehouse during go-live, plus video tutorials and a help desk. Most teams are fully operational within 2-3 days of training.' },
    ],
  },

  'freight-billing-invoice-systems': {
    slug: 'freight-billing-invoice-systems',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '03',
    title: 'Freight Billing & Invoice Systems',
    shortDescription: 'GST-compliant freight billing with rate card management, auto-invoicing, WhatsApp delivery, and payment tracking for logistics companies.',

    heroTagline: 'Invoices in minutes. Not days. Zero errors.',
    heroDescription: 'A freight billing and invoicing system that automates the entire billing cycle  from trip data capture to GST-compliant invoice generation, WhatsApp delivery to clients, and payment tracking. Built specifically for the complex billing requirements of Indian logistics.',

    problemTitle: 'The Problem: Billing Takes Days and Is Full of Errors',
    problemDescription: 'Indian logistics billing is notoriously complex  multiple rate cards, surcharges for detentions and weight differences, client-specific pricing, GST calculations across state boundaries, and TDS deductions. Most companies still manually create invoices in Excel or Tally, copying trip data by hand. The result is a 3-5 day billing cycle, frequent errors that delay payments, and no visibility into outstanding receivables.',
    problemBullets: [
      'Manual data entry from trip sheets to invoices  copying same data multiple times across systems',
      'Complex rate cards with lane-specific, client-specific, and vehicle-type pricing impossible to manage manually',
      'GST calculations errors  wrong tax rates, missing reverse charge, incorrect IGST/CGST/SGST splits',
      'Invoices delivered by email and post  clients lose them, dispute amounts, and payment gets delayed by 30-60 days',
      'No automated follow-up on pending payments  outstanding receivables pile up silently',
      'No reconciliation between trips completed, invoices raised, and payments received',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This system is for logistics operators who raise 50 or more invoices per month and are losing money to billing errors, delayed payments, and untracked receivables.',
    audienceSegments: [
      { role: 'Billing Teams & Accountants', description: 'Who spend hours manually creating invoices and chasing payments instead of strategic financial work' },
      { role: 'Transporters & Fleet Owners', description: 'Who want faster payment cycles and fewer billing disputes with clients' },
      { role: 'CFOs & Finance Managers', description: 'Who need accurate receivables tracking, GST compliance, and financial reporting' },
      { role: '3PL Operators', description: 'Managing billing for multiple clients with different rate cards and invoice formats' },
      { role: 'CA Firms Serving Logistics', description: 'Who handle GST compliance for transport companies and need automated, accurate billing data' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a freight billing system that pulls trip data automatically, applies the correct rate card, generates GST-compliant invoices, delivers them via WhatsApp and email, and tracks payments until closure.',
    whatWeDoItems: [
      'Rate card management engine supporting lane-based, client-based, and vehicle-type pricing with effective dates',
      'Automated invoice generation from trip completion data with all surcharges, deductions, and GST calculations',
      'Multi-format invoice delivery  WhatsApp PDF, email, and download portal for clients',
      'Payment tracking with automated follow-up reminders for overdue invoices',
      'Receivables dashboard showing aging analysis, client-wise outstanding, and collection efficiency',
      'GST reporting with GSTR-1 export-ready data and input tax credit reconciliation',
    ],

    features: [
      { title: 'Rate Card Engine', description: 'Manage unlimited rate cards with lane-level, client-level, and vehicle-type pricing. Supports base rates, per-km charges, weight slabs, and surcharges with effective date ranges.' },
      { title: 'Auto Invoice Generation', description: 'Invoices auto-created when trips are marked complete. All charges  freight, detention, loading, unloading, toll  applied automatically from rate cards.' },
      { title: 'GST Compliance', description: 'Automatic IGST/CGST/SGST calculation based on origin-destination states, reverse charge handling, and GSTR-1 export-ready output.' },
      { title: 'WhatsApp Invoice Delivery', description: 'Invoices sent directly to client WhatsApp numbers as PDF attachments. Read receipts and delivery confirmation tracked.' },
      { title: 'Payment Tracking', description: 'Mark payments received, link to bank statements, track partial payments. Automated reminders at 7, 15, and 30 days past due.' },
      { title: 'Receivables Dashboard', description: 'Aging analysis (0-30, 30-60, 60-90, 90+ days), client-wise outstanding, collection efficiency metrics, and cash flow forecasts.' },
      { title: 'TDS & Deduction Management', description: 'Track TDS deducted by clients, manage advance payments, and reconcile deductions against actual bills.' },
      { title: 'Credit Note & Debit Note', description: 'Issue credit notes for short deliveries, damage claims, and rate adjustments. Full audit trail with reason codes.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We study your current billing format, rate card structure, and client requirements to build a system that generates invoices exactly the way you need them  but in minutes instead of days.',
    howWeDoSteps: [
      { step: 1, title: 'Billing Audit', description: 'Study your current invoices, rate cards, surcharge structures, GST handling, and client-specific requirements.' },
      { step: 2, title: 'Rate Card Digitization', description: 'Convert all your rate cards into the system  lane rates, client rates, vehicle-type rates with effective dates.' },
      { step: 3, title: 'Invoice Template Design', description: 'Create invoice templates matching your current format with your logo, terms, and bank details.' },
      { step: 4, title: 'Core Development', description: 'Invoice engine, GST calculations, payment tracking, and receivables dashboard built and tested with your actual data.' },
      { step: 5, title: 'Integration & Delivery Setup', description: 'Connect to trip data sources, configure WhatsApp Business API, set up email delivery, and test end-to-end.' },
      { step: 6, title: 'Go-Live & Training', description: 'Parallel billing run, team training, and 30-day post-launch support.' },
    ],

    benefits: [
      { title: '85% Faster Billing Cycle', description: 'What takes 3-5 days manually now happens in under 30 minutes. Invoices generated, verified, and delivered on the same day trips complete.' },
      { title: 'Zero GST Calculation Errors', description: 'Automated tax calculations eliminate the risk of wrong rates, missing reverse charge, or incorrect state-wise splits.' },
      { title: '30% Faster Payment Collection', description: 'WhatsApp delivery ensures clients receive invoices instantly. Automated reminders reduce average collection time by 30%.' },
      { title: 'Complete Receivables Visibility', description: 'Know exactly who owes you, how much, and how long it has been outstanding. No more silent pile-ups.' },
      { title: 'Reduced Billing Disputes', description: 'Transparent invoices with itemized charges and rate card references. Clients can verify every line item.' },
      { title: 'Audit-Ready Records', description: 'Every invoice, credit note, and payment receipt stored with full audit trail. GST-ready export for your CA.' },
    ],

    beforeAfter: [
      { before: 'Manual invoice creation takes 3-5 days per billing cycle', after: 'Automated invoices generated in under 30 minutes from trip data' },
      { before: 'GST calculations done manually  frequent errors and penalties', after: 'Automatic IGST/CGST/SGST with correct state-wise splits and reverse charge' },
      { before: 'Invoices sent by email  clients lose them or miss them', after: 'WhatsApp delivery with read receipts ensures clients receive and see every invoice' },
      { before: 'No tracking of who has paid and who has not', after: 'Receivables dashboard with aging analysis and automated follow-up reminders' },
      { before: 'Rate card changes require editing every invoice template', after: 'Rate card engine applies correct rates automatically with effective date management' },
      { before: 'Billing disputes take weeks to resolve with missing data', after: 'Full audit trail with trip references, rate card links, and itemized charges' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Billing Audit & Discovery', duration: '3-5 days', deliverables: ['Current invoice analysis', 'Rate card documentation', 'Client requirement matrix', 'Proposal'] },
      { phase: 'Rate Card Digitization & Design', duration: '3-5 days', deliverables: ['Digital rate cards', 'Invoice templates', 'GST configuration', 'UI wireframes'] },
      { phase: 'Core Development', duration: '2-3 weeks', deliverables: ['Invoice engine', 'GST module', 'Payment tracking', 'WhatsApp integration'] },
      { phase: 'Dashboard & Reporting', duration: '1 week', deliverables: ['Receivables dashboard', 'Aging analysis', 'GST reports', 'Client statements'] },
      { phase: 'Testing & Go-Live', duration: '1 week', deliverables: ['UAT with real invoices', 'Team training', 'Data migration', 'Production deployment'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Bug fixes', 'Enhancements', 'Performance tuning', 'Handover documentation'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics Billing Specialists', description: 'We understand detention charges, loading/unloading rates, weight slabs, and the 20+ line items that go into a logistics invoice. Generic billing software cannot handle this complexity.' },
      { title: 'WhatsApp-First Delivery', description: 'We were one of the first to implement WhatsApp invoice delivery for logistics. Our WhatsApp Business API integration is battle-tested with thousands of invoices sent monthly.' },
      { title: 'GST-Compliant by Design', description: 'Built by a team that understands Indian GST  reverse charge, input tax credit, state-wise tax splits, and GSTR requirements.' },
      { title: 'Quick ROI', description: 'At this price point, most clients recover their investment within 2-3 months through faster collections and reduced billing labor.' },
    ],

    faq: [
      { question: 'Can the system handle different rate cards for different clients?', answer: 'Yes. The system supports unlimited rate cards with client-level, lane-level, and vehicle-type pricing. Each client can have their own rate structure, and the system applies the correct one automatically based on the trip.' },
      { question: 'How does WhatsApp invoice delivery work?', answer: 'We use the WhatsApp Business API to send invoice PDFs directly to client WhatsApp numbers. You get delivery confirmation and read receipts. Clients can also request invoices by messaging your WhatsApp number.' },
      { question: 'Can it integrate with Tally or my existing accounting software?', answer: 'Yes. We build export formats compatible with Tally, Zoho Books, QuickBooks, and most accounting software. Invoice data can be exported in XML, CSV, or through direct API integration.' },
      { question: 'What about TDS handling?', answer: 'The system tracks TDS deducted by clients, shows net payable amounts, and generates TDS certificates. You can reconcile TDS against your advance tax payments.' },
      { question: 'How quickly can this be deployed?', answer: 'A freight billing system can be deployed in 4-6 weeks from discovery to go-live. Simpler implementations with standardized rate cards can be done in 3 weeks.' },
      { question: 'Do you provide ongoing support?', answer: 'Yes. The first 30 days of support are included in the project cost. After that, we offer annual maintenance contracts for bug fixes, enhancements, and priority support.' },
    ],
  },

  'fleet-management-systems': {
    slug: 'fleet-management-systems',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '04',
    title: 'Fleet Management Systems',
    shortDescription: 'Vehicle tracking, maintenance scheduling, fuel management, driver compliance, and insurance alert systems for fleet operators.',

    heroTagline: 'Every vehicle. Every driver. Always visible.',
    heroDescription: 'A comprehensive fleet management system that gives you complete visibility into your fleet  vehicle locations, maintenance schedules, fuel consumption, driver compliance status, and insurance renewals. Built for Indian fleet operators managing 20 to 2,000+ vehicles.',

    problemTitle: 'The Problem: You Manage Your Fleet Blind',
    problemDescription: 'Fleet operators in India often lack a centralized system to track vehicle health, maintenance schedules, and driver compliance. Vehicles break down unexpectedly because preventive maintenance is forgotten. Fuel consumption goes unmonitored, leading to theft or inefficiency. Insurance and fitness certificates lapse, resulting in fines and vehicle impoundments. Without a system, fleet management is reactive instead of proactive.',
    problemBullets: [
      'Vehicle maintenance tracked in diaries  breakdowns happen because servicing schedules are missed',
      'Fuel consumption unmonitored  cannot detect theft, overfilling, or inefficient driving patterns',
      'Insurance, fitness, pollution, and permit renewals tracked manually  frequent lapses and fines',
      'No centralized vehicle register  do not know how many vehicles are roadworthy, grounded, or in workshop',
      'Driver compliance documents (licence, badges) expire without warning  legal and safety risk',
      'No cost-per-km tracking  cannot determine actual fleet operating costs or make informed replacement decisions',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Fleet Managers', description: 'Responsible for vehicle availability, maintenance scheduling, and minimizing breakdown costs' },
      { role: 'Transporters & Fleet Owners', description: 'Managing 20-2,000+ vehicles who need centralized fleet control and cost visibility' },
      { role: 'Workshop Managers', description: 'Managing vehicle servicing, spare parts inventory, and repair cost tracking' },
      { role: 'Logistics Operations Heads', description: 'Who need reliable fleet availability data for trip planning and client commitments' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A centralized fleet management system that tracks every vehicle, driver, and maintenance event in your fleet. From GPS tracking to fuel analytics to compliance management  everything in one dashboard.',
    whatWeDoItems: [
      'Centralized vehicle register with complete history  purchase, insurance, fitness, permits, accidents, and resale',
      'Preventive maintenance scheduling based on km readings, time intervals, or engine hours',
      'Fuel management with tank-level monitoring, mileage tracking, and anomaly detection',
      'GPS tracking integration with live map, route history, and idling reports',
      'Compliance document management with automated expiry alerts',
      'Fleet cost analytics  cost per km, cost per trip, maintenance trends, and total cost of ownership',
    ],

    features: [
      { title: 'Vehicle Master Register', description: 'Complete vehicle database with registration, make/model, engine/chassis number, purchase date, insurance, fitness, pollution certificate, permits, and full history.' },
      { title: 'Preventive Maintenance Scheduler', description: 'Configurable service schedules based on km, time, or engine hours. Automated alerts to workshop and fleet manager before due dates.' },
      { title: 'Fuel Management Module', description: 'Track every fuel fill  date, quantity, cost, mileage. Anomaly detection flags unusual consumption patterns that may indicate theft or leaks.' },
      { title: 'GPS Tracking Integration', description: 'Live vehicle locations on map, route replay, idling time analysis, over-speeding alerts, and geofencing for unauthorized movement.' },
      { title: 'Compliance Alert System', description: 'Insurance, fitness, pollution, permit, and driving licence expiry tracking. Alerts at 30, 15, and 7 days before deadline with escalation.' },
      { title: 'Workshop Management', description: 'Job cards, spare parts inventory, mechanic assignment, repair cost tracking, and vehicle downtime analysis.' },
      { title: 'Fleet Cost Analytics', description: 'Cost per km by vehicle and route, maintenance cost trends, fuel efficiency analysis, and total cost of ownership calculator.' },
      { title: 'Driver Management', description: 'Driver profiles, licence verification, trip history, performance scores, and compliance document tracking.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We audit your current fleet data, maintenance processes, and tracking infrastructure to build a system that replaces scattered records with a single source of truth.',
    howWeDoSteps: [
      { step: 1, title: 'Fleet Data Audit', description: 'Collect vehicle registers, insurance documents, maintenance records, and fuel data to understand current tracking methods.' },
      { step: 2, title: 'System Design', description: 'Define data models, alert rules, report formats, and GPS provider integration requirements.' },
      { step: 3, title: 'Core Development', description: 'Vehicle register, maintenance scheduler, fuel module, and compliance tracker built with iterative demos.' },
      { step: 4, title: 'GPS Integration', description: 'Connect with your GPS provider or recommend one. Configure live tracking, alerts, and map views.' },
      { step: 5, title: 'Analytics & Dashboards', description: 'Build cost analytics, fleet availability reports, and management dashboards from real fleet data.' },
      { step: 6, title: 'Go-Live & Training', description: 'Data migration, team training, parallel run, and 60-day post-launch support.' },
    ],

    benefits: [
      { title: '40% Fewer Breakdowns', description: 'Preventive maintenance scheduling ensures vehicles are serviced before they fail. Breakdown costs and trip disruptions drop significantly.' },
      { title: '15-20% Fuel Savings', description: 'Fuel monitoring and anomaly detection catches theft and overfilling. Mileage tracking identifies inefficient vehicles for investigation.' },
      { title: 'Zero Compliance Lapses', description: 'Automated expiry alerts with escalation ensure no insurance, fitness, or permit ever lapses. No more fines or vehicle impoundments.' },
      { title: 'Accurate Cost Per Km', description: 'Know exactly what each vehicle costs to operate  fuel, maintenance, insurance, depreciation. Make informed fleet replacement decisions.' },
      { title: '95% Fleet Availability', description: 'Proactive maintenance and workshop management maximize the number of roadworthy vehicles available for trips at any time.' },
      { title: 'Centralized Fleet Control', description: 'One dashboard replaces scattered registers, diaries, and WhatsApp groups. Every vehicle, driver, and document in one place.' },
    ],

    beforeAfter: [
      { before: 'Vehicles break down unexpectedly because servicing is forgotten', after: 'Automated maintenance schedules ensure every vehicle is serviced on time' },
      { before: 'Fuel theft goes undetected for months', after: 'Anomaly detection flags unusual consumption patterns within the same week' },
      { before: 'Insurance and fitness certificates lapse  fines and impoundments', after: '30/15/7-day expiry alerts with escalation ensure zero lapses' },
      { before: 'No idea of actual cost per km for each vehicle', after: 'Complete cost analytics  fuel, maintenance, insurance, depreciation per vehicle per km' },
      { before: 'Vehicle register scattered across Excel files and paper records', after: 'Centralized digital register with complete history, compliance status, and costs' },
      { before: 'Workshop management is informal  no job cards or cost tracking', after: 'Digital job cards, spare parts inventory, mechanic assignment, and repair cost analysis' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Fleet Audit & Discovery', duration: '5-7 days', deliverables: ['Vehicle data inventory', 'Maintenance process map', 'GPS provider assessment', 'Project scope'] },
      { phase: 'Design & Architecture', duration: '5-7 days', deliverables: ['Data models', 'Alert rule configuration', 'UI wireframes', 'Integration plan'] },
      { phase: 'Core Development', duration: '2-3 weeks', deliverables: ['Vehicle register', 'Maintenance scheduler', 'Fuel module', 'Compliance tracker'] },
      { phase: 'GPS & Analytics', duration: '1-2 weeks', deliverables: ['GPS integration', 'Live map dashboard', 'Cost analytics', 'Management reports'] },
      { phase: 'Go-Live', duration: '1 week', deliverables: ['Data migration', 'Team training', 'Parallel run', 'Production deployment'] },
      { phase: 'Post-Launch Support', duration: '60 days', deliverables: ['Bug fixes', 'GPS troubleshooting', 'Enhancements', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Indian Fleet Understanding', description: 'We know Indian vehicle registration, RTO compliance, insurance structures, workshop realities, and the challenges of Indian road conditions.' },
      { title: 'GPS Provider Agnostic', description: 'We integrate with any GPS provider  Trimble, Lojack, Track Your Truck, or custom APIs. No vendor lock-in for tracking hardware.' },
      { title: 'Practical Maintenance Logic', description: 'Our maintenance scheduler accounts for Indian road conditions, vehicle age, and workshop capacity. Not a generic km-based formula.' },
      { title: 'Quick Deployment', description: 'Fleet management systems can be deployed in 5-7 weeks with core modules. You start seeing value within the first month of go-live.' },
    ],

    faq: [
      { question: 'Which GPS tracking providers do you integrate with?', answer: 'We integrate with all major GPS providers in India including Trimble, Lojack, Track Your Truck, LetsTrack, and any provider that offers a REST API. We can also recommend a provider based on your fleet size and budget.' },
      { question: 'Can the system track both owned and hired vehicles?', answer: 'Yes. We support owned fleet, hired vehicles, and spot-market vehicles. Each category can have different tracking requirements, maintenance policies, and cost allocation rules.' },
      { question: 'How does fuel anomaly detection work?', answer: 'The system tracks mileage between fills and flags any fill that deviates significantly from the vehicle\'s average consumption. For example, if a truck typically needs 40 litres per 100 km but a fill shows 60 litres, the system triggers an alert.' },
      { question: 'Can it handle vehicle financing and EMI tracking?', answer: 'Yes. We can add a financing module that tracks EMIs, interest, outstanding balances, and ownership transfer details. This is typically included for larger fleet implementations.' },
      { question: 'What happens during vehicle resale?', answer: 'The system maintains complete vehicle history  purchase date, total km driven, maintenance records, accident history, and cost of ownership. This data supports resale valuation and buyer trust.' },
      { question: 'How long does implementation take?', answer: 'A fleet management system with core modules (register, maintenance, fuel, compliance) typically takes 5-7 weeks. GPS tracking integration adds 1-2 weeks depending on the provider.' },
    ],
  },

  'order-management-systems': {
    slug: 'order-management-systems',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '05',
    title: 'Order Management Systems (OMS)',
    shortDescription: 'Multi-channel order capture, fulfillment routing, SLA tracking, and client portal for logistics companies managing high-volume shipments.',

    heroTagline: 'Every order. Every channel. Tracked end to end.',
    heroDescription: 'An Order Management System that captures orders from multiple channels  email, phone, portal, API  routes them for fulfillment, tracks SLA compliance, and gives clients self-service visibility. Built for logistics companies processing 50+ orders daily.',

    problemTitle: 'The Problem: Orders Get Lost Between Channels',
    problemDescription: 'Logistics companies receive orders through multiple channels  phone calls, WhatsApp, email, client portals, and EDI/API integrations. Without a centralized system, orders get missed, duplicated, or delayed. Fulfillment teams lack visibility into priorities, SLAs pile up without alerts, and clients call constantly for status updates instead of checking a dashboard.',
    problemBullets: [
      'Orders received via phone, WhatsApp, email, and portal  no single system to track them all',
      'No automated order confirmation  clients wait hours or days to know their order is accepted',
      'Fulfillment routing is manual  wrong warehouse, wrong vehicle, wrong priority assigned',
      'SLA tracking exists only in spreadsheets  overdue orders discovered only when clients complain',
      'No self-service portal for clients  30-40% of team time spent answering status queries',
      'No cross-channel analytics  cannot measure which channels drive the most profitable orders',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: '3PL & 4PL Operators', description: 'Handling shipments for multiple clients with different SLAs, billing requirements, and integration needs' },
      { role: 'E-Commerce Logistics Providers', description: 'Processing high-volume orders from multiple marketplaces with same-day fulfillment requirements' },
      { role: 'Freight Forwarders', description: 'Managing bookings from multiple clients across road, rail, air, and sea modes' },
      { role: 'Operations Managers', description: 'Who need real-time visibility into order pipeline, fulfillment status, and SLA compliance' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A centralized order management system that captures, routes, fulfills, and tracks orders across every channel. Clients get a self-service portal, your team gets automated workflows, and management gets SLA analytics.',
    whatWeDoItems: [
      'Multi-channel order capture  phone, email, WhatsApp, portal, API with automatic deduplication',
      'Smart fulfillment routing based on warehouse location, vehicle availability, and SLA priority',
      'Automated order confirmation and status notifications via WhatsApp, email, and SMS',
      'SLA tracking with escalation alerts at 50%, 75%, and 100% of allowed time',
      'Client self-service portal with order placement, tracking, and document download',
      'Cross-channel analytics with order volume, revenue, and SLA compliance by source',
    ],

    features: [
      { title: 'Multi-Channel Order Capture', description: 'Ingest orders from phone calls, email, WhatsApp, web portal, and API integrations. Automatic deduplication prevents duplicate entries.' },
      { title: 'Smart Fulfillment Routing', description: 'Orders automatically routed to the optimal warehouse and vehicle based on location, capacity, SLA priority, and cost.' },
      { title: 'SLA Tracking Engine', description: 'Real-time SLA monitoring with escalation alerts at configurable thresholds. Color-coded dashboard shows on-track, at-risk, and breached orders.' },
      { title: 'Client Self-Service Portal', description: 'Clients place orders, track shipments, download invoices and PODs, and raise disputes  all without calling your team.' },
      { title: 'Automated Notifications', description: 'Order confirmation, dispatch notification, delivery completion, and POD delivery  all automated via WhatsApp, email, and SMS.' },
      { title: 'Inventory Reservation', description: 'Inventory reserved at order placement to prevent over-commitment. Released automatically if order is cancelled.' },
      { title: 'Returns & Cancellation Management', description: 'Order cancellation workflows with inventory release, return initiation, refund processing, and restocking triggers.' },
      { title: 'Analytics Dashboard', description: 'Order volume by channel, fulfillment rate, SLA compliance %, average processing time, and revenue by client and region.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Order Flow Mapping', description: 'Document every order channel, fulfillment rule, SLA structure, and notification requirement.' },
      { step: 2, title: 'System Design', description: 'Data models, routing rules, alert configurations, portal wireframes, and API integration plans.' },
      { step: 3, title: 'Core Module Development', description: 'Order capture, fulfillment routing, SLA tracking, and notification engine built with iterative demos.' },
      { step: 4, title: 'Client Portal Development', description: 'Self-service portal with order placement, tracking, document download, and dispute management.' },
      { step: 5, title: 'Integration & Testing', description: 'Connect to existing WMS/TMS, marketplace APIs, email/WhatsApp channels. End-to-end testing with real orders.' },
      { step: 6, title: 'Go-Live & Support', description: 'Phased rollout by client group, team training, and 60-day post-launch support.' },
    ],

    benefits: [
      { title: 'Zero Missed Orders', description: 'Every order from every channel captured in one system. No more orders lost in WhatsApp or email.' },
      { title: '99%+ SLA Compliance', description: 'Automated routing and escalation alerts ensure orders are fulfilled within committed timelines.' },
      { title: '60% Fewer Status Calls', description: 'Client self-service portal eliminates 60% of incoming status queries. Your team focuses on operations, not answering calls.' },
      { title: 'Faster Fulfillment', description: 'Smart routing reduces order-to-dispatch time by 30-50% through automated warehouse and vehicle assignment.' },
      { title: 'Channel Performance Visibility', description: 'Know which channels drive the most revenue, best SLA compliance, and highest margins.' },
      { title: 'Scalable to Any Volume', description: 'Architecture handles 50 orders/day or 50,000 orders/day with the same workflows and dashboards.' },
    ],

    beforeAfter: [
      { before: 'Orders arrive via 5 different channels  no single tracking system', after: 'All orders captured and tracked in one centralized system with channel tagging' },
      { before: 'Clients call constantly to check order status', after: 'Self-service portal gives clients real-time visibility without calling' },
      { before: 'SLA breaches discovered only when clients complain', after: 'Real-time SLA tracking with escalation alerts at 50%, 75%, and 100% thresholds' },
      { before: 'Manual fulfillment routing  wrong warehouse, wrong vehicle', after: 'Smart routing optimizes warehouse and vehicle selection automatically' },
      { before: 'No idea which channels drive the most profitable business', after: 'Cross-channel analytics show volume, revenue, and margins by source' },
      { before: 'Order confirmation takes hours', after: 'Automated confirmation sent via WhatsApp and email within seconds of order capture' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Discovery & Flow Mapping', duration: '5-7 days', deliverables: ['Order channel inventory', 'Fulfillment rule map', 'SLA structure document', 'Project proposal'] },
      { phase: 'Design & Architecture', duration: '5-7 days', deliverables: ['Data models', 'Routing engine design', 'Portal wireframes', 'API specs'] },
      { phase: 'Core Development', duration: '3-4 weeks', deliverables: ['Order capture module', 'Fulfillment routing', 'SLA tracking', 'Notification engine'] },
      { phase: 'Client Portal & Integrations', duration: '2-3 weeks', deliverables: ['Client portal', 'WMS/TMS integration', 'Marketplace API connections', 'End-to-end testing'] },
      { phase: 'Go-Live', duration: '1-2 weeks', deliverables: ['Phased rollout', 'Team training', 'Client onboarding', 'Production deployment'] },
      { phase: 'Post-Launch Support', duration: '60 days', deliverables: ['Bug fixes', 'Performance optimization', 'Enhancements', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Multi-Channel Expertise', description: 'We have built order capture integrations for WhatsApp, email parsing, phone logging, marketplace APIs, and EDI systems. We know how to make them all work together.' },
      { title: 'Indian Logistics SLAs', description: 'We understand Indian logistics SLA structures  same-city, inter-city, inter-state, and express delivery timelines with realistic buffer management.' },
      { title: 'Client Portal Design', description: 'Our client portals are designed for Indian logistics clients  simple, mobile-first, with WhatsApp notifications and document downloads.' },
      { title: 'Integration Ready', description: 'Pre-built connectors for common Indian logistics tools  Tally for billing, WhatsApp for notifications, and major GPS providers for tracking.' },
    ],

    faq: [
      { question: 'Can the OMS integrate with our existing TMS?', answer: 'Yes. We build bidirectional integrations with your TMS so orders flow automatically from the OMS to the TMS for trip creation, and tracking updates flow back to the OMS for client visibility.' },
      { question: 'Do you support marketplace integrations?', answer: 'Yes. We integrate with Amazon, Flipkart, Myntra, Meesho, and other major Indian marketplaces through their seller APIs. Orders are automatically captured and routed for fulfillment.' },
      { question: 'Can clients track orders without calling us?', answer: 'Yes. The client self-service portal provides real-time order tracking, document downloads, and dispute management. We also send automated status updates via WhatsApp and email.' },
      { question: 'How does SLA tracking work?', answer: 'Each order is assigned an SLA based on the service type and destination. The system monitors time elapsed against the SLA and triggers escalation alerts at configurable thresholds (typically 50%, 75%, and 100%).' },
      { question: 'Can we set different SLAs for different clients?', answer: 'Absolutely. SLAs are fully configurable per client, service type, and geography. Priority clients can have tighter SLAs with more aggressive escalation rules.' },
      { question: 'How long does an OMS implementation take?', answer: 'A full OMS with multi-channel capture, fulfillment routing, SLA tracking, and client portal typically takes 6-8 weeks. Simpler implementations with fewer channels can be done in 4-5 weeks.' },
    ],
  },

  'custom-erp-logistics': {
    slug: 'custom-erp-logistics',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '06',
    title: 'Custom ERP for Logistics',
    shortDescription: 'Integrated enterprise platform combining TMS, WMS, billing, HR, fleet, and analytics into a single system for large logistics operations.',

    heroTagline: 'One platform. Every function. Total control.',
    heroDescription: 'A custom ERP built specifically for logistics companies that need an integrated platform replacing multiple disconnected systems. TMS, WMS, billing, HR, fleet management, procurement, and analytics  all connected, all real-time, all in one system.',

    problemTitle: 'The Problem: Disconnected Systems Create Data Silos',
    problemDescription: 'Large logistics companies often run on a patchwork of disconnected tools  Tally for accounting, Excel for operations, WhatsApp for coordination, separate GPS dashboards, and standalone HR systems. Data does not flow between these systems, creating manual re-entry, reconciliation headaches, and blind spots in management reporting. Decisions are made on incomplete or outdated data.',
    problemBullets: [
      'Operations in one system, accounting in another  manual reconciliation takes days every month',
      'HR and payroll data disconnected from operations  cannot link driver performance to compensation',
      'No single source of truth  same data exists in 5 different places with different values',
      'Management reports require pulling data from 6-8 systems manually  takes a full week to close monthly reporting',
      'No cross-functional analytics  cannot link trip costs to fleet maintenance to employee productivity',
      'New business requirements require adding yet another standalone tool to an already fragmented stack',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Logistics Company Founders & CEOs', description: 'Running multi-branch, multi-service operations who need one system to run everything' },
      { role: 'CFOs & Finance Directors', description: 'Who need real-time financial visibility across all branches and service lines' },
      { role: 'COOs & Operations Heads', description: 'Overseeing end-to-end operations who need integrated visibility from booking to delivery to billing' },
      { role: 'CTOs & IT Heads', description: 'Who want to consolidate the technology stack and reduce vendor management burden' },
      { role: 'HR Managers', description: 'Managing large teams of drivers, warehouse staff, and office employees with attendance, payroll, and compliance needs' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A fully integrated ERP platform where every module shares a common database. Operations, finance, HR, fleet, and analytics all connected  no manual data transfer, no reconciliation, no blind spots.',
    whatWeDoItems: [
      'Integrated TMS + WMS with shared inventory and trip data',
      'Finance module with GST-compliant billing, expense management, and multi-branch accounting',
      'HR & payroll with attendance tracking, leave management, and performance-linked compensation',
      'Fleet management with maintenance, fuel, and compliance tracking',
      'Procurement and vendor management for spare parts, fuel cards, and services',
      'Management dashboard with real-time KPIs, P&L by branch/service/route, and cash flow analytics',
    ],

    features: [
      { title: 'Unified Database Architecture', description: 'Every module shares a single database  trip data flows to billing, billing flows to accounting, accounting flows to management reports. No manual sync.' },
      { title: 'Operations Suite (TMS + WMS)', description: 'Full transport management and warehouse management integrated. Trip planning uses warehouse inventory data. POD triggers billing automatically.' },
      { title: 'Finance & Accounting', description: 'GST-compliant billing, expense management, multi-branch accounting, bank reconciliation, TDS tracking, and financial reporting.' },
      { title: 'HR & Payroll', description: 'Attendance, leave management, shift scheduling, payroll processing with statutory compliance (PF, ESI, TDS), and performance tracking.' },
      { title: 'Fleet & Asset Management', description: 'Vehicle register, maintenance scheduling, fuel management, insurance compliance, and asset lifecycle tracking.' },
      { title: 'Procurement & Vendor Management', description: 'Purchase orders, vendor evaluation, spare parts inventory, fuel card management, and service contract tracking.' },
      { title: 'Management Analytics', description: 'Real-time dashboards for P&L, cash flow, fleet utilization, employee productivity, and client profitability. Drill-down from summary to transaction level.' },
      { title: 'Multi-Branch Architecture', description: 'Centralized control with branch-level autonomy. Each branch operates independently while leadership gets consolidated cross-branch visibility.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Enterprise Audit', description: 'Comprehensive audit of every business function, current systems, data flows, pain points, and integration requirements across all branches.' },
      { step: 2, title: 'ERP Architecture Design', description: 'Module blueprint, data models, user role matrix, integration map, and phased rollout plan.' },
      { step: 3, title: 'Foundation Development', description: 'Core database, user management, multi-branch setup, and shared services layer.' },
      { step: 4, title: 'Module Development (Phase 1)', description: 'TMS + Billing + basic reporting  the modules with highest immediate impact.' },
      { step: 5, title: 'Module Development (Phase 2)', description: 'WMS + HR + Fleet + Procurement  remaining modules added in priority order.' },
      { step: 6, title: 'Integration & Analytics', description: 'Cross-module data flows, management dashboards, and end-to-end testing across all modules.' },
      { step: 7, title: 'Phased Go-Live', description: 'Branch-by-branch rollout with parallel run, training, and 90-day support.' },
    ],

    benefits: [
      { title: 'Single Source of Truth', description: 'Every department works from the same data. No more reconciliation, no more conflicting reports, no more data silos.' },
      { title: '70% Faster Month-End Closing', description: 'Automated data flows replace manual reconciliation. Month-end reporting that took a week now takes a day.' },
      { title: 'Cross-Functional Visibility', description: 'Link trip costs to fleet maintenance, employee performance to payroll, client revenue to branch overheads  all in one view.' },
      { title: 'Eliminated Manual Data Entry', description: 'Data entered once flows automatically to every module that needs it. No duplicate entry, no transfer errors.' },
      { title: 'Scalable to Any Size', description: 'Architecture handles 1 branch or 50 branches, 100 employees or 10,000 employees. Add modules, branches, and users without rebuild.' },
      { title: 'Reduced Vendor Management', description: 'One system replaces 5-8 disconnected tools. One vendor to call, one contract to manage, one update cycle.' },
    ],

    beforeAfter: [
      { before: 'Operations in Excel, accounting in Tally, HR in spreadsheets  5 disconnected systems', after: 'One integrated platform where all modules share a common database' },
      { before: 'Month-end reporting takes a full week of manual reconciliation', after: 'Automated data flows enable month-end close in a single day' },
      { before: 'Same data exists in multiple places with different values', after: 'Single source of truth  one version of data across the entire organization' },
      { before: 'Cannot link trip costs to fleet maintenance to employee productivity', after: 'Cross-functional analytics connect operations, finance, HR, and fleet data' },
      { before: 'New requirement means adding another standalone tool', after: 'New modules added to the existing platform with full data integration' },
      { before: 'Management decisions based on outdated or incomplete data', after: 'Real-time dashboards with drill-down from summary to transaction level' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Enterprise Audit', duration: '10-14 days', deliverables: ['Process maps for all functions', 'Current system inventory', 'Integration requirements', 'ERP blueprint'] },
      { phase: 'Architecture Design', duration: '7-10 days', deliverables: ['Module blueprint', 'Data models', 'Role matrix', 'Phased rollout plan'] },
      { phase: 'Foundation & Core Module (TMS + Billing)', duration: '6-8 weeks', deliverables: ['Database architecture', 'User management', 'TMS module', 'Billing module', 'Basic reports'] },
      { phase: 'Phase 2 Modules (WMS + HR + Fleet)', duration: '4-6 weeks', deliverables: ['WMS module', 'HR & payroll', 'Fleet management', 'Procurement'] },
      { phase: 'Integration & Analytics', duration: '3-4 weeks', deliverables: ['Cross-module data flows', 'Management dashboards', 'Advanced analytics', 'End-to-end testing'] },
      { phase: 'Branch Rollout & Training', duration: '4-6 weeks', deliverables: ['Phased branch go-live', 'Team training', 'Data migration', 'Parallel run'] },
      { phase: 'Post-Launch Support', duration: '90 days', deliverables: ['Bug fixes', 'Enhancements', 'Performance tuning', 'Quarterly business review'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics-Only Focus', description: 'We do not build ERPs for hospitals or retail chains. Every module is designed for logistics workflows, Indian compliance, and the operational realities of Indian logistics.' },
      { title: 'Phased Delivery', description: 'You do not wait 6 months to see results. We deliver the highest-impact modules first (typically TMS + Billing), then add modules in priority order.' },
      { title: 'No Lock-In', description: 'You own the source code and the database. We build on open-source technologies  no proprietary licenses, no per-user fees, no vendor dependency.' },
      { title: 'Enterprise Experience', description: 'We have built ERPs for companies with 500+ employees and 50+ branches. We understand the complexities of multi-branch, multi-service logistics operations.' },
    ],

    faq: [
      { question: 'How long does a full ERP implementation take?', answer: 'A full ERP with all modules typically takes 5-8 months depending on the number of branches, modules, and customization required. We deliver in phases  the first phase (TMS + Billing) goes live in 6-8 weeks.' },
      { question: 'Can we start with just 2-3 modules and add more later?', answer: 'Yes. Our phased approach means you start with the highest-impact modules and add others as budget and priorities allow. The architecture is designed for modular expansion without rebuilding.' },
      { question: 'Do we own the source code?', answer: 'Yes. You own 100% of the source code and database. We build on open-source technologies  no proprietary licenses, no per-user fees, and no vendor lock-in.' },
      { question: 'Can it handle multiple branches with different currencies?', answer: 'Yes. Our multi-branch architecture supports different currencies, tax structures, and compliance requirements per branch. Headquarters gets consolidated financial reporting in the base currency.' },
      { question: 'What technologies do you use?', answer: 'We use modern, proven technologies  Node.js or Python backend, React or Next.js frontend, PostgreSQL or MySQL database. All open-source, all well-supported, all scalable.' },
      { question: 'Do you provide ongoing maintenance?', answer: 'Yes. After the initial 90-day support period, we offer annual maintenance contracts that cover bug fixes, security patches, minor enhancements, and priority support. Typical cost is 15-20% of project cost per year.' },
      { question: 'Can we migrate data from our existing systems?', answer: 'Yes. We handle complete data migration from Tally, Excel, legacy systems, and other databases. We clean, validate, and import all historical data during the transition.' },
    ],
  },

  'client-vendor-portals': {
    slug: 'client-vendor-portals',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '07',
    title: 'Client & Vendor Portals',
    shortDescription: 'Branded web portals with document management, shipment tracking, PO management, and payment visibility for logistics clients and vendors.',

    heroTagline: 'Your clients and vendors. Self-service. Always.',
    heroDescription: 'Branded client and vendor portals that give your partners self-service access to shipment tracking, document management, purchase orders, and payment status. Reduce 50-70% of routine communication and give partners a professional digital experience.',

    problemTitle: 'The Problem: Your Team Spends Half Their Time Answering Routine Queries',
    problemDescription: 'Logistics operations receive hundreds of routine queries daily  where is my shipment, send me the invoice, what is the POD status, when will I get paid. Your operations and accounts teams spend 40-50% of their time answering these questions instead of doing productive work. Clients and vendors feel underserved because responses take hours.',
    problemBullets: [
      'Operations team spends 3-4 hours daily answering shipment status queries',
      'Accounts team flooded with invoice and payment status requests from clients and vendors',
      'Documents (invoices, PODs, e-way bills) sent one-by-one via email and WhatsApp  time-consuming and untrackable',
      'Vendors and clients have no visibility into payment status  constant follow-up calls',
      'No professional digital experience for partners  reflects poorly on company image',
      'Purchase order management is manual  emails with Excel attachments, version confusion',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: '3PL & 4PL Operators', description: 'Managing operations for multiple clients who need visibility into their shipments and billing' },
      { role: 'Transporters with Corporate Clients', description: 'Serving large companies (Tata, Reliance, Amazon) who expect self-service portals' },
      { role: 'Freight Forwarders', description: 'Working with multiple vendors and agents who need document access and booking capabilities' },
      { role: 'CFOs & Finance Heads', description: 'Who want to reduce accounts team workload and improve partner payment visibility' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'Branded web portals for your clients and vendors with role-based access, document management, shipment tracking, PO management, and payment visibility. Partners log in, find what they need, and get back to work.',
    whatWeDoItems: [
      'Branded client portal with company logo, colors, and custom domain',
      'Real-time shipment tracking with status updates and POD viewing/downloading',
      'Document management  invoices, PODs, e-way bills, and delivery reports all in one place',
      'Purchase order management with creation, approval workflow, and status tracking',
      'Payment visibility  outstanding invoices, payment history, and credit/debit notes',
      'Vendor portal for service providers with assignment tracking, document upload, and payment status',
    ],

    features: [
      { title: 'Branded Portal Experience', description: 'Custom-designed portal with your logo, colors, typography, and domain. Looks like a premium product, not a generic portal.' },
      { title: 'Shipment Tracking Dashboard', description: 'Real-time tracking with status timeline, map view, ETA predictions, and POD photo viewing. Filters by date, status, and location.' },
      { title: 'Document Center', description: 'Centralized document repository  invoices, PODs, e-way bills, delivery reports, and rate contracts. Search, filter, and download.' },
      { title: 'PO Management', description: 'Clients create purchase orders, vendors accept/reject, and both parties track status through the fulfillment lifecycle.' },
      { title: 'Payment & Billing Visibility', description: 'Outstanding invoices, payment history, credit/debit notes, and aging analysis. Clients see exactly what they owe and what has been paid.' },
      { title: 'Dispute Management', description: 'Raise, track, and resolve disputes on shipments, invoices, and deliveries. Full audit trail with comments and evidence upload.' },
      { title: 'Notification System', description: 'Email and in-app notifications for shipment milestones, invoice generation, payment receipts, and PO status changes.' },
      { title: 'Role-Based Access Control', description: 'Different access levels for clients, vendors, and internal teams. Sensitive data restricted to authorized users only.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Stakeholder Analysis', description: 'Identify portal users, their needs, and access requirements. Document what clients and vendors currently ask for.' },
      { step: 2, title: 'Portal Design', description: 'UI/UX design with your branding, navigation structure, and role-based access matrix.' },
      { step: 3, title: 'Core Development', description: 'Authentication, dashboard, shipment tracking, document center, and notification system.' },
      { step: 4, title: 'Advanced Features', description: 'PO management, payment visibility, dispute management, and reporting module.' },
      { step: 5, title: 'Integration', description: 'Connect to your TMS, WMS, and billing systems for real-time data sync.' },
      { step: 6, title: 'Launch & Onboarding', description: 'Portal launch, client/vendor onboarding, and 30-day post-launch support.' },
    ],

    benefits: [
      { title: '60-70% Fewer Routine Queries', description: 'Partners find answers themselves  shipment status, invoices, documents, payment status. Your team focuses on operations, not answering calls.' },
      { title: 'Professional Brand Image', description: 'A branded portal positions you as a technology-forward company. Essential for vendor shortlisting with large corporates.' },
      { title: 'Faster Dispute Resolution', description: 'Structured dispute management with evidence upload and audit trail reduces resolution time from weeks to days.' },
      { title: 'Improved Partner Satisfaction', description: 'Partners get 24/7 access to their data instead of waiting for business hours. Satisfaction scores improve significantly.' },
      { title: 'Reduced Accounts Workload', description: 'Payment visibility and document self-service eliminate 50%+ of accounts team routine queries.' },
      { title: 'Better Data Accuracy', description: 'Partners see real-time data directly from your systems  no manual updates, no version confusion on documents.' },
    ],

    beforeAfter: [
      { before: 'Clients call daily for shipment status updates', after: 'Clients check real-time tracking on the portal anytime' },
      { before: 'Documents sent one-by-one via email and WhatsApp', after: 'All documents available in a searchable, downloadable document center' },
      { before: 'Vendors call constantly asking about payment status', after: 'Vendors see outstanding amounts and payment history on their portal' },
      { before: 'POs managed via email with Excel attachments', after: 'Structured PO creation, approval, and tracking workflow on the portal' },
      { before: 'Disputes tracked in phone calls and WhatsApp', after: 'Formal dispute system with evidence, comments, and resolution tracking' },
      { before: 'Partners see you as old-school and unorganized', after: 'Branded portal projects a professional, technology-forward image' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Discovery & Design', duration: '5-7 days', deliverables: ['User requirement analysis', 'Branding guide', 'Portal wireframes', 'Access matrix'] },
      { phase: 'Core Development', duration: '2-3 weeks', deliverables: ['Authentication system', 'Dashboard', 'Shipment tracking', 'Document center'] },
      { phase: 'Advanced Features', duration: '2-3 weeks', deliverables: ['PO management', 'Payment visibility', 'Dispute management', 'Notifications'] },
      { phase: 'Integration & Testing', duration: '1-2 weeks', deliverables: ['TMS/WMS integration', 'End-to-end testing', 'Security audit', 'Performance testing'] },
      { phase: 'Launch & Onboarding', duration: '1 week', deliverables: ['Portal deployment', 'Client/vendor onboarding', 'Training materials', 'Go-live'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Bug fixes', 'Enhancements', 'User feedback incorporation', 'Handover'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics-Specific Design', description: 'We design portals around logistics workflows  shipment tracking, POD management, freight billing  not generic customer portals.' },
      { title: 'Quick Deployment', description: 'Client and vendor portals can be deployed in 5-7 weeks. You start reducing routine queries within 2 months of starting the project.' },
      { title: 'White-Label Ready', description: 'If you are a 3PL, we can build multi-tenant portals where each client gets their own branded experience from a single platform.' },
      { title: 'Mobile-First', description: 'Portals are fully responsive and optimized for mobile  because your drivers, warehouse managers, and field teams use phones, not desktops.' },
    ],

    faq: [
      { question: 'Can each client get their own branded portal?', answer: 'Yes. For 3PL operators, we build multi-tenant portals where each client sees their own branding, data, and documents. From a single platform, every client feels like they have their own dedicated portal.' },
      { question: 'How do we onboard clients and vendors to the portal?', answer: 'We provide an admin panel where you create user accounts with role-based access. You can also enable self-registration with approval workflows for vendors.' },
      { question: 'Is the portal secure?', answer: 'Yes. All data is encrypted in transit and at rest. We implement role-based access control, audit logging, and secure authentication (password + optional 2FA). The portal is hosted on secure cloud infrastructure.' },
      { question: 'Can the portal work on mobile phones?', answer: 'Yes. The portal is fully responsive and works on any device  desktop, tablet, or smartphone. We optimize the mobile experience because most field users access it on phones.' },
      { question: 'How quickly can a portal be deployed?', answer: 'A standard client/vendor portal with tracking, documents, and payment visibility can be deployed in 5-7 weeks. More complex portals with PO management and multi-tenancy take 7-10 weeks.' },
      { question: 'Can it integrate with our TMS and billing systems?', answer: 'Yes. We build API integrations with your TMS for shipment data, WMS for inventory, and billing system for invoice and payment data. The portal shows real-time data from all connected systems.' },
    ],
  },

  'driver-fleet-compliance-apps': {
    slug: 'driver-fleet-compliance-apps',
    category: 'custom-software',
    categoryLabel: 'Custom Software',
    number: '08',
    title: 'Driver & Fleet Compliance Apps',
    shortDescription: 'Mobile-first document management, attendance tracking, and service schedule monitoring for driver and fleet compliance.',

    heroTagline: 'Every document. Every deadline. Always compliant.',
    heroDescription: 'A mobile-first compliance management system that tracks driver licences, vehicle fitness, insurance, pollution certificates, permits, and service schedules. Automated alerts, document upload, and expiry tracking ensure your fleet stays road-legal at all times.',

    problemTitle: 'The Problem: Compliance Is Tracked in Files and Memory',
    problemDescription: 'Indian fleet operators manage hundreds of compliance documents  driving licences, vehicle fitness certificates, insurance policies, pollution certificates, state permits, and national permits. These are typically tracked in physical files, Excel sheets, or simply remembered until a deadline is missed. The result is frequent lapses, RTO fines, vehicle impoundments, and in severe cases, licence cancellations.',
    problemBullets: [
      'Driving licence expiry dates tracked in notebooks  licences lapse without warning',
      'Vehicle insurance renewed reactively after expiry  coverage gaps of days or weeks',
      'Pollution under Control (PUC) certificates missed  fines at every RTO check post',
      'State and national permits lapse  vehicles grounded inter-state, lost revenue',
      'No centralized document repository  originals lost, duplicates impossible to find during RTO inspections',
      'Service schedule compliance ignored until breakdown  voids manufacturer warranty',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Fleet Managers', description: 'Responsible for keeping 50-500+ vehicles and drivers compliant with RTO and insurance requirements' },
      { role: 'Transporters & Fleet Owners', description: 'Who have faced fines, impoundments, or insurance claim rejections due to compliance lapses' },
      { role: 'HR & Admin Teams', description: 'Managing driver documentation, onboarding, and attendance at scale' },
      { role: 'RTO Compliance Officers', description: 'Internal teams responsible for ensuring fleet-wide regulatory compliance' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A mobile-first compliance system that digitizes every document, tracks every expiry, and alerts the right person before deadlines. Drivers upload their own documents, fleet managers get escalation alerts, and management gets compliance dashboards.',
    whatWeDoItems: [
      'Digital document repository for driver licences, vehicle fitness, insurance, PUC, and permits',
      'Automated expiry tracking with alerts at 30, 15, 7, and 1 day before deadline',
      'Driver self-service app for document upload, expiry viewing, and attendance marking',
      'Service schedule tracking with manufacturer warranty compliance',
      'RTO inspection readiness report  all documents for any vehicle available in one click',
      'Compliance scorecard per vehicle and driver  visible on management dashboard',
    ],

    features: [
      { title: 'Digital Document Vault', description: 'Upload and store every compliance document  driving licence, fitness certificate, insurance, PUC, permits, badges. OCR extraction for auto-population of dates and numbers.' },
      { title: 'Automated Expiry Alerts', description: 'Multi-level alerts at 30, 15, 7, and 1 day before expiry. Notifications sent to driver, fleet manager, and management with escalation if no action is taken.' },
      { title: 'Driver Mobile App', description: 'Drivers upload their own documents, view compliance status, mark attendance, and receive renewal reminders. Works on Android smartphones  no training needed.' },
      { title: 'Service Schedule Compliance', description: 'Track scheduled services based on km, time, or manufacturer recommendations. Alerts before service is due. Warranty compliance tracking.' },
      { title: 'RTO Inspection Report', description: 'Generate a one-click compliance report for any vehicle  all documents, their status, and expiry dates. Ready for RTO inspection in seconds.' },
      { title: 'Compliance Scorecard', description: 'Per-vehicle and per-driver compliance scores. Red/yellow/green status based on document validity. Management dashboard with fleet-wide compliance percentage.' },
      { title: 'Insurance Claim Support', description: 'Quick access to all accident-related documents  insurance policy, driver licence, fitness certificate, FIR copy. Speeds up claim processing.' },
      { title: 'Multi-Branch Compliance', description: 'Centralized compliance tracking across all branches. Branch managers see their fleet; leadership sees the entire organization.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Compliance Audit', description: 'Inventory all document types, current tracking methods, renewal processes, and pain points across all branches.' },
      { step: 2, title: 'System Design', description: 'Document categories, alert rules, escalation matrix, and app wireframes designed around your compliance requirements.' },
      { step: 3, title: 'Backend Development', description: 'Document management system, expiry tracking engine, alert configuration, and compliance scoring algorithm.' },
      { step: 4, title: 'Driver App Development', description: 'Mobile app with document upload, attendance, and notification features. Tested with real drivers.' },
      { step: 5, title: 'Manager Dashboard', description: 'Web dashboard for fleet managers and management with compliance scorecards, alert queues, and reports.' },
      { step: 6, title: 'Go-Live & Training', description: 'Document digitization drive, team training, driver app rollout, and 30-day support.' },
    ],

    benefits: [
      { title: 'Zero Compliance Lapses', description: 'Multi-level alerts with escalation ensure no document ever expires without action. No more RTO fines or vehicle impoundments.' },
      { title: '90% Less Time on Compliance', description: 'Automated tracking and driver self-service eliminates the need for manual document checking. Fleet managers save hours every week.' },
      { title: 'Faster Insurance Claims', description: 'All accident-related documents available instantly. Insurance claim processing time reduced by 40-50%.' },
      { title: '100% RTO Inspection Ready', description: 'One-click report generates all compliance documents for any vehicle. Never caught unprepared during RTO checks.' },
      { title: 'Warranty Protection', description: 'Service schedule compliance tracking ensures manufacturer warranty remains valid. Saves lakhs in out-of-warranty repairs.' },
      { title: 'Driver Accountability', description: 'Drivers responsible for uploading and renewing their own documents. Compliance becomes a shared responsibility, not just management burden.' },
    ],

    beforeAfter: [
      { before: 'Document expiry discovered only after fine or impoundment', after: '30/15/7/1-day alerts ensure renewal before expiry' },
      { before: 'Physical document files lost or damaged', after: 'Digital vault with backup  every document accessible from anywhere' },
      { before: 'RTO inspection takes hours of document gathering', after: 'One-click report generates all compliance documents in seconds' },
      { before: 'Service schedule ignored until breakdown', after: 'Automated service reminders with warranty compliance tracking' },
      { before: 'Insurance claims delayed by missing documents', after: 'All claim documents available instantly in the digital vault' },
      { before: 'No visibility into fleet-wide compliance status', after: 'Compliance scorecard shows per-vehicle and per-driver status on dashboard' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Compliance Audit', duration: '3-5 days', deliverables: ['Document type inventory', 'Current process map', 'Pain point analysis', 'Project proposal'] },
      { phase: 'Design', duration: '3-5 days', deliverables: ['Alert rule configuration', 'Escalation matrix', 'App wireframes', 'Dashboard design'] },
      { phase: 'Backend Development', duration: '2-3 weeks', deliverables: ['Document management', 'Expiry engine', 'Alerts', 'Scoring algorithm'] },
      { phase: 'App Development', duration: '2 weeks', deliverables: ['Driver Android app', 'Document upload', 'Attendance', 'Notifications'] },
      { phase: 'Dashboard & Integration', duration: '1 week', deliverables: ['Manager dashboard', 'Compliance reports', 'RTO report generator', 'End-to-end testing'] },
      { phase: 'Go-Live', duration: '1 week', deliverables: ['Document digitization drive', 'Team training', 'Driver app rollout', 'Production deployment'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Bug fixes', 'User feedback', 'Enhancements', 'Handover'] },
    ],

    whyNexgenReasons: [
      { title: 'RTO-Compliant Design', description: 'We understand Indian RTO requirements, document types, and renewal processes. The system is designed around actual regulatory needs, not generic templates.' },
      { title: 'Driver-First Mobile App', description: 'Our driver app is designed for Indian truck drivers  simple interface, Hindi support, works on budget Android phones with poor connectivity.' },
      { title: 'Quick Deployment', description: 'Compliance apps can be deployed in 4-6 weeks. You start preventing lapses within 2 months of starting.' },
      { title: 'Document Digitization Support', description: 'We help you digitize your existing paper documents during deployment. OCR technology extracts dates and numbers automatically.' },
    ],

    faq: [
      { question: 'Does the driver app work on budget Android phones?', answer: 'Yes. The app is optimized for Android phones with 2GB+ RAM and Android 8+. It works well on slow networks and has offline mode for document viewing when connectivity is poor.' },
      { question: 'Can drivers upload their own documents?', answer: 'Yes. The driver app allows drivers to take photos of their documents (driving licence, badge, etc.) and upload them directly. OCR technology automatically extracts dates and document numbers.' },
      { question: 'What happens if a document is about to expire and no one acts?', answer: 'The system sends escalating alerts  first to the driver, then to the fleet manager, then to management. If the deadline passes without renewal, the vehicle or driver is flagged red on the dashboard and can be blocked from trip assignment.' },
      { question: 'Can we generate compliance reports for RTO inspections?', answer: 'Yes. The one-click RTO inspection report generates a comprehensive document showing all compliance documents for any vehicle, their validity status, and renewal dates. Print-ready format.' },
      { question: 'Does it track service schedules?', answer: 'Yes. You can configure service schedules based on km intervals, time intervals, or manufacturer recommendations. The system alerts before service is due and tracks warranty compliance.' },
      { question: 'How long does deployment take?', answer: 'A compliance app with document management, expiry alerts, and driver app can be deployed in 4-6 weeks. Adding multi-branch support and advanced features adds 1-2 weeks.' },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     CATEGORY 2: MOBILE APPLICATION DEVELOPMENT (5 services)
     ═══════════════════════════════════════════════════════════════ */

  'driver-mobile-apps': {
    slug: 'driver-mobile-apps',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    number: '09',
    title: 'Driver Mobile Apps',
    shortDescription: 'Trip updates, POD photo upload, navigation, fuel entry, and incident reporting. Android + iOS apps designed for Indian truck drivers.',

    heroTagline: 'Every driver connected. Every trip tracked.',
    heroDescription: 'A mobile app built specifically for Indian truck drivers  simple, works on budget phones, and functions on slow networks. Trip updates, POD photo upload, GPS navigation, fuel logging, and incident reporting, all in an interface designed for drivers with minimal tech literacy.',

    problemTitle: 'The Problem: Drivers Are Disconnected from Operations',
    problemDescription: 'Indian truck drivers operate in an information black hole. They receive trip details via phone call, navigate using roadside directions, submit PODs by physically returning to the office, and report incidents hours after they happen. Fleet managers have no real-time visibility into driver activity, trip progress, or on-ground issues.',
    problemBullets: [
      'Trip details communicated via phone call  no digital record, frequent miscommunication',
      'POD requires driver to return to office with physical documents  delays billing by days',
      'No navigation assistance  drivers rely on asking people at dhabas and toll plazas',
      'Fuel consumption unverified  drivers report fill quantities without proof',
      'Incidents reported hours or days late  by then, evidence is lost and response is too slow',
      'No driver performance data  cannot identify safe, efficient drivers vs risky, wasteful ones',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This app is for fleet operators and logistics companies whose drivers are the primary touchpoint with customers. If you manage 10+ drivers and lack real-time trip visibility, this app connects your drivers to your operations.',
    audienceSegments: [
      { role: 'Fleet Managers', description: 'Who need real-time driver location, trip progress, and POD confirmation' },
      { role: 'Transporters', description: 'Managing 20-500+ drivers who want to digitize driver operations and reduce phone calls' },
      { role: '3PL Operations Heads', description: 'Who need driver activity data for SLA compliance and client reporting' },
      { role: 'Safety & Compliance Officers', description: 'Who need incident reporting, driving behavior data, and compliance documentation' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'An Android-first mobile app designed for Indian truck drivers. Simple navigation, large buttons, Hindi support, works on 2G networks, and captures all trip data digitally  eliminating phone calls and physical document returns.',
    whatWeDoItems: [
      'Digital trip sheet with route, customer, load, and delivery details  no more phone-based communication',
      'GPS-based trip tracking with route deviation alerts and ETA calculation',
      'POD capture with photo upload, e-signature, and weight verification  instant delivery confirmation',
      'Fuel logging with fuel station photo, litre entry, and odometer reading  verified fuel data',
      'Incident reporting with photo, location, time, and description  instant alerts to fleet manager',
      'Navigation assistance with route suggestions and nearby facility finder (dhabas, fuel stations, workshops)',
    ],

    features: [
      { title: 'Digital Trip Sheet', description: 'Drivers see complete trip details  origin, destination, customer name, load description, delivery instructions, and contact numbers. No more relying on phone calls or paper chits.' },
      { title: 'GPS Trip Tracking', description: 'Continuous GPS tracking during trips with route display, deviation alerts, idle time monitoring, and automatic ETA updates sent to fleet manager.' },
      { title: 'POD Capture System', description: 'Take photos of delivered goods, capture e-signature, enter weight, and add notes. POD instantly available to accounts team for billing. No physical return needed.' },
      { title: 'Fuel & Expense Logging', description: 'Log every fuel fill with station photo, litres, cost, and odometer. Add toll, parking, and other expenses. Fleet manager gets verified expense data.' },
      { title: 'Incident Reporting', description: 'One-tap incident reporting with photo, GPS location, time, and description. Instant alert to fleet manager with all evidence attached.' },
      { title: 'Offline Mode', description: 'Full functionality without internet. Data syncs automatically when connectivity returns. Works in rural areas, highways, and remote delivery locations.' },
      { title: 'Hindi & Multi-Language Support', description: 'Interface available in Hindi, English, and regional languages. Audio announcements for non-literate drivers. Large fonts and clear icons.' },
      { title: 'Navigation & Route Assistance', description: 'In-app navigation with route suggestions, nearby dhaba finder, fuel station locator, and workshop directory. Helps drivers on unfamiliar routes.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Driver Workflow Study', description: 'We ride along with your drivers (or study their typical day) to understand actual needs, pain points, and phone usage patterns.' },
      { step: 2, title: 'UX Design for Drivers', description: 'Simple, large-button interface designed for drivers with minimal tech literacy. Hindi-first, audio-enabled, tested with real drivers.' },
      { step: 3, title: 'Core App Development', description: 'Trip sheet, GPS tracking, POD capture, and fuel logging built and tested with iterative driver feedback.' },
      { step: 4, title: 'Advanced Features', description: 'Incident reporting, offline mode, navigation, and fleet manager dashboard integration.' },
      { step: 5, title: 'Pilot Testing', description: 'Deploy to 10-20 drivers on real trips. Collect feedback, fix issues, and refine UX based on actual field usage.' },
      { step: 6, title: 'Full Rollout', description: 'Organization-wide deployment, driver training at each branch, and 60-day post-launch support.' },
    ],

    benefits: [
      { title: 'Zero Phone Calls for Trip Updates', description: 'Fleet managers and clients see trip progress automatically. Driver phone calls for status updates drop by 80-90%.' },
      { title: 'Same-Day POD Availability', description: 'POD photos and e-signatures captured at delivery and instantly available to accounts team. Billing starts the same day.' },
      { title: 'Verified Fuel Data', description: 'Fuel fill photos and odometer readings eliminate fuel theft. Anomalies flagged automatically.' },
      { title: 'Faster Incident Response', description: 'Instant incident alerts with photos and GPS location. Response time reduced from hours to minutes.' },
      { title: 'Driver Performance Data', description: 'Track driving behavior, trip completion rates, on-time delivery %, and fuel efficiency per driver.' },
      { title: 'Works on Any Phone', description: 'Optimized for budget Android phones (2GB RAM). Works on 2G networks. No expensive hardware needed.' },
    ],

    beforeAfter: [
      { before: 'Trip details communicated by phone call  miscommunication is common', after: 'Digital trip sheet with all details visible on driver phone' },
      { before: 'Driver must return to office to submit POD  delays billing by days', after: 'POD captured at delivery with photo and signature  billing starts same day' },
      { before: 'Fuel consumption reported without verification', after: 'Fuel fill logged with station photo, litres, and odometer reading' },
      { before: 'Incidents reported hours later  evidence is lost', after: 'One-tap incident reporting with photo, GPS location, and instant alert' },
      { before: 'No driver performance data available', after: 'Per-driver analytics on trip completion, on-time %, and fuel efficiency' },
      { before: 'Drivers navigate by asking people at dhabas', after: 'In-app navigation with route suggestions and nearby facility finder' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Driver Workflow Study', duration: '3-5 days', deliverables: ['Driver observation report', 'Feature priority list', 'UX requirements', 'Project proposal'] },
      { phase: 'UX Design', duration: '5-7 days', deliverables: ['Driver-friendly wireframes', 'Language localization plan', 'Offline architecture', 'UI design'] },
      { phase: 'Core Development', duration: '3-4 weeks', deliverables: ['Trip sheet', 'GPS tracking', 'POD capture', 'Fuel logging', 'First pilot build'] },
      { phase: 'Advanced Features & Testing', duration: '2 weeks', deliverables: ['Incident reporting', 'Offline mode', 'Navigation', 'Pilot testing with 10-20 drivers'] },
      { phase: 'Refinement & Full Rollout', duration: '1-2 weeks', deliverables: ['UX refinements from pilot', 'Organization-wide deployment', 'Driver training', 'Production release'] },
      { phase: 'Post-Launch Support', duration: '60 days', deliverables: ['Bug fixes', 'Driver feedback incorporation', 'Performance optimization', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Driver-First Design', description: 'We design for Indian truck drivers, not tech-savvy millennials. Large buttons, Hindi support, audio features, offline mode, and 2G compatibility.' },
      { title: 'Real Driver Testing', description: 'We pilot every app with real drivers on real trips before full rollout. The app is shaped by actual field conditions, not office assumptions.' },
      { title: 'Android + iOS', description: 'We build for both platforms, with Android as the primary focus since 95% of Indian drivers use Android phones.' },
      { title: 'Fleet Manager Integration', description: 'The driver app is not a standalone tool  it connects to your TMS, billing system, and fleet dashboard for end-to-end data flow.' },
    ],

    faq: [
      { question: 'Does the app work on budget Android phones?', answer: 'Yes. The app is optimized for Android phones with 2GB+ RAM running Android 8+. It uses minimal storage and works on 2G networks with full offline capability.' },
      { question: 'Can the app work without internet?', answer: 'Yes. The app has full offline mode  trip details, navigation, and data entry all work without connectivity. Data syncs automatically when the phone reconnects to the internet.' },
      { question: 'Is the app available in Hindi?', answer: 'Yes. The primary interface language is Hindi, with English and regional language options. We also include audio announcements for non-literate drivers.' },
      { question: 'How do we deploy the app to 200+ drivers?', answer: 'We help with deployment  bulk installation, branch-wise training sessions (2-3 hours each), and printed quick-reference cards. Most drivers are comfortable within a day.' },
      { question: 'Does the app drain the phone battery?', answer: 'No. We use optimized GPS tracking that minimizes battery drain. The app consumes about 5-8% battery per hour of active use, comparable to WhatsApp.' },
      { question: 'How long does it take to build?', answer: 'A driver mobile app with core features (trip sheet, GPS, POD, fuel) takes 4-6 weeks. Adding incident reporting, offline navigation, and advanced features extends to 6-8 weeks.' },
    ],
  },

  'customer-shipment-tracking-apps': {
    slug: 'customer-shipment-tracking-apps',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    number: '10',
    title: 'Customer Shipment Tracking Apps',
    shortDescription: 'Real-time ETA, status updates, notifications, and feedback for end customers. White-labeled mobile apps for logistics companies.',

    heroTagline: 'Your customers track shipments. Not call your team.',
    heroDescription: 'A white-labeled mobile app that gives your customers real-time shipment tracking, push notifications, delivery confirmation, and feedback  all under your brand. Reduce status enquiry calls by 70% and give customers a premium digital experience.',

    problemTitle: 'The Problem: Customers Call Constantly for Status Updates',
    problemDescription: 'Logistics customers  both B2B and B2C  constantly call or WhatsApp to check shipment status. Your operations team spends hours every day answering the same question: where is my shipment? This is expensive, slow, and frustrating for both parties. Customers expect the Amazon-like tracking experience, not phone-based updates.',
    problemBullets: [
      'Customers call 5-10 times per shipment for status updates  your team is overwhelmed',
      'No self-service tracking  customers cannot check status without calling',
      'Notifications are manual or non-existent  customers surprised by deliveries',
      'No branded digital experience  customers perceive you as old-school',
      'No delivery feedback mechanism  issues go unreported and unresolved',
      'No analytics on customer experience  you cannot measure or improve satisfaction',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: '3PL & 4PL Operators', description: 'Who need to provide branded tracking experiences for multiple clients' },
      { role: 'E-Commerce Logistics Providers', description: 'Serving B2C customers who expect Amazon-like tracking' },
      { role: 'Express & Same-Day Delivery Companies', description: 'Where real-time tracking is a competitive necessity, not a nice-to-have' },
      { role: 'Large Transporters', description: 'Serving corporate clients who expect digital shipment visibility as a vendor requirement' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A white-labeled mobile app and web tracking page under your brand. Customers enter their order ID or AWB number and see real-time status, map location, ETA, delivery confirmation, and can provide feedback.',
    whatWeDoItems: [
      'White-labeled Android + iOS apps with your brand, logo, and colors',
      'Order/AWB tracking with real-time status timeline and map view',
      'Push notifications for key milestones  picked up, in transit, out for delivery, delivered',
      'Delivery confirmation with photo POD, e-signature, and time stamp',
      'In-app feedback and rating system after delivery',
      'Web tracking page for customers who prefer browser access',
    ],

    features: [
      { title: 'White-Labeled Branding', description: 'App published under your company name with your logo, colors, and branding. Customers see your brand, not a third-party service.' },
      { title: 'Real-Time Status Timeline', description: 'Visual timeline showing every shipment milestone  booked, picked up, in transit, out for delivery, delivered. Timestamped and map-linked.' },
      { title: 'Live Map Tracking', description: 'GPS-based live tracking on map. Customers see the delivery vehicle approaching in real-time with ETA countdown.' },
      { title: 'Smart Push Notifications', description: 'Contextual notifications for every milestone. Customers choose notification preferences  all milestones, delivery only, or none.' },
      { title: 'POD & Delivery Confirmation', description: 'Photo of delivered goods, e-signature, and delivery time displayed in the app. Downloadable as PDF for records.' },
      { title: 'Feedback & Rating System', description: 'Post-delivery feedback form with rating scale and text comments. Issues automatically escalated to operations team.' },
      { title: 'Web Tracking Page', description: 'Responsive web page for customers who prefer desktop tracking. Same real-time data as the mobile app.' },
      { title: 'Multi-Language Support', description: 'Interface in English, Hindi, and regional languages based on customer preference.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Tracking Flow Design', description: 'Define tracking milestones, data sources (TMS/GPS), notification triggers, and customer journey map.' },
      { step: 2, title: 'Branding & UX Design', description: 'Apply your brand identity to the app and web page. Design intuitive tracking experience for non-technical users.' },
      { step: 3, title: 'App Development', description: 'Android + iOS apps with tracking, notifications, POD display, and feedback. Web tracking page built simultaneously.' },
      { step: 4, title: 'Backend Integration', description: 'Connect to your TMS for real-time data, GPS provider for live tracking, and notification service for push alerts.' },
      { step: 5, title: 'Testing & Launch', description: 'End-to-end testing with real shipments, app store submission, and customer onboarding support.' },
      { step: 6, title: 'Post-Launch Optimization', description: 'Monitor usage, collect feedback, fix issues, and optimize performance over 30 days.' },
    ],

    benefits: [
      { title: '70% Fewer Status Calls', description: 'Customers self-serve through the app and web page. Your operations team focuses on actual operations, not answering the phone.' },
      { title: 'Premium Brand Experience', description: 'A branded tracking app positions you as a technology-forward company. Essential for winning corporate clients and vendor shortlisting.' },
      { title: 'Proactive Communication', description: 'Push notifications keep customers informed at every milestone. They never need to ask where their shipment is.' },
      { title: 'Faster Issue Resolution', description: 'In-app feedback means issues are reported and escalated immediately, not days later when the customer finally calls.' },
      { title: 'Customer Satisfaction Data', description: 'Ratings and feedback give you measurable customer satisfaction data. Track NPS, identify problem areas, and improve service quality.' },
      { title: 'Competitive Differentiation', description: 'Most Indian logistics companies still operate without customer tracking apps. This gives you a significant competitive advantage.' },
    ],

    beforeAfter: [
      { before: 'Customers call 5-10 times per shipment for updates', after: 'Customers check the app  status calls drop by 70%' },
      { before: 'No branded digital experience for customers', after: 'White-labeled app under your brand  premium customer experience' },
      { before: 'Delivery surprises  customers not notified', after: 'Push notifications at every milestone  customers always informed' },
      { before: 'Issues reported days late via phone calls', after: 'In-app feedback with immediate escalation to operations team' },
      { before: 'No way to measure customer satisfaction', after: 'Ratings, feedback, and NPS data after every delivery' },
      { before: 'POD requests take hours to process', after: 'Photo POD and delivery details available in the app instantly' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Discovery & Design', duration: '5-7 days', deliverables: ['Tracking flow map', 'Data source identification', 'Brand design', 'UX wireframes'] },
      { phase: 'App & Web Development', duration: '3-4 weeks', deliverables: ['Android app', 'iOS app', 'Web tracking page', 'Notification system'] },
      { phase: 'Backend Integration', duration: '1-2 weeks', deliverables: ['TMS integration', 'GPS provider connection', 'Push notification service', 'End-to-end testing'] },
      { phase: 'Launch', duration: '1 week', deliverables: ['App store submission', 'Customer communication', 'Onboarding materials', 'Go-live'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Usage monitoring', 'Bug fixes', 'Performance optimization', 'Monthly report'] },
    ],

    whyNexgenReasons: [
      { title: 'White-Label Specialists', description: 'We build tracking apps under your brand, not ours. App store listing, branding, and customer experience all reflect your company identity.' },
      { title: 'TMS Integration Ready', description: 'Our apps connect to any TMS for real-time data. Whether you use our TMS or a third-party system, tracking data flows seamlessly.' },
      { title: 'Android + iOS', description: 'We build native apps for both platforms. Web tracking page included as standard for desktop users.' },
      { title: 'Quick Launch', description: 'A customer tracking app can be launched in 5-7 weeks. You start reducing status calls within 2 months.' },
    ],

    faq: [
      { question: 'Can the app be published under our brand name?', answer: 'Yes. The app is fully white-labeled  your company name, logo, and colors. We handle the Google Play Store and Apple App Store submission under your developer account.' },
      { question: 'Do we need to have a TMS for the tracking app to work?', answer: 'Yes, the app needs a data source for tracking information. If you do not have a TMS, we can build a lightweight tracking backend that your operations team updates manually or connect to your GPS provider.' },
      { question: 'Can we customize the tracking milestones?', answer: 'Yes. Tracking milestones are fully configurable  you define what stages your shipment goes through and what labels they display to customers.' },
      { question: 'Does it work for both B2B and B2C customers?', answer: 'Yes. The app works for both. B2B customers can track by AWB number or order ID. B2C customers can track by order number or tracking link sent via SMS/WhatsApp.' },
      { question: 'How quickly can we launch?', answer: 'A standard customer tracking app with milestones, map tracking, notifications, and feedback can be launched in 5-7 weeks. Adding advanced features like live map and multi-language extends by 1-2 weeks.' },
      { question: 'What about the web tracking page?', answer: 'A responsive web tracking page is included as standard. Customers can track shipments by entering their order ID or scanning a QR code from any browser.' },
    ],
  },

  'logistics-marketplace-apps': {
    slug: 'logistics-marketplace-apps',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    number: '11',
    title: 'Logistics Marketplace Apps',
    shortDescription: 'Load matching, spot rate bidding, carrier rating systems, and digital payments for freight marketplace platforms.',

    heroTagline: 'Connect shippers and carriers. Digitally.',
    heroDescription: 'A logistics marketplace app that connects shippers with carriers for load matching, spot rate bidding, and digital contract management. Built for companies that want to create their own freight marketplace or digitize their broker operations.',

    problemTitle: 'The Problem: Load Matching Happens Through Phone Calls and Brokers',
    problemDescription: 'The Indian freight market is still largely unorganized. Shippers call brokers, brokers call fleet owners, and trucks return empty because there is no efficient way to match loads with available capacity. Spot rates are negotiated verbally, payments are delayed, and there is no accountability or rating system.',
    problemBullets: [
      'Load matching through phone calls and WhatsApp groups  inefficient and limited reach',
      'Spot rate negotiation is verbal  no transparency, no price discovery, no audit trail',
      'Carrier verification is informal  no documented checks on licence, insurance, or compliance',
      'Payments delayed by 30-60 days  no digital escrow or automated settlement',
      'No performance rating  repeat offenders face no consequences, good carriers get no recognition',
      'Empty return trips are the norm  25-30% of Indian truck kilometres are empty',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Freight Brokers & intermediaries', description: 'Who want to digitize their broker operations and scale beyond phone-based matchmaking' },
      { role: 'Logistics Companies', description: 'Who want to create their own load marketplace for their shipper and carrier network' },
      { role: 'Industry Associations', description: 'Who want to build a digital marketplace for their member network' },
      { role: 'Startups', description: 'Building freight marketplace platforms for the Indian logistics market' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A full-featured logistics marketplace platform with shipper app, carrier app, admin dashboard, and web portal. Load posting, bidding, matching, rating, and digital payments  the complete marketplace stack.',
    whatWeDoItems: [
      'Shipper app for posting loads with origin, destination, weight, vehicle type, and rate expectations',
      'Carrier app for searching loads, placing bids, accepting assignments, and tracking payments',
      'Automated load matching algorithm based on location, capacity, and rate fit',
      'Carrier verification with licence, insurance, and compliance document checks',
      'Performance rating system  shippers rate carriers, carriers rate shippers',
      'Digital payment settlement with escrow, automated release on POD confirmation',
    ],

    features: [
      { title: 'Load Posting & Discovery', description: 'Shippers post loads with complete details. Carriers search and filter by route, vehicle type, date, and rate. Smart recommendations based on carrier history and location.' },
      { title: 'Bidding & Negotiation', description: 'Carriers place bids, shippers compare and negotiate. Transparent price discovery with market rate indicators and historical data.' },
      { title: 'Automated Matching', description: 'Algorithm matches loads with available carriers based on route proximity, vehicle type, capacity, rate compatibility, and historical performance.' },
      { title: 'Carrier Verification', description: 'Document verification  driving licence, vehicle fitness, insurance, GST. Background checks and compliance validation before onboarding.' },
      { title: 'Rating & Review System', description: 'Two-way rating system  shippers rate carriers on punctuality and handling, carriers rate shippers on payment reliability and loading conditions.' },
      { title: 'Digital Payments & Escrow', description: 'Payment held in escrow, released automatically on POD confirmation. Supports UPI, bank transfer, and wallet payments. Payment history tracking.' },
      { title: 'Admin Dashboard', description: 'Platform management  user verification, dispute resolution, revenue tracking, commission management, and analytics dashboard.' },
      { title: 'Notifications & Communication', description: 'In-app messaging between shipper and carrier. Push notifications for new loads, bid responses, assignment confirmation, and payment release.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Marketplace Strategy', description: 'Define marketplace model  open or closed, B2B or B2C, commission structure, and growth strategy.' },
      { step: 2, title: 'Platform Architecture', description: 'Database design, matching algorithms, payment flow, user roles, and technology stack.' },
      { step: 3, title: 'App Development', description: 'Shipper app, carrier app, and admin dashboard developed with iterative demos.' },
      { step: 4, title: 'Payment & Verification', description: 'Payment gateway integration, escrow system, and carrier verification workflow.' },
      { step: 5, title: 'Testing & Soft Launch', description: 'Test with pilot group of shippers and carriers. Refine matching algorithm and UX.' },
      { step: 6, title: 'Full Launch & Growth', description: 'Marketplace launch, user acquisition support, and 90-day post-launch optimization.' },
    ],

    benefits: [
      { title: '10x Load Discovery Reach', description: 'Carriers see loads from across the network instead of their local phone contacts. Shippers get bids from verified carriers nationwide.' },
      { title: 'Transparent Pricing', description: 'Bidding system creates price transparency. Shippers see market rates; carriers see demand levels. Fair pricing for both sides.' },
      { title: 'Reduced Empty Miles', description: 'Return load matching reduces empty kilometres. Carriers earn more per trip, shippers get competitive rates.' },
      { title: 'Faster Payments', description: 'Escrow-based payments released on POD confirmation. No more 30-60 day payment cycles for carriers.' },
      { title: 'Quality Assurance', description: 'Rating system incentivizes good performance. Repeat offenders get low ratings and fewer opportunities.' },
      { title: 'Scalable Operations', description: 'A marketplace handles 10 loads or 10,000 loads with the same platform. Scale without adding proportional operations staff.' },
    ],

    beforeAfter: [
      { before: 'Load matching through phone calls to 10-20 contacts', after: 'Loads visible to hundreds of verified carriers on the platform' },
      { before: 'Spot rates negotiated verbally  no record', after: 'Transparent bidding with price history and market rate indicators' },
      { before: 'Carrier verification based on word of mouth', after: 'Documented verification  licence, insurance, GST, compliance' },
      { before: 'Payments delayed by 30-60 days', after: 'Escrow payments released on POD  carriers paid within 48 hours' },
      { before: 'No accountability for poor performance', after: 'Two-way rating system rewards good carriers and penalizes bad ones' },
      { before: '25-30% of truck kilometres are empty', after: 'Return load matching reduces empty miles significantly' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Strategy & Architecture', duration: '7-10 days', deliverables: ['Business model document', 'Platform architecture', 'Matching algorithm design', 'Project plan'] },
      { phase: 'Core Platform Development', duration: '4-6 weeks', deliverables: ['Shipper app', 'Carrier app', 'Load posting', 'Bidding system', 'Matching engine'] },
      { phase: 'Payments & Verification', duration: '2-3 weeks', deliverables: ['Payment gateway integration', 'Escrow system', 'Carrier verification', 'Rating system'] },
      { phase: 'Admin & Analytics', duration: '1-2 weeks', deliverables: ['Admin dashboard', 'Revenue tracking', 'Dispute management', 'Analytics reports'] },
      { phase: 'Testing & Soft Launch', duration: '2-3 weeks', deliverables: ['Pilot with test users', 'Algorithm refinement', 'Bug fixes', 'UX improvements'] },
      { phase: 'Full Launch & Support', duration: '90 days', deliverables: ['Marketplace launch', 'User acquisition', 'Bug fixes', 'Feature enhancements', 'Monthly reviews'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics Marketplace Experience', description: 'We have built marketplace platforms for the Indian freight market. We understand matching algorithms, carrier behavior, and payment flows specific to Indian logistics.' },
      { title: 'End-to-End Platform', description: 'We deliver the complete stack  shipper app, carrier app, admin dashboard, payment system, and analytics. No need to hire multiple vendors.' },
      { title: 'Scalable Architecture', description: 'Our marketplace architecture handles growth from 100 users to 100,000 users without rebuilding. Cloud-native, auto-scaling infrastructure.' },
      { title: 'Growth Support', description: 'We do not just build and leave. Post-launch support includes algorithm optimization, feature additions, and growth strategy consulting.' },
    ],

    faq: [
      { question: 'Can we set our own commission structure?', answer: 'Yes. The commission model is fully configurable  fixed per-load fee, percentage-based, subscription-based, or any hybrid model. You can also offer promotional zero-commission periods for user acquisition.' },
      { question: 'How does the carrier verification work?', answer: 'Carriers upload documents (driving licence, vehicle fitness, insurance, GST registration) during registration. Our system verifies documents through API integrations where available and flags discrepancies for manual review.' },
      { question: 'Can the matching algorithm be customized?', answer: 'Yes. The matching algorithm considers multiple factors  route, capacity, rate, carrier rating, and historical performance. The weight of each factor is configurable, and we refine the algorithm based on marketplace data over time.' },
      { question: 'How long does it take to build a marketplace?', answer: 'A full logistics marketplace with shipper app, carrier app, matching, bidding, payments, and admin dashboard takes 10-14 weeks. A minimal viable product (MVP) with core features can be launched in 6-8 weeks.' },
      { question: 'What about disputes between shippers and carriers?', answer: 'The platform includes a dispute management module where either party can raise issues. The admin team has tools to review evidence (photos, GPS data, messages) and resolve disputes with documented decisions.' },
    ],
  },

  'field-operations-apps': {
    slug: 'field-operations-apps',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    number: '12',
    title: 'Field Operations Apps',
    shortDescription: 'Inspection, audit, checklist, and IoT data capture for on-field logistics teams. Offline-capable apps for remote warehouse and yard operations.',

    heroTagline: 'Field teams digitized. Data captured instantly.',
    heroDescription: 'A mobile app for field operations teams  warehouse inspections, vehicle audits, site surveys, and IoT data capture. Offline-capable, form-based, and designed for logistics operations that happen outside the office.',

    problemTitle: 'The Problem: Field Data Is Captured on Paper and Lost',
    problemDescription: 'Warehouse inspections, vehicle audits, site surveys, and compliance checks are still conducted using paper checklists. Data is manually entered into systems later  introducing errors, delays, and lost information. Field teams have no structured way to capture photos, GPS locations, or IoT sensor data.',
    problemBullets: [
      'Inspections conducted on paper checklists  data entered into systems days later with errors',
      'No photo or GPS evidence attached to inspections  disputes cannot be resolved',
      'Checklists are inconsistent  different teams use different formats and standards',
      'IoT sensor data (temperature, humidity, weight) captured manually or not at all',
      'No real-time visibility into field operations  management discovers issues days or weeks later',
      'Audit trails are incomplete  cannot prove what was checked, when, and by whom',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Warehouse Audit Teams', description: 'Who conduct regular inspections and need digital checklists with photo evidence' },
      { role: 'Fleet Inspection Teams', description: 'Who audit vehicle condition, compliance, and safety with photo documentation' },
      { role: 'Quality Assurance Teams', description: 'Who need structured data capture for quality checks across multiple locations' },
      { role: 'Operations Managers', description: 'Who need real-time visibility into field operations and exception alerts' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A configurable mobile app with digital checklists, photo capture, GPS tagging, IoT data integration, and automated reporting. Works offline in remote locations and syncs when connectivity returns.',
    whatWeDoItems: [
      'Configurable digital checklists with conditional logic, scoring, and pass/fail criteria',
      'Photo and video capture attached to checklist items with GPS location and timestamp',
      'IoT sensor integration for temperature, humidity, weight, and other field measurements',
      'Offline capability  full functionality without internet, auto-sync on reconnection',
      'Automated report generation  inspection reports, audit summaries, and exception dashboards',
      'Alerts and escalations for failed checks and critical findings',
    ],

    features: [
      { title: 'Configurable Checklists', description: 'Build unlimited checklists with conditional logic, scoring, and pass/fail criteria. Different checklists for different inspection types, locations, and compliance requirements.' },
      { title: 'Photo & Video Evidence', description: 'Capture photos and videos attached to specific checklist items. GPS coordinates and timestamps embedded automatically. Annotations and markups supported.' },
      { title: 'IoT Sensor Integration', description: 'Connect to Bluetooth and WiFi IoT sensors for temperature, humidity, weight, and vibration. Data auto-populated into checklists.' },
      { title: 'Offline Mode', description: 'Full app functionality without internet. Complete inspections in remote warehouses, yards, and field locations. Auto-syncs when connectivity returns.' },
      { title: 'Automated Reporting', description: 'Inspection reports generated automatically with photos, scores, and findings. PDF and Excel export. Scheduled email delivery to stakeholders.' },
      { title: 'Exception Alerts', description: 'Failed checks and critical findings trigger immediate alerts to operations manager and compliance team. Escalation if not acknowledged.' },
      { title: 'Audit Trail', description: 'Every inspection logged with inspector name, time, GPS location, device ID, and checklist version. Tamper-proof records for compliance documentation.' },
      { title: 'Analytics Dashboard', description: 'Management dashboard showing inspection trends, pass/fail rates by location, common findings, and team performance.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Field Process Study', description: 'Study current inspection workflows, checklists, reporting requirements, and field conditions.' },
      { step: 2, title: 'Checklist Digitization', description: 'Convert existing paper checklists to digital format with conditional logic and scoring rules.' },
      { step: 3, title: 'App Development', description: 'Mobile app with checklists, photo capture, GPS tagging, and offline sync.' },
      { step: 4, title: 'IoT Integration', description: 'Connect to required IoT sensors. Configure data capture and validation rules.' },
      { step: 5, title: 'Reporting & Alerts', description: 'Build automated reporting, exception dashboards, and alert escalation workflows.' },
      { step: 6, title: 'Pilot & Rollout', description: 'Pilot with field teams, refine based on feedback, organization-wide rollout.' },
    ],

    benefits: [
      { title: '90% Faster Data Capture', description: 'Digital checklists with auto-population eliminate manual writing and data entry. Inspections that took 2 hours now take 30 minutes.' },
      { title: 'Zero Data Loss', description: 'Offline mode ensures no data is lost in poor connectivity areas. Every inspection is recorded and synced.' },
      { title: 'Audit-Ready Records', description: 'GPS-tagged photos, timestamps, and digital signatures create tamper-proof audit trails. Compliance documentation made easy.' },
      { title: 'Real-Time Exception Alerts', description: 'Critical findings reach management instantly  not days later. Response time for safety and compliance issues drops dramatically.' },
      { title: 'Consistent Standards', description: 'Digital checklists enforce consistent standards across all locations and teams. No more variable quality between inspectors.' },
      { title: 'Measurable Quality', description: 'Analytics show pass/fail trends, common issues, and team performance. Data-driven decisions on training and process improvement.' },
    ],

    beforeAfter: [
      { before: 'Paper checklists filled manually and entered into systems later', after: 'Digital checklists captured on mobile  data in the system instantly' },
      { before: 'No photo or GPS evidence for inspections', after: 'Photos with GPS coordinates and timestamps attached to every checklist item' },
      { before: 'IoT sensor data captured manually or not at all', after: 'Sensor data auto-populated into checklists via Bluetooth/WiFi' },
      { before: 'No real-time visibility into field operations', after: 'Management dashboard shows inspection status, findings, and exceptions in real-time' },
      { before: 'Audit trails incomplete  who checked, when, what', after: 'Tamper-proof digital audit trail with inspector ID, GPS, time, and device' },
      { before: 'Inconsistent checklists across teams', after: 'Standardized digital checklists enforced across all locations' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Field Study & Design', duration: '5-7 days', deliverables: ['Current process map', 'Checklist inventory', 'IoT requirements', 'App wireframes'] },
      { phase: 'Checklist Digitization', duration: '3-5 days', deliverables: ['Digital checklists', 'Scoring rules', 'Conditional logic', 'Reporting templates'] },
      { phase: 'App Development', duration: '2-3 weeks', deliverables: ['Mobile app (Android)', 'Photo capture', 'GPS tagging', 'Offline mode'] },
      { phase: 'IoT & Reporting', duration: '1-2 weeks', deliverables: ['Sensor integration', 'Automated reports', 'Alert system', 'Analytics dashboard'] },
      { phase: 'Pilot & Rollout', duration: '2 weeks', deliverables: ['Pilot testing', 'Feedback incorporation', 'Team training', 'Organization rollout'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Bug fixes', 'Performance optimization', 'New checklist creation', 'Handover'] },
    ],

    whyNexgenReasons: [
      { title: 'Offline-First Architecture', description: 'Our apps are built offline-first because we understand Indian field conditions  warehouses without WiFi, yards with poor connectivity, remote inspection sites.' },
      { title: 'Configurable Without Code', description: 'Create and modify checklists through an admin interface  no developer needed for changes. Add new inspection types, questions, and scoring rules anytime.' },
      { title: 'IoT Integration Expertise', description: 'We have integrated with temperature sensors, weight scales, moisture meters, and vibration sensors commonly used in Indian logistics.' },
      { title: 'Quick Deployment', description: 'Field operations apps can be deployed in 4-6 weeks with core features. Add IoT integration and advanced reporting in 1-2 additional weeks.' },
    ],

    faq: [
      { question: 'Can we create new checklists without developer help?', answer: 'Yes. The admin dashboard allows you to create, modify, and deactivate checklists. Add questions, set conditional logic, define scoring rules, and assign to teams  all through a visual interface.' },
      { question: 'Does the app work without internet?', answer: 'Yes. The app is built offline-first. You can complete full inspections, capture photos, and record IoT data without any connectivity. Everything syncs automatically when the phone reconnects to the internet.' },
      { question: 'What IoT sensors can it connect to?', answer: 'We integrate with any Bluetooth or WiFi IoT sensor. Common integrations include temperature/humidity sensors, weight scales, moisture meters, and vibration sensors. If you have a specific sensor, we will build the integration.' },
      { question: 'Can inspection reports be automatically emailed?', answer: 'Yes. Reports can be auto-generated and emailed to specified recipients after each inspection. You can configure different email lists for different inspection types and locations.' },
      { question: 'How long does it take to deploy?', answer: 'A field operations app with digital checklists, photo capture, offline mode, and reporting can be deployed in 4-6 weeks. Adding IoT sensor integration adds 1-2 weeks depending on the sensors.' },
      { question: 'Is it available on iOS?', answer: 'Currently, our field operations apps are available for Android. iOS development is available as an additional option. Most field teams in India use Android devices.' },
    ],
  },

  'fleet-manager-dashboard-apps': {
    slug: 'fleet-manager-dashboard-apps',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    number: '13',
    title: 'Fleet Manager Dashboard Apps',
    shortDescription: 'Real-time fleet visibility, driver status, trip P&L, and alerts on mobile. Management dashboard for fleet operators on the go.',

    heroTagline: 'Your fleet. In your pocket. Always.',
    heroDescription: 'A mobile dashboard app for fleet managers who need real-time visibility into their fleet while on the move. Vehicle locations, driver status, trip P&L, maintenance alerts, and compliance status  all accessible from a smartphone.',

    problemTitle: 'The Problem: Fleet Managers Are Tied to Their Desks',
    problemDescription: 'Fleet managers need to be in the field  visiting workshops, meeting drivers, inspecting vehicles. But fleet visibility tools are desktop-only, forcing managers to choose between being informed and being present. Decisions get delayed because managers cannot access real-time data while on the move.',
    problemBullets: [
      'Fleet dashboard is desktop-only  no visibility when visiting workshops or meeting clients',
      'Emergency decisions delayed because manager is away from desk',
      'No mobile access to trip P&L, vehicle status, or driver compliance data',
      'Maintenance alerts missed when manager is not at computer',
      'Cannot approve or assign trips while on the move',
      'No mobile view of fleet analytics and KPIs',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Fleet Managers', description: 'Who spend 50%+ time in the field and need mobile access to fleet data' },
      { role: 'Operations Heads', description: 'Who travel between branches and need cross-branch visibility on mobile' },
      { role: 'Business Owners', description: 'Who want to check fleet status and KPIs without logging into a desktop system' },
      { role: 'Branch Managers', description: 'Who need mobile access to their branch fleet status and trip performance' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A mobile-first dashboard app that gives fleet managers complete fleet visibility on their smartphone. Live map, vehicle status, trip P&L, maintenance alerts, and KPIs  all optimized for mobile screens and touch interaction.',
    whatWeDoItems: [
      'Live fleet map showing all vehicle locations with status indicators (moving, idle, stopped)',
      'Vehicle status cards with key metrics  km driven, fuel, next service, compliance status',
      'Trip P&L view with revenue, cost, and margin per trip and per route',
      'Maintenance and compliance alerts with quick-action buttons',
      'Driver status dashboard  available, on-trip, off-duty, leave',
      'Management KPIs  fleet utilization, on-time delivery %, cost per km, revenue per vehicle',
    ],

    features: [
      { title: 'Live Fleet Map', description: 'Real-time map view of all vehicles with color-coded status. Tap any vehicle for details  current trip, speed, ETA, fuel level, and compliance status.' },
      { title: 'Vehicle Status Cards', description: 'Swipeable cards for each vehicle showing km, fuel, next service date, insurance status, and current trip. Quick filter by status, type, or location.' },
      { title: 'Trip P&L Mobile View', description: 'Revenue, cost, and margin per trip in a mobile-optimized layout. Filter by date, route, client, and vehicle. Export as PDF.' },
      { title: 'Alert Management', description: 'Maintenance due, insurance expiring, route deviation, over-speeding  all alerts in a single feed with quick-action buttons (approve, assign, dismiss).' },
      { title: 'Driver Dashboard', description: 'Driver availability status, current assignment, trip history, and performance score. Approve leave requests and assign trips from mobile.' },
      { title: 'KPI Widgets', description: 'Fleet utilization %, on-time delivery %, average cost per km, revenue per vehicle, maintenance cost ratio  all visible on the home screen.' },
      { title: 'Push Notifications', description: 'Configurable push alerts for critical events  breakdown, accident, route deviation, SLA breach, compliance expiry.' },
      { title: 'Quick Actions', description: 'Common actions  assign vehicle to trip, approve maintenance, send message to driver, generate report  all accessible with minimal taps.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Manager Workflow Study', description: 'Understand what data fleet managers need, when they need it, and what actions they take from mobile.' },
      { step: 2, title: 'Mobile UX Design', description: 'Design dashboard layout optimized for mobile screens. Prioritize most-accessed information and actions.' },
      { step: 3, title: 'Core Dashboard Development', description: 'Fleet map, vehicle cards, trip P&L, and alert feed built with iterative manager feedback.' },
      { step: 4, title: 'Actions & Integrations', description: 'Quick actions (assign, approve, message), push notifications, and TMS/GPS backend integration.' },
      { step: 5, title: 'Testing & Rollout', description: 'Test with fleet managers on real devices, refine UX, and organization-wide deployment.' },
      { step: 6, title: 'Post-Launch Support', description: '30-day support with usage monitoring, bug fixes, and feature enhancements.' },
    ],

    benefits: [
      { title: 'Fleet Visibility Anywhere', description: 'Managers are no longer tied to their desks. Full fleet visibility from anywhere  workshops, client meetings, or while commuting.' },
      { title: 'Faster Decisions', description: 'Emergency decisions happen in minutes, not hours. Breakdowns, route deviations, and SLA breaches get instant attention.' },
      { title: 'Proactive Management', description: 'Push alerts for maintenance, compliance, and performance issues mean managers can act before problems escalate.' },
      { title: 'Better Work-Life Balance', description: 'Managers can check fleet status and handle urgent issues from home without spending evenings at the office.' },
      { title: 'Data-Driven Decisions', description: 'Trip P&L and KPI widgets on mobile mean every decision is backed by real data, not gut feel.' },
      { title: 'Competitive Professionalism', description: 'A mobile dashboard app projects a professional, technology-forward image to clients and partners.' },
    ],

    beforeAfter: [
      { before: 'Fleet visibility only at desk  blind when in the field', after: 'Complete fleet visibility on smartphone from anywhere' },
      { before: 'Emergency decisions delayed for hours', after: 'Instant alerts and quick actions from mobile' },
      { before: 'No trip P&L access outside office', after: 'Revenue, cost, and margin visible on mobile per trip' },
      { before: 'Maintenance alerts missed when away from computer', after: 'Push notifications for all critical alerts on phone' },
      { before: 'Must be at desk to assign vehicles or approve maintenance', after: 'Quick actions for assignment, approval, and messaging from mobile' },
      { before: 'KPIs reviewed only in weekly meetings', after: 'Real-time KPI widgets on home screen  always visible' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Workflow Study & Design', duration: '5-7 days', deliverables: ['Manager requirements', 'Mobile UX wireframes', 'Priority features', 'Integration plan'] },
      { phase: 'Core Development', duration: '2-3 weeks', deliverables: ['Fleet map', 'Vehicle cards', 'Trip P&L', 'Alert feed', 'First build'] },
      { phase: 'Actions & Notifications', duration: '1-2 weeks', deliverables: ['Quick actions', 'Push notifications', 'Driver dashboard', 'KPI widgets'] },
      { phase: 'Integration & Testing', duration: '1 week', deliverables: ['TMS/GPS integration', 'End-to-end testing', 'Performance optimization', 'Manager feedback'] },
      { phase: 'Rollout', duration: '1 week', deliverables: ['App deployment', 'Manager training', 'Production release', 'Quick reference card'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Bug fixes', 'Usage analytics', 'Feature refinements', 'Handover'] },
    ],

    whyNexgenReasons: [
      { title: 'Mobile-First Design', description: 'We design the dashboard for mobile from day one  not a desktop dashboard squeezed into a phone screen. Every element optimized for touch and small screens.' },
      { title: 'Manager-Tested UX', description: 'We test every dashboard with actual fleet managers in real field conditions. The interface is shaped by people who use it daily, not office designers.' },
      { title: 'Backend Agnostic', description: 'The dashboard connects to any backend  our TMS, third-party TMS, or standalone GPS providers. We build the integration layer.' },
      { title: 'Quick Deployment', description: 'A fleet manager dashboard can be deployed in 4-6 weeks. Managers start seeing fleet data on their phones within 2 months.' },
    ],

    faq: [
      { question: 'Does it work with our existing TMS?', answer: 'Yes. We build an integration layer that connects to your existing TMS, GPS provider, and other backend systems. The dashboard shows unified data from all sources.' },
      { question: 'Can different managers see different data?', answer: 'Yes. Role-based access control ensures each manager sees only the vehicles, branches, and data they are authorized to view. Branch managers see their fleet; leadership sees everything.' },
      { question: 'Does it work on iPhone?', answer: 'Yes. We build native apps for both Android and iOS. Web dashboard is also available for desktop access.' },
      { question: 'How often does the map update?', answer: 'The map updates in near real-time based on GPS data from your tracking provider. Typical update intervals are 30-60 seconds. You can configure the refresh rate.' },
      { question: 'Can I assign trips from the app?', answer: 'Yes. The quick actions module allows you to assign vehicles to trips, approve maintenance requests, and send messages to drivers  all from the mobile app.' },
      { question: 'How long does deployment take?', answer: 'A fleet manager dashboard with live map, vehicle status, trip P&L, and alerts can be deployed in 4-6 weeks. Adding advanced features like KPI widgets and push notifications adds 1-2 weeks.' },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     CATEGORY 3: WEB DEVELOPMENT & DIGITAL PRESENCE (5 services)
     ═══════════════════════════════════════════════════════════════ */

  'corporate-landing-page': {
    slug: 'corporate-landing-page',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    number: '14',
    title: 'Corporate Landing Page',
    shortDescription: 'Vendor-shortlist-ready single page website with GSTIN, fleet data, coverage map, and RFQ form. Deployed in 3-5 days.',

    heroTagline: 'One page. Corporate ready. Vendor shortlist approved.',
    heroDescription: 'A single-page corporate website designed to pass vendor shortlisting by major Indian corporations. GSTIN display, fleet information, service coverage map, client logos, and an RFQ form  everything a procurement team needs to shortlist you.',

    problemTitle: 'The Problem: You Lose Business Because You Have No Website',
    problemDescription: 'When Tata, Reliance, Amazon, or Flipkart send a vendor shortlisting form, the first thing they ask is your website URL. Without a professional website, you get filtered out before anyone even looks at your fleet size or service quality. A WhatsApp business profile is not enough.',
    problemBullets: [
      'Corporate procurement teams filter vendors without websites  you never make it to the shortlist',
      'GSTIN, PAN, and compliance details need to be publicly displayed for vendor verification',
      'No digital presence means no credibility  clients assume you are a small operator',
      'RFQ inquiries come via phone and WhatsApp  no professional intake process',
      'Competitors with websites get selected over you even if your service is better',
      'No way to showcase fleet strength, service coverage, or client testimonials online',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics operators and transporters who need a professional web presence to pass corporate vendor shortlisting. If you do business with large companies, government bodies, or e-commerce platforms, you need this.',
    audienceSegments: [
      { role: 'Transporters & Fleet Owners', description: 'Who want to qualify for corporate vendor panels but lack a professional website' },
      { role: 'Small & Medium Logistics Companies', description: 'Who need a quick, affordable web presence to start winning corporate business' },
      { role: 'New Logistics Startups', description: 'Who need a credible web presence from day one to win client trust' },
      { role: 'Regional Transporters', description: 'Expanding to national clients who require a website for vendor onboarding' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A single-page website with all the information corporate procurement teams need  company details, GSTIN, fleet overview, service coverage map, client logos, and an RFQ form. Designed for vendor shortlisting, not just looking pretty.',
    whatWeDoItems: [
      'Professional single-page design with company branding, logo, and brand colors',
      'GSTIN, PAN, CIN, and compliance details prominently displayed',
      'Fleet overview section with vehicle types, count, and capacity',
      'Service coverage map showing operational routes and locations',
      'Client logos and testimonial section for credibility',
      'RFQ/inquiry form with email and WhatsApp notification',
    ],

    features: [
      { title: 'Vendor-Ready Layout', description: 'Sections arranged to match what corporate procurement teams look for  company info, compliance, fleet, coverage, clients, and contact. No searching required.' },
      { title: 'GSTIN & Compliance Display', description: 'GSTIN, PAN, CIN, MSME/Udyam registration displayed prominently for instant vendor verification.' },
      { title: 'Fleet Overview Section', description: 'Vehicle types, fleet size, and capacity displayed with clean data visualization. Updated on request as fleet grows.' },
      { title: 'Coverage Map', description: 'Interactive map showing service coverage areas, major routes, and branch locations. Demonstrates operational reach.' },
      { title: 'Client Logo Bar', description: 'Scrolling logo bar of existing clients  instant credibility builder. Corporate procurement teams look for this specifically.' },
      { title: 'RFQ Inquiry Form', description: 'Structured inquiry form that captures all relevant details  origin, destination, commodity, vehicle type, frequency. Notifications via email and WhatsApp.' },
      { title: 'Mobile Responsive', description: 'Looks professional on desktop, tablet, and mobile. Procurement teams often review vendor websites on phones during meetings.' },
      { title: 'Fast Loading', description: 'Optimized for speed  loads in under 3 seconds on mobile networks. No heavy images or animations that slow things down.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Content Collection', description: 'We collect your company details, GSTIN, fleet data, client logos, and photos. A simple questionnaire  you fill it in 30 minutes.' },
      { step: 2, title: 'Design', description: 'Single-page layout designed with your branding. Content placement optimized for vendor shortlisting.' },
      { step: 3, title: 'Development', description: 'Responsive website built with fast loading, SEO meta tags, and RFQ form integration.' },
      { step: 4, title: 'Review & Launch', description: 'You review the site, we make revisions, and launch on your domain.' },
    ],

    benefits: [
      { title: 'Pass Vendor Shortlisting', description: 'A professional website means you make it past the first filter in corporate vendor selection. This alone can win you lakhs in new business.' },
      { title: '3-5 Day Delivery', description: 'From content collection to live website in 3-5 working days. No lengthy project timelines.' },
      { title: 'Professional Credibility', description: 'A well-designed website instantly elevates your brand perception. Clients take you more seriously.' },
      { title: 'RFQ Pipeline', description: 'The inquiry form captures qualified leads while you sleep. No more missed inquiries because someone could not reach you.' },
      { title: 'Google Presence', description: 'Your company appears in Google search results when procurement teams look you up. Control what they find.' },
      { title: 'Foundation for Growth', description: 'A landing page today can grow into a full website tomorrow. The design and content serve as the foundation.' },
    ],

    beforeAfter: [
      { before: 'No website  filtered out of corporate vendor shortlisting', after: 'Professional single-page website passes every vendor verification check' },
      { before: 'GSTIN and compliance details shared manually via email', after: 'All compliance details prominently displayed on the website' },
      { before: 'Clients ask "what is your fleet size?" on every call', after: 'Fleet overview section answers this before they ask' },
      { before: 'No way to showcase existing clients', after: 'Client logo bar builds instant credibility' },
      { before: 'Inquiries come via WhatsApp with incomplete information', after: 'Structured RFQ form captures all required details automatically' },
      { before: 'Nothing shows up when someone Googles your company', after: 'Professional website appears in Google search results' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Content Collection', duration: '1 day', deliverables: ['Content questionnaire filled', 'Logos and photos received', 'Domain details confirmed'] },
      { phase: 'Design', duration: '1 day', deliverables: ['Layout design', 'Brand color application', 'Content placement', 'Desktop + mobile mockup'] },
      { phase: 'Development', duration: '1-2 days', deliverables: ['Responsive website built', 'RFQ form configured', 'SEO meta tags added', 'Speed optimization'] },
      { phase: 'Review & Launch', duration: '1 day', deliverables: ['Client review', 'Revisions completed', 'Domain deployment', 'Go-live'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics-Specific Design', description: 'We design landing pages specifically for logistics companies  we know what procurement teams look for and how to present your information.' },
      { title: 'Fastest Delivery', description: '3-5 working days from content collection to live website. No one else in the market delivers this fast with this quality.' },
      { title: 'Vendor-Shortlist Optimized', description: 'Every section is designed to pass corporate vendor verification. GSTIN, fleet data, coverage, clients  all displayed prominently.' },
      { title: 'Scalable Foundation', description: 'Start with a landing page, upgrade to a full website later. The design and content structure grow with your business.' },
    ],

    faq: [
      { question: 'Do I need to provide my own content?', answer: 'We provide a simple questionnaire that takes about 30 minutes to fill. It covers company details, fleet information, service areas, and client list. We handle the writing and formatting.' },
      { question: 'Can I update the website later?', answer: 'Yes. Minor content updates (phone number, fleet count, new client logo) are included free for 30 days after launch. After that, we charge a small fee per update or you can take a maintenance plan.' },
      { question: 'Do you provide the domain and hosting?', answer: 'We recommend you purchase your own domain (we guide you through it). Hosting is included free for the first year. After that, hosting costs are minimal (around Rs.3,000-5,000/year).' },
      { question: 'Will my website appear in Google search?', answer: 'Yes. We add SEO meta tags, submit your sitemap to Google, and optimize for relevant keywords. Google typically indexes new websites within 1-2 weeks.' },
      { question: 'Can I upgrade to a full website later?', answer: 'Yes. The landing page serves as a foundation. We can add more pages, a blog, and advanced features whenever you are ready. The design remains consistent.' },
      { question: 'How long does it take?', answer: '3-5 working days from the time we receive your content. If you are slow to provide content, the timeline extends accordingly.' },
    ],
  },

  'full-corporate-website': {
    slug: 'full-corporate-website',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    number: '15',
    title: 'Full Corporate Website (Standard)',
    shortDescription: '5-7 page logistics-specific corporate website with SEO, GBP optimization, and LinkedIn integration. Deployed in 7-10 days.',

    heroTagline: 'Your company. Online. Professional. Found.',
    heroDescription: 'A complete corporate website for logistics companies  5-7 pages with About, Services, Fleet, Coverage, Clients, and Contact. Logistics-specific SEO, Google Business Profile optimization, and LinkedIn integration to drive organic inquiries.',

    problemTitle: 'The Problem: A One-Page Website Is Not Enough',
    problemDescription: 'While a landing page gets you past vendor shortlisting, a full corporate website is needed to win the deal. Procurement teams, potential clients, and partners want to see your services in detail, understand your capabilities, read about your team, and verify your credibility. A one-page site cannot provide enough depth.',
    problemBullets: [
      'One page cannot adequately showcase all services, fleet capabilities, and coverage areas',
      'No SEO strategy  your website does not appear when potential clients search for logistics services',
      'Google Business Profile is unoptimized  missing reviews, wrong categories, no posts',
      'LinkedIn presence disconnected from website  no cohesive digital brand',
      'No blog or content section  missing out on organic search traffic',
      'Website looks like a template  does not differentiate from competitors',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Growing Logistics Companies', description: 'Who have outgrown a landing page and need a full web presence to support growth' },
      { role: '3PL & 4PL Operators', description: 'Who need to showcase multiple service lines and client capabilities' },
      { role: 'Regional Players Going National', description: 'Who need to build credibility in new markets through their website' },
      { role: 'Logistics Companies Seeking Funding', description: 'Who need a professional web presence for investor due diligence' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A 5-7 page corporate website with logistics-specific content, SEO optimization, Google Business Profile setup, and LinkedIn integration. Every page designed to convert visitors into inquiries.',
    whatWeDoItems: [
      '5-7 page website  Home, About, Services, Fleet, Coverage, Clients, Contact',
      'Logistics-specific SEO  keywords like "logistics company in [city]", "transport services in India"',
      'Google Business Profile optimization with correct categories, photos, and posts',
      'LinkedIn company page integration  connect website to LinkedIn for professional credibility',
      'Mobile-responsive design optimized for all devices',
      'Inquiry forms with email and WhatsApp notification on every page',
    ],

    features: [
      { title: 'Multi-Page Structure', description: '5-7 pages  Home, About Us, Services, Fleet & Infrastructure, Coverage Area, Clients & Testimonials, Contact. Each page optimized for its specific purpose.' },
      { title: 'Logistics-Specific SEO', description: 'Keyword research for logistics terms, on-page SEO optimization, meta tags, structured data, and sitemap. Target "logistics company" + location-based searches.' },
      { title: 'Google Business Profile', description: 'GBP optimization  correct business categories, service areas, operating hours, photos, and regular posts. Google Maps visibility included.' },
      { title: 'LinkedIn Integration', description: 'LinkedIn company page link, "Follow Us" button, employee profiles, and case study cross-posting. Builds professional credibility.' },
      { title: 'Mobile Responsive', description: 'Every page tested on mobile, tablet, and desktop. Logistics clients often browse on phones between operations.' },
      { title: 'Inquiry Forms', description: 'Contact forms on every page with relevant fields. Notifications via email and WhatsApp to ensure no inquiry is missed.' },
      { title: 'Performance Optimized', description: 'Fast loading (under 3 seconds), lazy-loaded images, and optimized code. Google PageSpeed score of 90+.' },
      { title: 'Analytics Setup', description: 'Google Analytics and Search Console integration. Track visitors, inquiries, and search performance from day one.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Content & Brand Audit', description: 'Collect company information, brand assets, photos, and content requirements. SEO keyword research.' },
      { step: 2, title: 'Design & Content', description: 'Page layouts, content writing for each page, and design mockups for review.' },
      { step: 3, title: 'Development', description: 'Website built with all pages, forms, SEO meta tags, and responsive design.' },
      { step: 4, title: 'GBP & LinkedIn Setup', description: 'Google Business Profile optimization and LinkedIn company page integration.' },
      { step: 5, title: 'Review & Launch', description: 'Client review, revisions, domain deployment, analytics setup, and go-live.' },
    ],

    benefits: [
      { title: 'Organic Inquiry Pipeline', description: 'SEO + GBP + LinkedIn create a system that generates inquiries without paid advertising. Invest once, benefit for years.' },
      { title: 'Win More Corporate Deals', description: 'A detailed, professional website gives procurement teams confidence in your capabilities. Higher conversion rate on vendor shortlisting.' },
      { title: 'Google Maps Visibility', description: 'Optimized GBP means your company appears when potential clients search "logistics company near me" on Google Maps.' },
      { title: 'Professional Brand Image', description: 'Multi-page website with detailed content positions you as a serious, established player  not a small operator.' },
      { title: 'LinkedIn Credibility', description: 'Connected website and LinkedIn presence builds trust with B2B clients who research vendors online.' },
      { title: 'Measurable Results', description: 'Google Analytics and Search Console show exactly how many visitors, inquiries, and search impressions your website generates.' },
    ],

    beforeAfter: [
      { before: 'One page cannot show all services and capabilities in detail', after: '5-7 pages with comprehensive service descriptions, fleet details, and coverage' },
      { before: 'Website does not appear in Google search results', after: 'SEO-optimized website ranks for logistics-specific keywords in your area' },
      { before: 'Google Business Profile is incomplete or non-existent', after: 'Fully optimized GBP with correct categories, photos, and regular posts' },
      { before: 'LinkedIn and website are disconnected', after: 'Integrated web presence  website, LinkedIn, and GBP work together' },
      { before: 'No analytics  do not know if anyone visits the website', after: 'Google Analytics tracks visitors, inquiries, and search performance' },
      { before: 'No content marketing  missing organic traffic', after: 'Blog-ready structure for future content marketing and organic growth' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Content & Research', duration: '2-3 days', deliverables: ['Content questionnaire', 'Keyword research', 'Competitor analysis', 'Brand assets received'] },
      { phase: 'Design & Content Writing', duration: '2-3 days', deliverables: ['Page layouts', 'Content for all pages', 'Design mockups', 'Client review'] },
      { phase: 'Development', duration: '2-3 days', deliverables: ['All pages built', 'Forms configured', 'SEO meta tags', 'Responsive testing'] },
      { phase: 'GBP & LinkedIn', duration: '1 day', deliverables: ['GBP optimization', 'LinkedIn integration', 'Analytics setup', 'Search Console submission'] },
      { phase: 'Launch', duration: '1 day', deliverables: ['Final review', 'Revisions', 'Domain deployment', 'Go-live'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics SEO Specialists', description: 'We understand logistics search terms  "transport services in Mumbai", "warehouse in Delhi NCR", "freight forwarding India". Our SEO targets real buyer intent, not generic traffic.' },
      { title: '7-10 Day Delivery', description: 'A full corporate website delivered in 7-10 working days. No month-long projects with endless revision cycles.' },
      { title: 'GBP Expertise', description: 'We have optimized Google Business Profiles for 50+ logistics companies. We know the categories, keywords, and posting strategies that drive Maps visibility.' },
      { title: 'Complete Digital Presence', description: 'We do not just build a website  we create a connected digital presence across website, Google, and LinkedIn.' },
    ],

    faq: [
      { question: 'How many pages does the standard website include?', answer: 'The standard package includes 5-7 pages: Home, About Us, Services, Fleet & Infrastructure, Coverage Area, Clients & Testimonials, and Contact. Additional pages can be added at extra cost.' },
      { question: 'Do you write the content for all pages?', answer: 'Yes. We write logistics-specific content for every page based on the information you provide in our content questionnaire. The content is SEO-optimized and written in a professional tone.' },
      { question: 'What SEO keywords do you target?', answer: 'We target logistics-specific keywords based on your location and services  for example, "logistics company in [your city]", "transport services India", "warehouse management [your area]", and "freight forwarding near me".' },
      { question: 'Do you set up Google Analytics?', answer: 'Yes. We set up Google Analytics 4 and Google Search Console. You get a dashboard showing visitors, page views, inquiry form submissions, and search performance.' },
      { question: 'Can I update the website content myself?', answer: 'Yes. We build the website on a modern CMS that allows you to update text, images, and add new pages. We provide a 1-hour training session and documentation.' },
      { question: 'How long does the whole process take?', answer: '7-10 working days from the time we receive all content and brand assets. Faster if you provide content quickly.' },
    ],
  },

  'premium-corporate-website': {
    slug: 'premium-corporate-website',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    number: '16',
    title: 'Premium Corporate Website',
    shortDescription: '12-15 page enterprise website with case studies, capability deck PDF, blog, advanced SEO, and 3-month support. For established logistics companies.',

    heroTagline: 'Enterprise-grade web presence. Built for leaders.',
    heroDescription: 'A premium corporate website for established logistics companies that need to project enterprise-level credibility. 12-15 pages, case studies, downloadable capability deck PDF, blog with content marketing, advanced SEO, and 3 months of post-launch support.',

    problemTitle: 'The Problem: Your Website Does Not Match Your Company Stature',
    problemDescription: 'Your company has grown  500+ vehicles, multiple branches, blue-chip clients. But your website still looks like it was built 5 years ago by a freelancer. When potential clients visit your site, they do not see the company you have become. Your competitors with better websites win deals despite having inferior service.',
    problemBullets: [
      'Current website looks outdated  does not reflect the company you have become',
      'No case studies or data-driven proof of capability  only claims, no evidence',
      'No downloadable resources  capability deck, brochures, or service documents',
      'No blog or content section  missing organic search traffic and thought leadership',
      'SEO is basic  not ranking for competitive logistics keywords',
      'No lead capture or marketing automation  visitors leave without converting',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Established Logistics Companies', description: 'With 100+ vehicles, multiple branches, and blue-chip clients who need an enterprise-grade web presence' },
      { role: 'Companies Seeking Funding', description: 'Who need a premium website for investor due diligence and fundraising' },
      { role: 'Logistics Companies Expanding Internationally', description: 'Who need a world-class website to compete with global logistics brands' },
      { role: 'Market Leaders', description: 'Who want their website to match their market position and differentiate from smaller competitors' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A 12-15 page enterprise website with case studies, downloadable capability deck, blog platform, advanced SEO, lead capture forms, and 3 months of post-launch support including content updates.',
    whatWeDoItems: [
      '12-15 page enterprise website with custom design and advanced interactions',
      '3-5 case studies with real data, challenges, solutions, and measurable results',
      'Downloadable capability deck PDF with company overview, fleet details, and client list',
      'Blog platform with content marketing setup and 3-month content calendar',
      'Advanced SEO  competitive keyword targeting, technical SEO, and backlink strategy',
      'Lead capture with marketing automation  visitor tracking, lead scoring, and nurturing workflows',
    ],

    features: [
      { title: 'Enterprise Page Structure', description: '12-15 pages including Home, About, Leadership Team, Services, Industries Served, Fleet, Technology, Case Studies, Coverage, Blog, Resources, and Contact.' },
      { title: 'Case Studies Section', description: '3-5 detailed case studies with client challenge, our solution, implementation approach, and quantified results. Downloadable as PDF.' },
      { title: 'Capability Deck PDF', description: 'Professional PDF brochure with company overview, fleet details, service descriptions, coverage map, and client logos. Downloadable from the website.' },
      { title: 'Blog Platform', description: 'Full blog with categories, tags, search, social sharing, and newsletter subscription. Ready for content marketing from day one.' },
      { title: 'Advanced SEO', description: 'Competitive keyword research, technical SEO audit, schema markup, backlink strategy, and monthly SEO reports for 3 months.' },
      { title: 'Lead Capture & Automation', description: 'Smart forms with progressive profiling, lead scoring, and email nurturing workflows. Convert visitors into qualified leads.' },
      { title: 'Custom Interactions', description: 'Scroll animations, video backgrounds, interactive maps, fleet counters, and premium visual effects that communicate enterprise quality.' },
      { title: '3-Month Support', description: 'Post-launch support includes content updates (up to 5 per month), bug fixes, performance monitoring, and monthly analytics reports.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Brand & Content Deep Dive', description: 'Comprehensive content collection, brand guidelines, competitor analysis, and user journey mapping.' },
      { step: 2, title: 'UX Design', description: 'Custom wireframes, user flows, and visual design for all 12-15 pages. Premium interactions planned.' },
      { step: 3, title: 'Content Creation', description: 'Professional copywriting for all pages, case studies, capability deck, and initial blog posts.' },
      { step: 4, title: 'Development', description: 'Website built with advanced features, custom interactions, SEO optimization, and lead capture.' },
      { step: 5, title: 'SEO & Marketing Setup', description: 'Advanced SEO configuration, Google Analytics 4, Search Console, backlink strategy, and lead nurturing workflows.' },
      { step: 6, title: 'Launch & Support', duration: '3 months', description: 'Final launch, 3 months of priority support, and performance reporting.', deliverables: ['Go-live', 'Content updates', 'Performance monitoring', 'Monthly reports'] },
    ],

    benefits: [
      { title: 'Enterprise Credibility', description: 'A premium website positions you alongside the biggest logistics companies in India. Clients and investors take you seriously.' },
      { title: 'Data-Driven Case Studies', description: 'Real case studies with quantified results are the most powerful sales tool. They convert skeptical prospects into confident clients.' },
      { title: 'Organic Lead Generation', description: 'Blog + SEO + lead capture creates a system that generates qualified leads without paid advertising.' },
      { title: 'Investor-Ready', description: 'Professional website with detailed case studies, leadership profiles, and capability deck passes investor due diligence.' },
      { title: 'Competitive Differentiation', description: 'When a prospect compares 3 vendors on a shortlist, your website tips the balance in your favor.' },
      { title: 'Content Marketing Foundation', description: 'Blog platform with content calendar means you build organic search traffic month over month.' },
    ],

    beforeAfter: [
      { before: 'Website looks outdated  5 years old, built by a freelancer', after: 'Premium enterprise website with custom design and advanced interactions' },
      { before: 'No case studies  only claims about service quality', after: '3-5 data-driven case studies with measurable results' },
      { before: 'No downloadable resources  clients ask for brochures manually', after: 'Capability deck PDF and resources available for instant download' },
      { before: 'No blog  zero organic search traffic', after: 'Blog platform with content marketing generating organic leads' },
      { before: 'Basic SEO  not ranking for competitive keywords', after: 'Advanced SEO targeting competitive logistics keywords with monthly reporting' },
      { before: 'Visitors leave without converting', after: 'Lead capture with progressive profiling and nurturing workflows' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Brand & Content Deep Dive', duration: '5-7 days', deliverables: ['Content inventory', 'Brand guidelines', 'Competitor analysis', 'User journey map'] },
      { phase: 'UX Design', duration: '5-7 days', deliverables: ['Wireframes for all pages', 'Visual design', 'Interaction specifications', 'Client review'] },
      { phase: 'Content Creation', duration: '5-7 days', deliverables: ['All page copy', '3-5 case studies', 'Capability deck PDF', 'Initial blog posts'] },
      { phase: 'Development', duration: '5-7 days', deliverables: ['All pages built', 'Interactions', 'Forms', 'SEO optimization', 'Blog platform'] },
      { phase: 'SEO & Marketing Setup', duration: '3-5 days', deliverables: ['Advanced SEO config', 'Analytics setup', 'Lead workflows', 'Backlink strategy'] },
      { phase: 'Launch', duration: '2-3 days', deliverables: ['Final review', 'Revisions', 'Go-live', 'Training'] },
      { phase: '3-Month Support', duration: '3 months', deliverables: ['Monthly content updates', 'Bug fixes', 'Analytics reports', 'SEO monitoring'] },
    ],

    whyNexgenReasons: [
      { title: 'Enterprise Design Capability', description: 'We build websites that look like they belong to billion-dollar companies. Custom design, not templates. Premium interactions, not basic pages.' },
      { title: 'Logistics Content Expertise', description: 'We write logistics content that resonates with procurement teams  the right terminology, the right pain points, the right proof points.' },
      { title: 'Case Study Methodology', description: 'We use the STAR framework (Situation, Task, Action, Result) for case studies that convince, not just inform.' },
      { title: '3-Month Partnership', description: 'We do not disappear after launch. 3 months of support, content updates, and monthly performance reports.' },
    ],

    faq: [
      { question: 'How many pages does the premium website include?', answer: '12-15 pages: Home, About Us, Leadership Team, Services (individual pages for major services), Industries Served, Fleet & Infrastructure, Technology Stack, Case Studies, Coverage Area, Blog, Resources, and Contact.' },
      { question: 'Do you write the case studies?', answer: 'Yes. We interview your team, gather data, and write professional case studies using the STAR framework. Each case study includes challenge, solution, approach, and quantified results.' },
      { question: 'What is included in the 3-month support?', answer: 'Up to 5 content updates per month, bug fixes, performance monitoring, monthly analytics reports, and SEO monitoring. Additional development work is quoted separately.' },
      { question: 'Can I add more case studies later?', answer: 'Yes. The case study template is reusable. You can add new case studies yourself through the CMS or have us write them for you.' },
      { question: 'How long does the premium website take?', answer: '12-15 working days from content collection to go-live, plus 3 months of post-launch support. The initial build is faster because we work in parallel on design, content, and development.' },
      { question: 'Do you set up the blog content calendar?', answer: 'Yes. We create a 3-month content calendar with topic suggestions, keyword targets, and publishing schedule. We also write 3-5 initial blog posts to get you started.' },
    ],
  },

  'ecommerce-logistics': {
    slug: 'ecommerce-logistics',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    number: '17',
    title: 'E-Commerce for Logistics',
    shortDescription: 'Online freight booking platform with rate calculator, document upload, payment gateway, and order tracking for logistics companies.',

    heroTagline: 'Book freight online. Like e-commerce. But for logistics.',
    heroDescription: 'An e-commerce platform for logistics services  clients can check rates, book shipments, upload documents, make payments, and track orders online. Eliminate the phone-based booking process and give clients a self-service digital experience.',

    problemTitle: 'The Problem: Freight Booking Still Happens Over the Phone',
    problemDescription: 'Despite being in the digital age, most Indian logistics companies still book freight over the phone. Clients call, negotiate rates, send documents via WhatsApp, and follow up for status. This manual process is slow, error-prone, and does not scale. Younger clients expect to book online like they order from Amazon.',
    problemBullets: [
      'Freight booking requires phone calls  slow, error-prone, and limited to business hours',
      'Rate negotiation is manual  no transparency, no instant quotes, no comparison',
      'Documents exchanged via WhatsApp  unorganized, lost frequently, no audit trail',
      'No online payment  clients must pay by NEFT/cheque, payment tracking is manual',
      'No self-service tracking  clients call for every status update',
      'Booking process does not scale  adding more clients means adding more phone lines',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: '3PL & 4PL Operators', description: 'Who want to offer online booking to their B2B and B2C clients' },
      { role: 'Express Delivery Companies', description: 'Where instant booking and real-time tracking are competitive necessities' },
      { role: 'Freight Forwarders', description: 'Who want to digitize the booking process for their shipper network' },
      { role: 'Logistics Aggregators', description: 'Building multi-carrier platforms with online booking and payment' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A full e-commerce platform for logistics services with online rate calculation, booking, document management, payment gateway integration, and order tracking.',
    whatWeDoItems: [
      'Online rate calculator  enter origin, destination, weight, get instant rate',
      'Booking flow  select service, enter details, upload documents, confirm booking',
      'Payment gateway integration  pay online via credit card, UPI, or net banking',
      'Document management  upload and manage shipping documents online',
      'Order tracking  real-time status updates with milestone notifications',
      'Admin dashboard  manage bookings, payments, and customer accounts',
    ],

    features: [
      { title: 'Rate Calculator', description: 'Clients enter origin, destination, weight, and dimensions  get instant rate quotes based on your rate cards. Supports multiple service types and delivery speeds.' },
      { title: 'Booking Flow', description: 'Multi-step booking wizard  select service, enter shipper/consignee details, schedule pickup, upload documents, and confirm. Email confirmation with booking ID.' },
      { title: 'Payment Gateway', description: 'Integration with Razorpay, PayU, or any Indian payment gateway. Credit card, debit card, UPI, net banking, and wallet payments supported.' },
      { title: 'Document Upload', description: 'Upload shipping documents  invoice, packing list, declaration  during booking or after. All documents organized by booking and accessible anytime.' },
      { title: 'Order Tracking', description: 'Real-time tracking page with status timeline, map view, and estimated delivery. Push notifications for key milestones.' },
      { title: 'Customer Accounts', description: 'Client registration with address book, booking history, saved preferences, and invoice download. Reduces re-entry for repeat customers.' },
      { title: 'Admin Dashboard', description: 'Manage bookings, view revenue, process refunds, manage rate cards, and handle customer support  all from one dashboard.' },
      { title: 'Invoice & Receipt', description: 'Automatic invoice and payment receipt generation. GST-compliant with all required fields. Downloadable as PDF.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Requirements & Rate Card Setup', description: 'Define booking flow, rate card structure, payment requirements, and document types.' },
      { step: 2, title: 'Platform Design', description: 'UX design for booking flow, rate calculator, tracking page, and customer dashboard.' },
      { step: 3, title: 'Core Development', description: 'Rate calculator, booking engine, customer accounts, and admin dashboard.' },
      { step: 4, title: 'Payments & Documents', description: 'Payment gateway integration, document management, and invoice generation.' },
      { step: 5, title: 'Tracking & Notifications', description: 'Order tracking page, push notifications, email updates, and SMS integration.' },
      { step: 6, title: 'Testing & Launch', description: 'End-to-end testing, payment gateway testing, and production deployment.' },
    ],

    benefits: [
      { title: '50% Fewer Phone Bookings', description: 'Clients book online instead of calling. Your operations team focuses on fulfillment, not taking orders.' },
      { title: '24/7 Booking Capability', description: 'Clients can book anytime  nights, weekends, holidays. No business hours limitation.' },
      { title: 'Instant Rate Transparency', description: 'Clients see rates before booking  no negotiation, no surprises. Builds trust and reduces booking friction.' },
      { title: 'Faster Payments', description: 'Online payment means no waiting for NEFT/cheque. Cash flow improves immediately.' },
      { title: 'Scalable Operations', description: 'Handle 10 bookings or 10,000 bookings with the same platform and team size.' },
      { title: 'Professional Client Experience', description: 'Online booking, tracking, and payment give clients an Amazon-like experience. Competitive differentiator.' },
    ],

    beforeAfter: [
      { before: 'Freight booking over the phone during business hours only', after: 'Clients book online 24/7 with instant rate calculation' },
      { before: 'Rate negotiation takes 15-30 minutes per call', after: 'Instant rate display  client sees the price and books in 2 minutes' },
      { before: 'Documents shared via WhatsApp  lost and disorganized', after: 'All documents uploaded and organized by booking  accessible anytime' },
      { before: 'Payment by NEFT/cheque  manual tracking, delayed realization', after: 'Online payment via credit card, UPI, or net banking  instant confirmation' },
      { before: 'Clients call for status updates on every shipment', after: 'Self-service tracking page with real-time updates and notifications' },
      { before: 'Cannot handle more than 50 bookings/day manually', after: 'Platform handles unlimited bookings automatically' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Requirements & Design', duration: '7-10 days', deliverables: ['Booking flow definition', 'Rate card structure', 'UX wireframes', 'Visual design'] },
      { phase: 'Core Development', duration: '3-4 weeks', deliverables: ['Rate calculator', 'Booking engine', 'Customer accounts', 'Admin dashboard'] },
      { phase: 'Payments & Integration', duration: '2-3 weeks', deliverables: ['Payment gateway', 'Document management', 'Invoice system', 'Notification service'] },
      { phase: 'Testing & Launch', duration: '1-2 weeks', deliverables: ['End-to-end testing', 'Payment testing', 'Security audit', 'Go-live'] },
      { phase: 'Post-Launch Support', duration: '60 days', deliverables: ['Bug fixes', 'Performance optimization', 'Minor enhancements', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics E-Commerce Specialists', description: 'We understand logistics rate cards, document types, GST invoicing, and the specific requirements of freight booking. We do not build generic e-commerce.' },
      { title: 'Rate Card Engine', description: 'Our rate calculator handles complex logistics pricing  lane-based, weight-slab, vehicle-type, and service-level variations.' },
      { title: 'Payment Gateway Experience', description: 'We have integrated Razorpay, PayU, CCAvenue, and other Indian payment gateways for logistics companies. We know the compliance requirements.' },
      { title: 'Scalable Architecture', description: 'Our e-commerce platform handles growth from 100 to 100,000 bookings per month without rebuilding.' },
    ],

    faq: [
      { question: 'Can the rate calculator handle complex pricing?', answer: 'Yes. Our rate calculator supports lane-based pricing, weight slabs, vehicle-type variations, service-level premiums, fuel surcharges, and any custom pricing rules you need.' },
      { question: 'Which payment gateways do you integrate with?', answer: 'We integrate with all major Indian payment gateways  Razorpay, PayU, CCAvenue, Cashfree, and PhonePe. We recommend based on your transaction volume and requirements.' },
      { question: 'Can clients track their shipments online?', answer: 'Yes. The platform includes a tracking page where clients enter their booking ID or AWB number and see real-time status with a visual timeline and map view.' },
      { question: 'How do we manage rate cards?', answer: 'The admin dashboard includes a rate card management module where you can add, edit, and deactivate rates. Rate changes take effect immediately or on a specified date.' },
      { question: 'Can we offer COD (Cash on Delivery)?', answer: 'Yes. COD can be enabled as a payment option for B2C shipments. The platform tracks COD collections and reconciliation.' },
      { question: 'How long does an e-commerce platform take to build?', answer: 'A full e-commerce platform with rate calculator, booking, payments, tracking, and admin dashboard takes 6-10 weeks depending on complexity.' },
    ],
  },

  'multitenant-saas-platform': {
    slug: 'multitenant-saas-platform',
    category: 'web-digital',
    categoryLabel: 'Web & Digital',
    number: '18',
    title: 'Multi-tenant SaaS Platform (Web)',
    shortDescription: 'White-label logistics SaaS platform with multi-tenant architecture, subscription billing, and client management for productized logistics software.',

    heroTagline: 'Your software. As a service. For every client.',
    heroDescription: 'A multi-tenant SaaS platform that lets you offer your logistics software as a service to multiple clients. White-labeled, subscription-based, with client onboarding, usage tracking, and automated billing  everything you need to run a logistics SaaS business.',

    problemTitle: 'The Problem: Custom Software Cannot Scale to Multiple Clients',
    problemDescription: 'You have built great logistics software for your own operations. Now you want to offer it to other companies as a paid service. But your current system is single-tenant  every new client requires a separate deployment, separate database, and separate maintenance. Scaling to 10, 50, or 100 clients is impossible without a multi-tenant architecture.',
    problemBullets: [
      'Current system is single-tenant  each new client needs separate deployment and database',
      'No client self-service onboarding  every setup requires manual configuration by your team',
      'No subscription billing  collecting payments from multiple clients is manual and error-prone',
      'No usage tracking  cannot measure how much each client uses the platform',
      'No white-labeling  every client sees your branding instead of their own',
      'Scaling to multiple clients requires proportional increase in infrastructure and team',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceSegments: [
      { role: 'Logistics Software Companies', description: 'Who want to productize their custom software and sell it as SaaS' },
      { role: 'Technology-Forward Logistics Operators', description: 'Who have built internal tools and want to commercialize them' },
      { role: 'Logistics SaaS Startups', description: 'Building a multi-tenant SaaS product for the logistics market' },
      { role: 'Logistics Associations', description: 'Who want to offer software as a benefit to their member network' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'A complete multi-tenant SaaS platform with client isolation, self-service onboarding, subscription billing, usage analytics, and white-labeling  everything needed to run a logistics SaaS business.',
    whatWeDoItems: [
      'Multi-tenant architecture with complete data isolation between clients',
      'Self-service client onboarding  sign up, configure, and start using within minutes',
      'Subscription billing with automated invoicing, payment collection, and dunning',
      'White-labeling  each client sees their own branding, logo, and domain',
      'Usage analytics  track how much each client uses the platform, by feature',
      'Admin dashboard  manage clients, plans, billing, and platform health',
    ],

    features: [
      { title: 'Multi-Tenant Architecture', description: 'Shared infrastructure with complete data isolation. Each client has their own database schema, user roles, and configuration. Zero risk of data cross-contamination.' },
      { title: 'Self-Service Onboarding', description: 'New clients sign up, configure their account, set up users, and start using the platform  all without manual intervention from your team.' },
      { title: 'Subscription Billing', description: 'Monthly/annual subscription plans with automated invoicing, payment collection via payment gateway, and dunning for failed payments.' },
      { title: 'White-Labeling', description: 'Each client sees their own branding  logo, colors, domain, and email templates. Your brand is invisible to end users.' },
      { title: 'Usage Analytics', description: 'Track feature usage, API calls, storage, and user activity per client. Identify power users, at-risk clients, and upsell opportunities.' },
      { title: 'Plan Management', description: 'Define multiple plans (Basic, Pro, Enterprise) with different feature sets, usage limits, and pricing. Clients can upgrade/downgrade self-service.' },
      { title: 'Admin Dashboard', description: 'Central management  client accounts, billing, support tickets, platform health, and revenue analytics. Everything in one dashboard.' },
      { title: 'API & Integrations', description: 'Open API for client integrations, webhooks for event notifications, and pre-built connectors for common logistics tools.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoSteps: [
      { step: 1, title: 'Product Strategy', description: 'Define target market, pricing model, feature tiers, and go-to-market strategy.' },
      { step: 2, title: 'Architecture Design', description: 'Multi-tenant database design, authentication system, billing integration, and white-labeling framework.' },
      { step: 3, title: 'Platform Development', description: 'Core platform with multi-tenant infrastructure, client onboarding, and admin dashboard.' },
      { step: 4, title: 'Billing & Analytics', description: 'Subscription billing, payment gateway integration, usage tracking, and analytics dashboards.' },
      { step: 5, title: 'White-Label & Branding', description: 'Custom branding system, domain mapping, email template customization, and client preview.' },
      { step: 6, title: 'Testing & Launch', description: 'Multi-client testing, security audit, performance testing, and production deployment.' },
    ],

    benefits: [
      { title: 'Infinite Scalability', description: 'Add 1,000 clients with the same infrastructure that supports 10. Multi-tenant architecture scales linearly.' },
      { title: 'Zero Manual Onboarding', description: 'Clients sign up and configure themselves. Your team does not need to provision databases, set up instances, or create accounts.' },
      { title: 'Automated Revenue Collection', description: 'Subscription billing with automatic invoicing and payment collection. No manual follow-ups for monthly payments.' },
      { title: 'White-Label Professionalism', description: 'Each client sees their own brand. They feel like they own the software, increasing retention and willingness to pay.' },
      { title: 'Data-Driven Growth', description: 'Usage analytics show which features drive engagement, which clients are at risk, and where to invest in product development.' },
      { title: 'Recurring Revenue Model', description: 'SaaS subscription model creates predictable, recurring revenue. Higher valuations and more attractive to investors.' },
    ],

    beforeAfter: [
      { before: 'Each client needs separate deployment  scaling is manual and expensive', after: 'Multi-tenant platform scales infinitely with shared infrastructure' },
      { before: 'Client onboarding takes 2-5 days of manual configuration', after: 'Clients sign up and start using the platform in under 10 minutes' },
      { before: 'Collecting monthly payments from 20 clients takes a full day', after: 'Automated billing collects payments without manual intervention' },
      { before: 'Every client sees your branding  no customization', after: 'White-labeling gives each client their own branded experience' },
      { before: 'No visibility into how clients use the platform', after: 'Usage analytics show feature usage, engagement, and churn risk per client' },
      { before: 'Revenue is unpredictable  project-based', after: 'Recurring subscription revenue with predictable monthly cash flow' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Product Strategy', duration: '5-7 days', deliverables: ['Market definition', 'Pricing model', 'Feature tiers', 'Go-to-market plan'] },
      { phase: 'Architecture Design', duration: '7-10 days', deliverables: ['Multi-tenant database design', 'Auth system', 'Billing framework', 'White-label architecture'] },
      { phase: 'Core Platform', duration: '4-6 weeks', deliverables: ['Multi-tenant infrastructure', 'Client onboarding', 'Admin dashboard', 'User management'] },
      { phase: 'Billing & Analytics', duration: '2-3 weeks', deliverables: ['Subscription billing', 'Payment gateway', 'Usage tracking', 'Analytics dashboards'] },
      { phase: 'White-Label & Polish', duration: '2-3 weeks', deliverables: ['Branding system', 'Domain mapping', 'Email templates', 'Client preview'] },
      { phase: 'Testing & Launch', duration: '2-3 weeks', deliverables: ['Multi-client testing', 'Security audit', 'Performance testing', 'Go-live'] },
      { phase: 'Post-Launch Support', duration: '90 days', deliverables: ['Bug fixes', 'Performance optimization', 'Feature additions', 'Monthly reviews'] },
    ],

    whyNexgenReasons: [
      { title: 'Multi-Tenant Specialists', description: 'We have built multi-tenant SaaS platforms for logistics companies. We understand data isolation, tenant provisioning, and the specific challenges of SaaS in the Indian market.' },
      { title: 'Indian Payment Integration', description: 'We integrate with Indian payment gateways, handle GST invoicing for SaaS subscriptions, and support Indian pricing models (monthly, annual, per-user).' },
      { title: 'Scalable Architecture', description: 'Our multi-tenant architecture is built on cloud-native principles  auto-scaling, zero-downtime deployments, and 99.9% uptime SLA.' },
      { title: 'Product Strategy Consulting', description: 'We do not just build the platform  we help you define the product, pricing, and go-to-market strategy based on our experience with logistics SaaS.' },
    ],

    faq: [
      { question: 'What is multi-tenant architecture?', answer: 'Multi-tenant means multiple clients share the same infrastructure (servers, application code) but have completely isolated data. Think of it like an apartment building  shared structure, private apartments.' },
      { question: 'Can each client have their own domain?', answer: 'Yes. Each client can map their own domain (e.g., app.clientcompany.com or logistics.clientcompany.com). The platform serves their branded experience on their domain.' },
      { question: 'How does subscription billing work?', answer: 'You define subscription plans with pricing and features. Clients choose a plan and pay monthly or annually. The platform generates invoices, collects payments via payment gateway, and handles renewals automatically.' },
      { question: 'Is the data truly isolated between clients?', answer: 'Yes. Each tenant has a completely separate database schema. Data is isolated at the database level, not just the application level. Even a database administrator cannot access client data without explicit authorization.' },
      { question: 'Can I offer different feature sets to different plans?', answer: 'Yes. The plan management system supports feature gating  different plans can have different features, usage limits, and API access levels. Clients can upgrade/downgrade self-service.' },
      { question: 'How long does it take to build a SaaS platform?', answer: 'A full multi-tenant SaaS platform with billing, white-labeling, and analytics takes 12-16 weeks. An MVP with core features can be launched in 8-10 weeks.' },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     CATEGORY 4: AI & AUTOMATION (7 services)
     ═══════════════════════════════════════════════════════════════ */

  'whatsapp-shipment-tracking-bot': {
    slug: 'whatsapp-shipment-tracking-bot',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    number: '19',
    title: 'WhatsApp Shipment Tracking Bot',
    shortDescription: 'Customer sends Order ID via WhatsApp, bot replies with real-time ETA, status, and POD. Deflects 60-80% of tracking calls from your customer service team.',

    heroTagline: 'Track shipments on WhatsApp. No calls. No wait.',
    heroDescription: 'A WhatsApp-powered shipment tracking bot that connects directly to your TMS or operations system. Customers send their Order ID or consignment number and receive instant updates on shipment status, estimated delivery time, and proof of delivery  all through WhatsApp, India\'s most-used messaging platform.',

    problemTitle: 'The Problem: Your Team Answers 200+ Tracking Calls Daily',
    problemDescription: 'Customer service teams in Indian logistics companies spend 60-70% of their time answering one repetitive question: where is my shipment? These calls consume valuable resources, create hold times during peak hours, and deliver inconsistent information. Outside business hours, customers have no way to check status, leading to frustration and churn.',
    problemBullets: [
      'Customer service team spends 60-70% of their day answering tracking status queries  time that should go to resolving actual issues',
      'During peak hours, customers wait 5-10 minutes on hold just to ask "where is my shipment?"',
      'Different agents give different status information based on what system they check and how they interpret data',
      'No 24/7 tracking capability  customers are helpless outside 9 AM to 7 PM business hours',
      'Cost per tracking call is Rs.50-100 when you factor in agent salary, phone system, and management overhead',
      'Customer satisfaction drops with every unanswered call and every inconsistent status update',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies receiving 50 or more tracking calls daily, or whose customer service team spends more than half their time on status queries. If your CSAT is suffering because of long hold times and inconsistent answers, this bot eliminates the problem at the root.',
    audienceSegments: [
      { role: '3PL Operators', description: 'Handling tracking for multiple clients with different SLAs and reporting requirements' },
      { role: 'E-Commerce Logistics Providers', description: 'Serving B2C customers who expect instant, always-on tracking like Amazon and Flipkart' },
      { role: 'Express & Parcel Delivery Companies', description: 'Where instant tracking is a competitive necessity and customer expectation' },
      { role: 'Customer Service Heads', description: 'Who want to reduce call volume, improve CSAT, and redeploy agents to higher-value work' },
      { role: 'Freight Forwarders', description: 'Managing multi-modal shipments where status queries come from both clients and consignees' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a WhatsApp bot connected to your TMS or operations system that understands natural language queries and responds with real-time shipment data. The bot handles the repetitive tracking workload so your team can focus on exceptions and escalations.',
    whatWeDoItems: [
      'WhatsApp Business API integration with your official business number and branded messaging templates',
      'Natural language understanding that handles variations  "track", "status", "where is", "delivery update", "POD" in English, Hindi, and Hinglish',
      'Real-time data pull from your TMS, ERP, or GPS tracking system for live shipment status',
      'Automated ETA calculation based on current location, remaining distance, and historical transit times',
      'Proof of Delivery delivery  automatically sends POD photo and e-signature when shipment is delivered',
      'Seamless human escalation with full conversation context when the bot cannot answer a query',
    ],

    features: [
      { title: 'WhatsApp Business API Integration', description: 'Official Meta WhatsApp Business API with your company number, branded templates, and session management. No green tick hacks or personal number workarounds.' },
      { title: 'Natural Language Understanding', description: 'Understands query variations  "track my order", "status ABC123", "where is my shipment", "delivery update for CN456". Handles typos and mixed Hindi-English naturally.' },
      { title: 'Real-Time TMS Integration', description: 'Connected directly to your TMS, ERP, or GPS provider via REST API. Data is live, not cached. Status updates reflect within minutes of actual changes.' },
      { title: 'ETA Calculation Engine', description: 'Predicts delivery date and time based on current GPS location, remaining distance, route conditions, and historical transit time data for that lane.' },
      { title: 'POD Auto-Delivery', description: 'When a shipment is marked delivered, the bot proactively sends the POD photo, e-signature, delivery time, and receiver name to the customer on WhatsApp.' },
      { title: 'Human Escalation Protocol', description: 'When the bot cannot answer (complex query, complaint, damage report), it seamlessly transfers to a human agent with the full conversation context preserved.' },
      { title: 'Multi-Language Support', description: 'Handles queries in English, Hindi, Hinglish, and can be trained for regional languages like Tamil, Telugu, Bengali, and Marathi.' },
      { title: 'Analytics Dashboard', description: 'Track query volume, resolution rate, escalation rate, average response time, peak hours, and customer satisfaction scores. Identify trends and improve the bot continuously.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We connect to your existing operations system, train the bot on your shipment data structure, test with real customer queries, and deploy with monitoring and optimization.',
    howWeDoSteps: [
      { step: 1, title: 'System Integration & Data Mapping', description: 'Connect to your TMS or ERP via API, map shipment fields (order ID, status, location, ETA), and configure real-time data pull intervals.' },
      { step: 2, title: 'Bot Development & NLP Training', description: 'Build conversation flows, train natural language understanding on your common query patterns, and handle edge cases like partial IDs and typos.' },
      { step: 3, title: 'WhatsApp Business API Setup', description: 'Configure WhatsApp Business API, set up branded message templates, test delivery to Indian mobile numbers, and implement rate limiting.' },
      { step: 4, title: 'Human Escalation Workflow', description: 'Configure escalation triggers, build agent handoff protocol with conversation context, and test the full human-bot-handoff-human loop.' },
      { step: 5, title: 'Testing with Real Queries', description: 'Test with 200+ real customer queries covering all shipment statuses, edge cases, error scenarios, and multi-language inputs.' },
      { step: 6, title: 'Launch, Monitor & Optimize', description: 'Deploy to production, monitor for 30 days, analyze query patterns, retrain NLP model based on actual usage data, and optimize response templates.' },
    ],

    benefits: [
      { title: '60-80% Call Deflection', description: 'The bot handles the majority of tracking queries automatically. Your customer service team focuses on complaints, damage claims, and relationship management  not "where is my truck?"' },
      { title: 'Instant Response  Under 3 Seconds', description: 'Customers get status updates in under 3 seconds versus 5-10 minutes on hold. WhatsApp is the channel they prefer, so satisfaction goes up even before they see the answer.' },
      { title: '24/7 Availability', description: 'The bot works at 3 AM on Sundays and national holidays. No staffing required. Customers in different time zones or with urgent shipments always get answers.' },
      { title: 'Cost Reduction of Rs.3-6 Lakh Monthly', description: 'At Rs.50-100 per tracking call, deflecting 200+ calls daily saves Rs.3-6 lakh per month in customer service costs. The bot pays for itself in 1-2 months.' },
      { title: 'Consistent Information Every Time', description: 'Same data source, same response format, every query. No more "agent A said delivered, agent B said in transit" situations that destroy customer trust.' },
      { title: 'Preferred Channel  WhatsApp', description: 'India has 500+ million WhatsApp users. Customers prefer messaging over calling. Meeting them on WhatsApp improves engagement and satisfaction.' },
    ],

    beforeAfter: [
      { before: 'Customer service answers 200+ tracking calls daily', after: 'Bot handles 60-80% automatically  team focuses on real issues' },
      { before: 'Customers wait 5-10 minutes on hold during peak hours', after: 'Instant WhatsApp response in under 3 seconds, no hold time' },
      { before: 'No tracking available outside 9 AM - 7 PM business hours', after: '24/7 WhatsApp bot available at any time, any day' },
      { before: 'Different agents give different status information', after: 'Single data source delivers consistent, accurate information every time' },
      { before: 'Rs.3-6 lakh per month spent on tracking call handling', after: 'Fraction of the cost with higher customer satisfaction' },
      { before: 'Phone calls  the channel customers least prefer', after: 'WhatsApp  the channel 500M+ Indians prefer and use daily' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Integration & Data Mapping', duration: '3-5 days', deliverables: ['TMS/ERP API connection', 'Shipment data field mapping', 'Real-time data pull configuration', 'Test data validation'] },
      { phase: 'Bot Development & Training', duration: '5-7 days', deliverables: ['Conversation flow design', 'NLP model training', 'Multi-language support', 'Error handling logic'] },
      { phase: 'WhatsApp API Setup', duration: '3-5 days', deliverables: ['WhatsApp Business API configuration', 'Branded message templates', 'Rate limiting setup', 'Delivery testing'] },
      { phase: 'Escalation & Testing', duration: '3-5 days', deliverables: ['Human escalation workflow', '200+ real query testing', 'Edge case handling', 'Performance benchmarking'] },
      { phase: 'Launch & Monitoring', duration: '1-2 days', deliverables: ['Production deployment', 'Analytics dashboard', 'Team training on escalations', 'Go-live'] },
      { phase: 'Optimization Period', duration: '30 days', deliverables: ['Query pattern analysis', 'NLP model refinement', 'Response template optimization', 'Monthly performance report'] },
    ],

    whyNexgenReasons: [
      { title: '20+ WhatsApp Bot Deployments', description: 'We have built and deployed WhatsApp bots for 20+ logistics companies in India. Our NLP models are pre-trained on logistics-specific query patterns, not generic chatbot templates.' },
      { title: 'TMS Integration Ready', description: 'Pre-built API connectors for popular TMS platforms used in India. Custom integrations for any system with a REST API  built at no extra cost.' },
      { title: 'Quick 2-3 Week Deployment', description: 'Unlike enterprise solutions that take 3-6 months, our WhatsApp tracking bot can be live in 2-3 weeks because we build on proven patterns and pre-tested components.' },
      { title: 'Indian Language Training', description: 'Our NLP models are trained specifically on Hindi, English, and Hinglish as used in Indian logistics  not translated from English templates.' },
    ],

    faq: [
      { question: 'Does it use the official WhatsApp Business API?', answer: 'Yes. We use the official Meta WhatsApp Business API  no hacks, no personal number workarounds, no third-party scrapers. Your messages are delivered through Meta\'s infrastructure with full delivery and read receipts.' },
      { question: 'What TMS systems can you integrate with?', answer: 'Any system with a REST API. We have pre-built connectors for popular TMS platforms used in India. If your TMS has an API, we will connect to it. Custom API development is included in the scope at no extra cost.' },
      { question: 'What happens when the bot cannot answer a question?', answer: 'The bot detects when it cannot confidently answer (complex complaint, damage report, rate inquiry) and seamlessly transfers the conversation to a human agent with full context  what the customer asked, what data was found, and the conversation history.' },
      { question: 'How much does the WhatsApp API cost?', answer: 'WhatsApp Business API charges Rs.0.50-0.75 per business-initiated conversation. Customer-initiated conversations (customer messages you first) are free for a 24-hour window. Most tracking queries fall under the free category since customers initiate them.' },
      { question: 'Can it handle queries in Hindi and regional languages?', answer: 'Yes. The bot handles English, Hindi, and Hinglish out of the box. Regional language support (Tamil, Telugu, Bengali, Marathi) can be added during development based on your customer demographics.' },
      { question: 'How long does deployment take?', answer: 'Standard deployment is 2-3 weeks from kickoff to go-live. Complex integrations with custom TMS systems or multi-language requirements may take 3-4 weeks. We provide a fixed timeline in our proposal before starting.' },
    ],
  },

  'lead-crm-automation': {
    slug: 'lead-crm-automation',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    number: '20',
    title: 'Lead CRM & Follow-up Automation',
    shortDescription: 'Multi-channel lead capture, instant auto-reply, automated follow-up sequences, lead scoring, and pipeline dashboard for logistics companies.',

    heroTagline: 'Never miss a lead. Every follow-up. Automated.',
    heroDescription: 'A lead management and CRM system built for the Indian logistics sales cycle. Capture leads from website, WhatsApp, phone calls, and trade shows. Auto-reply within 60 seconds. Execute follow-up sequences across channels. Score leads by quality. Track every interaction in a visual pipeline dashboard.',

    problemTitle: 'The Problem: Leads Fall Through the Cracks Every Day',
    problemDescription: 'Indian logistics companies generate leads from multiple channels  website enquiries, WhatsApp messages, phone calls, trade shows, and referrals. Without a unified system, leads get scattered across personal phones, Excel sheets, and WhatsApp chats. The average response time is 4-8 hours. Follow-ups are inconsistent. High-value leads get the same treatment as tyre-kickers. The result is a 5-10% conversion rate when it should be 20-30%.',
    problemBullets: [
      'Leads captured in different places  website forms go to email, WhatsApp enquiries stay in chat, phone leads in diaries. No single source of truth.',
      'Average response time of 4-8 hours  research shows leads contacted within 5 minutes are 21x more likely to convert',
      'Follow-ups are inconsistent  some leads get 3 calls, others get zero. Depends entirely on which salesperson picks it up.',
      'No lead scoring  a Fortune 500 logistics enquiry and a student project enquiry get the same attention and priority',
      'No pipeline visibility  the founder cannot see how many leads are in each stage, forecast revenue, or identify bottlenecks',
      'Sales data lives in personal Excel sheets  when a salesperson leaves, their pipeline and relationship history leave with them',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies receiving 10 or more enquiries per week who want to convert more leads with less manual effort. If your sales process depends on individual discipline rather than system-enforced follow-up, this CRM fixes that permanently.',
    audienceSegments: [
      { role: 'Business Development Teams', description: 'Who need a structured pipeline to manage 50-500+ leads across different stages and channels' },
      { role: 'Founders & CEOs', description: 'Who want to ensure every lead is captured, followed up, and tracked without relying on individual memory' },
      { role: 'Marketing Teams', description: 'Who need to connect campaign spend to actual pipeline conversion and revenue attribution' },
      { role: 'Sales Managers', description: 'Who need visibility into team activity, conversion rates, and pipeline forecasting' },
      { role: 'Freight Brokerage Teams', description: 'Where leads come in fast and the window to respond and convert is measured in hours, not days' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a lead CRM system that captures every enquiry from every channel, responds instantly, follows up systematically, scores leads by quality, and gives you complete pipeline visibility. Designed specifically for the 2-6 month sales cycle typical in Indian logistics.',
    whatWeDoItems: [
      'Multi-channel lead capture from website forms, WhatsApp, phone calls, trade shows, and referral links',
      'Instant auto-reply within 60 seconds via WhatsApp and email  acknowledging the enquiry and setting expectations',
      'Automated follow-up sequences: Day 1 WhatsApp, Day 3 email, Day 5 phone call reminder  fully configurable per lead type',
      'Lead scoring engine that ranks leads by source, company size, annual freight spend, and engagement level',
      'Visual pipeline dashboard with drag-and-drop deal management, conversion tracking, and revenue forecasting',
      'Team activity tracking  every call, email, meeting, and WhatsApp conversation logged automatically',
    ],

    features: [
      { title: 'Multi-Channel Lead Capture', description: 'Website forms, WhatsApp messages, phone call logs, trade show badge scans, and referral links  all flow into a single, unified pipeline. No lead is ever lost to a channel silo.' },
      { title: 'Instant Auto-Reply', description: 'Within 60 seconds of enquiry, the lead receives a personalized WhatsApp message and email acknowledging their enquiry, introducing the assigned salesperson, and setting response expectations.' },
      { title: 'Automated Follow-Up Sequences', description: 'Configurable multi-touch sequences across WhatsApp, email, and phone. Day 1: acknowledgement. Day 3: value proposition. Day 5: case study. Day 7: phone call. Customize timing, channel, and content per lead type.' },
      { title: 'Lead Scoring Engine', description: 'Automatically scores leads 1-100 based on source (website organic > cold outreach), company size, estimated freight spend, engagement (opened emails, clicked links), and explicit signals (requested proposal, asked for demo).' },
      { title: 'Visual Pipeline Dashboard', description: 'Kanban-style pipeline with drag-and-drop deal management. Stages: New → Contacted → Qualified → Proposal → Negotiation → Won/Lost. Forecast revenue based on stage and probability.' },
      { title: 'Team Management & Activity Tracking', description: 'Assign leads to team members, track every interaction (calls, emails, meetings, WhatsApp), set activity KPIs, and identify top performers. No more "I called them" without proof.' },
      { title: 'Conversion Analytics', description: 'Track conversion by lead source, industry vertical, geography, deal size, and sales cycle length. Identify which channels and lead types produce the highest ROI.' },
      { title: 'WhatsApp Integration', description: 'Send follow-up messages and proposals directly through WhatsApp from the CRM. Track opens, responses, and engagement. Template library for common outreach scenarios.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We map your current lead flow from capture to conversion, configure the CRM stages and sequences, integrate all channels, and train your team. The system enforces the process  discipline is built in.',
    howWeDoSteps: [
      { step: 1, title: 'Lead Flow Mapping', description: 'Document every lead source, current response process, follow-up cadence, qualification criteria, and sales stages. Identify where leads fall through the cracks.' },
      { step: 2, title: 'CRM Configuration', description: 'Configure pipeline stages, lead scoring rules, follow-up sequences, user roles, and permissions. Match your actual sales process, not a generic template.' },
      { step: 3, title: 'Channel Integration', description: 'Connect website forms, WhatsApp Business API, email (Gmail/Outlook), phone system, and any other lead sources. Test data flow end-to-end.' },
      { step: 4, title: 'Auto-Reply & Sequence Setup', description: 'Configure auto-reply templates, build follow-up sequences for each lead type (logistics enquiry, freight quote, partnership, job application), and test timing.' },
      { step: 5, title: 'Dashboard & Reports', description: 'Build pipeline dashboard, conversion reports, team activity reports, and revenue forecast views. Set up automated daily/weekly email summaries for management.' },
      { step: 6, title: 'Training & Go-Live', description: 'Hands-on team training, data migration from existing Excel/CRM, parallel run period, and 30-day post-launch optimization.' },
    ],

    benefits: [
      { title: 'Zero Missed Leads', description: 'Every enquiry from every channel flows into one pipeline. No lead is lost to a WhatsApp chat that someone forgot about or an email that went to spam.' },
      { title: '60-Second Response Time', description: 'Auto-reply fires within 60 seconds  10x faster than the 4-8 hour average. Research shows this alone can increase conversion by 30-50%.' },
      { title: '3x Follow-Up Consistency', description: 'Automated sequences ensure every lead gets followed up according to the cadence you define. No lead gets 5 calls while another gets zero.' },
      { title: 'Data-Driven Pipeline Forecasting', description: 'See exactly how many leads are in each stage, what revenue is in the pipeline, and what your likely conversion will be this quarter. No more guessing.' },
      { title: '2-3x Higher Conversion Rate', description: 'Systematic follow-up, instant response, and lead prioritization typically improve conversion from 5-10% to 15-25% for logistics companies.' },
      { title: 'Team Accountability', description: 'Every interaction is logged. You can see who called which lead, when, and what was discussed. Sales performance becomes measurable and improvable.' },
    ],

    beforeAfter: [
      { before: 'Leads scattered across WhatsApp, email, Excel, and personal diaries', after: 'Single unified pipeline with every lead from every channel in one view' },
      { before: '4-8 hour average response time to new enquiries', after: '60-second automated WhatsApp and email acknowledgement' },
      { before: 'Follow-ups depend on individual discipline  inconsistent and unreliable', after: 'Automated sequences for every lead type  consistent and systematic' },
      { before: 'No visibility into pipeline  founder asks "how\'s sales going?" and gets shrugs', after: 'Dashboard shows every lead, stage, value, and probability with revenue forecast' },
      { before: 'No way to know which lead sources produce the best conversions', after: 'Conversion analytics by source, industry, geography, and deal size' },
      { before: 'When salesperson leaves, their pipeline and context go with them', after: 'All interaction history stays in the system  anyone can pick up where they left off' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Discovery & Flow Mapping', duration: '3-5 days', deliverables: ['Lead source inventory', 'Current process documentation', 'Pipeline stage definition', 'Scoring rules'] },
      { phase: 'Channel Integration', duration: '3-5 days', deliverables: ['Website form integration', 'WhatsApp API connection', 'Email integration', 'Phone call logging'] },
      { phase: 'CRM Build & Configuration', duration: '5-7 days', deliverables: ['Pipeline stages', 'Lead scoring engine', 'Follow-up sequences', 'Auto-reply templates'] },
      { phase: 'Dashboard & Reports', duration: '3-5 days', deliverables: ['Pipeline dashboard', 'Conversion analytics', 'Team activity reports', 'Revenue forecast'] },
      { phase: 'Testing & Training', duration: '3-5 days', deliverables: ['End-to-end testing', 'Team training sessions', 'Data migration', 'Parallel run'] },
      { phase: 'Go-Live & Optimization', duration: '30 days', deliverables: ['Production deployment', 'Performance monitoring', 'Sequence optimization', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Built for Logistics Sales Cycles', description: 'Indian logistics deals take 2-6 months. Our CRM is designed for this reality  not the 7-day SaaS sales cycle that generic CRMs are built for. Stages, sequences, and scoring reflect how logistics sales actually work.' },
      { title: 'WhatsApp at the Center', description: 'WhatsApp is where Indian logistics leads live. Our CRM has WhatsApp auto-reply, follow-up, and tracking built in  not bolted on as an afterthought.' },
      { title: 'No Per-User License Fees', description: 'Pay once, unlimited users. Unlike Salesforce (Rs.10,000+/user/year) or HubSpot, there are no recurring per-seat costs that punish you for growing your team.' },
      { title: 'Quick 3-4 Week Deployment', description: 'Most CRM implementations take 3-6 months. We deploy in 3-4 weeks because we build on proven patterns specific to logistics lead management.' },
    ],

    faq: [
      { question: 'Does it integrate with WhatsApp Business?', answer: 'Yes. We use the WhatsApp Business API for auto-replies, follow-up sequences, and tracking. All WhatsApp conversations are logged in the lead record. Your team can send messages and proposals directly from the CRM through WhatsApp.' },
      { question: 'Can I customize follow-up sequences?', answer: 'Absolutely. You define the timing, channel (WhatsApp, email, phone), and content for every sequence. Different lead types (freight enquiry, partnership request, job application) can have completely different sequences.' },
      { question: 'Does this replace our existing CRM (Salesforce, Zoho)?', answer: 'For most Indian logistics companies, yes. Our CRM has all the features you actually use  pipeline, follow-up, scoring, reporting  without the complexity, training overhead, and per-user fees of enterprise CRM. If you need to keep Salesforce for other functions, we integrate with it instead.' },
      { question: 'Can I track individual sales team performance?', answer: 'Yes. Every call, email, WhatsApp message, and meeting is logged against the salesperson and lead. You can see activity per person, conversion rates, average deal size, and pipeline value per team member.' },
      { question: 'How long does deployment take?', answer: 'Standard deployment is 3-4 weeks from kickoff to go-live. This includes all integrations, configuration, training, and data migration. Simple implementations can be done in 2 weeks.' },
      { question: 'Are there ongoing per-user fees?', answer: 'No. You pay a one-time development cost. There are no per-user monthly license fees. Optional annual maintenance covers bug fixes, updates, and priority support starting at 15% of project cost.' },
    ],
  },
  'ai-freight-quotation-engine': {
    slug: 'ai-freight-quotation-engine',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    number: '21',
    title: 'AI Freight Quotation Engine',
    shortDescription: 'Rate card-based auto-quoting with margin protection, founder approval via WhatsApp, branded PDF auto-send, and conversion analytics.',

    heroTagline: 'Instant quotes. Protected margins. Happy clients.',
    heroDescription: 'An AI-powered freight quotation engine that generates accurate quotes in seconds from your rate cards. Enforces minimum margin rules, routes high-value quotes to founders for WhatsApp approval, and sends professional branded PDFs to clients automatically.',

    problemTitle: 'The Problem: Quoting Takes Hours and Silently Kills Margins',
    problemDescription: 'In Indian logistics, the difference between winning and losing a client often comes down to quote speed. Most companies take 30 minutes to 2 hours to generate a freight quotation  manually looking up rate cards, calculating surcharges, applying discounts, and formatting the document. In the rush to respond fast, sales teams under-cut margins without realizing it. There is no approval workflow, no margin tracking, and no way to know which quotes convert and which do not.',
    problemBullets: [
      'Manual quotation takes 30 minutes to 2 hours per enquiry  clients go to faster competitors while you are still calculating',
      'Rate card look-up is error-prone  wrong lane rate, forgotten surcharge, outdated seasonal pricing applied',
      'No margin protection  sales teams under-cut to win deals, sometimes quoting below cost on complex multi-stop routes',
      'No approval workflow  junior salespeople can quote Rs.50 lakh annual contracts without any oversight',
      'Quote documents are manually created in Word  inconsistent branding, missing terms, and unprofessional presentation',
      'No quote-to-conversion analytics  you cannot tell which pricing strategies win deals and which lose them',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies receiving 10 or more quotation requests daily, especially those where the founder or senior management needs to approve high-value quotes. If margin leakage from under-cutting is silently eating your profits, this engine stops it.',
    audienceSegments: [
      { role: 'Sales Teams', description: 'Who want to respond faster to client enquiries with professional, accurate quotes' },
      { role: 'Business Owners & Founders', description: 'Who want margin protection, approval control on large quotes, and visibility into pricing decisions' },
      { role: 'Pricing Managers', description: 'Who want rate card discipline enforced and seasonal or volume-based pricing rules applied consistently' },
      { role: '3PL Operators', description: 'Quoting for multiple clients with different rate cards, service levels, and contractual terms' },
      { role: 'Freight Forwarders', description: 'Dealing with complex multi-leg, multi-mode quotations that are nearly impossible to calculate manually' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a freight quotation engine that digitizes your rate cards, applies pricing rules automatically, enforces minimum margins, routes quotes requiring approval to decision-makers via WhatsApp, and sends branded PDF proposals to clients.',
    whatWeDoItems: [
      'Rate card engine supporting lane-based, client-based, vehicle-type, and weight-slab pricing with effective date ranges',
      'Instant quote generation in under 5 seconds from enquiry input  origin, destination, weight, vehicle type, service level',
      'Margin protection with configurable minimum margin rules per product type, lane category, and client tier',
      'WhatsApp approval workflow  quotes above a threshold are sent to the founder for one-tap approve or reject',
      'Professional branded PDF generation with your logo, terms and conditions, validity period, and bank details',
      'Analytics dashboard tracking quote volume, conversion rate, average margin, and win/loss analysis by lane and client',
    ],

    features: [
      { title: 'Rate Card Engine', description: 'Supports unlimited rate cards with lane-level, client-level, vehicle-type, and weight-slab pricing. Handles base rates, per-km charges, fixed charges, surcharges, and seasonal adjustments with effective date ranges.' },
      { title: 'Instant Quote Generation', description: 'Enter origin, destination, weight, vehicle type, and service level  get a complete quote in under 5 seconds with all charges itemized. No manual lookups, no calculation errors.' },
      { title: 'Margin Protection Rules', description: 'Configure minimum margin percentages by lane category, service type, and client tier. Quotes below the threshold are blocked or flagged for approval. Cannot be bypassed by sales team.' },
      { title: 'WhatsApp Approval Workflow', description: 'Quotes above a configurable value threshold are sent to the founder or authorized approver via WhatsApp. One-tap approve or reject. Approved quotes are automatically sent to the client.' },
      { title: 'Branded PDF Auto-Generation', description: 'Professional quotation PDF with your company logo, itemized charges, terms and conditions, validity period, bank details, and authorized signatory. Consistent branding on every quote.' },
      { title: 'Conversion Analytics', description: 'Track which quotes convert, which get lost, average margin on won deals, and time-to-conversion. Analyze by lane, client, salesperson, and pricing strategy to optimize your approach.' },
      { title: 'Client-Specific Pricing', description: 'Different rate cards for different clients with contractual rates, volume discounts, and special terms. The system automatically applies the correct pricing based on client identity.' },
      { title: 'Version History & Audit Trail', description: 'Every quote version is saved with who created it, what rates were applied, and what margins were calculated. Full audit trail for pricing decisions and client negotiations.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We digitize all your rate cards, build the pricing engine with margin protection rules, connect WhatsApp approval, design PDF templates, and deploy with analytics.',
    howWeDoSteps: [
      { step: 1, title: 'Rate Card Digitization', description: 'Convert all your rate cards  lane rates, client rates, vehicle-type rates, weight slabs, surcharges, seasonal adjustments  into structured digital format with effective date ranges.' },
      { step: 2, title: 'Pricing Engine Development', description: 'Build the quotation engine with all pricing rules, margin calculations, approval thresholds, and client-specific overrides. Test with your actual historical quotations.' },
      { step: 3, title: 'WhatsApp Approval Integration', description: 'Configure WhatsApp Business API, build approval notification flow, implement one-tap approve/reject, and set up escalation if approver does not respond within a time limit.' },
      { step: 4, title: 'PDF Template & Delivery', description: 'Design branded PDF template matching your current format, configure auto-send via email and WhatsApp, and set up quote validity tracking.' },
      { step: 5, title: 'Analytics Dashboard', description: 'Build quote volume, conversion rate, margin analysis, and win/loss dashboards. Set up automated weekly/monthly reports for management review.' },
      { step: 6, title: 'Testing & Launch', description: 'Validate against 100+ historical quotes, team training, parallel run with existing process, and go-live with 30-day monitoring.' },
    ],

    benefits: [
      { title: '5-Second Quote Generation', description: 'What takes 30 minutes to 2 hours manually now happens in under 5 seconds. Respond to client enquiries before your competitors even start calculating.' },
      { title: 'Margin Protection on Every Quote', description: 'Minimum margin rules enforced automatically. No more under-cutting below cost. Founders have full visibility and approval control on high-value quotes.' },
      { title: 'Founder Control from Anywhere', description: 'Approve or reject high-value quotes from WhatsApp  in a meeting, at the airport, or at home. No need to open a laptop or call the sales team.' },
      { title: 'Consistent Professional Branding', description: 'Every quote looks the same  professional PDF with your branding, terms, and bank details. No more Word document quotes with inconsistent formatting.' },
      { title: 'Data-Driven Pricing Optimization', description: 'Analytics show which pricing strategies win deals, which lanes have margin leakage, and which clients negotiate hardest. Use data to price smarter.' },
      { title: 'Higher Win Rate Through Speed', description: 'In logistics, the first professional quote often wins. Responding in 5 seconds versus 2 hours dramatically improves your win rate on competitive enquiries.' },
    ],

    beforeAfter: [
      { before: '30 minutes to 2 hours per quotation', after: '5 seconds per quotation with complete itemization' },
      { before: 'Margins silently under-cut to win deals', after: 'Minimum margin rules enforced  cannot quote below threshold' },
      { before: 'No approval workflow  junior staff quote Rs.50L contracts', after: 'WhatsApp approval required for quotes above configurable threshold' },
      { before: 'Inconsistent Word document quotes with varying formats', after: 'Professional branded PDF with consistent layout every time' },
      { before: 'No idea which pricing strategies win or lose deals', after: 'Conversion analytics show win rate, margin, and time-to-close by strategy' },
      { before: 'Rate card errors from manual lookups', after: 'Automated rate application eliminates lookup errors and outdated pricing' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Rate Card Digitization', duration: '5-7 days', deliverables: ['All rate cards digitized', 'Margin rules configured', 'Client pricing mapped', 'Validation against historical quotes'] },
      { phase: 'Pricing Engine', duration: '2-3 weeks', deliverables: ['Quotation engine', 'Pricing logic', 'Margin protection', 'Approval thresholds'] },
      { phase: 'WhatsApp & PDF', duration: '1-2 weeks', deliverables: ['WhatsApp approval flow', 'PDF template design', 'Auto-send configuration', 'Branding'] },
      { phase: 'Analytics & Testing', duration: '1-2 weeks', deliverables: ['Conversion analytics dashboard', '100+ quote validation', 'Performance testing', 'Edge cases'] },
      { phase: 'Launch & Monitoring', duration: '30 days', deliverables: ['Team training', 'Production deployment', 'Performance monitoring', 'Monthly optimization report'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics Pricing Specialists', description: 'We understand lane-based pricing, weight slabs, detention charges, multi-stop calculations, and the 20+ variables that go into a freight quote. Generic quoting tools cannot handle this complexity.' },
      { title: 'Margin Protection by Design', description: 'Unlike tools that just speed up quoting, our engine actively protects your margins. This is a pricing governance tool, not just a speed tool.' },
      { title: 'WhatsApp Approval  Indian Market Fit', description: 'Indian business owners live on WhatsApp. Receiving and approving quotes via WhatsApp  not logging into a dashboard  is how Indian logistics decision-makers actually work.' },
      { title: 'Quick 4-6 Week Deployment', description: 'Proven patterns from 15+ quotation engine deployments. We digitize your rate cards in days, not weeks, and have the engine generating validated quotes fast.' },
    ],

    faq: [
      { question: 'How does margin protection work?', answer: 'You set minimum margin percentages by lane category, service type, and client tier. When a quote falls below the threshold, it is either blocked from being sent or routed to an approver via WhatsApp. The sales team cannot bypass this  it is enforced at the system level.' },
      { question: 'Can we have different approval authority levels?', answer: 'Yes. You can set multiple approval tiers  for example, quotes under Rs.1L are auto-approved, Rs.1-5L require senior manager approval, and above Rs.5L require founder approval. Each tier has its own WhatsApp notification and approval workflow.' },
      { question: 'Does it handle client-specific rate cards?', answer: 'Absolutely. You can upload different rate cards per client  contractual rates, volume discounts, special terms. The system automatically detects the client and applies their specific pricing. You can also have a default rate card for new clients.' },
      { question: 'What about seasonal or festival surcharges?', answer: 'Yes. The rate card engine supports time-bound surcharges with start and end dates. For example, you can add a 15% surcharge during Diwali season or monsoon months that automatically activates and deactivates on the dates you set.' },
      { question: 'How long does it take to deploy?', answer: 'Standard deployment is 4-6 weeks. Simple implementations with standardized rate cards can be done in 3 weeks. The main variable is the complexity of your rate card structure  if you have 50+ client-specific rate cards, it takes a bit longer to digitize.' },
    ],
  },

  'business-intelligence-dashboard': {
    slug: 'business-intelligence-dashboard',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    number: '22',
    title: 'Business Intelligence & MIS Dashboard',
    shortDescription: 'Revenue analytics, operational KPIs, cash flow forecasting, route profitability, and board-meeting-ready MIS reports for logistics management.',

    heroTagline: 'Every metric. One dashboard. Zero guesswork.',
    heroDescription: 'A Business Intelligence dashboard that aggregates data from your TMS, billing system, GPS trackers, and accounting software into a single real-time view. Revenue by route and client, operational KPIs, cost analytics, cash flow forecasting, and one-click MIS report generation for board meetings.',

    problemTitle: 'The Problem: Management Decisions Based on 2-Week-Old Data',
    problemDescription: 'Most Indian logistics companies take 5-7 days at the start of every month to compile management reports. Data lives in 5+ systems  TMS for trips, Tally for accounting, GPS provider for tracking, Excel for costing, and WhatsApp for customer communication. By the time reports are ready, the data is 2-3 weeks old. Management makes million-rupee decisions based on gut feel because real-time data is unavailable.',
    problemBullets: [
      'Month-end reporting takes 5-7 days of manual data compilation from TMS, Tally, GPS, and Excel sheets',
      'No real-time operational KPIs  on-time delivery percentage, fleet utilization, and trip completion rates are unknown until month-end',
      'No route-level profitability analysis  you cannot tell which lanes make money and which drain margins',
      'Cash flow is a surprise  you discover receivables pile-ups and payment delays only when the bank account runs low',
      'No management MIS  board meetings and investor reviews use manually created PowerPoint decks with questionable data accuracy',
      'No single source of truth  every department has its own version of the numbers',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics company owners, CFOs, and senior management who need real-time visibility into business performance. If you are making decisions based on month-end reports that take a week to compile, this dashboard gives you the data the moment it is created.',
    audienceSegments: [
      { role: 'CEOs & Founders', description: 'Who need real-time visibility into revenue, profitability, and growth without asking their team for reports' },
      { role: 'CFOs & Finance Heads', description: 'Who need accurate cash flow forecasting, receivables tracking, and route-level profitability analysis' },
      { role: 'COOs & Operations Directors', description: 'Who need operational KPIs  on-time delivery, fleet utilization, trip completion rates  updated in real-time' },
      { role: 'Investors & Board Members', description: 'Who need professional, data-backed MIS reports for quarterly reviews and governance meetings' },
      { role: 'Branch Heads', description: 'Who need to compare their branch performance against targets and other locations' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a BI dashboard that connects to all your data sources  TMS, billing, GPS, accounting  and presents management-level KPIs in real-time. No manual data compilation. No Excel exports. One dashboard for the entire business.',
    whatWeDoItems: [
      'Data aggregation from TMS, billing system, GPS provider, accounting software (Tally), and any REST API source',
      'Revenue dashboard with breakdowns by route, client, vehicle type, service, and branch with period-over-period comparison',
      'Operational KPI dashboard  on-time delivery %, fleet utilization %, trip completion rate, average transit time',
      'Cost analytics  cost per km by vehicle and route, fuel efficiency trends, maintenance cost tracking',
      'Cash flow dashboard with 30/60/90-day receivables forecast and working capital visibility',
      'One-click MIS report generation in PDF and Excel  board-meeting ready with your logo and branding',
    ],

    features: [
      { title: 'Revenue Analytics Dashboard', description: 'Total revenue, revenue by route, by client, by vehicle type, by service category, and by branch. Period comparison (this month vs last month, this year vs last year). Drill-down from summary to individual trip level.' },
      { title: 'Operational KPI Dashboard', description: 'On-time delivery percentage, fleet utilization, trip completion rate, average transit time, vehicle downtime, and driver performance metrics. Updated in real-time or hourly from source systems.' },
      { title: 'Cost Analytics', description: 'Cost per km by vehicle and route, fuel cost trends, maintenance cost tracking, toll and expense analysis. Identify cost spikes and anomalies before they become problems.' },
      { title: 'Cash Flow & Receivables', description: 'Receivables aging analysis (0-30, 30-60, 60-90, 90+ days), payables tracking, working capital position, and 30/60/90-day cash flow forecast. No more cash flow surprises.' },
      { title: 'Route Profitability Analysis', description: 'Per-lane revenue, cost, and margin with red/green indicators. Identify your most profitable lanes and the ones losing money. Data-driven decisions on which routes to push, renegotiate, or drop.' },
      { title: 'Client Analytics', description: 'Revenue by client, profitability by client, volume trends, payment behavior (fast payers vs slow payers), and client lifetime value. Know which clients grow your business and which drain it.' },
      { title: 'Fleet & Driver Performance', description: 'Vehicle-level and driver-level KPIs  trips completed, revenue generated, fuel efficiency, on-time performance, and idle time. Data for performance reviews and fleet optimization decisions.' },
      { title: 'One-Click MIS Export', description: 'Generate board-meeting-ready PDF and Excel reports with one click. Branded with your logo, covering revenue, profitability, operations, and outlook. Automated monthly report scheduling available.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We map all your data sources, build automated data pipelines, design dashboards around your management KPIs, and generate MIS report templates matching your board presentation format.',
    howWeDoSteps: [
      { step: 1, title: 'Data Source Mapping', description: 'Identify all data sources  TMS, billing, GPS, Tally, Excel  and map available fields, update frequency, and access methods (API, database, file export).' },
      { step: 2, title: 'ETL Pipeline Development', description: 'Build automated data pipelines that extract from all sources, transform into a unified format, and load into a lightweight data warehouse. Schedule refresh intervals per source.' },
      { step: 3, title: 'Dashboard Design with Management', description: 'Work with you to define the key KPIs, layout, and drill-down paths. Design dashboards that answer the questions you actually ask  not generic metrics.' },
      { step: 4, title: 'Dashboard Development', description: 'Build all dashboards  revenue, operations, cost, cash flow, route profitability, client analytics, fleet performance  with real-time or near-real-time data refresh.' },
      { step: 5, title: 'MIS Report Templates', description: 'Design board-meeting-ready PDF and Excel templates matching your current presentation format. One-click generation with scheduled monthly automation.' },
      { step: 6, title: 'Deployment & Training', description: 'Deploy dashboards, train management team, set up automated report scheduling, and provide 30-day post-launch support with dashboard refinements.' },
    ],

    benefits: [
      { title: 'Real-Time Decision Making', description: 'Current data, not 2-week-old reports. See revenue, profitability, and operational KPIs as they happen. Make decisions based on what is true now, not what was true last month.' },
      { title: '5-Minute Month-End Reporting', description: 'What takes 5-7 days of manual compilation now happens automatically. Your MIS is ready the morning after month-end with one click.' },
      { title: 'Route Profitability Visibility', description: 'Know exactly which lanes are profitable and which are losing money. Data-driven decisions on route pricing, volume allocation, and lane discontinuation.' },
      { title: 'Cash Flow Control', description: '30/60/90-day receivables forecast means no more cash flow surprises. You can see payment bottlenecks before they become crises.' },
      { title: 'Professional Board Presentations', description: 'One-click MIS reports with your branding. Consistent format, accurate data, and professional presentation for investors, board members, and bank relationships.' },
      { title: 'Zero Manual Data Effort', description: 'Automated pipelines pull data from all systems on schedule. No manual Excel exports, no copy-pasting, no compilation errors.' },
    ],

    beforeAfter: [
      { before: '5-7 days of manual data compilation for month-end reports', after: 'Real-time dashboards available 24/7  month-end MIS ready in 5 minutes' },
      { before: 'Data scattered across 5+ systems with no single source of truth', after: 'One aggregated dashboard with data from all systems unified' },
      { before: 'No route profitability data  gut-feel decisions on pricing and routes', after: 'Per-lane P&L with green/red indicators showing exactly what makes and loses money' },
      { before: 'Cash flow surprises when receivables pile up unexpectedly', after: '30/60/90-day forecast with aging analysis  plan ahead, not react' },
      { before: 'Manually created PowerPoint MIS for board meetings', after: 'One-click professional PDF/Excel export with consistent branding' },
      { before: 'Management asks for reports, team takes a week to compile', after: 'Management opens dashboard and sees data instantly  no request needed' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Data Source Mapping', duration: '5-7 days', deliverables: ['Source inventory', 'Field mapping', 'Access credentials', 'ETL plan'] },
      { phase: 'ETL Pipeline Development', duration: '2-3 weeks', deliverables: ['Automated data pipelines', 'Data warehouse setup', 'Scheduled refresh', 'Data validation'] },
      { phase: 'Dashboard Development', duration: '2-3 weeks', deliverables: ['Revenue dashboard', 'Operational KPIs', 'Cost analytics', 'Cash flow'] },
      { phase: 'Advanced Analytics & MIS', duration: '1-2 weeks', deliverables: ['Route profitability', 'Client analytics', 'Fleet performance', 'MIS templates'] },
      { phase: 'Testing & Deployment', duration: '1 week', deliverables: ['Data accuracy validation', 'Dashboard performance testing', 'Team training', 'Production deployment'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Dashboard refinements', 'New KPI additions', 'Pipeline optimization', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics KPI Specialists', description: 'Our dashboards are built around logistics-specific KPIs  on-time delivery, fleet utilization, cost per km, route profitability  not generic business metrics. We know what logistics management actually needs to see.' },
      { title: 'Multi-Source Integration', description: 'We connect TMS, Tally, GPS providers, Excel, and any REST API into one data warehouse. No matter how many systems you use, you get one unified view.' },
      { title: 'Management-Focused Design', description: 'Dashboards are designed for the people making decisions  clean, actionable, with drill-down capability. Not data-dump dashboards that require a data analyst to interpret.' },
      { title: 'Automated Pipelines', description: 'Data refreshes automatically from all sources. No manual exports, no copy-pasting, no compilation. The dashboard is always current.' },
    ],

    faq: [
      { question: 'What data sources can you connect to?', answer: 'Any system with a REST API, database access, or file export capability. We have pre-built connectors for Tally, popular TMS platforms, GPS providers (Trimble, Lojack, etc.), and standard databases (MySQL, PostgreSQL). Custom connectors are built at no extra cost.' },
      { question: 'How often is the data refreshed?', answer: 'It depends on the source. Operational data (trips, tracking) refreshes hourly or real-time. Financial data (Tally, billing) refreshes daily or on-demand. You can configure refresh frequency per data source based on your needs.' },
      { question: 'Can we create custom reports?', answer: 'Yes. The dashboard includes a report builder where you can select KPIs, filters, date ranges, and save custom templates. Saved reports can be generated with one click and scheduled for automatic delivery.' },
      { question: 'Is the dashboard mobile-friendly?', answer: 'Yes. All dashboards are fully responsive and optimized for mobile browsers. You can check your KPIs on your phone during a meeting or while travelling.' },
      { question: 'How long does it take to deploy?', answer: 'A full BI dashboard with 4-5 data sources typically takes 6-8 weeks. Simpler implementations with 2-3 sources can be done in 4-5 weeks.' },
      { question: 'Do we need to buy a data warehouse license?', answer: 'No. We use lightweight open-source databases (PostgreSQL) for the data warehouse. No enterprise license fees for Tableau, Power BI, or similar tools. The dashboard is built as a custom web application.' },
    ],
  },

  'custom-llm-chatbot': {
    slug: 'custom-llm-chatbot',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    number: '23',
    title: 'Custom LLM & AI Operations Chatbot',
    shortDescription: 'AI chatbot trained on your company SOPs, rate cards, policies, and routes. Handles client and driver queries 24/7 via WhatsApp and web chat.',

    heroTagline: 'Your company knowledge. AI-powered. Always available.',
    heroDescription: 'A custom AI chatbot trained exclusively on your company data  SOPs, rate cards, policies, route information, pricing, and FAQs. It answers client queries, assists drivers with operational questions, and handles internal team inquiries 24/7 through WhatsApp and web chat.',

    problemTitle: 'The Problem: Your Team Answers the Same 50 Questions Every Day',
    problemDescription: 'In any logistics company above a certain size, 60-70% of customer service and operational queries are repetitive  rate enquiries, SOP questions, document requirements, route coverage, and policy clarifications. Experienced team members spend hours answering questions that have standard answers. New team members take weeks to learn the answers. When experienced staff leave, institutional knowledge walks out the door with them.',
    problemBullets: [
      'The same 50 questions answered hundreds of times per week by different team members  massive productivity drain',
      'New employees take 3-6 weeks to become productive because institutional knowledge is in people\'s heads, not documented',
      'Answers vary between team members  different people give different rates, different SOPs, different timelines',
      'No 24/7 availability  clients and drivers cannot get answers outside business hours or during weekends',
      'Knowledge is concentrated in a few experienced people  single point of failure when they leave or go on leave',
      'Scaling operations requires proportional hiring because knowledge cannot be leveraged or distributed',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies with 50+ repetitive queries daily, or where institutional knowledge is concentrated in a few key people. If your team spends most of their time answering questions that have standard answers, this chatbot frees them for higher-value work.',
    audienceSegments: [
      { role: 'Customer Service Teams', description: 'Overwhelmed with tracking queries, rate enquiries, and SOP questions that take time away from resolving actual issues' },
      { role: 'Operations Teams', description: 'Answering repetitive questions from drivers about routes, document requirements, loading procedures, and compliance' },
      { role: 'HR & Admin Teams', description: 'Handling policy questions, leave rules, and onboarding queries from field staff across locations' },
      { role: 'Business Owners', description: 'Who want to scale operations without proportional hiring and protect institutional knowledge from staff turnover' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build a custom AI chatbot trained exclusively on your company documents  SOPs, rate cards, policies, route databases, historical Q&A, and operational guidelines. It answers queries with your data, your tone, and your accuracy standards.',
    whatWeDoItems: [
      'AI model trained on your SOPs, rate cards, policies, FAQs, and historical customer/driver query logs',
      'WhatsApp integration for client and driver-facing conversations',
      'Web chat widget embeddable on your website and client portal',
      'Context-aware responses that understand logistics terminology, Indian geography, and your specific operations',
      'Human escalation protocol when AI confidence is low or query requires judgment',
      'Knowledge base admin panel for adding, updating, and managing training content without developer involvement',
    ],

    features: [
      { title: 'Custom AI Training', description: 'The AI is trained exclusively on YOUR documents  not generic internet knowledge. It learns your rate cards, your SOPs, your policies, your routes. It cannot hallucinate answers from external sources.' },
      { title: 'WhatsApp Integration', description: 'Natural WhatsApp conversations for clients and drivers. The bot speaks in the same tone and style as your team, understands Hindi/Hinglish, and maintains conversation context across messages.' },
      { title: 'Web Chat Widget', description: 'Embeddable chat widget for your website and client portal. Branded with your colors and logo. Supports text, file uploads, and image-based queries.' },
      { title: 'Logistics Context Awareness', description: 'Understands logistics-specific terminology (FOB, CIF, POD, e-way bill), Indian geography (city/district/state relationships), and operational concepts specific to your business.' },
      { title: 'Human Escalation Protocol', description: 'When the AI is not confident in its answer (below configurable threshold), it seamlessly transfers to a human agent with full conversation context  no repeated questions for the customer.' },
      { title: 'Knowledge Base Admin Panel', description: 'Add, update, or remove training content through a simple admin interface. Upload new SOPs, update rate cards, add new FAQs  no developer needed. Changes take effect within minutes.' },
      { title: 'Multi-Language Support', description: 'Handles queries in English, Hindi, Hinglish, and can be trained for regional languages. Responds in the same language the user writes in.' },
      { title: 'Analytics & Improvement', description: 'Track query volume, resolution rate, common questions, escalation rate, and user satisfaction. Identify knowledge gaps where new training content is needed.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We audit your existing knowledge base, train the AI model on your specific data, integrate WhatsApp and web chat, configure escalation rules, and continuously optimize based on real usage.',
    howWeDoSteps: [
      { step: 1, title: 'Knowledge Audit & Collection', description: 'Collect all relevant documents  SOPs, rate cards, policies, FAQs, historical Q&A logs, route databases, and operational guidelines. Catalog and structure the knowledge base.' },
      { step: 2, title: 'AI Model Training', description: 'Process documents, train the AI model on your data, validate accuracy against test questions, and refine to handle edge cases and ambiguous queries.' },
      { step: 3, title: 'Channel Integration', description: 'Connect WhatsApp Business API for client/driver conversations. Build and embed web chat widget on your website. Configure consistent experience across channels.' },
      { step: 4, title: 'Escalation & Admin Setup', description: 'Configure human escalation triggers and routing. Build admin panel for knowledge management. Set up analytics dashboard.' },
      { step: 5, title: 'Testing with Real Queries', description: 'Test with 200+ real customer and driver queries. Measure accuracy, response time, escalation rate, and user satisfaction. Refine based on results.' },
      { step: 6, title: 'Launch & Continuous Improvement', description: 'Deploy to production, monitor for 30 days, analyze query patterns, retrain with new data, and optimize responses. Monthly improvement cycle.' },
    ],

    benefits: [
      { title: '40-60% Query Volume Reduction', description: 'The AI handles 40-60% of repetitive queries automatically. Your team focuses on exceptions, escalations, and high-value interactions that require human judgment.' },
      { title: '24/7 Availability', description: 'The bot answers queries at 3 AM on Sundays, during festivals, and on national holidays. No staffing required for after-hours coverage.' },
      { title: 'Consistent, Accurate Answers', description: 'Every query gets the same accurate answer based on your documented SOPs and policies. No more "I was told something different" situations.' },
      { title: 'Instant Employee Onboarding', description: 'New hires can query the AI chatbot for SOP answers, policy clarifications, and process guidance from day one. Training time drops from weeks to days.' },
      { title: 'Institutional Knowledge Preservation', description: 'When experienced staff leave, their knowledge stays in the AI. No more single-point-of-failure or knowledge drain during attrition.' },
      { title: 'Scale Without Headcount', description: 'Handle 100 or 10,000 queries per day with the same team size. The AI scales infinitely without proportional hiring.' },
    ],

    beforeAfter: [
      { before: 'Same 50 questions answered hundreds of times by different people', after: 'AI handles 40-60% automatically  team freed for higher-value work' },
      { before: 'New hires take 3-6 weeks to learn SOPs and policies', after: 'AI provides instant answers  new hires productive from day one' },
      { before: 'Answers vary between team members based on experience and memory', after: 'Consistent, documented answers from the same knowledge base every time' },
      { before: 'No support outside 9 AM - 7 PM business hours', after: '24/7 AI availability on WhatsApp and web chat' },
      { before: 'Key person leaves  takes all their knowledge and context', after: 'Knowledge preserved in AI permanently  no knowledge drain' },
      { before: 'Scaling means hiring more people for repetitive queries', after: 'AI handles volume automatically  scale without proportional headcount' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Knowledge Audit', duration: '5-7 days', deliverables: ['Knowledge inventory', 'Document collection', 'Q&A catalog', 'Gap analysis'] },
      { phase: 'AI Training', duration: '7-10 days', deliverables: ['Model training', 'Accuracy validation', 'Edge case handling', 'Multi-language testing'] },
      { phase: 'Channel Integration', duration: '5-7 days', deliverables: ['WhatsApp API setup', 'Web chat widget', 'Escalation workflow', 'Branding'] },
      { phase: 'Admin & Analytics', duration: '3-5 days', deliverables: ['Knowledge admin panel', 'Analytics dashboard', 'Escalation rules', 'Monitoring'] },
      { phase: 'Testing & Refinement', duration: '5-7 days', deliverables: ['200+ real query testing', 'Accuracy optimization', 'Response time tuning', 'User acceptance'] },
      { phase: 'Launch & Improvement', duration: 'Ongoing', deliverables: ['Production deployment', '30-day monitoring', 'Monthly retraining', 'Performance reports'] },
    ],

    whyNexgenReasons: [
      { title: 'Trained on Your Data, Not Generic Knowledge', description: 'The AI is trained exclusively on your SOPs, rate cards, policies, and historical Q&A. It cannot make up answers from internet knowledge  every response is grounded in your actual company information.' },
      { title: 'Logistics Domain Expertise', description: 'Our AI models are pre-trained on logistics terminology, Indian geography, and common operational concepts. They understand FOB vs CIF, know that Delhi NCR includes Gurugram and Noida, and can explain your specific SOPs clearly.' },
      { title: 'WhatsApp-First for Indian Market', description: 'Your drivers and clients are on WhatsApp. Our chatbot meets them there  not on a separate app or website they have to discover. WhatsApp is the channel with the highest engagement in India.' },
      { title: 'Continuous Learning & Improvement', description: 'The AI improves every month based on real usage data. Queries it cannot answer are flagged, training content is updated, and accuracy increases over time without additional development cost.' },
    ],

    faq: [
      { question: 'What kind of documents do you need to train the AI?', answer: 'Any document that contains the knowledge your team uses to answer queries  SOPs, rate cards, pricing documents, policy manuals, FAQs, historical customer Q&A logs, route databases, compliance requirements, and onboarding guides. More documents = better accuracy.' },
      { question: 'Can we update the knowledge base ourselves?', answer: 'Yes. The admin panel lets you add, edit, or remove training content without any developer involvement. Upload a new SOP PDF, update a rate card, or add a new FAQ  changes take effect within minutes.' },
      { question: 'What if the AI gives a wrong answer?', answer: 'Users can report incorrect answers through a feedback mechanism. Admins can correct the knowledge base, and the AI is retrained. Over time, the system improves as corrections accumulate. For critical queries, the AI escalates to humans when confidence is low.' },
      { question: 'Does it work on WhatsApp?', answer: 'Yes. WhatsApp is the primary channel via WhatsApp Business API. The bot handles natural conversations, maintains context across messages, understands Hindi/Hinglish, and can share documents, images, and links. It behaves like a knowledgeable team member on WhatsApp.' },
      { question: 'How long does it take to deploy?', answer: 'Standard deployment is 4-6 weeks. This includes knowledge audit, AI training, channel integration, testing, and launch. Complex deployments with large document sets and multi-language requirements may take 6-8 weeks.' },
      { question: 'Can it handle queries in Hindi and regional languages?', answer: 'Yes. Out of the box, it handles English, Hindi, and Hinglish (the mix of Hindi and English most Indians use). Regional language support (Tamil, Telugu, Bengali, Marathi, Kannada) can be added based on your user demographics.' },
    ],
  },
  'document-processing-automation': {
    slug: 'document-processing-automation',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    number: '24',
    title: 'Document Processing Automation',
    shortDescription: 'e-Way bill auto-generation, invoice OCR, customs document processing, compliance verification, and POD matching for Indian logistics.',

    heroTagline: 'Documents processed. Not pushed around.',
    heroDescription: 'An automated document processing system that uses OCR and AI to extract data from logistics documents  invoices, e-way bills, lorry receipts, PODs, compliance certificates  and routes the extracted data to the right system. Eliminates manual data entry, reduces errors, and accelerates billing cycles.',

    problemTitle: 'The Problem: Manual Document Processing Is a Bottleneck',
    problemDescription: 'Indian logistics companies process thousands of documents daily  freight invoices, lorry receipts, e-way bills, proof of delivery, vehicle fitness certificates, insurance papers, driving licences, and customs documentation. Most of this is handled manually  data entry from invoices into billing systems, e-way bill generation from trip data, compliance document verification by hand. Each document takes 5-10 minutes and has a 3-5% error rate that compounds across thousands of transactions.',
    problemBullets: [
      'Invoice data entry takes 5-10 minutes per invoice with a 3-5% error rate  errors cause billing disputes and GST compliance issues',
      'e-Way bills generated manually from trip data  5-10 minutes each, with GST validation errors that lead to penalties',
      'Compliance documents (fitness, insurance, PUC, driving licence) verified manually one by one  expired documents slip through',
      'POD images matched to trip records by hand  many PODs are lost, misfiled, or never matched',
      'Customs documentation (BE, shipping bills, exam reports) processed manually  delays at ports and airports',
      'No audit trail  when an error is discovered, there is no way to trace which document, who processed it, and when',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies processing 100 or more documents daily where manual data entry is a significant cost center and error source. If your billing team spends more time on data entry than analysis, this system transforms their productivity.',
    audienceSegments: [
      { role: 'Billing & Accounts Teams', description: 'Spending hours on invoice data entry, e-way bill generation, and reconciliation that should be automated' },
      { role: 'Compliance Teams', description: 'Manually verifying hundreds of fitness certificates, insurance papers, and driving licences for expiry and validity' },
      { role: 'Operations Teams', description: 'Processing lorry receipts, trip documents, and POD images that need to be matched and filed' },
      { role: 'Customs Brokers & CHA', description: 'Processing BE forms, shipping bills, exam reports, and customs documentation for import/export shipments' },
      { role: 'CFOs & Finance Heads', description: 'Who want to reduce billing labor costs, eliminate GST penalties from errors, and speed up cash collection' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build an automated document processing system that uses OCR and AI to extract data from your logistics documents, validate the extracted data, and route it to the right system  billing, compliance tracking, or customs processing.',
    whatWeDoItems: [
      'Invoice OCR engine that extracts all fields (vendor, amount, GST, line items) from structured and semi-structured invoices with 95%+ accuracy',
      'e-Way bill auto-generation from trip data with GST validation, error checking, and direct submission to GST portal',
      'Compliance document verification with OCR extraction and automated expiry checking against renewal deadlines',
      'POD image matching that links delivery photos and e-signatures to the correct trip record automatically',
      'Customs document processing for BE forms, shipping bills, and exam reports with field extraction and validation',
      'Complete processing audit trail  every document, extraction, validation, and routing decision logged and traceable',
    ],

    features: [
      { title: 'Invoice OCR Engine', description: 'Extracts vendor name, GSTIN, invoice number, date, line items, tax amounts, and totals from invoices. Handles multiple formats  Tally-generated, Excel, scanned, and photographed. 95%+ accuracy on structured invoices.' },
      { title: 'e-Way Bill Auto-Generation', description: 'Pulls trip data (consignor, consignee, HSN, quantity, value, vehicle number) from your TMS, validates GST details, and generates e-way bills directly. Catches errors before submission to prevent penalties.' },
      { title: 'Compliance Document Verification', description: 'OCR extracts dates and document numbers from fitness certificates, insurance papers, PUC certificates, and driving licences. Automatically checks expiry dates against your compliance calendar and flags renewals.' },
      { title: 'POD Matching Engine', description: 'Matches uploaded POD images (photo, e-signature, receiver name) to trip records based on trip ID, date, and location. Flags unmatched PODs for manual review. Prevents POD loss and misfiling.' },
      { title: 'Customs Document Processing', description: 'Extracts key fields from Bill of Entry, shipping bills, exam reports, and customs assessments. Validates against standard formats and flags discrepancies for review before submission.' },
      { title: 'Complete Audit Trail', description: 'Every document processed is logged  original image, extracted data, validation results, routing decision, and any corrections. Full traceability for dispute resolution and compliance audits.' },
      { title: 'Error Handling & Review Queue', description: 'Low-confidence extractions (below 90% accuracy threshold) are flagged and routed to a human review queue. Reviewer sees the original document alongside extracted data for quick verification.' },
      { title: 'System Integration', description: 'Extracted data flows directly to Tally, TMS, ERP, or any system via API. No manual copy-paste between document processing and downstream systems.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We analyze your document formats, train OCR models on your specific document types, build the processing engine with validation rules, integrate with your systems, and deploy with a review queue for edge cases.',
    howWeDoSteps: [
      { step: 1, title: 'Document Analysis & Inventory', description: 'Collect samples of every document type you process  invoices, lorry receipts, e-way bills, compliance docs, PODs. Catalog formats, layouts, and variations across clients and partners.' },
      { step: 2, title: 'OCR Model Training', description: 'Train OCR models on your specific document formats. Test accuracy across variations  different vendors, different templates, different image qualities. Target 95%+ accuracy on structured documents.' },
      { step: 3, title: 'Processing Engine Development', description: 'Build document classification, field extraction, validation rules, error handling, and routing logic. Configure the human review queue for low-confidence results.' },
      { step: 4, title: 'System Integration', description: 'Connect to Tally for invoice data import, TMS for e-way bill data and POD matching, and compliance tracking system for document verification. Test data flow end-to-end.' },
      { step: 5, title: 'Testing & Validation', description: 'Process 500+ real documents through the system. Measure accuracy, processing time, error rates, and review queue volume. Refine OCR models and validation rules based on results.' },
      { step: 6, title: 'Deployment & Training', description: 'Production deployment, team training on review queue, monitoring for 30 days, and monthly accuracy reports with model refinement recommendations.' },
    ],

    benefits: [
      { title: '90% Reduction in Processing Time', description: 'What takes 5-10 minutes per document manually now takes 10-30 seconds with automated OCR extraction. A billing team of 5 can handle the work of 30.' },
      { title: '95%+ Extraction Accuracy', description: 'On structured documents (invoices, e-way bills), our OCR achieves 95%+ accuracy. Low-confidence results are flagged for human review  nothing goes through unchecked.' },
      { title: 'Zero GST Penalties', description: 'Automated GST validation catches errors in e-way bills and invoices before submission. No more penalties from wrong tax amounts, invalid GSTINs, or missing fields.' },
      { title: '30% Faster Cash Collection', description: 'Faster invoice processing means faster billing, which means faster payment. When billing takes hours instead of days, invoices go out the same day trips complete.' },
      { title: 'Complete Audit Trail', description: 'Every document, extraction, and routing decision is logged. When an error is discovered, you can trace exactly what happened, when, and why  essential for compliance audits and dispute resolution.' },
      { title: 'Scalable from 100 to 10,000 Documents/Day', description: 'Cloud-based processing scales automatically. Whether you process 100 or 10,000 documents daily, the system handles it without adding headcount.' },
    ],

    beforeAfter: [
      { before: '5-10 minutes per invoice with manual data entry and 3-5% error rate', after: '10-30 seconds per invoice with 95%+ accuracy' },
      { before: 'e-Way bills generated manually with GST validation errors', after: 'Auto-generated from trip data with pre-submission validation' },
      { before: 'Compliance documents verified one by one  expired docs slip through', after: 'OCR extraction with automated expiry checking and renewal alerts' },
      { before: 'PODs lost, misfiled, or unmatched to trip records', after: 'Auto-matched to trip records with flagged exceptions' },
      { before: 'Customs documents processed by hand  delays at ports', after: 'Automated field extraction and validation  minutes, not days' },
      { before: 'No traceability  who processed what, when, correctly?', after: 'Complete audit trail for every document and processing decision' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'Document Analysis', duration: '5-7 days', deliverables: ['Document inventory', 'Format catalog', 'Field mapping', 'Accuracy requirements'] },
      { phase: 'OCR Model Training', duration: '7-10 days', deliverables: ['Model training', 'Accuracy testing', 'Edge case handling', 'Multi-format support'] },
      { phase: 'Processing Engine', duration: '2-3 weeks', deliverables: ['Classification logic', 'Extraction engine', 'Validation rules', 'Review queue'] },
      { phase: 'System Integration', duration: '1-2 weeks', deliverables: ['Tally integration', 'TMS connection', 'Compliance system', 'Data flow testing'] },
      { phase: 'Testing & Validation', duration: '1-2 weeks', deliverables: ['500+ document testing', 'Accuracy benchmarking', 'Review queue optimization', 'Team training'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Production monitoring', 'Model refinement', 'Monthly accuracy report', 'Optimization recommendations'] },
    ],

    whyNexgenReasons: [
      { title: 'Indian Document Specialists', description: 'We understand Indian logistics documents  GST invoices, e-way bills, lorry receipts, RTO compliance documents, customs BE forms. Our OCR models are pre-trained on these specific formats, not generic US/European templates.' },
      { title: '95%+ Accuracy on Your Formats', description: 'Our OCR models achieve 95%+ accuracy because we train them on YOUR actual documents, not sample data. The more documents we process, the more accurate they become.' },
      { title: 'GST Validation Built-In', description: 'Automated GST validation for e-way bills and invoices  GSTIN format check, tax calculation verification, HSN code validation. Catches errors before they become penalties.' },
      { title: 'Tally Direct Integration', description: 'Extracted invoice data flows directly into Tally  no manual re-entry. Supports Tally Prime, Tally ERP 9, and Tally on cloud. Other accounting software supported via API.' },
    ],

    faq: [
      { question: 'What types of documents can it process?', answer: 'We support all common Indian logistics documents: GST invoices, e-way bills, lorry receipts, consignment notes, POD images, vehicle fitness certificates, insurance papers, PUC certificates, driving licences, customs BE forms, shipping bills, exam reports, and packing lists.' },
      { question: 'How accurate is the OCR extraction?', answer: 'On structured documents (printed invoices, standard e-way bills, typed compliance certificates), we achieve 95%+ accuracy. On semi-structured and photographed documents, accuracy is 85-92%. Low-confidence results are always flagged for human review.' },
      { question: 'Can it integrate with Tally?', answer: 'Yes. We build a direct integration that imports extracted invoice data into Tally  vendor details, line items, tax amounts, and totals. The data flows automatically, eliminating manual re-entry. Tally Prime, ERP 9, and cloud versions are all supported.' },
      { question: 'What happens when the OCR makes an error?', answer: 'Results below the confidence threshold (configurable, default 90%) are automatically routed to a human review queue. The reviewer sees the original document alongside the extracted data and can quickly correct errors. The system learns from corrections over time.' },
      { question: 'Can it handle handwritten documents?', answer: 'Partially. Our OCR handles handwritten numbers and short text with 70-80% accuracy. For handwritten documents, results are always flagged for human review. We recommend digitizing processes to move to printed or digital documents for maximum automation.' },
      { question: 'How long does deployment take?', answer: 'A standard deployment with 3-5 document types takes 6-8 weeks. Complex deployments with 10+ document types, customs processing, and multi-system integration may take 8-10 weeks.' },
    ],
  },

  'crm-integration': {
    slug: 'crm-integration',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    number: '25',
    title: 'CRM Integration (Salesforce, Zoho, HubSpot)',
    shortDescription: 'Connect enquiries, proposals, follow-ups, trips, and billing into Salesforce, Zoho, or HubSpot with bidirectional data sync.',

    heroTagline: 'One CRM. All your data. No sync issues.',
    heroDescription: 'A custom integration that connects your logistics operations  website enquiries, WhatsApp leads, trip data, invoices, and payment status  into Salesforce, Zoho, HubSpot, or any CRM. Bidirectional data sync keeps everything current without manual entry.',

    problemTitle: 'The Problem: Your CRM Is Disconnected from Operations',
    problemDescription: 'Many Indian logistics companies use Salesforce, Zoho, or HubSpot for sales management, but the CRM lives in a silo. Enquiries from WhatsApp and the website never make it into the CRM. Trip data from the TMS is not linked to CRM deals. Invoices in Tally are invisible to the sales team. The result is an incomplete customer view that leads to missed cross-sell opportunities, delayed follow-ups, and inaccurate pipeline forecasts.',
    problemBullets: [
      'WhatsApp and website enquiries never enter the CRM  leads exist in chats and emails but not in the sales pipeline',
      'Trip data (shipments, deliveries, PODs) from TMS is not visible in CRM  sales team cannot discuss live order status with clients',
      'Invoices raised in Tally or billing system are not synced to CRM  sales has no visibility into billing and collection status',
      'Follow-up activities (calls, emails, WhatsApp) are logged in personal diaries, not in the CRM  no shared team visibility',
      'Duplicate contacts created from multiple sources  no deduplication across WhatsApp, website, trade shows, and phone',
      'No cross-sell intelligence  CRM does not know that a client only uses road freight when they also need warehousing',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies already using (or planning to use) Salesforce, Zoho, or HubSpot who want to connect their CRM to actual operations data. If your CRM pipeline is disconnected from what happens after a deal is won, this integration fixes the gap.',
    audienceSegments: [
      { role: 'Sales Teams', description: 'Who need trip status, invoice data, and delivery information visible in their CRM for client conversations' },
      { role: 'CRM Administrators', description: 'Who manage Salesforce, Zoho, or HubSpot and need bidirectional data sync without manual imports' },
      { role: 'Marketing Teams', description: 'Who need all leads from all sources flowing into the CRM for campaign attribution and reporting' },
      { role: 'Business Owners', description: 'Who want a unified customer view  leads, deals, shipments, invoices, and payments  in one place' },
      { role: 'Operations Teams', description: 'Who want CRM deal data (client requirements, pricing commitments) visible in TMS for trip execution' },
    ],

    whatWeDoTitle: 'What We Build',
    whatWeDoDescription: 'We build custom bidirectional integrations between your CRM and your operations systems  TMS, billing, website, WhatsApp, GPS. Every lead, deal, shipment, invoice, and payment is synced automatically in both directions.',
    whatWeDoItems: [
      'Automated lead creation from website forms, WhatsApp enquiries, and phone call logs directly in your CRM',
      'Deal-to-delivery sync  CRM opportunities linked to TMS trips with live status updates visible in both systems',
      'Invoice and payment sync  billing data from Tally/billing system flows into CRM deal records',
      'Activity logging  all calls, emails, WhatsApp messages, and meetings auto-logged to CRM contact/deal records',
      'Intelligent contact deduplication across all sources with merge suggestions and manual override',
      'Cross-sell intelligence  system identifies clients using only one service and suggests relevant additional services',
    ],

    features: [
      { title: 'Automated Lead Creation', description: 'Website form submissions, WhatsApp enquiries, and phone call logs automatically create leads in your CRM with source attribution. No manual data entry, no missed leads.' },
      { title: 'Deal-Trip Bidirectional Sync', description: 'When a deal is won in CRM, it can trigger trip creation in TMS. Trip status updates (picked up, in transit, delivered, POD) flow back to the CRM deal record. Both systems stay current.' },
      { title: 'Invoice & Revenue Sync', description: 'Invoices raised in Tally or your billing system automatically appear on the CRM deal record. Payment status updates (paid, partial, overdue) sync back. Sales team sees revenue realization in real-time.' },
      { title: 'Activity Auto-Logging', description: 'Calls, emails, WhatsApp messages, and meetings are automatically logged to the CRM contact and deal records. No more "log your call" reminders  it happens automatically.' },
      { title: 'Intelligent Deduplication', description: 'When the same person appears from multiple sources (website + WhatsApp + trade show), the system detects potential duplicates and suggests merges. No more 5 records for the same contact.' },
      { title: 'Cross-Sell Intelligence', description: 'System analyzes client usage patterns  a client using only road freight sees suggestions for warehousing, air freight, or customs clearance based on their shipment profile.' },
      { title: 'Custom Object Mapping', description: 'Logistics-specific CRM fields mapped correctly  vehicle types, route lanes, service categories, freight types. Not forced into generic CRM fields.' },
      { title: 'Reporting & Analytics', description: 'Combined pipeline + operations analytics  revenue forecast based on deals and actual shipments, client lifetime value including all services, and sales cycle analysis.' },
    ],

    howWeDoTitle: 'How We Build It',
    howWeDoDescription: 'We map data flows between your CRM and operations systems, build bidirectional sync APIs, configure automation rules, and deploy with monitoring and alerting.',
    howWeDoSteps: [
      { step: 1, title: 'System Mapping', description: 'Document all data sources (CRM, TMS, billing, WhatsApp, website) and define bidirectional data flows, field mappings, sync rules, and conflict resolution logic.' },
      { step: 2, title: 'API Development', description: 'Build bidirectional API connections between CRM (Salesforce/Zoho/HubSpot) and operations systems. Handle authentication, rate limiting, error handling, and retry logic.' },
      { step: 3, title: 'Automation Workflows', description: 'Configure automation rules  lead creation triggers, deal-to-trip sync, invoice-to-CRM flow, activity logging, deduplication runs. Test end-to-end.' },
      { step: 4, title: 'Deduplication & Cross-Sell', description: 'Build intelligent deduplication engine with fuzzy matching. Implement cross-sell suggestion engine based on client usage analysis.' },
      { step: 5, title: 'Testing & Validation', description: 'End-to-end testing with real data  lead creation, deal sync, trip status update, invoice flow, deduplication, and cross-sell suggestions. Validate in all directions.' },
      { step: 6, title: 'Deployment & Monitoring', description: 'Production deployment, sync monitoring dashboard, error alerting, and 30-day optimization. Ensure data integrity across all connected systems.' },
    ],

    benefits: [
      { title: 'Zero Manual Data Entry', description: 'Every lead, deal update, trip status, invoice, and payment flows automatically between systems. Your team does not copy-paste data between CRM and operations  ever.' },
      { title: 'Complete 360-Degree Customer View', description: 'Leads, deals, shipments, invoices, payments, and interactions  all in one place. Sales, operations, and finance see the same customer from different angles.' },
      { title: 'Cross-Sell Revenue Uplift', description: 'Identifying clients using only one service and suggesting relevant others can increase revenue per client by 20-40%. The system surfaces these opportunities automatically.' },
      { title: 'Accurate Pipeline Forecasting', description: 'Pipeline forecasts based on real operational data (actual shipments, actual billing) rather than self-reported sales stages. More accurate revenue predictions.' },
      { title: 'Data Integrity Across Systems', description: 'Bidirectional sync with conflict resolution ensures CRM and operations always agree on client data, deal status, and revenue numbers.' },
      { title: 'Audit Trail for Every Sync', description: 'Every data synchronization event is logged  what data was synced, between which systems, when, and whether it succeeded. Full traceability for data governance.' },
    ],

    beforeAfter: [
      { before: 'WhatsApp and website leads exist in chats and emails but not in CRM', after: 'Every lead automatically created in CRM with source attribution' },
      { before: 'No trip visibility in CRM  sales cannot discuss live order status', after: 'Real-time trip status (in transit, delivered, POD) visible in CRM deal record' },
      { before: 'Invoices in Tally only  sales has no visibility into billing', after: 'Invoice and payment data synced to CRM automatically' },
      { before: 'Activities in Excel and diaries  no shared team visibility', after: 'All calls, emails, WhatsApp messages auto-logged in CRM' },
      { before: '5 duplicate contacts for the same client from different sources', after: 'Intelligent deduplication merges and suggests with one clean record' },
      { before: 'No cross-sell visibility  client only uses road freight', after: 'System suggests warehousing, air freight, customs based on usage analysis' },
    ],

    processTitle: 'Implementation Timeline',
    processTimeline: [
      { phase: 'System Mapping & Design', duration: '5-7 days', deliverables: ['Data flow diagrams', 'Field mappings', 'Sync rules', 'Conflict resolution logic'] },
      { phase: 'API Development', duration: '2-3 weeks', deliverables: ['CRM API connection', 'Operations API connection', 'Bidirectional sync engine', 'Error handling'] },
      { phase: 'Automation & Dedup', duration: '1-2 weeks', deliverables: ['Lead automation', 'Deal-trip sync', 'Deduplication engine', 'Cross-sell rules'] },
      { phase: 'Testing & Validation', duration: '1-2 weeks', deliverables: ['End-to-end testing', 'Data integrity validation', 'Performance testing', 'Team training'] },
      { phase: 'Deployment', duration: '1 week', deliverables: ['Production deployment', 'Monitoring dashboard', 'Error alerting', 'Documentation'] },
      { phase: 'Post-Launch Support', duration: '30 days', deliverables: ['Sync monitoring', 'Data quality checks', 'Optimization', 'Monthly review'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics CRM Integration Experts', description: 'We have built CRM integrations for 15+ logistics companies connecting Salesforce, Zoho, and HubSpot with TMS, billing, and WhatsApp. We understand the specific data flows that logistics operations require.' },
      { title: 'Bidirectional, Not One-Way', description: 'Most integrations push data in one direction. We build true bidirectional sync  CRM to TMS and TMS to CRM  so both systems stay current and accurate.' },
      { title: 'Deduplication Built-In', description: 'Logistics companies collect contacts from 10+ sources. Our fuzzy-matching deduplication engine handles name variations, phone number formats, and email aliases that generic dedup tools miss.' },
      { title: 'Cross-Sell Intelligence', description: 'Beyond basic sync, we add analytics that identify cross-sell opportunities based on actual client usage patterns. This is where the integration pays for itself  through new revenue, not just efficiency.' },
    ],

    faq: [
      { question: 'Which CRMs do you support?', answer: 'We have pre-built integration patterns for Salesforce, Zoho CRM, and HubSpot. If you use a different CRM (Freshworks, Pipedrive, Bitrix24), we can build custom integrations  the process is the same, just different APIs.' },
      { question: 'Is the sync truly bidirectional?', answer: 'Yes. Data flows in both directions. CRM deal updates sync to TMS. TMS trip status updates sync back to CRM. Invoice data from billing flows to CRM. If both systems update the same field simultaneously, conflict resolution rules determine which takes priority.' },
      { question: 'What operations systems can you connect?', answer: 'Any system with a REST API. We have experience connecting to TMS platforms, GPS providers, Tally, custom billing systems, WhatsApp Business API, website forms, and phone systems.' },
      { question: 'How does deduplication work?', answer: 'The engine uses fuzzy matching across name, phone number, email, company name, and GSTIN. When a potential duplicate is detected, it suggests a merge rather than auto-merging  a human reviews and confirms. You stay in control.' },
      { question: 'What if the sync fails or data gets corrupted?', answer: 'Every sync event is logged with full before/after data. If a sync fails, it retries automatically with exponential backoff. If data integrity issues are detected, alerts are sent immediately. A recovery mechanism can restore data to any point in the last 30 days.' },
      { question: 'How long does implementation take?', answer: 'Standard CRM integration (one CRM + 2-3 operations systems) takes 5-7 weeks. Complex integrations with 5+ systems, custom deduplication rules, and cross-sell analytics may take 7-9 weeks.' },
    ],
  },
  /* ═══════════════════════════════════════════════════════════════
     CATEGORY 5: MARKETING (5 services)
     ═══════════════════════════════════════════════════════════════ */

  'starter-marketing-retainer': {
    slug: 'starter-marketing-retainer',
    category: 'marketing',
    categoryLabel: 'Marketing',
    number: '26',
    title: 'Starter Marketing Retainer',
    shortDescription: 'Monthly marketing retainer with 12 LinkedIn posts, GBP management, SEO updates, strategy call, and performance reporting.',

    heroTagline: 'Your digital presence. Consistently maintained.',
    heroDescription: 'A monthly marketing retainer designed for logistics companies that need to maintain a professional digital presence without a full-time marketing team. Twelve LinkedIn posts per month, Google Business Profile management, monthly SEO updates, a strategy call, and a performance report  all for a fixed monthly fee.',

    problemTitle: 'The Problem: Your Digital Presence Is Invisible or Outdated',
    problemDescription: 'Most Indian logistics companies know they need to be visible online  on Google, LinkedIn, and social media  but nobody has the time to consistently create content, update profiles, or manage SEO. The result is an outdated website, a LinkedIn page with 3 posts from 6 months ago, a Google listing with no reviews, and zero online discoverability when potential clients search for logistics services in their area.',
    problemBullets: [
      'LinkedIn company page has 3-5 posts from months ago  looks abandoned to anyone checking your profile before an enquiry',
      'Google Business Profile is unclaimed or unoptimized  your competitors show up in local searches, you do not',
      'Website SEO is neglected  no blog posts, no keyword targeting, no meta descriptions, and dropping search rankings',
      'No content calendar  marketing happens in random bursts when someone remembers, not consistently',
      'No performance tracking  you have no idea if your LinkedIn posts generate enquiries or if your website gets organic traffic',
      'Founder spends 2-3 hours per week on marketing that should go to running the business',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies with Rs.50 lakh to Rs.5 crore revenue that need a consistent digital presence but cannot justify a full-time marketing hire. If your online presence is sporadic or nonexistent, this retainer provides professional marketing execution at a predictable monthly cost.',
    audienceSegments: [
      { role: 'Small Transporters & Fleet Owners', description: 'Running 10-50 vehicles who need to be found on Google and look professional on LinkedIn' },
      { role: 'Regional 3PL Operators', description: 'Building presence in a specific geography who need local SEO and content marketing' },
      { role: 'Logistics Startups', description: 'Establishing credibility and visibility who need consistent content without a marketing team' },
      { role: 'Founders Who Do Their Own Marketing', description: 'Spending 2-3 hours per week on posts and updates that could be handled by a specialist' },
    ],

    whatWeDoTitle: 'What We Deliver Monthly',
    whatWeDoDescription: 'Every month, we create and publish 12 LinkedIn posts, manage your Google Business Profile, update your website SEO, conduct a strategy call, and deliver a performance report. Consistent, professional marketing execution without the overhead of a full-time hire.',
    whatWeDoItems: [
      '12 LinkedIn posts per month  mix of industry insights, company updates, team spotlights, and thought leadership content',
      'Google Business Profile management  profile optimization, weekly updates, review management, and Q&A responses',
      'Monthly SEO updates  keyword monitoring, meta tag optimization, blog suggestions, and technical SEO checks',
      'Monthly 30-minute strategy call  review performance, discuss priorities, and plan next month\'s focus areas',
      'Monthly performance report  LinkedIn reach and engagement, Google Business insights, website traffic and rankings',
    ],

    features: [
      { title: '12 LinkedIn Posts/Month', description: 'Professionally written posts tailored to your brand voice and audience. Mix of formats: industry insights, company milestones, service highlights, team features, and engaging questions. Posted at optimal times for maximum reach.' },
      { title: 'Google Business Profile Management', description: 'Complete GBP management  profile optimization with keywords, weekly updates (posts, photos, offers), review response management, and Q&A handling. Get found in local "near me" searches.' },
      { title: 'Monthly SEO Updates', description: 'Monitor your target keywords, update meta titles and descriptions, identify content gaps, suggest blog topics, and run technical SEO checks (page speed, broken links, mobile usability).' },
      { title: 'Strategy Call', description: '30-minute monthly call with your account manager to review results, discuss business priorities, upcoming events, and align next month\'s content and SEO focus. Your input shapes the strategy.' },
      { title: 'Performance Report', description: 'Monthly report covering LinkedIn reach, impressions, engagement rate, follower growth, Google Business views, calls, direction requests, website organic traffic, and keyword rankings. Clear, actionable data.' },
      { title: 'Content Calendar', description: 'Monthly content calendar sent on the 25th for next month. You review and approve all content before it goes live. No surprises, no off-brand posts.' },
      { title: 'Competitor Monitoring', description: 'Track 3-5 competitors\' LinkedIn activity and Google rankings. Monthly brief on what competitors are doing and opportunities to differentiate.' },
      { title: 'Dedicated Account Manager', description: 'One point of contact who understands your business, knows your audience, and manages all deliverables. No rotating account teams.' },
    ],

    howWeDoTitle: 'How It Works',
    howWeDoDescription: 'Onboarding in Week 1, content creation and approval in Weeks 2-3, execution throughout the month, reporting on the 1st of next month. A predictable rhythm that keeps your marketing consistent without demanding your time.',
    howWeDoSteps: [
      { step: 1, title: 'Onboarding & Audit', description: 'Audit your current LinkedIn, Google Business Profile, and website SEO. Identify quick wins, set up access, establish brand voice guidelines and content preferences.' },
      { step: 2, title: 'Strategy & Calendar', description: 'Create first month\'s content calendar based on audit findings, your business priorities, and upcoming events. You review and approve.' },
      { step: 3, title: 'Content Creation & Approval', description: 'Write all LinkedIn posts and SEO updates. Send for your review and approval. Revise based on feedback. Nothing goes live without your sign-off.' },
      { step: 4, title: 'Monthly Execution', description: 'Publish 12 LinkedIn posts on schedule. Manage GBP with weekly updates. Implement SEO changes. Respond to reviews and Q&A.' },
      { step: 5, title: 'Strategy Call & Report', description: 'End-of-month strategy call to review performance, discuss learnings, and plan next month. Deliver performance report with data and recommendations.' },
    ],

    benefits: [
      { title: 'Consistent Professional Presence', description: '12 posts per month means your LinkedIn looks active, current, and professional to anyone checking your profile before or after an enquiry. Consistency builds trust over time.' },
      { title: 'Found on Google Locally', description: 'Optimized Google Business Profile means you appear in "logistics company near me" and local search results. Clients find you instead of your competitors.' },
      { title: 'No Hiring Overhead', description: 'A full-time marketing person costs Rs.25,000-40,000/month plus overhead. This retainer delivers professional marketing execution at a fraction of the cost.' },
      { title: 'Zero Founder Time Required', description: 'After the initial onboarding, your time investment is 30 minutes per month for the strategy call and 15 minutes to review the content calendar. We handle everything else.' },
      { title: 'Measurable Results', description: 'Monthly reports show exactly what is working  which posts get engagement, how many calls come from Google, which keywords are ranking. Data-driven optimization every month.' },
      { title: 'Flexibility to Scale Up', description: 'Start with Starter, upgrade to Growth or Accelerator as your business grows. No contract lock-in. Scale marketing investment in line with revenue growth.' },
    ],

    beforeAfter: [
      { before: 'LinkedIn page with 3 posts from 6 months ago  looks abandoned', after: '12 fresh posts per month  active, professional, consistent presence' },
      { before: 'Not found on Google when potential clients search locally', after: 'Optimized Google Business Profile with weekly updates and review management' },
      { before: 'Website SEO neglected for months  rankings dropping', after: 'Monthly SEO monitoring and optimization  rankings maintained or improved' },
      { before: 'No idea if marketing is generating any enquiries', after: 'Monthly performance report with clear data on reach, traffic, and conversions' },
      { before: 'Founder spends 2-3 hours per week on marketing tasks', after: '30 minutes per month on strategy call  everything else handled' },
      { before: 'Marketing happens in random bursts when someone remembers', after: 'Predictable monthly rhythm with content calendar and consistent execution' },
    ],

    processTitle: 'Monthly Delivery Cycle',
    processTimeline: [
      { phase: 'Onboarding (Month 1 Only)', duration: 'Week 1', deliverables: ['LinkedIn and GBP audit', 'Brand voice guidelines', 'Access setup', 'Initial content calendar'] },
      { phase: 'Content Creation', duration: 'Weeks 2-3', deliverables: ['12 LinkedIn posts written', 'SEO updates identified', 'GBP content planned', 'Calendar sent for approval'] },
      { phase: 'Monthly Execution', duration: 'Week 4 onwards', deliverables: ['LinkedIn posts published', 'GBP weekly updates', 'SEO changes implemented', 'Review responses'] },
      { phase: 'Reporting & Strategy', duration: '1st of next month', deliverables: ['Performance report', 'Strategy call', 'Next month calendar', 'Recommendations'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics Marketing Specialists', description: 'We only work with logistics companies. We understand the industry, the audience, the jargon, and what content resonates with transporters, shippers, and 3PLs. We are not generalist marketers learning your industry on the job.' },
      { title: 'Predictable Monthly Cost', description: 'Fixed monthly fee with no surprises. No hourly billing anxiety. No scope creep. You know exactly what you pay and exactly what you get every month.' },
      { title: 'No Contract Lock-In', description: 'Month-to-month engagement. Cancel anytime with 15 days notice. We earn your business every month through results, not through contract terms.' },
      { title: 'Measurable Reporting', description: 'Every month you get clear data on what your marketing investment produced  reach, engagement, traffic, calls, rankings. No vanity metrics, no fluff.' },
    ],

    faq: [
      { question: 'What if I do not like the content?', answer: 'All content is sent to you for review and approval before publishing. If you do not like something, we rewrite it. Your brand voice is paramount  we adapt to your style, not the other way around.' },
      { question: 'Can I cancel anytime?', answer: 'Yes. There is no long-term contract. You can cancel with 15 days notice at the end of any month. We believe in earning your business through results, not locking you in through contracts.' },
      { question: 'How much time do I need to invest?', answer: 'After onboarding, your time investment is approximately 45 minutes per month: 30 minutes for the strategy call and 15 minutes to review and approve the content calendar. That is it.' },
      { question: 'Do you also run paid ads?', answer: 'Paid advertising (Google Ads, Meta Ads) is available in our Growth and Accelerator retainers. The Starter retainer focuses on organic presence  SEO, content, and profile management. Paid ads can be added as an upgrade.' },
      { question: 'What kind of LinkedIn posts do you create?', answer: 'A mix of formats: industry insights and news commentary, company milestones and achievements, service highlights and case study snippets, team spotlights and culture posts, engagement questions and polls. The mix is calibrated based on what performs best for your audience.' },
      { question: 'How soon will I see results?', answer: 'LinkedIn presence improves within the first month  12 posts make an immediate difference. Google Business Profile optimization shows results in 4-8 weeks. SEO improvements typically take 3-6 months for significant ranking changes. This is a marathon, not a sprint.' },
    ],
  },

  'growth-marketing-retainer': {
    slug: 'growth-marketing-retainer',
    category: 'marketing',
    categoryLabel: 'Marketing',
    number: '27',
    title: 'Growth Marketing Retainer',
    shortDescription: 'Google Ads, Meta Ads, lead CRM, 16 posts per month, 2 strategy calls, and comprehensive performance reporting.',

    heroTagline: 'More enquiries. Lower cost per lead. Measurable ROI.',
    heroDescription: 'A growth-focused marketing retainer that adds paid advertising to content marketing. Google Ads and Meta Ads campaigns with included ad spend, a lead CRM for enquiry tracking, 16 content posts, 2 strategy calls, and detailed performance reporting with cost-per-lead tracking.',

    problemTitle: 'The Problem: You Need Enquiries, Not Just Visibility',
    problemDescription: 'Organic marketing builds visibility over months, but many logistics companies need enquiries now. Running Google Ads or Facebook Ads without expertise burns budget fast  wrong keywords, poor targeting, and no landing pages mean Rs.50,000 in ad spend generates 3 enquiries at Rs.16,000 each. Meanwhile, content creation is still sporadic, and there is still no system to track and follow up on enquiries that do come in.',
    problemBullets: [
      'Running Google Ads without expertise  wrong keywords (broad match "logistics" instead of "transport from Delhi to Mumbai"), poor targeting, wasted budget',
      'No dedicated landing pages  ad clicks go to homepage where visitors bounce in 5 seconds because they cannot find what they searched for',
      'Lead management in WhatsApp and Excel  enquiries from ads, website, and referrals scattered with no follow-up system',
      'No cost-per-lead tracking  you know you spent Rs.50,000 on ads but cannot tell how many enquiries it generated or what they cost',
      'Content still inconsistent  organic presence suffers while focus shifts to paid ads, creating a start-stop cycle',
      'No strategy alignment between paid and organic  they operate in silos instead of reinforcing each other',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies with Rs.2 crore to Rs.15 crore revenue that need to generate consistent enquiries through both paid and organic channels. If you have tried running ads yourself and burned budget without results, this retainer brings professional campaign management with lead tracking.',
    audienceSegments: [
      { role: 'Growing Transporters & 3PLs', description: 'Who need consistent enquiry flow to fill capacity and justify fleet expansion' },
      { role: 'Regional Logistics Companies', description: 'Competing in specific geographies where Google Ads can capture high-intent local searches' },
      { role: 'Warehouse & Fulfillment Operators', description: 'Targeting e-commerce and retail companies who search for warehousing solutions online' },
      { role: 'Founders Tired of Wasting Ad Budget', description: 'Who have run ads themselves, burned money, and want professional management with measurable results' },
    ],

    whatWeDoTitle: 'What We Deliver Monthly',
    whatWeDoDescription: 'Everything in the Starter retainer plus Google Ads and Meta Ads campaign management, a lead CRM for enquiry tracking, more content, and deeper analytics. One retainer, all channels managed.',
    whatWeDoItems: [
      'Google Ads campaign management  keyword research, ad creation, bid optimization, and negative keyword management',
      'Meta Ads (Facebook/Instagram)  audience targeting, creative design, campaign management, and A/B testing',
      'Rs.20,000 ad spend included  additional spend can be added based on your budget and enquiry volume targets',
      'Lead CRM setup and management  all enquiries from all channels captured, tracked, and followed up systematically',
      '16 content posts per month across LinkedIn and other platforms',
      '2 strategy calls per month with detailed performance reporting including cost-per-lead analysis',
    ],

    features: [
      { title: 'Google Ads Management', description: 'Professional campaign management with logistics-specific keyword research (not generic "logistics" but "transport Delhi to Mumbai", "warehouse near Nhava Sheva"). Campaign structure, ad copy, bid strategy, and negative keywords all optimized for logistics enquiry generation.' },
      { title: 'Meta Ads Management', description: 'Facebook and Instagram campaigns targeting logistics decision-makers  supply chain heads, procurement managers, and business owners. Creative design, audience segmentation, and A/B testing included.' },
      { title: 'Included Ad Spend', description: 'Rs.20,000 per month in ad spend included in the retainer. We recommend where to allocate between Google and Meta based on your target audience. Additional spend can be added anytime.' },
      { title: 'Lead CRM System', description: 'All enquiries from Google Ads, Meta Ads, website, WhatsApp, and phone captured in one lead CRM. Auto-acknowledgement, follow-up reminders, lead scoring, and conversion tracking. No lead falls through the cracks.' },
      { title: 'Landing Page Optimization', description: 'If your ads click through to generic pages, we recommend and can build dedicated landing pages that match ad messaging. Higher conversion rates mean lower cost per enquiry.' },
      { title: '16 Posts Per Month', description: '4 additional posts beyond the Starter retainer  more frequency, more visibility, more engagement. Distributed across LinkedIn and other relevant platforms for your audience.' },
      { title: '2 Strategy Calls', description: 'Bi-weekly calls to review campaign performance, discuss budget allocation, review lead quality, and adjust strategy. More touchpoints mean faster optimization.' },
      { title: 'Cost-Per-Lead Reporting', description: 'Detailed reporting on cost per enquiry, cost per qualified lead, cost per conversion, and ROI by channel. Know exactly what each rupee of ad spend produces.' },
    ],

    howWeDoTitle: 'How It Works',
    howWeDoDescription: 'Month 1 is setup  accounts, campaigns, CRM, landing pages. From Month 2, it is optimization  analyzing data, improving campaigns, reducing cost per lead, and growing enquiry volume.',
    howWeDoSteps: [
      { step: 1, title: 'Campaign Setup', description: 'Google Ads and Meta Ads account setup, keyword research, audience targeting, ad copy creation, campaign structure, tracking pixels, and conversion goals.' },
      { step: 2, title: 'Lead CRM Setup', description: 'Deploy lead CRM, configure enquiry capture from all sources, set up auto-acknowledgement, follow-up sequences, and lead scoring rules.' },
      { step: 3, title: 'Campaign Launch', description: 'Launch campaigns with initial budgets, monitor for 3-5 days, optimize bids, adjust targeting, and add negative keywords based on early data.' },
      { step: 4, title: 'Content & Organic', description: 'Produce 16 posts per month, manage GBP, execute SEO updates. Ensure organic and paid channels reinforce each other.' },
      { step: 5, title: 'Bi-Weekly Optimization', description: 'Strategy calls every 2 weeks. Review cost-per-lead, conversion rates, lead quality. Adjust campaigns, budgets, and content based on data.' },
      { step: 6, title: 'Monthly Report & Plan', description: 'Comprehensive monthly report with cost-per-lead analysis, ROI calculation, and next month plan. Present findings and recommendations on strategy call.' },
    ],

    benefits: [
      { title: 'Professional Ad Management', description: 'No more wasted ad spend on wrong keywords and poor targeting. Professional campaign management specifically for logistics services generates enquiries at a fraction of the DIY cost per lead.' },
      { title: 'Every Enquiry Captured and Tracked', description: 'Lead CRM ensures enquiries from all channels flow into one pipeline with follow-up tracking. No lead is lost to a WhatsApp chat or missed phone call.' },
      { title: 'Know Your Cost Per Lead', description: 'Detailed reporting shows exactly what each enquiry costs from each channel. Make budget allocation decisions based on data, not gut feel.' },
      { title: 'Organic + Paid Synergy', description: 'Content marketing builds long-term authority while paid ads generate immediate enquiries. Together, they create a compounding effect  organic content supports ad credibility, ads drive traffic to content.' },
      { title: 'Landing Page Optimization', description: 'Dedicated landing pages that match ad messaging convert 2-3x better than generic homepage traffic. We build or optimize these as part of the retainer.' },
      { title: 'Bi-Weekly Optimization Cadence', description: 'Twice-monthly strategy calls mean campaigns are optimized continuously, not reviewed once a quarter when budget is already spent.' },
    ],

    beforeAfter: [
      { before: 'Running ads yourself  Rs.50,000 spend generates 3 enquiries at Rs.16,000 each', after: 'Professional management  same budget generates 10-15 enquiries at Rs.3,000-5,000 each' },
      { before: 'Ad clicks go to homepage  visitors bounce in 5 seconds', after: 'Dedicated landing pages with matching messaging  2-3x conversion rate' },
      { before: 'Enquiries in WhatsApp, email, Excel  no system, no follow-up', after: 'Lead CRM captures every enquiry with automated follow-up sequences' },
      { before: 'No idea what ads cost per enquiry  just know budget is spent', after: 'Detailed cost-per-lead reporting by channel, campaign, and keyword' },
      { before: 'Content and ads operate in silos  no synergy', after: 'Organic and paid channels coordinated  content supports ads, ads amplify content' },
      { before: 'Campaign reviewed once a quarter when budget is gone', after: 'Bi-weekly optimization  continuous improvement based on real data' },
    ],

    processTitle: 'Monthly Delivery Cycle',
    processTimeline: [
      { phase: 'Setup (Month 1)', duration: 'Weeks 1-2', deliverables: ['Ad account setup', 'Keyword research', 'Campaign creation', 'Lead CRM deployment', 'Tracking pixels'] },
      { phase: 'Campaign Launch', duration: 'Week 3', deliverables: ['Campaigns live', 'Initial budget deployed', 'Landing pages live', 'Lead capture active'] },
      { phase: 'Initial Optimization', duration: 'Week 4', deliverables: ['Bid optimization', 'Negative keywords', 'A/B testing started', 'First performance report'] },
      { phase: 'Ongoing Monthly', duration: 'Month 2 onwards', deliverables: ['Campaign management', 'Content creation (16 posts)', 'GBP management', 'Bi-weekly strategy calls'] },
      { phase: 'Monthly Report', duration: '1st of each month', deliverables: ['Performance report', 'Cost-per-lead analysis', 'ROI calculation', 'Next month plan'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics Ad Specialists', description: 'We have managed Google Ads and Meta Ads for 30+ logistics companies. We know which keywords generate enquiries (not clicks), which audiences convert, and how to write ad copy that speaks to logistics decision-makers.' },
      { title: 'Lead CRM Included', description: 'Most marketing agencies run ads and send you a spreadsheet of leads. We include a lead CRM that captures, tracks, and follows up on every enquiry. Leads are useless without a system to convert them.' },
      { title: 'Ad Spend Included', description: 'Rs.20,000 in ad spend is included in the retainer. No separate ad budget management, no agency markup on spend. What you pay is what goes to Google and Meta.' },
      { title: 'Cost-Per-Lead Guarantee Mindset', description: 'We optimize for cost per qualified enquiry, not clicks or impressions. Our reporting shows what matters  how much each real business enquiry costs, not how many people saw your ad.' },
    ],

    faq: [
      { question: 'How much ad spend do you recommend?', answer: 'For most logistics companies, Rs.20,000-40,000 per month is a good starting point. This generates 10-20 enquiries depending on your service and location. We include Rs.20,000 in the retainer and you can add more anytime based on results.' },
      { question: 'What if the ads do not generate enquiries?', answer: 'In the first month, we optimize aggressively  adjust keywords, targeting, ad copy, and landing pages. If cost per enquiry is above your target after 60 days, we recommend changes to campaign strategy or budget allocation. We do not keep spending without results.' },
      { question: 'Can I use my existing Google Ads account?', answer: 'Yes. We can work within your existing Google Ads and Meta Ads accounts. We set up conversion tracking, clean up any existing campaigns, and build new ones on top. Your account stays yours.' },
      { question: 'Do I need a landing page?', answer: 'Strongly recommended. Sending ad traffic to your homepage typically converts at 1-2%. A dedicated landing page that matches the ad message converts at 3-6%. We can build landing pages as part of the engagement or recommend improvements to existing pages.' },
      { question: 'How is the lead CRM different from the Lead CRM service?', answer: 'The lead CRM included in this retainer is a lighter version  enquiry capture, tracking, and follow-up reminders. If you need advanced features like lead scoring, automated sequences, and pipeline forecasting, consider our standalone Lead CRM service.' },
      { question: 'Can I upgrade or downgrade between retainer tiers?', answer: 'Yes. You can upgrade from Starter to Growth or from Growth to Accelerator at the start of any month. You can downgrade with 30 days notice. We scale with your business.' },
    ],
  },

  'accelerator-marketing-retainer': {
    slug: 'accelerator-marketing-retainer',
    category: 'marketing',
    categoryLabel: 'Marketing',
    number: '28',
    title: 'Accelerator Marketing Retainer',
    shortDescription: 'Full-channel marketing management with Rs.40,000 ad spend, WhatsApp automation, competitor intelligence, and quarterly business reviews.',

    heroTagline: 'Full-channel dominance. Market leadership.',
    heroDescription: 'Our most comprehensive marketing retainer  full management of all digital channels including Google Ads, Meta Ads, LinkedIn, content, SEO, WhatsApp marketing, and competitor intelligence. Designed for logistics companies targeting market leadership in their geography or service category.',

    problemTitle: 'The Problem: Competitors Are Out-Marketing You Everywhere',
    problemDescription: 'In competitive logistics markets  whether a specific city, corridor, or service category  the companies that win are the ones visible everywhere. Your competitor appears on Google when clients search, has an active LinkedIn presence, runs targeted ads, sends WhatsApp updates, and has a steady stream of enquiries. You have a website and a LinkedIn page. The gap between their marketing machine and your sporadic efforts translates directly to lost revenue.',
    problemBullets: [
      'Competitors appear in every Google search result, every LinkedIn feed, and every relevant online space  you are invisible',
      'Marketing is scattered  one person handles LinkedIn, someone else does ads, nobody owns the overall strategy',
      'No WhatsApp marketing  the channel your clients actually use is not part of your marketing mix',
      'No competitor intelligence  you do not know what competitors are spending on ads, what content they are posting, or what keywords they rank for',
      'No quarterly business review  marketing operates without accountability to revenue targets or growth metrics',
      'Budget allocated without data  marketing spend decisions based on what someone read or what a vendor pitched, not on performance data',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for established logistics companies with Rs.10 crore to Rs.50 crore revenue targeting market leadership in their geography or service category. If you want to dominate your market digitally and out-market your competitors on every channel, this is the retainer.',
    audienceSegments: [
      { role: 'Established Transporters', description: 'With 100+ vehicles targeting regional or national dominance who need to out-market smaller competitors' },
      { role: 'Large 3PL & 4PL Operators', description: 'Serving enterprise clients who need a professional digital presence matching their client\'s expectations' },
      { role: 'Logistics Companies Seeking Funding', description: 'Who need strong digital presence and growth metrics to show investors and board members' },
      { role: 'Market Leaders Defending Position', description: 'Who see competitors investing in digital marketing and need to maintain their leadership position' },
    ],

    whatWeDoTitle: 'What We Deliver Monthly',
    whatWeDoDescription: 'Full-channel marketing management  every digital touchpoint covered. Google Ads, Meta Ads, content marketing, SEO, WhatsApp marketing, competitor intelligence, and quarterly business reviews with revenue accountability.',
    whatWeDoItems: [
      'Full Google Ads and Meta Ads campaign management with Rs.40,000 included ad spend',
      '20+ content posts per month across LinkedIn, blog, and other relevant platforms',
      'WhatsApp marketing  broadcast lists, status updates, and enquiry handling automation',
      'Competitor intelligence monitoring  ad spending analysis, keyword rankings, content gaps, and strategy insights',
      'SEO management  technical SEO, content strategy, link building, and keyword targeting',
      'Quarterly Business Review (QBR)  detailed analysis of marketing ROI, revenue contribution, and strategic recommendations',
    ],

    features: [
      { title: 'Full Ad Management', description: 'Google Ads, Meta Ads, and LinkedIn Ads managed by specialists. Rs.40,000 ad spend included. Campaign strategy, creative design, bid optimization, audience targeting, and A/B testing across all platforms.' },
      { title: 'WhatsApp Marketing', description: 'WhatsApp Business API for marketing broadcasts, status updates, enquiry automation, and customer engagement. Leverage India\'s most-used messaging platform as a marketing channel.' },
      { title: '20+ Posts Per Month', description: 'High-volume content creation across platforms  LinkedIn posts, blog articles, website content, and social media. Enough volume to maintain top-of-mind awareness with your target audience.' },
      { title: 'Competitor Intelligence', description: 'Monthly monitoring of 5-8 competitors  their ad spending estimates, keyword rankings, content strategy, social media activity, and positioning. Know exactly what they are doing and where you can outmaneuver them.' },
      { title: 'Advanced SEO', description: 'Technical SEO audits, content strategy, keyword targeting, on-page optimization, and link building. Move from "found on page 3" to "ranking on page 1" for your target keywords.' },
      { title: 'Quarterly Business Review', description: 'Comprehensive quarterly review with revenue attribution, cost-per-acquisition, channel ROI, competitor benchmarking, and strategic recommendations. Present to management, investors, or board.' },
      { title: 'Lead CRM with Automation', description: 'Full lead CRM with multi-channel capture, automated sequences, lead scoring, pipeline management, and conversion tracking. Marketing handoff to sales is seamless and measurable.' },
      { title: 'Dedicated Team', description: 'Not one account manager  a dedicated team with a strategist, content writer, ads specialist, and SEO analyst. More resources, more expertise, better results.' },
    ],

    howWeDoTitle: 'How It Works',
    howWeDoDescription: 'Month 1 is comprehensive setup  all channels, all tracking, all integrations. From Month 2, the focus shifts to optimization, scaling, and competitive positioning. Quarterly reviews ensure alignment with business goals.',
    howWeDoSteps: [
      { step: 1, title: 'Comprehensive Setup', description: 'Audit all channels, set up tracking across all platforms, configure analytics, deploy lead CRM, establish competitor monitoring, and create the content and campaign strategy.' },
      { step: 2, title: 'Full Channel Launch', description: 'Launch campaigns across Google, Meta, and LinkedIn. Activate WhatsApp marketing. Begin content publishing at full volume. All tracking and attribution active.' },
      { step: 3, title: 'Aggressive Optimization', description: 'First 30 days focused on data collection and rapid optimization  adjust bids, targeting, content formats, and channel allocation based on early performance data.' },
      { step: 4, title: 'Scale & Expand', description: 'Double down on what works. Scale high-performing campaigns and content. Expand into new keywords, audiences, and platforms. Grow enquiry volume systematically.' },
      { step: 5, title: 'Competitive Positioning', description: 'Use competitor intelligence to identify gaps and opportunities. Position your brand in spaces competitors are not covering. Win keywords, audiences, and mindshare.' },
      { step: 6, title: 'Quarterly Business Review', description: 'Comprehensive QBR with revenue attribution, channel ROI, competitor benchmarking, and next quarter strategy. Data-driven decisions on marketing investment and direction.' },
    ],

    benefits: [
      { title: 'Dominant Digital Presence', description: 'Your company appears everywhere your potential clients look  Google search, LinkedIn feed, WhatsApp, industry websites. Consistent, professional, unavoidable presence in your market.' },
      { title: 'Lower Cost Per Acquisition', description: 'Full-channel management with Rs.40,000 ad spend and organic content creates a synergy effect. Organic content supports ad credibility, ads drive traffic to content, WhatsApp nurtures leads. Combined cost per acquisition drops 30-50% vs single-channel.' },
      { title: 'Competitive Intelligence', description: 'Know exactly what your competitors are spending, ranking for, and saying. Make strategic decisions based on competitive data, not assumptions. Identify and exploit their weaknesses.' },
      { title: 'Revenue Accountability', description: 'Quarterly Business Reviews with revenue attribution mean marketing is accountable to business results, not vanity metrics. You know exactly how much revenue marketing generated.' },
      { title: 'WhatsApp as a Marketing Channel', description: 'WhatsApp is where Indian business happens. Using it for marketing  not just operations  gives you a channel most competitors have not even considered.' },
      { title: 'Dedicated Team, Not One Person', description: 'A strategist, content writer, ads specialist, and SEO analyst working on your account. More expertise, more execution capacity, better results than a single account manager.' },
    ],

    beforeAfter: [
      { before: 'Competitors visible everywhere online  you are invisible', after: 'Dominant presence across Google, LinkedIn, WhatsApp, and industry platforms' },
      { before: 'Marketing scattered across different people with no strategy', after: 'Dedicated team with unified strategy across all channels' },
      { before: 'WhatsApp used only for operations, not marketing', after: 'WhatsApp as a marketing channel  broadcasts, engagement, enquiry automation' },
      { before: 'No idea what competitors are doing online', after: 'Monthly competitor intelligence  ad spend, rankings, content, positioning gaps' },
      { before: 'Marketing reports show clicks and impressions, not revenue', after: 'Quarterly Business Review with revenue attribution and cost per acquisition' },
      { before: 'Budget decisions based on vendor pitches and gut feel', after: 'Data-driven allocation across channels based on actual ROI performance' },
    ],

    processTitle: 'Quarterly Delivery Cycle',
    processTimeline: [
      { phase: 'Setup (Month 1)', duration: '4 weeks', deliverables: ['All channel audit', 'Tracking setup', 'Campaign strategy', 'Content calendar', 'Competitor baseline', 'Lead CRM'] },
      { phase: 'Launch & Optimize', duration: 'Months 1-2', deliverables: ['All channels live', 'Aggressive optimization', 'A/B testing', 'Content at full volume', 'WhatsApp marketing active'] },
      { phase: 'Scale & Position', duration: 'Month 3', deliverables: ['Scale winning campaigns', 'Competitive positioning', 'SEO content push', 'WhatsApp list growth', 'Lead nurturing sequences'] },
      { phase: 'QBR', duration: 'End of Quarter', deliverables: ['Revenue attribution report', 'Channel ROI analysis', 'Competitor benchmark', 'Next quarter strategy', 'Budget recommendation'] },
    ],

    whyNexgenReasons: [
      { title: 'Only Logistics Clients', description: 'We exclusively serve logistics companies. Every strategy, tactic, and piece of content is built for this industry. We are not a general agency that happens to have a logistics client.' },
      { title: 'Full-Stack Team', description: 'Strategist, content writer, ads specialist, and SEO analyst  not one person doing everything. Each specialist brings deep expertise in their channel.' },
      { title: 'Revenue Accountability', description: 'We measure success by revenue generated, not impressions delivered. Quarterly Business Reviews tie marketing spend to business outcomes. If it does not produce revenue, we change it.' },
      { title: 'Competitor Intelligence Included', description: 'Most agencies do not include competitor monitoring. We do, because knowing what your competitors are doing is essential to out-marketing them. This is a strategic advantage included at no extra cost.' },
    ],

    faq: [
      { question: 'How is this different from the Growth retainer?', answer: 'The Growth retainer covers Google Ads, Meta Ads, 16 posts, and a lead CRM. The Accelerator adds LinkedIn Ads, WhatsApp marketing, competitor intelligence, advanced SEO, 20+ posts, a dedicated team (vs one person), and quarterly business reviews. It is for companies that want market dominance, not just enquiry generation.' },
      { question: 'Can I choose which channels to focus on?', answer: 'Yes. While we recommend full-channel coverage for maximum impact, we can prioritize specific channels based on your audience and goals. For example, if your clients are on LinkedIn, we can weight more budget and content there.' },
      { question: 'What is the quarterly business review?', answer: 'A comprehensive presentation covering: marketing spend by channel, enquiries generated, cost per acquisition, revenue attributed to marketing, competitor benchmarking, keyword ranking progress, and strategic recommendations for next quarter. Typically presented to founders, management, or board.' },
      { question: 'How is competitor intelligence gathered?', answer: 'We use a combination of SEMrush/Ahrefs for SEO and ad spending data, social media monitoring tools, manual analysis of competitor content and campaigns, and industry intelligence. We present findings monthly and summarize trends quarterly.' },
      { question: 'Is there a minimum commitment?', answer: 'We recommend a 3-month minimum for the Accelerator retainer because Month 1 is setup, Month 2 is optimization, and Month 3 is when you see the compounding results. After 3 months, it is month-to-month with 30 days notice.' },
      { question: 'Can you handle multiple locations or service lines?', answer: 'Yes. Multi-location campaigns with location-specific targeting, and multi-service campaigns with service-specific messaging and landing pages are our specialty. Each location or service line gets its own campaign structure and tracking.' },
    ],
  },

  'seo-campaign': {
    slug: 'seo-campaign',
    category: 'marketing',
    categoryLabel: 'Marketing',
    number: '29',
    title: 'SEO Campaign (Logistics-Specific)',
    shortDescription: 'Logistics-focused SEO with keyword research, technical optimization, content strategy, link building, and monthly reporting.',

    heroTagline: 'Rank on page 1. Get organic enquiries. No ad spend.',
    heroDescription: 'A search engine optimization campaign built specifically for logistics companies. Target the keywords your potential clients actually search  not generic terms, but specific queries like "transport from Delhi to Mumbai" or "warehouse in Chennai". Technical SEO, content strategy, and link building designed for the Indian logistics market.',

    problemTitle: 'The Problem: Your Competitors Rank, You Do Not',
    problemDescription: 'When a potential client searches for logistics services in your area or for a specific route, your competitors appear on page 1 of Google. You are on page 3  or not ranked at all. This means every organic search enquiry goes to your competitors, and you are forced to rely entirely on referrals and paid ads for new business.',
    problemBullets: [
      'Not ranked for any target keywords  potential clients searching for your services find competitors instead',
      'No keyword strategy  you do not know what your potential clients search for or how much search volume exists',
      'Technical SEO issues  slow page speed, broken links, missing meta tags, and mobile usability problems hurt rankings',
      'No content strategy  website has 5-6 static pages and no blog. Google has no reason to rank you for informational queries',
      'No backlinks  your domain authority is low because no industry websites link to your site',
      'Organic traffic declining  every month you rank lower as competitors invest in SEO and you do not',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies that want to generate organic enquiries from Google search  enquiries that cost nothing per click and compound over time. If you are paying for every Google Ads enquiry and want to build a sustainable organic channel, this campaign delivers long-term ROI.',
    audienceSegments: [
      { role: 'Regional Logistics Companies', description: 'Targeting local search traffic  "transport company in Bangalore", "warehouse in Hyderabad", "packers and movers in Pune"' },
      { role: 'Route-Specific Transporters', description: 'Targeting corridor searches  "Delhi to Mumbai transport", "Chennai to Kolkata freight", "Ahmedabad to Jaipur truck service"' },
      { role: 'Service-Specialist Providers', description: 'Targeting niche searches  "cold chain logistics India", "ODC transport company", "project cargo forwarder"' },
      { role: 'Companies Tired of Paying Per Click', description: 'Spending Rs.50,000+ monthly on Google Ads who want to build organic traffic that generates enquiries without ongoing ad spend' },
    ],

    whatWeDoTitle: 'What We Deliver',
    whatWeDoDescription: 'A comprehensive SEO campaign with logistics-specific keyword research, technical optimization, content creation, link building, and monthly progress reporting. Built for Indian logistics search behavior.',
    whatWeDoItems: [
      'Logistics-specific keyword research  identify the exact search terms your potential clients use with search volume and difficulty analysis',
      'Technical SEO audit and optimization  site speed, mobile usability, structured data, crawl errors, and index coverage',
      'Content strategy and creation  blog articles, service pages, and landing pages targeting high-value keywords',
      'Link building  earn backlinks from logistics industry websites, directories, and publications',
      'Local SEO optimization  Google Business Profile, local citations, and location-specific landing pages',
      'Monthly reporting  keyword rankings, organic traffic, enquiries from organic, and strategic recommendations',
    ],

    features: [
      { title: 'Logistics Keyword Research', description: 'Deep keyword research specific to Indian logistics  route keywords, service keywords, location keywords, and long-tail queries. We find the terms your clients actually search for, not generic "logistics" terms with impossible competition.' },
      { title: 'Technical SEO Optimization', description: 'Complete technical audit and fix  page speed optimization, mobile responsiveness, meta tags, heading structure, schema markup for logistics services, XML sitemap, robots.txt, and Google Search Console setup.' },
      { title: 'Content Strategy & Creation', description: 'Monthly blog articles and service pages targeting your priority keywords. Content written by writers who understand logistics  no generic fluff that Google and readers both reject.' },
      { title: 'Link Building Campaign', description: 'Earn backlinks from logistics industry websites, Indian business directories, trade publications, and relevant blogs. Higher domain authority means higher rankings.' },
      { title: 'Local SEO Optimization', description: 'Google Business Profile optimization, local citation building (JustDial, IndiaMART, trade directories), location-specific landing pages, and local keyword targeting.' },
      { title: 'Monthly Reporting', description: 'Track keyword rankings (position changes), organic traffic growth, enquiries from organic search, top-performing pages, and competitor ranking comparison. Clear, actionable data every month.' },
      { title: 'On-Page Optimization', description: 'Optimize existing pages  title tags, meta descriptions, headings, internal links, image alt text, and content depth. Every page on your site working to rank for target keywords.' },
      { title: 'Competitor SEO Analysis', description: 'Monitor what keywords your competitors rank for, what content they publish, and what backlinks they earn. Identify opportunities to outrank them on high-value keywords.' },
    ],

    howWeDoTitle: 'How We Work',
    howWeDoDescription: 'Month 1 is audit and foundation  technical fixes, keyword research, and content strategy. Months 2-3 are content creation and link building. Months 4-6 are scaling and optimization. Real results typically start appearing in months 3-6.',
    howWeDoSteps: [
      { step: 1, title: 'SEO Audit & Keyword Research', description: 'Complete technical audit of your website. Research 100+ logistics-specific keywords with search volume, difficulty, and intent analysis. Prioritize keywords with best traffic potential and lowest competition.' },
      { step: 2, title: 'Technical Optimization', description: 'Fix all technical issues  page speed, mobile, meta tags, schema, crawlability, indexation. Set up Google Search Console and Google Analytics with conversion tracking.' },
      { step: 3, title: 'Content Strategy', description: 'Develop a 6-month content calendar targeting priority keywords. Plan blog articles, service pages, and landing pages. Each piece of content designed to rank for specific search queries.' },
      { step: 4, title: 'Content Creation & Publishing', description: 'Write and publish 4-8 optimized content pieces per month  blog articles, guides, service pages. Every piece targets specific keywords and provides genuine value to searchers.' },
      { step: 5, title: 'Link Building', description: 'Execute link building outreach  logistics directories, industry publications, guest posts, and partnership links. Target 10-20 quality backlinks per month.' },
      { step: 6, title: 'Monitor, Report & Optimize', description: 'Track rankings, traffic, and enquiries monthly. Optimize underperforming content. Pivot strategy based on what Google rewards. Report progress and adjust plans.' },
    ],

    benefits: [
      { title: 'Organic Enquiries Without Ad Spend', description: 'Once you rank, every click is free. Unlike Google Ads where you pay Rs.100-500 per click, organic traffic generates enquiries at zero marginal cost. ROI compounds over time.' },
      { title: 'Compounding Returns', description: 'SEO is an investment that grows. Content published today ranks better in 6 months. Backlinks earned today boost authority for future content. Unlike ads that stop when you stop paying, SEO results persist and compound.' },
      { title: 'Trust and Credibility', description: 'Users trust organic results 5-6x more than paid ads. Ranking organically signals to potential clients that you are an established, authoritative company in your space.' },
      { title: 'Target High-Intent Searches', description: 'Someone searching "transport company in Bangalore" has higher intent than someone scrolling LinkedIn. SEO captures prospects at the moment they are actively looking for your services.' },
      { title: 'Competitive Advantage', description: 'Most Indian logistics companies do not invest in SEO seriously. Early movers in SEO build a gap that is expensive and time-consuming for competitors to close.' },
      { title: 'Measurable Long-Term ROI', description: 'Monthly reports track rankings, traffic, and organic enquiries. Over 12 months, you can calculate the exact ROI of your SEO investment  and it typically exceeds 5-10x.' },
    ],

    beforeAfter: [
      { before: 'Not ranked for any logistics keywords  invisible on Google', after: 'Page 1 rankings for targeted keywords  found by potential clients actively searching' },
      { before: 'Every enquiry costs Rs.200-500 through Google Ads', after: 'Organic enquiries at zero marginal cost  compounding returns over time' },
      { before: 'Website has 5 static pages  no reason for Google to rank it', after: '20+ optimized pages targeting specific keywords with valuable content' },
      { before: 'Zero backlinks  domain authority too low to compete', after: 'Quality backlinks from logistics websites and directories building authority' },
      { before: 'No local search presence  competitors show up in map results', after: 'Optimized Google Business Profile and local citations dominating local search' },
      { before: 'Declining organic traffic as competitors invest in SEO', after: 'Growing organic traffic  6-12 month compounding growth curve' },
    ],

    processTitle: '6-Month SEO Campaign Structure',
    processTimeline: [
      { phase: 'Audit & Foundation', duration: 'Month 1', deliverables: ['Technical SEO audit', 'Keyword research (100+ terms)', 'Priority keyword list', 'Technical fixes', 'Analytics setup'] },
      { phase: 'Content & On-Page', duration: 'Months 2-3', deliverables: ['Content calendar', '4-8 articles per month', 'On-page optimization', 'Schema markup', 'Internal linking'] },
      { phase: 'Link Building', duration: 'Months 2-6', deliverables: ['10-20 backlinks per month', 'Directory submissions', 'Guest post outreach', 'Industry partnerships'] },
      { phase: 'Local SEO', duration: 'Months 1-3', deliverables: ['GBP optimization', 'Local citations', 'Location pages', 'Review strategy'] },
      { phase: 'Optimization & Scaling', duration: 'Months 4-6', deliverables: ['Content optimization', 'New keyword opportunities', 'Competitor analysis', 'Authority building'] },
      { phase: 'Monthly Reporting', duration: 'Ongoing', deliverables: ['Ranking report', 'Traffic analysis', 'Enquiry tracking', 'Strategy adjustments'] },
    ],

    whyNexgenReasons: [
      { title: 'Logistics-Specific Keyword Expertise', description: 'We know that "transport from Delhi to Mumbai" has different search volume and intent than "freight forwarding India." Our keyword research is specific to Indian logistics search behavior  not generic SEO tools that miss the nuances.' },
      { title: 'Content Writers Who Know Logistics', description: 'Our content writers understand FTL vs PTL, 3PL vs 4PL, e-way bills, and route economics. They write content that is genuinely useful to logistics decision-makers  content Google rewards and readers trust.' },
      { title: 'Indian Market Focus', description: 'We optimize for Google India, Indian search behavior, local Indian directories (JustDial, IndiaMART), and Indian business language. Not adapted from US/UK SEO templates.' },
      { title: 'Long-Term Partnership Mindset', description: 'SEO is a long-term play. We work with clients for 6-12 months minimum because that is when real results appear. We do not sell quick fixes or guarantee overnight rankings  we build sustainable organic growth.' },
    ],

    faq: [
      { question: 'How long before I see results?', answer: 'SEO is a 3-6 month investment. Technical fixes show impact in 4-8 weeks. Content rankings start appearing in months 3-4. Meaningful traffic and enquiry growth typically begins in months 4-6 and compounds through months 6-12.' },
      { question: 'Can you guarantee page 1 rankings?', answer: 'No one can guarantee Google rankings. What we guarantee is a professional SEO campaign with measurable progress  improved rankings, growing traffic, and increasing organic enquiries. We use data-driven strategies that have produced results for 20+ logistics clients.' },
      { question: 'What keywords will you target?', answer: 'We research 100+ keywords specific to your services and locations. We prioritize based on search volume, competition level, and commercial intent. You review and approve the keyword strategy before we begin.' },
      { question: 'Do you write the content?', answer: 'Yes. Our content writers specialize in logistics. They understand the terminology, the audience, and what makes content rank. All content is reviewed by you before publishing.' },
      { question: 'How is this different from the SEO in the marketing retainers?', answer: 'The marketing retainers include basic SEO management  meta tags, monitoring, and recommendations. This dedicated SEO campaign includes deep keyword research, content creation, link building, and technical optimization. It is for companies that want SEO as a primary channel, not a checkbox.' },
      { question: 'What if I already rank for some keywords?', answer: 'We build on existing rankings. If you rank on page 2 for valuable keywords, our focus is moving you to page 1. If you rank on page 1 for some terms, we expand to related keywords you are not yet targeting.' },
    ],
  },

  'linkedin-authority-building': {
    slug: 'linkedin-authority-building',
    category: 'marketing',
    categoryLabel: 'Marketing',
    number: '30',
    title: 'LinkedIn Authority Building',
    shortDescription: 'Founder personal brand and company page growth with thought leadership content, engagement strategy, and audience building.',

    heroTagline: 'Your voice. Your market. Your authority.',
    heroDescription: 'A LinkedIn authority building program that positions the founder and company as thought leaders in the Indian logistics space. Personal branding for the founder, company page growth, thought leadership content, engagement strategy, and measurable audience building on India\'s most important professional network.',

    problemTitle: 'The Problem: Nobody Knows Who You Are on LinkedIn',
    problemDescription: 'In Indian logistics, business happens through relationships and reputation. LinkedIn is where those relationships start  procurement managers research potential vendors, industry peers discover thought leaders, and journalists find expert sources. Yet most logistics founders have a bare-bones LinkedIn profile, post once a quarter, and have 500 connections when they should have 5,000+ with industry influence.',
    problemBullets: [
      'Founder LinkedIn profile is a digital resume  not a thought leadership platform that attracts business',
      'Company LinkedIn page has 200 followers and 5 posts from last year  zero industry influence',
      'No content strategy  occasional posts about company milestones get 12 likes and no business impact',
      'No engagement strategy  not connecting with prospects, not commenting on industry discussions, not building relationships',
      'Competitors and peers are building authority on LinkedIn  they are the ones getting invited to panels, quoted in articles, and approached by potential clients',
      'No measurable impact  cannot tell if LinkedIn activity generates enquiries, partnerships, or brand awareness',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics founders and senior executives who want to build personal and company authority on LinkedIn. If you want to be known as a thought leader in your specific logistics niche  not just another transporter  this program builds that positioning systematically.',
    audienceSegments: [
      { role: 'Logistics Founders & CEOs', description: 'Who want to be recognized as industry thought leaders and attract business through personal brand' },
      { role: 'Senior Logistics Executives', description: 'Building a professional reputation for career growth, speaking opportunities, and industry influence' },
      { role: 'Second-Generation Logistics Leaders', description: 'Taking over family businesses who need to build their own professional identity and network' },
      { role: 'Logistics Company Leaders', description: 'Targeting enterprise clients, partnerships, or investor relationships where personal credibility is a differentiator' },
    ],

    whatWeDoTitle: 'What We Deliver',
    whatWeDoDescription: 'A comprehensive LinkedIn authority building program  founder profile optimization, content creation, engagement strategy, audience growth tactics, and measurable impact tracking. We build your voice, your network, and your influence.',
    whatWeDoItems: [
      'Founder LinkedIn profile optimization  headline, about section, experience, featured content, and recommendations strategy',
      '8-12 thought leadership posts per month  industry insights, opinions, frameworks, and personal stories that build authority',
      'Engagement strategy  daily connection requests, comment strategy on industry posts, and direct messaging for relationship building',
      'Company page management  optimized company page with regular updates, employee advocacy, and follower growth',
      'Monthly analytics  profile views, content reach, engagement rate, follower growth, enquiry attribution, and network quality metrics',
    ],

    features: [
      { title: 'Profile Optimization', description: 'Transform your LinkedIn profile from a resume to a thought leadership platform. Compelling headline (not "Founder at X"), authority-building about section, featured content showcasing your best work, and experience descriptions that tell your story.' },
      { title: 'Thought Leadership Content', description: '8-12 posts per month that position you as an expert  not a self-promoter. Industry insights, contrarian opinions, operational frameworks, lessons learned, and personal stories that resonate with logistics professionals.' },
      { title: 'Engagement Strategy', description: 'Daily engagement plan  connect with 5-10 target prospects per day, comment thoughtfully on 5-10 industry posts, participate in relevant discussions. Build relationships before you need them.' },
      { title: 'Content Formats', description: 'Mix of formats for maximum reach  text posts for insights, carousel posts for frameworks, video scripts for keynotes, poll posts for engagement, and article posts for deep dives. Each format optimized for LinkedIn\'s algorithm.' },
      { title: 'Company Page Growth', description: 'Optimized company page with compelling description, regular updates, employee advocacy program, and follower growth strategy. Company page supports and amplifies founder content.' },
      { title: 'Network Building', description: 'Strategic connection requests targeting your ideal audience  logistics decision-makers, industry journalists, potential partners, and peers. Quality over quantity  5,000 relevant connections vs 50,000 random ones.' },
      { title: 'Analytics & Attribution', description: 'Track profile views, content reach and engagement, follower growth rate, enquiry attribution (who reached out after seeing your content), and network quality score. Measure what matters.' },
      { title: 'Speaking & PR Opportunities', description: 'Position you for speaking invitations, podcast appearances, journalist quotes, and industry panel discussions. LinkedIn authority creates offline opportunities.' },
    ],

    howWeDoTitle: 'How We Build Your Authority',
    howWeDoDescription: 'Week 1 is profile transformation and strategy. Week 2-4 is content launch and engagement activation. Month 2-3 is growth and optimization. By month 6, you should see measurable increases in profile views, connections, and business enquiries from LinkedIn.',
    howWeDoSteps: [
      { step: 1, title: 'Profile Transformation', description: 'Rewrite headline, about section, and experience. Add featured content. Optimize for keywords and searchability. First impression should be "this person is an authority."' },
      { step: 2, title: 'Content Strategy & Calendar', description: 'Define your unique point of view, content pillars, and posting cadence. Create first month\'s content calendar. Establish brand voice that is authoritative but approachable.' },
      { step: 3, title: 'Content Creation & Approval', description: 'Write 8-12 posts per month. Each post has a clear purpose  educate, inspire, provoke thought, or share experience. You review and approve every post before publishing.' },
      { step: 4, title: 'Engagement Activation', description: 'Daily engagement plan executed  connection requests, comments on industry posts, responses to your comments, and direct messaging to build relationships with key contacts.' },
      { step: 5, title: 'Audience Growth', description: 'Strategic network building targeting your ideal audience. Connection request templates, follow-up messages, and relationship nurturing sequences.' },
      { step: 6, title: 'Analytics & Iteration', description: 'Monthly analytics review. Identify which content formats and topics generate the most reach, engagement, and business impact. Double down on what works.' },
    ],

    benefits: [
      { title: 'Recognized Industry Authority', description: 'Consistent, valuable content positions you as a go-to expert in your logistics niche. When procurement managers research vendors, they find your thought leadership content, not just a company page.' },
      { title: 'Enquiries Come to You', description: 'When you build authority, prospects reach out directly  "I have been following your posts and would like to discuss a partnership." Inbound enquiries from LinkedIn have 3-5x higher conversion rates than outbound.' },
      { title: 'Speaking & PR Opportunities', description: 'A strong LinkedIn profile is your calling card for conference organizers, podcast hosts, and journalists. Authority on LinkedIn translates to offline opportunities and media mentions.' },
      { title: 'Competitive Differentiation', description: 'In a market where most logistics founders are invisible on LinkedIn, your consistent presence and thought leadership create a significant competitive advantage. You are the expert, they are unknown.' },
      { title: 'Network Quality Improvement', description: 'Strategic connection building means your network is filled with decision-makers, not random contacts. When you need an introduction, a partnership, or a reference, your LinkedIn network delivers.' },
      { title: 'Recruitment & Talent Attraction', description: 'Top logistics talent researches companies and leaders on LinkedIn before joining. A strong founder profile and active company page attract better candidates.' },
    ],

    beforeAfter: [
      { before: 'LinkedIn profile is a digital resume with 500 connections', after: 'Thought leadership platform with 5,000+ relevant connections and industry influence' },
      { before: 'Post once a quarter about company milestones  12 likes', after: '8-12 posts per month with insights, opinions, and stories  1,000+ reach per post' },
      { before: 'No engagement strategy  connections sit dormant', after: 'Daily engagement building relationships with decision-makers before you need them' },
      { before: 'Competitors are the ones quoted in articles and invited to panels', after: 'You are the industry voice  speaking invites, media quotes, and expert positioning' },
      { before: 'All business comes from referrals and outbound sales', after: 'Inbound enquiries from LinkedIn  prospects who reach out because they follow your content' },
      { before: 'Cannot tell if LinkedIn activity generates any business value', after: 'Monthly analytics showing profile views, content reach, and enquiry attribution' },
    ],

    processTitle: 'Program Timeline',
    processTimeline: [
      { phase: 'Profile Transformation', duration: 'Week 1', deliverables: ['Profile rewrite', 'Headline optimization', 'Featured content', 'Company page audit', 'Photo/content guidance'] },
      { phase: 'Strategy & Content Launch', duration: 'Weeks 2-4', deliverables: ['Content pillars defined', 'First month calendar', 'Content creation started', 'Engagement plan activated'] },
      { phase: 'Growth Phase', duration: 'Months 2-3', deliverables: ['Content optimization based on data', 'Network building active', 'Engagement strategy refined', 'First business enquiries'] },
      { phase: 'Authority Phase', duration: 'Months 4-6', deliverables: ['Consistent authority positioning', 'Speaking opportunities', 'Media mentions', 'Partnership enquiries'] },
      { phase: 'Monthly Reporting', duration: 'Ongoing', deliverables: ['Profile views', 'Content reach & engagement', 'Follower growth', 'Enquiry attribution', 'Strategy adjustments'] },
    ],

    whyNexgenReasons: [
      { title: 'We Understand Logistics Voices', description: 'We know what resonates with Indian logistics professionals  the challenges, the opinions, the stories. Our content is not generic LinkedIn advice rehashed  it is logistics-specific thought leadership that your peers and prospects actually want to read.' },
      { title: 'Founder-Focused, Not Brand-Focused', description: 'LinkedIn is a personal platform. People connect with people, not logos. Our strategy builds the founder\'s personal brand, which then lifts the company brand. This is the correct approach for B2B logistics.' },
      { title: 'Content That Builds Authority, Not Just Activity', description: 'Posting daily quotes and motivational images generates vanity metrics. We create substantive content  industry insights, operational frameworks, contrarian opinions  that actually builds authority and attracts business enquiries.' },
      { title: 'Engagement + Content, Not Just Content', description: 'Most LinkedIn programs only create content. We also execute a daily engagement strategy  commenting, connecting, messaging  because relationships drive LinkedIn business, not just content visibility.' },
    ],

    faq: [
      { question: 'Do I need to record videos?', answer: 'Video is optional, not required. Many successful LinkedIn thought leaders use only text and image posts. We recommend text posts, carousel posts, and articles as the core format. If you want to add video later, we can script and guide you.' },
      { question: 'How much of my time is required?', answer: 'After the initial profile transformation (1-2 hours of your time for input and review), your ongoing time investment is approximately 1-2 hours per month: reviewing and approving content calendar, and a 30-minute monthly strategy call. We handle all writing, posting, and engagement.' },
      { question: 'Will people know it is not me writing the posts?', answer: 'We write in your voice based on interviews, your past content, and your communication style. Every post is approved by you before publishing. The content reflects your genuine opinions and experiences  we just help you articulate them more consistently and effectively.' },
      { question: 'What if I do not have a strong network yet?', answer: 'That is exactly why this program exists. We start with profile optimization (to make the right first impression) and then systematically build your network with targeted connection requests and engagement. Growing from 500 to 5,000 relevant connections is a core objective.' },
      { question: 'How long before I see business enquiries from LinkedIn?', answer: 'Most clients see their first LinkedIn-generated enquiry in months 2-3. Meaningful, consistent enquiry flow typically starts in months 4-6. LinkedIn authority is a medium-term investment with long-term compounding returns.' },
      { question: 'Can you also manage the company LinkedIn page?', answer: 'Yes. Company page management is included. We optimize the company page, post updates, manage employee advocacy, and track follower growth. The founder\'s personal brand and company page work together to amplify reach.' },
    ],
  },
  /* ═══════════════════════════════════════════════════════════════
     CATEGORY 6: CONSULTING (4 services)
     ═══════════════════════════════════════════════════════════════ */

  'digital-transformation-roadmap': {
    slug: 'digital-transformation-roadmap',
    category: 'consulting',
    categoryLabel: 'Consulting',
    number: '31',
    title: 'Digital Transformation Roadmap',
    shortDescription: '90-day assessment, gap analysis, technology recommendations, and prioritized investment plan for logistics companies going digital.',

    heroTagline: 'From chaos to clarity. One roadmap.',
    heroDescription: 'A structured 90-day digital transformation assessment that maps your current operations, identifies technology gaps, evaluates solutions, and delivers a prioritized investment roadmap. Built for Indian logistics companies that know they need to modernize but do not know where to start or what to invest in first.',

    problemTitle: 'The Problem: You Know You Need to Go Digital, But Where Do You Start?',
    problemDescription: 'Every logistics company owner in India knows they need technology  a TMS, a website, automation, better data. But the options are overwhelming, the sales pitches from vendors are contradictory, and the fear of investing in the wrong thing at the wrong time creates decision paralysis. The result is no action, continued reliance on manual processes, and falling further behind competitors who are digitizing.',
    problemBullets: [
      'Overwhelming number of technology options  TMS, WMS, GPS, CRM, ERP, WhatsApp bots, AI  with no clarity on what to prioritize',
      'Vendor sales pitches promise everything and deliver nothing  you have been burned before by technology that did not work',
      'No objective assessment of what your operation actually needs vs what vendors want to sell you',
      'Fear of investing Rs.10-50 lakh in the wrong technology at the wrong time  decision paralysis',
      'Internal team does not have the technical expertise to evaluate options  depend on vendor recommendations that are self-serving',
      'No roadmap connecting current state to desired future state  you know where you want to be but not how to get there',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics company owners and CEOs who are ready to invest in technology but need an objective, structured assessment before committing budget. If you have Rs.5 lakh to Rs.50 lakh earmarked for technology but are not sure where to spend it, this roadmap gives you the clarity and confidence to invest wisely.',
    audienceSegments: [
      { role: 'Logistics Founders & CEOs', description: 'Ready to modernize but need objective guidance on what to build, buy, and prioritize' },
      { role: 'CFOs & Finance Heads', description: 'Who need a structured technology investment plan with ROI projections, not vendor-driven spending' },
      { role: 'Second-Generation Leaders', description: 'Taking over family businesses and wanting to introduce technology with minimal disruption to existing operations' },
      { role: 'Companies That Have Been Burned', description: 'Previously invested in technology that did not work and want to avoid repeating the mistake' },
    ],

    whatWeDoTitle: 'What We Deliver',
    whatWeDoDescription: 'A 90-day assessment that produces a comprehensive digital transformation roadmap  technology-agnostic recommendations based on your actual operational needs, prioritized by impact and ease of implementation.',
    whatWeDoItems: [
      'Current state assessment  map every manual process, data flow, pain point, and technology gap in your operation',
      'Technology landscape evaluation  assess TMS, WMS, GPS, CRM, ERP, and automation options relevant to your specific needs',
      'Build vs buy analysis  determine which solutions should be custom-built, which should be bought off-the-shelf, and which can be deferred',
      'Prioritized investment roadmap  phased plan showing what to invest in first, second, and third with expected ROI and timelines',
      'Vendor evaluation framework  objective criteria for evaluating technology vendors beyond their sales pitches',
      'Implementation readiness assessment  identify organizational, technical, and cultural readiness for each technology adoption',
    ],

    features: [
      { title: 'Current State Mapping', description: 'Detailed documentation of your current operations  every manual workflow, data flow, pain point, and inefficiency. We walk your warehouse, ride with your dispatch team, and sit with your billing team to understand reality, not assumptions.' },
      { title: 'Technology Landscape Evaluation', description: 'Objective assessment of technology options relevant to your operation  TMS, WMS, GPS, CRM, ERP, automation tools. Not a vendor pitch  an analysis of what solves your specific problems.' },
      { title: 'Build vs Buy Analysis', description: 'For each technology need, determine whether to custom-build (unique workflows), buy off-the-shelf (standard processes), or defer (low impact). Save money by building only what needs to be custom.' },
      { title: 'Prioritized Investment Roadmap', description: '3-phase roadmap: Phase 1 (quick wins, 0-3 months), Phase 2 (core systems, 3-9 months), Phase 3 (advanced capabilities, 9-18 months). Each phase with specific investments, timelines, and expected ROI.' },
      { title: 'Vendor Evaluation Framework', description: 'Objective criteria for evaluating vendors  features, pricing, support, implementation timeline, Indian market experience, and client references. Never evaluate a vendor based on their demo alone again.' },
      { title: 'ROI Projections', description: 'For each recommended investment, project the expected return  cost savings, revenue increase, productivity improvement, and payback period. Quantified business case for every technology decision.' },
      { title: 'Implementation Readiness', description: 'Assess organizational readiness  team skills, change management capacity, data quality, and leadership commitment. Identify readiness gaps that could derail implementation and how to address them.' },
      { title: 'Risk Assessment', description: 'Identify risks for each technology adoption  implementation risk, adoption risk, vendor lock-in risk, and technology obsolescence risk. Mitigation strategies for each.' },
    ],

    howWeDoTitle: 'How We Work',
    howWeDoDescription: 'A structured 90-day process with on-site assessment, stakeholder interviews, technology research, and roadmap development. You get a comprehensive document and presentation that you can use to make investment decisions with confidence.',
    howWeDoSteps: [
      { step: 1, duration: 'Weeks 1-2', title: 'Discovery & Stakeholder Interviews', description: 'Interview founder, operations head, finance head, IT person (if any), and frontline staff. Understand goals, pain points, priorities, constraints, and previous technology experiences.' },
      { step: 2, duration: 'Weeks 3-5', title: 'On-Site Operational Assessment', description: 'Walk through operations  dispatch, warehouse, billing, customer service. Map every manual process, data flow, and technology touchpoint. Identify bottlenecks and automation opportunities.' },
      { step: 3, duration: 'Weeks 6-8', title: 'Technology Research & Evaluation', description: 'Research relevant technology options, evaluate vendors, analyze build vs buy trade-offs, and project ROI for each recommendation. Objective, vendor-neutral analysis.' },
      { step: 4, duration: 'Weeks 9-10', title: 'Roadmap Development', description: 'Create phased roadmap with priorities, timelines, budgets, and expected outcomes. Map dependencies between technology investments. Define quick wins and long-term strategic investments.' },
      { step: 5, duration: 'Weeks 11-12', title: 'Presentation & Review', description: 'Present findings and roadmap to leadership team. Walk through current state gaps, recommended investments, ROI projections, and implementation approach. Answer questions and refine based on feedback.' },
      { step: 6, duration: 'Ongoing', title: 'Final Roadmap Delivery', description: 'Deliver comprehensive roadmap document with current state analysis, technology recommendations, vendor evaluation framework, implementation plan, and risk assessment. Your decision-making reference document.' },
    ],

    benefits: [
      { title: 'Clarity and Confidence', description: 'Stop guessing and start investing with confidence. A structured roadmap eliminates the overwhelm and gives you a clear, prioritized plan based on your actual operational needs.' },
      { title: 'Avoid Expensive Mistakes', description: 'Build vs buy analysis and vendor evaluation framework prevent you from investing Rs.10-50 lakh in the wrong technology. The roadmap costs a fraction of a bad technology investment.' },
      { title: 'Objective, Vendor-Neutral Advice', description: 'We do not sell software. Our recommendations are based on what works for your operation, not what generates commission for us. Complete objectivity.' },
      { title: 'Phased Investment Approach', description: 'Start with quick wins that generate visible results and build internal confidence. Then invest in core systems. Then advanced capabilities. Each phase justified by the results of the previous one.' },
      { title: 'Quantified ROI for Every Decision', description: 'Every technology recommendation includes projected ROI  cost savings, revenue increase, or productivity improvement. Investment decisions backed by numbers, not vendor promises.' },
      { title: 'Buy-In Across the Team', description: 'The stakeholder interview process builds buy-in across the organization. When leadership, operations, and finance all contribute to the roadmap, implementation has support from day one.' },
    ],

    beforeAfter: [
      { before: 'Overwhelmed by technology options with no clarity on what to prioritize', after: 'Clear, phased roadmap showing exactly what to invest in and when' },
      { before: 'Relying on vendor sales pitches for technology decisions', after: 'Objective, vendor-neutral analysis with evaluation framework' },
      { before: 'Fear of investing in the wrong technology  decision paralysis', after: 'Confident investment decisions backed by data and operational analysis' },
      { before: 'No connection between current state problems and future technology solutions', after: 'Gap analysis linking every pain point to specific technology solutions' },
      { before: 'No ROI projections  cannot justify technology spend to board or partners', after: 'Every recommendation has quantified ROI, payback period, and risk assessment' },
      { before: 'Technology investments made in silos without overall strategy', after: 'Coordinated technology strategy aligned with business goals and operational realities' },
    ],

    processTitle: '90-Day Engagement Timeline',
    processTimeline: [
      { phase: 'Discovery', duration: 'Weeks 1-2', deliverables: ['Stakeholder interviews', 'Operational walkthrough', 'Pain point documentation', 'Goal alignment'] },
      { phase: 'Assessment', duration: 'Weeks 3-5', deliverables: ['Current state map', 'Data flow analysis', 'Technology gap identification', 'Process efficiency baseline'] },
      { phase: 'Research', duration: 'Weeks 6-8', deliverables: ['Technology options evaluation', 'Build vs buy analysis', 'Vendor landscape mapping', 'ROI projections'] },
      { phase: 'Roadmap', duration: 'Weeks 9-10', deliverables: ['Phased investment plan', 'Priority matrix', 'Timeline and budget', 'Implementation approach'] },
      { phase: 'Presentation', duration: 'Weeks 11-12', deliverables: ['Leadership presentation', 'Q&A and refinement', 'Stakeholder buy-in', 'Final roadmap document'] },
    ],

    whyNexgenReasons: [
      { title: 'We Build, We Do Not Sell Software', description: 'Unlike technology consultants who earn commissions from software vendors, we are a development company. Our recommendation to build or buy is based purely on what is best for your operation. Complete objectivity.' },
      { title: 'We Understand Indian Logistics Operations', description: 'We have assessed and built technology for 50+ logistics companies in India. We understand the operational realities  GST compliance, multi-state operations, driver management, route economics  that generic consultants miss.' },
      { title: 'Roadmap Becomes Reality With Us', description: 'Most consulting firms deliver a document and disappear. We deliver a roadmap and can implement it. If you choose to proceed with any technology investment, we can build it  no handoff to a third party.' },
      { title: 'Founder-to-Founder Perspective', description: 'Our assessments are led by people who understand logistics business realities  revenue pressure, team constraints, cash flow management, and the fear of investing in technology that does not work. Practical advice, not academic frameworks.' },
    ],

    faq: [
      { question: 'Is this a technology audit or a strategy engagement?', answer: 'Both. It is a comprehensive assessment that covers current operations (audit), technology options (evaluation), and investment priorities (strategy). The output is a practical roadmap, not a theoretical report.' },
      { question: 'Do you recommend your own services in the roadmap?', answer: 'We disclose our capabilities transparently. If a recommendation aligns with our services, we mention it. But the roadmap also identifies needs best served by other vendors or off-the-shelf software. Objectivity is the priority.' },
      { question: 'What if I disagree with the recommendations?', answer: 'The roadmap is a recommendation, not a mandate. We present our analysis and reasoning, and you make the final decisions. We also refine recommendations based on your feedback during the review phase.' },
      { question: 'Can the roadmap be used to get investor or board approval?', answer: 'Yes. The roadmap document includes current state analysis, ROI projections, risk assessment, and phased investment plan  exactly the format investors and boards need to evaluate and approve technology investments.' },
      { question: 'How much does the roadmap cost?', answer: 'The 90-day digital transformation roadmap starts at Rs.50,000 and goes up to Rs.1,00,000 depending on the complexity of your operations and number of locations assessed. This is a fraction of the cost of a single wrong technology investment.' },
      { question: 'What if I want to implement the roadmap with you?', answer: 'That is the ideal outcome. Since we built the roadmap, we can implement it without the knowledge transfer delays and miscommunication risks of switching to a different vendor. Implementation proposals can be prepared immediately after roadmap delivery.' },
    ],
  },

  'vendor-shortlisting-corporate-positioning': {
    slug: 'vendor-shortlisting-corporate-positioning',
    category: 'consulting',
    categoryLabel: 'Consulting',
    number: '32',
    title: 'Vendor Shortlisting & Corporate Positioning',
    shortDescription: 'Positioning strategy for passing Tata, Reliance, Amazon, and other corporate vendor screenings with professional credentials and digital presence.',

    heroTagline: 'Pass the vendor screen. Win the corporate contract.',
    heroDescription: 'A positioning and credentialing service that prepares your logistics company to pass corporate vendor screening processes  Tata, Reliance, Amazon, Flipkart, ITC, and other major Indian corporations. We build the professional digital presence, documentation, and compliance framework that procurement teams evaluate during vendor shortlisting.',

    problemTitle: 'The Problem: You Keep Getting Rejected at the Vendor Screening Stage',
    problemDescription: 'Major Indian corporations have rigorous vendor screening processes that evaluate logistics providers on multiple criteria  GST compliance, digital presence, operational capability documentation, financial stability, insurance coverage, technology systems, and sustainability practices. Many capable logistics companies fail these screenings not because of operational capability, but because of poor documentation, outdated digital presence, and missing credentials.',
    problemBullets: [
      'Corporate procurement teams Google your company before shortlisting  an outdated or non-existent website eliminates you immediately',
      'Vendor registration forms require documents you do not have organized  GST certificates, insurance papers, fleet details, compliance records',
      'No professional capability deck or company profile document  procurement teams cannot evaluate your service capabilities',
      'LinkedIn and digital presence looks unprofessional  procurement decision-makers judge credibility by online presence',
      'Missing compliance documentation  ISO certification, RCMC, IATA, trade licenses, and industry registrations that corporate vendors require',
      'No case studies or client references formatted for corporate procurement evaluation',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics companies with the operational capability to serve corporate clients but who keep failing vendor screenings due to documentation, positioning, or presentation gaps. If you can do the work but cannot pass the procurement process, this service bridges that gap.',
    audienceSegments: [
      { role: 'Transporters Targeting Corporate Clients', description: 'Who have the fleet and capability but lack the documentation and positioning to pass corporate vendor screening' },
      { role: '3PL Operators Seeking Enterprise Contracts', description: 'Targeting Tata, Reliance, Amazon, Flipkart, ITC, and other major Indian corporations as clients' },
      { role: 'Warehouse Operators', description: 'Who can handle corporate warehousing needs but cannot get past the vendor qualification process' },
      { role: 'Growing Logistics Companies', description: 'Moving from SME clients to corporate accounts and need to bridge the professionalism gap' },
    ],

    whatWeDoTitle: 'What We Deliver',
    whatWeDoDescription: 'A complete vendor readiness package  professional website or landing page, corporate capability deck, documentation framework, compliance checklist, and positioning strategy that makes your company shortlisting-ready.',
    whatWeDoItems: [
      'Professional website or landing page optimized for vendor shortlisting  GSTIN, fleet data, coverage, capabilities, certifications',
      'Corporate capability deck (PDF)  company overview, service capabilities, fleet details, compliance certifications, client references, and financial stability',
      'Vendor documentation framework  organized checklist and templates for every document corporate procurement teams typically request',
      'Digital presence audit and optimization  ensure Google search results, LinkedIn, and IndiaMart profiles project corporate credibility',
      'Compliance readiness assessment  identify missing certifications, registrations, and compliance gaps that block vendor shortlisting',
      'Positioning strategy  define your value proposition and differentiators for corporate procurement evaluation',
    ],

    features: [
      { title: 'Shortlisting-Ready Website', description: 'A professional website or landing page designed specifically to pass vendor screening. Includes GSTIN display, fleet data, service coverage map, compliance certifications, client logos, and contact information in the format procurement teams look for.' },
      { title: 'Corporate Capability Deck', description: 'Professional 15-20 slide PDF presentation  company overview, leadership team, service capabilities with details, fleet data, warehouse details, technology systems, compliance certifications, client references with contact details, financial highlights, and sustainability practices.' },
      { title: 'Vendor Documentation Framework', description: 'Comprehensive checklist of every document corporate procurement teams request  GST registration, PAN, TAN, MSME/Udyam registration, ISO certification, RCMC, IATA, trade licenses, insurance certificates, vehicle registration copies, and bank references. Templates for documents you need to create.' },
      { title: 'Digital Presence Optimization', description: 'Audit and optimize your Google Business Profile, LinkedIn company page, IndiaMart listing, JustDial listing, and any other third-party profiles. Ensure consistent, professional information across all platforms.' },
      { title: 'Compliance Gap Analysis', description: 'Identify certifications and registrations you are missing that block vendor shortlisting  ISO, RCMC, IATA, FSSAI, trade licenses, industry body memberships. Prioritized list with cost estimates and application timelines.' },
      { title: 'Case Study Templates', description: 'Professional case study format for your best clients  challenge, solution, results, metrics. Formatted for corporate procurement evaluation with client approval where possible.' },
      { title: 'Vendor Registration Assistance', description: 'Guidance on navigating major corporate vendor registration portals  Tata, Reliance, Amazon, Flipkart. Tips on what procurement teams evaluate and how to present information for maximum impact.' },
      { title: 'RFQ Response Templates', description: 'Templates for responding to corporate Request for Quotation  technical proposal format, commercial proposal format, and compliance matrix format. Professional presentation that differentiates from competitors.' },
    ],

    howWeDoTitle: 'How We Work',
    howWeDoDescription: 'A focused 4-6 week engagement that starts with an audit of your current positioning, identifies gaps, and delivers a complete vendor readiness package. Quick, practical, and focused on passing real corporate screening processes.',
    howWeDoSteps: [
      { step: 1, title: 'Current State Audit', description: 'Evaluate your current website, capability documents, compliance documentation, digital presence, and any previous vendor screening feedback. Identify every gap that needs to be addressed.' },
      { step: 2, title: 'Documentation & Compliance Review', description: 'Inventory all existing documents and certifications. Identify missing documents, expired certifications, and compliance gaps. Create a prioritized action list with timelines.' },
      { step: 3, title: 'Website & Landing Page', description: 'Build a professional website or landing page optimized for vendor screening  or significantly upgrade your existing website. Focus on the information procurement teams evaluate.' },
      { step: 4, title: 'Capability Deck Creation', description: 'Create a professional corporate capability deck with all sections procurement teams expect. Include real data, real certifications, and real client references.' },
      { step: 5, title: 'Digital Presence Optimization', description: 'Update and optimize Google Business Profile, LinkedIn, IndiaMart, JustDial, and other platforms. Ensure consistent, professional information everywhere a procurement team might look.' },
      { step: 6, title: 'Vendor Registration Guidance', description: 'Provide specific guidance on registering as a vendor with your target corporate clients  portal navigation, evaluation criteria, common rejection reasons, and how to address them.' },
    ],

    benefits: [
      { title: 'Pass Corporate Vendor Screening', description: 'Professional documentation, digital presence, and compliance framework that meets the evaluation criteria of major Indian corporations. Stop getting rejected at the screening stage.' },
      { title: 'Win More Corporate Contracts', description: 'When your capability deck, website, and documentation match what procurement teams expect, you get shortlisted more often. More shortlists mean more contracts.' },
      { title: 'Professional First Impression', description: 'Corporate procurement teams form their first impression from your digital presence and documentation. A professional presentation from the start sets the tone for the entire vendor relationship.' },
      { title: 'Reusable Framework', description: 'Once built, your capability deck, documentation framework, and templates are reusable for every vendor registration. Invest once, use for every corporate client pursuit.' },
      { title: 'Faster Vendor Registration', description: 'Organized documentation and pre-built templates mean you can complete vendor registration forms in hours, not days. First-mover advantage on new corporate RFQs.' },
      { title: 'Compliance Roadmap', description: 'Clear list of certifications and registrations to obtain, with cost estimates and timelines. Invest in the right compliance, in the right order, for maximum impact on vendor shortlisting.' },
    ],

    beforeAfter: [
      { before: 'Rejected at corporate vendor screening due to poor documentation', after: 'Professional documentation and capability deck that meets corporate evaluation criteria' },
      { before: 'No website or outdated website  procurement teams cannot verify credibility', after: 'Professional website with GSTIN, fleet data, certifications, and client references' },
      { before: 'Missing certifications and compliance documents block shortlisting', after: 'Clear compliance roadmap with prioritized list of certifications to obtain' },
      { before: 'IndiaMart and JustDial profiles with minimal information', after: 'Optimized profiles with professional descriptions, photos, certifications, and service details' },
      { before: 'No capability deck  cannot present service capabilities professionally', after: 'Corporate-ready capability deck covering all evaluation criteria' },
      { before: 'RFQ responses are inconsistent and unprofessional', after: 'Templates and frameworks for professional, consistent RFQ responses' },
    ],

    processTitle: '4-6 Week Engagement',
    processTimeline: [
      { phase: 'Audit & Gap Analysis', duration: 'Week 1', deliverables: ['Current state evaluation', 'Gap identification', 'Prioritized action list', 'Compliance checklist'] },
      { phase: 'Website & Digital', duration: 'Weeks 2-3', deliverables: ['Website/landing page build', 'Digital profile optimization', 'Consistent branding', 'Professional photography guidance'] },
      { phase: 'Documentation', duration: 'Weeks 3-4', deliverables: ['Capability deck', 'Document templates', 'Case study formats', 'RFQ response templates'] },
      { phase: 'Optimization & Guidance', duration: 'Weeks 5-6', deliverables: ['Final review', 'Vendor registration guidance', 'Compliance roadmap', 'Delivery and walkthrough'] },
    ],

    whyNexgenReasons: [
      { title: 'We Know What Procurement Teams Evaluate', description: 'We have helped logistics companies pass vendor screenings at Tata, Reliance, Amazon, Flipkart, and other major Indian corporations. We know exactly what procurement teams look for  and what eliminates vendors immediately.' },
      { title: 'End-to-End Delivery', description: 'We do not just advise  we build. Your website, capability deck, and documentation templates are delivered ready to use. No handoff to a designer or agency  we do it all.' },
      { title: 'Quick 4-6 Week Turnaround', description: 'Corporate RFQs do not wait. Our engagement is designed to deliver a complete vendor readiness package in 4-6 weeks  fast enough to respond to upcoming opportunities.' },
      { title: 'Logistics-Specific Expertise', description: 'We understand the specific certifications, registrations, and compliance requirements for logistics companies in India. We know the difference between RCMC, IATA, and ISO  and which ones matter for which corporate clients.' },
    ],

    faq: [
      { question: 'Which corporate vendor screenings does this help with?', answer: 'We focus on major Indian corporations  Tata Group companies, Reliance Industries, Amazon India, Flipkart, ITC, HUL, DMart, and similar. The principles apply to any corporate vendor screening process, and we customize based on your target clients.' },
      { question: 'Do you guarantee vendor shortlisting?', answer: 'No vendor can guarantee shortlisting  the final decision is always the corporate procurement team\'s. What we guarantee is that your documentation, digital presence, and positioning will meet or exceed the standard evaluation criteria. Shortlisting depends on many factors including pricing and capacity.' },
      { question: 'What if I already have a website?', answer: 'We audit your existing website and either significantly upgrade it or build a new shortlisting-focused landing page. Many existing logistics websites lack the specific elements procurement teams look for  GSTIN display, compliance badges, fleet details, and client references.' },
      { question: 'Do you help obtain certifications like ISO?', answer: 'We identify which certifications you need and provide the compliance roadmap with cost estimates and timelines. We do not provide the certification itself  we connect you with certified agencies who do. We ensure you invest in the right certifications in the right order.' },
      { question: 'How much does this engagement cost?', answer: 'The vendor shortlisting and corporate positioning engagement starts at Rs.25,000 for basic positioning and goes up to Rs.60,000 for comprehensive readiness including website, capability deck, and documentation framework.' },
      { question: 'Can I use this for specific corporate RFQs?', answer: 'Yes. If you have a specific corporate RFQ coming up, share the details and we can tailor the deliverables to match the evaluation criteria for that specific opportunity. Priority timelines available for urgent opportunities.' },
    ],
  },

  'saas-product-strategy': {
    slug: 'saas-product-strategy',
    category: 'consulting',
    categoryLabel: 'Consulting',
    number: '33',
    title: 'SaaS Product Strategy for Logistics Companies',
    shortDescription: 'Productize operational knowledge into a SaaS product  market validation, pricing, feature roadmap, and go-to-market strategy.',

    heroTagline: 'Your expertise. Productized. Scaled.',
    heroDescription: 'A consulting engagement that helps logistics companies productize their operational knowledge and internal tools into a SaaS (Software as a Service) product. Market validation, feature prioritization, pricing strategy, technical architecture recommendation, and go-to-market plan  everything needed to launch a SaaS product based on your logistics expertise.',

    problemTitle: 'The Problem: You Have Built Something Valuable  But It Is Trapped in Your Company',
    problemDescription: 'Many successful logistics companies develop internal tools, processes, and methodologies that solve real problems. A custom TMS built for your operation could serve 1,000 other companies. A pricing algorithm you developed could be a product. An operational framework could be a consulting methodology. But these assets are trapped inside your company  used only internally, generating no external revenue, and not building the software-as-a-service business that could multiply your company\'s value.',
    problemBullets: [
      'Internal tools and processes that solve real problems are used only by your company  massive untapped revenue potential',
      'No product thinking  the tool works for you but has not been designed as a product that other companies can adopt',
      'No market validation  you assume other companies need this, but you have not tested the assumption with real prospects',
      'No pricing strategy  how do you price a SaaS product for logistics? Per vehicle? Per trip? Per user? Per month?',
      'No go-to-market plan  even if the product exists, how do you find customers, sell to them, and support them at scale?',
      'No technical architecture for multi-tenant SaaS  your internal tool serves one company, not 1,000',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics company founders who have built internal tools, processes, or expertise that could become a SaaS product serving other logistics companies. If you have something valuable inside your company that could be a standalone product, this engagement turns that potential into a plan.',
    audienceSegments: [
      { role: 'Tech-Savvy Logistics Founders', description: 'Who have built custom software for their operation and realize it could serve the broader market' },
      { role: 'Logistics Companies with Proprietary Methods', description: 'Operational frameworks, pricing models, or processes that could be productized and sold as a service' },
      { role: 'Companies Exploring SaaS Revenue', description: 'Looking to diversify revenue beyond freight services into recurring software revenue' },
      { role: 'Founders Seeking Investor Interest', description: 'A SaaS product dramatically increases company valuation  this engagement creates the SaaS narrative and plan' },
    ],

    whatWeDoTitle: 'What We Deliver',
    whatWeDoDescription: 'A comprehensive SaaS product strategy that takes your internal asset from "it works for us" to "it can be a product serving 1,000+ companies." Market validation, product definition, pricing strategy, technical architecture, and go-to-market plan.',
    whatWeDoItems: [
      'Product opportunity assessment  evaluate which internal tools/processes have the highest SaaS potential',
      'Market validation  interview 10-15 potential customers to validate demand, willingness to pay, and feature priorities',
      'Product definition  feature roadmap with MVP scope, version 1, and future roadmap based on validated demand',
      'Pricing strategy  pricing model (per vehicle, per trip, per user, tiered), price points, and competitive positioning',
      'Technical architecture recommendation  multi-tenant architecture, technology stack, and build vs buy decisions for the SaaS platform',
      'Go-to-market plan  customer acquisition strategy, sales motion, onboarding process, and 12-month launch timeline',
    ],

    features: [
      { title: 'Product Opportunity Assessment', description: 'Evaluate all internal assets  tools, processes, frameworks, data, methodologies  and rank them by SaaS potential based on market size, differentiation, build complexity, and recurring revenue potential.' },
      { title: 'Market Validation Research', description: 'Conduct 10-15 customer discovery interviews with potential SaaS users in the Indian logistics market. Validate demand, willingness to pay, feature priorities, and buying process. No assumptions  real market feedback.' },
      { title: 'Product Definition & MVP Scope', description: 'Define the Minimum Viable Product  the smallest set of features that delivers value and validates the product-market fit thesis. Include version 1 features and a 12-month product roadmap.' },
      { title: 'Pricing Strategy', description: 'Pricing model design  subscription tiers, per-unit pricing (per vehicle, per trip, per user), freemium vs paid, and competitive positioning. Price points validated against willingness to pay data from customer interviews.' },
      { title: 'Technical Architecture Plan', description: 'Recommended technology stack for the SaaS platform  multi-tenant architecture, database design, API structure, authentication, and deployment strategy. Build vs buy decisions for every component.' },
      { title: 'Go-to-Market Strategy', description: 'Customer acquisition plan  channels (LinkedIn, Google Ads, referrals, partnerships), sales motion (self-serve vs sales-assisted), onboarding process, and customer success framework.' },
      { title: 'Competitive Landscape Analysis', description: 'Map existing solutions in the market  direct competitors, adjacent products, and potential substitutes. Identify positioning gaps and differentiation opportunities.' },
      { title: 'Financial Projections', description: '12-month financial model  development cost, customer acquisition cost, monthly recurring revenue projections, break-even analysis, and valuation impact. Data for investment decisions.' },
    ],

    howWeDoTitle: 'How We Work',
    howWeDoDescription: 'A 6-8 week engagement that starts with internal asset assessment, moves through market validation, and delivers a complete SaaS product strategy with financial projections. The output is a document and presentation ready for internal decision-making or investor pitches.',
    howWeDoSteps: [
      { step: 1, title: 'Internal Asset Inventory', description: 'Document all internal tools, processes, and methodologies with SaaS potential. Evaluate each on market size, differentiation, build feasibility, and recurring revenue model.' },
      { step: 2, title: 'Market Research', description: 'Research the market  total addressable market, competitive landscape, existing solutions, pricing benchmarks, and customer segments. Identify the opportunity and the gaps.' },
      { step: 3, title: 'Customer Discovery', description: 'Conduct 10-15 interviews with potential SaaS customers. Validate demand, understand pain points, test pricing willingness, and identify must-have vs nice-to-have features.' },
      { step: 4, title: 'Product Definition', description: 'Define MVP scope, feature roadmap, user personas, and product requirements. Create wireframes for key screens. Define success metrics and product-market fit criteria.' },
      { step: 5, title: 'Pricing & GTM Strategy', description: 'Design pricing tiers and model. Create go-to-market plan with customer acquisition channels, sales process, and onboarding framework. Build financial projections.' },
      { step: 6, title: 'Strategy Presentation', description: 'Present complete SaaS product strategy to leadership. Include market validation data, product roadmap, pricing strategy, financial projections, and recommended next steps.' },
    ],

    benefits: [
      { title: 'Unlock Trapped Value', description: 'The tools and processes you have built for your own operation could generate Rs.50 lakh to Rs.5 crore in annual recurring revenue. This engagement identifies and plans how to unlock that value.' },
      { title: 'Diversify Revenue', description: 'SaaS revenue is recurring, predictable, and scalable. Adding a SaaS product to your logistics operation creates a second revenue stream that is not tied to freight rates or fuel prices.' },
      { title: 'Dramatically Increase Valuation', description: 'A logistics company with a SaaS product is valued 5-10x higher than a pure services company. The SaaS narrative is powerful for investors, acquirers, and strategic partners.' },
      { title: 'Market-Validated, Not Assumption-Based', description: 'Customer discovery interviews provide real market data  what customers want, what they will pay, and how they buy. No guessing, no assumptions.' },
      { title: 'Clear Build Plan', description: 'MVP scope, feature roadmap, technical architecture, and build timeline. If you decide to build, you have a clear plan. If you decide not to build, you know exactly why.' },
      { title: 'Investor-Ready Documentation', description: 'The strategy document and financial projections are formatted for investor presentations. If you plan to raise funding for the SaaS product, this is your pitch foundation.' },
    ],

    beforeAfter: [
      { before: 'Valuable internal tools used only by your company', after: 'Productized asset with a plan to serve 1,000+ logistics companies' },
      { before: 'Revenue tied entirely to freight services and market rates', after: 'Diversified revenue with recurring SaaS subscriptions' },
      { before: 'Assumption-based belief that "others need this too"', after: 'Market-validated demand with customer interview data and pricing willingness' },
      { before: 'No product definition  the tool works for you but is not a product', after: 'Clear MVP scope, feature roadmap, and product-market fit criteria' },
      { before: 'No idea how to price, sell, or support a SaaS product', after: 'Complete pricing strategy, GTM plan, and customer acquisition framework' },
      { before: 'Valued as a logistics services company', after: 'Valued as a technology company with SaaS revenue  5-10x multiple' },
    ],

    processTitle: '6-8 Week Engagement',
    processTimeline: [
      { phase: 'Internal Assessment', duration: 'Weeks 1-2', deliverables: ['Asset inventory', 'SaaS potential ranking', 'Market size estimate', 'Feasibility analysis'] },
      { phase: 'Market Research & Discovery', duration: 'Weeks 3-4', deliverables: ['Competitive landscape', 'Customer interviews (10-15)', 'Demand validation', 'Pricing willingness data'] },
      { phase: 'Product Definition', duration: 'Weeks 5-6', deliverables: ['MVP scope', 'Feature roadmap', 'User personas', 'Wireframes', 'Success metrics'] },
      { phase: 'Strategy & Financials', duration: 'Weeks 7-8', deliverables: ['Pricing strategy', 'GTM plan', 'Technical architecture', 'Financial projections', 'Final presentation'] },
    ],

    whyNexgenReasons: [
      { title: 'We Build SaaS Products', description: 'We are not strategy consultants who theorize about SaaS  we build them. Our recommendations are grounded in real product development experience. We know what is feasible to build, how long it takes, and what it costs.' },
      { title: 'We Know Indian Logistics SaaS Market', description: 'We understand the Indian logistics SaaS landscape  who the players are, what they charge, where the gaps are, and what logistics companies are willing to pay for. Local market expertise you cannot get from global SaaS consultants.' },
      { title: 'Strategy to Execution Continuity', description: 'Most consulting firms deliver a strategy document and hand off. We deliver a strategy and can execute it  build the MVP, launch the product, and scale the SaaS business. No knowledge transfer loss.' },
      { title: 'Founder-to-Founder Perspective', description: 'We understand the logistics founder\'s perspective  operational knowledge is valuable but productizing it requires a different mindset. We bridge the gap between "this works for us" and "this is a product."' },
    ],

    faq: [
      { question: 'What if I do not have any internal tools to productize?', answer: 'The engagement includes an asset inventory that evaluates not just software tools but also processes, frameworks, pricing methodologies, and operational knowledge. Many SaaS products start with a methodology or process, not a software tool. We help you identify what has product potential.' },
      { question: 'Do you build the SaaS product as part of this engagement?', answer: 'No. This engagement delivers the strategy  market validation, product definition, pricing, GTM plan, and financial projections. Building the MVP is a separate engagement that we can propose based on the strategy output.' },
      { question: 'How is this different from the Digital Transformation Roadmap?', answer: 'The Digital Transformation Roadmap focuses on technology adoption for your internal operations. This engagement focuses on creating a SaaS product to sell to other companies. Different objectives, different deliverables, different timelines.' },
      { question: 'What kind of SaaS products have logistics companies built?', answer: 'Examples include: freight marketplaces (like BlackBuck, Rivigo\'s platform), fleet management SaaS, TMS platforms (like Moovo, FreightTiger), warehouse management tools, pricing engines, and compliance management platforms. The best products solve problems the founder experienced firsthand.' },
      { question: 'How much does the SaaS product strategy engagement cost?', answer: 'The engagement starts at Rs.1,00,000 for a focused assessment and goes up to Rs.3,00,000 for a comprehensive strategy with customer discovery interviews, competitive analysis, financial projections, and investor-ready documentation.' },
      { question: 'Can this help me raise funding?', answer: 'Yes. The output includes investor-ready documentation  market validation data, product roadmap, financial projections, and competitive positioning. This is the foundation for a SaaS-focused pitch deck and investor conversations.' },
    ],
  },

  'investor-preparation-package': {
    slug: 'investor-preparation-package',
    category: 'consulting',
    categoryLabel: 'Consulting',
    number: '34',
    title: 'Investor Preparation Package',
    shortDescription: 'Pitch deck, financial model, data room, investor-grade MIS, and positioning strategy for logistics companies seeking funding.',

    heroTagline: 'Investor-ready. Not just pitch-ready.',
    heroDescription: 'A comprehensive investor preparation package that transforms your logistics company from "a business that needs money" to "an investment opportunity that investors want." Pitch deck, financial model, data room, investor-grade MIS dashboard, and positioning strategy  everything needed to raise capital professionally.',

    problemTitle: 'The Problem: Investors Do Not Take You Seriously',
    problemDescription: 'Indian logistics companies seeking investment  whether from VCs, PEs, family offices, or banks  often present poorly. Pitch decks are operational presentations, not investment stories. Financial data is in Tally and Excel, not investor-grade models. Data rooms are messy folders of random documents. MIS reports show operational metrics, not the KPIs investors care about. The result is investors passing on good businesses because they cannot evaluate the opportunity professionally.',
    problemBullets: [
      'Pitch deck is a company presentation, not an investment thesis  it describes what you do, not why it is an attractive investment',
      'Financial model does not exist or is a simple Excel P&L  investors need 3-5 year projections with unit economics, growth assumptions, and sensitivity analysis',
      'No data room  when investors ask for documents, you scramble to find them in random folders and WhatsApp chats',
      'MIS reports are operational (trip counts, vehicle utilization)  investors need financial KPIs (revenue per vehicle, contribution margin, CAC payback)',
      'No positioning strategy  you present as a transport company, not as a technology-enabled logistics platform with scalable growth potential',
      'No investment narrative  the story of why now, why this market, why your team, and why this is a Rs.100 crore opportunity',
    ],

    audienceTitle: 'Who This Is Built For',
    audienceDescription: 'This is for logistics company founders seeking to raise Rs.2 crore to Rs.100 crore in funding  from VCs, private equity, family offices, banks, or strategic investors. If you are ready to raise capital but need professional investor materials, this package transforms your readiness.',
    audienceSegments: [
      { role: 'Logistics Founders Seeking VC/PE Funding', description: 'Ready to scale operations and need capital, but need professional investor materials to get meetings and close rounds' },
      { role: 'Companies Seeking Debt Financing', description: 'Need bank loans or NBFC funding and require professional financial models, projections, and business plans' },
      { role: 'Founders Exploring Strategic Investment', description: 'Targeting corporate partnerships, strategic investments, or acquisition by larger logistics companies' },
      { role: 'Family Offices & HNIs Raising Capital', description: 'Presenting to sophisticated investors who expect institutional-grade documentation and analysis' },
    ],

    whatWeDoTitle: 'What We Deliver',
    whatWeDoDescription: 'A complete investor preparation package  pitch deck, financial model, data room, investor-grade MIS dashboard, and positioning strategy. Everything an investor needs to evaluate your opportunity professionally.',
    whatWeDoItems: [
      'Investor pitch deck  15-20 slide deck with investment thesis, market opportunity, business model, traction, team, and ask',
      '3-5 year financial model  revenue projections, unit economics, growth assumptions, sensitivity analysis, and scenario planning',
      'Virtual data room  organized, indexed document repository with all documents investors will request',
      'Investor-grade MIS dashboard  financial KPIs that investors care about: revenue per vehicle, contribution margin, CAC, LTV, payback period',
      'Positioning strategy  how to position your logistics company as a technology-enabled platform with scalable growth potential',
      'Investor meeting preparation  FAQ document, objection handling guide, and practice session for founder presentations',
    ],

    features: [
      { title: 'Investor Pitch Deck', description: '15-20 slide deck built around a compelling investment narrative  problem, market opportunity (TAM/SAM/SOM), solution, business model, traction and metrics, competitive advantage, team, financials, and the ask. Designed for 15-minute presentations with supporting appendix slides.' },
      { title: '3-5 Year Financial Model', description: 'Comprehensive Excel model with revenue projections (by service line and geography), cost structure, unit economics (per trip, per vehicle, per client), growth assumptions with sensitivity analysis, and 3 scenarios (base, optimistic, conservative).' },
      { title: 'Virtual Data Room', description: 'Organized document repository with indexed folders  company documents, financial statements, compliance certificates, team backgrounds, client contracts, and operational data. Investors get secure access to everything they need without email back-and-forth.' },
      { title: 'Investor-Grade MIS Dashboard', description: 'Dashboard showing the KPIs investors evaluate  revenue growth, gross margin, EBITDA margin, revenue per vehicle, revenue per client, customer acquisition cost, lifetime value, and payback period. Updated monthly or weekly.' },
      { title: 'Positioning Strategy', description: 'Define how to position your company for investors  not as a traditional transport company but as a technology-enabled logistics platform. Frame the narrative around scalability, technology differentiation, and market opportunity.' },
      { title: 'Investor FAQ Document', description: 'Comprehensive FAQ covering every question investors will ask  market size, competition, technology, team, financials, risks, and mitigants. Prepared answers with supporting data. Founder reference document for meetings.' },
      { title: 'Due Diligence Preparation', description: 'Proactive due diligence preparation  organize all documents, prepare financial reconciliations, identify potential red flags, and prepare explanations. Be ready for investor DD, not surprised by it.' },
      { title: 'Investor Target List', description: 'Curated list of 20-30 potential investors relevant to your stage, sector, and geography  VC firms, PE firms, family offices, and strategic investors active in Indian logistics. With contact information and investment thesis alignment.' },
    ],

    howWeDoTitle: 'How We Work',
    howWeDoDescription: 'A 4-8 week engagement that starts with understanding your business and investment goals, then produces professional investor materials. The output is a complete package you can use immediately to start investor conversations.',
    howWeDoSteps: [
      { step: 1, title: 'Business Deep Dive', description: 'Understand your business model, operations, financials, growth trajectory, technology stack, and team. Identify the investment narrative  what makes your company attractive to investors.' },
      { step: 2, title: 'Financial Model Build', description: 'Build 3-5 year financial model from your historical data. Revenue projections by segment, cost structure, unit economics, and sensitivity analysis. Stress test the model with multiple scenarios.' },
      { step: 3, title: 'Pitch Deck Development', description: 'Write and design investor pitch deck around the investment narrative. Iterate through 2-3 drafts with founder feedback. Include appendix slides for detailed investor questions.' },
      { step: 4, title: 'Data Room & MIS Setup', description: 'Organize data room with all required documents. Build investor-grade MIS dashboard. Ensure financial data is consistent between model, deck, and MIS.' },
      { step: 5, title: 'Positioning & Narrative', description: 'Define positioning strategy, craft the investment narrative, prepare FAQ document, and create objection handling guide. Align all materials to tell one consistent story.' },
      { step: 6, title: 'Presentation Prep', description: 'Conduct mock investor presentation with founder. Practice pitch delivery, handle tough questions, refine timing and flow. Founder is confident and prepared for real investor meetings.' },
    ],

    benefits: [
      { title: 'Professional Investor Perception', description: 'Investor-grade materials immediately elevate your credibility. A professional pitch deck, financial model, and data room signal that you are serious, prepared, and investment-ready  not an amateur looking for money.' },
      { title: 'Tell a Compelling Investment Story', description: 'The positioning strategy and narrative transform how investors see your company  from a logistics business to a scalable platform opportunity. The right framing changes the conversation from "how much does a truck cost?" to "what is your addressable market?"' },
      { title: 'Answer Every Investor Question', description: 'The FAQ document, financial model, and data room ensure you are prepared for every question. No scrambling during meetings, no "I will get back to you on that." Confidence and preparation are visible to investors.' },
      { title: 'Consistent Data Across All Materials', description: 'Financial numbers in the pitch deck, model, MIS, and data room are all consistent. No discrepancies that raise red flags or destroy credibility.' },
      { title: 'Faster Fundraise', description: 'Professional materials accelerate the fundraise process  fewer follow-up requests, faster due diligence, fewer objections. What typically takes 6-9 months can be compressed to 3-4 months.' },
      { title: 'Reusable Foundation', description: 'The financial model, MIS dashboard, and data room are not one-time assets  they are tools you will use for ongoing business management and future fundraising rounds.' },
    ],

    beforeAfter: [
      { before: 'Pitch deck is a company description, not an investment story', after: 'Compelling investment thesis with market opportunity, traction, and scalable growth narrative' },
      { before: 'Financial data in Tally and Excel  no projections or unit economics', after: '3-5 year financial model with projections, unit economics, and scenario analysis' },
      { before: 'Investors ask for documents and you scramble through WhatsApp and folders', after: 'Organized data room with every document indexed and accessible' },
      { before: 'MIS shows trips and vehicles  investors want margins and unit economics', after: 'Investor-grade MIS dashboard with revenue per vehicle, CAC, LTV, and contribution margin' },
      { before: 'Positioned as a traditional transport company', after: 'Positioned as a technology-enabled logistics platform with scalable growth' },
      { before: 'Not prepared for investor questions  stumbling through meetings', after: 'FAQ document, objection handling guide, and mock presentation preparation' },
    ],

    processTitle: '4-8 Week Engagement',
    processTimeline: [
      { phase: 'Business Deep Dive', duration: 'Week 1', deliverables: ['Business model understanding', 'Investment narrative definition', 'Financial data collection', 'Material gap identification'] },
      { phase: 'Financial Model & Data', duration: 'Weeks 2-3', deliverables: ['Financial model (3-5 year)', 'Unit economics analysis', 'Scenario planning', 'MIS dashboard'] },
      { phase: 'Pitch Deck', duration: 'Weeks 3-5', deliverables: ['Pitch deck draft 1', 'Founder review', 'Pitch deck draft 2', 'Final design', 'Appendix slides'] },
      { phase: 'Data Room & Positioning', duration: 'Weeks 5-6', deliverables: ['Data room setup', 'Positioning strategy', 'Investor FAQ', 'Target investor list'] },
      { phase: 'Preparation', duration: 'Weeks 7-8', deliverables: ['Mock presentation', 'Objection handling', 'Final review', 'Delivery and walkthrough'] },
    ],

    whyNexgenReasons: [
      { title: 'We Understand Logistics Fundraising', description: 'We have worked with logistics companies raising capital from seed stage to Series B. We understand what Indian logistics investors look for, what questions they ask, and what red flags they watch for. Our materials are built to address these specifically.' },
      { title: 'We Build the Technology Story', description: 'Logistics companies that raise at premium valuations are the ones with technology stories. We help you articulate how technology makes your business scalable, defensible, and high-margin  even if you are primarily an operations company today.' },
      { title: 'End-to-End Execution', description: 'We do not just write a pitch deck. We build the financial model, set up the data room, create the MIS dashboard, and prepare you for presentations. One team, one consistent story, one package.' },
      { title: 'We Have Raised Capital Ourselves', description: 'Our team has experience on both sides of the fundraising table  as entrepreneurs who have raised capital and as operators who have built investor-grade materials. We know what works because we have done it.' },
    ],

    faq: [
      { question: 'What kind of investors does this prepare me for?', answer: 'The package is designed for VC firms, PE firms, family offices, HNIs, banks, NBFCs, and strategic investors (corporate venture arms). The pitch deck and financial model can be adapted for different investor types by adjusting emphasis and detail level.' },
      { question: 'Do you guarantee I will raise funding?', answer: 'No. No one can guarantee fundraising success  it depends on your business fundamentals, market conditions, and investor fit. What we guarantee is that your materials will be professional, consistent, and investor-grade. Good materials dramatically improve your odds but do not eliminate business risk.' },
      { question: 'What financial data do you need from me?', answer: 'We need 2-3 years of financial statements (P&L, balance sheet), monthly revenue and cost data for the last 12 months, client concentration data, and any existing financial projections. We organize whatever you have  even if it is in Tally exports and Excel files.' },
      { question: 'Can you help me find investors?', answer: 'We provide a curated target investor list with 20-30 potential investors relevant to your stage and sector. We do not make investor introductions or negotiate terms  that is the founder\'s role and requires direct relationships.' },
      { question: 'How long does the engagement take?', answer: 'Standard engagement is 6-8 weeks for the complete package (pitch deck, financial model, data room, MIS, positioning, preparation). A focused package with just pitch deck and financial model can be done in 4 weeks.' },
      { question: 'What if I need to update materials after initial delivery?', answer: 'The engagement includes one round of revisions within 30 days of delivery. After that, we offer hourly support for updates as your fundraising progresses and materials need to reflect new data or feedback.' },
    ],
  },
};
