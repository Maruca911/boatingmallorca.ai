import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Fish, Droplets } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const spots = [
  {
    name: 'Cala Varques Cave System',
    coast: 'East Coast',
    depth: '1-8m',
    visibility: '15-25m',
    marineLife: 'Barracuda, grouper, octopus, damselfish, moray eels',
    anchorage: 'Sandy bottom 3-5m, 50m offshore',
    boatType: 'Any -- shallow draft preferred for close approach',
    description: 'The underwater cave entrances along the cliff base are accessible only from the sea side. Snorkelers can explore shallow caverns while divers go deeper into the cave system. Light beams through the rock create extraordinary effects.',
    bestTime: 'May - October, morning for best light in caves',
  },
  {
    name: 'Illa del Sec (El Toro Marine Reserve)',
    coast: 'Southwest Coast',
    depth: '5-25m',
    visibility: '20-30m',
    marineLife: 'Large grouper, eagle rays, amberjack, barracuda schools, nudibranchs',
    anchorage: 'Mooring buoys available (mandatory). No anchoring in reserve.',
    boatType: 'Motor yacht or RIB for quick access from Palma or Port Adriano',
    description: 'A fully protected marine reserve since 2004, the underwater life here is exceptional. Grouper approach divers without fear, and large schools of barracuda circle overhead. The rocky reef drops from 5m to 25m+ with walls, overhangs, and swim-throughs.',
    bestTime: 'Year-round, best visibility June - September',
  },
  {
    name: 'Cap de Formentor Drop-off',
    coast: 'Northeast Tip',
    depth: '3-40m+',
    visibility: '20-35m',
    marineLife: 'Pelagic fish, tuna (seasonal), grouper, moray eels, sea stars',
    anchorage: '8-12m over sand on the south side of the cape',
    boatType: 'Seaworthy vessel -- exposed location. Check weather carefully.',
    description: 'The dramatic underwater cliffs mirror the landscape above. Walls drop vertically from 3m to 40m+ with huge boulders creating overhangs and caves. Strong currents bring pelagic species close to shore. For experienced snorkelers and all levels of divers.',
    bestTime: 'June - September, calm weather only',
  },
  {
    name: 'Cala Mondrago',
    coast: 'Southeast Coast',
    depth: '1-12m',
    visibility: '15-25m',
    marineLife: 'Wrasse, damselfish, sea bream, octopus, starfish, seahorses (rare)',
    anchorage: 'Sandy bottom 4-6m outside the bay. Mooring buoys seasonal.',
    boatType: 'Any -- protected bay suitable for all vessels',
    description: 'Within the Mondrago Natural Park, the shallow waters between the two main beaches are a snorkeler\'s paradise. Posidonia meadows host juvenile fish, and the rocky outcrops between the beaches are rich with invertebrate life. Very family-friendly.',
    bestTime: 'April - October, early morning before crowds',
  },
  {
    name: 'Cabrera Archipelago',
    coast: 'South (National Park)',
    depth: '2-35m',
    visibility: '25-40m',
    marineLife: 'Massive grouper, lobster, dolphins (seasonal), loggerhead turtles (rare), huge fish diversity',
    anchorage: 'Mandatory mooring buoys. Book through MITECO reservation system.',
    boatType: 'Seaworthy vessel for the 10nm crossing from Colonia de Sant Jordi',
    description: 'The crown jewel of Balearic diving. Cabrera\'s waters have been strictly protected since 1991, resulting in fish populations and sizes rarely seen elsewhere in the Mediterranean. The Blue Grotto (Sa Cova Blava) is a must-visit -- the luminous blue light inside is unforgettable.',
    bestTime: 'June - September. Book mooring months in advance.',
  },
  {
    name: 'Cala Tuent',
    coast: 'Northwest Coast',
    depth: '2-15m',
    visibility: '15-25m',
    marineLife: 'Grouper, barracuda, octopus, colorful wrasse, urchins',
    anchorage: '5-8m over sand. Sheltered from westerlies.',
    boatType: 'Any -- well-sheltered cove',
    description: 'A quieter alternative to neighboring Sa Calobra. The underwater landscape features large boulders creating channels and swim-throughs. The rocky seabed transitions between posidonia, sand, and reef, creating varied habitats.',
    bestTime: 'May - October, afternoon sun illuminates the underwater terrain',
  },
  {
    name: 'Dragonera Island Reef',
    coast: 'Southwest Tip',
    depth: '3-20m',
    visibility: '15-30m',
    marineLife: 'Grouper, moray eels, octopus, nudibranchs, corals, sponges',
    anchorage: '5-8m on east side of island. Check for protected zone buoys.',
    boatType: 'Motor yacht or sailing yacht with good ground tackle',
    description: 'The rocky reef around Dragonera island drops away in steps, creating multiple depth levels to explore. The east side is more sheltered and better for snorkeling, while the exposed west side offers more dramatic diving with larger marine life.',
    bestTime: 'June - September, east side for calmer conditions',
  },
];

