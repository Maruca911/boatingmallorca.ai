import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, MapPin } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const species = [
  { name: 'Bluefin Tuna', season: 'June - October', method: 'Trolling, spinning', bestArea: 'South coast, Cabrera channel', size: '15-200+ kg', notes: 'Strict quotas. Must use a licensed fishing charter for tuna.' },
  { name: 'Dorado (Mahi-Mahi)', season: 'July - November', method: 'Trolling, live bait', bestArea: 'Offshore, south and east coast', size: '3-15 kg', notes: 'Follow floating debris or weed lines. Often near fish aggregation devices.' },
  { name: 'Amberjack', season: 'May - October', method: 'Jigging, trolling, live bait', bestArea: 'Rocky reefs, Dragonera, Cap Formentor', size: '5-30 kg', notes: 'Powerful fighters. Target around underwater structures in 30-50m.' },
  { name: 'Swordfish', season: 'June - September', method: 'Deep trolling, drifting', bestArea: 'Deep water south of Cabrera', size: '20-150+ kg', notes: 'Night fishing most productive. Requires specialized tackle.' },
  { name: 'Dentex', season: 'April - June, September - November', method: 'Bottom fishing, live bait', bestArea: 'Rocky coasts, reefs 20-80m', size: '1-8 kg', notes: 'Prized eating fish. Found around rocky structure.' },
  { name: 'Red Snapper', season: 'Year-round, best spring/autumn', method: 'Bottom fishing, natural bait', bestArea: 'Sandy/muddy bottoms 50-200m', size: '0.5-3 kg', notes: 'Excellent table fish. Deep-water bottom fishing.' },
  { name: 'Squid', season: 'September - March', method: 'Eging (squid jigs), handline', bestArea: 'Harbors, shallow rocky coasts', size: '200g-2 kg', notes: 'Popular night fishing target. Best around harbor lights.' },
  { name: 'Barracuda', season: 'May - November', method: 'Casting, trolling, spinning', bestArea: 'Rocky coasts, reef edges', size: '2-8 kg', notes: 'Aggressive strikers. Use wire leaders.' },
];

const regulations = [
  { rule: 'Recreational fishing license required', detail: 'Available online from the Balearic Government (Govern de les Illes Balears). Valid for 3 years. Cost: approximately 25-35 EUR.' },
  { rule: 'Daily catch limit: 5 kg per person', detail: 'Maximum 5 kg of fish per person per day, with a maximum of 1 large pelagic fish (tuna, swordfish) per boat per day.' },
  { rule: 'No fishing in marine reserves', detail: 'Fishing is prohibited in marine reserves including Cabrera National Park, El Toro, and other protected areas unless specifically authorized.' },
  { rule: 'Minimum size restrictions', detail: 'Each species has a legal minimum catch size. Undersized fish must be returned immediately. Check GOIB website for current size limits.' },
  { rule: 'No selling recreational catch', detail: 'Fish caught under a recreational license cannot be sold commercially under any circumstances.' },
  { rule: 'Trolling limited to 2 lines per vessel', detail: 'Recreational trolling is limited to a maximum of 2 lines. Some areas have additional restrictions.' },
  { rule: 'Spearfishing requires separate license', detail: 'Spearfishing has its own license and additional restrictions including no SCUBA use, minimum distance from beaches, and no night fishing.' },
];

