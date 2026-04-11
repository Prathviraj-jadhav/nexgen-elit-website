'use client';

import { Navbar } from '@/components/Navbar';
import { FadeIn } from '@/components/animations';

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#08080A] text-[#F8F9FA]">
      <Navbar />

      {/* Header */}
      <section className="py-24 md:py-32 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#8B8D97] mb-4">Legal</p>
              <h1>Privacy Policy</h1>
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
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">1. Introduction</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    Nexgen Elit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                  </p>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">2. Information We Collect</h2>
                  <h4 className="text-base mb-2 text-[#F8F9FA]">Personal Information</h4>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    We may collect personal information that you voluntarily provide to us when you contact us, request a consultation, subscribe to our newsletter, or engage our services. This includes:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose mb-4">
                    <li>Name and contact information (email address, phone number, company name)</li>
                    <li>Business information related to logistics operations</li>
                    <li>Project requirements and communication history</li>
                    <li>Payment and billing information when applicable</li>
                  </ul>
                  <h4 className="text-base mb-2 text-[#F8F9FA]">Automatically Collected Information</h4>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    When you visit our website, we may automatically collect certain information about your device and usage, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This information is collected through cookies and similar tracking technologies.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">3. How We Use Your Information</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">We use the information we collect for the following purposes:</p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li>To provide, operate, and maintain our web development, app development, and digital technology services</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                    <li>To improve our website, services, and user experience</li>
                    <li>To analyze website usage and trends for business intelligence</li>
                    <li>To protect against fraud and ensure the security of our services</li>
                    <li>To comply with legal obligations and enforce our agreements</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">4. Information Sharing and Disclosure</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li><strong className="text-[#F8F9FA]">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, subject to confidentiality agreements.</li>
                    <li><strong className="text-[#F8F9FA]">Legal Requirements:</strong> We may disclose information when required to do so by law or in response to valid requests by public authorities.</li>
                    <li><strong className="text-[#F8F9FA]">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                    <li><strong className="text-[#F8F9FA]">With Your Consent:</strong> We may share your information with your explicit consent for any other purpose.</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">5. Data Security</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, secure hosting infrastructure, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">6. Cookies and Tracking Technologies</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly. We use cookies for website analytics, remembering your preferences, and improving our services.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">7. Your Rights</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">You have the right to:</p>
                  <ul className="list-disc list-inside text-sm text-[#8B8D97] leading-loose">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information (subject to legal obligations)</li>
                    <li>Withdraw consent for data processing where applicable</li>
                    <li>Opt out of marketing communications at any time</li>
                  </ul>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">8. Third-Party Links</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">9. Children&apos;s Privacy</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">10. Changes to This Policy</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8]">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after any such changes constitutes your acceptance of the updated policy.
                  </p>
                </div>

                <div className="border-t border-white/[0.08]" />

                <div>
                  <h2 className="text-xl mb-3 text-[#F8F9FA]">11. Contact Us</h2>
                  <p className="text-sm text-[#8B8D97] leading-[1.8] mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
