import { Link } from 'react-router-dom';
import { ArrowRight, Users, Ship, Tag, Wrench, Anchor } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { directoryCategories, directoryEntries } from '../../data/directory';

const categoryIcons: Record<string, typeof Users> = {
  brokers: Users,
  'charter-companies': Ship,
  brands: Tag,
  'marine-services': Wrench,
  'yacht-clubs': Anchor,
};

export default function Directory() {
  return (
    <>
      <SEOHead
        title="Mallorca Boating Directory - Brokers, Charters, Services & Clubs | Boating Mallorca"
        description="Complete directory of Mallorca's boating industry. Yacht brokers, charter companies, boat brands, marine services, and yacht clubs. Find the right provider."
        canonical="https://boatingmallorca.ai/directory"
      />

      <PageHero
        title="Mallorca Boating Directory"
        subtitle="Your guide to the island's yacht brokers, charter companies, boat brands, marine services, and sailing clubs."
        image="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Luxury yachts and boats in a Mallorca marina representing the boating industry"
        ctaText="Get Matched With Providers"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directoryCategories.map((cat) => {
              const Icon = categoryIcons[cat.slug] || Anchor;
              const count = directoryEntries.filter((e) => e.category === cat.slug).length;
              return (
                <Link key={cat.slug} to={`/directory/${cat.slug}`} className="card p-6 group">
                  <div className="w-12 h-12 rounded-xl bg-ocean-50 text-ocean-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-1 group-hover:text-ocean-600 transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{count} {count === 1 ? 'guide' : 'guides'}</span>
                    <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium group-hover:gap-2 transition-all">
                      Browse <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">All Directory Pages</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            In-depth guides covering every aspect of the Mallorca boating industry, from yacht brokerage to junior sailing programs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {directoryEntries.map((entry) => (
              <Link
                key={entry.slug}
                to={`/directory/${entry.category}/${entry.slug}`}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-ocean-200 hover:shadow-sm transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-ocean-500 font-medium mb-0.5">{entry.categoryLabel}</div>
                  <h3 className="text-sm font-semibold text-navy-800 group-hover:text-ocean-600 transition-colors truncate">
                    {entry.name}
                  </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-ocean-500 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Can't Find What You Need?"
        subtitle="Our experts know every provider on the island. Tell us what you are looking for and get 3 matched recommendations."
        variant="dark"
      />
    </>
  );
}
