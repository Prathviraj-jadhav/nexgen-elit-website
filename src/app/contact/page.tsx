'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LineReveal,
} from '@/components/animations';
import { ArrowUpRight } from 'lucide-react';
import { UnicornStudioBackground } from '@/components/UnicornStudioBackground';
import Link from 'next/link';

/* ============================================
   FAQ DATA
   ============================================ */
const DISCOVERY_STEPS = [
  {
    number: '01',
    title: 'Nexgen Elit reviews what a corporate buyer currently sees',
    desc: 'Two minutes of preparation  we look at your digital footprint the way a corporate procurement team would.',
  },
  {
    number: '02',
    title: 'We understand specific corporate contracts, buyers, and markets you are targeting',
    desc: 'You tell us the contracts you want to win and the buyers you need to impress. We listen carefully.',
  },
  {
    number: '03',
    title: 'We confirm which product or service addresses the gap',
    desc: 'We map your specific situation to the right solution  or honestly tell you if we are not the right fit.',
  },
  {
    number: '04',
    title: 'Written scope in your inbox within twenty-four hours',
    desc: 'If there is a fit, you receive a clear, structured scope document. No ambiguity, no vague promises.',
  },
];

const ADDITIONAL_FAQS = [
  {
    question: 'How long does it take to get a website built?',
    answer:
      'Landing Page: 3–5 business days. Full Website: 7–10 business days. Premium Website: 12–15 business days. Timelines depend on content readiness and feedback speed.',
  },
  {
    question: 'What is the payment structure?',
    answer:
      'We follow a 40-30-30 milestone payment structure. 40% before work begins, 30% after design approval, and 30% on go-live. Clear milestones, no surprises.',
  },
  {
    question: 'What if I am not happy with the initial design?',
    answer:
      'You receive a design preview within seventy-two hours. If the direction is wrong, we provide a full advance refund  no questions asked. We would rather refund than deliver work you do not believe in.',
  },
  {
    question: 'Does Nexgen Elit work with logistics companies outside India?',
    answer:
      'Yes. Our primary focus is India  Mumbai, Pune, Nagpur, Delhi NCR, Bengaluru, Chennai, and Hyderabad. All project work is delivered remotely. We also work with logistics companies across India and are expanding to serve the broader Indian logistics ecosystem.',
  },
];

/* ============================================
   FORM INPUT COMPONENT
   ============================================ */
