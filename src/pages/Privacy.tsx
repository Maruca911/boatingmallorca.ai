import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

export default function Privacy() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('privacy.title') + ' | Boating Mallorca'}
        description="Privacy policy for Boating Mallorca. Learn how we collect, use, and protect your personal data."
        canonical="https://boatingmallorca.ai/privacy"
      />

      <div className="pt-24 pb-16 bg-white">
        <div className="container-narrow">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-8">{t('privacy.title')}</h1>
          <div className="max-w-3xl prose-sm text-gray-700 space-y-6">
            <p className="text-sm text-gray-500">Last updated: February 2026</p>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">1. Who We Are</h2>
              <p>Boating Mallorca ("we", "our", "us") operates the website boatingmallorca.ai. We are a free matching service that connects users with boat rental, charter, tour, and marine service providers across Mallorca, Spain. We are committed to protecting and respecting your privacy in accordance with the General Data Protection Regulation (GDPR) and Spanish data protection laws.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">2. Data We Collect</h2>
              <p>We collect the following personal data when you use our matching service or contact us:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name and email address</li>
                <li>Phone number and WhatsApp contact (optional)</li>
                <li>Boating preferences (service type, boat type, location, group size, budget, dates)</li>
                <li>Any additional information you provide in special requests</li>
                <li>Newsletter subscription email address</li>
                <li>Technical data (IP address, browser type, pages visited) via analytics tools</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">3. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Match you with suitable boating service providers in Mallorca</li>
                <li>Communicate matched options via your preferred contact method (email or WhatsApp)</li>
                <li>Send newsletter communications if you have subscribed</li>
                <li>Respond to contact inquiries</li>
                <li>Improve our website and services through analytics</li>
              </ul>
              <p className="mt-2">The legal basis for processing your data is your consent (Article 6(1)(a) GDPR) when you submit a matching request, and our legitimate interest (Article 6(1)(f) GDPR) for website improvement and analytics.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">4. Data Sharing</h2>
              <p>We share your matching preferences and contact details with vetted boating service providers for the sole purpose of providing you with service options. We do not sell your personal data. We may share data with:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Boating service providers relevant to your request</li>
                <li>Our hosting and database provider (Supabase) for data storage</li>
                <li>Analytics providers (Google Analytics) for website improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">5. Data Storage and Security</h2>
              <p>Your data is stored securely using Supabase, with encryption at rest and in transit. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction. Data is retained for a maximum of 24 months unless you request earlier deletion.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">6. Your Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access: Request a copy of your personal data</li>
                <li>Rectification: Correct inaccurate personal data</li>
                <li>Erasure: Request deletion of your personal data</li>
                <li>Restriction: Restrict processing of your data</li>
                <li>Portability: Receive your data in a structured format</li>
                <li>Objection: Object to processing based on legitimate interest</li>
                <li>Withdraw Consent: Withdraw consent at any time</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, contact us at hello@boatingmallorca.ai.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">7. Cookies</h2>
              <p>We use essential cookies necessary for website functionality and analytics cookies (Google Analytics) to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">8. Contact</h2>
              <p>For any privacy-related inquiries, please contact us at:</p>
              <p>Email: hello@boatingmallorca.ai</p>
              <p>Location: Palma de Mallorca, Spain</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
