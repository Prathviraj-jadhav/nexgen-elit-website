'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────
   TABLE OF CONTENTS
   ───────────────────────────────────────────────────────────── */
const TOC = [
  { id: 'acceptance', num: '01', label: 'Acceptance of Terms' },
  { id: 'definitions', num: '02', label: 'Definitions' },
  { id: 'services', num: '03', label: 'Services Description' },
  { id: 'eligibility', num: '04', label: 'Eligibility' },
  { id: 'client-obligations', num: '05', label: 'Client Obligations' },
  { id: 'intellectual-property', num: '06', label: 'Intellectual Property' },
  { id: 'payment', num: '07', label: 'Payment Terms' },
  { id: 'warranties', num: '08', label: 'Warranties & Representations' },
  { id: 'confidentiality', num: '09', label: 'Confidentiality' },
  { id: 'limitation', num: '10', label: 'Limitation of Liability' },
  { id: 'indemnification', num: '11', label: 'Indemnification' },
  { id: 'termination', num: '12', label: 'Termination' },
  { id: 'website-use', num: '13', label: 'Website Use & Content' },
  { id: 'user-accounts', num: '14', label: 'User Accounts' },
  { id: 'third-party', num: '15', label: 'Third-Party Services' },
  { id: 'force-majeure', num: '16', label: 'Force Majeure' },
  { id: 'governing-law', num: '17', label: 'Governing Law & Disputes' },
  { id: 'general', num: '18', label: 'General Provisions' },
  { id: 'contact', num: '19', label: 'Contact Information' },
];

/* ═══════════════════════════════════════════════════════════════
   TERMS & CONDITIONS PAGE — Scandinavian Light Design
   ═══════════════════════════════════════════════════════════════ */
