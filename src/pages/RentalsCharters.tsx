import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Info, MapPin, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const rentalTypes = [
  { type: 'Yacht Charter', location: 'Palma de Mallorca', features: 'Luxury, crewed or bareboat, 40-100ft', price: '1,000 - 10,000+ EUR/day', bestFor: 'Luxury holidays, special occasions' },
  { type: 'Catamaran', location: 'Port de Pollenca', features: 'Spacious deck, stable, group-friendly', price: '400 - 1,500 EUR/day', bestFor: 'Families, groups, parties' },
  { type: 'Speed Boat', location: 'Alcudia', features: 'High-speed, agile, great for tours', price: '200 - 600 EUR/day', bestFor: 'Adrenaline seekers, cove hopping' },
  { type: 'Motorboat', location: 'Cala d\'Or', features: 'Easy to handle, versatile', price: '100 - 400 EUR/day', bestFor: 'Day trips, beginners' },
  { type: 'Sailing Yacht', location: 'Palma / Alcudia', features: 'Wind-powered, authentic experience', price: '200 - 800 EUR/day', bestFor: 'Sailing enthusiasts, eco-conscious' },
  { type: 'Fishing Boat', location: 'Cala Ratjada', features: 'Gear included, local knowledge', price: '250 - 600 EUR/day', bestFor: 'Fishing trips, angling enthusiasts' },
  { type: 'Pontoon Boat', location: 'Alcudia Bay', features: 'Flat deck, shade, stable platform', price: '300 - 600 EUR/day', bestFor: 'Parties, relaxation, families' },
  { type: 'Private Boat', location: 'Multiple locations', features: 'Exclusive hire, custom itinerary', price: '200 - 2,000+ EUR/day', bestFor: 'Privacy, bespoke experiences' },
];

const charterTypes = [
  { title: 'Bareboat Charter', description: 'Self-skippered freedom for licensed sailors. Captain your own yacht and create your own itinerary around Mallorca. The most economical charter option, ideal for experienced sailors who want full control of their voyage. ICC or equivalent license required.', price: 'From 1,500 EUR/week' },
  { title: 'Skippered Charter', description: 'A professional local captain handles navigation and safety while you relax. Perfect for those who want a private yacht experience without needing a license. Your skipper doubles as a local guide, knowing the best anchorages, restaurants, and hidden spots.', price: 'From 2,500 EUR/week' },
  { title: 'Crewed Yacht Charter', description: 'The ultimate luxury experience with a full professional crew including captain, chef, and stewardess. Expect gourmet meals, premium drinks, water toys, and a personalized itinerary. Ideal for celebrating special occasions or a premium holiday.', price: 'From 10,000 EUR/week' },
];

const locations = [
  { name: 'Palma de Mallorca', highlights: 'Main charter hub, luxury marinas (Club de Mar, Marina Port de Mallorca), easy airport access, vibrant nightlife and dining', boats: 'Full range of yachts, catamarans, and motorboats' },
  { name: 'Alcudia', highlights: 'Sheltered bay, family-friendly, great for beginners, close to nature parks', boats: 'Motorboats, small yachts, fishing boats, water sports rentals' },
  { name: 'Port de Pollenca', highlights: 'Charming northern port, excellent sailing winds, Serra de Tramuntana views', boats: 'Sailing yachts, catamarans, bareboat charters' },
  { name: 'Cala Ratjada', highlights: 'East coast gem, excellent fishing grounds, beautiful coves nearby', boats: 'Fishing boats, small motorboats, day charter yachts' },
  { name: 'Cala d\'Or', highlights: 'Scenic southeast, multiple coves, popular with families', boats: 'Motorboats, small catamarans, kayak and SUP rentals' },
  { name: 'Port Adriano', highlights: 'Philippe Starck-designed superyacht marina, boutique shopping, premium dining', boats: 'Luxury yachts, superyacht charters' },
];

export default function RentalsCharters() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('rentals.seoTitle')}
        description={t('rentals.seoDesc')}
        canonical="https://boatingmallorca.ai/rentals-charters"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Boat Rentals and Yacht Charters Mallorca',
          provider: { '@type': 'Organization', name: 'Boating Mallorca' },
          areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
          description: 'Free matching service for boat rentals and yacht charters across Mallorca.',
        }}
      />

      <PageHero
        title={t('rentals.heroTitle')}
        subtitle={t('rentals.heroSubtitle')}
        image="https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Luxury yacht charter anchored in crystal clear Mallorca waters"
        ctaText={t('rentals.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">{t('rentals.typesTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {t('rentals.typesSubtitle')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">{t('rentals.vesselType')}</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">{t('rentals.location')}</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">{t('rentals.features')}</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">{t('rentals.priceRange', { defaultValue: 'Price Range' })}</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800 hidden lg:table-cell">{t('rentals.bestFor')}</th>
                </tr>
              </thead>
              <tbody>
                {rentalTypes.map((rental, i) => (
                  <tr key={rental.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-navy-700">{rental.type}</td>
                    <td className="px-4 py-3 text-gray-600">{rental.location}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{rental.features}</td>
                    <td className="px-4 py-3 text-ocean-600 font-medium">{rental.price}</td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{rental.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{t('rentals.charterTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {charterTypes.map((charter) => (
              <article key={charter.title} className="card p-6">
                <h3 className="font-heading font-bold text-xl text-navy-800 mb-3">{charter.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{charter.description}</p>
                <div className="pt-3 border-t border-gray-100">
                  <span className="text-ocean-600 font-semibold text-sm">{charter.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="bg-accent-50 rounded-2xl p-6 lg:p-8 flex gap-4">
            <Info className="w-6 h-6 text-accent-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{t('rentals.licenseTitle')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('rentals.licenseText')}
              </p>
              <Link to="/explore/guides/boating-regulations" className="inline-flex items-center gap-1 text-ocean-600 font-medium text-sm mt-3 hover:text-ocean-700">
                {t('rentals.licenseLink')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{t('rentals.locationsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <article key={loc.name} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-ocean-500" />
                  <h3 className="font-heading font-bold text-lg text-navy-800">{loc.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{loc.highlights}</p>
                <p className="text-xs text-ocean-600 font-medium">{loc.boats}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={t('rentals.ctaTitle')}
        subtitle={t('rentals.ctaSubtitle')}
        buttonText={t('rentals.ctaButton')}
      />
    </>
  );
}
