'use client';

import { Navbar } from '@/components/Navbar';
import { FadeIn } from '@/components/animations';

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#08080A] text-[#F8F9FA]">
      <Navbar />

      {/* Header */}
      <section className="py-24 md:py-32 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B8D97] mb-4">Legal</p>
              <h1>Terms &amp; Conditions</h1>
              <p className="mt-4 text-sm text-[#8B8D97]">Last updated: January 2026</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#111114] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">1. Acceptance of Terms</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    These Terms and Conditions (&quot;Terms&quot;) govern your use of the website and services provided by Nexgen Elit (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website, engaging our services, or entering into a service agreement with us, you agree to be bound by these Terms.
                  </p>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    If you do not agree with any part of these Terms, you must discontinue use of our website and services immediately. We reserve the right to modify these Terms at any time, and continued use of our services after modifications constitutes acceptance of the updated Terms.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">2. Services Description</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    Nexgen Elit provides logistics-dedicated digital technology services including, but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose mb-3">
                    <li>Web development and design for logistics companies</li>
                    <li>Mobile application development (iOS and Android)</li>
                    <li>Custom software solutions and enterprise systems</li>
                    <li>CRM system implementation and customization</li>
                    <li>ERP solution development and integration</li>
                    <li>Marketing system design and automation</li>
                    <li>AI automation and LLM application development</li>
                    <li>Technology consulting and digital transformation advisory</li>
                  </ul>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    The specific scope, deliverables, timelines, and fees for each engagement will be outlined in a separate service agreement or statement of work.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">3. Client Obligations</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">As a client of Nexgen Elit, you agree to:</p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li>Provide accurate and complete information necessary for the delivery of services</li>
                    <li>Respond to requests for feedback, approvals, and content in a timely manner</li>
                    <li>Ensure that all materials, content, and data provided to us do not infringe upon third-party rights</li>
                    <li>Make payments in accordance with the agreed-upon schedule and terms</li>
                    <li>Designate a primary point of contact for project communication</li>
                    <li>Comply with all applicable laws and regulations in your use of our services</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">4. Intellectual Property</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    All intellectual property rights in the deliverables created by Nexgen Elit shall be governed by the specific terms outlined in the applicable service agreement. Unless otherwise agreed in writing:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li><strong className="text-[#F8F9FA]">Client Materials:</strong> You retain all rights to any content, data, and materials you provide to us for the purpose of service delivery.</li>
                    <li><strong className="text-[#F8F9FA]">Deliverables:</strong> Upon full payment, intellectual property rights to custom-developed deliverables are transferred to you as specified in the service agreement.</li>
                    <li><strong className="text-[#F8F9FA]">Pre-existing IP:</strong> Nexgen Elit retains all rights to its pre-existing tools, frameworks, libraries, and methodologies used in delivering services.</li>
                    <li><strong className="text-[#F8F9FA]">Portfolio Rights:</strong> Unless expressly prohibited by the service agreement, Nexgen Elit may reference the engagement and showcase the deliverables in its portfolio and marketing materials.</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">5. Payment Terms</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    Payment terms are specified in the individual service agreement. Unless otherwise stated:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li>Invoices are issued according to the project milestones outlined in the service agreement</li>
                    <li>Payment is due within 15 days of invoice issuance unless otherwise agreed</li>
                    <li>Late payments may incur interest charges at a rate of 1.5% per month on the outstanding balance</li>
                    <li>We reserve the right to suspend services for accounts with overdue payments</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">6. Confidentiality</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, technical specifications, financial information, client lists, and any other information marked as confidential. Confidentiality obligations shall survive the termination of the service agreement for a period of two (2) years, unless otherwise specified.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">7. Limitation of Liability</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    To the maximum extent permitted by applicable law:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li>Nexgen Elit shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services.</li>
                    <li>Our total liability for any claim arising out of or related to our services shall not exceed the total fees paid by you for the specific engagement giving rise to the claim.</li>
                    <li>We do not guarantee specific business outcomes, including but not limited to revenue growth, lead generation, or search engine rankings.</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">8. Termination</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    Either party may terminate a service engagement in accordance with the termination provisions specified in the applicable service agreement. In the absence of specific provisions:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li>Either party may terminate with 30 days&apos; written notice</li>
                    <li>Upon termination, you are responsible for payment of all services rendered up to the termination date</li>
                    <li>Nexgen Elit will provide a reasonable transition of deliverables upon termination and full payment</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">9. Website Use</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">When using our website, you agree not to:</p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li>Use the website for any unlawful purpose or in violation of any applicable laws</li>
                    <li>Attempt to gain unauthorized access to any portion of the website or its systems</li>
                    <li>Reproduce, distribute, or modify any content from the website without our express written permission</li>
                    <li>Use any automated systems, bots, or scrapers to access the website</li>
                    <li>Interfere with or disrupt the website&apos;s functionality or servers</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">10. Governing Law and Dispute Resolution</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms or our services shall be resolved through good-faith negotiation first. If negotiation fails, disputes shall be submitted to binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the arbitration proceedings conducted in Mumbai, India.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">11. Contact Information</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    For any questions regarding these Terms and Conditions, please contact us at:
                  </p>
                  <div className="border border-white/[0.08] rounded-xl p-5 bg-[#08080A]">
                    <p className="text-base text-[#F8F9FA] mb-1">Nexgen Elit</p>
                    <a href="mailto:hello@nexgenelit.com" className="text-sm text-[#6B7BFF] hover:text-[#8B9AFF] transition-colors">hello@nexgenelit.com</a>
                    <p className="text-xs text-[#8B8D97] mt-2">India (Operating Nationwide)</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </main>
  );
}
