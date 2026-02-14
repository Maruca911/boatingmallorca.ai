import { useParams, Link } from 'react-router-dom';
import { Anchor, MapPin, ArrowRight, Ship, Ruler, Waves } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { marinas } from '../../data/marinas';

export default function MarinaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const marina = marinas.find((m) => m.slug === slug);

  if (!marina) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-navy-800 mb-2">Marina Not Found</h1>
          <Link to="/explore/marinas" className="text-ocean-500 hover:text-ocean-700">View all marinas</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={marina.title}
        description={marina.metaDescription}
        canonical={`https://boatingmallorca.ai/explore/marinas/${marina.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BoatTerminal',
          name: marina.name,
          description: marina.metaDescription,
          address: { '@type': 'PostalAddress', addressLocality: marina.location },
        }}
      />

      <PageHero
        title={marina.name}
        subtitle={marina.location}
        image={marina.image}
        imageAlt={marina.imageAlt}
        ctaText="Inquire About Berths"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Ship, label: 'Berths', value: marina.berths },
              { icon: Ruler, label: 'Max Length', value: marina.maxLength },
              { icon: Waves, label: 'Depth', value: marina.depth },
              { icon: MapPin, label: 'Price Range', value: marina.priceRange.split(' ')[0] + '+ EUR/day' },
            ].map((stat) => (
              <div key={stat.label} className="bg-ocean-50 rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-ocean-500 mx-auto mb-2" />
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-sm font-bold text-navy-800">{stat.value}</div>
              </div>
            ))}
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">About {marina.name}</h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">{marina.intro}</p>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {marina.facilities.map((f) => (
              <div key={f} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100">
                <Anchor className="w-4 h-4 text-ocean-400 flex-shrink-0" />
                <span className="text-sm text-navy-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">Pricing</h2>
          <div className="bg-accent-50 rounded-2xl p-6 lg:p-8">
            <p className="text-navy-700 leading-relaxed">{marina.priceRange}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marina.highlights.map((h) => (
              <div key={h} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-6">Nearby Attractions</h2>
          <div className="flex flex-wrap gap-3">
            {marina.nearbyAttractions.map((a) => (
              <span key={a} className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-navy-700">
                {a}
              </span>
            ))}
          </div>
          <Link to="/explore/destinations" className="inline-flex items-center gap-1 text-ocean-600 font-medium text-sm mt-6 hover:text-ocean-700">
            Explore all destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner
        title={`Need a Berth at ${marina.name}?`}
        subtitle="Submit your requirements and we will connect you with marina operators and agents. Completely free."
        buttonText="Inquire Now"
      />
    </>
  );
}
