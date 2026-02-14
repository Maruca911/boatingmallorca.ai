import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, MapPin, Sun, Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const beaches = [
  {
    name: 'Cala Deia',
    coast: 'Northwest',
    coordinates: '39.7494 N, 2.6478 E',
    depth: '3-6m over sand and rock',
    shelter: 'Good shelter from S and SW winds',
    bestTime: 'May - September',
    crowd: 'Low to moderate',
    description: 'A narrow rocky cove nestled below the artists\' village of Deia. The approach by boat reveals dramatic Tramuntana cliffs. The water is exceptionally clear over a mixed sand and rock seabed. Popular with local fishermen in the early morning.',
    tip: 'Anchor in the outer part of the cove on sand. The inner area has submerged rocks.',
  },
  {
    name: 'Cala en Basset',
    coast: 'Southwest',
    coordinates: '39.5832 N, 2.3501 E',
    depth: '4-8m over sand',
    shelter: 'Protected from N and NE winds',
    bestTime: 'June - October',
    crowd: 'Very low',
    description: 'One of Mallorca\'s most remote coves, lying at the foot of the old watchtower Torre de Cala en Basset. The overland hike takes 2+ hours making boat access the only practical option. Crystal waters and a small pebble beach.',
    tip: 'Approach from the south. No facilities on shore -- bring everything you need.',
  },
  {
    name: 'Cala Murta',
    coast: 'Northeast (Formentor)',
    coordinates: '39.9342 N, 3.1423 E',
    depth: '5-10m over sand',
    shelter: 'Excellent shelter from S and SW winds',
    bestTime: 'May - October',
    crowd: 'Low',
    description: 'Hidden on the northern side of the Formentor peninsula, this pebble beach is surrounded by ancient pine forests that reach down to the shoreline. The approach from the sea offers spectacular views of Cap de Formentor lighthouse.',
    tip: 'Anchor in 6-8m and swim ashore. There is a small freshwater spring among the trees.',
  },
  {
    name: 'Cala Varques',
    coast: 'East',
    coordinates: '39.4656 N, 3.3012 E',
    depth: '3-5m over sand',
    shelter: 'Protected from W and NW winds',
    bestTime: 'April - October',
    crowd: 'Moderate (lower by boat)',
    description: 'While technically reachable on foot via a 30-minute walk, arriving by boat is far more comfortable and lets you access the turquoise lagoon area that land visitors cannot reach. Underwater caves along the cliff edges are spectacular for snorkeling.',
    tip: 'The seabed is sandy with good holding. Stay clear of the cave entrance current.',
  },
  {
    name: 'Cala Egos',
    coast: 'Southeast',
    coordinates: '39.3524 N, 3.2167 E',
    depth: '4-7m over sand and posidonia',
    shelter: 'Good shelter from N and NW winds',
    bestTime: 'May - September',
    crowd: 'Very low',
    description: 'A tiny twin-cove system south of Cala d\'Or. The two inlets are connected by a natural rock arch underwater, creating a spectacular snorkeling circuit. Virtually empty even in peak season when approached by boat.',
    tip: 'Anchor on the sand patches between posidonia. Do not anchor directly on seagrass.',
  },
  {
    name: 'Cala Figuera (Formentor)',
    coast: 'North',
    coordinates: '39.9301 N, 3.1678 E',
    depth: '6-12m over sand',
    shelter: 'Excellent shelter from S, SW, and W winds',
    bestTime: 'June - September',
    crowd: 'Low',
    description: 'Not to be confused with the fishing village of the same name in the southeast. This Cala Figuera is a deep, fjord-like inlet on the Formentor peninsula. Towering cliffs create a dramatic amphitheatre. The deep blue water is ideal for swimming.',
    tip: 'The depth drops quickly. Anchor carefully and use a stern line to the rocks if staying overnight.',
  },
  {
    name: 'Illa de Sa Dragonera (Coves)',
    coast: 'Southwest',
    coordinates: '39.5886 N, 2.3189 E',
    depth: '5-8m over sand',
    shelter: 'Variable -- check weather carefully',
    bestTime: 'June - September',
    crowd: 'Very low',
    description: 'The uninhabited dragon-shaped island off Mallorca\'s southwest tip has several anchorages only accessible by boat. Cala Lladó on the eastern side offers the best shelter and a small beach. The island is a protected nature reserve with resident Lilford\'s wall lizards.',
    tip: 'Landing requires a permit from the park authority. Anchor and dinghy to the jetty.',
  },
  {
    name: 'Caló des Macs',
    coast: 'South (Cabrera)',
    coordinates: '39.1556 N, 2.9345 E',
    depth: '3-6m over sand',
    shelter: 'Protected from N and NE winds',
    bestTime: 'June - September',
    crowd: 'Very low (limited permits)',
    description: 'Within the Cabrera National Maritime Park, this tiny cove offers water so clear it appears to have no depth. Access requires a mooring permit from the park authority, limiting the number of visitors. The snorkeling over posidonia meadows is world-class.',
    tip: 'Book your mooring buoy well in advance during peak season. No anchoring permitted.',
  },
];

