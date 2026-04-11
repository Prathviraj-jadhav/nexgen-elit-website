// ═══════════════════════════════════════════════════════════════════════════
// Nexgen Elit  Products Data
// 96 Products across 6 categories + 6 Category Metadata sets
// ═══════════════════════════════════════════════════════════════════════════

export interface CategoryMeta {
  id: string;
  label: string;
  icon: string;
  problemTitle: string;
  problemDescription: string;
  problemBullets: string[];
  audienceTitle: string;
  audienceDescription: string;
  audienceSegments: { role: string; description: string }[];
  processTitle: string;
  processSteps: { phase: string; duration: string; deliverables: string[] }[];
  whyNexgenReasons: { title: string; description: string }[];
}

export interface ProductDetail {
  slug: string;
  categoryId: string;
  categoryLabel: string;
  number: string;
  name: string;
  description: string;
  heroTagline: string;
  heroDescription: string;
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  whatWeDoItems: string[];
  features: { title: string; description: string }[];
  howWeDoTitle: string;
  howWeDoDescription: string;
  howWeDoSteps: { step: number; title: string; description: string }[];
  benefits: { title: string; description: string }[];
  beforeAfter: { before: string; after: string }[];
  faq: { question: string; answer: string }[];
}

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY META DATA  Shared across products in the same category
// ═══════════════════════════════════════════════════════════════════════════

