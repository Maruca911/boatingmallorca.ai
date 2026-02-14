import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Anchor, Ship, MapPin, Wrench, PartyPopper, ClipboardList, CheckCircle, Shield, Clock, Users, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTABanner from '../components/CTABanner';
import { blogPosts } from '../data/blog';
import { guides } from '../data/guides';

const serviceIcons = [Ship, Anchor, MapPin, MapPin, Wrench, PartyPopper];
const serviceColors = [
  'bg-ocean-50 text-ocean-600',
  'bg-accent-50 text-accent-600',
  'bg-island-50 text-island-600',
  'bg-sand-100 text-sand-700',
  'bg-navy-50 text-navy-600',
  'bg-ocean-50 text-ocean-600',
];
const serviceLinks = [
  '/rentals-charters', '/rentals-charters', '/tours-excursions',
  '/tours-excursions', '/mooring-maintenance', '/events-clubs',
];
const serviceKeys = [
  'boatRentals', 'yachtCharters', 'boatTours',
  'excursions', 'mooringMaint', 'eventClubs',
];

const stepIcons = [ClipboardList, Users, CheckCircle];

const trustIcons = [Shield, Clock, Star, MapPin];
const trustKeys = ['vetted', 'fast', 'free', 'local'];

const destinationKeys = ['palma', 'alcudia', 'pollenca', 'andratx'];
const destinationSlugs = ['palma-de-mallorca', 'alcudia-bay', 'port-de-pollenca', 'andratx-dragonera'];
const destinationImages = [
  'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function Home() {
  const { t } = useTranslation(['home', 'common']);

  return (
    <>
      <SEOHead
        title={t('home:seo.title')}
        description={t('home:seo.description')}
        canonical="https://boatingmallorca.ai/"
      />

      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Luxury yacht cruising the turquoise waters of Mallorca"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/50 to-transparent" />
        </div>
        <div className="relative container-narrow">
          <div className="max-w-2xl pt-20">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {t('home:hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed">
              {t('home:hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-matched" className="btn-primary text-base px-8 py-4 gap-2">
                {t('home:hero.cta')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/tours-excursions" className="btn-white text-base px-8 py-4">
                {t('home:hero.exploreTours')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="container-narrow py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {trustKeys.map((key, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={key} className="flex items-center gap-3 justify-center">
                  <Icon className="w-5 h-5 text-ocean-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-navy-700">{t(`home:trust.${key}`)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding" id="how-it-works">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-4">{t('home:howItWorks.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('home:howItWorks.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((num) => {
              const Icon = stepIcons[num - 1];
              return (
                <div key={num} className="text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-ocean text-white flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-sm font-bold text-ocean-500 mb-2">{t('common:common.step')} {num}</div>
                  <h3 className="font-heading font-bold text-xl text-navy-800 mb-2">{t(`home:howItWorks.step${num}Title`)}</h3>
                  <p className="text-gray-600">{t(`home:howItWorks.step${num}Desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-4">{t('home:services.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('home:services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((key, i) => {
              const Icon = serviceIcons[i];
              return (
                <Link key={key} to={serviceLinks[i]} className="card p-6 group">
                  <div className={`w-12 h-12 rounded-xl ${serviceColors[i]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2 group-hover:text-ocean-600 transition-colors">{t(`home:services.${key}`)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(`home:services.${key}Desc`)}</p>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    {t('common:common.learnMore')} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-4">{t('home:destinations.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('home:destinations.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinationKeys.map((key, i) => (
              <Link key={key} to={`/explore/destinations/${destinationSlugs[i]}`} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={destinationImages[i]}
                    alt={`Boating in ${t(`home:destinations.${key}`)}, Mallorca`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-1 group-hover:text-ocean-600 transition-colors">{t(`home:destinations.${key}`)}</h3>
                  <p className="text-gray-600 text-sm">{t(`home:destinations.${key}Desc`)}</p>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">
                    {t('common:common.explore')} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/explore/destinations" className="btn-secondary">{t('common:common.viewAllDestinations')}</Link>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-4">{t('home:guides.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('home:guides.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guides.slice(0, 4).map((guide) => (
              <Link key={guide.slug} to={`/explore/guides/${guide.slug}`} className="card overflow-hidden group">
                <div className="h-40 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm text-navy-800 mb-1 group-hover:text-ocean-600 transition-colors">{guide.shortTitle}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/explore/guides" className="btn-secondary">{t('common:common.viewAllGuides')}</Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-4">{t('home:blog.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('home:blog.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-ocean-500 uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mt-1 mb-2 group-hover:text-ocean-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="btn-secondary">{t('common:common.viewAllArticles')}</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
