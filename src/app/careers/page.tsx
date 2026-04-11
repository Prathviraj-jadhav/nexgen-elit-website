'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal, StaggerContainer, StaggerItem, LineReveal } from '@/components/animations';
import { ArrowUpRight, ChevronDown, Mail } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';
import Link from 'next/link';

/* ============================================
   SCANDINAVIAN CAREERS PAGE
   ============================================ */

/* ── Role data ── */
interface RoleData {
  id: number;
  title: string;
  location: string;
  type: string;
  tags: string[];
  brief?: string;
  description: string;
}

const DETAILED_ROLES: RoleData[] = [
  {
    id: 1,
    title: 'Logistics Content Writer and SEO Specialist',
    location: 'Remote, India',
    type: 'Part-time to Full-time',
    tags: ['Content', 'SEO', 'B2B'],
    description:
      'You will write copy that sounds like it comes from inside the logistics industry  not from an agency guessing what logistics companies might want to read. This means understanding FTL, LTL, POD, freight billing, route optimization, fleet management, and warehouse operations at a functional level.\n\nYou will own on-page SEO end to end: keyword research, content calendars, meta optimization, internal linking, and performance tracking. This is not a role where you write and hand off. You own outcomes.\n\nRequired: Proven B2B content experience with measurable results. Strong writing that adapts to industry voice.\n\nPreferred: Background in logistics, freight, supply chain, or transportation. Familiarity with logistics terminology and operations.',
  },
  {
    id: 2,
    title: 'Web Designer  Logistics Industry Focus',
    location: 'Remote, India',
    type: 'Project-based to Full-time',
    tags: ['Design', 'Figma', 'B2B'],
    description:
      'You will design websites and digital assets for logistics founders and procurement officers  people who are typically 45+ years old, decision-makers, and value clarity over cleverness. Your designs must build trust, not just look good.\n\nYou will work in Figma, structure information architecture for B2B credibility, and create layouts that communicate capability at first glance. This means understanding how a procurement manager evaluates a vendor website and designing for that evaluation process.\n\nRequired: A B2B design portfolio demonstrating clarity, structure, and trust-building design decisions.\n\nPreferred: Experience designing for logistics, manufacturing, or industrial clients.',
  },
  {
    id: 3,
    title: 'Business Development Associate',
    location: 'Mumbai, Pune, or Nagpur  Field Role',
    type: 'Full-time',
    tags: ['BD', 'Sales', 'Field'],
    description:
      'You will identify logistics company founders and decision-makers, reach out via WhatsApp and LinkedIn, and book 20-minute discovery calls. Target: 30 new contacts per day with a structured follow-up process.\n\nThis role starts commission-heavy and transitions to base + commission as you build a consistent pipeline. You are not selling a product  you are opening conversations with logistics founders who need digital infrastructure.\n\nRequired: B2B sales experience with demonstrable outreach results.\n\nPreferred: Existing network in the logistics or supply chain industry.',
  },
  {
    id: 4,
    title: 'Logistics Software Developer',
    location: 'Remote, India',
    type: 'Project-based',
    tags: ['Development', 'Web Apps', 'WhatsApp API'],
    description:
      'You will build web applications, WhatsApp tracking bots, freight billing systems, TMS dashboards, and mobile interfaces optimized for mid-range Android devices. Work includes WhatsApp Business API integrations, responsive admin dashboards, and real-time tracking interfaces.\n\nThe tech stack is chosen per project based on requirements  you should be comfortable working across different technologies rather than being locked into one framework.\n\nRequired: A portfolio of shipped applications (not just prototypes or course projects).\n\nPreferred: Experience in logistics, supply chain, or transportation software development.',
  },
];

const BRIEF_ROLES = [
  {
    id: 5,
    title: 'Sales Manager',
    brief:
      "We're also looking for experienced sales managers who can lead BD efforts and build a sales pipeline from scratch.",
  },
  {
    id: 6,
    title: 'Customer Relationship Consultant',
    brief:
      'For professionals who excel at managing ongoing client relationships and can help logistics founders get maximum value from their digital investment.',
  },
  {
    id: 7,
    title: 'SDR / BDR',
    brief:
      'Sales development roles for those who can identify qualified logistics company prospects and book discovery meetings at scale.',
  },
  {
    id: 8,
    title: 'Interns',
    brief:
      'We offer internships for motivated individuals who want to learn about the intersection of logistics and digital technology.',
  },
];

/* ── What We're Not list ── */
const NOT_ITEMS = [
  'Not a company that values busyness over output',
  'Not where seniority is measured in years rather than results',
  'Not where "we have always done it this way" is acceptable',
  'Not where someone is hired before the role is clearly defined',
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
    >
      {children}
    </h2>
  );
}

function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2A3AFF]">{children}</span>;
}

