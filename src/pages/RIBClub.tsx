import { Link } from 'react-router-dom';
import { Crown, Heart, Zap, MapPin, Users, Shield, ArrowRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const membershipTiers = [
  {
    tier: 'Simulated Ownership',
    description: 'For those who love boating but don\'t want ownership responsibilities',
    pricing: 'From 2000 EUR/month',
    premium: false,
    features: [
      'Access to fleet of 20+ premium RIBs',
      'Unlimited monthly hours (cap: 40 hours)',
      'Insurance and fuel included',
      'Flexible booking system',
      'Priority member events',
      'No maintenance responsibility',
    ],
    highlight: 'Perfect for experience seekers',
  },
  {
    tier: 'Enhanced Ownership',
    description: 'For RIB owners seeking redundancy and expanded access',
    pricing: 'From 1000 EUR/month',
    premium: true,
    features: [
      'Keep your own RIB',
      'Access to 20+ backup vessels',
      'Equipment upgrade stipend',
      'Professional crew available',
      'Elite event access',
      'Insurance coordination',
      'Revenue-sharing opportunities',
    ],
    highlight: 'Exclusive for RIB owners',
  },
];

const clubBenefits = [
  {
    title: 'Exclusive Fleet Access',
    description: 'Curated collection of premium RIBs, luxury tenders, and performance boats across Mediterranean locations.',
    icon: Zap,
  },
  {
    title: 'Year-Round Adventures',
    description: 'On-water and on-shore events scheduled throughout the year. Private parties, regattas, cultural experiences.',
    icon: Heart,
  },
  {
    title: 'Cultural Experiences',
    description: 'Exclusive access to hidden coves, local restaurants, private clubs, and Mediterranean gems known only to insiders.',
    icon: MapPin,
  },
  {
    title: 'Private Community',
    description: 'Join an exclusive circle of people who love boating. Network with like-minded members, yacht owners, and influencers.',
    icon: Users,
  },
  {
    title: 'Peak Experience Guarantee',
    description: 'Every interaction is carefully curated. Professional crew, top-tier vessels, premium accommodations, flawless service.',
    icon: Crown,
  },
  {
    title: 'Total Redundancy',
    description: 'For boat owners: if your vessel is unavailable, choose from our backup fleet. Zero downtime, maximum flexibility.',
    icon: Shield,
  },
];

const eventHighlights = [
  {
    season: 'Spring Regatta',
    month: 'April-May',
    description: 'Members-only racing competition across Mallorca\'s best sailing waters. Team building and competitive racing.',
  },
  {
    season: 'Summer Island Hopping',
    month: 'June-August',
    description: 'Weekly curated expeditions to remote islands, private beach clubs, and exclusive Mediterranean destinations.',
  },
  {
    season: 'Autumn Gala',
    month: 'September',
    description: 'Elegant dinner cruise with live entertainment, gourmet dining, and sunset views from the open sea.',
  },
  {
    season: 'Winter Exploration',
    month: 'October-March',
    description: 'Intimate group experiences, luxury yacht transfers, and exclusive access to Mediterranean cultural events.',
  },
];

const faqItems = [
  {
    question: 'What is the minimum commitment?',
    answer: 'Membership is flexible. Monthly subscriptions with no long-term contract required. Cancel anytime with 30 days notice.',
  },
  {
    question: 'Do I need sailing experience?',
    answer: 'No. Professional crew is available for all experiences. Choose self-guided or fully crewed options based on your comfort level.',
  },
  {
    question: 'How many members are in the club?',
    answer: 'We maintain exclusivity with a limited membership cap. This ensures premium service, personalized attention, and no overcrowding.',
  },
  {
    question: 'What if I own a RIB already?',
    answer: 'Enhanced Ownership tier is perfect for you. Keep your RIB and gain access to our backup fleet plus elite benefits at a lower rate.',
  },
  {
    question: 'Can I bring guests?',
    answer: 'Yes. Members can bring guests on most events. Some VIP experiences are members-only, but most activities welcome family and friends.',
  },
  {
    question: 'How do I book vessels?',
    answer: 'Simple online booking system with real-time availability. Book weeks in advance or grab last-minute opportunities through our app.',
  },
];

export default function RIBClub() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('ribClub.seoTitle')}
        description={t('ribClub.seoDesc')}
        canonical="https://boatingmallorca.ai/rib-club"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'MembershipProgram',
          name: 'RIB Club Mallorca',
          provider: { '@type': 'Organization', name: 'Boating Mallorca' },
          areaServed: { '@type': 'Place', name: 'Mallorca, Mediterranean' },
          membershipBenefit: 'Exclusive boat access, events, and experiences',
        }}
      />

      <PageHero
        title={t('ribClub.heroTitle')}
        subtitle={t('ribClub.heroSubtitle')}
        image="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Premium RIB and luxury yacht at sunset in Mallorca"
        ctaText={t('ribClub.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-4">Two Pathways to the Lifestyle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you dream of owning a boat or already own one, RIB Club offers the perfect membership structure for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {membershipTiers.map((tier) => (
              <article
                key={tier.tier}
                className={`card p-8 relative transition-transform hover:scale-105 ${
                  tier.premium ? 'lg:scale-105 border-2 border-ocean-500' : ''
                }`}
              >
                {tier.premium && (
                  <div className="absolute -top-4 right-8 bg-ocean-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-2xl text-navy-800 mb-2">{tier.tier}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <p className="text-ocean-600 font-bold text-xl mb-6">{tier.pricing}</p>
                <p className="text-sm font-semibold text-ocean-500 mb-6 italic">{tier.highlight}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/get-matched" className="btn-primary w-full text-center justify-center">
                  Apply Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-4">The RIB Club Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Beyond boat access, membership unlocks exclusive experiences, genuine friendships, and memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubBenefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <article key={benefit.title} className="card p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-12 text-center">Signature Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventHighlights.map((event) => (
              <article key={event.season} className="card p-6 border-l-4 border-ocean-500">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-xl text-navy-800">{event.season}</h3>
                  <span className="text-sm font-semibold text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">{event.month}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item) => (
              <details key={item.question} className="card p-6 group">
                <summary className="font-heading font-bold text-lg text-navy-800 cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-ocean-500 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="bg-gradient-to-r from-navy-800 to-ocean-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-3">Ready to Join the Circle?</h2>
            <p className="text-white/90 mb-6 max-w-2xl text-lg">
              Limited memberships available. Apply today to secure your place in an exclusive community of boating enthusiasts, adventurers, and like-minded individuals who embrace the Mediterranean lifestyle.
            </p>
            <Link to="/get-matched" className="btn-white inline-flex items-center gap-2">
              Apply to RIB Club <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
