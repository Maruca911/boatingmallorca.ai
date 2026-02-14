import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { directoryEntries, directoryCategories } from '../../data/directory';

export default function CategoryListing() {
  const { category } = useParams<{ category: string }>();
  const cat = directoryCategories.find((c) => c.slug === category);
  const entries = directoryEntries.filter((e) => e.category === category);

  if (!cat || entries.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl text-navy-800 mb-2">Category Not Found</h1>
          <Link to="/directory" className="text-ocean-500 hover:text-ocean-700">View full directory</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${cat.label} in Mallorca | Boating Mallorca`}
        description={cat.description}
        canonical={`https://boatingmallorca.ai/directory/${cat.slug}`}
      />

      <PageHero
        title={cat.label}
        subtitle={cat.description}
        image={entries[0].image}
        imageAlt={entries[0].imageAlt}
        ctaText="Get Matched Free"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">{cat.label} Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                to={`/directory/${entry.category}/${entry.slug}`}
                className="card overflow-hidden group flex flex-col sm:flex-row"
              >
                <div className="sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={entry.image}
                    alt={entry.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-2 group-hover:text-ocean-600 transition-colors">
                    {entry.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">{entry.intro.slice(0, 160)}...</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {entry.keyFacts.slice(0, 2).map((fact) => (
                      <span key={fact.label} className="text-xs px-2 py-0.5 bg-ocean-50 text-ocean-600 rounded">
                        {fact.label}: {fact.value}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium group-hover:gap-2 transition-all">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/directory" className="btn-secondary text-sm">
              Back to Directory
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Need a ${cat.label.replace(' & ', ' or ')} Recommendation?`}
        subtitle="Our matching service is free and delivers 3 vetted options within 24 hours."
        variant="dark"
      />
    </>
  );
}
