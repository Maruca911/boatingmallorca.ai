import { useParams, Link } from 'react-router-dom';
import { MapPin, Anchor, Calendar, Compass, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { destinations } from '../../data/destinations';

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-navy-800 mb-2">Destination Not Found</h1>
          <Link to="/explore/destinations" className="text-ocean-500 hover:text-ocean-700">View all destinations</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={dest.title}
        description={dest.metaDescription}
        canonical={`https://boatingmallorca.ai/explore/destinations/${dest.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: dest.name,
          description: dest.metaDescription,
          containedInPlace: { '@type': 'Place', name: 'Mallorca, Spain' },
        }}
      />

      <PageHero
        title={`Boating in ${dest.name}`}
        subtitle={dest.intro.slice(0, 160) + '...'}
        image={dest.image}
        imageAlt={dest.imageAlt}
        ctaText="Get Matched With Local Providers"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">About {dest.name}</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">{dest.intro}</p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dest.highlights.map((h) => (
              <div key={h} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100">
                <Compass className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Boating Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-3">
                <Anchor className="w-5 h-5 text-ocean-500" />
                <h3 className="font-heading font-bold text-lg text-navy-800">Best For</h3>
              </div>
              <ul className="space-y-2">
                {dest.boating.bestFor.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-ocean-500" />
                <h3 className="font-heading font-bold text-lg text-navy-800">Season</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{dest.boating.season}</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-ocean-500" />
                <h3 className="font-heading font-bold text-lg text-navy-800">Anchorages</h3>
              </div>
              <ul className="space-y-2">
                {dest.boating.anchorages.map((a) => (
                  <li key={a} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-400 mt-1.5 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {dest.nearbyMarinas.length > 0 && (
        <section className="bg-gray-50 section-padding">
          <div className="container-narrow">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Nearby Marinas</h2>
            <div className="flex flex-wrap gap-3">
              {dest.nearbyMarinas.map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-navy-700">
                  <Anchor className="w-4 h-4 text-ocean-400" />
                  {m}
                </span>
              ))}
            </div>
            <Link to="/explore/marinas" className="inline-flex items-center gap-1 text-ocean-600 font-medium text-sm mt-6 hover:text-ocean-700">
              View all Mallorca marinas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Local Tips</h2>
          <div className="bg-ocean-50 rounded-2xl p-6 lg:p-8">
            <ul className="space-y-4">
              {dest.tips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm text-navy-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-1.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Find Your Perfect ${dest.name} Boat Experience`}
        subtitle="Tell us your preferences and we match you with 3 vetted local providers within 24 hours. Free."
        buttonText="Get Matched Free"
      />
    </>
  );
}