const anchoringTips = [
  { label: 'Check posidonia maps', detail: 'Anchoring on posidonia meadows is illegal in the Balearics and carries fines up to 300,000 EUR. Use official charts to identify sand patches.' },
  { label: 'Set a proper anchor alarm', detail: 'Many of these remote coves have limited swinging room. Use a GPS anchor alarm app to alert you if the boat drags.' },
  { label: 'Carry a long anchor line', detail: 'Some coves have steep drop-offs near shore. A minimum of 50m of chain and rode allows safe anchoring in deeper water.' },
  { label: 'Bring a shore line', detail: 'In narrow coves, a stern line to a rock or tree on shore prevents swinging and keeps you centered in the anchorage.' },
  { label: 'Check the forecast twice', detail: 'Remote coves can become dangerous with wind shifts. Always check for weather changes before committing to an overnight anchorage.' },
  { label: 'Leave no trace', detail: 'Pack out all waste. These pristine spots remain beautiful because boaters treat them with respect.' },
];

export default function BoatOnlyBeaches() {
  return (
    <>
      <SEOHead
        title="Boat-Accessible-Only Beaches in Mallorca - Secret Coves by Boat | Boating Mallorca"
        description="Discover 8 stunning beaches and coves in Mallorca only reachable by boat. GPS coordinates, anchoring depths, shelter info, and seasonal tips for each location."
        canonical="https://boatingmallorca.ai/explore/guides/boat-only-beaches"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Boat-Accessible-Only Beaches and Coves in Mallorca',
          description: 'Complete guide to Mallorca beaches only reachable by boat with anchoring info and GPS coordinates.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Boat-Accessible-Only Beaches and Coves"
        subtitle="The most beautiful beaches in Mallorca are the ones most people never see. These pristine coves can only be reached by boat -- and they are worth every nautical mile."
        image="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Secluded turquoise cove only accessible by boat in Mallorca"
        ctaText="Rent a Boat to Explore"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Why These Beaches Are Special</h2>
          <p className="text-gray-600 mb-6 max-w-3xl leading-relaxed">
            Mallorca's 550km coastline hides dozens of coves that have no road access, no parking, and often no footpath.
            While land-based tourists crowd the popular beaches, these boat-only spots remain pristine and uncrowded -- even
            in peak summer. Each location below includes the practical information you need to anchor safely and enjoy the experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-ocean-50 rounded-xl p-5 text-center">
              <Anchor className="w-6 h-6 text-ocean-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-navy-800">Anchoring Depths</span>
              <p className="text-xs text-gray-600 mt-1">Verified seabed type and depth ranges</p>
            </div>
            <div className="bg-ocean-50 rounded-xl p-5 text-center">
              <Shield className="w-6 h-6 text-ocean-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-navy-800">Wind Shelter Info</span>
              <p className="text-xs text-gray-600 mt-1">Which winds each cove protects against</p>
            </div>
            <div className="bg-ocean-50 rounded-xl p-5 text-center">
              <Sun className="w-6 h-6 text-ocean-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-navy-800">Seasonal Crowd Levels</span>
              <p className="text-xs text-gray-600 mt-1">When to visit for the quietest experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">8 Beaches You Can Only Reach by Boat</h2>
          <div className="flex flex-col gap-8">
            {beaches.map((beach, i) => (
              <article key={beach.name} className="card overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-ocean-600 bg-ocean-50 px-2.5 py-1 rounded">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-heading font-bold text-xl text-navy-800">{beach.name}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{beach.coast}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{beach.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Coordinates</span>
                      <span className="text-sm font-medium text-navy-700">{beach.coordinates}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Anchoring Depth</span>
                      <span className="text-sm font-medium text-navy-700">{beach.depth}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Wind Shelter</span>
                      <span className="text-sm font-medium text-navy-700">{beach.shelter}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Crowd Level</span>
                      <span className="text-sm font-medium text-navy-700">{beach.crowd}</span>
                    </div>
                  </div>
                  <div className="bg-sand-50 border border-sand-200 rounded-lg p-3">
                    <span className="text-xs font-semibold text-sand-700 uppercase tracking-wider">Anchoring Tip</span>
                    <p className="text-sm text-gray-700 mt-1">{beach.tip}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Anchoring Safety Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {anchoringTips.map((tip) => (
              <div key={tip.label} className="flex gap-3 p-4 rounded-xl bg-gray-50">
                <MapPin className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-navy-800">{tip.label}</span>
                  <p className="text-sm text-gray-600 mt-0.5">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boating-regulations" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Regulations</h3>
              <p className="text-sm text-gray-600">Posidonia protection zones and anchoring laws you need to know.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/snorkeling-diving" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Snorkeling & Diving</h3>
              <p className="text-sm text-gray-600">Best underwater spots at many of these boat-only coves.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/weather-wind-guide" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Weather & Wind</h3>
              <p className="text-sm text-gray-600">Understand wind patterns before heading to remote anchorages.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Explore Mallorca's Secret Beaches?"
        subtitle="Tell us your group size and experience level, and we will match you with the perfect boat rental or charter to reach these hidden coves."
        buttonText="Get Matched Free"
      />
    </>
  );
}
