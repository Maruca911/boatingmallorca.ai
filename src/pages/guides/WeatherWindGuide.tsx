import { Link } from 'react-router-dom';
import { ArrowRight, Thermometer, Droplets, Wind } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const months = [
  { name: 'January', airTemp: '10-15', seaTemp: '14', wind: 'Variable, frequent Tramontana', beaufort: '3-6', rain: '8 days', sailing: 'Challenging -- experienced sailors only', highlight: 'Low-season marina rates. Empty anchorages.' },
  { name: 'February', airTemp: '10-16', seaTemp: '13', wind: 'NW dominant, occasional storms', beaufort: '3-6', rain: '7 days', sailing: 'Challenging with occasional calm windows', highlight: 'Almond blossom season along the north coast.' },
  { name: 'March', airTemp: '12-18', seaTemp: '14', wind: 'Transitional, variable direction', beaufort: '2-5', rain: '6 days', sailing: 'Improving -- good for experienced sailors', highlight: 'Shoulder season begins. Marinas opening.' },
  { name: 'April', airTemp: '14-21', seaTemp: '16', wind: 'Embat developing, light to moderate', beaufort: '2-4', rain: '5 days', sailing: 'Good -- reliable afternoon sea breezes', highlight: 'Easter sailing. Wildflowers on coastal cliffs.' },
  { name: 'May', airTemp: '18-25', seaTemp: '19', wind: 'Steady Embat, 8-15 knots afternoons', beaufort: '2-4', rain: '3 days', sailing: 'Excellent -- best month for sailing', highlight: 'Perfect conditions. Warm but not crowded.' },
  { name: 'June', airTemp: '22-29', seaTemp: '22', wind: 'Reliable thermal winds, calm mornings', beaufort: '2-4', rain: '2 days', sailing: 'Excellent -- ideal for all skill levels', highlight: 'Long days. Water warm enough for swimming.' },
  { name: 'July', airTemp: '25-32', seaTemp: '25', wind: 'Light and variable, Embat dominant', beaufort: '1-3', rain: '1 day', sailing: 'Good for motor; light for sailing', highlight: 'Peak season. Book marinas well ahead.' },
  { name: 'August', airTemp: '26-33', seaTemp: '27', wind: 'Often calm, occasional thermal puffs', beaufort: '1-3', rain: '1 day', sailing: 'Good for motor; can be frustrating for pure sail', highlight: 'Warmest water. Best swimming conditions.' },
  { name: 'September', airTemp: '23-29', seaTemp: '25', wind: 'Embat weakening, Levante possible', beaufort: '2-4', rain: '4 days', sailing: 'Very good -- warm water, returning winds', highlight: 'Fewer crowds. Excellent value period.' },
  { name: 'October', airTemp: '18-24', seaTemp: '22', wind: 'Variable, increasing Tramontana', beaufort: '2-5', rain: '6 days', sailing: 'Good -- watch for autumn gales', highlight: 'Shoulder season. Dramatic skies for photography.' },
  { name: 'November', airTemp: '13-19', seaTemp: '19', wind: 'Stronger NW and N winds returning', beaufort: '3-6', rain: '8 days', sailing: 'Moderate -- check forecasts carefully', highlight: 'Winter haul-out season begins.' },
  { name: 'December', airTemp: '10-16', seaTemp: '16', wind: 'Tramontana dominant, stormy periods', beaufort: '3-7', rain: '8 days', sailing: 'Challenging -- best for experienced crews', highlight: 'Christmas regatta season in Palma.' },
];

const winds = [
  { name: 'Tramontana', direction: 'N / NNW', season: 'October - April', strength: '15-40+ knots', character: 'Cold, dry, and powerful. The dominant winter wind, funneling down from the Pyrenees and accelerating between Mallorca and Menorca. Can arrive with little warning and persist for 2-5 days. Creates significant seas on the north coast.', advice: 'Seek shelter on the south coast. Palma Bay, Cabrera, and the southeast coves offer the best protection.' },
  { name: 'Embat', direction: 'SW (thermal sea breeze)', season: 'May - September', strength: '8-18 knots', character: 'Mallorca\'s signature summer wind. A thermal sea breeze that develops mid-morning, peaks around 14:00-16:00, and dies at sunset. Predictable and pleasant. Strongest along the south and southwest coasts.', advice: 'Perfect for afternoon sailing. Plan departures early morning for flat-calm motoring to your destination.' },
  { name: 'Levante', direction: 'E / ENE', season: 'Year-round, peaks autumn', strength: '10-30 knots', character: 'A warm, humid easterly that brings moisture from the open Mediterranean. Can build quickly and create uncomfortable swells on the east coast. Often accompanies rain and reduced visibility.', advice: 'Move to the west coast or Palma Bay when Levante is forecast. East coast anchorages become untenable.' },
  { name: 'Mistral', direction: 'NW', season: 'Year-round, peaks winter', strength: '15-35 knots', character: 'The famous French northwest wind that crosses the western Mediterranean. Reaches Mallorca with reduced strength compared to the Gulf of Lion but can still create rough conditions, especially on the north and west coasts.', advice: 'Southeast coast offers the best shelter. Good sailing wind when moderate.' },
  { name: 'Xaloc (Sirocco)', direction: 'SE', season: 'Spring and autumn', strength: '10-25 knots', character: 'A warm, sandy wind from North Africa. Brings hazy skies, warm temperatures, and can deposit fine Saharan dust on boats. Usually short-lived (1-2 days) but creates uncomfortable swells on the south coast.', advice: 'North coast harbors provide shelter. Wash boat thoroughly after Xaloc events.' },
  { name: 'Gregal', direction: 'NE', season: 'Autumn - spring', strength: '10-25 knots', character: 'A cool northeastern wind that can persist for several days. Creates choppy conditions along the entire east and northeast coast. Often associated with overcast skies.', advice: 'Head south or into Palma Bay for protection. West coast anchorages are usually calm.' },
];

