import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, MapPin } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const storageOptions = [
  { type: 'Indoor (covered)', priceRange: '35-80 EUR/m/month', pros: 'Full weather protection, UV protection, security, prevents hull osmosis', cons: 'Most expensive, limited availability, must book early', best: 'Valuable yachts, wooden boats, boats requiring interior work' },
  { type: 'Outdoor (hard standing)', priceRange: '15-40 EUR/m/month', pros: 'More available, allows DIY maintenance, good for hull drying', cons: 'UV and weather exposure, needs proper cover, less secure', best: 'Most boats, owners who want to do own maintenance' },
  { type: 'In-water (marina berth)', priceRange: '20-60 EUR/m/month', pros: 'No haul-out cost, boat always accessible, some winter sailing', cons: 'Hull fouling continues, osmosis risk, antifoul deteriorates', best: 'Boats sailing year-round, short winter periods' },
  { type: 'Dry stack (trailer)', priceRange: '10-25 EUR/m/month', pros: 'Cost-effective for small boats, forklift launch on demand', cons: 'Size limited (under 8m typically), basic facilities', best: 'RIBs, small motorboats, tenders' },
];

const boatyards = [
  { name: 'STP Shipyard (Palma)', location: 'Palma de Mallorca', capacity: 'Up to 90m, 820-tonne travel lift', services: 'Full refit, paint, mechanical, rigging, interiors', character: 'The largest and most professional yard in Mallorca. Handles superyachts and production boats alike. International workforce.' },
  { name: 'Astilleros de Mallorca', location: 'Palma (Contramuelle)', capacity: 'Up to 60m', services: 'Refit, painting, structural, mechanical', character: 'Historic shipyard in Palma harbor. Strong reputation for quality work on larger sailing and motor yachts.' },
  { name: 'Nautic Center Mallorca', location: 'Calvia', capacity: 'Up to 25m', services: 'Storage, maintenance, engine service, antifouling', character: 'Modern facility near Port Adriano. Good value for mid-size boats. Indoor and outdoor options.' },
  { name: 'Varadero Valencia / PSB Marine', location: 'Son Castello / Puerto Portals', capacity: 'Up to 18m', services: 'Indoor storage, gardiennage, tender service', character: 'Specialist in winter storage with indoor facilities. Personal service. Popular with expat boat owners.' },
  { name: 'Marina Yacht Service', location: 'Port d\'Alcudia', capacity: 'Up to 15m', services: 'Hard standing, maintenance, engine service, antifouling', character: 'Good option for north coast boats. Competitive pricing. Friendly family-run yard.' },
];

const checklist = [
  { category: 'Engine', tasks: ['Change oil and filters', 'Flush cooling system with fresh water', 'Add fuel stabilizer and fill tank to 95%', 'Fog cylinders with corrosion inhibitor', 'Grease steering and throttle cables', 'Drain and winterize raw water system'] },
  { category: 'Hull and Deck', tasks: ['Pressure wash hull and apply antifouling if due', 'Inspect and replace anodes', 'Clean and wax topsides', 'Check hull for osmosis blisters', 'Inspect keel bolts and rudder bearings', 'Cover or remove canvas and bimini'] },
  { category: 'Electrics and Plumbing', tasks: ['Disconnect batteries and store fully charged', 'Drain freshwater system completely', 'Add non-toxic antifreeze to heads and drains', 'Remove and store electronics if outdoor storage', 'Check bilge pumps are clear and operational', 'Inspect all through-hulls and seacocks'] },
  { category: 'Interior and Rigging', tasks: ['Remove all food, valuables, and moisture-sensitive items', 'Open all lockers and hatches for ventilation', 'Place moisture absorbers throughout', 'Inspect standing rigging for corrosion or fatigue', 'Service winches and blocks if due', 'Remove sails and store clean and dry'] },
];

