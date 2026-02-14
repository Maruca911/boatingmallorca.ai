import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

export default function Imprint() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('imprint.title') + ' | Boating Mallorca'}
        description="Legal imprint and company information for Boating Mallorca, as required by Spanish and German law."
        canonical="https://boatingmallorca.ai/imprint"
      />

      <div className="pt-24 pb-16 bg-white">
        <div className="container-narrow">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-8">{t('imprint.title')}</h1>
          <div className="max-w-3xl prose-sm text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">Company Information</h2>
              <p>Boating Mallorca</p>
              <p>Palma de Mallorca, Balearic Islands, Spain</p>
              <p>Email: hello@boatingmallorca.ai</p>
              <p>Website: boatingmallorca.ai</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">Responsible for Content</h2>
              <p>Boating Mallorca is responsible for the content of this website in accordance with applicable laws. The editorial content, including blog articles, guides, and service descriptions, is produced by the Boating Mallorca editorial team.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">Disclaimer</h2>
              <p>While every effort is made to ensure the accuracy of the information provided on this website, Boating Mallorca makes no warranties or representations regarding the completeness or accuracy of the content. External links to third-party websites are provided for convenience; we are not responsible for the content of these external sites.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy-800 mt-8 mb-3">Dispute Resolution</h2>
              <p>The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. We are not obligated to participate in dispute resolution proceedings before a consumer arbitration board, but we endeavor to resolve any issues directly with our users.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
