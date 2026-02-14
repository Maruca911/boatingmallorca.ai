import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Anchor, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('notFound.title') + ' | Boating Mallorca'}
        description={t('notFound.subtitle')}
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="text-center px-4">
          <Anchor className="w-16 h-16 text-ocean-300 mx-auto mb-6" />
          <h1 className="font-heading font-bold text-6xl text-navy-800 mb-2">404</h1>
          <h2 className="font-heading font-bold text-2xl text-navy-600 mb-4">{t('notFound.title')}</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            {t('notFound.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary gap-2">
              {t('notFound.backHome')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/get-matched" className="btn-secondary">
              {t('getMatched.heroCta', { defaultValue: 'Get Matched Free' })}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