export default function TermsAndConditionsPage() {
  return (
    <main className="terms-page bg-white text-[#1A1A1A] min-h-screen">
      {/* Scoped style overrides to reset global CSS */}
      <style>{`
        .terms-page section { padding: 0; }
        .terms-page header { padding: 0; }
        .terms-page h1 { font-size: inherit; line-height: inherit; letter-spacing: inherit; color: inherit; }
        .terms-page h2 { font-size: inherit; line-height: inherit; letter-spacing: inherit; font-weight: inherit; color: inherit; }
        .terms-page h3 { font-size: inherit; line-height: inherit; font-weight: inherit; color: inherit; }
        .terms-page h4 { font-size: inherit; line-height: inherit; font-weight: inherit; color: inherit; }
        .terms-page p { font-size: inherit; line-height: inherit; color: inherit; }
      `}</style>
      <Navbar />

      {/* ───── HERO ───── */}
      <header
        className="pt-28 pb-14 md:pt-36 md:pb-20"
        style={{ background: 'linear-gradient(180deg, #F5F6F8 0%, #FFFFFF 100%)' }}
      >
        <div className="max-w-[720px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-block w-8 h-[2px] bg-[#2A3AFF]" />
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: '#2A3AFF', fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Legal
            </span>
          </div>
          <h1
            className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold tracking-tight leading-[1.1] mb-4"
            style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#0A0A0A' }}
          >
            Terms &amp; Conditions
          </h1>
          <p
            className="text-[15px] leading-relaxed max-w-xl mb-6"
            style={{ color: '#6B7280', fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            Please read these terms carefully before using our website or engaging our services.
            By accessing Nexgen Elit, you agree to be bound by these Terms and Conditions.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[12px]" style={{ color: '#9CA3AF' }}>
            <span>Effective: 25 April 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
            <span>Last Updated: 25 April 2026</span>
          </div>
        </div>
      </header>

      {/* ───── CONTENT GRID ───── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-16">

          {/* ──── SIDEBAR TOC ──── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-5 font-bold"
                style={{ color: '#C0C0C0', fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Contents
              </p>
              <nav className="flex flex-col gap-0.5 border-l border-[#E5E7EB]">
                {TOC.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 pl-4 py-1.5 text-[11px] leading-snug transition-colors duration-200 hover:text-[#2A3AFF] hover:border-l-2 hover:border-[#2A3AFF] hover:ml-[-1px]"
                    style={{ color: '#9CA3AF', fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    <span className="text-[10px] font-mono opacity-50">{item.num}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ──── TERMS BODY ──── */}
          <article className="max-w-[720px]">

            {/* ─── 1. ACCEPTANCE ─── */}
            <section id="acceptance" className="scroll-mt-24 mb-14">
              <SectionTitle num="01" title="Acceptance of Terms" />
              <P>
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you,&quot; &quot;your,&quot; or &quot;Client&quot;) and Nexgen Elit (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms govern your access to and use of our website at{' '}
                <A href="https://nexgenelit.com" external>https://nexgenelit.com</A>{' '}
                (the &quot;Website&quot;) and all services, products, tools, platforms, and deliverables provided by Nexgen Elit (collectively, the &quot;Services&quot;).
              </P>
              <P>
                By accessing our Website, engaging our Services, entering into a service agreement, submitting a contact form, subscribing to our newsletter, or otherwise interacting with Nexgen Elit, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety.
              </P>
              <P>
                If you do not agree with any part of these Terms, you must immediately discontinue use of our Website and Services. We reserve the right to modify, amend, or update these Terms at any time. Any changes will be effective immediately upon posting on this page with an updated &quot;Last Updated&quot; date. Your continued use of our Website or Services after modifications constitutes your acceptance of the updated Terms.
              </P>
              <P>
                These Terms should be read in conjunction with our{' '}
                <Link href="/privacy-policy" className="text-[#2A3AFF] hover:underline">Privacy Policy</Link>,
                which governs how we collect and use your personal information.
              </P>
            </section>

            <Divider />

            {/* ─── 2. DEFINITIONS ─── */}
            <section id="definitions" className="scroll-mt-24 mb-14">
              <SectionTitle num="02" title="Definitions" />
              <P>For the purposes of these Terms, the following definitions apply:</P>
              <BulletList items={[
                <><strong>&quot;Client&quot;</strong> refers to any individual, business, or entity that engages Nexgen Elit for the provision of Services, whether through a formal service agreement, statement of work, or any other contractual arrangement.</>,
                <><strong>&quot;Deliverables&quot;</strong> means all work product, materials, software, code, designs, documentation, reports, and other outputs created by Nexgen Elit in the course of performing Services for the Client.</>,
                <><strong>&quot;Service Agreement&quot;</strong> or &quot;Statement of Work&quot; (SOW) means a separate written agreement between Nexgen Elit and the Client that defines the specific scope, deliverables, timelines, fees, and other terms of a particular engagement.</>,
                <><strong>&quot;Confidential Information&quot;</strong> refers to any non-public information disclosed by either party, including business strategies, financial data, technical specifications, trade secrets, client lists, and proprietary methodologies.</>,
                <><strong>&quot;Intellectual Property&quot;</strong> (IP) includes all patents, copyrights, trademarks, trade secrets, designs, source code, algorithms, databases, and other proprietary rights.</>,
                <><strong>&quot;Website&quot;</strong> refers to the Nexgen Elit website accessible at https://nexgenelit.com and all associated subdomains, pages, and web applications.</>,
                <><strong>&quot;User&quot;</strong> refers to any individual who accesses or uses the Website, whether or not they are a Client.</>,
              ]} />
            </section>

            <Divider />

            {/* ─── 3. SERVICES DESCRIPTION ─── */}
            <section id="services" className="scroll-mt-24 mb-14">
              <SectionTitle num="03" title="Services Description" />
              <P>
                Nexgen Elit provides logistics-dedicated digital technology services. Our service offerings include, but are not limited to:
              </P>
              <BulletList items={[
                <><strong>Web Development & Design:</strong> Custom website design, development, and optimisation for logistics companies — including corporate websites, landing pages, client portals, and vendor management interfaces.</>,
                <><strong>Mobile Application Development:</strong> Native and cross-platform mobile applications for iOS and Android — including fleet tracking apps, driver management tools, client booking portals, and real-time shipment tracking systems.</>,
                <><strong>Custom Software Solutions:</strong> Bespoke enterprise software systems including Transport Management Systems (TMS), Warehouse Management Systems (WMS), and operational automation platforms.</>,
                <><strong>CRM Systems:</strong> Customer relationship management system implementation, customisation, and integration tailored for logistics businesses.</>,
                <><strong>ERP Solutions:</strong> Enterprise resource planning solution development, deployment, and integration covering finance, operations, HR, and supply chain management.</>,
                <><strong>Marketing Systems:</strong> Digital marketing strategy, marketing automation, lead generation systems, SEO, content marketing, and brand development for logistics companies.</>,
                <><strong>AI Automation & LLM Applications:</strong> Artificial intelligence solutions including AI-powered chatbots, intelligent quotation systems, predictive analytics, route optimisation, and document processing automation.</>,
                <><strong>Technology Consulting:</strong> Digital transformation advisory, technology audits, IT strategy development, and technology stack recommendations.</>,
              ]} />
              <P>
                The specific scope, deliverables, timelines, milestones, acceptance criteria, and fees for each engagement shall be defined in a separate Service Agreement or Statement of Work (SOW). In the event of any conflict between these Terms and a Service Agreement, the Service Agreement shall prevail with respect to the specific engagement, unless the Service Agreement expressly states otherwise.
              </P>
            </section>

            <Divider />

            {/* ─── 4. ELIGIBILITY ─── */}
            <section id="eligibility" className="scroll-mt-24 mb-14">
              <SectionTitle num="04" title="Eligibility" />
              <P>
                By using our Website and Services, you represent and warrant that:
              </P>
              <BulletList items={[
                'You are at least 18 years of age or the age of majority in your jurisdiction.',
                'If you are entering into these Terms on behalf of a business or legal entity, you have the authority to bind that entity to these Terms.',
                'You are not located in a country that is subject to a government embargo or sanctions, or that has been designated by any government as a "terrorist supporting" country.',
                'You will comply with all applicable local, state, national, and international laws and regulations in connection with your use of the Website and Services.',
                'All information you provide to us is accurate, complete, and current, and you will promptly update us of any changes.',
              ]} />
            </section>

            <Divider />

            {/* ─── 5. CLIENT OBLIGATIONS ─── */}
            <section id="client-obligations" className="scroll-mt-24 mb-14">
              <SectionTitle num="05" title="Client Obligations" />
              <P>As a Client of Nexgen Elit, you agree to the following obligations:</P>

              <SubHead>5.1 Cooperation & Communication</SubHead>
              <BulletList items={[
                'Provide accurate, complete, and timely information, content, materials, and data necessary for the delivery of Services.',
                'Respond to requests for feedback, approvals, reviews, and sign-offs within the timeframes specified in the Service Agreement, or within 5 business days if no timeframe is specified.',
                'Designate a primary point of contact (Project Manager or equivalent) who has decision-making authority for the engagement.',
                'Attend scheduled meetings, reviews, and milestone presentations as reasonably requested.',
              ]} />

              <SubHead>5.2 Content & Materials</SubHead>
              <BulletList items={[
                'Ensure that all materials, content, text, images, logos, trademarks, and data provided to us do not infringe upon any third-party intellectual property rights, copyrights, trademarks, or other proprietary rights.',
                'Obtain all necessary licences, permissions, and consents for any third-party materials you provide to us for use in the Deliverables.',
                'You are solely responsible for the accuracy, legality, and appropriateness of all content and materials you provide.',
              ]} />

              <SubHead>5.3 Technical Requirements</SubHead>
              <BulletList items={[
                'Provide necessary access to hosting environments, domain registrars, third-party platforms, APIs, and other technical infrastructure as required for service delivery.',
                'Maintain adequate backups of your existing systems and data before we commence work.',
                'Ensure that your computing devices, internet connectivity, and software meet any minimum requirements communicated by us.',
              ]} />

              <SubHead>5.4 Payment</SubHead>
              <BulletList items={[
                'Make payments in accordance with the agreed-upon schedule, milestones, and terms specified in the Service Agreement.',
                'Notify us promptly of any billing disputes or discrepancies within 7 days of invoice receipt.',
              ]} />
            </section>

            <Divider />

            {/* ─── 6. INTELLECTUAL PROPERTY ─── */}
            <section id="intellectual-property" className="scroll-mt-24 mb-14">
              <SectionTitle num="06" title="Intellectual Property" />
              <P>
                All intellectual property rights related to Services and Deliverables shall be governed by the following terms, unless otherwise specified in the applicable Service Agreement:
              </P>

              <SubHead>6.1 Client Materials</SubHead>
              <P>
                You retain all ownership rights to any content, data, materials, trademarks, logos, and trade secrets that you provide to us for the purpose of service delivery (&quot;Client Materials&quot;). You grant us a non-exclusive, royalty-free, limited licence to use, reproduce, and modify Client Materials solely for the purpose of performing the Services during the term of the engagement.
              </P>

              <SubHead>6.2 Deliverables</SubHead>
              <P>
                Upon <strong>full and final payment</strong> of all fees due under the applicable Service Agreement, intellectual property rights to custom-developed Deliverables shall be transferred to you as specified in the Service Agreement. Until full payment is received, Nexgen Elit retains all rights, title, and interest in the Deliverables. Any work-in-progress or incomplete Deliverables remain the property of Nexgen Elit.
              </P>

              <SubHead>6.3 Pre-existing Intellectual Property</SubHead>
              <P>
                Nexgen Elit retains all rights to its pre-existing intellectual property, including but not limited to proprietary tools, frameworks, code libraries, templates, design systems, algorithms, methodologies, and processes (&quot;Pre-existing IP&quot;). Where Pre-existing IP is incorporated into Deliverables, we grant you a non-exclusive, perpetual, royalty-free licence to use such Pre-existing IP solely as part of the Deliverables for your internal business purposes.
              </P>

              <SubHead>6.4 Open-Source Software</SubHead>
              <P>
                Deliverables may incorporate open-source software components. Such components are licensed to you under their respective open-source licences, and your use of them is governed by those licences. We will disclose any material open-source components used in your Deliverables upon request.
              </P>

              <SubHead>6.5 Portfolio Rights</SubHead>
              <P>
                Unless expressly prohibited in writing in the Service Agreement, Nexgen Elit reserves the right to reference the engagement and showcase the Deliverables (or representative portions thereof) in its portfolio, marketing materials, case studies, social media, and website for the purpose of business promotion. We will not disclose any Confidential Information in such references.
              </P>

              <SubHead>6.6 Website Content</SubHead>
              <P>
                All content on the Nexgen Elit Website — including text, graphics, logos, images, videos, illustrations, icons, software, design elements, and compilations thereof — is the exclusive property of Nexgen Elit or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, transmit, or create derivative works from any Website content without our prior written consent.
              </P>
            </section>

            <Divider />

            {/* ─── 7. PAYMENT TERMS ─── */}
            <section id="payment" className="scroll-mt-24 mb-14">
              <SectionTitle num="07" title="Payment Terms" />
              <P>
                Payment terms are specified in the individual Service Agreement. Unless otherwise stated in the Service Agreement, the following default terms apply:
              </P>

              <SubHead>7.1 Invoicing & Payment Schedule</SubHead>
              <BulletList items={[
                'Invoices are issued according to the project milestones defined in the Service Agreement.',
                'For fixed-price engagements, a non-refundable advance payment (typically 30–50% of the total project value) is required before work commences.',
                'For time-and-materials engagements, invoices are issued on a monthly basis for work performed during the preceding month.',
                'All fees quoted are exclusive of applicable taxes (GST, withholding tax, etc.) unless explicitly stated otherwise.',
              ]} />

              <SubHead>7.2 Payment Due Date</SubHead>
              <P>
                Payment is due within <strong>15 calendar days</strong> of invoice issuance unless otherwise agreed in writing. All payments shall be made in Indian Rupees (INR) or such other currency as specified in the Service Agreement, via bank transfer, UPI, or other mutually agreed payment methods.
              </P>

              <SubHead>7.3 Late Payments</SubHead>
              <BulletList items={[
                'Late payments may incur interest charges at a rate of 1.5% per month (18% per annum) on the outstanding balance, beginning from the due date.',
                'We reserve the right to suspend or pause all work on the engagement if payment is overdue by more than 15 days.',
                'We reserve the right to withhold delivery of Deliverables or source code until all outstanding invoices are paid in full.',
                'Persistent non-payment (exceeding 30 days) may result in termination of the engagement and commencement of legal recovery proceedings.',
              ]} />

              <SubHead>7.4 Change Orders</SubHead>
              <P>
                Any changes to the originally agreed scope of work (&quot;Change Orders&quot;) shall be documented in writing and signed by both parties before implementation. Change Orders may affect the project timeline and fees. We will provide a written estimate of additional costs and timeline impact for all Change Orders before proceeding.
              </P>

              <SubHead>7.5 Refunds</SubHead>
              <P>
                Advance payments and deposits are non-refundable unless otherwise specified in the Service Agreement. Refunds for unused portions of prepaid services may be considered on a case-by-case basis at Nexgen Elit&apos;s sole discretion.
              </P>
            </section>

            <Divider />

            {/* ─── 8. WARRANTIES ─── */}
            <section id="warranties" className="scroll-mt-24 mb-14">
              <SectionTitle num="08" title="Warranties & Representations" />

              <SubHead>8.1 Our Warranties</SubHead>
              <P>Nexgen Elit warrants that:</P>
              <BulletList items={[
                'Services will be performed in a professional, workmanlike manner consistent with generally accepted industry standards.',
                'Deliverables will materially conform to the specifications set forth in the applicable Service Agreement for a period of 30 days following acceptance (&quot;Warranty Period&quot;).',
                'We have the right and authority to enter into these Terms and to perform our obligations hereunder.',
                'Deliverables, to our knowledge, will not infringe upon the intellectual property rights of any third party.',
              ]} />

              <SubHead>8.2 Warranty Remedies</SubHead>
              <P>
                If during the Warranty Period, any Deliverable fails to materially conform to the agreed specifications, Nexgen Elit will, at its sole option and expense, either (a) repair or correct the non-conforming Deliverable, or (b) re-perform the applicable Services. This is your sole and exclusive remedy for any breach of the warranty.
              </P>

              <SubHead>8.3 Disclaimer of Warranties</SubHead>
              <P>
                Except as expressly stated in Section 8.1, all Services and Deliverables are provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> without warranties of any kind, whether express, implied, statutory, or otherwise. To the maximum extent permitted by applicable law, Nexgen Elit disclaims all implied warranties, including warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy.
              </P>
              <P>
                We do not warrant or guarantee any specific business outcomes, including but not limited to revenue growth, lead generation, search engine rankings, conversion rates, traffic increases, or return on investment. Results depend on numerous factors beyond our control, including market conditions, competition, and your own business operations.
              </P>
            </section>

            <Divider />

            {/* ─── 9. CONFIDENTIALITY ─── */}
            <section id="confidentiality" className="scroll-mt-24 mb-14">
              <SectionTitle num="09" title="Confidentiality" />
              <P>
                Both parties agree to maintain strict confidentiality regarding all Confidential Information disclosed during the course of the engagement. Specifically:
              </P>
              <BulletList items={[
                <><strong>Non-Disclosure:</strong> Each party agrees not to disclose, publish, or disseminate Confidential Information of the other party to any third party without the prior written consent of the disclosing party.</>,
                <><strong>Use Restriction:</strong> Confidential Information shall be used solely for the purpose of performing obligations under these Terms and the applicable Service Agreement.</>,
                <><strong>Protection Standard:</strong> Each party shall protect the other party&apos;s Confidential Information using no less than the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care.</>,
                <><strong>Permitted Disclosures:</strong> Confidential Information may be disclosed to employees, contractors, and professional advisors on a need-to-know basis, provided they are bound by confidentiality obligations no less restrictive than those set forth herein.</>,
              ]} />

              <SubHead>9.1 Exclusions</SubHead>
              <P>Confidentiality obligations do not apply to information that:</P>
              <BulletList items={[
                'Was already known to the receiving party before disclosure, as evidenced by written records.',
                'Is or becomes publicly available through no fault of the receiving party.',
                'Is independently developed by the receiving party without reference to the Confidential Information.',
                'Is rightfully received from a third party without restriction on disclosure.',
                'Is required to be disclosed by law, regulation, or court order — provided that the receiving party gives the disclosing party prompt notice and cooperates in any efforts to limit the scope of disclosure.',
              ]} />

              <SubHead>9.2 Survival</SubHead>
              <P>
                Confidentiality obligations shall survive the termination or expiration of these Terms and any Service Agreement for a period of <strong>three (3) years</strong>, unless the Confidential Information constitutes a trade secret, in which case the obligations shall continue for as long as the information qualifies as a trade secret under applicable law.
              </P>
            </section>

            <Divider />

            {/* ─── 10. LIMITATION OF LIABILITY ─── */}
            <section id="limitation" className="scroll-mt-24 mb-14">
              <SectionTitle num="10" title="Limitation of Liability" />
              <P>
                To the maximum extent permitted by applicable law:
              </P>

              <SubHead>10.1 Exclusion of Consequential Damages</SubHead>
              <P>
                In no event shall Nexgen Elit be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to damages for loss of profits, revenue, goodwill, data, business opportunities, or anticipated savings, arising out of or in connection with these Terms or the Services, regardless of the theory of liability (contract, tort, strict liability, or otherwise) and whether or not we have been advised of the possibility of such damages.
              </P>

              <SubHead>10.2 Cap on Total Liability</SubHead>
              <P>
                Our total cumulative liability for any and all claims arising out of or related to these Terms, any Service Agreement, or our Services shall not exceed the <strong>total fees actually paid by you</strong> to Nexgen Elit for the specific engagement giving rise to the claim during the <strong>twelve (12) months</strong> immediately preceding the event giving rise to the liability.
              </P>

              <SubHead>10.3 Exceptions</SubHead>
              <P>
                The limitations in this section do not apply to: (a) obligations arising from breaches of confidentiality under Section 9; (b) indemnification obligations under Section 11; (c) liability for gross negligence, wilful misconduct, or fraud; or (d) any liability that cannot be limited or excluded under applicable law.
              </P>

              <SubHead>10.4 No Guarantee of Results</SubHead>
              <P>
                You acknowledge and agree that Nexgen Elit does not guarantee specific business outcomes, including but not limited to revenue growth, lead generation volumes, search engine rankings (SEO positions), website traffic increases, conversion rates, or return on investment (ROI). Technology solutions and digital marketing involve inherent uncertainties, and results depend on numerous factors beyond our control.
              </P>
            </section>

            <Divider />

            {/* ─── 11. INDEMNIFICATION ─── */}
            <section id="indemnification" className="scroll-mt-24 mb-14">
              <SectionTitle num="11" title="Indemnification" />

              <SubHead>11.1 Client Indemnification</SubHead>
              <P>
                You agree to indemnify, defend, and hold harmless Nexgen Elit, its officers, directors, employees, agents, contractors, and affiliates from and against any and all claims, losses, damages, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to:
              </P>
              <BulletList items={[
                'Your breach of these Terms or any Service Agreement.',
                'Your violation of any applicable law, regulation, or third-party rights.',
                'Any claim that Client Materials provided by you infringe upon the intellectual property or other rights of any third party.',
                'Your use of the Deliverables in a manner inconsistent with these Terms or the Service Agreement.',
                'Any negligent or wrongful act or omission by you or your employees and agents.',
              ]} />

              <SubHead>11.2 Nexgen Elit Indemnification</SubHead>
              <P>
                Nexgen Elit agrees to indemnify, defend, and hold harmless the Client from and against any third-party claims alleging that the Deliverables (excluding Client Materials) infringe upon the intellectual property rights of any third party, provided that: (a) the Client promptly notifies us in writing; (b) we have sole control of the defence and settlement; and (c) the Client provides reasonable cooperation at our expense.
              </P>
            </section>

            <Divider />

            {/* ─── 12. TERMINATION ─── */}
            <section id="termination" className="scroll-mt-24 mb-14">
              <SectionTitle num="12" title="Termination" />

              <SubHead>12.1 Termination for Convenience</SubHead>
              <P>
                Either party may terminate a Service engagement with <strong>30 days&apos; prior written notice</strong> to the other party, unless a different notice period is specified in the Service Agreement.
              </P>

              <SubHead>12.2 Termination for Cause</SubHead>
              <P>Either party may terminate immediately upon written notice if the other party:</P>
              <BulletList items={[
                'Commits a material breach of these Terms or the Service Agreement and fails to cure such breach within 15 days of receiving written notice.',
                'Becomes insolvent, files for bankruptcy, or has a receiver or administrator appointed.',
                'Engages in fraud, gross negligence, or wilful misconduct in connection with the engagement.',
              ]} />

              <SubHead>12.3 Effects of Termination</SubHead>
              <P>Upon termination of any engagement:</P>
              <BulletList items={[
                <><strong>Payment:</strong> You are responsible for payment of all fees for Services rendered up to the effective date of termination, including any work-in-progress.</>,
                <><strong>Deliverables:</strong> Subject to full payment, Nexgen Elit will deliver all completed and partially completed Deliverables within 15 business days of termination, or as otherwise specified in the Service Agreement.</>,
                <><strong>Transition:</strong> We will provide reasonable transition assistance and handover documentation to facilitate a smooth handover to you or your designated successor, including source code, credentials, and technical documentation.</>,
                <><strong>Return of Materials:</strong> Each party shall return or destroy (at the disclosing party&apos;s option) all Confidential Information of the other party within 30 days of termination.</>,
                <><strong>Survival:</strong> Sections relating to Intellectual Property (6), Payment (7), Confidentiality (9), Limitation of Liability (10), Indemnification (11), and Governing Law (17) shall survive termination.</>,
              ]} />
            </section>

            <Divider />

            {/* ─── 13. WEBSITE USE ─── */}
            <section id="website-use" className="scroll-mt-24 mb-14">
              <SectionTitle num="13" title="Website Use & Content" />

              <SubHead>13.1 Acceptable Use</SubHead>
              <P>When using our Website, you agree not to:</P>
              <BulletList items={[
                'Use the Website for any unlawful purpose or in violation of any applicable local, national, or international laws.',
                'Attempt to gain unauthorised access to any portion of the Website, its servers, databases, or any connected systems or networks.',
                'Reproduce, duplicate, copy, sell, resell, distribute, modify, or create derivative works from any content on the Website without our express written permission.',
                'Use any automated systems, robots, spiders, scrapers, data mining tools, or similar technologies to access, collect, or harvest data from the Website.',
                'Interfere with, disrupt, or overload the Website\'s functionality, infrastructure, servers, or connected networks.',
                'Upload, transmit, or distribute any viruses, malware, trojans, or other harmful code or files.',
                'Impersonate any person or entity, or misrepresent your affiliation with any person or entity.',
                'Collect or harvest personal information of other users without their consent.',
              ]} />

              <SubHead>13.2 Content Accuracy</SubHead>
              <P>
                We strive to ensure that the information on our Website is accurate, complete, and up-to-date. However, we do not warrant the accuracy, completeness, or reliability of any content on the Website. Information is provided for general informational purposes only and should not be relied upon as the sole basis for making business or legal decisions. Case studies, testimonials, and performance metrics presented on the Website reflect specific circumstances and may not be indicative of future results.
              </P>

              <SubHead>13.3 Blog & Educational Content</SubHead>
              <P>
                Blog posts, articles, guides, and educational content published on our Website are provided for informational and educational purposes only. They do not constitute professional advice (legal, financial, technical, or otherwise). You should consult qualified professionals before acting on any information found in our content.
              </P>
            </section>

            <Divider />

            {/* ─── 14. USER ACCOUNTS ─── */}
            <section id="user-accounts" className="scroll-mt-24 mb-14">
              <SectionTitle num="14" title="User Accounts" />
              <P>
                If you create an account on any of our platforms, portals, or applications, you agree to:
              </P>
              <BulletList items={[
                'Provide accurate, current, and complete registration information.',
                'Keep your account credentials (username, password) secure and confidential. You are responsible for all activity that occurs under your account.',
                'Notify us immediately of any unauthorised use of your account or any other breach of security at nexgenelit@gmail.com.',
                'Not share your account credentials with any third party or allow others to access your account.',
                'Not create multiple accounts for the same person or entity without our prior consent.',
              ]} />
              <P>
                We reserve the right to suspend or terminate your account at any time if we reasonably believe that your account has been compromised, used in violation of these Terms, or is otherwise inactive for an extended period (exceeding 12 months).
              </P>
            </section>

            <Divider />

            {/* ─── 15. THIRD-PARTY ─── */}
            <section id="third-party" className="scroll-mt-24 mb-14">
              <SectionTitle num="15" title="Third-Party Services & Integrations" />
              <P>
                Our Services and Deliverables may integrate with, rely upon, or include components from third-party services, platforms, APIs, and software, including but not limited to:
              </P>
              <BulletList items={[
                'Cloud hosting and infrastructure providers (e.g., Vercel, AWS, Google Cloud).',
                'Payment processing services.',
                'Analytics and tracking platforms (e.g., Google Analytics, Google Tag Manager).',
                'Advertising platforms (e.g., Meta Ads, Google Ads).',
                'Communication tools (e.g., email services, messaging APIs).',
                'Open-source software libraries, frameworks, and plugins.',
              ]} />
              <P>
                Nexgen Elit is not responsible for the availability, performance, security, or practices of any third-party services. Your use of third-party services is subject to their respective terms of service and privacy policies. We do not warrant or endorse any third-party products, services, or content. Any reliance on third-party services is at your own risk.
              </P>
              <P>
                If a third-party service makes changes to its API, pricing, terms of service, or functionality that materially impacts the Deliverables, Nexgen Elit will notify you promptly and, if applicable, propose modifications to accommodate the changes. Any additional work required to address third-party changes may be subject to a Change Order and additional fees.
              </P>
            </section>

            <Divider />

            {/* ─── 16. FORCE MAJEURE ─── */}
            <section id="force-majeure" className="scroll-mt-24 mb-14">
              <SectionTitle num="16" title="Force Majeure" />
              <P>
                Neither party shall be liable for any failure or delay in performing its obligations under these Terms or any Service Agreement to the extent that such failure or delay is caused by circumstances beyond the reasonable control of the affected party (&quot;Force Majeure Event&quot;). Force Majeure Events include, but are not limited to:
              </P>
              <BulletList items={[
                'Natural disasters (earthquakes, floods, hurricanes, volcanic eruptions).',
                'Epidemics, pandemics, or public health emergencies.',
                'Acts of war, terrorism, civil unrest, or armed conflict.',
                'Government actions, embargoes, sanctions, or regulatory changes.',
                'Cyberattacks, ransomware, or critical infrastructure failures.',
                'Power outages, internet disruptions, or telecommunications failures beyond the affected party\'s control.',
                'Labour disputes, strikes, or lockouts (excluding those involving the affected party\'s own employees).',
              ]} />
              <P>
                The affected party shall notify the other party in writing within 5 business days of the occurrence of a Force Majeure Event, including a description of the event, its expected duration, and the steps being taken to mitigate its impact. If a Force Majeure Event continues for more than 60 consecutive days, either party may terminate the affected engagement upon 15 days&apos; written notice.
              </P>
            </section>

            <Divider />

            {/* ─── 17. GOVERNING LAW ─── */}
            <section id="governing-law" className="scroll-mt-24 mb-14">
              <SectionTitle num="17" title="Governing Law & Dispute Resolution" />

              <SubHead>17.1 Governing Law</SubHead>
              <P>
                These Terms, and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of <strong>India</strong>, without regard to conflict-of-law principles.
              </P>

              <SubHead>17.2 Dispute Resolution Process</SubHead>
              <P>
                Any dispute arising out of or related to these Terms or our Services shall be resolved according to the following escalation process:
              </P>
              <BulletList items={[
                <><strong>Step 1 — Negotiation:</strong> The parties shall first attempt to resolve the dispute through good-faith negotiation between authorised representatives within 30 days of written notice of the dispute.</>,
                <><strong>Step 2 — Mediation:</strong> If negotiation fails, the parties shall submit the dispute to mediation administered by a mutually agreed-upon mediator, with mediation costs shared equally.</>,
                <><strong>Step 3 — Arbitration:</strong> If mediation is unsuccessful within 60 days, the dispute shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 (as amended). The arbitration shall be conducted by a sole arbitrator, in English, in Mumbai, India. The arbitrator&apos;s decision shall be final and binding on both parties and enforceable in any court of competent jurisdiction.</>,
              ]} />

              <SubHead>17.3 Jurisdiction</SubHead>
              <P>
                The courts of Mumbai, India shall have exclusive jurisdiction over any proceedings arising out of or in connection with these Terms that are not subject to arbitration.
              </P>

              <SubHead>17.4 Injunctive Relief</SubHead>
              <P>
                Notwithstanding the above, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened breach of confidentiality obligations or infringement of intellectual property rights.
              </P>
            </section>

            <Divider />

            {/* ─── 18. GENERAL PROVISIONS ─── */}
            <section id="general" className="scroll-mt-24 mb-14">
              <SectionTitle num="18" title="General Provisions" />

              <SubHead>18.1 Entire Agreement</SubHead>
              <P>
                These Terms, together with any applicable Service Agreement, Privacy Policy, and any other documents expressly incorporated by reference, constitute the entire agreement between you and Nexgen Elit regarding the subject matter hereof and supersede all prior oral or written agreements, proposals, representations, and understandings.
              </P>

              <SubHead>18.2 Severability</SubHead>
              <P>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.
              </P>

              <SubHead>18.3 Waiver</SubHead>
              <P>
                The failure of either party to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. No waiver shall be effective unless made in writing and signed by the waiving party.
              </P>

              <SubHead>18.4 Assignment</SubHead>
              <P>
                You may not assign, transfer, or delegate your rights or obligations under these Terms without our prior written consent. Nexgen Elit may assign its rights and obligations to a successor entity in the event of a merger, acquisition, or sale of all or substantially all of its assets, provided the successor agrees to be bound by these Terms.
              </P>

              <SubHead>18.5 Independent Contractor</SubHead>
              <P>
                Nexgen Elit is an independent contractor and nothing in these Terms shall be construed to create a partnership, joint venture, agency, or employment relationship between the parties. Neither party has the authority to bind the other or incur obligations on behalf of the other.
              </P>

              <SubHead>18.6 Notices</SubHead>
              <P>
                All notices, requests, and communications under these Terms shall be in writing and sent by email to the addresses provided or to such other addresses as either party may specify in writing. Notices shall be deemed received when sent if delivered by email with confirmed receipt.
              </P>

              <SubHead>18.7 Headings</SubHead>
              <P>
                Section headings in these Terms are for convenience only and do not affect the interpretation or construction of these Terms.
              </P>
            </section>

            <Divider />

            {/* ─── 19. CONTACT ─── */}
            <section id="contact" className="scroll-mt-24 mb-8">
              <SectionTitle num="19" title="Contact Information" />
              <P>
                If you have any questions about these Terms and Conditions, need clarification on any provision, or wish to discuss a specific engagement, please contact us:
              </P>

              <InfoCard>
                <p
                  className="text-base font-semibold mb-4"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#0A0A0A' }}
                >
                  Nexgen Elit — Legal Team
                </p>
                <div className="space-y-2.5">
                  <p className="text-[13px]" style={{ color: '#4A4A4A' }}>
                    <strong style={{ color: '#1A1A1A' }}>Email:</strong>{' '}
                    <A href="mailto:nexgenelit@gmail.com">nexgenelit@gmail.com</A>
                  </p>
                  <p className="text-[13px]" style={{ color: '#4A4A4A' }}>
                    <strong style={{ color: '#1A1A1A' }}>Website:</strong>{' '}
                    <A href="https://nexgenelit.com" external>https://nexgenelit.com</A>
                  </p>
                  <p className="text-[13px]" style={{ color: '#4A4A4A' }}>
                    <strong style={{ color: '#1A1A1A' }}>Location:</strong> India (Operating Nationwide &amp; Internationally)
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#E5E7EB]">
                  <p className="text-[12px] leading-relaxed" style={{ color: '#9CA3AF' }}>
                    We aim to respond to all inquiries within 2 business days. For urgent legal matters, please indicate &quot;URGENT&quot; in your email subject line.
                  </p>
                </div>
              </InfoCard>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] border border-[#E5E7EB] text-[#1A1A1A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] bg-[#2A3AFF] text-white hover:bg-[#0A0A0A] transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  Contact Us
                </Link>
              </div>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REUSABLE SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <span className="text-[11px] font-mono font-bold mt-1.5 shrink-0" style={{ color: '#2A3AFF' }}>
        {num}
      </span>
      <h2
        className="text-lg md:text-xl font-semibold tracking-tight"
        style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#0A0A0A' }}
      >
        {title}
      </h2>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[14px] md:text-[15px] leading-[1.9] mb-4"
      style={{ color: '#374151', fontFamily: 'var(--font-montserrat), sans-serif' }}
    >
      {children}
    </p>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[15px] font-semibold mt-7 mb-3"
      style={{ color: '#1A1A1A', fontFamily: 'var(--font-poppins), sans-serif' }}
    >
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-5 ml-1">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[14px] md:text-[15px] leading-[1.85] relative pl-5"
          style={{ color: '#374151', fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          <span
            className="absolute left-0 top-[9px] w-[6px] h-[6px] border border-[#2A3AFF]/40"
            style={{ borderRadius: 0 }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <div className="border-t border-[#F3F4F6] mb-14" />;
}

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-4 mb-4 p-5 md:p-6 border border-[#E5E7EB] bg-[#FAFBFC]"
      style={{ borderRadius: 0 }}
    >
      {children}
    </div>
  );
}

function A({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className="text-[#2A3AFF] hover:underline"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
