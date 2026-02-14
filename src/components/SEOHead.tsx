import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n/config';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export default function SEOHead({ title, description, canonical, schema }: SEOHeadProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', i18n.language);

    if (canonical) {
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute('href', canonical);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', canonical);
    }

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    if (canonical) {
      supportedLanguages.forEach((lang) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = canonical;
        document.head.appendChild(link);
      });

      const xDefault = document.createElement('link');
      xDefault.rel = 'alternate';
      xDefault.hreflang = 'x-default';
      xDefault.href = canonical;
      document.head.appendChild(xDefault);
    }

    if (schema) {
      const existingPageSchema = document.getElementById('page-schema');
      if (existingPageSchema) existingPageSchema.remove();

      const script = document.createElement('script');
      script.id = 'page-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        script.remove();
      };
    }
  }, [title, description, canonical, schema, i18n.language]);

  return null;
}
