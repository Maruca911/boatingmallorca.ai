import { Link } from 'react-router-dom';
import { MapPin, AlertTriangle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const services = [
  { type: 'Mooring / Berth', location: 'All major ports', highlights: 'Annual and seasonal berths, visitor moorings, superyacht berths', price: '5,000 - 50,000+ EUR/year' },
  { type: 'Maintenance & Repair', location: 'Palma, Alcudia', highlights: 'Engine service, hull cleaning, electrical, rigging, antifouling', price: 'Varies by service' },
  { type: 'Winterizing', location: 'Island-wide', highlights: 'Engine prep, fuel treatment, battery care, hull inspection', price: '500 - 3,000+ EUR' },
  { type: 'Dry Storage', location: 'Palma, Calvia', highlights: 'Hard-standing, covered sheds, dry stack facilities', price: '30 - 100 EUR/meter/month' },
  { type: 'Wet Storage', location: 'All marinas', highlights: 'Year-round berth, basic maintenance access, electricity and water', price: 'Included in berth fee' },
  { type: 'Accessories & Gear', location: 'Palma, Andratx', highlights: 'Chandleries, safety equipment, electronics, ropes, covers', price: 'Retail pricing' },
];

const ports = [
  { name: 'Marina Port de Mallorca (Palma)', capacity: '400+ berths up to 60m', amenities: 'Full service, fuel, travel lift, Wi-Fi, security', description: 'Central Palma location near the cathedral. Walking distance to restaurants and shops. One of the most popular marinas for visiting yachts.' },
  { name: 'Club de Mar Mallorca (Palma)', capacity: '600+ berths up to 80m', amenities: 'Boatyard, haul-out, chandlery, restaurants, pool', description: 'One of the most prestigious yacht clubs in the Mediterranean. Excellent facilities including a full-service boatyard. Hosts major regattas.' },
  { name: 'Port Adriano (Calvia)', capacity: '400+ berths up to 80m', amenities: 'Modern design, boutiques, restaurants, superyacht facilities', description: 'Designed by Philippe Starck. A luxury marina with world-class facilities and stunning architecture. Popular with superyachts and motor yachts.' },
  { name: 'Real Club Nautico (Palma)', capacity: '1,000+ berths', amenities: 'Racing facilities, social club, restaurant, sailing school', description: 'The historic heart of Mallorca sailing. Hosts Copa del Rey and other major events. Active racing and social calendar year-round.' },
  { name: 'Alcudiamar (Port d\'Alcudia)', capacity: '700+ berths up to 30m', amenities: 'Travel lift, boatyard, fuel, shops, restaurants', description: 'The largest marina in northern Mallorca. Full boatyard facilities with haul-out capability. Convenient base for exploring the north coast.' },
  { name: 'Port de Pollenca', capacity: '375 berths up to 20m', amenities: 'Fuel, water, electricity, restaurants nearby', description: 'Charming port in the scenic northern bay. Excellent sailing conditions. Quieter and more traditional than the Palma marinas.' },
];

const maintenanceChecklist = [
  { category: 'Engine', items: ['Oil and filter change', 'Impeller replacement', 'Belt inspection', 'Coolant system check', 'Fuel filter replacement'] },
  { category: 'Hull', items: ['Antifouling application', 'Anode replacement', 'Hull inspection and cleaning', 'Osmosis check', 'Through-hull fitting inspection'] },
  { category: 'Electrical', items: ['Battery condition check', 'Wiring inspection', 'Navigation lights test', 'Instrument calibration', 'Shore power connection check'] },
  { category: 'Safety', items: ['Life jacket inspection', 'Fire extinguisher service', 'Flare expiry check', 'First aid kit restock', 'EPIRB battery and registration'] },
];

export default function MooringMaintenance() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('mooring.seoTitle')}
        description={t('mooring.seoDesc')}
        canonical="https://boatingmallorca.ai/mooring-maintenance"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Boat Mooring and Maintenance Mallorca',
          provider: { '@type': 'Organization', name: 'Boating Mallorca' },
          areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
          description: 'Matching service for marina berths, boat maintenance, storage, and marine services in Mallorca.',
        }}
      />

      <PageHero
        title={t('mooring.heroTitle')}
        subtitle={t('mooring.heroSubtitle')}
        image="https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Boats moored in a scenic Mallorca marina with mountains in the background"
        ctaText={t('mooring.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Marine Services Overview</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Whether you need a permanent berth, seasonal mooring, maintenance, or winter storage, Mallorca has comprehensive marine infrastructure. Our matching service connects you with the right provider for your specific requirements.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">Service</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">Location</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">Highlights</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">Pricing</th>
                </tr>
              </thead>
              <tbody>
                {services.map((svc, i) => (
                  <tr key={svc.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-navy-700">{svc.type}</td>
                    <td className="px-4 py-3 text-gray-600">{svc.location}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{svc.highlights}</td>
                    <td className="px-4 py-3 text-ocean-600 font-medium">{svc.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Mallorca Marina Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ports.map((port) => (
              <article key={port.name} className="card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-ocean-500 mt-0.5 flex-shrink-0" />
                  <h3 className="font-heading font-bold text-lg text-navy-800">{port.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{port.description}</p>
                <div className="space-y-1 text-xs text-gray-500 border-t border-gray-100 pt-3">
                  <div><span className="font-medium text-navy-600">Capacity:</span> {port.capacity}</div>
                  <div><span className="font-medium text-navy-600">Amenities:</span> {port.amenities}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Seasonal Maintenance Checklist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceChecklist.map((cat) => (
              <div key={cat.category} className="card p-5">
                <h3 className="font-heading font-bold text-ocean-600 mb-3">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="bg-sand-100 rounded-2xl p-6 lg:p-8 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-sand-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">Anchoring Regulations in Mallorca</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Mallorca enforces strict anchoring regulations to protect Posidonia seagrass meadows, a protected marine ecosystem vital to water clarity and marine life. Anchoring over Posidonia is prohibited and carries fines from 600 to 300,000 EUR. Always anchor on sandy bottoms, use designated mooring buoys in protected areas, and check current regulations with local port authorities before dropping anchor.
              </p>
              <Link to="/blog/eco-boating-mallorca-sustainable-practices" className="inline-flex items-center gap-1 text-ocean-600 font-medium text-sm hover:text-ocean-700">
                Learn about eco-friendly boating <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

    </>
  );
}
