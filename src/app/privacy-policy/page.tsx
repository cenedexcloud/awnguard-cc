import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center uppercase">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At AwnGuard, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you visit our website. We adhere to applicable privacy laws and strive to be transparent about our data practices. Your trust is important to us, and we are dedicated to ensuring that your information is handled with care and security.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This privacy notice discloses the privacy practices for AwnGuard. This privacy notice applies solely to information collected by this website. It will notify you of the following:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-4">
                <li>What personally identifiable information is collected from you through the website, how it is used, and with whom it may be shared.</li>
                <li>What choices are available to you regarding the use of your data.</li>
                <li>The security procedures in place to protect against the misuse of your information.</li>
                <li>How you can correct any inaccuracies in the information.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information Collection, Use, and Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give such as your name, phone number, email address and any other details you disclose using our various contact forms. We will not sell or rent this information to anyone; we indirectly share your information with our website development partners, and outside marketing contractors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order or communicate with you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Your Access to and Control Over Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may opt-out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>See what data we have about you if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>Express any concern you have about our use of your data.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you feel that we are not abiding by this privacy policy, you should contact us immediately via our <Link href="/#contact" className="text-primary hover:underline font-medium">Contact</Link> page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies</h2>
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
