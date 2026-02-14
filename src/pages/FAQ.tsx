import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { faqData } from '../data/faq';

const categories = ['All', 'General', 'Rentals', 'Charters', 'Tours', 'Mooring', 'Maintenance', 'Events', 'Safety', 'Licensing'];

export default function FAQ() {
  const { t } = useTranslation('pages');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let items = faqData;
    if (activeCategory !== 'All') {
      items = items.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={t('faq.seoTitle')}
        description={t('faq.seoDesc')}
        canonical="https://boatingmallorca.ai/faq"
        schema={faqSchema}
      />

      <PageHero
        title={t('faq.heroTitle')}
        subtitle={t('faq.heroSubtitle')}
        image="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Scenic view of boats in a Mallorca harbor"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('faq.searchPlaceholder', { defaultValue: 'Search questions...' })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-ocean-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-8">{t('faq.noResults', { defaultValue: 'No questions found matching your search.' })}</p>
            )}
            {filtered.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-medium text-navy-800 text-sm pr-4">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4 animate-fade-in">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-500">{item.category}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            {filtered.length} / {faqData.length}
          </div>
        </div>
      </section>

      <CTABanner
        title={t('faq.ctaTitle')}
        subtitle={t('faq.ctaSubtitle')}
        buttonText={t('faq.ctaButton')}
        variant="dark"
      />
    </>
  );
}
