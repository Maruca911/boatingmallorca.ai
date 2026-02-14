import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';
import CTABanner from '../components/CTABanner';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { t } = useTranslation('pages');
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: post.author },
    datePublished: post.date,
    image: post.image,
    publisher: {
      '@type': 'Organization',
      name: 'Boating Mallorca',
      url: 'https://boatingmallorca.ai',
    },
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="font-heading font-bold text-2xl text-navy-800 mt-10 mb-4">{block.replace('## ', '')}</h2>;
      }
      if (block.startsWith('**') && block.endsWith('**')) {
        return <p key={i} className="font-semibold text-navy-700 mb-3">{block.replace(/\*\*/g, '')}</p>;
      }
      if (block.startsWith('**')) {
        const parts = block.split(/\*\*/g);
        return (
          <p key={i} className="text-gray-700 leading-relaxed mb-4">
            {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-navy-700">{part}</strong> : part)}
          </p>
        );
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter((l) => l.startsWith('- '));
        return (
          <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-gray-700">
            {items.map((item, j) => <li key={j}>{item.replace('- ', '')}</li>)}
          </ul>
        );
      }
      return <p key={i} className="text-gray-700 leading-relaxed mb-4">{block}</p>;
    });
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Boating Mallorca Blog`}
        description={post.metaDescription}
        canonical={`https://boatingmallorca.ai/blog/${post.slug}`}
        schema={articleSchema}
      />

      <article>
        <div className="relative h-[40vh] lg:h-[50vh]">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container-narrow pb-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-ocean-500 text-white mb-3">{post.category}</span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container-narrow py-6 flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <Link to="/blog" className="flex items-center gap-1 text-ocean-600 hover:text-ocean-700 ml-auto">
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>
          </div>
        </div>

        <div className="bg-white section-padding">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <div className="bg-ocean-50 rounded-xl p-5 mb-8 border-l-4 border-ocean-500">
                <p className="text-sm text-navy-700 italic">{post.authorBio}</p>
              </div>

              <div className="prose-custom">
                {renderContent(post.content)}
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 section-padding">
          <div className="container-narrow">
            <h2 className="font-heading font-bold text-2xl text-navy-800 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="card overflow-hidden group flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img src={rp.image} alt={rp.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-ocean-500 uppercase tracking-wider">{rp.category}</span>
                    <h3 className="font-heading font-bold text-lg text-navy-800 mt-1 mb-2 group-hover:text-ocean-600 transition-colors">{rp.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{rp.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
