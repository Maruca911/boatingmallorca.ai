import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function PageHero({ title, subtitle, image, imageAlt, ctaText, ctaLink }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-navy-900/40" />
      </div>
      <div className="relative container-narrow pt-24 pb-16">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mb-6">{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="btn-primary text-base px-8 py-4 gap-2">
            {ctaText} <ArrowRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </section>
  );
}