export default function WeatherWindGuide() {
  return (
    <>
      <SEOHead
        title="Mallorca Weather and Wind Guide for Sailors - Month by Month | Boating Mallorca"
        description="Month-by-month weather and wind guide for sailing Mallorca. Tramontana, Embat, Levante patterns, sea temperatures, and sailing conditions for every season."
        canonical="https://boatingmallorca.ai/explore/guides/weather-wind-guide"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Weather and Wind Patterns for Sailing Mallorca',
          description: 'Comprehensive month-by-month weather and wind guide for sailors visiting Mallorca.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Weather and Wind Patterns for Sailing Mallorca"
        subtitle="A month-by-month breakdown of what to expect on the water. Wind patterns, sea temperatures, sailing conditions, and seasonal highlights to help you plan the perfect trip."
        image="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Dramatic clouds and wind over Mediterranean sailing waters"
        ctaText="Plan Your Sailing Trip"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Month-by-Month Conditions</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Mallorca enjoys over 300 days of sunshine per year, but conditions vary significantly by season.
            The peak sailing season runs May through October, with May and June offering the best balance of wind,
            warmth, and uncrowded waters.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 sticky left-0 bg-ocean-50">Month</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">
                    <span className="flex items-center gap-1"><Thermometer className="w-3.5 h-3.5" />Air</span>
                  </th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">
                    <span className="flex items-center gap-1"><Droplets className="w-3.5 h-3.5" />Sea</span>
                  </th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">
                    <span className="flex items-center gap-1"><Wind className="w-3.5 h-3.5" />Wind</span>
                  </th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden lg:table-cell">Sailing Rating</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden lg:table-cell">Highlight</th>
                </tr>
              </thead>
              <tbody>
                {months.map((m, i) => (
                  <tr key={m.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-3 py-3 font-medium text-navy-700 sticky left-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>{m.name}</td>
                    <td className="px-3 py-3 text-gray-600">{m.airTemp}C</td>
                    <td className="px-3 py-3 text-ocean-600 font-medium">{m.seaTemp}C</td>
                    <td className="px-3 py-3 text-gray-600 hidden md:table-cell">{m.wind}</td>
                    <td className="px-3 py-3 text-gray-600 hidden lg:table-cell">{m.sailing}</td>
                    <td className="px-3 py-3 text-gray-600 hidden lg:table-cell">{m.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Key Wind Patterns</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Understanding Mallorca's wind systems is essential for safe and enjoyable boating.
            Six primary wind patterns affect the island, each with distinct characteristics and seasonal
            frequency.
          </p>
          <div className="flex flex-col gap-6">
            {winds.map((wind) => (
              <article key={wind.name} className="card p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-heading font-bold text-xl text-navy-800">{wind.name}</h3>
                  <span className="text-xs font-semibold text-ocean-600 bg-ocean-50 px-2 py-0.5 rounded">{wind.direction}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{wind.strength}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{wind.season}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">{wind.character}</p>
                <div className="bg-island-50 border border-island-200 rounded-lg p-3">
                  <span className="text-xs font-semibold text-island-700 uppercase tracking-wider">Sailor's Advice</span>
                  <p className="text-sm text-gray-700 mt-1">{wind.advice}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boating-regulations" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Regulations</h3>
              <p className="text-sm text-gray-600">Safety equipment requirements change with navigation zone.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/routes" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Sailing Routes</h3>
              <p className="text-sm text-gray-600">Plan your itinerary based on seasonal conditions.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">View routes <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/boat-only-beaches" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boat-Only Beaches</h3>
              <p className="text-sm text-gray-600">Know wind shelter before anchoring in remote coves.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan Your Trip for the Right Season"
        subtitle="Tell us your dates and preferences, and we will match you with the best charter options for the conditions."
        buttonText="Get Matched Free"
      />
    </>
  );
}