export const categoriesMeta: Record<string, CategoryMeta> = {
  roadway: {
    id: 'roadway',
    label: 'Roadway Logistics Software',
    icon: 'Truck',
    problemTitle: 'Indian road logistics is broken by design',
    problemDescription: 'India moves over 4.6 billion tonnes of freight annually by road, yet the industry operates like it is still 1995. Over 12 million trucks run on fragmented networks with zero digital coordination. Transporters lose 15-20% of revenue to inefficiencies they cannot even see  empty return trips, manual billing errors, unverified e-way bills, and zero visibility on vehicle location after dispatch.',
    problemBullets: [
      '90% of Indian truck operators own fewer than 5 trucks  no technology budgets, no IT teams',
      'Average truck in India runs empty 25% of the time  that is lakhs of rupees burned every month per vehicle',
      'Manual dispatch processes lead to 3-4 hour delays per trip at loading/unloading points',
      'GST e-way bill non-compliance penalties can reach ₹25,000 per consignment  most operators still generate them manually',
      'Driver absenteeism and turnover exceed 40% annually  there is no system to track, score, or retain drivers',
      'Fuel theft and pilferage account for 8-12% of total fuel costs across the Indian trucking fleet',
    ],
    audienceTitle: 'Built for companies that live and die by road freight',
    audienceDescription: 'Whether you run 5 trucks or 5,000, the pain is the same  lost visibility, manual processes, and revenue leakage. Our roadway logistics software is designed for every stakeholder in the Indian road freight ecosystem.',
    audienceSegments: [
      { role: 'Fleet Owners & Transporters', description: 'Operators managing owned or leased fleets who need vehicle tracking, dispatch automation, and real-time P&L visibility per trip.' },
      { role: 'Logistics Companies & 3PLs', description: 'Third-party logistics providers managing multi-client operations who need integrated TMS, billing, and client reporting.' },
      { role: 'FMCG & Retail Shippers', description: 'Brands and distributors moving goods across India who need shipment visibility, delivery confirmation, and carrier performance tracking.' },
      { role: 'E-commerce Fulfillment Teams', description: 'D2C and marketplace sellers who rely on last-mile delivery systems with proof-of-delivery and customer notification.' },
      { role: 'Freight Brokers & Load Aggregators', description: 'Intermediaries matching loads with vehicles who need load boards, carrier scoring, and commission management.' },
    ],
    processTitle: 'From first call to live deployment in 6-8 weeks',
    processSteps: [
      { phase: 'Discovery & Audit', duration: 'Week 1', deliverables: ['Operational workflow mapping', 'Current pain-point documentation', 'Integration requirements (GPS, GST, payment)', 'Product scope finalization'] },
      { phase: 'Blueprint & Design', duration: 'Week 2', deliverables: ['System architecture document', 'UI/UX wireframes for all user roles', 'Database schema design', 'API integration plan'] },
      { phase: 'Development Sprint 1', duration: 'Week 3-4', deliverables: ['Core module development (dispatch, tracking, billing)', 'GPS/telematics integration', 'User authentication & role-based access', 'GST e-way bill engine'] },
      { phase: 'Development Sprint 2', duration: 'Week 5-6', deliverables: ['Mobile app for drivers (Android)', 'Reporting & analytics dashboards', 'WhatsApp notification system', 'Payment gateway integration'] },
      { phase: 'Testing & UAT', duration: 'Week 7', deliverables: ['End-to-end testing with live data', 'User acceptance testing with your team', 'Performance & load testing', 'Bug fixes & refinements'] },
      { phase: 'Deployment & Training', duration: 'Week 8', deliverables: ['Production deployment on cloud infrastructure', 'On-site team training sessions', 'Operator manuals & video guides', '30-day post-launch support'] },
    ],
    whyNexgenReasons: [
      { title: 'We only work with logistics companies', description: 'Every line of code we write is for logistics. We understand dispatch workflows, GST compliance, driver behavior, and freight billing  not generic CRM or e-commerce.' },
      { title: 'GST & Indian compliance built-in', description: 'E-way bill automation, GSTIN validation,eway bill expiry alerts, and GST-ready invoicing  not bolted on as an afterthought.' },
      { title: 'Works for fleets of 5 to 5,000', description: 'Our architecture scales. Start with 10 trucks on a basic plan and grow to 5,000 vehicles with enterprise features  same platform, no migration needed.' },
      { title: 'Driver-first mobile experience', description: 'Our Android driver app is built for Indian truck drivers  low data usage, Hindi + regional language support, offline capability, and WhatsApp-based communication.' },
      { title: 'Real ROI in 90 days', description: 'Our clients see 12-18% reduction in fuel costs, 30% improvement in vehicle utilization, and 50% faster billing cycles within the first quarter.' },
      { title: 'Dedicated account manager', description: 'You get a named account manager who understands road freight operations  not a ticket number and a generic support team.' },
    ],
  },
  railway: {
    id: 'railway',
    label: 'Railway Logistics Software',
    icon: 'TrainFront',
    problemTitle: 'Rail freight in India is powerful but painfully manual',
    problemDescription: 'Indian Railways moves over 1.4 billion tonnes of freight annually, yet the ecosystem around it operates with spreadsheets, phone calls, and guesswork. Wagon allocation is opaque, tracking ends at the origin station, billing takes weeks to reconcile, and intermodal coordination between rail and road is nearly non-existent. Companies that depend on rail freight lose lakhs every month to delays, demurrage charges, and operational blindness.',
    problemBullets: [
      'Wagon availability is a daily uncertainty  operators spend hours on phone calls and manual tracking to secure rakes',
      'Rail freight tracking in India is limited to origin and destination  no visibility on transit milestones, delays, or ETAs',
      'ICD (Inland Container Depot) operations suffer from poor coordination between rail, road, and terminal operators',
      'Rail freight billing reconciliation takes 15-20 days due to manual waybill processing and dispute resolution',
      'Demurrage and wharfage charges pile up because there is no automated alert system for wagon detention',
      'Intermodal handover between rail and road transport is uncoordinated  leading to 8-12 hour delays at interchange points',
    ],
    audienceTitle: 'For operators who move freight on Indian Railways',
    audienceDescription: 'Rail freight is the backbone of bulk logistics in India. Our railway software is purpose-built for companies that depend on rail movement  from wagon allocation to final delivery.',
    audienceSegments: [
      { role: 'Rail Freight Forwarders', description: 'Companies booking and managing rail freight for clients who need wagon allocation, tracking, billing, and intermodal coordination.' },
      { role: 'ICD & CFS Operators', description: 'Terminal operators managing container movement between rail and road who need coordination, billing, and capacity management.' },
      { role: 'Mining & Bulk Shippers', description: 'Coal, iron ore, cement, and fertilizer companies moving bulk cargo by rail who need rake planning and dispatch optimization.' },
      { role: 'Container Train Operators', description: 'Private container train operators who need wagon management, scheduling, revenue optimization, and customer portals.' },
      { role: 'Auto & Manufacturing Logistics', description: 'Automobile and heavy manufacturing companies using rail for raw material and finished goods movement across India.' },
    ],
    processTitle: 'Rail-specific implementation in 8-10 weeks',
    processSteps: [
      { phase: 'Rail Operations Audit', duration: 'Week 1', deliverables: ['Current rake booking workflow analysis', 'ICD/terminal process mapping', 'Integration requirements (CRIS, RFO systems)', 'Stakeholder interviews'] },
      { phase: 'System Architecture', duration: 'Week 2', deliverables: ['Rail freight management blueprint', 'Wagon allocation algorithm design', 'Intermodal coordination workflow', 'Reporting framework'] },
      { phase: 'Core Development', duration: 'Week 3-5', deliverables: ['Rake booking & allocation engine', 'Wagon tracking integration', 'Rail freight billing module', 'Terminal operations management'] },
      { phase: 'Advanced Modules', duration: 'Week 6-7', deliverables: ['Intermodal coordination system', 'Analytics & revenue dashboards', 'Customer portal development', 'Mobile app for terminal staff'] },
      { phase: 'Testing & Go-Live', duration: 'Week 8-10', deliverables: ['Integration testing with rail systems', 'Pilot run with select rakes', 'Staff training at terminals', 'Production deployment'] },
    ],
    whyNexgenReasons: [
      { title: 'Deep understanding of Indian Railways', description: 'We understand CRIS, RFO systems, rake allocation processes, and the unique complexity of rail freight in India  not generic transport management.' },
      { title: 'Intermodal by design', description: 'Our railway systems are built to work seamlessly with road transport  because rail freight does not end at the station.' },
      { title: 'Demurrage prevention', description: 'Automated alerts for wagon detention, ICD dwell time monitoring, and proactive notification  preventing lakhs in unnecessary charges.' },
      { title: 'Real-time rail tracking', description: 'Go beyond origin-destination tracking with transit milestones, delay prediction, and ETA management across the rail network.' },
      { title: 'Bulk freight expertise', description: 'Purpose-built for coal, iron ore, cement, containers, and automobiles  each commodity type has unique handling requirements we address.' },
      { title: 'Revenue optimization', description: 'Dynamic pricing, capacity yield management, and off-peak incentive engines that maximize revenue per wagon-km.' },
    ],
  },
  waterways: {
    id: 'waterways',
    label: 'Waterways & Maritime Logistics Software',
    icon: 'Ship',
    problemTitle: 'India ports handle 1,500+ million tonnes  with 1990s technology',
    problemDescription: 'India has 12 major ports and over 200 minor ports handling massive cargo volumes, yet port operations, customs clearance, and freight forwarding still rely heavily on paper, email, and phone-based coordination. Container dwell times at Indian ports are 30-40% higher than global benchmarks. Documentation errors cause customs delays of 2-3 days per shipment. And the lack of real-time visibility means importers and exporters are always guessing about their cargo status.',
    problemBullets: [
      'Average container dwell time at Indian ports is 5-7 days versus 2-3 days at Singapore or Rotterdam',
      'Customs clearance involves 15+ documents, most still processed manually  leading to errors and 2-3 day delays',
      'Port Community System (PCS) adoption is incomplete  stakeholders still coordinate via email and phone',
      'Freight forwarders manage bookings across 20+ shipping lines with no unified platform',
      'Detention and demurrage charges cost Indian importers over ₹2,000 crore annually due to poor turnaround coordination',
      'Maritime compliance (ISM Code, SOLAS, DG regulations) is managed in spreadsheets with no automated audit trails',
    ],
    audienceTitle: 'Built for the Indian maritime ecosystem',
    audienceDescription: 'From port gates to customs counters, from freight desks to vessel bridges  our maritime software serves every stakeholder in India\'s waterways logistics chain.',
    audienceSegments: [
      { role: 'Custom House Agents & Freight Forwarders', description: 'CHAs managing customs filing, shipping line coordination, and documentation for importers/exporters who need end-to-end shipment management.' },
      { role: 'Port & Terminal Operators', description: 'Port authorities and terminal operators managing berth allocation, yard operations, and gate control who need TOS and port management systems.' },
      { role: 'Shipping Line Agents', description: 'Agents representing shipping lines at Indian ports who need vessel scheduling, documentation, and billing automation.' },
      { role: 'Export-Import Companies', description: 'Manufacturers, traders, and e-commerce companies engaged in international trade who need shipment visibility and documentation management.' },
      { role: 'CFS & ICD Operators', description: 'Container Freight Station and Inland Container Depot operators who need container tracking, billing, and customs coordination.' },
    ],
    processTitle: 'Maritime implementation in 8-12 weeks',
    processSteps: [
      { phase: 'Maritime Operations Audit', duration: 'Week 1-2', deliverables: ['Port/terminal workflow mapping', 'Customs & documentation process analysis', 'Shipping line integration requirements', 'Stakeholder ecosystem mapping'] },
      { phase: 'Architecture & Design', duration: 'Week 3', deliverables: ['System architecture for maritime ops', 'Port Community System integration plan', 'Customs API integration design', 'Multi-stakeholder portal wireframes'] },
      { phase: 'Core Platform Development', duration: 'Week 4-7', deliverables: ['Freight forwarding management module', 'Customs clearance automation engine', 'Documentation generation system', 'Port/terminal integration'] },
      { phase: 'Advanced Features', duration: 'Week 8-10', deliverables: ['IoT container monitoring integration', 'Maritime billing & invoicing', 'Analytics & compliance dashboards', 'Multi-language support (English/Hindi)'] },
      { phase: 'Testing & Deployment', duration: 'Week 11-12', deliverables: ['End-to-end customs workflow testing', 'Integration testing with port systems', 'User training across departments', 'Go-live and 30-day support'] },
    ],
    whyNexgenReasons: [
      { title: 'Indian port system expertise', description: 'We understand PCS India, ICEGATE customs systems, and the unique regulatory environment of Indian ports  not just generic maritime software.' },
      { title: 'Customs automation built-in', description: 'Automated Bill of Entry, shipping bill filing, duty calculation, and ICEGATE integration  saving 2-3 days per shipment.' },
      { title: 'Multi-stakeholder coordination', description: 'Connect shipping lines, CHAs, port operators, customs, transporters, and warehouse operators on a single platform.' },
      { title: 'Container lifecycle tracking', description: 'From stuffing at factory to destuffing at destination  complete container lifecycle visibility with IoT integration.' },
      { title: 'Detention & demurrage prevention', description: 'Automated alerts, turnaround time tracking, and proactive coordination to minimize D&D charges that drain working capital.' },
      { title: 'Compliance-ready from day one', description: 'ISM Code, SOLAS VGM, DG regulations, and maritime safety compliance  all documented and auditable from day one.' },
    ],
  },
  airways: {
    id: 'airways',
    label: 'Airways Logistics Software',
    icon: 'Plane',
    problemTitle: 'Air cargo in India moves fast  systems do not keep up',
    problemDescription: 'Air cargo is the most time-sensitive mode of freight transport, yet most Indian air freight operations are managed through email chains, phone calls, and manual Air Waybill processing. Space allocation is a daily firefight, ULD management is reactive, and dangerous goods compliance is checked manually. The result: missed flights, rejected shipments, compliance violations, and lakhs lost in avoidable delays and demurrage.',
    problemBullets: [
      'Air cargo space allocation in India is still managed through manual booking emails  leading to offloading and delays',
      'ULD (Unit Load Device) planning is done on spreadsheets with no weight-and-balance optimization',
      'Dangerous goods compliance is checked manually at acceptance  causing rejections, delays, and safety risks',
      'Air Waybill (AWB) processing involves manual data entry across multiple systems  error rate exceeds 8%',
      'Ground handling coordination between airlines, handlers, and customs takes 4-6 hours per shipment turnaround',
      'Express and time-critical shipments lack priority visibility  leading to SLA breaches and customer churn',
    ],
    audienceTitle: 'For teams that move cargo through Indian airspace',
    audienceDescription: 'Air freight demands precision, speed, and compliance. Our airways logistics software is built for every stakeholder in India\'s air cargo ecosystem.',
    audienceSegments: [
      { role: 'Air Cargo Agents & GSA', description: 'General Sales Agents and cargo agents managing bookings across multiple airlines who need space management, AWB processing, and client tracking.' },
      { role: 'Airlines & Cargo Carriers', description: 'Domestic and international airlines operating cargo services who need capacity optimization, ground handling coordination, and revenue management.' },
      { role: 'Express & Courier Companies', description: 'Time-definite delivery companies who need priority space allocation, real-time tracking, and signature capture capabilities.' },
      { role: 'Pharma & Healthcare Logistics', description: 'Temperature-sensitive product manufacturers and distributors who need cold chain monitoring and compliance documentation.' },
      { role: 'E-commerce & D2C Brands', description: 'Online sellers shipping internationally who need air freight booking, customs documentation, and end-to-end tracking.' },
    ],
    processTitle: 'Air cargo implementation in 6-8 weeks',
    processSteps: [
      { phase: 'Air Operations Discovery', duration: 'Week 1', deliverables: ['Current air freight workflow analysis', 'Airline integration requirements', 'Ground handling process mapping', 'Compliance requirement documentation'] },
      { phase: 'Platform Design', duration: 'Week 2', deliverables: ['Air cargo management architecture', 'AWB processing workflow design', 'Space allocation algorithm', 'DG compliance workflow'] },
      { phase: 'Core Development', duration: 'Week 3-5', deliverables: ['Air freight booking engine', 'AWB generation & management', 'Space allocation & ULD planning', 'Ground handling coordination module'] },
      { phase: 'Integration & Testing', duration: 'Week 6-7', deliverables: ['Airline system integration (CASS/CCS)', 'Customs pre-filing integration', 'End-to-end workflow testing', 'DG compliance validation'] },
      { phase: 'Go-Live & Support', duration: 'Week 8', deliverables: ['Production deployment', 'Staff training (operations + handling)', 'Performance optimization', '30-day hypercare support'] },
    ],
    whyNexgenReasons: [
      { title: 'IATA-compliant by design', description: 'Built to IATA standards for AWB processing, DG handling, and cargo acceptance  not adapted from generic logistics software.' },
      { title: 'Airline integration ready', description: 'Pre-built connectors for major Indian and international airline systems, CCS, CASS, and cargo community platforms.' },
      { title: 'Space optimization', description: 'Yield management algorithms that maximize revenue per kg  because every kilogram of air cargo capacity counts.' },
      { title: 'DG compliance automation', description: 'Automated dangerous goods checking, documentation generation, and acceptance workflows  reducing rejections by 90%.' },
      { title: 'Express cargo priority', description: 'Priority space allocation, time-definite tracking, and SLA management for express and courier operations.' },
      { title: 'Pharma cold chain ready', description: 'Temperature monitoring, GDP compliance documentation, and excursion alerting for pharmaceutical air shipments.' },
    ],
  },
  warehouse: {
    id: 'warehouse',
    label: 'Warehouse & Fulfillment Software',
    icon: 'Warehouse',
    problemTitle: 'Indian warehouses lose 8-15% of inventory value to inefficiency',
    problemDescription: 'India has over 30,000 warehouses and the number is growing fast with e-commerce and GST driving demand. Yet most warehouses operate on paper-based processes, manual inventory counts, and tribal knowledge held by experienced staff. Pick errors exceed 3%, inventory discrepancies average 5-8%, and the average order takes 4-6 hours to process from receipt to dispatch. With omnichannel fulfillment now the norm, these inefficiencies translate directly into customer churn and working capital trapped in dead stock.',
    problemBullets: [
      'Pick error rates in Indian warehouses average 3-5%  meaning 30-50 wrong items per 1,000 orders shipped',
      'Manual inventory counting means stock discrepancies of 5-8%  lakhs of rupees in unaccounted inventory',
      'Order processing time from receipt to dispatch averages 4-6 hours in Indian warehouses versus 1-2 hours in optimized facilities',
      'Dead stock and slow-moving inventory tie up 15-20% of warehouse working capital  with no systematic identification or liquidation process',
      'Cold chain temperature excursions affect 12-15% of pharmaceutical and food products  leading to product spoilage and compliance violations',
      'Labor productivity varies 40-60% between best and worst performers in the same warehouse  with no measurement or incentive system',
    ],
    audienceTitle: 'For warehouse teams that ship, store, and fulfill',
    audienceDescription: 'From receiving docks to shipping gates, our warehouse software is built for every operation that handles physical goods in India.',
    audienceSegments: [
      { role: 'Warehouse Operators & 3PLs', description: 'Third-party logistics providers managing multi-client warehouse operations who need WMS, labor management, and client reporting.' },
      { role: 'E-commerce Fulfillment Centers', description: 'Online retail and marketplace sellers processing high-volume orders who need fast pick-pack-ship workflows and inventory accuracy.' },
      { role: 'FMCG Distributors', description: 'Fast-moving consumer goods companies with distribution warehouses who need FIFO/FEFO management, batch tracking, and expiry management.' },
      { role: 'Cold Chain Operators', description: 'Temperature-controlled warehouse operators for pharma, food, and chemicals who need IoT monitoring and compliance documentation.' },
      { role: 'Manufacturing Warehouses', description: 'Factory warehouses managing raw materials and finished goods who need production integration and just-in-time inventory management.' },
    ],
    processTitle: 'Warehouse system deployment in 6-10 weeks',
    processSteps: [
      { phase: 'Warehouse Audit', duration: 'Week 1', deliverables: ['Physical warehouse layout study', 'Current workflow documentation', 'Technology infrastructure assessment', 'Integration requirements (ERP, e-commerce, shipping)'] },
      { phase: 'System Design', duration: 'Week 2', deliverables: ['WMS configuration blueprint', 'Slotting strategy design', 'Barcode/RFID hardware plan', 'Pick-pack-ship workflow design'] },
      { phase: 'Core WMS Build', duration: 'Week 3-5', deliverables: ['Receiving & putaway automation', 'Inventory management engine', 'Pick & pack optimization', 'Shipping & dispatch integration'] },
      { phase: 'Advanced Modules', duration: 'Week 6-8', deliverables: ['Labor management system', 'Analytics & reporting dashboards', 'Returns processing automation', 'IoT/cold chain monitoring integration'] },
      { phase: 'Go-Live', duration: 'Week 9-10', deliverables: ['Hardware installation & testing', 'Staff training on floor operations', 'Parallel run with existing system', 'Full cutover and 30-day support'] },
    ],
    whyNexgenReasons: [
      { title: 'Warehouse-first, not adapted ERP', description: 'Our WMS is built from the ground up for warehouse operations  not a module bolted onto an ERP system with generic inventory features.' },
      { title: 'Works with Indian barcode ecosystems', description: 'Compatible with Indian barcode standards, GST-compliant labeling, and e-commerce marketplace integration (Amazon, Flipkart, Meesho).' },
      { title: 'Pick optimization that works', description: 'Zone picking, batch picking, wave management  our algorithms reduce pick paths by 25-35% and increase picks per hour.' },
      { title: 'Cold chain compliant', description: 'IoT temperature monitoring, GDP compliance documentation, and excursion alerts  built for Indian pharma and food cold chains.' },
      { title: 'Multi-warehouse ready', description: 'Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers and centralized reporting.' },
      { title: 'E-commerce speed', description: 'Integration with Indian e-commerce platforms for automated order sync, priority pick allocation, and same-day dispatch capability.' },
    ],
  },
  enterprise: {
    id: 'enterprise',
    label: 'Cross-Modal & Enterprise Logistics Software',
    icon: 'Link2',
    problemTitle: 'Enterprise logistics in India runs on disconnected silos',
    problemDescription: 'Large Indian logistics companies and conglomerates operate across road, rail, air, and water  but their systems do not talk to each other. Billing runs on 6 different software. Inventory is tracked in 3 different databases. Compliance documents are stored in email folders. And executive decisions are made on Excel reports that are already outdated by the time they reach the desk. The result: millions in operational leakage, compliance risk, and an inability to scale beyond the founder\'s personal oversight.',
    problemBullets: [
      'Average Indian logistics enterprise uses 5-7 disconnected software systems  no unified view of operations or finances',
      'Cross-modal freight data is reconciled manually  taking 10-15 days for monthly financial closing',
      'Compliance documents (GST, e-way bills, customs filings) are scattered across email, paper, and local folders  no audit trail',
      'Vendor and carrier performance is measured anecdotally  no systematic scorecards or data-driven decisions',
      'ESG and carbon emission reporting is becoming mandatory  most companies have no data collection mechanism',
      'Digital transformation initiatives fail because generic IT vendors do not understand logistics workflows',
    ],
    audienceTitle: 'For enterprises that cannot afford to stay fragmented',
    audienceDescription: 'When you operate across multiple modes, geographies, and business lines, disconnected systems are your biggest liability. Our enterprise logistics software unifies everything.',
    audienceSegments: [
      { role: 'Logistics Conglomerates', description: 'Large logistics companies with multi-modal operations, multiple business units, and pan-India presence who need unified management platforms.' },
      { role: 'Supply Chain Directors & CTOs', description: 'Technology and operations leaders responsible for digital transformation who need architecture that connects existing systems and scales.' },
      { role: 'Industry Associations & Networks', description: 'Logistics associations and franchise networks who need white-label platforms for their members with multi-tenant architecture.' },
      { role: 'PE/VC-Backed Logistics Companies', description: 'Funded startups and growth-stage companies who need enterprise-grade systems to scale operations rapidly across India.' },
      { role: 'Manufacturing & Retail Enterprises', description: 'Companies with captive logistics operations who need supply chain visibility, vendor management, and logistics ERP integration.' },
    ],
    processTitle: 'Enterprise implementation in 10-16 weeks',
    processSteps: [
      { phase: 'Enterprise Discovery', duration: 'Week 1-2', deliverables: ['Enterprise architecture assessment', 'System integration landscape mapping', 'Stakeholder workshops across business units', 'Digital transformation roadmap'] },
      { phase: 'Platform Architecture', duration: 'Week 3-4', deliverables: ['Enterprise platform architecture', 'API integration strategy', 'Data migration plan', 'Security & compliance framework'] },
      { phase: 'Core Platform Development', duration: 'Week 5-8', deliverables: ['Unified operations dashboard', 'Multi-modal transport management', 'Integrated billing & finance', 'Compliance management engine'] },
      { phase: 'Advanced Enterprise Features', duration: 'Week 9-12', deliverables: ['Analytics & BI platform', 'Vendor management system', 'API integration hub', 'Client-facing portals'] },
      { phase: 'Migration & Testing', duration: 'Week 13-14', deliverables: ['Data migration from legacy systems', 'End-to-end integration testing', 'UAT with all business units', 'Performance & security testing'] },
      { phase: 'Rollout & Change Management', duration: 'Week 15-16', deliverables: ['Phased rollout across locations', 'Change management & training', 'Go-live support team', 'Post-launch optimization'] },
    ],
    whyNexgenReasons: [
      { title: 'Logistics-native enterprise architecture', description: 'We do not adapt generic ERP or SCM platforms  we build enterprise systems from the ground up for logistics workflows, data models, and compliance requirements.' },
      { title: 'Multi-modal from day one', description: 'Road, rail, air, water, warehouse  all connected in a single platform with unified data models and cross-modal analytics.' },
      { title: 'API-first integration', description: 'Pre-built connectors for 50+ logistics APIs (GSTN, VAHAN, port systems, airline systems, e-commerce platforms) plus custom integration capability.' },
      { title: 'Multi-tenant SaaS ready', description: 'White-label platform architecture for associations, franchises, and networks  each tenant gets branded experience with shared infrastructure.' },
      { title: 'ESG & carbon tracking', description: 'Scope 3 emission calculation, mode-wise carbon footprint, and ESG reporting  future-proofing your business for mandatory climate disclosure.' },
      { title: 'Transformation partner, not just vendor', description: 'We work alongside your team as a digital transformation partner  process re-engineering, change management, and ongoing optimization included.' },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════
// PRODUCTS DATA  96 Products (keyed by slug)
// ═══════════════════════════════════════════════════════════════

export const productsData: Record<string, ProductDetail> = {

  // ────────────────────────────────────────────────
  // ROADWAY (18 products)
  // ────────────────────────────────────────────────

  'roadway-01': {
    slug: 'roadway-01',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '01',
    name: 'Transport Management System (TMS)',
    description: 'End-to-end trip planning, dispatch, driver assignment, route optimization, and delivery confirmation.',
    heroTagline: 'One system to run your entire road transport operation',
    heroDescription: 'Stop juggling spreadsheets, WhatsApp groups, and phone calls to manage trips. Our TMS digitizes the complete lifecycle  from order receipt to delivery confirmation  in a single platform built for Indian road freight realities.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of transport management system (tms)  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-02': {
    slug: 'roadway-02',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '02',
    name: 'Fleet Management System',
    description: 'Real-time vehicle tracking, maintenance scheduling, fuel logs, insurance alerts, utilization analytics.',
    heroTagline: 'Complete fleet visibility and control',
    heroDescription: 'Your fleet is your biggest asset  and your biggest source of hidden costs. Without real-time tracking and analytics, you cannot see fuel theft, maintenance gaps, or underutilized vehicles. Our fleet management system gives you complete visibility and control over every vehicle.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of fleet management system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-03': {
    slug: 'roadway-03',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '03',
    name: 'Route Optimization Software',
    description: 'AI-powered multi-stop route planning, traffic integration, cost-per-km analytics, load balancing.',
    heroTagline: 'Optimize every route, save every rupee',
    heroDescription: 'Indian roads are unpredictable  traffic jams, toll changes, road closures, and weather disruptions. Our AI-powered route optimization software considers real-time conditions, multi-stop requirements, and cost-per-km analytics to find the most efficient route for every trip.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of route optimization software  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-04': {
    slug: 'roadway-04',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '04',
    name: 'Dispatch Management System',
    description: 'Load-to-vehicle assignment, real-time dispatch board, driver communication, status tracking.',
    heroTagline: 'Dispatch faster with real-time coordination',
    heroDescription: 'Dispatch is the nerve center of road freight  matching loads with vehicles, assigning drivers, and coordinating departures. Our dispatch management system digitizes the entire dispatch workflow with real-time visibility and automated assignment.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of dispatch management system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-05': {
    slug: 'roadway-05',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '05',
    name: 'Last-Mile Delivery System',
    description: 'Delivery zone management, customer notifications, proof-of-delivery capture, failed delivery workflows.',
    heroTagline: 'Master the last mile  the most expensive leg',
    heroDescription: 'Last-mile delivery accounts for 40-50% of total shipping cost in India  yet most operations run on paper and phone calls. Our last-mile delivery system digitizes zone management, customer notifications, proof-of-delivery, and failed delivery workflows.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of last-mile delivery system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-06': {
    slug: 'roadway-06',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '06',
    name: 'Driver Management System',
    description: 'Driver profiles, license tracking, performance scoring, attendance, incentive management.',
    heroTagline: 'Manage your drivers like your most valuable asset',
    heroDescription: 'Drivers are the face of your fleet  yet most operators have no systematic way to track performance, manage licenses, or retain their best drivers. Our driver management system provides complete driver lifecycle management with performance scoring and incentive tracking.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of driver management system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-07': {
    slug: 'roadway-07',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '07',
    name: 'Vehicle Telematics System',
    description: 'GPS tracking, speed alerts, harsh braking detection, engine diagnostics, fuel efficiency monitoring.',
    heroTagline: 'Turn every vehicle into a smart vehicle',
    heroDescription: 'Telematics data is a goldmine  but most Indian fleet operators only use it for basic GPS tracking. Our vehicle telematics system unlocks the full value with speed alerts, harsh braking detection, engine diagnostics, and fuel efficiency monitoring.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of vehicle telematics system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-08': {
    slug: 'roadway-08',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '08',
    name: 'Load Planning & Optimization',
    description: 'Cargo dimension matching, weight distribution, multi-stop load sequencing, utilization maximization.',
    heroTagline: 'Maximize every truckload capacity',
    heroDescription: 'Underutilized trucks burn money  every empty cubic meter is wasted capacity. Our load planning software matches cargo dimensions, optimizes weight distribution, sequences multi-stop loads, and maximizes vehicle utilization.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of load planning & optimization  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-09': {
    slug: 'roadway-09',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '09',
    name: 'Proof of Delivery (POD) System',
    description: 'Digital POD capture, photo upload, e-signature, instant customer notification, dispute management.',
    heroTagline: 'Digital POD  faster billing, fewer disputes',
    heroDescription: 'Physical PODs get lost, damaged, or delayed  blocking invoicing and causing disputes. Our digital POD system captures proof of delivery with photos, e-signatures, and instant customer notification  reducing billing delays by 80%.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of proof of delivery (pod) system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-10': {
    slug: 'roadway-10',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '10',
    name: 'Freight Billing & Invoicing System',
    description: 'GST-compliant invoicing, rate card management, auto-send via WhatsApp/email, payment tracking.',
    heroTagline: 'GST-ready invoicing and billing automation',
    heroDescription: 'Freight billing in India is complex  multiple rate cards, GST calculations, multi-party billing, and payment tracking. Our billing system automates everything with GST-compliant invoicing, WhatsApp delivery, and payment tracking.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of freight billing & invoicing system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-11': {
    slug: 'roadway-11',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '11',
    name: 'Trip Expense Management System',
    description: 'Driver expense submission, approval workflow, fuel card integration, route-wise P&L.',
    heroTagline: 'Track every rupee spent on every trip',
    heroDescription: 'Trip expenses  fuel, tolls, loading charges, driver advances  are tracked in diaries and Excel sheets with no systematic reconciliation. Our expense management system digitizes submission, approval, and reconciliation with route-wise P&L.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of trip expense management system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-12': {
    slug: 'roadway-12',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '12',
    name: 'Fuel Management System',
    description: 'Fuel purchase tracking, consumption analytics, theft detection alerts, vendor management.',
    heroTagline: 'Stop fuel theft and optimize consumption',
    heroDescription: 'Fuel accounts for 30-40% of road freight operating costs in India  and 8-12% is lost to theft and pilferage. Our fuel management system tracks purchases, monitors consumption, detects anomalies, and manages vendor relationships.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of fuel management system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-13': {
    slug: 'roadway-13',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '13',
    name: 'Road Safety & Compliance System',
    description: 'Driver behavior monitoring, safety score, incident logging, regulatory compliance tracking.',
    heroTagline: 'Make safety measurable and manageable',
    heroDescription: 'Road accidents cost Indian logistics companies crores annually in vehicle damage, cargo loss, and insurance claims. Our safety system monitors driver behavior, calculates safety scores, logs incidents, and tracks regulatory compliance.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of road safety & compliance system  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-14': {
    slug: 'roadway-14',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '14',
    name: 'E-Way Bill Automation',
    description: 'Automated e-way bill generation from trip data, bulk generation, GSTIN verification, GST portal integration.',
    heroTagline: 'Never miss an e-way bill deadline again',
    heroDescription: 'E-way bill non-compliance penalties can reach ₹25,000 per consignment  and most Indian operators still generate them manually on the GST portal. Our e-way bill automation generates bills from trip data with GSTIN verification and expiry alerts.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of e-way bill automation  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-15': {
    slug: 'roadway-15',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '15',
    name: 'Logistics CRM for Road Transport',
    description: 'Client relationship management, rate negotiation tracking, contract management, renewal alerts.',
    heroTagline: 'CRM built for how road freight sales works',
    heroDescription: 'Generic CRMs do not understand freight rates, lane profitability, or transport sales cycles. Our logistics CRM tracks client relationships, rate negotiations, contract renewals, and BD pipeline  purpose-built for road freight.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of logistics crm for road transport  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-16': {
    slug: 'roadway-16',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '16',
    name: 'Freight Brokerage Platform',
    description: 'Load board, carrier matching, rate comparison, booking management, commission tracking.',
    heroTagline: 'Digital load board for the Indian freight market',
    heroDescription: 'Freight brokers match loads with carriers  currently through phone calls, WhatsApp, and intuition. Our brokerage platform provides a digital load board with carrier matching, rate comparison, booking management, and commission tracking.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of freight brokerage platform  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-17': {
    slug: 'roadway-17',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '17',
    name: 'Road Freight Marketplace',
    description: 'Shipper-carrier matching, spot rate auction, carrier rating, load tracking, payment processing.',
    heroTagline: 'Connect shippers and carriers on a transparent marketplace',
    heroDescription: 'The Indian road freight market is fragmented  millions of shippers and carriers who find each other through brokers. Our marketplace platform connects them directly with transparent pricing, carrier ratings, and secure payment processing.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of road freight marketplace  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },
  'roadway-18': {
    slug: 'roadway-18',
    categoryId: 'roadway',
    categoryLabel: 'Roadway Logistics Software',
    number: '18',
    name: 'Carrier Performance Scorecard',
    description: 'On-time delivery rate, damage claims rate, response time, overall carrier score.',
    heroTagline: 'Measure carrier performance with data, not opinions',
    heroDescription: 'Most Indian logistics companies evaluate carriers based on personal relationships and recent experiences  not systematic data. Our carrier scorecard provides objective performance measurement across on-time delivery, damage rates, and cost efficiency.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive system that handles every aspect of carrier performance scorecard  designed specifically for Indian road freight operations and GST compliance.',
    whatWeDoItems: [
      'Digital order management with automated trip creation from client requests',
      'Intelligent driver-vehicle assignment based on availability, location, and load compatibility',
      'Route planning with real-time traffic integration and toll cost calculation',
      'In-transit tracking with milestone updates and customer notification',
      'Digital proof-of-delivery with photo capture and e-signature',
      'Automated freight billing with GST-compliant invoicing and payment tracking'
    ],
    features: [
      {
        title: 'Smart Trip Scheduling',
        description: 'Automated trip creation with optimal departure time, route, and vehicle assignment. Supports multi-stop, multi-drop, and return trip planning.'
      },
      {
        title: 'Real-Time GPS Tracking',
        description: 'Live vehicle location on map with speed, route deviation, and halt monitoring. Integrates with all major GPS device brands used in India.'
      },
      {
        title: 'Automated E-Way Bill',
        description: 'Auto-generation of e-way bills from trip data with GSTIN verification, expiry alerts, and bulk generation for multi-consignment trips.'
      },
      {
        title: 'Driver Mobile App',
        description: 'Android app for drivers with trip details, navigation, POD capture, expense submission, and WhatsApp-based communication  works offline.'
      },
      {
        title: 'Freight Billing Engine',
        description: 'Rate card management, automatic invoice generation, GST computation, multi-party billing (shipper, consignee, broker), and payment tracking.'
      },
      {
        title: 'Customer Tracking Portal',
        description: 'Branded web portal for clients to track shipments, download documents, and receive automated notifications  reduces daily tracking calls by 80%.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Trip profitability, vehicle utilization, on-time performance, driver efficiency, and revenue trends  all in real-time dashboards.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a structured implementation process that maps your exact workflows and delivers a system your team will actually use.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Operational Mapping',
        description: 'We study your current trip lifecycle  how orders come in, how dispatch happens, how billing works. Every workflow is documented.'
      },
      {
        step: 2,
        title: 'System Configuration',
        description: 'Rate cards, routes, vehicle types, client profiles, and billing rules are configured to match your exact business rules.'
      },
      {
        step: 3,
        title: 'Integration Setup',
        description: 'GPS providers, payment gateways, WhatsApp Business API, and any existing ERP/CRM systems are connected.'
      },
      {
        step: 4,
        title: 'Testing & Training',
        description: 'End-to-end testing with your live data patterns. Your dispatch, billing, and operations teams are trained on the floor.'
      },
      {
        step: 5,
        title: 'Go-Live & Optimization',
        description: 'Phased go-live with parallel running. We monitor, optimize, and refine for 30 days post-launch.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Trip Processing',
        description: 'Automated trip creation and dispatch reduce time from order receipt to vehicle departure by 30%.'
      },
      {
        title: '80% Reduction in Tracking Calls',
        description: 'Customer portal and automated notifications eliminate 80% of daily tracking calls from clients.'
      },
      {
        title: 'Zero E-Way Bill Penalties',
        description: 'Automated generation and expiry alerts ensure 100% compliance with no penalties.'
      },
      {
        title: '15-20% Better Vehicle Utilization',
        description: 'Smart return trip planning and better dispatch allocation maximize revenue per vehicle per month.'
      },
      {
        title: '50% Faster Billing Cycles',
        description: 'Automated invoice generation reduces billing cycle from 7-10 days to 2-3 days.'
      },
      {
        title: 'Complete Trip Visibility',
        description: 'Every trip tracked from origin to destination with milestones, delays, and delivery confirmation.'
      },
      {
        title: 'Driver Accountability',
        description: 'Digital trip sheets, expense capture, and performance scoring create accountability and reduce disputes.'
      }
    ],
    beforeAfter: [
      {
        before: 'Trips managed on WhatsApp groups and phone calls  no record, no tracking',
        after: 'Every trip digitized with real-time tracking, milestone updates, and digital documentation'
      },
      {
        before: 'E-way bills generated manually on GST portal  risk of expiry and penalties',
        after: 'E-way bills auto-generated from trip data with expiry monitoring and bulk processing'
      },
      {
        before: 'Clients call 10 times a day asking "where is my shipment?"',
        after: 'Clients self-serve on branded tracking portal with automated milestone notifications'
      },
      {
        before: 'Billing takes 7-10 days with manual calculation and Excel-based invoicing',
        after: 'Automated GST-compliant invoicing generated within hours of trip completion'
      },
      {
        before: 'No visibility on which driver performed well or which route was profitable',
        after: 'Real-time dashboards showing driver performance, route profitability, and vehicle utilization'
      },
      {
        before: 'Return trips often run empty because there is no system to find loads',
        after: 'Return trip load matching and optimization reduces empty running by 40-60%'
      }
    ],
    faq: [
      {
        question: 'Does this work with my existing GPS tracking devices?',
        answer: 'Yes. We integrate with all major GPS device brands used in India  including Concox, Teltonika, Queclink, and Atrack. Custom devices can be connected via API within 48 hours.'
      },
      {
        question: 'Can my drivers use the app without constant internet?',
        answer: 'The driver app works offline. Trip details, route information, and POD capture all function without connectivity. Data syncs automatically when the driver reconnects.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Standard implementation takes 6-8 weeks. This includes operational mapping, configuration, GPS integration, testing, team training, and go-live support.'
      },
      {
        question: 'Can I generate e-way bills for multi-consignment trips?',
        answer: 'Yes. The system supports bulk e-way bill generation for trips carrying multiple consignments with individual and consolidated options.'
      },
      {
        question: 'Does it integrate with Tally or other accounting systems?',
        answer: 'Yes. Two-way integration with Tally, Zoho Books, and major ERP systems. Invoices and payments sync automatically.'
      },
      {
        question: 'Is there a mobile app for fleet managers?',
        answer: 'Yes. The fleet manager app provides real-time vehicle tracking, dispatch management, and alerts on both Android and iOS.'
      }
    ]
  },

  // ────────────────────────────────────────────────
  // RAILWAY (15 products)
  // ────────────────────────────────────────────────

  'railway-01': {
    slug: 'railway-01',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '01',
    name: 'Rail Transport Management System',
    description: 'Rail freight booking, wagon allocation, dispatch coordination, journey tracking, delivery management.',
    heroTagline: 'Complete rail freight management from booking to delivery',
    heroDescription: 'Indian Railways moves over 1.4 billion tonnes of freight annually  yet most companies that depend on it manage operations through phone calls, spreadsheets, and guesswork. Our rail transport management system digitizes the complete lifecycle from booking to final delivery.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail transport management system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },
  'railway-02': {
    slug: 'railway-02',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '02',
    name: 'Wagon Allocation & Scheduling',
    description: 'Wagon demand forecasting, allocation optimization, maintenance-aware scheduling.',
    heroTagline: 'Optimize wagon allocation with intelligent scheduling',
    heroDescription: 'Wagon availability is a daily uncertainty for Indian rail freight operators. Our wagon allocation system uses demand forecasting, maintenance-aware scheduling, and optimization algorithms to maximize utilization and reduce waiting time.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of wagon allocation & scheduling  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },
  'railway-03': {
    slug: 'railway-03',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '03',
    name: 'Rail Freight Booking System',
    description: 'Online rail freight booking, rate comparison, booking confirmation, document generation, tracking.',
    heroTagline: 'Book rail freight online with real-time confirmation',
    heroDescription: 'Rail freight booking in India involves visiting RFO offices, filling forms, and waiting for confirmation  a process that can take days. Our online booking system digitizes the entire process with rate comparison and instant confirmation.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail freight booking system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },
  'railway-04': {
    slug: 'railway-04',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '04',
    name: 'Rail Yard Management System',
    description: 'Wagon sorting, yard capacity management, locomotive assignment, dwell time analytics.',
    heroTagline: 'Optimize rail yard operations and reduce dwell time',
    heroDescription: 'Rail yards are bottlenecks  wagon sorting, capacity management, and locomotive assignment all need precise coordination. Our yard management system provides real-time visibility on yard operations with dwell time analytics.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail yard management system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },
  'railway-05': {
    slug: 'railway-05',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '05',
    name: 'Rail Cargo Tracking System',
    description: 'Real-time wagon location, journey milestone tracking, ETA prediction, delay alerts.',
    heroTagline: 'Track rail cargo beyond origin and destination',
    heroDescription: 'Rail freight tracking in India is limited to origin and destination  the transit period is a black hole. Our tracking system provides real-time wagon location, journey milestones, ETA prediction, and proactive delay alerts.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail cargo tracking system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },
  'railway-06': {
    slug: 'railway-06',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '06',
    name: 'Rail Fleet Maintenance System',
    description: 'Preventive maintenance scheduling, repair tracking, part inventory, compliance documentation.',
    heroTagline: 'Prevent breakdowns with predictive maintenance',
    heroDescription: 'Rail fleet maintenance in India is reactive  fixing things after they break. Our maintenance system schedules preventive maintenance, tracks repairs, manages parts inventory, and maintains compliance documentation.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail fleet maintenance system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },
  'railway-07': {
    slug: 'railway-07',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '07',
    name: 'Rail Freight Billing & Settlement',
    description: 'Freight charge calculation, waybridge integration, penalty management, revenue reconciliation.',
    heroTagline: 'Automated rail freight billing and settlement',
    heroDescription: 'Rail freight billing in India involves complex charge calculations, waybridge integration, penalty management, and multi-party reconciliation. Our billing system automates everything with GST-compliant invoicing.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail freight billing & settlement  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  // ────────────────────────────────────────────────
  // RAILWAY (continued  08-15)
  // ────────────────────────────────────────────────


  'railway-08': {
    slug: 'railway-08',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '08',
    name: 'Rail Terminal Operations System',
    description: 'Loading/unloading management, terminal capacity, equipment allocation, gate operations.',
    heroTagline: 'Take control of every rail terminal movement',
    heroDescription: 'Rail terminals are chaotic  trucks waiting for hours, equipment sitting idle, and no visibility on yard capacity. Our terminal operations system digitizes gate entry, loading/unloading coordination, equipment allocation, and dispatch planning  giving you real-time control over every movement.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail terminal operations system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  'railway-09': {
    slug: 'railway-09',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '09',
    name: 'Rail Intermodal Coordination',
    description: 'Rail-road handover management, ICD coordination, container tracking across modes.',
    heroTagline: 'Seamless rail-to-road cargo handover',
    heroDescription: 'The weakest link in Indian rail freight is the intermodal handover  where rail meets road. Delays of 8-12 hours at interchange points are common. Our system coordinates every stakeholder  rail operator, road transporter, terminal, and warehouse  to eliminate handover blind spots.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail intermodal coordination  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  'railway-10': {
    slug: 'railway-10',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '10',
    name: 'Rail Freight Analytics Platform',
    description: 'Volume trends, revenue analytics, route profitability, customer performance dashboards.',
    heroTagline: 'Turn rail freight data into decisions',
    heroDescription: 'Rail freight generates massive amounts of data  rake movements, freight charges, demurrage, transit times  but most companies analyze it in Excel at month-end. Our analytics platform gives you real-time dashboards that reveal profitability per route, customer, and commodity.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail freight analytics platform  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  'railway-11': {
    slug: 'railway-11',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '11',
    name: 'Rail Delay Prediction System',
    description: 'AI-powered delay forecasting, proactive customer notification, alternative routing.',
    heroTagline: 'Know about delays before they happen',
    heroDescription: 'Rail freight delays in India are unpredictable  congestion, weather, maintenance blocks, and operational issues cause cascading disruptions. Our AI-powered delay prediction system analyzes historical patterns, real-time conditions, and network data to forecast delays 6-12 hours in advance.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail delay prediction system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  'railway-12': {
    slug: 'railway-12',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '12',
    name: 'Rail Compliance & Documentation',
    description: 'RR management, consignment note generation, regulatory compliance tracking.',
    heroTagline: 'Never miss a railway compliance requirement',
    heroDescription: 'Rail freight documentation in India is complex  RRs (Railway Receipts), consignment notes, forwarding notes, demurrage calculations, and claim documents. Our system automates the entire documentation lifecycle with regulatory compliance tracking.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail compliance & documentation  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  'railway-13': {
    slug: 'railway-13',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '13',
    name: 'Rail Asset Tracking System',
    description: 'RFID/GPS-based asset tracking, utilization monitoring, lifecycle management.',
    heroTagline: 'Track every rail asset from procurement to retirement',
    heroDescription: 'Wagons, containers, locomotives, and terminal equipment are expensive assets that often go untracked. Our RFID/GPS-based asset tracking system monitors location, utilization, maintenance status, and lifecycle costs for every asset in your rail fleet.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail asset tracking system  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  'railway-14': {
    slug: 'railway-14',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '14',
    name: 'Rail Revenue Optimization Engine',
    description: 'Dynamic pricing, capacity yield management, off-peak incentive management.',
    heroTagline: 'Maximize revenue per wagon-kilometer',
    heroDescription: 'Rail freight pricing in India is often static  same rate regardless of demand, season, or route profitability. Our revenue optimization engine uses yield management algorithms to dynamically adjust pricing, maximize capacity utilization, and incentivize off-peak bookings.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail revenue optimization engine  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  'railway-15': {
    slug: 'railway-15',
    categoryId: 'railway',
    categoryLabel: 'Railway Logistics Software',
    number: '15',
    name: 'Rail Network Optimization Software',
    description: 'Network simulation, corridor analysis, capacity planning, investment prioritization.',
    heroTagline: 'Optimize your entire rail network',
    heroDescription: 'Deciding which corridors to prioritize, which terminals to expand, and how to balance capacity across your rail network requires sophisticated analysis. Our network optimization software simulates scenarios, analyzes corridor profitability, and recommends investment priorities.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A comprehensive railway logistics system that handles every aspect of rail network optimization software  designed specifically for Indian Railways operations and intermodal freight management.',
    whatWeDoItems: [
      'Digital rake booking and wagon allocation with real-time availability and optimization',
      'Transit milestone tracking with delay prediction and proactive customer notification',
      'Automated freight billing with waybridge integration and GST-compliant invoicing',
      'Intermodal coordination between rail and road for seamless ICD operations',
      'Demurrage prevention with automated detention tracking and alerts',
      'Analytics dashboards for volume, revenue, and profitability analysis'
    ],
    features: [
      {
        title: 'Rake Management Dashboard',
        description: 'Centralized dashboard for rake booking, allocation, and status tracking across the Indian Railways network with real-time updates.'
      },
      {
        title: 'Wagon Tracking Integration',
        description: 'Integration with CRIS and railway tracking systems for real-time wagon location, transit milestones, and delay alerts.'
      },
      {
        title: 'Freight Billing Automation',
        description: 'Automated freight charge calculation, waybill processing, and GST-compliant invoicing with dispute management workflow.'
      },
      {
        title: 'Intermodal Coordination',
        description: 'Seamless coordination between rail and road transport for ICD operations, container tracking, and first/last mile connectivity.'
      },
      {
        title: 'Demurrage Management',
        description: 'Automated detention tracking, demurrage calculation, expiry alerts, and dispute documentation to prevent unnecessary charges.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Volume trends, revenue analytics, route profitability, and customer performance dashboards with drill-down capabilities.'
      },
      {
        title: 'Mobile App for Staff',
        description: 'Android app for terminal and field staff with wagon inspection, loading confirmation, and real-time status updates.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a rail-specific implementation process that integrates with Indian Railways systems and maps your exact operational workflows.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Rail Operations Audit',
        description: 'We map your current rake booking process, wagon tracking methods, intermodal handover workflows, and billing procedures.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'We design the system architecture including CRIS integration, wagon tracking, billing modules, and customer portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the core modules  rake booking, wagon tracking, freight billing, and terminal operations management.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with Indian Railways systems, test intermodal workflows, and validate billing calculations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy the system, train your operations and finance teams, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '30% Faster Rake Processing',
        description: 'Automated booking and allocation reduce rake processing time from days to hours.'
      },
      {
        title: 'Zero Demurrage Surprises',
        description: 'Automated detention alerts and tracking prevent unnecessary demurrage and wharfage charges.'
      },
      {
        title: 'Real-Time Rail Visibility',
        description: 'Transit milestone tracking replaces the black hole between origin and destination stations.'
      },
      {
        title: '40% Faster Billing',
        description: 'Automated freight charge calculation and invoicing reduces billing cycle from 15 days to 3 days.'
      },
      {
        title: 'Better Intermodal Coordination',
        description: 'Seamless rail-road handover reduces interchange delays from 8-12 hours to 2-3 hours.'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Analytics dashboards reveal route profitability, customer performance, and revenue trends in real-time.'
      },
      {
        title: 'Compliance Ready',
        description: 'Automated RR management and regulatory compliance documentation keep you audit-ready.'
      }
    ],
    beforeAfter: [
      {
        before: 'Rake booking done through phone calls and manual forms  no confirmation trail',
        after: 'Digital rake booking with automated confirmation, allocation, and real-time status tracking'
      },
      {
        before: 'No visibility on wagon location after dispatch  blind until arrival at destination',
        after: 'Real-time transit milestones with delay prediction and proactive customer notification'
      },
      {
        before: 'Demurrage charges discovered only when bill arrives  often disputed and unpaid for months',
        after: 'Automated detention tracking with real-time alerts and dispute-ready documentation'
      },
      {
        before: 'Rail-road handover takes 8-12 hours with no coordination between stakeholders',
        after: 'Coordinated intermodal handover reducing interchange delays to 2-3 hours'
      },
      {
        before: 'Revenue analysis done in Excel at month-end  decisions based on outdated data',
        after: 'Real-time analytics dashboards showing route profitability, customer performance, and revenue trends'
      },
      {
        before: 'Compliance documents maintained in spreadsheets  no audit trail or automated tracking',
        after: 'Automated RR management, regulatory compliance tracking, and audit-ready documentation'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian Railways CRIS system?',
        answer: 'Yes. Our railway systems integrate with CRIS, RFO systems, and UTS for real-time data on wagon allocation, tracking, and freight billing.'
      },
      {
        question: 'Can it handle bulk commodity shipments like coal and iron ore?',
        answer: 'Absolutely. The system is designed for bulk freight with rake planning, commodity-specific freight rates, and loading/unloading coordination for coal, iron ore, cement, and fertilizers.'
      },
      {
        question: 'How does intermodal coordination with road transport work?',
        answer: 'The system connects rail and road stakeholders on a single platform  automated notifications for wagon arrival, truck scheduling for ICD pickup, and container tracking across modes.'
      },
      {
        question: 'Can we generate railway receipts and consignment notes digitally?',
        answer: 'Yes. The system auto-generates RRs, consignment notes, and all railway-specific documentation from booking data with digital signatures.'
      },
      {
        question: 'What about demurrage and wharfage charge management?',
        answer: 'Automated detention tracking calculates correct charges, provides alerts before deadlines, and generates dispute documentation with evidence of actual versus billed detention times.'
      },
      {
        question: 'How long does implementation take?',
        answer: 'Railway-specific implementation takes 8-10 weeks including system integration with railway systems, testing, and staff training at terminals.'
      }
    ]
  },

  // ────────────────────────────────────────────────
  // WATERWAYS (16 products)
  // ────────────────────────────────────────────────


  'waterways-01': {
    slug: 'waterways-01',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '01',
    name: 'Maritime Transport Management System',
    description: 'End-to-end maritime freight management, vessel assignment, voyage planning.',
    heroTagline: 'Manage every voyage from port to port',
    heroDescription: 'Maritime freight involves complex coordination  vessel selection, voyage planning, port scheduling, cargo documentation, and stakeholder communication. Our maritime transport management system brings all of this into one platform built for Indian shipping operations.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of maritime transport management system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-02': {
    slug: 'waterways-02',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '02',
    name: 'Vessel Management System',
    description: 'Fleet monitoring, maintenance scheduling, crew management, fuel tracking, voyage reporting.',
    heroTagline: 'Complete vessel lifecycle management',
    heroDescription: 'Every vessel in your fleet has a maintenance schedule, crew rotation, fuel consumption pattern, and compliance requirement. Our vessel management system tracks all of this centrally  from dry docking schedules to crew certification expiry  so nothing falls through the cracks.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of vessel management system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-03': {
    slug: 'waterways-03',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '03',
    name: 'Container Management System',
    description: 'Container lifecycle tracking, yard management, equipment interchange, damage inspection.',
    heroTagline: 'Track every container from stuffing to destuffing',
    heroDescription: 'Containers are the backbone of international trade, yet tracking their lifecycle in India is fragmented across shipping lines, terminals, and transporters. Our container management system provides end-to-end visibility  from stuffing at origin to destuffing at destination.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of container management system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-04': {
    slug: 'waterways-04',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '04',
    name: 'Port Management System',
    description: 'Berth allocation, vessel scheduling, port resource management, gate control, billing.',
    heroTagline: 'Run your port operations like a well-oiled machine',
    heroDescription: 'Port operations involve dozens of moving parts  berth allocation, vessel scheduling, yard planning, gate control, equipment deployment, and billing. Our port management system coordinates all of this in real-time, reducing vessel waiting time and improving throughput.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of port management system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-05': {
    slug: 'waterways-05',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '05',
    name: 'Terminal Operating System (TOS)',
    description: 'Container terminal operations, crane management, yard planning, truck appointment.',
    heroTagline: 'Maximize throughput at every terminal',
    heroDescription: 'Container terminals are high-pressure environments where every hour of delay costs lakhs. Our TOS optimizes crane scheduling, yard stacking, truck appointments, and gate operations  helping Indian terminals achieve throughput levels closer to global benchmarks.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of terminal operating system (tos)  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-06': {
    slug: 'waterways-06',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '06',
    name: 'Ship Scheduling & Routing Software',
    description: 'Voyage optimization, fuel efficiency routing, port call scheduling.',
    heroTagline: 'Every voyage optimized for time, fuel, and cost',
    heroDescription: 'Voyage planning for Indian coastal and international shipping involves balancing transit time, fuel costs, port call sequencing, and cargo deadlines. Our ship scheduling software uses optimization algorithms to find the best route, speed, and port call sequence for every voyage.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of ship scheduling & routing software  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-07': {
    slug: 'waterways-07',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '07',
    name: 'Marine Fleet Tracking System',
    description: 'AIS integration, real-time vessel positioning, route deviation alerts, ETA management.',
    heroTagline: 'Know where every vessel is, right now',
    heroDescription: 'Indian maritime operations involve vessels operating across coastal waters, international routes, and inland waterways. Our fleet tracking system integrates AIS data, GPS, and port systems to provide real-time vessel positioning, route monitoring, and ETA management.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of marine fleet tracking system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-08': {
    slug: 'waterways-08',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '08',
    name: 'Freight Forwarding System',
    description: 'Shipment booking, rate management, document generation, customs coordination.',
    heroTagline: 'One platform for the complete freight forwarding lifecycle',
    heroDescription: 'Freight forwarders in India juggle 20+ shipping lines, multiple customs brokers, and hundreds of shipments simultaneously. Our freight forwarding system brings booking, documentation, customs coordination, and billing into one unified platform.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of freight forwarding system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-09': {
    slug: 'waterways-09',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '09',
    name: 'Shipping Documentation System',
    description: 'Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order  automated generation.',
    heroTagline: 'Generate shipping documents in minutes, not hours',
    heroDescription: 'A single international shipment requires 10-15 documents  Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and more. Our shipping documentation system auto-generates all documents from booking data, reducing errors and saving hours per shipment.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of shipping documentation system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-10': {
    slug: 'waterways-10',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '10',
    name: 'Customs Clearance Management',
    description: 'Customs filing, duty calculation, document management, clearance status tracking.',
    heroTagline: 'Clear customs faster with automated filing',
    heroDescription: 'Customs clearance at Indian ports involves ICEGATE filing, duty calculation, document submission, and examination coordination  often taking 2-3 days. Our customs clearance management system automates filing, tracks status in real-time, and reduces clearance time by 40-60%.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of customs clearance management  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-11': {
    slug: 'waterways-11',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '11',
    name: 'Maritime Billing & Invoice System',
    description: 'Freight invoice generation, detention/demurrage calculation, disbursement accounting.',
    heroTagline: 'Accurate maritime billing, zero revenue leakage',
    heroDescription: 'Maritime billing is complex  freight charges, bunker adjustment factors, detention, demurrage, port charges, and disbursements all need accurate calculation and timely invoicing. Our maritime billing system automates everything with GST compliance built in.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of maritime billing & invoice system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-12': {
    slug: 'waterways-12',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '12',
    name: 'Smart Container IoT Monitoring',
    description: 'Temperature, humidity, shock, and GPS monitoring for sensitive cargo via IoT sensors.',
    heroTagline: 'Real-time IoT visibility for every container',
    heroDescription: 'Pharmaceuticals, perishables, and high-value cargo require continuous environmental monitoring during transit. Our IoT monitoring system tracks temperature, humidity, shock, and location inside every container  with real-time alerts and compliance reporting.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of smart container iot monitoring  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-13': {
    slug: 'waterways-13',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '13',
    name: 'Marine Compliance & Safety System',
    description: 'ISM Code compliance, SOLAS documentation, safety drills, incident reporting.',
    heroTagline: 'Stay compliant with every maritime regulation',
    heroDescription: 'Maritime compliance in India involves ISM Code, SOLAS regulations, DG handling rules, and port-specific requirements. Our marine compliance system automates documentation, schedules safety drills, tracks incidents, and maintains audit-ready records.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of marine compliance & safety system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-14': {
    slug: 'waterways-14',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '14',
    name: 'Dock & Yard Management System',
    description: 'Berth scheduling, yard equipment allocation, labor management, throughput analytics.',
    heroTagline: 'Optimize dock and yard operations end-to-end',
    heroDescription: 'Dock and yard operations at Indian ports and terminals are labor-intensive and coordination-heavy. Our system manages berth scheduling, equipment deployment, labor allocation, and throughput analytics  helping you move more cargo with fewer delays.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of dock & yard management system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-15': {
    slug: 'waterways-15',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '15',
    name: 'Port Community System',
    description: 'Multi-stakeholder information sharing, single window clearance, PCS integration.',
    heroTagline: 'Connect the entire port community on one platform',
    heroDescription: 'Indian ports involve dozens of stakeholders  shipping lines, agents, customs, terminals, transporters, and warehouse operators  who currently coordinate via email and phone. Our Port Community System creates a single digital platform for information sharing and transaction processing.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of port community system  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  'waterways-16': {
    slug: 'waterways-16',
    categoryId: 'waterways',
    categoryLabel: 'Waterways & Maritime Logistics Software',
    number: '16',
    name: 'Maritime Insurance & Claims Platform',
    description: 'Policy management, claims filing, damage assessment, settlement tracking.',
    heroTagline: 'Manage maritime insurance and claims efficiently',
    heroDescription: 'Cargo damage, vessel incidents, and liability claims are part of maritime operations. Our insurance and claims platform manages policy tracking, claim filing, damage assessment documentation, and settlement tracking  reducing claim resolution time from months to weeks.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A maritime logistics system that handles every aspect of maritime insurance & claims platform  designed specifically for Indian port operations, customs compliance, and international trade.',
    whatWeDoItems: [
      'End-to-end freight forwarding management from booking to delivery',
      'Automated customs clearance with ICEGATE integration and duty calculation',
      'Auto-generation of all maritime shipping documents from booking data',
      'Container lifecycle tracking with IoT sensor integration for sensitive cargo',
      'Detention and demurrage monitoring with proactive alerts and prevention',
      'Multi-stakeholder coordination on a single digital platform'
    ],
    features: [
      {
        title: 'Shipment Lifecycle Tracking',
        description: 'End-to-end visibility from booking to delivery with milestone updates, document management, and stakeholder notifications.'
      },
      {
        title: 'Customs Integration',
        description: 'ICEGATE integration for automated customs filing, duty calculation, Bill of Entry processing, and clearance status tracking.'
      },
      {
        title: 'Documentation Engine',
        description: 'Auto-generation of Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents.'
      },
      {
        title: 'Vessel & Container Tracking',
        description: 'AIS integration for vessel tracking and container lifecycle management from stuffing to destuffing with IoT sensor integration.'
      },
      {
        title: 'D&D Prevention',
        description: 'Automated detention and demurrage monitoring with alerts, turnaround tracking, and proactive coordination to minimize charges.'
      },
      {
        title: 'Port Operations Management',
        description: 'Berth allocation, yard planning, gate control, equipment deployment, and terminal throughput optimization.'
      },
      {
        title: 'Multi-Stakeholder Portal',
        description: 'Connect shipping lines, CHAs, customs, transporters, and warehouse operators on a single digital platform.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a maritime-specific implementation process that integrates with ICEGATE, port systems, and shipping line platforms.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Maritime Operations Audit',
        description: 'We analyze your current freight forwarding, customs clearance, and documentation workflows.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the system including customs integration, shipping line connectivity, and multi-stakeholder portal.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build freight management, customs automation, documentation generation, and port integration modules.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We integrate with ICEGATE, port systems, shipping lines, and test end-to-end customs workflows.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We deploy across departments, train your operations and documentation teams, and provide ongoing support.'
      }
    ],
    benefits: [
      {
        title: '40% Faster Customs Clearance',
        description: 'Automated ICEGATE filing and duty calculation reduce clearance time from 3 days to 1 day.'
      },
      {
        title: '60% Reduction in D&D Charges',
        description: 'Automated alerts and proactive coordination prevent detention and demurrage charges.'
      },
      {
        title: 'Complete Container Visibility',
        description: 'Track every container from stuffing to destuffing with IoT integration and milestone updates.'
      },
      {
        title: '80% Less Manual Documentation',
        description: 'Auto-generated shipping documents reduce manual processing from hours to minutes per shipment.'
      },
      {
        title: 'Unified Stakeholder Platform',
        description: 'Connect all stakeholders on one platform  eliminating email and phone-based coordination.'
      },
      {
        title: 'Maritime Compliance',
        description: 'Automated ISM Code, SOLAS, and DG compliance with audit-ready documentation.'
      },
      {
        title: 'Accurate Billing',
        description: 'Automated freight invoicing, D&D calculation, and disbursement accounting with GST compliance.'
      }
    ],
    beforeAfter: [
      {
        before: 'Customs filing done manually on ICEGATE  taking 2-3 days with frequent errors',
        after: 'Automated customs filing with duty calculation and real-time clearance status tracking'
      },
      {
        before: 'Shipping documents generated manually  Bill of Lading takes 1-2 hours per shipment',
        after: 'Auto-generated BL, Sea Waybill, and all shipping documents from booking data in minutes'
      },
      {
        before: 'Container tracking ends at port gate  no visibility inside terminal or during transit',
        after: 'End-to-end container lifecycle tracking with IoT integration and milestone notifications'
      },
      {
        before: 'D&D charges discovered after the fact  no proactive monitoring or coordination',
        after: 'Automated D&D monitoring with alerts, turnaround tracking, and prevention mechanisms'
      },
      {
        before: 'Stakeholders coordinate via email chains  15+ emails per shipment',
        after: 'Single platform connecting all stakeholders with automated notifications and status updates'
      },
      {
        before: 'Maritime compliance tracked in spreadsheets  no automated audit trails',
        after: 'Automated compliance documentation with ISM Code, SOLAS, and DG regulation tracking'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with Indian customs (ICEGATE)?',
        answer: 'Yes. Our system integrates with ICEGATE for automated Bill of Entry filing, shipping bill processing, duty calculation, and real-time customs status tracking.'
      },
      {
        question: 'Can it generate Bill of Lading and other shipping documents?',
        answer: 'Yes. The system auto-generates Bill of Lading, Sea Waybill, Arrival Notice, Delivery Order, and all maritime shipping documents from booking data.'
      },
      {
        question: 'How does D&D charge prevention work?',
        answer: 'The system tracks container detention time, sends alerts before free time expires, coordinates with transporters for pickup, and generates dispute documentation when charges are incorrect.'
      },
      {
        question: 'Does it work with PCS India (Port Community System)?',
        answer: 'Yes. Our system integrates with PCS India for single window clearance, port stakeholder coordination, and regulatory compliance.'
      },
      {
        question: 'Can multiple stakeholders access the same platform?',
        answer: 'Yes. The multi-stakeholder architecture allows shipping lines, CHAs, customs brokers, transporters, and warehouse operators to collaborate on a single platform with role-based access.'
      },
      {
        question: 'How long does maritime implementation take?',
        answer: 'Maritime implementation takes 8-12 weeks including customs integration, port system connectivity, multi-stakeholder onboarding, and staff training.'
      }
    ]
  },

  // ────────────────────────────────────────────────
  // AIRWAYS (15 products)
  // ────────────────────────────────────────────────


  'airways-01': {
    slug: 'airways-01',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '01',
    name: 'Air Cargo Management System',
    description: 'Comprehensive air freight management  booking, space allocation, tracking, billing, claims.',
    heroTagline: 'Complete air freight operations in one platform',
    heroDescription: 'Air cargo demands speed, accuracy, and compliance. Our air cargo management system covers the entire lifecycle  from booking and space allocation to tracking, billing, and claims  built for the realities of Indian air freight operations.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air cargo management system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-02': {
    slug: 'airways-02',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '02',
    name: 'Air Freight Booking System',
    description: 'Online booking, rate comparison, space confirmation, AWB generation, tracking notification.',
    heroTagline: 'Book air freight space in minutes, not hours',
    heroDescription: 'Air freight booking in India still involves phone calls to multiple airlines, manual rate comparison, and email-based confirmation. Our booking system digitizes the entire process  compare rates across airlines, confirm space, generate AWB, and notify stakeholders automatically.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air freight booking system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-03': {
    slug: 'airways-03',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '03',
    name: 'Flight Load Planning System',
    description: 'ULD management, weight/balance optimization, cargo loading sequence, dangerous goods compliance.',
    heroTagline: 'Optimize every kilogram on every flight',
    heroDescription: 'Air cargo load planning involves complex weight-and-balance calculations, ULD configuration, loading sequence optimization, and dangerous goods segregation. Our flight load planning system automates all of this  maximizing payload while maintaining safety compliance.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of flight load planning system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-04': {
    slug: 'airways-04',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '04',
    name: 'Air Cargo Tracking System',
    description: 'Real-time shipment tracking, milestone notifications, ETA management, delay alerts.',
    heroTagline: 'Track air cargo from booking to delivery',
    heroDescription: 'Air cargo shippers in India have limited visibility once cargo is handed over to the airline. Our tracking system provides real-time milestone updates  booking confirmation, acceptance, manifested, loaded, arrived, and delivered  with proactive delay alerts.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air cargo tracking system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-05': {
    slug: 'airways-05',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '05',
    name: 'Ground Handling Management System',
    description: 'Ramp operations, equipment management, staff scheduling, turnaround time monitoring.',
    heroTagline: 'Faster turnaround, better ground operations',
    heroDescription: 'Ground handling is the bottleneck at Indian airports  equipment shortages, staff scheduling gaps, and poor coordination between handlers and airlines. Our ground handling system manages ramp operations, equipment deployment, and turnaround monitoring to cut processing time.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of ground handling management system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-06': {
    slug: 'airways-06',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '06',
    name: 'Air Warehouse Handling System',
    description: 'Cargo build-up, break-bulk, screening management, dangerous goods storage, cold storage.',
    heroTagline: 'Efficient air cargo warehouse operations',
    heroDescription: 'Air cargo warehouses handle diverse cargo  from general freight to dangerous goods, temperature-sensitive pharma, and express shipments. Our warehouse handling system manages build-up, break-bulk, screening, DG storage, and cold chain operations in one platform.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air warehouse handling system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-07': {
    slug: 'airways-07',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '07',
    name: 'Air Freight Billing System',
    description: 'AWB-based billing, CASS integration, interline billing, revenue accounting.',
    heroTagline: 'Accurate air freight billing and revenue management',
    heroDescription: 'Air freight billing involves AWB-based charges, airline billing settlements (CASS), interline billing, and revenue accounting across multiple currencies and parties. Our billing system automates all of this with GST compliance and multi-currency support.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air freight billing system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-08': {
    slug: 'airways-08',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '08',
    name: 'Cargo Capacity Optimization Software',
    description: 'Yield management, space optimization, overbooking management, revenue maximization.',
    heroTagline: 'Maximize revenue per kilogram of capacity',
    heroDescription: 'Air cargo capacity is finite and expensive  every empty kilogram is lost revenue. Our capacity optimization software uses yield management algorithms to optimize space allocation, manage overbooking, and maximize revenue per flight.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of cargo capacity optimization software  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-09': {
    slug: 'airways-09',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '09',
    name: 'Air Logistics CRM',
    description: 'Shipper relationship management, rate contract tracking, service level monitoring.',
    heroTagline: 'Purpose-built CRM for air freight relationships',
    heroDescription: 'Air freight relationships are built on trust, rate competitiveness, and service reliability. Our air logistics CRM tracks shipper interactions, rate contracts, service level agreements, and booking patterns  helping you retain clients and grow revenue.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air logistics crm  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-10': {
    slug: 'airways-10',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '10',
    name: 'Aviation Compliance & Safety System',
    description: 'DG regulations, IATA compliance, security screening records, audit management.',
    heroTagline: 'Stay compliant with every aviation regulation',
    heroDescription: 'Air cargo compliance involves IATA dangerous goods regulations, DG packing requirements, security screening mandates, and airline-specific acceptance rules. Our compliance system automates checking, documentation, and audit trails.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of aviation compliance & safety system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-11': {
    slug: 'airways-11',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '11',
    name: 'Air Shipment Documentation (AWB)',
    description: 'Air Waybill generation, MAWB/HAWB management, carnet documentation, customs pre-filing.',
    heroTagline: 'Generate accurate AWBs and shipping documents',
    heroDescription: 'Air Waybill processing is the most documentation-heavy part of air freight  MAWB/HAWB generation, carnet management, customs pre-filing, and airline-specific requirements. Our documentation system automates all of this from booking data.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air shipment documentation (awb)  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-12': {
    slug: 'airways-12',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '12',
    name: 'Airport Terminal Operations System',
    description: 'Terminal slot management, counter allocation, baggage system integration.',
    heroTagline: 'Streamline airport terminal operations',
    heroDescription: 'Airport terminals are high-pressure environments where cargo acceptance, screening, storage, and loading must happen within tight time windows. Our terminal operations system manages slot allocation, counter deployment, and workflow coordination.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of airport terminal operations system  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-13': {
    slug: 'airways-13',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '13',
    name: 'Air Freight Rate Management',
    description: 'Rate card management, tariff filing, pricing engine, contract rate automation.',
    heroTagline: 'Dynamic air freight rate management',
    heroDescription: 'Air freight rates fluctuate based on seasonality, capacity, fuel surcharges, and route demand. Our rate management system maintains rate cards, manages tariff filings, runs pricing engines, and automates contract rate application.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of air freight rate management  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-14': {
    slug: 'airways-14',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '14',
    name: 'Express Cargo & Courier Management',
    description: 'Time-critical shipment management, priority routing, signature capture.',
    heroTagline: 'Deliver express shipments on time, every time',
    heroDescription: 'Express and courier operations demand precision  time-critical shipments, priority routing, proof of delivery, and SLA tracking. Our express cargo management system provides end-to-end visibility and operational control for time-definite deliveries.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of express cargo & courier management  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  'airways-15': {
    slug: 'airways-15',
    categoryId: 'airways',
    categoryLabel: 'Airways Logistics Software',
    number: '15',
    name: 'Drone Delivery Management Platform',
    description: 'Drone fleet management, route planning, regulatory compliance, delivery confirmation.',
    heroTagline: 'Manage drone deliveries at scale',
    heroDescription: 'Drone delivery is emerging in India for last-mile logistics, medical supplies, and e-commerce. Our drone delivery management platform handles fleet management, route planning, regulatory compliance (DGCA), and delivery confirmation with geofencing.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An air cargo management system that handles every aspect of drone delivery management platform  designed specifically for Indian air freight operations and IATA compliance.',
    whatWeDoItems: [
      'Online air freight booking with real-time rate comparison across airlines',
      'Automated AWB generation with airline system integration and validation',
      'Dangerous goods compliance checking and documentation per IATA regulations',
      'Real-time shipment tracking with milestone notifications and delay alerts',
      'Ground handling coordination for faster turnaround and processing',
      'Revenue optimization through yield management and space allocation algorithms'
    ],
    features: [
      {
        title: 'Real-Time Air Cargo Tracking',
        description: 'Milestone-based tracking from booking to delivery with AWB status, flight details, and proactive delay notifications.'
      },
      {
        title: 'Automated AWB Processing',
        description: 'MAWB/HAWB generation, modification, and cancellation with airline system integration and error validation.'
      },
      {
        title: 'Space Allocation Engine',
        description: 'Dynamic space allocation across airlines and flights with yield optimization and overbooking management.'
      },
      {
        title: 'DG Compliance Automation',
        description: 'Automated dangerous goods classification checking, documentation generation, and acceptance workflow per IATA regulations.'
      },
      {
        title: 'Ground Handling Coordination',
        description: 'Ramp operations management, equipment scheduling, staff allocation, and turnaround time monitoring.'
      },
      {
        title: 'Air Freight Billing',
        description: 'AWB-based charge calculation, CASS integration, airline settlement, interline billing, and GST-compliant invoicing.'
      },
      {
        title: 'Customer Self-Service Portal',
        description: 'Branded portal for shippers to book, track, download documents, and manage shipments without calling operations.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an air cargo implementation process that integrates with airline systems and ensures IATA compliance from day one.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Air Operations Discovery',
        description: 'We study your current booking process, AWB workflows, ground handling coordination, and compliance procedures.'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'We design the air cargo management system including airline integration, space allocation, and DG compliance workflows.'
      },
      {
        step: 3,
        title: 'Core Development',
        description: 'We build the booking engine, AWB management, tracking system, and billing module.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'We connect with airline systems, test DG compliance workflows, and validate billing accuracy.'
      },
      {
        step: 5,
        title: 'Go-Live & Support',
        description: 'We deploy the system, train your operations and sales teams, and provide 30-day hypercare support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Booking',
        description: 'Online rate comparison and booking reduce the booking cycle from hours to minutes.'
      },
      {
        title: '90% Less AWB Errors',
        description: 'Automated AWB generation from booking data eliminates manual data entry errors.'
      },
      {
        title: 'Zero DG Rejections',
        description: 'Automated dangerous goods checking prevents rejections and compliance violations at acceptance.'
      },
      {
        title: '30% Better Space Utilization',
        description: 'Yield management algorithms maximize revenue per kg of available cargo capacity.'
      },
      {
        title: 'Faster Turnaround',
        description: 'Ground handling coordination reduces shipment processing time by 30-40%.'
      },
      {
        title: 'Real-Time Shipment Tracking',
        description: 'Milestone-based tracking with proactive alerts eliminates tracking calls from clients.'
      },
      {
        title: 'Express SLA Management',
        description: 'Priority space allocation and time-definite tracking ensure express shipments meet delivery commitments.'
      }
    ],
    beforeAfter: [
      {
        before: 'Air freight booking involves calling multiple airlines  hours of rate comparison',
        after: 'Online rate comparison and booking across all airlines in minutes with instant confirmation'
      },
      {
        before: 'AWB data entry is manual  error rate exceeds 8% causing shipment delays',
        after: 'Automated AWB generation from booking data with validation  error rate below 0.5%'
      },
      {
        before: 'Dangerous goods checked manually at acceptance  frequent rejections and delays',
        after: 'Automated DG compliance checking at booking stage  rejections reduced by 90%'
      },
      {
        before: 'Space allocated manually on spreadsheets  no revenue optimization',
        after: 'Yield management algorithms optimize space allocation to maximize revenue per kg'
      },
      {
        before: 'Ground handling coordination via walkie-talkie and phone  4-6 hour turnaround',
        after: 'Digital coordination reduces turnaround time by 30-40% with real-time status tracking'
      },
      {
        before: 'Clients call daily for shipment status  operations team spends hours on tracking',
        after: 'Self-service tracking portal eliminates 80% of tracking calls with automated notifications'
      }
    ],
    faq: [
      {
        question: 'Does this integrate with airline cargo systems?',
        answer: 'Yes. We integrate with major airline CCS, CASS, and cargo community platforms  both Indian and international carriers.'
      },
      {
        question: 'Can it handle dangerous goods compliance?',
        answer: 'Yes. The system includes automated DG classification checking per IATA regulations, documentation generation, and acceptance workflows that reduce rejections by 90%.'
      },
      {
        question: 'How does space allocation optimization work?',
        answer: 'The yield management algorithm considers booking demand, historical patterns, flight capacity, and rate tiers to optimize space allocation and maximize revenue per kg.'
      },
      {
        question: 'Can shippers track their own shipments?',
        answer: 'Yes. The branded customer portal provides self-service tracking with milestone updates, document download, and automated notifications  reducing daily tracking calls by 80%.'
      },
      {
        question: 'Does it support express and time-definite shipments?',
        answer: 'Yes. Priority space allocation, time-definite SLA tracking, and dedicated express workflow ensure time-critical shipments meet delivery commitments.'
      },
      {
        question: 'How long does air cargo implementation take?',
        answer: 'Air cargo implementation takes 6-8 weeks including airline system integration, ground handling coordination setup, and operations team training.'
      }
    ]
  },

  // ────────────────────────────────────────────────
  // WAREHOUSE (12 products)
  // ────────────────────────────────────────────────


  'warehouse-01': {
    slug: 'warehouse-01',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '01',
    name: 'Warehouse Management System (WMS)',
    description: 'Complete warehouse operations: receiving, putaway, picking, packing, shipping, returns.',
    heroTagline: 'Digitize every warehouse operation',
    heroDescription: 'Most Indian warehouses run on paper  handwritten pick lists, manual stock counts, and tribal knowledge held by experienced staff. Our WMS digitizes receiving, putaway, picking, packing, shipping, and returns in one platform built for Indian warehouse realities.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of warehouse management system (wms)  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-02': {
    slug: 'warehouse-02',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '02',
    name: 'Inventory Management System',
    description: 'Real-time stock levels, reorder point alerts, lot/batch tracking, expiry management.',
    heroTagline: 'Real-time inventory accuracy across your warehouse',
    heroDescription: 'Inventory discrepancies of 5-8% are common in Indian warehouses  leading to stockouts, overstocking, and working capital trapped in dead stock. Our inventory management system provides real-time stock visibility with automated reorder alerts and batch tracking.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of inventory management system  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-03': {
    slug: 'warehouse-03',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '03',
    name: 'Smart Slotting Optimization Engine',
    description: 'AI-driven slot assignment based on velocity, weight, pick frequency.',
    heroTagline: 'Put the right product in the right location',
    heroDescription: 'Warehouse slotting  deciding where to store each product  directly impacts pick efficiency. Most Indian warehouses slot products based on intuition. Our AI-driven slotting engine analyzes order patterns, product velocity, and physical characteristics to optimize slot assignments.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of smart slotting optimization engine  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-04': {
    slug: 'warehouse-04',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '04',
    name: 'Warehouse Labor Management System',
    description: 'Task management, productivity tracking, incentive management, attendance.',
    heroTagline: 'Measure and maximize warehouse labor productivity',
    heroDescription: 'Labor productivity varies 40-60% between best and worst performers in the same Indian warehouse  but most operations have no measurement system. Our labor management system tracks tasks, measures productivity, manages incentives, and optimizes workforce allocation.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of warehouse labor management system  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-05': {
    slug: 'warehouse-05',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '05',
    name: 'Pick & Pack Optimization Software',
    description: 'Batch picking, zone picking, wave management, packing station assignment.',
    heroTagline: 'Faster picks, fewer errors, higher throughput',
    heroDescription: 'Pick and pack is where most warehouse time is spent  and where most errors occur. Our pick optimization software implements batch picking, zone picking, and wave management to reduce pick paths by 25-35% and cut pick errors to under 0.5%.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of pick & pack optimization software  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-06': {
    slug: 'warehouse-06',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '06',
    name: 'Returns Processing Automation',
    description: 'Return authorization, inspection workflow, restocking logic, refund trigger.',
    heroTagline: 'Process returns in hours, not days',
    heroDescription: 'E-commerce returns in India average 15-25%  and processing each return takes 2-3 days with manual inspection, restocking decisions, and refund triggers. Our returns processing automation cuts this to same-day processing with systematic workflows.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of returns processing automation  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-07': {
    slug: 'warehouse-07',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '07',
    name: 'Order Batching Optimization Engine',
    description: 'Intelligent order grouping for pick efficiency, SLA-aware batching.',
    heroTagline: 'Group orders intelligently for maximum efficiency',
    heroDescription: 'Order batching  deciding which orders to pick together  is one of the most impactful warehouse optimization levers. Our batching engine groups orders based on product location, SLA deadlines, and picker capacity to maximize picks per hour.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of order batching optimization engine  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-08': {
    slug: 'warehouse-08',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '08',
    name: 'Smart Barcode / RFID Tracking System',
    description: 'Barcode label printing, RFID reader integration, asset tracking.',
    heroTagline: 'Track every movement with barcode and RFID',
    heroDescription: 'Knowing where every product, pallet, and asset is at any moment requires systematic tracking. Our barcode and RFID system handles label printing, reader integration, movement tracking, and asset management across the warehouse.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of smart barcode / rfid tracking system  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-09': {
    slug: 'warehouse-09',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '09',
    name: 'Fulfillment Center Orchestration Platform',
    description: 'Multi-channel order fulfillment, inventory reservation, carrier selection.',
    heroTagline: 'Orchestrate fulfillment across all channels',
    heroDescription: 'Modern fulfillment centers serve multiple channels  D2C website, Amazon, Flipkart, Meesho, wholesale, and retail. Our orchestration platform manages multi-channel order processing, inventory reservation, and carrier selection from one dashboard.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of fulfillment center orchestration platform  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-10': {
    slug: 'warehouse-10',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '10',
    name: 'Inventory Aging & Dead Stock Analyzer',
    description: 'Aging reports, slow-mover identification, liquidation recommendations.',
    heroTagline: 'Free working capital trapped in dead stock',
    heroDescription: 'Dead stock and slow-moving inventory tie up 15-20% of warehouse working capital in India. Our aging analyzer identifies dead stock, tracks inventory aging, and recommends liquidation strategies to free trapped capital.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of inventory aging & dead stock analyzer  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-11': {
    slug: 'warehouse-11',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '11',
    name: 'Warehouse Digital Twin Platform',
    description: '3D warehouse visualization, simulation, layout optimization, throughput modeling.',
    heroTagline: 'Visualize and simulate your warehouse digitally',
    heroDescription: 'Warehouse layout decisions are expensive to get wrong  racking configuration, aisle widths, dock positions, and zone layouts all impact throughput. Our digital twin platform creates a 3D virtual model of your warehouse for simulation and optimization.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of warehouse digital twin platform  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  'warehouse-12': {
    slug: 'warehouse-12',
    categoryId: 'warehouse',
    categoryLabel: 'Warehouse & Fulfillment Software',
    number: '12',
    name: 'Cold Chain Monitoring System',
    description: 'Temperature zone management, IoT sensor integration, excursion alerts, compliance.',
    heroTagline: 'Protect temperature-sensitive products end-to-end',
    heroDescription: 'Cold chain excursions affect 12-15% of pharmaceutical and food products in Indian warehouses and transit  leading to product spoilage, compliance violations, and financial losses. Our cold chain monitoring system provides IoT-based temperature tracking with excursion alerts.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'A warehouse management system that handles every aspect of cold chain monitoring system  designed specifically for Indian warehouse operations and e-commerce fulfillment.',
    whatWeDoItems: [
      'Complete WMS covering receiving, putaway, picking, packing, and shipping',
      'Real-time inventory management with batch tracking and expiry alerts',
      'AI-driven slotting optimization for maximum pick efficiency',
      'Barcode and RFID integration for accurate asset and inventory tracking',
      'Automated returns processing with inspection workflow and restocking logic',
      'E-commerce platform integration for multi-channel order fulfillment'
    ],
    features: [
      {
        title: 'Real-Time Inventory Tracking',
        description: 'Live stock levels with batch/lot tracking, FIFO/FEFO management, expiry alerts, and multi-warehouse synchronization.'
      },
      {
        title: 'Smart Putaway Algorithm',
        description: 'AI-driven putaway logic considering product velocity, weight, dimensions, and pick frequency for optimal slot utilization.'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Zone picking, batch picking, and wave management algorithms that reduce pick paths by 25-35% and increase picks per hour.'
      },
      {
        title: 'Barcode & RFID Integration',
        description: 'Barcode label printing, RFID reader integration, and real-time asset tracking across receiving, storage, and dispatch.'
      },
      {
        title: 'Returns Processing Workflow',
        description: 'Automated return authorization, inspection checklists, restocking logic, and refund trigger with quality grading.'
      },
      {
        title: 'Labor Productivity Tracking',
        description: 'Per-worker task measurement, productivity scoring, incentive calculation, and attendance management with mobile app.'
      },
      {
        title: 'E-Commerce Integration',
        description: 'Direct integration with Amazon, Flipkart, Meesho, and D2C platforms for automated order sync and fulfillment.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow a warehouse-specific implementation process that includes layout study, hardware installation, and floor staff training.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Warehouse Audit',
        description: 'We study your warehouse layout, current workflows, technology infrastructure, and integration requirements.'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'We design the WMS configuration including slotting strategy, pick-pack-ship workflows, and hardware plan.'
      },
      {
        step: 3,
        title: 'Core Build',
        description: 'We build receiving, putaway, inventory management, pick optimization, and shipping integration modules.'
      },
      {
        step: 4,
        title: 'Advanced Modules',
        description: 'We develop labor management, returns processing, analytics dashboards, and e-commerce integrations.'
      },
      {
        step: 5,
        title: 'Go-Live & Training',
        description: 'We install hardware, train floor staff, run parallel operations, and provide 30-day post-launch support.'
      }
    ],
    benefits: [
      {
        title: '50% Faster Order Processing',
        description: 'Automated pick-pack-ship workflows reduce order processing from 4-6 hours to 1-2 hours.'
      },
      {
        title: '99.5%+ Inventory Accuracy',
        description: 'Barcode/RFID tracking eliminates stock discrepancies and maintains real-time inventory accuracy.'
      },
      {
        title: '35% Improvement in Pick Productivity',
        description: 'Optimized pick paths, zone picking, and batch picking increase picks per worker per hour.'
      },
      {
        title: 'Same-Day Returns Processing',
        description: 'Automated inspection and restocking workflows process returns on the same day instead of 2-3 days.'
      },
      {
        title: '20% Less Dead Stock',
        description: 'Aging analysis and liquidation recommendations free working capital trapped in slow-moving inventory.'
      },
      {
        title: 'Zero Cold Chain Excursions',
        description: 'IoT temperature monitoring with real-time alerts prevents product spoilage and compliance violations.'
      },
      {
        title: 'Labor Productivity Visibility',
        description: 'Per-worker measurement and incentive management close the 40-60% productivity gap.'
      }
    ],
    beforeAfter: [
      {
        before: 'Pick lists handwritten and sorted manually  pick error rate of 3-5%',
        after: 'Digital pick optimization with barcode scanning reduces pick errors to under 0.5%'
      },
      {
        before: 'Inventory counted manually  discrepancies of 5-8% go undetected for weeks',
        after: 'Real-time inventory tracking with 99.5%+ accuracy and automated discrepancy alerts'
      },
      {
        before: 'Product slotted based on intuition  high-velocity items in distant locations',
        after: 'AI-driven slotting optimization places fast-moving items in optimal pick locations'
      },
      {
        before: 'Returns take 2-3 days to process  inspection and restocking done manually',
        after: 'Automated returns workflow processes returns on the same day with systematic inspection'
      },
      {
        before: 'Dead stock discovered during annual physical count  capital trapped for months',
        after: 'Automated aging analysis identifies dead stock monthly with liquidation recommendations'
      },
      {
        before: 'Cold chain monitored manually  temperature excursions discovered after product spoilage',
        after: 'IoT sensors provide real-time temperature monitoring with instant excursion alerts'
      }
    ],
    faq: [
      {
        question: 'Does it integrate with e-commerce platforms?',
        answer: 'Yes. Direct integration with Amazon, Flipkart, Meesho, Shopify, and other Indian e-commerce platforms for automated order sync and fulfillment.'
      },
      {
        question: 'What barcode and RFID hardware is supported?',
        answer: 'We support all major barcode scanners (Zebra, Honeywell, Datalogic), RFID readers (Impinj, Zebra), and label printers (Zebra, TSC, Godex).'
      },
      {
        question: 'Can it handle multiple warehouses?',
        answer: 'Yes. Manage 1 or 100 warehouses from a single dashboard with inter-warehouse stock transfers, centralized reporting, and cross-warehouse order routing.'
      },
      {
        question: 'How does cold chain monitoring work?',
        answer: 'IoT temperature sensors installed in cold zones transmit real-time data. The system triggers alerts on temperature excursions, logs compliance data, and generates GDP reports.'
      },
      {
        question: 'Can workers use the system on mobile devices?',
        answer: 'Yes. The Android app for warehouse workers supports barcode scanning, task assignment, pick confirmation, and returns processing on handheld devices.'
      },
      {
        question: 'How long does warehouse implementation take?',
        answer: 'Warehouse implementation takes 6-10 weeks including layout study, hardware installation, system configuration, staff training, and parallel running.'
      }
    ]
  },

  // ────────────────────────────────────────────────
  // ENTERPRISE (20 products)
  // ────────────────────────────────────────────────


  'enterprise-01': {
    slug: 'enterprise-01',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '01',
    name: 'Multi-Modal Transport Management System',
    description: 'Unified management across Rail, Road, Air, and Water modes.',
    heroTagline: 'One platform for every transport mode',
    heroDescription: 'Enterprise logistics companies in India operate across road, rail, air, and water  each with different systems, processes, and data formats. Our multi-modal TMS unifies all modes in a single platform with consistent data models and cross-modal visibility.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of multi-modal transport management system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-02': {
    slug: 'enterprise-02',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '02',
    name: 'Unified Logistics Control Tower',
    description: 'Real-time visibility across the entire supply chain, exception management.',
    heroTagline: 'Complete supply chain visibility from one dashboard',
    heroDescription: 'Enterprise logistics leaders need a unified view of operations  not fragmented reports from different systems. Our control tower provides real-time visibility across all transport modes, warehouses, and stakeholders with proactive exception management.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of unified logistics control tower  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-03': {
    slug: 'enterprise-03',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '03',
    name: 'Supply Chain Visibility Platform',
    description: 'End-to-end shipment tracking, multi-carrier integration, event-driven alerts.',
    heroTagline: 'Track every shipment across every carrier',
    heroDescription: 'Indian enterprises work with hundreds of carriers across multiple modes  and tracking shipments across all of them is nearly impossible. Our supply chain visibility platform integrates with carriers, transporters, and logistics partners to provide unified tracking.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of supply chain visibility platform  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-04': {
    slug: 'enterprise-04',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '04',
    name: 'Logistics ERP',
    description: 'Integrated operations, billing, HR, procurement, and reporting.',
    heroTagline: 'ERP built for logistics, not adapted from manufacturing',
    heroDescription: 'Generic ERP systems do not understand freight billing, trip management, fleet operations, or GST compliance for logistics. Our logistics ERP is purpose-built  integrating operations, billing, HR, procurement, and reporting in one platform.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of logistics erp  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-05': {
    slug: 'enterprise-05',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '05',
    name: 'Freight Rate Management System',
    description: 'Multi-modal rate cards, tariff management, rate negotiation tracking.',
    heroTagline: 'Manage freight rates across all modes and carriers',
    heroDescription: 'Enterprise logistics involves managing thousands of rate cards across road, rail, air, and water  each with different structures, surcharges, and validity periods. Our rate management system centralizes all rates with negotiation tracking and contract management.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of freight rate management system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-06': {
    slug: 'enterprise-06',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '06',
    name: 'Document Management & Automation',
    description: 'Centralized document repository, OCR processing, auto-routing.',
    heroTagline: 'Automate document processing across your logistics operations',
    heroDescription: 'Logistics generates thousands of documents daily  invoices, waybills, e-way bills, PODs, customs filings, and compliance records. Our document management system uses OCR and auto-routing to process, store, and retrieve documents instantly.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of document management & automation  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-07': {
    slug: 'enterprise-07',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '07',
    name: 'Logistics Analytics & BI Platform',
    description: 'Custom dashboards, route profitability, client performance, cost analytics.',
    heroTagline: 'Turn logistics data into business intelligence',
    heroDescription: 'Enterprise logistics companies generate massive data  but most analyze it in Excel at month-end. Our BI platform provides real-time dashboards for route profitability, client performance, cost analytics, and operational KPIs.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of logistics analytics & bi platform  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-08': {
    slug: 'enterprise-08',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '08',
    name: 'Vendor Management System',
    description: 'Carrier qualification, performance monitoring, contract management.',
    heroTagline: 'Manage carriers and vendors with data-driven decisions',
    heroDescription: 'Enterprise logistics involves managing hundreds of carriers, vendors, and service providers  most of whom are evaluated anecdotally. Our vendor management system provides systematic qualification, performance monitoring, and contract management.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of vendor management system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-09': {
    slug: 'enterprise-09',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '09',
    name: 'Client Portal for Shipment Visibility',
    description: 'Branded client login, shipment tracking, document download.',
    heroTagline: 'Give your clients self-service shipment visibility',
    heroDescription: 'Enterprise logistics clients expect real-time visibility  not tracking calls to your operations team. Our branded client portal provides self-service tracking, document download, and reporting that reduces daily calls by 80%.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of client portal for shipment visibility  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-10': {
    slug: 'enterprise-10',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '10',
    name: 'Reverse Logistics Management System',
    description: 'Returns management, reverse routing, inspection tracking.',
    heroTagline: 'Handle reverse logistics as efficiently as forward logistics',
    heroDescription: 'Returns management is the neglected stepchild of Indian logistics  despite e-commerce return rates of 15-25%. Our reverse logistics system manages return authorization, reverse routing, inspection, restocking, and refund processing.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of reverse logistics management system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-11': {
    slug: 'enterprise-11',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '11',
    name: 'Risk & Compliance Management System',
    description: 'Regulatory compliance tracking, risk assessment, audit management.',
    heroTagline: 'Stay ahead of every compliance requirement',
    heroDescription: 'Indian logistics companies face complex compliance requirements  GST, e-way bills, customs, road permits, environmental regulations, and more. Our risk and compliance system tracks requirements, manages audits, and provides risk assessment dashboards.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of risk & compliance management system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-12': {
    slug: 'enterprise-12',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '12',
    name: 'Logistics Automation Workflow Engine',
    description: 'No-code workflow builder for logistics processes.',
    heroTagline: 'Automate any logistics process without coding',
    heroDescription: 'Every logistics company has unique processes  approval workflows, escalation rules, compliance checks, and operational triggers. Our no-code workflow engine lets you build and modify automation workflows visually, without depending on developers.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of logistics automation workflow engine  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-13': {
    slug: 'enterprise-13',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '13',
    name: 'API Integration Hub',
    description: 'Pre-built connectors for GSTN, NIC, VAHAN, port systems, airline systems.',
    heroTagline: 'Connect every system with pre-built logistics APIs',
    heroDescription: 'Indian logistics involves dozens of external systems  GSTN for tax, VAHAN for vehicle data, ICEGATE for customs, port systems, airline systems, and e-commerce platforms. Our API integration hub provides pre-built connectors for all of them.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of api integration hub  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-14': {
    slug: 'enterprise-14',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '14',
    name: 'Carbon Emission Tracking System',
    description: 'Scope 3 emissions calculation, mode-wise carbon footprint, ESG reporting.',
    heroTagline: 'Measure, report, and reduce your carbon footprint',
    heroDescription: 'ESG reporting and carbon disclosure are becoming mandatory for Indian enterprises. Our carbon emission tracking system calculates Scope 3 emissions across all transport modes, provides mode-wise carbon footprint data, and generates ESG reports.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of carbon emission tracking system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-15': {
    slug: 'enterprise-15',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '15',
    name: 'Logistics Super App',
    description: 'All-in-one mobile platform combining tracking, booking, billing, and communication.',
    heroTagline: 'Your entire logistics operation in one mobile app',
    heroDescription: 'Enterprise logistics teams need mobile access to operations  tracking, booking, billing, communication, and approvals  without switching between 5 different apps. Our logistics super app combines everything in one mobile platform.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of logistics super app  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-16': {
    slug: 'enterprise-16',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '16',
    name: 'Multi-tenant Logistics SaaS Platform',
    description: 'White-label platform for logistics associations and franchises.',
    heroTagline: 'Launch your own logistics SaaS platform',
    heroDescription: 'Logistics associations, franchises, and networks need branded platforms for their members. Our multi-tenant SaaS platform provides white-label architecture where each tenant gets a branded experience with shared infrastructure and centralized management.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of multi-tenant logistics saas platform  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-17': {
    slug: 'enterprise-17',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '17',
    name: 'Shipper-Carrier Marketplace Platform',
    description: 'Two-sided marketplace connecting shippers and carriers.',
    heroTagline: 'Connect shippers and carriers on a digital marketplace',
    heroDescription: 'The Indian freight market is fragmented  millions of shippers and carriers who find each other through brokers and phone calls. Our marketplace platform connects them directly with load matching, rate discovery, booking, and payment processing.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of shipper-carrier marketplace platform  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-18': {
    slug: 'enterprise-18',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '18',
    name: 'Billing, Invoicing & Payment System',
    description: 'Unified billing across all service lines, payment gateway integration.',
    heroTagline: 'One billing system for all your logistics services',
    heroDescription: 'Enterprise logistics companies offer multiple services  freight, warehousing, customs, last-mile  each billed differently. Our unified billing system handles all service lines with GST compliance, payment gateway integration, and automated reconciliation.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of billing, invoicing & payment system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-19': {
    slug: 'enterprise-19',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '19',
    name: 'Predictive Maintenance System',
    description: 'IoT sensor data analysis, failure prediction, maintenance scheduling.',
    heroTagline: 'Predict equipment failures before they happen',
    heroDescription: 'Vehicle and equipment breakdowns cost Indian logistics companies lakhs in emergency repairs and lost productivity. Our predictive maintenance system analyzes IoT sensor data to predict failures before they happen and schedule maintenance proactively.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of predictive maintenance system  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

  'enterprise-20': {
    slug: 'enterprise-20',
    categoryId: 'enterprise',
    categoryLabel: 'Cross-Modal & Enterprise Logistics Software',
    number: '20',
    name: 'Logistics CRM',
    description: 'Purpose-built CRM for logistics: rate negotiation, contract management, BD pipeline.',
    heroTagline: 'CRM built for how logistics business development works',
    heroDescription: 'Generic CRMs do not understand freight rates, service contracts, lane profitability, or logistics sales cycles. Our logistics CRM is purpose-built  tracking rate negotiations, contract renewals, BD pipeline, and client profitability analysis.',
    whatWeDoTitle: 'What we build for you',
    whatWeDoDescription: 'An enterprise logistics platform that handles every aspect of logistics crm  designed for Indian logistics companies operating across multiple modes and business units.',
    whatWeDoItems: [
      'Unified multi-modal operations management across road, rail, air, and water',
      'Real-time supply chain visibility with proactive exception management',
      'Integrated billing and financial management across all service lines',
      'No-code workflow automation for logistics processes and approvals',
      'Pre-built API integrations with 50+ logistics platforms and government systems',
      'Carbon emission tracking with ESG-ready reporting and reduction analytics'
    ],
    features: [
      {
        title: 'Multi-Modal Operations Dashboard',
        description: 'Unified dashboard showing operations across road, rail, air, and water with cross-modal analytics and exception management.'
      },
      {
        title: 'API Integration Hub',
        description: 'Pre-built connectors for GSTN, VAHAN, ICEGATE, port systems, airline systems, and 50+ logistics platforms.'
      },
      {
        title: 'Workflow Automation Engine',
        description: 'No-code workflow builder for automating logistics processes  approvals, escalations, compliance checks, and triggers.'
      },
      {
        title: 'Multi-Tenant Architecture',
        description: 'White-label platform with isolated tenant data, branded interfaces, and centralized administration for networks.'
      },
      {
        title: 'Carbon Emission Calculator',
        description: 'Scope 3 emission calculation by mode, route, and client with ESG reporting and reduction recommendation engine.'
      },
      {
        title: 'Vendor Performance Scorecards',
        description: 'Systematic carrier/vendor evaluation with on-time delivery, damage rate, cost efficiency, and overall performance scoring.'
      },
      {
        title: 'Document Management System',
        description: 'Centralized repository with OCR processing, automated classification, retention policies, and instant search and retrieval.'
      },
      {
        title: 'Compliance Calendar',
        description: 'Automated tracking of all compliance deadlines  GST filings, permit renewals, audits, and regulatory submissions.'
      }
    ],
    howWeDoTitle: 'How we implement your system',
    howWeDoDescription: 'We follow an enterprise implementation process with architecture assessment, phased rollout, and change management across your organization.',
    howWeDoSteps: [
      {
        step: 1,
        title: 'Enterprise Discovery',
        description: 'We assess your current systems, integration landscape, and digital transformation goals across all business units.'
      },
      {
        step: 2,
        title: 'Platform Architecture',
        description: 'We design the enterprise platform including API integration strategy, data migration plan, and security framework.'
      },
      {
        step: 3,
        title: 'Core Platform Build',
        description: 'We build the unified operations dashboard, multi-modal TMS, integrated billing, and compliance engine.'
      },
      {
        step: 4,
        title: 'Advanced Features',
        description: 'We develop analytics platform, vendor management, API hub, and client-facing portals.'
      },
      {
        step: 5,
        title: 'Migration & Rollout',
        description: 'We migrate data from legacy systems, run integration testing, execute phased rollout, and provide change management support.'
      }
    ],
    benefits: [
      {
        title: 'Unified Operations View',
        description: 'One dashboard for all transport modes, warehouses, and business units  no more fragmented reporting.'
      },
      {
        title: '50+ Pre-Built Integrations',
        description: 'Connect GSTN, VAHAN, ICEGATE, port systems, airline systems, and e-commerce platforms out of the box.'
      },
      {
        title: '90% Faster Financial Closing',
        description: 'Unified billing and automated reconciliation reduce monthly financial closing from 15 days to 2 days.'
      },
      {
        title: 'Data-Driven Vendor Decisions',
        description: 'Systematic scorecards replace anecdotal vendor evaluation with performance data.'
      },
      {
        title: 'ESG Compliance Ready',
        description: 'Automated carbon emission tracking and reporting meet mandatory disclosure requirements.'
      },
      {
        title: 'No-Code Automation',
        description: 'Build and modify logistics workflows without developer dependency  reducing automation lead time from weeks to hours.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Multi-tenant platform scales from 1 to 1,000 users with consistent performance and security.'
      }
    ],
    beforeAfter: [
      {
        before: 'Operations tracked in 5-7 disconnected systems  no unified view',
        after: 'Single platform unifying all transport modes, warehouses, and business units'
      },
      {
        before: 'Monthly financial closing takes 10-15 days due to manual reconciliation',
        after: 'Automated billing and reconciliation reduce financial closing to 2-3 days'
      },
      {
        before: 'Compliance documents scattered across email, paper, and local folders',
        after: 'Centralized document management with OCR, automated classification, and instant search'
      },
      {
        before: 'Vendor evaluation based on personal relationships  no data-driven decisions',
        after: 'Systematic vendor scorecards with on-time delivery, cost, and quality metrics'
      },
      {
        before: 'Carbon emission data not collected  ESG reporting impossible',
        after: 'Automated carbon tracking across all modes with ESG-ready reporting dashboards'
      },
      {
        before: 'Automation requires developer involvement  weeks of lead time',
        after: 'No-code workflow builder enables operations teams to automate processes in hours'
      }
    ],
    faq: [
      {
        question: 'Can this replace our existing ERP system?',
        answer: 'Our logistics ERP can replace generic ERP for logistics operations, or integrate with your existing SAP/Tally/Oracle system via our API hub. Most clients run both in parallel.'
      },
      {
        question: 'Does it support multi-tenant architecture?',
        answer: 'Yes. The platform is built for multi-tenant deployment  each tenant gets isolated data, branded interfaces, and custom configurations on shared infrastructure.'
      },
      {
        question: 'What pre-built integrations are available?',
        answer: '50+ pre-built connectors including GSTN, VAHAN, ICEGATE, port systems, airline CCS/CASS, e-commerce platforms, payment gateways, and accounting systems.'
      },
      {
        question: 'Can we automate workflows without developer involvement?',
        answer: 'Yes. The no-code workflow engine lets operations teams build and modify automation workflows visually  approval chains, escalation rules, compliance checks, and triggers.'
      },
      {
        question: 'How does carbon emission tracking work?',
        answer: 'The system collects transport data across all modes, calculates Scope 3 emissions using standard emission factors, and generates ESG reports with reduction recommendations.'
      },
      {
        question: 'How long does enterprise implementation take?',
        answer: 'Enterprise implementation takes 10-16 weeks including architecture assessment, integration setup, data migration, phased rollout, and change management.'
      }
    ]
  },

};
