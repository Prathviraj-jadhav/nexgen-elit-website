'use client';

import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import { ArrowUpRight, TrendingUp, Target, Layers, Share2 } from 'lucide-react';

/* ============================================
   DATA CONSTANTS
   ============================================ */

const METRICS = [
  { value: 'Rs.14.5L Cr', label: 'India logistics market', icon: TrendingUp },
  { value: '92%', label: 'Have no digital presence', icon: Target },
  { value: '50,000+', label: 'Addressable logistics SMEs', icon: Share2 },
  { value: '3%', label: 'Use operational software', icon: Layers },
];

const MODEL_STEPS = [
  {
    step: '01',
    title: 'Custom Software & Digital Presence',
    desc: 'Enter via high-touch engagements  building custom software, websites, and digital infrastructure for logistics companies.'
  },
  {
    step: '02',
    title: 'Productize & Standardize',
    desc: 'Identify patterns across custom builds, productizing the most common solutions into reusable SaaS products.'
  },
  {
    step: '03',
    title: 'Recurring SaaS Subscriptions',
    desc: 'Upsell clients from one-time project revenue to recurring monthly SaaS subscriptions as products mature.'
  },
  {
    step: '04',
    title: 'White-Label Licensing',
    desc: 'License products to logistics associations and trade bodies at scale  multiplying distribution without linear headcount growth.'
  },
];

/* ============================================
   SUB-COMPONENTS
   ============================================ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium font-[family-name:var(--font-montserrat)]">
      {children}
    </span>
  );
}

function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2A3AFF]">{children}</span>;
}

/* ============================================
   MAIN INVESTOR PAGE
   ============================================ */

export default function InvestorPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar transparent />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-12 md:pt-0 md:pb-0 hero-dark-text">
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 w-full mt-12 md:mt-0">
          <div className="max-w-4xl">
            <ScrollReveal style="fadeUp" once={false}>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
                <SectionLabel>Investors</SectionLabel>
              </div>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <h1 className="text-[clamp(40px,5.5vw,64px)] font-[family-name:var(--font-poppins)] font-semibold leading-[1.1] tracking-tight text-white mb-8">
                Nexgen Elit is building the{' '}
                <AccentText>digital infrastructure layer</AccentText> for India&apos;s{' '}
                <AccentText>$300 billion</AccentText> logistics market
              </h1>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <p className="text-[17px] md:text-[20px] text-white/70 max-w-3xl leading-[1.7] font-[family-name:var(--font-montserrat)] font-light">
                The market is massive, the gap is real, and we own the niche. 50,000+ logistics SMEs have no digital presence today  we&apos;re building what they need.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MARKET OPPORTUNITY ── */}
      <section className="py-24 md:py-36 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp">
            <SectionLabel>The Opportunity</SectionLabel>
            <h2 className="mt-4 text-[clamp(28px,4vw,42px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.1] tracking-tight text-black">
              A market too <AccentText>large</AccentText> to ignore
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 border-t border-black/[0.06]">
            {METRICS.map((m, i) => (
              <StaggerItem key={i} className="border-b border-black/[0.06] md:border-r last:border-r-0 md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r">
                <div className="p-8 md:p-10">
                  <m.icon size={20} className="text-[#2A3AFF] mb-6" />
                  <p className="text-[clamp(28px,3vw,36px)] font-[family-name:var(--font-poppins)] font-semibold text-black leading-none mb-3">
                    {m.value}
                  </p>
                  <p className="text-[12px] uppercase tracking-[0.1em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
                    {m.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── STRATEGIC PATH ── */}
      <section className="py-24 md:py-36 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal style="fadeLeft">
                <SectionLabel>The Roadmap</SectionLabel>
                <h2 className="mt-4 text-[clamp(28px,4vw,42px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.1] tracking-tight text-black">
                  Agency to SaaS.<br />
                  <AccentText>Predictable</AccentText> path to scale.
                </h2>
                <p className="mt-6 text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)] font-light">
                  We don&apos;t build technology in a vacuum. We use service engagements to identify critical logistics pain points, then build scalable products to solve them.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-0">
                {MODEL_STEPS.map((step, i) => (
                  <ScrollReveal key={step.step} style="fadeUp" delay={i * 0.1}>
                    <div className="grid grid-cols-[48px_1fr] gap-6 py-8 border-t border-black/[0.06] first:border-t-0">
                      <span className="text-[20px] font-[family-name:var(--font-poppins)] font-semibold text-[#2A3AFF]/30 leading-none">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="text-[17px] font-[family-name:var(--font-poppins)] font-medium text-black mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[14px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)] font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTOR CTA ── */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal style="fadeUp">
            <SectionLabel>Connect</SectionLabel>
            <h2 className="mt-4 text-[clamp(32px,5vw,54px)] font-[family-name:var(--font-poppins)] font-semibold leading-[1.1] tracking-tight text-black mx-auto max-w-2xl">
              Let&apos;s discuss the <AccentText>opportunity</AccentText>
            </h2>
            <p className="mt-6 text-[16px] md:text-[18px] text-[#6B7280] leading-relaxed max-w-xl mx-auto font-[family-name:var(--font-montserrat)] font-light">
              Our investor deck is not publicly available. Share your credentials and we&apos;ll schedule a detailed conversation.
            </p>
            <div className="mt-12">
              <a
                href="mailto:nexgenelit@gmail.com?subject=Investor Inquiry  Nexgen Elit"
                className="inline-flex items-center gap-2 px-10 py-5 bg-[#2A3AFF] text-white text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#000000] group"
                style={{ borderRadius: 0 }}
              >
                Request Investor Deck <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.1em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
              Primary City Focus: Mumbai · Pune · Nagpur
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER DIVIDER ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="w-full h-px bg-black/[0.06]" direction="center" />
      </div>
    </main>
  );
}
