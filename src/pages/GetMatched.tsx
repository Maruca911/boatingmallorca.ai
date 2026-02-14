import { useTranslation } from 'react-i18next';
import { Shield, Clock, Star, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LeadForm from '../components/LeadForm';

const benefitIcons = [Shield, Clock, Star, CheckCircle];
const benefitKeys = ['benefit1', 'benefit2', 'benefit3', 'benefit4'];

export default function GetMatched() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('getMatched.seoTitle')}
        description={t('getMatched.seoDesc')}
        canonical="https://boatingmallorca.ai/get-matched"
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="gradient-ocean text-white py-12 lg:py-16">
          <div className="container-narrow text-center">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('getMatched.heroTitle')}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              {t('getMatched.heroSubtitle')}
            </p>
          </div>
        </section>

        <section className="container-narrow py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="card p-6 lg:p-8">
                <LeadForm />
              </div>
            </div>

            <aside>
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="card p-6">
                  <h2 className="font-heading font-bold text-lg text-navy-800 mb-4">{t('getMatched.whyTitle')}</h2>
                  <div className="space-y-5">
                    {benefitKeys.map((key, i) => {
                      const Icon = benefitIcons[i];
                      return (
                        <div key={key} className="flex gap-3">
                          <div className="w-9 h-9 rounded-lg bg-ocean-50 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4.5 h-4.5 text-ocean-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm text-navy-800">{t(`getMatched.${key}Title`)}</h3>
                            <p className="text-xs text-gray-600 mt-0.5">{t(`getMatched.${key}Text`)}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="card p-6 bg-ocean-50 border-ocean-200">
                  <h3 className="font-heading font-bold text-sm text-navy-800 mb-2">{t('getMatched.howTitle')}</h3>
                  <ol className="space-y-2 text-sm text-gray-700">
                    {[1, 2, 3, 4].map((num) => (
                      <li key={num} className="flex gap-2">
                        <span className="font-bold text-ocean-600">{num}.</span> {t(`getMatched.how${num}`)}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
