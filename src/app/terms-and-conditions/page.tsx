import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center uppercase">
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <p className="text-gray-600 leading-relaxed mb-8 text-center">
            The following Terms & Conditions apply to the use of this Website.
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Copyright</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content appearing on this Web site is the property of Awn-Guard. All rights reserved. As a user, you are authorized only to view, copy, print, and distribute documents on this Web site so long as (1) the document is used for informational purposes only, and (2) any copy of the document (or portion thereof) includes the following copyright notice: Copyright © 2021 Awn-Guard. All rights reserved.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Trademarks</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All brand, product, service, and process names appearing on this Web site are trademarks of their respective holders. Reference to or use of a product, service, or process does not imply recommendation, approval, affiliation, or sponsorship of that product, service, or process by Awn-Guard. Nothing contained herein shall be construed as conferring by implication, estoppel, or otherwise any license or right under any patent, copyright, trademark, or other intellectual property rights of Awn-Guard or any third party, except as expressly granted herein.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Awn-Guard's use of personal information that you may submit to Awn-Guard through this Web site is governed by the <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Awn-Guard privacy policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Shop Hours</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer service is available as defined on the <Link href="/#contact" className="text-primary hover:underline font-medium">Contact</Link> page of this Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Miscellaneous</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>VOID WHERE PROHIBITED:</strong> Although the information on this Web site is accessible worldwide, not all products or services discussed on this Web site are available to all persons or in all geographic locations or jurisdictions. Awn-Guard and the advertisers each reserve the right to limit the provision of their products or services to any person, geographic area, or jurisdiction they so desire and to limit the quantities of any products or services that they provide. Any offer for any product or service made in the materials on this Web site is void where prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>GOVERNING LAW:</strong> In the event of litigation both parties agree that the Law of California shall apply and both parties consent to the jurisdiction of the state courts of San Diego, California, or in the event of diversity of citizenship, the United States District Court for the San Diego. Both parties expressly waive a trial by jury.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>MISCELLANEOUS:</strong> The Terms and Conditions constitute the entire agreement between you and Awn-Guard with respect to this Web site. The Terms and Conditions supersede all prior or contemporaneous communications and proposals, whether electronic, oral or written between you and Awn-Guard with respect to this Web site. No modification of the Terms and Conditions shall be effective unless it is authorized by Awn-Guard. If any provision of the Terms and Conditions is found to be contrary to law, then such provision(s) shall be constructed in a manner to closely reflect, as much as possible, the intentions of the parties, with the other provisions remaining in full force and effect.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For any other information email <a href="mailto:contact@awnguard.com" className="text-primary hover:underline font-medium">contact@awnguard.com</a>
              </p>
            </section>

            <p className="text-sm text-gray-500 text-center mt-12">
              Last Updated: October 26, 2025
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