const timeline = [
  { month: 'September', task: 'Book storage space and haul-out date. Popular yards fill up early.' },
  { month: 'October', task: 'Final sailing month for most. Begin provisioning cleaning supplies.' },
  { month: 'November', task: 'Peak haul-out month. Complete winterization within 2 weeks of haul-out.' },
  { month: 'December - February', task: 'Boat in storage. Schedule any refit or maintenance work.' },
  { month: 'March', task: 'Begin pre-launch preparation. Antifouling, engine service, systems check.' },
  { month: 'April', task: 'Launch month. Commission all systems and complete sea trial before first trip.' },
];

export default function WinterStorage() {
  return (
    <>
      <SEOHead
        title="Yacht Winter Storage and Winterization in Mallorca - Complete Guide | Boating Mallorca"
        description="Independent guide to winter storage for boats in Mallorca. Compare boatyards, storage types, costs, winterization checklists, and seasonal timelines."
        canonical="https://boatingmallorca.ai/explore/guides/winter-storage"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Winter Storage and Winterization Guide for Mallorca',
          description: 'Complete guide to storing and winterizing your boat in Mallorca.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Winter Storage and Winterization Guide"
        subtitle="How to safely store and protect your boat during the Mallorca off-season. Storage types, costs, boatyard comparisons, and a complete winterization checklist."
        image="https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Boats in dry dock storage at a Mallorca boatyard"
        ctaText="Find Maintenance Providers"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Storage Options Compared</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Mallorca offers four main storage approaches, each with different trade-offs between cost,
            protection, and convenience. Prices are per meter of boat length per month.
          </p>
          <div className="flex flex-col gap-4">
            {storageOptions.map((opt) => (
              <article key={opt.type} className="card p-5 lg:p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading font-bold text-lg text-navy-800">{opt.type}</h3>
                  <span className="text-sm font-semibold text-ocean-600">{opt.priceRange}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-island-600 font-semibold uppercase">Advantages</span>
                    <p className="text-gray-600 mt-0.5">{opt.pros}</p>
                  </div>
                  <div>
                    <span className="text-xs text-red-500 font-semibold uppercase">Considerations</span>
                    <p className="text-gray-600 mt-0.5">{opt.cons}</p>
                  </div>
                  <div>
                    <span className="text-xs text-ocean-600 font-semibold uppercase">Best For</span>
                    <p className="text-gray-600 mt-0.5">{opt.best}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Boatyards in Mallorca</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {boatyards.map((yard) => (
              <article key={yard.name} className="card p-5">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-ocean-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-800">{yard.name}</h3>
                    <span className="text-xs text-gray-500">{yard.location}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{yard.character}</p>
                <div className="text-xs">
                  <span className="text-gray-500">Capacity: </span>
                  <span className="text-navy-700 font-medium">{yard.capacity}</span>
                </div>
                <div className="text-xs mt-1">
                  <span className="text-gray-500">Services: </span>
                  <span className="text-navy-700">{yard.services}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Winterization Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklist.map((cat) => (
              <div key={cat.category} className="card p-5">
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-3">{cat.category}</h3>
                <ul className="flex flex-col gap-2">
                  {cat.tasks.map((task) => (
                    <li key={task} className="flex gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-island-500 flex-shrink-0 mt-0.5" />
                      {task}
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
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Seasonal Timeline</h2>
          <div className="flex flex-col gap-3 mb-10">
            {timeline.map((t) => (
              <div key={t.month} className="flex gap-4 items-start p-4 bg-white rounded-xl">
                <Calendar className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-navy-800">{t.month}</span>
                  <p className="text-sm text-gray-600">{t.task}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/mooring-maintenance" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Mooring & Maintenance</h3>
              <p className="text-sm text-gray-600">Year-round maintenance services for your boat.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">View services <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/boating-costs" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Costs</h3>
              <p className="text-sm text-gray-600">Full cost breakdown including storage fees.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/weather-wind-guide" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Weather & Wind</h3>
              <p className="text-sm text-gray-600">Understand winter conditions in Mallorca waters.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Matched With Storage and Maintenance Providers"
        subtitle="Tell us your boat's size and what services you need. We will connect you with the right boatyard for your winterization."
        buttonText="Get Matched Free"
      />
    </>
  );
}
