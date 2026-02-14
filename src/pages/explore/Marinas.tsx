import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Ship, Ruler } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import PageHero from '../../components/PageHero';
import CTABanner from '../../components/CTABanner';
import { marinas } from '../../data/marinas';

export default function Marinas() {
  return (
    <>
      <SEOHead
        title="Marinas in Mallorca - Complete Port & Berth Guide | Boating Mallorca"
        description="Compare all major marinas in Mallorca. Berth prices, facilities, maximum lengths, and locations. Find the perfect marina for your boat. Updated 2026."
        canonical="https://boatingmallorca.ai/explore/marinas"
      />

      <PageHero
        title="Marinas & Ports in Mallorca"
        subtitle="From superyacht berths to family-friendly harbors. Compare facilities, pricing, and locations across Mallorca's 40+ marinas."
        image="https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Rows of yachts berthed in a Mallorca marina with cathedral in background"
        ctaText="Inquire About Berths"
        ctaLink="/get-matched"
      />

      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-800 mb-4">All Marinas</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Mallorca has over 40 marinas and ports, with 12,000+ berths around the coastline. Whether you need a superyacht facility with full refit services or an affordable berth for a small sailboat, there is a marina to match.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marinas.map((marina) => (
              <Link key={marina.slug} to={`/explore/marinas/${marina.slug}`} className="card overflow-hidden group flex flex-col sm:flex-row">
                <div className="sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <img
                    src={marina.image}
                    alt={marina.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-heading font-bold text-lg text-navy-800 mb-1 group-hover:text-ocean-600 transition-colors">
                    {marina.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{marina.location}</p>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="text-center">
                      <Ship className="w-4 h-4 text-ocean-400 mx-auto mb-0.5" />
                      <div className="text-xs font-medium text-navy-700">{marina.berths}</div>
                    </div>
                    <div className="text-center">
                      <Ruler className="w-4 h-4 text-ocean-400 mx-auto mb-0.5" />
                      <div className="text-xs font-medium text-navy-700">{marina.maxLength}</div>
                    </div>
                    <div className="text-center">
                      <Anchor className="w-4 h-4 text-ocean-400 mx-auto mb-0.5" />
                      <div className="text-xs font-medium text-navy-700">{marina.depth}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-ocean-500 text-sm font-medium group-hover:gap-2 transition-all">
                    View details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Help Finding a Berth?"
        subtitle="Tell us your vessel size and requirements. We match you with available berths and marina agents for free."
        buttonText="Find a Berth"
      />
    </>
  );
}
