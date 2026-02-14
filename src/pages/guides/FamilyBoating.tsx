import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';

const boatTypes = [
  { type: 'Catamaran', ageRange: 'All ages, including toddlers', why: 'The most stable platform on the water. Wide deck space for kids to move safely. Trampolines between the hulls are endlessly entertaining. Shallow draft accesses calm coves.', rating: 'Best overall for families' },
  { type: 'Pontoon Boat', ageRange: '3+ years', why: 'Flat, stable platform with shade canopy. Easy boarding from the water. Open layout makes supervision simple. Affordable day rental option.', rating: 'Best for day trips on a budget' },
  { type: 'Motor Yacht (with flybridge)', ageRange: '5+ years', why: 'Enclosed cabin for naps and shade. Swim platform at the stern. Multiple outdoor areas. Air conditioning for hot days.', rating: 'Best for multi-day with young children' },
  { type: 'RIB (Rigid Inflatable)', ageRange: '6+ years', why: 'Exciting for older kids. Soft inflatable sides add safety. Fast enough to visit multiple coves in one day. Easy beach landing.', rating: 'Best for adventure-loving families' },
  { type: 'Sailing Yacht', ageRange: '8+ years (or with crew)', why: 'Educational experience -- kids can learn to sail. Quiet, eco-friendly. Good for multi-day trips. Best with a skipper when children are aboard.', rating: 'Best for teaching and longer voyages' },
];

const calmRoutes = [
  { route: 'Palma Bay Circuit', duration: 'Half day', distance: '8-12 nm', description: 'Start at any Palma marina. Motor west to Cala Major, then to Illetas for a swim stop. Continue to Portals Vells for sheltered snorkeling. Return via the coast. Calm waters, always close to shelter.', shelterLevel: 'Excellent' },
  { route: 'Alcudia Bay Exploration', duration: 'Full day', distance: '10-15 nm', description: 'The large, enclosed bay offers flat water even when elsewhere is rough. Visit S\'Albufereta wetlands by dinghy, swim at Playa de Muro\'s shallow turquoise waters, and explore the rocky north shore. Multiple beach bars for lunch.', shelterLevel: 'Excellent' },
  { route: 'Cala d\'Or to Cala Mondrago', duration: 'Half day', distance: '5-8 nm', description: 'Short, sheltered hop between the pretty coves of the southeast. Cala Mondrago Natural Park has shallow, warm water and minimal waves. Easy snorkeling for beginners. Several beachside restaurants.', shelterLevel: 'Very good' },
  { route: 'Port de Pollenca to Formentor Beach', duration: 'Half day', distance: '6 nm return', description: 'A scenic coastal run along the Formentor peninsula. Formentor beach has shallow entry, white sand, and pine-shaded picnic areas. The approach is dramatic but the anchorage is sheltered in summer winds.', shelterLevel: 'Good (summer)' },
];

const safetyByAge = [
  { age: 'Babies (0-2)', tips: ['Stay in enclosed cabin or cockpit areas', 'Use baby-specific marine life jacket (approved for under 15 kg)', 'Keep out of direct sun -- shade is essential', 'Bring familiar toys and comfort items', 'Plan around nap schedule -- the boat motion often helps'] },
  { age: 'Toddlers (2-5)', tips: ['Fitted life jacket at all times on deck', 'Netting on guardrails (most charter boats can provide)', 'Non-slip shoes or water socks mandatory', 'Designate one adult as spotter at all times', 'Bring snacks and entertainment for transit time'] },
  { age: 'Children (5-10)', tips: ['Life jacket when underway (can remove at anchor under supervision)', 'Teach basic rules: one hand for you, one for the boat', 'Assign simple crew tasks (lookout, line handling)', 'Snorkeling gear sized for kids (mask fit is critical)', 'Sun protection: rash guard, hat, reef-safe sunscreen'] },
  { age: 'Tweens & Teens (10+)', tips: ['Can learn to helm under supervision', 'Responsible enough for water toys: paddleboard, kayak, snorkeling', 'Introduce navigation basics with a chart', 'Give responsibility: anchor watch, dinghy driving', 'Respect their need for independence and downtime'] },
];