/* ── Detailed Role Card ── */
function RoleCard({ role, index }: { role: RoleData; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <StaggerItem y={20}>
      <div className="border border-black/[0.08] bg-white hover:border-black/[0.15] transition-colors duration-300">
        {/* Card header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left px-5 md:px-8 py-6 md:py-7 flex flex-col gap-4 cursor-pointer"
        >
          {/* Top row: number + location + type */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-[11px] text-[#9CA3AF] font-mono w-5">
                {String(role.id).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] border border-black/[0.08] px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              className="flex-shrink-0 ml-3"
            >
              <ChevronDown size={16} className="text-[#9CA3AF]" />
            </motion.div>
          </div>

          {/* Title + location */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-[17px] md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] leading-snug">
              {role.title}
            </h3>
            <span className="text-[12px] text-[#6B7280] font-[family-name:var(--font-montserrat)] whitespace-nowrap">
              {role.location} · {role.type}
            </span>
          </div>
        </button>

        {/* Expandable description */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-8 pb-6 md:pb-8 border-t border-black/[0.06]">
                <div className="pt-5 md:pt-6">
                  {role.description.split('\n\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]"
                      style={i > 0 ? { marginTop: '12px' } : undefined}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StaggerItem>
  );
}

/* ── Brief Role Card ── */
function BriefRoleCard({ role }: { role: { id: number; title: string; brief: string } }) {
  return (
    <StaggerItem y={16}>
      <div className="flex items-start gap-4 py-5 border-b border-black/[0.06]">
        <span className="text-[11px] text-[#9CA3AF] font-mono w-5 pt-0.5 flex-shrink-0">
          {String(role.id).padStart(2, '0')}
        </span>
        <div>
          <h4 className="text-[15px] md:text-base font-[family-name:var(--font-poppins)] font-medium text-[#000000] mb-1.5">
            {role.title}
          </h4>
          <p className="text-[14px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
            {role.brief}
          </p>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ============================================
   MAIN CAREERS PAGE
   ============================================ */

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Navbar transparent />

      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-12 md:pt-0 md:pb-0 hero-dark-text">


        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 w-full mt-12 md:mt-0">
          <div className="max-w-4xl">
            <ScrollReveal style="fadeUp" once={false}>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
                <SectionLabel>Careers</SectionLabel>
              </div>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <h1 className="text-[clamp(44px,6vw,72px)] font-[family-name:var(--font-poppins)] font-semibold leading-[1.05] tracking-tight text-white mb-4">
                Build the digital infrastructure of India&apos;s logistics industry
              </h1>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.15} once={false}>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-[family-name:var(--font-poppins)] font-medium leading-[1.12] tracking-tight text-white mb-8">
                Careers at Nexgen Elit
              </h2>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <div className="space-y-6 max-w-3xl">
                <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.7] font-[family-name:var(--font-montserrat)] font-light">
                  Nexgen Elit is not a general digital agency that happens to have a few logistics clients. It is a company that made a deliberate decision to serve one industry  and only one industry  because we believe the depth of niche expertise compounds differently than breadth. Every line of copy we write, every interface we design, every system we build is shaped by an understanding of how logistics companies operate, how they win contracts, and how they get selected by procurement teams.
                </p>
                <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.7] font-[family-name:var(--font-montserrat)] font-light">
                  We are early-stage, which means the work is less defined, the systems are still being built, and your contribution has an outsized impact. You will not be a cog in a machine  you will be building the machine. The logistics technology stack for India does not fully exist yet, and we are building a significant part of it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          CURRENT OPENINGS
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Open Positions</SectionLabel>
            <SectionHeading className="mt-4">
              Current openings at Nexgen Elit <AccentText>(2026)</AccentText>
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <p className="mt-5 text-[15px] text-[#6B7280] leading-relaxed max-w-xl font-[family-name:var(--font-montserrat)]">
              We are building a team of people who care about logistics and want to build technology that matters for an industry that moves the country.
            </p>
          </ScrollReveal>

          {/* Detailed role cards */}
          <div className="mt-12 md:mt-16 flex flex-col gap-4">
            <StaggerContainer staggerDelay={0.08} once={false}>
              {DETAILED_ROLES.map((role, i) => (
                <RoleCard key={role.id} role={role} index={i} />
              ))}
            </StaggerContainer>
          </div>

          {/* Brief roles */}
          <div className="mt-12 md:mt-16">
            <ScrollReveal style="fadeUp" once={false}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] font-medium mb-6">
                Additional roles we are hiring for
              </p>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.07} once={false}>
              {BRIEF_ROLES.map((role) => (
                <BriefRoleCard key={role.id} role={role} />
              ))}
            </StaggerContainer>
          </div>

          <ScrollReveal style="fadeUp" delay={0.2} once={false}>
            <div className="mt-14 md:mt-20 border-l-2 border-[#2A3AFF] pl-5 md:pl-6 max-w-lg">
              <p className="text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                Don&apos;t see a role that fits? If you believe you can add value to what we&apos;re building, send us your profile anyway. The best hires don&apos;t always come from job postings.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          WHAT WORKING AT NEXGEN ELIT LOOKS LIKE
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionLabel>Culture</SectionLabel>
            <SectionHeading className="mt-4">
              What working at Nexgen Elit <AccentText>looks like</AccentText>
            </SectionHeading>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 flex flex-col gap-0 max-w-2xl">
            <StaggerContainer staggerDelay={0.1} once={false}>
              {/* Remote-first */}
              <StaggerItem y={18}>
                <div className="py-6 md:py-8 border-t border-black/[0.06]">
                  <h3 className="text-[16px] md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] mb-3">
                    Remote-first
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                    We are a remote-first company. Communication happens over WhatsApp and email  not endless Slack channels or daily video calls. We believe in written communication because it forces clarity, creates documentation, and respects asynchronous time zones.
                  </p>
                </div>
              </StaggerItem>

              {/* Notion */}
              <StaggerItem y={18}>
                <div className="py-6 md:py-8 border-t border-black/[0.06]">
                  <h3 className="text-[16px] md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] mb-3">
                    Notion as the operating system
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                    Everything lives in Notion  project briefs, content calendars, delivery timelines, SOPs, and internal documentation. If it&apos;s not in Notion, it doesn&apos;t exist. This is how we maintain structure without bureaucracy.
                  </p>
                </div>
              </StaggerItem>

              {/* No daily standups */}
              <StaggerItem y={18}>
                <div className="py-6 md:py-8 border-t border-black/[0.06]">
                  <h3 className="text-[16px] md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] mb-3">
                    No daily standups
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                    We don&apos;t believe in performing productivity through meetings. You are expected to manage your time, communicate blockers proactively, and deliver results. We review progress weekly, not daily.
                  </p>
                </div>
              </StaggerItem>

              {/* Weekly reviews */}
              <StaggerItem y={18}>
                <div className="py-6 md:py-8 border-t border-black/[0.06]">
                  <h3 className="text-[16px] md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] mb-3">
                    Weekly reviews
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                    Once a week, we review what shipped, what&apos;s stuck, and what needs to change. These reviews are short, structured, and outcome-focused. Not status updates  progress checks.
                  </p>
                </div>
              </StaggerItem>

              {/* Feedback */}
              <StaggerItem y={18}>
                <div className="py-6 md:py-8 border-t border-black/[0.06]">
                  <h3 className="text-[16px] md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] mb-3">
                    Feedback is direct
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                    We don&apos;t sugarcoat feedback, and we don&apos;t wrap criticism in three layers of politeness. If something isn&apos;t working, you will hear about it quickly and clearly. We expect the same from you  toward us, toward the work, and toward the process. Directness is not rudeness. It&apos;s respect for your time and intelligence.
                  </p>
                </div>
              </StaggerItem>

              {/* Small team */}
              <StaggerItem y={18}>
                <div className="py-6 md:py-8 border-t border-black/[0.06]">
                  <h3 className="text-[16px] md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] mb-3">
                    The team is small
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                    We are intentionally small. Small teams move faster, communicate more clearly, and avoid the coordination overhead that kills productivity in larger organizations. Your work will not get lost in a department  it will ship, and it will matter. You will have visibility into the full picture, not just your piece of it.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          WHAT NEXGEN ELIT IS NOT
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <ScrollReveal style="fadeLeft" once={false}>
                <SectionLabel>Honesty</SectionLabel>
                <SectionHeading className="mt-4">
                  What Nexgen Elit <AccentText>is not</AccentText>
                </SectionHeading>
                <p className="mt-5 text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                  We think it&apos;s more useful to tell you what we&apos;re not than to sell you on what we are.
                </p>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7">
              <StaggerContainer staggerDelay={0.1} once={false}>
                {NOT_ITEMS.map((item, i) => (
                  <StaggerItem key={item} y={16}>
                    <div className="py-5 md:py-6 border-t border-black/[0.06]">
                      <div className="flex items-start gap-4">
                        <span className="text-[10px] text-[#9CA3AF] font-mono w-4 pt-1 flex-shrink-0">
                          0{i + 1}
                        </span>
                        <p className="text-[15px] md:text-base text-[#000000] font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <ScrollReveal style="blurIn" delay={0.25} once={false}>
                <div className="mt-8 border-l-2 border-[#2A3AFF] pl-5 md:pl-6">
                  <p className="text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                    If any of these describe the kind of company you want to work for, Nexgen Elit will not be the right fit. And that&apos;s okay.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          HOW TO APPLY
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-6 lg:col-span-5">
              <ScrollReveal style="fadeLeft" once={false}>
                <SectionLabel>Apply</SectionLabel>
                <SectionHeading className="mt-4">
                  How to <AccentText>apply</AccentText>
                </SectionHeading>
              </ScrollReveal>

              <ScrollReveal style="fadeLeft" delay={0.1} once={false}>
                <div className="mt-8 md:mt-10 border border-black/[0.08] bg-white">
                  <div className="px-5 md:px-8 py-5 border-b border-black/[0.06] bg-[#F7F8FA]">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium">Step 1</span>
                  </div>
                  <div className="px-5 md:px-8 py-5 border-b border-black/[0.04]">
                    <p className="text-[14px] md:text-[15px] text-[#000000] font-medium mb-2">
                      Send an email to
                    </p>
                    <a
                      href="mailto:nexgenelit@gmail.com"
                      className="inline-flex items-center gap-2 text-[15px] text-[#2A3AFF] font-medium font-[family-name:var(--font-montserrat)] hover:underline underline-offset-4 transition-colors"
                    >
                      <Mail size={15} />
                      nexgenelit@gmail.com
                    </a>
                  </div>
                  <div className="px-5 md:px-8 py-5">
                    <p className="text-[14px] md:text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                      Subject line:{' '}
                      <span className="text-[#000000] font-medium font-mono text-[13px]">
                        Application  [Role Name]
                      </span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-6 lg:col-span-7">
              <ScrollReveal style="fadeRight" delay={0.1} once={false}>
                <div className="md:border-l md:border-black/[0.06] md:pl-10 lg:pl-12">
                  <p className="text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)] mb-8">
                    Include these three things in your email:
                  </p>

                  <StaggerContainer staggerDelay={0.08} once={false}>
                    <StaggerItem y={16}>
                      <div className="flex items-start gap-4 py-5 border-t border-black/[0.06]">
                        <span className="text-[10px] text-[#9CA3AF] font-mono w-4 pt-1 flex-shrink-0">01</span>
                        <div>
                          <p className="text-[15px] text-[#000000] font-medium mb-1">
                            A description of your relevant work
                          </p>
                          <p className="text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                            What you&apos;ve done, what you&apos;re good at, and what outcomes you&apos;ve driven. Be specific  links, numbers, and context help.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem y={16}>
                      <div className="flex items-start gap-4 py-5 border-t border-black/[0.06]">
                        <span className="text-[10px] text-[#9CA3AF] font-mono w-4 pt-1 flex-shrink-0">02</span>
                        <div>
                          <p className="text-[15px] text-[#000000] font-medium mb-1">
                            One example of your best work
                          </p>
                          <p className="text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                            A link, a file, a write-up  something that demonstrates your capability better than any resume bullet point can.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem y={16}>
                      <div className="flex items-start gap-4 py-5 border-t border-black/[0.06]">
                        <span className="text-[10px] text-[#9CA3AF] font-mono w-4 pt-1 flex-shrink-0">03</span>
                        <div>
                          <p className="text-[15px] text-[#000000] font-medium mb-1">
                            One paragraph: Why logistics?
                          </p>
                          <p className="text-[13px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                            Not why Nexgen Elit  why this industry. We want to understand if you see what we see.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  <ScrollReveal style="blurIn" delay={0.2} once={false}>
                    <div className="mt-10 border-l-2 border-[#2A3AFF] pl-5 md:pl-6">
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-[family-name:var(--font-montserrat)]">
                        We respond to every application within{' '}
                        <span className="text-[#000000] font-medium">48 hours</span>.
                        If you haven&apos;t heard back, check your spam  or write again.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider delay={0} />

      {/* ═══════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal style="fadeUp" once={false}>
            <SectionHeading className="mx-auto">
              Ready to build something that <AccentText>matters</AccentText>?
            </SectionHeading>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.1} once={false}>
            <p className="mt-6 text-[15px] md:text-base text-[#6B7280] leading-relaxed max-w-lg mx-auto font-[family-name:var(--font-montserrat)]">
              Logistics is the backbone of India&apos;s economy. The technology that supports it is still being built. If you want to be part of that  we should talk.
            </p>
          </ScrollReveal>

          <ScrollReveal style="fadeUp" delay={0.2} once={false}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:nexgenelit@gmail.com?subject=Application%20%20General%20Interest"
                className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-[#2A3AFF] font-[family-name:var(--font-montserrat)]"
                style={{
                  backgroundColor: '#2A3AFF',
                  color: '#fff',
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.borderColor = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#2A3AFF';
                  e.currentTarget.style.borderColor = '#2A3AFF';
                }}
              >
                Send Your Application <ArrowUpRight size={13} />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 border border-black/[0.12] text-[#000000] hover:border-black/[0.25] font-[family-name:var(--font-montserrat)]"
                style={{ borderRadius: 0 }}
              >
                Back to Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
