import { Link } from 'react-router-dom';
import { TrendingUp, Zap, Shield, Star, ArrowRight, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const sellingSteps = [
  {
    title: 'Market Valuation',
    description: 'Professional appraisal based on comparable sales, condition, age, and market demand. Mallorca pricing varies by location and vessel type.',
  },
  {
    title: 'Prepare Documentation',
    description: 'Organize title, survey reports, maintenance logs, warranties, and equipment lists. Documentation quality directly impacts final sale price.',
  },
  {
    title: 'Strategic Marketing',
    description: 'Professional photography, drone footage, video tour, and listing on multiple platforms (YachtWorld, eBay Motors, local brokers).',
  },
  {
    title: 'Showings & Sea Trials',
    description: 'Coordinate buyer showings and sea trials. Professional brokers handle negotiations and arrange necessary inspections and certifications.',
  },
  {
    title: 'Closing & Transfer',
    description: 'Legal paperwork, title transfer, registration updates, and final walkthrough. Maritime lawyer ensures compliant transaction.',
  },
];

const marketAdvantages = [
  {
    title: 'Strong Mediterranean Market',
    description: 'Mallorca is Europe\'s top superyacht destination. High buyer concentration means faster sales and better prices.',
    icon: TrendingUp,
  },
  {
    title: 'Year-Round Demand',
    description: 'Mediterranean weather supports boating year-round. Tourist season (May-September) brings peak buying activity.',
    icon: Zap,
  },
  {
    title: 'Charter-Ready Buyers',
    description: 'Active charter market creates buyer demand for income-producing vessels. Investment-minded buyers compete aggressively.',
    icon: Users,
  },
  {
    title: 'Premium Location Value',
    description: 'Mediterranean registry and Mallorca-based vessels command 20-30% premium over identical boats in other locations.',
    icon: Star,
  },
];

const priceImpactFactors = [
  { factor: 'Condition & Maintenance Records', impact: '+15-25%', positive: true },
  { factor: 'Professional Surveyed Recently', impact: '+10-15%', positive: true },
  { factor: 'Low Engine Hours', impact: '+8-12%', positive: true },
  { factor: 'Recently Refitted', impact: '+12-20%', positive: true },
  { factor: 'Active Charter History', impact: '+10-18%', positive: true },
  { factor: 'Deferred Maintenance', impact: '-20-40%', positive: false },
  { factor: 'Major Engine Issues', impact: '-25-50%', positive: false },
  { factor: 'Outdated Systems', impact: '-10-20%', positive: false },
];

const marketingChannels = [
  {
    channel: 'YachtWorld',
    reach: '500K+ international boat buyers',
    cost: '300-1000 EUR per listing',
    best: 'Luxury and niche vessels',
  },
  {
    channel: 'Local Brokers',
    reach: 'Qualified local and European buyers',
    cost: '5-10% commission',
    best: 'All vessel types',
  },
  {
    channel: 'Facebook/Instagram',
    reach: 'Millennial and younger demographics',
    cost: '200-500 EUR ads budget',
    best: 'RIBs, motorboats, family cruisers',
  },
  {
    channel: 'eBay Motors',
    reach: '150K+ Mediterranean buyers',
    cost: '50 EUR listing + commission',
    best: 'Affordable motorboats and tenders',
  },
];

const estimatedTimeline = [
  { phase: 'Preparation', timeframe: '2-4 weeks', activities: 'Valuation, documentation, photography, listing' },
  { phase: 'Active Marketing', timeframe: '1-3 months', activities: 'Showings, sea trials, negotiations' },
  { phase: 'Offer Negotiation', timeframe: '1-2 weeks', activities: 'Counter-offers, survey contingencies' },
  { phase: 'Closing', timeframe: '2-4 weeks', activities: 'Legal paperwork, title transfer, final walkthrough' },
];

export default function SellYacht() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('sellYacht.seoTitle')}
        description={t('sellYacht.seoDesc')}
        canonical="https://boatingmallorca.ai/sell-yacht"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Guide',
          name: 'Yacht Selling Guide for Mallorca',
          provider: { '@type': 'Organization', name: 'Boating Mallorca' },
          areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
        }}
      />

      <PageHero
        title={t('sellYacht.heroTitle')}
        subtitle={t('sellYacht.heroSubtitle')}
        image="https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Beautiful yacht ready for sale in Mallorca marina"
        ctaText={t('sellYacht.heroCta')}
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Why Sell in Mallorca?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Mallorca offers unmatched advantages for yacht sellers. It's Europe's leading superyacht destination with strong buyer demand, year-round boating conditions, and premium market valuations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {marketAdvantages.map((adv) => {
              const IconComponent = adv.icon;
              return (
                <article key={adv.title} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">{adv.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">5-Step Selling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sellingSteps.map((step, i) => (
              <article key={step.title} className="card p-6">
                <div className="text-sm font-bold text-ocean-600 mb-2">Step {i + 1}</div>
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Factors That Impact Your Sale Price</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Proper maintenance, documentation, and recent improvements can significantly increase your yacht's market value. Here are the primary factors buyers evaluate:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {priceImpactFactors.map((item) => (
              <div
                key={item.factor}
                className={`p-4 rounded-lg flex items-center justify-between ${
                  item.positive ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'
                }`}
              >
                <span className="font-medium text-gray-800">{item.factor}</span>
                <span className={`font-bold text-lg ${item.positive ? 'text-green-700' : 'text-orange-700'}`}>
                  {item.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocean-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Marketing Channels & Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingChannels.map((ch) => (
              <article key={ch.channel} className="card p-6 bg-white">
                <h3 className="font-heading font-bold text-lg text-navy-800 mb-4">{ch.channel}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Reach</p>
                    <p className="text-gray-600">{ch.reach}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Cost</p>
                    <p className="text-gray-600">{ch.cost}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Best For</p>
                    <p className="text-gray-600">{ch.best}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Typical Sale Timeline</h2>
          <div className="space-y-4">
            {estimatedTimeline.map((item, i) => (
              <div key={item.phase} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-ocean text-white flex items-center justify-center font-heading font-bold">
                    {i + 1}
                  </div>
                  {i < estimatedTimeline.length - 1 && (
                    <div className="w-1 h-12 bg-ocean-200 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-bold text-lg text-navy-800">{item.phase}</h3>
                    <span className="text-sm font-semibold text-ocean-600">{item.timeframe}</span>
                  </div>
                  <p className="text-gray-600">{item.activities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl p-8 md:p-12 border-l-4 border-ocean-500">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-3">Preparation Checklist</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Before listing your yacht, ensure you have these essential items prepared. This dramatically speeds up the sale process and justifies higher asking prices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Recent professional survey</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Complete maintenance records</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Title and registration documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Equipment and warranty info</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Professional photography & video</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Cleaned and detailed yacht</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Updated insurance papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700">Charter history (if applicable)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="bg-gradient-to-r from-ocean-50 to-island-50 rounded-2xl p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-3">Ready to Sell?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Let our experts help you navigate the selling process. We provide valuation, marketing strategy, and buyer matching to maximize your sale price and timeline.
            </p>
            <Link to="/get-matched" className="btn-primary inline-flex items-center gap-2">
              Get Your Free Valuation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
