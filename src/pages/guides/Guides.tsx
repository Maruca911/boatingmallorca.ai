import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { practicalGuides, activityGuides } from '../../data/guides';

export default function Guides() {
  return (
    <>
      <SEOHead
        title="Mallorca Boating Guides - Practical Tips and Activity Guides | Boating Mallorca"
        description="Comprehensive boating guides for Mallorca: regulations, costs, weather, provisioning, fishing, snorkeling, family boating, dock-and-dine, and more."
        canonical="https://boatingmallorca.ai/explore/guides"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Mallorca Boating Guides',
          description: 'Collection of practical and activity guides for boating in Mallorca.',
          publisher: { '@type': 'Organization', name: 'Boating Mallorca' },
        }}
      />

      <PageHero
        title="Mallorca Boating Guides"
        subtitle="Everything you need to know about boating in Mallorca. Practical reference guides and activity-specific advice from local experts."
        image="https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Scenic aerial view of boats and coastline in Mallorca"
        ctaText="Get Matched With Local Providers"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-ocean-500" />
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800">Practical Guides</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Reference material for planning and executing your boating trip. Regulations, costs, weather patterns, provisioning, and winter storage -- the practical information every boater needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalGuides.map((guide) => (
              <Link key={guide.slug} to={`/explore/guides/${guide.slug}`} className="card overflow-hidden group">
                <div className="h-44 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2 group-hover:text-ocean-600 transition-colors">
                    {guide.shortTitle}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-6 h-6 text-ocean-500" />
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800">Activity Guides</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Specific activities you can enjoy from a boat around Mallorca. From secret beaches and waterfront dining to snorkeling, fishing, and family adventures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityGuides.map((guide) => (
              <Link key={guide.slug} to={`/explore/guides/${guide.slug}`} className="card overflow-hidden group">
                <div className="h-44 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2 group-hover:text-ocean-600 transition-colors">
                    {guide.shortTitle}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/explore/destinations" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Destinations & Anchorages</h3>
              <p className="text-sm text-gray-600">Detailed profiles of every boating destination around Mallorca.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/marinas" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Marinas & Ports</h3>
              <p className="text-sm text-gray-600">Facilities, berth availability, and services at every marina.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/explore/routes" className="card p-5 group">
              <h3 className="font-heading font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors mb-1">Sailing Routes</h3>
              <p className="text-sm text-gray-600">Curated itineraries for day trips and multi-day voyages.</p>
              <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-2 group-hover:gap-2 transition-all">Explore <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get On the Water?"
        subtitle="Submit your preferences and get matched with 3 vetted local providers within 24 hours. Completely free."
      />
    </>
  );
}
