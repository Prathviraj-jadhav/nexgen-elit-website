'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import { ArrowUpRight } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';
import Link from 'next/link';

/* ============================================
   SCANDINAVIAN PARTNERS PAGE
   ============================================ */

/* ── CA Referral Steps ── */
const CA_STEPS = [
  {
    number: '01',
    title: 'Make an introduction',
    desc: 'Send a WhatsApp message or email introducing your client to Nexgen Elit. Include the client\'s name, company, and what they need. That\'s it.',
  },
  {
    number: '02',
    title: 'We handle everything from here',
    desc: 'Nexgen Elit takes over  the discovery call, the proposal, the delivery, the entire engagement. You stay completely out of the operational loop unless you want to stay involved.',
  },
  {
    number: '03',
    title: 'You receive your referral fee',
    desc: 'Within 7 days of the client\'s first payment, you receive 10% of the invoiced amount as a referral fee. No chasing, no delays, no minimum volume requirements.',
  },
];

/* ── Trust comparison data ── */
const TRUST_DATA = [
  { label: 'CA-referred lead conversion rate', value: '50–70%', accent: true },
  { label: 'Cold outreach conversion rate', value: '8–15%', accent: false },
];

/* ── CA Target Profile ── */
const CA_TARGET_CITIES = [
  'Mumbai',
  'Pune',
  'Nagpur',
  'Delhi NCR',
  'Bengaluru',
  'Hyderabad',
  'Ahmedabad',
];

/* ── Association partnership includes ── */
const ASSOCIATION_INCLUDES = [
  {
    title: 'Formal recommendation',
    desc: 'Nexgen Elit is positioned as the association\'s recommended digital and technology partner, giving members a trusted starting point.',
  },
  {
    title: 'Speaking opportunities',
    desc: 'Access to speak at association events, chapter meetings, and annual conferences  on topics like digital transformation, website credibility, and procurement psychology.',
  },
  {
    title: 'Member pricing',
    desc: 'Association members receive 10–15% below standard pricing on all Nexgen Elit services, creating a tangible membership benefit.',
  },
  {
    title: 'Co-branded resources',
    desc: 'Joint whitepapers, case studies, or knowledge resources co-branded with the association  adding value to the association\'s content library.',
  },
];

/* ── What Nexgen offers associations ── */
const ASSOCIATION_OFFERS = [
  'Deep expertise in logistics-specific digital positioning and technology  not a generic agency.',
  'A credible answer when members ask "who can help us with our website, software, or digital presence?"',
  'An ongoing relationship, not a one-time collaboration  continuous value for your members over the years.',
  'No cost to the association. Revenue comes through member engagements, not association fees.',
];

/* ── Association types ── */
const ASSOCIATION_TYPES = [
  { name: 'AIMTC', detail: 'Regional chapters across India' },
  { name: 'CLFAI', detail: 'Chapters in key logistics hubs' },
  { name: 'FICCI', detail: 'Logistics committees and sub-councils' },
  { name: 'CII', detail: 'Logistics council and sector forums' },
  { name: 'State-level federations', detail: 'Transport association federations across India' },
];

/* ── White-label available services ── */
const WL_AVAILABLE = [
  { name: 'Website copy', desc: 'Logistics-specific website copywriting  pages, service descriptions, about sections, and more.' },
  { name: 'Capability deck', desc: 'Professional corporate capability decks designed for logistics companies to present to enterprise buyers.' },
  { name: 'Logistics SEO', desc: 'Search engine optimization specifically built for logistics industry keywords and buyer intent.' },
  { name: 'LinkedIn content', desc: 'LinkedIn posts, articles, and thought leadership content tailored for logistics founders and decision-makers.' },
];

/* ── White-label NOT available ── */
const WL_NOT_AVAILABLE = [
  { name: 'Software projects', desc: 'All software development, custom applications, and technology implementations are delivered directly by Nexgen Elit  not subcontracted.' },
];

/* ── How to become a partner  what we need ── */
const PARTNER_INFO_NEEDED = [
  'Your name and organisation (CA firm, association, agency, or individual).',
  'The number of logistics clients or members you work with.',
  'Your city or region in India.',
];

