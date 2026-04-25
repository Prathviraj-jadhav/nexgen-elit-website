'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────
   TABLE OF CONTENTS
   ───────────────────────────────────────────────────────────── */
const TOC = [
  { id: 'introduction', num: '01', label: 'Introduction' },
  { id: 'who-we-are', num: '02', label: 'Who We Are' },
  { id: 'information-we-collect', num: '03', label: 'Information We Collect' },
  { id: 'how-we-use', num: '04', label: 'How We Use Your Information' },
  { id: 'legal-basis', num: '05', label: 'Legal Basis for Processing' },
  { id: 'cookies', num: '06', label: 'Cookies & Tracking' },
  { id: 'advertising', num: '07', label: 'Advertising & Remarketing' },
  { id: 'sharing', num: '08', label: 'Information Sharing' },
  { id: 'data-retention', num: '09', label: 'Data Retention' },
  { id: 'data-security', num: '10', label: 'Data Security' },
  { id: 'international-transfers', num: '11', label: 'International Transfers' },
  { id: 'your-rights', num: '12', label: 'Your Rights' },
  { id: 'ccpa', num: '13', label: 'California Privacy (CCPA)' },
  { id: 'children', num: '14', label: 'Children\u2019s Privacy' },
  { id: 'third-party-links', num: '15', label: 'Third-Party Links' },
  { id: 'changes', num: '16', label: 'Changes to This Policy' },
  { id: 'contact', num: '17', label: 'Contact Us' },
];

/* ═══════════════════════════════════════════════════════════════
   PRIVACY POLICY PAGE — Scandinavian Light Design
   No FadeIn wrappers (prevents content from being invisible)
   ═══════════════════════════════════════════════════════════════ */
