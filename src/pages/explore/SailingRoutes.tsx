import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Compass, BarChart3 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { sailingRoutes } from '../../data/routes';

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-island-100 text-island-700',
  Intermediate: 'bg-sand-200 text-sand-800',
  Advanced: 'bg-accent-100 text-accent-700',
};

export default function SailingRoutes() {
  return (
    <>
      <SEOHead
        title="Sailing Routes & Itineraries Mallorca - Plan Your Voyage | Boating Mallorca"
        description="Plan your Mallorca sailing trip with detailed routes and itineraries. Day-by-day guides for circumnavigation, island hopping, and coastal cruising. All levels."
        canonical="https://boatingmallorca.ai/explore/routes"
      />

      <PageHero
        title="Sailing Routes & Itineraries"
        subtitle="Detailed day-by-day itineraries for every skill level. From beginner-friendly bay cruises to advanced inter-island crossings."
        image="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Sailing yacht on open waters with Mallorca coastline in the distance"
        ctaText="Book a Charter for Your Route"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">All Routes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Whether you have a single day or a full week, there is a Mallorca sailing route that fits. Each itinerary includes distances, recommended anchorages, and practical tips from experienced local sailors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sailingRoutes.map((route) => (
              <Link key={route.slug} to={`/explore/routes/${route.slug}`} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${difficultyColor[route.difficulty]}`}>
                      {route.difficulty}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2 group-hover:text-ocean-600 transition-colors">
                    {route.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{route.intro.slice(0, 140)}...</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {route.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5" /> {route.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3.5 h-3.5" /> {route.difficulty}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    View itinerary <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Sail?"
        subtitle="We match you with charter companies that know these routes. 3 vetted options within 24 hours. Free."
        buttonText="Get Matched With Charters"
      />
    </>
  );
}
