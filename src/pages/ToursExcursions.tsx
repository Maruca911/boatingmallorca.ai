import { Sun, Fish, Compass, Waves } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const tourTypes = [
  { icon: Sun, title: 'Sunset Catamaran Cruise', duration: '2.5 - 3 hours', groupSize: '15-50 guests', price: '55 - 85 EUR/person', description: 'Sail along the western coast as the sun sets over the Mediterranean. Includes drinks, snacks, music, and a swimming stop.', season: 'May - October' },
  { icon: Compass, title: 'Full-Day Sailing Excursion', duration: '6 - 8 hours', groupSize: '6-12 guests', price: '80 - 150 EUR/person', description: 'Explore the stunning coastline with multiple swimming stops, lunch onboard, and visits to hidden coves inaccessible by land.', season: 'April - October' },
  { icon: Fish, title: 'Fishing Charter', duration: '4 - 8 hours', groupSize: '2-6 guests', price: '100 - 250 EUR/person', description: 'Deep-sea and inshore fishing with professional equipment and an experienced local guide. Target tuna, swordfish, and dorado.', season: 'May - September' },
  { icon: Waves, title: 'SUP & Kayak Tour', duration: '2 - 3 hours', groupSize: '4-12 guests', price: '35 - 60 EUR/person', description: 'Guided paddleboard or kayak tours through sea caves, along cliffs, and over crystal-clear waters. No experience needed.', season: 'April - October' },
  { icon: Compass, title: 'Private Boat Trip', duration: 'Custom', groupSize: '2-12 guests', price: '400 - 1,500 EUR/boat', description: 'Your own boat with optional skipper. Create a custom itinerary visiting your choice of beaches, coves, and ports.', season: 'Year-round' },
  { icon: Sun, title: 'Cabrera Island Excursion', duration: 'Full day', groupSize: '20-100 guests', price: '45 - 60 EUR/person', description: 'Visit the protected Cabrera Archipelago National Park. Includes boat crossing, island tour, castle visit, and Blue Grotto.', season: 'April - October' },
];

const priceGuide = [
  { type: 'Shared Sunset Cruise', perPerson: '55 - 85 EUR', privateOption: '500 - 1,200 EUR for whole boat' },
  { type: 'Half-Day Group Tour', perPerson: '45 - 80 EUR', privateOption: '400 - 800 EUR' },
  { type: 'Full-Day Sailing Excursion', perPerson: '80 - 150 EUR', privateOption: '600 - 2,000 EUR' },
  { type: 'Fishing Charter (Half Day)', perPerson: '100 - 150 EUR', privateOption: '400 - 600 EUR' },
  { type: 'Fishing Charter (Full Day)', perPerson: '150 - 250 EUR', privateOption: '600 - 1,000 EUR' },
  { type: 'SUP / Kayak Tour', perPerson: '35 - 60 EUR', privateOption: '200 - 400 EUR' },
  { type: 'Cabrera Day Trip', perPerson: '45 - 60 EUR', privateOption: 'N/A (shared only)' },
];

const seasons = [
  { months: 'April - May', conditions: 'Warm, calm seas, fewer crowds. Water temperature 16-19C. Best for sailing and coastal tours.', recommendation: 'Excellent for sailing, SUP, and kayaking. Early bird prices on most tours.' },
  { months: 'June - August', conditions: 'Hot, peak season, busiest period. Water temperature 22-26C. Book well in advance.', recommendation: 'All tours available. Sunset cruises and beach-hopping tours at their best.' },
  { months: 'September - October', conditions: 'Still warm, fewer tourists, great deals. Water temperature 22-24C.', recommendation: 'Best value period. Excellent conditions for fishing, sailing, and all water sports.' },
];

const activities = [
  { title: 'Snorkeling', description: 'Crystal-clear waters and marine reserves make Mallorca ideal for snorkeling. Many tours include equipment.' },
  { title: 'Paddleboarding', description: 'SUP boards are available on most catamaran tours and as standalone rentals at beaches across the island.' },
  { title: 'Cave Exploration', description: 'The coastline has numerous sea caves accessible by boat, kayak, or SUP. Guided tours provide the safest access.' },
  { title: 'Swimming Stops', description: 'Every boat tour includes swimming in the turquoise coves. Some of the best beaches are only accessible from the water.' },
  { title: 'Island Hopping', description: 'Visit Cabrera, Dragonera, and the smaller islets surrounding Mallorca on dedicated excursion boats.' },
  { title: 'Dolphin Watching', description: 'Several operators offer dolphin-watching excursions, particularly along the southwest coast from May to September.' },
];

export default function ToursExcursions() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('tours.seoTitle')}
        description={t('tours.seoDesc')}
        canonical="https://boatingmallorca.ai/tours-excursions"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Boat Tours and Excursions Mallorca',
          provider: { '@type': 'Organization', name: 'Boating Mallorca' },
          areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
          description: 'Free matching service for boat tours, sunset cruises, and water excursions in Mallorca.',
        }}
      />

      <PageHero
        title={t('tours.heroTitle')}
        subtitle={t('tours.heroSubtitle')}
        image="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Catamaran sailing during a golden sunset near the Mallorca coastline"
        ctaText={t('tours.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">{t('tours.typesTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {t('tours.typesSubtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourTypes.map((tour) => (
              <article key={tour.title} className="card p-6">
                <div className="w-11 h-11 rounded-xl bg-ocean-50 text-ocean-600 flex items-center justify-center mb-4">
                  <tour.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{tour.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tour.description}</p>
                <div className="space-y-1.5 text-xs text-gray-500 border-t border-gray-100 pt-3">
                  <div className="flex justify-between"><span>Duration:</span><span className="font-medium text-navy-700">{tour.duration}</span></div>
                  <div className="flex justify-between"><span>Group Size:</span><span className="font-medium text-navy-700">{tour.groupSize}</span></div>
                  <div className="flex justify-between"><span>Price:</span><span className="font-medium text-ocean-600">{tour.price}</span></div>
                  <div className="flex justify-between"><span>Season:</span><span className="font-medium text-navy-700">{tour.season}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{t('tours.priceTitle')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">{t('tours.tourType')}</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">{t('tours.perPerson')}</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">{t('tours.privateCharter')}</th>
                </tr>
              </thead>
              <tbody>
                {priceGuide.map((item, i) => (
                  <tr key={item.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-navy-700">{item.type}</td>
                    <td className="px-4 py-3 text-ocean-600 font-medium">{item.perPerson}</td>
                    <td className="px-4 py-3 text-gray-600">{item.privateOption}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{t('tours.seasonTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasons.map((season) => (
              <article key={season.months} className="card p-6">
                <h3 className="font-heading font-bold text-lg text-ocean-600 mb-2">{season.months}</h3>
                <p className="text-gray-600 text-sm mb-3">{season.conditions}</p>
                <p className="text-sm text-navy-700 font-medium">{season.recommendation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{t('tours.activitiesTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-ocean-500 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-navy-800 mb-1">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={t('tours.ctaTitle')}
        subtitle={t('tours.ctaSubtitle')}
        buttonText={t('tours.ctaButton')}
      />
    </>
  );
}
