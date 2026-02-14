import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Anchor, Mail, MapPin, Instagram, Twitter } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const serviceLinks = [
  { labelKey: 'nav.rentals', path: '/rentals-charters' },
  { labelKey: 'nav.tours', path: '/tours-excursions' },
  { labelKey: 'nav.mooring', path: '/mooring-maintenance' },
  { labelKey: 'nav.events', path: '/events-clubs' },
  { labelKey: 'nav.buyYacht', path: '/buy-yacht' },
  { labelKey: 'nav.sellYacht', path: '/sell-yacht' },
  { labelKey: 'nav.crewJobs', path: '/crew-jobs' },
];

const exploreLinks = [
  { labelKey: 'nav.destinations', path: '/explore/destinations' },
  { labelKey: 'nav.marinas', path: '/explore/marinas' },
  { labelKey: 'nav.routes', path: '/explore/routes' },
  { labelKey: 'nav.guides', path: '/explore/guides' },
  { labelKey: 'footer.boatingDirectory', path: '/directory' },
];

const resourceLinks = [
  { labelKey: 'nav.faq', path: '/faq' },
  { labelKey: 'nav.blog', path: '/blog' },
  { labelKey: 'footer.getMatchedFree', path: '/get-matched' },
];

const legalLinks = [
  { labelKey: 'footer.privacy', path: '/privacy' },
  { labelKey: 'footer.terms', path: '/terms' },
  { labelKey: 'footer.imprint', path: '/imprint' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="gradient-dark text-white">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Anchor className="w-7 h-7 text-accent-400" strokeWidth={2.5} />
              <span className="font-heading font-bold text-lg">Boating Mallorca</span>
            </Link>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="mailto:hello@boatingmallorca.ai" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4" /> hello@boatingmallorca.ai
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Palma de Mallorca, Spain
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">{t('footer.services')}</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">{t('footer.explore')}</h3>
            <ul className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">{t('footer.resources')}</h3>
            <ul className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors" aria-label="X / Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent-400">{t('footer.newsletter')}</h3>
            <p className="text-sm text-gray-300 mb-4">{t('footer.newsletterDesc')}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-xs text-gray-400 hover:text-white transition-colors">
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
