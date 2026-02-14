import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Anchor } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const restaurants = [
  {
    name: 'Restaurant Illeta',
    location: 'Illetas, Southwest Coast',
    cuisine: 'Mediterranean seafood, paella',
    docking: 'Drop anchor 50m offshore in 4-6m over sand. Dinghy or swim to the restaurant platform.',
    priceRange: '40-80 EUR/person',
    reservation: 'Recommended in summer. Call ahead for waterside tables.',
    highlight: 'Feet-in-the-water dining with views across Palma Bay. The grilled lobster is legendary.',
  },
  {
    name: 'Ca\'s Patro March',
    location: 'Cala Deia, Northwest Coast',
    cuisine: 'Fresh fish, traditional Mallorcan',
    docking: 'Anchor in Cala Deia (3-5m over rock and sand). Short dinghy ride to the cove.',
    priceRange: '50-100 EUR/person',
    reservation: 'Essential -- weeks in advance for peak summer.',
    highlight: 'Cliffside terrace overlooking Deia\'s tiny fishing cove. Featured in The Night Manager TV series.',
  },
  {
    name: 'Port Blau',
    location: 'Cala Figuera, Southeast Coast',
    cuisine: 'Seafood, Mediterranean fusion',
    docking: 'Berths available at the fishing port quay. Or anchor in the outer bay and dinghy in.',
    priceRange: '30-60 EUR/person',
    reservation: 'Walk-ins possible except weekends in July-August.',
    highlight: 'Authentic fishing village atmosphere. Watch fishermen mend nets while you eat.',
  },
  {
    name: 'Restaurante Es Mollet',
    location: 'Port de Soller, Northwest Coast',
    cuisine: 'Seafood, Mallorcan tapas',
    docking: 'Marina berths available in Port de Soller. Walk to the restaurant along the promenade.',
    priceRange: '35-65 EUR/person',
    reservation: 'Recommended for dinner, especially weekends.',
    highlight: 'Set in a beautifully restored boathouse. The calamari and prawn dishes use morning-catch seafood.',
  },
  {
    name: 'Flanigan',
    location: 'Puerto Portals, Southwest Coast',
    cuisine: 'International, steaks, sushi',
    docking: 'Full marina services at Puerto Portals. Walk to the restaurant on the promenade.',
    priceRange: '50-120 EUR/person',
    reservation: 'Essential for dinner. Terrace tables go fast.',
    highlight: 'The see-and-be-seen spot of Puerto Portals. Superyacht watching from the terrace.',
  },
  {
    name: 'Sa Foradada',
    location: 'Son Marroig, Northwest Coast',
    cuisine: 'Paella, grilled fish, sangria',
    docking: 'Anchor off the Sa Foradada rock in 8-12m over sand. Dinghy to the small pier.',
    priceRange: '30-50 EUR/person',
    reservation: 'Walk-ins usually possible. Cash only.',
    highlight: 'Incredibly scenic location at the base of the famous pierced rock. Only accessible by boat or a steep 1-hour hike.',
  },
  {
    name: 'El Patio de Port Adriano',
    location: 'Port Adriano, Southwest Coast',
    cuisine: 'Mediterranean fine dining',
    docking: 'Full superyacht marina facilities. Berths up to 60m.',
    priceRange: '60-150 EUR/person',
    reservation: 'Recommended. Smart casual dress code.',
    highlight: 'Philippe Starck-designed marina setting. Modern Mediterranean cuisine with Asian influences.',
  },
  {
    name: 'Can Pep',
    location: 'Colonia de Sant Jordi, South Coast',
    cuisine: 'Grilled meats, local seafood, tapas',
    docking: 'Berths in the small marina. Or anchor in the bay and dinghy to the public dock.',
    priceRange: '25-50 EUR/person',
    reservation: 'Walk-ins usually fine except August weekends.',
    highlight: 'Gateway to Cabrera. Unpretentious local favorite with generous portions.',
  },
  {
    name: 'Mhares Sea Club',
    location: 'Playa de Palma, South Coast',
    cuisine: 'Beach club dining, cocktails, sushi',
    docking: 'Anchor offshore in 3-5m and use their tender service or swim in.',
    priceRange: '50-100 EUR/person',
    reservation: 'Essential, especially for weekend brunch.',
    highlight: 'Stylish beach club with infinity pool, DJs, and upscale Mediterranean food.',
  },
  {
    name: 'Restaurante Brismar',
    location: 'Port d\'Andratx, Southwest Coast',
    cuisine: 'Traditional seafood, Mallorcan classics',
    docking: 'Berths at Port d\'Andratx marina. Short walk along the waterfront.',
    priceRange: '35-70 EUR/person',
    reservation: 'Recommended for sunset tables.',
    highlight: 'First-floor terrace with sunset views over the harbor. A local institution since the 1960s.',
  },
];