function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  rows,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  const inputClass =
    'w-full bg-transparent border-b border-black/[0.12] text-[#000000] text-sm font-[family-name:var(--font-montserrat)] placeholder:text-[#9CA3AF] focus:border-[#2A3AFF] focus:outline-none transition-colors duration-200 py-3 resize-none';

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)]">
        {label}
      </label>
      {rows ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={inputClass}
          style={{ borderRadius: 0 }}
        />
      ) : type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputClass} appearance-none`}
          style={{ borderRadius: 0 }}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Website">Website</option>
          <option value="Marketing retainer">Marketing retainer</option>
          <option value="Software">Software</option>
          <option value="Not sure yet  need advice">
            Not sure yet  need advice
          </option>
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={inputClass}
          style={{ borderRadius: 0 }}
        />
      )}
    </div>
  );
}

/* ============================================
   FAQ ITEM
   ============================================ */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/[0.08]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group cursor-pointer"
      >
        <h4 className="text-base md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] leading-snug group-hover:text-[#2A3AFF] transition-colors duration-200">
          {question}
        </h4>
        <span
          className="flex-shrink-0 mt-1 text-[#9CA3AF] transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="9"
              y1="3"
              x2="9"
              y2="15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="9"
              x2="15"
              y2="9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================
   CONTACT PAGE
   ============================================ */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    city: '',
    service: '',
    googleSearch: '',
    referral: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Could not connect to the server. Please check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-[#000000]">
      <Navbar transparent />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-12 md:pt-0 md:pb-0 hero-dark-text">


        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 w-full mt-12 md:mt-0">
          <div className="max-w-4xl">
            <ScrollReveal style="fadeUp" once={false}>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/10 backdrop-blur-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A3AFF]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium font-[family-name:var(--font-montserrat)]">
                  Contact
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.1} once={false}>
              <h1 className="text-[clamp(44px,5.5vw,68px)] font-[family-name:var(--font-poppins)] font-semibold leading-[1.05] tracking-tight text-white mb-8">
                Talk to Nexgen Elit  book a free twenty-minute discovery call, ask
                a question, or start a project
              </h1>
            </ScrollReveal>

            <ScrollReveal style="fadeUp" delay={0.2} once={false}>
              <p className="text-[15px] md:text-[17px] text-white/70 font-[family-name:var(--font-montserrat)] leading-[1.8] font-light max-w-3xl">
                Every conversation with Nexgen Elit starts the same way: we look at
                what a corporate buyer currently sees when they search for your
                company online, we understand what contracts or clients you are trying
                to win, and we tell you honestly whether what we do can help close
                that gap. If it can, we send a written scope within twenty-four
                hours. If it cannot, we say that directly and do not follow up with a
                sales sequence. There is no discovery call fee, no obligation to
                proceed, and no follow-up pressure after the call if the fit is not
                right.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" />
      </div>

      {/* ============================================
          CONTACT DETAILS + FORM
          ============================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* ─── LEFT COLUMN: Contact Details ─── */}
            <div>
              <ScrollReveal>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium mb-8">
                  Get in Touch
                </p>
              </ScrollReveal>

              <StaggerContainer staggerDelay={0.12} once className="flex flex-col gap-0">
                {/* WhatsApp */}
                <StaggerItem>
                  <div className="py-6 border-b border-black/[0.08]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-[#2A3AFF]" />
                      <span className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium">
                        WhatsApp (preferred)
                      </span>
                    </div>
                    <Link
                      href="https://wa.me/919307180782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-lg md:text-xl font-[family-name:var(--font-poppins)] font-medium text-[#000000] hover:text-[#2A3AFF] transition-colors duration-200 group"
                    >
                      +91 93071 80782
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </Link>
                    <p className="mt-2 text-sm text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed">
                      Available Monday to Saturday, 9am to 7pm IST
                    </p>
                    <p className="mt-1 text-sm text-[#9CA3AF] font-[family-name:var(--font-montserrat)] leading-relaxed">
                      WhatsApp is the fastest channel to reach us and book a call.
                    </p>
                  </div>
                </StaggerItem>

                {/* Email */}
                <StaggerItem>
                  <div className="py-6 border-b border-black/[0.08]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-black" />
                      <span className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium">
                        Email
                      </span>
                    </div>
                    <Link
                      href="mailto:nexgenelit@gmail.com"
                      className="inline-flex items-center gap-1.5 text-lg md:text-xl font-[family-name:var(--font-poppins)] font-medium text-[#000000] hover:text-[#2A3AFF] transition-colors duration-200 group"
                    >
                      nexgenelit@gmail.com
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </Link>
                    <p className="mt-2 text-sm text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed">
                      For proposals, scopes, partner enquiries, and job
                      applications.
                    </p>
                    <p className="mt-1 text-sm text-[#9CA3AF] font-[family-name:var(--font-montserrat)] leading-relaxed">
                      Response time: within twenty-four hours on working days.
                    </p>
                  </div>
                </StaggerItem>

                {/* Website */}
                <StaggerItem>
                  <div className="py-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-[#9CA3AF]" />
                      <span className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium">
                        Website
                      </span>
                    </div>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-lg md:text-xl font-[family-name:var(--font-poppins)] font-medium text-[#000000] hover:text-[#2A3AFF] transition-colors duration-200 group"
                    >
                      nexgenelit.com
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </Link>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* ─── RIGHT COLUMN: Contact Form ─── */}
            <ScrollReveal delay={0.2} once>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium mb-4">
                  Send us a message
                </p>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-poppins)] font-medium text-[#000000] leading-snug mb-3">
                  We will respond within twenty-four hours
                </h3>
                <p className="text-sm text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed mb-8">
                  Use this form to tell us about your company and what you are
                  trying to achieve. The more specific you are, the more useful our
                  first response will be. If you want a faster response, WhatsApp is
                  the right channel:{' '}
                  <Link
                    href="https://wa.me/919307180782"
                    className="text-[#2A3AFF] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 93071 80782
                  </Link>
                  .
                </p>

                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <FormInput
                      label="Your name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                    />
                    <FormInput
                      label="Company name"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Company name"
                    />
                    <FormInput
                      label="City"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                    />
                    <FormInput
                      label="Which service are you interested in?"
                      name="service"
                      type="select"
                      value={form.service}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="What is the one thing you want a buyer to find when they Google your company?"
                      name="googleSearch"
                      value={form.googleSearch}
                      onChange={handleChange}
                      rows={4}
                      placeholder="For example: your fleet tracking system, your safety record, your multi-modal capabilities..."
                    />
                    <FormInput
                      label="How did you hear about Nexgen Elit?"
                      name="referral"
                      value={form.referral}
                      onChange={handleChange}
                      placeholder="Google, LinkedIn, referral, etc."
                    />
                    {error && (
                      <p className="text-red-500 text-xs font-[family-name:var(--font-montserrat)] mt-2">
			{error}
		      </p>
		    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 w-full md:w-auto px-10 py-3.5 bg-[#2A3AFF] text-white text-sm font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#000000] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ borderRadius: 0 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                    className="py-12 border-t border-black/[0.08]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#2A3AFF] flex items-center justify-center" style={{ borderRadius: 0 }}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 8.5L6.5 12L13 4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000]">
                        Message sent
                      </h3>
                    </div>
                    <p className="text-sm text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed">
                      Thank you. We will respond within twenty-four hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" />
      </div>

      {/* ============================================
          DISCOVERY CALL FAQ
          ============================================ */}
      <section className="py-16 md:py-24 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium mb-4">
              The Discovery Call
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-poppins)] font-semibold leading-[1.15] tracking-tight text-[#000000] max-w-3xl mb-6">
              What happens on a Nexgen Elit discovery call?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-sm md:text-base text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed max-w-2xl mb-12">
              A free, twenty-minute call. No sales pressure. No commitment. Just an
              honest assessment of whether what we do can help you.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} once className="flex flex-col gap-0">
            {DISCOVERY_STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="py-8 border-t border-black/[0.08] first:border-t-0">
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="text-2xl md:text-3xl font-[family-name:var(--font-poppins)] font-semibold text-[#2A3AFF] leading-none flex-shrink-0 mt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-[family-name:var(--font-poppins)] font-medium text-[#000000] leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" />
      </div>

      {/* ============================================
          ADDITIONAL FAQS
          ============================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9CA3AF] font-[family-name:var(--font-montserrat)] font-medium mb-4">
              Frequently Asked
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-poppins)] font-semibold leading-[1.15] tracking-tight text-[#000000] max-w-3xl mb-12">
              Common questions
            </h2>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08} once className="flex flex-col gap-0">
            {ADDITIONAL_FAQS.map((faq) => (
              <StaggerItem key={faq.question}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
        <LineReveal className="h-px bg-black/[0.06] w-full" />
      </div>

      {/* ============================================
          BOTTOM CTA
          ============================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-poppins)] font-semibold leading-[1.15] tracking-tight text-[#000000] max-w-2xl mx-auto mb-4">
              Ready to start the conversation?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-base text-[#6B7280] font-[family-name:var(--font-montserrat)] leading-relaxed max-w-lg mx-auto mb-8">
              The fastest way to reach us is WhatsApp. We respond within minutes
              during business hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://wa.me/919307180782"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2A3AFF] text-white text-sm font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#000000]"
                style={{ borderRadius: 0 }}
              >
                WhatsApp Us <ArrowUpRight size={14} />
              </Link>
              <Link
                href="mailto:nexgenelit@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-black/[0.15] text-[#000000] text-sm font-[family-name:var(--font-montserrat)] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:border-[#2A3AFF] hover:text-[#2A3AFF]"
                style={{ borderRadius: 0 }}
              >
                Send an Email <ArrowUpRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