const activities = [
  { activity: 'Snorkeling', ageMin: '5+', description: 'Mallorca\'s clear water makes it ideal for young snorkelers. Start at sandy beaches with minimal current, then progress to rocky coves.', link: '/explore/guides/snorkeling-diving' },
  { activity: 'Beach treasure hunts', ageMin: '3+', description: 'Arrive at a remote beach by boat and set up a treasure hunt with shells, smooth stones, and natural objects.' },
  { activity: 'Fishing', ageMin: '4+', description: 'Simple handline fishing from the boat keeps kids entertained for hours. No license needed for children under 14 fishing with a licensed adult.', link: '/explore/guides/fishing-guide' },
  { activity: 'Dinghy adventures', ageMin: '6+', description: 'Exploring small coves and rock pools by dinghy gives older kids a sense of adventure and independence.' },
  { activity: 'Cliff jumping', ageMin: '10+', description: 'Many boat-access coves have natural jumping spots at various heights. Always check depth first and supervise closely.' },
  { activity: 'Stargazing at anchor', ageMin: 'All ages', description: 'Anchor overnight in a remote cove. Away from light pollution, Mallorca\'s night sky is spectacular.' },
];

export default function FamilyBoating() {
  return (
    <>
      <SEOHead
        title="Family Boating Guide: Mallorca with Kids - Routes, Safety, Activities | Boating Mallorca"
        description="Complete guide to boating with children in Mallorca. Calm-water routes, boat types by age, safety tips, onboard activities, and family-friendly anchorages."
        canonical="https://boatingmallorca.ai/explore/guides/family-boating"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Family Boating Guide: Mallorca with Kids',
          description: 'Everything families need to know about boating with children in Mallorca.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Family Boating Guide: Mallorca with Kids"
        subtitle="A day on the water is one of the best things you can give your children. Here is how to make it safe, fun, and stress-free at every age."
        image="https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Family enjoying a day on a boat in calm Mallorca waters"
        ctaText="Find Family-Friendly Boats"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Best Boat Types for Families</h2>
          <p className="text-gray-600 mb-6 max-w-3xl">
            The right boat makes all the difference. Stability, shade, easy water access, and space to move are the
            priorities when kids are aboard.
          </p>
          <div className="flex flex-col gap-4">
            {boatTypes.map((boat) => (
              <article key={boat.type} className="card p-5 lg:p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-heading font-bold text-lg text-navy-800">{boat.type}</h3>
                  <span className="text-xs font-semibold text-ocean-600 bg-ocean-50 px-2 py-0.5 rounded">{boat.rating}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{boat.ageRange}</span>
                </div>
                <p className="text-sm text-gray-600">{boat.why}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Calm-Water Routes for Families</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {calmRoutes.map((route) => (
              <article key={route.route} className="card p-5 lg:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-island-500" />
                  <h3 className="font-heading font-bold text-lg text-navy-800">{route.route}</h3>
                </div>
                <div className="flex gap-3 text-xs text-gray-500 mb-3">
                  <span>{route.duration}</span>
                  <span>{route.distance}</span>
                  <span className="text-island-600 font-medium">Shelter: {route.shelterLevel}</span>
                </div>
                <p className="text-sm text-gray-600">{route.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Safety Tips by Age Group</h2>
          <div className="flex flex-col gap-6">
            {safetyByAge.map((group) => (
              <div key={group.age} className="card p-5 lg:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-ocean-500" />
                  <h3 className="font-heading font-bold text-lg text-navy-800">{group.age}</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {group.tips.map((tip) => (
                    <li key={tip} className="flex gap-2 text-sm text-gray-600">
                      <Heart className="w-3.5 h-3.5 text-accent-500 flex-shrink-0 mt-1" />
                      {tip}
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
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Onboard Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {activities.map((act) => (
              <div key={act.activity} className="card p-5">
                <h3 className="font-heading font-semibold text-navy-800 mb-1">{act.activity}</h3>
                <span className="text-xs text-ocean-600 font-medium">Ages: {act.ageMin}</span>
                <p className="text-sm text-gray-600 mt-2">{act.description}</p>
                {act.link && (
                  <Link to={act.link} className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/guides/boat-only-beaches" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boat-Only Beaches</h3>
              <p className="text-sm text-gray-600">Find the quietest coves for a peaceful family day.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/dock-and-dine" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Dock & Dine</h3>
              <p className="text-sm text-gray-600">Kid-friendly waterfront restaurants along the coast.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/guides/boating-costs" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Boating Costs</h3>
              <p className="text-sm text-gray-600">Plan the family trip budget with transparent pricing.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Read guide <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Find the Perfect Family Boat"
        subtitle="Tell us your children's ages and what you'd like to do. We will match you with family-friendly boats and experienced skippers."
        buttonText="Get Matched Free"
      />
    </>
  );
}