/* ── Partnership terms ── */
const PARTNER_TERMS = [
  'Response within 24 hours.',
  'No lengthy onboarding process.',
  'No exclusivity requirements.',
  'No minimum volume commitments.',
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium font-[family-name:var(--font-montserrat)]">
      {children}
    </span>
  );
}

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[clamp(28px,4vw,42px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.1] tracking-tight text-[#000000] ${className}`}
      style={{ color: '#000000' }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h3
      className={`text-[clamp(20px,2.8vw,28px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.15] tracking-tight text-[#000000] ${className}`}
      style={{ color: '#000000' }}
    >
      {children}
    </h3>
  );
}

function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2A3AFF]">{children}</span>;
}

function BodyText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[15px] md:text-base text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)] font-light ${className}`}>
      {children}
    </p>
  );
}

function CTAButton({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const inner = (
    <>
      {children} <ArrowUpRight size={13} />
    </>
  );

  const classes = "inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-[#2A3AFF] font-[family-name:var(--font-montserrat)]";

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        style={{ backgroundColor: '#2A3AFF', color: '#fff', borderRadius: 0 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#2A3AFF'; e.currentTarget.style.borderColor = '#2A3AFF'; }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      style={{ backgroundColor: '#2A3AFF', color: '#fff', borderRadius: 0 }}
      onMouseEnter={(e) => { e.currentTarget.style.background = '#000000'; e.currentTarget.style.borderColor = '#000000'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = '#2A3AFF'; e.currentTarget.style.borderColor = '#2A3AFF'; }}
    >
      {inner}
    </Link>
  );
}

/* ── Accent border block ── */
function AccentBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border-l-2 border-[#2A3AFF] pl-5 md:pl-6 ${className}`}>
      {children}
    </div>
  );
}

/* ============================================
   MAIN PARTNERS PAGE
   ============================================ */