const whatToBring = [
  { item: 'Mask and snorkel', note: 'Bring your own for comfort and fit. Rental quality varies.' },
  { item: 'Fins', note: 'Full-foot fins for snorkeling, open-heel with boots for diving.' },
  { item: 'Wetsuit or rash guard', note: '3mm wetsuit recommended May-June and September-October. Rash guard sufficient July-August.' },
  { item: 'Underwater camera', note: 'The visibility justifies investing in a waterproof housing or action camera.' },
  { item: 'Reef-safe sunscreen', note: 'Chemical sunscreens damage marine ecosystems. Use mineral-based SPF.' },
  { item: 'Surface marker buoy', note: 'Essential for snorkeling near boat traffic areas. Makes you visible to vessels.' },
];

export default function SnorkelingDiving() {
  return (
    <>
      <SEOHead
        title="Best Snorkeling and Diving Spots by Boat in Mallorca | Boating Mallorca"
        description="7 outstanding snorkeling and diving sites around Mallorca accessible by boat. Marine life, visibility, anchoring info, and boat type recommendations."
        canonical="https://boatingmallorca.ai/explore/guides/snorkeling-diving"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Snorkeling and Diving Spots Accessible by Boat in Mallorca',
          description: 'Guide to the best underwater sites around Mallorca reachable by boat.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Snorkeling and Diving Spots by Boat"
        subtitle="The best underwater experiences in Mallorca are at sites only reachable from the water. Anchoring depths, marine life, visibility, and boat type recommendations for every spot."
        image="https://images.pexels.com/photos/3046638/pexels-photo-3046638.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Crystal clear underwater view near Mallorca coast"
        ctaText="Book a Snorkeling Boat Tour"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Why Snorkel and Dive from a Boat?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl leading-relaxed">
            Mallorca's most spectacular underwater sites sit below remote cliffs with no land access, inside marine
            reserves with mooring-only policies, or at offshore islands and reefs. A boat transforms your
            options from a handful of busy beach-entry points to the entire 550km coastline.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-ocean-50 rounded-xl p-5 text-center">
              <Eye className="w-6 h-6 text-ocean-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-navy-800">Up to 40m Visibility</span>
              <p className="text-xs text-gray-600 mt-1">Remote sites away from beach runoff offer the clearest water</p>
            </div>
            <div className="bg-ocean-50 rounded-xl p-5 text-center">
              <Fish className="w-6 h-6 text-ocean-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-navy-800">Protected Marine Reserves</span>
              <p className="text-xs text-gray-600 mt-1">Boat-access-only reserves have the largest fish populations</p>
            </div>
            <div className="bg-ocean-50 rounded-xl p-5 text-center">
              <Droplets className="w-6 h-6 text-ocean-600 mx-auto mb-2" />
              <span className="text-sm font-semibold text-navy-800">Multiple Sites Per Day</span>
              <p className="text-xs text-gray-600 mt-1">Hop between 2-3 sites on a single boat trip</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">7 Top Boat-Access Snorkeling & Diving Sites</h2>
          <div className="flex flex-col gap-8">
            {spots.map((spot, i) => (
              <article key={spot.name} className="card overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-ocean-600 bg-ocean-50 px-2.5 py-1 rounded">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-heading font-bold text-xl text-navy-800">{spot.name}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{spot.coast}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{spot.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Depth Range</span>
                      <span className="text-sm font-medium text-navy-700">{spot.depth}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Visibility</span>
                      <span className="text-sm font-medium text-ocean-600">{spot.visibility}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Best Time</span>
                      <span className="text-sm font-medium text-navy-700">{spot.bestTime}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">Boat Type</span>
                      <span className="text-sm font-medium text-navy-700">{spot.boatType}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {spot.marineLife.split(', ').map((species) => (
                      <span key={species} className="text-xs px-2 py-0.5 bg-island-50 text-island-700 rounded">{species}</span>
                    ))}
                  </div>
                  <div className="bg-sand-50 border border-sand-200 rounded-lg p-3">
                    <span className="text-xs font-semibold text-sand-700 uppercase tracking-wider">Anchorage</span>
                    <p className="text-sm text-gray-700 mt-1">{spot.anchorage}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">What to Bring</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {whatToBring.map((item) => (
              <div key={item.item} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                <Fish className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-navy-800">{item.item}</span>
                  <p className="text-sm text-gray-600 mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boat-only-beaches" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boat-Only Beaches</h3>
              <p className="text-sm text-gray-600">Many of these coves double as snorkeling spots.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/family-boating" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Family Boating</h3>
              <p className="text-sm text-gray-600">Snorkeling spots safe and suitable for children.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/boating-regulations" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Regulations</h3>
              <p className="text-sm text-gray-600">Marine reserve rules and mooring requirements.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Dive Into Mallorca's Underwater World"
        subtitle="Whether you want a guided snorkeling tour or a private boat for reef hopping, we will match you with the right provider."
        buttonText="Get Matched Free"
      />
    </>
  );
}
