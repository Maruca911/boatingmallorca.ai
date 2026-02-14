import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { destinations } from '../../data/destinations';

export default function Destinations() {
  return (
    <>
      <SEOHead
        title="Boating Destinations in Mallorca - Where to Go by Boat | Boating Mallorca"
        description="Explore the best boating destinations in Mallorca. From Palma's luxury marinas to hidden coves and national parks. Complete destination guide for boaters."
        canonical="https://boatingmallorca.ai/explore/destinations"
      />

      <PageHero
        title="Boating Destinations in Mallorca"
        subtitle="Discover where to go by boat around the island. From bustling harbors and luxury marinas to secret anchorages and protected national parks."
        image="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Aerial view of turquoise coves along the Mallorca coastline"
        ctaText="Get Matched With Local Providers"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">All Destinations</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Mallorca's 550km coastline offers an extraordinary variety of boating experiences. Each destination has its own character, from the cosmopolitan energy of Palma to the untouched wilderness of Cabrera National Park.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link key={dest.slug} to={`/explore/destinations/${dest.slug}`} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-ocean-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{dest.name}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2 group-hover:text-ocean-600 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{dest.intro.slice(0, 150)}...</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {dest.boating.bestFor.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-ocean-50 text-ocean-600 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Where to Go?"
        subtitle="Tell us your preferences and we will recommend the best destinations and match you with local providers."
      />
    </>
  );
}
