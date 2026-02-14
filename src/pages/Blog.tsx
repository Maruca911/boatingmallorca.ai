import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const { t } = useTranslation('pages');

  return (
    <>
      <SEOHead
        title={t('blog.seoTitle')}
        description={t('blog.seoDesc')}
        canonical="https://boatingmallorca.ai/blog"
      />

      <PageHero
        title={t('blog.heroTitle')}
        subtitle={t('blog.heroSubtitle')}
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Crystal clear turquoise waters of a Mallorca cove perfect for boating"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="card overflow-hidden group">
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-ocean-500 uppercase tracking-wider">{post.category}</span>
                  <h2 className="font-heading font-bold text-lg text-navy-800 mt-2 mb-3 group-hover:text-ocean-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner variant="dark" />
    </>
  );
}
