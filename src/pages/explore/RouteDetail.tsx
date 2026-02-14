import { useParams, Link } from 'react-router-dom';
import { Clock, Compass, BarChart3, Calendar, Ship, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { sailingRoutes } from '../../data/routes';

export default function RouteDetail() {
  const { slug } = useParams<{ slug: string }>();
  const route = sailingRoutes.find((r) => r.slug === slug);

  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-navy-800 mb-2">Route Not Found</h1>
          <Link to="/explore/routes" className="text-ocean-500 hover:text-ocean-700">View all routes</Link>
        </div>
      </div>
    );
  }

  const difficultyColor = {
    Beginner: 'bg-island-100 text-island-700',
    Intermediate: 'bg-sand-200 text-sand-800',
    Advanced: 'bg-accent-100 text-accent-700',
  }[route.difficulty];

  return (
    <>
      <SEOHead
        title={route.title}
        description={route.metaDescription}
        canonical={`https://boatingmallorca.ai/explore/routes/${route.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: route.name,
          description: route.metaDescription,
          touristType: 'Sailing',
          itinerary: {
            '@type': 'ItemList',
            itemListElement: route.itinerary.map((stop, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: stop.title,
            })),
          },
        }}
      />

      <PageHero
        title={route.name}
        subtitle={`${route.duration} | ${route.distance} | ${route.difficulty}`}
        image={route.image}
        imageAlt={route.imageAlt}
        ctaText="Book This Route"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              { icon: Clock, label: 'Duration', value: route.duration },
              { icon: Compass, label: 'Distance', value: route.distance },
              { icon: BarChart3, label: 'Difficulty', value: route.difficulty, colorClass: difficultyColor },
              { icon: Calendar, label: 'Best Season', value: route.bestSeason },
              { icon: Ship, label: 'Recommended Boat', value: route.recommendedBoat },
            ].map((stat) => (
              <div key={stat.label} className={`rounded-xl p-4 text-center ${stat.colorClass || 'bg-ocean-50'}`}>
                <stat.icon className="w-5 h-5 text-ocean-500 mx-auto mb-2" />
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-xs font-bold text-navy-800">{stat.value}</div>
              </div>
            ))}
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Route Overview</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">{route.intro}</p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Day-by-Day Itinerary</h2>
          <div className="space-y-4">
            {route.itinerary.map((stop, i) => (
              <div key={i} className="card p-6 flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl gradient-ocean text-white flex items-center justify-center font-heading font-bold text-sm">
                    {stop.day.replace('Day ', 'D').replace('Route ', 'R')}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-1">{stop.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Route Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {route.highlights.map((h) => (
              <div key={h} className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <Compass className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Practical Tips</h2>
          <div className="bg-white rounded-2xl p-6 lg:p-8">
            <ul className="space-y-4">
              {route.tips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm text-navy-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-1.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex gap-4">
            <Link to="/explore/routes" className="btn-secondary text-sm">
              All Routes
            </Link>
            <Link to="/explore/destinations" className="inline-flex items-center gap-1 text-ocean-600 font-medium text-sm hover:text-ocean-700 py-2">
              Explore destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Sail This Route?"
        subtitle="We match you with charter companies that know this route inside out. 3 vetted options in 24 hours. Free."
        buttonText="Get Matched With Charters"
      />
    </>
  );
}