export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-policy-page bg-white text-[#1A1A1A] min-h-screen">
      {/* Scoped style overrides to reset global CSS for legal page */}
      <style>{`
        .privacy-policy-page section { padding: 0; }
        .privacy-policy-page header { padding: 0; }
        .privacy-policy-page h1 { font-size: inherit; line-height: inherit; letter-spacing: inherit; color: inherit; }
        .privacy-policy-page h2 { font-size: inherit; line-height: inherit; letter-spacing: inherit; font-weight: inherit; color: inherit; }
        .privacy-policy-page h3 { font-size: inherit; line-height: inherit; font-weight: inherit; color: inherit; }
        .privacy-policy-page h4 { font-size: inherit; line-height: inherit; font-weight: inherit; color: inherit; }
        .privacy-policy-page p { font-size: inherit; line-height: inherit; color: inherit; }
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
            Privacy Policy
          </h1>
          <p
            className="text-[15px] leading-relaxed max-w-xl mb-6"
            style={{ color: '#6B7280', fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            Your privacy matters to us. This document explains in complete detail how Nexgen Elit
            collects, uses, stores, and protects your personal information.
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

          {/* ──── POLICY CONTENT ──── */}
          <article className="max-w-[720px]">

            {/* ─── 1. INTRODUCTION ─── */}
            <section id="introduction" className="scroll-mt-24 mb-14">
              <SectionTitle num="01" title="Introduction" />
              <P>
                Nexgen Elit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains in detail how we collect, use, disclose, store, and safeguard your information when you visit our website at{' '}
                <A href="https://nexgenelit.com">https://nexgenelit.com</A>{' '}
                (the &quot;Website&quot;), use our mobile applications, or engage with any of our services, tools, or platforms (collectively, the &quot;Services&quot;).
              </P>
              <P>
                By accessing, browsing, or using our Website and Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Website or Services.
              </P>
              <P>
                This Privacy Policy applies to all visitors, users, clients, and others who access or use our Services, regardless of how they access them — whether through a web browser, mobile app, API, or any other method. We encourage you to read this Privacy Policy periodically to stay informed about how we protect your information.
              </P>
            </section>

            <Divider />

            {/* ─── 2. WHO WE ARE ─── */}
            <section id="who-we-are" className="scroll-mt-24 mb-14">
              <SectionTitle num="02" title="Who We Are" />
              <P>
                Nexgen Elit is a digital technology company specialising in logistics-dedicated software solutions, web development, app development, CRM systems, ERP solutions, AI automation, and marketing systems. We are headquartered in India and operate nationwide and internationally, providing enterprise-grade technology services to logistics businesses.
              </P>
              <P>
                For the purposes of applicable data protection laws (including the General Data Protection Regulation, the Information Technology Act 2000, and the Digital Personal Data Protection Act 2023), Nexgen Elit is the <strong>&quot;data controller&quot;</strong> of the personal data collected through our Website and Services. This means we determine the purposes and means of processing your personal data.
              </P>
              <InfoCard>
                <p className="text-sm font-semibold mb-2" style={{ color: '#0A0A0A' }}>Data Controller</p>
                <p className="text-[13px]" style={{ color: '#4A4A4A' }}>Nexgen Elit</p>
                <p className="text-[13px]" style={{ color: '#4A4A4A' }}>
                  Email: <A href="mailto:nexgenelit@gmail.com">nexgenelit@gmail.com</A>
                </p>
                <p className="text-[13px]" style={{ color: '#4A4A4A' }}>
                  Website: <A href="https://nexgenelit.com">https://nexgenelit.com</A>
                </p>
                <p className="text-[13px]" style={{ color: '#4A4A4A' }}>Location: India (Operating Nationwide &amp; Internationally)</p>
              </InfoCard>
            </section>

            <Divider />

            {/* ─── 3. INFORMATION WE COLLECT ─── */}
            <section id="information-we-collect" className="scroll-mt-24 mb-14">
              <SectionTitle num="03" title="Information We Collect" />
              <P>
                We collect information in several ways to provide, improve, and personalise our Services. The types of information we collect depend on how you interact with our Website and Services.
              </P>

              <SubHead>3.1 Personal Information You Provide</SubHead>
              <P>
                We collect personal information that you voluntarily provide when you fill out forms, contact us, request a consultation, subscribe to our newsletter, register for an account, or engage with our Services:
              </P>
              <BulletList items={[
                <><strong>Identity Information:</strong> Full name, job title, company name, and professional role.</>,
                <><strong>Contact Information:</strong> Email address, phone number, mailing address, and business address.</>,
                <><strong>Business Information:</strong> Details related to your logistics operations — fleet size, service corridors, shipment volumes, and current technology stack.</>,
                <><strong>Communication Data:</strong> Records of correspondence, project requirements, feedback, and communication history with our team.</>,
                <><strong>Financial Information:</strong> Billing address, payment card details, bank account information, and invoicing details. Note: Payment card processing is handled by our PCI-DSS compliant payment processors; we do not store your full card details on our servers.</>,
                <><strong>Account Information:</strong> Username, password (encrypted), account preferences, and settings when you create an account on our platform.</>,
                <><strong>User Content:</strong> Any information, documents, images, or data you upload to our platform or share with us during our engagement.</>,
              ]} />

              <SubHead>3.2 Information Collected Automatically</SubHead>
              <P>
                When you visit our Website, we automatically collect certain information about your device, browsing behaviour, and usage patterns through cookies, web beacons, pixels, log files, and similar tracking technologies:
              </P>
              <BulletList items={[
                <><strong>Device Information:</strong> Device type (desktop, mobile, tablet), operating system and version, browser type and version, screen resolution, device identifiers, and hardware model.</>,
                <><strong>Log Data:</strong> IP address, access dates and times, pages viewed, time spent on each page, referring website URL, exit pages, and clickstream data.</>,
                <><strong>Location Information:</strong> Approximate geographic location derived from your IP address, browser language settings, and time zone.</>,
                <><strong>Usage Data:</strong> Information about how you interact with our Website — features used, links clicked, search queries, scroll depth, and engagement metrics.</>,
                <><strong>Connection Information:</strong> Internet service provider (ISP), connection speed, and network type.</>,
              ]} />

              <SubHead>3.3 Information from Third Parties</SubHead>
              <P>We may receive information about you from third-party sources, including:</P>
              <BulletList items={[
                <><strong>Analytics Providers:</strong> Google Analytics, Meta (Facebook) Analytics, and similar services providing aggregated user behaviour data.</>,
                <><strong>Advertising Partners:</strong> Information from Meta Ads (Facebook/Instagram) and Google Ads — ad interaction data, conversion events, and audience segment information.</>,
                <><strong>Social Media Platforms:</strong> When you interact with our social media pages or use social login features.</>,
                <><strong>Business Partners:</strong> Referral partners, integration partners, and other third parties with whom we have a business relationship.</>,
                <><strong>Publicly Available Sources:</strong> Business directories, professional networking sites (e.g., LinkedIn), and publicly available company information.</>,
              ]} />
            </section>

            <Divider />

            {/* ─── 4. HOW WE USE YOUR INFORMATION ─── */}
            <section id="how-we-use" className="scroll-mt-24 mb-14">
              <SectionTitle num="04" title="How We Use Your Information" />
              <P>We use the information we collect for the following specific purposes:</P>

              <SubHead>4.1 Service Delivery</SubHead>
              <BulletList items={[
                'To provide, operate, and maintain our web development, app development, custom software, CRM, ERP, AI automation, and marketing services.',
                'To fulfil our contractual obligations and deliver project milestones as agreed upon in service agreements.',
                'To process transactions, send invoices, and manage billing and payments.',
                'To create and manage user accounts on our platforms and portals.',
              ]} />

              <SubHead>4.2 Communication</SubHead>
              <BulletList items={[
                'To respond to your inquiries, comments, questions, and support requests in a timely manner.',
                'To send you service-related notices, updates, security alerts, and administrative messages.',
                'To send you marketing communications, newsletters, promotional offers, and product updates (with your explicit consent). You can opt out at any time by clicking the "unsubscribe" link in any marketing email or contacting us directly.',
              ]} />

              <SubHead>4.3 Improvement & Analytics</SubHead>
              <BulletList items={[
                'To analyse website traffic, usage patterns, and user behaviour to improve our Website, Services, and overall user experience.',
                'To conduct A/B testing and measure the effectiveness of our features, content, and marketing campaigns.',
                'To generate aggregated, anonymised statistical data for business intelligence and internal reporting purposes.',
              ]} />

              <SubHead>4.4 Advertising & Marketing</SubHead>
              <BulletList items={[
                'To deliver targeted advertisements on third-party platforms including Meta (Facebook, Instagram) and Google Display Network.',
                'To create custom audiences and lookalike audiences for advertising campaigns on Meta Ads and Google Ads.',
                'To measure the performance and effectiveness of advertising campaigns — tracking conversions, click-through rates, and return on ad spend (ROAS).',
                'To retarget visitors who have previously interacted with our Website with relevant advertisements on other platforms.',
              ]} />

              <SubHead>4.5 Security & Compliance</SubHead>
              <BulletList items={[
                'To detect, investigate, and prevent fraud, unauthorised access, and other illegal or malicious activities.',
                'To maintain the security, integrity, and availability of our Website and Services.',
                'To comply with applicable laws, regulations, legal processes, and enforceable governmental requests.',
                'To enforce our Terms and Conditions and other agreements.',
              ]} />
            </section>

            <Divider />

            {/* ─── 5. LEGAL BASIS ─── */}
            <section id="legal-basis" className="scroll-mt-24 mb-14">
              <SectionTitle num="05" title="Legal Basis for Processing" />
              <P>We process your personal data only when we have a valid legal basis. Our legal bases include:</P>
              <BulletList items={[
                <><strong>Consent:</strong> Where you have given us explicit, informed consent to process your personal data for specific purposes (e.g., subscribing to marketing emails, accepting cookies). You can withdraw consent at any time by contacting <A href="mailto:nexgenelit@gmail.com">nexgenelit@gmail.com</A>.</>,
                <><strong>Contractual Necessity:</strong> Where processing is necessary for performing a contract with you, or to take pre-contractual steps at your request (e.g., delivering Services, processing payments, fulfilling project deliverables).</>,
                <><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests or those of a third party, provided these interests are not overridden by your fundamental rights. Our legitimate interests include improving our Services, marketing our business, protecting our operations, and conducting analytics.</>,
                <><strong>Legal Obligation:</strong> Where processing is necessary to comply with a legal or regulatory obligation (e.g., tax obligations, responding to lawful government requests, financial reporting requirements).</>,
              ]} />
            </section>

            <Divider />

            {/* ─── 6. COOKIES & TRACKING ─── */}
            <section id="cookies" className="scroll-mt-24 mb-14">
              <SectionTitle num="06" title="Cookies & Tracking Technologies" />
              <P>
                We use cookies, web beacons, pixels, local storage, and similar tracking technologies to collect and store information when you visit our Website. These technologies help us recognise you, customise your experience, and analyse traffic.
              </P>

              <SubHead>6.1 Types of Cookies We Use</SubHead>
              <div className="overflow-x-auto mb-6 border border-[#E5E7EB]" style={{ borderRadius: 0 }}>
                <table className="w-full text-[13px]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                  <thead>
                    <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                      <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: '#6B7280' }}>Category</th>
                      <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: '#6B7280' }}>Purpose</th>
                      <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: '#6B7280' }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#F3F4F6]">
                      <td className="py-3 px-4 font-semibold align-top" style={{ color: '#1A1A1A' }}>Essential</td>
                      <td className="py-3 px-4 align-top" style={{ color: '#4A4A4A' }}>Required for basic website functionality, security, user authentication, and accessibility. These cookies cannot be disabled as the site cannot function without them.</td>
                      <td className="py-3 px-4 whitespace-nowrap align-top" style={{ color: '#4A4A4A' }}>Session – 1 year</td>
                    </tr>
                    <tr className="border-b border-[#F3F4F6]">
                      <td className="py-3 px-4 font-semibold align-top" style={{ color: '#1A1A1A' }}>Analytics</td>
                      <td className="py-3 px-4 align-top" style={{ color: '#4A4A4A' }}>Used by Google Analytics 4 (GA4) to understand visitor behaviour, measure page views, session duration, bounce rates, and improve user experience. These cookies collect anonymous statistical data.</td>
                      <td className="py-3 px-4 whitespace-nowrap align-top" style={{ color: '#4A4A4A' }}>Up to 2 years</td>
                    </tr>
                    <tr className="border-b border-[#F3F4F6]">
                      <td className="py-3 px-4 font-semibold align-top" style={{ color: '#1A1A1A' }}>Advertising</td>
                      <td className="py-3 px-4 align-top" style={{ color: '#4A4A4A' }}>Used by Meta Pixel (Facebook/Instagram) and Google Ads to deliver relevant advertisements, measure ad campaign effectiveness, create retargeting audiences, and track conversions across platforms.</td>
                      <td className="py-3 px-4 whitespace-nowrap align-top" style={{ color: '#4A4A4A' }}>Up to 2 years</td>
                    </tr>
                    <tr className="border-b border-[#F3F4F6]">
                      <td className="py-3 px-4 font-semibold align-top" style={{ color: '#1A1A1A' }}>Functional</td>
                      <td className="py-3 px-4 align-top" style={{ color: '#4A4A4A' }}>Remember your preferences, language settings, cookie consent choices, and customisation options to enhance your experience on future visits.</td>
                      <td className="py-3 px-4 whitespace-nowrap align-top" style={{ color: '#4A4A4A' }}>Up to 1 year</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold align-top" style={{ color: '#1A1A1A' }}>Performance</td>
                      <td className="py-3 px-4 align-top" style={{ color: '#4A4A4A' }}>Help with load balancing, site speed analysis, and error reporting to ensure optimal performance and reliability of the Website.</td>
                      <td className="py-3 px-4 whitespace-nowrap align-top" style={{ color: '#4A4A4A' }}>Session – 6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <SubHead>6.2 Managing Cookies</SubHead>
              <P>
                You can manage your cookie preferences through our cookie consent banner displayed on your first visit. You may also control cookies through your browser settings — most browsers allow you to block or delete cookies. However, disabling cookies may cause some features to not function properly.
              </P>
              <P>
                To opt out of Google Analytics tracking specifically, install the{' '}
                <A href="https://tools.google.com/dlpage/gaoptout" external>Google Analytics Opt-Out Browser Add-on</A>.
              </P>

              <SubHead>6.3 Do Not Track Signals</SubHead>
              <P>
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Currently, there is no universally accepted standard for responding to DNT signals, so our Website does not respond to browser DNT signals. You may manage tracking through cookie preferences and the opt-out tools described above.
              </P>
            </section>

            <Divider />

            {/* ─── 7. ADVERTISING & REMARKETING ─── */}
            <section id="advertising" className="scroll-mt-24 mb-14">
              <SectionTitle num="07" title="Advertising & Remarketing" />
              <P>
                We use third-party advertising platforms to market our Services, measure advertising effectiveness, and deliver personalised advertisements based on your interactions with our Website.
              </P>

              <SubHead>7.1 Meta Pixel (Facebook / Instagram Ads)</SubHead>
              <P>
                We use the Meta Pixel (formerly Facebook Pixel), a snippet of JavaScript code on our Website with Pixel ID <code className="text-[12px] bg-[#F3F4F6] px-1.5 py-0.5 rounded-sm">1717276075602623</code>. The Meta Pixel allows us to:
              </P>
              <BulletList items={[
                'Measure the effectiveness of our advertising campaigns on Meta platforms (Facebook, Instagram, Messenger, Audience Network).',
                'Track conversion events such as page views, form submissions (Lead events), button clicks, and other user actions on our Website.',
                'Build custom audiences of Website visitors and serve them targeted advertisements on Meta platforms.',
                'Create lookalike audiences to reach new potential customers who share similar characteristics with our existing visitors.',
                'Optimise ad delivery, bidding strategies, and campaign budgets based on real-time conversion data.',
              ]} />
              <P>
                The Meta Pixel collects HTTP headers, pixel-specific data, button click data, form field values (optional), and browsing information. Data is sent to Meta and processed under{' '}
                <A href="https://www.facebook.com/policy.php" external>Meta&apos;s Data Policy</A>.
                Manage your Meta ad preferences: <A href="https://www.facebook.com/ads/preferences/" external>facebook.com/ads/preferences</A>.
              </P>

              <SubHead>7.2 Google Ads & Google Tag Manager</SubHead>
              <P>
                We use Google Tag Manager (GTM) with container ID <code className="text-[12px] bg-[#F3F4F6] px-1.5 py-0.5 rounded-sm">GTM-TQ8NSTJK</code> to deploy and manage marketing tags on our Website. Through Google Ads, we:
              </P>
              <BulletList items={[
                'Track conversions from Google Search, Display, Shopping, and YouTube advertisements.',
                'Measure cost per acquisition (CPA), return on ad spend (ROAS), click-through rates, and other performance metrics.',
                'Create remarketing lists to re-engage visitors across the Google Display Network and Google Search results.',
                'Use audience signals and demographic targeting to deliver relevant ads to potential customers.',
                'Optimise bidding strategies using conversion data and Google\u2019s machine learning algorithms.',
              ]} />
              <P>
                Google may use cookies, device identifiers, and similar technologies. For details, see{' '}
                <A href="https://policies.google.com/privacy" external>Google&apos;s Privacy Policy</A>.
                Opt out of personalised ads: <A href="https://adssettings.google.com" external>Google Ads Settings</A>.
              </P>

              <SubHead>7.3 Google AdSense</SubHead>
              <P>
                We use Google AdSense (Publisher ID: <code className="text-[12px] bg-[#F3F4F6] px-1.5 py-0.5 rounded-sm">ca-pub-7416978133348374</code>) to display advertisements on our Website. AdSense uses cookies and web beacons to serve ads based on your browsing history and interests. Learn more: <A href="https://policies.google.com/technologies/partner-sites" external>Google Partner Sites Policy</A>.
              </P>

              <SubHead>7.4 Opting Out of Targeted Advertising</SubHead>
              <P>You have the right to opt out of targeted advertising through these methods:</P>
              <BulletList items={[
                <><strong>Meta (Facebook/Instagram):</strong> <A href="https://www.facebook.com/ads/preferences/" external>facebook.com/ads/preferences</A></>,
                <><strong>Google:</strong> <A href="https://adssettings.google.com" external>adssettings.google.com</A></>,
                <><strong>DAA Opt-Out:</strong> <A href="https://optout.aboutads.info" external>optout.aboutads.info</A> (Digital Advertising Alliance)</>,
                <><strong>EDAA Opt-Out:</strong> <A href="https://www.youronlinechoices.eu" external>youronlinechoices.eu</A> (European Interactive Digital Advertising Alliance)</>,
                <><strong>Cookie Settings:</strong> Use our cookie consent management tool on our Website to withdraw consent for advertising cookies at any time.</>,
                <><strong>Mobile Device Settings:</strong> Enable &quot;Limit Ad Tracking&quot; on iOS or &quot;Opt Out of Ads Personalization&quot; on Android in your device settings.</>,
              ]} />
            </section>

            <Divider />

            {/* ─── 8. INFORMATION SHARING ─── */}
            <section id="sharing" className="scroll-mt-24 mb-14">
              <SectionTitle num="08" title="Information Sharing & Disclosure" />
              <P>
                We do <strong>not</strong> sell, trade, or rent your personal information to third parties for their own marketing purposes. We may share your information only in these limited circumstances:
              </P>
              <BulletList items={[
                <><strong>Service Providers & Processors:</strong> We share information with trusted third-party service providers who assist in operating our Website and Services — cloud hosting (Vercel, AWS), email service providers, payment processors, analytics (Google Analytics), advertising platforms (Meta, Google), and customer support tools. All providers are contractually bound to process data only on our behalf and under strict confidentiality obligations.</>,
                <><strong>Business Partners:</strong> We may share information with business partners for joint marketing initiatives or co-branded services, but only with your prior consent.</>,
                <><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, subpoena, or valid government request (e.g., law enforcement, regulatory bodies).</>,
                <><strong>Protection of Rights:</strong> We may disclose information to protect the rights, property, or safety of Nexgen Elit, our users, or the public — including for fraud protection and credit risk reduction.</>,
                <><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganisation, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any change in ownership or control of your personal data.</>,
                <><strong>With Your Consent:</strong> We may share your information with your explicit consent for any other purpose disclosed at the time of collection.</>,
                <><strong>Aggregated/Anonymised Data:</strong> We may share aggregated or de-identified data that does not identify you personally for research, analysis, or business purposes.</>,
              ]} />
            </section>

            <Divider />

            {/* ─── 9. DATA RETENTION ─── */}
            <section id="data-retention" className="scroll-mt-24 mb-14">
              <SectionTitle num="09" title="Data Retention" />
              <P>
                We retain your personal information only as long as necessary to fulfil the purposes for which it was collected. Specific retention periods:
              </P>
              <div className="overflow-x-auto mb-6 border border-[#E5E7EB]" style={{ borderRadius: 0 }}>
                <table className="w-full text-[13px]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                  <thead>
                    <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                      <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: '#6B7280' }}>Data Type</th>
                      <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: '#6B7280' }}>Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Client & Project Data', '5 years after end of business relationship (contractual, tax, and legal obligations)'],
                      ['Contact & Inquiry Data', '3 years from date of last interaction, unless you request earlier deletion'],
                      ['Newsletter Subscriptions', 'Until you unsubscribe; email suppressed for 1 year after to prevent re-subscription errors'],
                      ['Website Analytics Data', 'Up to 26 months in aggregated form (Google Analytics 4 configuration)'],
                      ['Advertising/Pixel Data', '180 days – 2 years (per Meta and Google platform retention policies)'],
                      ['Cookie Data', 'Varies by category — see Cookie Table in Section 6.1 above'],
                      ['Billing & Financial Records', '7 years (as required by Indian tax laws and financial regulations)'],
                      ['Account Data', 'Duration of active account + 2 years after account closure or deletion request'],
                    ].map(([type, period], i) => (
                      <tr key={i} className={i < 7 ? 'border-b border-[#F3F4F6]' : ''}>
                        <td className="py-3 px-4 font-semibold align-top" style={{ color: '#1A1A1A' }}>{type}</td>
                        <td className="py-3 px-4 align-top" style={{ color: '#4A4A4A' }}>{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <P>
                When retention periods expire, we will either securely delete or permanently anonymise your data. If deletion is not immediately possible (e.g., data in backup archives), we will securely isolate it from further processing until deletion is complete.
              </P>
            </section>

            <Divider />

            {/* ─── 10. DATA SECURITY ─── */}
            <section id="data-security" className="scroll-mt-24 mb-14">
              <SectionTitle num="10" title="Data Security" />
              <P>
                We implement comprehensive technical and organisational security measures to protect your personal information:
              </P>
              <BulletList items={[
                <><strong>Encryption:</strong> All data transmitted between your browser and our servers is encrypted using TLS/SSL (Transport Layer Security) protocols. Sensitive data at rest is also encrypted using AES-256 encryption.</>,
                <><strong>Access Controls:</strong> Role-based access controls (RBAC) ensure only authorised personnel with a legitimate business need can access personal data. All access is logged and audited.</>,
                <><strong>Secure Hosting:</strong> Our Website and Services are hosted on enterprise-grade cloud infrastructure (Vercel, AWS) with built-in redundancy, firewalls, DDoS protection, and intrusion detection systems.</>,
                <><strong>Regular Assessments:</strong> We conduct periodic security assessments, vulnerability scans, penetration testing, and code reviews to identify and remediate security weaknesses.</>,
                <><strong>Employee Training:</strong> Team members receive regular training on data protection best practices, security awareness, phishing prevention, and incident response procedures.</>,
                <><strong>Incident Response:</strong> We maintain a documented incident response plan. In the event of a data breach involving your personal data, we will notify you and relevant authorities within 72 hours as required by applicable law.</>,
              ]} />
              <P>
                Despite our best efforts, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially reasonable means to protect your personal information, we cannot guarantee absolute security. We recommend using strong passwords and keeping your login credentials confidential.
              </P>
            </section>

            <Divider />

            {/* ─── 11. INTERNATIONAL TRANSFERS ─── */}
            <section id="international-transfers" className="scroll-mt-24 mb-14">
              <SectionTitle num="11" title="International Data Transfers" />
              <P>
                Your personal information may be transferred to, stored in, and processed in countries outside your country of residence. Our third-party service providers — including Google (United States), Meta (United States), Vercel (United States), and AWS (multiple global regions) — operate servers internationally. These countries may have different data protection laws than your jurisdiction.
              </P>
              <P>When we transfer personal data internationally, we implement appropriate safeguards:</P>
              <BulletList items={[
                'Transferring data to countries deemed to provide adequate data protection by relevant authorities.',
                'Using Standard Contractual Clauses (SCCs) approved by the European Commission with service providers.',
                'Relying on service providers\u2019 binding corporate rules, certifications (e.g., EU-US Data Privacy Framework), or data processing agreements.',
                'Implementing additional technical safeguards such as encryption and pseudonymisation where appropriate.',
              ]} />
              <P>
                By using our Website, you consent to the transfer of your information to these jurisdictions, subject to the safeguards described herein.
              </P>
            </section>

            <Divider />

            {/* ─── 12. YOUR RIGHTS ─── */}
            <section id="your-rights" className="scroll-mt-24 mb-14">
              <SectionTitle num="12" title="Your Rights" />
              <P>
                Depending on your location and applicable data protection laws (including GDPR, the Indian IT Act, DPDPA 2023, and other local regulations), you may have the following rights:
              </P>
              <BulletList items={[
                <><strong>Right of Access:</strong> Request a copy of the personal information we hold about you and information about how we process it.</>,
                <><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information.</>,
                <><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal information when it is no longer necessary for the purposes collected, or when you withdraw consent.</>,
                <><strong>Right to Restriction:</strong> Request that we restrict processing of your personal information in certain circumstances (e.g., when you contest its accuracy).</>,
                <><strong>Right to Data Portability:</strong> Receive your personal information in a structured, commonly used, machine-readable format and transmit it to another controller.</>,
                <><strong>Right to Object:</strong> Object to processing based on legitimate interests, including processing for direct marketing purposes. We will cease processing unless we demonstrate compelling legitimate grounds.</>,
                <><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time. Withdrawal does not affect lawfulness of processing prior to withdrawal.</>,
                <><strong>Right to Lodge a Complaint:</strong> Lodge a complaint with a supervisory authority or data protection authority in your jurisdiction if you believe our processing infringes applicable law.</>,
              ]} />
              <InfoCard>
                <p className="text-[13px] font-semibold mb-2" style={{ color: '#0A0A0A' }}>How to Exercise Your Rights</p>
                <p className="text-[13px]" style={{ color: '#4A4A4A' }}>
                  Contact us at <A href="mailto:nexgenelit@gmail.com">nexgenelit@gmail.com</A> with the subject line &quot;Data Privacy Request&quot;. We will respond within <strong>30 days</strong>. We may request identity verification before processing. There is no fee for legitimate requests, though we may charge a reasonable fee for manifestly unfounded or excessive requests.
                </p>
              </InfoCard>
            </section>

            <Divider />

            {/* ─── 13. CCPA / CPRA ─── */}
            <section id="ccpa" className="scroll-mt-24 mb-14">
              <SectionTitle num="13" title="California Privacy Rights (CCPA / CPRA)" />
              <P>
                If you are a California resident, the California Consumer Privacy Act (CCPA) and its amendment, the California Privacy Rights Act (CPRA), provide you with additional rights:
              </P>
              <BulletList items={[
                <><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information collected, sources, business purposes, and third parties with whom information is shared.</>,
                <><strong>Right to Delete:</strong> Request deletion of personal information we have collected, subject to certain legal exceptions.</>,
                <><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</>,
                <><strong>Right to Opt Out of Sale/Sharing:</strong> We do <strong>not</strong> sell your personal information. We do <strong>not</strong> share your personal information for cross-context behavioural advertising as defined by CPRA.</>,
                <><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising CCPA/CPRA rights — no different pricing, quality reduction, or denial of services.</>,
                <><strong>Right to Limit Sensitive Data Use:</strong> If we collect sensitive personal information, you have the right to limit its use to what is necessary to provide the Services.</>,
              ]} />
              <P>
                To exercise CCPA/CPRA rights, email <A href="mailto:nexgenelit@gmail.com">nexgenelit@gmail.com</A> with the subject &quot;CCPA Request&quot;. You may designate an authorised agent with written authorisation. We will verify your identity before processing.
              </P>
              <P>
                <strong>Categories of personal information collected in the preceding 12 months:</strong> Identifiers (name, email, IP address), commercial information (service inquiries, transactions), internet/electronic activity (browsing data, cookies), geolocation data (approximate, from IP), and professional/employment information (company, job title). These categories have been disclosed to service providers for business purposes as described in this Privacy Policy.
              </P>
            </section>

            <Divider />

            {/* ─── 14. CHILDREN ─── */}
            <section id="children" className="scroll-mt-24 mb-14">
              <SectionTitle num="14" title="Children&rsquo;s Privacy" />
              <P>
                Our Website and Services are designed for businesses and professionals and are <strong>not directed to individuals under 18 years of age</strong>. We do not knowingly collect, solicit, or maintain personal information from anyone under 18.
              </P>
              <P>
                If we learn that we have inadvertently collected personal information from a child under 18, we will take immediate steps to delete that information from our servers and systems. If you are a parent or guardian and believe your child has provided personal information without your consent, please contact us immediately at <A href="mailto:nexgenelit@gmail.com">nexgenelit@gmail.com</A>.
              </P>
            </section>

            <Divider />

            {/* ─── 15. THIRD-PARTY LINKS ─── */}
            <section id="third-party-links" className="scroll-mt-24 mb-14">
              <SectionTitle num="15" title="Third-Party Links & Services" />
              <P>
                Our Website may contain links to third-party websites, plug-ins, applications, and services not operated by Nexgen Elit — including social media platforms (LinkedIn, Facebook, Instagram), partner websites, industry resources, and external tools.
              </P>
              <P>
                This Privacy Policy does <strong>not</strong> apply to third-party websites or services. We are not responsible for their privacy practices, content, or security. We strongly encourage you to review the privacy policies of every third-party website you visit.
              </P>
              <P>
                We may embed third-party content (e.g., YouTube videos, social media feeds, maps). These embeds may collect data through their own cookies or tracking mechanisms; their data usage is governed by their respective privacy policies.
              </P>
            </section>

            <Divider />

            {/* ─── 16. CHANGES ─── */}
            <section id="changes" className="scroll-mt-24 mb-14">
              <SectionTitle num="16" title="Changes to This Privacy Policy" />
              <P>
                We reserve the right to update or modify this Privacy Policy at any time. When we make material changes, we will:
              </P>
              <BulletList items={[
                'Update the "Effective Date" and "Last Updated" date at the top of this page.',
                'Post a prominent notice on our Website informing you of the changes.',
                'Send you email notification if we have your email address and the changes materially affect your personal information usage.',
                'Obtain your renewed consent where required by applicable law.',
              ]} />
              <P>
                We encourage you to review this Privacy Policy regularly. Your continued use of our Website and Services after changes constitutes acceptance of the updated policy. If you disagree with changes, stop using our Services and contact us to request data deletion.
              </P>
            </section>

            <Divider />

            {/* ─── 17. CONTACT US ─── */}
            <section id="contact" className="scroll-mt-24 mb-8">
              <SectionTitle num="17" title="Contact Us" />
              <P>
                If you have any questions, concerns, or complaints about this Privacy Policy, our data practices, or your personal information — or if you wish to exercise any of your rights — please contact us:
              </P>

              <InfoCard>
                <p
                  className="text-base font-semibold mb-4"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#0A0A0A' }}
                >
                  Nexgen Elit — Privacy Team
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
                    We aim to respond to all legitimate inquiries within 30 days. Urgent privacy concerns are prioritised. If you are unsatisfied with our response, you have the right to lodge a complaint with your local data protection authority.
                  </p>
                </div>
              </InfoCard>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/terms-and-conditions"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] border border-[#E5E7EB] text-[#1A1A1A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  Terms &amp; Conditions
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
   REUSABLE SUB-COMPONENTS (below export to avoid hoisting issues)
   ═══════════════════════════════════════════════════════════════ */

function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <span
        className="text-[11px] font-mono font-bold mt-1.5 shrink-0"
        style={{ color: '#2A3AFF' }}
      >
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
