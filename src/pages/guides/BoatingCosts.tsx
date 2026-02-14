import { Link } from 'react-router-dom';
import { ArrowRight, Info, TrendingUp } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const charterCosts = [
  { type: 'Small motorboat (no license)', size: '< 6m', daily: '120 - 250', weekly: '700 - 1,500', peak: 'Jul-Aug +30%' },
  { type: 'Motorboat (license required)', size: '6-10m', daily: '200 - 500', weekly: '1,200 - 3,000', peak: 'Jul-Aug +25%' },
  { type: 'RIB / Speedboat', size: '5-9m', daily: '250 - 600', weekly: '1,500 - 3,500', peak: 'Jul-Aug +30%' },
  { type: 'Sailing yacht (bareboat)', size: '10-15m', daily: '300 - 800', weekly: '1,800 - 5,000', peak: 'Jul-Aug +35%' },
  { type: 'Catamaran (bareboat)', size: '10-15m', daily: '400 - 1,200', weekly: '2,500 - 7,500', peak: 'Jul-Aug +40%' },
  { type: 'Skippered yacht', size: '12-20m', daily: '500 - 2,000', weekly: '3,000 - 12,000', peak: 'Jul-Aug +25%' },
  { type: 'Luxury crewed yacht', size: '20m+', daily: '2,000 - 15,000+', weekly: '12,000 - 90,000+', peak: 'Jul-Aug +20%' },
];

const marinaCosts = [
  { marina: 'Club de Mar (Palma)', size10m: '50-80', size15m: '90-150', size20m: '150-280', notes: 'Premium location. Book months in advance for summer.' },
  { marina: 'Marina Port de Mallorca', size10m: '45-70', size15m: '80-130', size20m: '130-240', notes: 'Central Palma. Walking distance to Old Town.' },
  { marina: 'Port Adriano', size10m: '55-90', size15m: '100-170', size20m: '170-320', notes: 'Designer marina. Superyacht facilities.' },
  { marina: 'Puerto Portals', size10m: '50-85', size15m: '95-160', size20m: '160-300', notes: 'Luxury hub. High-end restaurants and shops.' },
  { marina: 'Port d\'Alcudia', size10m: '30-50', size15m: '55-90', size20m: '90-160', notes: 'Family-friendly. Good value for north coast.' },
  { marina: 'Port de Pollenca', size10m: '25-45', size15m: '50-80', size20m: '80-140', notes: 'Charming northern port. Sailing hub.' },
  { marina: 'Cala d\'Or Marina', size10m: '30-55', size15m: '55-95', size20m: '95-170', notes: 'Attractive southeast location. Moderate prices.' },
];

const additionalCosts = [
  { category: 'Fuel (diesel)', low: '1.40', high: '1.80', unit: 'per liter', notes: 'Marina fuel docks. Prices vary 10-15% between marinas.' },
  { category: 'Fuel (petrol)', low: '1.60', high: '2.00', unit: 'per liter', notes: 'For outboard engines and RIBs.' },
  { category: 'Skipper hire', low: '180', high: '350', unit: 'per day', notes: 'Professional captain. Includes all navigation and safety.' },
  { category: 'Water (marina)', low: '3', high: '8', unit: 'per m3', notes: 'Some marinas include water with the berth fee.' },
  { category: 'Electricity (marina)', low: '5', high: '15', unit: 'per day', notes: 'Depends on consumption and marina pricing.' },
  { category: 'Provisioning (basic)', low: '30', high: '60', unit: 'per person/day', notes: 'Groceries from local supermarkets and markets.' },
  { category: 'Provisioning (luxury)', low: '80', high: '200+', unit: 'per person/day', notes: 'Catered by onboard chef or delivery service.' },
  { category: 'Charter insurance', low: '20', high: '80', unit: 'per day', notes: 'Optional excess reduction. Highly recommended.' },
  { category: 'Security deposit', low: '500', high: '5,000', unit: 'one-time', notes: 'Refundable. Depends on vessel size and value.' },
  { category: 'End cleaning fee', low: '80', high: '400', unit: 'one-time', notes: 'Standard on most charters. Some include it in the base rate.' },
];

const seasonalTips = [
  { season: 'Peak (Jul-Aug)', tip: 'Highest prices across the board. Book 3-6 months ahead for the best selection. Marina berths can be fully booked.' },
  { season: 'High (Jun, Sep)', tip: 'Excellent conditions at 15-25% less than peak. Water is warm, winds are reliable, and availability is better.' },
  { season: 'Shoulder (Apr-May, Oct)', tip: 'Best value period. Prices drop 30-50% from peak. May offers outstanding sailing conditions.' },
  { season: 'Low (Nov-Mar)', tip: 'Minimal charter availability but marina fees drop significantly. Great for boat owners staying long-term.' },
];