const coastSections = [
  { name: 'Southwest Coast', description: 'The highest concentration of dock-and-dine options, from casual beach clubs to fine dining at designer marinas.', count: 5 },
  { name: 'Northwest Coast', description: 'Dramatic Tramuntana cliff settings with remote restaurants accessible mainly by boat. Unforgettable scenery.', count: 3 },
  { name: 'Southeast Coast', description: 'Authentic fishing villages and hidden coves with simple, locally-sourced seafood restaurants.', count: 1 },
  { name: 'South Coast', description: 'Beach clubs and gateway restaurants for Cabrera trips. Relaxed atmosphere and good value.', count: 1 },
];

export default function DockAndDine() {
  return (
    <>
      <SEOHead
        title="Dock-and-Dine: Best Boat-Friendly Restaurants in Mallorca | Boating Mallorca"
        description="10 best restaurants in Mallorca you can reach by boat. Docking info, approach details, menus, prices, and reservation tips for every dock-and-dine spot."
        canonical="https://boatingmallorca.ai/explore/guides/dock-and-dine"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Dock-and-Dine: Boat-Friendly Restaurants in Mallorca',
          description: 'Guide to the best restaurants accessible by boat around Mallorca.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Dock-and-Dine: Boat-Friendly Restaurants"
        subtitle="The best meals in Mallorca happen at the water's edge. These restaurants are best reached by boat -- with details on where to anchor, moor, or dinghy ashore."
        image="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Waterfront restaurant terrace overlooking boats in a Mallorca harbor"
        ctaText="Plan a Dock-and-Dine Day Trip"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">By Coastline</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Mallorca's coastline offers distinct dining experiences depending on which direction you head.
            The southwest coast has the most variety, while the northwest offers the most dramatic settings.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {coastSections.map((coast) => (
              <div key={coast.name} className="bg-ocean-50 rounded-xl p-5 text-center">
                <MapPin className="w-5 h-5 text-ocean-600 mx-auto mb-2" />
                <h3 className="font-heading font-semibold text-navy-800 text-sm mb-1">{coast.name}</h3>
                <p className="text-xs text-gray-600">{coast.description}</p>
                <span className="text-xs text-ocean-600 font-semibold mt-2 block">{coast.count} restaurant{coast.count > 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">10 Best Dock-and-Dine Spots</h2>
          <div className="flex flex-col gap-6">
            {restaurants.map((r, i) => (
              <article key={r.name} className="card overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-ocean-600 bg-ocean-50 px-2.5 py-1 rounded">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-heading font-bold text-xl text-navy-800">{r.name}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded flex items-center gap-1"><MapPin className="w-3 h-3" />{r.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">{r.highlight}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <span className="text-xs text-gray-500 block mb-0.5">Cuisine</span>
                      <span className="text-sm text-navy-700">{r.cuisine}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block mb-0.5">Price Range</span>
                      <span className="text-sm font-medium text-ocean-600">{r.priceRange}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block mb-0.5">Reservations</span>
                      <span className="text-sm text-navy-700">{r.reservation}</span>
                    </div>
                  </div>
                  <div className="bg-sand-50 border border-sand-200 rounded-lg p-3">
                    <span className="text-xs font-semibold text-sand-700 uppercase tracking-wider flex items-center gap-1"><Anchor className="w-3 h-3" /> Docking Info</span>
                    <p className="text-sm text-gray-700 mt-1">{r.docking}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Tips for Dock-and-Dine Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <Star className="w-5 h-5 text-sand-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-navy-800">Call ahead for mooring</span>
                <p className="text-sm text-gray-600 mt-0.5">Some restaurants can arrange a mooring or reserve quay space if you call the morning of your visit.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <Star className="w-5 h-5 text-sand-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-navy-800">Carry a reliable dinghy</span>
                <p className="text-sm text-gray-600 mt-0.5">Several of the best spots require anchoring offshore and tendering in. A good dinghy is essential.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <Star className="w-5 h-5 text-sand-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-navy-800">Arrive for lunch, not dinner</span>
                <p className="text-sm text-gray-600 mt-0.5">Lunch is the main meal in Spain. Restaurants are freshest and views are best with daytime light.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <Star className="w-5 h-5 text-sand-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-navy-800">Watch the wine with anchoring</span>
                <p className="text-sm text-gray-600 mt-0.5">If you are the skipper, remember Spain enforces blood alcohol limits on the water. Designate a driver.</p>
              </div>
            </div>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boat-only-beaches" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boat-Only Beaches</h3>
              <p className="text-sm text-gray-600">Combine dining with a swim at a secret cove.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/boating-costs" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Costs</h3>
              <p className="text-sm text-gray-600">Budget for dining alongside marina and fuel costs.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/family-boating" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Family Boating</h3>
              <p className="text-sm text-gray-600">Kid-friendly restaurants along the coast.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan a Dock-and-Dine Day Trip"
        subtitle="Tell us your starting point and how many people are on board. We will match you with boats perfect for a scenic lunch cruise."
        buttonText="Get Matched Free"
      />
    </>
  );
}
