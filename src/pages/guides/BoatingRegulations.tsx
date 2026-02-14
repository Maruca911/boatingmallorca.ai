import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const licenseTypes = [
  { name: 'No License Required', vessels: 'Boats under 6m with engine up to 11.26 kW (15 HP)', scope: 'Up to 2 nautical miles from a safe harbor', notes: 'Most small rental boats and RIBs for beach hopping fall into this category.' },
  { name: 'Navegacion Basica (PNB)', vessels: 'Boats up to 8m', scope: 'Up to 5 nautical miles from coast', notes: 'The most common license for recreational boaters in Spain. Obtainable with a short course.' },
  { name: 'Patron de Embarcaciones de Recreo (PER)', vessels: 'Boats up to 15m', scope: 'Up to 12 nautical miles from coast', notes: 'Required for most bareboat charters. Equivalent to the ICC for EU visitors.' },
  { name: 'Patron de Yate', vessels: 'Boats up to 24m', scope: 'Unlimited coastal navigation', notes: 'For larger yachts. Requires PER plus additional theory and sea time.' },
  { name: 'Capitan de Yate', vessels: 'No limit', scope: 'Worldwide ocean navigation', notes: 'The highest Spanish recreational qualification. Required for ocean crossings.' },
  { name: 'ICC (International)', vessels: 'Varies by endorsement', scope: 'Accepted in Spain for EU/EEA nationals', notes: 'Non-Spanish EU residents can use an ICC. Non-EU nationals should carry their national license plus ICC.' },
];

const anchoringZones = [
  { zone: 'Posidonia Protection Zones', rule: 'Anchoring prohibited over posidonia meadows throughout the Balearic Islands', fine: 'Up to 300,000 EUR', detail: 'Posidonia oceanica seagrass beds are UNESCO-protected. Use designated mooring buoys or anchor on sand patches only. Official maps are available at balearsnatura.com.' },
  { zone: 'Marine Reserves', rule: 'No anchoring or fishing without specific permits', fine: 'Up to 60,000 EUR', detail: 'The Cabrera National Park, Dragonera Nature Reserve, and several coastal reserves have strict access controls. Book moorings in advance.' },
  { zone: 'Port and Harbor Approaches', rule: 'No anchoring within marked shipping channels or 200m of commercial port entrances', fine: 'Up to 6,000 EUR', detail: 'Stay clear of ferry routes, especially near Palma, Alcudia, and Soller.' },
  { zone: 'Swimming Zones', rule: 'No motorized vessels within 200m of bathing beaches (50m for non-motorized)', fine: 'Up to 3,000 EUR', detail: 'Yellow buoys mark swimming zones. Approach beaches at dead slow speed perpendicular to shore.' },
];

const safetyEquipment = [
  { item: 'Life jackets', requirement: 'One per person on board (CE-approved)' },
  { item: 'Fire extinguisher', requirement: 'Minimum 1 x 2kg dry powder for boats over 6m' },
  { item: 'Flares', requirement: '2 hand flares + 2 parachute rockets for Zone 2+ navigation' },
  { item: 'Navigation lights', requirement: 'Required on all vessels operating between sunset and sunrise' },
  { item: 'VHF Radio', requirement: 'Mandatory for boats over 12m or navigating beyond 5nm' },
  { item: 'First aid kit', requirement: 'Mandatory for all recreational vessels' },
  { item: 'Anchor and chain', requirement: 'Appropriate for vessel size' },
  { item: 'Bilge pump', requirement: 'Manual or electric, mandatory for decked boats' },
  { item: 'Foghorn or whistle', requirement: 'Sound signaling device mandatory' },
];

const speedLimits = [
  { zone: 'Within port/harbor', limit: '3 knots' },
  { zone: 'Within 200m of shore', limit: '3 knots' },
  { zone: 'Within 500m of shore', limit: '5 knots' },
  { zone: 'Coastal waters', limit: 'No general limit (use prudent speed)' },
  { zone: 'Marine reserves', limit: 'As posted, typically 5 knots' },
];

