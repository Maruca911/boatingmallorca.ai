import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

export default function Terms() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('terms.title') + ' | Boating Mallorca'}
        description="Terms of service for the Boating Mallorca free matching service. Understand how our service works and your rights."
        canonical="https://boatingmallorca.ai/terms"
      />

      <div className="pt-24 pb-16 bg-white">
        <div className="container-narrow">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-8">{t('terms.title')}</h1>
          <div className="max-w-3xl prose-sm text-gray-700 space-y-6">
            <p className="text-sm text-gray-500">Last updated: February 2026</p>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">1. About Our Service</h2>
              <p>Boating Mallorca ("we", "our", "us") operates a free matching service at boatingmallorca.ai that connects users with boat rental, charter, tour, and marine service providers in Mallorca, Spain. By using our website and services, you agree to these Terms of Service.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">2. Free Matching Service</h2>
              <p>Our matching service is provided free of charge to users. We curate personalized options based on your submitted preferences and deliver them via your preferred contact method within 24 hours. We act as an intermediary and are not a direct provider of boating services.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">3. Third-Party Providers</h2>
              <p>The boating services, rentals, charters, and tours presented through our matching service are provided by independent third-party businesses. While we vet providers for quality and reliability, we are not responsible for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The quality, safety, or availability of third-party services</li>
                <li>Pricing or contractual terms between you and the provider</li>
                <li>Any disputes arising from bookings made with providers</li>
                <li>Accuracy of provider descriptions or claims</li>
              </ul>
              <p className="mt-2">Any booking you make is directly with the provider, subject to their own terms and conditions.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">4. User Responsibilities</h2>
              <p>When using our service, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate and truthful information in your matching request</li>
                <li>Comply with all applicable maritime laws and regulations</li>
                <li>Hold appropriate licenses and qualifications for any boating activities</li>
                <li>Not misuse our service for spam, fraudulent, or illegal purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">5. Intellectual Property</h2>
              <p>All content on boatingmallorca.ai, including text, images, design, and code, is owned by or licensed to Boating Mallorca. You may not reproduce, distribute, or create derivative works without our written permission.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">6. Limitation of Liability</h2>
              <p>Boating Mallorca provides its matching service on an "as is" basis. We make no warranties regarding the completeness, accuracy, or reliability of our service. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from use of our service.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">7. Governing Law</h2>
              <p>These Terms are governed by the laws of Spain. Any disputes shall be subject to the jurisdiction of the courts of Palma de Mallorca, Balearic Islands, Spain.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">8. Contact</h2>
              <p>For any questions about these Terms, contact us at hello@boatingmallorca.ai.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