export default function BoatingCosts() {
  return (
    <>
      <SEOHead
        title="How Much Does Boating in Mallorca Cost? Complete Price Guide 2026 | Boating Mallorca"
        description="Transparent cost breakdown for boating in Mallorca: charter rates, marina fees, fuel prices, provisioning budgets, insurance, and seasonal pricing for 2026."
        canonical="https://boatingmallorca.ai/explore/guides/boating-costs"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Complete Cost Guide: Boating in Mallorca',
          description: 'Detailed pricing guide for all boating costs in Mallorca for 2026.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Complete Cost Guide: Boating in Mallorca"
        subtitle="Transparent pricing for charters, rentals, marina berths, fuel, provisioning, and every other cost. No surprises -- plan your budget with confidence."
        image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Marina with various boats and yachts in Mallorca harbor"
        ctaText="Get a Free Personalized Quote"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Charter and Rental Rates (EUR)</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Charter prices vary significantly by vessel type, season, and whether you hire a skipper or crew.
            The rates below represent 2026 market averages across Mallorca's main charter bases.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Vessel Type</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden sm:table-cell">Size</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Daily Rate</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Weekly Rate</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">Peak Surcharge</th>
                </tr>
              </thead>
              <tbody>
                {charterCosts.map((c, i) => (
                  <tr key={c.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-3 font-medium text-navy-700">{c.type}</td>
                    <td className="px-3 py-3 text-gray-600 hidden sm:table-cell">{c.size}</td>
                    <td className="px-3 py-3 text-ocean-600 font-medium">{c.daily}</td>
                    <td className="px-3 py-3 text-ocean-600 font-medium">{c.weekly}</td>
                    <td className="px-3 py-3 text-gray-600 hidden md:table-cell">{c.peak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-accent-50 rounded-xl p-5 flex gap-4">
            <Info className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              Weekly rates are typically 15-25% cheaper per day than daily rates. Multi-week charters can negotiate further discounts of 10-15%. <Link to="/get-matched" className="text-ocean-600 font-medium hover:underline">Get a personalized quote</Link> for exact pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Marina Berth Fees (EUR/night)</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Marina fees depend on your boat's length, the marina's location and facilities, and the time of year.
            These are indicative nightly rates for transient berths during the main season (May-October).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Marina</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">10m Boat</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">15m Boat</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden sm:table-cell">20m Boat</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {marinaCosts.map((m, i) => (
                  <tr key={m.marina} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-3 font-medium text-navy-700">{m.marina}</td>
                    <td className="px-3 py-3 text-ocean-600">{m.size10m}</td>
                    <td className="px-3 py-3 text-ocean-600">{m.size15m}</td>
                    <td className="px-3 py-3 text-ocean-600 hidden sm:table-cell">{m.size20m}</td>
                    <td className="px-3 py-3 text-gray-600 hidden md:table-cell">{m.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Additional Costs to Budget For</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ocean-50">
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Category</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">Low</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800">High</th>
                  <th className="text-left px-3 py-3 font-heading font-semibold text-navy-800 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {additionalCosts.map((c, i) => (
                  <tr key={c.category} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-3 font-medium text-navy-700">{c.category}</td>
                    <td className="px-3 py-3 text-gray-600">{c.low} EUR {c.unit}</td>
                    <td className="px-3 py-3 text-gray-600">{c.high} EUR {c.unit}</td>
                    <td className="px-3 py-3 text-gray-600 hidden md:table-cell">{c.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Seasonal Pricing Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {seasonalTips.map((s) => (
              <div key={s.season} className="card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-ocean-500" />
                  <h3 className="font-heading font-semibold text-navy-800">{s.season}</h3>
                </div>
                <p className="text-sm text-gray-600">{s.tip}</p>
              </div>
            ))}
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/provisioning-guide" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Provisioning Guide</h3>
              <p className="text-sm text-gray-600">Where to stock up and how to budget for onboard supplies.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/rentals-charters" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Rentals & Charters</h3>
              <p className="text-sm text-gray-600">Compare vessel types and charter options in detail.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">View options <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/winter-storage" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Winter Storage</h3>
              <p className="text-sm text-gray-600">Compare winterization and storage costs for boat owners.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Get an Accurate Quote for Your Trip"
        subtitle="Submit your dates, group size, and preferences. We will match you with 3 vetted providers and their real pricing within 24 hours."
        buttonText="Get Your Free Quote"
      />
    </>
  );
}