export default function BoatingRegulations() {
  return (
    <>
      <SEOHead
        title="Mallorca Boating Regulations and License Guide 2026 | Boating Mallorca"
        description="Complete guide to boating regulations in Mallorca: license types, anchoring restrictions, posidonia zones, speed limits, safety equipment, and VHF requirements."
        canonical="https://boatingmallorca.ai/explore/guides/boating-regulations"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Mallorca Boating Regulations and License Guide',
          description: 'Comprehensive guide covering all boating regulations for Mallorca waters.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Mallorca Boating Regulations and License Guide"
        subtitle="Everything you need to know about boating legally and safely in Mallorca waters. Licenses, anchoring laws, protected zones, safety equipment, and speed limits."
        image="https://images.pexels.com/photos/1007836/pexels-photo-1007836.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Sailboat navigating near Mallorca coastline"
        ctaText="Skip the Paperwork -- Charter With a Skipper"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 lg:p-6 flex gap-4 mb-10">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-navy-800 mb-1">Important Disclaimer</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Maritime regulations can change. This guide reflects rules current as of early 2026. Always verify requirements with the Spanish Maritime Authority (Direccion General de la Marina Mercante) or your charter company before departure. When in doubt, consult a local maritime lawyer.
              </p>
            </div>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Boating License Requirements</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Spain has a tiered licensing system for recreational boating. The license you need depends on your vessel's length and how far from shore you plan to navigate.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">License</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">Vessel Size</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">Navigation Scope</th>
                  <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800 hidden lg:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {licenseTypes.map((lic, i) => (
                  <tr key={lic.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-navy-700">{lic.name}</td>
                    <td className="px-4 py-3 text-gray-600">{lic.vessels}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{lic.scope}</td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{lic.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-ocean-50 rounded-xl p-5 flex gap-4">
            <Info className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <strong>Not sure about licenses?</strong> A skippered charter eliminates the need for any license. Your professional captain handles all navigation, compliance, and safety while you enjoy the trip. <Link to="/get-matched" className="text-ocean-600 font-medium hover:underline">Get matched with a skippered charter.</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Anchoring Restrictions and Protected Zones</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            The Balearic Islands have some of the strictest anchoring regulations in the Mediterranean. Enforcement has increased significantly since 2023, with patrol boats actively monitoring protected areas.
          </p>
          <div className="flex flex-col gap-5">
            {anchoringZones.map((zone) => (
              <article key={zone.zone} className="card p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-heading font-bold text-lg text-navy-800">{zone.zone}</h3>
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">Fine: {zone.fine}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-2">{zone.rule}</p>
                <p className="text-sm text-gray-600">{zone.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Speed Limits</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-ocean-50">
                      <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">Zone</th>
                      <th className="text-left px-4 py-3 font-heading font-semibold text-navy-800">Speed Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {speedLimits.map((s, i) => (
                      <tr key={s.zone} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 text-navy-700">{s.zone}</td>
                        <td className="px-4 py-3 font-medium text-ocean-600">{s.limit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Required Safety Equipment</h2>
              <div className="flex flex-col gap-2">
                {safetyEquipment.map((eq) => (
                  <div key={eq.item} className="flex gap-2.5 py-2">
                    <CheckCircle className="w-4 h-4 text-island-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-navy-800">{eq.item}</span>
                      <p className="text-xs text-gray-600">{eq.requirement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boating-costs" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Costs</h3>
              <p className="text-sm text-gray-600">Factor in license fees, insurance, and fines into your budget.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/boat-only-beaches" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boat-Only Beaches</h3>
              <p className="text-sm text-gray-600">Know the anchoring rules before visiting remote coves.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/weather-wind-guide" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Weather & Wind</h3>
              <p className="text-sm text-gray-600">Understand conditions that affect navigation requirements.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure About Regulations? Let a Local Handle It"
        subtitle="A skippered charter means zero licensing worries. Your professional captain handles all compliance while you enjoy the ride."
        buttonText="Find a Skippered Charter"
      />
    </>
  );
}
