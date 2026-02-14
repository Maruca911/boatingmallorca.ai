import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'ocean' | 'dark';
}

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonLink = '/get-matched',
  variant = 'ocean',
}: CTABannerProps) {
  const { t } = useTranslation();

  return (
    <section className={`${variant === 'ocean' ? 'gradient-ocean' : 'gradient-dark'} text-white`}>
      <div className="container-narrow section-padding text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">{title || t('cta.defaultTitle')}</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">{subtitle || t('cta.defaultSubtitle')}</p>
        <Link to={buttonLink} className="btn-white text-base px-8 py-4 gap-2">
          {buttonText || t('cta.defaultButton')}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
