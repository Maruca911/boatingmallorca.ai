import { Link } from 'react-router-dom';
import { TrendingUp, Check, Users, MapPin, ArrowRight, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const buyerGuideSteps = [
  {
    title: 'Define Your Needs',
    description: 'Boat type, size, features, budget, and intended use (day sailing, liveaboard, investment). Consider your experience level and maintenance expectations.',
  },
  {
    title: 'Market Research',
    description: 'Research current market prices, recent sales, and available inventory. Mallorca has high market liquidity with regular charter and investment opportunities.',
  },
  {
    title: 'Professional Survey',
    description: 'Hire an independent marine surveyor to inspect the hull, engine, systems, and structure. This is non-negotiable and typically costs 1-2% of boat price.',
  },
  {
    title: 'Financing & Insurance',
    description: 'Arrange yacht financing (typically 60-70% LTV available) and get pre-purchase insurance quotes. Budget for registration, mooring, and ongoing costs.',
  },
  {
    title: 'Negotiation & Offer',
    description: 'Make an offer below asking price. First offer typically 10-15% below list. Include survey contingencies and sea trial clauses.',
  },
  {
    title: 'Due Diligence & Legal',
    description: 'Verify ownership, liens, and registration. Hire a maritime lawyer to review contracts and handle title transfer in Spain.',
  },
];

const boatTypes = [
  {
    category: 'Sailing Yachts',
    image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=400',
    priceRange: '50K - 500K EUR',
    pros: 'Lower operating costs, eco-friendly, great resale, liveaboard potential',
    cons: 'Requires sailing skills, slower speeds, more maintenance',
  },
  {
    category: 'Motor Yachts',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
    priceRange: '100K - 2M+ EUR',
    pros: 'Faster, more space, less skill required, great for chartering',
    cons: 'Higher fuel costs, engine maintenance critical, more crew needed',
  },
  {
    category: 'Catamarans',
    image: 'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=400',
    priceRange: '80K - 600K EUR',
    pros: 'Extremely stable, large decks, excellent for families, very marketable',
    cons: 'Higher initial cost, harder to maneuver in tight marinas',
  },
  {
    category: 'RIBs (Rigid Inflatables)',
    image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=400',
    priceRange: '30K - 150K EUR',
    pros: 'Affordable, fun to operate, low maintenance, high charter demand',
    cons: 'No overnight capability, weather-dependent, limited resale',
  },
];

const investmentConsiderations = [
  { metric: 'Charter Income Potential', detail: '8-12% annual yield on charter vessel investment in Mallorca', icon: TrendingUp },
  { metric: 'Ownership Costs', detail: '8-12% of boat value annually (moorage, insurance, maintenance, crew)', icon: DollarSign },
  { metric: 'Market Liquidity', detail: 'Mallorca has active buyer base; luxury yachts typically sell within 6-12 months', icon: Users },
  { metric: 'Location Value', detail: 'Mediterranean base adds 20-30% premium; ideal for charter companies', icon: MapPin },
];

export default function BuyYacht() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('buyYacht.seoTitle')}
        description={t('buyYacht.seoDesc')}
        canonical="https://boatingmallorca.ai/buy-yacht"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Guide',
          name: 'Complete Yacht Buying Guide for Mallorca',
          provider: { '@type': 'Organization', name: 'Boating Mallorca' },
          areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
        }}
      />

      <PageHero
        title={t('buyYacht.heroTitle')}
        subtitle={t('buyYacht.heroSubtitle')}
        image="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Luxury yacht anchored in turquoise Mallorca waters"
        ctaText={t('buyYacht.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">{t('buyYacht.typesTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {t('buyYacht.typesSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boatTypes.map((boat) => (
              <div key={boat.category} className="card overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src={boat.image} alt={boat.category} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{boat.category}</h3>
                  <p className="text-ocean-600 font-semibold text-sm mb-3">{boat.priceRange}</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase mb-1">Pros</p>
                      <p className="text-sm text-gray-600">{boat.pros}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-orange-700 uppercase mb-1">Cons</p>
                      <p className="text-sm text-gray-600">{boat.cons}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{t('buyYacht.buyingTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerGuideSteps.map((step, i) => (
              <article key={step.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg gradient-ocean text-white flex items-center justify-center flex-shrink-0 font-heading font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{t('buyYacht.investTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {t('buyYacht.investSubtitle')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {investmentConsiderations.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.metric} className="card p-6 border-l-4 border-ocean-500">
                  <div className="flex items-start gap-4">
                    <IconComponent className="w-6 h-6 text-ocean-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-navy-800 mb-1">{item.metric}</h3>
                      <p className="text-gray-600 text-sm">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">{t('buyYacht.costsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 bg-white">
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-4">{t('buyYacht.annualCosts')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Mooring/Marina:</strong> 6-12K EUR annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Insurance:</strong> 1-3% of boat value</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Maintenance:</strong> 5-10% of boat value</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Fuel (if motor):</strong> 2-5K EUR annually</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-white">
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-4">{t('buyYacht.oneTimeCosts')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Survey:</strong> 2-4K EUR</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Title Transfer:</strong> 1-2% of boat price</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Legal Services:</strong> 2-5K EUR</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm"><strong>Registration:</strong> 1-3K EUR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">{t('buyYacht.locationsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 border-t-4 border-ocean-500">
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">Palma de Mallorca</h3>
              <p className="text-gray-600 text-sm mb-3">Mediterranean's largest super yacht hub with luxury marinas, professional services, and deep-pocketed buyers.</p>
              <p className="text-sm"><strong>Best for:</strong> Luxury yachts, investment purchases, professional crew availability</p>
            </div>

            <div className="card p-6 border-t-4 border-island-500">
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">Port d'Andratx</h3>
              <p className="text-gray-600 text-sm mb-3">Exclusive western resort with high-net-worth clientele and premium marina infrastructure.</p>
              <p className="text-sm"><strong>Best for:</strong> Exclusive purchases, high-value vessels, private ownership</p>
            </div>

            <div className="card p-6 border-t-4 border-sand-700">
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">Port de Pollenca</h3>
              <p className="text-gray-600 text-sm mb-3">Northern gem popular with sailing enthusiasts and family boat owners.</p>
              <p className="text-sm"><strong>Best for:</strong> Sailing yachts, family boats, charter-ready vessels</p>
            </div>

            <div className="card p-6 border-t-4 border-ocean-600">
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">Cala Ratjada</h3>
              <p className="text-gray-600 text-sm mb-3">East coast hub with active fishing and day-charter boat market.</p>
              <p className="text-sm"><strong>Best for:</strong> Fishing vessels, motorboats, day-charter investment boats</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-3">{t('buyYacht.readyTitle')}</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              {t('buyYacht.readySubtitle')}
            </p>
            <Link to="/get-matched" className="btn-primary inline-flex items-center gap-2">
              {t('buyYacht.readyCta')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