const fishingAreas = [
  { area: 'Palma Bay', target: 'Squid, small tuna, barracuda', access: 'Numerous charter options from Palma marinas', character: 'Convenient and varied. Deep water within 30 minutes.' },
  { area: 'Cabrera Channel', target: 'Bluefin tuna, swordfish, dorado', access: 'Depart Colonia de Sant Jordi', character: 'Premier big-game fishing. Deep blue water over the Emile Baudot escarpment.' },
  { area: 'Cap de Formentor', target: 'Amberjack, tuna, dentex', access: 'Depart Port de Pollenca', character: 'Dramatic underwater cliffs attract large predators. Current-rich waters.' },
  { area: 'East Coast (Cala Ratjada)', target: 'Dentex, grouper, red snapper', access: 'Charter from Cala Ratjada harbor', character: 'Excellent bottom fishing over varied seabed. Local fishing tradition.' },
  { area: 'Sa Dragonera', target: 'Amberjack, grouper, barracuda', access: 'Depart Port d\'Andratx or Sant Elm', character: 'Rocky reef fishing around the island. Some areas restricted.' },
];

export default function FishingGuide() {
  return (
    <>
      <SEOHead
        title="Fishing from a Boat in Mallorca: Species, Regulations, Best Spots | Boating Mallorca"
        description="Complete guide to boat fishing in Mallorca: target species by season, fishing regulations and licenses, best fishing grounds, and charter recommendations."
        canonical="https://boatingmallorca.ai/explore/guides/fishing-guide"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Fishing from a Boat in Mallorca: Complete Guide',
          description: 'Everything you need to know about recreational fishing from a boat in Mallorca.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Fishing from a Boat in Mallorca"
        subtitle="From bluefin tuna in deep blue waters to squid in moonlit harbors -- Mallorca offers world-class fishing. Species, seasons, regulations, and the best grounds."
        image="https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Fishing boat on calm Mediterranean waters near Mallorca"
        ctaText="Find a Fishing Charter"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Target Species and Seasons</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            The waters around Mallorca support a diverse range of game fish year-round. The warm Mediterranean
            currents bring pelagic species in summer, while cooler months offer excellent bottom fishing and
            cephalopod hunting.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Species</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Season</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden sm:table-cell">Method</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">Best Area</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden lg:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {species.map((s, i) => (
                  <tr key={s.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-3 font-medium text-navy-700">{s.name}</td>
                    <td className="px-3 py-3 text-ocean-600">{s.season}</td>
                    <td className="px-3 py-3 text-gray-600 hidden sm:table-cell">{s.method}</td>
                    <td className="px-3 py-3 text-gray-600 hidden md:table-cell">{s.bestArea}</td>
                    <td className="px-3 py-3 text-gray-600 hidden lg:table-cell">{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Fishing Regulations</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              Spanish fishing regulations are actively enforced in the Balearics. Fines for violations range from 60 EUR for minor infractions to over 60,000 EUR for serious offenses. When in doubt, use a licensed fishing charter whose captain handles all compliance.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {regulations.map((reg) => (
              <div key={reg.rule} className="card p-5">
                <h3 className="font-heading font-semibold text-navy-800 mb-1">{reg.rule}</h3>
                <p className="text-sm text-gray-600">{reg.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Best Fishing Grounds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {fishingAreas.map((area) => (
              <article key={area.area} className="card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-ocean-500" />
                  <h3 className="font-heading font-bold text-lg text-navy-800">{area.area}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{area.character}</p>
                <div className="text-xs">
                  <span className="text-gray-500">Target: </span>
                  <span className="text-navy-700 font-medium">{area.target}</span>
                </div>
                <div className="text-xs mt-1">
                  <span className="text-gray-500">Access: </span>
                  <span className="text-navy-700">{area.access}</span>
                </div>
              </article>
            ))}
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boating-regulations" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Regulations</h3>
              <p className="text-sm text-gray-600">General boating rules including marine reserve access.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/weather-wind-guide" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Weather & Wind</h3>
              <p className="text-sm text-gray-600">Plan fishing trips around weather windows.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/boating-costs" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Costs</h3>
              <p className="text-sm text-gray-600">Budget for fishing charters and equipment hire.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Land the Big One With a Local Expert"
        subtitle="Our fishing charter partners know where the fish are, handle all licenses and regulations, and provide professional equipment."
        buttonText="Find a Fishing Charter"
      />
    </>
  );
}