export default function PartnersPage() {

  return (
    <main className="bg-white">
      <Navbar transparent />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-12 md:pt-0 md:pb-0 hero-dark-text">


        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 w-full mt-12 md:mt-0">
          <div className="max-w-4xl">
            <ScrollReveal style="fadeUp" once={false}>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
                <SectionLabel>Partners</SectionLabel>
              </div>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <h1 className="text-[clamp(44px,6vw,72px)] font-[family-name:var(--font-poppins)] font-semibold leading-[1.05] tracking-tight text-white mb-8">
                Partner with Nexgen Elit {' '}
                <AccentText>referral programmes</AccentText> and{' '}
                <AccentText>strategic alliances</AccentText> for professionals serving the Indian logistics industry
              </h1>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <p className="text-[16px] md:text-[18px] text-white/70 max-w-3xl leading-[1.7] font-[family-name:var(--font-montserrat)] font-light">
                Nexgen Elit&apos;s business was built on one foundational insight: logistics founders in India make their most important business decisions based on the recommendations of three people  their{' '}
                <span className="text-white font-medium border-b border-white/20 pb-0.5">Chartered Accountant</span>, their{' '}
                <span className="text-white font-medium border-b border-white/20 pb-0.5">industry association</span>, and a{' '}
                <span className="text-white font-medium border-b border-white/20 pb-0.5">trusted peer</span> in the same trade.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          SECTION 1: CA REFERRAL PROGRAMME
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          {/* Main heading */}
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Chartered Accountant Partnership</SectionLabel>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.08} once={false}>
            <SectionHeading className="mt-4">
              CA referral programme  earn <AccentText>10%</AccentText> on every client you introduce
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.16} once={false}>
            <BodyText className="mt-6 max-w-2xl">
              Chartered Accountants who work with <span className="logistics-highlight">logistics businesses</span> in India already know the conversation. Their clients  transport company owners, fleet operators, warehousing providers  come to them with questions about growth, visibility, and digital readiness. They ask: &ldquo;Should we get a website?&rdquo; &ldquo;We need software for our fleet.&rdquo; &ldquo;Corporate clients can&apos;t find us online.&rdquo;
            </BodyText>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.22} once={false}>
            <AccentBlock className="mt-8 max-w-2xl">
              <p className="text-[15px] md:text-base text-[#6B7280] leading-relaxed">
                The CA knows the client needs a credible digital presence. The CA also knows that finding a reliable technology partner for logistics is not straightforward  most agencies don&apos;t understand the industry.
              </p>
              <p className="mt-4 text-base md:text-lg text-[#000000] font-medium leading-relaxed">
                Nexgen Elit is that answer. And the CA referral programme makes it simple for the accountant to connect their client with a partner who understands logistics.
              </p>
            </AccentBlock>
          </ScrollReveal>

          {/* How the CA referral programme works */}
          <div className="mt-20 md:mt-28">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">How It Works</p>
              <SubHeading>
                How the CA referral programme works
              </SubHeading>
            </ScrollReveal>

            <div className="mt-10 md:mt-14 flex flex-col gap-0">
              {CA_STEPS.map((step, i) => (
                <ScrollReveal key={step.number} style="fadeLeft" delay={i * 0.1} once={false}>
                  <div className="border-t border-black/[0.06] py-6 md:py-8">
                    <div className="flex items-start gap-5 md:gap-8">
                      <span className="text-[11px] text-[#9CA3AF] font-mono mt-1 flex-shrink-0">{step.number}</span>
                      <div>
                        <h4 className="text-base md:text-lg text-[#000000] font-medium font-[family-name:var(--font-poppins)]">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-[15px] text-[#6B7280] leading-relaxed max-w-lg">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Why trust CA recommendation */}
          <div className="mt-20 md:mt-28">
            <ScrollReveal style="fadeUp" once={false}>
              <SubHeading>
                Why do logistics founders trust their CA&apos;s recommendation
              </SubHeading>
            </ScrollReveal>

            <ScrollReveal style="scaleUp" delay={0.1} once={false}>
              <div className="mt-10 md:mt-14 border border-black/[0.06] max-w-md">
                {/* Header */}
                <div className="grid grid-cols-2 border-b border-black/[0.06]">
                  <div className="px-5 md:px-8 py-4 bg-[#F7F8FA]">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium">Source</span>
                  </div>
                  <div className="px-5 md:px-8 py-4 bg-[#F7F8FA]">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium">Conversion</span>
                  </div>
                </div>
                {/* Rows */}
                {TRUST_DATA.map((row) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    viewport={{ once: false, margin: '-30px' }}
                    transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                    className="grid grid-cols-2 border-b border-black/[0.04] last:border-b-0"
                  >
                    <div className="px-5 md:px-8 py-5 md:py-6 text-sm text-[#000000]">
                      {row.label}
                    </div>
                    <div className="px-5 md:px-8 py-5 md:py-6 text-sm font-semibold font-[family-name:var(--font-poppins)]">
                      <span className={row.accent ? 'text-[#2A3AFF]' : 'text-[#9CA3AF]'}>{row.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <BodyText className="mt-8 max-w-lg">
                A recommendation from the CA carries the weight of existing trust. The logistics founder doesn&apos;t evaluate Nexgen Elit as an unknown vendor  they evaluate them as their CA&apos;s recommended partner. That changes the entire dynamic of the sales conversation.
              </BodyText>
            </ScrollReveal>
          </div>

          {/* Target profile for CA partners */}
          <div className="mt-20 md:mt-28">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">Target Profile</p>
              <SubHeading>
                Target profile for CA partners
              </SubHeading>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <AccentBlock className="mt-8">
                <p className="text-[15px] md:text-base text-[#6B7280] leading-relaxed">
                  CAs with <span className="text-[#000000] font-medium">30–150 SME clients</span> in logistics  including road freight operators, transport companies, and warehousing businesses  based in India&apos;s key logistics cities.
                </p>
              </AccentBlock>
            </ScrollReveal>

            <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 max-w-xl">
              {CA_TARGET_CITIES.map((city) => (
                <ScrollReveal key={city} style="fadeUp" once={false}>
                  <div className="flex items-center gap-2 py-1.5">
                    <div className="w-1 h-1 bg-[#2A3AFF] flex-shrink-0" />
                    <span className="text-sm text-[#000000]">{city}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          SECTION 2: LOGISTICS ASSOCIATION PARTNERSHIPS
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Association and Industry Body Partnerships</SectionLabel>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.08} once={false}>
            <SectionHeading className="mt-4">
              Become the official <AccentText>digital partner</AccentText> for your logistics association
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.16} once={false}>
            <BodyText className="mt-6 max-w-2xl">
              Transport and logistics industry associations across India represent hundreds  sometimes thousands  of <span className="logistics-highlight">logistics businesses</span>. Members look to their association for guidance, resources, and trusted recommendations. When it comes to digital transformation, technology adoption, and online credibility, most associations don&apos;t have a clear answer for members who ask: &ldquo;Who can help us?&rdquo;
            </BodyText>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.22} once={false}>
            <BodyText className="mt-4 max-w-2xl">
              An association partnership with Nexgen Elit fills that gap. It gives your members a credible, logistics-specialised technology partner they can trust  and it gives the association a valuable membership benefit at no cost.
            </BodyText>
          </ScrollReveal>

          {/* What an association partnership includes */}
          <div className="mt-20 md:mt-28">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">Partnership Benefits</p>
              <SubHeading>
                What an association partnership includes
              </SubHeading>
            </ScrollReveal>

            <div className="mt-10 md:mt-14 flex flex-col gap-0 max-w-2xl">
              {ASSOCIATION_INCLUDES.map((item, i) => (
                <ScrollReveal key={item.title} style="fadeLeft" delay={i * 0.08} once={false}>
                  <div className="border-t border-black/[0.06] py-5 md:py-7">
                    <div className="flex items-start gap-4 md:gap-6">
                      <span className="text-[11px] text-[#9CA3AF] font-mono mt-1 flex-shrink-0">0{i + 1}</span>
                      <div>
                        <h4 className="text-base md:text-[17px] text-[#000000] font-medium font-[family-name:var(--font-poppins)]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-[15px] text-[#6B7280] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* What Nexgen offers the association */}
          <div className="mt-20 md:mt-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-5">
                <ScrollReveal style="fadeLeft" once={false}>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">What We Offer</p>
                  <SubHeading>
                    What Nexgen Elit offers the association
                  </SubHeading>
                </ScrollReveal>
              </div>

              <div className="md:col-span-7">
                <StaggerContainer staggerDelay={0.08} once={false}>
                  {ASSOCIATION_OFFERS.map((item) => (
                    <StaggerItem key={item} y={14}>
                      <div className="flex items-start gap-3 py-3 border-b border-black/[0.04]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0 text-[#2A3AFF]">
                          <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[15px] text-[#000000] leading-relaxed">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>

          {/* Association types */}
          <div className="mt-20 md:mt-28">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">Associations We Work With</p>
              <BodyText className="max-w-xl">
                Nexgen Elit is open to partnerships with logistics and transport industry bodies across India, including:
              </BodyText>
            </ScrollReveal>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1 max-w-2xl">
              {ASSOCIATION_TYPES.map((item) => (
                <ScrollReveal key={item.name} style="fadeUp" once={false}>
                  <div className="flex items-start gap-3 py-3 border-b border-black/[0.04]">
                    <div className="w-1 h-1 bg-[#2A3AFF] flex-shrink-0 mt-2" />
                    <div>
                      <span className="text-sm text-[#000000] font-medium">{item.name}</span>
                      <p className="text-[13px] text-[#9CA3AF] mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          SECTION 3: WHITE-LABEL AND SUBCONTRACTOR
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>White-Label and Subcontractor Partnerships</SectionLabel>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.08} once={false}>
            <SectionHeading className="mt-4">
              White-label and subcontractor partnerships  for web agencies and freelancers
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.16} once={false}>
            <BodyText className="mt-6 max-w-2xl">
              If you&apos;re a web agency, digital marketing freelancer, or branding consultant working with logistics clients in India, you can partner with Nexgen Elit for white-label delivery. You manage the client relationship and the billing  we handle the logistics-specialised execution.
            </BodyText>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.22} once={false}>
            <AccentBlock className="mt-8 max-w-2xl">
              <p className="text-[15px] md:text-base text-[#6B7280] leading-relaxed">
                This is a straightforward white-label arrangement. Nexgen Elit delivers the work under your brand. Your client never knows we exist. You retain full control of the relationship, and we deliver the quality.
              </p>
            </AccentBlock>
          </ScrollReveal>

          {/* Available for */}
          <div className="mt-16 md:mt-24">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">Available For</p>
            </ScrollReveal>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl">
              {WL_AVAILABLE.map((item) => (
                <ScrollReveal key={item.name} style="fadeUp" delay={0.05} once={false}>
                  <div className="border border-black/[0.06] p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 text-[#2A3AFF]">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h4 className="text-base text-[#000000] font-medium font-[family-name:var(--font-poppins)]">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#6B7280] leading-relaxed pl-5">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Not available for */}
          <div className="mt-10 md:mt-14 max-w-3xl">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">Not Available For</p>
            </ScrollReveal>

            <div className="mt-6 md:mt-8">
              {WL_NOT_AVAILABLE.map((item) => (
                <ScrollReveal key={item.name} style="fadeUp" once={false}>
                  <div className="border border-black/[0.06] p-5 md:p-6 max-w-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 text-[#9CA3AF]">
                        <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <h4 className="text-base text-[#9CA3AF] font-medium font-[family-name:var(--font-poppins)]">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#9CA3AF] leading-relaxed pl-5">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Contact */}
          <ScrollReveal style="blurIn" delay={0.15} once={false}>
            <div className="mt-12 md:mt-16 border-l-2 border-[#2A3AFF] pl-5 md:pl-6 max-w-lg">
              <p className="text-[15px] text-[#6B7280] leading-relaxed">
                For white-label and subcontractor partnerships, reach out directly:
              </p>
              <a
                href="mailto:nexgenelit@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-[#2A3AFF] font-medium text-[15px] hover:underline"
              >
                nexgenelit@gmail.com <ArrowUpRight size={12} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          SECTION 4: HOW TO BECOME A PARTNER
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Getting Started</SectionLabel>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.08} once={false}>
            <SectionHeading className="mt-4">
              How to become a <AccentText>Nexgen Elit</AccentText> partner
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.16} once={false}>
            <BodyText className="mt-6 max-w-2xl">
              The process is intentionally simple. We don&apos;t believe in lengthy application forms or complicated partnership agreements.
            </BodyText>
          </ScrollReveal>

          {/* Contact channels */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl">
            <ScrollReveal style="fadeLeft" once={false}>
              <div className="border border-black/[0.06] p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium mb-4">WhatsApp</p>
                <a
                  href="https://wa.me/919307180782"
                  className="text-lg md:text-xl text-[#000000] font-medium font-[family-name:var(--font-poppins)] hover:text-[#2A3AFF] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 93071 80782
                </a>
                <p className="mt-2 text-[13px] text-[#9CA3AF]">Fastest way to reach us</p>
              </div>
            </ScrollReveal>

            <ScrollReveal style="fadeRight" delay={0.08} once={false}>
              <div className="border border-black/[0.06] p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium mb-4">Email</p>
                <a
                  href="mailto:nexgenelit@gmail.com"
                  className="text-lg md:text-xl text-[#000000] font-medium font-[family-name:var(--font-poppins)] hover:text-[#2A3AFF] transition-colors"
                >
                  nexgenelit@gmail.com
                </a>
                <p className="mt-2 text-[13px] text-[#9CA3AF]">For detailed enquiries</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Information needed */}
          <div className="mt-16 md:mt-24">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">What We Need From You</p>
              <SubHeading className="max-w-lg">
                Three pieces of information to get started
              </SubHeading>
            </ScrollReveal>

            <div className="mt-10 md:mt-14 flex flex-col gap-0 max-w-lg">
              {PARTNER_INFO_NEEDED.map((item, i) => (
                <ScrollReveal key={item} style="fadeLeft" delay={i * 0.08} once={false}>
                  <div className="border-t border-black/[0.06] py-4 md:py-5">
                    <div className="flex items-start gap-4">
                      <span className="text-[11px] text-[#9CA3AF] font-mono mt-1 flex-shrink-0">0{i + 1}</span>
                      <p className="text-[15px] text-[#000000] leading-relaxed">{item}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Partnership terms */}
          <div className="mt-16 md:mt-24">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] mb-2 font-[family-name:var(--font-montserrat)]">Our Commitment</p>
            </ScrollReveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 max-w-lg">
              {PARTNER_TERMS.map((item) => (
                <ScrollReveal key={item} style="fadeUp" once={false}>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-1 h-1 bg-[#2A3AFF] flex-shrink-0" />
                    <span className="text-sm text-[#000000]">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <ScrollReveal style="fadeUp" once={false}>
              <SectionHeading>
                Not sure which partnership model fits you?
              </SectionHeading>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <BodyText className="mt-6">
                That&apos;s fine. Send us a message on WhatsApp or email  tell us who you are and who your logistics clients or members are  and we&apos;ll figure out the right model together.
              </BodyText>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <CTAButton
                  href="https://wa.me/919307180782?text=Hi%2C%20I%27m%20interested%20in%20a%20partnership%20with%20Nexgen%20Elit."
                  external
                >
                  WhatsApp us
                </CTAButton>
                <CTAButton href="mailto:nexgenelit@gmail.com?subject=Partnership%20Inquiry">
                  Send an email
                </CTAButton>
              </div>
            </ScrollReveal>

            <ScrollReveal style="blurIn" delay={0.3} once={false}>
              <p className="mt-12 text-[13px] text-[#9CA3AF] leading-relaxed">
                We respond to every partnership enquiry within 24 hours. No automated replies  a real person from our team.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}
