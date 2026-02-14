import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { directoryEntries } from '../../data/directory';

export default function DirectoryDetail() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const entry = directoryEntries.find((e) => e.category === category && e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-navy-800 mb-2">Page Not Found</h1>
          <Link to="/directory" className="text-ocean-500 hover:text-ocean-700">View full directory</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={entry.title}
        description={entry.metaDescription}
        canonical={`https://boatingmallorca.ai/directory/${entry.category}/${entry.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: entry.name,
          description: entry.metaDescription,
          provider: { '@type': 'Organization', name: 'Boating Mallorca' },
          areaServed: { '@type': 'Place', name: 'Mallorca, Spain' },
        }}
      />

      <PageHero
        title={entry.name}
        subtitle={entry.categoryLabel}
        image={entry.image}
        imageAlt={entry.imageAlt}
        ctaText="Get Matched Free"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="max-w-4xl">
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{entry.intro}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {entry.keyFacts.map((fact) => (
                <div key={fact.label} className="bg-ocean-50 rounded-xl p-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{fact.label}</div>
                  <div className="text-sm font-bold text-navy-800">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {entry.sections.map((section, i) => (
        <section key={i} className={i % 2 === 0 ? 'bg-gray-50 section-padding' : 'bg-white section-padding'}>
          <div className="container-narrow">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">{section.heading}</h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl">{section.content}</p>
          </div>
        </section>
      ))}

      {entry.relatedLinks.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-narrow">
            <h2 className="font-heading font-bold text-xl text-navy-800 mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              {entry.relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-ocean-600 hover:bg-ocean-50 hover:border-ocean-200 transition-colors"
                >
                  {link.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <div className="bg-white rounded-2xl p-6 lg:p-8 flex gap-4 border border-gray-100">
            <Info className="w-6 h-6 text-ocean-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-lg text-navy-800 mb-2">Need Help Finding the Right Provider?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Our free matching service connects you with vetted {entry.categoryLabel.toLowerCase()} in Mallorca. Tell us what you need and receive 3 personalized recommendations within 24 hours.
              </p>
              <Link to="/get-matched" className="inline-flex items-center gap-1 text-ocean-600 font-medium text-sm hover:text-ocean-700">
                Get matched free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Find Trusted ${entry.categoryLabel}`}
        subtitle="Submit your requirements and get 3 vetted recommendations within 24 hours. Completely free."
        variant="dark"
      />
    </>
  );
}
